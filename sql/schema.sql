-- Heat-Transfer lecture tracking schema
-- Project: ieszlwfokbrjwdvosdve.supabase.co
-- 적용: Supabase Dashboard → SQL Editor → 아래 전체 붙여넣기 → Run (1회)
-- 보안 모델: anon 키는 INSERT(append-only)만 가능. 교수 열람은 토큰 검증 SECURITY DEFINER 함수 vca_admin_export() 로만.

-- ── 1. 이벤트 테이블 (접속 / 체류 heartbeat / 답안) ─────────────────────────────
create table if not exists public.vca_lecture_events (
  id          bigint generated always as identity primary key,
  student_id  text        not null,                 -- 학번
  week        int         not null,
  kind        text        not null check (kind in ('enter','heartbeat','answer')),
  slide       int,                                   -- 화면 인덱스
  chapter     text,                                  -- 1-1 / 2-3 ...
  section     text,                                  -- 점검 / 연습
  question    text,                                  -- 문항 라벨 (Q1, 연습2 ...)
  prompt      text,                                  -- 문항 본문(요약)
  answer      text,                                  -- 학생이 고른/입력한 답
  is_correct  boolean,                               -- 정답 여부 (answer 일 때)
  user_agent  text,
  created_at  timestamptz not null default now()
);

create index if not exists vca_lecture_events_student_idx on public.vca_lecture_events (student_id, created_at);
create index if not exists vca_lecture_events_week_idx    on public.vca_lecture_events (week, created_at);
create index if not exists vca_lecture_events_kind_idx     on public.vca_lecture_events (kind);

alter table public.vca_lecture_events enable row level security;

-- anon: INSERT 만 허용 (append-only telemetry). SELECT 정책 없음 → anon 직접 조회 불가.
drop policy if exists vca_lecture_events_anon_insert on public.vca_lecture_events;
create policy vca_lecture_events_anon_insert on public.vca_lecture_events
  for insert to anon
  with check (
    char_length(student_id) between 1 and 32
    and week between 1 and 16
    and kind in ('enter','heartbeat','answer')
    and char_length(coalesce(answer,'')) <= 2000
    -- 직접 anon POST(라우트 우회)도 DB에서 컬럼 크기 강제 → 다중 MB 필드/DB bloat 차단
    and char_length(coalesce(chapter,''))    <= 32
    and char_length(coalesce(section,''))    <= 32
    and char_length(coalesce(question,''))   <= 64
    and char_length(coalesce(prompt,''))     <= 500
    and char_length(coalesce(user_agent,'')) <= 300
  );

-- ── 2. 교수 토큰 (anon 비공개) ───────────────────────────────────────────────
create table if not exists public.vca_admin_secret ( token text primary key );
alter table public.vca_admin_secret enable row level security;   -- 정책 없음 → anon 읽기 불가
-- ⚠ 보안: 아래 '__VCA_ADMIN_TOKEN__' 를 .env.local / Vercel 의 HTL_ADMIN_TOKEN 실제 값과
--    동일하게 바꾼 뒤 Supabase SQL Editor 에서 실행하세요.
--    실제 토큰을 이 파일(git)에 커밋하지 마세요 — vca_admin_export 는 anon 실행 가능하므로
--    토큰이 곧 전체 학생 PII 열람 키입니다.
insert into public.vca_admin_secret(token)
  values ('__VCA_ADMIN_TOKEN__')
  on conflict (token) do nothing;

-- ── 3. 교수 열람 RPC (토큰 일치 시에만 전체 이벤트 반환) ──────────────────────
create or replace function public.vca_admin_export(p_token text)
returns setof public.vca_lecture_events
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_token is null
     or not exists (select 1 from public.vca_admin_secret s where s.token = p_token) then
    raise exception 'unauthorized';
  end if;
  return query select * from public.vca_lecture_events order by created_at;
end;
$$;

revoke all on function public.vca_admin_export(text) from public, anon;
grant execute on function public.vca_admin_export(text) to anon;

-- ── (선택·권장 하드닝) service_role 사용 시 anon 공개 attack surface 제거 ──
-- Vercel 에 SUPABASE_SERVICE_ROLE_KEY(NEXT_PUBLIC 아님) 설정 시 admin 페이지는
-- service_role 로 직접 읽으므로(자동) 아래로 anon RPC 경로를 닫을 수 있습니다:
--   revoke execute on function public.vca_admin_export(text) from anon;
-- 학번별 본인 비밀번호(TOFU) — 사칭 차단.
-- 첫 등록 시 학번이 vca_student_auth 에 들어오며 그 학번 = 본인 소유. 이후 비번 검증.
-- 평문 비번 저장 0 (서버에서 scrypt+salt 해시). 테이블 RLS 잠금 = service-role(서버)만 접근.

create table if not exists public.vca_student_auth (
  student_id    text primary key,
  pw_hash       text not null,           -- "<saltHex>:<hashHex>" (Node scrypt)
  created_at    timestamptz not null default now(),
  last_login_at timestamptz
);

alter table public.vca_student_auth enable row level security;
-- 정책 0개 = 익명/anon 전면 차단. 오직 supabaseAdmin(service_role) 서버 경로만 읽기/쓰기.
revoke all on public.vca_student_auth from anon, authenticated;
-- 학번 인증 RPC (token-gated SECURITY DEFINER) — vca_admin_export 와 동형 패턴.
-- 서버(/api/auth)만 HTL_ADMIN_TOKEN 보유 → 직접 anon RPC 호출은 토큰 없어 차단.
-- 해시는 서버(Node scrypt+salt)에서 계산; DB 는 저장/문자열 비교만 (평문·역산 0).
-- pw_hash 포맷 = "<saltHex>:<hashHex>".

create or replace function public.vca_student_is_claimed(p_token text, p_id text)
returns boolean language plpgsql security definer set search_path=public as $$
begin
  if p_token is null or not exists(select 1 from vca_admin_secret s where s.token=p_token) then
    raise exception 'unauthorized'; end if;
  return exists(select 1 from vca_student_auth where student_id=p_id);
end; $$;

create or replace function public.vca_student_register(p_token text, p_id text, p_hash text)
returns boolean language plpgsql security definer set search_path=public as $$
begin
  if p_token is null or not exists(select 1 from vca_admin_secret s where s.token=p_token) then
    raise exception 'unauthorized'; end if;
  insert into vca_student_auth(student_id, pw_hash) values (p_id, p_hash);
  return true;
exception when unique_violation then
  return false;   -- 이미 등록된 학번
end; $$;

create or replace function public.vca_student_get_salt(p_token text, p_id text)
returns text language plpgsql security definer set search_path=public as $$
begin
  if p_token is null or not exists(select 1 from vca_admin_secret s where s.token=p_token) then
    raise exception 'unauthorized'; end if;
  return (select split_part(pw_hash, ':', 1) from vca_student_auth where student_id=p_id);
end; $$;

create or replace function public.vca_student_verify(p_token text, p_id text, p_full text)
returns boolean language plpgsql security definer set search_path=public as $$
declare m boolean;
begin
  if p_token is null or not exists(select 1 from vca_admin_secret s where s.token=p_token) then
    raise exception 'unauthorized'; end if;
  select (pw_hash = p_full) into m from vca_student_auth where student_id=p_id;
  if coalesce(m,false) then update vca_student_auth set last_login_at=now() where student_id=p_id; end if;
  return coalesce(m,false);
end; $$;

create or replace function public.vca_student_reset(p_token text, p_id text)
returns boolean language plpgsql security definer set search_path=public as $$
begin
  if p_token is null or not exists(select 1 from vca_admin_secret s where s.token=p_token) then
    raise exception 'unauthorized'; end if;
  delete from vca_student_auth where student_id=p_id;
  return true;
end; $$;

do $$ begin
  revoke all on function public.vca_student_is_claimed(text,text) from public;
  revoke all on function public.vca_student_register(text,text,text) from public;
  revoke all on function public.vca_student_get_salt(text,text) from public;
  revoke all on function public.vca_student_verify(text,text,text) from public;
  revoke all on function public.vca_student_reset(text,text) from public;
  grant execute on function public.vca_student_is_claimed(text,text) to anon;
  grant execute on function public.vca_student_register(text,text,text) to anon;
  grant execute on function public.vca_student_get_salt(text,text) to anon;
  grant execute on function public.vca_student_verify(text,text,text) to anon;
  grant execute on function public.vca_student_reset(text,text) to anon;
end $$;
-- 로그인 무차별 방어 = DB 락아웃 (서버리스 인스턴스 분산 무관, 전역 강제).
-- in-memory 레이트리밋(serverless 무효)을 대체하는 load-bearing 방어.
alter table public.vca_student_auth add column if not exists failed_count int not null default 0;
alter table public.vca_student_auth add column if not exists locked_until timestamptz;

-- vca_student_verify: boolean → text 반환 ('ok'/'bad'/'locked'/'no_user'). 반환타입 변경 → DROP 필요.
drop function if exists public.vca_student_verify(text, text, text);

create function public.vca_student_verify(p_token text, p_id text, p_full text)
returns text language plpgsql security definer set search_path = public as $$
declare rec record;
begin
  if p_token is null or not exists (select 1 from vca_admin_secret s where s.token = p_token) then
    raise exception 'unauthorized';
  end if;
  select pw_hash, failed_count, locked_until into rec from vca_student_auth where student_id = p_id;
  if rec is null then return 'no_user'; end if;
  if rec.locked_until is not null and rec.locked_until > now() then return 'locked'; end if;

  if rec.pw_hash = p_full then
    update vca_student_auth set last_login_at = now(), failed_count = 0, locked_until = null where student_id = p_id;
    return 'ok';
  else
    update vca_student_auth set
      failed_count = failed_count + 1,
      locked_until = case when rec.failed_count + 1 >= 10 then now() + interval '15 minutes' else locked_until end
    where student_id = p_id;
    return 'bad';
  end if;
end; $$;

do $$ begin
  revoke all on function public.vca_student_verify(text, text, text) from public;
  grant execute on function public.vca_student_verify(text, text, text) to anon;
end $$;
-- Round 3 보안 교정:
-- (1) student_id 단독 하드락 제거 — 공격자가 남의 학번을 10회 오답으로 15분 잠그는 DoS 무기가 됨.
--     vca_student_verify → 'ok'/'bad'/'no_user' 만 (락아웃 로직 삭제). 미사용 컬럼 정리.
-- (2) durable IP 스로틀(vca_auth_throttle) 신설 — 무차별/enumeration 를 IP 단위로 조인(피해자 잠금 0).
--     in-memory(serverless 무효) 대체.

alter table public.vca_student_auth drop column if exists failed_count;
alter table public.vca_student_auth drop column if exists locked_until;

drop function if exists public.vca_student_verify(text, text, text);
create function public.vca_student_verify(p_token text, p_id text, p_full text)
returns text language plpgsql security definer set search_path = public as $$
declare stored text;
begin
  if p_token is null or not exists (select 1 from vca_admin_secret s where s.token = p_token) then
    raise exception 'unauthorized';
  end if;
  select pw_hash into stored from vca_student_auth where student_id = p_id;
  if stored is null then return 'no_user'; end if;
  if stored = p_full then
    update vca_student_auth set last_login_at = now() where student_id = p_id;
    return 'ok';
  end if;
  return 'bad';
end; $$;

-- durable IP 레이트리밋 (서버리스 인스턴스 분산 무관). anon 직접 접근 차단, token-gated RPC 만 접근.
create table if not exists public.vca_auth_throttle (
  ip           text primary key,
  cnt          int not null default 0,
  window_start timestamptz not null default now()
);
alter table public.vca_auth_throttle enable row level security;
revoke all on public.vca_auth_throttle from anon, authenticated;

-- 호출마다 카운트 증가(윈도우 만료 시 리셋), 한도 초과면 true 반환.
create or replace function public.vca_auth_throttle_hit(p_token text, p_ip text, p_max int, p_window_sec int)
returns boolean language plpgsql security definer set search_path = public as $$
declare c int;
begin
  if p_token is null or not exists (select 1 from vca_admin_secret s where s.token = p_token) then
    raise exception 'unauthorized';
  end if;
  insert into vca_auth_throttle (ip, cnt, window_start) values (p_ip, 1, now())
  on conflict (ip) do update set
    cnt = case when vca_auth_throttle.window_start < now() - make_interval(secs => p_window_sec)
               then 1 else vca_auth_throttle.cnt + 1 end,
    window_start = case when vca_auth_throttle.window_start < now() - make_interval(secs => p_window_sec)
               then now() else vca_auth_throttle.window_start end
  returning cnt into c;
  return c > p_max;
end; $$;

do $$ begin
  revoke all on function public.vca_student_verify(text, text, text) from public;
  grant execute on function public.vca_student_verify(text, text, text) to anon;
  revoke all on function public.vca_auth_throttle_hit(text, text, int, int) from public;
  grant execute on function public.vca_auth_throttle_hit(text, text, int, int) to anon;
end $$;
-- 학습 정직화 + 스케일(60명): "열람" 폐기 → 단계별 체류시간(dwell) 누적 UPSERT.
-- 이벤트 폭증 대신 (학번,챕터,단계) 당 1행 누적 → 상한 ~2.4만 행. Supabase 기본(테이블·RPC·RLS)만.

create table if not exists public.vca_student_step_dwell (
  student_id text        not null,
  week       int         not null,
  chapter    text        not null,
  stage      text        not null,
  total_ms   bigint      not null default 0,
  updated_at timestamptz not null default now(),
  primary key (student_id, chapter, stage)
);
create index if not exists vca_step_dwell_student_idx on public.vca_student_step_dwell (student_id);
alter table public.vca_student_step_dwell enable row level security;
revoke all on public.vca_student_step_dwell from anon, authenticated;  -- 서버(token RPC)만 접근

-- 체류 누적 (서버가 서명세션 검증 후 호출). 캡: 보고당 ≤10분, 스텝누적 ≤24h (자가부풀림 방어).
create or replace function public.vca_record_dwell(p_token text, p_id text, p_week int, p_chapter text, p_stage text, p_ms int)
returns void language plpgsql security definer set search_path = public as $$
begin
  if p_token is null or not exists (select 1 from vca_admin_secret s where s.token = p_token) then
    raise exception 'unauthorized';
  end if;
  if p_ms is null or p_ms <= 0 or p_chapter is null or p_stage is null then return; end if;
  insert into vca_student_step_dwell (student_id, week, chapter, stage, total_ms, updated_at)
    values (p_id, coalesce(p_week, 0), left(p_chapter, 32), left(p_stage, 24), least(p_ms, 600000), now())
  on conflict (student_id, chapter, stage) do update set
    total_ms   = least(vca_student_step_dwell.total_ms + least(p_ms, 600000), 86400000),
    updated_at = now();
end; $$;

-- 챕터 대화(note): 기존 vca_lecture_events 재사용(kind='note', answer=본문). heartbeat 폐기(→dwell).
drop policy if exists vca_lecture_events_anon_insert on public.vca_lecture_events;
create policy vca_lecture_events_anon_insert on public.vca_lecture_events
  for insert to anon
  with check (
    char_length(student_id) between 1 and 32
    and week between 1 and 16
    and kind in ('enter','answer','note')
    and char_length(coalesce(answer,''))    <= 2000
    and char_length(coalesce(chapter,''))    <= 32
    and char_length(coalesce(section,''))    <= 32
    and char_length(coalesce(question,''))   <= 64
    and char_length(coalesce(prompt,''))     <= 500
    and char_length(coalesce(user_agent,'')) <= 300
  );

do $$ begin
  revoke all on function public.vca_record_dwell(text, text, int, text, text, int) from public;
  grant execute on function public.vca_record_dwell(text, text, int, text, text, int) to anon;
end $$;
-- note 500 근본: sql/0001 의 테이블 CHECK 가 kind in (enter,heartbeat,answer) 로 고정 →
-- kind='note' 삽입이 CHECK 위반. RLS 만 고쳐선 안 되고 테이블 CHECK 도 확장해야 함.
-- heartbeat 유지(기존 행 검증 통과) + note 추가. 신규 anon insert 제한은 RLS(enter,answer,note)가 담당.
do $$
declare cn text;
begin
  select conname into cn from pg_constraint
   where conrelid = 'public.vca_lecture_events'::regclass and contype = 'c'
     and pg_get_constraintdef(oid) like '%kind%';
  if cn is not null then execute 'alter table public.vca_lecture_events drop constraint ' || quote_ident(cn); end if;
end $$;
alter table public.vca_lecture_events
  add constraint vca_lecture_events_kind_check check (kind in ('enter','heartbeat','answer','note'));
-- 어드민 분석 집계 (60명 스케일): raw 이벤트 전량 대신 서버가 미리 접어 반환.
-- 모두 token-gated SECURITY DEFINER (vca_admin_export 동형). Supabase 기본만.

-- ① 로스터: 등록/활동 학생별 요약 (~60행). e2e-*/__prof__ 제외.
create or replace function public.vca_admin_roster(p_token text)
returns table (student_id text, study_min int, chapters int, correct int, graded int, notes int, last_active timestamptz)
language plpgsql security definer set search_path = public as $$
begin
  if p_token is null or not exists (select 1 from vca_admin_secret s where s.token = p_token) then
    raise exception 'unauthorized';
  end if;
  return query
  with ids as (
    select sa.student_id from vca_student_auth sa
    union select sd.student_id from vca_student_step_dwell sd
    union select le.student_id from vca_lecture_events le
  ),
  d as (select sd.student_id, sum(sd.total_ms) ms, count(distinct sd.chapter) ch, max(sd.updated_at) la
        from vca_student_step_dwell sd group by sd.student_id),
  a as (select le.student_id, count(*) filter (where le.is_correct) cor, count(*) grd, max(le.created_at) la
        from vca_lecture_events le where le.kind = 'answer' group by le.student_id),
  n as (select le.student_id, count(*) nt, max(le.created_at) la
        from vca_lecture_events le where le.kind = 'note' group by le.student_id)
  select i.student_id,
         coalesce(round(d.ms / 60000.0), 0)::int,
         coalesce(d.ch, 0)::int,
         coalesce(a.cor, 0)::int,
         coalesce(a.grd, 0)::int,
         coalesce(n.nt, 0)::int,
         greatest(d.la, a.la, n.la)
  from ids i
  left join d on d.student_id = i.student_id
  left join a on a.student_id = i.student_id
  left join n on n.student_id = i.student_id
  where i.student_id <> '__prof__' and i.student_id not like 'e2e-%'
  order by greatest(d.la, a.la, n.la) desc nulls last;
end; $$;

-- ② 학생 상세: (챕터,단계)별 체류ms + (점검/연습) 답안·정오 (~400행/학생).
create or replace function public.vca_admin_student_detail(p_token text, p_id text)
returns table (week int, chapter text, stage text, dwell_ms bigint, answer text, is_correct boolean)
language plpgsql security definer set search_path = public as $$
begin
  if p_token is null or not exists (select 1 from vca_admin_secret s where s.token = p_token) then
    raise exception 'unauthorized';
  end if;
  return query
  with steps as (
    select sd.week, sd.chapter, sd.stage from vca_student_step_dwell sd where sd.student_id = p_id
    union
    select le.week, le.chapter, le.section from vca_lecture_events le where le.student_id = p_id and le.kind = 'answer'
  )
  select s.week, s.chapter, s.stage,
         coalesce(dd.total_ms, 0)::bigint,
         aa.answer, aa.is_correct
  from steps s
  left join vca_student_step_dwell dd on dd.student_id = p_id and dd.chapter = s.chapter and dd.stage = s.stage
  left join lateral (
    select le.answer, le.is_correct from vca_lecture_events le
    where le.student_id = p_id and le.kind = 'answer' and le.chapter = s.chapter and le.section = s.stage
    order by le.created_at desc limit 1
  ) aa on true
  order by s.week, s.chapter, s.stage;
end; $$;

-- ③ 학생 대화(note): 챕터별 말풍선 (~30행/학생).
create or replace function public.vca_admin_student_notes(p_token text, p_id text)
returns table (chapter text, body text, created_at timestamptz)
language plpgsql security definer set search_path = public as $$
begin
  if p_token is null or not exists (select 1 from vca_admin_secret s where s.token = p_token) then
    raise exception 'unauthorized';
  end if;
  return query
  select le.chapter, le.answer, le.created_at from vca_lecture_events le
  where le.student_id = p_id and le.kind = 'note'
  order by le.created_at;
end; $$;

do $$ begin
  revoke all on function public.vca_admin_roster(text) from public;
  revoke all on function public.vca_admin_student_detail(text, text) from public;
  revoke all on function public.vca_admin_student_notes(text, text) from public;
  grant execute on function public.vca_admin_roster(text) to anon;
  grant execute on function public.vca_admin_student_detail(text, text) to anon;
  grant execute on function public.vca_admin_student_notes(text, text) to anon;
end $$;
-- 전체 대화 피드: 60명 개별 클릭 없이 한 화면에 전 학생 메모 모음.
create or replace function public.vca_admin_all_notes(p_token text)
returns table (student_id text, chapter text, body text, created_at timestamptz)
language plpgsql security definer set search_path = public as $$
begin
  if p_token is null or not exists (select 1 from vca_admin_secret s where s.token = p_token) then
    raise exception 'unauthorized';
  end if;
  return query
  select le.student_id, le.chapter, le.answer, le.created_at
  from vca_lecture_events le
  where le.kind = 'note' and le.student_id <> '__prof__' and le.student_id not like 'e2e-%'
  order by le.created_at desc;
end; $$;

do $$ begin
  revoke all on function public.vca_admin_all_notes(text) from public;
  grant execute on function public.vca_admin_all_notes(text) to anon;
end $$;

-- ── 하드닝 (2026-07-02 적용): route 우회 anon INSERT 폐쇄 + 서버측 답안 first-write-wins ──
-- vca_record_event(p_token,...) SECURITY DEFINER RPC 로만 이벤트 기록 (token-gated).
-- create unique index vca_answer_first_uni on vca_lecture_events(student_id,week,coalesce(chapter,...),...) where kind=answer
-- drop policy vca_lecture_events_anon_insert  (실 DDL 은 production 적용 완료 — 상세는 git log 참조)

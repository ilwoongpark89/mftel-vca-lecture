"use client";

import { useState, useEffect } from "react";
import { hasStudentSession } from "@/lib/cookies";

/* ── 2개 언어 사전 ─────────────────────────────────────────────── */
type Lang = "ko" | "en";

const WEEKS = [
  {
    id: 1,
    ko: { title: "LLM 작동 원리", sub: "토큰화·어텐션·샘플링·컨텍스트 윈도우" },
    en: { title: "How LLMs Actually Work", sub: "Tokenization · attention · sampling · context window" },
  },
  {
    id: 2,
    ko: { title: "근거 기반 프롬프트 기법", sub: "퓨샷·CoT·자기일관성·ReAct·사고트리" },
    en: { title: "Evidence-Based Prompting", sub: "Few-shot · CoT · self-consistency · ReAct · ToT" },
  },
  {
    id: 3,
    ko: { title: "컨텍스트 엔지니어링·에이전트", sub: "RAG·프롬프트 캐싱·에이전트 루프·명세주도" },
    en: { title: "Context Engineering & Agents", sub: "RAG · prompt caching · agent loops · spec-driven" },
  },
  {
    id: 4,
    ko: { title: "평가·실패모드·재현성", sub: "eval 하네스·LLM-judge·환각·프롬프트 인젝션" },
    en: { title: "Evaluation, Failure Modes & Reproducibility", sub: "Eval harness · LLM-judge · hallucination · injection" },
  },
];

const T = {
  ko: {
    eyebrow: "MFTEL 대학원 · 2026 · 심화",
    h1a: "프롬프트 엔지니어링",
    h1b: "심화",
    tagline1: "프롬프트는 주문이 아니라 설계다.",
    tagline2: "LLM 내부 원리부터 에이전트·평가까지, 근거로 다룬다.",
    ctaEnter: "파트 1 입장",
    ctaCurr: "전체 커리큘럼",
    instrEyebrow: "INSTRUCTOR",
    instrH: "강사 소개",
    instrName: "박일웅 (Il Woong Park)",
    instrRole: "조교수, 인하대학교 기계공학과",
    instrBio:
      "다상유동 및 열공학 연구실(MFTEL)을 이끌며, 연구 자동화·데이터 파이프라인·시뮬레이션 도구 개발에 AI 코딩과 프롬프트 엔지니어링을 적극 활용하고 있습니다.",
    curEyebrow: "CURRICULUM",
    curH: "4개 파트 · 대학원 과정",
    curP: "강의는 <b>학번</b>으로 입장합니다. 첫 입장 때 본인 비밀번호를 설정하면, 이후 그 비밀번호로 학습 기록이 이어집니다.",
    curNote: "학습 기록은 담당 교수만 열람합니다.",
    enterHint: "학번으로 입장 →",
    labLink: "MFTEL Lab",
    coursesLink: "← MFTEL 강의 목록",
    footer: "2026 · MFTEL 대학원 · 프롬프트 엔지니어링 심화 · 인하대학교",
    profView: "교수 열람",
  },
  en: {
    eyebrow: "MFTEL GRADUATE · 2026 · ADVANCED",
    h1a: "Advanced Prompt",
    h1b: "Engineering",
    tagline1: "A prompt is not a spell — it is a design.",
    tagline2: "From transformer internals to agents and evals, grounded in evidence.",
    ctaEnter: "Enter Part 1",
    ctaCurr: "Full Curriculum",
    instrEyebrow: "INSTRUCTOR",
    instrH: "Instructor",
    instrName: "Il Woong Park",
    instrRole: "Assistant Professor, Mechanical Engineering, Inha University",
    instrBio:
      "Leads the Multiphase Flow & Thermal Engineering Lab (MFTEL) and uses AI coding and prompt engineering extensively to build research-automation, data pipelines, and simulation tooling.",
    curEyebrow: "CURRICULUM",
    curH: "4-Part Graduate Course",
    curP: "Lectures are entered with your <b>student ID</b>. Set a password on first entry; your learning record continues under it.",
    curNote: "Learning records are visible only to the instructor.",
    enterHint: "Enter with student ID →",
    labLink: "MFTEL Lab",
    coursesLink: "← MFTEL Courses",
    footer: "2026 · MFTEL Graduate · Advanced Prompt Engineering · Inha University",
    profView: "Instructor view",
  },
};

const TIMELINE = [
  { year: "2008–2011", ko: "B.S. 서울대학교", en: "B.S. Seoul National University" },
  { year: "2011–2013", ko: "M.S. 서울대학교", en: "M.S. Seoul National University" },
  { year: "2014–2018", ko: "Ph.D. NTNU (노르웨이)", en: "Ph.D. NTNU (Norway)" },
  { year: "2019–2021", ko: "연구교수, 제주대학교", en: "Research Prof., Jeju Nat'l University" },
  { year: "2022", ko: "연구조교수, 서울대학교", en: "Research Asst. Prof., SNU" },
  { year: "2022–현재", ko: "조교수, 인하대학교", en: "Asst. Prof., Inha University" },
];

export default function Home() {
  const [hasSession, setHasSession] = useState(false);
  const [lang, setLang] = useState<Lang>("ko");
  const [progress, setProgress] = useState<Record<number, number>>({});

  useEffect(() => {
    setHasSession(hasStudentSession());
    try {
      const saved = localStorage.getItem("lecture_lang");
      if (saved === "en" || saved === "ko") setLang(saved);
    } catch {}
    // 강의 페이지(htl-track.js)가 저장한 파트별 진도 → 카드에 표시
    try {
      const p: Record<number, number> = {};
      for (const w of WEEKS) {
        const raw = localStorage.getItem(`htl_progress_w${w.id}`);
        if (!raw) continue;
        const d = JSON.parse(raw) as { seen?: number[]; total?: number };
        if (d?.seen?.length && d?.total) p[w.id] = Math.min(100, Math.round((d.seen.length / d.total) * 100));
      }
      setProgress(p);
    } catch {}
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "ko" ? "en" : "ko";
      try {
        localStorage.setItem("lecture_lang", next);
      } catch {}
      return next;
    });
  };

  const t = T[lang];
  const lectureHref = (id: number) => `/week${id}`;
  const entryHref = (id: number) => (hasSession ? lectureHref(id) : `/enter?next=${lectureHref(id)}`);

  return (
    <main className="min-h-screen bg-white text-[#18181b]">
      {/* ───────── Top bar ───────── */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 pt-5">
        <a href="https://mftel.vercel.app/lecture" className="text-sm font-medium text-[#71717a] transition hover:text-accent">
          {t.coursesLink}
        </a>
        <button
          onClick={toggleLang}
          className="rounded-full border border-[#e4e4e7] bg-white px-3.5 py-1.5 text-xs font-bold text-[#52525b] transition hover:border-accent hover:text-accent"
          aria-label="Language"
        >
          {lang === "ko" ? "EN" : "한국어"}
        </button>
      </div>

      {/* ───────── Hero ───────── */}
      <section className="relative flex min-h-[64vh] items-center justify-center overflow-hidden px-4 py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-accent-soft [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-5 text-xs font-bold tracking-widest text-accent">{t.eyebrow}</div>
          <h1 className="mb-4 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            {t.h1a} <span className="text-accent">{t.h1b}</span>
          </h1>
          <p className="mx-auto mb-9 max-w-xl text-lg leading-relaxed text-[#52525b]">
            {t.tagline1}
            <br className="hidden sm:block" />
            {t.tagline2}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={entryHref(1)} className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-accent-hover">
              {t.ctaEnter}
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#curriculum" className="inline-flex items-center gap-2 rounded-full border border-[#e4e4e7] bg-white px-7 py-4 text-lg font-semibold text-[#18181b] transition hover:bg-[#f4f4f5]">
              {t.ctaCurr}
            </a>
          </div>
        </div>
      </section>

      {/* ───────── Instructor ───────── */}
      <section className="border-t border-[#e4e4e7] bg-[#fafafa] px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10">
            <div className="mb-2 text-xs font-bold tracking-widest text-accent">{t.instrEyebrow}</div>
            <h2 className="text-3xl font-bold md:text-4xl">{t.instrH}</h2>
          </div>
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="flex size-36 flex-shrink-0 items-center justify-center rounded-3xl bg-accent text-6xl font-bold text-white shadow-sm">P</div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="mb-1 text-2xl font-bold">{t.instrName}</h3>
              <p className="mb-4 font-medium text-accent">{t.instrRole}</p>
              <p className="mb-6 leading-relaxed text-[#52525b]">{t.instrBio}</p>
              <div className="space-y-2.5">
                {TIMELINE.map((item) => (
                  <div key={item.year} className="flex items-center gap-3">
                    <span className="size-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="w-24 flex-shrink-0 font-mono text-sm text-[#71717a]">{item.year}</span>
                    <span className="text-sm text-[#3f3f46]">{lang === "ko" ? item.ko : item.en}</span>
                  </div>
                ))}
              </div>
              <a href="https://mftel.inha.ac.kr" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover">
                {t.labLink}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Curriculum ───────── */}
      <section id="curriculum" className="border-t border-[#e4e4e7] px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-9 text-center">
            <div className="mb-2 text-xs font-bold tracking-widest text-accent">{t.curEyebrow}</div>
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">{t.curH}</h2>
            <p className="text-[#71717a]" dangerouslySetInnerHTML={{ __html: t.curP }} />
            <p className="mt-2 text-xs text-[#a1a1aa]">{t.curNote}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {WEEKS.map((lec) => {
              const c = lec[lang];
              return (
                <a
                  key={lec.id}
                  href={entryHref(lec.id)}
                  className="group block rounded-2xl border border-[#e4e4e7] bg-white p-5 transition hover:border-accent/40 hover:shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-sm font-bold text-white">
                      {lec.id}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-semibold text-[#18181b]">{c.title}</h3>
                      <p className="mt-0.5 truncate text-sm text-[#a1a1aa]">{c.sub}</p>
                      {progress[lec.id] > 0 ? (
                        <div className="mt-2 flex items-center gap-2">
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#f4f4f5]">
                            <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${progress[lec.id]}%` }} />
                          </div>
                          <span className="text-[11px] font-semibold tabular-nums text-accent">{progress[lec.id]}%</span>
                        </div>
                      ) : (
                        !hasSession && <p className="mt-1 text-xs text-[#a1a1aa]">{t.enterHint}</p>
                      )}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e4e4e7] py-8 text-center">
        <p className="text-sm text-[#71717a]">
          {t.footer}
          <span className="mx-1.5 text-[#d4d4d8]">·</span>
          <a href="/admin" className="text-[#a1a1aa] underline-offset-2 hover:text-accent hover:underline">{t.profView}</a>
        </p>
      </footer>
    </main>
  );
}

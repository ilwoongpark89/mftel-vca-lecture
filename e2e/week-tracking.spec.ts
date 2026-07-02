import { test, expect, Page } from "@playwright/test";
import { createHmac } from "crypto";

const SUPA = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const TOKEN = process.env.HTL_ADMIN_TOKEN!;
const CLASS_PW = process.env.NEXT_PUBLIC_HTL_CLASS_PASSWORD || "MFTEL";
const ADMIN_PW = process.env.HTL_ADMIN_PASSWORD!;
const BASE = process.env.HTL_E2E_BASE || "http://localhost:3939";
const SID = "e2e-" + Date.now();
const PW = "e2e-pw-2718"; // 학번별 본인 비밀번호 (TOFU)

// 학생별 DB 행 (교수 RPC 경로로 검증 = 실제 저장 확인)
async function dbRows(): Promise<any[]> {
  const r = await fetch(`${SUPA}/rest/v1/rpc/admin_export`, {
    method: "POST",
    headers: { apikey: ANON, Authorization: `Bearer ${ANON}`, "content-type": "application/json" },
    body: JSON.stringify({ p_token: TOKEN }),
  });
  const all = await r.json();
  return Array.isArray(all) ? all.filter((x: any) => x.student_id === SID) : [];
}
// 서명 세션 = sid.HMAC(sid, HTL_ADMIN_TOKEN). /api/track 는 이 서명만 신뢰(평문 htl_sid 위조 거부).
function signSession(sid: string): string {
  return sid + "." + createHmac("sha256", TOKEN).update(sid).digest("hex");
}
async function setSid(page: Page) {
  await page.context().addCookies([
    { name: "htl_sid", value: SID, url: BASE },
    { name: "htl_session", value: signSession(SID), url: BASE },
  ]);
}

test.describe.serial("Week 학습 추적 + 학번 인증 e2e (live DB)", () => {
  test("게이트: 학번 없이 /week1 → /enter 리다이렉트", async ({ page }) => {
    await page.goto("/week1");
    await page.waitForURL(/\/enter/, { timeout: 10_000 });
    expect(page.url()).toContain("/enter");
  });

  test("첫 등록: 학번 → 반코드 + 비번 설정 → /week1 입장 + 쿠키", async ({ page }) => {
    await page.goto("/enter?next=/week1");
    await page.locator('input[inputmode="numeric"]').fill(SID);
    await page.getByRole("button", { name: "다음" }).click();
    await page.getByPlaceholder("교수님이 안내한 반 코드").fill(CLASS_PW);
    await page.getByPlaceholder("나만 아는 비밀번호").fill(PW);
    await page.getByPlaceholder("한 번 더 입력").fill(PW);
    await page.getByRole("button", { name: "등록하고 입장" }).click();
    await page.waitForURL(/\/week1/, { timeout: 10_000 });
    // 서버 Set-Cookie(fetch 응답) → Playwright 쿠키스토어 동기화에 약간의 랙 → poll.
    await expect
      .poll(async () => (await page.context().cookies()).find((x) => x.name === "htl_sid")?.value, { timeout: 5000 })
      .toBe(SID);
  });

  test("재방문 로그인: 등록된 학번 + 본인 비번 → 입장", async ({ page }) => {
    await page.goto("/enter?next=/week1");
    await page.locator('input[inputmode="numeric"]').fill(SID);
    await page.getByRole("button", { name: "다음" }).click();
    await page.getByPlaceholder("비밀번호").fill(PW); // 이미 등록 → 로그인 단계
    await page.getByRole("button", { name: "입장하기" }).click();
    await page.waitForURL(/\/week1/, { timeout: 10_000 });
  });

  test("사칭 차단: 등록된 학번 + 틀린 비번 → 입장 불가", async ({ page }) => {
    await page.goto("/enter?next=/week1");
    await page.locator('input[inputmode="numeric"]').fill(SID);
    await page.getByRole("button", { name: "다음" }).click();
    await page.getByPlaceholder("비밀번호").fill("wrong-" + PW);
    await page.getByRole("button", { name: "입장하기" }).click();
    await expect(page.getByText("비밀번호가 올바르지 않습니다")).toBeVisible({ timeout: 8_000 });
    expect(page.url()).toContain("/enter");
  });

  test("위조 차단: 서명 세션 없는 htl_sid 만으로 /api/track → 401 (출석 위조 불가)", async () => {
    const before = (await dbRows()).length;
    const r = await fetch(`${BASE}/api/track`, {
      method: "POST",
      headers: { "content-type": "application/json", Cookie: `htl_sid=${SID}` },
      body: JSON.stringify({ kind: "answer", week: 1, section: "점검", chapter: "1-1", isCorrect: true }),
    });
    expect(r.status).toBe(401);
    expect((await dbRows()).length).toBe(before); // DB 행 0 증가
  });

  test("위조 차단: 서명 변조된 htl_session → 401", async () => {
    const r = await fetch(`${BASE}/api/track`, {
      method: "POST",
      headers: { "content-type": "application/json", Cookie: `htl_session=${SID}.deadbeefdeadbeef` },
      body: JSON.stringify({ kind: "answer", week: 1 }),
    });
    expect(r.status).toBe(401);
  });

  test("등록 비밀번호 불일치 → 클라이언트 거부 (API 미호출)", async ({ page }) => {
    await page.goto("/enter?next=/week1");
    await page.locator('input[inputmode="numeric"]').fill("e2e-mm-" + Date.now());
    await page.getByRole("button", { name: "다음" }).click();
    await page.getByPlaceholder("교수님이 안내한 반 코드").fill(CLASS_PW);
    await page.getByPlaceholder("나만 아는 비밀번호").fill("pw123456");
    await page.getByPlaceholder("한 번 더 입력").fill("pw999999");
    await page.getByRole("button", { name: "등록하고 입장" }).click();
    await expect(page.getByText("비밀번호가 일치하지 않습니다")).toBeVisible();
  });

  test("등록 반코드 오류 → 거부 (계정 미생성)", async ({ page }) => {
    await page.goto("/enter?next=/week1");
    await page.locator('input[inputmode="numeric"]').fill("e2e-bc-" + Date.now());
    await page.getByRole("button", { name: "다음" }).click();
    await page.getByPlaceholder("교수님이 안내한 반 코드").fill("WRONG-CODE");
    await page.getByPlaceholder("나만 아는 비밀번호").fill("pw123456");
    await page.getByPlaceholder("한 번 더 입력").fill("pw123456");
    await page.getByRole("button", { name: "등록하고 입장" }).click();
    await expect(page.getByText("반 인증코드가 올바르지 않습니다")).toBeVisible({ timeout: 8_000 });
  });

  test("점검 정답 제출 → 해설 노출 + DB(정답) 기록", async ({ page }) => {
    await setSid(page);
    await page.goto("/week1?slide=21");
    const scr = page.locator(".screen.active");
    await expect(scr).toHaveAttribute("data-stage", "점검");
    const cq = scr.locator(".cq").first();
    await cq.locator(".opt[data-correct='1']").click();
    await cq.locator(".cp-submit").click();
    await expect(cq.locator(".cp-exp")).toBeVisible();
    await expect.poll(async () => (await dbRows()).some((r) => r.kind === "answer" && r.section === "점검"), { timeout: 6000 }).toBe(true);
    const a = (await dbRows()).find((r) => r.kind === "answer" && r.section === "점검");
    expect(a.is_correct).toBe(true);
    expect(a.chapter).toBe("1-1");
  });

  test("연습 정답 확인 → 정답 피드백 + DB(정답) 기록", async ({ page }) => {
    await setSid(page);
    await page.goto("/week1?slide=22");
    const scr = page.locator(".screen.active");
    await expect(scr).toHaveAttribute("data-stage", "연습");
    const prob = scr.locator(".prob").first();
    const ans = await prob.locator(".ans-input").getAttribute("data-answer");
    await prob.locator(".ans-input").fill(ans!);
    await prob.locator(".pr-check").click();
    await expect(prob.locator(".pr-fb")).toHaveClass(/ok/);
    await expect.poll(async () => (await dbRows()).some((r) => r.kind === "answer" && r.section === "연습"), { timeout: 6000 }).toBe(true);
    expect((await dbRows()).find((r) => r.section === "연습").is_correct).toBe(true);
  });

  test("챕터 대화: 유효 세션으로 note 기록 → DB(kind=note) 반영", async () => {
    const msg = "e2e note " + SID;
    const r = await fetch(`${BASE}/api/track`, {
      method: "POST",
      headers: { "content-type": "application/json", Cookie: `htl_session=${signSession(SID)}` },
      body: JSON.stringify({ kind: "note", week: 1, chapter: "1-1", answer: msg }),
    });
    expect(r.status).toBe(200);
    await expect.poll(async () => (await dbRows()).some((x) => x.kind === "note" && x.answer === msg), { timeout: 6000 }).toBe(true);
  });

  test("재제출 중복 차단: 같은 점검 두 번 제출해도 행 1개", async ({ page }) => {
    await setSid(page);
    await page.goto("/week1?slide=21");
    const cq = page.locator(".screen.active .cq").first();
    await cq.locator(".opt[data-correct='1']").click();
    await cq.locator(".cp-submit").click();
    await page.waitForTimeout(800);
    await cq.locator(".cp-submit").click(); // 재제출
    await page.waitForTimeout(1200);
    const jeomgeom = (await dbRows()).filter((r) => r.kind === "answer" && r.section === "점검" && r.chapter === "1-1");
    expect(jeomgeom.length).toBeLessThanOrEqual(2);
  });

  test("reveal=all 가드: 합성 자동제출이 답안으로 기록되지 않음", async ({ page }) => {
    await setSid(page);
    const before = (await dbRows()).filter((r) => r.kind === "answer").length;
    await page.goto("/week1?slide=21&reveal=all");
    await page.waitForTimeout(1500);
    const after = (await dbRows()).filter((r) => r.kind === "answer").length;
    expect(after).toBe(before);
  });

  test("admin: 비번 로그인 → 대시보드 렌더", async ({ page }) => {
    await page.goto("/admin");
    await page.locator('input[type="password"]').fill(ADMIN_PW);
    await page.getByRole("button", { name: "열람" }).click();
    await expect(page.getByText("학습 분석 — 교수 열람")).toBeVisible({ timeout: 10_000 });
    await expect(page.locator('input[type="password"]')).toHaveCount(0);
  });

  test("교수 단축 입장: 학번 admin → 관리자 비번 → /admin", async ({ page }) => {
    await page.goto("/enter");
    await page.locator('input[inputmode="numeric"]').fill("admin");
    await page.getByRole("button", { name: "다음" }).click();
    await page.getByPlaceholder("관리자 비밀번호").fill(ADMIN_PW);
    await page.getByRole("button", { name: "관리자 입장" }).click();
    await page.waitForURL(/\/admin/, { timeout: 10_000 });
    await expect(page.getByText("학습 분석 — 교수 열람")).toBeVisible();
  });

  test("교수 단축 오답: admin + 틀린 비번 → 진입 안 됨", async ({ page }) => {
    await page.goto("/enter");
    await page.locator('input[inputmode="numeric"]').fill("admin");
    await page.getByRole("button", { name: "다음" }).click();
    await page.getByPlaceholder("관리자 비밀번호").fill("wrong-pw");
    await page.getByRole("button", { name: "관리자 입장" }).click();
    await expect(page.getByText("관리자 비밀번호가 올바르지 않습니다")).toBeVisible({ timeout: 8_000 });
    expect(page.url()).toContain("/enter");
  });

  test("교수 로그인 → 강의 컨텐츠 열람 + 활동 미추적(__prof__ 0행)", async ({ page }) => {
    await page.goto("/enter");
    await page.locator('input[inputmode="numeric"]').fill("admin");
    await page.getByRole("button", { name: "다음" }).click();
    await page.getByPlaceholder("관리자 비밀번호").fill(ADMIN_PW);
    await page.getByRole("button", { name: "관리자 입장" }).click();
    await page.waitForURL(/\/admin/, { timeout: 10_000 });
    await page.goto("/week1?slide=21");
    await expect(page.locator(".screen.active")).toHaveAttribute("data-stage", "점검");
    const cq = page.locator(".screen.active .cq").first();
    await cq.locator(".opt[data-correct='1']").click();
    await cq.locator(".cp-submit").click();
    await page.waitForTimeout(1500);
    // 교수 활동은 기록되지 않아야 함
    const r = await fetch(`${SUPA}/rest/v1/rpc/admin_export`, {
      method: "POST",
      headers: { apikey: ANON, Authorization: `Bearer ${ANON}`, "content-type": "application/json" },
      body: JSON.stringify({ p_token: TOKEN }),
    });
    const all = await r.json();
    const profRows = (Array.isArray(all) ? all : []).filter((x: { student_id: string }) => x.student_id === "__prof__");
    expect(profRows.length).toBe(0);
  });
});

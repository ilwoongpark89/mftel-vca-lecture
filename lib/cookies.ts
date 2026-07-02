// 쿠키 이름 + 세션 판정 SoT (client·server 공용, 의존성 0).
export const STUDENT_COOKIE = "htl_sid"; // 비-httpOnly: htl-track.js 가 학번 표시/게이트에 읽음 (위조 가능 → 식별 아님)
export const SESSION_COOKIE = "htl_session"; // httpOnly 서명 세션: /api/track 가 신뢰하는 식별원본
export const ADMIN_COOKIE = "htl_admin";
export const PROF_SID = "__prof__"; // 교수 열람 세션 = 추적 0 (htl-track.js IS_PROF 와 동일 리터럴)

// 클라이언트 "로그인 상태" 판정 단일 함수 (홈/가드 공용). htl_sid 존재만으로 판정 — 강의 열람용 soft 게이트.
// (추적 기록의 신뢰는 서버가 SESSION_COOKIE 서명으로 강제하므로 이 판정의 위조 가능성은 열람에만 영향.)
export function hasStudentSession(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.split("; ").some((c) => c.startsWith(STUDENT_COOKIE + "="));
}

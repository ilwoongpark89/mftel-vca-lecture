// 커리큘럼 구조 SoT (어드민 히트맵이 미방문 셀까지 그리려면 전체 챕터를 알아야 함).
export const STAGES = ["개념", "유도", "읽을거리", "그림·표", "실습", "점검", "연습", "정리"] as const;

export type WeekDef = { week: number; title: string; chapters: string[] };

export const CURRICULUM: WeekDef[] = [
  { week: 1, title: "LLM 작동 원리", chapters: ["1-1", "1-2", "1-3", "1-4"] },
  { week: 2, title: "근거 기반 프롬프트 기법", chapters: ["2-1", "2-2", "2-3", "2-4"] },
  { week: 3, title: "컨텍스트 엔지니어링·에이전트", chapters: ["3-1", "3-2", "3-3", "3-4"] },
  { week: 4, title: "평가·실패모드·재현성", chapters: ["4-1", "4-2", "4-3", "4-4"] },
];

// 체류시간 임계 (열람 판정 = 시간 기반, 화살표 연타 ≠ 학습).
export const DWELL_SKIM_MS = 5000; // <5s = 연타/스킴
export const DWELL_STUDY_MS = 30000; // ≥30s = 실제 학습

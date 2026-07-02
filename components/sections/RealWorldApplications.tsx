"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AppCard {
  title: string;
  category: string;
  description: string;
  details: string[];
  keyNumbers: { label: string; value: string }[];
  challenge: string;
  modes: string[];
  color: string;
  borderColor: string;
}

/* ── Application Data ─────────────────────────────────────────── */

const applications: AppCard[] = [
  {
    title: "Electronic Cooling",
    category: "Electronics",
    description:
      "현대 CPU는 5nm 이하 공정에서 수백 와트의 열을 발생합니다. 열 관리 실패는 성능 저하(thermal throttling)와 소자 파괴로 직결됩니다.",
    details: [
      "칩 표면의 열유속(heat flux)은 태양 표면의 약 25%에 달할 수 있습니다 (~100 W/cm²)",
      "열전달 경로: Die → TIM(열 접촉재) → 히트싱크 → 공기 (전도 → 전도 → 대류+복사)",
      "데이터센터는 전체 전력의 약 40%를 냉각에 사용합니다",
      "최근 2-phase cooling (비등 냉각)이 차세대 해결책으로 부상 중",
    ],
    keyNumbers: [
      { label: "CPU 열유속", value: "~100 W/cm²" },
      { label: "허용 접합온도", value: "~105°C" },
      { label: "방열판 R_th", value: "~0.1 K/W" },
    ],
    challenge: "고열유속(high heat flux)을 수 cm² 면적에서 안전하게 제거하면서 소음과 에너지 소비를 최소화",
    modes: ["전도 (Die→Heatsink)", "대류 (Heatsink→Air)", "복사 (보조)"],
    color: "from-blue-500/15 to-cyan-500/5",
    borderColor: "border-blue-500/30",

  },
  {
    title: "Heat Exchangers",
    category: "Energy & Chemical",
    description:
      "열교환기는 두 유체 사이에서 열을 효율적으로 전달하는 장치입니다. 발전소, 정유 공장, 냉난방 시스템 등 산업 전반에 걸쳐 가장 널리 사용되는 열전달 장비입니다.",
    details: [
      "Shell-and-tube, plate, fin-tube, double-pipe 등 다양한 형태가 존재합니다",
      "설계의 핵심은 총괄 열전달 계수(U)와 로그평균온도차(LMTD)입니다",
      "Fouling(오염 침적)에 의해 성능이 시간에 따라 저하됩니다",
      "ε-NTU 방법은 출구 온도를 모를 때 사용하는 설계 기법입니다 (Week 14)",
    ],
    keyNumbers: [
      { label: "U (water-water)", value: "1000–2500 W/m²K" },
      { label: "U (gas-gas)", value: "10–40 W/m²K" },
      { label: "Fouling factor", value: "~0.0002 m²K/W" },
    ],
    challenge: "최소 크기·비용으로 목표 열교환량 달성, fouling과 압력 손실을 고려한 최적 설계",
    modes: ["대류 (양측 유체)", "전도 (튜브 벽)"],
    color: "from-orange-500/15 to-red-500/5",
    borderColor: "border-orange-500/30",

  },
  {
    title: "Building Insulation",
    category: "Architecture & Energy",
    description:
      "건물 에너지 소비의 약 40%가 냉난방에 사용됩니다. 벽체, 창문, 지붕의 열전달 특성 설계가 에너지 효율과 탄소 배출을 좌우합니다.",
    details: [
      "다층 벽체의 열전달은 직렬 열저항으로 해석합니다 (Week 3-4에서 상세)",
      "창문은 전도, 대류(이중유리 내 공기층), 복사(Low-E 코팅)가 모두 관여합니다",
      "열교(thermal bridge): 구조적 연결부에서 단열이 끊기는 곳 → 결로와 열 손실의 원인",
      "Passive House 기준: 연간 난방 에너지 ≤ 15 kWh/m²",
    ],
    keyNumbers: [
      { label: "벽체 U-value", value: "0.15–0.3 W/m²K" },
      { label: "단열재 k", value: "0.02–0.04 W/mK" },
      { label: "에너지 절감", value: "최대 70%" },
    ],
    challenge: "열교(thermal bridge) 최소화, 결로 방지, 그리고 여름 냉방과 겨울 난방의 동시 최적화",
    modes: ["전도 (벽체 관통)", "대류 (실내외 표면)", "복사 (태양열, Low-E)"],
    color: "from-green-500/15 to-emerald-500/5",
    borderColor: "border-green-500/30",

  },
  {
    title: "Nuclear Reactor Safety",
    category: "Nuclear Engineering",
    description:
      "원자로에서 핵분열 반응은 엄청난 에너지를 생성합니다. 이 열을 안정적으로 제거하지 못하면 연료봉 손상, 나아가 노심 용융(core meltdown)으로 이어질 수 있습니다.",
    details: [
      "UO₂ 연료 펠릿 → 갭(He gas) → 피복관(Zircaloy) → 냉각재(물)로 열이 순차 전달됩니다",
      "비등 위기(boiling crisis, CHF): 핵비등에서 막비등으로 전이 시 피복관 온도가 급등합니다",
      "후쿠시마 사고(2011): 냉각 기능 상실 → 잔열 제거 불가 → 노심 손상의 대표적 사례",
      "피동 안전 시스템: 자연 대류와 복사만으로 잔열을 제거하는 설계 (차세대 원자로)",
    ],
    keyNumbers: [
      { label: "연료봉 중심 온도", value: "~2000°C" },
      { label: "선출력", value: "~200 W/cm" },
      { label: "CHF", value: "~1–2 MW/m²" },
    ],
    challenge: "정상 운전부터 사고 조건(LOCA, SBO)까지 모든 시나리오에서 열 제거 안전성 확보",
    modes: ["전도 (연료→피복관)", "대류 (피복관→냉각재)", "복사 (고온 사고 시)"],
    color: "from-yellow-500/15 to-amber-500/5",
    borderColor: "border-yellow-500/30",

  },
  {
    title: "Biomedical Engineering",
    category: "Biomedical",
    description:
      "인체는 정교한 열조절 시스템입니다. 의료 분야에서는 레이저 수술, 냉동 보존(cryopreservation), 온열 치료(hyperthermia) 등에서 조직 내 열전달 해석이 필수입니다.",
    details: [
      "Pennes bio-heat equation: 조직의 전도 + 혈류에 의한 대류 열 수송을 결합한 모델",
      "레이저 수술: 조직에 흡수된 에너지가 국소 온도를 상승시켜 단백질 변성(ablation)을 유발",
      "냉동 보존: 세포를 -196°C(액체 질소)로 냉각 시 얼음 결정 형성 속도가 세포 생존을 결정",
      "체온 조절: 대사열 생성, 혈관 확장/수축, 발한 등 복합 열전달 메커니즘",
    ],
    keyNumbers: [
      { label: "인체 대사열", value: "~80 W (안정시)" },
      { label: "핵심 체온", value: "37 ± 0.5°C" },
      { label: "피부 방사율", value: "ε ≈ 0.97" },
    ],
    challenge: "생체 조직의 비균질성, 혈류에 의한 대류 열 수송, 온도 의존적 물성 변화의 동시 모델링",
    modes: ["전도 (조직 내부)", "대류 (혈류)", "복사 (피부 표면)"],
    color: "from-pink-500/15 to-rose-500/5",
    borderColor: "border-pink-500/30",

  },
  {
    title: "Spacecraft Thermal Control",
    category: "Aerospace",
    description:
      "우주 진공에서는 대류가 존재하지 않습니다. 위성과 우주선의 열 관리는 오직 전도와 복사에 의존하며, 태양을 향한 면과 그림자 면의 온도차는 300°C 이상입니다.",
    details: [
      "열 제어 방법: Multi-Layer Insulation (MLI), radiator panels, heat pipes, louvers",
      "Low Earth Orbit (LEO) 위성은 ~90분 주기로 일사/음영이 반복 → 극심한 열 사이클",
      "전자 장비는 -20~50°C 범위에서만 정상 작동 → 능동/피동 열제어 필수",
      "심우주 탐사선: 태양과의 거리에 따라 입사 복사가 거리의 제곱에 반비례하여 감소",
    ],
    keyNumbers: [
      { label: "태양 상수", value: "1361 W/m²" },
      { label: "태양면 온도", value: "+150°C 이상" },
      { label: "그림자면 온도", value: "−150°C 이하" },
    ],
    challenge: "대류 없는 진공에서 복사만으로 열 균형을 유지하며, 급격한 열 사이클에 대응",
    modes: ["복사 (유일한 방열 수단)", "전도 (구조체 내)", "대류 (없음)"],
    color: "from-violet-500/15 to-purple-500/5",
    borderColor: "border-violet-500/30",

  },
];

/* ── Component ─────────────────────────────────────────────────── */

export default function RealWorldApplications() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Engineering Applications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            열전달은 거의 모든 공학 분야의 핵심입니다. 각 분야에서 어떤 문제를 풀고 있는지 살펴봅시다.
          </p>
        </motion.div>

        <div className="space-y-6">
          {applications.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div
                className={`rounded-2xl border transition-all duration-300 bg-gradient-to-br ${app.color} ${
                  expanded === i ? app.borderColor : "border-slate-700/50"
                }`}
              >
                {/* Header - always visible */}
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full text-left p-6 flex items-start gap-5"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800/50">
                        {app.category}
                      </span>
                      <div className="flex gap-1.5">
                        {app.modes.map((m, mi) => (
                          <span
                            key={mi}
                            className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                              m.includes("전도") ? "bg-red-500/10 text-red-400" :
                              m.includes("대류") ? "bg-blue-500/10 text-blue-400" :
                              m.includes("복사") ? "bg-amber-500/10 text-amber-400" :
                              "bg-slate-700 text-gray-400"
                            }`}
                          >
                            {m.split(" ")[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{app.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{app.description}</p>
                  </div>
                  <div className="flex-shrink-0 mt-2">
                    <motion.svg
                      animate={{ rotate: expanded === i ? 180 : 0 }}
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </div>
                </button>

                {/* Expanded content */}
                {expanded === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-slate-700/50 pt-6">
                      <div>
                        <div className="space-y-5">
                          {/* Detail bullets */}
                          <div>
                            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                              Key Details
                            </h4>
                            <ul className="space-y-2">
                              {app.details.map((d, di) => (
                                <li key={di} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                                  <span className="text-sm text-gray-300 leading-relaxed">{d}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Key numbers */}
                          <div className="grid grid-cols-3 gap-2">
                            {app.keyNumbers.map((kn, ki) => (
                              <div
                                key={ki}
                                className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 text-center"
                              >
                                <p className="text-xs text-gray-500 mb-1">{kn.label}</p>
                                <p className="text-sm font-mono font-bold text-white">{kn.value}</p>
                              </div>
                            ))}
                          </div>

                          {/* HT modes */}
                          <div>
                            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                              Heat Transfer Modes Involved
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {app.modes.map((m, mi) => (
                                <span
                                  key={mi}
                                  className={`text-xs px-3 py-1.5 rounded-full ${
                                    m.includes("전도") ? "bg-red-500/10 text-red-300 border border-red-500/20" :
                                    m.includes("대류") ? "bg-blue-500/10 text-blue-300 border border-blue-500/20" :
                                    m.includes("복사") ? "bg-amber-500/10 text-amber-300 border border-amber-500/20" :
                                    "bg-slate-700 text-gray-400 border border-slate-600"
                                  }`}
                                >
                                  {m}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Challenge */}
                          <div className="p-4 rounded-lg bg-orange-500/5 border border-orange-500/15">
                            <p className="text-xs font-mono text-orange-400/70 uppercase tracking-wider mb-1">
                              Engineering Challenge
                            </p>
                            <p className="text-sm text-orange-200">{app.challenge}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

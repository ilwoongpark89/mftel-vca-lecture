"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Math from "@/components/Math";

/* ── Mode Data ─────────────────────────────────────────────────── */

interface Mode {
  name: string;
  nameKo: string;
  mechanism: string;
  medium: string;
  law: string;
  lawName: string;
  equationTex: string;
  variables: { sym: string; desc: string }[];
  color: string;
  accent: string;
  gradient: string;
  example: string;
}

const modes: Mode[] = [
  {
    name: "Conduction",
    nameKo: "전도",
    mechanism: "분자 간 에너지 전달: 금속에서는 자유 전자(free electrons)의 이동, 비금속에서는 격자 진동(phonon)에 의해 발생합니다.",
    medium: "고체 (또는 정지 유체). 물질이 반드시 필요하며, 물질의 bulk motion은 없습니다.",
    law: "Fourier's Law",
    lawName: "푸리에 법칙",
    equationTex: "q'' = -k \\frac{dT}{dx}",
    variables: [
      { sym: "q\"", desc: "열유속 [W/m²]" },
      { sym: "k", desc: "열전도도 [W/m·K]" },
      { sym: "dT/dx", desc: "온도 기울기 [K/m]" },
    ],
    color: "text-red-400",
    accent: "border-red-500/30",
    gradient: "from-red-500/15 to-red-500/5",
    example: "뜨거운 프라이팬 손잡이, 겨울철 창문을 통한 열 손실, 반도체 칩에서 히트싱크로의 열 전달",

  },
  {
    name: "Convection",
    nameKo: "대류",
    mechanism: "유체의 bulk motion에 의한 에너지 수송. 표면 근처에서는 분자 확산(전도)도 동시에 작용합니다.",
    medium: "유체 (액체 또는 기체). 유체의 움직임이 반드시 필요합니다.",
    law: "Newton's Law of Cooling",
    lawName: "뉴턴의 냉각 법칙",
    equationTex: "q'' = h(T_s - T_\\infty)",
    variables: [
      { sym: "q\"", desc: "열유속 [W/m²]" },
      { sym: "h", desc: "대류 열전달 계수 [W/m²·K]" },
      { sym: "Ts-T∞", desc: "표면-유체 온도차 [K]" },
    ],
    color: "text-blue-400",
    accent: "border-blue-500/30",
    gradient: "from-blue-500/15 to-blue-500/5",
    example: "바람이 부는 날 체감 온도 저하, CPU 팬 냉각, 자동차 라디에이터, 끓는 물",

  },
  {
    name: "Radiation",
    nameKo: "복사",
    mechanism: "전자기파(electromagnetic wave)에 의한 에너지 방출. 물질 내 원자/분자의 전자 구조 변화로 발생합니다.",
    medium: "매질 불필요 (진공에서도 전달). 열전달의 세 모드 중 유일하게 매질 없이 작동합니다.",
    law: "Stefan-Boltzmann Law",
    lawName: "슈테판-볼츠만 법칙",
    equationTex: "E = \\varepsilon \\sigma T_s^4",
    variables: [
      { sym: "ε", desc: "방사율 (0 ≤ ε ≤ 1)" },
      { sym: "σ", desc: "5.67 × 10⁻⁸ W/m²·K⁴" },
      { sym: "Ts", desc: "표면 절대온도 [K]" },
    ],
    color: "text-amber-400",
    accent: "border-amber-500/30",
    gradient: "from-amber-500/15 to-amber-500/5",
    example: "태양 에너지, 캠프파이어의 열, 적외선 히터, 우주선의 열 방출",

  },
];

export default function ThreeModesOverview() {
  const [activeMode, setActiveMode] = useState(0);
  const mode = modes[activeMode];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Three Modes of Heat Transfer
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conduction, Convection, and Radiation
            <br />
            모든 열전달 현상은 이 세 가지 메커니즘 또는 이들의 조합으로 설명됩니다.
          </p>
        </motion.div>

        {/* Mode Selector Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {modes.map((m, i) => (
            <button
              key={i}
              onClick={() => setActiveMode(i)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                activeMode === i
                  ? `${m.color} ${m.accent} bg-gradient-to-r ${m.gradient} scale-105`
                  : "text-gray-500 border-slate-700 hover:border-slate-600 hover:text-gray-300"
              }`}
            >
              {m.name}
              <span className="block text-xs mt-0.5 opacity-70">{m.nameKo}</span>
            </button>
          ))}
        </div>

        {/* Mode Detail Card */}
        <motion.div
          key={activeMode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`max-w-5xl mx-auto rounded-2xl border ${mode.accent} bg-gradient-to-br ${mode.gradient} p-8`}
        >
          {/* Mechanism & Medium */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 rounded-xl bg-slate-950/30">
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                Mechanism
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">{mode.mechanism}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/30">
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                Required Medium
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">{mode.medium}</p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-8">
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
              {mode.law} ({mode.lawName})
            </h4>
            <div className="flex items-center justify-center py-6 px-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className={`text-3xl md:text-4xl font-bold ${mode.color}`}>
                <Math tex={mode.equationTex} display />
              </span>
            </div>
          </div>

          {/* Variables */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {mode.variables.map((v, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/40 border border-slate-800"
              >
                <span className={`font-mono font-bold text-lg ${mode.color}`}>
                  {v.sym}
                </span>
                <span className="text-sm text-gray-400">{v.desc}</span>
              </div>
            ))}
          </div>

          {/* Example */}
          <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/30">
            <span className="text-lg flex-shrink-0">📌</span>
            <div>
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
                Real-world Examples
              </h4>
              <p className="text-sm text-gray-300">{mode.example}</p>
            </div>
          </div>
        </motion.div>

        {/* Combined Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <div className="px-6 py-5 rounded-2xl bg-slate-800/40 border border-slate-700">
            <p className="text-gray-400">
              실제 공학 문제에서는 <strong className="text-white">세 가지 모드가 동시에 작용</strong>합니다.
              예: 건물 외벽 &mdash; 벽 내부는 <span className="text-red-400">전도</span>,
              표면에서 공기로는 <span className="text-blue-400">대류</span>,
              태양으로부터는 <span className="text-amber-400">복사</span>가 동시에 발생합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

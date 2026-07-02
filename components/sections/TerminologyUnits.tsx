"use client";

import { motion } from "framer-motion";
import Math from "@/components/Math";

const terminologyData = [
  {
    quantity: "Heat transfer",
    meaning: "The transport of thermal energy driven by a spatial temperature difference — distinct from thermodynamic 'heat', which is energy crossing a system boundary (온도 구배가 존재할 때 발생하는 열에너지의 이동 현상)",
    symbol: "—",
    units: "—",
  },
  {
    quantity: "Thermal energy",
    meaning: "The portion of a system's internal energy attributable to the random translational, rotational, and vibrational motion of its constituent molecules (분자들의 무작위 운동에 기인하는 내부 에너지의 일부)",
    symbol: "U  or  u",
    units: "J  or  J/kg",
  },
  {
    quantity: "Temperature",
    meaning: "A macroscopic scalar that quantifies the average kinetic energy of microscopic molecular motion; it serves as an indirect measure of stored thermal energy (미시적 분자 운동의 평균 운동에너지를 나타내는 거시적 물리량)",
    symbol: "T",
    units: "K  or  °C",
  },
  {
    quantity: "Heat",
    meaning: "The cumulative amount of thermal energy that has crossed a system boundary over a finite time interval Δt ≥ 0 (유한한 시간 동안 시스템 경계를 통해 전달된 열에너지의 총량)",
    symbol: "Q",
    units: "J",
  },
  {
    quantity: "Heat rate",
    meaning: "The instantaneous rate at which thermal energy is transferred — the time derivative of heat, dQ/dt (열에너지가 전달되는 순간 속도, 즉 열의 시간 미분)",
    symbol: "q",
    units: "W",
  },
  {
    quantity: "Heat flux",
    meaning: "Heat rate per unit area normal to the direction of transfer; characterises the local intensity of heat flow at a surface (전달 방향에 수직인 단위 면적당 열전달 속도; 표면에서의 국소적 열흐름 세기)",
    symbol: "q″",
    units: "W/m²",
  },
];

const examples = [
  {
    step: "01",
    title: "Heat  Q",
    question: "물 1 kg을 1 °C 올리려면 에너지가 얼마나 필요한가?",
    formula: "Q = c_p · m · ΔT",
    calculation: "Q = 4186 × 1 × 1 = 4186 J",
    highlight: "Q = 4,186 J",
    insight: "총 에너지량만 알 수 있고, 얼마나 빨리 전달되는지는 모릅니다.",
    color: "text-sky-400",
    borderColor: "border-sky-500/30",
    bgColor: "bg-sky-500/5",
    accentColor: "bg-sky-400",
  },
  {
    step: "02",
    title: "Heat Rate  q",
    question: "418.6 W 히터를 쓰면 몇 초 만에 가열할 수 있는가?",
    formula: "Δt = Q / q",
    calculation: "Δt = 4186 / 418.6 = 10 s",
    highlight: "q = 418.6 W → 10 s",
    insight: "에너지 전달의 속도를 알 수 있지만, 히터의 크기는 반영되지 않습니다.",
    color: "text-amber-400",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/5",
    accentColor: "bg-amber-400",
  },
  {
    step: "03",
    title: "Heat Flux  q″",
    question: "반지름 5 cm 원형 히터라면, 단위 면적당 열은 얼마인가?",
    formula: "q″ = q / A",
    calculation: "A = π(0.05)² ≈ 7.854×10⁻³ m²\nq″ = 418.6 / 7.854×10⁻³ ≈ 53.3 kW/m²",
    highlight: "q″ ≈ 53.3 kW/m²",
    insight: "표면에서의 열전달 세기를 정량화합니다. Fourier·Newton 법칙의 핵심 변수입니다.",
    color: "text-rose-400",
    borderColor: "border-rose-500/30",
    bgColor: "bg-rose-500/5",
    accentColor: "bg-rose-400",
  },
  {
    step: "04",
    title: "Volumetric Generation  q̇",
    question: "히터 두께가 1 cm라면, 단위 체적당 발열량은?",
    formula: "q̇ = q / V",
    calculation: "V = 7.854×10⁻³ × 0.01 = 7.854×10⁻⁵ m³\nq̇ = 418.6 / 7.854×10⁻⁵ ≈ 5,330 kW/m³",
    highlight: "q̇ ≈ 5,330 kW/m³",
    insight: "물질 내부에서 열이 생성되는 밀도. 전기 저항 가열, 핵분열 등에 사용됩니다.",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/5",
    accentColor: "bg-emerald-400",
  },
];

export default function TerminologyUnits() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Part 1.5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terminology &amp; Units
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Key Quantities and Units
            <br />
            열전달 해석에 앞서 에너지 관련 물리량과 단위를 명확히 정의합니다.
          </p>
        </motion.div>

        {/* Terminology Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest mb-8">
            Key Quantities
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-900/80">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-6 py-4 text-sm font-semibold text-violet-400 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-4 text-sm font-semibold text-violet-400 uppercase tracking-wider">Meaning</th>
                  <th className="px-6 py-4 text-sm font-semibold text-violet-400 uppercase tracking-wider text-center">Symbol</th>
                  <th className="px-6 py-4 text-sm font-semibold text-violet-400 uppercase tracking-wider text-center">Units</th>
                </tr>
              </thead>
              <tbody>
                {terminologyData.map((row, i) => (
                  <motion.tr
                    key={row.quantity}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="border-b border-slate-800 last:border-b-0 hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-white font-medium whitespace-nowrap">{row.quantity}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm leading-relaxed max-w-md">{row.meaning}</td>
                    <td className="px-6 py-4 text-center">
                      <code className="text-amber-300 bg-slate-800 px-2 py-0.5 rounded text-sm">{row.symbol}</code>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <code className="text-emerald-300 bg-slate-800 px-2 py-0.5 rounded text-sm">{row.units}</code>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* From Energy to Intensity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            From Energy to Intensity
          </h3>
          <p className="text-center text-gray-400 text-base max-w-2xl mx-auto leading-relaxed mb-3">
            하나의 물리적 상황 &mdash; 물 1 kg을 1 °C 올리기 &mdash; 을 네 가지 물리량으로 점점 더 정밀하게 기술합니다.
          </p>
          {/* Flow indicator */}
          <div className="flex items-center justify-center gap-2 text-sm font-mono mb-12">
            <span className="text-sky-400"><Math tex="Q" /></span>
            <span className="text-gray-600">&rarr;</span>
            <span className="text-amber-400"><Math tex="q" /></span>
            <span className="text-gray-600">&rarr;</span>
            <span className="text-rose-400"><Math tex="q''" /></span>
            <span className="text-gray-600">&rarr;</span>
            <span className="text-emerald-400"><Math tex="\dot{q}" /></span>
            <span className="text-gray-500 ml-3 text-xs">총량 &rarr; 속도 &rarr; 세기 &rarr; 밀도</span>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-2xl border ${ex.borderColor} ${ex.bgColor} overflow-hidden`}
            >
              {/* Step header */}
              <div className="flex items-center gap-3 px-6 pt-6 pb-3">
                <span className={`text-xs font-mono ${ex.color} opacity-60`}>STEP {ex.step}</span>
                <div className={`flex-1 h-px ${ex.accentColor} opacity-20`} />
              </div>

              <div className="px-6 pb-6">
                <h4 className={`text-lg font-bold ${ex.color} mb-2`}>{ex.title}</h4>
                <p className="text-white text-sm font-medium mb-5">{ex.question}</p>

                <div className="bg-slate-900/60 rounded-lg px-4 py-3 mb-4">
                  <p className="text-sm text-gray-300 font-mono mb-1">{ex.formula}</p>
                  <p className="text-xs text-gray-500 font-mono whitespace-pre-line">{ex.calculation}</p>
                </div>

                <div className={`inline-block px-3 py-1.5 rounded-full bg-slate-900/80 border ${ex.borderColor} mb-4`}>
                  <span className={`text-sm font-semibold ${ex.color}`}>{ex.highlight}</span>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed">
                  {ex.insight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

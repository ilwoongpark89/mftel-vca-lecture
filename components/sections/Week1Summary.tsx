"use client";

import { motion } from "framer-motion";

const keyTakeaways = [
  {
    title: "열전달 ≠ 열역학",
    desc: "열역학은 평형 상태를, 열전달은 비평형에서의 rate를 다룹니다.",
    color: "border-red-500/30",
  },
  {
    title: "Three Modes",
    desc: "전도(Fourier), 대류(Newton), 복사(Stefan-Boltzmann) — 세 가지 법칙이 이 과목의 근간입니다.",
    color: "border-orange-500/30",
  },
  {
    title: "열저항 유추",
    desc: "전기 회로 유추를 통해 복합 열전달 문제를 체계적으로 풀 수 있습니다.",
    color: "border-green-500/30",
  },
  {
    title: "에너지 보존",
    desc: "모든 문제 풀이의 출발점. Ė_in + Ė_g − Ė_out = Ė_st",
    color: "border-purple-500/30",
  },
];

const equationSheet = [
  { law: "Fourier's Law", eq: "q″ = −k(dT/dx)", color: "text-red-400" },
  { law: "Newton's Law", eq: "q″ = h(Tₛ − T∞)", color: "text-blue-400" },
  { law: "Stefan-Boltzmann", eq: "E = εσT⁴", color: "text-amber-400" },
  { law: "Thermal Resistance", eq: "q = ΔT / R_total", color: "text-green-400" },
  { law: "Energy Balance", eq: "Ė_in + Ė_g − Ė_out = Ė_st", color: "text-purple-400" },
];

export default function Week1Summary() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Week 1 Summary
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Key Takeaways */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {keyTakeaways.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-5 rounded-xl bg-slate-800/30 border-l-4 ${item.color}`}
              >
                <h4 className="text-white font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Summary Table: Heat Transfer Modes (Table 1.5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-lg font-bold text-white mb-6 text-center">
              Summary of Heat Transfer Modes{" "}
              <span className="text-gray-500 font-normal text-sm">(Table 1.5)</span>
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-700">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-slate-800 text-gray-300 uppercase text-xs tracking-wider">
                    <th className="px-5 py-4">Mode</th>
                    <th className="px-5 py-4">Mechanism</th>
                    <th className="px-5 py-4">Rate Equation</th>
                    <th className="px-5 py-4">Transport Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-900/60">
                    <td className="px-5 py-4 font-bold text-red-400">Conduction</td>
                    <td className="px-5 py-4 text-gray-400">
                      Diffusion of energy due to random molecular motion
                    </td>
                    <td className="px-5 py-4 font-mono text-gray-200">
                      q″ = −k(dT/dx)
                    </td>
                    <td className="px-5 py-4 text-gray-300">
                      k [W/m·K]
                    </td>
                  </tr>
                  <tr className="bg-slate-800/40">
                    <td className="px-5 py-4 font-bold text-blue-400">Convection</td>
                    <td className="px-5 py-4 text-gray-400">
                      Diffusion + bulk motion (advection)
                    </td>
                    <td className="px-5 py-4 font-mono text-gray-200">
                      q″ = h(Tₛ − T∞)
                    </td>
                    <td className="px-5 py-4 text-gray-300">
                      h [W/m²·K]
                    </td>
                  </tr>
                  <tr className="bg-slate-900/60">
                    <td className="px-5 py-4 font-bold text-amber-400">Radiation</td>
                    <td className="px-5 py-4 text-gray-400">
                      Energy transfer by electromagnetic waves
                    </td>
                    <td className="px-5 py-4 font-mono text-gray-200">
                      q″ = εσ(Tₛ⁴ − Tₛᵤᵣ⁴)
                    </td>
                    <td className="px-5 py-4 text-gray-300">
                      ε (무차원), σ [W/(m²·K⁴)]
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Equation Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-700 bg-slate-800/20 p-8 mb-12"
          >
            <h3 className="text-lg font-bold text-white mb-6 text-center">
              Key Equations
            </h3>
            <div className="space-y-3">
              {equationSheet.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-950/40"
                >
                  <span className="text-sm text-gray-400">{item.law}</span>
                  <span className={`font-mono font-bold ${item.color}`}>
                    {item.eq}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Next Week Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20"
          >
            <p className="text-sm text-gray-500 mb-2">Next Week</p>
            <h3 className="text-2xl font-bold text-white mb-3">
              Week 2: Introduction to Conduction
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              열전도 방정식(Heat Diffusion Equation)의 유도, 경계 조건의 종류,
              정상상태 1차원 전도 문제를 다룹니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

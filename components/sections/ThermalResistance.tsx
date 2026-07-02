"use client";

import { motion } from "framer-motion";

const analogyRows = [
  { electrical: "전압차 (ΔV)", thermal: "온도차 (ΔT)", unit: "V → K" },
  { electrical: "전류 (I)", thermal: "열전달률 (q)", unit: "A → W" },
  { electrical: "전기저항 (R_e)", thermal: "열저항 (R_t)", unit: "Ω → K/W" },
  { electrical: "옴의 법칙: I = ΔV/R", thermal: "q = ΔT/R_t", unit: "" },
];

const resistances = [
  {
    mode: "전도 (Conduction)",
    formula: "R_cond = L / (kA)",
    color: "text-red-400",
    desc: "L: 두께, k: 열전도도, A: 단면적",
  },
  {
    mode: "대류 (Convection)",
    formula: "R_conv = 1 / (hA)",
    color: "text-blue-400",
    desc: "h: 대류 열전달 계수, A: 표면적",
  },
  {
    mode: "복사 (Radiation)",
    formula: "R_rad = 1 / (h_r A)",
    color: "text-amber-400",
    desc: "h_r: 복사 열전달 계수 (선형화)",
  },
];

export default function ThermalResistance() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
            Part 7
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thermal Resistance Concept
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            전기 회로와의 유사성을 활용하면 복잡한 열전달 문제를 직관적인 저항 네트워크로 풀 수 있습니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Electrical Analogy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-slate-900 p-8 mb-12"
          >
            <h3 className="text-sm font-mono text-green-400 uppercase tracking-wider mb-6">
              Electrical ↔ Thermal Analogy
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 px-4 text-left text-xs font-mono text-gray-500 uppercase">
                      Electrical
                    </th>
                    <th className="py-3 px-4 text-center text-xs text-gray-600">↔</th>
                    <th className="py-3 px-4 text-left text-xs font-mono text-gray-500 uppercase">
                      Thermal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {analogyRows.map((row, i) => (
                    <tr key={i} className="border-b border-slate-800/50">
                      <td className="py-3 px-4 text-sm text-gray-400">
                        {row.electrical}
                      </td>
                      <td className="py-3 px-4 text-center text-green-500">→</td>
                      <td className="py-3 px-4 text-sm text-white font-medium">
                        {row.thermal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Visual Circuit - Plane Wall Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-700 bg-slate-800/30 p-8 mb-12"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              Example: Plane Wall with Convection
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              벽 한쪽은 뜨거운 유체(T∞,1), 다른 쪽은 차가운 유체(T∞,2)와 접합
            </p>

            {/* Circuit Diagram */}
            <div className="flex items-center justify-center gap-2 py-6 px-2 overflow-x-auto">
              <div className="px-3 py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-mono whitespace-nowrap">
                T∞,1
              </div>
              <div className="text-gray-600">—</div>
              <div className="px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono whitespace-nowrap">
                1/(h₁A)
              </div>
              <div className="text-gray-600">—</div>
              <div className="px-3 py-2 rounded-lg bg-slate-700 text-gray-300 text-xs font-mono whitespace-nowrap">
                Tₛ,1
              </div>
              <div className="text-gray-600">—</div>
              <div className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono whitespace-nowrap">
                L/(kA)
              </div>
              <div className="text-gray-600">—</div>
              <div className="px-3 py-2 rounded-lg bg-slate-700 text-gray-300 text-xs font-mono whitespace-nowrap">
                Tₛ,2
              </div>
              <div className="text-gray-600">—</div>
              <div className="px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono whitespace-nowrap">
                1/(h₂A)
              </div>
              <div className="text-gray-600">—</div>
              <div className="px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-mono whitespace-nowrap">
                T∞,2
              </div>
            </div>

            <div className="text-center mt-4">
              <div className="inline-block px-6 py-3 rounded-xl bg-slate-950/50 border border-slate-700">
                <span className="font-mono text-lg text-green-400">
                  q = (T∞,1 − T∞,2) / R_total
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                R_total = 1/(h₁A) + L/(kA) + 1/(h₂A) &nbsp;(직렬 합산)
              </p>
            </div>
          </motion.div>

          {/* Resistance Formulas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-6">
              Thermal Resistance Summary
            </h3>
            <div className="grid gap-4">
              {resistances.map((r, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-xl bg-slate-800/30 border border-slate-700/50"
                >
                  <div>
                    <h4 className={`text-sm font-bold ${r.color}`}>{r.mode}</h4>
                    <p className="text-xs text-gray-500 mt-1">{r.desc}</p>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-slate-950/50 border border-slate-800">
                    <span className={`font-mono text-lg font-bold ${r.color}`}>
                      {r.formula}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

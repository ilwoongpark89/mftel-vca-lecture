"use client";

import { motion } from "framer-motion";
import MathTex from "@/components/Math";
const Math = MathTex;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function KeyConceptCard({ title, children, accent = "red" }: { title: string; children: React.ReactNode; accent?: string }) {
  const borderColor = accent === "red" ? "border-red-500/20" : "border-pink-500/20";
  const textColor = accent === "red" ? "text-red-400" : "text-pink-400";
  return (
    <div className={`p-4 rounded-xl bg-slate-800/30 border ${borderColor}`}>
      <h4 className={`text-sm font-bold ${textColor} mb-2`}>{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Week14Summary() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Week 14 요약</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">복사 열전달의 핵심 법칙과 개념</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 흑체 법칙 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-red-400 mb-6 text-center">흑체 복사 법칙</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-red-400 mb-2">Stefan-Boltzmann</h4>
                  <Math tex="E_b = \\sigma T^4" display />
                  <p className="text-xs text-gray-500 mt-2"><Math tex="\\sigma = 5.67 \\times 10^{-8}" /> W/(m²·K⁴)</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-pink-400 mb-2">Wien의 변위 법칙</h4>
                  <Math tex="\\lambda_{max} T = 2898 \\, \\mu\\text{m}\\cdot\\text{K}" display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 표면 물성 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-pink-500/30 bg-gradient-to-br from-pink-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-pink-400 mb-6 text-center">표면 물성</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400">Property</th>
                      <th className="text-left py-3 px-4 text-gray-400">Symbol</th>
                      <th className="text-left py-3 px-4 text-gray-400">Definition</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">방사율 (Emissivity)</td>
                      <td className="py-3 px-4 text-red-400"><Math tex="\\varepsilon" /></td>
                      <td className="py-3 px-4"><Math tex="E/E_b" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">흡수율 (Absorptivity)</td>
                      <td className="py-3 px-4 text-pink-400"><Math tex="\\alpha" /></td>
                      <td className="py-3 px-4">흡수된 복사 / 입사 복사</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">반사율 (Reflectivity)</td>
                      <td className="py-3 px-4 text-orange-400"><Math tex="\\rho" /></td>
                      <td className="py-3 px-4"><Math tex="\\alpha + \\rho = 1" /> (불투명체)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Kirchhoff 법칙: 열평형 시 <Math tex="\\varepsilon = \\alpha" />
              </p>
            </div>
          </motion.div>

          {/* View Factor */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-6 text-center">View Factor (형상 계수)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-orange-400 mb-2">상반성 (Reciprocity)</h4>
                  <Math tex="A_1 F_{12} = A_2 F_{21}" display />
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-amber-400 mb-2">합산 법칙 (Summation)</h4>
                  <Math tex="\\sum_{j=1}^{N} F_{ij} = 1" display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 핵심 개념 */}
          <motion.div {...fadeUp} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">핵심 개념</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <KeyConceptCard title="1. 흑체 교환" accent="red">
                <Math tex="q_{12} = \\sigma A_1 F_{12}(T_1^4 - T_2^4)" />
              </KeyConceptCard>
              <KeyConceptCard title="2. 회색체 교환 (2표면)" accent="pink">
                <Math tex="q = \\frac{\\sigma(T_1^4 - T_2^4)}{\\frac{1-\\varepsilon_1}{\\varepsilon_1 A_1} + \\frac{1}{A_1 F_{12}} + \\frac{1-\\varepsilon_2}{\\varepsilon_2 A_2}}" />
              </KeyConceptCard>
              <KeyConceptCard title="3. 복사 차폐막" accent="red">
                N개 차폐막 → 열전달 <Math tex="1/(N+1)" />로 감소
              </KeyConceptCard>
              <KeyConceptCard title="4. Radiosity" accent="pink">
                <Math tex="J = \\varepsilon E_b + \\rho G" /> (방출 + 반사)
              </KeyConceptCard>
            </div>
          </motion.div>

          {/* 다음 주 예고 */}
          <motion.div {...fadeUp}>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-4">Next Week Preview</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-cyan-400">Week 15: Phase Change Heat Transfer</strong>
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>비등 열전달 (Boiling)</li>
                <li>응축 열전달 (Condensation)</li>
                <li>임계 열유속 (CHF)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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

function KeyConceptCard({ title, children, accent = "orange" }: { title: string; children: React.ReactNode; accent?: string }) {
  const borderColor = accent === "orange" ? "border-orange-500/20" : "border-amber-500/20";
  const textColor = accent === "orange" ? "text-orange-400" : "text-amber-400";
  return (
    <div className={`p-4 rounded-xl bg-slate-800/30 border ${borderColor}`}>
      <h4 className={`text-sm font-bold ${textColor} mb-2`}>{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Week12Summary() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Week 12 요약</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">자연 대류 열전달의 핵심 개념과 상관식</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 핵심 무차원 수 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-6 text-center">핵심 무차원 수</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Number</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Definition</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Physical Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">Grashof (Gr)</td>
                      <td className="py-3 px-4"><Math tex="\\frac{g\\beta(T_s - T_\\infty)L^3}{\\nu^2}" /></td>
                      <td className="py-3 px-4">부력 / 점성력</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-amber-400">Rayleigh (Ra)</td>
                      <td className="py-3 px-4"><Math tex="Gr \\cdot Pr = \\frac{g\\beta(T_s - T_\\infty)L^3}{\\nu\\alpha}" /></td>
                      <td className="py-3 px-4">부력 / (점성 × 열확산)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 상관식 요약 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-amber-400 mb-6 text-center">주요 상관식</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-orange-400 mb-2">수직 평판 (Churchill-Chu)</h4>
                  <Math tex="\\overline{Nu} = \\left\\{0.825 + \\frac{0.387 Ra^{1/6}}{[1+(0.492/Pr)^{9/16}]^{8/27}}\\right\\}^2" display />
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-amber-400 mb-2">수평 평판 (상면 가열)</h4>
                  <Math tex="\\overline{Nu} = 0.54 Ra^{1/4} \\quad (10^4 < Ra < 10^7)" display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 핵심 개념 카드 */}
          <motion.div {...fadeUp} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">핵심 개념</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <KeyConceptCard title="1. 부력 발생 조건" accent="orange">
                밀도 차이 → 압력 불균형 → 부력 유동. 이상 기체: <Math tex="\\beta = 1/T" />
              </KeyConceptCard>
              <KeyConceptCard title="2. 천이 Ra 수" accent="amber">
                수직 평판: <Math tex="Ra_c \\approx 10^9" />. 이보다 크면 난류.
              </KeyConceptCard>
              <KeyConceptCard title="3. 혼합 대류 기준" accent="orange">
                <Math tex="Gr/Re^2 \\approx 1" />이면 강제+자연 대류 모두 고려.
              </KeyConceptCard>
              <KeyConceptCard title="4. 물성치 온도" accent="amber">
                막 온도 <Math tex="T_f = (T_s + T_\\infty)/2" />에서 평가.
              </KeyConceptCard>
            </div>
          </motion.div>

          {/* 다음 주 예고 */}
          <motion.div {...fadeUp}>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-4">Next Week Preview</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-purple-400">Week 13: Heat Exchangers</strong>
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>열교환기 종류와 설계</li>
                <li>LMTD 방법</li>
                <li>ε-NTU 방법</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Math from "@/components/Math";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function KeyConceptCard({
  title,
  children,
  accent = "purple",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "purple" ? "border-purple-500/20" : accent === "cyan" ? "border-cyan-500/20" : accent === "orange" ? "border-orange-500/20" : accent === "blue" ? "border-blue-500/20" : accent === "emerald" ? "border-emerald-500/20" : "border-slate-700";
  const textColor = accent === "purple" ? "text-purple-400" : accent === "cyan" ? "text-cyan-400" : accent === "orange" ? "text-orange-400" : accent === "blue" ? "text-blue-400" : accent === "emerald" ? "text-emerald-400" : "text-gray-400";
  return (
    <div className={`p-4 rounded-xl bg-slate-800/30 border ${borderColor}`}>
      <h4 className={`text-sm font-bold ${textColor} mb-2`}>{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Week13Summary() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Week 13 Summary
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            열교환기 해석의 핵심 개념과 공식을 정리합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 열교환기 유형 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-purple-400 mb-6 text-center">
                Heat Exchanger Types
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Type</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Flow</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Characteristics</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-orange-400">Parallel Flow</td>
                      <td className="py-4 px-4">Same direction</td>
                      <td className="py-4 px-4"><Math tex="T_{c,o} < T_{h,o}" /> always, lowest efficiency</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-cyan-400">Counter Flow</td>
                      <td className="py-4 px-4">Opposite direction</td>
                      <td className="py-4 px-4"><strong className="text-white">Highest efficiency</strong>, <Math tex="T_{c,o}" /> can exceed <Math tex="T_{h,o}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-blue-400">Cross Flow</td>
                      <td className="py-4 px-4">Perpendicular</td>
                      <td className="py-4 px-4">Compact, mixed/unmixed variants</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-purple-400">Shell-and-Tube</td>
                      <td className="py-4 px-4">Multi-pass</td>
                      <td className="py-4 px-4">Most common in industry, robust</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 핵심 공식 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center">
                Key Equations
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Overall Heat Transfer Coefficient (Tube)</p>
                  <Math tex={`\\frac{1}{U_o} = \\frac{r_o}{r_i h_i} + \\frac{r_o R''_{f,i}}{r_i} + \\frac{r_o \\ln(r_o/r_i)}{k} + R''_{f,o} + \\frac{1}{h_o}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">Log Mean Temperature Difference</p>
                  <Math tex={`\\Delta T_{lm} = \\frac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1 / \\Delta T_2)}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-purple-400 font-bold mb-2">Design Equation (LMTD Method)</p>
                  <Math tex={`q = U A \\cdot F \\cdot \\Delta T_{lm,cf}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Effectiveness Definition</p>
                  <Math tex={`\\varepsilon = \\frac{q}{q_{max}} = \\frac{C_h(T_{h,i}-T_{h,o})}{C_{min}(T_{h,i}-T_{c,i})} = \\frac{C_c(T_{c,o}-T_{c,i})}{C_{min}(T_{h,i}-T_{c,i})}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-blue-400 font-bold mb-2">Number of Transfer Units</p>
                  <Math tex={`NTU = \\frac{UA}{C_{min}}, \\quad C_r = \\frac{C_{min}}{C_{max}}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* e-NTU 관계식 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-6 text-center">
                e-NTU Relations Summary
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Configuration</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Effectiveness <Math tex="\varepsilon" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-orange-400">Parallel Flow</td>
                      <td className="py-4 px-4"><Math tex="\frac{1-e^{-NTU(1+C_r)}}{1+C_r}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-cyan-400">Counter Flow (C_r &lt; 1)</td>
                      <td className="py-4 px-4"><Math tex="\frac{1-e^{-NTU(1-C_r)}}{1-C_r e^{-NTU(1-C_r)}}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-cyan-400">Counter Flow (C_r = 1)</td>
                      <td className="py-4 px-4"><Math tex="\frac{NTU}{1+NTU}" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-yellow-400">Phase Change (C_r = 0)</td>
                      <td className="py-4 px-4"><Math tex="1 - e^{-NTU}" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 핵심 개념 카드 */}
          <motion.div {...fadeUp} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Key Concepts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <KeyConceptCard title="1. LMTD Method" accent="purple">
                <p>
                  모든 온도를 알 때 사용.<br />
                  <strong className="text-white">Sizing 문제</strong>에 적합.<br />
                  Multi-pass는 F 보정계수 필요.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="2. e-NTU Method" accent="cyan">
                <p>
                  입구 온도만 알 때 사용.<br />
                  <strong className="text-white">Rating 문제</strong>에 적합.<br />
                  반복 계산 불필요.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="3. Controlling Resistance" accent="orange">
                <p>
                  U는 가장 큰 저항에 지배됨.<br />
                  Gas side: 낮은 h &rarr; fins 필요<br />
                  개선은 지배 저항에 집중.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="4. Fouling Effects" accent="orange">
                <p>
                  시간 경과 시 U 감소.<br />
                  설계 시 fouling margin 포함.<br />
                  <Math tex="R''_f" />: 0.0001 ~ 0.001 m<sup>2</sup>K/W
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="5. F Factor" accent="emerald">
                <p>
                  Multi-pass 열교환기 보정.<br />
                  <Math tex="0 < F \leq 1" />, <Math tex="F \geq 0.9" /> 권장.<br />
                  상변화 시 F = 1.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="6. Design Trade-offs" accent="blue">
                <p>
                  NTU &gt; 3: 수익 체감.<br />
                  Counter flow: 최고 효율.<br />
                  면적 vs 압력강하 최적화.
                </p>
              </KeyConceptCard>
            </div>
          </motion.div>

          {/* 문제 풀이 전략 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 text-center">
                Problem-Solving Strategy
              </h3>

              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">문제 유형 파악:</strong> Sizing (면적 결정)? Rating (성능 예측)?
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">방법 선택:</strong> 모든 온도 known &rarr; LMTD / 입구만 known &rarr; e-NTU
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">열용량률 계산:</strong> <Math tex="C_h = \dot{m}_h c_{p,h}" />, <Math tex="C_c = \dot{m}_c c_{p,c}" />, <Math tex="C_{min}" />, <Math tex="C_r" />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">특수 경우 확인:</strong> 상변화(C_r = 0)? 균형 HX(C_r = 1)?
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">적절한 공식 적용:</strong> 유동 배열에 맞는 LMTD 또는 e-NTU 관계식 사용
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">6</span>
                  <div>
                    <strong className="text-white">결과 검증:</strong> 에너지 균형 확인, 물리적 타당성 검토
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Quick Reference */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Quick Reference</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                  <h4 className="text-purple-400 font-bold mb-3">Energy Balance</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Math tex="q = C_h(T_{h,i} - T_{h,o}) = C_c(T_{c,o} - T_{c,i})" /></li>
                    <li><Math tex="q_{max} = C_{min}(T_{h,i} - T_{c,i})" /></li>
                    <li><Math tex="q = \varepsilon \cdot q_{max}" /></li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <h4 className="text-cyan-400 font-bold mb-3">Dimensionless Numbers</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Math tex="NTU = UA/C_{min}" /></li>
                    <li><Math tex="C_r = C_{min}/C_{max}" /></li>
                    <li><Math tex="\varepsilon = q/q_{max}" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 다음 주 예고 */}
          <motion.div {...fadeUp}>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-4">Next Week Preview</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-purple-400">Week 14: Boiling and Condensation</strong>
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Pool boiling regimes and correlations</li>
                <li>Film condensation on vertical and horizontal surfaces</li>
                <li>Two-phase heat transfer enhancement</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

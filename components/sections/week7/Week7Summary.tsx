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
  accent = "cyan",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "cyan" ? "border-cyan-500/20" : accent === "orange" ? "border-orange-500/20" : accent === "blue" ? "border-blue-500/20" : accent === "emerald" ? "border-emerald-500/20" : "border-slate-700";
  const textColor = accent === "cyan" ? "text-cyan-400" : accent === "orange" ? "text-orange-400" : accent === "blue" ? "text-blue-400" : accent === "emerald" ? "text-emerald-400" : "text-gray-400";
  return (
    <div className={`p-4 rounded-xl bg-slate-800/30 border ${borderColor}`}>
      <h4 className={`text-sm font-bold ${textColor} mb-2`}>{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Week7Summary() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Week 7 요약
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            공간 효과를 고려한 1차원 비정상 전도의 핵심 개념과 공식을 정리합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 적용 조건 분류 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center">
                비정상 전도 해석 방법 선택
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">조건</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">방법</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">핵심 공식</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-emerald-400">Bi &lt; 0.1</td>
                      <td className="py-4 px-4">Lumped Capacitance</td>
                      <td className="py-4 px-4"><Math tex="\\theta = \\exp(-Bi \\cdot Fo)" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-cyan-400">Bi &gt; 0.1, Fo &gt; 0.2</td>
                      <td className="py-4 px-4">One-Term Approximation</td>
                      <td className="py-4 px-4"><Math tex="\\theta^* = C_1 \\exp(-\\zeta_1^2 Fo) \\cdot f(x^*)" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-orange-400">Bi &gt; 0.1, Fo &lt; 0.2</td>
                      <td className="py-4 px-4">Exact Series / Numerical</td>
                      <td className="py-4 px-4"><Math tex="\\theta^* = \\sum C_n \\exp(-\\zeta_n^2 Fo) \\cdot f_n" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-blue-400"><Math tex="\\delta_p < L" /></td>
                      <td className="py-4 px-4">Semi-Infinite Solid</td>
                      <td className="py-4 px-4"><Math tex="\\theta = \\text{erf}(\\eta)" /> 또는 유사 해</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* One-Term 공식 요약 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-6 text-center">
                One-Term Approximation 공식 (Fo &gt; 0.2)
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">형상</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">중심 온도 <Math tex="\\theta^*_0" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">임의 위치</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">고유값 방정식</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-cyan-400">Plane Wall</td>
                      <td className="py-4 px-4"><Math tex="C_1 e^{-\\zeta_1^2 Fo}" /></td>
                      <td className="py-4 px-4"><Math tex="\\theta^*_0 \\cos(\\zeta_1 x^*)" /></td>
                      <td className="py-4 px-4"><Math tex="\\zeta \\tan\\zeta = Bi" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-orange-400">Cylinder</td>
                      <td className="py-4 px-4"><Math tex="C_1 e^{-\\zeta_1^2 Fo}" /></td>
                      <td className="py-4 px-4"><Math tex="\\theta^*_0 J_0(\\zeta_1 r^*)" /></td>
                      <td className="py-4 px-4"><Math tex="\\zeta J_1/J_0 = Bi" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-blue-400">Sphere</td>
                      <td className="py-4 px-4"><Math tex="C_1 e^{-\\zeta_1^2 Fo}" /></td>
                      <td className="py-4 px-4"><Math tex="\\theta^*_0 \\frac{\\sin(\\zeta_1 r^*)}{\\zeta_1 r^*}" /></td>
                      <td className="py-4 px-4"><Math tex="1-\\zeta\\cot\\zeta = Bi" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 반무한 고체 요약 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-blue-400 mb-6 text-center">
                Semi-Infinite Solid 요약
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">경계조건</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">온도 분포</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">표면 특성</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-cyan-400">Const. <Math tex="T_s" /></td>
                      <td className="py-4 px-4"><Math tex="\\frac{T-T_s}{T_i-T_s} = \\text{erf}\\left(\\frac{x}{2\\sqrt{\\alpha t}}\\right)" /></td>
                      <td className="py-4 px-4"><Math tex="q''_s = \\frac{k(T_s-T_i)}{\\sqrt{\\pi\\alpha t}}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-orange-400">Const. <Math tex="q''_0" /></td>
                      <td className="py-4 px-4">복합 exp + erfc</td>
                      <td className="py-4 px-4"><Math tex="T_s-T_i = \\frac{2q''_0}{k}\\sqrt{\\frac{\\alpha t}{\\pi}}" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-purple-400">Convection</td>
                      <td className="py-4 px-4">복합 erfc 해</td>
                      <td className="py-4 px-4"><Math tex="T_s(t)" /> 변화</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 핵심 개념 카드 */}
          <motion.div {...fadeUp} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">핵심 개념</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <KeyConceptCard title="1. Fourier Number (Fo)" accent="cyan">
                <p>
                  <Math tex="Fo = \\alpha t / L^2" /> - 무차원 시간.<br />
                  Fo &gt; 0.2이면 One-term approximation 유효.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="2. Biot Number (Bi)" accent="cyan">
                <p>
                  <Math tex="Bi = hL/k" /> - 내부/외부 저항 비.<br />
                  Bi &gt; 0.1이면 공간 효과 고려 필요.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="3. 계수표 사용" accent="orange">
                <p>
                  Bi로 <Math tex="\\zeta_1, C_1" /> 결정.<br />
                  중간값은 선형 내삽으로 구함.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="4. 곱해 법칙 (Product Solution)" accent="orange">
                <p>
                  다차원 해 = 1D 해들의 곱.<br />
                  <Math tex="\\theta^*_{2D} = \\theta^*_1 \\times \\theta^*_2" />
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="5. 오차 함수 (Error Function)" accent="blue">
                <p>
                  반무한 고체 해에 사용.<br />
                  <Math tex="\\text{erf}(\\eta) = \\frac{2}{\\sqrt{\\pi}}\\int_0^\\eta e^{-u^2}du" />
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="6. 열 침투 깊이" accent="blue">
                <p>
                  <Math tex="\\delta_p \\sim \\sqrt{\\alpha t}" /><br />
                  반무한 가정 유효 조건 판단에 사용.
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
                    <strong className="text-white">문제 유형 파악:</strong> 유한 물체? 반무한? 다차원?
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">Bi 계산:</strong> <Math tex="Bi = hL/k" />. Bi &lt; 0.1이면 Lumped, 아니면 공간 효과 고려.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">Fo 계산:</strong> <Math tex="Fo = \\alpha t / L^2" />. Fo &gt; 0.2이면 One-term approximation.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">계수 결정:</strong> 표에서 <Math tex="\\zeta_1" />, <Math tex="C_1" /> 찾기 (내삽 필요시).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">온도 계산:</strong> <Math tex="\\theta^* = C_1 \\exp(-\\zeta_1^2 Fo) \\cdot f(x^*)" />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">6</span>
                  <div>
                    <strong className="text-white">실제 온도 복원:</strong> <Math tex="T = T_\\infty + \\theta^*(T_i - T_\\infty)" />
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* 주요 공식 참조 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Quick Reference</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <h4 className="text-cyan-400 font-bold mb-3">무차원 변수</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Math tex="\\theta^* = \\frac{T - T_\\infty}{T_i - T_\\infty}" /></li>
                    <li><Math tex="Fo = \\frac{\\alpha t}{L^2}" /></li>
                    <li><Math tex="Bi = \\frac{hL}{k}" /></li>
                    <li><Math tex="x^* = x/L" /> 또는 <Math tex="r^* = r/r_o" /></li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <h4 className="text-orange-400 font-bold mb-3">열전달량</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Math tex="Q_o = \\rho V c_p (T_i - T_\\infty)" /></li>
                    <li>평판: <Math tex="Q/Q_o = 1 - \\theta^*_0 \\frac{\\sin\\zeta_1}{\\zeta_1}" /></li>
                    <li>원통: <Math tex="Q/Q_o = 1 - 2\\theta^*_0 \\frac{J_1(\\zeta_1)}{\\zeta_1}" /></li>
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
                <strong className="text-cyan-400">Week 8: Numerical Methods in Heat Conduction</strong>
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>유한 차분법 (Finite Difference Method)</li>
                <li>정상상태 및 비정상상태 수치해석</li>
                <li>안정성 조건과 수렴</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
  accent = "red",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "red" ? "border-red-500/20" : accent === "orange" ? "border-orange-500/20" : accent === "blue" ? "border-blue-500/20" : accent === "emerald" ? "border-emerald-500/20" : "border-slate-700";
  const textColor = accent === "red" ? "text-red-400" : accent === "orange" ? "text-orange-400" : accent === "blue" ? "text-blue-400" : accent === "emerald" ? "text-emerald-400" : "text-gray-400";
  return (
    <div className={`p-4 rounded-xl bg-slate-800/30 border ${borderColor}`}>
      <h4 className={`text-sm font-bold ${textColor} mb-2`}>{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Week4Summary() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Week 4 Summary
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            핀(확장 표면) 열전달의 핵심 개념과 공식을 정리합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 핵심 방정식 요약 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-red-400 mb-6 text-center">
                핵심 방정식 (Key Equations)
              </h3>

              <div className="space-y-6">
                {/* 핀 방정식 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-3">
                    핀 방정식 (Fin Equation)
                  </h4>
                  <div className="text-center">
                    <Math tex={`\\frac{d^2\\theta}{dx^2} - m^2\\theta = 0 \\quad \\text{where} \\quad m = \\sqrt{\\frac{hP}{kA_c}}`} display />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    <Math tex="\theta = T - T_\infty" /> (초과 온도)
                  </p>
                </div>

                {/* 일반해 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-3">
                    일반해 (General Solution)
                  </h4>
                  <div className="text-center">
                    <Math tex={`\\theta(x) = C_1 e^{mx} + C_2 e^{-mx} = C_3\\cosh(mx) + C_4\\sinh(mx)`} display />
                  </div>
                </div>

                {/* 단열 끝단 해 */}
                <div className="p-4 rounded-xl bg-slate-900/50 border border-emerald-500/20">
                  <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-3">
                    단열 끝단 핀 (Adiabatic Tip) - 가장 많이 사용
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">온도 분포</p>
                      <Math tex={`\\frac{\\theta}{\\theta_b} = \\frac{\\cosh[m(L-x)]}{\\cosh(mL)}`} display />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">열전달률</p>
                      <Math tex={`q_f = M\\theta_b\\tanh(mL)`} display />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    <Math tex="M = \sqrt{hPkA_c}" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 성능 지표 요약 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-6 text-center">
                성능 지표 (Performance Metrics)
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">지표</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">정의</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">공식 (단열 끝단)</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">의미</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-emerald-400">핀 효율 <Math tex="\eta_f" /></td>
                      <td className="py-4 px-4"><Math tex="\frac{q_f}{hA_f\theta_b}" /></td>
                      <td className="py-4 px-4"><Math tex="\frac{\tanh(mL)}{mL}" /></td>
                      <td className="py-4 px-4 text-xs">핀 자체의 열적 효율</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-orange-400">핀 유효성 <Math tex="\varepsilon_f" /></td>
                      <td className="py-4 px-4"><Math tex="\frac{q_f}{hA_c\theta_b}" /></td>
                      <td className="py-4 px-4"><Math tex="\sqrt{\frac{Pk}{hA_c}}\tanh(mL)" /></td>
                      <td className="py-4 px-4 text-xs">핀 사용의 이점 (&ge;2 권장)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-red-400">전체 표면 효율 <Math tex="\eta_o" /></td>
                      <td className="py-4 px-4"><Math tex="\frac{q_t}{hA_t\theta_b}" /></td>
                      <td className="py-4 px-4"><Math tex="1 - \frac{A_f}{A_t}(1-\eta_f)" /></td>
                      <td className="py-4 px-4 text-xs">핀 배열 전체 효율</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-blue-400">핀 열저항 <Math tex="R_{t,f}" /></td>
                      <td className="py-4 px-4"><Math tex="\frac{\theta_b}{q_f}" /></td>
                      <td className="py-4 px-4"><Math tex="\frac{1}{\eta_f h A_f}" /></td>
                      <td className="py-4 px-4 text-xs">열회로 해석용</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 경계 조건별 해 요약 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-blue-400 mb-6 text-center">
                끝단 경계 조건별 열전달률
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">경계 조건</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="q_f / (M\theta_b)" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">적용</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800 bg-emerald-500/5">
                      <td className="py-3 px-4 font-bold text-emerald-400">단열 끝단</td>
                      <td className="py-3 px-4"><Math tex="\tanh(mL)" /></td>
                      <td className="py-3 px-4 text-xs">가장 많이 사용, 보정 길이와 함께</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-blue-400">대류 끝단</td>
                      <td className="py-3 px-4"><Math tex="\frac{\sinh(mL)+(h/mk)\cosh(mL)}{\cosh(mL)+(h/mk)\sinh(mL)}" /></td>
                      <td className="py-3 px-4 text-xs">가장 일반적 물리 조건</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">지정 온도 끝단</td>
                      <td className="py-3 px-4"><Math tex="\frac{\cosh(mL)-\theta_L/\theta_b}{\sinh(mL)}" /></td>
                      <td className="py-3 px-4 text-xs">핀이 다른 벽면에 연결</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-red-400">무한 핀</td>
                      <td className="py-3 px-4"><Math tex="1" /></td>
                      <td className="py-3 px-4 text-xs">mL &gt; 2.65일 때 근사</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                <strong className="text-white">보정 길이:</strong> <Math tex="L_c = L + A_c/P" />를 사용하면 대류 끝단을 단열 끝단으로 근사 가능 (오차 &lt; 2%)
              </p>
            </div>
          </motion.div>

          {/* 핵심 개념 카드 */}
          <motion.div {...fadeUp} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">핵심 개념</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <KeyConceptCard title="1. 핀의 목적" accent="red">
                <p>
                  대류 열전달 향상을 위해 표면적 증가. 낮은 h(기체 대류)에서 가장 효과적.
                  <Math tex="q = hA_s\theta_b" />에서 A 증가가 핵심.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="2. 핀 파라미터 m" accent="red">
                <p>
                  <Math tex="m = \sqrt{hP/(kA_c)}" />. m이 클수록 온도가 빨리 감소.
                  <Math tex="mL" />이 핀의 열적 특성을 결정.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="3. 최적 핀 길이" accent="orange">
                <p>
                  <Math tex="mL \approx 1 \sim 2" />가 최적. <Math tex="mL > 2.65" />는 재료 낭비
                  (무한 핀의 99% 도달).
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="4. 핀 효율 vs 유효성" accent="orange">
                <p>
                  효율 <Math tex="\eta_f" />: 핀 자체 성능. 유효성 <Math tex="\varepsilon_f" />: 핀 사용의 이점.
                  <Math tex="\varepsilon_f = \eta_f \cdot A_f/A_c" />.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="5. 전체 표면 효율" accent="blue">
                <p>
                  핀 배열: <Math tex="\eta_o = 1 - (A_f/A_t)(1-\eta_f)" />.
                  총 열전달: <Math tex="q_t = \eta_o h A_t \theta_b" />.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="6. 핀 유효성 조건" accent="blue">
                <p>
                  <Math tex="\varepsilon_f \ge 2" />일 때 핀 사용 권장.
                  높은 k, 큰 P/A_c, 낮은 h에서 효과적.
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
                    <strong className="text-white">기본 파라미터 계산:</strong>
                    <Math tex="A_c" />, <Math tex="P" />, <Math tex="A_f" />, <Math tex="m = \sqrt{hP/(kA_c)}" />, <Math tex="mL" />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">경계 조건 결정:</strong>
                    대부분 단열 끝단 + 보정 길이 사용 (<Math tex="L_c = L + A_c/P" />)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">핀 효율 계산:</strong>
                    <Math tex="\eta_f = \tanh(mL_c)/(mL_c)" />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">열전달률 계산:</strong>
                    단일 핀: <Math tex="q_f = \eta_f h A_f \theta_b" />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">핀 배열 (필요시):</strong>
                    <Math tex="\eta_o = 1 - (A_f/A_t)(1-\eta_f)" />, <Math tex="q_t = \eta_o h A_t \theta_b" />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">6</span>
                  <div>
                    <strong className="text-white">온도 또는 열저항 계산:</strong>
                    <Math tex="T_b = q/(h \eta_o A_t) + T_\infty" /> 또는 <Math tex="R_{t,o} = 1/(\eta_o h A_t)" />
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* 실무 가이드라인 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-6 text-center">
                Practical Guidelines
              </h3>

              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
                <div>
                  <h4 className="text-white font-bold mb-3">핀 설계 권장사항</h4>
                  <ul className="space-y-2">
                    <li>&bull; <Math tex="mL = 1 \sim 2" />: 효율-재료 균형</li>
                    <li>&bull; 핀 재료: 높은 k (Al, Cu)</li>
                    <li>&bull; 핀 형상: 얇고 길쭉하게 (큰 P/A_c)</li>
                    <li>&bull; <Math tex="\varepsilon_f \ge 2" />: 핀 사용 타당성</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">핀 효과가 큰 경우</h4>
                  <ul className="space-y-2">
                    <li>&bull; 기체 대류 (낮은 h)</li>
                    <li>&bull; 자연 대류</li>
                    <li>&bull; 열교환기 공기측</li>
                    <li>&bull; 전자기기 냉각</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">핀 효과가 작은 경우</h4>
                  <ul className="space-y-2">
                    <li>&bull; 액체 대류 (높은 h)</li>
                    <li>&bull; 끓음/응축 (매우 높은 h)</li>
                    <li>&bull; 낮은 k 재료 (플라스틱 등)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">주의사항</h4>
                  <ul className="space-y-2">
                    <li>&bull; 핀 간격: 유동 저항 고려</li>
                    <li>&bull; 베이스-핀 접촉 저항</li>
                    <li>&bull; 오염(fouling)에 의한 성능 저하</li>
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
                <strong className="text-red-400">Week 5: Transient Conduction</strong>
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Lumped Capacitance Method (집중 용량법)</li>
                <li>Spatial Effects and Analytical Solutions</li>
                <li>Biot Number and its Significance</li>
                <li>Heisler Charts and Approximate Solutions</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

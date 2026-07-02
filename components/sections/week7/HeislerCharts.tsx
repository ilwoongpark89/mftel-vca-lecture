"use client";

import { motion } from "framer-motion";
import Math from "@/components/Math";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stagger = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function SectionDivider({ number, title }: { number: string; title: string }) {
  return (
    <motion.div {...fadeUp} className="flex items-center gap-4 mb-8 mt-20 first:mt-0">
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "cyan",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div>
        {children}
      </div>
    </div>
  );
}

function InsightCard({
  title,
  children,
  accent = "cyan",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
  };
  const c = colors[accent] || colors.cyan;
  return (
    <div className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
      <div className="flex items-start gap-3">
        <span className={`flex-shrink-0 w-7 h-7 rounded-full ${c.iconBg} flex items-center justify-center ${c.text} text-xs font-bold`}>
          {icon}
        </span>
        <div>
          <h4 className={`font-bold ${c.text} mb-2`}>{title}</h4>
          <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function HeislerCharts() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Heisler Charts
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            One-term approximation을 그래프로 표현한 Heisler Chart 사용법을 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Heisler Charts 소개 */}
          <SectionDivider number="1" title="Introduction to Heisler Charts" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Heisler Charts</strong>는 1947년 M.P. Heisler가 개발한 그래프로,
              One-term approximation 해를 시각적으로 표현합니다. 계산기가 없던 시대에 특히 유용했으며,
              현재도 빠른 추정에 활용됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Heisler Chart의 구성
              </h4>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">Chart 1: 중심 온도</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    <Math tex="\\theta_0^* = f(Fo, Bi)" />
                  </p>
                  <p className="text-xs text-gray-500">
                    중심(x=0)에서의 무차원 온도<br />
                    X축: Fo, Y축: <Math tex="\\theta_0^*" /><br />
                    파라미터: 1/Bi
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">Chart 2: 위치별 온도</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    <Math tex="\\theta^*/\\theta_0^* = f(x^*, Bi)" />
                  </p>
                  <p className="text-xs text-gray-500">
                    임의 위치와 중심의 온도비<br />
                    X축: x/L 또는 r/ro, Y축: 온도비<br />
                    파라미터: Bi
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-2">Chart 3: 열전달량</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    <Math tex="Q/Q_o = f(Bi^2 \\cdot Fo, Bi)" />
                  </p>
                  <p className="text-xs text-gray-500">
                    축적 열전달량 비율<br />
                    X축: <Math tex="Bi^2 Fo" />, Y축: Q/Qo<br />
                    파라미터: Bi
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Chart 사용 절차 */}
          <SectionDivider number="2" title="Using Heisler Charts: Step-by-Step" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Chart 사용 절차
              </h4>

              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">무차원수 계산</strong>
                    <p className="text-sm mt-1">
                      <Math tex="Bi = hL/k" /> 및 <Math tex="Fo = \\alpha t/L^2" /> 계산
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">적용 조건 확인</strong>
                    <p className="text-sm mt-1">
                      <Math tex="Fo > 0.2" /> 인지 확인 (One-term approximation 유효 조건)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">Chart 1에서 중심 온도 읽기</strong>
                    <p className="text-sm mt-1">
                      Fo(X축)와 1/Bi 곡선의 교점에서 <Math tex="\\theta_0^*" /> 읽기
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">Chart 2에서 위치별 온도비 읽기 (필요시)</strong>
                    <p className="text-sm mt-1">
                      x/L과 Bi로 <Math tex="\\theta^*/\\theta_0^*" /> 읽기, 곱해서 <Math tex="\\theta^*" /> 계산
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">실제 온도 계산</strong>
                    <p className="text-sm mt-1">
                      <Math tex="T = T_\\infty + \\theta^*(T_i - T_\\infty)" />
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* 3. 형상별 Chart 특성 */}
          <SectionDivider number="3" title="Charts for Different Geometries" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                형상별 Heisler Chart 파라미터
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">형상</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">특성길이 L</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Bi</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Fo</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">위치 <Math tex="x^*" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Plane Wall</td>
                      <td className="py-3 px-4">반두께 L</td>
                      <td className="py-3 px-4"><Math tex="hL/k" /></td>
                      <td className="py-3 px-4"><Math tex="\\alpha t/L^2" /></td>
                      <td className="py-3 px-4"><Math tex="x/L" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">Infinite Cylinder</td>
                      <td className="py-3 px-4">반지름 <Math tex="r_o" /></td>
                      <td className="py-3 px-4"><Math tex="hr_o/k" /></td>
                      <td className="py-3 px-4"><Math tex="\\alpha t/r_o^2" /></td>
                      <td className="py-3 px-4"><Math tex="r/r_o" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-blue-400">Sphere</td>
                      <td className="py-3 px-4">반지름 <Math tex="r_o" /></td>
                      <td className="py-3 px-4"><Math tex="hr_o/k" /></td>
                      <td className="py-3 px-4"><Math tex="\\alpha t/r_o^2" /></td>
                      <td className="py-3 px-4"><Math tex="r/r_o" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Chart 읽기 주의사항" accent="yellow" icon="!">
              <ul className="space-y-1">
                <li>&bull; Chart는 <strong className="text-white">로그 스케일</strong>로 그려져 있음 - 정밀한 읽기 어려움</li>
                <li>&bull; <Math tex="1/Bi" /> 곡선들 사이를 <strong className="text-white">내삽(interpolation)</strong>해야 할 수 있음</li>
                <li>&bull; 극단적인 Bi 값(매우 작거나 큰 경우)에서는 정확도 저하</li>
                <li>&bull; <strong className="text-yellow-300">현대에는 One-term 공식을 직접 계산하는 것이 더 정확</strong></li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 4. 열전달량 계산 */}
          <SectionDivider number="4" title="Total Heat Transfer (Q/Qo)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              물체가 시간 t까지 주변으로 전달한 <strong className="text-white">총 열량 Q</strong>는
              최대 가능 열량 <Math tex="Q_o" />에 대한 비율로 표현합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                열전달량 정의
              </h4>

              <EquationBox label="최대 열전달량" accent="cyan">
                <Math tex={`Q_o = \\rho V c_p (T_i - T_\\infty)`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 mb-4 text-center">
                <Math tex="Q_o" />는 물체가 최종적으로 <Math tex="T_\\infty" />에 도달할 때 방출하는 총 열량
              </p>

              <EquationBox label="시간 t까지의 열전달량 비율" accent="orange">
                <Math tex={`\\frac{Q}{Q_o} = 1 - \\bar{\\theta}^*`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                <Math tex="\\bar{\\theta}^*" />: 물체 전체의 평균 무차원 온도
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                형상별 Q/Qo 공식 (One-term approximation)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">형상</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Q/Qo 공식</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Plane Wall</td>
                      <td className="py-3 px-4"><Math tex="\\frac{Q}{Q_o} = 1 - \\theta_0^* \\frac{\\sin\\zeta_1}{\\zeta_1}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">Infinite Cylinder</td>
                      <td className="py-3 px-4"><Math tex="\\frac{Q}{Q_o} = 1 - 2\\theta_0^* \\frac{J_1(\\zeta_1)}{\\zeta_1}" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-blue-400">Sphere</td>
                      <td className="py-3 px-4"><Math tex="\\frac{Q}{Q_o} = 1 - 3\\theta_0^* \\frac{\\sin\\zeta_1 - \\zeta_1\\cos\\zeta_1}{\\zeta_1^3}" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 5. 예제: Chart 사용 */}
          <SectionDivider number="5" title="Example: Using Heisler Charts" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 7.1: 강구 담금질
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 직경 50mm의 스테인리스 스틸 구가 균일하게 400°C로 가열된 후
                  30°C 오일에 담금질된다. 오일의 대류 열전달 계수는 500 W/(m²·K)이다.
                </p>
                <p className="mb-4">
                  <strong className="text-white">물성치:</strong> k = 15 W/(m·K), <Math tex="\\alpha" /> = 4.0 × 10⁻⁶ m²/s
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>200초 후 구의 중심 온도는?</li>
                  <li>200초 후 구의 표면 온도는?</li>
                  <li>200초까지 구가 방출한 총 열량은?</li>
                </ol>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: 무차원수 계산</p>
                  <Math tex={`r_o = 0.025 \\text{ m}`} display />
                  <Math tex={`Bi = \\frac{hr_o}{k} = \\frac{500 \\times 0.025}{15} = 0.833`} display />
                  <Math tex={`Fo = \\frac{\\alpha t}{r_o^2} = \\frac{4.0 \\times 10^{-6} \\times 200}{(0.025)^2} = 1.28`} display />
                  <p className="text-xs text-gray-500 mt-2">Fo = 1.28 &gt; 0.2 &rarr; One-term approximation 유효</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 2: Chart 1에서 중심 온도</p>
                  <p className="text-sm text-gray-400 mb-2">
                    Fo = 1.28, 1/Bi = 1.2로 Chart에서 읽으면:
                  </p>
                  <Math tex={`\\theta_0^* \\approx 0.17`} display />
                  <Math tex={`T_0 = T_\\infty + \\theta_0^*(T_i - T_\\infty) = 30 + 0.17(400 - 30) = \\boxed{92.9°\\text{C}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: Chart 2에서 표면 온도</p>
                  <p className="text-sm text-gray-400 mb-2">
                    r/ro = 1, Bi = 0.833으로 Chart에서 읽으면:
                  </p>
                  <Math tex={`\\frac{\\theta^*}{\\theta_0^*} \\approx 0.80`} display />
                  <Math tex={`\\theta_s^* = 0.80 \\times 0.17 = 0.136`} display />
                  <Math tex={`T_s = 30 + 0.136(400 - 30) = \\boxed{80.3°\\text{C}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 4: 총 열전달량</p>
                  <p className="text-sm text-gray-400 mb-2">
                    Chart 3에서 <Math tex="Bi^2 \\cdot Fo = 0.833^2 \\times 1.28 = 0.89" />, Bi = 0.833:
                  </p>
                  <Math tex={`\\frac{Q}{Q_o} \\approx 0.80`} display />
                  <p className="text-sm text-gray-400 mt-2">
                    구가 최대 열량의 약 80%를 방출했음 (평형의 80% 도달)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. Chart의 현대적 대안 */}
          <SectionDivider number="6" title="Modern Alternatives to Charts" />

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Chart vs 직접 계산" accent="blue" icon="C">
              <p className="mb-2">
                현대에는 계산기, 스프레드시트, 프로그래밍 언어로 One-term approximation을 <strong className="text-white">직접 계산</strong>하는 것이 더 정확합니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">장점:</strong> 높은 정확도, 자동화 가능, 민감도 분석 용이</li>
                <li>&bull; <strong className="text-white">Chart 장점:</strong> 빠른 개략 계산, 트렌드 파악, 시험에서 유용</li>
              </ul>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                실무 권장 방법
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">빠른 추정 필요시</h5>
                  <p className="text-sm text-gray-400">
                    &rarr; Heisler Chart 또는 간단한 Online Calculator
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-2">정확한 계산 필요시</h5>
                  <p className="text-sm text-gray-400">
                    &rarr; One-term approximation 공식 직접 계산 (다음 섹션)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">복잡한 조건</h5>
                  <p className="text-sm text-gray-400">
                    &rarr; 수치해석 (Finite Difference, FEM)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-2">교육/시험</h5>
                  <p className="text-sm text-gray-400">
                    &rarr; Heisler Chart + 계수표 활용
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "blue" ? "border-blue-500/30" : "border-slate-700";
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

export default function MultidimensionalEffects() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Multidimensional Effects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            곱해 법칙(Product Solution)을 이용한 2D/3D 비정상 전도 해석
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 다차원 문제 소개 */}
          <SectionDivider number="1" title="Introduction to Multidimensional Problems" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              실제 물체는 종종 <strong className="text-white">2차원 또는 3차원</strong>에서 열전달이 발생합니다.
              예를 들어, 유한 원통(finite cylinder)은 반경 방향과 축 방향 모두에서 열전달이 있습니다.
              이러한 문제는 <strong className="text-white">곱해 법칙(Product Solution)</strong>으로 해결할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                다차원 문제 예시
              </h4>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">유한 직육면체</h5>
                  <p className="text-sm text-gray-400">
                    3개의 평판 조합<br />
                    <Math tex="2L_1 \\times 2L_2 \\times 2L_3" />
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">짧은 원통</h5>
                  <p className="text-sm text-gray-400">
                    무한 원통 + 평판<br />
                    반지름 <Math tex="r_o" />, 길이 <Math tex="2L" />
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-2">무한 직사각형 봉</h5>
                  <p className="text-sm text-gray-400">
                    2개의 평판 조합<br />
                    <Math tex="2L_1 \\times 2L_2 \\times \\infty" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. 곱해 법칙 원리 */}
          <SectionDivider number="2" title="Product Solution Method" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              균일 초기 온도와 동일한 경계조건 유형을 가진 다차원 문제에서,
              전체 해는 각 방향의 <strong className="text-white">1차원 해의 곱</strong>으로 표현됩니다.
              이것이 <strong className="text-white">곱해 법칙(Product Solution)</strong>입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                곱해 법칙의 수학적 원리
              </h4>

              <EquationBox label="2D 문제 (예: 무한 직사각형 봉)" accent="cyan">
                <Math tex={`\\theta^*(x, y, t) = \\theta^*_{\\text{wall,1}}(x, t) \\times \\theta^*_{\\text{wall,2}}(y, t)`} display />
              </EquationBox>

              <div className="mt-4">
                <EquationBox label="3D 문제 (예: 직육면체)" accent="orange">
                  <Math tex={`\\theta^*(x, y, z, t) = \\theta^*_{\\text{wall,1}}(x) \\times \\theta^*_{\\text{wall,2}}(y) \\times \\theta^*_{\\text{wall,3}}(z)`} display />
                </EquationBox>
              </div>

              <p className="text-sm text-gray-500 mt-6 text-center">
                각 <Math tex="\\theta^*" />는 해당 방향의 1D One-term approximation 해
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="곱해 법칙의 조건" accent="yellow" icon="!">
              <p className="mb-2">
                곱해 법칙이 유효하려면:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">균일한 초기 온도</strong> (<Math tex="T_i" /> = const)</li>
                <li>&bull; 모든 표면에서 <strong className="text-white">동일한 유체 온도</strong> (<Math tex="T_\\infty" /> = const)</li>
                <li>&bull; 좌표계가 <strong className="text-white">직교(orthogonal)</strong>해야 함</li>
                <li>&bull; 물성치가 <strong className="text-white">일정</strong>해야 함</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. 형상별 조합 */}
          <SectionDivider number="3" title="Common Geometry Combinations" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                다차원 형상과 1D 조합
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">형상</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">1D 조합</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Product Solution</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">무한 직사각형 봉</td>
                      <td className="py-3 px-4">P(x) × P(y)</td>
                      <td className="py-3 px-4"><Math tex="\\theta^* = \\theta^*_P(x) \\cdot \\theta^*_P(y)" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">짧은 원통</td>
                      <td className="py-3 px-4">C(r) × P(x)</td>
                      <td className="py-3 px-4"><Math tex="\\theta^* = \\theta^*_C(r) \\cdot \\theta^*_P(x)" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-blue-400">직육면체</td>
                      <td className="py-3 px-4">P(x) × P(y) × P(z)</td>
                      <td className="py-3 px-4"><Math tex="\\theta^* = \\theta^*_P(x) \\cdot \\theta^*_P(y) \\cdot \\theta^*_P(z)" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-emerald-400">반무한 평판</td>
                      <td className="py-3 px-4">P(x) × S(y)</td>
                      <td className="py-3 px-4"><Math tex="\\theta^* = \\theta^*_P(x) \\cdot \\theta^*_S(y)" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                P: Plane Wall, C: Cylinder, S: Semi-infinite
              </p>
            </div>
          </motion.div>

          {/* 4. 짧은 원통 예시 */}
          <SectionDivider number="4" title="Example: Short Cylinder" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                짧은 원통 (Short Cylinder)
              </h4>

              <p className="text-sm text-gray-400 mb-6">
                반지름 <Math tex="r_o" />, 반길이 L인 원통이 대류(<Math tex="h, T_\\infty" />)로 냉각될 때:
              </p>

              <EquationBox label="곱해 법칙" accent="orange">
                <Math tex={`\\theta^*(r, x, t)_{\\text{short cyl}} = \\theta^*(r, t)_{\\text{inf cyl}} \\times \\theta^*(x, t)_{\\text{plane wall}}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-orange-400">무한 원통 (Infinite Cylinder):</strong><br />
                  <Math tex="Bi_c = hr_o/k" />, <Math tex="Fo_c = \\alpha t/r_o^2" /><br />
                  <Math tex="\\theta^*_C = C_1 \\exp(-\\zeta_1^2 Fo_c) \\cdot J_0(\\zeta_1 r^*)" />
                </p>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-cyan-400">평판 (Plane Wall):</strong><br />
                  <Math tex="Bi_P = hL/k" />, <Math tex="Fo_P = \\alpha t/L^2" /><br />
                  <Math tex="\\theta^*_P = C_1 \\exp(-\\zeta_1^2 Fo_P) \\cdot \\cos(\\zeta_1 x^*)" />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="주의: 각 방향의 Bi, Fo는 다름" accent="red" icon="!">
              <p>
                곱해 법칙에서 각 1D 해는 <strong className="text-white">해당 방향의 특성 길이</strong>를 사용합니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; 원통 방향: <Math tex="L = r_o" /> 사용</li>
                <li>&bull; 축 방향: <Math tex="L = L" /> (반길이) 사용</li>
                <li>&bull; 각각 다른 Bi, Fo, <Math tex="\\zeta_1" />, <Math tex="C_1" /> 값</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 5. 예제 문제 */}
          <SectionDivider number="5" title="Example Problem" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 7.5: 짧은 스테인리스 스틸 원통 담금질
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 직경 60mm, 길이 100mm의 스테인리스 스틸 원통이
                  300°C에서 25°C 오일에 담금질된다. h = 500 W/(m²·K)일 때,
                  300초 후 원통 중심 온도는?
                </p>
                <p className="mb-4">
                  <strong className="text-white">물성치:</strong> k = 15 W/(m·K), <Math tex="\\alpha = 4.0 \\times 10^{-6}" /> m²/s
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: 무한 원통 방향</p>
                  <Math tex={`r_o = 0.03 \\text{ m}`} display />
                  <Math tex={`Bi_C = \\frac{hr_o}{k} = \\frac{500 \\times 0.03}{15} = 1.0`} display />
                  <Math tex={`Fo_C = \\frac{\\alpha t}{r_o^2} = \\frac{4.0 \\times 10^{-6} \\times 300}{(0.03)^2} = 1.33`} display />
                  <p className="text-xs text-gray-500 mt-2">
                    표에서 Bi = 1.0: <Math tex="\\zeta_1 = 1.2558" />, <Math tex="C_1 = 1.2071" />
                  </p>
                  <Math tex={`\\theta^*_{0,C} = 1.2071 \\times \\exp(-1.2558^2 \\times 1.33) = 1.2071 \\times \\exp(-2.10) = 0.148`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 2: 평판 방향</p>
                  <Math tex={`L = 0.05 \\text{ m (반길이)}`} display />
                  <Math tex={`Bi_P = \\frac{hL}{k} = \\frac{500 \\times 0.05}{15} = 1.67`} display />
                  <Math tex={`Fo_P = \\frac{\\alpha t}{L^2} = \\frac{4.0 \\times 10^{-6} \\times 300}{(0.05)^2} = 0.48`} display />
                  <p className="text-xs text-gray-500 mt-2">
                    표에서 Bi ≈ 1.67 (내삽): <Math tex="\\zeta_1 \\approx 1.02" />, <Math tex="C_1 \\approx 1.16" />
                  </p>
                  <Math tex={`\\theta^*_{0,P} = 1.16 \\times \\exp(-1.02^2 \\times 0.48) = 1.16 \\times \\exp(-0.50) = 0.704`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: 곱해 법칙 적용</p>
                  <Math tex={`\\theta^*_0 = \\theta^*_{0,C} \\times \\theta^*_{0,P} = 0.148 \\times 0.704 = 0.104`} display />
                  <Math tex={`T_0 = T_\\infty + \\theta^*_0(T_i - T_\\infty) = 25 + 0.104(300 - 25)`} display />
                  <Math tex={`T_0 = 25 + 28.6 = \\boxed{53.6°\\text{C}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">물리적 해석</p>
                  <p className="text-sm text-gray-400">
                    300초 후 중심 온도는 53.6°C입니다. 참고로:<br />
                    - 무한 원통만 가정: <Math tex="T_0 = 25 + 0.148 \\times 275 = 65.7°C" /><br />
                    - 평판만 가정: <Math tex="T_0 = 25 + 0.704 \\times 275 = 218.6°C" /><br />
                    <strong className="text-white">두 방향 효과가 결합되어 더 빠르게 냉각됩니다.</strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. 열전달량 */}
          <SectionDivider number="6" title="Total Heat Transfer in Multidimensional Systems" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              다차원 물체의 총 열전달량도 곱해 법칙과 유사하게 계산할 수 있지만,
              조금 더 복잡한 조합 규칙을 따릅니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                2D 문제의 열전달량
              </h4>

              <EquationBox label="무한 직사각형 봉" accent="blue">
                <Math tex={`\\left(\\frac{Q}{Q_o}\\right)_{2D} = \\left(\\frac{Q}{Q_o}\\right)_1 + \\left(\\frac{Q}{Q_o}\\right)_2 \\left[1 - \\left(\\frac{Q}{Q_o}\\right)_1\\right]`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                또는 등가적으로: <Math tex="1 - (Q/Q_o)_{2D} = (1 - (Q/Q_o)_1)(1 - (Q/Q_o)_2)" />
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                3D 문제의 열전달량 (직육면체)
              </h4>

              <EquationBox label="직육면체" accent="blue">
                <Math tex={`1 - \\left(\\frac{Q}{Q_o}\\right)_{3D} = \\left(1 - \\frac{Q_1}{Q_{o,1}}\\right)\\left(1 - \\frac{Q_2}{Q_{o,2}}\\right)\\left(1 - \\frac{Q_3}{Q_{o,3}}\\right)`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="실무적 적용" accent="emerald" icon="A">
              <p className="mb-2">
                곱해 법칙은 다음과 같은 실제 문제에 적용됩니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">식품 공학:</strong> 통조림, 냉동 식품 온도 예측</li>
                <li>&bull; <strong className="text-white">금속 가공:</strong> 열처리 시간 계산</li>
                <li>&bull; <strong className="text-white">전자 공학:</strong> 패키지 칩의 열응답</li>
                <li>&bull; <strong className="text-white">건축:</strong> 벽체 모서리 열손실</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

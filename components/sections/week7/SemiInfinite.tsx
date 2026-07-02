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
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "purple" ? "border-purple-500/30" : "border-slate-700";
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
    purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", iconBg: "bg-purple-500/20" },
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

export default function SemiInfinite() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Semi-Infinite Solid
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            반무한 고체의 비정상 열전도 해석: 표면 효과가 내부 깊이까지 침투하지 않는 경우
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 개념 소개 */}
          <SectionDivider number="1" title="What is a Semi-Infinite Solid?" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">반무한 고체(Semi-infinite solid)</strong>는 한쪽 방향으로 무한히 뻗어있는
              이상화된 물체입니다. 실제로는 열적 교란이 물체의 반대편까지 도달하지 않는
              <strong className="text-white">초기 시간</strong> 또는 <strong className="text-white">큰 물체</strong>에 적용됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                반무한 고체 가정의 유효성
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-2">적용 가능한 경우</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 비정상 전도의 초기 단계</li>
                    <li>&bull; 매우 두꺼운 벽의 열 침투</li>
                    <li>&bull; 지표면 온도 변화 해석</li>
                    <li>&bull; 레이저/용접 가열의 초기 응답</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-2">유효 조건</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    열침투 깊이 <Math tex="\\delta_p" />가 물체 두께 L보다 작을 때:
                  </p>
                  <Math tex={`\\delta_p \\approx \\sqrt{\\alpha t} < L`} display />
                  <p className="text-xs text-gray-500 mt-2">
                    또는 <Math tex="Fo = \\alpha t/L^2 < 0.05" /> 정도
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="열 침투 깊이 (Thermal Penetration Depth)" accent="orange" icon="δ">
              <p>
                <Math tex="\\delta_p \\sim \\sqrt{\\alpha t}" />는 열적 교란이 도달하는 <strong className="text-white">특성 깊이</strong>입니다.
                열확산계수 <Math tex="\\alpha" />가 크거나 시간이 길수록 더 깊이 침투합니다.
                99% 온도 변화 기준으로 <Math tex="\\delta_{99} \\approx 4\\sqrt{\\alpha t}" /> 정도입니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. 지배방정식과 조건 */}
          <SectionDivider number="2" title="Governing Equation and Conditions" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                수학적 정식화
              </h4>

              <EquationBox label="지배방정식" accent="cyan">
                <Math tex={`\\frac{\\partial^2 T}{\\partial x^2} = \\frac{1}{\\alpha}\\frac{\\partial T}{\\partial t}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">초기조건 및 경계조건</h5>
                <div className="space-y-2 text-sm text-gray-400">
                  <p><strong className="text-cyan-400">초기조건:</strong> <Math tex="T(x, 0) = T_i" /> (균일 초기 온도)</p>
                  <p><strong className="text-cyan-400">내부조건:</strong> <Math tex="T(x \\to \\infty, t) = T_i" /> (무한 깊이에서 초기 온도 유지)</p>
                  <p><strong className="text-cyan-400">표면조건:</strong> 3가지 경우를 고려</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Case 1: 일정 표면 온도 */}
          <SectionDivider number="3" title="Case 1: Constant Surface Temperature" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              표면 온도가 순간적으로 <Math tex="T_s" />로 변하고 유지되는 경우입니다.
              이상적인 담금질이나 증기 응축과 같은 상황에 해당합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                경계조건: <Math tex="T(0, t) = T_s" /> (constant)
              </h4>

              <EquationBox label="온도 분포" accent="cyan">
                <Math tex={`\\frac{T(x,t) - T_s}{T_i - T_s} = \\text{erf}\\left(\\frac{x}{2\\sqrt{\\alpha t}}\\right)`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 mb-4 text-center">
                또는 <Math tex="T(x,t) = T_s + (T_i - T_s) \\cdot \\text{erf}(\\eta)" />, 여기서 <Math tex="\\eta = x/(2\\sqrt{\\alpha t})" />
              </p>

              <EquationBox label="표면 열유속" accent="orange">
                <Math tex={`q''_s(t) = \\frac{k(T_s - T_i)}{\\sqrt{\\pi \\alpha t}}`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="오차 함수 (Error Function)" accent="blue" icon="erf">
              <p className="mb-2">
                <strong className="text-white">erf(x)</strong>는 Gauss 오차 함수입니다:
              </p>
              <Math tex={`\\text{erf}(\\eta) = \\frac{2}{\\sqrt{\\pi}} \\int_0^{\\eta} e^{-u^2} du`} display />
              <ul className="space-y-1 mt-2 text-sm">
                <li>&bull; erf(0) = 0, erf(&infin;) = 1</li>
                <li>&bull; erf(0.5) ≈ 0.5205, erf(1) ≈ 0.8427, erf(2) ≈ 0.9953</li>
                <li>&bull; 여함수: erfc(x) = 1 - erf(x)</li>
              </ul>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                Gaussian Error Function 표
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="\\eta" /></th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">erf(η)</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">erfc(η)</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="\\eta" /></th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">erf(η)</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">erfc(η)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300 font-mono text-xs">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.00</td><td className="py-2 px-3">0.0000</td><td className="py-2 px-3">1.0000</td>
                      <td className="py-2 px-3">1.00</td><td className="py-2 px-3">0.8427</td><td className="py-2 px-3">0.1573</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.10</td><td className="py-2 px-3">0.1125</td><td className="py-2 px-3">0.8875</td>
                      <td className="py-2 px-3">1.20</td><td className="py-2 px-3">0.9103</td><td className="py-2 px-3">0.0897</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.20</td><td className="py-2 px-3">0.2227</td><td className="py-2 px-3">0.7773</td>
                      <td className="py-2 px-3">1.40</td><td className="py-2 px-3">0.9523</td><td className="py-2 px-3">0.0477</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.30</td><td className="py-2 px-3">0.3286</td><td className="py-2 px-3">0.6714</td>
                      <td className="py-2 px-3">1.60</td><td className="py-2 px-3">0.9763</td><td className="py-2 px-3">0.0237</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.40</td><td className="py-2 px-3">0.4284</td><td className="py-2 px-3">0.5716</td>
                      <td className="py-2 px-3">1.80</td><td className="py-2 px-3">0.9891</td><td className="py-2 px-3">0.0109</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.50</td><td className="py-2 px-3">0.5205</td><td className="py-2 px-3">0.4795</td>
                      <td className="py-2 px-3">2.00</td><td className="py-2 px-3">0.9953</td><td className="py-2 px-3">0.0047</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.60</td><td className="py-2 px-3">0.6039</td><td className="py-2 px-3">0.3961</td>
                      <td className="py-2 px-3">2.50</td><td className="py-2 px-3">0.9996</td><td className="py-2 px-3">0.0004</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">0.80</td><td className="py-2 px-3">0.7421</td><td className="py-2 px-3">0.2579</td>
                      <td className="py-2 px-3">3.00</td><td className="py-2 px-3">1.0000</td><td className="py-2 px-3">0.0000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 4. Case 2: 일정 열유속 */}
          <SectionDivider number="4" title="Case 2: Constant Surface Heat Flux" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              표면에 일정한 열유속 <Math tex="q''_0" />이 가해지는 경우입니다.
              레이저 가열, 전기 히터, 일사량 등이 이에 해당합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                경계조건: <Math tex="-k\\frac{\\partial T}{\\partial x}\\bigg|_{x=0} = q''_0" /> (constant)
              </h4>

              <EquationBox label="온도 분포" accent="orange">
                <Math tex={`T(x,t) - T_i = \\frac{2q''_0 \\sqrt{\\alpha t/\\pi}}{k} \\exp\\left(-\\frac{x^2}{4\\alpha t}\\right) - \\frac{q''_0 x}{k} \\text{erfc}\\left(\\frac{x}{2\\sqrt{\\alpha t}}\\right)`} display />
              </EquationBox>

              <EquationBox label="표면 온도 (x=0)" accent="orange">
                <Math tex={`T_s(t) - T_i = \\frac{2q''_0}{k}\\sqrt{\\frac{\\alpha t}{\\pi}}`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="표면 온도의 시간 의존성" accent="orange" icon="t">
              <p>
                일정 열유속에서 표면 온도는 <Math tex="\\sqrt{t}" />에 비례하여 <strong className="text-white">천천히 증가</strong>합니다.
                무한 시간이 지나면 표면 온도는 무한대로 발산하지만, 실제로는 유한한 물체 크기나
                다른 메커니즘(복사, 대류)에 의해 제한됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. Case 3: 표면 대류 */}
          <SectionDivider number="5" title="Case 3: Surface Convection" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              표면이 온도 <Math tex="T_\\infty" />의 유체와 열전달 계수 h로 대류 열전달하는 경우입니다.
              가장 일반적인 실제 상황입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                경계조건: <Math tex="-k\\frac{\\partial T}{\\partial x}\\bigg|_{x=0} = h(T_\\infty - T_s)" />
              </h4>

              <EquationBox label="온도 분포" accent="purple">
                <Math tex={`\\frac{T(x,t) - T_i}{T_\\infty - T_i} = \\text{erfc}\\left(\\frac{x}{2\\sqrt{\\alpha t}}\\right) - \\exp\\left(\\frac{hx}{k} + \\frac{h^2\\alpha t}{k^2}\\right)\\text{erfc}\\left(\\frac{x}{2\\sqrt{\\alpha t}} + \\frac{h\\sqrt{\\alpha t}}{k}\\right)`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                간단히 표현하면: <Math tex="\\theta = \\text{erfc}(\\eta) - \\exp(\\beta x^+ + \\beta^2 Fo)\\text{erfc}(\\eta + \\beta\\sqrt{Fo})" />
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  여기서 <Math tex="\\beta = h\\sqrt{\\alpha t}/k" />, <Math tex="\\eta = x/(2\\sqrt{\\alpha t})" />, <Math tex="x^+ = x/\\sqrt{\\alpha t}" />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="대류 경계조건의 특성" accent="purple" icon="h">
              <p className="mb-2">
                대류 경계조건에서 표면 온도는 <strong className="text-white">시간에 따라 변합니다</strong>:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; t = 0: <Math tex="T_s = T_i" /> (초기 온도)</li>
                <li>&bull; t &rarr; &infin;: <Math tex="T_s \\to T_\\infty" /> (유체 온도에 접근)</li>
                <li>&bull; <Math tex="h \\to \\infty" />: Case 1 (일정 표면 온도)에 수렴</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 6. 예제 */}
          <SectionDivider number="6" title="Example Problems" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 7.3: 지표면 온도 변화
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 균일 온도 15°C의 토양이 있다. 갑자기 지표면이 -10°C로 낮아졌다.
                  12시간 후, 깊이 0.3m에서의 토양 온도는?
                </p>
                <p className="mb-4">
                  <strong className="text-white">토양 물성치:</strong> <Math tex="\\alpha = 0.5 \\times 10^{-6}" /> m²/s
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">풀이: Case 1 (일정 표면 온도)</p>
                  <p className="text-sm text-gray-400 mb-2">
                    주어진 값: <Math tex="T_i = 15°C" />, <Math tex="T_s = -10°C" />, x = 0.3m, t = 12h = 43,200s
                  </p>
                  <Math tex={`\\eta = \\frac{x}{2\\sqrt{\\alpha t}} = \\frac{0.3}{2\\sqrt{0.5 \\times 10^{-6} \\times 43200}} = \\frac{0.3}{2 \\times 0.147} = 1.02`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">오차 함수 값</p>
                  <p className="text-sm text-gray-400 mb-2">
                    표에서 <Math tex="\\text{erf}(1.02) \\approx 0.85" /> (η=1.0에서 0.8427, 선형 내삽)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">온도 계산</p>
                  <Math tex={`\\frac{T - T_s}{T_i - T_s} = \\text{erf}(1.02) = 0.85`} display />
                  <Math tex={`T - (-10) = 0.85 \\times (15 - (-10)) = 0.85 \\times 25 = 21.25`} display />
                  <Math tex={`T = -10 + 21.25 = \\boxed{11.25°\\text{C}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">물리적 해석</p>
                  <p className="text-sm text-gray-400">
                    12시간 후 깊이 0.3m에서 온도는 초기 15°C에서 약 11.25°C로 약간 감소했습니다.
                    열 침투 깊이: <Math tex="\\delta_{99} \\approx 4\\sqrt{\\alpha t} = 4 \\times 0.147 = 0.59" />m
                    따라서 0.3m는 영향 범위 내입니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 7.4: 레이저 표면 가열
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 초기 온도 25°C의 스테인리스 스틸 표면에 레이저로
                  <Math tex="q''_0 = 10^6" /> W/m² 열유속을 가한다. 10초 후 표면 온도는?
                </p>
                <p className="mb-4">
                  <strong className="text-white">물성치:</strong> k = 15 W/(m·K), <Math tex="\\alpha = 4.0 \\times 10^{-6}" /> m²/s
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">풀이: Case 2 (일정 열유속)</p>
                  <Math tex={`T_s - T_i = \\frac{2q''_0}{k}\\sqrt{\\frac{\\alpha t}{\\pi}}`} display />
                  <Math tex={`T_s - 25 = \\frac{2 \\times 10^6}{15}\\sqrt{\\frac{4.0 \\times 10^{-6} \\times 10}{\\pi}}`} display />
                  <Math tex={`T_s - 25 = 1.333 \\times 10^5 \\times \\sqrt{1.27 \\times 10^{-5}}`} display />
                  <Math tex={`T_s - 25 = 1.333 \\times 10^5 \\times 3.57 \\times 10^{-3} = 476`} display />
                  <Math tex={`T_s = \\boxed{501°\\text{C}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">실무적 고려사항</p>
                  <p className="text-sm text-gray-400">
                    고출력 레이저 가열에서 표면 온도가 급격히 상승합니다.
                    실제로는 융점(~1400°C), 산화, 대류 손실 등을 고려해야 합니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 7. 공식 요약 */}
          <SectionDivider number="7" title="Summary of Semi-Infinite Solid Solutions" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                반무한 고체 해 요약
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Case</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">경계조건</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">표면 온도/열유속</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">1. Constant <Math tex="T_s" /></td>
                      <td className="py-3 px-4"><Math tex="T(0,t) = T_s" /></td>
                      <td className="py-3 px-4"><Math tex="q''_s = \\frac{k(T_s-T_i)}{\\sqrt{\\pi\\alpha t}}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">2. Constant <Math tex="q''_0" /></td>
                      <td className="py-3 px-4"><Math tex="-k\\partial T/\\partial x|_0 = q''_0" /></td>
                      <td className="py-3 px-4"><Math tex="T_s-T_i = \\frac{2q''_0}{k}\\sqrt{\\frac{\\alpha t}{\\pi}}" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-purple-400">3. Convection</td>
                      <td className="py-3 px-4"><Math tex="-k\\partial T/\\partial x|_0 = h(T_\\infty-T_s)" /></td>
                      <td className="py-3 px-4">복합 erfc 해</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "blue" ? "border-blue-500/30" : "border-slate-700";
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

export default function ExactSolutions() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Exact Series Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            평판, 원통, 구에 대한 정확한 급수해의 형태를 살펴봅니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 해법 원리 */}
          <SectionDivider number="1" title="Solution Method: Separation of Variables" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              1차원 비정상 열전도 방정식의 정확해는 <strong className="text-white">변수분리법(Separation of Variables)</strong>을
              사용하여 구할 수 있습니다. 이 방법은 편미분 방정식을 상미분 방정식으로 변환합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                변수분리법 개요
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Step 1: 해의 형태 가정</p>
                  <Math tex={`\\theta^*(x^*, Fo) = X(x^*) \\cdot \\Gamma(Fo)`} display />
                  <p className="text-xs text-gray-500 mt-2">공간 함수와 시간 함수의 곱으로 분리</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Step 2: 편미분 방정식을 대입하여 분리</p>
                  <Math tex={`\\frac{1}{X}\\frac{d^2 X}{dx^{*2}} = \\frac{1}{\\Gamma}\\frac{d\\Gamma}{dFo} = -\\lambda^2`} display />
                  <p className="text-xs text-gray-500 mt-2">양변이 같으려면 상수(<Math tex="-\\lambda^2" />)여야 함</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Step 3: 상미분 방정식 풀이</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                    <div>
                      <p className="text-orange-400 font-bold mb-1">공간 방정식:</p>
                      <Math tex={`\\frac{d^2 X}{dx^{*2}} + \\lambda^2 X = 0`} display />
                    </div>
                    <div>
                      <p className="text-orange-400 font-bold mb-1">시간 방정식:</p>
                      <Math tex={`\\frac{d\\Gamma}{dFo} + \\lambda^2 \\Gamma = 0`} display />
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Step 4: 경계조건 적용 &rarr; 고유값 결정</p>
                  <p className="text-sm text-gray-400">
                    경계조건을 만족하는 <Math tex="\\lambda_n" /> (n = 1, 2, 3, ...) 결정<br />
                    초기조건으로 계수 <Math tex="C_n" /> 결정
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. 평판의 정확해 */}
          <SectionDivider number="2" title="Plane Wall: Exact Solution" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                평판 (두께 2L, 양면 대류)
              </h4>

              <EquationBox label="정확해 (Exact Series Solution)" accent="cyan">
                <Math tex={`\\theta^* = \\frac{T - T_\\infty}{T_i - T_\\infty} = \\sum_{n=1}^{\\infty} C_n \\exp(-\\zeta_n^2 Fo) \\cos(\\zeta_n x^*)`} display />
              </EquationBox>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">고유값 방정식</p>
                  <Math tex={`\\zeta_n \\tan(\\zeta_n) = Bi`} display />
                  <p className="text-xs text-gray-500 mt-2">무한히 많은 양의 근 <Math tex="\\zeta_1, \\zeta_2, \\zeta_3, ..." /></p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">계수</p>
                  <Math tex={`C_n = \\frac{4\\sin\\zeta_n}{2\\zeta_n + \\sin(2\\zeta_n)}`} display />
                  <p className="text-xs text-gray-500 mt-2">Fourier 급수로부터 유도</p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">변수 정의:</strong><br />
                  <Math tex="x^* = x/L" /> (0 = 중심, 1 = 표면)<br />
                  <Math tex="Fo = \\alpha t / L^2" /> (무차원 시간)<br />
                  <Math tex="Bi = hL/k" /> (Biot 수)
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. 원통의 정확해 */}
          <SectionDivider number="3" title="Infinite Cylinder: Exact Solution" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                무한 원통 (반지름 <Math tex="r_o" />, 외부 대류)
              </h4>

              <EquationBox label="정확해 (Exact Series Solution)" accent="orange">
                <Math tex={`\\theta^* = \\frac{T - T_\\infty}{T_i - T_\\infty} = \\sum_{n=1}^{\\infty} C_n \\exp(-\\zeta_n^2 Fo) \\cdot J_0(\\zeta_n r^*)`} display />
              </EquationBox>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">고유값 방정식</p>
                  <Math tex={`\\zeta_n \\frac{J_1(\\zeta_n)}{J_0(\\zeta_n)} = Bi`} display />
                  <p className="text-xs text-gray-500 mt-2"><Math tex="J_0, J_1" />: 제1종 Bessel 함수</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">계수</p>
                  <Math tex={`C_n = \\frac{2}{\\zeta_n} \\cdot \\frac{J_1(\\zeta_n)}{J_0^2(\\zeta_n) + J_1^2(\\zeta_n)}`} display />
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">변수 정의:</strong><br />
                  <Math tex="r^* = r/r_o" /> (0 = 중심, 1 = 표면)<br />
                  <Math tex="Fo = \\alpha t / r_o^2" />, <Math tex="Bi = hr_o/k" />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Bessel 함수" accent="orange" icon="J">
              <p>
                <Math tex="J_0(x)" />와 <Math tex="J_1(x)" />은 <strong className="text-white">제1종 Bessel 함수</strong>입니다.
                원통 좌표계에서 자연스럽게 나타나는 특수 함수로, 공학용 계산기나 수학 소프트웨어로 계산할 수 있습니다.
                실무에서는 주로 표나 차트를 사용합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. 구의 정확해 */}
          <SectionDivider number="4" title="Sphere: Exact Solution" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                구 (반지름 <Math tex="r_o" />, 외부 대류)
              </h4>

              <EquationBox label="정확해 (Exact Series Solution)" accent="blue">
                <Math tex={`\\theta^* = \\frac{T - T_\\infty}{T_i - T_\\infty} = \\sum_{n=1}^{\\infty} C_n \\exp(-\\zeta_n^2 Fo) \\cdot \\frac{\\sin(\\zeta_n r^*)}{\\zeta_n r^*}`} display />
              </EquationBox>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">고유값 방정식</p>
                  <Math tex={`1 - \\zeta_n \\cot(\\zeta_n) = Bi`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">계수</p>
                  <Math tex={`C_n = \\frac{4(\\sin\\zeta_n - \\zeta_n\\cos\\zeta_n)}{2\\zeta_n - \\sin(2\\zeta_n)}`} display />
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">변수 정의:</strong><br />
                  <Math tex="r^* = r/r_o" /> (0 = 중심, 1 = 표면)<br />
                  <Math tex="Fo = \\alpha t / r_o^2" />, <Math tex="Bi = hr_o/k" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5. 급수해의 수렴 */}
          <SectionDivider number="5" title="Convergence of Series Solution" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              급수해에서 각 항의 크기는 <Math tex="\\exp(-\\zeta_n^2 Fo)" />에 비례합니다.
              <Math tex="\\zeta_n" />이 증가함에 따라 이 항이 빠르게 감소하므로,
              시간이 충분히 지나면 <strong className="text-white">첫 번째 항만으로도 좋은 근사</strong>가 됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                급수 항의 상대적 크기 (평판, Bi = 1)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">n</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="\\zeta_n" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="\\exp(-\\zeta_n^2 \\cdot 0.1)" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="\\exp(-\\zeta_n^2 \\cdot 0.2)" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="\\exp(-\\zeta_n^2 \\cdot 0.5)" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">1</td>
                      <td className="py-3 px-4">0.8603</td>
                      <td className="py-3 px-4">0.929</td>
                      <td className="py-3 px-4">0.863</td>
                      <td className="py-3 px-4">0.690</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">2</td>
                      <td className="py-3 px-4">3.4256</td>
                      <td className="py-3 px-4">0.309</td>
                      <td className="py-3 px-4">0.096</td>
                      <td className="py-3 px-4">0.003</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-yellow-400">3</td>
                      <td className="py-3 px-4">6.4373</td>
                      <td className="py-3 px-4">0.016</td>
                      <td className="py-3 px-4">0.00025</td>
                      <td className="py-3 px-4">~0</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-500">4</td>
                      <td className="py-3 px-4">9.5293</td>
                      <td className="py-3 px-4">0.0001</td>
                      <td className="py-3 px-4">~0</td>
                      <td className="py-3 px-4">~0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="One-Term Approximation 유효 조건" accent="emerald" icon="1">
              <p className="mb-2">
                표에서 볼 수 있듯이, <Math tex="Fo > 0.2" />일 때:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; 첫 번째 항이 전체의 약 <strong className="text-white">99% 이상</strong>을 차지</li>
                <li>&bull; 두 번째 이후 항은 <strong className="text-white">무시 가능</strong></li>
                <li>&bull; 따라서 <strong className="text-emerald-300">One-Term Approximation</strong> 사용 가능</li>
              </ul>
              <p className="mt-2 text-gray-500">
                <Math tex="Fo < 0.2" />에서는 여러 항을 고려해야 하지만, 실무에서는 드문 경우입니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. 정확해의 한계 */}
          <SectionDivider number="6" title="Limitations of Exact Solutions" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-6">
                정확해 사용의 실질적 한계
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-yellow-400 font-bold mb-2">계산 복잡성</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 고유값 방정식을 수치적으로 풀어야 함</li>
                    <li>&bull; 무한 급수 합산 필요</li>
                    <li>&bull; Bessel 함수 계산 (원통)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-yellow-400 font-bold mb-2">적용 조건 제한</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 단순 형상만 해석 가능</li>
                    <li>&bull; 균일한 초기 온도 가정</li>
                    <li>&bull; 일정한 물성치 가정</li>
                    <li>&bull; 일정한 경계조건 가정</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-gray-400 mt-6 text-center">
                &rarr; 실무에서는 <strong className="text-white">One-Term Approximation</strong>이나
                <strong className="text-white">수치해석</strong>을 주로 사용
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

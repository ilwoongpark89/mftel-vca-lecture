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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "orange",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "orange" ? "border-orange-500/30" : accent === "amber" ? "border-amber-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "red" ? "border-red-500/30" : accent === "blue" ? "border-blue-500/30" : "border-slate-700";
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
  accent = "orange",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    amber: { bg: "bg-amber-500/5", border: "border-amber-500/20", text: "text-amber-400", iconBg: "bg-amber-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
  };
  const c = colors[accent] || colors.orange;
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

export default function CylindersAndSpheres() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cylinders and Spheres
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            수평 원통과 구의 자연 대류 열전달
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 수평 원통 개요 */}
          <SectionDivider number="1" title="Horizontal Cylinder" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">수평 원통</strong>은 파이프라인, 전선, 히터 등 많은 공학 응용에서 나타납니다.
              원통 주위의 자연 대류 열전달은 직경을 특성 길이로 사용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                수평 원통의 유동 패턴
              </h4>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-2">가열 원통 (T<sub>s</sub> &gt; T<sub>&infin;</sub>)</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 경계층이 하단에서 시작</li>
                    <li>&bull; 원통 측면을 따라 상승</li>
                    <li>&bull; 상단에서 플룸 형태로 이탈</li>
                    <li>&bull; 최대 h: 하단 (얇은 경계층)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">냉각 원통 (T<sub>s</sub> &lt; T<sub>&infin;</sub>)</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 경계층이 상단에서 시작</li>
                    <li>&bull; 원통 측면을 따라 하강</li>
                    <li>&bull; 하단에서 분리</li>
                    <li>&bull; 패턴이 가열 원통과 반대</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-orange-400">특성 길이:</strong> D (직경)<br/>
                  <strong className="text-orange-400">Rayleigh Number:</strong> <Math tex="Ra_D = g\beta(T_s-T_\infty)D^3/(\nu\alpha)" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. 수평 원통 상관식 */}
          <SectionDivider number="2" title="Horizontal Cylinder Correlations" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Churchill-Chu Correlation (수평 원통)
              </h4>

              <EquationBox label="전 영역 상관식" accent="orange">
                <Math tex={`\\overline{Nu}_D = \\left\\{ 0.60 + \\frac{0.387 Ra_D^{1/6}}{\\left[1 + (0.559/Pr)^{9/16}\\right]^{8/27}} \\right\\}^2`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <h5 className="text-emerald-400 font-bold mb-2">적용 범위</h5>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&bull; <strong>Rayleigh Number:</strong> <Math tex="10^{-5} < Ra_D < 10^{12}" /></li>
                  <li>&bull; <strong>모든 Prandtl Number:</strong> 0 &lt; Pr &lt; &infin;</li>
                  <li>&bull; <strong>등온 원통</strong> (Constant T<sub>s</sub>)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
                Morgan Correlation (간편식)
              </h4>

              <EquationBox label="간단한 형태" accent="amber">
                <Math tex={`\\overline{Nu}_D = C Ra_D^n`} display />
              </EquationBox>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">Ra<sub>D</sub> 범위</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">C</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">n</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3"><Math tex="10^{-10} - 10^{-2}" /></td>
                      <td className="py-2 px-3">0.675</td>
                      <td className="py-2 px-3">0.058</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3"><Math tex="10^{-2} - 10^2" /></td>
                      <td className="py-2 px-3">1.02</td>
                      <td className="py-2 px-3">0.148</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3 text-amber-400"><Math tex="10^2 - 10^4" /></td>
                      <td className="py-2 px-3 text-amber-400">0.850</td>
                      <td className="py-2 px-3 text-amber-400">0.188</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3 text-orange-400"><Math tex="10^4 - 10^7" /></td>
                      <td className="py-2 px-3 text-orange-400">0.480</td>
                      <td className="py-2 px-3 text-orange-400">0.250</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-red-400"><Math tex="10^7 - 10^{12}" /></td>
                      <td className="py-2 px-3 text-red-400">0.125</td>
                      <td className="py-2 px-3 text-red-400">0.333</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="수평 vs 수직 원통" accent="orange" icon="C">
              <p className="mb-2">
                수평 원통과 수직 원통의 열전달 차이:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">수평:</strong> 상관식이 간단, D가 특성 길이</li>
                <li>&bull; <strong className="text-white">수직:</strong> 수직 평판 상관식 사용 가능 (조건 만족 시)</li>
                <li>&bull; 같은 조건에서 수평 원통이 약간 높은 h</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. 구 */}
          <SectionDivider number="3" title="Spheres" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">구(Sphere)</strong> 주위의 자연 대류는
              구의 직경 D를 특성 길이로 사용합니다.
              구는 모든 방향에서 대칭이므로 하나의 상관식으로 표현됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                구의 유동 패턴
              </h4>

              <div className="p-4 rounded-xl bg-slate-900/50 mb-6">
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>&bull; <strong className="text-cyan-400">가열 구:</strong> 경계층이 하단에서 시작해 상단으로 상승</li>
                  <li>&bull; 구 상단에서 수직 플룸(wake) 형성</li>
                  <li>&bull; 국소 h: 하단(정체점)에서 최대, 상단으로 갈수록 감소</li>
                  <li>&bull; <strong className="text-cyan-400">냉각 구:</strong> 패턴이 반대 (상단에서 하단으로)</li>
                </ul>
              </div>

              <EquationBox label="Churchill Correlation" accent="cyan">
                <Math tex={`\\overline{Nu}_D = 2 + \\frac{0.589 Ra_D^{1/4}}{\\left[1 + (0.469/Pr)^{9/16}\\right]^{4/9}}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <h5 className="text-emerald-400 font-bold mb-2">적용 범위</h5>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&bull; <strong>Rayleigh Number:</strong> <Math tex="Ra_D < 10^{11}" /></li>
                  <li>&bull; <strong>Prandtl Number:</strong> Pr &ge; 0.7</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Nu = 2의 물리적 의미" accent="cyan" icon="2">
              <p className="mb-2">
                <Math tex="Ra \to 0" />일 때 <Math tex="Nu_D \to 2" />의 의미:
              </p>
              <Math tex={`Nu_D = \\frac{hD}{k} = 2 \\quad \\Rightarrow \\quad h = \\frac{2k}{D}`} display />
              <p className="text-gray-500 mt-2">
                이는 정지 유체에서 <strong className="text-white">순수 전도</strong>에 해당합니다.
                구 주위 전도 문제의 해석해와 일치합니다.
                (무한 매질에서 구로의 전도: <Math tex="q = 4\pi k R (T_s - T_\infty)" />)
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. 예제 */}
          <SectionDivider number="4" title="Example: Horizontal Cylinder" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 12.5: 수평 파이프 열손실
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 외경 50mm의 수평 증기 파이프가 25°C 공기 중에 있다.
                  파이프 표면 온도가 100°C일 때, 파이프 길이 1m당 자연 대류 열손실을 계산하라.
                </p>
                <p className="mb-4">
                  <strong className="text-white">공기 물성치 (T<sub>f</sub> = 62.5°C = 335.5K):</strong><br/>
                  k = 0.0280 W/(m·K), <Math tex="\nu = 19.0 \times 10^{-6}" /> m<sup>2</sup>/s,
                  <Math tex="\alpha = 27.0 \times 10^{-6}" /> m<sup>2</sup>/s, Pr = 0.70
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: Rayleigh Number</p>
                  <Math tex={`\\beta = \\frac{1}{335.5} = 2.98 \\times 10^{-3} \\text{ K}^{-1}`} display />
                  <Math tex={`Ra_D = \\frac{g\\beta\\Delta T D^3}{\\nu \\alpha} = \\frac{9.81 \\times 2.98 \\times 10^{-3} \\times 75 \\times (0.05)^3}{19.0 \\times 10^{-6} \\times 27.0 \\times 10^{-6}}`} display />
                  <Math tex={`Ra_D = \\frac{9.81 \\times 2.98 \\times 10^{-3} \\times 75 \\times 1.25 \\times 10^{-4}}{5.13 \\times 10^{-10}} = 5.34 \\times 10^{5}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 2: Churchill-Chu 상관식</p>
                  <Math tex={`\\overline{Nu}_D = \\left\\{ 0.60 + \\frac{0.387 Ra_D^{1/6}}{[1 + (0.559/Pr)^{9/16}]^{8/27}} \\right\\}^2`} display />
                  <Math tex={`\\overline{Nu}_D = \\left\\{ 0.60 + \\frac{0.387 \\times (5.34 \\times 10^5)^{1/6}}{[1 + (0.559/0.70)^{9/16}]^{8/27}} \\right\\}^2`} display />
                  <Math tex={`\\overline{Nu}_D = \\left\\{ 0.60 + \\frac{0.387 \\times 8.98}{[1 + 0.731]^{8/27}} \\right\\}^2 = \\left\\{ 0.60 + \\frac{3.47}{1.19} \\right\\}^2`} display />
                  <Math tex={`\\overline{Nu}_D = (0.60 + 2.92)^2 = (3.52)^2 = 12.4`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: 열전달 계수 및 열손실</p>
                  <Math tex={`\\bar{h} = \\frac{Nu_D \\cdot k}{D} = \\frac{12.4 \\times 0.0280}{0.05} = 6.94 \\text{ W/(m}^2\\text{K)}`} display />
                  <Math tex={`A_s = \\pi D L = \\pi \\times 0.05 \\times 1 = 0.157 \\text{ m}^2`} display />
                  <Math tex={`q = \\bar{h} A_s \\Delta T = 6.94 \\times 0.157 \\times 75 = \\boxed{81.7 \\text{ W/m}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Morgan 간편식 검증</p>
                  <p className="text-sm text-gray-400 mb-2">
                    <Math tex="Ra_D = 5.34 \times 10^5" /> &rarr; <Math tex="10^4 - 10^7" /> 범위: C = 0.48, n = 0.25
                  </p>
                  <Math tex={`\\overline{Nu}_D = 0.48 \\times (5.34 \\times 10^5)^{0.25} = 0.48 \\times 27.0 = 13.0`} display />
                  <p className="text-sm text-gray-400 mt-2">
                    Churchill-Chu (12.4)와 Morgan (13.0): 약 5% 차이, 둘 다 합리적
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. 구 예제 */}
          <SectionDivider number="5" title="Example: Sphere" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 12.6: 뜨거운 구의 냉각
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 직경 80mm의 금속 구가 150°C로 가열되어 있다.
                  20°C 공기 중에서 자연 대류에 의한 열손실률을 계산하라.
                </p>
                <p className="mb-4">
                  <strong className="text-white">공기 물성치 (T<sub>f</sub> = 85°C = 358K):</strong><br/>
                  k = 0.0302 W/(m·K), <Math tex="\nu = 21.5 \times 10^{-6}" /> m<sup>2</sup>/s,
                  <Math tex="\alpha = 30.8 \times 10^{-6}" /> m<sup>2</sup>/s, Pr = 0.70
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: Rayleigh Number</p>
                  <Math tex={`\\beta = \\frac{1}{358} = 2.79 \\times 10^{-3} \\text{ K}^{-1}`} display />
                  <Math tex={`Ra_D = \\frac{9.81 \\times 2.79 \\times 10^{-3} \\times 130 \\times (0.08)^3}{21.5 \\times 10^{-6} \\times 30.8 \\times 10^{-6}}`} display />
                  <Math tex={`Ra_D = \\frac{9.81 \\times 2.79 \\times 10^{-3} \\times 130 \\times 5.12 \\times 10^{-4}}{6.62 \\times 10^{-10}} = 2.75 \\times 10^{6}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 2: Churchill 상관식 (구)</p>
                  <Math tex={`\\overline{Nu}_D = 2 + \\frac{0.589 Ra_D^{1/4}}{[1 + (0.469/Pr)^{9/16}]^{4/9}}`} display />
                  <Math tex={`\\overline{Nu}_D = 2 + \\frac{0.589 \\times (2.75 \\times 10^6)^{1/4}}{[1 + (0.469/0.70)^{9/16}]^{4/9}}`} display />
                  <Math tex={`\\overline{Nu}_D = 2 + \\frac{0.589 \\times 40.7}{[1 + 0.595]^{4/9}} = 2 + \\frac{24.0}{1.23} = 2 + 19.5 = 21.5`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: 열전달 계수 및 열손실</p>
                  <Math tex={`\\bar{h} = \\frac{Nu_D \\cdot k}{D} = \\frac{21.5 \\times 0.0302}{0.08} = 8.12 \\text{ W/(m}^2\\text{K)}`} display />
                  <Math tex={`A_s = \\pi D^2 = \\pi \\times (0.08)^2 = 0.0201 \\text{ m}^2`} display />
                  <Math tex={`q = \\bar{h} A_s \\Delta T = 8.12 \\times 0.0201 \\times 130 = \\boxed{21.2 \\text{ W}}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. 상관식 비교 */}
          <SectionDivider number="6" title="Correlation Summary" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                원통 및 구 상관식 요약
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">형상</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">상관식</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">적용 범위</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">수평 원통<br/>(Churchill-Chu)</td>
                      <td className="py-3 px-4"><Math tex="\overline{Nu}_D = \{0.60 + 0.387Ra_D^{1/6}/[1+(0.559/Pr)^{9/16}]^{8/27}\}^2" /></td>
                      <td className="py-3 px-4"><Math tex="10^{-5} < Ra_D < 10^{12}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-amber-400">수평 원통<br/>(Morgan)</td>
                      <td className="py-3 px-4"><Math tex="\overline{Nu}_D = C Ra_D^n" /></td>
                      <td className="py-3 px-4">C, n은 Ra 범위별</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-cyan-400">구<br/>(Churchill)</td>
                      <td className="py-3 px-4"><Math tex="\overline{Nu}_D = 2 + 0.589Ra_D^{1/4}/[1+(0.469/Pr)^{9/16}]^{4/9}" /></td>
                      <td className="py-3 px-4"><Math tex="Ra_D < 10^{11}" />, Pr &ge; 0.7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="응용 분야" accent="emerald" icon="A">
              <ul className="space-y-1">
                <li>&bull; <strong className="text-white">파이프라인:</strong> 증기관, 냉매관 단열 설계</li>
                <li>&bull; <strong className="text-white">전선:</strong> 허용 전류 (ampacity) 계산</li>
                <li>&bull; <strong className="text-white">히터:</strong> 전기 히터 표면 온도 예측</li>
                <li>&bull; <strong className="text-white">저장 탱크:</strong> 구형 LNG 탱크 열침입</li>
                <li>&bull; <strong className="text-white">식품:</strong> 냉동/해동 시간 계산</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

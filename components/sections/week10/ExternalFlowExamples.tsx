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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
    </motion.div>
  );
}

function InsightCard({
  title,
  children,
  accent = "teal",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    teal: { bg: "bg-teal-500/5", border: "border-teal-500/20", text: "text-teal-400", iconBg: "bg-teal-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", iconBg: "bg-purple-500/20" },
  };
  const c = colors[accent] || colors.teal;
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

export default function ExternalFlowExamples() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            Part 6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Worked Examples
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            외부 유동 열전달 상관식을 적용한 실전 문제 풀이
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Example 1: Flat Plate */}
          <SectionDivider number="1" title="Flat Plate Cooling" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-4">
                Problem Statement
              </h4>
              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  길이 <strong className="text-white">L = 1 m</strong>, 폭 <strong className="text-white">W = 0.5 m</strong>인
                  평판이 표면 온도 <strong className="text-white">T_s = 100 degrees C</strong>로 유지됩니다.
                  온도 <strong className="text-white">T_infinity = 20 degrees C</strong>, 속도 <strong className="text-white">u_infinity = 10 m/s</strong>인
                  공기가 평판 위를 흐릅니다.
                </p>
                <p className="mb-4">
                  <strong className="text-teal-400">공기 물성 (T_f = 60 degrees C):</strong><br />
                  <Math tex="\nu = 18.9 \times 10^{-6}" /> m^2/s,
                  <Math tex="k = 0.0285" /> W/(m K),
                  <Math tex="Pr = 0.707" />
                </p>
                <p>
                  <strong className="text-white">구하시오:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                  <li>천이 위치 x_cr</li>
                  <li>L에서의 경계층 두께</li>
                  <li>전체 평균 열전달 계수</li>
                  <li>총 열전달률</li>
                </ol>
              </div>

              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-4 mt-8">
                Solution
              </h4>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-teal-400 font-bold mb-2">Step 1: Transition Location</p>
                  <Math tex={`Re_{x,cr} = \\frac{u_\\infty x_{cr}}{\\nu} = 5 \\times 10^5`} display />
                  <Math tex={`x_{cr} = \\frac{5 \\times 10^5 \\times 18.9 \\times 10^{-6}}{10} = \\boxed{0.945 \\text{ m}}`} display />
                  <p className="text-sm text-gray-400 mt-3">
                    천이가 L = 1 m 이전에 발생하므로 <strong className="text-white">혼합 경계층(Mixed BL)</strong> 상관식 사용
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-teal-400 font-bold mb-2">Step 2: Boundary Layer Thickness at x = L</p>
                  <Math tex={`Re_L = \\frac{u_\\infty L}{\\nu} = \\frac{10 \\times 1}{18.9 \\times 10^{-6}} = 5.29 \\times 10^5`} display />
                  <p className="text-sm text-gray-400 mb-2">
                    x = L에서 경계층은 막 난류로 천이됨. 난류 공식 사용:
                  </p>
                  <Math tex={`\\delta = \\frac{0.37 L}{Re_L^{0.2}} = \\frac{0.37 \\times 1}{(5.29 \\times 10^5)^{0.2}} = \\frac{0.37}{13.8} = \\boxed{0.027 \\text{ m}} = 27 \\text{ mm}`} display />
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-teal-400 font-bold mb-2">Step 3: Average Heat Transfer Coefficient</p>
                  <p className="text-sm text-gray-400 mb-2">Mixed BL 상관식 적용:</p>
                  <Math tex={`\\overline{Nu}_L = (0.037 Re_L^{0.8} - 871) Pr^{1/3}`} display />
                  <Math tex={`\\overline{Nu}_L = (0.037 \\times (5.29 \\times 10^5)^{0.8} - 871) \\times 0.707^{1/3}`} display />
                  <Math tex={`\\overline{Nu}_L = (0.037 \\times 37400 - 871) \\times 0.891 = (1384 - 871) \\times 0.891`} display />
                  <Math tex={`\\overline{Nu}_L = 457`} display />
                  <Math tex={`\\bar{h} = \\frac{\\overline{Nu}_L \\cdot k}{L} = \\frac{457 \\times 0.0285}{1} = \\boxed{13.0 \\text{ W/(m}^2\\text{K)}}`} display />
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-teal-400 font-bold mb-2">Step 4: Total Heat Transfer Rate</p>
                  <Math tex={`q = \\bar{h} A_s (T_s - T_\\infty) = \\bar{h} (L \\times W) (T_s - T_\\infty)`} display />
                  <Math tex={`q = 13.0 \\times (1 \\times 0.5) \\times (100 - 20) = 13.0 \\times 0.5 \\times 80`} display />
                  <Math tex={`q = \\boxed{520 \\text{ W}}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Key Observations" accent="teal" icon="!">
              <ul className="space-y-2">
                <li>&bull; 천이가 x = 0.945 m에서 발생 (L 직전)</li>
                <li>&bull; 대부분 층류이지만 Mixed BL 상관식 필요</li>
                <li>&bull; 만약 전체 층류라면: <Math tex="Nu_L = 0.664 \times (5.29 \times 10^5)^{0.5} \times 0.707^{1/3} = 431" /></li>
                <li>&bull; 난류 영역이 작아도 전체 Nu에 영향</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* Example 2: Cylinder in Crossflow */}
          <SectionDivider number="2" title="Cylinder in Crossflow" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                Problem Statement
              </h4>
              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  직경 <strong className="text-white">D = 25 mm</strong>, 길이 <strong className="text-white">L = 1 m</strong>인
                  전열관이 수직으로 설치되어 있습니다. 표면 온도는 <strong className="text-white">T_s = 300 degrees C</strong>입니다.
                  온도 <strong className="text-white">T_infinity = 35 degrees C</strong>, 속도 <strong className="text-white">V = 5 m/s</strong>인
                  공기가 원통에 직교하여 흐릅니다.
                </p>
                <p className="mb-4">
                  <strong className="text-orange-400">공기 물성 (T_f = 167.5 degrees C = 440.5 K):</strong><br />
                  <Math tex="\nu = 28.2 \times 10^{-6}" /> m^2/s,
                  <Math tex="k = 0.0364" /> W/(m K),
                  <Math tex="Pr = 0.690" />
                </p>
                <p>
                  <strong className="text-white">구하시오:</strong> Churchill-Bernstein 상관식을 이용하여 열전달률을 계산하시오.
                </p>
              </div>

              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4 mt-8">
                Solution
              </h4>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">Step 1: Reynolds Number</p>
                  <Math tex={`Re_D = \\frac{V D}{\\nu} = \\frac{5 \\times 0.025}{28.2 \\times 10^{-6}} = \\boxed{4,433}`} display />
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">Step 2: Churchill-Bernstein Correlation</p>
                  <Math tex={`\\overline{Nu}_D = 0.3 + \\frac{0.62 Re_D^{1/2} Pr^{1/3}}{[1 + (0.4/Pr)^{2/3}]^{1/4}} \\left[1 + \\left(\\frac{Re_D}{282000}\\right)^{5/8}\\right]^{4/5}`} display />

                  <p className="text-sm text-gray-400 mt-3 mb-2">각 항 계산:</p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li><Math tex="Re_D^{1/2} = 4433^{0.5} = 66.6" /></li>
                    <li><Math tex="Pr^{1/3} = 0.690^{1/3} = 0.884" /></li>
                    <li><Math tex="[1 + (0.4/0.690)^{2/3}]^{1/4} = [1 + 0.697]^{0.25} = 1.143" /></li>
                    <li><Math tex="[1 + (4433/282000)^{5/8}]^{4/5} = [1 + 0.0157^{0.625}]^{0.8} = [1.0528]^{0.8} = 1.042" /></li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">Step 3: Nusselt Number</p>
                  <Math tex={`\\overline{Nu}_D = 0.3 + \\frac{0.62 \\times 66.6 \\times 0.884}{1.143} \\times 1.042`} display />
                  <Math tex={`\\overline{Nu}_D = 0.3 + \\frac{36.5}{1.143} \\times 1.042 = 0.3 + 31.9 \\times 1.042`} display />
                  <Math tex={`\\overline{Nu}_D = 0.3 + 33.3 = \\boxed{33.6}`} display />
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">Step 4: Heat Transfer Rate</p>
                  <Math tex={`\\bar{h} = \\frac{\\overline{Nu}_D \\cdot k}{D} = \\frac{33.6 \\times 0.0364}{0.025} = \\boxed{48.9 \\text{ W/(m}^2\\text{K)}}`} display />
                  <Math tex={`A_s = \\pi D L = \\pi \\times 0.025 \\times 1 = 0.0785 \\text{ m}^2`} display />
                  <Math tex={`q = \\bar{h} A_s (T_s - T_\\infty) = 48.9 \\times 0.0785 \\times (300 - 35)`} display />
                  <Math tex={`q = 48.9 \\times 0.0785 \\times 265 = \\boxed{1018 \\text{ W}} \\approx 1.02 \\text{ kW}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Example 3: Sphere Cooling */}
          <SectionDivider number="3" title="Sphere Cooling (Quenching)" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                Problem Statement
              </h4>
              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  직경 <strong className="text-white">D = 50 mm</strong>인 금속 구가 초기 온도 <strong className="text-white">T_i = 400 degrees C</strong>에서
                  온도 <strong className="text-white">T_infinity = 25 degrees C</strong>, 속도 <strong className="text-white">V = 20 m/s</strong>인
                  공기 흐름에서 냉각됩니다.
                </p>
                <p className="mb-4">
                  <strong className="text-blue-400">공기 물성 (T_f = 212.5 degrees C = 485.5 K):</strong><br />
                  <Math tex="\nu = 33.5 \times 10^{-6}" /> m^2/s,
                  <Math tex="k = 0.0395" /> W/(m K),
                  <Math tex="Pr = 0.684" />,
                  <Math tex="\mu_\infty / \mu_s \approx 0.72" /> (estimated)
                </p>
                <p>
                  <strong className="text-white">구하시오:</strong> 초기 순간의 열전달률을 Whitaker 상관식으로 계산하시오.
                </p>
              </div>

              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4 mt-8">
                Solution
              </h4>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-blue-400 font-bold mb-2">Step 1: Reynolds Number</p>
                  <Math tex={`Re_D = \\frac{V D}{\\nu} = \\frac{20 \\times 0.05}{33.5 \\times 10^{-6}} = \\boxed{29,851}`} display />
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-blue-400 font-bold mb-2">Step 2: Whitaker Correlation</p>
                  <Math tex={`\\overline{Nu}_D = 2 + (0.4 Re_D^{0.5} + 0.06 Re_D^{2/3}) Pr^{0.4} \\left(\\frac{\\mu}{\\mu_s}\\right)^{0.25}`} display />

                  <p className="text-sm text-gray-400 mt-3 mb-2">각 항 계산:</p>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li><Math tex="Re_D^{0.5} = 29851^{0.5} = 172.8" /></li>
                    <li><Math tex="Re_D^{2/3} = 29851^{0.667} = 959" /></li>
                    <li><Math tex="Pr^{0.4} = 0.684^{0.4} = 0.862" /></li>
                    <li><Math tex="(\mu/\mu_s)^{0.25} = 0.72^{0.25} = 0.921" /></li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-blue-400 font-bold mb-2">Step 3: Nusselt Number</p>
                  <Math tex={`\\overline{Nu}_D = 2 + (0.4 \\times 172.8 + 0.06 \\times 959) \\times 0.862 \\times 0.921`} display />
                  <Math tex={`\\overline{Nu}_D = 2 + (69.1 + 57.5) \\times 0.794 = 2 + 100.6 = \\boxed{102.6}`} display />
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-blue-400 font-bold mb-2">Step 4: Heat Transfer Rate</p>
                  <Math tex={`\\bar{h} = \\frac{\\overline{Nu}_D \\cdot k}{D} = \\frac{102.6 \\times 0.0395}{0.05} = \\boxed{81.1 \\text{ W/(m}^2\\text{K)}}`} display />
                  <Math tex={`A_s = \\pi D^2 = \\pi \\times 0.05^2 = 7.85 \\times 10^{-3} \\text{ m}^2`} display />
                  <Math tex={`q = \\bar{h} A_s (T_s - T_\\infty) = 81.1 \\times 7.85 \\times 10^{-3} \\times (400 - 25)`} display />
                  <Math tex={`q = 81.1 \\times 7.85 \\times 10^{-3} \\times 375 = \\boxed{239 \\text{ W}}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Example 4: Tube Bank Heat Exchanger */}
          <SectionDivider number="4" title="Tube Bank Heat Exchanger" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                Problem Statement
              </h4>
              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  직경 <strong className="text-white">D = 16.4 mm</strong>, 길이 <strong className="text-white">L = 0.5 m</strong>인
                  튜브가 <strong className="text-white">엇갈림 배열(Staggered)</strong>로 설치된 열교환기가 있습니다.
                  튜브 표면 온도는 <strong className="text-white">T_s = 70 degrees C</strong>입니다.
                </p>
                <p className="mb-4">
                  <strong className="text-purple-400">배열:</strong>
                  <Math tex="S_T = S_L = 25.4" /> mm,
                  <Math tex="N_T = 8" /> (rows across),
                  <Math tex="N_L = 7" /> (rows in flow direction)
                </p>
                <p className="mb-4">
                  <strong className="text-purple-400">공기:</strong>
                  입구 온도 <Math tex="T_{in} = 15" /> degrees C, 속도 <Math tex="V = 6" /> m/s
                </p>
                <p className="mb-4">
                  <strong className="text-purple-400">공기 물성 (추정 T_m):</strong><br />
                  <Math tex="\rho = 1.1" /> kg/m^3,
                  <Math tex="c_p = 1007" /> J/(kg K),
                  <Math tex="\nu = 17 \times 10^{-6}" /> m^2/s,
                  <Math tex="k = 0.027" /> W/(m K),
                  <Math tex="Pr = 0.71" />,
                  <Math tex="Pr_s = 0.70" />
                </p>
                <p>
                  <strong className="text-white">구하시오:</strong> 공기 출구 온도와 열전달률
                </p>
              </div>

              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4 mt-8">
                Solution
              </h4>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-purple-400 font-bold mb-2">Step 1: Maximum Velocity</p>
                  <p className="text-sm text-gray-400 mb-2">Staggered 배열에서 S_D 계산:</p>
                  <Math tex={`S_D = \\sqrt{S_L^2 + (S_T/2)^2} = \\sqrt{25.4^2 + 12.7^2} = 28.4 \\text{ mm}`} display />
                  <p className="text-sm text-gray-400 mt-2 mb-2">
                    Check: <Math tex="2(S_D - D) = 2(28.4 - 16.4) = 24" /> mm vs <Math tex="(S_T - D) = 25.4 - 16.4 = 9" /> mm
                  </p>
                  <p className="text-sm text-gray-400 mb-2">
                    <Math tex="2(S_D - D) > (S_T - D)" />, so transverse gap is minimum:
                  </p>
                  <Math tex={`V_{max} = \\frac{S_T}{S_T - D} V = \\frac{25.4}{25.4 - 16.4} \\times 6 = \\frac{25.4}{9} \\times 6 = \\boxed{16.9 \\text{ m/s}}`} display />
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-purple-400 font-bold mb-2">Step 2: Reynolds Number</p>
                  <Math tex={`Re_{D,max} = \\frac{V_{max} D}{\\nu} = \\frac{16.9 \\times 0.0164}{17 \\times 10^{-6}} = \\boxed{16,300}`} display />
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-purple-400 font-bold mb-2">Step 3: Zukauskas Correlation</p>
                  <p className="text-sm text-gray-400 mb-2">
                    For staggered, <Math tex="10^3 < Re < 2 \times 10^5" />: C = 0.35(S_T/S_L)^0.2, m = 0.6
                  </p>
                  <Math tex={`C = 0.35 \\times (25.4/25.4)^{0.2} = 0.35 \\times 1 = 0.35`} display />
                  <Math tex={`\\overline{Nu}_{D,\\infty} = C Re_{D,max}^m Pr^{0.36} (Pr/Pr_s)^{0.25}`} display />
                  <Math tex={`\\overline{Nu}_{D,\\infty} = 0.35 \\times 16300^{0.6} \\times 0.71^{0.36} \\times (0.71/0.70)^{0.25}`} display />
                  <Math tex={`\\overline{Nu}_{D,\\infty} = 0.35 \\times 359 \\times 0.888 \\times 1.004 = 112`} display />
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-purple-400 font-bold mb-2">Step 4: Row Correction</p>
                  <p className="text-sm text-gray-400 mb-2">For <Math tex="N_L = 7" />, staggered: F = 0.95</p>
                  <Math tex={`\\overline{Nu}_D = F \\times \\overline{Nu}_{D,\\infty} = 0.95 \\times 112 = \\boxed{106.4}`} display />
                  <Math tex={`\\bar{h} = \\frac{\\overline{Nu}_D \\cdot k}{D} = \\frac{106.4 \\times 0.027}{0.0164} = \\boxed{175 \\text{ W/(m}^2\\text{K)}}`} display />
                </div>

                {/* Step 5 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-purple-400 font-bold mb-2">Step 5: Outlet Temperature</p>
                  <Math tex={`N = N_T \\times N_L = 8 \\times 7 = 56 \\text{ tubes}`} display />
                  <Math tex={`A_s = N \\pi D L = 56 \\times \\pi \\times 0.0164 \\times 0.5 = 1.44 \\text{ m}^2`} display />
                  <Math tex={`\\dot{m} = \\rho V (N_T \\times S_T \\times L) = 1.1 \\times 6 \\times (8 \\times 0.0254 \\times 0.5) = 0.67 \\text{ kg/s}`} display />
                  <Math tex={`\\frac{T_s - T_{out}}{T_s - T_{in}} = \\exp\\left(-\\frac{\\bar{h} A_s}{\\dot{m} c_p}\\right) = \\exp\\left(-\\frac{175 \\times 1.44}{0.67 \\times 1007}\\right)`} display />
                  <Math tex={`\\frac{70 - T_{out}}{70 - 15} = \\exp(-0.374) = 0.688`} display />
                  <Math tex={`T_{out} = 70 - 55 \\times 0.688 = 70 - 37.8 = \\boxed{32.2°\\text{C}}`} display />
                </div>

                {/* Step 6 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-purple-400 font-bold mb-2">Step 6: Heat Transfer Rate</p>
                  <Math tex={`q = \\dot{m} c_p (T_{out} - T_{in}) = 0.67 \\times 1007 \\times (32.2 - 15)`} display />
                  <Math tex={`q = 0.67 \\times 1007 \\times 17.2 = \\boxed{11.6 \\text{ kW}}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Problem-Solving Strategy Summary" accent="emerald" icon="S">
              <ol className="space-y-2 list-decimal list-inside">
                <li><strong className="text-white">형상 파악:</strong> 평판, 원통, 구, 튜브 뱅크?</li>
                <li><strong className="text-white">물성 평가:</strong> Film temperature 또는 지정된 온도</li>
                <li><strong className="text-white">Re 계산:</strong> 적절한 특성 길이와 속도 사용</li>
                <li><strong className="text-white">상관식 선택:</strong> Re 범위, 형상에 맞는 것</li>
                <li><strong className="text-white">Nu 계산:</strong> 보정 계수 포함</li>
                <li><strong className="text-white">h = Nu x k / L</strong></li>
                <li><strong className="text-white">q = h x A x deltaT</strong></li>
              </ol>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

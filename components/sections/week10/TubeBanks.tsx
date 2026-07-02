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

function EquationBox({
  label,
  children,
  accent = "teal",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "teal" ? "border-teal-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "red" ? "border-red-500/30" : accent === "purple" ? "border-purple-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div className={`text-${accent}-400`}>
        {children}
      </div>
    </div>
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

export default function TubeBanks() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            Part 5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Flow Across Tube Banks
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            열교환기 설계의 핵심: 튜브 뱅크에서의 열전달
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Introduction */}
          <SectionDivider number="1" title="Tube Bank Configurations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">튜브 뱅크(Tube Bank)</strong>는 열교환기에서 가장 흔한 형태입니다.
              다수의 튜브가 배열되어 유체가 직교하여 흐르며, 배열 방식에 따라 <strong className="text-white">정렬(Inline)</strong>과
              <strong className="text-white">엇갈림(Staggered)</strong> 배열로 구분됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Tube Bank Arrangements
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Inline Arrangement */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-teal-400 font-bold mb-4 text-center">Inline Arrangement</h5>
                  <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre className="text-gray-400">
{`    Flow -->

    O   O   O   O   O   S_L
    |<->|               (longitudinal)
    S_T O   O   O   O   O
    |
    |   O   O   O   O   O
    v
(transverse)

    O = Tube cross-section`}
                    </pre>
                  </div>
                  <ul className="mt-3 text-sm text-gray-400 space-y-1">
                    <li>&bull; 튜브가 일직선 배열</li>
                    <li>&bull; 제작 및 청소 용이</li>
                    <li>&bull; 열전달 효율 낮음</li>
                  </ul>
                </div>

                {/* Staggered Arrangement */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-orange-400 font-bold mb-4 text-center">Staggered Arrangement</h5>
                  <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre className="text-gray-400">
{`    Flow -->

    O   O   O   O   O
      |
    S_T O   O   O   O
      |
    O   O   O   O   O
      |<->|
        S_D (diagonal)

    S_D = sqrt(S_L^2 + (S_T/2)^2)`}
                    </pre>
                  </div>
                  <ul className="mt-3 text-sm text-gray-400 space-y-1">
                    <li>&bull; 튜브가 엇갈림 배열</li>
                    <li>&bull; 유동 혼합 증가</li>
                    <li>&bull; 열전달 효율 높음</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Geometric Parameters */}
          <SectionDivider number="2" title="Geometric Parameters" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Key Geometric Ratios
              </h4>

              <div className="grid md:grid-cols-3 gap-4">
                <EquationBox label="Transverse Pitch Ratio" accent="blue">
                  <Math tex={`S_T^* = \\frac{S_T}{D}`} display />
                </EquationBox>
                <EquationBox label="Longitudinal Pitch Ratio" accent="blue">
                  <Math tex={`S_L^* = \\frac{S_L}{D}`} display />
                </EquationBox>
                <EquationBox label="Diagonal Pitch Ratio" accent="orange">
                  <Math tex={`S_D^* = \\frac{S_D}{D}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Definitions</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; <Math tex="S_T" />: Transverse pitch (유동에 수직 방향 간격)</li>
                  <li>&bull; <Math tex="S_L" />: Longitudinal pitch (유동 방향 간격)</li>
                  <li>&bull; <Math tex="S_D" />: Diagonal pitch (엇갈림 배열에서 대각선 간격)</li>
                  <li>&bull; <Math tex="D" />: Tube outer diameter</li>
                  <li>&bull; <Math tex="N_L" />: Number of rows in flow direction</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 3. Maximum Velocity */}
          <SectionDivider number="3" title="Maximum Velocity Calculation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              상관식에 사용되는 Reynolds 수는 튜브 사이의 <strong className="text-white">최소 유동 면적</strong>에서의
              <strong className="text-white">최대 속도(V_max)</strong>를 기준으로 정의됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Maximum Velocity
              </h4>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-sm font-bold text-teal-400 mb-3">Inline Arrangement</h5>
                  <p className="text-sm text-gray-400 mb-2">최소 면적: 튜브 사이의 transverse gap</p>
                  <Math tex={`V_{max} = \\frac{S_T}{S_T - D} V = \\frac{S_T^*}{S_T^* - 1} V`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-sm font-bold text-orange-400 mb-3">Staggered Arrangement</h5>
                  <p className="text-sm text-gray-400 mb-2">최소 면적: transverse 또는 diagonal gap 중 작은 것</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">If <Math tex="2(S_D - D) < (S_T - D)" />:</p>
                      <Math tex={`V_{max} = \\frac{S_T}{2(S_D - D)} V`} display />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Otherwise:</p>
                      <Math tex={`V_{max} = \\frac{S_T}{S_T - D} V`} display />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <EquationBox label="Reynolds Number Definition" accent="orange">
                  <Math tex={`Re_{D,max} = \\frac{\\rho V_{max} D}{\\mu} = \\frac{V_{max} D}{\\nu}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          {/* 4. Zukauskas Correlation */}
          <SectionDivider number="4" title="Zukauskas Correlation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Zukauskas</strong>는 튜브 뱅크에 대한 포괄적인 실험 상관식을 제안했습니다.
              <Math tex="N_L \geq 20" />인 경우의 기본 상관식입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                Zukauskas Correlation for Tube Banks
              </h4>

              <EquationBox label="General Form (N_L >= 20)" accent="purple">
                <Math tex={`\\overline{Nu}_D = C \\, Re_{D,max}^m \\, Pr^{0.36} \\left(\\frac{Pr}{Pr_s}\\right)^{1/4}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Constants C and m for N_L &ge; 20</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">Configuration</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="Re_{D,max}" /></th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">C</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">m</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3" rowSpan={4}>Inline</td>
                        <td className="py-2 px-3">10 - 100</td>
                        <td className="py-2 px-3">0.80</td>
                        <td className="py-2 px-3">0.40</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3"><Math tex="10^2 - 10^3" /></td>
                        <td className="py-2 px-3">Treat as single cylinder</td>
                        <td className="py-2 px-3">-</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3"><Math tex="10^3 - 2 \times 10^5" /></td>
                        <td className="py-2 px-3">0.27</td>
                        <td className="py-2 px-3">0.63</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3"><Math tex="2 \times 10^5 - 2 \times 10^6" /></td>
                        <td className="py-2 px-3">0.021</td>
                        <td className="py-2 px-3">0.84</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3" rowSpan={4}>Staggered</td>
                        <td className="py-2 px-3">10 - 100</td>
                        <td className="py-2 px-3">0.90</td>
                        <td className="py-2 px-3">0.40</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3"><Math tex="10^2 - 10^3" /></td>
                        <td className="py-2 px-3">Treat as single cylinder</td>
                        <td className="py-2 px-3">-</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3"><Math tex="10^3 - 2 \times 10^5" /></td>
                        <td className="py-2 px-3">0.35 <Math tex="(S_T/S_L)^{0.2}" /></td>
                        <td className="py-2 px-3">0.60</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3"><Math tex="2 \times 10^5 - 2 \times 10^6" /></td>
                        <td className="py-2 px-3">0.022</td>
                        <td className="py-2 px-3">0.84</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Property Evaluation</h5>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>&bull; All properties except <Math tex="Pr_s" />: evaluated at <Math tex="T_m = (T_{in} + T_{out})/2" /></li>
                  <li>&bull; <Math tex="Pr_s" />: evaluated at tube surface temperature <Math tex="T_s" /></li>
                  <li>&bull; Pr correction accounts for variable viscosity</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 5. Row Correction Factor */}
          <SectionDivider number="5" title="Row Correction Factor" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              튜브 열 수(<Math tex="N_L" />)가 20 미만인 경우, 유동이 완전히 발달하지 않아
              <strong className="text-white">보정 계수(Correction Factor)</strong>를 적용해야 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Row Number Correction
              </h4>

              <EquationBox label="Corrected Nusselt Number (N_L < 20)" accent="emerald">
                <Math tex={`\\overline{Nu}_{D,N_L} = F \\cdot \\overline{Nu}_{D,N_L \\geq 20}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Correction Factor F</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="N_L" /></th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">1</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">2</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">3</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">4</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">5</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">7</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">10</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">13</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">16</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3 text-teal-400 font-bold">Inline</td>
                        <td className="py-2 px-3">0.70</td>
                        <td className="py-2 px-3">0.80</td>
                        <td className="py-2 px-3">0.86</td>
                        <td className="py-2 px-3">0.90</td>
                        <td className="py-2 px-3">0.92</td>
                        <td className="py-2 px-3">0.95</td>
                        <td className="py-2 px-3">0.97</td>
                        <td className="py-2 px-3">0.98</td>
                        <td className="py-2 px-3">0.99</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-orange-400 font-bold">Staggered</td>
                        <td className="py-2 px-3">0.64</td>
                        <td className="py-2 px-3">0.76</td>
                        <td className="py-2 px-3">0.84</td>
                        <td className="py-2 px-3">0.89</td>
                        <td className="py-2 px-3">0.92</td>
                        <td className="py-2 px-3">0.95</td>
                        <td className="py-2 px-3">0.97</td>
                        <td className="py-2 px-3">0.98</td>
                        <td className="py-2 px-3">0.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Why Row Number Matters" accent="emerald" icon="NL">
              <p className="mb-2">
                첫 번째 열의 튜브는 균일한 접근 유동을 만나지만, 하류의 튜브들은 앞선 튜브의 후류에 영향받습니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <Math tex="N_L" /> 증가 &rarr; 유동 혼합 증가 &rarr; Nu 증가</li>
                <li>&bull; <Math tex="N_L \geq 20" />에서 완전 발달, F = 1</li>
                <li>&bull; 엇갈림 배열: 더 빠른 유동 발달 (F 값이 약간 낮음)</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 6. Heat Transfer Rate */}
          <SectionDivider number="6" title="Total Heat Transfer Rate" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Heat Transfer Calculations
              </h4>

              <div className="space-y-6">
                <EquationBox label="Total Heat Transfer Rate" accent="teal">
                  <Math tex={`q = \\bar{h} A_s \\Delta T_{lm}`} display />
                </EquationBox>

                <div className="grid md:grid-cols-2 gap-4">
                  <EquationBox label="Surface Area" accent="blue">
                    <Math tex={`A_s = N \\cdot \\pi D L`} display />
                  </EquationBox>
                  <EquationBox label="Number of Tubes" accent="blue">
                    <Math tex={`N = N_T \\times N_L`} display />
                  </EquationBox>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-sm font-bold text-white mb-3">Log Mean Temperature Difference</h5>
                  <Math tex={`\\Delta T_{lm} = \\frac{\\Delta T_i - \\Delta T_o}{\\ln(\\Delta T_i / \\Delta T_o)}`} display />
                  <p className="text-sm text-gray-400 mt-3">
                    여기서 <Math tex="\Delta T_i = T_s - T_{in}" />, <Math tex="\Delta T_o = T_s - T_{out}" />
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-sm font-bold text-white mb-3">Outlet Temperature</h5>
                  <Math tex={`\\frac{T_s - T_{out}}{T_s - T_{in}} = \\exp\\left(-\\frac{\\bar{h} A_s}{\\dot{m} c_p}\\right)`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 7. Pressure Drop */}
          <SectionDivider number="7" title="Pressure Drop" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              튜브 뱅크를 통과하는 유체의 <strong className="text-white">압력 강하(Pressure Drop)</strong>는
              펌프/팬 동력 요구량을 결정하는 중요한 설계 파라미터입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                Pressure Drop Correlation
              </h4>

              <EquationBox label="Pressure Drop" accent="red">
                <Math tex={`\\Delta p = N_L \\chi \\left(\\frac{\\rho V_{max}^2}{2}\\right) f`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Friction Factor f</h5>
                <p className="text-sm text-gray-400 mb-3">
                  마찰 계수 f는 Re, <Math tex="S_T/D" />, <Math tex="S_L/D" />의 함수로 차트나 상관식으로 결정
                </p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>&bull; <Math tex="\chi" />: Correction factor (property variation)</li>
                  <li>&bull; <Math tex="N_L" />: Number of tube rows</li>
                  <li>&bull; <Math tex="\rho, V_{max}" />: at mean temperature</li>
                </ul>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Property Correction chi</h5>
                <Math tex={`\\chi = \\begin{cases} 1 & \\text{(gases)} \\\\ (\\mu_s/\\mu)^{0.14} & \\text{(liquids)} \\end{cases}`} display />
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Design Trade-offs" accent="red" icon="D">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">Staggered:</strong> 높은 h, 높은 <Math tex="\Delta p" /></li>
                <li>&bull; <strong className="text-white">Inline:</strong> 낮은 h, 낮은 <Math tex="\Delta p" /></li>
                <li>&bull; 작은 pitch &rarr; 높은 h, 높은 <Math tex="\Delta p" /></li>
                <li>&bull; 열전달과 압력 강하의 최적화 필요</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 8. Key Points */}
          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Key Points for Tube Bank Design" accent="teal" icon="K">
              <ul className="space-y-2">
                <li>&bull; <Math tex="Re_{D,max}" /> 기준 (최대 속도 사용)</li>
                <li>&bull; <Math tex="N_L < 20" />이면 보정 계수 F 적용</li>
                <li>&bull; 엇갈림 배열: 10-30% 높은 h (같은 조건)</li>
                <li>&bull; 물성: 평균 bulk temperature에서 평가</li>
                <li>&bull; Log mean temperature difference 사용</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

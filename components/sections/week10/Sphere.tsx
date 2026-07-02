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

export default function Sphere() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Flow Over Sphere
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            구 주위의 외부 유동과 열전달 상관식
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Flow Characteristics */}
          <SectionDivider number="1" title="Flow Characteristics Around Sphere" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              구 주위의 유동은 원통과 유사하지만 <strong className="text-white">3차원 효과</strong>가 있습니다.
              정체점에서 시작하여 경계층이 발달하고, 후방에서 박리가 발생합니다.
              구의 경우 축대칭 유동이므로 해석이 약간 다릅니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Flow Around Sphere
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
                  <h5 className="text-teal-400 font-bold mb-2">Similarities to Cylinder</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 전방 정체점 존재</li>
                    <li>&bull; 압력 구배에 의한 박리</li>
                    <li>&bull; 후류 영역 형성</li>
                    <li>&bull; Reynolds 수에 따른 천이</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">Differences from Cylinder</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 3D 축대칭 유동</li>
                    <li>&bull; 박리점 위치 상이</li>
                    <li>&bull; 유효 표면적 계산 다름</li>
                    <li>&bull; 후류 구조 상이</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Separation Angle</h5>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>&bull; Laminar BL: <Math tex="\theta_s \approx 80°" /> from stagnation</li>
                  <li>&bull; Turbulent BL: <Math tex="\theta_s \approx 120°" /> from stagnation</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 2. Limiting Case: Pure Conduction */}
          <SectionDivider number="2" title="Limiting Case: Stagnant Fluid" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              유체가 정지해 있을 때(<Math tex="Re_D \rightarrow 0" />), 열전달은 순수 <strong className="text-white">전도</strong>에 의해 이루어집니다.
              이 경우의 Nusselt 수는 이론적으로 유도 가능합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Pure Conduction Limit
              </h4>

              <EquationBox label="Sphere in Stagnant Infinite Medium" accent="blue">
                <Math tex={`\\overline{Nu}_D = \\frac{\\bar{h}D}{k} = 2`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Derivation</h5>
                <p className="text-sm text-gray-400 mb-2">
                  무한 매체에서 구 표면으로부터의 전도:
                </p>
                <Math tex={`q = \\frac{4\\pi k r_o (T_s - T_\\infty)}{1} = h \\cdot 4\\pi r_o^2 (T_s - T_\\infty)`} display />
                <Math tex={`\\therefore \\quad h = \\frac{k}{r_o} = \\frac{2k}{D} \\quad \\Rightarrow \\quad Nu_D = 2`} display />
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Physical Meaning of Nu = 2" accent="blue" icon="Nu">
              <p className="mb-2">
                <Math tex="Nu_D = 2" />는 대류 없이 순수 전도만 있을 때의 <strong className="text-white">하한값</strong>입니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; 모든 대류 상관식에서 <Math tex="Nu > 2" /></li>
                <li>&bull; 상관식의 기본 항: <Math tex="Nu = 2 + f(Re, Pr)" /></li>
                <li>&bull; 자연 대류에서도 동일한 하한값</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. Whitaker Correlation */}
          <SectionDivider number="3" title="Whitaker Correlation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Whitaker (1972)</strong>는 넓은 Reynolds 수와 Prandtl 수 범위에서
              유효한 구의 열전달 상관식을 제안했습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                Whitaker Correlation (1972)
              </h4>

              <EquationBox label="Comprehensive Sphere Correlation" accent="purple">
                <Math tex={`\\overline{Nu}_D = 2 + \\left(0.4 Re_D^{1/2} + 0.06 Re_D^{2/3}\\right) Pr^{0.4} \\left(\\frac{\\mu}{\\mu_s}\\right)^{1/4}`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-sm font-bold text-purple-400 mb-2">Validity Range</h5>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>&bull; <Math tex="3.5 < Re_D < 7.6 \times 10^4" /></li>
                    <li>&bull; <Math tex="0.71 < Pr < 380" /></li>
                    <li>&bull; <Math tex="1.0 < \mu/\mu_s < 3.2" /></li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-sm font-bold text-teal-400 mb-2">Property Evaluation</h5>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>&bull; All properties at <Math tex="T_\infty" /></li>
                    <li>&bull; Except <Math tex="\mu_s" /> at <Math tex="T_s" /></li>
                    <li>&bull; Viscosity ratio for variable property</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Understanding Whitaker Correlation" accent="purple" icon="W">
              <p className="mb-2">
                상관식의 각 항의 의미:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">2</strong>: 순수 전도 기여 (Re = 0 한계)</li>
                <li>&bull; <strong className="text-white"><Math tex="0.4 Re_D^{1/2}" /></strong>: 층류 경계층 기여</li>
                <li>&bull; <strong className="text-white"><Math tex="0.06 Re_D^{2/3}" /></strong>: 난류 후류 기여</li>
                <li>&bull; <strong className="text-white"><Math tex="(\mu/\mu_s)^{1/4}" /></strong>: 물성 변화 보정</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 4. Ranz-Marshall Correlation */}
          <SectionDivider number="4" title="Ranz-Marshall Correlation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Ranz and Marshall (1952)</strong>은 액적(droplet) 증발 연구에서
              간단한 구 열전달 상관식을 제안했습니다. 널리 사용되는 단순 상관식입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Ranz-Marshall Correlation
              </h4>

              <EquationBox label="Simple Sphere Correlation" accent="orange">
                <Math tex={`\\overline{Nu}_D = 2 + 0.6 Re_D^{1/2} Pr^{1/3}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Characteristics</h5>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>&bull; 간단하고 기억하기 쉬움</li>
                  <li>&bull; 물질 전달에도 적용 가능 (Sherwood 수)</li>
                  <li>&bull; 중간 Re 범위에서 잘 맞음</li>
                  <li>&bull; 물성 보정 없음 - Film temperature 사용</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 5. McAdams Correlation */}
          <SectionDivider number="5" title="McAdams Correlation (Gas Flow)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">McAdams</strong>는 기체 유동에서 구의 열전달에 대한 상관식을 제안했습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                McAdams Correlation (Gases)
              </h4>

              <EquationBox label="For Gas Flow Over Sphere" accent="emerald">
                <Math tex={`\\overline{Nu}_D = 0.37 Re_D^{0.6}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Validity</h5>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>&bull; <Math tex="17 < Re_D < 70,000" /></li>
                  <li>&bull; Primarily for air and other gases</li>
                  <li>&bull; Properties at film temperature</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 6. Comparison and Selection */}
          <SectionDivider number="6" title="Correlation Comparison" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Sphere Heat Transfer Correlations Summary
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Correlation</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Formula</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Re Range</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-purple-400">Whitaker</td>
                      <td className="py-4 px-4"><Math tex="2 + (0.4Re^{0.5} + 0.06Re^{2/3})Pr^{0.4}(\mu/\mu_s)^{0.25}" /></td>
                      <td className="py-4 px-4"><Math tex="3.5 - 7.6 \times 10^4" /></td>
                      <td className="py-4 px-4 text-gray-500">Most comprehensive</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-orange-400">Ranz-Marshall</td>
                      <td className="py-4 px-4"><Math tex="2 + 0.6 Re^{0.5} Pr^{1/3}" /></td>
                      <td className="py-4 px-4">Moderate Re</td>
                      <td className="py-4 px-4 text-gray-500">Simple, widely used</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-emerald-400">McAdams</td>
                      <td className="py-4 px-4"><Math tex="0.37 Re^{0.6}" /></td>
                      <td className="py-4 px-4"><Math tex="17 - 70,000" /></td>
                      <td className="py-4 px-4 text-gray-500">Gases only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 7. Drag Coefficient for Sphere */}
          <SectionDivider number="7" title="Drag Coefficient for Sphere" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Sphere Drag Coefficient
              </h4>

              <EquationBox label="Drag Force" accent="blue">
                <Math tex={`F_D = C_D \\cdot \\frac{1}{2}\\rho u_\\infty^2 \\cdot \\frac{\\pi D^2}{4}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Approximate C_D Values</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="Re_D" /></th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="C_D" /></th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">Regime</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3"><Math tex="Re_D < 1" /></td>
                        <td className="py-2 px-3"><Math tex="24/Re_D" /> (Stokes law)</td>
                        <td className="py-2 px-3 text-gray-500">Creeping flow</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3"><Math tex="10^3 < Re_D < 2 \times 10^5" /></td>
                        <td className="py-2 px-3"><Math tex="\approx 0.44" /></td>
                        <td className="py-2 px-3 text-gray-500">Newton regime</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3"><Math tex="Re_D > 2 \times 10^5" /></td>
                        <td className="py-2 px-3"><Math tex="\approx 0.1" /></td>
                        <td className="py-2 px-3 text-gray-500">Turbulent BL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Applications of Sphere Heat Transfer" accent="teal" icon="A">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">Packed beds:</strong> 촉매 반응기, 흡착 칼럼</li>
                <li>&bull; <strong className="text-white">Spray cooling:</strong> 액적 증발 및 냉각</li>
                <li>&bull; <strong className="text-white">Fluidized beds:</strong> 유동층 열전달</li>
                <li>&bull; <strong className="text-white">Falling particles:</strong> 분무 건조, 분체 냉각</li>
                <li>&bull; <strong className="text-white">Thermocouples:</strong> 구형 접합부 응답</li>
              </ul>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Sphere vs Cylinder Comparison" accent="yellow" icon="vs">
              <p className="mb-2">
                같은 Reynolds 수에서 구와 원통의 Nu 비교:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; 구의 Nu가 일반적으로 약간 높음</li>
                <li>&bull; 3D 유동으로 인한 추가 혼합</li>
                <li>&bull; 박리점 위치와 후류 구조 차이</li>
                <li>&bull; 구: <Math tex="Nu_D = 2" /> (Re=0), 원통: <Math tex="Nu_D \neq 2" /> (2D 전도)</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

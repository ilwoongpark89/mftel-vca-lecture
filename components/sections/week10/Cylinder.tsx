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

export default function Cylinder() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Flow Over Cylinder
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            원통 주위 외부 유동의 유동 특성과 열전달 상관식
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Flow Characteristics */}
          <SectionDivider number="1" title="Flow Characteristics Around Cylinder" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              원통 주위의 유동은 평판과 달리 <strong className="text-white">압력 구배(Pressure Gradient)</strong>가 존재하여
              복잡한 유동 패턴을 보입니다. 전방 정체점에서 시작하여 경계층이 발달하고,
              후방에서 <strong className="text-white">박리(Separation)</strong>가 발생합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Flow Pattern Around Cylinder
              </h4>

              {/* ASCII Diagram */}
              <div className="bg-slate-900/80 rounded-xl p-6 mb-6 font-mono text-xs overflow-x-auto">
                <pre className="text-gray-400">
{`               u_inf
                --->
                --->
            Separation     Wake
              Point        Region
                |    ~~~~~~~~
    ------------|~~~~      ~~~~
   /     BL     \\         ~~~~
  |   ------>    )        ~~~~
  | (           |         ~~~~
  |   ------>    )        ~~~~
   \\     BL     /         ~~~~
    ------------|~~~~      ~~~~
                |    ~~~~~~~~
            theta_s ~ 80-120 deg

  Stagnation Point (theta = 0, max pressure)`}
                </pre>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
                  <h5 className="text-teal-400 font-bold mb-2">Forward Region</h5>
                  <p className="text-sm text-gray-400">
                    <Math tex="0 < \theta < 90°" /><br />
                    가속 유동, 유리한 압력 구배<br />
                    경계층이 얇게 유지
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">Separation Point</h5>
                  <p className="text-sm text-gray-400">
                    <Math tex="\theta_s \approx 80°" /> (Laminar)<br />
                    <Math tex="\theta_s \approx 140°" /> (Turbulent)<br />
                    경계층이 표면에서 이탈
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-2">Wake Region</h5>
                  <p className="text-sm text-gray-400">
                    <Math tex="\theta > \theta_s" /><br />
                    역류, 와류 형성<br />
                    Von Karman Vortex Street
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Reynolds Number Effects on Flow Pattern" accent="teal" icon="Re">
              <ul className="space-y-2">
                <li>&bull; <Math tex="Re_D < 5" />: Creeping flow, 박리 없음</li>
                <li>&bull; <Math tex="5 < Re_D < 40" />: 정상 후류 와류 쌍</li>
                <li>&bull; <Math tex="40 < Re_D < 10^3" />: Karman vortex shedding</li>
                <li>&bull; <Math tex="10^3 < Re_D < 2 \times 10^5" />: 층류 경계층, 넓은 후류</li>
                <li>&bull; <Math tex="Re_D > 2 \times 10^5" />: 난류 경계층, 좁은 후류</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 2. Hilpert Correlation */}
          <SectionDivider number="2" title="Hilpert Correlation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Hilpert (1933)</strong>는 공기 중 원통의 열전달에 대한
              실험적 상관식을 제안했습니다. 간단하지만 널리 사용됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Hilpert Correlation
              </h4>

              <EquationBox label="Nusselt Number for Cylinder in Crossflow" accent="orange">
                <Math tex={`\\overline{Nu}_D = C \\, Re_D^m \\, Pr^{1/3}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Constants C and m</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="Re_D" /></th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">C</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">m</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">0.4 - 4</td>
                        <td className="py-2 px-3">0.989</td>
                        <td className="py-2 px-3">0.330</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">4 - 40</td>
                        <td className="py-2 px-3">0.911</td>
                        <td className="py-2 px-3">0.385</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">40 - 4,000</td>
                        <td className="py-2 px-3">0.683</td>
                        <td className="py-2 px-3">0.466</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">4,000 - 40,000</td>
                        <td className="py-2 px-3">0.193</td>
                        <td className="py-2 px-3">0.618</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">40,000 - 400,000</td>
                        <td className="py-2 px-3">0.027</td>
                        <td className="py-2 px-3">0.805</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Properties evaluated at film temperature <Math tex="T_f = (T_s + T_\infty)/2" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. Churchill-Bernstein Correlation */}
          <SectionDivider number="3" title="Churchill-Bernstein Correlation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Churchill and Bernstein (1977)</strong>은 전체 Reynolds 수 범위를 커버하는
              단일 상관식을 제안했습니다. 현재 가장 널리 사용되는 상관식입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                Churchill-Bernstein Correlation (1977)
              </h4>

              <EquationBox label="Comprehensive Correlation" accent="purple">
                <Math tex={`\\overline{Nu}_D = 0.3 + \\frac{0.62 Re_D^{1/2} Pr^{1/3}}{\\left[1 + (0.4/Pr)^{2/3}\\right]^{1/4}} \\left[1 + \\left(\\frac{Re_D}{282000}\\right)^{5/8}\\right]^{4/5}`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-sm font-bold text-purple-400 mb-2">Validity</h5>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>&bull; <Math tex="Re_D \cdot Pr > 0.2" /></li>
                    <li>&bull; All <Math tex="Re_D" /> range</li>
                    <li>&bull; Properties at <Math tex="T_f" /></li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-sm font-bold text-teal-400 mb-2">Accuracy</h5>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>&bull; ±20% for <Math tex="10^4 < Re_D < 10^6" /></li>
                    <li>&bull; Accounts for transition</li>
                    <li>&bull; Single formula for all regimes</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Understanding the Churchill-Bernstein Formula" accent="purple" icon="CB">
              <p className="mb-2">
                이 상관식은 세 부분으로 구성됩니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">0.3</strong>: 극저 Re에서의 기본 Nu (순수 전도)</li>
                <li>&bull; <strong className="text-white">중간 항</strong>: 층류 경계층 기여</li>
                <li>&bull; <strong className="text-white">마지막 항</strong>: 난류 천이 보정 (Re &gt; 282,000)</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 4. Zukauskas Correlation */}
          <SectionDivider number="4" title="Zukauskas Correlation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Zukauskas (1972)</strong>는 다양한 유체에 대해
              물성 변화를 고려한 상관식을 제안했습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Zukauskas Correlation
              </h4>

              <EquationBox label="With Property Correction" accent="emerald">
                <Math tex={`\\overline{Nu}_D = C \\, Re_D^m \\, Pr^n \\left(\\frac{Pr}{Pr_s}\\right)^{1/4}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Constants</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; <Math tex="n = 0.37" /> for <Math tex="Pr \leq 10" /></li>
                  <li>&bull; <Math tex="n = 0.36" /> for <Math tex="Pr > 10" /></li>
                  <li>&bull; All properties except <Math tex="Pr_s" /> evaluated at <Math tex="T_\infty" /></li>
                  <li>&bull; <Math tex="Pr_s" /> evaluated at surface temperature <Math tex="T_s" /></li>
                </ul>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="Re_D" /></th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">C</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">m</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">1 - 40</td>
                      <td className="py-2 px-3">0.75</td>
                      <td className="py-2 px-3">0.4</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">40 - 1,000</td>
                      <td className="py-2 px-3">0.51</td>
                      <td className="py-2 px-3">0.5</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3"><Math tex="10^3 - 2 \times 10^5" /></td>
                      <td className="py-2 px-3">0.26</td>
                      <td className="py-2 px-3">0.6</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3"><Math tex="2 \times 10^5 - 10^6" /></td>
                      <td className="py-2 px-3">0.076</td>
                      <td className="py-2 px-3">0.7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 5. Drag Coefficient */}
          <SectionDivider number="5" title="Drag Coefficient" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              원통의 <strong className="text-white">항력 계수(Drag Coefficient)</strong>는
              Reynolds 수에 따라 크게 변하며, 열전달과 밀접한 관계가 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Drag Coefficient for Cylinder
              </h4>

              <EquationBox label="Drag Force" accent="blue">
                <Math tex={`F_D = C_D \\cdot \\frac{1}{2}\\rho u_\\infty^2 \\cdot A_f`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                <Math tex="A_f = D \cdot L" /> (frontal area per unit length: <Math tex="A_f = D" />)
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Approximate C_D Values</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="Re_D" /></th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="C_D" /></th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">Flow Regime</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3"><Math tex="< 1" /></td>
                        <td className="py-2 px-3"><Math tex="\sim 10/Re_D" /></td>
                        <td className="py-2 px-3 text-gray-500">Creeping flow</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3"><Math tex="10^3 - 2 \times 10^5" /></td>
                        <td className="py-2 px-3"><Math tex="\approx 1.2" /></td>
                        <td className="py-2 px-3 text-gray-500">Laminar BL, wide wake</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3"><Math tex="> 2 \times 10^5" /></td>
                        <td className="py-2 px-3"><Math tex="\approx 0.3" /></td>
                        <td className="py-2 px-3 text-gray-500">Turbulent BL, narrow wake</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Drag Crisis" accent="blue" icon="DC">
              <p className="mb-2">
                <Math tex="Re_D \approx 2 \times 10^5" />에서 <strong className="text-white">항력 급감(Drag Crisis)</strong>이 발생합니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; 경계층이 층류에서 난류로 천이</li>
                <li>&bull; 난류 BL은 역압력 구배에 더 잘 견딤</li>
                <li>&bull; 박리점이 뒤로 이동 (80° &rarr; 140°)</li>
                <li>&bull; 후류 영역 감소 &rarr; 압력 항력 감소</li>
                <li>&bull; 골프공 딤플: 인위적으로 난류 유도하여 항력 감소</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 6. Non-circular Cylinders */}
          <SectionDivider number="6" title="Non-Circular Cross-Sections" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              정사각형, 육각형 등 비원형 단면의 원통에 대해서도 Hilpert 형태의 상관식이 사용됩니다.
              특성 길이는 자유류에 수직인 방향의 치수를 사용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-4">
                Non-Circular Cylinders - Nu Correlations
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">Shape</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="Re_D" /></th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">C</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">m</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">Square (face to flow)</td>
                      <td className="py-2 px-3">5,000 - 60,000</td>
                      <td className="py-2 px-3">0.246</td>
                      <td className="py-2 px-3">0.588</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">Square (vertex to flow)</td>
                      <td className="py-2 px-3">5,000 - 60,000</td>
                      <td className="py-2 px-3">0.102</td>
                      <td className="py-2 px-3">0.675</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">Hexagon (face to flow)</td>
                      <td className="py-2 px-3">5,000 - 20,000</td>
                      <td className="py-2 px-3">0.164</td>
                      <td className="py-2 px-3">0.638</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">Hexagon (vertex to flow)</td>
                      <td className="py-2 px-3">5,000 - 20,000</td>
                      <td className="py-2 px-3">0.150</td>
                      <td className="py-2 px-3">0.638</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Correlation form: <Math tex="\overline{Nu}_D = C Re_D^m Pr^{1/3}" />
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Key Points for Cylinder Heat Transfer" accent="emerald" icon="K">
              <ul className="space-y-2">
                <li>&bull; 평균 Nu는 전체 원주에 대한 적분 평균</li>
                <li>&bull; 국소 h는 정체점에서 최대, 박리점 부근에서 최소</li>
                <li>&bull; Churchill-Bernstein이 가장 범용적</li>
                <li>&bull; 물성: Film temperature <Math tex="T_f = (T_s + T_\infty)/2" /></li>
                <li>&bull; 길이 스케일: 직경 D</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

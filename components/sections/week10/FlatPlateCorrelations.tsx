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
  const borderColor = accent === "teal" ? "border-teal-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "red" ? "border-red-500/30" : "border-slate-700";
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

export default function FlatPlateCorrelations() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Flat Plate Correlations
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            층류, 난류, 혼합 경계층에 대한 열전달 상관식
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Turbulent Flow Correlations */}
          <SectionDivider number="1" title="Turbulent Flow Correlations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <Math tex="Re_x > 5 \times 10^5" />일 때, 경계층은 난류가 됩니다.
              난류 경계층에서는 <strong className="text-white">혼합(Mixing)</strong>이 증가하여
              열전달이 크게 향상됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Turbulent Flat Plate Correlations
              </h4>

              <EquationBox label="Local Nusselt Number (Turbulent)" accent="orange">
                <Math tex={`Nu_x = 0.0296 \\, Re_x^{0.8} \\, Pr^{1/3}`} display />
              </EquationBox>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <EquationBox label="Local Friction Coefficient" accent="teal">
                  <Math tex={`C_{f,x} = 0.0592 \\, Re_x^{-0.2}`} display />
                </EquationBox>
                <EquationBox label="Boundary Layer Thickness" accent="blue">
                  <Math tex={`\\delta = \\frac{0.37x}{Re_x^{0.2}}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Validity Conditions</h5>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>&bull; <Math tex="5 \times 10^5 < Re_x < 10^7" /></li>
                  <li>&bull; <Math tex="0.6 \lesssim Pr \lesssim 60" /></li>
                  <li>&bull; Properties at film temperature <Math tex="T_f = (T_s + T_\infty)/2" /></li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Turbulent vs Laminar Comparison" accent="orange" icon="T">
              <p className="mb-2">
                난류 경계층에서 <Math tex="Nu_x \propto Re_x^{0.8}" />로, 층류(<Math tex="Re_x^{0.5}" />)보다
                Reynolds 수에 더 민감합니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; 같은 <Math tex="Re_x" />에서 난류 Nu가 훨씬 큼</li>
                <li>&bull; 경계층 두께 증가: <Math tex="\delta \propto x^{0.8}" /> (난류) vs <Math tex="x^{0.5}" /> (층류)</li>
                <li>&bull; 난류 혼합으로 열저항 감소</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 2. Higher Reynolds Number Correlation */}
          <SectionDivider number="2" title="Extended Reynolds Number Range" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              더 높은 Reynolds 수 범위에서는 <strong className="text-white">Petukhov-Gnielinski</strong> 또는
              <strong className="text-white">Colburn</strong> 상관식이 사용됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Alternative Turbulent Correlations
              </h4>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-sm font-bold text-blue-400 mb-3">Schultz-Grunow (High Re)</h5>
                  <Math tex={`C_{f,x} = 0.370 (\\log_{10} Re_x)^{-2.584}`} display />
                  <p className="text-xs text-gray-500 mt-2">
                    Valid for: <Math tex="10^6 < Re_x < 10^9" />
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-sm font-bold text-teal-400 mb-3">Modified Reynolds Analogy (Chilton-Colburn)</h5>
                  <Math tex={`St \\cdot Pr^{2/3} = \\frac{C_f}{2}`} display />
                  <p className="text-xs text-gray-500 mt-2">
                    여기서 <Math tex="St = Nu/(Re \cdot Pr) = h/(\rho c_p u_\infty)" /> (Stanton number)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Mixed Boundary Layer */}
          <SectionDivider number="3" title="Mixed Boundary Layer" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              실제 상황에서는 평판의 앞부분에서 <strong className="text-white">층류</strong>가 발달하다가
              천이점(<Math tex="x_{cr}" />)에서 <strong className="text-white">난류</strong>로 전환됩니다.
              이 경우 전체 판에 대한 평균 열전달 계수를 구해야 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Mixed Boundary Layer Analysis
              </h4>

              {/* Diagram */}
              <div className="bg-slate-900/80 rounded-xl p-6 mb-6 font-mono text-xs overflow-x-auto">
                <pre className="text-gray-400">
{`         Laminar           Turbulent
    Nu_x = 0.332 Re_x^0.5  |  Nu_x = 0.0296 Re_x^0.8
                           |
    |<---- x_cr ---->|<---------- (L - x_cr) ---------->|
    |================|==================================|
    x = 0           x_cr                                L

    Average:  Nu_L = integral of (laminar + turbulent)`}
                </pre>
              </div>

              <EquationBox label="Average Nusselt Number (Mixed BL)" accent="teal">
                <Math tex={`\\overline{Nu}_L = 0.037 Re_L^{0.8} Pr^{1/3} - A`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Correction Factor A</h5>
                <Math tex={`A = 0.037 Re_{x,cr}^{0.8} - 0.664 Re_{x,cr}^{0.5}`} display />
                <p className="text-sm text-gray-400 mt-3">
                  <Math tex="Re_{x,cr} = 5 \times 10^5" />일 때: <Math tex="A \approx 871" />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6">
              <h4 className="text-yellow-400 font-bold mb-4">Practical Mixed BL Correlation</h4>
              <EquationBox label="For Re_cr = 5 x 10^5" accent="yellow">
                <Math tex={`\\overline{Nu}_L = (0.037 Re_L^{0.8} - 871) Pr^{1/3}`} display />
              </EquationBox>
              <p className="text-sm text-gray-400 mt-4">
                Valid for: <Math tex="5 \times 10^5 < Re_L < 10^8" />, <Math tex="0.6 < Pr < 60" />
              </p>
            </div>
          </motion.div>

          {/* 4. Fully Turbulent */}
          <SectionDivider number="4" title="Fully Turbulent (Trip at Leading Edge)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              선단에 <strong className="text-white">트립 와이어(Trip Wire)</strong>나 거칠기를 설치하면
              처음부터 난류가 되어 층류 구간이 없어집니다. 이 경우 더 단순한 상관식을 사용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                Fully Turbulent from Leading Edge
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <EquationBox label="Average Nusselt Number" accent="red">
                  <Math tex={`\\overline{Nu}_L = 0.037 Re_L^{0.8} Pr^{1/3}`} display />
                </EquationBox>
                <EquationBox label="Average Friction Coefficient" accent="red">
                  <Math tex={`\\overline{C_f} = 0.074 Re_L^{-0.2}`} display />
                </EquationBox>
              </div>

              <p className="text-sm text-gray-500 mt-6 text-center">
                Note: 보정 항 A = 0 (층류 구간 없음)
              </p>
            </div>
          </motion.div>

          {/* 5. Summary Table */}
          <SectionDivider number="5" title="Correlation Summary" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Flat Plate Heat Transfer Correlations
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Flow Type</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Local Nu_x</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Average Nu_L</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Validity</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-teal-400">Laminar (Isothermal)</td>
                      <td className="py-4 px-4"><Math tex="0.332 Re_x^{0.5} Pr^{1/3}" /></td>
                      <td className="py-4 px-4"><Math tex="0.664 Re_L^{0.5} Pr^{1/3}" /></td>
                      <td className="py-4 px-4 text-gray-500"><Math tex="Re_x < 5 \times 10^5" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-emerald-400">Laminar (UHF)</td>
                      <td className="py-4 px-4"><Math tex="0.453 Re_x^{0.5} Pr^{1/3}" /></td>
                      <td className="py-4 px-4"><Math tex="0.680 Re_L^{0.5} Pr^{1/3}" /></td>
                      <td className="py-4 px-4 text-gray-500"><Math tex="Re_x < 5 \times 10^5" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-orange-400">Turbulent</td>
                      <td className="py-4 px-4"><Math tex="0.0296 Re_x^{0.8} Pr^{1/3}" /></td>
                      <td className="py-4 px-4"><Math tex="0.037 Re_L^{0.8} Pr^{1/3}" /></td>
                      <td className="py-4 px-4 text-gray-500"><Math tex="5 \times 10^5 < Re < 10^7" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-blue-400">Mixed</td>
                      <td className="py-4 px-4">-</td>
                      <td className="py-4 px-4"><Math tex="(0.037 Re_L^{0.8} - 871) Pr^{1/3}" /></td>
                      <td className="py-4 px-4 text-gray-500"><Math tex="Re_{cr} = 5 \times 10^5" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 6. Special Cases */}
          <SectionDivider number="6" title="Special Cases and Corrections" />

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-700">
                <h4 className="text-teal-400 font-bold mb-3">Liquid Metals (Pr &lt;&lt; 1)</h4>
                <Math tex={`Nu_x = 0.565 (Re_x Pr)^{0.5}`} display />
                <p className="text-sm text-gray-500 mt-2">
                  For <Math tex="Pr < 0.05" />, <Math tex="Re_x Pr > 100" />
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-700">
                <h4 className="text-orange-400 font-bold mb-3">High Prandtl (Pr &gt; 60)</h4>
                <p className="text-sm text-gray-400">
                  Modified correlations with <Math tex="Pr^{0.4}" /> instead of <Math tex="Pr^{1/3}" />
                  may be used for very viscous fluids.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-700">
                <h4 className="text-blue-400 font-bold mb-3">Variable Properties</h4>
                <p className="text-sm text-gray-400">
                  For large temperature differences, use viscosity ratio correction:
                </p>
                <Math tex={`Nu = Nu_{T_f} \\left(\\frac{\\mu_\\infty}{\\mu_s}\\right)^{0.25}`} display />
              </div>

              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-700">
                <h4 className="text-emerald-400 font-bold mb-3">Rough Surfaces</h4>
                <p className="text-sm text-gray-400">
                  Surface roughness promotes earlier transition and increases turbulent heat transfer.
                  Correlations depend on <Math tex="k_s/x" /> (roughness ratio).
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Practical Design Tips" accent="emerald" icon="D">
              <ul className="space-y-2">
                <li>&bull; 층류에서 난류로 천이 시 Nu가 급격히 증가 (실제로 smooth하지 않음)</li>
                <li>&bull; Mixed BL 상관식은 천이가 sharp하다고 가정</li>
                <li>&bull; 실제 천이는 점진적이므로 약간의 오차 존재</li>
                <li>&bull; 보수적 설계: 전체 난류 가정하면 열전달 과대 예측</li>
                <li>&bull; 물성 평가: Film temperature <Math tex="T_f = (T_s + T_\infty)/2" /></li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

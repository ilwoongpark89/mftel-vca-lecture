"use client";

import { motion } from "framer-motion";
import Math from "@/components/Math";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function KeyConceptCard({
  title,
  children,
  accent = "teal",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "teal" ? "border-teal-500/20" : accent === "orange" ? "border-orange-500/20" : accent === "blue" ? "border-blue-500/20" : accent === "emerald" ? "border-emerald-500/20" : accent === "purple" ? "border-purple-500/20" : "border-slate-700";
  const textColor = accent === "teal" ? "text-teal-400" : accent === "orange" ? "text-orange-400" : accent === "blue" ? "text-blue-400" : accent === "emerald" ? "text-emerald-400" : accent === "purple" ? "text-purple-400" : "text-gray-400";
  return (
    <div className={`p-4 rounded-xl bg-slate-800/30 border ${borderColor}`}>
      <h4 className={`text-sm font-bold ${textColor} mb-2`}>{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Week10Summary() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Week 10 Summary
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            외부 유동 열전달의 핵심 개념과 상관식 정리
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Flat Plate Summary */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-teal-400 mb-6 text-center">
                Flat Plate Correlations
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Flow Regime</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Local <Math tex="Nu_x" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Average <Math tex="\overline{Nu}_L" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-teal-400">Laminar</td>
                      <td className="py-4 px-4"><Math tex="0.332 Re_x^{0.5} Pr^{1/3}" /></td>
                      <td className="py-4 px-4"><Math tex="0.664 Re_L^{0.5} Pr^{1/3}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-orange-400">Turbulent</td>
                      <td className="py-4 px-4"><Math tex="0.0296 Re_x^{0.8} Pr^{1/3}" /></td>
                      <td className="py-4 px-4"><Math tex="0.037 Re_L^{0.8} Pr^{1/3}" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-blue-400">Mixed</td>
                      <td className="py-4 px-4">-</td>
                      <td className="py-4 px-4"><Math tex="(0.037 Re_L^{0.8} - 871) Pr^{1/3}" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500">
                Transition at <Math tex="Re_{x,cr} \approx 5 \times 10^5" /> | Properties at <Math tex="T_f = (T_s + T_\infty)/2" />
              </div>
            </div>
          </motion.div>

          {/* Cylinder Summary */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-6 text-center">
                Cylinder in Crossflow
              </h3>

              <div className="p-4 rounded-xl bg-slate-900/50 mb-4">
                <h4 className="text-sm font-bold text-white mb-3">Churchill-Bernstein Correlation (Recommended)</h4>
                <Math tex={`\\overline{Nu}_D = 0.3 + \\frac{0.62 Re_D^{1/2} Pr^{1/3}}{[1 + (0.4/Pr)^{2/3}]^{1/4}} \\left[1 + \\left(\\frac{Re_D}{282000}\\right)^{5/8}\\right]^{4/5}`} display />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Valid for <Math tex="Re_D \cdot Pr > 0.2" />, all Reynolds numbers
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50">
                <h4 className="text-sm font-bold text-white mb-3">Hilpert Correlation (Alternative)</h4>
                <Math tex={`\\overline{Nu}_D = C Re_D^m Pr^{1/3}`} display />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  C and m depend on <Math tex="Re_D" /> range (see table)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sphere Summary */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-blue-400 mb-6 text-center">
                Flow Over Sphere
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-purple-400 mb-2">Whitaker</h4>
                  <Math tex={`Nu_D = 2 + (0.4Re_D^{0.5} + 0.06Re_D^{2/3})Pr^{0.4}\\left(\\frac{\\mu}{\\mu_s}\\right)^{0.25}`} display />
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-orange-400 mb-2">Ranz-Marshall</h4>
                  <Math tex={`Nu_D = 2 + 0.6 Re_D^{0.5} Pr^{1/3}`} display />
                </div>
              </div>

              <p className="text-center text-sm text-gray-500 mt-4">
                <Math tex="Nu_D = 2" /> is the pure conduction limit (Re = 0)
              </p>
            </div>
          </motion.div>

          {/* Tube Bank Summary */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-purple-400 mb-6 text-center">
                Tube Banks
              </h3>

              <div className="p-4 rounded-xl bg-slate-900/50 mb-4">
                <h4 className="text-sm font-bold text-white mb-3">Zukauskas Correlation</h4>
                <Math tex={`\\overline{Nu}_D = C Re_{D,max}^m Pr^{0.36} \\left(\\frac{Pr}{Pr_s}\\right)^{1/4}`} display />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
                  <h5 className="text-teal-400 font-bold mb-2">Inline</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; Easier to clean</li>
                    <li>&bull; Lower pressure drop</li>
                    <li>&bull; Lower heat transfer</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">Staggered</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; Better mixing</li>
                    <li>&bull; Higher pressure drop</li>
                    <li>&bull; 10-30% higher h</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-slate-900/50 text-center">
                <p className="text-sm text-gray-400">
                  For <Math tex="N_L < 20" />: <Math tex="\overline{Nu}_D = F \cdot \overline{Nu}_{D,N_L \geq 20}" /> (correction factor F)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Concepts */}
          <motion.div {...fadeUp} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Key Concepts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <KeyConceptCard title="1. Characteristic Length" accent="teal">
                <ul className="space-y-1">
                  <li>&bull; Flat plate: L (plate length)</li>
                  <li>&bull; Cylinder/Sphere: D (diameter)</li>
                  <li>&bull; Tube bank: D with <Math tex="V_{max}" /></li>
                </ul>
              </KeyConceptCard>

              <KeyConceptCard title="2. Property Evaluation" accent="teal">
                <ul className="space-y-1">
                  <li>&bull; Film temp: <Math tex="T_f = (T_s + T_\infty)/2" /></li>
                  <li>&bull; Or bulk temp with viscosity correction</li>
                  <li>&bull; <Math tex="(\mu/\mu_s)^n" /> or <Math tex="(Pr/Pr_s)^n" /></li>
                </ul>
              </KeyConceptCard>

              <KeyConceptCard title="3. Transition Criteria" accent="orange">
                <ul className="space-y-1">
                  <li>&bull; Flat plate: <Math tex="Re_{x,cr} \approx 5 \times 10^5" /></li>
                  <li>&bull; Cylinder: <Math tex="Re_D \approx 2 \times 10^5" /></li>
                  <li>&bull; Sphere: <Math tex="Re_D \approx 2 \times 10^5" /></li>
                </ul>
              </KeyConceptCard>

              <KeyConceptCard title="4. Physical Insights" accent="orange">
                <ul className="space-y-1">
                  <li>&bull; Separation affects local Nu</li>
                  <li>&bull; Turbulent BL: delayed separation</li>
                  <li>&bull; Wake region: low heat transfer</li>
                </ul>
              </KeyConceptCard>
            </div>
          </motion.div>

          {/* Problem-Solving Strategy */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 text-center">
                Problem-Solving Strategy
              </h3>

              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">Identify Geometry:</strong> Flat plate, cylinder, sphere, or tube bank?
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">Calculate Properties:</strong> Evaluate at <Math tex="T_f" /> or appropriate reference temperature
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">Compute Re:</strong> Use characteristic length and velocity. For tube banks, use <Math tex="V_{max}" />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">Check Flow Regime:</strong> Laminar, turbulent, or mixed? Apply appropriate correlation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">Calculate Nu:</strong> Include any correction factors (rows, property variation)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">6</span>
                  <div>
                    <strong className="text-white">Find h:</strong> <Math tex="h = Nu \cdot k / L_{char}" />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">7</span>
                  <div>
                    <strong className="text-white">Calculate q:</strong> <Math tex="q = h A_s (T_s - T_\infty)" /> or use LMTD for heat exchangers
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Quick Reference */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Quick Reference</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/20">
                  <h4 className="text-teal-400 font-bold mb-3">Dimensionless Numbers</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Math tex="Re = \frac{\rho V L}{\mu} = \frac{V L}{\nu}" /></li>
                    <li><Math tex="Nu = \frac{h L}{k}" /></li>
                    <li><Math tex="Pr = \frac{\nu}{\alpha} = \frac{\mu c_p}{k}" /></li>
                    <li><Math tex="St = \frac{Nu}{Re \cdot Pr} = \frac{h}{\rho c_p V}" /></li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <h4 className="text-orange-400 font-bold mb-3">Useful Relations</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Math tex="\bar{h} = \frac{\overline{Nu} \cdot k}{L}" /></li>
                    <li><Math tex="q = \bar{h} A_s \Delta T" /></li>
                    <li><Math tex="q'' = h (T_s - T_\infty)" /></li>
                    <li>Laminar flat plate: <Math tex="\bar{h} = 2 h_L" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Week Preview */}
          <motion.div {...fadeUp}>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-4">Next Week Preview</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-teal-400">Week 11: Internal Flow</strong>
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Hydrodynamic and thermal entry lengths</li>
                <li>Fully developed flow in pipes and ducts</li>
                <li>Constant wall temperature vs. constant heat flux</li>
                <li>Correlations for laminar and turbulent internal flows</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

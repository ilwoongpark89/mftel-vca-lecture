"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import MathTex from "@/components/Math";
const Math = MathTex;
const NativeMath = globalThis.Math;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function SectionDivider({ number, title }: { number: string; title: string }) {
  return (
    <motion.div {...fadeUp} className="flex items-center gap-4 mb-8 mt-20 first:mt-0">
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({ label, children, accent = "blue" }: { label?: string; children: React.ReactNode; accent?: string }) {
  const borderColor = accent === "blue" ? "border-blue-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "orange" ? "border-orange-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div className="text-blue-400">{children}</div>
    </div>
  );
}

function InsightCard({ title, children, accent = "blue", icon = "!" }: { title: string; children: React.ReactNode; accent?: string; icon?: string }) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", iconBg: "bg-purple-500/20" },
  };
  const c = colors[accent] || colors.blue;
  return (
    <div className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
      <div className="flex items-start gap-3">
        <span className={`flex-shrink-0 w-7 h-7 rounded-full ${c.iconBg} flex items-center justify-center ${c.text} text-xs font-bold`}>{icon}</span>
        <div>
          <h4 className={`font-bold ${c.text} mb-2`}>{title}</h4>
          <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

// Non-Condensable Gas Effect Visualization
function NonCondensableGasEffect() {
  const [gasPercent, setGasPercent] = useState(0);

  // Rough approximation of h reduction with NCG (based on Colburn-Hougen)
  const hReduction = gasPercent > 0 ? NativeMath.exp(-0.03 * gasPercent) : 1.0;
  const hValue = (10000 * hReduction).toFixed(0);

  return (
    <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
      <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
        Non-Condensable Gas (NCG) Effect on Condensation
      </h4>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h5 className="text-white font-bold">Air Content in Steam</h5>

          <div>
            <label className="text-sm text-gray-400 block mb-1">
              Air Mass Fraction (%)
            </label>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={gasPercent}
              onChange={(e) => setGasPercent(parseFloat(e.target.value))}
              className="w-full"
            />
            <span className="text-red-400 text-sm">{gasPercent}%</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
            <h6 className="text-sm text-gray-400 mb-2">Typical NCG Sources:</h6>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>&bull; Air leakage into vacuum condensers</li>
              <li>&bull; Dissolved gases released from feedwater</li>
              <li>&bull; Decomposition products</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="text-white font-bold">Heat Transfer Effect</h5>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-gray-400 mb-2">Heat Transfer Coefficient</p>
            <p className="text-3xl font-bold text-blue-400">
              {hValue} W/(m2K)
            </p>
            <p className="text-sm text-gray-500 mt-1">
              ({(hReduction * 100).toFixed(0)}% of pure steam value)
            </p>
          </div>

          {/* Visual bar showing degradation */}
          <div className="p-4 rounded-xl bg-slate-900/50">
            <p className="text-xs text-gray-400 mb-2">Performance Degradation</p>
            <div className="h-6 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 via-yellow-500 to-red-500 transition-all duration-300"
                style={{ width: `${hReduction * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span className="text-red-400">0%</span>
              <span className="text-emerald-400">100%</span>
            </div>
          </div>

          {gasPercent > 0 && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
              <p className="text-xs text-red-400">
                <strong>Warning:</strong> Even {gasPercent}% NCG reduces h by {((1 - hReduction) * 100).toFixed(0)}%!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Condensation() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Part 6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Film Condensation</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Film condensation is the dominant mode in industrial applications.
            The Nusselt analysis provides the fundamental understanding of condensate film behavior.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Condensation Overview */}
          <SectionDivider number="1" title="Condensation Overview" />

          <motion.div {...fadeUp} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Condensation</strong> occurs when vapor contacts a surface below
              its saturation temperature. The released latent heat enables very high heat transfer rates,
              making condensation critical for power plant condensers, HVAC systems, and chemical processing.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-6">
              <h4 className="text-lg font-bold text-blue-400 mb-3">Film Condensation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>&bull; Condensate forms continuous film</li>
                <li>&bull; Most common in industrial applications</li>
                <li>&bull; Film acts as thermal resistance</li>
                <li>&bull; <Math tex="h \sim 5,000 - 25,000" /> W/(m2K)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-6">
              <h4 className="text-lg font-bold text-cyan-400 mb-3">Dropwise Condensation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>&bull; Condensate forms discrete droplets</li>
                <li>&bull; Requires non-wetting (hydrophobic) surface</li>
                <li>&bull; 5-10x higher h than film condensation</li>
                <li>&bull; <Math tex="h \sim 50,000 - 250,000" /> W/(m2K)</li>
              </ul>
            </div>
          </motion.div>

          {/* 2. Nusselt Film Analysis - Full Derivation */}
          <SectionDivider number="2" title="Nusselt Film Analysis: Full Derivation" />

          <motion.div {...fadeUp} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Wilhelm Nusselt (1916) derived the classic solution for laminar film condensation on a
              vertical plate. This analysis remains fundamental to understanding condensation heat transfer.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Nusselt Assumptions
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <ul className="space-y-2">
                  <li><span className="text-cyan-400 font-bold">1.</span> Laminar film flow (low Re)</li>
                  <li><span className="text-cyan-400 font-bold">2.</span> Constant fluid properties</li>
                  <li><span className="text-cyan-400 font-bold">3.</span> Pure saturated vapor at <Math tex="T_{sat}" /></li>
                  <li><span className="text-cyan-400 font-bold">4.</span> Constant wall temperature <Math tex="T_s" /></li>
                </ul>
                <ul className="space-y-2">
                  <li><span className="text-cyan-400 font-bold">5.</span> Negligible inertia in film</li>
                  <li><span className="text-cyan-400 font-bold">6.</span> Negligible vapor shear at interface</li>
                  <li><span className="text-cyan-400 font-bold">7.</span> Heat transfer by conduction only in film</li>
                  <li><span className="text-cyan-400 font-bold">8.</span> <Math tex="\rho_v \ll \rho_l" /> (vapor density negligible)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Step-by-Step Derivation
              </h4>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/80">
                  <h5 className="text-white font-bold mb-3">Step 1: Momentum Equation in Film</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    For steady laminar flow with gravity and viscous forces:
                  </p>
                  <EquationBox accent="cyan">
                    <Math tex={`\\mu_l \\frac{d^2 u}{dy^2} + \\rho_l g = 0`} display />
                  </EquationBox>
                  <p className="text-xs text-gray-500 mt-2">
                    Boundary conditions: u = 0 at y = 0 (no-slip), du/dy = 0 at y = delta (no shear)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80">
                  <h5 className="text-white font-bold mb-3">Step 2: Velocity Profile</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Integrating twice with boundary conditions:
                  </p>
                  <EquationBox accent="blue">
                    <Math tex={`u(y) = \\frac{\\rho_l g}{\\mu_l} \\left( \\delta y - \\frac{y^2}{2} \\right)`} display />
                  </EquationBox>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80">
                  <h5 className="text-white font-bold mb-3">Step 3: Mass Flow Rate</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Mass flow rate per unit width at position x:
                  </p>
                  <EquationBox accent="emerald">
                    <Math tex={`\\Gamma = \\int_0^{\\delta} \\rho_l u \\, dy = \\frac{\\rho_l^2 g \\delta^3}{3\\mu_l}`} display />
                  </EquationBox>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80">
                  <h5 className="text-white font-bold mb-3">Step 4: Energy Balance</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Heat conducted through film equals latent heat released:
                  </p>
                  <EquationBox accent="orange">
                    <Math tex={`k_l \\frac{T_{sat} - T_s}{\\delta} = h'_{fg} \\frac{d\\Gamma}{dx}`} display />
                  </EquationBox>
                  <p className="text-xs text-gray-500 mt-2">
                    Modified latent heat: <Math tex="h'_{fg} = h_{fg} + 0.68 c_{p,l}(T_{sat} - T_s)" />
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80">
                  <h5 className="text-white font-bold mb-3">Step 5: Film Thickness</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Solving the differential equation for film thickness:
                  </p>
                  <EquationBox accent="blue">
                    <Math tex={`\\delta(x) = \\left[ \\frac{4 k_l \\mu_l (T_{sat} - T_s) x}{g \\rho_l (\\rho_l - \\rho_v) h'_{fg}} \\right]^{1/4}`} display />
                  </EquationBox>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                  <h5 className="text-emerald-400 font-bold mb-3">Final Results</h5>

                  <div className="space-y-4">
                    <EquationBox label="Local Heat Transfer Coefficient" accent="emerald">
                      <Math tex={`h_x = \\frac{k_l}{\\delta} = \\left[ \\frac{g \\rho_l (\\rho_l - \\rho_v) k_l^3 h'_{fg}}{4 \\mu_l (T_{sat} - T_s) x} \\right]^{1/4}`} display />
                    </EquationBox>

                    <EquationBox label="Average h over Length L" accent="blue">
                      <Math tex={`\\bar{h}_L = \\frac{4}{3} h_{x=L} = 0.943 \\left[ \\frac{g \\rho_l (\\rho_l - \\rho_v) k_l^3 h'_{fg}}{\\mu_l (T_{sat} - T_s) L} \\right]^{1/4}`} display />
                    </EquationBox>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <InsightCard title="Physical Insight: Film Thickness" icon="delta">
              <p>
                The film thickness grows as <Math tex="\delta \propto x^{1/4}" /> because more vapor condenses
                as flow progresses down the plate. The heat transfer coefficient
                <Math tex="h_x \propto x^{-1/4}" /> decreases with x because the thickening film increases
                thermal resistance. This is why short surfaces give higher average h than long surfaces.
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. Other Geometries */}
          <SectionDivider number="3" title="Condensation on Other Geometries" />

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                Film Condensation Correlations
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Geometry</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Correlation</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-blue-400">Vertical Plate (L)</td>
                      <td className="py-3 px-4">
                        <Math tex="\bar{h} = 0.943 [...]^{1/4}" />
                      </td>
                      <td className="py-3 px-4 text-gray-400">Nusselt original</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Horizontal Tube (D)</td>
                      <td className="py-3 px-4">
                        <Math tex="\bar{h} = 0.729 [...]^{1/4}" />
                      </td>
                      <td className="py-3 px-4 text-gray-400">Replace L with D</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-emerald-400">N Horizontal Tubes</td>
                      <td className="py-3 px-4">
                        <Math tex="\bar{h}_N = \bar{h}_1 \cdot N^{-1/4}" />
                      </td>
                      <td className="py-3 px-4 text-gray-400">Vertically stacked</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-purple-400">Inclined Plate</td>
                      <td className="py-3 px-4">
                        <Math tex="\bar{h} = 0.943 [g \cos\theta...]^{1/4}" />
                      </td>
                      <td className="py-3 px-4 text-gray-400">Use g cos(theta)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-orange-400">Sphere (D)</td>
                      <td className="py-3 px-4">
                        <Math tex="\bar{h} = 0.815 [...]^{1/4}" />
                      </td>
                      <td className="py-3 px-4 text-gray-400">Replace L with D</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <InsightCard title="Tube Bank Design" accent="cyan" icon="N">
              <p>
                For N horizontal tubes arranged vertically, the lower tubes experience thicker condensate
                film due to drainage from upper tubes. The factor <Math tex="N^{-1/4}" /> accounts for this
                reduction. However, turbulence in falling film can actually enhance heat transfer for
                large N, so <Math tex="N^{-1/6}" /> is sometimes used for large tube banks.
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. Vapor Velocity Effect */}
          <SectionDivider number="4" title="Effect of Vapor Velocity" />

          <motion.div {...fadeUp} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The Nusselt analysis assumes quiescent vapor. In practice, vapor flow can significantly
              affect condensation through <strong className="text-white">interfacial shear</strong>.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Vapor Shear Effects
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-3">Co-current Vapor Flow</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Vapor flows in same direction as condensate:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; Thins the condensate film</li>
                    <li>&bull; <strong className="text-emerald-400">Increases h</strong> (by up to 50%)</li>
                    <li>&bull; Can cause film instability at high velocity</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-3">Counter-current Vapor Flow</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Vapor flows opposite to condensate:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; Thickens the condensate film</li>
                    <li>&bull; <strong className="text-red-400">Decreases h</strong></li>
                    <li>&bull; Can cause flooding at high velocity</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/80">
                <h5 className="text-white font-bold mb-3">Vapor Shear Modified Correlation</h5>
                <EquationBox accent="cyan">
                  <Math tex={`\\bar{h} = \\bar{h}_{Nusselt} \\left[ 1 + C \\left( \\frac{\\tau_i}{\\rho_l g \\delta} \\right) \\right]`} display />
                </EquationBox>
                <p className="text-xs text-gray-500 mt-2">
                  where <Math tex="\tau_i" /> is the interfacial shear stress from vapor flow
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5. Non-Condensable Gases */}
          <SectionDivider number="5" title="Effect of Non-Condensable Gases" />

          <motion.div {...fadeUp} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-red-400">Non-condensable gases (NCG)</strong> such as air can
              dramatically reduce condensation heat transfer. Even small amounts (1-2%) can reduce h by 50% or more.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <NonCondensableGasEffect />
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                NCG Mechanism
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-orange-400 font-bold mb-3">Physical Mechanism</h5>
                  <ol className="space-y-2 text-sm text-gray-400">
                    <li><span className="text-orange-400">1.</span> Vapor condenses at interface</li>
                    <li><span className="text-orange-400">2.</span> NCG accumulates at interface (cannot condense)</li>
                    <li><span className="text-orange-400">3.</span> NCG layer blocks vapor access</li>
                    <li><span className="text-orange-400">4.</span> Vapor must diffuse through NCG layer</li>
                    <li><span className="text-orange-400">5.</span> Diffusion resistance dominates</li>
                  </ol>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-cyan-400 font-bold mb-3">Colburn-Hougen Equation</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Combined heat and mass transfer analysis:
                  </p>
                  <EquationBox accent="cyan">
                    <Math tex={`q'' = h_f (T_{sat,i} - T_s) = h_g (T_v - T_{sat,i}) + \\dot{m}'' h_{fg}`} display />
                  </EquationBox>
                  <p className="text-xs text-gray-500 mt-2">
                    where mass transfer: <Math tex="\dot{m}'' = h_m (\rho_{v,\infty} - \rho_{v,i})" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <InsightCard title="Industrial Practice: Venting NCG" accent="red" icon="!">
              <p>
                In power plant condensers, air leakage is inevitable. Practical solutions include:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">Air ejectors:</strong> Steam-driven pumps to remove NCG</li>
                <li>&bull; <strong className="text-white">Deaeration:</strong> Pre-removal of dissolved gases</li>
                <li>&bull; <strong className="text-white">Vent condensers:</strong> Secondary condensers to recover steam</li>
                <li>&bull; <strong className="text-white">Shell-side baffling:</strong> Direct vapor flow to sweep NCG</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 6. Enhanced Condensation Surfaces */}
          <SectionDivider number="6" title="Enhanced Condensation Surfaces" />

          <motion.div {...fadeUp} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Modern condensers use enhanced surfaces to improve heat transfer by thinning the condensate
              film or promoting dropwise condensation.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                Enhanced Condensation Techniques
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-cyan-400 font-bold mb-2">Finned Tubes (Film)</h5>
                  <p className="text-sm text-gray-400">
                    Low fins (1-2 mm) drain condensate through surface tension, thinning the film.
                    Enhancement: 2-4x over plain tubes.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-blue-400 font-bold mb-2">Integral-Fin Tubes</h5>
                  <p className="text-sm text-gray-400">
                    Trapezoidal or sawtooth fins with drainage channels.
                    Used in HVAC condensers. Enhancement: 3-6x.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-emerald-400 font-bold mb-2">Hydrophobic Coatings</h5>
                  <p className="text-sm text-gray-400">
                    Promote dropwise condensation. SAM coatings, PTFE, polymer films.
                    Enhancement: 5-20x (but durability is a challenge).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-purple-400 font-bold mb-2">Nanostructured Surfaces</h5>
                  <p className="text-sm text-gray-400">
                    Hierarchical micro/nano structures for sustained dropwise condensation.
                    Jumping droplet condensation on superhydrophobic surfaces.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 7. Example Problem */}
          <SectionDivider number="7" title="Example Problem" />

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                Example: Vertical Plate Condensation
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">Problem:</strong> Saturated steam at 1 atm condenses on a
                  vertical plate (H = 1 m, W = 2 m) maintained at 90 deg C. Calculate (a) the average heat
                  transfer coefficient, (b) total heat transfer rate, and (c) condensation rate.
                </p>
                <p className="text-sm">
                  Properties at film temperature (~95 deg C): <Math tex="\rho_l = 958" /> kg/m3,
                  <Math tex="k_l = 0.68" /> W/(m K), <Math tex="\mu_l = 2.82 \times 10^{-4}" /> Pa s,
                  <Math tex="h_{fg} = 2257" /> kJ/kg, <Math tex="c_{p,l} = 4.22" /> kJ/(kg K)
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: Modified Latent Heat</p>
                  <Math tex="h'_{fg} = h_{fg} + 0.68 c_{p,l} (T_{sat} - T_s) = 2257 + 0.68 \times 4.22 \times 10 = 2286 \text{ kJ/kg}" display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 2: Average Heat Transfer Coefficient</p>
                  <Math tex="\bar{h} = 0.943 \left[\frac{9.81 \times 958 \times 958 \times 0.68^3 \times 2.286 \times 10^6}{2.82 \times 10^{-4} \times 10 \times 1}\right]^{1/4}" display />
                  <Math tex="\bar{h} = 0.943 \times 12740 = \boxed{12,014 \text{ W/(m}^2\text{K)}}" display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: Heat Transfer Rate and Condensation</p>
                  <Math tex="q = \bar{h} A \Delta T = 12014 \times (1 \times 2) \times 10 = 240,280 \text{ W} = \boxed{240.3 \text{ kW}}" display />
                  <Math tex="\dot{m} = \frac{q}{h'_{fg}} = \frac{240280}{2286000} = \boxed{0.105 \text{ kg/s}}" display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 4: Check Film Reynolds Number</p>
                  <Math tex="Re_\delta = \frac{4\Gamma}{\mu_l} = \frac{4 \times (0.105/2)}{2.82 \times 10^{-4}} = 744 < 1800 \quad \checkmark \text{ (Laminar)}" display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 8. Film Reynolds Number Regimes */}
          <SectionDivider number="8" title="Laminar-Turbulent Transition" />

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">Film Flow Regimes</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-4 text-gray-400"><Math tex="Re_\delta = 4\Gamma/\mu_l" /></th>
                      <th className="text-left py-2 px-4 text-gray-400">Flow Regime</th>
                      <th className="text-left py-2 px-4 text-gray-400">Characteristics</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-4"><Math tex="Re_\delta < 30" /></td>
                      <td className="py-2 px-4 text-blue-400">Laminar (smooth)</td>
                      <td className="py-2 px-4 text-gray-400">Nusselt theory exact</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-4"><Math tex="30 < Re_\delta < 1800" /></td>
                      <td className="py-2 px-4 text-cyan-400">Laminar (wavy)</td>
                      <td className="py-2 px-4 text-gray-400">Surface waves enhance h by 20%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4"><Math tex="Re_\delta > 1800" /></td>
                      <td className="py-2 px-4 text-emerald-400">Turbulent</td>
                      <td className="py-2 px-4 text-gray-400">Use Labuntsov or other correlations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <InsightCard title="Key Takeaways" accent="blue" icon="S">
              <p>
                Film condensation heat transfer is governed by the <strong className="text-blue-400">Nusselt analysis</strong>,
                which shows <Math tex="h \propto \delta^{-1} \propto x^{-1/4}" />.
                <strong className="text-orange-400"> Non-condensable gases</strong> are extremely detrimental and must be
                actively removed. <strong className="text-cyan-400">Surface enhancement</strong> and
                <strong className="text-purple-400"> dropwise condensation</strong> offer significant performance improvements.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

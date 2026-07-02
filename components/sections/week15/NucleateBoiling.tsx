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
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "red" ? "border-red-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "purple" ? "border-purple-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div className="text-cyan-400">
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
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", iconBg: "bg-purple-500/20" },
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

// Rohsenow Calculator Component
function RohsenowCalculator() {
  const [deltaT, setDeltaT] = useState(10); // K
  const [Csf, setCsf] = useState(0.013);
  const [n, setN] = useState(1.0);

  // Water properties at 1 atm
  const mu_l = 2.82e-4; // Pa.s
  const hfg = 2257000; // J/kg
  const rho_l = 958; // kg/m3
  const rho_v = 0.596; // kg/m3
  const sigma = 0.0589; // N/m
  const cp_l = 4217; // J/kg.K
  const Pr_l = 1.76;
  const g = 9.81;

  // Rohsenow correlation
  const term1 = mu_l * hfg;
  const term2 = NativeMath.sqrt(g * (rho_l - rho_v) / sigma);
  const term3 = NativeMath.pow(cp_l * deltaT / (Csf * hfg * NativeMath.pow(Pr_l, n)), 3);
  const q = term1 * term2 * term3;

  const h = q / deltaT;

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
      <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
        Rohsenow Correlation Calculator (Water at 1 atm)
      </h4>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h5 className="text-white font-bold">Input Parameters</h5>

          <div>
            <label className="text-sm text-gray-400 block mb-1">
              Wall Superheat, <Math tex="\Delta T_e" /> (K)
            </label>
            <input
              type="range"
              min="2"
              max="30"
              value={deltaT}
              onChange={(e) => setDeltaT(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="text-cyan-400 text-sm">{deltaT} K</span>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-1">
              Surface-Fluid Constant, <Math tex="C_{sf}" />
            </label>
            <select
              value={Csf}
              onChange={(e) => setCsf(parseFloat(e.target.value))}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:border-emerald-500 focus:outline-none"
            >
              <option value={0.013}>Water-Copper (polished): 0.0130</option>
              <option value={0.0132}>Water-Stainless Steel: 0.0132</option>
              <option value={0.006}>Water-Brass: 0.0060</option>
              <option value={0.008}>Water-Nickel: 0.0080</option>
              <option value={0.015}>Water-Platinum: 0.0150</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-1">
              Exponent n (1.0 for water)
            </label>
            <input
              type="number"
              value={n}
              onChange={(e) => setN(parseFloat(e.target.value) || 1.0)}
              step="0.1"
              min="0.5"
              max="2.0"
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="text-white font-bold">Results</h5>

          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <p className="text-sm text-gray-400 mb-2">Heat Flux</p>
            <p className="text-2xl font-bold text-cyan-400">
              {(q / 1000).toFixed(1)} kW/m2
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-gray-400 mb-2">Heat Transfer Coefficient</p>
            <p className="text-2xl font-bold text-blue-400">
              {h.toFixed(0)} W/(m2K)
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-sm text-gray-400 mb-2">Effective Enhancement vs Natural Conv.</p>
            <p className="text-2xl font-bold text-emerald-400">
              {(h / 500).toFixed(1)}x
            </p>
            <p className="text-xs text-gray-500">Compared to h_nc ~ 500 W/(m2K)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NucleateBoiling() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nucleate Boiling
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nucleate boiling is the most efficient heat transfer regime in phase change.
            Understanding the Rohsenow correlation and surface enhancement techniques is essential for thermal design.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Rohsenow Correlation Philosophy */}
          <SectionDivider number="1" title="Rohsenow Correlation: Physical Basis" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-cyan-400">Warren Rohsenow (1952)</strong> developed the most widely used
              correlation for nucleate pool boiling by drawing analogy with forced convection heat transfer.
              His key insight: treat the bubble-induced liquid motion as a form of "boiling convection."
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Derivation Philosophy
              </h4>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/80">
                  <h5 className="text-white font-bold mb-3">Step 1: Forced Convection Analogy</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Start with the classic forced convection correlation form:
                  </p>
                  <EquationBox accent="cyan">
                    <Math tex={`Nu = C \\cdot Re^m \\cdot Pr^n`} display />
                  </EquationBox>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80">
                  <h5 className="text-white font-bold mb-3">Step 2: Define Boiling Reynolds Number</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Use bubble-induced velocity as characteristic velocity:
                  </p>
                  <EquationBox accent="blue">
                    <Math tex={`Re_b = \\frac{q''}{\\mu_l h_{fg}} \\sqrt{\\frac{\\sigma}{g(\\rho_l - \\rho_v)}}`} display />
                  </EquationBox>
                  <p className="text-xs text-gray-500 mt-2">
                    The characteristic length is the capillary length <Math tex="L_c = \sqrt{\sigma/[g(\rho_l-\rho_v)]}" />
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80">
                  <h5 className="text-white font-bold mb-3">Step 3: Dimensional Analysis</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Rearranging with experimental fitting yields the final form:
                  </p>
                  <EquationBox accent="emerald">
                    <Math tex={`q'' = \\mu_l h_{fg} \\left[ \\frac{g(\\rho_l - \\rho_v)}{\\sigma} \\right]^{1/2} \\left[ \\frac{c_{p,l} \\Delta T_e}{C_{sf} h_{fg} Pr_l^n} \\right]^3`} display />
                  </EquationBox>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Key Physical Insight" accent="cyan" icon="P">
              <p>
                The Rohsenow correlation captures the physics that heat transfer in nucleate boiling
                is proportional to <Math tex="(\Delta T_e)^3" />, which corresponds to the combined effects of:
                (1) increasing number of active sites ~ <Math tex="(\Delta T_e)^m" />,
                (2) larger bubble departure diameter, and
                (3) higher departure frequency. The <Math tex="C_{sf}" /> accounts for surface-fluid interaction.
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. Expanded Csf Table */}
          <SectionDivider number="2" title="Surface-Fluid Constant C_sf" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The empirical constant <Math tex="C_{sf}" /> varies significantly with surface material,
              surface finish, and fluid type. <strong className="text-white">Lower <Math tex="C_{sf}" /> means better heat transfer</strong>
              (lower superheat needed for same heat flux).
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                Comprehensive C_sf Values
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">Surface-Fluid Combination</th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium"><Math tex="C_{sf}" /></th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">n</th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800 bg-cyan-500/5">
                      <td className="py-2 px-3 font-bold text-cyan-400">Water - Copper (polished)</td>
                      <td className="py-2 px-3">0.0130</td>
                      <td className="py-2 px-3">1.0</td>
                      <td className="py-2 px-3 text-gray-400">Reference surface</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">Water - Copper (scored)</td>
                      <td className="py-2 px-3">0.0068</td>
                      <td className="py-2 px-3">1.0</td>
                      <td className="py-2 px-3 text-gray-400">Roughened, more sites</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">Water - Stainless Steel (mech. polished)</td>
                      <td className="py-2 px-3">0.0132</td>
                      <td className="py-2 px-3">1.0</td>
                      <td className="py-2 px-3 text-gray-400">Common industrial</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">Water - Stainless Steel (ground)</td>
                      <td className="py-2 px-3">0.0080</td>
                      <td className="py-2 px-3">1.0</td>
                      <td className="py-2 px-3 text-gray-400">Rougher finish</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">Water - Brass</td>
                      <td className="py-2 px-3">0.0060</td>
                      <td className="py-2 px-3">1.0</td>
                      <td className="py-2 px-3 text-gray-400">Excellent performer</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">Water - Nickel</td>
                      <td className="py-2 px-3">0.0060</td>
                      <td className="py-2 px-3">1.0</td>
                      <td className="py-2 px-3 text-gray-400">Good wettability</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">Water - Platinum</td>
                      <td className="py-2 px-3">0.0130</td>
                      <td className="py-2 px-3">1.0</td>
                      <td className="py-2 px-3 text-gray-400">Clean surface</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-blue-500/5">
                      <td className="py-2 px-3 font-bold text-blue-400">n-Pentane - Copper (polished)</td>
                      <td className="py-2 px-3">0.0154</td>
                      <td className="py-2 px-3">1.7</td>
                      <td className="py-2 px-3 text-gray-400">Organic fluid</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">n-Pentane - Chromium</td>
                      <td className="py-2 px-3">0.0150</td>
                      <td className="py-2 px-3">1.7</td>
                      <td className="py-2 px-3 text-gray-400">-</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">Benzene - Chromium</td>
                      <td className="py-2 px-3">0.0101</td>
                      <td className="py-2 px-3">1.7</td>
                      <td className="py-2 px-3 text-gray-400">-</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">Ethanol - Chromium</td>
                      <td className="py-2 px-3">0.0027</td>
                      <td className="py-2 px-3">1.7</td>
                      <td className="py-2 px-3 text-gray-400">Very low - excellent</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-emerald-500/5">
                      <td className="py-2 px-3 font-bold text-emerald-400">FC-72 - Copper</td>
                      <td className="py-2 px-3">0.0040</td>
                      <td className="py-2 px-3">1.7</td>
                      <td className="py-2 px-3 text-gray-400">Dielectric coolant</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-bold text-emerald-400">Novec 7100 - Copper</td>
                      <td className="py-2 px-3">0.0035</td>
                      <td className="py-2 px-3">1.7</td>
                      <td className="py-2 px-3 text-gray-400">Electronics cooling</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Surface Roughness Effect" accent="blue" icon="Ra">
              <p className="mb-2">
                Surface roughness affects <Math tex="C_{sf}" /> through two competing mechanisms:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">More nucleation sites:</strong> Rough surfaces have more cavities = lower <Math tex="C_{sf}" /></li>
                <li>&bull; <strong className="text-white">Reduced thermal contact:</strong> Very rough surfaces may trap vapor = higher <Math tex="C_{sf}" /></li>
                <li>&bull; <strong className="text-white">Optimal roughness:</strong> Typically Ra = 1-10 micrometers for best performance</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. Rohsenow Calculator */}
          <SectionDivider number="3" title="Rohsenow Correlation Calculator" />

          <motion.div {...stagger} className="mb-8">
            <RohsenowCalculator />
          </motion.div>

          {/* 4. Enhanced Surfaces */}
          <SectionDivider number="4" title="Enhanced Boiling Surfaces" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Modern thermal engineering employs <strong className="text-cyan-400">surface enhancement techniques</strong>
              to increase nucleate boiling heat transfer and extend the CHF limit. These surfaces provide
              more nucleation sites and better liquid supply pathways.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                Surface Enhancement Techniques
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-3">Microstructures</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; <strong className="text-white">Microfins:</strong> Extended surface area + enhanced convection</li>
                    <li>&bull; <strong className="text-white">Microchannels:</strong> Capillary wicking for liquid supply</li>
                    <li>&bull; <strong className="text-white">Microporous coatings:</strong> High nucleation site density</li>
                    <li>&bull; <strong className="text-white">Re-entrant cavities:</strong> Stable nucleation at low superheat</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">
                    Enhancement: 2-5x higher HTC
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-3">Nanostructures</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; <strong className="text-white">Nanowires (CuO, ZnO):</strong> Superhydrophilic surfaces</li>
                    <li>&bull; <strong className="text-white">CNT forests:</strong> High surface area, good thermal conductivity</li>
                    <li>&bull; <strong className="text-white">Nanoparticle coatings:</strong> Modify wettability</li>
                    <li>&bull; <strong className="text-white">Hierarchical structures:</strong> Multi-scale enhancement</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">
                    CHF enhancement: up to 200%
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-3">Porous Coatings</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; <strong className="text-white">Sintered metal powder:</strong> Cu, Ni particles</li>
                    <li>&bull; <strong className="text-white">Flame-sprayed coatings:</strong> Industrial application</li>
                    <li>&bull; <strong className="text-white">3D-printed porous structures:</strong> Controlled porosity</li>
                    <li>&bull; <strong className="text-white">Metal foams:</strong> High porosity (~90%)</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">
                    Commercial: High Flux, Gewa-T surfaces
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-3">Wettability Modification</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; <strong className="text-white">Hydrophilic treatment:</strong> Better rewetting, higher CHF</li>
                    <li>&bull; <strong className="text-white">Hydrophobic patches:</strong> Early ONB, lower superheat</li>
                    <li>&bull; <strong className="text-white">Biphilic surfaces:</strong> Optimized pattern of both</li>
                    <li>&bull; <strong className="text-white">SAM coatings:</strong> Self-assembled monolayers</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">
                    Biphilic: Best of both worlds
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Commercial Enhanced Surfaces */}
          <SectionDivider number="5" title="Commercial Enhanced Surfaces" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                Industrial Enhanced Boiling Surfaces
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Surface Name</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Manufacturer</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Structure Type</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">HTC Enhancement</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">High Flux</td>
                      <td className="py-3 px-4">UOP/Linde</td>
                      <td className="py-3 px-4">Sintered porous metal</td>
                      <td className="py-3 px-4 text-emerald-400">10-15x</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-blue-400">GEWA-T</td>
                      <td className="py-3 px-4">Wieland</td>
                      <td className="py-3 px-4">T-shaped fins</td>
                      <td className="py-3 px-4 text-emerald-400">5-8x</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-purple-400">Turbo-B</td>
                      <td className="py-3 px-4">Wolverine</td>
                      <td className="py-3 px-4">Subsurface tunnels</td>
                      <td className="py-3 px-4 text-emerald-400">8-12x</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">Thermoexcel-E</td>
                      <td className="py-3 px-4">Hitachi</td>
                      <td className="py-3 px-4">Re-entrant cavities</td>
                      <td className="py-3 px-4 text-emerald-400">6-10x</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-yellow-400">ECR</td>
                      <td className="py-3 px-4">Furukawa</td>
                      <td className="py-3 px-4">Porous copper</td>
                      <td className="py-3 px-4 text-emerald-400">5-8x</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 6. MFTEL Research */}
          <SectionDivider number="6" title="MFTEL Surface Enhancement Research" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                Prof. Park's Laboratory Research
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-purple-400 font-bold mb-3">Dielectric Fluid Boiling</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    MFTEL specializes in pool boiling heat transfer with dielectric fluids
                    (FC-72, Novec 7100, HFE-7200) for electronics thermal management.
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; GPU/TPU cooling achieving up to 90% energy reduction</li>
                    <li>&bull; Data center immersion cooling systems</li>
                    <li>&bull; EV battery thermal management</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-cyan-400 font-bold mb-3">Surface Modification Techniques</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Advanced surface engineering approaches studied at MFTEL:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; Electrochemical etching for micro-cavity creation</li>
                    <li>&bull; Laser surface texturing for controlled nucleation sites</li>
                    <li>&bull; Superhydrophobic flexible materials (patent pending)</li>
                    <li>&bull; Biphilic patterned surfaces for optimal boiling</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-emerald-400 font-bold mb-3">Visualization & Measurement</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    State-of-the-art experimental facilities:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; High-speed camera (10,000+ fps) for bubble dynamics</li>
                    <li>&bull; IR thermography for surface temperature mapping</li>
                    <li>&bull; Synchronized PIV for flow field measurement</li>
                    <li>&bull; Pressure-controlled pool boiling test rigs</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-orange-400 font-bold mb-3">Computational Approaches</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Complementary numerical modeling:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; OpenFOAM: VOF method for bubble simulation</li>
                    <li>&bull; ANSYS Fluent: Conjugate heat transfer</li>
                    <li>&bull; STAR-CCM+: Industrial-scale modeling</li>
                    <li>&bull; Machine learning for correlation development</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 7. Limitations */}
          <SectionDivider number="7" title="Rohsenow Correlation Limitations" />

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Important Limitations" accent="yellow" icon="!">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">Empirical nature:</strong> <Math tex="C_{sf}" /> must be determined experimentally for each surface-fluid pair</li>
                <li>&bull; <strong className="text-white">Accuracy:</strong> Typical uncertainty of +/- 25-100% due to surface variability</li>
                <li>&bull; <strong className="text-white">Valid range:</strong> Only in nucleate boiling regime, fails near CHF</li>
                <li>&bull; <strong className="text-white">Surface aging:</strong> <Math tex="C_{sf}" /> can change over time due to oxidation, fouling</li>
                <li>&bull; <strong className="text-white">Pressure effect:</strong> Different <Math tex="C_{sf}" /> may be needed at different pressures</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 8. Alternative Correlations */}
          <SectionDivider number="8" title="Alternative Correlations" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                Other Nucleate Boiling Correlations
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-white font-bold mb-2">Forster-Zuber (1955)</h5>
                  <p className="text-sm text-gray-400 mb-2">Based on micro-convection due to bubble growth:</p>
                  <EquationBox accent="cyan">
                    <Math tex={`h = 0.00122 \\left( \\frac{k_l^{0.79} c_{p,l}^{0.45} \\rho_l^{0.49}}{\\sigma^{0.5} \\mu_l^{0.29} h_{fg}^{0.24} \\rho_v^{0.24}} \\right) \\Delta T_e^{0.24} \\Delta P_{sat}^{0.75}`} display />
                  </EquationBox>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-white font-bold mb-2">Mostinski (1963)</h5>
                  <p className="text-sm text-gray-400 mb-2">Reduced pressure correlation (no surface constant needed):</p>
                  <EquationBox accent="blue">
                    <Math tex={`h = 0.106 P_c^{0.69} q''^{0.7} F_P`} display />
                  </EquationBox>
                  <p className="text-xs text-gray-500 mt-2">
                    where <Math tex="F_P = 1.8P_r^{0.17} + 4P_r^{1.2} + 10P_r^{10}" /> and <Math tex="P_r = P/P_c" />
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-white font-bold mb-2">Cooper (1984)</h5>
                  <p className="text-sm text-gray-400 mb-2">Includes surface roughness explicitly:</p>
                  <EquationBox accent="emerald">
                    <Math tex={`h = 55 P_r^{0.12-0.087\\ln R_p} (-\\log_{10} P_r)^{-0.55} M^{-0.5} q''^{0.67}`} display />
                  </EquationBox>
                  <p className="text-xs text-gray-500 mt-2">
                    <Math tex="R_p" />: surface roughness (micrometers), <Math tex="M" />: molecular weight
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Key Takeaways" accent="blue" icon="S">
              <p>
                The <strong className="text-cyan-400">Rohsenow correlation</strong> remains the most widely used method
                for predicting nucleate pool boiling. The <Math tex="C_{sf}" /> value is critical and varies with
                surface-fluid combination. <strong className="text-white">Enhanced surfaces</strong> can achieve 5-15x
                improvement in HTC, making them essential for high heat flux applications. Modern research focuses
                on nano/micro-structured surfaces to push the limits of boiling heat transfer.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

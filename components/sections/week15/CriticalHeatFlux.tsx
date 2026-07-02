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
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "red" ? "border-red-500/30" : accent === "emerald" ? "border-emerald-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div className="text-orange-400">
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
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", iconBg: "bg-purple-500/20" },
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

// CHF Calculator Component
function CHFCalculator() {
  const [fluid, setFluid] = useState("water");
  const [pressure, setPressure] = useState(101.325); // kPa

  // Fluid properties (at saturation)
  const fluidProps: Record<string, { hfg: number; rho_l: number; rho_v: number; sigma: number; Pc: number; name: string }> = {
    water: { hfg: 2257, rho_l: 958, rho_v: 0.596, sigma: 0.0589, Pc: 22064, name: "Water" },
    fc72: { hfg: 88, rho_l: 1680, rho_v: 13.4, sigma: 0.010, Pc: 1830, name: "FC-72" },
    novec7100: { hfg: 112, rho_l: 1510, rho_v: 9.6, sigma: 0.0136, Pc: 2230, name: "Novec 7100" },
    r134a: { hfg: 182, rho_l: 1206, rho_v: 32.4, sigma: 0.0082, Pc: 4059, name: "R-134a" },
  };

  const props = fluidProps[fluid];
  const g = 9.81;

  // Zuber correlation for CHF (horizontal upward facing)
  const CHF = 0.149 * (props.hfg * 1000) * props.rho_v *
    NativeMath.pow((props.sigma * g * (props.rho_l - props.rho_v)) / NativeMath.pow(props.rho_v, 2), 0.25);

  // Kutateladze number
  const Ku = CHF / (props.rho_v * (props.hfg * 1000) * NativeMath.pow(props.sigma * g * (props.rho_l - props.rho_v) / NativeMath.pow(props.rho_l, 2), 0.25));

  return (
    <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
      <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
        Pool Boiling CHF Calculator (Zuber Correlation)
      </h4>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h5 className="text-white font-bold">Select Fluid</h5>

          <div className="space-y-2">
            {Object.entries(fluidProps).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setFluid(key)}
                className={`w-full px-4 py-3 rounded-lg border text-left transition-all ${
                  fluid === key
                    ? "bg-orange-500/20 border-orange-500/50 text-orange-400"
                    : "bg-slate-800/50 border-slate-700 text-gray-400 hover:border-slate-600"
                }`}
              >
                <span className="font-bold">{value.name}</span>
                <span className="text-xs block mt-1">h_fg = {value.hfg} kJ/kg</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="text-white font-bold">Results (at 1 atm)</h5>

          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
            <p className="text-sm text-gray-400 mb-2">Critical Heat Flux (CHF)</p>
            <p className="text-3xl font-bold text-red-400">
              {(CHF / 1e6).toFixed(3)} MW/m2
            </p>
            <p className="text-lg text-orange-400 mt-1">
              = {(CHF / 1e4).toFixed(1)} W/cm2
            </p>
          </div>

          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <p className="text-sm text-gray-400 mb-2">Kutateladze Number</p>
            <p className="text-2xl font-bold text-cyan-400">
              {Ku.toFixed(3)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              (Zuber: K = 0.131, Kutateladze: K = 0.16)
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-gray-400 mb-2">Properties Used</p>
            <div className="text-xs text-gray-400 space-y-1">
              <p><Math tex="\rho_l" /> = {props.rho_l} kg/m3</p>
              <p><Math tex="\rho_v" /> = {props.rho_v} kg/m3</p>
              <p><Math tex="\sigma" /> = {props.sigma} N/m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// DNBR Calculator Component
function DNBRCalculator() {
  const [qOperating, setQOperating] = useState(500); // kW/m2
  const [qCHF, setQCHF] = useState(1200); // kW/m2

  const DNBR = qCHF / qOperating;
  const margin = ((DNBR - 1) * 100).toFixed(1);

  const getStatus = () => {
    if (DNBR >= 1.5) return { color: "text-emerald-400", status: "Safe", bg: "bg-emerald-500/10" };
    if (DNBR >= 1.3) return { color: "text-yellow-400", status: "Acceptable", bg: "bg-yellow-500/10" };
    if (DNBR >= 1.0) return { color: "text-orange-400", status: "Warning", bg: "bg-orange-500/10" };
    return { color: "text-red-400", status: "DNB Occurred!", bg: "bg-red-500/10" };
  };

  const status = getStatus();

  return (
    <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
      <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
        DNBR (Departure from Nucleate Boiling Ratio) Calculator
      </h4>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h5 className="text-white font-bold">Operating Conditions</h5>

          <div>
            <label className="text-sm text-gray-400 block mb-1">
              Operating Heat Flux (kW/m2)
            </label>
            <input
              type="range"
              min="100"
              max="1500"
              value={qOperating}
              onChange={(e) => setQOperating(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="text-cyan-400 text-sm">{qOperating} kW/m2</span>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-1">
              Local CHF (from correlation) (kW/m2)
            </label>
            <input
              type="range"
              min="500"
              max="2000"
              value={qCHF}
              onChange={(e) => setQCHF(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="text-orange-400 text-sm">{qCHF} kW/m2</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
            <h6 className="text-sm text-gray-400 mb-2">Typical Design Criteria:</h6>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>&bull; PWR: DNBR &gt; 1.3 (W-3 correlation)</li>
              <li>&bull; BWR: CPR &gt; 1.2 (GEXL correlation)</li>
              <li>&bull; CANDU: DNBR &gt; 1.33</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="text-white font-bold">Safety Analysis</h5>

          <div className={`p-4 rounded-xl ${status.bg} border border-current`}>
            <p className="text-sm text-gray-400 mb-2">DNBR Value</p>
            <p className={`text-4xl font-bold ${status.color}`}>
              {DNBR.toFixed(2)}
            </p>
            <p className={`text-lg font-bold ${status.color} mt-2`}>
              Status: {status.status}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-gray-400 mb-2">Safety Margin</p>
            <p className="text-2xl font-bold text-blue-400">
              {margin}%
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Additional capacity before DNB
            </p>
          </div>

          {/* Visual bar */}
          <div className="p-4 rounded-xl bg-slate-900/50">
            <p className="text-xs text-gray-400 mb-2">Operating Point vs CHF</p>
            <div className="h-6 bg-slate-800 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 via-yellow-500 to-red-500 transition-all"
                style={{ width: `${NativeMath.min(100, (qOperating / qCHF) * 100)}%` }}
              />
              <div className="absolute right-0 top-0 h-full w-1 bg-red-500" title="CHF" />
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span className="text-gray-500">0</span>
              <span className="text-red-400">CHF</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CriticalHeatFlux() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Critical Heat Flux (CHF)
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            CHF is the thermal limit of nucleate boiling and a critical safety parameter in nuclear reactors,
            boilers, and high heat flux electronics cooling systems.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. CHF Mechanisms */}
          <SectionDivider number="1" title="CHF Mechanisms" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The <strong className="text-orange-400">Critical Heat Flux (CHF)</strong> represents the maximum
              heat flux achievable in the nucleate boiling regime. Beyond CHF, the surface transitions to
              film boiling with dramatically reduced heat transfer and potential surface damage.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Competing CHF Theories
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-3">Hydrodynamic Instability Theory</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    <strong className="text-white">Zuber (1959)</strong>: CHF occurs when rising vapor columns
                    and descending liquid become unstable due to Kelvin-Helmholtz and Rayleigh-Taylor instabilities.
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; Based on vapor column spacing</li>
                    <li>&bull; Taylor wavelength determines critical conditions</li>
                    <li>&bull; Does not require surface effects</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-3">Macrolayer Dryout Theory</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    <strong className="text-white">Haramura & Katto (1983)</strong>: CHF occurs when the thin
                    liquid macrolayer beneath large vapor mushrooms evaporates completely before liquid can rewet.
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; Based on macrolayer thickness</li>
                    <li>&bull; Explains heater geometry effects</li>
                    <li>&bull; Accounts for surface wettability</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-3">Hot/Dry Spot Theory</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    <strong className="text-white">Theofanous & Dinh (2006)</strong>: CHF triggered when local
                    dry spots irreversibly expand due to inability of liquid to rewet the surface.
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; Local phenomenon, not global</li>
                    <li>&bull; Explains wettability dependence</li>
                    <li>&bull; Connects to surface microstructure</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-purple-500/20">
                  <h5 className="text-purple-400 font-bold mb-3">Interfacial Lift-off</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    <strong className="text-white">Kandlikar (2001)</strong>: Momentum of vapor leaving the surface
                    lifts the liquid-vapor interface away, blocking liquid access.
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; Force balance approach</li>
                    <li>&bull; Predicts contact angle effect</li>
                    <li>&bull; Used for CHF enhancement design</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Zuber Correlation Derivation */}
          <SectionDivider number="2" title="Zuber Correlation: Full Derivation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The <strong className="text-cyan-400">Zuber correlation (1959)</strong> is derived from the
              hydrodynamic instability of counter-current vapor and liquid flow. It remains the most
              widely used CHF correlation for pool boiling.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Derivation Steps
              </h4>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/80">
                  <h5 className="text-white font-bold mb-3">Step 1: Taylor Instability Wavelength</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    The most dangerous wavelength for Rayleigh-Taylor instability at a horizontal interface:
                  </p>
                  <EquationBox accent="cyan">
                    <Math tex={`\\lambda_{RT} = 2\\pi \\sqrt{\\frac{\\sigma}{g(\\rho_l - \\rho_v)}}`} display />
                  </EquationBox>
                  <p className="text-xs text-gray-500 mt-2">
                    This sets the spacing between rising vapor columns.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80">
                  <h5 className="text-white font-bold mb-3">Step 2: Vapor Column Velocity</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Critical velocity for Kelvin-Helmholtz instability at the vapor column interface:
                  </p>
                  <EquationBox accent="blue">
                    <Math tex={`u_{v,c} = \\sqrt{\\frac{2\\pi \\sigma (\\rho_l + \\rho_v)}{\\lambda_{KH} \\rho_l \\rho_v}}`} display />
                  </EquationBox>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80">
                  <h5 className="text-white font-bold mb-3">Step 3: Heat Balance</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Vapor mass flux from surface equals heat flux divided by latent heat:
                  </p>
                  <EquationBox accent="emerald">
                    <Math tex={`\\dot{m}'' = \\frac{q''_{max}}{h_{fg}} = \\rho_v u_v \\cdot A_v / A_{total}`} display />
                  </EquationBox>
                  <p className="text-xs text-gray-500 mt-2">
                    Vapor occupies fraction <Math tex="A_v / A_{total} = \pi/16" /> of area.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-orange-500/20 border border-orange-500/30">
                  <h5 className="text-orange-400 font-bold mb-3">Final Result: Zuber Correlation</h5>
                  <EquationBox accent="orange">
                    <Math tex={`q''_{max} = K \\cdot h_{fg} \\rho_v \\left[ \\frac{\\sigma g (\\rho_l - \\rho_v)}{\\rho_v^2} \\right]^{1/4}`} display />
                  </EquationBox>
                  <p className="text-sm text-gray-400 mt-4 text-center">
                    <Math tex="K = \pi/24 \approx 0.131" /> (Zuber), commonly used: <Math tex="K = 0.149" /> (adjusted)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Physical Meaning of CHF" accent="orange" icon="P">
              <p>
                The Zuber correlation shows that CHF depends on:
                <strong className="text-white"> latent heat</strong> <Math tex="h_{fg}" />,
                <strong className="text-white"> vapor density</strong> <Math tex="\rho_v" />,
                <strong className="text-white"> surface tension</strong> <Math tex="\sigma" />, and
                <strong className="text-white"> density difference</strong> <Math tex="(\rho_l - \rho_v)" />.
                It is independent of surface characteristics in the original form, which is a key limitation.
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. CHF Calculator */}
          <SectionDivider number="3" title="CHF Calculator for Pool Boiling" />

          <motion.div {...stagger} className="mb-8">
            <CHFCalculator />
          </motion.div>

          {/* 4. CHF Enhancement Techniques */}
          <SectionDivider number="4" title="CHF Enhancement Techniques" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Enhancing CHF is critical for high-power applications. Modern techniques focus on
              <strong className="text-white"> improving liquid supply to the surface</strong> and
              <strong className="text-white"> promoting rewetting of dry spots</strong>.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                CHF Enhancement Methods
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Method</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Mechanism</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Enhancement</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Hydrophilic Surfaces</td>
                      <td className="py-3 px-4">Better rewetting, capillary pumping</td>
                      <td className="py-3 px-4 text-emerald-400">50-100%</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-blue-400">Micro/Nanostructures</td>
                      <td className="py-3 px-4">Increased wickability, more nucleation sites</td>
                      <td className="py-3 px-4 text-emerald-400">80-200%</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-purple-400">Porous Coatings</td>
                      <td className="py-3 px-4">Capillary-fed liquid supply</td>
                      <td className="py-3 px-4 text-emerald-400">100-300%</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-emerald-400">Nanofluids</td>
                      <td className="py-3 px-4">Nanoparticle deposition on surface</td>
                      <td className="py-3 px-4 text-emerald-400">50-200%</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">Subcooling</td>
                      <td className="py-3 px-4">Bubble condensation, reduced vapor production</td>
                      <td className="py-3 px-4 text-emerald-400">Linear increase</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-red-400">Pressure Increase</td>
                      <td className="py-3 px-4">Higher vapor density</td>
                      <td className="py-3 px-4 text-yellow-400">Peak at ~P/Pc = 0.3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Kandlikar's CHF Enhancement Correlation" accent="blue" icon="K">
              <p className="mb-2">
                Kandlikar (2001) proposed a force-balance CHF model that accounts for contact angle:
              </p>
              <div className="my-3 p-3 bg-slate-900/50 rounded-lg">
                <Math tex={`\\frac{q''_{CHF}}{q''_{CHF,0}} = \\frac{1 + \\cos\\theta}{16} \\left[ \\frac{2}{\\pi} + \\frac{\\pi}{4}(1 + \\cos\\theta) \\right]`} display />
              </div>
              <p className="text-gray-500">
                Lower contact angle (hydrophilic) = higher CHF. This explains why hydrophilic treatments enhance CHF.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. Nuclear Reactor Safety */}
          <SectionDivider number="5" title="CHF in Nuclear Reactor Safety" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              In nuclear reactors, exceeding CHF can lead to <strong className="text-red-400">fuel rod failure</strong>
              due to the rapid temperature increase. The <strong className="text-cyan-400">DNBR (Departure from
              Nucleate Boiling Ratio)</strong> is used to ensure safe operation.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                Nuclear Safety: DNB Analysis
              </h4>

              <EquationBox label="DNBR Definition" accent="red">
                <Math tex={`DNBR = \\frac{q''_{CHF,predicted}}{q''_{operating}}`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-red-400 font-bold mb-3">Safety Limits</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; <strong className="text-white">PWR (W-3):</strong> DNBR &gt; 1.30</li>
                    <li>&bull; <strong className="text-white">BWR (GEXL):</strong> CPR &gt; 1.20</li>
                    <li>&bull; <strong className="text-white">VVER:</strong> DNBR &gt; 1.33</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">
                    Margin accounts for correlation uncertainty and local variations
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-cyan-400 font-bold mb-3">CHF Correlations Used</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; <strong className="text-white">W-3:</strong> Westinghouse PWR (bundle)</li>
                    <li>&bull; <strong className="text-white">GEXL:</strong> GE BWR (annular flow)</li>
                    <li>&bull; <strong className="text-white">Biasi:</strong> General flow boiling</li>
                    <li>&bull; <strong className="text-white">Groeneveld Table:</strong> Look-up table</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. DNBR Calculator */}
          <SectionDivider number="6" title="DNBR Calculator Example" />

          <motion.div {...stagger} className="mb-8">
            <DNBRCalculator />
          </motion.div>

          {/* 7. Example Problem */}
          <SectionDivider number="7" title="Example: DNBR Analysis" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Example: PWR Hot Channel Analysis
              </h4>

              <div className="p-4 rounded-xl bg-slate-900/50 mb-6">
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">Problem:</strong> A PWR fuel rod operates at a local
                  heat flux of 800 kW/m2. Using the W-3 correlation, the predicted local CHF is 1100 kW/m2.
                  Determine if the reactor meets safety criteria.
                </p>
                <p className="text-sm text-gray-500">
                  Design requirement: DNBR &gt; 1.30 (minimum safety limit)
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-cyan-400 font-bold mb-2">Step 1: Calculate DNBR</h5>
                  <div className="text-sm text-gray-400">
                    <Math tex={`DNBR = \\frac{q''_{CHF}}{q''_{operating}} = \\frac{1100}{800} = 1.375`} display />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-cyan-400 font-bold mb-2">Step 2: Check Against Limit</h5>
                  <div className="text-sm text-gray-400">
                    <Math tex={`DNBR = 1.375 > 1.30 \\quad \\checkmark`} display />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-cyan-400 font-bold mb-2">Step 3: Calculate Safety Margin</h5>
                  <div className="text-sm text-gray-400">
                    <Math tex={`\\text{Margin} = \\frac{1.375 - 1.30}{1.30} \\times 100\\% = 5.8\\%`} display />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                  <h5 className="text-emerald-400 font-bold mb-2">Conclusion</h5>
                  <p className="text-sm text-white">
                    The reactor meets safety criteria with DNBR = 1.375 (&gt; 1.30).
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    However, the margin is only 5.8% above the limit, which may be insufficient
                    for transient analysis. Design improvements or power reduction may be considered.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 8. MFTEL Research */}
          <motion.div {...stagger} className="mb-8">
            <InsightCard title="MFTEL CHF Research" accent="purple" icon="Lab">
              <p className="mb-2">
                Prof. Park's MFTEL laboratory investigates CHF enhancement for:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">SMR Passive Safety:</strong> CHF analysis for small modular reactor natural circulation systems</li>
                <li>&bull; <strong className="text-white">Immersion Cooling:</strong> Dielectric fluid CHF for GPU/TPU cooling with surface treatments</li>
                <li>&bull; <strong className="text-white">Surface Engineering:</strong> Nano/micro structured surfaces for CHF enhancement</li>
                <li>&bull; <strong className="text-white">Nuclear Safety Codes:</strong> MARS-K, CUPID validation with experimental data</li>
              </ul>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Key Takeaways" accent="blue" icon="S">
              <p>
                <strong className="text-orange-400">CHF</strong> is the thermal limit of nucleate boiling with critical
                safety implications. The <strong className="text-cyan-400">Zuber correlation</strong> provides the
                fundamental prediction based on hydrodynamic instability.
                <strong className="text-white"> DNBR/CPR</strong> ensures nuclear reactor safety by maintaining adequate
                margin below CHF. Surface modification can enhance CHF by 50-300% for high heat flux applications.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

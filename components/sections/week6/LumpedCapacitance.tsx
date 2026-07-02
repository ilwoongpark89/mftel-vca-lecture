"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "blue",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "blue" ? "border-blue-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "red" ? "border-red-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "purple" ? "border-purple-500/30" : "border-slate-700";
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
  accent = "blue",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", iconBg: "bg-purple-500/20" },
  };
  const c = colors[accent] || colors.blue;
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

function ThinkAboutIt({ question, hint }: { question: string; hint?: string }) {
  const [showHint, setShowHint] = useState(false);
  return (
    <motion.div {...stagger} className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-slate-950 p-5 mb-8">
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold">
          ?
        </span>
        <div className="flex-1">
          <h4 className="font-bold text-purple-400 mb-2">Think About It</h4>
          <p className="text-sm text-gray-300 leading-relaxed">{question}</p>
          {hint && (
            <div className="mt-3">
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
              >
                {showHint ? "Hide Hint" : "Show Hint"}
              </button>
              {showHint && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-xs text-gray-500 mt-2 p-3 bg-slate-900/50 rounded-lg"
                >
                  {hint}
                </motion.p>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function EngineeringApplication({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div {...stagger} className="rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-5 mb-8">
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">
          ENG
        </span>
        <div className="flex-1">
          <h4 className="font-bold text-cyan-400 mb-2">Engineering Application: {title}</h4>
          <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}

function DerivationStep({
  step,
  color,
  equation,
  description,
  label,
}: {
  step: number;
  color: string;
  equation: string;
  description: string;
  label?: string;
}) {
  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
    orange: { bg: "bg-orange-500/20", text: "text-orange-400", border: "border-orange-500/30" },
    emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30" },
    purple: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
    red: { bg: "bg-red-500/20", text: "text-red-400", border: "border-red-500/30" },
    cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/30" },
  };
  const c = colorClasses[color] || colorClasses.blue;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: step * 0.08 }}
      className="flex gap-4 items-start"
    >
      <span className={`flex-shrink-0 w-8 h-8 rounded-full ${c.bg} ${c.text} flex items-center justify-center text-sm font-bold mt-1`}>
        {step}
      </span>
      <div className={`flex-1 p-4 rounded-xl bg-slate-950/80 border ${c.border}`}>
        {label && <p className={`text-sm ${c.text} font-medium mb-2`}>{label}</p>}
        <div className="overflow-x-auto mb-2">
          <Math tex={equation} display />
        </div>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
}

// Interactive Time Constant Calculator
function TimeConstantCalculator() {
  const [rho, setRho] = useState(8933); // Copper
  const [V, setV] = useState(4.19e-6); // 1cm radius sphere
  const [cp, setCp] = useState(385); // Copper
  const [h, setH] = useState(100);
  const [As, setAs] = useState(1.26e-3); // 1cm radius sphere surface

  const tau = useMemo(() => (rho * V * cp) / (h * As), [rho, V, cp, h, As]);
  const t99 = tau * 5;

  const presets = [
    { name: "Copper Sphere (D=2cm)", rho: 8933, V: 4.19e-6, cp: 385, As: 1.26e-3 },
    { name: "Steel Sphere (D=2cm)", rho: 7832, V: 4.19e-6, cp: 434, As: 1.26e-3 },
    { name: "Aluminum Cylinder (D=1cm, L=5cm)", rho: 2702, V: 3.93e-6, cp: 903, As: 1.73e-3 },
    { name: "Thermocouple (D=1mm sphere)", rho: 8000, V: 5.24e-10, cp: 500, As: 3.14e-6 },
  ];

  return (
    <motion.div {...stagger} className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-6 mb-8">
      <h4 className="text-lg font-bold text-cyan-400 mb-6 text-center">Interactive Time Constant Calculator</h4>

      {/* Preset buttons */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => {
              setRho(preset.rho);
              setV(preset.V);
              setCp(preset.cp);
              setAs(preset.As);
            }}
            className="text-xs px-3 py-1.5 rounded-full bg-slate-800 text-gray-300 hover:bg-slate-700 transition-colors"
          >
            {preset.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {/* rho input */}
        <div className="space-y-2">
          <label className="text-xs text-gray-400">rho [kg/m^3]</label>
          <input
            type="number"
            value={rho}
            onChange={(e) => setRho(Number(e.target.value))}
            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:border-cyan-500 focus:outline-none"
          />
        </div>

        {/* V input */}
        <div className="space-y-2">
          <label className="text-xs text-gray-400">V [m^3]</label>
          <input
            type="number"
            value={V}
            onChange={(e) => setV(Number(e.target.value))}
            step="1e-7"
            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:border-cyan-500 focus:outline-none"
          />
        </div>

        {/* cp input */}
        <div className="space-y-2">
          <label className="text-xs text-gray-400">c_p [J/kgK]</label>
          <input
            type="number"
            value={cp}
            onChange={(e) => setCp(Number(e.target.value))}
            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:border-cyan-500 focus:outline-none"
          />
        </div>

        {/* h input */}
        <div className="space-y-2">
          <label className="text-xs text-gray-400">h [W/m^2K]</label>
          <input
            type="number"
            value={h}
            onChange={(e) => setH(Number(e.target.value))}
            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:border-cyan-500 focus:outline-none"
          />
        </div>

        {/* As input */}
        <div className="space-y-2">
          <label className="text-xs text-gray-400">A_s [m^2]</label>
          <input
            type="number"
            value={As}
            onChange={(e) => setAs(Number(e.target.value))}
            step="1e-5"
            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:border-cyan-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-center">
          <p className="text-xs text-gray-500 mb-2">Time Constant</p>
          <div className="text-3xl font-bold text-cyan-400">
            tau = {tau.toFixed(2)} s
          </div>
          <p className="text-xs text-gray-400 mt-2">
            {tau < 60 ? `${tau.toFixed(1)} seconds` : tau < 3600 ? `${(tau / 60).toFixed(1)} minutes` : `${(tau / 3600).toFixed(2)} hours`}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-center">
          <p className="text-xs text-gray-500 mb-2">Time to 99% Equilibrium (5tau)</p>
          <div className="text-3xl font-bold text-emerald-400">
            t_99% = {t99.toFixed(1)} s
          </div>
          <p className="text-xs text-gray-400 mt-2">
            {t99 < 60 ? `${t99.toFixed(1)} seconds` : t99 < 3600 ? `${(t99 / 60).toFixed(1)} minutes` : `${(t99 / 3600).toFixed(2)} hours`}
          </p>
        </div>
      </div>

      {/* Formula display */}
      <div className="mt-4 p-4 rounded-lg bg-slate-900/50 text-center">
        <Math tex={`\\tau = \\frac{\\rho V c_p}{hA_s} = \\frac{${rho} \\times ${V.toExponential(2)} \\times ${cp}}{${h} \\times ${As.toExponential(2)}} = ${tau.toFixed(2)} \\text{ s}`} />
      </div>
    </motion.div>
  );
}

// Thermocouple Response Time Example Component
function ThermocoupleExample() {
  const [diameter, setDiameter] = useState(1); // mm
  const [h, setH] = useState(100);

  // Thermocouple junction properties (typical Type K)
  const rho = 8000; // kg/m^3
  const cp = 500; // J/kgK
  const k = 20; // W/mK

  const r = diameter / 2000; // radius in meters
  const V = (4 / 3) * NativeMath.PI * NativeMath.pow(r, 3);
  const As = 4 * NativeMath.PI * NativeMath.pow(r, 2);
  const Lc = r / 3;

  const tau = (rho * V * cp) / (h * As);
  const Bi = (h * Lc) / k;
  const isLumpedValid = Bi < 0.1;

  // Response times
  const t63 = tau; // 63.2%
  const t90 = tau * 2.303; // 90%
  const t95 = tau * 3; // 95%
  const t99 = tau * 4.605; // 99%

  return (
    <motion.div {...stagger} className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-6 mb-8">
      <h4 className="text-lg font-bold text-orange-400 mb-2 text-center">Real-World Example: Thermocouple Response Time</h4>
      <p className="text-sm text-gray-400 text-center mb-6">
        Thermocouples must respond quickly to temperature changes for accurate measurements
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400">Junction Diameter [mm]</label>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={diameter}
              onChange={(e) => setDiameter(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500 mt-2"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.1 mm (fine)</span>
              <span className="text-orange-400 font-bold">{diameter.toFixed(1)} mm</span>
              <span>5 mm (sheathed)</span>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400">Convection Coefficient h [W/m^2K]</label>
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              value={h}
              onChange={(e) => setH(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500 mt-2"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>10 (still air)</span>
              <span className="text-orange-400 font-bold">{h}</span>
              <span>500 (fast flow)</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-3">
          <div className={`p-3 rounded-lg ${isLumpedValid ? "bg-emerald-500/10 border border-emerald-500/30" : "bg-red-500/10 border border-red-500/30"}`}>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">Biot Number</span>
              <span className={`font-mono font-bold ${isLumpedValid ? "text-emerald-400" : "text-red-400"}`}>
                Bi = {Bi.toFixed(4)} {isLumpedValid ? "(Valid)" : "(Invalid!)"}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">Time Constant tau</span>
              <span className="font-mono font-bold text-cyan-400">{tau.toFixed(3)} s</span>
            </div>
          </div>
        </div>
      </div>

      {/* Response time table */}
      <div className="rounded-xl border border-slate-700 bg-slate-900/50 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-800/50">
              <th className="py-2 px-4 text-left text-gray-400 font-medium">Response Level</th>
              <th className="py-2 px-4 text-left text-gray-400 font-medium">Time Formula</th>
              <th className="py-2 px-4 text-left text-gray-400 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-800">
              <td className="py-2 px-4 text-white">63.2% (1 tau)</td>
              <td className="py-2 px-4 text-gray-400"><Math tex="t = \\tau" /></td>
              <td className="py-2 px-4 font-mono text-cyan-400">{t63.toFixed(3)} s</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-2 px-4 text-white">90%</td>
              <td className="py-2 px-4 text-gray-400"><Math tex="t = \\tau \\ln(10) \\approx 2.3\\tau" /></td>
              <td className="py-2 px-4 font-mono text-cyan-400">{t90.toFixed(3)} s</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-2 px-4 text-white">95%</td>
              <td className="py-2 px-4 text-gray-400"><Math tex="t \\approx 3\\tau" /></td>
              <td className="py-2 px-4 font-mono text-cyan-400">{t95.toFixed(3)} s</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-white">99%</td>
              <td className="py-2 px-4 text-gray-400"><Math tex="t = \\tau \\ln(100) \\approx 4.6\\tau" /></td>
              <td className="py-2 px-4 font-mono text-emerald-400">{t99.toFixed(3)} s</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 rounded-lg bg-slate-900/50">
        <p className="text-xs text-gray-400 text-center">
          <strong className="text-orange-400">Design insight:</strong> To halve the response time, either halve the diameter (reduces tau by factor of 2)
          or double the convection coefficient (doubles thermal conductance).
        </p>
      </div>
    </motion.div>
  );
}

const derivationSteps = [
  {
    step: 1,
    color: "blue",
    label: "First Law of Thermodynamics (Control Volume)",
    eq: String.raw`\dot{E}_{in} - \dot{E}_{out} + \dot{E}_{gen} = \dot{E}_{st}`,
    note: "Apply energy conservation to the entire solid body as a control volume",
  },
  {
    step: 2,
    color: "blue",
    label: "For Cooling with No Internal Generation",
    eq: String.raw`\dot{E}_{in} = 0, \quad \dot{E}_{gen} = 0`,
    note: "No energy input, no heat generation inside the body",
  },
  {
    step: 3,
    color: "orange",
    label: "Energy Balance Simplifies",
    eq: String.raw`-\dot{E}_{out} = \dot{E}_{st}`,
    note: "Energy leaving equals rate of decrease in stored energy",
  },
  {
    step: 4,
    color: "orange",
    label: "Surface Convection Heat Loss (Newton's Cooling Law)",
    eq: String.raw`\dot{E}_{out} = q_{conv} = hA_s(T - T_\infty)`,
    note: "Heat leaves through the surface by convection",
  },
  {
    step: 5,
    color: "emerald",
    label: "Rate of Energy Storage (Lumped Assumption: T uniform)",
    eq: String.raw`\dot{E}_{st} = \frac{d}{dt}(\rho V c_p T) = \rho V c_p \frac{dT}{dt}`,
    note: "Since T = T(t) only, entire body stores/releases energy uniformly",
  },
  {
    step: 6,
    color: "red",
    label: "Complete Energy Equation",
    eq: String.raw`-hA_s(T - T_\infty) = \rho V c_p \frac{dT}{dt}`,
    note: "This is the governing ODE for lumped capacitance analysis",
  },
];

const tauDerivationSteps = [
  {
    step: 1,
    color: "cyan",
    label: "Rearrange to Standard Form",
    eq: String.raw`\frac{dT}{dt} = -\frac{hA_s}{\rho V c_p}(T - T_\infty)`,
    note: "Isolate dT/dt on the left side",
  },
  {
    step: 2,
    color: "cyan",
    label: "Define the Time Constant",
    eq: String.raw`\tau \equiv \frac{\rho V c_p}{hA_s} \quad \Rightarrow \quad \frac{dT}{dt} = -\frac{1}{\tau}(T - T_\infty)`,
    note: "tau has units of time [s] and characterizes the response speed",
  },
  {
    step: 3,
    color: "purple",
    label: "Physical Interpretation of tau",
    eq: String.raw`\tau = \frac{\text{Thermal Capacitance}}{\text{Thermal Conductance}} = \frac{C_t}{G_t} = R_t \cdot C_t`,
    note: "Ratio of energy storage capability to heat transfer rate",
  },
  {
    step: 4,
    color: "purple",
    label: "Alternative Form: Using Characteristic Length",
    eq: String.raw`\tau = \frac{\rho V c_p}{hA_s} = \frac{\rho c_p (V/A_s)}{h} = \frac{\rho c_p L_c}{h}`,
    note: "Express using Lc = V/As for more compact form",
  },
  {
    step: 5,
    color: "emerald",
    label: "Relationship with Biot and Fourier Numbers",
    eq: String.raw`\tau = \frac{L_c^2}{\alpha} \cdot \frac{1}{\text{Bi}} = \frac{t_{diff}}{\text{Bi}}`,
    note: "tau equals diffusion time scale divided by Biot number",
  },
];

const solutionSteps = [
  {
    step: 1,
    color: "orange",
    label: "Define Excess Temperature",
    eq: String.raw`\theta \equiv T - T_\infty \quad \Rightarrow \quad \frac{d\theta}{dt} = \frac{dT}{dt}`,
    note: "Change variable to simplify the equation (T_inf is constant)",
  },
  {
    step: 2,
    color: "orange",
    label: "Transformed Equation",
    eq: String.raw`\frac{d\theta}{dt} = -\frac{\theta}{\tau}`,
    note: "Clean first-order linear ODE",
  },
  {
    step: 3,
    color: "blue",
    label: "Separation of Variables",
    eq: String.raw`\frac{d\theta}{\theta} = -\frac{dt}{\tau}`,
    note: "Separate theta and t terms",
  },
  {
    step: 4,
    color: "blue",
    label: "Integrate Both Sides",
    eq: String.raw`\int_{\theta_i}^{\theta} \frac{d\theta'}{\theta'} = -\frac{1}{\tau}\int_0^t dt'`,
    note: "Definite integrals with initial condition theta(0) = theta_i",
  },
  {
    step: 5,
    color: "emerald",
    label: "Evaluate Integrals",
    eq: String.raw`\ln\theta - \ln\theta_i = -\frac{t}{\tau} \quad \Rightarrow \quad \ln\frac{\theta}{\theta_i} = -\frac{t}{\tau}`,
    note: "Apply logarithm properties",
  },
  {
    step: 6,
    color: "emerald",
    label: "Exponentiate to Get Final Solution",
    eq: String.raw`\frac{\theta}{\theta_i} = e^{-t/\tau} \quad \Rightarrow \quad \boxed{\frac{T - T_\infty}{T_i - T_\infty} = e^{-t/\tau}}`,
    note: "The famous exponential decay solution!",
  },
];

export default function LumpedCapacitance() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lumped Capacitance Method
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A powerful analytical method that treats a solid body as having uniform temperature,
            reducing the PDE to a simple ODE with an elegant exponential solution.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Fundamental Assumption */}
          <SectionDivider number="1" title="Fundamental Assumption" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The core assumption of the Lumped Capacitance Method is that the <strong className="text-white">temperature within the solid is spatially uniform</strong> at any instant in time.
              This means the temperature depends only on time, not on position: <Math tex="T = T(t)" />.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h4 className="text-sm font-bold text-blue-400 mb-3">Mathematical Statement</h4>
                  <div className="text-center p-4 rounded-lg bg-slate-900/50 mb-3">
                    <Math tex={`T = T(t) \\quad \\text{(no spatial dependence)}`} display />
                  </div>
                  <p className="text-sm text-gray-400">
                    Temperature varies with time but is uniform throughout the solid at each instant.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h4 className="text-sm font-bold text-orange-400 mb-3">Physical Requirement</h4>
                  <p className="text-sm text-gray-400 mb-3">
                    This assumption is valid when:
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; Internal heat conduction is much faster than surface heat transfer</li>
                    <li>&bull; The <strong className="text-white">Biot number Bi &lt; 0.1</strong></li>
                    <li>&bull; The solid has high thermal conductivity relative to surface cooling</li>
                  </ul>
                </div>
              </div>

              <InsightCard title="RC Circuit Analogy" accent="cyan" icon="RC">
                <p>
                  A Lumped Capacitance system behaves exactly like an <strong className="text-cyan-400">RC circuit</strong> discharging through a resistor:
                </p>
                <div className="mt-3 grid md:grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-950/80 rounded-lg">
                    <p className="text-xs font-bold text-cyan-400 mb-1">Thermal System</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>&bull; Temperature difference (T - T_inf) = Driving potential</li>
                      <li>&bull; Thermal capacitance (rho*V*cp) = Energy storage</li>
                      <li>&bull; Thermal resistance (1/hAs) = Flow restriction</li>
                      <li>&bull; Heat rate q = Energy flow</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-slate-950/80 rounded-lg">
                    <p className="text-xs font-bold text-blue-400 mb-1">Electrical RC Circuit</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>&bull; Voltage V = Driving potential</li>
                      <li>&bull; Capacitance C = Charge storage</li>
                      <li>&bull; Resistance R = Current restriction</li>
                      <li>&bull; Current I = Charge flow</li>
                    </ul>
                  </div>
                </div>
              </InsightCard>
            </div>
          </motion.div>

          <ThinkAboutIt
            question="If a hot metal ball is suddenly placed in cold water, does the center or the surface cool down first? Under what conditions can we assume they cool at the same rate?"
            hint="The center cools last because heat must conduct through the material. When internal conduction is fast (high k, small size), the center 'catches up' almost instantly, making the temperature nearly uniform."
          />

          {/* 2. Complete Energy Balance Derivation from First Law */}
          <SectionDivider number="2" title="Energy Balance Derivation (First Law)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              We derive the governing equation starting from the <strong className="text-blue-400">First Law of Thermodynamics</strong> applied to the solid body as a control volume.
              Consider a solid initially at temperature <Math tex="T_i" /> suddenly exposed to a fluid at temperature <Math tex="T_\infty" /> with <Math tex="T_\infty < T_i" /> (cooling).
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Step-by-Step Energy Balance Derivation
              </h4>

              <div className="space-y-4">
                {derivationSteps.map((item) => (
                  <DerivationStep
                    key={item.step}
                    step={item.step}
                    color={item.color}
                    label={item.label}
                    equation={item.eq}
                    description={item.note}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <EquationBox label="Lumped Capacitance Governing Equation" accent="blue">
              <Math tex={`\\rho V c_p \\frac{dT}{dt} = -hA_s(T - T_\\infty)`} display />
            </EquationBox>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Physical Interpretation" accent="blue" icon="E">
              <p>
                This equation states that the <strong className="text-blue-400">rate of energy storage</strong> in the body
                equals the negative of the <strong className="text-orange-400">rate of energy loss</strong> by convection.
              </p>
              <ul className="mt-2 space-y-1">
                <li>&bull; Left side: How fast the body's thermal energy changes</li>
                <li>&bull; Right side: How fast heat leaves through the surface</li>
                <li>&bull; The minus sign indicates cooling (T &gt; T_inf means heat leaves)</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. Time Constant Derivation */}
          <SectionDivider number="3" title="Time Constant tau Derivation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The <strong className="text-cyan-400">thermal time constant tau</strong> naturally emerges when we rearrange the governing equation.
              It characterizes how fast the system responds to temperature changes.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Derivation of Time Constant tau
              </h4>

              <div className="space-y-4">
                {tauDerivationSteps.map((item) => (
                  <DerivationStep
                    key={item.step}
                    step={item.step}
                    color={item.color}
                    label={item.label}
                    equation={item.eq}
                    description={item.note}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 text-center">
                Thermal Time Constant
              </h4>

              <EquationBox label="Definition" accent="cyan">
                <Math tex={`\\tau = \\frac{\\rho V c_p}{hA_s} = \\frac{C_t}{G_t} \\quad [\\text{s}]`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700 text-center">
                  <p className="text-xs text-gray-500 mb-2">Numerator: Thermal Capacitance</p>
                  <Math tex={`C_t = \\rho V c_p \\quad [\\text{J/K}]`} />
                  <p className="text-xs text-gray-400 mt-2">Energy required to change temperature by 1K</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700 text-center">
                  <p className="text-xs text-gray-500 mb-2">Denominator: Thermal Conductance</p>
                  <Math tex={`G_t = hA_s \\quad [\\text{W/K}]`} />
                  <p className="text-xs text-gray-400 mt-2">Heat transfer rate per unit temperature difference</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Physical Meaning of tau" accent="cyan" icon="t">
              <p className="mb-2">
                The time constant <Math tex="\\tau" /> represents the <strong className="text-cyan-400">characteristic time scale</strong> of the thermal response:
              </p>
              <ul className="space-y-1">
                <li>&bull; If tau is large: slow response (high capacitance, low conductance)</li>
                <li>&bull; If tau is small: fast response (low capacitance, high conductance)</li>
                <li>&bull; At t = tau: temperature has changed by 63.2% of the total change</li>
                <li>&bull; At t = 5tau: temperature has changed by 99.3% (practical equilibrium)</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 4. Solution Derivation */}
          <SectionDivider number="4" title="Solution by Separation of Variables" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              We solve the first-order ODE using <strong className="text-orange-400">separation of variables</strong> with
              initial condition <Math tex="T(0) = T_i" />.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Step-by-Step Solution
              </h4>

              <div className="space-y-4">
                {solutionSteps.map((item) => (
                  <DerivationStep
                    key={item.step}
                    step={item.step}
                    color={item.color}
                    label={item.label}
                    equation={item.eq}
                    description={item.note}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* 5. Final Solution */}
          <SectionDivider number="5" title="Final Solution" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6 text-center">
                Lumped Capacitance Solution
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <EquationBox label="Dimensionless Temperature Form" accent="blue">
                  <Math tex={`\\frac{T - T_\\infty}{T_i - T_\\infty} = e^{-t/\\tau}`} display />
                </EquationBox>

                <EquationBox label="Dimensional Temperature Form" accent="blue">
                  <Math tex={`T(t) = T_\\infty + (T_i - T_\\infty)e^{-t/\\tau}`} display />
                </EquationBox>
              </div>

              <div className="p-6 rounded-xl bg-slate-950/80 border border-cyan-500/30">
                <p className="text-sm text-gray-400 mb-4 text-center">
                  The dimensionless temperature <Math tex="\\theta^* = (T - T_\\infty)/(T_i - T_\\infty)" /> represents how much of the temperature change remains:
                </p>
                <div className="grid md:grid-cols-4 gap-3 text-center text-sm">
                  <div className="p-3 rounded-lg bg-slate-900/50">
                    <p className="text-cyan-400 font-mono">t = 0</p>
                    <p className="text-white font-bold">theta* = 1</p>
                    <p className="text-xs text-gray-500">0% completed</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/50">
                    <p className="text-cyan-400 font-mono">t = tau</p>
                    <p className="text-white font-bold">theta* = 0.368</p>
                    <p className="text-xs text-gray-500">63.2% completed</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/50">
                    <p className="text-cyan-400 font-mono">t = 3tau</p>
                    <p className="text-white font-bold">theta* = 0.050</p>
                    <p className="text-xs text-gray-500">95% completed</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/50">
                    <p className="text-cyan-400 font-mono">t = 5tau</p>
                    <p className="text-white font-bold">theta* = 0.007</p>
                    <p className="text-xs text-gray-500">99.3% completed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Exponential Decay Characteristics" accent="blue" icon="e">
              <p>
                The solution exhibits <strong className="text-blue-400">exponential decay</strong> - the same behavior seen in:
              </p>
              <ul className="mt-2 space-y-1">
                <li>&bull; RC circuit discharge</li>
                <li>&bull; Radioactive decay</li>
                <li>&bull; First-order chemical reactions</li>
                <li>&bull; Newton's law of cooling (the original empirical law)</li>
              </ul>
              <p className="mt-2">
                Theoretically, it takes infinite time to reach exactly T_inf, but practically we consider 5tau as equilibrium.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. Interactive Time Constant Calculator */}
          <SectionDivider number="6" title="Interactive Time Constant Calculator" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Use this calculator to compute the time constant for different materials, geometries, and cooling conditions.
              Select presets or enter custom values.
            </p>
          </motion.div>

          <TimeConstantCalculator />

          {/* 7. Thermocouple Response Time Example */}
          <SectionDivider number="7" title="Real-World Example: Thermocouple Response" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              A <strong className="text-orange-400">thermocouple</strong> is a classic application of lumped capacitance analysis.
              The junction must respond quickly to temperature changes for accurate measurements in dynamic systems.
            </p>
          </motion.div>

          <ThermocoupleExample />

          <EngineeringApplication title="MFTEL Temperature Measurement in Boiling Experiments">
            <p>
              In our MFTEL boiling heat transfer experiments, we use Type K thermocouples to measure:
            </p>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li>&bull; <strong className="text-white">Surface temperature:</strong> Fine-wire thermocouples (D ~ 0.5mm) with tau ~ 0.1s respond quickly to bubble dynamics</li>
              <li>&bull; <strong className="text-white">Bulk fluid temperature:</strong> Sheathed probes (D ~ 3mm) with tau ~ 5s provide stable average readings</li>
              <li>&bull; <strong className="text-white">Trade-off:</strong> Smaller junctions = faster response but more fragile and subject to noise</li>
              <li>&bull; For two-phase flow measurements with rapid temperature fluctuations (100+ Hz), we use even smaller thermocouples (D ~ 0.1mm) or fast-response RTDs</li>
            </ul>
          </EngineeringApplication>

          {/* 8. Total Heat Transfer */}
          <SectionDivider number="8" title="Total Heat Transferred" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The <strong className="text-white">total heat Q</strong> transferred from time 0 to time t can be calculated
              by integrating the instantaneous heat rate or from energy conservation.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-6">
                <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                  Method 1: Integrate Heat Rate
                </h4>
                <div className="space-y-3">
                  <EquationBox label="Instantaneous Heat Rate" accent="orange">
                    <Math tex={`q(t) = hA_s(T - T_\\infty) = hA_s\\theta_i e^{-t/\\tau}`} />
                  </EquationBox>
                  <div className="text-center text-gray-500">&darr;</div>
                  <EquationBox label="Total Heat (Integration)" accent="orange">
                    <Math tex={`Q = \\int_0^t q \\, dt' = hA_s\\theta_i \\tau(1 - e^{-t/\\tau})`} />
                  </EquationBox>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-6">
                <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                  Method 2: Energy Change
                </h4>
                <div className="space-y-3">
                  <EquationBox label="Internal Energy Decrease" accent="emerald">
                    <Math tex={`Q = \\rho V c_p (T_i - T)`} />
                  </EquationBox>
                  <div className="text-center text-gray-500">&darr;</div>
                  <EquationBox label="Substitute T(t)" accent="emerald">
                    <Math tex={`Q = \\rho V c_p \\theta_i(1 - e^{-t/\\tau})`} />
                  </EquationBox>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6 text-center">
                Total Heat Transfer
              </h4>

              <EquationBox label="Heat Transferred from 0 to t" accent="blue">
                <Math tex={`Q = \\rho V c_p (T_i - T_\\infty)\\left(1 - e^{-t/\\tau}\\right)`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700 text-center">
                  <p className="text-xs text-gray-500 mb-2">Maximum Possible Heat Transfer (t &rarr; inf)</p>
                  <Math tex={`Q_{max} = \\rho V c_p (T_i - T_\\infty)`} display />
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700 text-center">
                  <p className="text-xs text-gray-500 mb-2">Fractional Heat Transfer</p>
                  <Math tex={`\\frac{Q}{Q_{max}} = 1 - e^{-t/\\tau}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <ThinkAboutIt
            question="At t = tau, what fraction of the maximum possible heat has been transferred? At what time has 90% of the heat been transferred?"
            hint="Use Q/Q_max = 1 - exp(-t/tau). At t = tau: Q/Q_max = 1 - e^(-1) = 0.632 (63.2%). For 90%: 0.9 = 1 - e^(-t/tau), so t = tau * ln(10) = 2.3 tau."
          />

          {/* 9. Heating vs Cooling */}
          <SectionDivider number="9" title="Heating vs Cooling" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The same equations apply for both heating (<Math tex="T_i < T_\infty" />) and cooling (<Math tex="T_i > T_\infty" />).
              The mathematics handles both cases elegantly.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                  Cooling (<Math tex="T_i > T_\\infty" />)
                </h4>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-blue-500/20 mb-4">
                  <Math tex={`T(t) = T_\\infty + (T_i - T_\\infty)e^{-t/\\tau}`} display />
                </div>
                <p className="text-sm text-gray-400">
                  Temperature <strong className="text-blue-400">decreases</strong> exponentially toward <Math tex="T_\infty" />
                </p>
                <div className="mt-3 p-3 bg-slate-900/50 rounded-lg text-xs text-gray-500">
                  Example: Hot metal in cold air
                </div>
              </div>

              <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                  Heating (<Math tex="T_i < T_\\infty" />)
                </h4>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-orange-500/20 mb-4">
                  <Math tex={`T(t) = T_\\infty - (T_\\infty - T_i)e^{-t/\\tau}`} display />
                </div>
                <p className="text-sm text-gray-400">
                  Temperature <strong className="text-orange-400">increases</strong> exponentially toward <Math tex="T_\infty" />
                </p>
                <div className="mt-3 p-3 bg-slate-900/50 rounded-lg text-xs text-gray-500">
                  Example: Cold food in hot oven
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Unified Form" accent="yellow" icon="=">
              <p>
                Both cases are captured by the same dimensionless equation:
              </p>
              <div className="mt-2 p-3 bg-slate-950/80 rounded-lg text-center">
                <Math tex={`\\frac{T - T_\\infty}{T_i - T_\\infty} = e^{-t/\\tau}`} display />
              </div>
              <p className="mt-2">
                For cooling: numerator and denominator are both positive. For heating: both are negative (so ratio is positive).
                The exponential decay toward 1 (for theta*) always represents approaching equilibrium.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

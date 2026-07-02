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
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "purple" ? "border-purple-500/30" : "border-slate-700";
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
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
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

// Interactive Temperature Decay Visualization
function TemperatureDecayVisualization() {
  const [tau, setTau] = useState(10); // seconds
  const [Ti, setTi] = useState(100); // initial temp
  const [Tinf, setTinf] = useState(20); // ambient temp

  // Calculate temperatures at key time points
  const timePoints = [
    { label: "0", multiplier: 0 },
    { label: "1tau", multiplier: 1 },
    { label: "2tau", multiplier: 2 },
    { label: "3tau", multiplier: 3 },
    { label: "5tau", multiplier: 5 },
  ];

  const calculateTemp = (t: number) => {
    return Tinf + (Ti - Tinf) * NativeMath.exp(-t / tau);
  };

  const calculateProgress = (t: number) => {
    return (1 - NativeMath.exp(-t / tau)) * 100;
  };

  // Generate decay curve points for visualization
  const curvePoints = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 50; i++) {
      const t = (i / 10) * tau;
      const temp = calculateTemp(t);
      points.push({ t, temp, progress: calculateProgress(t) });
    }
    return points;
  }, [tau, Ti, Tinf]);

  return (
    <motion.div {...stagger} className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-6 mb-8">
      <h4 className="text-lg font-bold text-cyan-400 mb-6 text-center">
        Interactive Temperature Decay Visualization
      </h4>

      {/* Controls */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Time Constant tau [s]</label>
          <input
            type="range"
            min="1"
            max="60"
            value={tau}
            onChange={(e) => setTau(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <div className="text-center text-cyan-400 font-bold">{tau} s</div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Initial Temperature T_i [C]</label>
          <input
            type="range"
            min="50"
            max="200"
            value={Ti}
            onChange={(e) => setTi(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="text-center text-orange-400 font-bold">{Ti}C</div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Ambient Temperature T_inf [C]</label>
          <input
            type="range"
            min="0"
            max="40"
            value={Tinf}
            onChange={(e) => setTinf(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="text-center text-blue-400 font-bold">{Tinf}C</div>
        </div>
      </div>

      {/* Visual decay representation */}
      <div className="mb-6 p-6 bg-slate-900/50 rounded-xl">
        <div className="relative h-64">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 w-12">
            <span>{Ti}C</span>
            <span>{NativeMath.round((Ti + Tinf) / 2)}C</span>
            <span>{Tinf}C</span>
          </div>

          {/* Chart area */}
          <div className="ml-14 h-full relative border-l border-b border-slate-700">
            {/* Horizontal gridlines */}
            <div className="absolute w-full h-0 border-t border-dashed border-slate-700/50 top-0" />
            <div className="absolute w-full h-0 border-t border-dashed border-slate-700/50 top-1/2" />
            <div className="absolute w-full h-0 border-t border-dashed border-blue-500/30 bottom-0" />

            {/* Temperature curve */}
            <svg className="absolute inset-0 w-full h-full overflow-visible">
              <path
                d={curvePoints.map((p, i) => {
                  const x = (p.t / (5 * tau)) * 100;
                  const y = 100 - ((p.temp - Tinf) / (Ti - Tinf)) * 100;
                  return `${i === 0 ? "M" : "L"} ${x}% ${y}%`;
                }).join(" ")}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>

              {/* Key points markers */}
              {timePoints.map((point, i) => {
                const t = point.multiplier * tau;
                const temp = calculateTemp(t);
                const x = (t / (5 * tau)) * 100;
                const y = 100 - ((temp - Tinf) / (Ti - Tinf)) * 100;
                return (
                  <g key={i}>
                    <circle
                      cx={`${x}%`}
                      cy={`${y}%`}
                      r="6"
                      fill={i === 0 ? "#f97316" : i === timePoints.length - 1 ? "#22d3ee" : "#fff"}
                      stroke="#0f172a"
                      strokeWidth="2"
                    />
                    <text
                      x={`${x}%`}
                      y={`${NativeMath.min(y + 20, 95)}%`}
                      textAnchor="middle"
                      fill="#9ca3af"
                      fontSize="10"
                    >
                      {point.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Ambient temperature line */}
            <div className="absolute bottom-0 w-full border-t-2 border-dashed border-blue-500/50" />
          </div>

          {/* X-axis label */}
          <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
            Time
          </div>
        </div>
      </div>

      {/* Temperature values at key points */}
      <div className="grid grid-cols-5 gap-2 text-center">
        {timePoints.map((point, i) => {
          const t = point.multiplier * tau;
          const temp = calculateTemp(t);
          const progress = calculateProgress(t);
          const remaining = 100 - progress;

          return (
            <div
              key={i}
              className={`p-3 rounded-lg ${
                i === 0
                  ? "bg-orange-500/10 border border-orange-500/30"
                  : i === timePoints.length - 1
                  ? "bg-emerald-500/10 border border-emerald-500/30"
                  : "bg-slate-800/50 border border-slate-700"
              }`}
            >
              <p className="text-xs text-gray-500">{point.label}</p>
              <p className={`text-lg font-bold ${
                i === 0 ? "text-orange-400" : i === timePoints.length - 1 ? "text-emerald-400" : "text-white"
              }`}>
                {temp.toFixed(1)}C
              </p>
              <p className="text-xs text-gray-400">
                {progress.toFixed(1)}% done
              </p>
              <p className="text-xs text-gray-500">
                ({remaining.toFixed(1)}% left)
              </p>
            </div>
          );
        })}
      </div>

      {/* Formula */}
      <div className="mt-6 p-4 rounded-lg bg-slate-900/50 text-center">
        <Math tex={`T(t) = ${Tinf} + (${Ti} - ${Tinf})e^{-t/${tau}} = ${Tinf} + ${Ti - Tinf}e^{-t/${tau}}`} />
      </div>
    </motion.div>
  );
}

// Sensitivity Analysis Component
function SensitivityAnalysis() {
  const baseCase = {
    rho: 8933,
    cp: 385,
    V: 4.19e-6,
    h: 100,
    As: 1.26e-3,
  };

  const baseTau = (baseCase.rho * baseCase.V * baseCase.cp) / (baseCase.h * baseCase.As);

  // Calculate tau with +-50% changes in each parameter
  const parameters = [
    { name: "rho (Density)", symbol: "\\rho", unit: "kg/m^3", base: baseCase.rho },
    { name: "cp (Specific Heat)", symbol: "c_p", unit: "J/kgK", base: baseCase.cp },
    { name: "V (Volume)", symbol: "V", unit: "m^3", base: baseCase.V },
    { name: "h (Convection Coeff.)", symbol: "h", unit: "W/m^2K", base: baseCase.h },
    { name: "As (Surface Area)", symbol: "A_s", unit: "m^2", base: baseCase.As },
  ];

  const sensitivity = parameters.map((param) => {
    let tauMinus50, tauPlus50;

    if (param.symbol === "\\rho") {
      tauMinus50 = (baseCase.rho * 0.5 * baseCase.V * baseCase.cp) / (baseCase.h * baseCase.As);
      tauPlus50 = (baseCase.rho * 1.5 * baseCase.V * baseCase.cp) / (baseCase.h * baseCase.As);
    } else if (param.symbol === "c_p") {
      tauMinus50 = (baseCase.rho * baseCase.V * baseCase.cp * 0.5) / (baseCase.h * baseCase.As);
      tauPlus50 = (baseCase.rho * baseCase.V * baseCase.cp * 1.5) / (baseCase.h * baseCase.As);
    } else if (param.symbol === "V") {
      tauMinus50 = (baseCase.rho * baseCase.V * 0.5 * baseCase.cp) / (baseCase.h * baseCase.As);
      tauPlus50 = (baseCase.rho * baseCase.V * 1.5 * baseCase.cp) / (baseCase.h * baseCase.As);
    } else if (param.symbol === "h") {
      tauMinus50 = (baseCase.rho * baseCase.V * baseCase.cp) / (baseCase.h * 0.5 * baseCase.As);
      tauPlus50 = (baseCase.rho * baseCase.V * baseCase.cp) / (baseCase.h * 1.5 * baseCase.As);
    } else {
      tauMinus50 = (baseCase.rho * baseCase.V * baseCase.cp) / (baseCase.h * baseCase.As * 0.5);
      tauPlus50 = (baseCase.rho * baseCase.V * baseCase.cp) / (baseCase.h * baseCase.As * 1.5);
    }

    return {
      ...param,
      tauMinus50,
      tauPlus50,
      changeMinus: ((tauMinus50 - baseTau) / baseTau) * 100,
      changePlus: ((tauPlus50 - baseTau) / baseTau) * 100,
      inNumerator: ["\\rho", "c_p", "V"].includes(param.symbol),
    };
  });

  return (
    <motion.div {...stagger} className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-6 mb-8">
      <h4 className="text-lg font-bold text-orange-400 mb-2 text-center">
        Sensitivity Analysis: Which Parameter Affects tau Most?
      </h4>
      <p className="text-sm text-gray-400 text-center mb-6">
        Base case: Copper sphere (D=2cm), h=100 W/m^2K, tau = {baseTau.toFixed(2)} s
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-3 text-gray-400 font-medium">Parameter</th>
              <th className="text-center py-3 px-3 text-gray-400 font-medium">Position</th>
              <th className="text-center py-3 px-3 text-gray-400 font-medium">-50%</th>
              <th className="text-center py-3 px-3 text-gray-400 font-medium">Base</th>
              <th className="text-center py-3 px-3 text-gray-400 font-medium">+50%</th>
              <th className="text-center py-3 px-3 text-gray-400 font-medium">Effect</th>
            </tr>
          </thead>
          <tbody>
            {sensitivity.map((s, i) => (
              <tr key={i} className="border-b border-slate-800">
                <td className="py-3 px-3">
                  <span className="text-white font-medium">{s.name}</span>
                  <span className="text-xs text-gray-500 ml-2">[{s.unit}]</span>
                </td>
                <td className="py-3 px-3 text-center">
                  <span className={`px-2 py-1 rounded text-xs ${
                    s.inNumerator
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "bg-orange-500/20 text-orange-400"
                  }`}>
                    {s.inNumerator ? "Numerator" : "Denominator"}
                  </span>
                </td>
                <td className="py-3 px-3 text-center">
                  <span className={`font-mono ${s.changeMinus > 0 ? "text-red-400" : "text-emerald-400"}`}>
                    {s.changeMinus > 0 ? "+" : ""}{s.changeMinus.toFixed(0)}%
                  </span>
                </td>
                <td className="py-3 px-3 text-center text-gray-400">
                  {baseTau.toFixed(2)} s
                </td>
                <td className="py-3 px-3 text-center">
                  <span className={`font-mono ${s.changePlus > 0 ? "text-red-400" : "text-emerald-400"}`}>
                    {s.changePlus > 0 ? "+" : ""}{s.changePlus.toFixed(0)}%
                  </span>
                </td>
                <td className="py-3 px-3 text-center">
                  <div className="relative h-4 bg-slate-700 rounded-full overflow-hidden w-32 mx-auto">
                    <div
                      className={`absolute h-full ${s.inNumerator ? "bg-cyan-500" : "bg-orange-500"}`}
                      style={{
                        left: s.inNumerator ? "50%" : "auto",
                        right: s.inNumerator ? "auto" : "50%",
                        width: `${NativeMath.abs(s.changePlus) / 2}%`,
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
          <h5 className="font-bold text-cyan-400 mb-2">Numerator Parameters (rho, V, cp)</h5>
          <p className="text-sm text-gray-400">
            <strong className="text-white">Increase tau</strong> when increased.
            These represent <em>thermal inertia</em> - the system's resistance to temperature change.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30">
          <h5 className="font-bold text-orange-400 mb-2">Denominator Parameters (h, As)</h5>
          <p className="text-sm text-gray-400">
            <strong className="text-white">Decrease tau</strong> when increased.
            These represent <em>thermal conductance</em> - the system's ability to exchange heat.
          </p>
        </div>
      </div>

      <div className="mt-4 p-4 rounded-lg bg-slate-900/50">
        <p className="text-xs text-gray-400 text-center">
          <strong className="text-orange-400">Key insight:</strong> All parameters have <strong className="text-white">equal sensitivity</strong> (linear relationship).
          A 50% change in any single parameter causes a 50% change in tau.
          To halve tau, you can: halve size, double h, use half-density material, etc.
        </p>
      </div>
    </motion.div>
  );
}

// Comprehensive comparison table data
const materialComparisonData = [
  // Metals with different geometries
  {
    category: "Metals",
    items: [
      { material: "Copper sphere", D: "2 cm", rho: 8933, cp: 385, k: 401, h: 100, Lc: 0.00333, tau: 11.5, Bi: 0.00083, note: "Fast response" },
      { material: "Copper sphere", D: "2 cm", rho: 8933, cp: 385, k: 401, h: 1000, Lc: 0.00333, tau: 1.15, Bi: 0.0083, note: "Forced convection" },
      { material: "Aluminum sphere", D: "5 cm", rho: 2702, cp: 903, k: 237, h: 100, Lc: 0.00833, tau: 203, Bi: 0.0035, note: "Larger size" },
      { material: "Steel cylinder", D: "2 cm, L=10 cm", rho: 7832, cp: 434, k: 60.5, h: 100, Lc: 0.00476, tau: 162, Bi: 0.0079, note: "Lower k than Cu" },
      { material: "Steel plate", thickness: "1 cm", rho: 7832, cp: 434, k: 60.5, h: 50, Lc: 0.005, tau: 340, Bi: 0.0041, note: "Plane wall" },
    ],
  },
  // Non-metals
  {
    category: "Non-Metals",
    items: [
      { material: "Glass sphere", D: "1 cm", rho: 2500, cp: 840, k: 1.4, h: 20, Lc: 0.00167, tau: 175, Bi: 0.024, note: "Low k" },
      { material: "Polymer sphere", D: "2 cm", rho: 1200, cp: 1500, k: 0.2, h: 20, Lc: 0.00333, tau: 300, Bi: 0.33, note: "Very low k, Bi marginal" },
      { material: "Wood cube", a: "5 cm", rho: 600, cp: 2000, k: 0.15, h: 10, Lc: 0.00833, tau: 1000, Bi: 0.56, note: "Bi > 0.1, lumped invalid" },
    ],
  },
  // Sensors
  {
    category: "Temperature Sensors",
    items: [
      { material: "Thermocouple (fine)", D: "0.5 mm", rho: 8000, cp: 500, k: 20, Lc: 0.0000833, tau: 0.033, Bi: 0.0004, note: "Very fast" },
      { material: "Thermocouple (standard)", D: "1 mm", rho: 8000, cp: 500, k: 20, Lc: 0.000167, tau: 0.133, Bi: 0.00083, note: "Fast" },
      { material: "Thermocouple (sheathed)", D: "3 mm", rho: 8000, cp: 500, k: 20, Lc: 0.0005, tau: 1.33, Bi: 0.0025, note: "Moderate" },
      { material: "RTD probe", D: "6 mm", rho: 8000, cp: 500, k: 20, Lc: 0.001, tau: 5.33, Bi: 0.005, note: "Slow but accurate" },
    ],
  },
];

const timeTable = [
  { t: "0", exp: "1.000", percent: "0%", remaining: "100%", note: "Initial state", color: "orange" },
  { t: "tau", exp: "0.368", percent: "63.2%", remaining: "36.8%", note: "1 time constant", color: "cyan" },
  { t: "2tau", exp: "0.135", percent: "86.5%", remaining: "13.5%", note: "2 time constants", color: "cyan" },
  { t: "3tau", exp: "0.050", percent: "95.0%", remaining: "5.0%", note: "3 time constants", color: "cyan" },
  { t: "4tau", exp: "0.018", percent: "98.2%", remaining: "1.8%", note: "4 time constants", color: "cyan" },
  { t: "5tau", exp: "0.007", percent: "99.3%", remaining: "0.7%", note: "Practical equilibrium", color: "emerald" },
];

const rcAnalogy = [
  { thermal: "Temperature difference (T - T_infinity)", electrical: "Voltage V", unit: "K vs V" },
  { thermal: "Heat transfer rate q", electrical: "Current I", unit: "W vs A" },
  { thermal: "Thermal capacitance rho*V*c_p", electrical: "Capacitance C", unit: "J/K vs F" },
  { thermal: "Convection resistance 1/(hA_s)", electrical: "Resistance R", unit: "K/W vs Ohm" },
  { thermal: "Time constant tau", electrical: "Time constant RC", unit: "s vs s" },
];

export default function TimeConstant() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thermal Time Constant
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The characteristic time scale tau governs how quickly a system responds to temperature changes.
            Understanding tau is key to designing thermal systems and interpreting transient behavior.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Definition */}
          <SectionDivider number="1" title="Definition and Physical Meaning" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The <strong className="text-cyan-400">thermal time constant tau</strong> is the characteristic time
              that appears naturally in the lumped capacitance solution. It represents the time scale
              over which the system responds to thermal disturbances.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 text-center">
                Thermal Time Constant Definition
              </h4>

              <EquationBox label="Primary Definition" accent="cyan">
                <Math tex={`\\tau = \\frac{\\rho V c_p}{hA_s} \\quad [\\text{s}]`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <EquationBox label="Thermal Resistance Form" accent="blue">
                  <Math tex={`\\tau = R_t \\cdot C_t = \\frac{1}{hA_s} \\cdot \\rho V c_p`} display />
                </EquationBox>

                <EquationBox label="Using Characteristic Length" accent="orange">
                  <Math tex={`\\tau = \\frac{\\rho c_p L_c}{h} \\quad \\text{where } L_c = V/A_s`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h4 className="text-sm font-bold text-cyan-400 mb-3">Numerator: Thermal Capacitance</h4>
                  <div className="text-center p-4 rounded-lg bg-slate-900/50 mb-3">
                    <Math tex={`C_t = \\rho V c_p \\quad [\\text{J/K}]`} display />
                  </div>
                  <p className="text-sm text-gray-400">
                    The body's <strong className="text-white">thermal inertia</strong> - energy required to change temperature by 1K.
                    Larger C_t means more energy storage, slower response.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h4 className="text-sm font-bold text-orange-400 mb-3">Denominator: Surface Conductance</h4>
                  <div className="text-center p-4 rounded-lg bg-slate-900/50 mb-3">
                    <Math tex={`G_t = hA_s \\quad [\\text{W/K}]`} display />
                  </div>
                  <p className="text-sm text-gray-400">
                    The surface's <strong className="text-white">heat transfer capability</strong> - power transferred per unit temperature difference.
                    Larger G_t means faster heat exchange, quicker response.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Physical Interpretation of tau" accent="cyan" icon="t">
              <p className="mb-3">
                <Math tex="\\tau" /> has a beautiful physical interpretation:
              </p>
              <div className="p-3 bg-slate-950/80 rounded-lg text-center mb-3">
                <Math tex={`\\tau = \\frac{\\text{Stored thermal energy}}{\\text{Initial heat transfer rate}} \\sim \\frac{\\rho V c_p \\Delta T}{hA_s \\Delta T} = \\frac{\\rho V c_p}{hA_s}`} display />
              </div>
              <p>
                It is the time it would take to fully cool (or heat) the body <em>if</em> the heat transfer rate stayed at its initial value.
                Of course, the actual process takes longer because the rate decreases as the temperature difference shrinks.
              </p>
            </InsightCard>
          </motion.div>

          <ThinkAboutIt
            question="Two objects have the same time constant tau. Object A is small with high h, and Object B is large with low h. Which one has more thermal inertia? Which is easier to control thermally?"
            hint="Same tau means same ratio of capacitance to conductance, but the actual values differ. Object B has larger C_t (more thermal mass) but also larger (or same) G_t. Object A is easier to control because smaller absolute values mean less energy to add/remove for a given temperature change."
          />

          {/* 2. Interactive Visualization */}
          <SectionDivider number="2" title="Interactive Temperature Decay Visualization" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Visualize how temperature evolves with time. The curve shows exponential decay characterized by
              the time constant tau. Observe what fraction of the temperature change completes at 1tau, 2tau, 3tau, and 5tau.
            </p>
          </motion.div>

          <TemperatureDecayVisualization />

          {/* 3. Response at Multiples of tau */}
          <SectionDivider number="3" title="Response at Multiples of tau" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Engineers often need to know how long it takes to reach a certain percentage of the final temperature.
              The exponential solution provides elegant answers in terms of tau.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                Temperature Response at Multiples of tau
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Time</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="e^{-t/\\tau}" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">% Completed</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">% Remaining</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Significance</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {timeTable.map((item, i) => (
                      <tr key={i} className={`border-b border-slate-800 ${
                        item.color === "orange" ? "bg-orange-500/5" :
                        item.color === "emerald" ? "bg-emerald-500/5" :
                        i === 1 ? "bg-cyan-500/5" : ""
                      }`}>
                        <td className={`py-3 px-4 font-mono ${
                          item.color === "orange" ? "text-orange-400" :
                          item.color === "emerald" ? "text-emerald-400" :
                          "text-cyan-400"
                        }`}>{item.t}</td>
                        <td className="py-3 px-4 font-mono">{item.exp}</td>
                        <td className="py-3 px-4 font-bold text-white">{item.percent}</td>
                        <td className="py-3 px-4 text-gray-400">{item.remaining}</td>
                        <td className="py-3 px-4 text-gray-400">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8 grid md:grid-cols-3 gap-4">
            <InsightCard title="At t = tau" accent="cyan" icon="1">
              <p>
                <strong className="text-cyan-400">63.2%</strong> of the temperature change is complete.
                This is because <Math tex="1 - e^{-1} = 0.632" />.
                The system is about 2/3 of the way to equilibrium.
              </p>
            </InsightCard>

            <InsightCard title="At t = 3tau" accent="blue" icon="3">
              <p>
                <strong className="text-blue-400">95%</strong> of the change is complete.
                Often used as the "settling time" in control systems.
                Only 5% of the initial disturbance remains.
              </p>
            </InsightCard>

            <InsightCard title="At t = 5tau" accent="emerald" icon="5">
              <p>
                <strong className="text-emerald-400">99.3%</strong> complete - practical equilibrium.
                Used as the standard for "fully equilibrated" in engineering.
                Further waiting yields diminishing returns.
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. Comparison Table */}
          <SectionDivider number="4" title="Comparison: tau for Different Materials and Geometries" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The time constant varies dramatically depending on material properties, size, and cooling conditions.
              This comprehensive table shows tau for various practical scenarios.
            </p>
          </motion.div>

          {materialComparisonData.map((category, catIdx) => (
            <motion.div key={catIdx} {...stagger} className="mb-6">
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                  {category.category}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">Material/Geometry</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">Size</th>
                        <th className="text-center py-2 px-3 text-gray-400 font-medium">h [W/m^2K]</th>
                        <th className="text-center py-2 px-3 text-gray-400 font-medium">tau</th>
                        <th className="text-center py-2 px-3 text-gray-400 font-medium">Bi</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">Note</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {category.items.map((item: any, i: number) => (
                        <tr key={i} className="border-b border-slate-800">
                          <td className="py-2 px-3 text-white font-medium">{item.material}</td>
                          <td className="py-2 px-3 text-gray-400">{item.D || item.thickness || item.a}</td>
                          <td className="py-2 px-3 text-center">{item.h}</td>
                          <td className="py-2 px-3 text-center font-mono text-cyan-400">
                            {item.tau < 1 ? `${(item.tau * 1000).toFixed(0)} ms` :
                             item.tau < 60 ? `${item.tau.toFixed(1)} s` :
                             `${(item.tau / 60).toFixed(1)} min`}
                          </td>
                          <td className="py-2 px-3 text-center">
                            <span className={`px-2 py-0.5 rounded text-xs ${
                              item.Bi < 0.1 ? "bg-emerald-500/20 text-emerald-400" :
                              item.Bi < 1 ? "bg-yellow-500/20 text-yellow-400" :
                              "bg-red-500/20 text-red-400"
                            }`}>
                              {item.Bi < 0.01 ? item.Bi.toExponential(1) : item.Bi.toFixed(3)}
                            </span>
                          </td>
                          <td className="py-2 px-3 text-gray-500 text-xs">{item.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Key Observations from the Table" accent="yellow" icon="!">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">Size matters:</strong> Doubling diameter roughly doubles tau (for same h)</li>
                <li>&bull; <strong className="text-white">h matters:</strong> Increasing h by 10x reduces tau by 10x (boiling vs natural convection)</li>
                <li>&bull; <strong className="text-white">Sensors vs industrial:</strong> Thermocouples have tau ~ ms to s; industrial parts have tau ~ minutes to hours</li>
                <li>&bull; <strong className="text-white">Bi check:</strong> Non-metals with low k may violate Bi &lt; 0.1, requiring exact solutions</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 5. Sensitivity Analysis */}
          <SectionDivider number="5" title="Sensitivity Analysis" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Understanding which parameters most affect tau helps in design.
              Since <Math tex="\\tau = \\rho V c_p / (hA_s)" />, all parameters appear linearly.
              Let us quantify the sensitivity.
            </p>
          </motion.div>

          <SensitivityAnalysis />

          <ThinkAboutIt
            question="You need to reduce the time constant of a cooling system by a factor of 4. What are your options? Which is most practical?"
            hint="You could: (1) reduce size by 4x (but capacity drops), (2) increase h by 4x (use forced convection or phase change), (3) use material with 4x lower rho*cp (limited options), or (4) combine approaches. Increasing h is often most practical - switching from natural to forced convection can easily achieve 4x improvement."
          />

          {/* 6. RC Circuit Analogy */}
          <SectionDivider number="6" title="RC Circuit Analogy" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The lumped capacitance thermal system is mathematically identical to an <strong className="text-cyan-400">RC circuit</strong>.
              This analogy enables powerful cross-domain insights and tools.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                Thermal-Electrical Analogy
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Thermal Quantity</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Electrical Analogue</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Units Comparison</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {rcAnalogy.map((item, i) => (
                      <tr key={i} className="border-b border-slate-800">
                        <td className="py-3 px-4 text-cyan-400">{item.thermal}</td>
                        <td className="py-3 px-4 text-blue-400">{item.electrical}</td>
                        <td className="py-3 px-4 text-gray-500 text-xs">{item.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
                <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                  Thermal System
                </h4>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20 mb-4">
                  <Math tex={`\\tau_{thermal} = R_t C_t = \\frac{\\rho V c_p}{hA_s}`} display />
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20">
                  <Math tex={`\\frac{T - T_\\infty}{T_i - T_\\infty} = e^{-t/\\tau}`} display />
                </div>
              </div>

              <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                  RC Electrical Circuit
                </h4>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-blue-500/20 mb-4">
                  <Math tex={`\\tau_{electrical} = RC`} display />
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-blue-500/20">
                  <Math tex={`\\frac{V(t)}{V_0} = e^{-t/RC}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Power of the Analogy" accent="blue" icon="RC">
              <p>
                This analogy enables:
              </p>
              <ul className="mt-2 space-y-1">
                <li>&bull; Use of circuit simulation tools (SPICE) for thermal problems</li>
                <li>&bull; Intuition transfer from electronics to thermal systems</li>
                <li>&bull; Analysis of complex thermal networks (multiple bodies, resistances)</li>
                <li>&bull; Frequency domain analysis for periodic heating/cooling</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 7. Practical Applications */}
          <SectionDivider number="7" title="Practical Applications" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Knowing tau enables answering critical engineering questions: How long to reach a target temperature?
              What temperature at a given time? How to design for faster/slower response?
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                  Find Temperature at Time t
                </h4>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-orange-500/20 mb-4">
                  <Math tex={`T(t) = T_\\infty + (T_i - T_\\infty)e^{-t/\\tau}`} display />
                </div>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Given:</strong> t, T_i, T_inf, tau<br />
                  <strong className="text-white">Find:</strong> T(t)
                </p>
                <div className="mt-3 p-3 bg-slate-900/50 rounded-lg text-xs text-gray-400">
                  Example: Steel part (tau=100s) cooling from 500C in 25C air.
                  After 200s: T = 25 + 475*e^(-2) = 25 + 64.4 = 89.4C
                </div>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
                <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                  Find Time to Reach Temperature T
                </h4>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-emerald-500/20 mb-4">
                  <Math tex={`t = -\\tau \\ln\\left(\\frac{T - T_\\infty}{T_i - T_\\infty}\\right)`} display />
                </div>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Given:</strong> T (target), T_i, T_inf, tau<br />
                  <strong className="text-white">Find:</strong> t
                </p>
                <div className="mt-3 p-3 bg-slate-900/50 rounded-lg text-xs text-gray-400">
                  Example: Same part, time to reach 100C?
                  t = -100*ln((100-25)/(500-25)) = 100*ln(6.33) = 185s
                </div>
              </div>
            </div>
          </motion.div>

          <EngineeringApplication title="MFTEL Thermal Energy Storage Research">
            <p>
              In our Carnot Battery and thermal energy storage research at MFTEL, understanding time constants is crucial:
            </p>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li>&bull; <strong className="text-white">Molten salt storage:</strong> Large tau (hours) is desirable - we want slow heat loss to ambient</li>
              <li>&bull; <strong className="text-white">Charge/discharge cycles:</strong> tau determines minimum cycle time for efficient operation</li>
              <li>&bull; <strong className="text-white">Heat exchanger design:</strong> Matching tau of different components ensures smooth operation</li>
              <li>&bull; <strong className="text-white">System modeling:</strong> RC network approach allows quick preliminary sizing of storage vessels</li>
            </ul>
            <p className="mt-2 text-gray-400">
              For grid-scale storage, we typically target tau &gt; 24 hours (86,400s) to maintain temperature overnight.
              This requires careful insulation design and large thermal mass.
            </p>
          </EngineeringApplication>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Design Guidelines" accent="yellow" icon="!">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">Temperature sensors:</strong> Want small tau (fast response) - use small diameter, high h</li>
                <li>&bull; <strong className="text-white">Heat treatment:</strong> Ensure t &gt; 5tau for complete soaking at target temperature</li>
                <li>&bull; <strong className="text-white">Food safety:</strong> Center of food must reach pasteurization temp; use tau to estimate time</li>
                <li>&bull; <strong className="text-white">Building thermal mass:</strong> Large tau smooths temperature swings over day/night cycles</li>
                <li>&bull; <strong className="text-white">Electronic cooling:</strong> Small tau for fast thermal response to power transients</li>
              </ul>
            </InsightCard>
          </motion.div>

          <ThinkAboutIt
            question="A building uses massive concrete walls to store thermal energy from daytime solar heating. What time constant would you want for optimal performance in a climate with 12-hour day/night cycles?"
            hint="You want tau such that the stored heat releases slowly over the night. If tau ~ 6 hours, after 12 hours (2tau), about 86.5% of the stored heat has been released - good match! If tau is too small, heat releases too quickly; if too large, heat never releases."
          />
        </div>
      </div>
    </section>
  );
}

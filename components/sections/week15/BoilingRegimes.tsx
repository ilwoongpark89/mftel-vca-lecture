"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";
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

function EquationBox({
  label,
  children,
  accent = "cyan",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "red" ? "border-red-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div className="text-cyan-400">
        {children}
      </div>
    </div>
  );
}

// Interactive Boiling Curve Component
function InteractiveBoilingCurve() {
  const [hoverRegion, setHoverRegion] = useState<string | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<{x: number, y: number, label: string, description: string, color: string} | null>(null);

  // Boiling curve data points (normalized coordinates)
  const curvePoints = "M 60 245 Q 90 235 115 210 C 150 160 175 90 210 45 Q 235 25 250 32 C 280 50 320 100 360 125 Q 420 165 450 110 L 520 35";

  const regions = [
    { id: "natural", name: "Natural Convection", color: "#10b981", x1: 60, x2: 115, description: "No boiling, heat transfer by natural convection only" },
    { id: "nucleate-a", name: "Isolated Bubbles", color: "#22d3ee", x1: 115, x2: 180, description: "Individual bubbles form and depart independently" },
    { id: "nucleate-b", name: "Jets and Columns", color: "#06b6d4", x1: 180, x2: 250, description: "Bubbles coalesce into vapor columns, maximum heat transfer" },
    { id: "transition", name: "Transition Boiling", color: "#f59e0b", x1: 250, x2: 360, description: "Unstable region with partial vapor film coverage" },
    { id: "film", name: "Film Boiling", color: "#ef4444", x1: 360, x2: 520, description: "Stable vapor film covers entire surface" },
  ];

  const keyPoints = [
    { x: 115, y: 210, label: "A (ONB)", description: "Onset of Nucleate Boiling", color: "#10b981" },
    { x: 210, y: 45, label: "C (CHF)", description: "Critical Heat Flux / Maximum Heat Flux", color: "#f59e0b" },
    { x: 360, y: 125, label: "D (MHF)", description: "Minimum Heat Flux / Leidenfrost Point", color: "#ef4444" },
  ];

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
      <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 text-center">
        Interactive Pool Boiling Curve - Click to Explore
      </h4>

      <div className="relative bg-slate-900/80 rounded-xl p-6 overflow-x-auto">
        <div className="min-w-[550px]">
          <svg viewBox="0 0 580 320" className="w-full h-auto">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect x="60" y="20" width="500" height="250" fill="url(#grid)" />

            {/* Region highlights on hover */}
            {regions.map((region) => (
              <rect
                key={region.id}
                x={region.x1}
                y={20}
                width={region.x2 - region.x1}
                height={250}
                fill={hoverRegion === region.id ? region.color : "transparent"}
                fillOpacity={hoverRegion === region.id ? 0.1 : 0}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHoverRegion(region.id)}
                onMouseLeave={() => setHoverRegion(null)}
              />
            ))}

            {/* Axes */}
            <line x1="60" y1="270" x2="560" y2="270" stroke="#475569" strokeWidth="2" />
            <line x1="60" y1="270" x2="60" y2="20" stroke="#475569" strokeWidth="2" />

            {/* Arrows */}
            <polygon points="560,270 550,265 550,275" fill="#475569" />
            <polygon points="60,20 55,30 65,30" fill="#475569" />

            {/* Axis labels */}
            <text x="310" y="305" fill="#94a3b8" fontSize="13" textAnchor="middle" fontWeight="500">
              Wall Superheat, Delta T_e = T_s - T_sat (log scale)
            </text>
            <text x="25" y="145" fill="#94a3b8" fontSize="13" textAnchor="middle" transform="rotate(-90, 25, 145)" fontWeight="500">
              Heat Flux, q&quot; (log scale)
            </text>

            {/* Log scale indicators */}
            <text x="80" y="285" fill="#64748b" fontSize="10">1</text>
            <text x="140" y="285" fill="#64748b" fontSize="10">5</text>
            <text x="200" y="285" fill="#64748b" fontSize="10">10</text>
            <text x="300" y="285" fill="#64748b" fontSize="10">30</text>
            <text x="420" y="285" fill="#64748b" fontSize="10">120</text>
            <text x="520" y="285" fill="#64748b" fontSize="10">1000</text>

            <text x="45" y="245" fill="#64748b" fontSize="10">10^3</text>
            <text x="45" y="180" fill="#64748b" fontSize="10">10^4</text>
            <text x="45" y="115" fill="#64748b" fontSize="10">10^5</text>
            <text x="45" y="50" fill="#64748b" fontSize="10">10^6</text>

            {/* Boiling curve */}
            <path
              d={curvePoints}
              fill="none"
              stroke="#22d3ee"
              strokeWidth="3"
              className="drop-shadow-lg"
            />

            {/* Region labels */}
            <text x="85" y="180" fill="#10b981" fontSize="11" fontWeight="bold">I</text>
            <text x="145" y="75" fill="#22d3ee" fontSize="11" fontWeight="bold">IIa</text>
            <text x="210" y="65" fill="#06b6d4" fontSize="11" fontWeight="bold">IIb</text>
            <text x="305" y="85" fill="#f59e0b" fontSize="11" fontWeight="bold">III</text>
            <text x="450" y="65" fill="#ef4444" fontSize="11" fontWeight="bold">IV</text>

            {/* Key points with interactivity */}
            {keyPoints.map((point, index) => (
              <g key={index} className="cursor-pointer" onClick={() => setSelectedPoint(point)}>
                <circle cx={point.x} cy={point.y} r="8" fill={point.color} className="animate-pulse" />
                <circle cx={point.x} cy={point.y} r="12" fill="transparent" stroke={point.color} strokeWidth="2" strokeDasharray="3,3" />
                <text x={point.x} y={point.y - 15} fill={point.color} fontSize="10" textAnchor="middle" fontWeight="bold">{point.label}</text>
              </g>
            ))}

            {/* Hysteresis arrows */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
              </marker>
            </defs>
            <path d="M 225 35 Q 260 10 285 45" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arrowhead)" />
            <text x="260" y="8" fill="#94a3b8" fontSize="9">Burnout</text>
            <path d="M 335 140 Q 300 175 265 135" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arrowhead)" />
            <text x="290" y="168" fill="#64748b" fontSize="9">Rewet</text>
          </svg>
        </div>
      </div>

      {/* Region info display */}
      {hoverRegion && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700"
        >
          <h5 className="font-bold text-white mb-1">
            {regions.find(r => r.id === hoverRegion)?.name}
          </h5>
          <p className="text-sm text-gray-400">
            {regions.find(r => r.id === hoverRegion)?.description}
          </p>
        </motion.div>
      )}

      {/* Selected point info */}
      {selectedPoint && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 rounded-xl bg-slate-800/50 border border-cyan-500/30"
        >
          <div className="flex justify-between items-start">
            <div>
              <h5 className="font-bold text-cyan-400 mb-1">{selectedPoint.label}</h5>
              <p className="text-sm text-gray-400">{selectedPoint.description}</p>
            </div>
            <button
              onClick={() => setSelectedPoint(null)}
              className="text-gray-500 hover:text-white"
            >
              x
            </button>
          </div>
        </motion.div>
      )}

      {/* Region cards */}
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <h5 className="text-emerald-400 font-bold mb-2">I. Natural Convection</h5>
          <p className="text-sm text-gray-400">
            <Math tex="\Delta T_e < 5°C" /> (for water)<br />
            No boiling occurs, pure natural convection<br />
            <Math tex="q'' = h_{nc} \cdot \Delta T_e" />
          </p>
        </div>
        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
          <h5 className="text-cyan-400 font-bold mb-2">II. Nucleate Boiling</h5>
          <p className="text-sm text-gray-400">
            <Math tex="5°C < \Delta T_e < 30°C" /><br />
            <strong className="text-white">Most efficient heat transfer region</strong><br />
            IIa: Isolated bubbles, IIb: Jets and columns
          </p>
        </div>
        <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
          <h5 className="text-orange-400 font-bold mb-2">III. Transition Boiling</h5>
          <p className="text-sm text-gray-400">
            <Math tex="30°C < \Delta T_e < 120°C" /><br />
            Unstable region with negative slope<br />
            Partial film coverage, oscillating behavior
          </p>
        </div>
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <h5 className="text-red-400 font-bold mb-2">IV. Film Boiling</h5>
          <p className="text-sm text-gray-400">
            <Math tex="\Delta T_e > 120°C" /><br />
            Stable vapor film covers entire surface<br />
            Low h due to vapor insulation, radiation important at high T
          </p>
        </div>
      </div>
    </div>
  );
}

// Bubble Dynamics Calculator
function BubbleDynamicsCalculator() {
  const [surfaceTension, setSurfaceTension] = useState(0.0589); // N/m for water
  const [contactAngle, setContactAngle] = useState(45); // degrees
  const [rhoL, setRhoL] = useState(958); // kg/m3
  const [rhoV, setRhoV] = useState(0.596); // kg/m3
  const g = 9.81;

  // Fritz correlation for departure diameter
  const Dd = 0.0208 * contactAngle * NativeMath.sqrt(surfaceTension / (g * (rhoL - rhoV)));
  // Zuber correlation for departure frequency
  const fd = 0.6 * NativeMath.sqrt((g * (rhoL - rhoV)) / rhoL) / Dd;

  return (
    <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
      <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
        Bubble Dynamics Calculator
      </h4>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h5 className="text-white font-bold">Input Parameters</h5>

          <div>
            <label className="text-sm text-gray-400 block mb-1">
              Surface Tension, <Math tex="\sigma" /> (N/m)
            </label>
            <input
              type="number"
              value={surfaceTension}
              onChange={(e) => setSurfaceTension(parseFloat(e.target.value) || 0)}
              step="0.001"
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-1">
              Contact Angle, <Math tex="\theta" /> (degrees)
            </label>
            <input
              type="range"
              min="10"
              max="150"
              value={contactAngle}
              onChange={(e) => setContactAngle(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="text-cyan-400 text-sm">{contactAngle}deg</span>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-1">
              Liquid Density, <Math tex="\rho_l" /> (kg/m3)
            </label>
            <input
              type="number"
              value={rhoL}
              onChange={(e) => setRhoL(parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-1">
              Vapor Density, <Math tex="\rho_v" /> (kg/m3)
            </label>
            <input
              type="number"
              value={rhoV}
              onChange={(e) => setRhoV(parseFloat(e.target.value) || 0)}
              step="0.01"
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="text-white font-bold">Results</h5>

          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <p className="text-sm text-gray-400 mb-2">Departure Diameter (Fritz)</p>
            <p className="text-2xl font-bold text-cyan-400">
              {(Dd * 1000).toFixed(3)} mm
            </p>
            <p className="text-xs text-gray-500 mt-1">
              <Math tex="D_d = 0.0208 \theta \sqrt{\sigma / [g(\rho_l - \rho_v)]}" />
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-gray-400 mb-2">Departure Frequency (Zuber)</p>
            <p className="text-2xl font-bold text-blue-400">
              {fd.toFixed(1)} Hz
            </p>
            <p className="text-xs text-gray-500 mt-1">
              <Math tex="f \cdot D_d \approx 0.6 \sqrt{g(\rho_l - \rho_v)/\rho_l}" />
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-sm text-gray-400 mb-2">Bubble Volume at Departure</p>
            <p className="text-2xl font-bold text-emerald-400">
              {((NativeMath.PI / 6) * NativeMath.pow(Dd * 1000, 3)).toFixed(4)} mm³
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BoilingRegimes() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pool Boiling Curve
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The boiling curve describes the relationship between wall superheat and heat flux,
            revealing distinct regimes with vastly different heat transfer characteristics.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Historical Background */}
          <SectionDivider number="1" title="Nukiyama's Discovery (1934)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Shiro Nukiyama</strong> first measured the complete boiling curve
              experimentally using an electrically heated wire immersed in saturated water. His groundbreaking
              work revealed the existence of the <strong className="text-cyan-400">critical heat flux (CHF)</strong> and
              the <strong className="text-red-400">transition/film boiling</strong> regions.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Historical Note: The 'Missing' Region" accent="yellow" icon="H">
              <p>
                Nukiyama initially could not measure the transition boiling region because his constant-heat-flux
                apparatus caused the wire to jump directly from nucleate to film boiling upon reaching CHF.
                Only later experiments with <strong className="text-white">temperature-controlled surfaces</strong> revealed
                the complete curve including the unstable transition region.
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. Interactive Boiling Curve */}
          <SectionDivider number="2" title="The Pool Boiling Curve" />

          <motion.div {...stagger} className="mb-8">
            <InteractiveBoilingCurve />
          </motion.div>

          {/* 3. Onset of Nucleate Boiling (ONB) */}
          <SectionDivider number="3" title="Onset of Nucleate Boiling (ONB)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The <strong className="text-cyan-400">Onset of Nucleate Boiling (ONB)</strong> marks the transition
              from natural convection to nucleate boiling. A minimum wall superheat is required to activate
              nucleation sites (surface cavities containing trapped gas/vapor).
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                ONB Criteria - Hsu's Model (1962)
              </h4>

              <EquationBox label="Young-Laplace Equation - Pressure Inside Bubble" accent="cyan">
                <Math tex={`P_{bubble} = P_{liquid} + \\frac{2\\sigma}{r}`} display />
              </EquationBox>

              <div className="mt-6">
                <EquationBox label="Minimum Superheat for ONB" accent="blue">
                  <Math tex={`\\Delta T_{ONB} = \\frac{2\\sigma T_{sat}}{\\rho_v h_{fg} r_c}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/80">
                <h5 className="text-white font-bold mb-3">Physical Interpretation:</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">1.</span>
                    <span>Bubble embryo must overcome surface tension force <Math tex="2\sigma/r" /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">2.</span>
                    <span>Smaller cavities require higher superheat (larger <Math tex="P_{bubble}" /> needed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">3.</span>
                    <span>Critical cavity radius <Math tex="r_c" /> depends on local thermal conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Hsu's Active Cavity Range" accent="blue" icon="r">
              <p className="mb-2">
                Only cavities within a specific size range can be active nucleation sites:
              </p>
              <div className="my-3 p-3 bg-slate-900/50 rounded-lg">
                <Math tex={`r_{min} = \\frac{\\delta_t}{2} \\left(1 - \\sqrt{1 - \\frac{8\\sigma T_{sat}}{\\rho_v h_{fg} q'' \\delta_t / k_l}}\\right)`} display />
              </div>
              <p className="text-gray-500">
                where <Math tex="\delta_t = k_l / h" /> is the thermal boundary layer thickness.
                As heat flux increases, smaller cavities become active.
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. Active Nucleation Site Density */}
          <SectionDivider number="4" title="Active Nucleation Site Density" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The <strong className="text-white">active nucleation site density</strong> <Math tex="n_a" />
              (sites/m2) is a crucial parameter determining heat transfer in nucleate boiling.
              It increases with wall superheat and depends strongly on surface characteristics.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                Nucleation Site Density Correlations
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Correlation</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Form</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Mikic & Rohsenow (1969)</td>
                      <td className="py-3 px-4"><Math tex="n_a = C_1 (\Delta T_e)^m" /></td>
                      <td className="py-3 px-4 text-gray-400">General, m = 4-6</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-blue-400">Wang & Dhir (1993)</td>
                      <td className="py-3 px-4"><Math tex="n_a = (1-\cos\theta) N_c / (D_c)^6 (\Delta T_e)^6" /></td>
                      <td className="py-3 px-4 text-gray-400">Wettability effect</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-emerald-400">Benjamin & Balakrishnan (1996)</td>
                      <td className="py-3 px-4"><Math tex="n_a = 218.8 (Pr_l)^{1.63} (\Delta T_e)^{3.07}" /></td>
                      <td className="py-3 px-4 text-gray-400">Prandtl number effect</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
                <p className="text-3xl font-bold text-cyan-400">10<sup>4</sup></p>
                <p className="text-sm text-gray-400 mt-2">sites/cm2 at low <Math tex="\Delta T_e" /></p>
              </div>
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                <p className="text-3xl font-bold text-blue-400">10<sup>6</sup></p>
                <p className="text-sm text-gray-400 mt-2">sites/cm2 near CHF</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                <p className="text-3xl font-bold text-emerald-400">4-6</p>
                <p className="text-sm text-gray-400 mt-2">typical exponent m</p>
              </div>
            </div>
          </motion.div>

          {/* 5. Bubble Dynamics */}
          <SectionDivider number="5" title="Bubble Dynamics" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Understanding bubble <strong className="text-white">growth</strong>, <strong className="text-white">departure</strong>,
              and <strong className="text-white">frequency</strong> is essential for predicting nucleate boiling heat transfer.
              The bubble cycle consists of nucleation, growth, departure, and waiting period.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Bubble Departure Diameter Correlations
              </h4>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/80">
                  <h5 className="text-white font-bold mb-3">Fritz (1935) - Classical Correlation</h5>
                  <EquationBox accent="cyan">
                    <Math tex={`D_d = 0.0208\\theta \\sqrt{\\frac{\\sigma}{g(\\rho_l - \\rho_v)}}`} display />
                  </EquationBox>
                  <p className="text-sm text-gray-500 mt-3">
                    <Math tex="\theta" />: contact angle in degrees. Based on force balance between buoyancy and surface tension.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80">
                  <h5 className="text-white font-bold mb-3">Cole & Rohsenow (1969) - Improved Correlation</h5>
                  <EquationBox accent="blue">
                    <Math tex={`D_d = 1.5 \\times 10^{-4} \\sqrt{\\frac{\\sigma}{g(\\rho_l - \\rho_v)}} \\left(\\frac{\\rho_l c_{p,l} T_{sat}}{\\rho_v h_{fg}}\\right)^{5/4}`} display />
                  </EquationBox>
                  <p className="text-sm text-gray-500 mt-3">
                    Includes thermal effects through Jakob number.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <BubbleDynamicsCalculator />
          </motion.div>

          {/* 6. Heat Transfer in Nucleate Boiling */}
          <SectionDivider number="6" title="Heat Flux Partitioning" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Heat transfer in nucleate boiling occurs through multiple mechanisms.
              The <strong className="text-cyan-400">heat flux partitioning model</strong> decomposes the total
              heat flux into contributions from different mechanisms.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <EquationBox label="Total Heat Flux in Nucleate Boiling" accent="cyan">
              <Math tex={`q''_{total} = q''_{evap} + q''_{quench} + q''_{conv}`} display />
            </EquationBox>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <h5 className="text-cyan-400 font-bold mb-2">Evaporation</h5>
                <p className="text-sm text-gray-400">
                  <Math tex="q''_{evap}" />: Latent heat carried away by departing bubbles
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  <Math tex="q''_{evap} = n_a f V_d \rho_v h_{fg}" />
                </p>
              </div>
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <h5 className="text-blue-400 font-bold mb-2">Quenching</h5>
                <p className="text-sm text-gray-400">
                  <Math tex="q''_{quench}" />: Transient conduction when cold liquid rewets surface after bubble departure
                </p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <h5 className="text-emerald-400 font-bold mb-2">Convection</h5>
                <p className="text-sm text-gray-400">
                  <Math tex="q''_{conv}" />: Single-phase convection on surface area between active sites
                </p>
              </div>
            </div>
          </motion.div>

          {/* 7. Hysteresis */}
          <SectionDivider number="7" title="Boiling Curve Hysteresis" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The boiling curve exhibits <strong className="text-yellow-400">hysteresis</strong> -
              the path followed during heating differs from that during cooling. This has important
              implications for system stability and safety.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-6">
                Heating vs Cooling Path
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-orange-400 font-bold mb-3">Heating (Increasing q'')</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; Natural convection to nucleate boiling: smooth transition</li>
                    <li>&bull; At CHF: <strong className="text-red-400">sudden jump to film boiling</strong></li>
                    <li>&bull; Temperature spikes dramatically (burnout risk)</li>
                    <li>&bull; Transition region is bypassed</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-blue-400 font-bold mb-3">Cooling (Decreasing q'')</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; Film boiling persists below CHF</li>
                    <li>&bull; Passes through transition region to Leidenfrost point</li>
                    <li>&bull; <strong className="text-cyan-400">Rewetting at MHF</strong></li>
                    <li>&bull; Returns to nucleate boiling</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="MFTEL Research: Boiling Heat Transfer" accent="purple" icon="Lab">
              <p className="mb-2">
                Prof. Park's MFTEL laboratory conducts cutting-edge research on boiling heat transfer:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">Immersion Cooling:</strong> 2-phase cooling for GPUs/TPUs achieving up to 90% energy savings</li>
                <li>&bull; <strong className="text-white">Surface Modification:</strong> Micro/nano structures to enhance CHF and reduce ONB superheat</li>
                <li>&bull; <strong className="text-white">Dielectric Fluids:</strong> FC-72, Novec 7100 for electronics cooling applications</li>
                <li>&bull; <strong className="text-white">High-Speed Visualization:</strong> Bubble dynamics using 10,000+ fps imaging</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 8. Engineering Applications Table */}
          <SectionDivider number="8" title="Engineering Implications" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                Boiling Regimes in Engineering Applications
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Region</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">h (W/m2K)</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Applications</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Design Considerations</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-emerald-400">Natural Conv.</td>
                      <td className="py-3 px-4">200-1,000</td>
                      <td className="py-3 px-4">Low heat flux cooling</td>
                      <td className="py-3 px-4 text-gray-400">Inefficient for high power</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Nucleate Boiling</td>
                      <td className="py-3 px-4">2,500-35,000</td>
                      <td className="py-3 px-4">Electronics cooling, boilers, nuclear reactors</td>
                      <td className="py-3 px-4 text-gray-400"><strong className="text-white">Operate below CHF!</strong></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-yellow-400">Transition</td>
                      <td className="py-3 px-4">Variable</td>
                      <td className="py-3 px-4">Accident scenarios only</td>
                      <td className="py-3 px-4 text-gray-400">Avoid! Unstable region</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-red-400">Film Boiling</td>
                      <td className="py-3 px-4">200-500</td>
                      <td className="py-3 px-4">Metal quenching, Leidenfrost cooking</td>
                      <td className="py-3 px-4 text-gray-400">High surface temperature</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Key Takeaways" accent="blue" icon="S">
              <p>
                The boiling curve is fundamental to thermal system design. Understanding
                <strong className="text-cyan-400"> ONB criteria</strong> helps initiate boiling at desired conditions,
                <strong className="text-white"> bubble dynamics</strong> governs heat transfer rates, and
                <strong className="text-orange-400"> CHF</strong> sets the upper limit for safe operation.
                Modern research focuses on surface engineering to enhance nucleate boiling and delay CHF.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

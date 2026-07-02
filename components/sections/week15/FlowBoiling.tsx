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

// Interactive Flow Pattern Visualization
function FlowPatternVisualization() {
  const [selectedPattern, setSelectedPattern] = useState<string>("annular");

  const patterns = [
    {
      id: "bubbly",
      name: "Bubbly Flow",
      quality: "0 < x < 0.05",
      description: "Small discrete bubbles dispersed in continuous liquid phase",
      characteristics: [
        "Low vapor quality (x < 0.05)",
        "High liquid holdup",
        "Bubble coalescence begins",
        "Good heat transfer (liquid convection + nucleate boiling)"
      ],
      color: "cyan"
    },
    {
      id: "slug",
      name: "Slug/Plug Flow",
      quality: "0.05 < x < 0.15",
      description: "Large bullet-shaped Taylor bubbles separated by liquid slugs",
      characteristics: [
        "Taylor bubbles nearly span tube diameter",
        "Thin liquid film around bubbles",
        "Liquid slugs between bubbles",
        "Intermittent behavior, pressure fluctuations"
      ],
      color: "blue"
    },
    {
      id: "churn",
      name: "Churn Flow",
      quality: "0.15 < x < 0.3",
      description: "Highly chaotic flow with oscillating liquid chunks",
      characteristics: [
        "Transition between slug and annular",
        "Unstable, oscillatory motion",
        "Large interfacial waves",
        "Complex pressure drop behavior"
      ],
      color: "purple"
    },
    {
      id: "annular",
      name: "Annular Flow",
      quality: "0.3 < x < 0.8",
      description: "Liquid film on wall with high-velocity vapor core",
      characteristics: [
        "Thin liquid film (10-500 microns)",
        "High vapor velocity in core",
        "Entrained liquid droplets in core",
        "Excellent heat transfer via thin-film evaporation"
      ],
      color: "emerald"
    },
    {
      id: "mist",
      name: "Mist/Droplet Flow",
      quality: "x > 0.8",
      description: "Liquid droplets dispersed in continuous vapor phase",
      characteristics: [
        "Wall completely dry (post-dryout)",
        "Poor heat transfer (vapor convection only)",
        "Droplet impingement on wall",
        "Risk of wall overheating"
      ],
      color: "orange"
    }
  ];

  const selected = patterns.find(p => p.id === selectedPattern) || patterns[3];

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
      <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 text-center">
        Interactive Flow Pattern Diagram (Vertical Upward Flow)
      </h4>

      {/* Flow Pattern Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {patterns.map((pattern) => (
          <button
            key={pattern.id}
            onClick={() => setSelectedPattern(pattern.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedPattern === pattern.id
                ? `bg-${pattern.color}-500/20 border border-${pattern.color}-500/50 text-${pattern.color}-400`
                : "bg-slate-800/50 border border-slate-700 text-gray-400 hover:border-slate-600"
            }`}
            style={{
              backgroundColor: selectedPattern === pattern.id ? `rgba(var(--${pattern.color}-rgb), 0.2)` : undefined,
              borderColor: selectedPattern === pattern.id ? `rgba(var(--${pattern.color}-rgb), 0.5)` : undefined,
            }}
          >
            {pattern.name}
          </button>
        ))}
      </div>

      {/* Visual representation */}
      <div className="relative bg-slate-900/80 rounded-xl p-6 mb-6">
        <div className="flex justify-center items-end h-72">
          <svg viewBox="0 0 400 280" className="w-full max-w-md">
            {/* Tube outline */}
            <rect x="150" y="10" width="100" height="260" rx="10" fill="none" stroke="#64748b" strokeWidth="3" />

            {/* Flow direction arrow */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
              </marker>
            </defs>
            <line x1="120" y1="250" x2="120" y2="30" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="110" y="140" fill="#64748b" fontSize="12" textAnchor="middle" transform="rotate(-90, 110, 140)">Flow Direction</text>

            {/* Pattern-specific visualization */}
            {selectedPattern === "bubbly" && (
              <g>
                {/* Blue liquid background */}
                <rect x="155" y="15" width="90" height="250" fill="#3b82f6" fillOpacity="0.3" />
                {/* Bubbles - fixed positions for consistent rendering */}
                <circle cx="175" cy="30" r="4" fill="white" fillOpacity="0.8" />
                <circle cx="210" cy="35" r="5" fill="white" fillOpacity="0.8" />
                <circle cx="225" cy="28" r="3" fill="white" fillOpacity="0.8" />
                <circle cx="190" cy="55" r="6" fill="white" fillOpacity="0.8" />
                <circle cx="220" cy="60" r="4" fill="white" fillOpacity="0.8" />
                <circle cx="168" cy="65" r="5" fill="white" fillOpacity="0.8" />
                <circle cx="200" cy="85" r="5" fill="white" fillOpacity="0.8" />
                <circle cx="235" cy="90" r="4" fill="white" fillOpacity="0.8" />
                <circle cx="175" cy="100" r="6" fill="white" fillOpacity="0.8" />
                <circle cx="215" cy="110" r="4" fill="white" fillOpacity="0.8" />
                <circle cx="185" cy="125" r="5" fill="white" fillOpacity="0.8" />
                <circle cx="230" cy="130" r="3" fill="white" fillOpacity="0.8" />
                <circle cx="170" cy="145" r="4" fill="white" fillOpacity="0.8" />
                <circle cx="205" cy="155" r="6" fill="white" fillOpacity="0.8" />
                <circle cx="225" cy="165" r="4" fill="white" fillOpacity="0.8" />
                <circle cx="180" cy="180" r="5" fill="white" fillOpacity="0.8" />
                <circle cx="210" cy="190" r="4" fill="white" fillOpacity="0.8" />
                <circle cx="168" cy="200" r="5" fill="white" fillOpacity="0.8" />
                <circle cx="235" cy="210" r="3" fill="white" fillOpacity="0.8" />
                <circle cx="195" cy="225" r="6" fill="white" fillOpacity="0.8" />
                <circle cx="220" cy="235" r="4" fill="white" fillOpacity="0.8" />
                <circle cx="175" cy="245" r="5" fill="white" fillOpacity="0.8" />
                <circle cx="200" cy="255" r="4" fill="white" fillOpacity="0.8" />
              </g>
            )}

            {selectedPattern === "slug" && (
              <g>
                {/* Liquid background */}
                <rect x="155" y="15" width="90" height="250" fill="#3b82f6" fillOpacity="0.3" />
                {/* Taylor bubbles */}
                <ellipse cx="200" cy="60" rx="35" ry="45" fill="white" fillOpacity="0.7" />
                <ellipse cx="200" cy="180" rx="35" ry="50" fill="white" fillOpacity="0.7" />
                {/* Small bubbles in liquid slugs */}
                <circle cx="180" cy="125" r="4" fill="white" fillOpacity="0.6" />
                <circle cx="210" cy="130" r="3" fill="white" fillOpacity="0.6" />
                <circle cx="195" cy="240" r="4" fill="white" fillOpacity="0.6" />
              </g>
            )}

            {selectedPattern === "churn" && (
              <g>
                {/* Chaotic liquid distribution */}
                <rect x="155" y="15" width="90" height="250" fill="#3b82f6" fillOpacity="0.2" />
                {/* Irregular liquid chunks */}
                <path d="M160 40 Q180 30 190 50 Q200 70 195 90 Q180 100 165 85 Q155 70 160 40" fill="#3b82f6" fillOpacity="0.5" />
                <path d="M200 100 Q230 90 235 120 Q240 150 220 160 Q200 165 195 140 Q190 120 200 100" fill="#3b82f6" fillOpacity="0.5" />
                <path d="M165 170 Q185 160 200 180 Q210 200 190 220 Q170 230 160 210 Q155 190 165 170" fill="#3b82f6" fillOpacity="0.5" />
                {/* Scattered bubbles */}
                <circle cx="220" cy="50" r="8" fill="white" fillOpacity="0.6" />
                <circle cx="175" cy="130" r="10" fill="white" fillOpacity="0.6" />
                <circle cx="215" cy="230" r="7" fill="white" fillOpacity="0.6" />
              </g>
            )}

            {selectedPattern === "annular" && (
              <g>
                {/* Vapor core */}
                <rect x="165" y="15" width="70" height="250" fill="white" fillOpacity="0.6" />
                {/* Liquid film on walls */}
                <rect x="155" y="15" width="10" height="250" fill="#3b82f6" fillOpacity="0.5" />
                <rect x="235" y="15" width="10" height="250" fill="#3b82f6" fillOpacity="0.5" />
                {/* Entrained droplets in core */}
                <circle cx="190" cy="40" r="2" fill="#3b82f6" fillOpacity="0.6" />
                <circle cx="210" cy="80" r="2.5" fill="#3b82f6" fillOpacity="0.6" />
                <circle cx="185" cy="120" r="2" fill="#3b82f6" fillOpacity="0.6" />
                <circle cx="215" cy="160" r="2" fill="#3b82f6" fillOpacity="0.6" />
                <circle cx="195" cy="200" r="2.5" fill="#3b82f6" fillOpacity="0.6" />
                <circle cx="205" cy="240" r="2" fill="#3b82f6" fillOpacity="0.6" />
                {/* Interfacial waves */}
                <path d="M165 50 Q170 48 165 46 Q160 44 165 42" stroke="#3b82f6" strokeWidth="2" fill="none" />
                <path d="M235 100 Q230 98 235 96 Q240 94 235 92" stroke="#3b82f6" strokeWidth="2" fill="none" />
                <path d="M165 180 Q170 178 165 176 Q160 174 165 172" stroke="#3b82f6" strokeWidth="2" fill="none" />
              </g>
            )}

            {selectedPattern === "mist" && (
              <g>
                {/* Vapor background */}
                <rect x="155" y="15" width="90" height="250" fill="white" fillOpacity="0.5" />
                {/* Liquid droplets - fixed positions */}
                <circle cx="175" cy="25" r="2" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="215" cy="30" r="1.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="195" cy="40" r="2.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="230" cy="50" r="1.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="170" cy="60" r="2" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="205" cy="70" r="1.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="225" cy="80" r="2" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="180" cy="90" r="2.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="210" cy="100" r="1.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="168" cy="110" r="2" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="235" cy="120" r="1.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="190" cy="130" r="2" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="220" cy="140" r="2.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="175" cy="150" r="1.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="200" cy="160" r="2" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="230" cy="170" r="1.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="185" cy="180" r="2.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="215" cy="190" r="2" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="170" cy="200" r="1.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="225" cy="210" r="2" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="195" cy="220" r="2.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="235" cy="230" r="1.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="180" cy="240" r="2" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="210" cy="250" r="1.5" fill="#3b82f6" fillOpacity="0.7" />
                <circle cx="168" cy="260" r="2" fill="#3b82f6" fillOpacity="0.7" />
              </g>
            )}

            {/* Labels */}
            <text x="300" y="140" fill="#94a3b8" fontSize="14" fontWeight="bold">{selected.name}</text>
            <text x="300" y="160" fill="#64748b" fontSize="11">Quality: {selected.quality}</text>
          </svg>
        </div>
      </div>

      {/* Pattern Details */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/50">
          <h5 className={`text-${selected.color}-400 font-bold mb-3`} style={{ color: selected.color === 'cyan' ? '#22d3ee' : selected.color === 'blue' ? '#60a5fa' : selected.color === 'emerald' ? '#34d399' : selected.color === 'orange' ? '#fb923c' : '#a78bfa' }}>Description</h5>
          <p className="text-sm text-gray-400">{selected.description}</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/50">
          <h5 className="text-white font-bold mb-3">Characteristics</h5>
          <ul className="space-y-1 text-sm text-gray-400">
            {selected.characteristics.map((char, idx) => (
              <li key={idx}>&bull; {char}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Quality Variation Calculator
function QualityVariationCalculator() {
  const [massFlux, setMassFlux] = useState(500); // kg/m2s
  const [heatFlux, setHeatFlux] = useState(200); // kW/m2
  const [diameter, setDiameter] = useState(10); // mm
  const [length, setLength] = useState(2); // m
  const [subcooling, setSubcooling] = useState(10); // K
  const [pressure, setPressure] = useState(1); // bar

  // Simplified water properties at saturation
  const getWaterProps = (p: number) => {
    // Approximate correlations for water
    const Tsat = 100 + 20 * NativeMath.log(p); // Simplified saturation temperature
    const hfg = 2257 - 2.5 * (Tsat - 100); // kJ/kg, approximate
    const cpl = 4.18; // kJ/kgK
    return { Tsat, hfg, cpl };
  };

  const props = getWaterProps(pressure);
  const D = diameter / 1000; // m
  const A = NativeMath.PI * D * D / 4; // m2
  const mdot = massFlux * A; // kg/s

  // Energy balance for quality
  // x(z) = (q''*pi*D*z)/(mdot*hfg) - (cpl*dTsub)/hfg
  const qFlux = heatFlux * 1000; // W/m2

  // Location where x = 0 (ONB)
  const zONB = (props.cpl * subcooling * mdot) / (qFlux * NativeMath.PI * D);

  // Quality at exit
  const xExit = (qFlux * NativeMath.PI * D * length) / (mdot * props.hfg * 1000) - (props.cpl * subcooling) / props.hfg;

  // Quality profile at various locations
  const calculateQuality = (z: number) => {
    if (z < 0) return -props.cpl * subcooling / props.hfg;
    const x = (qFlux * NativeMath.PI * D * z) / (mdot * props.hfg * 1000) - (props.cpl * subcooling) / props.hfg;
    return NativeMath.min(NativeMath.max(x, -props.cpl * subcooling / props.hfg), 1);
  };

  // Dryout location (critical quality ~ 0.8 for simplicity)
  const xCrit = 0.8;
  const zDryout = ((xCrit + props.cpl * subcooling / props.hfg) * mdot * props.hfg * 1000) / (qFlux * NativeMath.PI * D);

  return (
    <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
      <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6 text-center">
        Quality Variation Calculator
      </h4>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-xs text-gray-500">Mass Flux G (kg/m2s)</label>
          <input
            type="number"
            value={massFlux}
            onChange={(e) => setMassFlux(Number(e.target.value))}
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500">Heat Flux q'' (kW/m2)</label>
          <input
            type="number"
            value={heatFlux}
            onChange={(e) => setHeatFlux(Number(e.target.value))}
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500">Tube Diameter D (mm)</label>
          <input
            type="number"
            value={diameter}
            onChange={(e) => setDiameter(Number(e.target.value))}
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500">Tube Length L (m)</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500">Inlet Subcooling (K)</label>
          <input
            type="number"
            value={subcooling}
            onChange={(e) => setSubcooling(Number(e.target.value))}
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500">Pressure (bar)</label>
          <input
            type="number"
            value={pressure}
            onChange={(e) => setPressure(Number(e.target.value))}
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm"
          />
        </div>
      </div>

      {/* Quality Profile Visualization */}
      <div className="relative bg-slate-900/80 rounded-xl p-4 mb-4">
        <svg viewBox="0 0 500 200" className="w-full">
          {/* Axes */}
          <line x1="50" y1="170" x2="470" y2="170" stroke="#64748b" strokeWidth="2" />
          <line x1="50" y1="170" x2="50" y2="20" stroke="#64748b" strokeWidth="2" />

          {/* Axis labels */}
          <text x="260" y="195" fill="#94a3b8" fontSize="12" textAnchor="middle">Axial Position z (m)</text>
          <text x="15" y="95" fill="#94a3b8" fontSize="12" textAnchor="middle" transform="rotate(-90, 15, 95)">Quality x</text>

          {/* Y-axis scale */}
          <text x="45" y="175" fill="#64748b" fontSize="10" textAnchor="end">-0.1</text>
          <text x="45" y="125" fill="#64748b" fontSize="10" textAnchor="end">0.5</text>
          <text x="45" y="75" fill="#64748b" fontSize="10" textAnchor="end">1.0</text>
          <line x1="48" y1="120" x2="52" y2="120" stroke="#64748b" strokeWidth="1" />
          <line x1="48" y1="70" x2="52" y2="70" stroke="#64748b" strokeWidth="1" />

          {/* X-axis scale */}
          <text x="50" y="185" fill="#64748b" fontSize="10" textAnchor="middle">0</text>
          <text x="260" y="185" fill="#64748b" fontSize="10" textAnchor="middle">{(length/2).toFixed(1)}</text>
          <text x="470" y="185" fill="#64748b" fontSize="10" textAnchor="middle">{length.toFixed(1)}</text>

          {/* Quality curve */}
          <path
            d={`M 50 ${170 - (calculateQuality(0) + 0.1) * 100} ${
              Array.from({ length: 50 }, (_, i) => {
                const z = (i / 49) * length;
                const x = calculateQuality(z);
                const px = 50 + (z / length) * 420;
                const py = 170 - (x + 0.1) * 100;
                return `L ${px} ${NativeMath.max(20, NativeMath.min(170, py))}`;
              }).join(' ')
            }`}
            fill="none"
            stroke="#22d3ee"
            strokeWidth="3"
          />

          {/* x = 0 line */}
          <line x1="50" y1="160" x2="470" y2="160" stroke="#64748b" strokeWidth="1" strokeDasharray="4,4" />
          <text x="480" y="163" fill="#64748b" fontSize="9">x=0</text>

          {/* ONB point */}
          {zONB > 0 && zONB < length && (
            <>
              <circle cx={50 + (zONB / length) * 420} cy="160" r="5" fill="#3b82f6" />
              <text x={50 + (zONB / length) * 420} y="150" fill="#3b82f6" fontSize="10" textAnchor="middle">ONB</text>
            </>
          )}

          {/* Dryout line (x = 0.8) */}
          <line x1="50" y1="80" x2="470" y2="80" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,4" />
          <text x="480" y="83" fill="#ef4444" fontSize="9">x=0.8</text>

          {/* Dryout point */}
          {zDryout > 0 && zDryout < length && (
            <>
              <circle cx={50 + (zDryout / length) * 420} cy="80" r="5" fill="#ef4444" />
              <text x={50 + (zDryout / length) * 420} y="70" fill="#ef4444" fontSize="10" textAnchor="middle">Dryout</text>
            </>
          )}
        </svg>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-4 gap-4 text-center">
        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <p className="text-xs text-gray-500 mb-1">ONB Location</p>
          <p className="text-lg font-bold text-blue-400">
            {zONB > 0 && zONB < length ? `${zONB.toFixed(3)} m` : zONB <= 0 ? "Inlet" : "> L"}
          </p>
        </div>
        <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
          <p className="text-xs text-gray-500 mb-1">Exit Quality</p>
          <p className="text-lg font-bold text-cyan-400">{xExit.toFixed(3)}</p>
        </div>
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
          <p className="text-xs text-gray-500 mb-1">Dryout Location</p>
          <p className="text-lg font-bold text-red-400">
            {zDryout > 0 && zDryout < length ? `${zDryout.toFixed(3)} m` : zDryout <= 0 ? "< Inlet" : "No dryout"}
          </p>
        </div>
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <p className="text-xs text-gray-500 mb-1">Mass Flow Rate</p>
          <p className="text-lg font-bold text-emerald-400">{(mdot * 1000).toFixed(2)} g/s</p>
        </div>
      </div>
    </div>
  );
}

// Two-Phase Pressure Drop Calculator (Lockhart-Martinelli)
function PressureDropCalculator() {
  const [massFlux, setMassFlux] = useState(500); // kg/m2s
  const [quality, setQuality] = useState(0.2);
  const [diameter, setDiameter] = useState(10); // mm
  const [length, setLength] = useState(1); // m

  // Simplified water properties at 1 atm
  const rhoL = 958; // kg/m3
  const rhoV = 0.6; // kg/m3
  const muL = 0.000282; // Pa.s
  const muV = 0.0000123; // Pa.s

  const D = diameter / 1000; // m
  const G = massFlux; // kg/m2s
  const x = quality;

  // Liquid-only and vapor-only Reynolds numbers
  const ReLO = G * D / muL;
  const ReVO = G * D / muV;

  // Friction factors (Blasius)
  const fLO = 0.079 * NativeMath.pow(ReLO, -0.25);
  const fVO = 0.079 * NativeMath.pow(ReVO, -0.25);

  // Single-phase pressure gradients
  const dPdzL = 2 * fLO * G * G / (rhoL * D);
  const dPdzV = 2 * fVO * G * G / (rhoV * D);

  // Martinelli parameter
  const Xtt = NativeMath.pow((1 - x) / x, 0.9) * NativeMath.pow(rhoV / rhoL, 0.5) * NativeMath.pow(muL / muV, 0.1);

  // Two-phase multipliers (Chisholm C = 20 for turbulent-turbulent)
  const C = 20;
  const phi2L = 1 + C / Xtt + 1 / (Xtt * Xtt);
  const phi2V = 1 + C * Xtt + Xtt * Xtt;

  // Two-phase pressure gradient
  const dPdzTP_L = phi2L * dPdzL * NativeMath.pow(1 - x, 2);
  const dPdzTP_V = phi2V * dPdzV * NativeMath.pow(x, 2);

  // Homogeneous model for comparison
  const rhoH = 1 / (x / rhoV + (1 - x) / rhoL);
  const muH = x * muV + (1 - x) * muL;
  const ReH = G * D / muH;
  const fH = 0.079 * NativeMath.pow(ReH, -0.25);
  const dPdzH = 2 * fH * G * G / (rhoH * D);

  // Total pressure drops
  const dPtotal_LM = dPdzTP_L * length;
  const dPtotal_H = dPdzH * length;

  return (
    <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
      <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6 text-center">
        Two-Phase Pressure Drop Calculator
      </h4>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="text-xs text-gray-500">Mass Flux G (kg/m2s)</label>
          <input
            type="number"
            value={massFlux}
            onChange={(e) => setMassFlux(Number(e.target.value))}
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500">Quality x (-)</label>
          <input
            type="number"
            value={quality}
            onChange={(e) => setQuality(NativeMath.max(0.01, NativeMath.min(0.99, Number(e.target.value))))}
            step="0.05"
            min="0.01"
            max="0.99"
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500">Diameter D (mm)</label>
          <input
            type="number"
            value={diameter}
            onChange={(e) => setDiameter(Number(e.target.value))}
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500">Length L (m)</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full mt-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm"
          />
        </div>
      </div>

      {/* Intermediate Results */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-slate-900/50">
          <h5 className="text-purple-400 font-bold mb-2 text-sm">Martinelli Parameter</h5>
          <p className="text-2xl font-bold text-white"><Math tex={`X_{tt} = ${Xtt.toFixed(3)}`} /></p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/50">
          <h5 className="text-cyan-400 font-bold mb-2 text-sm">Liquid Multiplier</h5>
          <p className="text-2xl font-bold text-white"><Math tex={`\\phi_L^2 = ${phi2L.toFixed(2)}`} /></p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/50">
          <h5 className="text-emerald-400 font-bold mb-2 text-sm">Homogeneous Density</h5>
          <p className="text-2xl font-bold text-white"><Math tex={`\\rho_H = ${rhoH.toFixed(1)}`} /> kg/m3</p>
        </div>
      </div>

      {/* Pressure Drop Results */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <h5 className="text-purple-400 font-bold mb-2">Lockhart-Martinelli Method</h5>
          <p className="text-sm text-gray-400 mb-2">Separated flow model with Chisholm C = 20</p>
          <p className="text-3xl font-bold text-white">{(dPtotal_LM / 1000).toFixed(2)} kPa</p>
          <p className="text-xs text-gray-500 mt-1">dP/dz = {(dPdzTP_L).toFixed(0)} Pa/m</p>
        </div>
        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
          <h5 className="text-cyan-400 font-bold mb-2">Homogeneous Model</h5>
          <p className="text-sm text-gray-400 mb-2">Equal velocity assumption</p>
          <p className="text-3xl font-bold text-white">{(dPtotal_H / 1000).toFixed(2)} kPa</p>
          <p className="text-xs text-gray-500 mt-1">dP/dz = {(dPdzH).toFixed(0)} Pa/m</p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Note: Lockhart-Martinelli typically gives higher (more conservative) pressure drop predictions than homogeneous model.
      </p>
    </div>
  );
}

export default function FlowBoiling() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Flow Boiling in Tubes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            관 내부 유동비등은 발전소 보일러, 원자로, 증발기에서 핵심적인 열전달 현상입니다.
            2상 유동 패턴, 건도 변화, 압력강하 및 건조점(Dryout) 메커니즘을 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 유동비등의 물리적 특성 */}
          <SectionDivider number="1" title="Physics of Flow Boiling" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-cyan-400">유동비등(Flow Boiling)</strong>은 관 내부에서 강제 유동하는 액체가
              가열되어 끓는 현상입니다. Pool boiling과 달리 <strong className="text-white">유동 효과</strong>와
              <strong className="text-white"> 비등 효과</strong>가 복합적으로 작용하며, 축방향을 따라
              연속적인 상변화가 발생합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Pool Boiling vs. Flow Boiling: Fundamental Differences
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-3">Pool Boiling</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; Stationary liquid (natural convection)</li>
                    <li>&bull; Spatially uniform conditions</li>
                    <li>&bull; Single heat transfer mechanism dominant</li>
                    <li>&bull; CHF by hydrodynamic instability</li>
                    <li>&bull; Simple analysis possible</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-3">Flow Boiling</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; Forced convection (externally driven flow)</li>
                    <li>&bull; Axially varying quality and flow pattern</li>
                    <li>&bull; Convection and boiling effects combine</li>
                    <li>&bull; CHF by DNB (low x) or Dryout (high x)</li>
                    <li>&bull; Complex 2D/3D phenomena</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-800/50">
                <h5 className="text-white font-bold mb-2">Key Parameters in Flow Boiling</h5>
                <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
                  <div>
                    <p className="text-cyan-400 font-mono">G</p>
                    <p className="text-gray-400">Mass flux (kg/m2s)</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-mono">x</p>
                    <p className="text-gray-400">Quality (-)</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-mono">q''</p>
                    <p className="text-gray-400">Heat flux (W/m2)</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-mono">P</p>
                    <p className="text-gray-400">Pressure (Pa)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. 건도 (Quality) 정의와 계산 */}
          <SectionDivider number="2" title="Vapor Quality: Definition and Calculation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">건도(Quality, x)</strong>는 2상 유동에서 증기의 질량 분율로,
              유동비등에서 가장 중요한 국소 변수입니다. 열역학적 건도와 실제 건도를 구분해야 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <EquationBox label="Thermodynamic Quality Definition" accent="cyan">
              <Math tex={`x = \\frac{\\dot{m}_v}{\\dot{m}_v + \\dot{m}_l} = \\frac{\\dot{m}_v}{\\dot{m}_{total}}`} display />
            </EquationBox>

            <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <p className="text-2xl font-bold text-blue-400">x &lt; 0</p>
                <p className="text-sm text-gray-400">Subcooled liquid<br />(thermodynamic subcooling)</p>
              </div>
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <p className="text-2xl font-bold text-cyan-400">0 &lt; x &lt; 1</p>
                <p className="text-sm text-gray-400">Two-phase mixture<br />(saturated boiling)</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-2xl font-bold text-emerald-400">x &gt; 1</p>
                <p className="text-sm text-gray-400">Superheated vapor<br />(post-CHF region)</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-6">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                Quality from Energy Balance
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                For constant heat flux and uniform heating, quality varies linearly with axial position:
              </p>
              <EquationBox label="Energy balance along tube" accent="blue">
                <Math tex={`x(z) = \\frac{q'' \\cdot \\pi D \\cdot z}{\\dot{m} \\cdot h_{fg}} - \\frac{c_{p,l} \\Delta T_{sub}}{h_{fg}}`} display />
              </EquationBox>
              <div className="mt-4 text-sm text-gray-500 space-y-1">
                <p>&bull; <Math tex="z" />: Axial distance from inlet</p>
                <p>&bull; <Math tex="\Delta T_{sub} = T_{sat} - T_{in}" />: Inlet subcooling</p>
                <p>&bull; <Math tex="h_{fg}" />: Latent heat of vaporization</p>
                <p>&bull; Assumes equilibrium thermodynamics (no slip)</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Equilibrium vs. Actual Quality" accent="yellow" icon="!">
              <p className="mb-2">
                <strong className="text-white">Thermodynamic (Equilibrium) Quality</strong> assumes thermal equilibrium
                between phases. In reality:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">Subcooled boiling:</strong> x_actual &gt; x_equilibrium (bubbles exist even at x &lt; 0)</li>
                <li>&bull; <strong className="text-white">Post-dryout:</strong> x_actual &lt; x_equilibrium (non-equilibrium effects)</li>
                <li>&bull; Actual quality requires detailed void fraction measurements</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* Interactive Quality Calculator */}
          <motion.div {...stagger} className="mb-12">
            <QualityVariationCalculator />
          </motion.div>

          {/* 3. 유동 패턴 (Flow Patterns) */}
          <SectionDivider number="3" title="Two-Phase Flow Patterns" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              수직 상향 유동에서 건도가 증가함에 따라 <strong className="text-white">유동 패턴(Flow Pattern)</strong>이
              연속적으로 변화합니다. 각 패턴은 고유한 열전달 및 압력강하 특성을 가집니다.
            </p>
          </motion.div>

          {/* Interactive Flow Pattern Visualization */}
          <motion.div {...stagger} className="mb-8">
            <FlowPatternVisualization />
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-6">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                Flow Pattern Maps: Taitel-Dukler Criteria
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Flow pattern transitions can be predicted using dimensionless coordinates.
                The Taitel-Dukler (1976) model is widely used for vertical upward flow:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-cyan-400 font-bold mb-2">Bubbly to Slug Transition</h5>
                  <Math tex={`\\alpha > 0.25 \\quad \\text{(void fraction criterion)}`} display />
                  <p className="text-xs text-gray-500 mt-2">Bubble coalescence begins when packing density exceeds limit</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-emerald-400 font-bold mb-2">Churn to Annular Transition</h5>
                  <Math tex={`j_g^* = \\frac{j_g}{\\sqrt{gD(\\rho_l-\\rho_g)/\\rho_g}} > 3.1`} display />
                  <p className="text-xs text-gray-500 mt-2">Vapor velocity sufficient to support annular film</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. 유동비등 영역 */}
          <SectionDivider number="4" title="Flow Boiling Regimes and Heat Transfer" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              관 내부 유동비등은 열역학적 상태에 따라 구분되며, 각 영역에서
              지배적인 열전달 메커니즘이 다릅니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                Flow Boiling Regimes Along Heated Channel
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400">Regime</th>
                      <th className="text-left py-3 px-4 text-gray-400">Condition</th>
                      <th className="text-left py-3 px-4 text-gray-400">Dominant Mechanism</th>
                      <th className="text-left py-3 px-4 text-gray-400">h range</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-blue-400">Single-Phase Liquid</td>
                      <td className="py-3 px-4"><Math tex="T_w < T_{sat}" /></td>
                      <td className="py-3 px-4 text-gray-400">Forced convection</td>
                      <td className="py-3 px-4 text-gray-400">1-10 kW/m2K</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Subcooled Boiling</td>
                      <td className="py-3 px-4"><Math tex="T_w > T_{sat}, T_b < T_{sat}" /></td>
                      <td className="py-3 px-4 text-gray-400">Nucleate boiling + convection</td>
                      <td className="py-3 px-4 text-gray-400">10-50 kW/m2K</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-emerald-400">Saturated Nucleate</td>
                      <td className="py-3 px-4"><Math tex="0 < x < x_{NVG}" /></td>
                      <td className="py-3 px-4 text-gray-400">Nucleate boiling dominant</td>
                      <td className="py-3 px-4 text-gray-400">20-100 kW/m2K</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-emerald-400">Forced Convective</td>
                      <td className="py-3 px-4"><Math tex="x_{NVG} < x < x_{crit}" /></td>
                      <td className="py-3 px-4 text-gray-400">Thin-film evaporation (annular)</td>
                      <td className="py-3 px-4 text-gray-400">10-50 kW/m2K</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-red-400">Dryout / CHF</td>
                      <td className="py-3 px-4"><Math tex="x = x_{crit}" /></td>
                      <td className="py-3 px-4 text-gray-400">Film breakdown</td>
                      <td className="py-3 px-4 text-gray-400">Sharp h drop</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-orange-400">Post-Dryout (Mist)</td>
                      <td className="py-3 px-4"><Math tex="x > x_{crit}" /></td>
                      <td className="py-3 px-4 text-gray-400">Vapor convection + droplets</td>
                      <td className="py-3 px-4 text-gray-400">0.5-5 kW/m2K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Subcooled Boiling: Nuclear Reactor Normal Operation" accent="blue" icon="N">
              <p className="mb-2">
                PWR (Pressurized Water Reactor) operates predominantly in <strong className="text-white">subcooled boiling</strong> regime:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; Bulk temperature below saturation (subcooled)</li>
                <li>&bull; Wall temperature above saturation (local boiling)</li>
                <li>&bull; Bubbles condense in subcooled bulk (no net vapor generation)</li>
                <li>&bull; Enhanced heat transfer without bulk boiling instabilities</li>
                <li>&bull; Typical PWR conditions: P ~ 155 bar, Tin ~ 290C, Tout ~ 325C</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 5. Chen Correlation 상세 */}
          <SectionDivider number="5" title="Chen Correlation: Superposition Model" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Chen (1966) correlation은 유동비등에서 가장 널리 사용되는 상관식으로,
              <strong className="text-white"> 대류 효과</strong>와 <strong className="text-white">비등 효과</strong>를
              중첩(superposition)하여 전체 열전달 계수를 예측합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 text-center">
                Chen Correlation Structure
              </h4>

              <EquationBox label="Total Two-Phase Heat Transfer Coefficient" accent="cyan">
                <Math tex={`h_{tp} = F \\cdot h_{lo} + S \\cdot h_{nb}`} display />
              </EquationBox>

              <div className="mt-6 space-y-6">
                {/* Convective contribution */}
                <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-3">Convective Contribution: F factor</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Enhancement due to accelerated liquid flow (vapor increases liquid velocity):
                  </p>
                  <Math tex={`h_{lo} = 0.023 \\, Re_{lo}^{0.8} \\, Pr_l^{0.4} \\, \\frac{k_l}{D}`} display />
                  <Math tex={`F = \\begin{cases} 1 & \\text{if } X_{tt}^{-1} < 0.1 \\\\ 2.35(X_{tt}^{-1} + 0.213)^{0.736} & \\text{if } X_{tt}^{-1} \\geq 0.1 \\end{cases}`} display />
                  <p className="text-xs text-gray-500 mt-2">F increases with quality as vapor accelerates liquid film</p>
                </div>

                {/* Boiling contribution */}
                <div className="p-4 rounded-xl bg-slate-900/50 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-3">Nucleate Boiling Contribution: S factor</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    Forster-Zuber correlation with suppression due to convective effects:
                  </p>
                  <Math tex={`h_{nb} = 0.00122 \\left[ \\frac{k_l^{0.79} c_{p,l}^{0.45} \\rho_l^{0.49}}{\\sigma^{0.5} \\mu_l^{0.29} h_{fg}^{0.24} \\rho_v^{0.24}} \\right] \\Delta T_{sat}^{0.24} \\Delta P_{sat}^{0.75}`} display />
                  <Math tex={`S = \\frac{1}{1 + 2.53 \\times 10^{-6} Re_{tp}^{1.17}}, \\quad Re_{tp} = Re_{lo} \\cdot F^{1.25}`} display />
                  <p className="text-xs text-gray-500 mt-2">S decreases at high mass flux (nucleation suppressed by high velocity)</p>
                </div>
              </div>

              {/* Martinelli parameter */}
              <div className="mt-6 p-4 rounded-xl bg-slate-800/50">
                <h5 className="text-white font-bold mb-2">Martinelli Parameter</h5>
                <Math tex={`X_{tt} = \\left( \\frac{1-x}{x} \\right)^{0.9} \\left( \\frac{\\rho_v}{\\rho_l} \\right)^{0.5} \\left( \\frac{\\mu_l}{\\mu_v} \\right)^{0.1}`} display />
                <p className="text-xs text-gray-500 mt-2">
                  Xtt represents ratio of liquid to vapor frictional pressure gradients (turbulent-turbulent regime)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Physical Interpretation of Chen Correlation" accent="emerald" icon="P">
              <div className="space-y-3">
                <p><strong className="text-cyan-400">F factor (Enhancement):</strong> In annular flow, vapor core accelerates liquid film, increasing effective Reynolds number. F &gt; 1 always.</p>
                <p><strong className="text-blue-400">S factor (Suppression):</strong> High liquid velocity suppresses bubble growth and departure. S &lt; 1 always, approaches 0 at very high G.</p>
                <p><strong className="text-white">At low x:</strong> Nucleate boiling dominant (S large, F small)</p>
                <p><strong className="text-white">At high x:</strong> Convective evaporation dominant (F large, S small)</p>
              </div>
            </InsightCard>
          </motion.div>

          {/* 6. 압력강하 */}
          <SectionDivider number="6" title="Two-Phase Pressure Drop" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              2상 유동에서 압력강하는 단상 유동보다 훨씬 크며, 시스템 설계에서 중요한 고려사항입니다.
              <strong className="text-white"> 마찰</strong>, <strong className="text-white">가속</strong>,
              <strong className="text-white"> 중력</strong> 성분으로 구성됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <EquationBox label="Total Two-Phase Pressure Gradient" accent="purple">
              <Math tex={`\\left( \\frac{dP}{dz} \\right)_{total} = \\left( \\frac{dP}{dz} \\right)_{fric} + \\left( \\frac{dP}{dz} \\right)_{acc} + \\left( \\frac{dP}{dz} \\right)_{grav}`} display />
            </EquationBox>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                Lockhart-Martinelli Correlation (Separated Flow Model)
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-purple-400 font-bold mb-2">Two-Phase Multiplier</h5>
                  <Math tex={`\\left( \\frac{dP}{dz} \\right)_{fric,tp} = \\phi_l^2 \\cdot \\left( \\frac{dP}{dz} \\right)_{l}`} display />
                  <Math tex={`\\phi_l^2 = 1 + \\frac{C}{X_{tt}} + \\frac{1}{X_{tt}^2}`} display />
                  <p className="text-xs text-gray-500 mt-2">C = 20 for turbulent liquid and turbulent vapor</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/50">
                    <h5 className="text-cyan-400 font-bold mb-2">Acceleration Component</h5>
                    <Math tex={`\\left( \\frac{dP}{dz} \\right)_{acc} = G^2 \\frac{d}{dz} \\left[ \\frac{x^2}{\\rho_v \\alpha} + \\frac{(1-x)^2}{\\rho_l (1-\\alpha)} \\right]`} display />
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/50">
                    <h5 className="text-emerald-400 font-bold mb-2">Gravitational Component</h5>
                    <Math tex={`\\left( \\frac{dP}{dz} \\right)_{grav} = g \\left[ \\alpha \\rho_v + (1-\\alpha) \\rho_l \\right] \\sin\\theta`} display />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Pressure Drop Calculator */}
          <motion.div {...stagger} className="mb-12">
            <PressureDropCalculator />
          </motion.div>

          {/* 7. Dryout 메커니즘 */}
          <SectionDivider number="7" title="Dryout and Critical Quality" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              유동비등에서 <strong className="text-red-400">Dryout</strong>은 환형 유동에서 액막이 완전히
              증발하여 벽면이 증기에 직접 노출되는 현상입니다. Pool boiling CHF와 다른 메커니즘입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                CHF Mechanisms in Flow Boiling
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-3">DNB (Departure from Nucleate Boiling)</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    Low quality (x &lt; 0.3), high heat flux conditions
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; Similar to pool boiling CHF mechanism</li>
                    <li>&bull; Bubble crowding on heated surface</li>
                    <li>&bull; Vapor blanket formation</li>
                    <li>&bull; Sharp temperature excursion</li>
                    <li>&bull; Dominant in PWR conditions</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-3">Dryout</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    High quality (x &gt; 0.3), annular flow conditions
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; Gradual thinning of liquid film</li>
                    <li>&bull; Film breakdown and evaporation</li>
                    <li>&bull; Entrainment exceeds deposition</li>
                    <li>&bull; More gradual temperature rise</li>
                    <li>&bull; Dominant in BWR conditions</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-800/50">
                <h5 className="text-white font-bold mb-3">Critical Quality Correlation (Katto-Ohno)</h5>
                <Math tex={`x_{crit} = f \\left( \\frac{\\rho_v}{\\rho_l}, \\frac{L_{boil}}{D}, We, Bo \\right)`} display />
                <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm text-gray-400">
                  <div>
                    <Math tex={`We = \\frac{G^2 L_{boil}}{\\rho_l \\sigma}`} /> (Weber number)
                  </div>
                  <div>
                    <Math tex={`Bo = \\frac{q''}{G h_{fg}}`} /> (Boiling number)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Nuclear Reactor Safety: DNBR and CPR" accent="red" icon="!">
              <p className="mb-2">
                CHF is the <strong className="text-white">primary thermal safety limit</strong> in nuclear reactors:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">PWR:</strong> DNBR (DNB Ratio) &gt; 1.3 required, uses W-3 or EPRI correlations</li>
                <li>&bull; <strong className="text-white">BWR:</strong> CPR (Critical Power Ratio) &gt; 1.2 required, uses GEXL correlation</li>
                <li>&bull; Safety analysis codes: RELAP, TRACE, MARS-K</li>
                <li>&bull; Thermal margins ensure fuel integrity during transients</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 8. MFTEL 연구 및 응용 */}
          <SectionDivider number="8" title="MFTEL Research: Advanced Flow Boiling" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                MFTEL Flow Boiling Research Applications
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-3">Immersion Cooling for Data Centers</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    High-performance computing requires efficient thermal management:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; Dielectric fluid two-phase cooling</li>
                    <li>&bull; GPU/TPU power densities &gt; 1000 W/cm2</li>
                    <li>&bull; Microchannel flow boiling enhancement</li>
                    <li>&bull; Up to 90% energy reduction vs air cooling</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-3">SMR (Small Modular Reactor) Safety</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    Next-generation reactor thermal-hydraulic design:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; Natural circulation flow boiling</li>
                    <li>&bull; Passive safety system analysis</li>
                    <li>&bull; CHF in reduced pressure conditions</li>
                    <li>&bull; Flow pattern transition modeling</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-3">EV Battery Thermal Management</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    Electric vehicle battery pack cooling:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; Two-phase mini/microchannel cooling</li>
                    <li>&bull; Temperature uniformity across cells</li>
                    <li>&bull; Fast charging heat dissipation</li>
                    <li>&bull; Refrigerant flow boiling optimization</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-purple-500/20">
                  <h5 className="text-purple-400 font-bold mb-3">Heat Exchanger Design</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    Industrial evaporator optimization:
                  </p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>&bull; Enhanced tube surfaces for boiling</li>
                    <li>&bull; Flow maldistribution effects</li>
                    <li>&bull; Pressure drop minimization</li>
                    <li>&bull; Compact heat exchanger design</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Flow Boiling Summary" accent="cyan" icon="S">
              <div className="space-y-2">
                <p><strong className="text-cyan-400">Key Parameters:</strong> Quality (x), mass flux (G), pressure (P), heat flux (q'')</p>
                <p><strong className="text-emerald-400">Flow Patterns:</strong> Bubbly, slug, churn, annular, mist - each with distinct h</p>
                <p><strong className="text-blue-400">Chen Correlation:</strong> h_tp = F*h_lo + S*h_nb (superposition model)</p>
                <p><strong className="text-purple-400">Pressure Drop:</strong> Lockhart-Martinelli or homogeneous model</p>
                <p><strong className="text-red-400">CHF:</strong> DNB (low x) vs Dryout (high x) - critical for nuclear safety</p>
              </div>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

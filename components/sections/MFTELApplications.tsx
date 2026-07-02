"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import MathTex from "@/components/Math";

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

function SectionDivider({ number, title, accent = "cyan" }: { number: string; title: string; accent?: string }) {
  const colors: Record<string, { bg: string; border: string; text: string; line: string }> = {
    cyan: { bg: "bg-cyan-500/20", border: "border-cyan-500/30", text: "text-cyan-400", line: "from-cyan-500/30" },
    emerald: { bg: "bg-emerald-500/20", border: "border-emerald-500/30", text: "text-emerald-400", line: "from-emerald-500/30" },
    orange: { bg: "bg-orange-500/20", border: "border-orange-500/30", text: "text-orange-400", line: "from-orange-500/30" },
    purple: { bg: "bg-purple-500/20", border: "border-purple-500/30", text: "text-purple-400", line: "from-purple-500/30" },
  };
  const c = colors[accent] || colors.cyan;
  return (
    <motion.div {...fadeUp} className="flex items-center gap-4 mb-8 mt-20 first:mt-0">
      <span className={`flex-shrink-0 w-10 h-10 rounded-full ${c.bg} border ${c.border} flex items-center justify-center ${c.text} font-bold text-sm`}>
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className={`flex-1 h-px bg-gradient-to-r ${c.line} to-transparent`} />
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
  const borderColors: Record<string, string> = {
    cyan: "border-cyan-500/30",
    blue: "border-blue-500/30",
    red: "border-red-500/30",
    orange: "border-orange-500/30",
    emerald: "border-emerald-500/30",
    purple: "border-purple-500/30",
  };
  const borderColor = borderColors[accent] || borderColors.cyan;
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div className="text-cyan-400">
        {children}
      </div>
    </div>
  );
}

/* ── Heat Flux Calculator Component ─────────────────────────────────────── */
function HeatFluxCalculator() {
  const [heatFlux, setHeatFlux] = useState(100); // W/cm^2
  const [area, setArea] = useState(4); // cm^2 (typical GPU die)

  const totalPower = heatFlux * area;

  // Required temperature difference for different cooling methods
  const h_air = 100; // W/m^2K
  const h_singlePhase = 1000; // W/m^2K
  const h_twoPhase = 20000; // W/m^2K

  const areaM2 = area / 10000; // convert cm^2 to m^2
  const deltaT_air = totalPower / (h_air * areaM2);
  const deltaT_single = totalPower / (h_singlePhase * areaM2);
  const deltaT_two = totalPower / (h_twoPhase * areaM2);

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
      <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 text-center">
        Heat Flux Calculator (Interactive)
      </h4>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Heat Flux (W/cm<sup>2</sup>)
          </label>
          <input
            type="range"
            min="10"
            max="300"
            value={heatFlux}
            onChange={(e) => setHeatFlux(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <p className="text-center text-cyan-400 font-bold mt-1">{heatFlux} W/cm<sup>2</sup></p>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Chip Area (cm<sup>2</sup>)
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <p className="text-center text-cyan-400 font-bold mt-1">{area} cm<sup>2</sup></p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-900/80 mb-6 text-center">
        <p className="text-gray-400 mb-1">Total Power Dissipation</p>
        <p className="text-3xl font-bold text-white">{totalPower} W</p>
      </div>

      <div className="text-sm text-gray-400 mb-4">
        Required Temperature Difference (<MathTex tex="\Delta T = T_{surface} - T_{coolant}" />) to remove heat:
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
          <p className="text-xs text-gray-500 mb-1">Air Cooling</p>
          <p className="text-xs text-gray-500 mb-2">h ~ 100 W/m<sup>2</sup>K</p>
          <p className={`text-xl font-bold ${deltaT_air > 80 ? 'text-red-400' : 'text-yellow-400'}`}>
            {deltaT_air > 9999 ? ">9999" : Math.round(deltaT_air)}<sup>o</sup>C
          </p>
          {deltaT_air > 80 && <p className="text-xs text-red-400 mt-1">Exceeds limit!</p>}
        </div>
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
          <p className="text-xs text-gray-500 mb-1">Single-Phase Immersion</p>
          <p className="text-xs text-gray-500 mb-2">h ~ 1,000 W/m<sup>2</sup>K</p>
          <p className={`text-xl font-bold ${deltaT_single > 80 ? 'text-orange-400' : deltaT_single > 40 ? 'text-yellow-400' : 'text-emerald-400'}`}>
            {Math.round(deltaT_single)}<sup>o</sup>C
          </p>
        </div>
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
          <p className="text-xs text-gray-500 mb-1">Two-Phase Immersion</p>
          <p className="text-xs text-gray-500 mb-2">h ~ 20,000 W/m<sup>2</sup>K</p>
          <p className="text-xl font-bold text-emerald-400">
            {deltaT_two.toFixed(1)}<sup>o</sup>C
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        * Junction temperature limit: ~105<sup>o</sup>C, Coolant at ~25<sup>o</sup>C means max <MathTex tex="\Delta T \approx 80" /><sup>o</sup>C
      </p>
    </div>
  );
}

/* ── Pool Boiling Curve Visual ─────────────────────────────────────────── */
function PoolBoilingCurve() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const regions = [
    { id: "nc", name: "Natural Convection", color: "emerald", x: 70, desc: "Free convection only, no bubbles" },
    { id: "nb", name: "Nucleate Boiling", color: "cyan", x: 150, desc: "Most efficient heat transfer region" },
    { id: "chf", name: "CHF (Critical Heat Flux)", color: "orange", x: 220, desc: "Maximum heat flux point - SAFETY LIMIT" },
    { id: "trans", name: "Transition", color: "yellow", x: 280, desc: "Unstable region - AVOID" },
    { id: "film", name: "Film Boiling", color: "red", x: 400, desc: "Vapor blanket insulates surface" },
  ];

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
      <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 text-center">
        Pool Boiling Curve - Interactive
      </h4>

      <div className="relative bg-slate-900/80 rounded-xl p-6 mb-6 overflow-x-auto">
        <div className="min-w-[500px]">
          <svg viewBox="0 0 500 280" className="w-full h-auto">
            {/* Axes */}
            <line x1="50" y1="230" x2="480" y2="230" stroke="#475569" strokeWidth="2" />
            <line x1="50" y1="230" x2="50" y2="20" stroke="#475569" strokeWidth="2" />

            {/* Axis labels */}
            <text x="265" y="265" fill="#94a3b8" fontSize="12" textAnchor="middle">
              Wall Superheat, ΔTe = Ts - Tsat (log scale)
            </text>
            <text x="25" y="125" fill="#94a3b8" fontSize="12" textAnchor="middle" transform="rotate(-90, 25, 125)">
              Heat Flux, q&quot; (log scale)
            </text>

            {/* Boiling curve */}
            <path
              d="M 50 230
                 Q 80 220 100 200
                 C 130 160 160 100 190 50
                 Q 210 25 220 30
                 C 240 45 270 90 310 110
                 Q 350 140 380 100
                 L 460 30"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="3"
            />

            {/* Clickable regions */}
            {regions.map((r) => (
              <g key={r.id} onMouseEnter={() => setHoveredRegion(r.id)} onMouseLeave={() => setHoveredRegion(null)}>
                <rect
                  x={r.x - 30}
                  y="20"
                  width="60"
                  height="210"
                  fill={hoveredRegion === r.id ? "rgba(34, 211, 238, 0.1)" : "transparent"}
                  className="cursor-pointer"
                />
              </g>
            ))}

            {/* Key points */}
            <circle cx="100" cy="200" r="5" fill="#10b981" />
            <text x="95" y="218" fill="#10b981" fontSize="9">ONB</text>

            <circle cx="190" cy="50" r="6" fill="#f59e0b" stroke="#fbbf24" strokeWidth="2" />
            <text x="180" y="42" fill="#f59e0b" fontSize="10" fontWeight="bold">CHF</text>

            <circle cx="310" cy="110" r="5" fill="#ef4444" />
            <text x="300" y="128" fill="#ef4444" fontSize="9">Leidenfrost</text>

            {/* Region labels */}
            <text x="70" y="170" fill="#6ee7b7" fontSize="10" fontWeight="bold">I</text>
            <text x="150" y="80" fill="#22d3ee" fontSize="10" fontWeight="bold">II</text>
            <text x="260" y="70" fill="#fbbf24" fontSize="10" fontWeight="bold">III</text>
            <text x="400" y="60" fill="#f87171" fontSize="10" fontWeight="bold">IV</text>
          </svg>
        </div>
      </div>

      {/* Region info display */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { id: "nb", name: "Nucleate Boiling", h: "10,000-50,000", color: "cyan", app: "Data center cooling" },
          { id: "chf", name: "CHF", h: "MAX (~1 MW/m2)", color: "orange", app: "Safety limit for reactors" },
          { id: "trans", name: "Transition", h: "Unstable", color: "yellow", app: "Avoid in design" },
          { id: "film", name: "Film Boiling", h: "100-300", color: "red", app: "Metal quenching" },
        ].map((region) => (
          <div
            key={region.id}
            className={`p-3 rounded-xl border transition-all duration-200 ${
              hoveredRegion === region.id
                ? `bg-${region.color}-500/20 border-${region.color}-500/50`
                : `bg-slate-900/50 border-slate-700/50`
            }`}
          >
            <p className={`text-xs font-bold text-${region.color}-400 mb-1`}>{region.name}</p>
            <p className="text-xs text-gray-500">h: {region.h} W/m<sup>2</sup>K</p>
            <p className="text-xs text-gray-400 mt-1">{region.app}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Stefan Problem Visualization ─────────────────────────────────────── */
function StefanProblemVisual() {
  const [time, setTime] = useState(1); // hours

  // Simplified Stefan problem: interface position ~ sqrt(time)
  const alpha = 1.2e-7; // thermal diffusivity m^2/s (typical for PCM)
  const Ste = 0.3; // Stefan number
  const lambda = 0.62 * Math.sqrt(Ste); // approximation
  const interfacePosition = 2 * lambda * Math.sqrt(alpha * time * 3600) * 100; // in cm

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
      <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6 text-center">
        Stefan Problem - Solid-Liquid Interface Tracking
      </h4>

      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-2 text-center">
          Time: {time} hours
        </label>
        <input
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
      </div>

      <div className="relative h-40 bg-slate-900/80 rounded-xl overflow-hidden mb-4">
        {/* Solid phase (left) */}
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600/40 to-blue-400/30 transition-all duration-300"
          style={{ width: `${Math.min(interfacePosition * 2, 100)}%` }}
        >
          <div className="absolute top-1/2 left-4 -translate-y-1/2 text-blue-300 text-sm font-bold">
            Solid (PCM)
          </div>
        </div>
        {/* Liquid phase (right) */}
        <div className="absolute top-0 right-0 h-full bg-gradient-to-l from-orange-600/40 to-orange-400/20">
          <div className="absolute top-1/2 right-4 -translate-y-1/2 text-orange-300 text-sm font-bold">
            Liquid
          </div>
        </div>
        {/* Interface line */}
        <div
          className="absolute top-0 h-full w-1 bg-white/80 transition-all duration-300"
          style={{ left: `${Math.min(interfacePosition * 2, 98)}%` }}
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white">
            s(t) = {interfacePosition.toFixed(2)} cm
          </div>
        </div>
        {/* Temperature labels */}
        <div className="absolute top-2 left-2 text-xs text-blue-300">T = T<sub>m</sub> - ΔT</div>
        <div className="absolute top-2 right-2 text-xs text-orange-300">T = T<sub>m</sub></div>
      </div>

      <div className="p-4 rounded-xl bg-slate-900/50">
        <EquationBox label="Stefan Condition at Interface" accent="emerald">
          <MathTex tex={`\\rho h_{sl} \\frac{ds}{dt} = k_s \\left. \\frac{\\partial T}{\\partial x} \\right|_{s^-} - k_l \\left. \\frac{\\partial T}{\\partial x} \\right|_{s^+}`} display />
        </EquationBox>
        <p className="text-xs text-gray-500 mt-3 text-center">
          Interface position: <MathTex tex="s(t) \propto \sqrt{t}" /> (Neumann solution)
        </p>
      </div>
    </div>
  );
}

/* ── Main Component ─────────────────────────────────────────────────────── */
export default function MFTELApplications() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            MFTEL Research Applications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Heat Transfer Research
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            박일웅 교수님의 MFTEL 연구실에서 진행 중인 열전달 연구 분야를 소개합니다.
            <br />
            <a
              href="https://mftel.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              mftel.vercel.app
            </a>
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* 1. Immersion Cooling for Electronics (침수 냉각) */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <SectionDivider number="1" title="Immersion Cooling (침수 냉각)" accent="cyan" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              현대 GPU/TPU는 1,000W 이상의 열을 방출합니다.
              <strong className="text-white"> 공기 냉각(Air Cooling)</strong>으로는 더 이상 감당할 수 없습니다.
              <strong className="text-cyan-400"> 침수 냉각(Immersion Cooling)</strong>이 데이터센터의 미래입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Why Air Cooling is Not Enough" accent="red" icon="!">
              <p className="mb-2">
                공기의 열전달 계수 한계:
              </p>
              <ul className="space-y-1 mt-2">
                <li>* <strong className="text-white">자연 대류 (Natural Convection):</strong> h ~ 5-25 W/(m<sup>2</sup>K)</li>
                <li>* <strong className="text-white">강제 대류 (Forced, Fan):</strong> h ~ 25-250 W/(m<sup>2</sup>K)</li>
                <li>* <strong className="text-red-400">NVIDIA H100 GPU:</strong> TDP 700W, die area ~8 cm<sup>2</sup> → ~87 W/cm<sup>2</sup></li>
                <li>* Air cooling simply cannot remove this heat flux efficiently!</li>
              </ul>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Heat Transfer Coefficient Comparison
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-sm mb-6">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400">Cooling Method</th>
                      <th className="text-left py-3 px-4 text-gray-400">h [W/(m<sup>2</sup>K)]</th>
                      <th className="text-left py-3 px-4 text-gray-400">Relative</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Natural Convection (Air)</td>
                      <td className="py-3 px-4 text-red-400">5 - 25</td>
                      <td className="py-3 px-4">
                        <div className="w-1 h-4 bg-red-500 rounded"></div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Forced Convection (Air + Fan)</td>
                      <td className="py-3 px-4 text-orange-400">25 - 250</td>
                      <td className="py-3 px-4">
                        <div className="w-3 h-4 bg-orange-500 rounded"></div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Single-Phase Immersion (Dielectric Oil)</td>
                      <td className="py-3 px-4 text-blue-400">500 - 1,500</td>
                      <td className="py-3 px-4">
                        <div className="w-8 h-4 bg-blue-500 rounded"></div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Two-Phase Immersion (Nucleate Boiling)</td>
                      <td className="py-3 px-4 text-cyan-400 font-bold">10,000 - 50,000</td>
                      <td className="py-3 px-4">
                        <div className="w-32 h-4 bg-cyan-500 rounded"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Jet Impingement / Spray Cooling</td>
                      <td className="py-3 px-4 text-emerald-400">20,000 - 100,000</td>
                      <td className="py-3 px-4">
                        <div className="w-48 h-4 bg-emerald-500 rounded"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 text-center">
                <em>Incropera et al., 2011; Bar-Cohen et al., 2006</em>
              </p>
            </div>
          </motion.div>

          {/* Interactive Calculator */}
          <motion.div {...stagger} className="mb-8">
            <HeatFluxCalculator />
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Single-Phase vs Two-Phase Immersion Cooling
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-900/50 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-3">Single-Phase (단상 냉각)</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>* Mineral oil, synthetic oils (PAO)</li>
                    <li>* h ~ 500-1,500 W/(m<sup>2</sup>K)</li>
                    <li>* No phase change, simpler system</li>
                    <li>* Lower heat flux capability</li>
                    <li>* <strong className="text-white">Pros:</strong> Simple, reliable</li>
                    <li>* <strong className="text-white">Cons:</strong> Limited cooling capacity</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-slate-900/50 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-3">Two-Phase (2상 냉각)</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>* 3M Novec 7000/649, Fluorinert</li>
                    <li>* h ~ 10,000-50,000 W/(m<sup>2</sup>K)</li>
                    <li>* Nucleate boiling at chip surface</li>
                    <li>* Very high heat flux capability</li>
                    <li>* <strong className="text-white">Pros:</strong> Excellent cooling, isothermal</li>
                    <li>* <strong className="text-white">Cons:</strong> Fluid cost, system complexity</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Dielectric Fluids (유전성 유체)" accent="cyan" icon="?">
              <p className="mb-2">
                전자기기 침수 냉각에 사용되는 유체는 <strong className="text-white">유전성(Dielectric)</strong>이어야 합니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>* <strong className="text-white">3M Novec:</strong> T<sub>bp</sub> ~ 34-61<sup>o</sup>C, GWP &lt; 1, non-flammable</li>
                <li>* <strong className="text-white">3M Fluorinert:</strong> T<sub>bp</sub> ~ 56-253<sup>o</sup>C, chemically inert</li>
                <li>* <strong className="text-white">Mineral Oil:</strong> Low cost, but single-phase only</li>
                <li>* <strong className="text-white">Engineered Fluids:</strong> EC-100, Opteon, etc.</li>
              </ul>
              <p className="mt-2 text-xs text-gray-500">
                <em>Tuma, 2010; 3M Technical Data Sheets</em>
              </p>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <h4 className="text-emerald-400 font-bold mb-3">Data Center Energy Savings</h4>
              <p className="text-gray-400 mb-4">
                Immersion cooling can reduce data center cooling energy by up to <strong className="text-white">90%</strong>:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-3 rounded-lg bg-slate-900/50">
                  <p className="text-2xl font-bold text-red-400">PUE 2.0</p>
                  <p className="text-xs text-gray-500">Traditional Air Cooling</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-slate-900/50">
                  <p className="text-2xl font-bold text-blue-400">PUE 1.3</p>
                  <p className="text-xs text-gray-500">Single-Phase Immersion</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-slate-900/50">
                  <p className="text-2xl font-bold text-emerald-400">PUE 1.03</p>
                  <p className="text-xs text-gray-500">Two-Phase Immersion</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                PUE (Power Usage Effectiveness) = Total Facility Power / IT Equipment Power
                <br />
                <em>GRC, Submer, LiquidCool Solutions case studies</em>
              </p>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* 2. Thermal Energy Storage (열에너지 저장) */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <SectionDivider number="2" title="Thermal Energy Storage (열에너지 저장)" accent="emerald" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              재생에너지의 간헐성 문제를 해결하기 위해 <strong className="text-emerald-400">열에너지 저장(TES, Thermal Energy Storage)</strong>이
              중요해지고 있습니다. 특히 <strong className="text-white">상변화 물질(PCM)</strong>을 이용한
              <strong className="text-emerald-400"> 잠열 저장</strong>과 <strong className="text-white">카르노 배터리(Carnot Battery)</strong>가
              그리드 안정성에 기여합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Energy Density Comparison: Sensible vs Latent Heat Storage
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-3">Sensible Heat Storage (현열 저장)</h5>
                  <EquationBox label="" accent="orange">
                    <MathTex tex="Q = m c_p \Delta T" display />
                  </EquationBox>
                  <ul className="space-y-2 text-sm text-gray-400 mt-4">
                    <li>* Water: <MathTex tex="c_p = 4.18" /> kJ/(kg K)</li>
                    <li>* Rock/Concrete: <MathTex tex="c_p \approx 0.9" /> kJ/(kg K)</li>
                    <li>* Molten Salt: <MathTex tex="c_p \approx 1.5" /> kJ/(kg K)</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-slate-900/50 border border-emerald-500/30">
                  <h5 className="text-emerald-400 font-bold mb-3">Latent Heat Storage (잠열 저장)</h5>
                  <EquationBox label="" accent="emerald">
                    <MathTex tex="Q = m h_{sl}" display />
                  </EquationBox>
                  <ul className="space-y-2 text-sm text-gray-400 mt-4">
                    <li>* Water/Ice: <MathTex tex="h_{sl} = 334" /> kJ/kg</li>
                    <li>* Paraffin Wax: <MathTex tex="h_{sl} \approx 200" /> kJ/kg</li>
                    <li>* Salt Hydrates: <MathTex tex="h_{sl} \approx 150-250" /> kJ/kg</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80">
                <h5 className="text-white font-bold mb-3 text-center">Energy Density Comparison (for ΔT = 50K)</h5>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Water (Sensible)</p>
                    <p className="text-xl font-bold text-orange-400">209 kJ/kg</p>
                    <div className="h-2 bg-orange-500/30 rounded mt-2">
                      <div className="h-full bg-orange-500 rounded" style={{ width: "63%" }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Ice (Latent Only)</p>
                    <p className="text-xl font-bold text-emerald-400">334 kJ/kg</p>
                    <div className="h-2 bg-emerald-500/30 rounded mt-2">
                      <div className="h-full bg-emerald-500 rounded" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">PCM (Combined)</p>
                    <p className="text-xl font-bold text-cyan-400">~400 kJ/kg</p>
                    <div className="h-2 bg-cyan-500/30 rounded mt-2">
                      <div className="h-full bg-cyan-500 rounded" style={{ width: "120%" }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  <em>Latent heat storage provides 1.5-2x higher energy density at constant temperature!</em>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stefan Problem */}
          <motion.div {...stagger} className="mb-8">
            <StefanProblemVisual />
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Carnot Battery for Grid Stability" accent="emerald" icon="B">
              <p className="mb-2">
                <strong className="text-white">카르노 배터리(Carnot Battery)</strong>는 전기를 열로 저장하고,
                필요시 다시 전기로 변환하는 시스템입니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>* <strong className="text-white">Charging:</strong> 잉여 전기 → Heat Pump → Hot Storage (고온 저장)</li>
                <li>* <strong className="text-white">Discharging:</strong> Hot Storage → Heat Engine → 전기 생산</li>
                <li>* <strong className="text-white">Round-trip Efficiency:</strong> 40-70% (improving)</li>
                <li>* <strong className="text-emerald-400">장점:</strong> 대용량, 장시간 저장 가능, 지리적 제약 없음</li>
              </ul>
              <p className="mt-2 text-xs text-gray-500">
                <em>Steinmann et al., 2019; McTigue et al., 2020</em>
              </p>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">TES Applications</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
                <div className="p-4 rounded-lg bg-slate-800/50">
                  <h5 className="font-bold text-white mb-2">Solar Thermal</h5>
                  <p>Molten salt storage for CSP plants. 6-8 hours of storage for dispatchable solar power.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-800/50">
                  <h5 className="font-bold text-white mb-2">Waste Heat Recovery</h5>
                  <p>Industrial processes generate significant waste heat. PCM storage enables time-shifting.</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-800/50">
                  <h5 className="font-bold text-white mb-2">Building HVAC</h5>
                  <p>Ice storage for peak shaving. Charge at night (cheap electricity), use during day.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* 3. SMR Safety */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <SectionDivider number="3" title="Small Modular Reactor (SMR) Safety" accent="orange" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-orange-400">소형 모듈 원자로(SMR)</strong>의 안전성은
              <strong className="text-white"> 열 제거 능력</strong>에 달려 있습니다.
              특히 <strong className="text-red-400">임계 열유속(CHF, Critical Heat Flux)</strong>과
              <strong className="text-white"> 피동 안전 시스템(Passive Safety)</strong>이 핵심입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Critical Heat Flux (CHF) - 원자력 안전의 핵심" accent="red" icon="!">
              <p className="mb-2">
                원자로에서 CHF를 초과하면 <strong className="text-red-400">연료봉 손상</strong>으로 이어집니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>* <strong className="text-white">Nucleate Boiling:</strong> 높은 열전달, 안전한 운전 영역</li>
                <li>* <strong className="text-red-400">CHF (DNB):</strong> 증기막 형성 시작점</li>
                <li>* <strong className="text-red-400">Film Boiling:</strong> 연료봉 온도 급상승 → 손상</li>
              </ul>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                DNBR (Departure from Nucleate Boiling Ratio)
              </h4>

              <EquationBox label="DNBR Definition" accent="orange">
                <MathTex tex={`\\text{DNBR} = \\frac{q''_{CHF}}{q''_{local}} > 1.3`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-emerald-400 font-bold mb-2">Safe Operation</h5>
                  <p className="text-sm text-gray-400">
                    DNBR &gt; 1.3: Sufficient margin to CHF.
                    All reactor designs must maintain this margin under all conditions.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-red-400 font-bold mb-2">Safety Concern</h5>
                  <p className="text-sm text-gray-400">
                    DNBR approaching 1.0: Reactor scram required.
                    CHF occurrence → potential fuel damage.
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                <em>Todreas & Kazimi, Nuclear Systems I; NRC Regulatory Guide 1.206</em>
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Passive Safety Systems for SMRs
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-900/50">
                  <h5 className="text-cyan-400 font-bold mb-3">Pool Boiling for Decay Heat Removal</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>* Reactor vessel submerged in pool</li>
                    <li>* Natural circulation: no pumps needed</li>
                    <li>* Pool boiling removes decay heat passively</li>
                    <li>* Days of cooling without operator action</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-slate-900/50">
                  <h5 className="text-emerald-400 font-bold mb-3">Natural Convection Loops</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>* Density difference drives flow</li>
                    <li>* No external power required</li>
                    <li>* Gravity-driven heat removal</li>
                    <li>* Inherently safe design philosophy</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/80">
                <h5 className="text-white font-bold mb-3 text-center">SMR Designs with Passive Safety</h5>
                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <p className="font-bold text-cyan-400">NuScale</p>
                    <p className="text-gray-500">USA</p>
                  </div>
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <p className="font-bold text-cyan-400">SMART</p>
                    <p className="text-gray-500">Korea</p>
                  </div>
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <p className="font-bold text-cyan-400">BWRX-300</p>
                    <p className="text-gray-500">GE-Hitachi</p>
                  </div>
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <p className="font-bold text-cyan-400">IMSR</p>
                    <p className="text-gray-500">Terrestrial</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* 4. Advanced Boiling Heat Transfer */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <SectionDivider number="4" title="Advanced Boiling Heat Transfer" accent="purple" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              비등 열전달은 상변화를 이용한 가장 효율적인 냉각 방법입니다.
              <strong className="text-purple-400"> 표면 개질(Surface Enhancement)</strong>과
              <strong className="text-cyan-400"> 응축 열전달 향상</strong> 기술이 활발히 연구되고 있습니다.
            </p>
          </motion.div>

          {/* Pool Boiling Curve */}
          <motion.div {...stagger} className="mb-8">
            <PoolBoilingCurve />
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                Surface Enhancement Technologies
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-900/50">
                  <h5 className="text-purple-400 font-bold mb-3">Micro/Nano Structures</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>* <strong className="text-white">Microporous coatings:</strong> More nucleation sites</li>
                    <li>* <strong className="text-white">Nanowires (CuO, Si):</strong> Enhanced wettability</li>
                    <li>* <strong className="text-white">Microchannels:</strong> Capillary pumping for liquid supply</li>
                    <li>* <strong className="text-white">Biphilic surfaces:</strong> Patterned hydrophobic/hydrophilic</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-slate-900/50">
                  <h5 className="text-cyan-400 font-bold mb-3">CHF Enhancement Results</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>* Microporous surfaces: <strong className="text-emerald-400">+100-200%</strong></li>
                    <li>* Nanostructures: <strong className="text-emerald-400">+150-250%</strong></li>
                    <li>* Hierarchical structures: <strong className="text-emerald-400">+200-300%</strong></li>
                    <li>* Combined with nanofluids: <strong className="text-emerald-400">+300-400%</strong></li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                <em>Kandlikar, 2013; Kim et al., 2022; Chu et al., 2012</em>
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Condensation: Dropwise vs Filmwise
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-xl bg-slate-900/50 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-3">Filmwise Condensation (막 응축)</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>* Continuous liquid film on surface</li>
                    <li>* Film acts as thermal resistance</li>
                    <li>* h ~ 5,000-25,000 W/(m<sup>2</sup>K)</li>
                    <li>* Most common in practice</li>
                    <li>* Nusselt analysis (1916) describes well</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-slate-900/50 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-3">Dropwise Condensation (적상 응축)</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>* Discrete droplets on surface</li>
                    <li>* 90%+ surface directly contacts vapor</li>
                    <li>* h ~ 50,000-250,000 W/(m<sup>2</sup>K)</li>
                    <li>* 5-10x higher than filmwise!</li>
                    <li>* Requires hydrophobic surface</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Jumping Droplet Condensation (JDC) - Latest Research" accent="purple" icon="NEW">
              <p className="mb-2">
                <strong className="text-purple-400">Jumping Droplet Condensation</strong>은 MFTEL에서 관심을 갖고 있는 최신 연구 분야입니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>* <strong className="text-white">Mechanism:</strong> 두 방울이 합체할 때 표면에서 "점프"하여 이탈</li>
                <li>* <strong className="text-white">Driving force:</strong> Surface energy release during coalescence</li>
                <li>* <strong className="text-white">Benefit:</strong> Active surface renewal without gravity</li>
                <li>* <strong className="text-emerald-400">Applications:</strong> Heat pipes, electronics cooling, anti-icing</li>
                <li>* <strong className="text-white">Surface:</strong> Superhydrophobic nanostructured surfaces</li>
              </ul>
              <p className="mt-2 text-xs text-gray-500">
                <em>Boreyko & Chen, 2009; Miljkovic et al., 2013; Park et al., MFTEL ongoing research</em>
              </p>
            </InsightCard>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* Final Summary */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <motion.div {...stagger} className="mt-16">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Summary: MFTEL Research Focus</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-cyan-400">Immersion Cooling</h4>
                      <p className="text-sm text-gray-400">GPU/TPU cooling for data centers, 90% energy reduction</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-emerald-400">Thermal Energy Storage</h4>
                      <p className="text-sm text-gray-400">PCM, Carnot batteries for grid stability</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-orange-400">SMR Safety</h4>
                      <p className="text-sm text-gray-400">CHF analysis, passive cooling systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-purple-400">Advanced Phase Change</h4>
                      <p className="text-sm text-gray-400">Surface enhancement, jumping droplet condensation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://mftel.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
                >
                  <span>Visit MFTEL Lab Website</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

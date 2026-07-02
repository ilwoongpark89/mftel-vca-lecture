"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Math from "@/components/Math";

/* ── Example Data ─────────────────────────────────────────────── */

interface Example {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  borderColor: string;
  problem: React.ReactNode;
  assumptions?: string[];
  solution: React.ReactNode;
}

const examples: Example[] = [
  {
    id: 1,
    title: "Example 1: Furnace Wall",
    subtitle: "Steady-State Conduction",
    color: "text-red-400",
    borderColor: "border-red-500/30",
    problem: (
      <p className="text-gray-300 text-sm leading-relaxed">
        An industrial furnace wall is constructed of <strong className="text-white">0.15 m thick fireclay brick</strong> with
        thermal conductivity <strong className="text-white"><Math tex="k = 1.7 \; \text{W/m} \cdot \text{K}" /></strong>. The inner surface temperature
        is <strong className="text-red-400"><Math tex="T_1 = 1400 \; \text{K}" /></strong> and the outer surface temperature
        is <strong className="text-blue-400"><Math tex="T_2 = 1150 \; \text{K}" /></strong>. The wall dimensions
        are <strong className="text-white"><Math tex="0.5 \; \text{m} \times 1.2 \; \text{m}" /></strong>. Determine the rate of heat loss through the wall.
      </p>
    ),
    assumptions: [
      "Steady-state conditions",
      "One-dimensional conduction through the wall",
      "Constant thermal conductivity k",
    ],
    solution: (
      <div className="space-y-4">
        <div>
          <h5 className="text-white font-semibold text-sm mb-2">Step 1: Heat flux (Fourier&apos;s Law)</h5>
          <div className="bg-slate-800/60 rounded-lg p-3 font-mono text-sm text-gray-300">
            <p><Math tex="q'' = k \cdot \frac{T_1 - T_2}{L}" /></p>
            <p className="mt-1"><Math tex="q'' = 1.7 \times \frac{1400 - 1150}{0.15}" /></p>
            <p className="mt-1"><Math tex="q'' = 1.7 \times \frac{250}{0.15}" /></p>
            <p className="mt-1 text-amber-400 font-bold"><Math tex="q'' = 2833 \; \text{W/m}^2" /></p>
          </div>
        </div>
        <div>
          <h5 className="text-white font-semibold text-sm mb-2">Step 2: Total heat loss rate</h5>
          <div className="bg-slate-800/60 rounded-lg p-3 font-mono text-sm text-gray-300">
            <p><Math tex="A = 0.5 \times 1.2 = 0.6 \; \text{m}^2" /></p>
            <p className="mt-1"><Math tex="q = A \times q'' = 0.6 \times 2833" /></p>
            <p className="mt-1 text-green-400 font-bold"><Math tex="q = 1700 \; \text{W}" /></p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Example 2: Steam Pipe",
    subtitle: "Radiation + Convection",
    color: "text-orange-400",
    borderColor: "border-orange-500/30",
    problem: (
      <p className="text-gray-300 text-sm leading-relaxed">
        An uninsulated steam pipe has outer diameter <strong className="text-white"><Math tex="D = 70 \; \text{mm}" /></strong> and
        surface temperature <strong className="text-red-400"><Math tex="T_s = 200°\text{C} \; (473 \; \text{K})" /></strong> with
        emissivity <strong className="text-white"><Math tex="\varepsilon = 0.8" /></strong>. The surrounding air and walls
        are at <strong className="text-blue-400"><Math tex="T_\infty = T_{\text{sur}} = 25°\text{C} \; (298 \; \text{K})" /></strong>, and the convection
        coefficient is <strong className="text-white"><Math tex="h = 15 \; \text{W/m}^2 \cdot \text{K}" /></strong>. Find the emissive power, irradiation,
        and total heat loss per unit length.
      </p>
    ),
    solution: (
      <div className="space-y-4">
        <div>
          <h5 className="text-white font-semibold text-sm mb-2">Step 1: Emissive Power</h5>
          <div className="bg-slate-800/60 rounded-lg p-3 font-mono text-sm text-gray-300">
            <p><Math tex="E = \varepsilon \cdot \sigma \cdot T_s^4" /></p>
            <p className="mt-1"><Math tex="E = 0.8 \times 5.67 \times 10^{-8} \times (473)^4" /></p>
            <p className="mt-1 text-amber-400 font-bold"><Math tex="E \approx 2270 \; \text{W/m}^2" /></p>
          </div>
        </div>
        <div>
          <h5 className="text-white font-semibold text-sm mb-2">Step 2: Irradiation from surroundings</h5>
          <div className="bg-slate-800/60 rounded-lg p-3 font-mono text-sm text-gray-300">
            <p><Math tex="G = \sigma \cdot T_{\text{sur}}^4" /></p>
            <p className="mt-1"><Math tex="G = 5.67 \times 10^{-8} \times (298)^4" /></p>
            <p className="mt-1 text-amber-400 font-bold"><Math tex="G \approx 447 \; \text{W/m}^2" /></p>
          </div>
        </div>
        <div>
          <h5 className="text-white font-semibold text-sm mb-2">Step 3: Heat loss per unit length</h5>
          <div className="bg-slate-800/60 rounded-lg p-3 font-mono text-sm text-gray-300">
            <p className="text-gray-400 mb-1">{`// Convection`}</p>
            <p><Math tex="q'_{\text{conv}} = h \cdot \pi D \cdot (T_s - T_\infty)" /></p>
            <p><Math tex="q'_{\text{conv}} = 15 \times \pi(0.07) \times 175" /></p>
            <p className="text-blue-400 font-bold"><Math tex="q'_{\text{conv}} \approx 577 \; \text{W/m}" /></p>
            <p className="text-gray-400 mt-2 mb-1">{`// Radiation`}</p>
            <p><Math tex="q'_{\text{rad}} = \varepsilon \sigma \pi D (T_s^4 - T_{\text{sur}}^4)" /></p>
            <p><Math tex="q'_{\text{rad}} = 0.8 \times 5.67 \times 10^{-8} \times \pi(0.07) \times (473^4 - 298^4)" /></p>
            <p className="text-red-400 font-bold"><Math tex="q'_{\text{rad}} \approx 401 \; \text{W/m}" /></p>
            <p className="text-gray-400 mt-2 mb-1">{`// Total`}</p>
            <p className="text-green-400 font-bold text-base"><Math tex="q'_{\text{total}} = 577 + 401 \approx 978 \; \text{W/m}" /></p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Example 3: Coffee Thermos",
    subtitle: "Multi-mode Analysis",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    problem: (
      <p className="text-gray-300 text-sm leading-relaxed">
        A closed container (thermos) holds hot coffee and is cooling in a room.
        Identify <strong className="text-white">all heat transfer processes</strong> occurring
        as the coffee loses heat to the surrounding room air.
      </p>
    ),
    solution: (
      <div className="space-y-3">
        <p className="text-gray-400 text-sm mb-3">Eight distinct heat transfer paths can be identified:</p>
        <div className="grid gap-2">
          {[
            { id: "q1", desc: "Free convection from coffee to inner flask wall", color: "text-orange-400" },
            { id: "q2", desc: "Conduction through the inner flask wall", color: "text-red-400" },
            { id: "q3", desc: "Free convection from flask outer surface to air gap", color: "text-blue-400" },
            { id: "q4", desc: "Radiation from flask outer surface to outer shell inner surface", color: "text-yellow-400" },
            { id: "q5", desc: "Conduction through the outer shell wall", color: "text-purple-400" },
            { id: "q6", desc: "Free convection from outer shell to room air", color: "text-emerald-400" },
            { id: "q7", desc: "Radiation from outer shell to room surroundings", color: "text-orange-300" },
            { id: "q8", desc: "Conduction through the lid (top loss path)", color: "text-pink-400" },
          ].map((item) => (
            <div key={item.id} className="flex items-start gap-3 bg-slate-800/40 rounded-lg px-3 py-2">
              <span className={`font-mono font-bold text-sm ${item.color} min-w-[24px]`}>{item.id}</span>
              <span className="text-gray-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
          <p className="text-gray-400 text-sm">
            <strong className="text-white">Key insight:</strong> The thermos minimizes heat loss by reducing each path —
            vacuum or low-conductivity air gap (reduces q3), silvered surfaces (reduces q4 &amp; q7),
            and insulated lid (reduces q8).
          </p>
        </div>
      </div>
    ),
  },
];

/* ── Accordion Card ───────────────────────────────────────────── */

function ExampleCard({ example, index }: { example: Example; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={`rounded-2xl bg-slate-900/60 border border-slate-700/40 overflow-hidden`}
    >
      {/* Problem (always visible) */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-lg font-bold ${example.color}`}>{example.title}</span>
          <span className="text-xs text-gray-500 bg-slate-800 px-2 py-0.5 rounded-full">{example.subtitle}</span>
        </div>

        {/* Problem statement */}
        <div className="mb-4">{example.problem}</div>

        {/* Assumptions */}
        {example.assumptions && (
          <div className="mb-4">
            <h5 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Assumptions</h5>
            <ul className="space-y-1">
              {example.assumptions.map((a, i) => (
                <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${
            open
              ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
              : "bg-gradient-to-r from-blue-600/80 to-cyan-600/80 text-white hover:from-blue-500/80 hover:to-cyan-500/80"
          }`}
        >
          {open ? "Hide Solution ▲" : "Show Solution ▼"}
        </button>
      </div>

      {/* Solution (expandable) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`px-6 pb-6 pt-2 border-t ${example.borderColor}`}>
              <h4 className="text-white font-bold mb-4">Solution</h4>
              {example.solution}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main Section ─────────────────────────────────────────────── */

export default function ExampleProblems() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 9
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Example Problems
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Practice Problems<br />
            Fourier 법칙, Newton의 냉각 법칙, Stefan-Boltzmann 법칙을 실제 공학 문제에 적용해 봅시다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {examples.map((ex, i) => (
            <ExampleCard key={ex.id} example={ex} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

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
  const borderColor = accent === "orange" ? "border-orange-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "red" ? "border-red-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "purple" ? "border-purple-500/30" : "border-slate-700";
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
  accent = "orange",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
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

function ThinkAboutIt({ question, hint }: { question: string; hint?: string }) {
  const [showHint, setShowHint] = useState(false);
  return (
    <motion.div {...stagger} className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-slate-950 p-5">
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
    <motion.div {...stagger} className="rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-5">
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
}: {
  step: number;
  color: string;
  equation: string;
  description: string;
}) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    red: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: step * 0.1 }}
      className="flex gap-4 items-start"
    >
      <span className={`flex-shrink-0 w-8 h-8 rounded-full ${colorClasses[color]} flex items-center justify-center text-sm font-bold mt-1`}>
        {step}
      </span>
      <div className={`flex-1 p-4 rounded-xl bg-slate-950/80 border ${colorClasses[color].split(' ')[2]}`}>
        <div className="overflow-x-auto mb-2">
          <Math tex={equation} display />
        </div>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
}

const characteristicLengths = [
  {
    geometry: "Plane Wall (thickness 2L)",
    lc: "L",
    lcTex: "L = \\frac{\\text{Thickness}}{2}",
    note: "Half-thickness (center to surface)",
  },
  {
    geometry: "Long Cylinder (radius r_o)",
    lc: "r_o / 2",
    lcTex: "\\frac{r_o}{2}",
    note: "V/A = (pi*r_o^2*L)/(2*pi*r_o*L)",
  },
  {
    geometry: "Sphere (radius r_o)",
    lc: "r_o / 3",
    lcTex: "\\frac{r_o}{3}",
    note: "V/A = (4/3*pi*r_o^3)/(4*pi*r_o^2)",
  },
  {
    geometry: "Cube (side a)",
    lc: "a / 6",
    lcTex: "\\frac{a}{6}",
    note: "V/A = a^3/(6a^2)",
  },
];

const biotExamples = [
  {
    material: "Copper (h=100)",
    k: "401",
    h: "100",
    lc: "0.01",
    bi: "0.0025",
    valid: true,
    note: "High k, very low Bi",
  },
  {
    material: "Steel (h=100)",
    k: "60.5",
    h: "100",
    lc: "0.01",
    bi: "0.017",
    valid: true,
    note: "Valid",
  },
  {
    material: "Glass (h=100)",
    k: "1.4",
    h: "100",
    lc: "0.01",
    bi: "0.71",
    valid: false,
    note: "Bi > 0.1, not valid",
  },
  {
    material: "Copper (h=1000)",
    k: "401",
    h: "1000",
    lc: "0.01",
    bi: "0.025",
    valid: true,
    note: "Still valid with high h",
  },
  {
    material: "Steel (h=1000)",
    k: "60.5",
    h: "1000",
    lc: "0.01",
    bi: "0.17",
    valid: false,
    note: "Bi > 0.1, borderline",
  },
];

// Error analysis data for different Biot numbers
const errorAnalysisData = [
  { bi: 0.01, centerError: 0.5, surfaceError: 0.5, avgError: 0.5 },
  { bi: 0.1, centerError: 5, surfaceError: 5, avgError: 5 },
  { bi: 0.5, centerError: 20, surfaceError: 20, avgError: 20 },
  { bi: 1.0, centerError: 35, surfaceError: 35, avgError: 35 },
  { bi: 2.0, centerError: 50, surfaceError: 50, avgError: 50 },
];

// Interactive Biot Number Calculator Component
function BiotCalculator() {
  const [h, setH] = useState(100);
  const [Lc, setLc] = useState(0.01);
  const [k, setK] = useState(60.5);

  const biotNumber = useMemo(() => (h * Lc) / k, [h, Lc, k]);
  const isValid = biotNumber < 0.1;
  const isWarning = biotNumber >= 0.1 && biotNumber < 1;

  const presetMaterials = [
    { name: "Copper", k: 401 },
    { name: "Aluminum", k: 237 },
    { name: "Steel", k: 60.5 },
    { name: "Stainless Steel", k: 15.1 },
    { name: "Glass", k: 1.4 },
    { name: "Polymer", k: 0.2 },
  ];

  return (
    <motion.div {...stagger} className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-6">
      <h4 className="text-lg font-bold text-orange-400 mb-6 text-center">Interactive Biot Number Calculator</h4>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* h input */}
        <div className="space-y-3">
          <label className="text-sm text-gray-400">
            h (Convection coefficient) [W/m^2K]
          </label>
          <input
            type="range"
            min="5"
            max="5000"
            step="5"
            value={h}
            onChange={(e) => setH(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>5 (Natural)</span>
            <span className="text-orange-400 font-bold">{h}</span>
            <span>5000 (Boiling)</span>
          </div>
        </div>

        {/* Lc input */}
        <div className="space-y-3">
          <label className="text-sm text-gray-400">
            L_c (Characteristic length) [m]
          </label>
          <input
            type="range"
            min="0.001"
            max="0.1"
            step="0.001"
            value={Lc}
            onChange={(e) => setLc(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>1 mm</span>
            <span className="text-orange-400 font-bold">{(Lc * 1000).toFixed(1)} mm</span>
            <span>100 mm</span>
          </div>
        </div>

        {/* k input with presets */}
        <div className="space-y-3">
          <label className="text-sm text-gray-400">
            k (Thermal conductivity) [W/mK]
          </label>
          <input
            type="range"
            min="0.1"
            max="500"
            step="0.1"
            value={k}
            onChange={(e) => setK(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>0.1</span>
            <span className="text-orange-400 font-bold">{k.toFixed(1)}</span>
            <span>500</span>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {presetMaterials.map((mat) => (
              <button
                key={mat.name}
                onClick={() => setK(mat.k)}
                className={`text-xs px-2 py-1 rounded ${
                  NativeMath.abs(k - mat.k) < 0.5
                    ? "bg-orange-500/30 text-orange-300"
                    : "bg-slate-800 text-gray-400 hover:bg-slate-700"
                }`}
              >
                {mat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result display */}
      <div className={`p-6 rounded-xl border ${
        isValid
          ? "border-emerald-500/30 bg-emerald-500/10"
          : isWarning
          ? "border-yellow-500/30 bg-yellow-500/10"
          : "border-red-500/30 bg-red-500/10"
      }`}>
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2">Biot Number</p>
          <div className={`text-4xl font-bold ${
            isValid ? "text-emerald-400" : isWarning ? "text-yellow-400" : "text-red-400"
          }`}>
            Bi = {biotNumber.toFixed(4)}
          </div>
          <div className="mt-4">
            {isValid ? (
              <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">
                Lumped Capacitance VALID (Bi &lt; 0.1)
              </span>
            ) : isWarning ? (
              <span className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium">
                WARNING: Marginal validity (0.1 &lt; Bi &lt; 1)
              </span>
            ) : (
              <span className="px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">
                NOT VALID: Use spatial analysis (Bi &gt; 1)
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Estimated error: ~{(biotNumber * 50).toFixed(1)}% in temperature prediction
          </p>
        </div>
      </div>

      {/* Formula display */}
      <div className="mt-4 p-4 rounded-lg bg-slate-900/50 text-center">
        <Math tex={`\\text{Bi} = \\frac{hL_c}{k} = \\frac{${h} \\times ${Lc.toFixed(4)}}{${k.toFixed(1)}} = ${biotNumber.toFixed(4)}`} />
      </div>
    </motion.div>
  );
}

export default function BiotNumber() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Biot Number (Bi)
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The dimensionless number that determines whether spatial temperature gradients can be neglected in transient conduction analysis.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Definition */}
          <SectionDivider number="1" title="Definition" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The <strong className="text-orange-400">Biot number (Bi)</strong> is a dimensionless quantity that represents the ratio of
              <strong className="text-white"> internal conduction resistance</strong> to
              <strong className="text-white"> external convection resistance</strong>.
              This ratio determines whether the Lumped Capacitance Method is applicable.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6 text-center">
                Biot Number Definition
              </h4>

              <EquationBox label="Biot Number" accent="orange">
                <Math tex={`\\text{Bi} = \\frac{hL_c}{k}`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700 text-center">
                  <p className="text-xs text-gray-500 mb-2">h</p>
                  <p className="text-sm text-white">Convection heat transfer coefficient</p>
                  <p className="text-xs text-gray-500 mt-1">[W/(m^2 K)]</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700 text-center">
                  <p className="text-xs text-gray-500 mb-2">L_c</p>
                  <p className="text-sm text-white">Characteristic length</p>
                  <p className="text-xs text-gray-500 mt-1">[m]</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700 text-center">
                  <p className="text-xs text-gray-500 mb-2">k</p>
                  <p className="text-sm text-white">Solid thermal conductivity</p>
                  <p className="text-xs text-gray-500 mt-1">[W/(m K)]</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Physical Meaning with Thermal Resistance Network */}
          <SectionDivider number="2" title="Physical Meaning: Thermal Resistance Network" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The Biot number can be interpreted as the <strong className="text-white">ratio of two thermal resistances</strong>.
              This interpretation provides deep physical insight into when the lumped approximation is valid.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Thermal Resistance Network Analogy
              </h4>

              {/* Visual resistance network */}
              <div className="mb-8 p-6 bg-slate-900/50 rounded-xl">
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-red-500/30 border-2 border-red-500 flex items-center justify-center text-red-400 font-bold">
                      T_c
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Center</p>
                  </div>
                  <div className="flex-1 max-w-24 h-0 border-t-2 border-dashed border-orange-500/50 relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-orange-400">R_cond</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-orange-500/30 border-2 border-orange-500 flex items-center justify-center text-orange-400 font-bold">
                      T_s
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Surface</p>
                  </div>
                  <div className="flex-1 max-w-24 h-0 border-t-2 border-dashed border-blue-500/50 relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-blue-400">R_conv</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/30 border-2 border-blue-500 flex items-center justify-center text-blue-400 font-bold">
                      T_inf
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Fluid</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <EquationBox label="Biot Number as Resistance Ratio" accent="orange">
                  <Math tex={`\\text{Bi} = \\frac{hL_c}{k} = \\frac{L_c/k}{1/h} = \\frac{R''_{cond}}{R''_{conv}}`} display />
                </EquationBox>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="p-5 rounded-xl bg-slate-950/80 border border-orange-500/20">
                    <h5 className="text-sm font-bold text-orange-400 mb-2">Numerator: Conduction Resistance</h5>
                    <div className="text-center p-3 rounded-lg bg-slate-900/50 mb-3">
                      <Math tex={`R''_{cond} = \\frac{L_c}{k} \\quad \\left[\\frac{\\text{m}^2 \\text{K}}{\\text{W}}\\right]`} />
                    </div>
                    <p className="text-sm text-gray-400">
                      Resistance to heat flow <strong className="text-white">within the solid</strong>.
                      High k materials (metals) have low internal resistance.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-950/80 border border-blue-500/20">
                    <h5 className="text-sm font-bold text-blue-400 mb-2">Denominator: Convection Resistance</h5>
                    <div className="text-center p-3 rounded-lg bg-slate-900/50 mb-3">
                      <Math tex={`R''_{conv} = \\frac{1}{h} \\quad \\left[\\frac{\\text{m}^2 \\text{K}}{\\text{W}}\\right]`} />
                    </div>
                    <p className="text-sm text-gray-400">
                      Resistance to heat flow <strong className="text-white">at the surface</strong>.
                      High h (forced convection, boiling) means low surface resistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Physical Interpretation of Bi" accent="orange" icon="Bi">
              <p className="mb-3">
                <Math tex="\\text{Bi}" /> tells us <strong className="text-white">where the bottleneck is</strong> for heat transfer:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong className="text-emerald-400">Bi &lt;&lt; 1:</strong> Internal resistance is negligible &rarr; Heat spreads quickly inside &rarr; <strong className="text-white">Temperature is uniform</strong> &rarr; Lumped valid
                </li>
                <li>
                  <strong className="text-red-400">Bi &gt;&gt; 1:</strong> Internal resistance dominates &rarr; Heat cannot spread quickly &rarr; <strong className="text-white">Large temperature gradients</strong> &rarr; Lumped invalid
                </li>
              </ul>
            </InsightCard>
          </motion.div>

          <ThinkAboutIt
            question="A copper sphere and a glass sphere of the same size are both cooled by the same air stream. Which one can be analyzed using the lumped capacitance method? Why?"
            hint="Compare thermal conductivities: k_copper = 401 W/mK vs k_glass = 1.4 W/mK. For the same h and L_c, the Biot number scales as 1/k."
          />

          {/* 3. Full Derivation of Bi < 0.1 Criterion */}
          <SectionDivider number="3" title="Why Bi < 0.1? Order of Magnitude Analysis" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The criterion Bi &lt; 0.1 is not arbitrary - it comes from a rigorous analysis of the exact solution
              for transient conduction in simple geometries. Let us derive this criterion using <strong className="text-orange-400">order of magnitude analysis</strong>.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Derivation: Order of Magnitude Analysis
              </h4>

              <div className="space-y-4">
                <DerivationStep
                  step={1}
                  color="blue"
                  equation={`\\text{Temperature drop across solid: } \\Delta T_{solid} = T_{center} - T_{surface} \\sim \\frac{q'' \\cdot L_c}{k}`}
                  description="From Fourier's law: q'' = -k(dT/dx), temperature drop scales with heat flux times distance divided by k"
                />

                <DerivationStep
                  step={2}
                  color="orange"
                  equation={`\\text{Temperature drop across boundary layer: } \\Delta T_{fluid} = T_{surface} - T_\\infty \\sim \\frac{q''}{h}`}
                  description="From Newton's cooling law: q'' = h(T_s - T_inf), temperature drop scales with heat flux divided by h"
                />

                <DerivationStep
                  step={3}
                  color="emerald"
                  equation={`\\frac{\\Delta T_{solid}}{\\Delta T_{fluid}} = \\frac{q'' L_c / k}{q'' / h} = \\frac{hL_c}{k} = \\text{Bi}`}
                  description="Ratio of temperature drops equals Biot number!"
                />

                <DerivationStep
                  step={4}
                  color="purple"
                  equation={`\\text{For Bi} < 0.1: \\quad \\Delta T_{solid} < 0.1 \\cdot \\Delta T_{fluid}`}
                  description="Internal temperature variation is less than 10% of the driving temperature difference"
                />

                <DerivationStep
                  step={5}
                  color="red"
                  equation={`\\text{Error in } T: \\quad \\epsilon \\sim \\frac{\\Delta T_{solid}}{\\Delta T_{total}} \\approx \\frac{\\text{Bi}}{1 + \\text{Bi}} \\approx \\text{Bi} \\quad (\\text{for small Bi})`}
                  description="For Bi = 0.1, error is approximately 10% at most, typically about 5% in practice"
                />
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Why Exactly 0.1 and Not 0.2 or 0.05?" accent="emerald" icon="5%">
              <p>
                The criterion Bi &lt; 0.1 is chosen because:
              </p>
              <ul className="mt-2 space-y-1">
                <li>&bull; At Bi = 0.1, the center-to-surface temperature difference is &lt; 5% of the total temperature difference</li>
                <li>&bull; This corresponds to less than 5% error in using the lumped approximation</li>
                <li>&bull; For most engineering applications, 5% error is acceptable</li>
                <li>&bull; The exact first term solution for a plane wall gives: <Math tex="\\theta_c / \\theta_s \\approx 1.05" /> at Bi = 0.1</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 4. Error Analysis */}
          <SectionDivider number="4" title="Error Analysis: What Happens at Bi = 0.1, 0.5, 1.0?" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Understanding the error introduced by the lumped capacitance approximation at different Biot numbers
              helps engineers make informed decisions about when to use more sophisticated analysis methods.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                Error Analysis for Plane Wall (First Eigenvalue Approximation)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Bi</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Center/Surface Temp Ratio</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Max Error in Lumped</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800 bg-emerald-500/5">
                      <td className="py-3 px-4 font-mono text-emerald-400">0.01</td>
                      <td className="py-3 px-4">~1.005</td>
                      <td className="py-3 px-4">~0.5%</td>
                      <td className="py-3 px-4 text-emerald-400">Excellent - Use Lumped</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-emerald-500/5">
                      <td className="py-3 px-4 font-mono text-emerald-400">0.1</td>
                      <td className="py-3 px-4">~1.05</td>
                      <td className="py-3 px-4">~5%</td>
                      <td className="py-3 px-4 text-emerald-400">Acceptable - Use Lumped</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-yellow-500/5">
                      <td className="py-3 px-4 font-mono text-yellow-400">0.5</td>
                      <td className="py-3 px-4">~1.22</td>
                      <td className="py-3 px-4">~20%</td>
                      <td className="py-3 px-4 text-yellow-400">Marginal - Use with caution</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-red-500/5">
                      <td className="py-3 px-4 font-mono text-red-400">1.0</td>
                      <td className="py-3 px-4">~1.43</td>
                      <td className="py-3 px-4">~35%</td>
                      <td className="py-3 px-4 text-red-400">Not recommended - Use exact solution</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-red-500/5">
                      <td className="py-3 px-4 font-mono text-red-400">10</td>
                      <td className="py-3 px-4">~3.5</td>
                      <td className="py-3 px-4">&gt;70%</td>
                      <td className="py-3 px-4 text-red-400">Never use Lumped</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8 grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
              <p className="text-xs text-gray-500 mb-2">Bi &lt; 0.1</p>
              <p className="text-lg text-emerald-400 font-bold">SAFE ZONE</p>
              <p className="text-xs text-gray-400 mt-2">Error &lt; 5%</p>
              <p className="text-xs text-gray-500">Lumped is accurate</p>
            </div>
            <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-center">
              <p className="text-xs text-gray-500 mb-2">0.1 &lt; Bi &lt; 1</p>
              <p className="text-lg text-yellow-400 font-bold">GRAY ZONE</p>
              <p className="text-xs text-gray-400 mt-2">Error 5-35%</p>
              <p className="text-xs text-gray-500">Engineering judgment needed</p>
            </div>
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-center">
              <p className="text-xs text-gray-500 mb-2">Bi &gt; 1</p>
              <p className="text-lg text-red-400 font-bold">DANGER ZONE</p>
              <p className="text-xs text-gray-400 mt-2">Error &gt; 35%</p>
              <p className="text-xs text-gray-500">Never use Lumped</p>
            </div>
          </motion.div>

          <EngineeringApplication title="MFTEL Immersion Cooling Research">
            <p>
              In our MFTEL research on <strong className="text-cyan-400">GPU/TPU immersion cooling</strong>,
              we often encounter high heat transfer coefficients (h ~ 1000-5000 W/m^2K) due to dielectric fluid boiling.
            </p>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li>&bull; For a silicon chip (k ~ 150 W/mK) with L_c = 0.5 mm: Bi ~ 0.003-0.017</li>
              <li>&bull; For the copper heat spreader (k ~ 400 W/mK) with L_c = 2 mm: Bi ~ 0.005-0.025</li>
              <li>&bull; <strong className="text-white">Both cases satisfy Bi &lt; 0.1</strong>, so lumped analysis provides quick initial estimates</li>
              <li>&bull; However, for thermal interface materials (k ~ 1-5 W/mK), Bi can exceed 1, requiring detailed thermal modeling</li>
            </ul>
          </EngineeringApplication>

          {/* 5. Characteristic Length */}
          <SectionDivider number="5" title="Characteristic Length for Different Geometries" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The <strong className="text-orange-400">characteristic length L_c</strong> represents the typical distance
              that heat must travel within the solid. For lumped analysis, we use the <strong className="text-white">volume-to-surface-area ratio</strong>.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <EquationBox label="Characteristic Length Definition" accent="blue">
                <Math tex={`L_c = \\frac{V}{A_s}`} display />
              </EquationBox>

              <div className="mt-6 text-center text-gray-400 text-sm">
                V = Volume of the solid, A_s = Surface area through which heat transfer occurs
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                Characteristic Lengths for Common Geometries
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Geometry</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="L_c = V/A_s" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Physical Interpretation</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {characteristicLengths.map((item, i) => (
                      <tr key={i} className="border-b border-slate-800">
                        <td className="py-3 px-4 font-bold text-white">{item.geometry}</td>
                        <td className="py-3 px-4"><Math tex={item.lcTex} /></td>
                        <td className="py-3 px-4 text-gray-400 text-xs">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Why V/A_s?" accent="blue" icon="?">
              <p>
                The ratio V/A_s represents the <strong className="text-blue-400">average distance</strong> heat must travel to reach the surface:
              </p>
              <ul className="mt-2 space-y-1">
                <li>&bull; V represents thermal energy storage capacity</li>
                <li>&bull; A_s represents the "gateway" for heat exchange with the environment</li>
                <li>&bull; Larger V/A_s = longer average path = higher internal resistance</li>
                <li>&bull; A sphere has the smallest L_c for a given volume (most efficient heat exchange)</li>
              </ul>
            </InsightCard>
          </motion.div>

          <ThinkAboutIt
            question="Two objects have the same volume. One is a sphere and the other is a long thin wire. Which one has a smaller Biot number under the same cooling conditions? Which will reach equilibrium faster?"
            hint="Calculate V/A_s for each. For a sphere: L_c = r/3. For a long cylinder: L_c = r/2. But the wire has a much smaller radius for the same volume..."
          />

          {/* 6. Interactive Calculator */}
          <SectionDivider number="6" title="Interactive Biot Number Calculator" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Use this interactive calculator to explore how changes in h, L_c, and k affect the Biot number
              and determine whether the lumped capacitance method is applicable.
            </p>
          </motion.div>

          <BiotCalculator />

          {/* 7. How to Reduce Biot Number */}
          <SectionDivider number="7" title="Design Strategies: Reducing Biot Number" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              To apply the Lumped Capacitance Method, we need <Math tex="\\text{Bi} = hL_c/k < 0.1" />.
              Here are design strategies to satisfy this criterion:
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
                <h4 className="text-sm font-bold text-blue-400 mb-3">Increase k (High Conductivity Material)</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Use materials with high thermal conductivity to allow rapid internal heat spreading.
                </p>
                <p className="text-xs text-gray-500">
                  Examples: Cu (401), Al (237), graphite composites (300-500 W/mK)
                </p>
                <div className="mt-3 p-2 bg-slate-900/50 rounded text-xs text-blue-300">
                  k appears in denominator: doubling k halves Bi
                </div>
              </div>

              <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
                <h4 className="text-sm font-bold text-orange-400 mb-3">Decrease L_c (Smaller Size)</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Use smaller objects or increase surface area relative to volume.
                </p>
                <p className="text-xs text-gray-500">
                  Examples: Small parts, thin plates, fins, wires
                </p>
                <div className="mt-3 p-2 bg-slate-900/50 rounded text-xs text-orange-300">
                  L_c appears in numerator: halving size halves Bi
                </div>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <h4 className="text-sm font-bold text-emerald-400 mb-3">Decrease h (Gentler Cooling)</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Use natural convection or lower velocity flows when possible.
                </p>
                <p className="text-xs text-gray-500">
                  Examples: Natural convection (5-25), low-speed forced (25-250 W/m^2K)
                </p>
                <div className="mt-3 p-2 bg-slate-900/50 rounded text-xs text-emerald-300">
                  h appears in numerator: halving h halves Bi
                </div>
              </div>
            </div>
          </motion.div>

          {/* 8. Example Calculations */}
          <SectionDivider number="8" title="Example Calculations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Let us calculate Biot numbers for various materials and conditions to understand when
              the Lumped Capacitance Method can be applied. Assume L_c = 1 cm (0.01 m).
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                Biot Number Examples (L_c = 0.01 m)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Case</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">k [W/mK]</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">h [W/m^2K]</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Bi</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Lumped Valid?</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {biotExamples.map((item, i) => (
                      <tr key={i} className="border-b border-slate-800">
                        <td className="py-3 px-4 font-bold text-white">{item.material}</td>
                        <td className="py-3 px-4">{item.k}</td>
                        <td className="py-3 px-4">{item.h}</td>
                        <td className="py-3 px-4 font-mono">{item.bi}</td>
                        <td className="py-3 px-4">
                          {item.valid ? (
                            <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">Yes</span>
                          ) : (
                            <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-xs">No</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Key Observations" accent="yellow" icon="!">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">Copper</strong>: Very high k makes it valid even for aggressive cooling (h=1000)</li>
                <li>&bull; <strong className="text-white">Steel</strong>: Moderate k, valid for gentle cooling but fails at high h</li>
                <li>&bull; <strong className="text-white">Glass</strong>: Low k makes it invalid even for natural convection</li>
                <li>&bull; <strong className="text-white">Key insight</strong>: The material k and cooling condition h must be considered together</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 9. Biot vs Nusselt */}
          <SectionDivider number="9" title="Biot Number vs. Nusselt Number" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              The Biot and Nusselt numbers look similar but have fundamentally different physical meanings.
              Confusing them is a common mistake that must be avoided.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                  Biot Number
                </h4>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-orange-500/20 mb-4">
                  <Math tex={`\\text{Bi} = \\frac{hL_c}{k_{solid}}`} display />
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-orange-400">k:</strong> <strong className="text-white">Solid</strong> thermal conductivity</li>
                  <li><strong className="text-orange-400">Purpose:</strong> Compare internal vs external resistance</li>
                  <li><strong className="text-orange-400">Question:</strong> Is the solid temperature uniform?</li>
                  <li><strong className="text-orange-400">Domain:</strong> Transient conduction in solids</li>
                </ul>
              </div>

              <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                  Nusselt Number
                </h4>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-blue-500/20 mb-4">
                  <Math tex={`\\text{Nu} = \\frac{hL}{k_{fluid}}`} display />
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-blue-400">k:</strong> <strong className="text-white">Fluid</strong> thermal conductivity</li>
                  <li><strong className="text-blue-400">Purpose:</strong> Compare convection vs conduction in fluid</li>
                  <li><strong className="text-blue-400">Question:</strong> How effective is convection?</li>
                  <li><strong className="text-blue-400">Domain:</strong> Convective heat transfer</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Critical Distinction" accent="red" icon="!">
              <p>
                <strong className="text-orange-400">Bi</strong> uses the thermal conductivity of the <strong className="text-white">solid</strong>,
                while <strong className="text-blue-400">Nu</strong> uses the thermal conductivity of the <strong className="text-white">fluid</strong>.
              </p>
              <p className="mt-2">
                This is because Bi addresses heat transfer <strong className="text-white">within</strong> the solid,
                while Nu addresses heat transfer <strong className="text-white">in</strong> the fluid boundary layer.
              </p>
              <div className="mt-3 p-3 bg-slate-950/80 rounded-lg">
                <p className="text-xs">
                  Example: For steel (k=60 W/mK) cooled by air (k=0.026 W/mK) with h=50 W/m^2K and L=0.01m:
                </p>
                <p className="text-xs mt-1">
                  Bi = 50 x 0.01 / 60 = <strong className="text-orange-400">0.0083</strong> (lumped valid)
                </p>
                <p className="text-xs mt-1">
                  Nu = 50 x 0.01 / 0.026 = <strong className="text-blue-400">19.2</strong> (significant convection enhancement)
                </p>
              </div>
            </InsightCard>
          </motion.div>

          <ThinkAboutIt
            question="If the Nusselt number for a heat transfer problem is very large (Nu >> 1), does this mean the Biot number is also large? Can you have a situation where Nu >> 1 but Bi << 1?"
            hint="Consider a highly conductive metal (high k_solid) being cooled by forced convection in air (low k_fluid). The large ratio k_solid/k_fluid can lead to very different Bi and Nu values."
          />
        </div>
      </div>
    </section>
  );
}

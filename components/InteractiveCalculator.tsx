"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import MathTex from "@/components/Math";

/* ── Types ───────────────────────────────────────────────────────── */

type CalculatorType = "biot" | "fourier" | "reynolds" | "nusselt";

interface CalculatorState {
  biot: { h: string; Lc: string; k: string };
  fourier: { alpha: string; t: string; L: string };
  reynolds: { rho: string; V: string; L: string; mu: string };
  nusselt: { h: string; L: string; k: string };
}

/* ── Helper Functions ────────────────────────────────────────────── */

function parseNumber(value: string): number | null {
  if (value === "" || value === "-") return null;
  const num = parseFloat(value);
  return isNaN(num) ? null : num;
}

function formatResult(value: number | null, decimals: number = 4): string {
  if (value === null) return "—";
  if (Math.abs(value) < 0.0001 || Math.abs(value) > 10000) {
    return value.toExponential(decimals);
  }
  return value.toFixed(decimals);
}

/* ── Animation Variants ──────────────────────────────────────────── */

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

/* ── Input Component ─────────────────────────────────────────────── */

interface NumberInputProps {
  label: string;
  symbol: string;
  unit: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function NumberInput({ label, symbol, unit, value, onChange, placeholder }: NumberInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs text-gray-400 flex items-center gap-2">
        <span className="font-mono text-cyan-400">{symbol}</span>
        <span>{label}</span>
      </label>
      <div className="flex items-center gap-2">
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || "0"}
          className="flex-1 bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm font-mono focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
        />
        <span className="text-xs text-gray-500 min-w-[60px]">{unit}</span>
      </div>
    </div>
  );
}

/* ── Result Display Component ────────────────────────────────────── */

interface ResultDisplayProps {
  label: string;
  formula: string;
  value: string;
  status?: "valid" | "invalid" | "caution" | "neutral";
  statusText?: string;
}

function ResultDisplay({ label, formula, value, status = "neutral", statusText }: ResultDisplayProps) {
  const statusColors = {
    valid: "border-emerald-500/50 bg-emerald-500/10",
    invalid: "border-red-500/50 bg-red-500/10",
    caution: "border-yellow-500/50 bg-yellow-500/10",
    neutral: "border-slate-700 bg-slate-800/60",
  };

  const statusTextColors = {
    valid: "text-emerald-400",
    invalid: "text-red-400",
    caution: "text-yellow-400",
    neutral: "text-gray-400",
  };

  return (
    <div className={`rounded-xl border ${statusColors[status]} p-4`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">{label}</span>
        {statusText && (
          <span className={`text-xs px-2 py-0.5 rounded-full ${status === "valid" ? "bg-emerald-500/20" : status === "invalid" ? "bg-red-500/20" : "bg-yellow-500/20"} ${statusTextColors[status]}`}>
            {statusText}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="text-cyan-400">
          <MathTex tex={formula} />
        </div>
        <div className={`text-xl font-mono font-bold ${statusTextColors[status]}`}>
          {value}
        </div>
      </div>
    </div>
  );
}

/* ── Calculator Tabs ─────────────────────────────────────────────── */

const calculatorTabs: { id: CalculatorType; label: string; symbol: string }[] = [
  { id: "biot", label: "Biot", symbol: "Bi" },
  { id: "fourier", label: "Fourier", symbol: "Fo" },
  { id: "reynolds", label: "Reynolds", symbol: "Re" },
  { id: "nusselt", label: "Nusselt", symbol: "Nu" },
];

/* ── Biot Number Calculator ──────────────────────────────────────── */

function BiotCalculator({ values, onChange }: {
  values: CalculatorState["biot"];
  onChange: (key: keyof CalculatorState["biot"], value: string) => void;
}) {
  const result = useMemo(() => {
    const h = parseNumber(values.h);
    const Lc = parseNumber(values.Lc);
    const k = parseNumber(values.k);

    if (h === null || Lc === null || k === null) return null;
    if (k === 0) return null;

    return (h * Lc) / k;
  }, [values]);

  const status: "valid" | "invalid" | "caution" | "neutral" = useMemo(() => {
    if (result === null) return "neutral";
    if (result < 0.1) return "valid";
    if (result < 1) return "caution";
    return "invalid";
  }, [result]);

  const statusText = useMemo(() => {
    if (result === null) return undefined;
    if (result < 0.1) return "Lumped Valid";
    if (result < 1) return "Caution Zone";
    return "Lumped Invalid";
  }, [result]);

  return (
    <div className="space-y-6">
      {/* Helper Text */}
      <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
        <h4 className="text-sm font-bold text-cyan-400 mb-2">Physical Significance</h4>
        <p className="text-sm text-gray-400 leading-relaxed">
          The <strong className="text-white">Biot number</strong> compares the thermal resistance inside a body
          (conduction) to the thermal resistance at its surface (convection). When Bi &lt; 0.1, the internal
          temperature gradient is negligible, allowing the <strong className="text-cyan-400">Lumped Capacitance Method</strong> to be used.
        </p>
        <div className="mt-3 text-center">
          <MathTex tex="Bi = \frac{hL_c}{k} = \frac{R_{cond}}{R_{conv}}" display />
        </div>
      </div>

      {/* Inputs */}
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput
          label="Convection coefficient"
          symbol="h"
          unit="W/(m^2 K)"
          value={values.h}
          onChange={(v) => onChange("h", v)}
          placeholder="e.g., 100"
        />
        <NumberInput
          label="Characteristic length"
          symbol="L_c"
          unit="m"
          value={values.Lc}
          onChange={(v) => onChange("Lc", v)}
          placeholder="e.g., 0.01"
        />
        <NumberInput
          label="Thermal conductivity"
          symbol="k"
          unit="W/(m K)"
          value={values.k}
          onChange={(v) => onChange("k", v)}
          placeholder="e.g., 50"
        />
      </div>

      {/* Result */}
      <ResultDisplay
        label="Biot Number"
        formula="Bi = \frac{hL_c}{k}"
        value={formatResult(result)}
        status={status}
        statusText={statusText}
      />

      {/* Validity Guide */}
      <div className="grid grid-cols-3 gap-3 text-center text-xs">
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <p className="text-emerald-400 font-bold">Bi &lt; 0.1</p>
          <p className="text-gray-400 mt-1">Lumped Valid</p>
        </div>
        <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
          <p className="text-yellow-400 font-bold">0.1 &lt; Bi &lt; 1</p>
          <p className="text-gray-400 mt-1">Caution</p>
        </div>
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
          <p className="text-red-400 font-bold">Bi &gt; 1</p>
          <p className="text-gray-400 mt-1">Lumped Invalid</p>
        </div>
      </div>
    </div>
  );
}

/* ── Fourier Number Calculator ───────────────────────────────────── */

function FourierCalculator({ values, onChange }: {
  values: CalculatorState["fourier"];
  onChange: (key: keyof CalculatorState["fourier"], value: string) => void;
}) {
  const result = useMemo(() => {
    const alpha = parseNumber(values.alpha);
    const t = parseNumber(values.t);
    const L = parseNumber(values.L);

    if (alpha === null || t === null || L === null) return null;
    if (L === 0) return null;

    return (alpha * t) / (L * L);
  }, [values]);

  const status: "valid" | "caution" | "neutral" = useMemo(() => {
    if (result === null) return "neutral";
    if (result > 0.2) return "valid";
    return "caution";
  }, [result]);

  const statusText = useMemo(() => {
    if (result === null) return undefined;
    if (result > 0.2) return "One-term approx. valid";
    return "May need full solution";
  }, [result]);

  return (
    <div className="space-y-6">
      {/* Helper Text */}
      <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
        <h4 className="text-sm font-bold text-purple-400 mb-2">Physical Significance</h4>
        <p className="text-sm text-gray-400 leading-relaxed">
          The <strong className="text-white">Fourier number</strong> represents the ratio of the rate of heat
          conduction to the rate of thermal energy storage. It indicates how far heat has penetrated
          into a body relative to its size. For Fo &gt; 0.2, the <strong className="text-purple-400">one-term approximation</strong> is valid.
        </p>
        <div className="mt-3 text-center">
          <MathTex tex="Fo = \frac{\alpha t}{L^2} = \frac{\text{Conduction rate}}{\text{Storage rate}}" display />
        </div>
      </div>

      {/* Inputs */}
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput
          label="Thermal diffusivity"
          symbol="\alpha"
          unit="m^2/s"
          value={values.alpha}
          onChange={(v) => onChange("alpha", v)}
          placeholder="e.g., 1e-5"
        />
        <NumberInput
          label="Time"
          symbol="t"
          unit="s"
          value={values.t}
          onChange={(v) => onChange("t", v)}
          placeholder="e.g., 100"
        />
        <NumberInput
          label="Characteristic length"
          symbol="L"
          unit="m"
          value={values.L}
          onChange={(v) => onChange("L", v)}
          placeholder="e.g., 0.01"
        />
      </div>

      {/* Result */}
      <ResultDisplay
        label="Fourier Number"
        formula="Fo = \frac{\alpha t}{L^2}"
        value={formatResult(result)}
        status={status}
        statusText={statusText}
      />

      {/* Typical Ranges */}
      <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-3">Typical Ranges & Applications</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="p-3 rounded-lg bg-slate-900/50">
            <p className="text-purple-400 font-mono mb-1">Fo &gt; 0.2</p>
            <p className="text-gray-400">One-term series approximation is valid. Interior temperature varies slowly.</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/50">
            <p className="text-yellow-400 font-mono mb-1">Fo &lt; 0.2</p>
            <p className="text-gray-400">Full series solution needed. Early transient behavior.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Reynolds Number Calculator ──────────────────────────────────── */

function ReynoldsCalculator({ values, onChange }: {
  values: CalculatorState["reynolds"];
  onChange: (key: keyof CalculatorState["reynolds"], value: string) => void;
}) {
  const result = useMemo(() => {
    const rho = parseNumber(values.rho);
    const V = parseNumber(values.V);
    const L = parseNumber(values.L);
    const mu = parseNumber(values.mu);

    if (rho === null || V === null || L === null || mu === null) return null;
    if (mu === 0) return null;

    return (rho * V * L) / mu;
  }, [values]);

  const flowRegime = useMemo(() => {
    if (result === null) return { status: "neutral" as const, text: undefined };
    if (result < 2300) return { status: "valid" as const, text: "Laminar" };
    if (result < 4000) return { status: "caution" as const, text: "Transition" };
    return { status: "invalid" as const, text: "Turbulent" };
  }, [result]);

  return (
    <div className="space-y-6">
      {/* Helper Text */}
      <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
        <h4 className="text-sm font-bold text-teal-400 mb-2">Physical Significance</h4>
        <p className="text-sm text-gray-400 leading-relaxed">
          The <strong className="text-white">Reynolds number</strong> represents the ratio of inertial forces
          to viscous forces. It determines whether flow is <strong className="text-emerald-400">laminar</strong> (smooth,
          orderly) or <strong className="text-red-400">turbulent</strong> (chaotic, with eddies).
        </p>
        <div className="mt-3 text-center">
          <MathTex tex="Re = \frac{\rho V L}{\mu} = \frac{VL}{\nu} = \frac{\text{Inertial forces}}{\text{Viscous forces}}" display />
        </div>
      </div>

      {/* Inputs */}
      <div className="grid md:grid-cols-2 gap-4">
        <NumberInput
          label="Fluid density"
          symbol="\rho"
          unit="kg/m^3"
          value={values.rho}
          onChange={(v) => onChange("rho", v)}
          placeholder="e.g., 1.225 (air)"
        />
        <NumberInput
          label="Characteristic velocity"
          symbol="V"
          unit="m/s"
          value={values.V}
          onChange={(v) => onChange("V", v)}
          placeholder="e.g., 10"
        />
        <NumberInput
          label="Characteristic length"
          symbol="L"
          unit="m"
          value={values.L}
          onChange={(v) => onChange("L", v)}
          placeholder="e.g., 0.1"
        />
        <NumberInput
          label="Dynamic viscosity"
          symbol="\mu"
          unit="Pa.s"
          value={values.mu}
          onChange={(v) => onChange("mu", v)}
          placeholder="e.g., 1.8e-5 (air)"
        />
      </div>

      {/* Result */}
      <ResultDisplay
        label="Reynolds Number"
        formula="Re = \frac{\rho V L}{\mu}"
        value={formatResult(result, 0)}
        status={flowRegime.status}
        statusText={flowRegime.text}
      />

      {/* Flow Regime Guide */}
      <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-3">Flow Regime Criteria (Internal Pipe Flow)</h4>
        <div className="grid grid-cols-3 gap-3 text-center text-xs">
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-emerald-400 font-bold">Re &lt; 2,300</p>
            <p className="text-gray-400 mt-1">Laminar Flow</p>
            <p className="text-gray-500 text-[10px] mt-1">Smooth, predictable</p>
          </div>
          <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
            <p className="text-yellow-400 font-bold">2,300 &lt; Re &lt; 4,000</p>
            <p className="text-gray-400 mt-1">Transition</p>
            <p className="text-gray-500 text-[10px] mt-1">Intermittent turbulence</p>
          </div>
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-red-400 font-bold">Re &gt; 4,000</p>
            <p className="text-gray-400 mt-1">Turbulent Flow</p>
            <p className="text-gray-500 text-[10px] mt-1">Enhanced mixing</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">
          Note: Critical Re varies by geometry. Flat plate: ~5 x 10^5, External cylinder: ~2 x 10^5
        </p>
      </div>
    </div>
  );
}

/* ── Nusselt Number Calculator ───────────────────────────────────── */

function NusseltCalculator({ values, onChange }: {
  values: CalculatorState["nusselt"];
  onChange: (key: keyof CalculatorState["nusselt"], value: string) => void;
}) {
  const result = useMemo(() => {
    const h = parseNumber(values.h);
    const L = parseNumber(values.L);
    const k = parseNumber(values.k);

    if (h === null || L === null || k === null) return null;
    if (k === 0) return null;

    return (h * L) / k;
  }, [values]);

  const status: "valid" | "neutral" = useMemo(() => {
    if (result === null) return "neutral";
    return result > 1 ? "valid" : "neutral";
  }, [result]);

  const statusText = useMemo(() => {
    if (result === null) return undefined;
    if (result > 100) return "Strong convection";
    if (result > 10) return "Moderate convection";
    if (result > 1) return "Weak convection";
    return "Conduction dominant";
  }, [result]);

  return (
    <div className="space-y-6">
      {/* Helper Text */}
      <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
        <h4 className="text-sm font-bold text-orange-400 mb-2">Physical Significance</h4>
        <p className="text-sm text-gray-400 leading-relaxed">
          The <strong className="text-white">Nusselt number</strong> represents the enhancement of heat transfer
          due to convection compared to pure conduction. Nu = 1 means heat is transferred by conduction only;
          larger values indicate <strong className="text-orange-400">stronger convective enhancement</strong>.
        </p>
        <div className="mt-3 text-center">
          <MathTex tex="Nu = \frac{hL}{k_{fluid}} = \frac{\text{Convective heat transfer}}{\text{Conductive heat transfer}}" display />
        </div>
      </div>

      {/* Inputs */}
      <div className="grid md:grid-cols-3 gap-4">
        <NumberInput
          label="Convection coefficient"
          symbol="h"
          unit="W/(m^2 K)"
          value={values.h}
          onChange={(v) => onChange("h", v)}
          placeholder="e.g., 50"
        />
        <NumberInput
          label="Characteristic length"
          symbol="L"
          unit="m"
          value={values.L}
          onChange={(v) => onChange("L", v)}
          placeholder="e.g., 0.1"
        />
        <NumberInput
          label="Fluid thermal conductivity"
          symbol="k_{fluid}"
          unit="W/(m K)"
          value={values.k}
          onChange={(v) => onChange("k", v)}
          placeholder="e.g., 0.026 (air)"
        />
      </div>

      {/* Result */}
      <ResultDisplay
        label="Nusselt Number"
        formula="Nu = \frac{hL}{k}"
        value={formatResult(result, 2)}
        status={status}
        statusText={statusText}
      />

      {/* Biot vs Nusselt Comparison */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/5 to-cyan-500/5 border border-slate-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-3">Nusselt vs. Biot: Key Difference</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="p-3 rounded-lg bg-slate-900/50 border border-orange-500/20">
            <p className="text-orange-400 font-bold mb-1">Nusselt Number (Nu)</p>
            <p className="text-gray-400">Uses <strong className="text-white">fluid</strong> thermal conductivity k</p>
            <p className="text-gray-500 text-xs mt-1">Measures convective enhancement in fluid</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/50 border border-cyan-500/20">
            <p className="text-cyan-400 font-bold mb-1">Biot Number (Bi)</p>
            <p className="text-gray-400">Uses <strong className="text-white">solid</strong> thermal conductivity k</p>
            <p className="text-gray-500 text-xs mt-1">Measures internal vs. surface resistance in solid</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────────── */

export default function InteractiveCalculator() {
  const [activeTab, setActiveTab] = useState<CalculatorType>("biot");
  const [values, setValues] = useState<CalculatorState>({
    biot: { h: "", Lc: "", k: "" },
    fourier: { alpha: "", t: "", L: "" },
    reynolds: { rho: "", V: "", L: "", mu: "" },
    nusselt: { h: "", L: "", k: "" },
  });

  const handleBiotChange = (key: keyof CalculatorState["biot"], value: string) => {
    setValues((prev) => ({ ...prev, biot: { ...prev.biot, [key]: value } }));
  };

  const handleFourierChange = (key: keyof CalculatorState["fourier"], value: string) => {
    setValues((prev) => ({ ...prev, fourier: { ...prev.fourier, [key]: value } }));
  };

  const handleReynoldsChange = (key: keyof CalculatorState["reynolds"], value: string) => {
    setValues((prev) => ({ ...prev, reynolds: { ...prev.reynolds, [key]: value } }));
  };

  const handleNusseltChange = (key: keyof CalculatorState["nusselt"], value: string) => {
    setValues((prev) => ({ ...prev, nusselt: { ...prev.nusselt, [key]: value } }));
  };

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Interactive Tool
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dimensionless Number Calculator
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Calculate key dimensionless numbers used in heat transfer analysis with real-time feedback.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="rounded-2xl bg-slate-900/60 border border-slate-700/40 overflow-hidden"
        >
          {/* Tab Navigation */}
          <div className="flex border-b border-slate-700/50 overflow-x-auto">
            {calculatorTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[100px] px-4 py-4 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? "text-cyan-400 bg-slate-800/50"
                    : "text-gray-400 hover:text-white hover:bg-slate-800/30"
                }`}
              >
                <span className="font-mono mr-2">{tab.symbol}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Calculator Content */}
          <div className="p-6 md:p-8">
            {activeTab === "biot" && (
              <BiotCalculator values={values.biot} onChange={handleBiotChange} />
            )}
            {activeTab === "fourier" && (
              <FourierCalculator values={values.fourier} onChange={handleFourierChange} />
            )}
            {activeTab === "reynolds" && (
              <ReynoldsCalculator values={values.reynolds} onChange={handleReynoldsChange} />
            )}
            {activeTab === "nusselt" && (
              <NusseltCalculator values={values.nusselt} onChange={handleNusseltChange} />
            )}
          </div>
        </motion.div>

        {/* Quick Reference */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 grid md:grid-cols-4 gap-4"
        >
          <div className="p-4 rounded-xl bg-slate-900/40 border border-cyan-500/20 text-center">
            <p className="text-cyan-400 font-mono text-lg mb-1">Bi</p>
            <p className="text-xs text-gray-400">Internal vs. Surface Resistance</p>
            <div className="mt-2">
              <MathTex tex="Bi = \frac{hL_c}{k_{solid}}" />
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-purple-500/20 text-center">
            <p className="text-purple-400 font-mono text-lg mb-1">Fo</p>
            <p className="text-xs text-gray-400">Heat Penetration Depth</p>
            <div className="mt-2">
              <MathTex tex="Fo = \frac{\alpha t}{L^2}" />
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-teal-500/20 text-center">
            <p className="text-teal-400 font-mono text-lg mb-1">Re</p>
            <p className="text-xs text-gray-400">Inertia vs. Viscosity</p>
            <div className="mt-2">
              <MathTex tex="Re = \frac{\rho VL}{\mu}" />
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-orange-500/20 text-center">
            <p className="text-orange-400 font-mono text-lg mb-1">Nu</p>
            <p className="text-xs text-gray-400">Convection Enhancement</p>
            <div className="mt-2">
              <MathTex tex="Nu = \frac{hL}{k_{fluid}}" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

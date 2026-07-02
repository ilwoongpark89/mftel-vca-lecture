"use client";

import { motion } from "framer-motion";
import Math from "@/components/Math";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const specialCases = [
  {
    name: "General Heat Equation",
    formal: "Full form (variable k)",
    eqTex: String.raw`\frac{\partial}{\partial x}\!\left(k \frac{\partial T}{\partial x}\right) + \frac{\partial}{\partial y}\!\left(k \frac{\partial T}{\partial y}\right) + \frac{\partial}{\partial z}\!\left(k \frac{\partial T}{\partial z}\right) + \dot{q} = \rho c_p \frac{\partial T}{\partial t}`,
    desc: "가장 일반적인 직교 좌표계 형태. 어떤 가정도 하지 않은 상태입니다.",
    color: "text-orange-400",
    border: "border-orange-500/30",
    bg: "bg-orange-500/5",
  },
  {
    name: "Fourier\u2013Biot Equation",
    formal: "Constant k",
    eqTex: String.raw`\nabla^2 T + \frac{\dot{q}}{k} = \frac{1}{\alpha}\frac{\partial T}{\partial t}`,
    desc: "열전도율 k가 상수 \u2192 공간 미분 밖으로 꺼낼 수 있습니다.",
    color: "text-yellow-400",
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/5",
  },
  {
    name: "Diffusion (Fourier) Equation",
    formal: "No internal generation",
    eqTex: String.raw`\nabla^2 T = \frac{1}{\alpha}\frac{\partial T}{\partial t}`,
    desc: "체적 열 생성 없음 (\u0071\u0307 = 0). 순수한 열에너지 확산 과정입니다.",
    color: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
  },
  {
    name: "Poisson\u2019s Equation",
    formal: "Steady state + generation",
    eqTex: String.raw`\nabla^2 T + \frac{\dot{q}}{k} = 0`,
    desc: "정상상태 (\u2202T/\u2202t = 0)이면서 내부 열 생성이 있는 경우입니다.",
    color: "text-green-400",
    border: "border-green-500/30",
    bg: "bg-green-500/5",
  },
  {
    name: "Laplace\u2019s Equation",
    formal: "Steady, no generation",
    eqTex: String.raw`\nabla^2 T = 0`,
    desc: "가장 단순한 형태. 정상상태, 열 생성 없음. 온도 분포는 경계조건에만 의존합니다.",
    color: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-500/5",
  },
];

const diffusivityData = [
  { material: "Copper", alpha: "117 \u00D7 10\u207B\u2076", category: "metal" },
  { material: "Aluminum", alpha: "97.5 \u00D7 10\u207B\u2076", category: "metal" },
  { material: "Steel (carbon)", alpha: "14.1 \u00D7 10\u207B\u2076", category: "metal" },
  { material: "Stainless Steel", alpha: "3.95 \u00D7 10\u207B\u2076", category: "metal" },
  { material: "Concrete", alpha: "0.75 \u00D7 10\u207B\u2076", category: "nonmetal" },
  { material: "Wood (oak)", alpha: "0.17 \u00D7 10\u207B\u2076", category: "nonmetal" },
  { material: "Water", alpha: "0.143 \u00D7 10\u207B\u2076", category: "liquid" },
  { material: "Air", alpha: "22.5 \u00D7 10\u207B\u2076", category: "gas" },
];

const derivationSteps = [
  {
    label: "Energy entering x-face",
    eqTex: String.raw`q_x = q''_x \cdot dy \cdot dz`,
  },
  {
    label: "Energy leaving x+dx face (Taylor expansion)",
    eqTex: String.raw`q_{x+dx} = q_x + \frac{\partial q_x}{\partial x}\,dx`,
  },
  {
    label: "Net energy in x-direction",
    eqTex: String.raw`q_x - q_{x+dx} = -\frac{\partial q_x}{\partial x}\,dx`,
  },
  {
    label: "Substitute Fourier\u2019s law: q\u2093 = \u2212k(\u2202T/\u2202x)\u00B7dy\u00B7dz",
    eqTex: String.raw`\text{Net}_x = \frac{\partial}{\partial x}\!\left(k \frac{\partial T}{\partial x}\right) dx\,dy\,dz`,
  },
  {
    label: "Sum all three directions + generation = storage",
    eqTex: String.raw`\left[\frac{\partial}{\partial x}\!\left(k\frac{\partial T}{\partial x}\right) + \frac{\partial}{\partial y}\!\left(k\frac{\partial T}{\partial y}\right) + \frac{\partial}{\partial z}\!\left(k\frac{\partial T}{\partial z}\right) + \dot{q}\right] dx\,dy\,dz = \rho c_p \frac{\partial T}{\partial t}\,dx\,dy\,dz`,
  },
  {
    label: "Divide through by dx\u00B7dy\u00B7dz",
    eqTex: String.raw`\frac{\partial}{\partial x}\!\left(k\frac{\partial T}{\partial x}\right) + \frac{\partial}{\partial y}\!\left(k\frac{\partial T}{\partial y}\right) + \frac{\partial}{\partial z}\!\left(k\frac{\partial T}{\partial z}\right) + \dot{q} = \rho c_p \frac{\partial T}{\partial t}`,
  },
];

const summarySteps = [
  {
    step: "Step 1",
    title: "Choose coordinate system",
    desc: "평판 형상은 Cartesian (x, y, z). 파이프/전선은 Cylindrical (r, \u03C6, z). 구는 Spherical (r, \u03B8, \u03C6).",
    color: "text-orange-400",
  },
  {
    step: "Step 2",
    title: "Identify simplifications",
    desc: "정상상태? (\u2202T/\u2202t = 0). 1차원? k 상수? 열 생성 없음? (q\u0307 = 0). 대칭성?",
    color: "text-yellow-400",
  },
  {
    step: "Step 3",
    title: "Write simplified governing equation",
    desc: "일반 열방정식에서 0인 항을 제거하여 가장 간단한 적용 가능 형태를 얻습니다.",
    color: "text-green-400",
  },
  {
    step: "Step 4",
    title: "Apply boundary conditions",
    desc: "ODE/PDE를 적분합니다. 각 적분마다 경계조건(BC)으로 결정해야 할 상수가 생깁니다.",
    color: "text-blue-400",
  },
  {
    step: "Step 5",
    title: "Find temperature distribution",
    desc: "문제의 형상과 시간 의존성에 따라 T(x), T(r), 또는 T(x, t)를 구합니다.",
    color: "text-indigo-400",
  },
  {
    step: "Step 6",
    title: "Find heat flux / heat rate",
    desc: "Fourier\u2019s law 적용: q\u2033 = \u2212k dT/dx (또는 dT/dr). 면적을 곱하면 열전달률 q를 얻습니다.",
    color: "text-purple-400",
  },
];

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */

export default function HeatDiffusionEquation() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Heat Diffusion Equation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            미소 체적(differential control volume)에 에너지 보존을 적용하여 열전도의 일반 방정식을 유도합니다.
            이 방정식은 열전달 해석의 출발점입니다.
          </p>
        </motion.div>

        {/* ================================================================
            SECTION 1 — Energy Balance on Differential Control Volume
            ================================================================ */}
        <div className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8 md:p-10"
          >
            <h3 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-2">
              Section 1
            </h3>
            <h4 className="text-2xl font-bold text-white mb-8">
              Energy Balance on a Differential Control Volume
            </h4>

            {/* CV description */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 mb-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                고체 매질 내에서 크기가{" "}
                <strong className="text-orange-300">
                  <Math tex={`dx \\cdot dy \\cdot dz`} />
                </strong>{" "}
                인 미소 체적(infinitesimal control volume)을 생각합니다. 열은 6개 면을 통해 출입할 수 있고,
                체적 내부에서 열이 생성될 수 있으며, 저장 에너지는 시간에 따라 변할 수 있습니다.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">에너지 유입 (한 쌍의 면)</p>
                  <div className="text-lg text-orange-300">
                    <Math tex={`q_x,\\; q_y,\\; q_z`} />
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    x, y, z 위치의 면을 통해 CV로 전도되는 열
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">에너지 유출 (반대편 면)</p>
                  <div className="text-lg text-orange-300">
                    <Math tex={`q_{x+dx},\\; q_{y+dy},\\; q_{z+dz}`} />
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    x+dx, y+dy, z+dz 위치의 면을 통해 CV 밖으로 나가는 열
                  </p>
                </div>
              </div>
            </div>

            {/* Taylor expansion */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-orange-500/10 mb-8">
              <h5 className="text-sm font-bold text-orange-400 mb-4">
                Taylor Expansion of Outgoing Energy
              </h5>
              <p className="text-gray-400 text-sm mb-4">
                반대편 면을 통해 나가는 에너지는 1차 Taylor 전개로 유입 에너지와 관련됩니다:
              </p>
              <div className="space-y-3">
                {["x", "y", "z"].map((dir) => (
                  <div key={dir} className="text-center p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
                    <Math tex={`q_{${dir}+d${dir}} = q_{${dir}} + \\frac{\\partial q_{${dir}}}{\\partial ${dir}}\\,d${dir}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Generation & Storage */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800">
                <h5 className="text-sm font-bold text-yellow-400 mb-3">Internal Generation</h5>
                <div className="text-center p-3 rounded-2xl bg-slate-900/60 border border-slate-700 mb-3">
                  <Math tex={String.raw`\dot{E}_g = \dot{q} \cdot dx \cdot dy \cdot dz`} />
                </div>
                <p className="text-sm text-gray-400">
                  <Math tex={String.raw`\dot{q}`} /> [<Math tex={`\\text{W/m}^3`} />]는 단위 체적당 에너지 생성률입니다.
                  전기 저항 가열, 핵분열, 화학 반응, 방사성 붕괴 등이 열원에 해당합니다.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800">
                <h5 className="text-sm font-bold text-blue-400 mb-3">Energy Storage</h5>
                <div className="text-center p-3 rounded-2xl bg-slate-900/60 border border-slate-700 mb-3">
                  <Math tex={String.raw`\dot{E}_{st} = \rho c_p \frac{\partial T}{\partial t} \cdot dx \cdot dy \cdot dz`} />
                </div>
                <p className="text-sm text-gray-400">
                  미소 체적의 온도가 시간에 따라 변하면, 에너지가 저장(또는 방출)됩니다.
                  정상상태 문제에서 이 항은 0입니다.
                </p>
              </div>
            </div>

            {/* Conservation statement */}
            <div className="text-center p-6 rounded-xl bg-slate-950/80 border border-orange-500/30 mb-8">
              <p className="text-sm text-gray-500 mb-3">Conservation of Energy (First Law)</p>
              <div className="text-orange-400">
                <Math tex={String.raw`\dot{E}_{in} + \dot{E}_g - \dot{E}_{out} = \dot{E}_{st}`} display />
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Applied to the differential control volume <Math tex={`dx \\cdot dy \\cdot dz`} />
              </p>
            </div>

            {/* Step-by-step derivation */}
            <h5 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
              Step-by-Step Derivation
            </h5>
            <div className="space-y-4">
              {derivationSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-4 items-start"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-sm font-bold mt-1">
                    {i + 1}
                  </span>
                  <div className="flex-1 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <p className="text-sm text-gray-400 mb-2">{step.label}</p>
                    <div className="text-orange-200 overflow-x-auto">
                      <Math tex={step.eqTex} display />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================================================================
            SECTION 2 — General Heat Equation (Cartesian)
            ================================================================ */}
        <div className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8 md:p-10"
          >
            <h3 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-2">
              Section 2
            </h3>
            <h4 className="text-2xl font-bold text-white mb-8">
              General Heat Equation &mdash; Cartesian Coordinates
            </h4>

            {/* The equation */}
            <div className="text-center p-8 rounded-xl bg-slate-950/80 border border-orange-500/30 mb-8">
              <p className="text-sm text-gray-500 mb-4">The Heat Diffusion Equation</p>
              <div className="text-orange-400">
                <Math tex={String.raw`\frac{\partial}{\partial x}\!\left(k \frac{\partial T}{\partial x}\right) + \frac{\partial}{\partial y}\!\left(k \frac{\partial T}{\partial y}\right) + \frac{\partial}{\partial z}\!\left(k \frac{\partial T}{\partial z}\right) + \dot{q} = \rho c_p \frac{\partial T}{\partial t}`} display />
              </div>
              <p className="text-xs text-gray-600 mt-4">
                Second-order PDE in space (x, y, z), first-order in time (t)
              </p>
            </div>

            {/* Physical meaning of each term */}
            <h5 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
              Physical Meaning of Each Term
            </h5>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <div className="text-orange-300 mb-2">
                  <Math tex={String.raw`\frac{\partial}{\partial x}\!\left(k \frac{\partial T}{\partial x}\right)`} />
                </div>
                <p className="text-sm text-gray-400">
                  단위 체적당 x 방향의 <strong className="text-white">순 열전도</strong>.
                  y, z 항도 마찬가지입니다. k가 위치에 따라 변하면 미분 안에 남아야 합니다.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <div className="text-yellow-300 mb-2">
                  <Math tex={String.raw`\dot{q}`} />
                </div>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">체적 열 생성</strong>률 [<Math tex={`\\text{W/m}^3`} />].
                  내부에서 생산되는 에너지: 전기 저항, 핵반응, 화학 반응 등.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <div className="text-blue-300 mb-2">
                  <Math tex={String.raw`\rho c_p \frac{\partial T}{\partial t}`} />
                </div>
                <p className="text-sm text-gray-400">
                  단위 체적당 <strong className="text-white">에너지 저장률</strong>.
                  온도가 시간에 따라 변할 때(비정상 문제)에만 0이 아닙니다.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <div className="text-green-300 mb-2">
                  <Math tex={`k = k(T) \\text{ or } k(x,y,z)`} />
                </div>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">가변 열전도율.</strong>{" "}
                  일반 형태에서 k는 온도나 위치에 따라 달라질 수 있으므로 편미분 안에 남아 있어야 합니다.
                </p>
              </div>
            </div>

            {/* Insight box */}
            <div className="p-5 rounded-xl bg-orange-500/5 border border-orange-500/20">
              <h5 className="text-sm font-bold text-orange-400 mb-2">물리적 의미</h5>
              <p className="text-sm text-gray-300 leading-relaxed">
                열방정식은 연속 매질의 모든 점에 적용된 <strong className="text-white">열역학 제1법칙</strong>의 표현입니다.
                임의의 위치에서, 순 열전도 유입량에 내부 열생성을 더한 것이 에너지 저장률과 같다는 것을 나타냅니다.
                이 단일 방정식에 적절한 경계 조건과 초기 조건을 결합하면 온도장 <Math tex={`T(x, y, z, t)`} />를 완전히 결정할 수 있습니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================================================================
            SECTION 3 — Constant Thermal Conductivity
            ================================================================ */}
        <div className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-8 md:p-10"
          >
            <h3 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-2">
              Section 3
            </h3>
            <h4 className="text-2xl font-bold text-white mb-8">
              Constant Thermal Conductivity
            </h4>

            <p className="text-gray-400 mb-6 leading-relaxed">
              열전도율 <strong className="text-yellow-300">k가 상수</strong>(온도 및 위치에 무관)이면,
              편미분 밖으로 꺼낼 수 있어 방정식이 크게 단순화됩니다.
            </p>

            <div className="space-y-4 mb-8">
              <div className="text-center p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-sm text-gray-500 mb-2">Factor out constant k</p>
                <div className="text-yellow-300">
                  <Math tex={String.raw`k\nabla^2 T + \dot{q} = \rho c_p \frac{\partial T}{\partial t}`} display />
                </div>
              </div>
              <div className="text-center p-5 rounded-xl bg-slate-950/80 border border-yellow-500/30">
                <p className="text-sm text-gray-500 mb-2">Divide by k and define <Math tex={`\\alpha = k/(\\rho c_p)`} /></p>
                <div className="text-yellow-400">
                  <Math tex={String.raw`\nabla^2 T + \frac{\dot{q}}{k} = \frac{1}{\alpha}\frac{\partial T}{\partial t}`} display />
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  The Fourier&ndash;Biot equation
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
              <p className="text-sm text-gray-500 mb-2">where the Laplacian in Cartesian coordinates is</p>
              <div className="text-center text-yellow-200">
                <Math tex={String.raw`\nabla^2 T = \frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2}`} display />
              </div>
            </div>

            <div className="p-5 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
              <h5 className="text-sm font-bold text-yellow-400 mb-2">참고</h5>
              <p className="text-sm text-gray-300">
                k 상수 가정은 온도 범위가 적당한 많은 공학적 응용에서 유효합니다.
                온도 변화가 큰 경우(예: 내화 재료), <Math tex={`k = k(T)`} />를 유지해야 합니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================================================================
            SECTION 4 — Special Cases Hierarchy
            ================================================================ */}
        <div className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8 md:p-10"
          >
            <h3 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-2">
              Section 4
            </h3>
            <h4 className="text-2xl font-bold text-white mb-4">
              Special Cases of the Heat Equation
            </h4>
            <p className="text-gray-400 mb-8">
              단순화 가정을 점진적으로 적용하면, 일반 열방정식은 잘 알려진 명칭의 방정식으로 축소됩니다.
              아래 각 행은 하나의 가정을 추가합니다:
            </p>

            {/* Flowchart-style hierarchy */}
            <div className="space-y-4">
              {specialCases.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative"
                >
                  {/* Connecting line */}
                  {i > 0 && (
                    <div className="absolute left-6 -top-4 w-0.5 h-4 bg-slate-700" />
                  )}
                  <div className={`p-5 rounded-xl ${item.bg} border ${item.border} flex flex-col md:flex-row md:items-center gap-4`}>
                    <div className="flex-shrink-0 flex items-center gap-3">
                      <span className={`w-12 h-12 rounded-full bg-slate-950/80 border ${item.border} flex items-center justify-center text-sm font-bold ${item.color}`}>
                        {i + 1}
                      </span>
                      <div>
                        <h5 className={`font-bold ${item.color}`}>{item.name}</h5>
                        <p className="text-xs text-gray-500">{item.formal}</p>
                      </div>
                    </div>
                    <div className={`flex-1 text-center md:text-left ${item.color} overflow-x-auto`}>
                      <Math tex={item.eqTex} display />
                    </div>
                    <p className="text-sm text-gray-400 md:max-w-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Assumption arrows summary */}
            <div className="mt-8 p-5 rounded-xl bg-slate-800/30 border border-slate-700">
              <h5 className="text-sm font-bold text-gray-300 mb-3">Simplification Path</h5>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">General</span>
                <span className="text-gray-600">&rarr; k = const &rarr;</span>
                <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Fourier-Biot</span>
                <span className="text-gray-600">&rarr; <Math tex={String.raw`\dot{q}`} /> = 0 &rarr;</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Diffusion</span>
                <span className="text-gray-600">&rarr; steady &rarr;</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">Laplace</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm mt-2">
                <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Fourier-Biot</span>
                <span className="text-gray-600">&rarr; steady &rarr;</span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Poisson</span>
                <span className="text-gray-600">&rarr; <Math tex={String.raw`\dot{q}`} /> = 0 &rarr;</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">Laplace</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================================================================
            SECTION 5 — Thermal Diffusivity
            ================================================================ */}
        <div className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8 md:p-10"
          >
            <h3 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-2">
              Section 5
            </h3>
            <h4 className="text-2xl font-bold text-white mb-8">
              Thermal Diffusivity <Math tex={`\\alpha`} />
            </h4>

            {/* Definition */}
            <div className="text-center p-8 rounded-xl bg-slate-950/80 border border-orange-500/30 mb-8">
              <div className="text-orange-400">
                <Math tex={String.raw`\alpha = \frac{k}{\rho c_p}`} display />
              </div>
              <p className="text-sm text-gray-500">[<Math tex={`\\text{m}^2\\text{/s}`} />]</p>
            </div>

            {/* Physical meaning */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h5 className="text-sm font-bold text-orange-400 mb-2">물리적 의미</h5>
                <p className="text-sm text-gray-400">
                  열확산율은 재료의 <strong className="text-white">열 전도</strong> 능력 대비
                  <strong className="text-white">열 저장</strong> 능력의 비율을 나타냅니다.
                  온도 변화가 재료를 통해 얼마나 빠르게 전파되는지를 특성화합니다.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h5 className="text-sm font-bold text-green-400 mb-2">High <Math tex={`\\alpha`} /></h5>
                <p className="text-sm text-gray-400">
                  온도 변화가 <strong className="text-green-300">빠르게</strong> 전파됩니다.
                  재료가 열적 교란에 신속하게 반응합니다.
                  구리, 알루미늄 등의 금속이 높은 <Math tex={`\\alpha`} />를 가집니다.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h5 className="text-sm font-bold text-blue-400 mb-2">Low <Math tex={`\\alpha`} /></h5>
                <p className="text-sm text-gray-400">
                  재료가 <strong className="text-blue-300">&ldquo;열적으로 느립니다.&rdquo;</strong>{" "}
                  온도 변화가 천천히 전파됩니다. 목재, 콘크리트, 물이 낮은 <Math tex={`\\alpha`} />를 가집니다.
                </p>
              </div>
            </div>

            {/* Numerator / Denominator */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-sm text-gray-500 mb-1">Numerator</p>
                <div className="text-xl text-orange-300 mb-2">
                  <Math tex={`k \\;[\\text{W/(m}\\cdot\\text{K)}]`} />
                </div>
                <p className="text-sm text-gray-400">
                  열을 <strong className="text-white">전도</strong>하는 능력. k가 높을수록 재료를 통한 에너지 전달이 빠릅니다.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-sm text-gray-500 mb-1">Denominator</p>
                <div className="text-xl text-orange-300 mb-2">
                  <Math tex={`\\rho c_p \\;[\\text{J/(m}^3\\cdot\\text{K)}]`} />
                </div>
                <p className="text-sm text-gray-400">
                  체적 열용량 &mdash; 열에너지를 <strong className="text-white">저장</strong>하는 능력.
                  <Math tex={`\\rho c_p`} />가 높을수록 온도를 올리는 데 더 많은 에너지가 필요합니다.
                </p>
              </div>
            </div>

            {/* Table */}
            <h5 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
              Thermal Diffusivity of Common Materials (at ~300 K)
            </h5>
            <div className="overflow-x-auto rounded-xl border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800/50">
                    <th className="text-left px-5 py-3 text-gray-400 font-medium">Material</th>
                    <th className="text-left px-5 py-3 text-gray-400 font-medium"><Math tex={`\\alpha`} /> [<Math tex={`\\text{m}^2\\text{/s}`} />]</th>
                    <th className="text-left px-5 py-3 text-gray-400 font-medium">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {diffusivityData.map((row, i) => {
                    const catColor =
                      row.category === "metal"
                        ? "text-orange-400"
                        : row.category === "liquid"
                        ? "text-blue-400"
                        : row.category === "gas"
                        ? "text-cyan-400"
                        : "text-green-400";
                    return (
                      <tr key={i} className="border-t border-slate-800 hover:bg-slate-800/30 transition-colors">
                        <td className="px-5 py-3 text-white font-medium">{row.material}</td>
                        <td className="px-5 py-3 text-orange-200 font-mono text-xs">{row.alpha}</td>
                        <td className={`px-5 py-3 capitalize ${catColor}`}>{row.category}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
              <p className="text-sm text-gray-300">
                <strong className="text-orange-400">핵심 관찰:</strong>{" "}
                <Math tex={`\\alpha_{\\text{metals}} \\gg \\alpha_{\\text{non-metals}} \\gg \\alpha_{\\text{liquids}}`} />.
                공기는 k가 낮음에도 밀도 <Math tex={`\\rho`} />가 매우 낮아 상대적으로 높은 <Math tex={`\\alpha`} />를 가집니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================================================================
            SECTION 6 — Cylindrical Coordinates
            ================================================================ */}
        <div className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8 md:p-10"
          >
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-2">
              Section 6
            </h3>
            <h4 className="text-2xl font-bold text-white mb-8">
              Heat Equation in Cylindrical Coordinates <Math tex={`(r, \\phi, z)`} />
            </h4>

            <div className="text-center p-6 rounded-xl bg-slate-950/80 border border-cyan-500/30 mb-8">
              <p className="text-sm text-gray-500 mb-3">General form</p>
              <div className="text-cyan-400">
                <Math tex={String.raw`\frac{1}{r}\frac{\partial}{\partial r}\!\left(kr\frac{\partial T}{\partial r}\right) + \frac{1}{r^2}\frac{\partial}{\partial \phi}\!\left(k\frac{\partial T}{\partial \phi}\right) + \frac{\partial}{\partial z}\!\left(k\frac{\partial T}{\partial z}\right) + \dot{q} = \rho c_p \frac{\partial T}{\partial t}`} display />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h5 className="text-sm font-bold text-cyan-400 mb-2">When to Use</h5>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">축 대칭</strong> 형상에 원통 좌표계를 사용합니다:
                  파이프, 전선, 원통형 용기, 환형 영역, 케이블, 핵연료봉.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h5 className="text-sm font-bold text-cyan-400 mb-2">Key Difference from Cartesian</h5>
                <p className="text-sm text-gray-400">
                  원통 표면의 면적이 r에 비례하여 증가하므로 <strong className="text-white"><Math tex={`1/r`} /></strong> 인자가 나타납니다.
                  이로 인해 1차원 정상 전도의 해가 선형에서 대수(logarithmic)로 바뀝니다.
                </p>
              </div>
            </div>

            {/* 1D radial simplification */}
            <div className="text-center p-6 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
              <p className="text-sm text-gray-500 mb-3">1-D Radial, Steady State</p>
              <div className="text-cyan-300">
                <Math tex={String.raw`\frac{1}{r}\frac{d}{dr}\!\left(kr\frac{dT}{dr}\right) + \dot{q} = 0`} display />
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Assumes: T = T(r) only, steady state, no <Math tex={`\\phi`} /> or z dependence
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-950/80 border border-slate-800">
              <p className="text-sm text-gray-500 mb-3">1-D Radial, Steady, No Generation, Constant k</p>
              <div className="text-cyan-200">
                <Math tex={String.raw`\frac{d}{dr}\!\left(r\frac{dT}{dr}\right) = 0`} display />
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Solution: <Math tex={`T(r) = C_1 \\ln(r) + C_2`} /> &mdash; logarithmic temperature profile
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================================================================
            SECTION 7 — Spherical Coordinates
            ================================================================ */}
        <div className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-slate-950 p-8 md:p-10"
          >
            <h3 className="text-sm font-mono text-violet-400 uppercase tracking-wider mb-2">
              Section 7
            </h3>
            <h4 className="text-2xl font-bold text-white mb-8">
              Heat Equation in Spherical Coordinates <Math tex={`(r, \\theta, \\phi)`} />
            </h4>

            <div className="text-center p-6 rounded-xl bg-slate-950/80 border border-violet-500/30 mb-8">
              <p className="text-sm text-gray-500 mb-3">General form</p>
              <div className="text-violet-400">
                <Math tex={String.raw`\frac{1}{r^2}\frac{\partial}{\partial r}\!\left(kr^2\frac{\partial T}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial \theta}\!\left(k\sin\theta\frac{\partial T}{\partial \theta}\right) + \frac{1}{r^2\sin^2\theta}\frac{\partial}{\partial \phi}\!\left(k\frac{\partial T}{\partial \phi}\right) + \dot{q} = \rho c_p \frac{\partial T}{\partial t}`} display />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h5 className="text-sm font-bold text-violet-400 mb-2">When to Use</h5>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">구형 형상</strong>에 구 좌표계를 사용합니다:
                  구형 용기, 연료 펠릿, 볼 베어링, 생체 세포, 행성.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h5 className="text-sm font-bold text-violet-400 mb-2">Key Feature</h5>
                <p className="text-sm text-gray-400">
                  구 표면적이 <Math tex={`r^2`} />에 비례하여 증가하므로 <strong className="text-white"><Math tex={`1/r^2`} /></strong> 인자가 나타납니다.
                  열생성이 없는 1차원 반경 방향 전도에서, <Math tex={`T(r) \\sim 1/r`} /> (쌍곡선)이며 대수 함수가 아닙니다.
                </p>
              </div>
            </div>

            {/* 1D radial simplification */}
            <div className="text-center p-6 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
              <p className="text-sm text-gray-500 mb-3">1-D Radial, Steady State</p>
              <div className="text-violet-300">
                <Math tex={String.raw`\frac{1}{r^2}\frac{d}{dr}\!\left(kr^2\frac{dT}{dr}\right) + \dot{q} = 0`} display />
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Assumes: T = T(r) only, steady state
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-950/80 border border-slate-800">
              <p className="text-sm text-gray-500 mb-3">1-D Radial, Steady, No Generation, Constant k</p>
              <div className="text-violet-200">
                <Math tex={String.raw`\frac{d}{dr}\!\left(r^2\frac{dT}{dr}\right) = 0`} display />
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Solution: <Math tex={`T(r) = C_1/r + C_2`} /> &mdash; hyperbolic (1/r) temperature profile
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================================================================
            Coordinate System Comparison
            ================================================================ */}
        <div className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8"
          >
            <h4 className="text-lg font-bold text-white mb-6 text-center">
              Comparison: 1-D Steady Conduction Without Generation
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-orange-500/20 text-center">
                <h5 className="text-sm font-bold text-orange-400 mb-3">Cartesian</h5>
                <div className="text-orange-300 mb-3">
                  <Math tex={String.raw`\frac{d^2T}{dx^2} = 0`} display />
                </div>
                <div className="text-sm text-gray-400">
                  <Math tex={`T(x) = C_1 x + C_2`} />
                </div>
                <p className="text-xs text-gray-500 mt-2">Linear profile</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-cyan-500/20 text-center">
                <h5 className="text-sm font-bold text-cyan-400 mb-3">Cylindrical</h5>
                <div className="text-cyan-300 mb-3">
                  <Math tex={String.raw`\frac{d}{dr}\!\left(r\frac{dT}{dr}\right) = 0`} display />
                </div>
                <div className="text-sm text-gray-400">
                  <Math tex={`T(r) = C_1 \\ln(r) + C_2`} />
                </div>
                <p className="text-xs text-gray-500 mt-2">Logarithmic profile</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-violet-500/20 text-center">
                <h5 className="text-sm font-bold text-violet-400 mb-3">Spherical</h5>
                <div className="text-violet-300 mb-3">
                  <Math tex={String.raw`\frac{d}{dr}\!\left(r^2\frac{dT}{dr}\right) = 0`} display />
                </div>
                <div className="text-sm text-gray-400">
                  <Math tex={`T(r) = C_1/r + C_2`} />
                </div>
                <p className="text-xs text-gray-500 mt-2">Hyperbolic (1/r) profile</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================================================================
            SECTION 8 — Summary: How to Use the Heat Equation
            ================================================================ */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8 md:p-10"
          >
            <h3 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-2">
              Section 8
            </h3>
            <h4 className="text-2xl font-bold text-white mb-8">
              Summary: How to Use the Heat Equation
            </h4>

            <p className="text-gray-400 mb-8 leading-relaxed">
              열방정식은 모든 정상 또는 비정상 전도 문제를 풀기 위한 <strong className="text-white">출발점</strong>입니다.
              다음 6단계를 체계적으로 따르십시오:
            </p>

            <div className="space-y-4">
              {summarySteps.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  <span className={`flex-shrink-0 w-10 h-10 rounded-full bg-slate-950/80 border border-slate-700 flex items-center justify-center text-sm font-bold ${item.color}`}>
                    {i + 1}
                  </span>
                  <div className="flex-1 p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                    <h5 className={`font-bold ${item.color} mb-1`}>{item.title}</h5>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Final insight */}
            <div className="mt-8 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
              <h5 className="text-sm font-bold text-orange-400 mb-3">핵심 정리</h5>
              <p className="text-gray-300 leading-relaxed">
                열확산 방정식은 모든 전도 문제의 <strong className="text-white">기본 지배 방정식</strong>입니다.
                형상이 평판, 원통, 구 중 무엇이든 &mdash; 문제가 정상이든 비정상이든 &mdash;
                항상 같은 에너지 균형에서 출발합니다. 열전달 해석의 핵심은 올바른 좌표계를 선택하고,
                적용 가능한 단순화를 파악하며, 올바른 경계 조건을 적용하는 데 있습니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

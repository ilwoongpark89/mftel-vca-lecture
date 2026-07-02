"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "teal",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "teal" ? "border-teal-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "yellow" ? "border-yellow-500/30" : accent === "purple" ? "border-purple-500/30" : "border-slate-700";
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
  accent = "teal",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    teal: { bg: "bg-teal-500/5", border: "border-teal-500/20", text: "text-teal-400", iconBg: "bg-teal-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", iconBg: "bg-purple-500/20" },
  };
  const c = colors[accent] || colors.teal;
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

function ThinkLikeEngineer({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border-2 border-purple-500/40 bg-gradient-to-br from-purple-500/10 to-slate-950 p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-300 text-lg font-bold">
          E
        </span>
        <div>
          <span className="text-xs uppercase tracking-wider text-purple-400 font-medium">Think Like an Engineer</span>
          <h4 className="text-lg font-bold text-white">{title}</h4>
        </div>
      </div>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}

// Interactive comparison chart component
function DimensionlessComparison() {
  const [selectedFluid, setSelectedFluid] = useState<string>("air");

  const fluids: Record<string, { name: string; Pr: number; nu: number; alpha: number; k: number; rho: number; cp: number; color: string }> = {
    air: { name: "Air (20C)", Pr: 0.71, nu: 1.51e-5, alpha: 2.13e-5, k: 0.0257, rho: 1.2, cp: 1007, color: "teal" },
    water: { name: "Water (20C)", Pr: 7.01, nu: 1.004e-6, alpha: 1.43e-7, k: 0.598, rho: 998, cp: 4182, color: "cyan" },
    oil: { name: "Engine Oil (40C)", Pr: 500, nu: 2.4e-4, alpha: 4.8e-7, k: 0.144, rho: 876, cp: 1964, color: "orange" },
    sodium: { name: "Liquid Na (200C)", Pr: 0.007, nu: 4.7e-7, alpha: 6.7e-5, k: 81.4, rho: 903, cp: 1340, color: "purple" },
    mercury: { name: "Mercury (25C)", Pr: 0.025, nu: 1.14e-7, alpha: 4.56e-6, k: 8.54, rho: 13534, cp: 139, color: "gray" },
  };

  const fluid = fluids[selectedFluid];

  // Example calculation for pipe flow
  const D = 0.025; // 25 mm diameter pipe
  const V = 1; // 1 m/s velocity
  const Re = (V * D) / fluid.nu;
  const delta_ratio = NativeMath.pow(fluid.Pr, 1/3);

  return (
    <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-6">
      <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6 text-center">
        Interactive: Fluid Property Comparison
      </h4>

      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-2">Select Fluid:</label>
        <div className="flex flex-wrap gap-2">
          {Object.entries(fluids).map(([key, f]) => (
            <button
              key={key}
              onClick={() => setSelectedFluid(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFluid === key
                  ? `bg-${f.color}-500/30 text-${f.color}-400 border border-${f.color}-500/50`
                  : 'bg-slate-800 text-gray-400 border border-slate-700 hover:border-slate-600'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h5 className="text-sm font-bold text-white">Transport Properties</h5>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Kinematic viscosity (nu)</span>
              <span className="text-teal-400 font-mono">{fluid.nu.toExponential(2)} m^2/s</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Thermal diffusivity (alpha)</span>
              <span className="text-orange-400 font-mono">{fluid.alpha.toExponential(2)} m^2/s</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Thermal conductivity (k)</span>
              <span className="text-cyan-400 font-mono">{fluid.k.toFixed(3)} W/(m.K)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Prandtl number (Pr)</span>
              <span className={`font-mono font-bold text-${fluid.color}-400`}>{fluid.Pr.toFixed(3)}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
            <p className="text-sm text-gray-400 mb-2">Physical Interpretation of Pr = {fluid.Pr.toFixed(3)}:</p>
            <p className="text-sm text-gray-300">
              {fluid.Pr < 0.1 ? (
                <>Thermal diffusion is <span className="text-cyan-400 font-bold">{(1/fluid.Pr).toFixed(0)}x faster</span> than momentum diffusion. Heat &quot;spreads&quot; much faster than velocity disturbances.</>
              ) : fluid.Pr < 1 ? (
                <>Thermal and momentum diffusion are <span className="text-teal-400 font-bold">comparable</span>. Reynolds analogy is approximately valid.</>
              ) : fluid.Pr < 10 ? (
                <>Momentum diffusion is <span className="text-orange-400 font-bold">{fluid.Pr.toFixed(1)}x faster</span> than thermal diffusion.</>
              ) : (
                <>Momentum diffusion is <span className="text-red-400 font-bold">{fluid.Pr.toFixed(0)}x faster</span> than thermal diffusion. Very thin thermal boundary layer.</>
              )}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="text-sm font-bold text-white">Example: Pipe Flow (D=25mm, V=1 m/s)</h5>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Reynolds number (Re_D)</span>
              <span className="text-teal-400 font-mono">{Re.toExponential(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Flow regime</span>
              <span className={Re < 2300 ? 'text-emerald-400' : Re < 4000 ? 'text-yellow-400' : 'text-red-400'}>
                {Re < 2300 ? 'Laminar' : Re < 4000 ? 'Transition' : 'Turbulent'}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">delta/delta_t = Pr^(1/3)</span>
              <span className="text-orange-400 font-mono">{delta_ratio.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Peclet number (Pe = Re.Pr)</span>
              <span className="text-cyan-400 font-mono">{(Re * fluid.Pr).toExponential(2)}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
            <p className="text-sm text-gray-400 mb-2">Boundary Layer Comparison:</p>
            <div className="relative h-16 bg-slate-800 rounded-lg overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-teal-500/30 border-r-2 border-teal-500"
                   style={{ width: `${NativeMath.min(50 * NativeMath.max(1/delta_ratio, 0.1), 100)}%` }}>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-teal-400">delta_t</span>
              </div>
              <div className="absolute left-0 top-0 h-full bg-orange-500/20 border-r-2 border-orange-500"
                   style={{ width: `${NativeMath.min(50 * NativeMath.max(1, delta_ratio) / delta_ratio, 100)}%` }}>
              </div>
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-orange-400">delta</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              {fluid.Pr < 1 ? 'Thermal BL (teal) > Velocity BL (orange)' : 'Velocity BL (orange) > Thermal BL (teal)'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DimensionlessNumbers() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dimensionless Numbers in Convection
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Buckingham Pi 정리부터 무차원수의 물리적 의미, 그리고 order-of-magnitude 추정 기법까지 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Buckingham Pi Theorem */}
          <SectionDivider number="1" title="Buckingham Pi Theorem" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Buckingham Pi 정리</strong>는 물리 문제에서 독립적인 무차원 그룹의 수를 결정하는
              강력한 도구입니다. 이를 통해 복잡한 현상을 핵심 매개변수로 축약할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Buckingham Pi Theorem Statement
              </h4>

              <EquationBox label="핵심 정리" accent="teal">
                <p className="text-gray-300 mb-3">n개의 물리량이 r개의 기본 차원을 포함하면,</p>
                <Math tex={`(n - r) \\text{ 개의 독립적인 무차원 그룹 } \\Pi_i \\text{ 가 존재}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400 mb-3">
                  <strong className="text-white">기본 차원 (Fundamental Dimensions):</strong>
                </p>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-teal-400">M</p>
                    <p className="text-xs text-gray-500">Mass</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-orange-400">L</p>
                    <p className="text-xs text-gray-500">Length</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-cyan-400">T</p>
                    <p className="text-xs text-gray-500">Time</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-emerald-400">Theta</p>
                    <p className="text-xs text-gray-500">Temperature</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Example: Forced Convection Heat Transfer
              </h4>

              <p className="text-gray-400 mb-4">
                강제 대류 열전달 계수 h가 다음 변수들에 의존한다고 가정:
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700 mb-4">
                <Math tex={`h = f(\\rho, V, L, \\mu, c_p, k)`} display />
                <p className="text-sm text-gray-400 mt-2 text-center">n = 7 variables</p>
              </div>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-3 text-gray-400">변수</th>
                      <th className="text-left py-2 px-3 text-gray-400">M</th>
                      <th className="text-left py-2 px-3 text-gray-400">L</th>
                      <th className="text-left py-2 px-3 text-gray-400">T</th>
                      <th className="text-left py-2 px-3 text-gray-400">Theta</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">h [W/(m^2.K)]</td>
                      <td className="py-2 px-3">1</td>
                      <td className="py-2 px-3">0</td>
                      <td className="py-2 px-3">-3</td>
                      <td className="py-2 px-3">-1</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">rho [kg/m^3]</td>
                      <td className="py-2 px-3">1</td>
                      <td className="py-2 px-3">-3</td>
                      <td className="py-2 px-3">0</td>
                      <td className="py-2 px-3">0</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">V [m/s]</td>
                      <td className="py-2 px-3">0</td>
                      <td className="py-2 px-3">1</td>
                      <td className="py-2 px-3">-1</td>
                      <td className="py-2 px-3">0</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">L [m]</td>
                      <td className="py-2 px-3">0</td>
                      <td className="py-2 px-3">1</td>
                      <td className="py-2 px-3">0</td>
                      <td className="py-2 px-3">0</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">mu [Pa.s]</td>
                      <td className="py-2 px-3">1</td>
                      <td className="py-2 px-3">-1</td>
                      <td className="py-2 px-3">-1</td>
                      <td className="py-2 px-3">0</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">c_p [J/(kg.K)]</td>
                      <td className="py-2 px-3">0</td>
                      <td className="py-2 px-3">2</td>
                      <td className="py-2 px-3">-2</td>
                      <td className="py-2 px-3">-1</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">k [W/(m.K)]</td>
                      <td className="py-2 px-3">1</td>
                      <td className="py-2 px-3">1</td>
                      <td className="py-2 px-3">-3</td>
                      <td className="py-2 px-3">-1</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30">
                <p className="text-sm text-orange-400 font-bold mb-2">결과:</p>
                <p className="text-gray-300 mb-2">
                  n = 7 variables, r = 4 dimensions
                </p>
                <p className="text-gray-300 mb-2">
                  따라서 <strong className="text-orange-400">7 - 4 = 3개</strong>의 독립 무차원수
                </p>
                <Math tex={`Nu = f(Re, Pr)`} display />
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Pi 정리의 강력함" accent="teal" icon="Pi">
              <p className="mb-2">
                원래 7개 변수의 함수 관계를 3개 무차원수로 축약했습니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li><span className="text-teal-400">*</span> 7차원 파라미터 공간 → 3차원 무차원 공간</li>
                <li><span className="text-teal-400">*</span> 실험 횟수가 기하급수적으로 감소</li>
                <li><span className="text-teal-400">*</span> Scale-up/scale-down이 용이해짐</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 2. 왜 이 특정 무차원수들인가? */}
          <SectionDivider number="2" title="Why These Specific Dimensionless Groups?" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Pi 정리는 무차원 그룹의 <strong className="text-white">수</strong>만 알려줄 뿐,
              어떤 그룹이 <strong className="text-teal-400">물리적으로 의미 있는지</strong>는 알려주지 않습니다.
              물리적 통찰을 통해 적절한 무차원수를 선택해야 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Physical Interpretation of Key Dimensionless Numbers
              </h4>

              <div className="space-y-6">
                <div className="p-5 rounded-xl bg-slate-950/80 border border-teal-500/30">
                  <h5 className="text-teal-400 font-bold mb-3">Reynolds Number (Re)</h5>
                  <Math tex={`Re = \\frac{\\rho V L}{\\mu} = \\frac{V L}{\\nu}`} display />
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <p className="text-sm text-gray-400 mb-1">힘의 비율 해석:</p>
                      <Math tex={`Re = \\frac{\\rho V^2 / L}{\\mu V / L^2} = \\frac{\\text{Inertia}}{\\text{Viscous}}`} display />
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <p className="text-sm text-gray-400 mb-1">시간 스케일 해석:</p>
                      <Math tex={`Re = \\frac{L^2/\\nu}{L/V} = \\frac{t_{\\text{diff}}}{t_{\\text{conv}}}`} display />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-3">
                    <strong className="text-white">물리적 의미:</strong> 유체가 관성에 의해 &quot;밀려가는&quot; 정도 vs 점성에 의해 &quot;붙잡히는&quot; 정도.
                    Re가 크면 관성 지배 → 난류 가능.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-orange-500/30">
                  <h5 className="text-orange-400 font-bold mb-3">Prandtl Number (Pr)</h5>
                  <Math tex={`Pr = \\frac{\\nu}{\\alpha} = \\frac{\\mu c_p}{k}`} display />
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <p className="text-sm text-gray-400 mb-1">확산 계수 비율:</p>
                      <Math tex={`Pr = \\frac{\\text{Momentum diffusivity}}{\\text{Thermal diffusivity}}`} display />
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <p className="text-sm text-gray-400 mb-1">경계층 두께 비율:</p>
                      <Math tex={`\\frac{\\delta}{\\delta_t} \\approx Pr^{1/3}`} display />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-3">
                    <strong className="text-white">물리적 의미:</strong> 유체 고유의 특성. 운동량과 열이 &quot;확산되는&quot; 상대적 속도.
                    유체 선택의 기준이 됨.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-cyan-500/30">
                  <h5 className="text-cyan-400 font-bold mb-3">Nusselt Number (Nu)</h5>
                  <Math tex={`Nu = \\frac{hL}{k}`} display />
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <p className="text-sm text-gray-400 mb-1">열전달 비율:</p>
                      <Math tex={`Nu = \\frac{\\text{Convective HT}}{\\text{Conductive HT}}`} display />
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <p className="text-sm text-gray-400 mb-1">온도 구배 해석:</p>
                      <Math tex={`Nu = \\frac{L \\cdot |\\partial T/\\partial y|_0}{\\Delta T}`} display />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-3">
                    <strong className="text-white">물리적 의미:</strong> 대류에 의한 열전달 향상 정도.
                    Nu = 1이면 순수 전도, Nu &gt;&gt; 1이면 대류가 지배.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Typical Ranges Table */}
          <SectionDivider number="3" title="Typical Property Ranges" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6 overflow-x-auto">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-4">
                Comprehensive Property Table for Common Fluids
              </h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">Fluid</th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">Pr</th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">nu [m^2/s]</th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">k [W/(m.K)]</th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">delta/delta_t</th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">Application</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-slate-800 bg-purple-500/5">
                    <td className="py-3 px-3 text-purple-400 font-medium">Liquid Na (200C)</td>
                    <td className="py-3 px-3">0.007</td>
                    <td className="py-3 px-3">4.7e-7</td>
                    <td className="py-3 px-3">81.4</td>
                    <td className="py-3 px-3">0.19</td>
                    <td className="py-3 px-3 text-gray-400">Nuclear reactors</td>
                  </tr>
                  <tr className="border-b border-slate-800 bg-purple-500/5">
                    <td className="py-3 px-3 text-purple-400 font-medium">Mercury (25C)</td>
                    <td className="py-3 px-3">0.025</td>
                    <td className="py-3 px-3">1.14e-7</td>
                    <td className="py-3 px-3">8.54</td>
                    <td className="py-3 px-3">0.29</td>
                    <td className="py-3 px-3 text-gray-400">Thermometers, special HX</td>
                  </tr>
                  <tr className="border-b border-slate-800 bg-teal-500/5">
                    <td className="py-3 px-3 text-teal-400 font-medium">Air (20C)</td>
                    <td className="py-3 px-3">0.71</td>
                    <td className="py-3 px-3">1.51e-5</td>
                    <td className="py-3 px-3">0.0257</td>
                    <td className="py-3 px-3">0.89</td>
                    <td className="py-3 px-3 text-gray-400">HVAC, electronics</td>
                  </tr>
                  <tr className="border-b border-slate-800 bg-teal-500/5">
                    <td className="py-3 px-3 text-teal-400 font-medium">CO2 (25C)</td>
                    <td className="py-3 px-3">0.76</td>
                    <td className="py-3 px-3">8.3e-6</td>
                    <td className="py-3 px-3">0.0166</td>
                    <td className="py-3 px-3">0.91</td>
                    <td className="py-3 px-3 text-gray-400">Refrigeration</td>
                  </tr>
                  <tr className="border-b border-slate-800 bg-cyan-500/5">
                    <td className="py-3 px-3 text-cyan-400 font-medium">Water (20C)</td>
                    <td className="py-3 px-3">7.01</td>
                    <td className="py-3 px-3">1.00e-6</td>
                    <td className="py-3 px-3">0.598</td>
                    <td className="py-3 px-3">1.91</td>
                    <td className="py-3 px-3 text-gray-400">Most common coolant</td>
                  </tr>
                  <tr className="border-b border-slate-800 bg-cyan-500/5">
                    <td className="py-3 px-3 text-cyan-400 font-medium">Water (80C)</td>
                    <td className="py-3 px-3">2.22</td>
                    <td className="py-3 px-3">3.65e-7</td>
                    <td className="py-3 px-3">0.670</td>
                    <td className="py-3 px-3">1.30</td>
                    <td className="py-3 px-3 text-gray-400">Boilers, HX</td>
                  </tr>
                  <tr className="border-b border-slate-800 bg-orange-500/5">
                    <td className="py-3 px-3 text-orange-400 font-medium">Engine oil (40C)</td>
                    <td className="py-3 px-3">500</td>
                    <td className="py-3 px-3">2.4e-4</td>
                    <td className="py-3 px-3">0.144</td>
                    <td className="py-3 px-3">7.9</td>
                    <td className="py-3 px-3 text-gray-400">Automotive, machinery</td>
                  </tr>
                  <tr className="bg-orange-500/5">
                    <td className="py-3 px-3 text-orange-400 font-medium">Glycerin (25C)</td>
                    <td className="py-3 px-3">2500</td>
                    <td className="py-3 px-3">1.2e-3</td>
                    <td className="py-3 px-3">0.286</td>
                    <td className="py-3 px-3">13.6</td>
                    <td className="py-3 px-3 text-gray-400">Pharmaceuticals</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="온도 의존성 주의" accent="yellow" icon="T">
              <p className="mb-2">
                물성치는 <strong className="text-yellow-400">온도에 강하게 의존</strong>합니다.
                특히 점성(mu)은 온도에 따라 큰 변화를 보입니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li><span className="text-yellow-400">*</span> 기체: 온도 증가 → 점성 증가 (mu ~ T^0.7)</li>
                <li><span className="text-yellow-400">*</span> 액체: 온도 증가 → 점성 감소 (강한 감소)</li>
                <li><span className="text-yellow-400">*</span> 물의 Pr: 20C에서 7.0, 80C에서 2.2 (3배 이상 변화!)</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 4. Order of Magnitude Estimation */}
          <SectionDivider number="4" title="Order of Magnitude Estimation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Order of Magnitude (차수) 추정</strong>은 복잡한 계산 없이
              문제의 핵심을 빠르게 파악하는 엔지니어의 필수 기술입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Order of Magnitude Rules
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-emerald-400 font-bold mb-2">Rule 1: 10의 거듭제곱으로 생각</h5>
                  <p className="text-sm text-gray-400">
                    정확한 값 대신 <Math tex="10^n" /> 형태로 근사. 3.5e5와 7.2e5는 같은 차수(~10^6).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-emerald-400 font-bold mb-2">Rule 2: 대표값 암기</h5>
                  <div className="grid md:grid-cols-2 gap-4 mt-2 text-sm text-gray-400">
                    <div>
                      <p><Math tex="\\nu_{\\text{air}} \\sim 10^{-5}" /> m^2/s</p>
                      <p><Math tex="\\nu_{\\text{water}} \\sim 10^{-6}" /> m^2/s</p>
                      <p><Math tex="\\nu_{\\text{oil}} \\sim 10^{-4}" /> m^2/s</p>
                    </div>
                    <div>
                      <p><Math tex="k_{\\text{air}} \\sim 0.025" /> W/(m.K)</p>
                      <p><Math tex="k_{\\text{water}} \\sim 0.6" /> W/(m.K)</p>
                      <p><Math tex="k_{\\text{metals}} \\sim 10-400" /> W/(m.K)</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-emerald-400 font-bold mb-2">Rule 3: 무차원수 임계값 암기</h5>
                  <div className="grid md:grid-cols-2 gap-4 mt-2 text-sm text-gray-400">
                    <div>
                      <p>Pipe flow transition: <Math tex="Re_D \\sim 2300" /></p>
                      <p>Flat plate transition: <Math tex="Re_x \\sim 5 \\times 10^5" /></p>
                    </div>
                    <div>
                      <p>Natural conv. transition: <Math tex="Ra \\sim 10^9" /></p>
                      <p>Forced vs natural: <Math tex="Gr/Re^2 \\sim 1" /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <ThinkLikeEngineer title="Quick Estimation Practice">
              <p className="mb-4">
                <strong>문제:</strong> 직경 5 cm 원통 주위로 공기가 10 m/s로 흐를 때,
                열전달 계수 h의 차수를 빠르게 추정하시오.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/30 mb-4">
                <p className="text-sm text-purple-400 font-bold mb-2">Order of Magnitude Solution:</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>1. <strong>Re 추정:</strong> Re = VD/nu ~ (10)(0.05)/(10^-5) ~ 5e4 (난류)</li>
                  <li>2. <strong>Nu 추정:</strong> 원통 외부 유동, Re ~ 10^4-10^5
                    <br />→ Nu ~ 0.3 * Re^0.6 * Pr^1/3 ~ 0.3 * (5e4)^0.6 * (0.7)^0.33 ~ 150</li>
                  <li>3. <strong>h 추정:</strong> h = Nu * k / D ~ 150 * 0.025 / 0.05 ~ 75 W/(m^2.K)</li>
                </ul>
              </div>

              <p className="text-sm text-gray-400">
                <strong className="text-white">결론:</strong> h ~ <span className="text-emerald-400 font-bold">50-100 W/(m^2.K)</span> 차수.
                정밀 계산은 나중에. 이 추정으로 필요한 열교환 면적, 냉각 시간 등을 빠르게 예측 가능.
              </p>
            </ThinkLikeEngineer>
          </motion.div>

          {/* 5. Interactive Comparison */}
          <SectionDivider number="5" title="Interactive: Fluid Comparison" />

          <motion.div {...stagger} className="mb-8">
            <DimensionlessComparison />
          </motion.div>

          {/* 6. 나머지 무차원수들 */}
          <SectionDivider number="6" title="Other Important Dimensionless Numbers" />

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
                <h5 className="text-emerald-400 font-bold mb-3">Grashof Number (Gr)</h5>
                <Math tex={`Gr = \\frac{g\\beta\\Delta T L^3}{\\nu^2}`} display />
                <p className="text-sm text-gray-400 mt-3">
                  <strong className="text-white">의미:</strong> 부력/점성력 비율<br />
                  자연 대류에서 Re의 역할
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Gr^(1/2) ~ &quot;natural convection Reynolds number&quot;
                </p>
              </div>

              <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                <h5 className="text-yellow-400 font-bold mb-3">Rayleigh Number (Ra)</h5>
                <Math tex={`Ra = Gr \\cdot Pr = \\frac{g\\beta\\Delta T L^3}{\\nu\\alpha}`} display />
                <p className="text-sm text-gray-400 mt-3">
                  <strong className="text-white">의미:</strong> 자연 대류 강도<br />
                  층류 자연 대류: Ra &lt; 10^9
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Benard 대류 임계: Ra_c ~ 1708
                </p>
              </div>

              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
                <h5 className="text-cyan-400 font-bold mb-3">Peclet Number (Pe)</h5>
                <Math tex={`Pe = Re \\cdot Pr = \\frac{VL}{\\alpha}`} display />
                <p className="text-sm text-gray-400 mt-3">
                  <strong className="text-white">의미:</strong> 대류/전도 열전달 비율<br />
                  열 이류의 상대적 중요도
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Pe &gt;&gt; 1: 대류 지배, Pe &lt;&lt; 1: 전도 지배
                </p>
              </div>

              <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                <h5 className="text-orange-400 font-bold mb-3">Stanton Number (St)</h5>
                <Math tex={`St = \\frac{Nu}{Re \\cdot Pr} = \\frac{h}{\\rho V c_p}`} display />
                <p className="text-sm text-gray-400 mt-3">
                  <strong className="text-white">의미:</strong> 실제/최대 열전달 비율<br />
                  Reynolds analogy에서 중요
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  St ~ C_f/2 (Pr ~ 1인 경우)
                </p>
              </div>
            </div>
          </motion.div>

          {/* 7. Summary Table */}
          <SectionDivider number="7" title="Summary: Choosing the Right Dimensionless Groups" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6 text-center">
                Decision Guide for Dimensionless Numbers
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">상황</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">필요한 무차원수</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">상관식 형태</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-teal-400 font-medium">강제 대류</td>
                      <td className="py-3 px-4">Re, Pr, Nu</td>
                      <td className="py-3 px-4"><Math tex="Nu = f(Re, Pr)" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-emerald-400 font-medium">자연 대류</td>
                      <td className="py-3 px-4">Gr (or Ra), Pr, Nu</td>
                      <td className="py-3 px-4"><Math tex="Nu = f(Ra, Pr)" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-orange-400 font-medium">혼합 대류</td>
                      <td className="py-3 px-4">Re, Gr, Pr, Nu</td>
                      <td className="py-3 px-4"><Math tex="Gr/Re^2" />로 지배 모드 판단</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-cyan-400 font-medium">열/운동량 유사</td>
                      <td className="py-3 px-4">St, C_f, Pr</td>
                      <td className="py-3 px-4"><Math tex="St = C_f/2 \\cdot Pr^{-2/3}" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-yellow-400 font-medium">액체 금속</td>
                      <td className="py-3 px-4">Re, Pe, Nu</td>
                      <td className="py-3 px-4"><Math tex="Nu = f(Pe)" /> (특수 상관식)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="무차원수 사용의 핵심" accent="teal" icon="!">
              <p className="mb-2">
                대류 열전달 문제를 풀 때:
              </p>
              <ul className="space-y-1 mt-2">
                <li><strong className="text-teal-400">1.</strong> 문제 유형 파악 (강제/자연 대류)</li>
                <li><strong className="text-teal-400">2.</strong> Re (또는 Gr), Pr 계산</li>
                <li><strong className="text-teal-400">3.</strong> 적절한 상관식으로 Nu 결정</li>
                <li><strong className="text-teal-400">4.</strong> Nu로부터 h 계산: <Math tex="h = Nu \\cdot k / L" /></li>
                <li><strong className="text-teal-400">5.</strong> Newton 법칙으로 열전달 계산</li>
              </ul>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <ThinkLikeEngineer title="Mixed Convection 판단">
              <p className="mb-4">
                <strong>문제:</strong> 수직 가열판(L = 0.5 m, T_s = 60 C) 위로 공기(T_inf = 20 C)가
                0.5 m/s로 흐릅니다. 강제 대류인가, 자연 대류인가, 혼합 대류인가?
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/30 mb-4">
                <p className="text-sm text-purple-400 font-bold mb-2">판단 기준:</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>1. <strong>Re 계산:</strong> Re = VL/nu = (0.5)(0.5)/(1.8e-5) = 1.4e4</li>
                  <li>2. <strong>Gr 계산:</strong> beta = 1/T_f = 1/313 = 0.0032 K^-1
                    <br />Gr = g*beta*DT*L^3/nu^2 = (9.81)(0.0032)(40)(0.5)^3/(1.8e-5)^2 = 4.8e8</li>
                  <li>3. <strong>비율:</strong> Gr/Re^2 = 4.8e8/(1.4e4)^2 = 2.4</li>
                </ul>
              </div>

              <p className="text-sm text-gray-400">
                <strong className="text-white">결론:</strong> Gr/Re^2 = 2.4 ~ O(1)이므로
                <span className="text-yellow-400 font-bold"> 혼합 대류(Mixed Convection)</span>.
                부력과 관성이 모두 중요. 단순 강제/자연 상관식 적용 불가.
                <br /><br />
                <span className="text-gray-500">
                  Rule of thumb: Gr/Re^2 &lt; 0.1 → 강제 대류, Gr/Re^2 &gt; 10 → 자연 대류
                </span>
              </p>
            </ThinkLikeEngineer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

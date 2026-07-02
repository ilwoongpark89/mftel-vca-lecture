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
  const borderColor = accent === "teal" ? "border-teal-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "purple" ? "border-purple-500/30" : "border-slate-700";
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

function BoundaryLayerCalculator() {
  const [velocity, setVelocity] = useState(10);
  const [distance, setDistance] = useState(0.5);
  const [viscosity, setViscosity] = useState(15.11e-6);
  const [prandtl, setPrandtl] = useState(0.71);

  const Re_x = (velocity * distance) / viscosity;
  const isLaminar = Re_x < 5e5;
  const delta = isLaminar ? (5.0 * distance) / NativeMath.sqrt(Re_x) : (0.37 * distance) / NativeMath.pow(Re_x, 0.2);
  const delta_t = delta / NativeMath.pow(prandtl, 1/3);

  return (
    <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-6">
      <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6 text-center">
        Interactive: Boundary Layer Thickness Calculator
      </h4>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Free stream velocity u_inf [m/s]: {velocity}
            </label>
            <input
              type="range"
              min="0.1"
              max="50"
              step="0.1"
              value={velocity}
              onChange={(e) => setVelocity(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Distance from leading edge x [m]: {distance.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.01"
              max="2"
              step="0.01"
              value={distance}
              onChange={(e) => setDistance(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Kinematic viscosity nu [m^2/s]: {viscosity.toExponential(2)}
            </label>
            <select
              value={viscosity}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setViscosity(val);
                if (val === 15.11e-6) setPrandtl(0.71);
                else if (val === 1.004e-6) setPrandtl(7.01);
                else if (val === 5e-5) setPrandtl(500);
              }}
              className="w-full p-2 bg-slate-800 border border-slate-600 rounded-lg text-white"
            >
              <option value={15.11e-6}>Air @ 20C (1.51e-5)</option>
              <option value={1.004e-6}>Water @ 20C (1.00e-6)</option>
              <option value={5e-5}>Engine oil (5e-5)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Prandtl number Pr: {prandtl}
            </label>
            <input
              type="range"
              min="0.01"
              max="1000"
              step="0.01"
              value={prandtl}
              onChange={(e) => setPrandtl(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
            <p className="text-sm text-gray-500 mb-2">Reynolds Number</p>
            <p className="text-2xl font-bold text-teal-400">
              Re_x = {Re_x.toExponential(2)}
            </p>
            <p className={`text-sm mt-1 ${isLaminar ? 'text-emerald-400' : 'text-red-400'}`}>
              {isLaminar ? 'Laminar Flow' : 'Turbulent Flow'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-teal-500/30">
            <p className="text-sm text-gray-500 mb-2">Velocity BL Thickness</p>
            <p className="text-2xl font-bold text-teal-400">
              delta = {(delta * 1000).toFixed(2)} mm
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {isLaminar ? 'Using: delta/x = 5.0/sqrt(Re_x)' : 'Using: delta/x = 0.37/Re_x^0.2'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-orange-500/30">
            <p className="text-sm text-gray-500 mb-2">Thermal BL Thickness</p>
            <p className="text-2xl font-bold text-orange-400">
              delta_t = {(delta_t * 1000).toFixed(2)} mm
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Using: delta_t = delta / Pr^(1/3)
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30">
            <p className="text-sm text-gray-500 mb-2">BL Thickness Ratio</p>
            <p className="text-xl font-bold text-cyan-400">
              delta/delta_t = Pr^(1/3) = {NativeMath.pow(prandtl, 1/3).toFixed(3)}
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center">
        Note: For Pr &gt; 0.6, the relation delta/delta_t ~ Pr^(1/3) is a good approximation.
      </p>
    </div>
  );
}

export default function BoundaryLayers() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Velocity and Thermal Boundary Layers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Navier-Stokes 방정식으로부터 경계층 방정식 유도, Blasius 해, 그리고 속도-온도 경계층의 상호작용을 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 경계층의 개념 */}
          <SectionDivider number="1" title="Boundary Layer Concept" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">경계층(Boundary Layer)</strong>은 고체 표면 근처에서 유체의 성질(속도, 온도)이
              급격히 변하는 <strong className="text-teal-400">얇은 영역</strong>입니다.
              경계층 바깥의 자유 흐름(free stream) 영역에서는 점성 효과와 전도 효과가 무시됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Ludwig Prandtl&apos;s Boundary Layer Theory (1904)
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-sm font-bold text-teal-400 mb-3">경계층 내부</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li><span className="text-teal-400">*</span> 점성 효과가 중요</li>
                    <li><span className="text-teal-400">*</span> 전도에 의한 열전달 발생</li>
                    <li><span className="text-teal-400">*</span> 속도/온도가 급격히 변화</li>
                    <li><span className="text-teal-400">*</span> 벽면 전단응력과 열유속 결정</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-sm font-bold text-orange-400 mb-3">경계층 외부 (Free Stream)</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li><span className="text-orange-400">*</span> 점성 효과 무시</li>
                    <li><span className="text-orange-400">*</span> 전도에 의한 열전달 무시</li>
                    <li><span className="text-orange-400">*</span> 비점성/등온 유동</li>
                    <li><span className="text-orange-400">*</span> 자유 흐름 조건 유지</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-gray-400 text-center">
                경계층 이론은 유체역학과 열전달 해석을 크게 단순화시켰습니다.
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="경계층 이론의 의의" accent="teal" icon="P">
              <p>
                Prandtl의 경계층 이론 덕분에 <strong className="text-teal-400">Navier-Stokes 방정식</strong>의
                2차 항들을 무시할 수 있게 되어, 해석적 해를 구하거나 수치 해석을 크게 단순화할 수 있습니다.
              </p>
              <p className="mt-2 text-gray-500">
                경계층 두께는 전형적으로 특성 길이의 1% 이하로 매우 얇습니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. Navier-Stokes로부터 속도 경계층 방정식 유도 */}
          <SectionDivider number="2" title="Velocity Boundary Layer: Derivation from Navier-Stokes" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              2차원 정상 비압축성 유동에 대한 <strong className="text-white">Navier-Stokes 방정식</strong>에서
              경계층 근사를 적용하여 경계층 방정식을 유도합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Full Navier-Stokes Equations (2D, Steady, Incompressible)
              </h4>

              <div className="space-y-4">
                <EquationBox label="Continuity (연속 방정식)" accent="teal">
                  <Math tex={`\\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} = 0`} display />
                </EquationBox>

                <EquationBox label="x-Momentum" accent="teal">
                  <Math tex={`u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = -\\frac{1}{\\rho}\\frac{\\partial p}{\\partial x} + \\nu\\left(\\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2}\\right)`} display />
                </EquationBox>

                <EquationBox label="y-Momentum" accent="teal">
                  <Math tex={`u\\frac{\\partial v}{\\partial x} + v\\frac{\\partial v}{\\partial y} = -\\frac{1}{\\rho}\\frac{\\partial p}{\\partial y} + \\nu\\left(\\frac{\\partial^2 v}{\\partial x^2} + \\frac{\\partial^2 v}{\\partial y^2}\\right)`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Boundary Layer Approximations (Order of Magnitude Analysis)
              </h4>

              <p className="text-gray-400 mb-4">
                경계층 내에서 <Math tex="\\delta \\ll L" />이므로, 다음과 같은 <strong className="text-white">Order of Magnitude</strong> 관계가 성립:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-2">Scaling 관계</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li><Math tex="u \\sim u_\\infty" />, <Math tex="x \\sim L" /></li>
                    <li><Math tex="y \\sim \\delta" />, <Math tex="v \\sim u_\\infty(\\delta/L)" /></li>
                    <li><Math tex="\\delta/L \\sim Re_L^{-1/2}" /></li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-2">주요 근사</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li><Math tex="\\partial^2 u/\\partial x^2 \\ll \\partial^2 u/\\partial y^2" /></li>
                    <li><Math tex="\\partial p/\\partial y \\approx 0" /> (경계층 내 압력 일정)</li>
                    <li><Math tex="p(x) = p_\\infty(x)" /> (외부 유동에 의해 결정)</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30">
                <p className="text-sm text-orange-400 font-bold mb-2">Boundary Layer Equations (Prandtl Equations)</p>
                <Math tex={`\\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} = 0`} display />
                <Math tex={`u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = -\\frac{1}{\\rho}\\frac{dp_\\infty}{dx} + \\nu\\frac{\\partial^2 u}{\\partial y^2}`} display />
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="경계층 방정식의 수학적 특성" accent="orange" icon="M">
              <p>
                원래 Navier-Stokes는 <strong className="text-orange-400">타원형(elliptic)</strong> 편미분 방정식이지만,
                경계층 방정식은 <strong className="text-orange-400">포물선형(parabolic)</strong>입니다.
              </p>
              <p className="mt-2 text-gray-500">
                이로 인해 상류 조건만으로 하류 해를 계산할 수 있어 (marching solution) 계산이 크게 단순화됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. Blasius 해 */}
          <SectionDivider number="3" title="Blasius Solution: Similarity Transform" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Blasius (1908)</strong>는 등압 평판 경계층에 대해
              <strong className="text-teal-400">상사 변환(Similarity Transform)</strong>을 도입하여
              편미분 방정식을 상미분 방정식으로 변환했습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Blasius Similarity Solution
              </h4>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-cyan-400 font-bold mb-3">Step 1: 상사 변수 정의</p>
                  <Math tex={`\\eta = y\\sqrt{\\frac{u_\\infty}{\\nu x}} = \\frac{y}{\\delta(x)} \\cdot \\text{const}`} display />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    eta는 경계층 내 무차원 y 좌표
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-cyan-400 font-bold mb-3">Step 2: 스트림 함수 정의</p>
                  <Math tex={`\\psi = \\sqrt{\\nu x u_\\infty} \\cdot f(\\eta)`} display />
                  <Math tex={`u = \\frac{\\partial \\psi}{\\partial y} = u_\\infty f'(\\eta)`} display />
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  <p className="text-sm text-cyan-400 font-bold mb-3">Step 3: Blasius Equation</p>
                  <Math tex={`2f''' + ff'' = 0`} display />
                  <p className="text-sm text-gray-400 mt-3">
                    <strong>경계 조건:</strong>
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1 mt-1">
                    <li>- eta = 0: <Math tex="f = 0, f' = 0" /> (no-slip, no-penetration)</li>
                    <li>- eta to infinity: <Math tex="f' \\to 1" /> (자유 흐름 속도)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-cyan-400 font-bold mb-3">주요 결과</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">경계층 두께 (eta = 5에서 u/u_inf = 0.99)</p>
                      <Math tex={`\\delta = \\frac{5.0 x}{\\sqrt{Re_x}}`} display />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">벽면 전단 응력</p>
                      <Math tex={`\\tau_w = 0.332\\frac{\\rho u_\\infty^2}{\\sqrt{Re_x}}`} display />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    f&apos;&apos;(0) = 0.332 는 수치 해석으로 얻은 값
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="상사 변환의 물리적 의미" accent="cyan" icon="S">
              <p>
                <strong className="text-cyan-400">Self-similarity</strong>: 모든 x 위치에서 무차원 속도 프로파일
                <Math tex="u/u_\\infty = f'(\\eta)" />의 형태가 동일합니다.
              </p>
              <p className="mt-2 text-gray-500">
                이는 경계층이 x에 따라 성장하지만, 적절히 스케일링하면 동일한 &quot;형태&quot;를 유지함을 의미합니다.
                마치 사진을 확대/축소해도 형태가 유지되는 것과 같습니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. 에너지 방정식으로부터 온도 경계층 유도 */}
          <SectionDivider number="4" title="Thermal Boundary Layer: Derivation from Energy Equation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              온도 경계층은 <strong className="text-white">에너지 방정식</strong>에 경계층 근사를 적용하여 유도합니다.
              유사한 차수 분석(order of magnitude analysis)을 통해 단순화된 형태를 얻습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Energy Equation Derivation
              </h4>

              <div className="space-y-4">
                <EquationBox label="Full Energy Equation (2D, Steady, Incompressible)" accent="emerald">
                  <Math tex={`u\\frac{\\partial T}{\\partial x} + v\\frac{\\partial T}{\\partial y} = \\alpha\\left(\\frac{\\partial^2 T}{\\partial x^2} + \\frac{\\partial^2 T}{\\partial y^2}\\right) + \\frac{\\mu}{\\rho c_p}\\Phi`} display />
                </EquationBox>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-2">여기서 <Math tex="\\Phi" />는 점성 소산 함수:</p>
                  <Math tex={`\\Phi = 2\\left[\\left(\\frac{\\partial u}{\\partial x}\\right)^2 + \\left(\\frac{\\partial v}{\\partial y}\\right)^2\\right] + \\left(\\frac{\\partial u}{\\partial y} + \\frac{\\partial v}{\\partial x}\\right)^2`} display />
                </div>

                <EquationBox label="Thermal Boundary Layer Equation (점성 소산 무시 시)" accent="emerald">
                  <Math tex={`u\\frac{\\partial T}{\\partial x} + v\\frac{\\partial T}{\\partial y} = \\alpha\\frac{\\partial^2 T}{\\partial y^2}`} display />
                </EquationBox>
              </div>

              <p className="text-sm text-gray-400 text-center mt-4">
                속도 경계층 방정식과 동일한 형태! (운동량 대신 열, nu 대신 alpha)
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Pohlhausen Solution for Thermal Boundary Layer
              </h4>

              <p className="text-gray-400 mb-4">
                등온 평판의 경우, 온도에 대해서도 상사 변환을 적용할 수 있습니다:
              </p>

              <div className="space-y-4">
                <EquationBox label="무차원 온도" accent="emerald">
                  <Math tex={`\\theta(\\eta) = \\frac{T - T_s}{T_\\infty - T_s}`} display />
                </EquationBox>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <p className="text-sm text-emerald-400 font-bold mb-3">Pohlhausen Equation</p>
                  <Math tex={`\\theta'' + \\frac{Pr}{2}f\\theta' = 0`} display />
                  <p className="text-sm text-gray-400 mt-3">
                    <strong>경계 조건:</strong> eta = 0: theta = 0, eta to infinity: theta to 1
                  </p>
                </div>

                <EquationBox label="Local Nusselt Number (Pr > 0.6)" accent="emerald">
                  <Math tex={`Nu_x = 0.332 Re_x^{1/2} Pr^{1/3}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          {/* 5. Prandtl 수와 경계층 두께 비 */}
          <SectionDivider number="5" title="Prandtl Number: Physical Significance" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Prandtl 수</strong>는 운동량 확산과 열 확산의 상대적 속도를 나타내며,
              속도 경계층과 온도 경계층의 상대적 두께를 결정합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6 text-center">
                Boundary Layer Thickness Ratio
              </h4>

              <EquationBox label="정확한 해석 결과 (Pr > 1)" accent="orange">
                <Math tex={`\\frac{\\delta_t}{\\delta} \\approx Pr^{-1/3} \\quad \\Leftrightarrow \\quad \\frac{\\delta}{\\delta_t} \\approx Pr^{1/3}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400 mb-3">
                  <strong className="text-white">유도 과정의 핵심:</strong> 열 경계층 방정식에서
                </p>
                <Math tex={`\\frac{\\delta_t}{\\delta} \\sim \\left(\\frac{\\alpha}{\\nu}\\right)^{1/2} = Pr^{-1/2} \\quad \\text{(rough estimate)}`} display />
                <p className="text-sm text-gray-400 mt-3">
                  그러나 상세한 해석을 통해 <Math tex="Pr^{-1/3}" />이 더 정확한 지수임이 밝혀졌습니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">
                <h5 className="text-cyan-400 font-bold mb-3">Pr &lt;&lt; 1 (액체 금속)</h5>
                <p className="text-sm text-gray-400 mb-3">
                  <Math tex="\\delta_t \\gg \\delta" /><br />
                  온도 경계층이 훨씬 두꺼움
                </p>
                <p className="text-xs text-gray-500">
                  예: Na (Pr = 0.01), Hg (Pr = 0.025)<br />
                  열 확산이 운동량 확산보다 10-100배 빠름
                </p>
              </div>

              <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-5">
                <h5 className="text-teal-400 font-bold mb-3">Pr ~ 1 (기체)</h5>
                <p className="text-sm text-gray-400 mb-3">
                  <Math tex="\\delta_t \\approx \\delta" /><br />
                  두 경계층이 거의 동일
                </p>
                <p className="text-xs text-gray-500">
                  예: Air (Pr = 0.71), He, CO2<br />
                  <strong>Reynolds Analogy</strong> 적용 가능
                </p>
              </div>

              <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-5">
                <h5 className="text-orange-400 font-bold mb-3">Pr &gt;&gt; 1 (오일, 글리세린)</h5>
                <p className="text-sm text-gray-400 mb-3">
                  <Math tex="\\delta_t \\ll \\delta" /><br />
                  온도 경계층이 훨씬 얇음
                </p>
                <p className="text-xs text-gray-500">
                  예: Engine oil (Pr = 500-2000)<br />
                  Glycerin (Pr ~ 2500)<br />
                  운동량 확산이 열 확산보다 훨씬 빠름
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-4">
                Representative Prandtl Numbers and BL Ratio
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Fluid</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Pr</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">delta/delta_t = Pr^(1/3)</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Physical Implication</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Liquid Na (100 C)</td>
                      <td className="py-3 px-4 text-cyan-400">0.01</td>
                      <td className="py-3 px-4">0.22</td>
                      <td className="py-3 px-4 text-gray-400">delta_t = 4.6 * delta</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Mercury</td>
                      <td className="py-3 px-4 text-cyan-400">0.025</td>
                      <td className="py-3 px-4">0.29</td>
                      <td className="py-3 px-4 text-gray-400">delta_t = 3.4 * delta</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Air (20 C)</td>
                      <td className="py-3 px-4 text-teal-400">0.71</td>
                      <td className="py-3 px-4">0.89</td>
                      <td className="py-3 px-4 text-gray-400">delta_t ~ delta</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Water (20 C)</td>
                      <td className="py-3 px-4 text-teal-400">7.0</td>
                      <td className="py-3 px-4">1.91</td>
                      <td className="py-3 px-4 text-gray-400">delta = 1.9 * delta_t</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">SAE 10W Oil</td>
                      <td className="py-3 px-4 text-orange-400">500</td>
                      <td className="py-3 px-4">7.9</td>
                      <td className="py-3 px-4 text-gray-400">delta = 7.9 * delta_t</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Glycerin</td>
                      <td className="py-3 px-4 text-orange-400">2500</td>
                      <td className="py-3 px-4">13.6</td>
                      <td className="py-3 px-4 text-gray-400">delta = 13.6 * delta_t</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 6. Interactive Calculator */}
          <SectionDivider number="6" title="Interactive: Boundary Layer Calculator" />

          <motion.div {...stagger} className="mb-8">
            <BoundaryLayerCalculator />
          </motion.div>

          {/* 7. 경계층 발달과 천이 */}
          <SectionDivider number="7" title="Boundary Layer Development and Transition" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              경계층은 선단(leading edge)에서 시작하여 하류 방향으로 <strong className="text-white">성장</strong>합니다.
              이 과정에서 층류에서 난류로의 <strong className="text-teal-400">천이(Transition)</strong>가 발생할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Flat Plate Boundary Layer Development
              </h4>

              <div className="space-y-6">
                <div className="p-5 rounded-xl bg-slate-950/80 border border-emerald-500/30">
                  <h5 className="text-emerald-400 font-bold mb-3">1. Laminar Region (층류 영역)</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    선단 근처, <Math tex="Re_x < Re_{x,c}" />
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li><span className="text-emerald-400">*</span> 규칙적이고 층을 이루는 유동</li>
                    <li><span className="text-emerald-400">*</span> 분자 확산에 의한 운동량/열 전달</li>
                    <li><span className="text-emerald-400">*</span> <Math tex="\\delta \\propto x^{1/2}" /></li>
                    <li><span className="text-emerald-400">*</span> Blasius solution 적용 가능</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-yellow-500/30">
                  <h5 className="text-yellow-400 font-bold mb-3">2. Transition Region (천이 영역)</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    <Math tex="Re_x \\approx Re_{x,c}" /> 근처
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li><span className="text-yellow-400">*</span> Tollmien-Schlichting 파동 성장</li>
                    <li><span className="text-yellow-400">*</span> 층류와 난류의 간헐적 혼재</li>
                    <li><span className="text-yellow-400">*</span> 예측이 어려운 영역</li>
                    <li><span className="text-yellow-400">*</span> Linear stability theory로 분석</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-red-500/30">
                  <h5 className="text-red-400 font-bold mb-3">3. Turbulent Region (난류 영역)</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    <Math tex="Re_x > Re_{x,c}" />
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li><span className="text-red-400">*</span> 불규칙하고 3차원적인 유동</li>
                    <li><span className="text-red-400">*</span> 와류에 의한 강화된 혼합</li>
                    <li><span className="text-red-400">*</span> <Math tex="\\delta \\propto x^{4/5}" /> (경험적)</li>
                    <li><span className="text-red-400">*</span> 더 높은 마찰과 열전달</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <EquationBox label="평판 임계 Reynolds 수" accent="teal">
              <Math tex={`Re_{x,c} = \\frac{u_\\infty x_c}{\\nu} \\approx 5 \\times 10^5`} display />
            </EquationBox>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="천이 Reynolds 수의 변동" accent="yellow" icon="!">
              <p>
                임계 Reynolds 수 <Math tex="Re_{x,c} \\approx 5 \\times 10^5" />는 <strong className="text-yellow-400">이상적인 조건</strong>에서의 값입니다.
                실제로는 다음 요인에 의해 크게 달라질 수 있습니다:
              </p>
              <ul className="mt-2 space-y-1">
                <li><span className="text-yellow-400">*</span> 자유 흐름 난류도 (free-stream turbulence intensity): 높으면 조기 천이</li>
                <li><span className="text-yellow-400">*</span> 표면 거칠기 (surface roughness): 거칠면 조기 천이</li>
                <li><span className="text-yellow-400">*</span> 압력 구배 (pressure gradient): 역압력 구배는 천이 촉진</li>
                <li><span className="text-yellow-400">*</span> 벽면 가열/냉각: 점성 변화로 안정성 영향</li>
              </ul>
              <p className="mt-2 text-gray-500">
                실제 범위: <Math tex="10^5" /> ~ <Math tex="3 \\times 10^6" />
              </p>
            </InsightCard>
          </motion.div>

          {/* 8. 입구 영역과 완전 발달 영역 */}
          <SectionDivider number="8" title="Entry vs Fully Developed Region" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">내부 유동(Internal Flow)</strong>에서는 경계층이 채널 중심까지 성장하여
              합쳐지면 <strong className="text-teal-400">완전 발달(Fully Developed)</strong> 영역이 됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-6">
                <h5 className="text-teal-400 font-bold mb-3">Entry Region (입구 영역)</h5>
                <p className="text-sm text-gray-400 mb-3">
                  경계층이 아직 발달 중인 영역
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li><span className="text-teal-400">*</span> 속도/온도 프로파일이 변화</li>
                  <li><span className="text-teal-400">*</span> h(x)가 x에 따라 변화</li>
                  <li><span className="text-teal-400">*</span> 일반적으로 h가 더 높음</li>
                  <li><span className="text-teal-400">*</span> 2D PDE 해석 필요</li>
                </ul>
              </div>

              <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                <h5 className="text-orange-400 font-bold mb-3">Fully Developed Region</h5>
                <p className="text-sm text-gray-400 mb-3">
                  프로파일 형태가 더 이상 변하지 않음
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li><span className="text-orange-400">*</span> 무차원 속도/온도 프로파일 불변</li>
                  <li><span className="text-orange-400">*</span> h = 상수 (층류), Nu 상수</li>
                  <li><span className="text-orange-400">*</span> 해석이 크게 단순화 (ODE)</li>
                  <li><span className="text-orange-400">*</span> 해석해 존재 (Poiseuille 등)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Entry Length (입구 길이)
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <EquationBox label="유체역학적 입구 길이 (층류)" accent="emerald">
                  <Math tex={`\\frac{x_{fd,h}}{D} \\approx 0.05 \\, Re_D`} display />
                </EquationBox>

                <EquationBox label="열적 입구 길이 (층류)" accent="emerald">
                  <Math tex={`\\frac{x_{fd,t}}{D} \\approx 0.05 \\, Re_D \\, Pr`} display />
                </EquationBox>
              </div>

              <p className="text-sm text-gray-400 text-center mt-6">
                난류의 경우: <Math tex="10 \\lesssim x_{fd}/D \\lesssim 60" /> (대략적, Pr 및 Re 의존)
              </p>
            </div>
          </motion.div>

          {/* 9. Think Like an Engineer */}
          <SectionDivider number="9" title="Think Like an Engineer" />

          <motion.div {...stagger} className="mb-8">
            <ThinkLikeEngineer title="열교환기 설계 시 경계층 고려">
              <p className="mb-4">
                <strong>문제:</strong> 직경 10 mm 관에 물(20 C, Pr = 7)이 평균속도 1 m/s로 흐릅니다.
                관 길이가 1 m일 때:
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>유동이 층류인지 난류인지 판단하시오.</li>
                <li>수력학적 입구 길이와 열적 입구 길이를 계산하시오.</li>
                <li>완전 발달 영역이 존재하는지, 존재한다면 몇 %가 완전 발달 영역인지 계산하시오.</li>
                <li>입구 효과가 평균 열전달 계수에 미치는 영향을 정성적으로 설명하시오.</li>
              </ol>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/30 mb-4">
                <p className="text-sm text-purple-400 font-bold mb-2">풀이 접근:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>* Re_D = (1 m/s)(0.01 m) / (1.004e-6 m^2/s) = 9,960 (층류/난류 천이 영역)</li>
                  <li>* 만약 층류로 가정: x_fd,h = 0.05 * 9960 * 0.01 = 4.98 m &gt;&gt; 1 m</li>
                  <li>* x_fd,t = 0.05 * 9960 * 7 * 0.01 = 34.9 m &gt;&gt; 1 m</li>
                  <li>* 결론: 1 m 관 전체가 입구 영역 (developing region)</li>
                </ul>
              </div>

              <p className="text-sm text-gray-400">
                <strong className="text-white">실무적 시사점:</strong> 짧은 열교환기에서는 입구 효과가 중요합니다.
                평균 h는 완전 발달 값보다 높으므로, 완전 발달 상관식만 사용하면 열전달을 과소평가할 수 있습니다.
                Sieder-Tate 또는 입구 영역 보정 상관식을 사용해야 합니다.
              </p>
            </ThinkLikeEngineer>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <ThinkLikeEngineer title="항공기 날개의 경계층 제어">
              <p className="mb-4">
                <strong>문제:</strong> 비행 속도 200 m/s, 고도 10 km (T = 223 K, nu = 3.5e-5 m^2/s)에서
                날개 시위(chord) 길이가 3 m인 항공기의:
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>층류-난류 천이 위치를 계산하시오 (Re_c = 5e5 가정).</li>
                <li>날개 후단에서의 경계층 두께를 추정하시오.</li>
                <li>층류 경계층을 더 오래 유지하면 어떤 이점이 있는지 설명하시오.</li>
              </ol>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/30 mb-4">
                <p className="text-sm text-purple-400 font-bold mb-2">풀이 접근:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>* Re_L = (200)(3) / (3.5e-5) = 1.71e7 (매우 높은 Re, 대부분 난류)</li>
                  <li>* 천이 위치: x_c = (5e5)(3.5e-5) / 200 = 0.0875 m = 8.75 cm (앞전에서 매우 가까움)</li>
                  <li>* 난류 경계층 두께: delta = 0.37 * 3 / (1.71e7)^0.2 = 0.037 m = 37 mm</li>
                </ul>
              </div>

              <p className="text-sm text-gray-400">
                <strong className="text-white">항공우주 응용:</strong> 층류 경계층은 난류보다 마찰 항력이 낮습니다.
                <strong className="text-purple-400"> Natural Laminar Flow (NLF)</strong> 기술은 특수한 압력 분포를 이용해
                층류를 더 오래 유지합니다. 이를 통해 항력을 10-15% 감소시킬 수 있습니다.
                그러나 표면 오염, 곤충 충돌 등이 천이를 촉진할 수 있어 실용화에 어려움이 있습니다.
              </p>
            </ThinkLikeEngineer>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="실무적 고려사항" accent="emerald" icon="E">
              <p>
                열교환기 설계 시, 전체 길이 대비 입구 영역의 비율이 클수록
                <strong className="text-emerald-400">평균 열전달 계수가 높아집니다</strong> (entry length effect).
              </p>
              <p className="mt-2 text-gray-500">
                그러나 입구 영역에서는 압력 강하도 더 큽니다. 최적 설계가 필요합니다.
                다중 패스 열교환기에서는 각 패스가 새로운 입구 효과를 제공할 수 있습니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

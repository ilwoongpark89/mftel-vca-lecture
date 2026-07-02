"use client";

import { motion } from "framer-motion";
import Math from "@/components/Math";

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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "blue",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "blue" ? "border-blue-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "red" ? "border-red-500/30" : "border-slate-700";
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
  accent = "blue",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
  };
  const c = colors[accent] || colors.blue;
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

const transientExamples = [
  {
    name: "Quenching (담금질)",
    desc: "고온의 금속을 차가운 유체에 담가 급냉시키는 과정. 열처리, 경화 공정에 사용.",
    icon: "Q",
  },
  {
    name: "Heat Treatment (열처리)",
    desc: "재료를 특정 온도로 가열 후 냉각하여 물성을 변화시키는 공정.",
    icon: "H",
  },
  {
    name: "Food Processing",
    desc: "식품의 가열/냉각 과정에서 중심 온도가 목표값에 도달하는 시간 예측.",
    icon: "F",
  },
  {
    name: "Electronic Cooling",
    desc: "전자 부품의 시동/정지 시 온도 변화 특성 분석.",
    icon: "E",
  },
  {
    name: "Building Thermal Mass",
    desc: "건물 구조체가 일사량 변화에 반응하는 시간 지연 특성.",
    icon: "B",
  },
  {
    name: "Casting & Solidification",
    desc: "용융 금속이 주형에서 응고되는 과정의 온도 변화.",
    icon: "C",
  },
];

export default function TransientIntro() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Introduction to Transient Conduction
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            정상상태(Steady State)와 구별되는 비정상(Transient) 열전도의 개념과 특성을 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 정상상태 vs 비정상 */}
          <SectionDivider number="1" title="Steady State vs. Transient" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              지금까지 우리는 <strong className="text-white">정상상태(Steady State)</strong> 조건에서의 열전달을 분석했습니다.
              정상상태에서는 시스템 내 모든 점의 온도가 시간에 따라 변하지 않습니다.
              그러나 실제 많은 공학적 상황에서 온도는 시간에 따라 변합니다 - 이것이 <strong className="text-blue-400">비정상(Transient)</strong> 또는
              <strong className="text-blue-400"> 비정상상태(Unsteady State)</strong> 문제입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
                  Steady State (정상상태)
                </h4>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-slate-700 mb-4">
                  <Math tex={`\\frac{\\partial T}{\\partial t} = 0`} display />
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">&bull;</span>
                    <span>온도가 <strong className="text-white">시간에 무관</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">&bull;</span>
                    <span><Math tex="T = T(x, y, z)" /> only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">&bull;</span>
                    <span>에너지 저장 없음 (<Math tex="\\dot{E}_{st} = 0" />)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-0.5">&bull;</span>
                    <span>모든 점에서 에너지 유입 = 에너지 유출</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                  Transient (비정상)
                </h4>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-blue-500/20 mb-4">
                  <Math tex={`\\frac{\\partial T}{\\partial t} \\neq 0`} display />
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&bull;</span>
                    <span>온도가 <strong className="text-blue-400">시간에 따라 변함</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&bull;</span>
                    <span><Math tex="T = T(x, y, z, t)" /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&bull;</span>
                    <span>에너지 저장 발생 (<Math tex="\\dot{E}_{st} \\neq 0" />)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&bull;</span>
                    <span>초기조건(IC)이 필요</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 2. 비정상 전도가 발생하는 상황 */}
          <SectionDivider number="2" title="When Does Transient Conduction Occur?" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              비정상 열전도는 <strong className="text-white">경계조건이 변할 때</strong> 또는
              <strong className="text-white"> 초기 온도 분포가 평형상태에 있지 않을 때</strong> 발생합니다.
              시스템이 새로운 평형상태에 도달하기까지 시간이 필요하며, 이 과도 기간이 비정상 상태입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                비정상 전도를 유발하는 상황
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span><strong className="text-white">주위 온도 변화:</strong> 갑자기 온도가 다른 환경에 노출</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span><strong className="text-white">열 생성 변화:</strong> 전기 가열 시작/중단, 화학반응 개시</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span><strong className="text-white">대류조건 변화:</strong> 유체 유속 변화, 팬 가동 시작</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span><strong className="text-white">열접촉 변화:</strong> 두 물체의 접촉/분리</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">5.</span>
                    <span><strong className="text-white">복사조건 변화:</strong> 일사량 변화, 차폐물 제거</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">6.</span>
                    <span><strong className="text-white">시스템 시작:</strong> 엔진 시동, 전자기기 부팅</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 3. 실제 응용 예 */}
          <SectionDivider number="3" title="Engineering Applications" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              비정상 열전도 해석은 다양한 산업 분야에서 중요한 설계 도구입니다.
              특히 온도가 특정 값에 도달하는 <strong className="text-white">시간을 예측</strong>하는 것이 핵심입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {transientExamples.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-4 rounded-xl bg-slate-800/30 border border-slate-700"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">
                      {item.icon}
                    </span>
                    <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  </div>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 4. 지배 방정식 */}
          <SectionDivider number="4" title="Governing Equation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              비정상 열전도의 지배 방정식은 Week 2에서 유도한 <strong className="text-white">Heat Diffusion Equation</strong>의
              시간 미분항을 포함한 완전한 형태입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Heat Diffusion Equation (Full Form)
              </h4>

              <EquationBox label="3차원, 등방성, 상수 k" accent="blue">
                <Math tex={`\\nabla^2 T + \\frac{\\dot{q}}{k} = \\frac{1}{\\alpha}\\frac{\\partial T}{\\partial t}`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Cartesian Coordinates</p>
                  <Math tex={`\\frac{\\partial^2 T}{\\partial x^2} + \\frac{\\partial^2 T}{\\partial y^2} + \\frac{\\partial^2 T}{\\partial z^2} + \\frac{\\dot{q}}{k} = \\frac{1}{\\alpha}\\frac{\\partial T}{\\partial t}`} display />
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">1-D Cartesian, No Generation</p>
                  <Math tex={`\\frac{\\partial^2 T}{\\partial x^2} = \\frac{1}{\\alpha}\\frac{\\partial T}{\\partial t}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Thermal Diffusivity의 역할" accent="cyan" icon="a">
              <p>
                비정상 전도에서 <Math tex="\\alpha = k/(\\rho c_p)" /> [m^2/s]는 핵심 물성입니다.
                <Math tex="\\alpha" />가 클수록 온도 변화가 재료 내부로 <strong className="text-cyan-400">빠르게 전파</strong>됩니다.
              </p>
              <ul className="mt-2 space-y-1">
                <li>&bull; 분자: <Math tex="k" /> - 열을 전달하는 능력</li>
                <li>&bull; 분모: <Math tex="\\rho c_p" /> - 열을 저장하는 능력 (체적 열용량)</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 5. 초기조건과 경계조건 */}
          <SectionDivider number="5" title="Initial and Boundary Conditions" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              비정상 문제를 풀기 위해서는 <strong className="text-blue-400">초기조건(IC)</strong>과
              <strong className="text-blue-400"> 경계조건(BC)</strong>이 모두 필요합니다.
              시간 미분항이 있으므로 시간에 대한 적분 상수를 결정하기 위해 초기조건이 반드시 필요합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                  Initial Condition (IC)
                </h4>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-orange-500/20 mb-4">
                  <Math tex={`T(x, y, z, 0) = T_i(x, y, z)`} display />
                </div>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">t = 0</strong>에서 전체 영역의 온도 분포를 지정합니다.
                  가장 간단한 경우 균일한 초기 온도 <Math tex="T_i" />를 가정합니다.
                </p>
              </div>

              <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                  Boundary Conditions (BC)
                </h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">1st Kind (Dirichlet)</p>
                    <Math tex={`T(x_s, t) = T_s(t)`} />
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">2nd Kind (Neumann)</p>
                    <Math tex={`-k\\frac{\\partial T}{\\partial n}\\bigg|_s = q''_s(t)`} />
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">3rd Kind (Convection)</p>
                    <Math tex={`-k\\frac{\\partial T}{\\partial n}\\bigg|_s = h(T_s - T_\\infty)`} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. 해석 방법의 분류 */}
          <SectionDivider number="6" title="Solution Methods" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              비정상 전도 문제의 복잡도에 따라 여러 해석 방법이 사용됩니다.
              이번 주에는 가장 간단한 <strong className="text-blue-400">Lumped Capacitance Method</strong>를 학습합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Method</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Applicability</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Complexity</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Week</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800 bg-blue-500/5">
                      <td className="py-3 px-4 font-bold text-blue-400">Lumped Capacitance</td>
                      <td className="py-3 px-4">Bi &lt; 0.1 (공간적 균일)</td>
                      <td className="py-3 px-4 text-emerald-400">Simple ODE</td>
                      <td className="py-3 px-4 text-blue-400">6</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-white">Exact Solutions</td>
                      <td className="py-3 px-4">Simple geometries</td>
                      <td className="py-3 px-4 text-yellow-400">Separation of Variables</td>
                      <td className="py-3 px-4">7</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-white">Heisler Charts</td>
                      <td className="py-3 px-4">Infinite slab, cylinder, sphere</td>
                      <td className="py-3 px-4 text-yellow-400">Graphical</td>
                      <td className="py-3 px-4">7</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-white">Semi-infinite Solid</td>
                      <td className="py-3 px-4">Early-time penetration</td>
                      <td className="py-3 px-4 text-yellow-400">Error function</td>
                      <td className="py-3 px-4">8</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">Numerical Methods</td>
                      <td className="py-3 px-4">Complex geometries/BCs</td>
                      <td className="py-3 px-4 text-red-400">FDM, FEM</td>
                      <td className="py-3 px-4">9+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Why Start with Lumped Capacitance?" accent="blue" icon="1">
              <p>
                Lumped Capacitance Method는 공간적 온도 변화를 무시하고 전체 물체가 <strong className="text-blue-400">균일한 온도</strong>를 가진다고 가정합니다.
                이로써 편미분 방정식(PDE)이 <strong className="text-white">상미분 방정식(ODE)</strong>으로 단순화되어 해석해를 쉽게 구할 수 있습니다.
              </p>
              <p className="mt-2">
                물리적으로 이는 물체 <strong className="text-white">내부의 열 전도가 표면의 대류보다 훨씬 빠른</strong> 경우에 유효합니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "red",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "red" ? "border-red-500/30" : accent === "orange" ? "border-orange-500/30" : "border-slate-700";
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
  accent = "red",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
  };
  const c = colors[accent] || colors.red;
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

function KeyConceptCard({
  title,
  children,
  accent = "red",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "red" ? "border-red-500/20" : accent === "orange" ? "border-orange-500/20" : "border-slate-700";
  const textColor = accent === "red" ? "text-red-400" : accent === "orange" ? "text-orange-400" : "text-gray-400";
  return (
    <div className={`p-4 rounded-xl bg-slate-800/30 border ${borderColor}`}>
      <h4 className={`text-sm font-bold ${textColor} mb-2`}>{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function ConductionRateEquation() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ============================================================ */}
        {/* HEADER */}
        {/* ============================================================ */}
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conduction Rate Equation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fourier 법칙의 일반적 형태와 열유속 벡터의 의미를 이해합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* ============================================================ */}
          {/* 1. REVIEW OF 1D FOURIER'S LAW */}
          {/* ============================================================ */}
          <SectionDivider number="1" title="Review: 1D Fourier&rsquo;s Law" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Week 1에서 학습한 <strong className="text-white">Fourier의 열전도 법칙</strong>을 복습합니다.
              1차원 정상상태에서, 열유속(heat flux)은 온도 구배에 비례하며, 열전도도를 비례상수로 갖습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <EquationBox label="1D Fourier&rsquo;s Law">
              <Math tex={`q''_x = -k \\frac{dT}{dx}`} display />
            </EquationBox>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                각 항의 의미와 단위
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Symbol</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Meaning</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Units (SI)</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">설명</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-red-400"><Math tex={`q''_x`} /></td>
                      <td className="py-3 px-4">Heat flux</td>
                      <td className="py-3 px-4 font-mono text-xs"><Math tex={`\\text{W/m}^2`} /></td>
                      <td className="py-3 px-4 text-gray-400">단위 면적당 열전달률</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-red-400"><Math tex="k" /></td>
                      <td className="py-3 px-4">Thermal conductivity</td>
                      <td className="py-3 px-4 font-mono text-xs"><Math tex={`\\text{W/(m} \\cdot \\text{K)}`} /></td>
                      <td className="py-3 px-4 text-gray-400">물질의 열전도 능력</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-red-400"><Math tex={`dT/dx`} /></td>
                      <td className="py-3 px-4">Temperature gradient</td>
                      <td className="py-3 px-4 font-mono text-xs"><Math tex={`\\text{K/m}`} /></td>
                      <td className="py-3 px-4 text-gray-400">x 방향 온도 변화율</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-red-400"><Math tex="-" /></td>
                      <td className="py-3 px-4">Negative sign</td>
                      <td className="py-3 px-4 font-mono text-xs">&mdash;</td>
                      <td className="py-3 px-4 text-gray-400">열은 온도 감소 방향으로 흐름을 보장</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="음수 부호(negative sign)의 물리적 의미" accent="red" icon="&minus;">
              <p className="mb-2">
                온도 구배 <Math tex="dT/dx" />가 <strong className="text-white">양수</strong>이면 (x 방향으로 온도가 증가),
                열은 <strong className="text-red-300"><Math tex="-x" /> 방향</strong>으로 흐릅니다 (<Math tex={`q''_x < 0`} />).
              </p>
              <p>
                온도 구배 <Math tex="dT/dx" />가 <strong className="text-white">음수</strong>이면 (x 방향으로 온도가 감소),
                열은 <strong className="text-red-300"><Math tex="+x" /> 방향</strong>으로 흐릅니다 (<Math tex={`q''_x > 0`} />).
              </p>
              <p className="mt-2 text-gray-500">
                즉, 열은 항상 고온에서 저온으로 흐르며, 이는 열역학 제2법칙과 일관됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* ============================================================ */}
          {/* 2. GENERAL 3D VECTOR FORM */}
          {/* ============================================================ */}
          <SectionDivider number="2" title="General 3D Vector Form" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              실제 열전달 문제는 대부분 <strong className="text-white">3차원</strong>입니다.
              1D Fourier 법칙을 3차원으로 일반화하면, 열유속은 <strong className="text-white">벡터</strong>가 되며
              온도 구배의 <strong className="text-red-300">gradient (nabla)</strong> 연산자를 사용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h3 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                Fourier&apos;s Law &mdash; General Vector Form
              </h3>

              <EquationBox label="3-D Vector Form" accent="red">
                <Math tex={`\\vec{q''} = -k \\nabla T`} display />
              </EquationBox>

              <p className="text-center text-sm text-gray-500 mt-4 mb-8">
                여기서 <Math tex={`\\nabla T = \\frac{\\partial T}{\\partial x}\\hat{i} + \\frac{\\partial T}{\\partial y}\\hat{j} + \\frac{\\partial T}{\\partial z}\\hat{k}`} /> 는 온도의 gradient 벡터입니다.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <EquationBox label="x-component">
                  <Math tex={`q''_x = -k \\frac{\\partial T}{\\partial x}`} display />
                </EquationBox>
                <EquationBox label="y-component">
                  <Math tex={`q''_y = -k \\frac{\\partial T}{\\partial y}`} display />
                </EquationBox>
                <EquationBox label="z-component">
                  <Math tex={`q''_z = -k \\frac{\\partial T}{\\partial z}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="grid md:grid-cols-2 gap-4 mb-8">
            <InsightCard title="열유속은 벡터입니다" accent="red" icon="V">
              <p>
                <Math tex={`\\vec{q''}`} />는 <strong className="text-white">크기(magnitude)</strong>와 <strong className="text-white">방향(direction)</strong>을 모두 가집니다.
                크기는 <Math tex={`|\\vec{q''}| = k|\\nabla T|`} />이고, 방향은 <Math tex={`-\\nabla T`} /> 방향, 즉 온도가 가장 빠르게 감소하는 방향입니다.
              </p>
            </InsightCard>
            <InsightCard title="Gradient의 의미" accent="orange" icon="&nabla;">
              <p>
                <Math tex={`\\nabla T`} />는 온도가 <strong className="text-white">가장 빠르게 증가하는 방향</strong>을 가리키며,
                그 크기는 해당 방향의 온도 변화율입니다.
                열유속은 그 <strong className="text-orange-300">반대 방향</strong>(<Math tex={`-\\nabla T`} />)을 가리킵니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* ============================================================ */}
          {/* 3. ISOTHERMAL SURFACES AND HEAT FLOW LINES */}
          {/* ============================================================ */}
          <SectionDivider number="3" title="Isothermal Surfaces &amp; Heat Flow Lines" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열전달 문제를 시각화하는 데 두 가지 중요한 개념이 있습니다:
              <strong className="text-white"> 등온면(isothermal surface)</strong>과
              <strong className="text-white"> 열유선(heat flow line)</strong>입니다.
              이 둘은 서로 <strong className="text-red-300">수직(orthogonal)</strong> 관계에 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-6">
              <h4 className="text-lg font-bold text-red-400 mb-4">등온면 (Isothermal Surface)</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&bull;</span>
                  <span><strong className="text-white">정의:</strong> 동일한 온도를 갖는 점들의 집합 (locus of constant T)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&bull;</span>
                  <span>2D에서는 <strong className="text-white">등온선(isotherm)</strong>, 3D에서는 <strong className="text-white">등온면</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&bull;</span>
                  <span>등온면 위에서는 온도 변화가 없으므로, 등온면에 접하는 방향의 열유속 성분은 <strong className="text-red-300">0</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&bull;</span>
                  <span><Math tex={`\\nabla T`} />는 등온면에 <strong className="text-white">수직(normal)</strong>합니다</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-6">
              <h4 className="text-lg font-bold text-orange-400 mb-4">열유선 (Heat Flow Line)</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">&bull;</span>
                  <span><strong className="text-white">정의:</strong> 모든 점에서 <Math tex={`\\vec{q''}`} /> 벡터에 접하는 곡선 (curves tangent to <Math tex={`\\vec{q''}`} />)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">&bull;</span>
                  <span>열이 실제로 흐르는 경로를 나타냄</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">&bull;</span>
                  <span>열유선은 항상 등온면에 <strong className="text-orange-300">수직</strong>으로 교차</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">&bull;</span>
                  <span>유체역학의 <strong className="text-white">유선(streamline)</strong>과 유사한 개념</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                1D vs 2D/3D 비교
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Case</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">등온면 형태</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">열유선 형태</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">예시</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-white">1D 정상상태 (k=const)</td>
                      <td className="py-3 px-4">평행한 평면</td>
                      <td className="py-3 px-4">직선 (평면에 수직)</td>
                      <td className="py-3 px-4 text-gray-400">평판 벽 열전도</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-white">1D 원통 (r 방향)</td>
                      <td className="py-3 px-4">동심 원통면</td>
                      <td className="py-3 px-4">방사 방향 직선</td>
                      <td className="py-3 px-4 text-gray-400">파이프 단열재</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">2D/3D 일반</td>
                      <td className="py-3 px-4">곡면 (curved surfaces)</td>
                      <td className="py-3 px-4">곡선 (curved lines)</td>
                      <td className="py-3 px-4 text-gray-400">모서리 열전도, 핀</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title={`핵심 관계: 등온면 \u22A5 열유선`} accent="blue" icon="&perp;">
              <p>
                <Math tex={`\\vec{q''} = -k\\nabla T`} />이고, <Math tex={`\\nabla T`} />는 등온면에 수직이므로,
                <strong className="text-white"> <Math tex={`\\vec{q''}`} />도 등온면에 수직</strong>입니다.
                따라서 열유선(<Math tex={`\\vec{q''}`} />에 접하는 곡선)은 반드시 등온면과 직각으로 만납니다.
                이 성질은 열전달 문제의 그래픽 해석(graphical solution)에서 매우 유용합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* ============================================================ */}
          {/* 4. ISOTROPIC vs ANISOTROPIC */}
          {/* ============================================================ */}
          <SectionDivider number="4" title="Isotropic vs Anisotropic Materials" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              지금까지는 열전도도 <Math tex="k" />가 방향에 무관한 <strong className="text-white">등방성(isotropic)</strong> 물질을 가정했습니다.
              하지만 일부 재료에서는 <Math tex="k" />가 방향에 따라 달라지는 <strong className="text-white">이방성(anisotropic)</strong> 거동을 보입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-6">
              <h4 className="text-lg font-bold text-emerald-400 mb-3">등방성 (Isotropic)</h4>
              <div className="text-center p-4 rounded-2xl bg-slate-950/80 border border-slate-800 mb-4">
                <div className="text-emerald-400">
                  <Math tex={`\\vec{q''} = -k \\nabla T`} display />
                </div>
                <p className="text-xs text-gray-500 mt-2"><Math tex="k" /> = scalar (방향 무관)</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>&bull; 모든 방향에서 동일한 <Math tex="k" /> 값</li>
                <li>&bull; <Math tex={`\\vec{q''}`} />와 <Math tex={`\\nabla T`} />는 항상 <strong className="text-white">반평행(anti-parallel)</strong></li>
                <li>&bull; 대부분의 금속, 액체, 기체</li>
                <li>&bull; 다결정 재료 (randomly oriented grains)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-6">
              <h4 className="text-lg font-bold text-yellow-400 mb-3">이방성 (Anisotropic)</h4>
              <div className="text-center p-4 rounded-2xl bg-slate-950/80 border border-slate-800 mb-4">
                <div className="text-yellow-400">
                  <Math tex={`q''_i = -k_{ij} \\frac{\\partial T}{\\partial x_j}`} display />
                </div>
                <p className="text-xs text-gray-500 mt-2"><Math tex={`k_{ij}`} /> = tensor (<Math tex={`3 \\times 3`} /> matrix)</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>&bull; 방향에 따라 <Math tex="k" /> 값이 다름</li>
                <li>&bull; <Math tex={`\\vec{q''}`} />와 <Math tex={`\\nabla T`} />가 <strong className="text-yellow-300">평행하지 않을 수 있음!</strong></li>
                <li>&bull; 목재, 복합재료, 단결정, 적층 구조</li>
                <li>&bull; <Math tex="k" />는 2차 텐서 (9개 성분, 대칭 시 6개)</li>
              </ul>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-4">
                이방성 재료 예시: 방향별 열전도도 비교
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Material</th>
                      <th className="text-center py-3 px-4 text-gray-400 font-medium">k (along / parallel)</th>
                      <th className="text-center py-3 px-4 text-gray-400 font-medium">k (across / perpendicular)</th>
                      <th className="text-center py-3 px-4 text-gray-400 font-medium">Ratio</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-white">목재 (Wood)</td>
                      <td className="py-3 px-4 text-center font-mono">0.35 W/(m&middot;K) <span className="text-gray-500 text-xs">(결 방향)</span></td>
                      <td className="py-3 px-4 text-center font-mono">0.15 W/(m&middot;K) <span className="text-gray-500 text-xs">(결 수직)</span></td>
                      <td className="py-3 px-4 text-center font-bold text-yellow-400">&sim;2&ndash;3&times;</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-white">탄소섬유 복합재 (CFRP)</td>
                      <td className="py-3 px-4 text-center font-mono">&sim;50 W/(m&middot;K) <span className="text-gray-500 text-xs">(섬유 방향)</span></td>
                      <td className="py-3 px-4 text-center font-mono">&sim;5 W/(m&middot;K) <span className="text-gray-500 text-xs">(수직 방향)</span></td>
                      <td className="py-3 px-4 text-center font-bold text-yellow-400">&sim;10&times;</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-white">열분해 흑연 (Pyrolytic graphite)</td>
                      <td className="py-3 px-4 text-center font-mono">&sim;1950 W/(m&middot;K) <span className="text-gray-500 text-xs">(면내)</span></td>
                      <td className="py-3 px-4 text-center font-mono">&sim;5.7 W/(m&middot;K) <span className="text-gray-500 text-xs">(면외)</span></td>
                      <td className="py-3 px-4 text-center font-bold text-yellow-400">&sim;340&times;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">단결정 석영 (Quartz crystal)</td>
                      <td className="py-3 px-4 text-center font-mono">10.7 W/(m&middot;K) <span className="text-gray-500 text-xs">(c축)</span></td>
                      <td className="py-3 px-4 text-center font-mono">6.5 W/(m&middot;K) <span className="text-gray-500 text-xs">(c축 수직)</span></td>
                      <td className="py-3 px-4 text-center font-bold text-yellow-400">&sim;1.6&times;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="이방성의 실무적 의미" accent="yellow" icon="!">
              <p>
                이방성 재료에서는 열유속 벡터 <Math tex={`\\vec{q''}`} />가 온도 구배 <Math tex={`\\nabla T`} />와 <strong className="text-white">같은 방향이 아닐 수 있습니다</strong>.
                이는 열이 &ldquo;옆으로 새는&rdquo; 현상을 의미합니다. 예를 들어, 탄소섬유 복합재로 된 구조물에서
                두께 방향으로 온도 차이가 있더라도, 열의 일부는 섬유 방향(면내)으로 편향되어 흐를 수 있습니다.
                이를 무시하면 열설계에 심각한 오류가 발생할 수 있습니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* ============================================================ */}
          {/* 5. HEAT RATE vs HEAT FLUX */}
          {/* ============================================================ */}
          <SectionDivider number="5" title="Heat Rate vs Heat Flux" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열유속(heat flux)과 열전달률(heat rate)은 밀접하게 관련되지만 명확히 구분해야 하는 물리량입니다.
              열유속은 <strong className="text-white">국소적(local)</strong> 성질이고,
              열전달률은 <strong className="text-white">적분(global)</strong> 성질입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-6">
              <h4 className="text-lg font-bold text-red-400 mb-3">Heat Flux: <Math tex={`q''`} /></h4>
              <div className="text-center p-4 rounded-2xl bg-slate-950/80 border border-slate-800 mb-4">
                <p className="text-sm text-gray-500 mb-1">단위</p>
                <div className="text-2xl font-bold text-red-400"><Math tex={`\\text{W/m}^2`} /></div>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>&bull; <strong className="text-white">단위 면적당</strong> 열전달률</li>
                <li>&bull; 벡터: 크기와 방향을 가짐</li>
                <li>&bull; 공간의 각 점에서 정의되는 <strong className="text-white">국소량(local quantity)</strong></li>
                <li>&bull; Fourier 법칙에서 직접 구해짐</li>
              </ul>
            </div>
            <div className="rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-6">
              <h4 className="text-lg font-bold text-orange-400 mb-3">Heat Rate: <Math tex="q" /></h4>
              <div className="text-center p-4 rounded-2xl bg-slate-950/80 border border-slate-800 mb-4">
                <p className="text-sm text-gray-500 mb-1">단위</p>
                <div className="text-2xl font-bold text-orange-400"><Math tex={`\\text{W}`} /></div>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>&bull; 특정 면을 통과하는 <strong className="text-white">총 열전달량</strong></li>
                <li>&bull; 스칼라 (면에 대해 정의)</li>
                <li>&bull; 면 전체에 대한 <strong className="text-white">적분량(integral quantity)</strong></li>
                <li>&bull; <Math tex={`q = \\iint \\vec{q''} \\cdot d\\vec{A}`} /> (면적분)</li>
              </ul>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                Heat Rate = Surface Integral of Heat Flux
              </h4>
              <EquationBox label="일반적인 관계" accent="red">
                <Math tex={`q = \\iint_A \\vec{q''} \\cdot d\\vec{A}`} display />
              </EquationBox>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <EquationBox label="균일한 유속 + 평면 (Uniform flux, flat surface)" accent="orange">
                  <Math tex={`q = q'' \\cdot A`} display />
                </EquationBox>
                <EquationBox label="비균일 유속 (Non-uniform flux)" accent="orange">
                  <Math tex={`q = \\iint_A q''(x,y) \\, dA`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="실용적 구분" accent="blue" icon="?">
              <p>
                <strong className="text-white">언제 <Math tex={`q''`} />를 쓰고 언제 <Math tex="q" />를 쓸까?</strong><br />
                &bull; 미분 방정식(heat equation)을 세울 때: <strong className="text-blue-300"><Math tex={`q''`} /></strong> 사용<br />
                &bull; 에너지 보존(energy balance)을 적용할 때: <strong className="text-blue-300"><Math tex="q" /></strong> 사용<br />
                &bull; 재료의 한계(burning, melting)를 평가할 때: <strong className="text-blue-300"><Math tex={`q''`} /></strong> 사용<br />
                &bull; 시스템의 총 냉각/가열 용량을 계산할 때: <strong className="text-blue-300"><Math tex="q" /></strong> 사용
              </p>
            </InsightCard>
          </motion.div>

          {/* ============================================================ */}
          {/* 6. FOURIER'S LAW IN CYLINDRICAL COORDINATES */}
          {/* ============================================================ */}
          <SectionDivider number="6" title="Fourier&rsquo;s Law in Cylindrical Coordinates" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              파이프, 원통형 로(furnace), 전선 등 <strong className="text-white">축대칭(axisymmetric)</strong> 형상에서는
              원통 좌표계 <Math tex={`(r, \\phi, z)`} />를 사용하는 것이 자연스럽습니다.
              Fourier 법칙의 각 성분은 해당 좌표계의 미분 길이 요소를 반영합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                Cylindrical Coordinates <Math tex={`(r, \\phi, z)`} />
              </h4>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <EquationBox label="r-direction (반경 방향)">
                  <Math tex={`q''_r = -k \\frac{\\partial T}{\\partial r}`} display />
                </EquationBox>
                <EquationBox label={`\u03C6-direction (원주 방향)`}>
                  <Math tex={`q''_\\phi = -\\frac{k}{r} \\frac{\\partial T}{\\partial \\phi}`} display />
                </EquationBox>
                <EquationBox label="z-direction (축 방향)">
                  <Math tex={`q''_z = -k \\frac{\\partial T}{\\partial z}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-sm text-gray-500 mb-2 text-center">참고: <Math tex={`\\phi`} />-방향의 <Math tex={`1/r`} /> 인자</p>
                <p className="text-sm text-gray-400 text-center">
                  원통 좌표에서 <Math tex={`\\phi`} /> 방향의 미분 길이 요소(arc length)는 <strong className="text-white"><Math tex={`r\\,d\\phi`} /></strong>이므로,
                  <Math tex={`\\phi`} /> 방향 온도 구배는 <Math tex={`(1/r)(\\partial T/\\partial \\phi)`} />로 표현됩니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                원통면을 통한 총 열전달률
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                반경 <Math tex="r" />, 길이 <Math tex="L" />인 원통면을 통과하는 총 열전달률 (T가 r에만 의존하는 경우):
              </p>
              <EquationBox label="Total heat rate through cylindrical surface" accent="orange">
                <Math tex={`q = q''_r \\cdot (2\\pi r L)`} display />
              </EquationBox>
              <p className="text-sm text-gray-500 mt-4 text-center">
                여기서 <Math tex={`2\\pi r L`} />은 반경 <Math tex="r" />에서 원통의 측면적입니다. <Math tex="r" />에 따라 면적이 변하므로,
                <Math tex={`q''_r`} />이 일정해도 면적이 변하는 것에 주의해야 합니다.
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title={`주의: 원통 좌표에서 q'' vs q`} accent="red" icon="!">
              <p>
                원통 좌표에서 1D 정상상태(r 방향만)이고 내부 발열이 없으면,
                에너지 보존에 의해 <strong className="text-white"><Math tex={`q = \\text{const}`} /></strong> (열전달률 일정)이지만,
                <strong className="text-red-300"> <Math tex={`q''_r \\neq \\text{const}`} /></strong>입니다.
                <Math tex={`q''_r = q/(2\\pi r L)`} />이므로 <Math tex="r" />이 커지면 <Math tex={`q''_r`} />은 감소합니다.
                이는 평판(Cartesian)과의 중요한 차이점입니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* ============================================================ */}
          {/* 7. FOURIER'S LAW IN SPHERICAL COORDINATES */}
          {/* ============================================================ */}
          <SectionDivider number="7" title="Fourier&rsquo;s Law in Spherical Coordinates" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              구형 용기, 구형 입자, 핵연료 펠릿 등 <strong className="text-white">구 대칭(spherical symmetry)</strong> 형상에서는
              구 좌표계 <Math tex={`(r, \\theta, \\phi)`} />를 사용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                Spherical Coordinates <Math tex={`(r, \\theta, \\phi)`} />
              </h4>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <EquationBox label="r-direction (반경 방향)">
                  <Math tex={`q''_r = -k \\frac{\\partial T}{\\partial r}`} display />
                </EquationBox>
                <EquationBox label={`\u03B8-direction (극각 방향)`}>
                  <Math tex={`q''_\\theta = -\\frac{k}{r} \\frac{\\partial T}{\\partial \\theta}`} display />
                </EquationBox>
                <EquationBox label={`\u03C6-direction (방위각 방향)`}>
                  <Math tex={`q''_\\phi = -\\frac{k}{r \\sin\\theta} \\frac{\\partial T}{\\partial \\phi}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-sm text-gray-400 text-center">
                  미분 길이 요소: <Math tex="r" /> 방향 = <Math tex="dr" />, <Math tex={`\\theta`} /> 방향 = <Math tex={`r\\,d\\theta`} />, <Math tex={`\\phi`} /> 방향 = <Math tex={`r \\sin\\theta\\,d\\phi`} />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                구면을 통한 총 열전달률
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                반경 <Math tex="r" />인 구면을 통과하는 총 열전달률 (T가 r에만 의존하는 경우):
              </p>
              <EquationBox label="Total heat rate through spherical surface" accent="orange">
                <Math tex={`q = q''_r \\cdot (4\\pi r^2)`} display />
              </EquationBox>
              <p className="text-sm text-gray-500 mt-4 text-center">
                면적이 <Math tex={`r^2`} />에 비례하므로, <Math tex={`q''_r \\propto 1/r^2`} />로 감소합니다 (<Math tex="q" /> 일정 시).
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                좌표계별 Fourier 법칙 요약 비교
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">좌표계</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">좌표</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex={`q''`} /> components</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="q" /> (1D, r only)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-white">Cartesian</td>
                      <td className="py-3 px-4"><Math tex="(x, y, z)" /></td>
                      <td className="py-3 px-4"><Math tex={`-k\\frac{\\partial T}{\\partial x},\\; -k\\frac{\\partial T}{\\partial y},\\; -k\\frac{\\partial T}{\\partial z}`} /></td>
                      <td className="py-3 px-4"><Math tex={`q'' \\cdot A`} /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-white">Cylindrical</td>
                      <td className="py-3 px-4"><Math tex={`(r, \\phi, z)`} /></td>
                      <td className="py-3 px-4"><Math tex={`-k\\frac{\\partial T}{\\partial r},\\; -\\frac{k}{r}\\frac{\\partial T}{\\partial \\phi},\\; -k\\frac{\\partial T}{\\partial z}`} /></td>
                      <td className="py-3 px-4"><Math tex={`q''_r \\cdot 2\\pi r L`} /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">Spherical</td>
                      <td className="py-3 px-4"><Math tex={`(r, \\theta, \\phi)`} /></td>
                      <td className="py-3 px-4"><Math tex={`-k\\frac{\\partial T}{\\partial r},\\; -\\frac{k}{r}\\frac{\\partial T}{\\partial \\theta},\\; -\\frac{k}{r\\sin\\theta}\\frac{\\partial T}{\\partial \\phi}`} /></td>
                      <td className="py-3 px-4"><Math tex={`q''_r \\cdot 4\\pi r^2`} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* 8. PHYSICAL INSIGHTS */}
          {/* ============================================================ */}
          <SectionDivider number="8" title="Physical Insights &amp; Historical Context" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Fourier 법칙의 깊은 의미와 역사적 맥락을 이해하면, 열전달뿐 아니라
              물리학 전반의 <strong className="text-white">수송 현상(transport phenomena)</strong>에 대한 통찰을 얻을 수 있습니다.
            </p>
          </motion.div>

          {/* Empirical Nature */}
          <motion.div {...stagger} className="mb-6">
            <InsightCard title="Fourier 법칙은 경험적(empirical) 법칙입니다" accent="red" icon="E">
              <p className="mb-2">
                Fourier 법칙은 Newton의 운동 법칙처럼 <strong className="text-white">제1원리(first principles)에서 유도된 것이 아닙니다</strong>.
                실험적 관찰에 기반한 경험적 법칙(constitutive relation)입니다.
              </p>
              <p className="mb-2">
                물론 통계역학(statistical mechanics)과 분자 운동론(kinetic theory)에서 Fourier 법칙을 &ldquo;유도&rdquo;할 수 있지만,
                이는 추가적인 가정(local thermodynamic equilibrium, small perturbation 등)을 필요로 합니다.
              </p>
              <p>
                실제로 극한 조건(극저온, 나노스케일, 극초단 펄스 등)에서는 Fourier 법칙이 성립하지 않는 경우도 있습니다.
                이런 경우 Cattaneo equation이나 Boltzmann transport equation 등 더 일반적인 모델이 필요합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* Transport Law Analogies */}
          <motion.div {...stagger} className="mb-6">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Gradient-Driven Transport Laws: 4대 유사 법칙
              </h4>
              <p className="text-sm text-gray-400 mb-6">
                Fourier 법칙은 물리학의 여러 수송 법칙과 <strong className="text-white">동일한 수학적 구조</strong>를 공유합니다.
                모두 &ldquo;유속(flux) = <Math tex={`-`} />(전달계수) <Math tex={`\\times`} /> (구동력의 구배)&rdquo;라는 형태입니다.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Law</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Phenomenon</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Equation</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Driving Gradient</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-red-400">Fourier (1822)</td>
                      <td className="py-3 px-4">Heat conduction</td>
                      <td className="py-3 px-4"><Math tex={`\\vec{q''} = -k \\nabla T`} /></td>
                      <td className="py-3 px-4">Temperature <Math tex={`\\nabla T`} /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-blue-400">Fick (1855)</td>
                      <td className="py-3 px-4">Mass diffusion</td>
                      <td className="py-3 px-4"><Math tex={`\\vec{J} = -D \\nabla C`} /></td>
                      <td className="py-3 px-4">Concentration <Math tex={`\\nabla C`} /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-yellow-400">Ohm (1827)</td>
                      <td className="py-3 px-4">Electric conduction</td>
                      <td className="py-3 px-4"><Math tex={`\\vec{J_e} = -\\sigma \\nabla V`} /></td>
                      <td className="py-3 px-4">Electric potential <Math tex={`\\nabla V`} /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-emerald-400">Newton (viscosity)</td>
                      <td className="py-3 px-4">Momentum transfer</td>
                      <td className="py-3 px-4"><Math tex={`\\tau = -\\mu \\frac{du}{dy}`} /></td>
                      <td className="py-3 px-4">Velocity <Math tex={`du/dy`} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                이 유사성은 우연이 아닙니다 &mdash; 모두 비평형 열역학(non-equilibrium thermodynamics)의 선형 수송 이론에서 비롯됩니다.
              </p>
            </div>
          </motion.div>

          {/* Historical Note */}
          <motion.div {...stagger} className="mb-6">
            <InsightCard title="Historical Note: Jean-Baptiste Joseph Fourier (1768&ndash;1830)" accent="emerald" icon="H">
              <p className="mb-2">
                Fourier는 1807년에 열전도에 관한 논문을 프랑스 학술원에 제출했으나,
                Lagrange, Laplace, Legendre 등 당대 최고의 수학자들로 구성된 심사위원단의 반대로 출판이 지연되었습니다.
                특히 Lagrange는 Fourier 급수(삼각함수의 무한급수로 임의 함수를 표현)의 타당성에 의문을 제기했습니다.
              </p>
              <p className="mb-2">
                결국 1822년, Fourier는 그의 대작 <em className="text-white">&ldquo;Th&eacute;orie analytique de la chaleur&rdquo;</em>
                (열의 해석적 이론)을 출판했습니다.
                이 책은 물리학 역사상 <strong className="text-white">최초로 편미분방정식(PDE)을 체계적으로 사용</strong>한 저작 중 하나입니다.
              </p>
              <p>
                Fourier의 업적은 열전달을 넘어 수학 전체에 혁명적 영향을 미쳤습니다.
                Fourier 급수, Fourier 변환 등은 오늘날 신호처리, 양자역학, 이미지 압축(JPEG) 등 모든 곳에서 사용됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* Why this structure matters */}
          <motion.div {...stagger} className="mb-8">
            <InsightCard title="왜 이 수학적 구조가 중요한가?" accent="blue" icon="&sum;">
              <p className="mb-2">
                Fourier 법칙의 &ldquo;flux = <Math tex={`-`} />conductivity <Math tex={`\\times`} /> gradient&rdquo; 구조는 단순하지만 강력합니다.
                이 구조 덕분에:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; 에너지 보존과 결합하면 <strong className="text-white">heat equation</strong> (2차 PDE)이 자연스럽게 유도됩니다</li>
                <li>&bull; 열전달 문제를 <strong className="text-white">전기 회로 유추(thermal-electrical analogy)</strong>로 풀 수 있습니다</li>
                <li>&bull; 한 수송 현상의 해석 결과를 다른 수송 현상에 <strong className="text-white">직접 적용</strong>할 수 있습니다</li>
                <li>&bull; 수치 해석(FEM, FDM, FVM) 알고리즘을 통합적으로 개발할 수 있습니다</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* ============================================================ */}
          {/* SUMMARY */}
          {/* ============================================================ */}
          <motion.div {...fadeUp} className="mt-20">
            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-red-400 mb-6 text-center">
                Summary: Conduction Rate Equation
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <KeyConceptCard title="1. 1D Fourier&rsquo;s Law" accent="red">
                  <p><Math tex={`q''_x = -k(dT/dx)`} />. 음수 부호는 열이 온도 감소 방향으로 흐름을 보장합니다.</p>
                </KeyConceptCard>
                <KeyConceptCard title="2. 3D Vector Form" accent="red">
                  <p><Math tex={`\\vec{q''} = -k\\nabla T`} />. 열유속은 벡터이며, 등온면에 수직으로 고온 &rarr; 저온 방향입니다.</p>
                </KeyConceptCard>
                <KeyConceptCard title={`3. Isotherms \u22A5 Heat Lines`} accent="red">
                  <p>등온면과 열유선은 항상 직교합니다. 1D에서는 직선, 2D/3D에서는 곡선이 될 수 있습니다.</p>
                </KeyConceptCard>
                <KeyConceptCard title="4. Isotropic vs Anisotropic" accent="red">
                  <p>등방성: <Math tex="k" />는 스칼라. 이방성: <Math tex="k" />는 텐서. 복합재료에서 방향별 <Math tex="k" /> 차이가 10배 이상일 수 있습니다.</p>
                </KeyConceptCard>
                <KeyConceptCard title="5. Heat Flux vs Heat Rate" accent="red">
                  <p><Math tex={`q''`} /> [<Math tex={`\\text{W/m}^2`} />]는 국소량, <Math tex="q" /> [W]는 적분량. <Math tex={`q = \\int q'' \\cdot dA`} />로 관계됩니다.</p>
                </KeyConceptCard>
                <KeyConceptCard title="6&ndash;7. Cylindrical &amp; Spherical" accent="red">
                  <p>좌표계에 따라 gradient 표현이 달라집니다. 원통: <Math tex={`2\\pi r L`} />, 구: <Math tex={`4\\pi r^2`} />의 면적 변화에 주의.</p>
                </KeyConceptCard>
                <KeyConceptCard title="8. Empirical &amp; Universal" accent="red">
                  <p>Fourier 법칙은 경험적 법칙이며, Fick, Ohm, Newton 점성 법칙과 동일한 수학적 구조를 공유합니다.</p>
                </KeyConceptCard>
                <KeyConceptCard title="Next: Heat Equation" accent="orange">
                  <p>Fourier 법칙을 에너지 보존(energy balance)과 결합하면 heat equation이 유도됩니다 &rarr; Part 2에서 학습.</p>
                </KeyConceptCard>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

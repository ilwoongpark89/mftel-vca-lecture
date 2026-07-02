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
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : "border-slate-700";
  const textColor = accent === "cyan" ? "text-cyan-400" : accent === "orange" ? "text-orange-400" : accent === "emerald" ? "text-emerald-400" : "text-gray-400";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div className={textColor}>
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
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
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

export default function OneDTransientIntro() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            1-D Transient with Spatial Effects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Bi &gt; 0.1일 때, 물체 내부의 온도 분포를 고려해야 합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 복습: Lumped Capacitance */}
          <SectionDivider number="1" title="Review: Lumped Capacitance Limitation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Week 6에서 학습한 <strong className="text-white">집중 용량법(Lumped Capacitance)</strong>은
              Biot 수가 작을 때(<Math tex="Bi < 0.1" />) 유효합니다.
              이 경우 물체 내부 온도가 균일하다고 가정할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Biot Number (복습)
              </h4>

              <EquationBox label="Biot 수 정의" accent="cyan">
                <Math tex={`Bi = \\frac{hL_c}{k} = \\frac{\\text{Internal conduction resistance}}{\\text{External convection resistance}} = \\frac{L_c/k}{1/h}`} display />
              </EquationBox>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-2">Bi &lt; 0.1</h5>
                  <p className="text-sm text-gray-400">
                    내부 전도 저항 무시 가능<br />
                    <Math tex="T(x,t) \\approx T(t)" /> (균일 온도)<br />
                    <strong className="text-white">Lumped Capacitance 적용 가능</strong>
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-2">Bi &gt; 0.1</h5>
                  <p className="text-sm text-gray-400">
                    내부 전도 저항 무시 불가<br />
                    <Math tex="T = T(x,t)" /> (공간적 변화 존재)<br />
                    <strong className="text-white">공간 효과 고려 필요</strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. 지배 방정식 */}
          <SectionDivider number="2" title="Governing Equation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Bi &gt; 0.1인 경우, 1차원 비정상 열전도 방정식을 풀어야 합니다.
              내부 열 발생이 없고 열전도도가 일정할 때:
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                1-D Transient Heat Diffusion Equation
              </h4>

              <EquationBox label="평판 (Plane Wall)" accent="cyan">
                <Math tex={`\\frac{\\partial^2 T}{\\partial x^2} = \\frac{1}{\\alpha}\\frac{\\partial T}{\\partial t}`} display />
              </EquationBox>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <EquationBox label="원통 (Cylinder)" accent="orange">
                  <Math tex={`\\frac{1}{r}\\frac{\\partial}{\\partial r}\\left(r\\frac{\\partial T}{\\partial r}\\right) = \\frac{1}{\\alpha}\\frac{\\partial T}{\\partial t}`} display />
                </EquationBox>
                <EquationBox label="구 (Sphere)" accent="orange">
                  <Math tex={`\\frac{1}{r^2}\\frac{\\partial}{\\partial r}\\left(r^2\\frac{\\partial T}{\\partial r}\\right) = \\frac{1}{\\alpha}\\frac{\\partial T}{\\partial t}`} display />
                </EquationBox>
              </div>

              <p className="text-sm text-gray-500 mt-6 text-center">
                여기서 <Math tex="\\alpha = k/(\\rho c_p)" />는 열확산계수 (thermal diffusivity)
              </p>
            </div>
          </motion.div>

          {/* 3. 무차원화 */}
          <SectionDivider number="3" title="Dimensionless Parameters" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              해석을 일반화하기 위해 <strong className="text-white">무차원 변수</strong>를 정의합니다.
              이를 통해 다양한 조건의 문제를 통합적으로 해석할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                무차원 변수 정의
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">변수</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">정의</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">물리적 의미</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">무차원 온도 <Math tex="\\theta^*" /></td>
                      <td className="py-3 px-4"><Math tex="\\theta^* = \\frac{T - T_\\infty}{T_i - T_\\infty}" /></td>
                      <td className="py-3 px-4 text-gray-400">0(평형) ~ 1(초기상태)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">무차원 위치 <Math tex="x^*" /></td>
                      <td className="py-3 px-4"><Math tex="x^* = x/L" /> 또는 <Math tex="r^* = r/r_o" /></td>
                      <td className="py-3 px-4 text-gray-400">0(중심) ~ 1(표면)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">Fourier 수 <Math tex="Fo" /></td>
                      <td className="py-3 px-4"><Math tex="Fo = \\frac{\\alpha t}{L^2}" /></td>
                      <td className="py-3 px-4 text-gray-400">무차원 시간</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-orange-400">Biot 수 <Math tex="Bi" /></td>
                      <td className="py-3 px-4"><Math tex="Bi = \\frac{hL}{k}" /></td>
                      <td className="py-3 px-4 text-gray-400">경계조건 특성</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Fourier Number의 물리적 의미" accent="orange" icon="Fo">
              <p className="mb-2">
                <Math tex="Fo = \\alpha t / L^2" />는 <strong className="text-white">무차원 시간</strong>입니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <Math tex="Fo" /> &rarr; 0: 초기 상태, 표면 효과만 존재</li>
                <li>&bull; <Math tex="Fo" /> &rarr; &infin;: 정상상태에 도달</li>
                <li>&bull; <Math tex="Fo > 0.2" />: One-term approximation 유효</li>
              </ul>
              <p className="mt-2 text-gray-500">
                <Math tex="\\alpha" />가 크면 같은 시간에 더 깊이 열이 침투 &rarr; <Math tex="Fo" /> 증가
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. 무차원 방정식 */}
          <SectionDivider number="4" title="Dimensionless Formulation" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                평판의 무차원 지배방정식
              </h4>

              <EquationBox label="무차원 열전도 방정식" accent="cyan">
                <Math tex={`\\frac{\\partial^2 \\theta^*}{\\partial x^{*2}} = \\frac{\\partial \\theta^*}{\\partial Fo}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">경계조건 및 초기조건</h5>
                <div className="space-y-2 text-sm text-gray-400">
                  <p><strong className="text-cyan-400">초기조건:</strong> <Math tex="\\theta^*(x^*, 0) = 1" /> (균일 초기 온도)</p>
                  <p><strong className="text-cyan-400">대칭조건:</strong> <Math tex="\\left.\\frac{\\partial \\theta^*}{\\partial x^*}\\right|_{x^*=0} = 0" /> (중심에서 대칭)</p>
                  <p><strong className="text-cyan-400">표면조건:</strong> <Math tex="-\\left.\\frac{\\partial \\theta^*}{\\partial x^*}\\right|_{x^*=1} = Bi \\cdot \\theta^*(1, Fo)" /> (대류)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="해의 형태: 급수해" accent="blue" icon="S">
              <p className="mb-2">
                위의 편미분 방정식의 해는 <strong className="text-white">무한 급수</strong> 형태입니다:
              </p>
              <div className="my-3 p-3 bg-slate-900/50 rounded-lg">
                <Math tex={`\\theta^* = \\sum_{n=1}^{\\infty} C_n \\exp(-\\zeta_n^2 Fo) \\cdot f_n(x^*)`} display />
              </div>
              <p className="text-gray-500">
                <Math tex="Fo > 0.2" />이면 첫 번째 항만으로 충분한 정확도를 얻을 수 있습니다 (One-term approximation).
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 특성 길이 */}
          <SectionDivider number="5" title="Characteristic Length" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              각 형상에 대한 <strong className="text-white">특성 길이(L)</strong>는 Biot 수와 Fourier 수 계산에 사용됩니다.
              Lumped capacitance와 다르게, 공간 효과를 고려할 때는 물리적 치수를 사용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                형상별 특성 길이
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">형상</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">특성 길이 L</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">비고</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">평판 (Plane Wall)</td>
                      <td className="py-3 px-4"><Math tex="L" /> (반두께)</td>
                      <td className="py-3 px-4 text-gray-400">양면 대류 시 전체 두께의 절반</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">무한 원통 (Infinite Cylinder)</td>
                      <td className="py-3 px-4"><Math tex="r_o" /> (반지름)</td>
                      <td className="py-3 px-4 text-gray-400">외부 반지름</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-blue-400">구 (Sphere)</td>
                      <td className="py-3 px-4"><Math tex="r_o" /> (반지름)</td>
                      <td className="py-3 px-4 text-gray-400">외부 반지름</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Lumped vs Spatial 특성 길이 차이" accent="yellow" icon="!">
              <p className="mb-2">
                <strong className="text-yellow-300">주의:</strong> 특성 길이 정의가 다릅니다!
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">Lumped Capacitance:</strong> <Math tex="L_c = V/A_s" /> (체적/표면적)</li>
                <li>&bull; <strong className="text-white">Spatial Analysis:</strong> <Math tex="L" /> = 반두께 또는 반지름</li>
              </ul>
              <p className="mt-2 text-gray-500">
                평판: Lumped의 <Math tex="L_c = L" /> (반두께), Spatial도 <Math tex="L" /> (반두께)<br />
                구: Lumped의 <Math tex="L_c = r_o/3" />, Spatial은 <Math tex="L = r_o" />
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. 해석 방법 개요 */}
          <SectionDivider number="6" title="Solution Methods Overview" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                1-D Transient Conduction 해법
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-cyan-400 font-bold mb-2">1. Exact Series Solution</h5>
                  <p className="text-sm text-gray-400">
                    무한 급수 형태의 정확해<br />
                    모든 <Math tex="Fo" />에서 유효<br />
                    복잡한 계산 필요
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-cyan-400 font-bold mb-2">2. One-Term Approximation</h5>
                  <p className="text-sm text-gray-400">
                    급수의 첫 번째 항만 사용<br />
                    <Math tex="Fo > 0.2" />일 때 유효<br />
                    실무에서 가장 많이 사용
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-2">3. Heisler Charts</h5>
                  <p className="text-sm text-gray-400">
                    One-term 해를 그래프로 표현<br />
                    빠른 계산에 유용<br />
                    정확도 제한적
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-2">4. Numerical Methods</h5>
                  <p className="text-sm text-gray-400">
                    복잡한 형상/조건에 적용<br />
                    유한 차분법, 유한 요소법<br />
                    Week 8에서 다룸
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="이번 주 학습 내용" accent="emerald" icon="W7">
              <p>
                이번 주는 <strong className="text-white">Exact Solution</strong>, <strong className="text-white">One-Term Approximation</strong>,
                <strong className="text-white">Heisler Charts</strong>, 그리고 <strong className="text-white">Semi-infinite Solid</strong> 해석을 학습합니다.
                이 방법들로 대부분의 1-D 비정상 전도 문제를 해결할 수 있습니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

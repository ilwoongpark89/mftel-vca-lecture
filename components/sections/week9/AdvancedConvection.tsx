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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
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
  const borderColor = accent === "teal" ? "border-teal-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "yellow" ? "border-yellow-500/30" : accent === "red" ? "border-red-500/30" : accent === "purple" ? "border-purple-500/30" : "border-slate-700";
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

function CFDComparisonTable() {
  return (
    <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-slate-950 p-6">
      <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6 text-center">
        DNS vs RANS vs LES Comparison
      </h4>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-3 text-gray-400 font-medium">특성</th>
              <th className="text-left py-3 px-3 text-cyan-400 font-medium">DNS</th>
              <th className="text-left py-3 px-3 text-orange-400 font-medium">RANS</th>
              <th className="text-left py-3 px-3 text-emerald-400 font-medium">LES</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-slate-800">
              <td className="py-3 px-3 font-medium">Full Name</td>
              <td className="py-3 px-3">Direct Numerical Simulation</td>
              <td className="py-3 px-3">Reynolds-Averaged N-S</td>
              <td className="py-3 px-3">Large Eddy Simulation</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-3 font-medium">난류 모델링</td>
              <td className="py-3 px-3 text-cyan-400">없음 (모든 스케일 해석)</td>
              <td className="py-3 px-3 text-orange-400">모든 스케일 모델링</td>
              <td className="py-3 px-3 text-emerald-400">작은 스케일만 모델링</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-3 font-medium">격자 요구량 (Re 의존)</td>
              <td className="py-3 px-3 text-red-400">~ Re^3</td>
              <td className="py-3 px-3 text-emerald-400">~ Re^0 (무관)</td>
              <td className="py-3 px-3 text-yellow-400">~ Re^1.8</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-3 font-medium">계산 비용</td>
              <td className="py-3 px-3 text-red-400">극히 높음</td>
              <td className="py-3 px-3 text-emerald-400">낮음</td>
              <td className="py-3 px-3 text-yellow-400">중간~높음</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-3 font-medium">정확도</td>
              <td className="py-3 px-3 text-cyan-400">완전 (reference)</td>
              <td className="py-3 px-3 text-orange-400">모델 의존, 10-30%</td>
              <td className="py-3 px-3 text-emerald-400">높음, 5-15%</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-3 font-medium">비정상 해석</td>
              <td className="py-3 px-3 text-cyan-400">O</td>
              <td className="py-3 px-3 text-orange-400">X (정상상태)</td>
              <td className="py-3 px-3 text-emerald-400">O</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="py-3 px-3 font-medium">적용 가능 Re</td>
              <td className="py-3 px-3">~10^4 (현재 기술)</td>
              <td className="py-3 px-3">무제한</td>
              <td className="py-3 px-3">~10^6-10^8</td>
            </tr>
            <tr>
              <td className="py-3 px-3 font-medium">주요 용도</td>
              <td className="py-3 px-3">연구, 검증</td>
              <td className="py-3 px-3">산업 설계</td>
              <td className="py-3 px-3">고정확도 설계</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AdvancedConvection() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Advanced Topics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Convection Analysis
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            적분법(von Karman), 난류 모델링 기초, 그리고 현대 CFD 기법(DNS, RANS, LES)에 대해 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Integral Method */}
          <SectionDivider number="1" title="Integral Method for Boundary Layers (von Karman)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">von Karman 적분법</strong>은 경계층 방정식을 직접 풀지 않고,
              적분된 형태의 운동량/에너지 방정식을 사용하여 경계층 특성을 근사적으로 구합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Momentum Integral Equation (von Karman, 1921)
              </h4>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-cyan-400 font-bold mb-3">유도 과정</p>
                  <p className="text-sm text-gray-400 mb-3">
                    경계층 운동량 방정식을 y = 0에서 y = delta까지 적분하면:
                  </p>
                  <Math tex={`\\frac{d\\theta}{dx} + \\frac{\\delta^* + 2\\theta}{u_\\infty}\\frac{du_\\infty}{dx} = \\frac{\\tau_w}{\\rho u_\\infty^2}`} display />
                  <p className="text-xs text-gray-500 mt-2">등압 유동 (dp/dx = 0)일 때 단순화:</p>
                </div>

                <EquationBox label="von Karman Momentum Integral (등압)" accent="cyan">
                  <Math tex={`\\frac{d\\theta}{dx} = \\frac{\\tau_w}{\\rho u_\\infty^2} = \\frac{C_f}{2}`} display />
                </EquationBox>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                    <p className="text-sm text-cyan-400 font-bold mb-2">배제 두께 (Displacement Thickness)</p>
                    <Math tex={`\\delta^* = \\int_0^\\delta \\left(1 - \\frac{u}{u_\\infty}\\right)dy`} display />
                    <p className="text-xs text-gray-500 mt-2">
                      유동이 &quot;밀려나는&quot; 양에 해당하는 두께
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                    <p className="text-sm text-orange-400 font-bold mb-2">운동량 두께 (Momentum Thickness)</p>
                    <Math tex={`\\theta = \\int_0^\\delta \\frac{u}{u_\\infty}\\left(1 - \\frac{u}{u_\\infty}\\right)dy`} display />
                    <p className="text-xs text-gray-500 mt-2">
                      운동량 손실에 해당하는 두께
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Integral Method Application: Assumed Velocity Profile
              </h4>

              <p className="text-gray-400 mb-4">
                적분법의 핵심: 속도 프로파일 형태를 <strong className="text-white">가정</strong>하고 적분 방정식에 대입
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-orange-500/30">
                  <p className="text-sm text-orange-400 font-bold mb-2">예: 2차 다항식 프로파일</p>
                  <Math tex={`\\frac{u}{u_\\infty} = 2\\eta - \\eta^2, \\quad \\eta = \\frac{y}{\\delta}`} display />
                  <p className="text-xs text-gray-500 mt-2">
                    경계조건: y=0에서 u=0, y=delta에서 u=u_inf, du/dy=0
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-2">적분 계산:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Math tex={`\\delta^* = \\frac{\\delta}{3}`} display />
                    </div>
                    <div>
                      <Math tex={`\\theta = \\frac{2\\delta}{15}`} display />
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30">
                  <p className="text-sm text-orange-400 font-bold mb-2">적분 방정식에 대입:</p>
                  <Math tex={`\\frac{d}{dx}\\left(\\frac{2\\delta}{15}\\right) = \\frac{\\mu}{\\rho u_\\infty^2} \\cdot \\frac{2u_\\infty}{\\delta}`} display />
                  <p className="text-sm text-gray-400 mt-2">적분 후:</p>
                  <Math tex={`\\delta = \\sqrt{\\frac{30\\nu x}{u_\\infty}} = \\frac{5.48 x}{\\sqrt{Re_x}}`} display />
                  <p className="text-xs text-emerald-400 mt-2">
                    Blasius 정확해(5.0)와 10% 이내! 훨씬 간단한 방법으로 좋은 근사 획득
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="적분법의 장점과 한계" accent="cyan" icon="I">
              <p className="mb-2">
                <strong className="text-cyan-400">장점:</strong>
              </p>
              <ul className="space-y-1 mb-3">
                <li><span className="text-cyan-400">*</span> 미분방정식을 풀지 않고 대수적 계산만으로 결과 도출</li>
                <li><span className="text-cyan-400">*</span> 압력 구배, 불균일 벽면 온도 등 복잡한 조건에 적용 가능</li>
                <li><span className="text-cyan-400">*</span> 물리적 직관에 기반한 프로파일 가정으로 결과 해석 용이</li>
              </ul>
              <p className="mb-2">
                <strong className="text-orange-400">한계:</strong>
              </p>
              <ul className="space-y-1">
                <li><span className="text-orange-400">*</span> 가정한 프로파일에 의존 (선택에 따라 결과 달라짐)</li>
                <li><span className="text-orange-400">*</span> 국소적 상세 정보 (벽면 전단 등)의 정확도 제한</li>
                <li><span className="text-orange-400">*</span> 난류에는 적용이 어려움</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 2. Energy Integral Method */}
          <SectionDivider number="2" title="Energy Integral Method" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Thermal Energy Integral Equation
              </h4>

              <EquationBox label="열 에너지 적분 방정식 (등온 벽면)" accent="emerald">
                <Math tex={`\\frac{d}{dx}\\int_0^{\\delta_t} u(T - T_s)dy = \\alpha\\left.\\frac{\\partial T}{\\partial y}\\right|_{y=0}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">Enthalpy thickness (에너지 두께):</strong>
                </p>
                <Math tex={`\\Delta_2 = \\int_0^{\\delta_t} \\frac{u}{u_\\infty} \\cdot \\frac{T - T_\\infty}{T_s - T_\\infty} dy`} display />
              </div>

              <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <p className="text-sm text-emerald-400 font-bold mb-2">단순화된 형태 (운동량 적분법과 유사):</p>
                <Math tex={`\\frac{d\\Delta_2}{dx} = \\frac{q_w''}{\\rho c_p u_\\infty (T_s - T_\\infty)} = \\frac{Nu_x \\cdot k}{\\rho c_p u_\\infty x}`} display />
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <ThinkLikeEngineer title="적분법으로 Pr 의존성 유도">
              <p className="mb-4">
                <strong>목표:</strong> 적분법을 사용하여 왜 <Math tex="Nu \\propto Pr^{1/3}" />인지 이해해봅시다.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/30 mb-4">
                <p className="text-sm text-purple-400 font-bold mb-2">접근법:</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>1. 속도와 온도 프로파일을 유사한 형태로 가정: <Math tex="u/u_\\infty = f(\\eta), \\theta = g(\\eta_t)" /></li>
                  <li>2. 운동량과 에너지 적분 방정식을 각각 적용</li>
                  <li>3. <Math tex="\\delta_t/\\delta" /> 비율 결정</li>
                  <li>4. Pr &gt; 1인 경우 (열 경계층이 속도 경계층 내에 있을 때):
                    <Math tex={`\\frac{\\delta_t}{\\delta} = \\left(\\frac{1}{Pr}\\right)^{1/3} = Pr^{-1/3}`} display />
                  </li>
                  <li>5. Nu ~ k/delta_t ~ 1/delta_t ~ Pr^(1/3) (with delta fixed)</li>
                </ul>
              </div>

              <p className="text-sm text-gray-400">
                <strong className="text-white">핵심 물리:</strong> Pr &gt; 1이면 열 확산이 운동량 확산보다 느려서
                온도 경계층이 더 얇습니다. 더 얇은 경계층 = 더 가파른 온도 구배 = 더 높은 열전달.
              </p>
            </ThinkLikeEngineer>
          </motion.div>

          {/* 3. Introduction to Turbulence */}
          <SectionDivider number="3" title="Introduction to Turbulence" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">난류(Turbulence)</strong>는 불규칙하고 3차원적이며
              다양한 스케일의 와류가 혼재하는 유동 상태입니다.
              열전달에서 난류는 혼합을 강화하여 열전달 계수를 크게 증가시킵니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                Characteristics of Turbulent Flow
              </h4>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-red-400 font-bold mb-3">난류의 특성</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li><span className="text-red-400">*</span> <strong>불규칙성 (Irregularity):</strong> 통계적으로만 기술 가능</li>
                    <li><span className="text-red-400">*</span> <strong>3차원성:</strong> 항상 3D 와류 구조</li>
                    <li><span className="text-red-400">*</span> <strong>소산 (Dissipation):</strong> 에너지가 열로 전환</li>
                    <li><span className="text-red-400">*</span> <strong>확산성:</strong> 운동량, 열, 질량 혼합 강화</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-3">난류 에너지 캐스케이드</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li><span className="text-orange-400">*</span> <strong>Large eddies:</strong> 에너지 생성 (평균 유동에서)</li>
                    <li><span className="text-orange-400">*</span> <strong>Inertial subrange:</strong> 에너지 전달</li>
                    <li><span className="text-orange-400">*</span> <strong>Small eddies:</strong> 점성 소산</li>
                    <li><span className="text-orange-400">*</span> Kolmogorov scale: <Math tex="\\eta = (\\nu^3/\\varepsilon)^{1/4}" /></li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                <h5 className="text-red-400 font-bold mb-3">스케일 비율</h5>
                <Math tex={`\\frac{L}{\\eta} \\sim Re^{3/4}`} display />
                <p className="text-sm text-gray-400 mt-2">
                  L: 적분 스케일 (largest eddies), eta: Kolmogorov 스케일 (smallest eddies)
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  예: Re = 10^6이면 L/eta ~ 30,000. 격자가 이 모든 스케일을 해석하려면 (30,000)^3 ~ 10^13 셀 필요!
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="난류와 열전달" accent="red" icon="T">
              <p className="mb-2">
                난류가 열전달을 강화하는 이유:
              </p>
              <ul className="space-y-1 mt-2">
                <li><span className="text-red-400">*</span> <strong>난류 혼합:</strong> 벌크 유체가 벽면 근처로 빠르게 수송</li>
                <li><span className="text-red-400">*</span> <strong>얇은 점성 하층:</strong> 벽면 바로 근처에만 층류 존재 (viscous sublayer)</li>
                <li><span className="text-red-400">*</span> <strong>강화된 온도 구배:</strong> <Math tex="h_{turb} / h_{lam} \\sim 3-10 \\times" /></li>
              </ul>
              <p className="mt-2 text-gray-500">
                난류 열전달의 대부분 저항은 얇은 점성 하층에 집중됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. RANS and k-epsilon Model */}
          <SectionDivider number="4" title="RANS and Turbulence Modeling Basics" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">RANS (Reynolds-Averaged Navier-Stokes)</strong>는
              난류를 평균(mean)과 변동(fluctuation)으로 분해하여 평균 유동만 계산하는 방법입니다.
              변동의 효과는 모델링됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Reynolds Decomposition
              </h4>

              <div className="space-y-4">
                <EquationBox label="Reynolds 분해" accent="orange">
                  <Math tex={`u = \\bar{u} + u', \\quad T = \\bar{T} + T'`} display />
                </EquationBox>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-2">Navier-Stokes에 대입하고 시간 평균하면:</p>
                  <Math tex={`\\bar{u}\\frac{\\partial \\bar{u}}{\\partial x} + \\bar{v}\\frac{\\partial \\bar{u}}{\\partial y} = -\\frac{1}{\\rho}\\frac{\\partial \\bar{p}}{\\partial x} + \\nu\\frac{\\partial^2 \\bar{u}}{\\partial y^2} - \\frac{\\partial \\overline{u'v'}}{\\partial y}`} display />
                </div>

                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30">
                  <p className="text-sm text-orange-400 font-bold mb-2">Reynolds Stress 항</p>
                  <Math tex={`\\tau_{turb} = -\\rho \\overline{u'v'} \\quad \\text{(Closure 문제!)}`} display />
                  <p className="text-sm text-gray-400 mt-2">
                    <Math tex="\\overline{u'v'}" />는 미지수이지만 방정식은 없음. 이것이 <strong className="text-white">Closure Problem</strong>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                k-epsilon Turbulence Model
              </h4>

              <p className="text-gray-400 mb-4">
                가장 널리 사용되는 2-방정식 모델. 난류 운동 에너지 k와 소산율 epsilon에 대한 수송 방정식을 풉니다.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-teal-400 font-bold mb-2">Eddy Viscosity (와점성)</p>
                  <Math tex={`\\nu_t = C_\\mu \\frac{k^2}{\\varepsilon}`} display />
                  <p className="text-xs text-gray-500 mt-2">
                    난류 응력을 평균 속도 구배에 비례한다고 가정 (Boussinesq 가설)
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-teal-500/30">
                    <p className="text-sm text-teal-400 font-bold mb-2">k 방정식</p>
                    <Math tex={`\\frac{Dk}{Dt} = P_k - \\varepsilon + \\text{diffusion}`} display />
                    <p className="text-xs text-gray-500 mt-2">
                      k: 난류 운동 에너지<br />
                      P_k: 생성항 (평균 유동에서)
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-orange-500/30">
                    <p className="text-sm text-orange-400 font-bold mb-2">epsilon 방정식</p>
                    <Math tex={`\\frac{D\\varepsilon}{Dt} = C_1 \\frac{\\varepsilon}{k}P_k - C_2\\frac{\\varepsilon^2}{k} + \\text{diff}`} display />
                    <p className="text-xs text-gray-500 mt-2">
                      epsilon: 소산율<br />
                      C_1, C_2: 모델 상수
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-2">
                    <strong className="text-white">표준 k-epsilon 모델 상수:</strong>
                  </p>
                  <p className="text-sm text-gray-400">
                    <Math tex="C_\\mu = 0.09" />, <Math tex="C_1 = 1.44" />, <Math tex="C_2 = 1.92" />,
                    <Math tex="\\sigma_k = 1.0" />, <Math tex="\\sigma_\\varepsilon = 1.3" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="k-epsilon의 한계" accent="yellow" icon="!">
              <p className="mb-2">
                k-epsilon 모델의 알려진 한계:
              </p>
              <ul className="space-y-1 mt-2">
                <li><span className="text-yellow-400">*</span> 강한 곡률, 회전 유동에서 정확도 저하</li>
                <li><span className="text-yellow-400">*</span> 박리(separation) 예측 부정확</li>
                <li><span className="text-yellow-400">*</span> 벽면 근처에서 추가 처리 필요 (wall function 또는 low-Re 버전)</li>
                <li><span className="text-yellow-400">*</span> 비등방성 무시 (isotropic eddy viscosity 가정)</li>
              </ul>
              <p className="mt-2 text-gray-500">
                대안: k-omega SST (박리 유동), RSM (비등방성), LES (비정상 유동)
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. DNS vs RANS vs LES */}
          <SectionDivider number="5" title="DNS vs RANS vs LES" />

          <motion.div {...stagger} className="mb-8">
            <CFDComparisonTable />
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">
                <h5 className="text-cyan-400 font-bold mb-3">DNS (Direct Numerical Simulation)</h5>
                <p className="text-sm text-gray-400 mb-3">
                  모든 난류 스케일을 직접 해석. 모델링 없음.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>* Grid: N ~ Re^(9/4) (3D)</li>
                  <li>* Re ~ 10^4 한계 (현재)</li>
                  <li>* 연구/검증 목적</li>
                  <li>* 최고 정확도의 &quot;진실&quot;</li>
                </ul>
              </div>

              <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-5">
                <h5 className="text-orange-400 font-bold mb-3">RANS (Reynolds-Averaged N-S)</h5>
                <p className="text-sm text-gray-400 mb-3">
                  평균 유동만 계산. 모든 난류 스케일 모델링.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>* Grid: 수만~수백만 (형상 의존)</li>
                  <li>* 모든 Re 적용 가능</li>
                  <li>* 산업 표준 (비용 효율)</li>
                  <li>* 정상 상태 (주로)</li>
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                <h5 className="text-emerald-400 font-bold mb-3">LES (Large Eddy Simulation)</h5>
                <p className="text-sm text-gray-400 mb-3">
                  큰 에디는 해석, 작은 에디만 모델링.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>* Grid: N ~ Re^1.8</li>
                  <li>* Re ~ 10^6-10^8 가능</li>
                  <li>* 비정상 현상 포착</li>
                  <li>* DNS와 RANS의 중간</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 6. Modern CFD Applications */}
          <SectionDivider number="6" title="Modern CFD Applications in Heat Transfer" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                Industry Applications and Tools
              </h4>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                    <h5 className="text-purple-400 font-bold mb-3">상용 CFD 소프트웨어</h5>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li><span className="text-purple-400">*</span> <strong>ANSYS Fluent:</strong> 가장 널리 사용, 종합 기능</li>
                      <li><span className="text-purple-400">*</span> <strong>STAR-CCM+:</strong> 자동 메싱, 다물리</li>
                      <li><span className="text-purple-400">*</span> <strong>COMSOL:</strong> 다물리 커플링</li>
                      <li><span className="text-purple-400">*</span> <strong>OpenFOAM:</strong> 오픈소스, 커스터마이징</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                    <h5 className="text-cyan-400 font-bold mb-3">열전달 응용 분야</h5>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li><span className="text-cyan-400">*</span> 전자 기기 열관리 (데이터센터, 반도체)</li>
                      <li><span className="text-cyan-400">*</span> 터빈 블레이드 냉각 (가스터빈)</li>
                      <li><span className="text-cyan-400">*</span> 열교환기 최적화</li>
                      <li><span className="text-cyan-400">*</span> 자동차 엔진/배터리 열관리</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                  <h5 className="text-purple-400 font-bold mb-3">CFD 열전달 해석의 검증</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    CFD 결과의 신뢰성을 확보하려면:
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>1. <strong>격자 독립성 검증:</strong> 격자를 2배 이상 세분화해도 결과 변화 &lt; 5%</li>
                    <li>2. <strong>y+ 검증:</strong> 벽면 격자가 난류 모델 요구사항 충족 (y+ &lt; 1 또는 30 &lt; y+ &lt; 300)</li>
                    <li>3. <strong>잔차 수렴:</strong> 연속, 운동량, 에너지 잔차 &lt; 10^-4 ~ 10^-6</li>
                    <li>4. <strong>실험 데이터 비교:</strong> 유사 조건의 실험 결과와 검증</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <ThinkLikeEngineer title="CFD vs 상관식: 언제 무엇을 사용하나?">
              <p className="mb-4">
                <strong>실무적 판단 기준:</strong>
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30">
                  <p className="text-emerald-400 font-bold mb-2">상관식 사용 (충분한 경우)</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>* 표준 형상 (평판, 원관, 구, 실린더)</li>
                    <li>* 초기 설계 단계 (빠른 추정)</li>
                    <li>* 유효 범위 내 조건</li>
                    <li>* 불확도 25%가 허용 가능</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                  <p className="text-red-400 font-bold mb-2">CFD 필요 (상관식 불가)</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>* 복잡한 형상 (실제 제품)</li>
                    <li>* 유동 박리, 재순환</li>
                    <li>* 상세 온도/속도 분포 필요</li>
                    <li>* 비정상 현상, 국소 핫스팟</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-gray-400">
                <strong className="text-white">현명한 엔지니어의 접근:</strong>
                먼저 상관식으로 빠르게 추정하여 설계 방향을 잡고,
                CFD로 상세 검증 및 최적화. 최종적으로 프로토타입 실험으로 확인.
                각 방법의 강점을 조합!
              </p>
            </ThinkLikeEngineer>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <ThinkLikeEngineer title="GPU 데이터센터 침수냉각 설계">
              <p className="mb-4">
                <strong>문제:</strong> 500 W GPU 카드가 장착된 서버를 유전성 유체(Novec 7000, Pr = 8)에
                침수시켜 냉각합니다. CFD 없이 1차 추정을 하고, 언제 CFD가 필요한지 판단하시오.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/30 mb-4">
                <p className="text-sm text-purple-400 font-bold mb-2">Order-of-Magnitude Approach:</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>1. <strong>자연 대류 추정:</strong> 수직 표면, L = 0.1 m, Delta_T = 30 K
                    <br />Ra = g*beta*Delta_T*L^3/(nu*alpha) ~ 10^7 (층류 자연 대류)</li>
                  <li>2. <strong>Nu 추정:</strong> Nu ~ 0.59 * Ra^0.25 ~ 30</li>
                  <li>3. <strong>h 추정:</strong> h = Nu*k/L ~ 30 * 0.07 / 0.1 ~ 20 W/(m^2.K)</li>
                  <li>4. <strong>필요 면적:</strong> A = Q / (h * Delta_T) = 500 / (20 * 30) ~ 0.8 m^2</li>
                  <li>5. GPU 카드 표면적 ~ 0.03 m^2. <span className="text-red-400">자연 대류만으로는 불충분!</span></li>
                </ul>
              </div>

              <p className="text-sm text-gray-400">
                <strong className="text-white">결론:</strong> 자연 대류만으로는 불가. 강제 대류(펌프) 또는 끓음 열전달 필요.
                <span className="text-purple-400 font-bold"> CFD가 필요한 경우:</span> 서버 배열에서의 유동 분포,
                국소 핫스팟 위치, 최적 유량 결정 등. 실제 침수냉각 시스템은 상관식으로 불가능한 복잡한 형상.
              </p>
            </ThinkLikeEngineer>
          </motion.div>

          {/* 7. Summary */}
          <SectionDivider number="7" title="Summary and Key Takeaways" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6 text-center">
                Graduate-Level Convection: Key Concepts
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30">
                  <h5 className="text-cyan-400 font-bold mb-2">적분법 (Integral Method)</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>* 미분 방정식 없이 경계층 특성 근사</li>
                    <li>* 프로파일 가정 + 적분 방정식</li>
                    <li>* 빠른 추정, 복잡한 경계조건에 유용</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                  <h5 className="text-red-400 font-bold mb-2">난류 기초</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>* 난류 = 불규칙, 3D, 다중 스케일</li>
                    <li>* 열전달 강화 (혼합 효과)</li>
                    <li>* Closure problem → 난류 모델 필요</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-orange-500/30">
                  <h5 className="text-orange-400 font-bold mb-2">k-epsilon 모델</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>* k (난류 에너지), epsilon (소산율) 수송 방정식</li>
                    <li>* Eddy viscosity 개념</li>
                    <li>* 산업 표준, 그러나 한계 있음</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/30">
                  <h5 className="text-purple-400 font-bold mb-2">CFD 방법론</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>* DNS: 모든 스케일 해석 (연구용)</li>
                    <li>* RANS: 평균 유동 + 난류 모델 (산업 표준)</li>
                    <li>* LES: 큰 에디 해석 + 작은 에디 모델 (고급 설계)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="다음 단계" accent="purple" icon="N">
              <p className="mb-2">
                대류 열전달의 심화 학습을 위한 권장 경로:
              </p>
              <ul className="space-y-1 mt-2">
                <li><span className="text-purple-400">*</span> <strong>이론:</strong> Schlichting &quot;Boundary Layer Theory&quot;, Pope &quot;Turbulent Flows&quot;</li>
                <li><span className="text-purple-400">*</span> <strong>CFD:</strong> ANSYS Fluent 튜토리얼, OpenFOAM 실습</li>
                <li><span className="text-purple-400">*</span> <strong>실험:</strong> PIV, LDA, 열화상 측정 기법</li>
                <li><span className="text-purple-400">*</span> <strong>응용:</strong> 열교환기 설계, 전자 냉각, 터빈 열해석</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

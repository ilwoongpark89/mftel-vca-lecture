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
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", iconBg: "bg-purple-500/20" },
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

export default function TwoDIntro() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Introduction to 2-D Conduction
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            1차원 가정이 성립하지 않는 복잡한 형상의 열전도 문제를 해결하기 위한 접근법을 소개합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 2D 전도 필요성 */}
          <SectionDivider number="1" title="Why 2-D Conduction?" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              지금까지 1차원(1-D) 정상상태 전도를 학습했습니다. 평판, 원통, 구에서 온도가 하나의 공간 변수에만
              의존한다고 가정했습니다. 그러나 실제 공학 문제에서는 온도가 <strong className="text-white">2개 이상의
              방향</strong>으로 변하는 경우가 많습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                  2-D 전도가 필요한 예시
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">1.</span>
                    <span><strong className="text-white">모서리 (Corner):</strong> 벽의 모서리에서 열이 두 방향으로 전달</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">2.</span>
                    <span><strong className="text-white">방열 핀 (Fin base):</strong> 핀 뿌리 근처의 2-D 효과</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">3.</span>
                    <span><strong className="text-white">전자 부품:</strong> 칩에서 PCB로의 열 확산</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">4.</span>
                    <span><strong className="text-white">연료봉:</strong> 반경과 축 방향 모두 온도 변화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">5.</span>
                    <span><strong className="text-white">열교환기:</strong> 복잡한 형상의 핀 튜브</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-6">
                <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                  1-D 가정의 한계
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  1-D 가정이 유효하려면 온도 구배가 한 방향에서만 유의해야 합니다:
                </p>
                <div className="text-center p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <Math tex={String.raw`\frac{\partial T}{\partial y} \ll \frac{\partial T}{\partial x}, \quad \frac{\partial T}{\partial z} \ll \frac{\partial T}{\partial x}`} display />
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  이 조건이 성립하지 않으면 <strong className="text-orange-300">다차원 해석</strong>이 필요합니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. 지배방정식 */}
          <SectionDivider number="2" title="Governing Equation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              2차원 정상상태 전도의 지배방정식은 열확산 방정식에서 시간 미분항을 제거하고
              2개의 공간 변수만 고려하여 얻습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                2-D Steady-State Heat Equation
              </h4>

              <div className="space-y-4">
                <EquationBox label="열 생성이 있는 경우 (Poisson's Equation)" accent="blue">
                  <Math tex={String.raw`\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\dot{q}}{k} = 0`} display />
                </EquationBox>

                <EquationBox label="열 생성이 없는 경우 (Laplace's Equation)" accent="orange">
                  <Math tex={String.raw`\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = 0 \quad \text{or} \quad \nabla^2 T = 0`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="편미분 방정식 (PDE)" accent="blue" icon="?">
              <p>
                2-D 전도 문제는 <strong className="text-white">편미분 방정식(PDE)</strong>입니다.
                1-D 문제의 상미분 방정식(ODE)과 달리, 일반적으로 해석해(closed-form solution)를 구하기 어렵습니다.
                따라서 <strong className="text-blue-300">수치 해석법</strong>이 필수적입니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. 해석적 방법 개요 */}
          <SectionDivider number="3" title="Analytical Methods (Brief Overview)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              특수한 형상과 경계조건에 대해 해석해를 구할 수 있는 방법들이 있습니다.
              이 강의에서는 간략히 소개하고, <strong className="text-white">수치 해석법에 집중</strong>합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                <h4 className="text-sm font-bold text-purple-400 mb-3">변수 분리법 (Separation of Variables)</h4>
                <p className="text-sm text-gray-400 mb-3">
                  해를 <Math tex="T(x,y) = X(x) \cdot Y(y)" /> 형태로 가정하여 PDE를 두 개의 ODE로 분리합니다.
                </p>
                <div className="text-center p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                  <Math tex={String.raw`T(x,y) = \sum_{n=1}^{\infty} C_n \sin\left(\frac{n\pi x}{L}\right) \sinh\left(\frac{n\pi y}{L}\right)`} />
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  적용 조건: 직사각형 영역, 균일한 물성, 특정 경계조건
                </p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                <h4 className="text-sm font-bold text-emerald-400 mb-3">형상 계수 (Shape Factor)</h4>
                <p className="text-sm text-gray-400 mb-3">
                  복잡한 2-D 또는 3-D 형상의 열전달을 간단한 공식으로 근사합니다.
                </p>
                <div className="text-center p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                  <Math tex={String.raw`q = Sk(T_1 - T_2)`} />
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  S: 형상 계수 [m], 교과서 표에서 다양한 형상의 S 값 제공
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="해석해의 한계" accent="orange" icon="!">
              <p className="mb-2">
                해석적 방법은 다음과 같은 <strong className="text-orange-300">제한된 조건</strong>에서만 적용 가능합니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; 단순한 형상 (직사각형, 원, 구 등)</li>
                <li>&bull; 균일한 물성치 (k = constant)</li>
                <li>&bull; 특정 형태의 경계조건</li>
                <li>&bull; 무한 급수해는 수렴 속도가 느릴 수 있음</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 4. 수치 해석의 필요성 */}
          <SectionDivider number="4" title="Why Numerical Methods?" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              실제 공학 문제는 해석해로 풀기 어려운 경우가 대부분입니다.
              <strong className="text-white">수치 해석법</strong>은 이러한 복잡한 문제를 해결하는 강력한 도구입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                수치 해석법의 장점
              </h4>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                  <h5 className="text-sm font-bold text-blue-400 mb-2">복잡한 형상</h5>
                  <p className="text-sm text-gray-400">
                    임의의 형상에 적용 가능. L자형, 불규칙 경계, 구멍이 있는 판 등
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                  <h5 className="text-sm font-bold text-emerald-400 mb-2">가변 물성치</h5>
                  <p className="text-sm text-gray-400">
                    <Math tex="k(T)" />, <Math tex="k(x,y)" /> 등 온도/위치 의존 물성 처리 가능
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                  <h5 className="text-sm font-bold text-orange-400 mb-2">다양한 경계조건</h5>
                  <p className="text-sm text-gray-400">
                    복합 경계조건, 비선형 경계조건 (복사 등) 적용 가능
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                주요 수치 해석 방법
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Method</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">특징</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">적용</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-blue-400">Finite Difference Method (FDM)</td>
                      <td className="py-3 px-4">미분을 차분으로 근사, 구현 간단</td>
                      <td className="py-3 px-4 text-gray-400">정형 격자, 교육/연구</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-emerald-400">Finite Element Method (FEM)</td>
                      <td className="py-3 px-4">복잡한 형상에 유연, 수학적 기반 탄탄</td>
                      <td className="py-3 px-4 text-gray-400">구조해석, 상용 SW</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-orange-400">Finite Volume Method (FVM)</td>
                      <td className="py-3 px-4">보존법칙 자연 만족, 유체역학에 강점</td>
                      <td className="py-3 px-4 text-gray-400">CFD (OpenFOAM, Fluent)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="이번 강의의 초점: FDM" accent="blue" icon="*">
              <p>
                이번 강의에서는 <strong className="text-blue-300">유한 차분법 (Finite Difference Method, FDM)</strong>을
                집중적으로 학습합니다. FDM은 개념이 직관적이고 구현이 간단하여 수치 해석의 기본을 이해하는 데
                최적의 출발점입니다. FDM의 원리를 이해하면 FEM, FVM 등 고급 방법으로의 확장이 용이합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 수치 해석 개요 */}
          <SectionDivider number="5" title="Numerical Approach Overview" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                수치 해석의 기본 개념
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</span>
                    <div>
                      <h5 className="text-white font-bold mb-2">이산화 (Discretization)</h5>
                      <p className="text-sm text-gray-400">
                        연속적인 영역을 <strong className="text-blue-300">유한 개의 점(노드)</strong>으로 나눕니다.
                        연속 함수 <Math tex="T(x,y)" />를 이산 값 <Math tex="T_{i,j}" />로 근사합니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">2</span>
                    <div>
                      <h5 className="text-white font-bold mb-2">차분 근사 (Finite Difference Approximation)</h5>
                      <p className="text-sm text-gray-400">
                        미분을 인접 노드의 온도 차이를 이용한 <strong className="text-blue-300">대수 표현</strong>으로 근사합니다.
                        PDE가 연립 대수 방정식이 됩니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">3</span>
                    <div>
                      <h5 className="text-white font-bold mb-2">연립 방정식 풀이</h5>
                      <p className="text-sm text-gray-400">
                        각 노드에서 에너지 균형 방정식을 수립하면 <strong className="text-blue-300">N개의 미지수와 N개의 방정식</strong>이
                        생성됩니다. 행렬 방법 또는 반복법으로 해를 구합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="text-center p-6 rounded-xl bg-slate-900/50 border border-slate-700">
              <p className="text-gray-400 mb-4">수치 해석의 핵심 아이디어</p>
              <div className="text-blue-400">
                <Math tex={String.raw`\underbrace{\nabla^2 T = 0}_{\text{PDE (continuous)}} \quad \Longrightarrow \quad \underbrace{\mathbf{A} \cdot \mathbf{T} = \mathbf{b}}_{\text{Linear System (discrete)}}`} display />
              </div>
              <p className="text-sm text-gray-500 mt-4">
                연속적인 편미분 방정식을 이산적인 선형 연립 방정식으로 변환
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

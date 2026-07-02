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
  accent = "purple",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "blue" ? "border-blue-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "red" ? "border-red-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "purple" ? "border-purple-500/30" : accent === "cyan" ? "border-cyan-500/30" : "border-slate-700";
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
  accent = "purple",
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
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
  };
  const c = colors[accent] || colors.purple;
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

export default function SolutionMethods() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Part 5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Solving the System of Equations
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            유한 차분 방정식 체계를 푸는 직접법과 반복법을 학습합니다.
            Gauss-Seidel 반복법을 중심으로 상세히 다룹니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 해법 분류 */}
          <SectionDivider number="1" title="Solution Methods Overview" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              N개의 미지수를 가진 N개의 연립 선형 방정식 <Math tex="\mathbf{A}\mathbf{T} = \mathbf{b}" />를 푸는 방법은
              크게 <strong className="text-white">직접법</strong>과 <strong className="text-white">반복법</strong>으로 나뉩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
                <h4 className="text-sm font-bold text-blue-400 mb-3">직접법 (Direct Methods)</h4>
                <p className="text-sm text-gray-400 mb-3">
                  유한한 연산으로 정확한 해(기계 정밀도 내)를 구합니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; Gaussian Elimination</li>
                  <li>&bull; LU Decomposition</li>
                  <li>&bull; Thomas Algorithm (tridiagonal)</li>
                </ul>
                <div className="mt-4 p-3 rounded bg-slate-900/80 border border-slate-700">
                  <p className="text-xs text-gray-500">
                    <strong className="text-blue-300">장점:</strong> 정확한 해<br/>
                    <strong className="text-blue-300">단점:</strong> 대규모 문제에서 계산/메모리 비용 큼 <Math tex="O(N^3)" />
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-6">
                <h4 className="text-sm font-bold text-purple-400 mb-3">반복법 (Iterative Methods)</h4>
                <p className="text-sm text-gray-400 mb-3">
                  초기 추정값에서 시작하여 반복을 통해 해에 수렴합니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; Jacobi Iteration</li>
                  <li>&bull; <strong className="text-purple-300">Gauss-Seidel Iteration</strong></li>
                  <li>&bull; Successive Over-Relaxation (SOR)</li>
                </ul>
                <div className="mt-4 p-3 rounded bg-slate-900/80 border border-slate-700">
                  <p className="text-xs text-gray-500">
                    <strong className="text-purple-300">장점:</strong> 메모리 효율적, 희소 행렬에 적합<br/>
                    <strong className="text-purple-300">단점:</strong> 수렴 보장 필요, 수렴 속도 가변
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="열전달 문제에서 반복법 선호" accent="purple" icon="*">
              <p>
                열전달 문제의 계수 행렬은 <strong className="text-purple-300">대각 우세(diagonally dominant)</strong>이고
                <strong className="text-purple-300">희소(sparse)</strong>합니다. 이러한 특성 덕분에 반복법이
                효율적으로 수렴하며, 메모리 사용량도 적습니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. Jacobi 반복법 */}
          <SectionDivider number="2" title="Jacobi Iteration" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Jacobi 반복법은 가장 기본적인 반복법입니다.
              현재 반복(k)의 모든 값을 사용하여 다음 반복(k+1)의 값을 계산합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Jacobi Method
              </h4>

              <EquationBox label="내부 노드에 대한 Jacobi 반복" accent="blue">
                <Math tex={String.raw`T_{i,j}^{(k+1)} = \frac{1}{4}\left(T_{i+1,j}^{(k)} + T_{i-1,j}^{(k)} + T_{i,j+1}^{(k)} + T_{i,j-1}^{(k)}\right)`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                <p className="text-sm text-gray-400">
                  <strong className="text-blue-300">알고리즘:</strong>
                </p>
                <ol className="mt-2 space-y-1 text-sm text-gray-400 list-decimal list-inside">
                  <li>초기 온도 추정값 설정 <Math tex="T_{i,j}^{(0)}" /></li>
                  <li>모든 내부 노드에 대해 새 값 <Math tex="T_{i,j}^{(k+1)}" /> 계산</li>
                  <li>수렴 확인: <Math tex="|T^{(k+1)} - T^{(k)}| < \epsilon" /></li>
                  <li>수렴하지 않으면 k := k+1, 단계 2로</li>
                </ol>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Jacobi 방법의 특징" accent="blue" icon="J">
              <p>
                Jacobi 방법은 <strong className="text-blue-300">이전 반복의 값만 사용</strong>하므로 병렬화가 용이합니다.
                그러나 새로 계산된 값을 즉시 활용하지 않아 수렴 속도가 느립니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. Gauss-Seidel 반복법 */}
          <SectionDivider number="3" title="Gauss-Seidel Iteration" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Gauss-Seidel 방법은 Jacobi를 개선한 것으로, <strong className="text-white">이미 계산된 새 값을 즉시 사용</strong>합니다.
              이를 통해 수렴 속도가 크게 향상됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                Gauss-Seidel Method
              </h4>

              <EquationBox label="내부 노드에 대한 Gauss-Seidel 반복" accent="purple">
                <Math tex={String.raw`T_{i,j}^{(k+1)} = \frac{1}{4}\left(T_{i+1,j}^{(k)} + T_{i-1,j}^{(k+1)} + T_{i,j+1}^{(k)} + T_{i,j-1}^{(k+1)}\right)`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 mt-4 text-center">
                주목: <Math tex="T_{i-1,j}^{(k+1)}" />와 <Math tex="T_{i,j-1}^{(k+1)}" />는 <strong className="text-purple-300">이미 갱신된 새 값</strong>
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                Gauss-Seidel 알고리즘 (상세)
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm font-bold text-purple-400 mb-2">Step 1: 초기화</p>
                  <p className="text-sm text-gray-400">
                    모든 내부 노드에 초기 추정값 설정. 일반적으로 경계 온도의 평균이나 0으로 설정.
                  </p>
                  <div className="mt-2 p-2 rounded bg-slate-800/50 text-xs font-mono text-gray-400">
                    for i = 1 to M-1:<br/>
                    &nbsp;&nbsp;for j = 1 to N-1:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;T[i][j] = initial_guess
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm font-bold text-purple-400 mb-2">Step 2: 반복 루프</p>
                  <p className="text-sm text-gray-400">
                    노드를 순서대로 순회하며 온도 갱신. 새 값을 즉시 사용.
                  </p>
                  <div className="mt-2 p-2 rounded bg-slate-800/50 text-xs font-mono text-gray-400">
                    while not converged:<br/>
                    &nbsp;&nbsp;for i = 1 to M-1:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;for j = 1 to N-1:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T_old = T[i][j]<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T[i][j] = 0.25*(T[i+1][j] + T[i-1][j] + T[i][j+1] + T[i][j-1])<br/>
                    &nbsp;&nbsp;check convergence
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm font-bold text-purple-400 mb-2">Step 3: 수렴 판정</p>
                  <p className="text-sm text-gray-400">
                    모든 노드에서 변화량이 허용 오차보다 작으면 수렴으로 판정.
                  </p>
                  <div className="mt-2">
                    <Math tex={String.raw`\max_{i,j} \left| T_{i,j}^{(k+1)} - T_{i,j}^{(k)} \right| < \epsilon`} display />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    또는 상대 오차 기준: <Math tex="|T^{(k+1)} - T^{(k)}| / |T^{(k)}| < \epsilon" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="수렴 조건" accent="emerald" icon="C">
              <p className="mb-2">
                Gauss-Seidel 방법은 계수 행렬이 <strong className="text-emerald-300">대각 우세</strong>이면 수렴이 보장됩니다.
              </p>
              <div className="mt-2 p-2 rounded bg-slate-800/50 text-center">
                <Math tex={String.raw`|a_{ii}| > \sum_{j \neq i} |a_{ij}|`} />
              </div>
              <p className="mt-2 text-xs">
                열전달 문제의 유한 차분 방정식은 이 조건을 만족합니다 (대각 원소 = 4, 비대각 원소 합 = 4 또는 그 이하).
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. SOR 방법 */}
          <SectionDivider number="4" title="Successive Over-Relaxation (SOR)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              SOR은 Gauss-Seidel을 가속하는 기법입니다. <strong className="text-white">이완 인자(relaxation factor)</strong>
              <Math tex="\omega" />를 도입하여 수렴 속도를 높입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                SOR Formula
              </h4>

              <EquationBox label="SOR 반복식" accent="cyan">
                <Math tex={String.raw`T_{i,j}^{(k+1)} = T_{i,j}^{(k)} + \omega \left( T_{i,j}^{GS} - T_{i,j}^{(k)} \right)`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 mt-4 text-center">
                <Math tex="T_{i,j}^{GS}" />: Gauss-Seidel로 계산된 값
              </p>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                  <p className="text-sm font-bold text-cyan-400 mb-2"><Math tex="\omega = 1" /></p>
                  <p className="text-xs text-gray-400">Gauss-Seidel과 동일</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                  <p className="text-sm font-bold text-emerald-400 mb-2"><Math tex="1 < \omega < 2" /></p>
                  <p className="text-xs text-gray-400">Over-relaxation (가속)</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                  <p className="text-sm font-bold text-orange-400 mb-2"><Math tex="0 < \omega < 1" /></p>
                  <p className="text-xs text-gray-400">Under-relaxation (안정화)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="최적 이완 인자" accent="cyan" icon="W">
              <p>
                정사각형 영역의 Laplace 방정식에서 최적 <Math tex="\omega" />는 다음과 같이 추정됩니다:
              </p>
              <div className="mt-2 p-2 rounded bg-slate-800/50 text-center">
                <Math tex={String.raw`\omega_{opt} \approx \frac{2}{1 + \sin(\pi/N)}`} />
              </div>
              <p className="mt-2 text-xs">
                N이 클수록 <Math tex="\omega_{opt}" />는 2에 가까워집니다. 실제로는 <Math tex="\omega = 1.5 \sim 1.9" /> 범위가 자주 사용됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 행렬 형태 */}
          <SectionDivider number="5" title="Matrix Formulation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              프로그래밍에서는 2차원 인덱스 <Math tex="(i,j)" />를 1차원 인덱스로 변환하여
              행렬 형태로 문제를 정식화합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                인덱스 변환 및 행렬 구조
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-400 mb-4">
                    2-D 인덱스 (i, j)를 1-D 인덱스 m으로 변환:
                  </p>
                  <div className="p-3 rounded bg-slate-900/80 border border-slate-700 text-center">
                    <Math tex="m = i + (j-1) \cdot (M-1)" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    (M-1)x(N-1) 내부 노드의 경우
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-4">
                    계수 행렬 A의 구조:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>&bull; 대각선: -4 (또는 경계 노드의 경우 다른 값)</li>
                    <li>&bull; 상/하 대각선: +1 (인접 i 노드)</li>
                    <li>&bull; 띠 대각선: +1 (인접 j 노드)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                <p className="text-sm text-gray-400 mb-3">3x3 내부 노드의 계수 행렬 예시:</p>
                <div className="text-center overflow-x-auto">
                  <Math tex={String.raw`\mathbf{A} = \begin{bmatrix} -4 & 1 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\ 1 & -4 & 1 & 0 & 1 & 0 & 0 & 0 & 0 \\ 0 & 1 & -4 & 0 & 0 & 1 & 0 & 0 & 0 \\ 1 & 0 & 0 & -4 & 1 & 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 1 & -4 & 1 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 1 & -4 & 0 & 0 & 1 \\ 0 & 0 & 0 & 1 & 0 & 0 & -4 & 1 & 0 \\ 0 & 0 & 0 & 0 & 1 & 0 & 1 & -4 & 1 \\ 0 & 0 & 0 & 0 & 0 & 1 & 0 & 1 & -4 \end{bmatrix}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="희소 행렬 처리" accent="blue" icon="S">
              <p>
                계수 행렬의 대부분은 0입니다. 실제 프로그래밍에서는 <strong className="text-blue-300">희소 행렬 형식</strong>
                (CSR, COO 등)으로 저장하여 메모리를 절약합니다.
                MATLAB의 <code className="text-blue-300">sparse()</code>, Python의 <code className="text-blue-300">scipy.sparse</code> 등 활용.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. 수렴 기준 */}
          <SectionDivider number="6" title="Convergence Criteria" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                수렴 판정 기준
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Criterion</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Formula</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Note</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-purple-400">절대 오차</td>
                      <td className="py-3 px-4"><Math tex="\max |T^{(k+1)} - T^{(k)}| < \epsilon" /></td>
                      <td className="py-3 px-4 text-gray-400">단순, 스케일 의존</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-emerald-400">상대 오차</td>
                      <td className="py-3 px-4"><Math tex="\max |T^{(k+1)} - T^{(k)}| / |T^{(k)}| < \epsilon" /></td>
                      <td className="py-3 px-4 text-gray-400">스케일 불변</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-blue-400">잔차 (Residual)</td>
                      <td className="py-3 px-4"><Math tex="\|A\mathbf{T} - \mathbf{b}\| < \epsilon" /></td>
                      <td className="py-3 px-4 text-gray-400">방정식 만족도 직접 측정</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="실용적 권장사항" accent="yellow" icon="!">
              <p>
                <strong className="text-yellow-300">허용 오차:</strong> <Math tex="\epsilon = 10^{-4}" /> ~ <Math tex="10^{-6}" />이 일반적<br/>
                <strong className="text-yellow-300">최대 반복 횟수:</strong> 무한 루프 방지를 위해 설정 (예: 10000)<br/>
                <strong className="text-yellow-300">수렴 모니터링:</strong> 매 반복마다 잔차 출력하여 수렴 추이 확인
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

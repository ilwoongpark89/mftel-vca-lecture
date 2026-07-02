"use client";

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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "emerald",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "blue" ? "border-blue-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "red" ? "border-red-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "purple" ? "border-purple-500/30" : "border-slate-700";
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
  accent = "emerald",
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
  const c = colors[accent] || colors.emerald;
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

export default function NodalEquations() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nodal Equations from Energy Balance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            에너지 균형을 통해 각 노드에서의 유한 차분 방정식을 유도합니다.
            수학적 유도와 물리적 해석을 연결합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 에너지 균형 접근법 */}
          <SectionDivider number="1" title="Energy Balance Approach" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              유한 차분 방정식을 유도하는 두 가지 방법이 있습니다:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                <h4 className="text-sm font-bold text-blue-400 mb-3">1. Taylor 급수 접근법</h4>
                <p className="text-sm text-gray-400">
                  미분을 차분으로 직접 근사. 수학적으로 명확하나 물리적 의미가 다소 모호함.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
                <h4 className="text-sm font-bold text-emerald-400 mb-3">2. 에너지 균형 접근법</h4>
                <p className="text-sm text-gray-400">
                  각 노드 주위의 제어 체적에 에너지 보존 적용. <strong className="text-white">물리적으로 직관적</strong>이며
                  경계조건 적용이 용이함.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                에너지 균형 원리
              </h4>

              <EquationBox label="정상상태 에너지 균형 (각 노드에서)" accent="emerald">
                <Math tex={String.raw`\sum \dot{Q}_{in} = 0 \quad \text{(into the node)}`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 mt-6 text-center">
                정상상태에서 노드로 들어오는 모든 열전달의 합 = 0
              </p>
            </div>
          </motion.div>

          {/* 2. 제어 체적 정의 */}
          <SectionDivider number="2" title="Control Volume Definition" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              각 노드 <Math tex="(i,j)" />를 중심으로 <strong className="text-white">제어 체적(Control Volume)</strong>을 정의합니다.
              제어 체적의 크기는 격자 간격에 의해 결정됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                내부 노드의 제어 체적
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-400 mb-4">
                    내부 노드 (i, j)를 중심으로 한 제어 체적:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; x 방향 크기: <Math tex="\Delta x" /></li>
                    <li>&bull; y 방향 크기: <Math tex="\Delta y" /></li>
                    <li>&bull; 깊이 (2-D): 단위 깊이 (1)</li>
                    <li>&bull; 면적: <Math tex="\Delta x \cdot \Delta y \cdot 1" /></li>
                  </ul>
                  <p className="text-sm text-gray-400 mt-4">
                    제어 체적의 경계는 인접 노드 사이의 <strong className="text-emerald-300">중간점</strong>에 위치합니다.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* CV visualization */}
                    <div className="w-48 h-48 border-2 border-dashed border-emerald-500/50 rounded-lg relative">
                      {/* Center node */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                        i,j
                      </div>
                      {/* Adjacent nodes */}
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-blue-500/50 rounded-full flex items-center justify-center text-xs text-blue-300">
                        <Math tex="\leftarrow" />
                      </div>
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-5 h-5 bg-blue-500/50 rounded-full flex items-center justify-center text-xs text-blue-300">
                        <Math tex="\rightarrow" />
                      </div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500/50 rounded-full flex items-center justify-center text-xs text-blue-300">
                        <Math tex="\uparrow" />
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-blue-500/50 rounded-full flex items-center justify-center text-xs text-blue-300">
                        <Math tex="\downarrow" />
                      </div>
                      {/* Labels */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500">
                        <Math tex="\Delta x" />
                      </div>
                      <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-xs text-gray-500">
                        <Math tex="\Delta y" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. 내부 노드 방정식 */}
          <SectionDivider number="3" title="Interior Node Equation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              내부 노드 (i, j)에서 4개의 인접 노드로부터 열이 전도됩니다.
              Fourier 법칙을 사용하여 각 방향의 열전달률을 계산합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                에너지 균형 적용
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-3">왼쪽 노드 (i-1, j)에서 노드 (i, j)로의 열전달:</p>
                  <Math tex={String.raw`\dot{Q}_{(i-1,j) \to (i,j)} = k \cdot (\Delta y \cdot 1) \cdot \frac{T_{i-1,j} - T_{i,j}}{\Delta x}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-3">오른쪽 노드 (i+1, j)에서 노드 (i, j)로의 열전달:</p>
                  <Math tex={String.raw`\dot{Q}_{(i+1,j) \to (i,j)} = k \cdot (\Delta y \cdot 1) \cdot \frac{T_{i+1,j} - T_{i,j}}{\Delta x}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-3">아래쪽 노드 (i, j-1)에서 노드 (i, j)로의 열전달:</p>
                  <Math tex={String.raw`\dot{Q}_{(i,j-1) \to (i,j)} = k \cdot (\Delta x \cdot 1) \cdot \frac{T_{i,j-1} - T_{i,j}}{\Delta y}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-3">위쪽 노드 (i, j+1)에서 노드 (i, j)로의 열전달:</p>
                  <Math tex={String.raw`\dot{Q}_{(i,j+1) \to (i,j)} = k \cdot (\Delta x \cdot 1) \cdot \frac{T_{i,j+1} - T_{i,j}}{\Delta y}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                에너지 균형 합산
              </h4>

              <EquationBox label="정상상태 에너지 균형: 모든 열전달 합 = 0" accent="blue">
                <Math tex={String.raw`\dot{Q}_{(i-1,j)} + \dot{Q}_{(i+1,j)} + \dot{Q}_{(i,j-1)} + \dot{Q}_{(i,j+1)} = 0`} display />
              </EquationBox>

              <div className="text-center text-gray-500 py-4">&darr; <Math tex="\Delta x = \Delta y" />이고 k를 약분</div>

              <EquationBox label="내부 노드 방정식 (정사각형 격자)" accent="emerald">
                <Math tex={String.raw`T_{i-1,j} + T_{i+1,j} + T_{i,j-1} + T_{i,j+1} - 4T_{i,j} = 0`} display />
              </EquationBox>

              <div className="text-center text-gray-500 py-4">&darr; <Math tex="T_{i,j}" />에 대해 정리</div>

              <EquationBox label="온도 계산 공식" accent="emerald">
                <Math tex={String.raw`T_{i,j} = \frac{1}{4}\left(T_{i-1,j} + T_{i+1,j} + T_{i,j-1} + T_{i,j+1}\right)`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Taylor 급수와 에너지 균형의 일치" accent="emerald" icon="=">
              <p>
                에너지 균형에서 유도한 방정식이 Taylor 급수에서 유도한 방정식과 <strong className="text-emerald-300">정확히 일치</strong>합니다.
                이는 두 접근법의 물리적, 수학적 일관성을 보여줍니다.
                에너지 균형 방법은 경계조건 적용에 더 직관적이므로, 실제 문제 풀이에서 선호됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. 비정사각형 격자 */}
          <SectionDivider number="4" title="Non-Square Grid" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <Math tex="\Delta x \neq \Delta y" />인 경우, 내부 노드 방정식이 조금 더 복잡해집니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                비정사각형 격자의 내부 노드 방정식
              </h4>

              <EquationBox label="일반 형태" accent="orange">
                <Math tex={String.raw`\frac{T_{i+1,j} - 2T_{i,j} + T_{i-1,j}}{(\Delta x)^2} + \frac{T_{i,j+1} - 2T_{i,j} + T_{i,j-1}}{(\Delta y)^2} = 0`} display />
              </EquationBox>

              <div className="text-center text-gray-500 py-4">&darr; <Math tex="\beta = (\Delta x / \Delta y)^2" /> 정의</div>

              <EquationBox label="정리된 형태" accent="orange">
                <Math tex={String.raw`T_{i-1,j} + T_{i+1,j} + \beta(T_{i,j-1} + T_{i,j+1}) - 2(1+\beta)T_{i,j} = 0`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="정사각형 격자 권장" accent="yellow" icon="!">
              <p>
                <Math tex="\Delta x = \Delta y" /> (<Math tex="\beta = 1" />)인 정사각형 격자를 사용하면
                방정식이 단순해지고 계수가 대칭적이 됩니다. 특별한 이유가 없다면 정사각형 격자를 권장합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 열 생성이 있는 경우 */}
          <SectionDivider number="5" title="Internal Heat Generation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              내부 열 생성 <Math tex="\dot{q}" /> [W/m³]이 있는 경우, 제어 체적 내에서 생성되는 열이
              에너지 균형에 추가됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                열 생성을 포함한 에너지 균형
              </h4>

              <EquationBox label="에너지 균형 (열 생성 포함)" accent="purple">
                <Math tex={String.raw`\sum \dot{Q}_{conduction} + \dot{E}_{generation} = 0`} display />
              </EquationBox>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 mt-4">
                <p className="text-sm text-gray-400 mb-3">제어 체적 내 열 생성량:</p>
                <Math tex={String.raw`\dot{E}_{gen} = \dot{q} \cdot (\Delta x \cdot \Delta y \cdot 1)`} display />
              </div>

              <div className="text-center text-gray-500 py-4">&darr; 정사각형 격자, k=const</div>

              <EquationBox label="열 생성이 있는 내부 노드 방정식" accent="purple">
                <Math tex={String.raw`T_{i-1,j} + T_{i+1,j} + T_{i,j-1} + T_{i,j+1} - 4T_{i,j} + \frac{\dot{q}(\Delta x)^2}{k} = 0`} display />
              </EquationBox>

              <EquationBox label="온도 계산 공식" accent="purple">
                <Math tex={String.raw`T_{i,j} = \frac{1}{4}\left(T_{i-1,j} + T_{i+1,j} + T_{i,j-1} + T_{i,j+1} + \frac{\dot{q}(\Delta x)^2}{k}\right)`} display />
              </EquationBox>
            </div>
          </motion.div>

          {/* 6. 방정식 체계 */}
          <SectionDivider number="6" title="System of Equations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              각 내부 노드에서 하나의 방정식이 생성됩니다.
              N개의 미지수(내부 노드 온도)가 있으면 N개의 연립 방정식을 풀어야 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예시: 3x3 내부 노드
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-400 mb-4">
                    5x5 격자 (경계 포함)에서 내부 노드는 3x3 = 9개입니다.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; 미지수: <Math tex="T_{1,1}, T_{2,1}, T_{3,1}, \ldots, T_{3,3}" /> (9개)</li>
                    <li>&bull; 방정식: 각 내부 노드에서 1개씩 (9개)</li>
                    <li>&bull; 경계 노드: 경계조건에서 결정 (기지수)</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-1">
                    {Array.from({ length: 25 }).map((_, idx) => {
                      const i = idx % 5;
                      const j = NativeMath.floor(idx / 5);
                      const isBoundary = i === 0 || i === 4 || j === 0 || j === 4;
                      return (
                        <div
                          key={idx}
                          className={`w-10 h-10 rounded flex items-center justify-center text-xs ${
                            isBoundary
                              ? "bg-orange-500/30 text-orange-400 border border-orange-500/50"
                              : "bg-emerald-500/30 text-emerald-400 border border-emerald-500/50"
                          }`}
                        >
                          {isBoundary ? "BC" : `T${i}${4-j}`}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                행렬 형태
              </h4>

              <EquationBox label="선형 연립 방정식" accent="blue">
                <Math tex={String.raw`\mathbf{A} \cdot \mathbf{T} = \mathbf{b}`} display />
              </EquationBox>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <h5 className="text-sm font-bold text-blue-400 mb-2">A (계수 행렬)</h5>
                  <p className="text-xs text-gray-400">
                    N x N 행렬. 대각선 원소는 -4, 인접 노드에 해당하는 원소는 1.
                    희소 행렬(sparse matrix)로 대부분 0.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <h5 className="text-sm font-bold text-emerald-400 mb-2">T (미지수 벡터)</h5>
                  <p className="text-xs text-gray-400">
                    N x 1 벡터. 각 내부 노드의 온도 <Math tex="T_{i,j}" />를 일렬로 나열.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <h5 className="text-sm font-bold text-orange-400 mb-2">b (상수 벡터)</h5>
                  <p className="text-xs text-gray-400">
                    N x 1 벡터. 경계조건 온도와 열 생성 항. 경계 노드 온도가 포함됨.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="희소 행렬 (Sparse Matrix)" accent="blue" icon="S">
              <p>
                2-D 문제에서 계수 행렬 A는 <strong className="text-blue-300">희소 행렬</strong>입니다.
                각 행에서 최대 5개의 비영 원소만 존재합니다 (5점 스텐실).
                대규모 문제에서 이 희소성을 활용하면 메모리와 계산 시간을 크게 절약할 수 있습니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

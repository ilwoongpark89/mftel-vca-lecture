"use client";

import { motion } from "framer-motion";
import MathTex from "@/components/Math";
const Math = MathTex; // Alias to avoid conflict with native Math object
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

export default function FDMBasics() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Finite Difference Method Fundamentals
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Taylor 급수를 이용하여 미분을 차분으로 근사하는 유한 차분법의 수학적 기초를 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Taylor Series Expansion */}
          <SectionDivider number="1" title="Taylor Series Foundation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              유한 차분법의 핵심은 <strong className="text-white">Taylor 급수 전개</strong>입니다.
              함수 <Math tex="T(x)" />를 점 <Math tex="x_i" /> 근처에서 전개하면 인접한 점의 값을 표현할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Taylor Series Expansion
              </h4>

              <div className="space-y-4">
                <EquationBox label="Forward expansion: T(x_i + Δx)" accent="blue">
                  <Math tex={String.raw`T_{i+1} = T_i + \left.\frac{\partial T}{\partial x}\right|_i \Delta x + \left.\frac{\partial^2 T}{\partial x^2}\right|_i \frac{(\Delta x)^2}{2!} + \left.\frac{\partial^3 T}{\partial x^3}\right|_i \frac{(\Delta x)^3}{3!} + \cdots`} display />
                </EquationBox>

                <EquationBox label="Backward expansion: T(x_i - Δx)" accent="orange">
                  <Math tex={String.raw`T_{i-1} = T_i - \left.\frac{\partial T}{\partial x}\right|_i \Delta x + \left.\frac{\partial^2 T}{\partial x^2}\right|_i \frac{(\Delta x)^2}{2!} - \left.\frac{\partial^3 T}{\partial x^3}\right|_i \frac{(\Delta x)^3}{3!} + \cdots`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="표기법 (Notation)" accent="blue" icon="i">
              <p>
                <Math tex="T_i = T(x_i)" />: 격자점 <Math tex="i" />에서의 온도 값<br/>
                <Math tex="T_{i+1} = T(x_i + \Delta x)" />: 오른쪽 인접 점<br/>
                <Math tex="T_{i-1} = T(x_i - \Delta x)" />: 왼쪽 인접 점<br/>
                <Math tex="\Delta x" />: 격자 간격 (일정하다고 가정)
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. First Derivative Approximations */}
          <SectionDivider number="2" title="First Derivative Approximations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Taylor 급수를 조작하여 1차 미분 <Math tex="\partial T/\partial x" />를 근사하는 세 가지 방법을 유도합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
                <h4 className="text-sm font-bold text-orange-400 mb-3">Forward Difference</h4>
                <div className="text-center p-3 rounded-lg bg-slate-900/80 border border-slate-700 mb-3">
                  <Math tex={String.raw`\left.\frac{\partial T}{\partial x}\right|_i \approx \frac{T_{i+1} - T_i}{\Delta x}`} display />
                </div>
                <p className="text-xs text-gray-400 mb-2">Taylor 급수에서 유도:</p>
                <div className="text-xs text-gray-500 p-2 rounded bg-slate-800/50">
                  <Math tex={String.raw`T_{i+1} = T_i + \frac{\partial T}{\partial x}\Delta x + O(\Delta x^2)`} />
                </div>
                <p className="text-xs text-orange-300 mt-2">정확도: <Math tex="O(\Delta x)" /> (1차)</p>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <h4 className="text-sm font-bold text-emerald-400 mb-3">Backward Difference</h4>
                <div className="text-center p-3 rounded-lg bg-slate-900/80 border border-slate-700 mb-3">
                  <Math tex={String.raw`\left.\frac{\partial T}{\partial x}\right|_i \approx \frac{T_i - T_{i-1}}{\Delta x}`} display />
                </div>
                <p className="text-xs text-gray-400 mb-2">Taylor 급수에서 유도:</p>
                <div className="text-xs text-gray-500 p-2 rounded bg-slate-800/50">
                  <Math tex={String.raw`T_{i-1} = T_i - \frac{\partial T}{\partial x}\Delta x + O(\Delta x^2)`} />
                </div>
                <p className="text-xs text-emerald-300 mt-2">정확도: <Math tex="O(\Delta x)" /> (1차)</p>
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
                <h4 className="text-sm font-bold text-blue-400 mb-3">Central Difference</h4>
                <div className="text-center p-3 rounded-lg bg-slate-900/80 border border-slate-700 mb-3">
                  <Math tex={String.raw`\left.\frac{\partial T}{\partial x}\right|_i \approx \frac{T_{i+1} - T_{i-1}}{2\Delta x}`} display />
                </div>
                <p className="text-xs text-gray-400 mb-2">Forward - Backward:</p>
                <div className="text-xs text-gray-500 p-2 rounded bg-slate-800/50">
                  <Math tex={String.raw`T_{i+1} - T_{i-1} = 2\frac{\partial T}{\partial x}\Delta x + O(\Delta x^3)`} />
                </div>
                <p className="text-xs text-blue-300 mt-2">정확도: <Math tex="O(\Delta x^2)" /> (2차)</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Central Difference의 장점" accent="emerald" icon="*">
              <p>
                Central difference는 forward와 backward의 평균으로, <strong className="text-emerald-300">2차 정확도</strong>를 가집니다.
                같은 격자 간격에서 더 정확한 결과를 제공하므로, 가능한 경우 central difference를 사용합니다.
                단, 경계에서는 한쪽 방향의 점이 없어 forward 또는 backward를 사용해야 합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. Second Derivative Approximation */}
          <SectionDivider number="3" title="Second Derivative Approximation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열방정식의 핵심인 <strong className="text-white">2차 미분</strong> <Math tex="\partial^2 T/\partial x^2" />를
              유한 차분으로 근사합니다. Forward와 backward Taylor 급수를 더하면 홀수 차수 항이 상쇄됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                2차 미분의 중심 차분
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-3">Forward + Backward Taylor expansion:</p>
                  <Math tex={String.raw`T_{i+1} + T_{i-1} = 2T_i + \frac{\partial^2 T}{\partial x^2}(\Delta x)^2 + O(\Delta x^4)`} display />
                </div>

                <div className="text-center text-gray-500 py-2">&darr; 2차 미분에 대해 정리</div>

                <EquationBox label="Central Difference for Second Derivative" accent="blue">
                  <Math tex={String.raw`\left.\frac{\partial^2 T}{\partial x^2}\right|_i \approx \frac{T_{i+1} - 2T_i + T_{i-1}}{(\Delta x)^2}`} display />
                </EquationBox>

                <div className="text-center p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                  <p className="text-sm text-gray-400">정확도: <Math tex="O(\Delta x^2)" /> (2차)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="2차원으로 확장" accent="blue" icon="2D">
              <p>
                y 방향에 대해서도 같은 방식으로 적용합니다:
              </p>
              <div className="mt-3 p-3 rounded-lg bg-slate-800/50 text-center">
                <Math tex={String.raw`\left.\frac{\partial^2 T}{\partial y^2}\right|_j \approx \frac{T_{j+1} - 2T_j + T_{j-1}}{(\Delta y)^2}`} display />
              </div>
            </InsightCard>
          </motion.div>

          {/* 4. Laplacian Approximation */}
          <SectionDivider number="4" title="Laplacian in 2-D" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              2차원 정상상태 열방정식 (Laplace 방정식)의 Laplacian <Math tex="\nabla^2 T" />를
              유한 차분으로 근사합니다. 2차원에서 노드 표기는 <Math tex="T_{i,j}" />를 사용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                2-D Laplacian의 유한 차분 근사
              </h4>

              <div className="space-y-4">
                <EquationBox label="Laplace's Equation" accent="orange">
                  <Math tex={String.raw`\nabla^2 T = \frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = 0`} display />
                </EquationBox>

                <div className="text-center text-gray-500 py-2">&darr; 각 2차 미분에 central difference 적용</div>

                <EquationBox label="유한 차분 형태" accent="blue">
                  <Math tex={String.raw`\frac{T_{i+1,j} - 2T_{i,j} + T_{i-1,j}}{(\Delta x)^2} + \frac{T_{i,j+1} - 2T_{i,j} + T_{i,j-1}}{(\Delta y)^2} = 0`} display />
                </EquationBox>

                <div className="text-center text-gray-500 py-2">&darr; <Math tex="\Delta x = \Delta y" /> 인 경우 (정사각형 격자)</div>

                <EquationBox label="Interior Node Equation (정사각형 격자)" accent="emerald">
                  <Math tex={String.raw`T_{i+1,j} + T_{i-1,j} + T_{i,j+1} + T_{i,j-1} - 4T_{i,j} = 0`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                핵심 결과: 내부 노드 방정식
              </h4>

              <EquationBox label="Interior Node Temperature" accent="emerald">
                <Math tex={String.raw`T_{i,j} = \frac{1}{4}\left(T_{i+1,j} + T_{i-1,j} + T_{i,j+1} + T_{i,j-1}\right)`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 mt-6 text-center">
                내부 노드의 온도는 <strong className="text-emerald-300">4개 인접 노드의 산술 평균</strong>입니다.
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="5점 스텐실 (Five-Point Stencil)" accent="purple" icon="5">
              <p className="mb-3">
                내부 노드 방정식은 중심 노드와 동서남북 4개 인접 노드를 사용합니다.
                이를 <strong className="text-purple-300">5점 스텐실</strong>이라고 합니다.
              </p>
              <div className="grid grid-cols-3 gap-1 w-32 mx-auto text-center text-xs">
                <div className="p-2"></div>
                <div className="p-2 bg-blue-500/20 rounded text-blue-400"><Math tex="T_{i,j+1}" /></div>
                <div className="p-2"></div>
                <div className="p-2 bg-blue-500/20 rounded text-blue-400"><Math tex="T_{i-1,j}" /></div>
                <div className="p-2 bg-emerald-500/30 rounded text-emerald-400 font-bold"><Math tex="T_{i,j}" /></div>
                <div className="p-2 bg-blue-500/20 rounded text-blue-400"><Math tex="T_{i+1,j}" /></div>
                <div className="p-2"></div>
                <div className="p-2 bg-blue-500/20 rounded text-blue-400"><Math tex="T_{i,j-1}" /></div>
                <div className="p-2"></div>
              </div>
            </InsightCard>
          </motion.div>

          {/* 5. Grid Setup */}
          <SectionDivider number="5" title="Grid Setup" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              수치 해석의 첫 단계는 계산 영역을 <strong className="text-white">격자(Grid)</strong>로 이산화하는 것입니다.
              격자의 설정이 해의 정확도와 계산 비용에 큰 영향을 미칩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                격자 정의
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-400 mb-4">
                    직사각형 영역 <Math tex="0 \le x \le L_x" />, <Math tex="0 \le y \le L_y" />를 균일 격자로 나눕니다.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>&bull; x 방향 노드 수: <Math tex="M+1" /> (인덱스 <Math tex="i = 0, 1, \ldots, M" />)</p>
                    <p>&bull; y 방향 노드 수: <Math tex="N+1" /> (인덱스 <Math tex="j = 0, 1, \ldots, N" />)</p>
                    <p>&bull; 격자 간격: <Math tex="\Delta x = L_x / M" />, <Math tex="\Delta y = L_y / N" /></p>
                    <p>&bull; 노드 위치: <Math tex="x_i = i \cdot \Delta x" />, <Math tex="y_j = j \cdot \Delta y" /></p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Grid visualization */}
                    <div className="grid grid-cols-5 gap-1">
                      {Array.from({ length: 25 }).map((_, idx) => {
                        const i = idx % 5;
                        const j = NativeMath.floor(idx / 5);
                        const isBoundary = i === 0 || i === 4 || j === 0 || j === 4;
                        return (
                          <div
                            key={idx}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                              isBoundary
                                ? "bg-orange-500/30 text-orange-400"
                                : "bg-blue-500/30 text-blue-400"
                            }`}
                          >
                            {i},{4-j}
                          </div>
                        );
                      })}
                    </div>
                    <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-gray-500">
                      x (i) &rarr;
                    </div>
                    <div className="absolute -left-8 top-0 bottom-0 flex items-center">
                      <span className="text-xs text-gray-500 transform -rotate-90">y (j) &uarr;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <InsightCard title="내부 노드 (Interior Nodes)" accent="blue" icon="I">
                <p>
                  경계가 아닌 모든 노드. 미지 온도를 구해야 하는 노드입니다.
                  <Math tex="1 \le i \le M-1" />, <Math tex="1 \le j \le N-1" />
                </p>
              </InsightCard>

              <InsightCard title="경계 노드 (Boundary Nodes)" accent="orange" icon="B">
                <p>
                  영역의 가장자리에 위치한 노드. 경계조건에 의해 온도가 지정되거나
                  특별한 방정식이 적용됩니다.
                </p>
              </InsightCard>
            </div>
          </motion.div>

          {/* 6. Truncation Error */}
          <SectionDivider number="6" title="Truncation Error" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              유한 차분은 Taylor 급수의 고차 항을 무시한 근사입니다.
              무시된 항들이 <strong className="text-white">절단 오차 (Truncation Error)</strong>를 발생시킵니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                절단 오차의 차수
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Approximation</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Formula</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Truncation Error</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">Forward (1st deriv)</td>
                      <td className="py-3 px-4"><Math tex="(T_{i+1} - T_i)/\Delta x" /></td>
                      <td className="py-3 px-4"><Math tex="O(\Delta x)" /> - 1차 정확도</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-emerald-400">Backward (1st deriv)</td>
                      <td className="py-3 px-4"><Math tex="(T_i - T_{i-1})/\Delta x" /></td>
                      <td className="py-3 px-4"><Math tex="O(\Delta x)" /> - 1차 정확도</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-blue-400">Central (1st deriv)</td>
                      <td className="py-3 px-4"><Math tex="(T_{i+1} - T_{i-1})/(2\Delta x)" /></td>
                      <td className="py-3 px-4"><Math tex="O(\Delta x^2)" /> - 2차 정확도</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-purple-400">Central (2nd deriv)</td>
                      <td className="py-3 px-4"><Math tex="(T_{i+1} - 2T_i + T_{i-1})/(\Delta x)^2" /></td>
                      <td className="py-3 px-4"><Math tex="O(\Delta x^2)" /> - 2차 정확도</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="격자 정밀화 (Grid Refinement)" accent="yellow" icon="!">
              <p>
                <strong className="text-yellow-300">격자 간격 <Math tex="\Delta x" />를 줄이면 절단 오차가 감소</strong>합니다.<br/>
                2차 정확도인 경우: <Math tex="\Delta x" />를 반으로 줄이면 오차가 1/4로 감소<br/>
                그러나 노드 수가 증가하여 계산 비용도 증가합니다. 정확도와 효율의 균형이 중요합니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

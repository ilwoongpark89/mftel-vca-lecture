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
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
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

export default function NumericalExamples() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            Part 6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Numerical Examples
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            유한 차분법을 적용하여 2차원 정상상태 전도 문제를 단계별로 해결합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 예제 1: 간단한 정사각형 판 */}
          <SectionDivider number="1" title="Example 1: Square Plate with Fixed Boundaries" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                문제
              </h4>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-gray-400 text-sm">
                  <p className="mb-4">
                    정사각형 금속판 (1m x 1m)의 정상상태 온도 분포를 구하시오.
                  </p>
                  <ul className="space-y-2">
                    <li>&bull; 위쪽 경계: <Math tex="T = 100" />°C</li>
                    <li>&bull; 아래쪽 경계: <Math tex="T = 0" />°C</li>
                    <li>&bull; 왼쪽 경계: <Math tex="T = 0" />°C</li>
                    <li>&bull; 오른쪽 경계: <Math tex="T = 0" />°C</li>
                    <li>&bull; 내부 열 생성 없음</li>
                    <li>&bull; 격자: 5x5 (내부 노드 3x3)</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Grid visualization */}
                    <div className="grid grid-cols-5 gap-1">
                      {Array.from({ length: 25 }).map((_, idx) => {
                        const i = idx % 5;
                        const j = 4 - NativeMath.floor(idx / 5);
                        let temp = "?";
                        let bgClass = "bg-emerald-500/30 text-emerald-300";

                        if (j === 4) { // 위
                          temp = "100";
                          bgClass = "bg-red-500/30 text-red-300";
                        } else if (j === 0 || i === 0 || i === 4) { // 아래, 왼쪽, 오른쪽
                          temp = "0";
                          bgClass = "bg-blue-500/30 text-blue-300";
                        }

                        return (
                          <div
                            key={idx}
                            className={`w-10 h-10 rounded flex items-center justify-center text-xs font-mono ${bgClass}`}
                          >
                            {temp}
                          </div>
                        );
                      })}
                    </div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-red-400">
                      T = 100°C
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-blue-400">
                      T = 0°C
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                풀이 Step 1: 노드 방정식 설정
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                내부 노드 9개에 대해 방정식을 작성합니다. 노드 번호를 (i, j)로 표시합니다.
              </p>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-emerald-400 font-bold mb-2">노드 (1,1):</p>
                  <Math tex={String.raw`T_{0,1} + T_{2,1} + T_{1,0} + T_{1,2} - 4T_{1,1} = 0`} display />
                  <Math tex={String.raw`0 + T_{2,1} + 0 + T_{1,2} - 4T_{1,1} = 0`} display />
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-emerald-400 font-bold mb-2">노드 (2,1):</p>
                  <Math tex={String.raw`T_{1,1} + T_{3,1} + 0 + T_{2,2} - 4T_{2,1} = 0`} display />
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-emerald-400 font-bold mb-2">노드 (3,1):</p>
                  <Math tex={String.raw`T_{2,1} + 0 + 0 + T_{3,2} - 4T_{3,1} = 0`} display />
                </div>
                <p className="text-xs text-gray-500 text-center">... (나머지 6개 노드도 유사하게)</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                풀이 Step 2: 행렬 형태
              </h4>
              <div className="overflow-x-auto">
                <Math tex={String.raw`\begin{bmatrix} -4 & 1 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\ 1 & -4 & 1 & 0 & 1 & 0 & 0 & 0 & 0 \\ 0 & 1 & -4 & 0 & 0 & 1 & 0 & 0 & 0 \\ 1 & 0 & 0 & -4 & 1 & 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 1 & -4 & 1 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 1 & -4 & 0 & 0 & 1 \\ 0 & 0 & 0 & 1 & 0 & 0 & -4 & 1 & 0 \\ 0 & 0 & 0 & 0 & 1 & 0 & 1 & -4 & 1 \\ 0 & 0 & 0 & 0 & 0 & 1 & 0 & 1 & -4 \end{bmatrix} \begin{bmatrix} T_{1,1} \\ T_{2,1} \\ T_{3,1} \\ T_{1,2} \\ T_{2,2} \\ T_{3,2} \\ T_{1,3} \\ T_{2,3} \\ T_{3,3} \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ -100 \\ -100 \\ -100 \end{bmatrix}`} display />
              </div>
              <p className="text-sm text-gray-400 mt-4 text-center">
                경계 온도 100°C가 상수 벡터 b에 포함됨
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                풀이 Step 3: Gauss-Seidel 반복
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="py-2 px-3 text-gray-400 font-medium">Iter</th>
                      <th className="py-2 px-3 text-gray-400 font-medium"><Math tex="T_{1,1}" /></th>
                      <th className="py-2 px-3 text-gray-400 font-medium"><Math tex="T_{2,1}" /></th>
                      <th className="py-2 px-3 text-gray-400 font-medium"><Math tex="T_{3,1}" /></th>
                      <th className="py-2 px-3 text-gray-400 font-medium"><Math tex="T_{1,2}" /></th>
                      <th className="py-2 px-3 text-gray-400 font-medium"><Math tex="T_{2,2}" /></th>
                      <th className="py-2 px-3 text-gray-400 font-medium"><Math tex="T_{3,2}" /></th>
                      <th className="py-2 px-3 text-gray-400 font-medium"><Math tex="T_{1,3}" /></th>
                      <th className="py-2 px-3 text-gray-400 font-medium"><Math tex="T_{2,3}" /></th>
                      <th className="py-2 px-3 text-gray-400 font-medium"><Math tex="T_{3,3}" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300 font-mono text-xs">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3 text-emerald-400">0</td>
                      <td className="py-2 px-3">25.0</td>
                      <td className="py-2 px-3">25.0</td>
                      <td className="py-2 px-3">25.0</td>
                      <td className="py-2 px-3">25.0</td>
                      <td className="py-2 px-3">25.0</td>
                      <td className="py-2 px-3">25.0</td>
                      <td className="py-2 px-3">25.0</td>
                      <td className="py-2 px-3">25.0</td>
                      <td className="py-2 px-3">25.0</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3 text-emerald-400">1</td>
                      <td className="py-2 px-3">12.5</td>
                      <td className="py-2 px-3">15.6</td>
                      <td className="py-2 px-3">10.2</td>
                      <td className="py-2 px-3">18.8</td>
                      <td className="py-2 px-3">23.4</td>
                      <td className="py-2 px-3">15.2</td>
                      <td className="py-2 px-3">35.9</td>
                      <td className="py-2 px-3">43.0</td>
                      <td className="py-2 px-3">29.1</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3 text-emerald-400">5</td>
                      <td className="py-2 px-3">9.3</td>
                      <td className="py-2 px-3">12.5</td>
                      <td className="py-2 px-3">9.3</td>
                      <td className="py-2 px-3">18.7</td>
                      <td className="py-2 px-3">25.0</td>
                      <td className="py-2 px-3">18.7</td>
                      <td className="py-2 px-3">40.6</td>
                      <td className="py-2 px-3">50.0</td>
                      <td className="py-2 px-3">40.6</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-emerald-400 font-bold">Conv</td>
                      <td className="py-2 px-3 text-emerald-300 font-bold">9.4</td>
                      <td className="py-2 px-3 text-emerald-300 font-bold">12.5</td>
                      <td className="py-2 px-3 text-emerald-300 font-bold">9.4</td>
                      <td className="py-2 px-3 text-emerald-300 font-bold">18.8</td>
                      <td className="py-2 px-3 text-emerald-300 font-bold">25.0</td>
                      <td className="py-2 px-3 text-emerald-300 font-bold">18.8</td>
                      <td className="py-2 px-3 text-emerald-300 font-bold">40.6</td>
                      <td className="py-2 px-3 text-emerald-300 font-bold">50.0</td>
                      <td className="py-2 px-3 text-emerald-300 font-bold">40.6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                약 10회 반복 후 <Math tex="\epsilon = 0.01" />으로 수렴
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="대칭성 확인" accent="emerald" icon="S">
              <p>
                문제의 대칭성으로 인해 <Math tex="T_{1,1} = T_{3,1}" />, <Math tex="T_{1,2} = T_{3,2}" />,
                <Math tex="T_{1,3} = T_{3,3}" />입니다. 대칭성을 이용하면 계산해야 할 미지수를 줄일 수 있습니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 예제 2: 대류 경계 */}
          <SectionDivider number="2" title="Example 2: Plate with Convection" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                문제
              </h4>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-gray-400 text-sm">
                  <p className="mb-4">
                    직사각형 판의 오른쪽 면이 대류 열전달에 노출되어 있다.
                  </p>
                  <ul className="space-y-2">
                    <li>&bull; 왼쪽 경계: <Math tex="T = 200" />°C</li>
                    <li>&bull; 위/아래: 단열</li>
                    <li>&bull; 오른쪽: 대류 (<Math tex="h = 50" /> W/m²K, <Math tex="T_\infty = 25" />°C)</li>
                    <li>&bull; <Math tex="k = 10" /> W/mK</li>
                    <li>&bull; 격자 간격: <Math tex="\Delta x = 0.1" /> m</li>
                    <li>&bull; 격자: 4x3 (내부 노드 2x1, 경계 노드 포함)</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="grid grid-cols-4 gap-1">
                      {["200", "T₁", "T₂", "Tₛ"].map((temp, i) => (
                        <div
                          key={i}
                          className={`w-14 h-14 rounded flex items-center justify-center text-xs font-mono ${
                            i === 0 ? "bg-red-500/30 text-red-300" :
                            i === 3 ? "bg-blue-500/30 text-blue-300" :
                            "bg-emerald-500/30 text-emerald-300"
                          }`}
                        >
                          {temp}
                        </div>
                      ))}
                    </div>
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs text-red-400">
                      T=200°C
                    </div>
                    <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-xs text-blue-400">
                      h, <Math tex="T_\infty" />
                    </div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">
                      Insulated
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">
                      Insulated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                풀이
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-blue-400 font-bold mb-2">Step 1: Biot 수 계산</p>
                  <Math tex={String.raw`Bi = \frac{h \cdot \Delta x}{k} = \frac{50 \times 0.1}{10} = 0.5`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-blue-400 font-bold mb-2">Step 2: 노드 방정식</p>
                  <p className="text-sm text-gray-400 mb-2">내부 노드 <Math tex="T_1" /> (단열 상/하):</p>
                  <Math tex={String.raw`2 \cdot 200 + 2T_2 - 4T_1 = 0 \quad \Rightarrow \quad T_2 - 2T_1 = -200`} display />

                  <p className="text-sm text-gray-400 mb-2 mt-4">내부 노드 <Math tex="T_2" /> (단열 상/하):</p>
                  <Math tex={String.raw`2T_1 + 2T_s - 4T_2 = 0 \quad \Rightarrow \quad T_1 + T_s - 2T_2 = 0`} display />

                  <p className="text-sm text-gray-400 mb-2 mt-4">표면 노드 <Math tex="T_s" /> (대류, 단열 상/하):</p>
                  <Math tex={String.raw`2T_2 + 2Bi \cdot T_\infty - 2(1+Bi)T_s = 0`} display />
                  <Math tex={String.raw`2T_2 + 2(0.5)(25) - 2(1.5)T_s = 0 \quad \Rightarrow \quad T_2 + 12.5 - 1.5T_s = 0`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-blue-400 font-bold mb-2">Step 3: 연립방정식 풀이</p>
                  <div className="overflow-x-auto">
                    <Math tex={String.raw`\begin{cases} -2T_1 + T_2 = -200 \\ T_1 - 2T_2 + T_s = 0 \\ T_2 - 1.5T_s = -12.5 \end{cases}`} display />
                  </div>
                </div>

                <EquationBox label="해" accent="blue">
                  <Math tex={String.raw`T_1 = 156.3°\text{C}, \quad T_2 = 112.5°\text{C}, \quad T_s = 83.3°\text{C}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="열유속 계산" accent="blue" icon="q">
              <p>
                대류 표면에서 열유속:
              </p>
              <div className="mt-2 p-2 rounded bg-slate-800/50 text-center">
                <Math tex={String.raw`q'' = h(T_s - T_\infty) = 50(83.3 - 25) = 2915 \text{ W/m}^2`} />
              </div>
              <p className="mt-2 text-xs">
                또는 왼쪽 경계에서 전도로 계산하여 검증할 수 있습니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 예제 3: 열 생성 */}
          <SectionDivider number="3" title="Example 3: Internal Heat Generation" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                문제
              </h4>
              <div className="text-gray-400 text-sm mb-6">
                <p className="mb-4">
                  정사각형 연료봉 단면 (0.1m x 0.1m)에서 균일한 열 생성이 있다.
                  네 면 모두 일정 온도 <Math tex="T_s = 100" />°C로 유지된다.
                </p>
                <ul className="space-y-2">
                  <li>&bull; 열 생성률: <Math tex="\dot{q} = 10^6" /> W/m³</li>
                  <li>&bull; 열전도도: <Math tex="k = 20" /> W/mK</li>
                  <li>&bull; 격자: 5x5 (내부 노드 3x3)</li>
                  <li>&bull; <Math tex="\Delta x = \Delta y = 0.025" /> m</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                풀이
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-purple-400 font-bold mb-2">Step 1: 소스 항 계산</p>
                  <Math tex={String.raw`\frac{\dot{q}(\Delta x)^2}{k} = \frac{10^6 \times (0.025)^2}{20} = 31.25°\text{C}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-purple-400 font-bold mb-2">Step 2: 내부 노드 방정식</p>
                  <p className="text-sm text-gray-400 mb-2">열 생성이 있는 내부 노드:</p>
                  <Math tex={String.raw`T_{i-1,j} + T_{i+1,j} + T_{i,j-1} + T_{i,j+1} - 4T_{i,j} + 31.25 = 0`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-purple-400 font-bold mb-2">Step 3: 대칭성 활용</p>
                  <p className="text-sm text-gray-400 mb-2">
                    4중 대칭으로 인해 중앙 노드 <Math tex="T_c" />와 모서리 인접 노드 <Math tex="T_e" />만 미지수:
                  </p>
                  <div className="grid grid-cols-3 gap-1 w-32 mx-auto text-center text-xs font-mono mt-4">
                    <div className="p-2 bg-blue-500/30 text-blue-300 rounded">100</div>
                    <div className="p-2 bg-blue-500/30 text-blue-300 rounded">100</div>
                    <div className="p-2 bg-blue-500/30 text-blue-300 rounded">100</div>
                    <div className="p-2 bg-blue-500/30 text-blue-300 rounded">100</div>
                    <div className="p-2 bg-purple-500/30 text-purple-300 rounded"><Math tex="T_c" /></div>
                    <div className="p-2 bg-blue-500/30 text-blue-300 rounded">100</div>
                    <div className="p-2 bg-blue-500/30 text-blue-300 rounded">100</div>
                    <div className="p-2 bg-blue-500/30 text-blue-300 rounded">100</div>
                    <div className="p-2 bg-blue-500/30 text-blue-300 rounded">100</div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">1개 내부 노드만 고려 (3x3 대칭)</p>
                </div>

                <EquationBox label="중앙 노드 방정식 (간략화)" accent="purple">
                  <Math tex={String.raw`4 \times 100 - 4T_c + 31.25 = 0 \quad \Rightarrow \quad T_c = 107.8°\text{C}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="해석해와 비교" accent="purple" icon="A">
              <p>
                정사각형 단면의 중심 최고 온도 해석해:
              </p>
              <div className="mt-2 p-2 rounded bg-slate-800/50 text-center">
                <Math tex={String.raw`T_{max} = T_s + 0.295 \frac{\dot{q}L^2}{k} = 100 + 0.295 \times \frac{10^6 \times 0.1^2}{20} = 114.75°\text{C}`} />
              </div>
              <p className="mt-2 text-xs">
                수치해 107.8°C는 격자가 거친 탓에 해석해보다 낮습니다. 격자를 정밀화하면 해석해에 수렴합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 예제 4: 모서리 노드 */}
          <SectionDivider number="4" title="Example 4: L-Shaped Region" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                문제
              </h4>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-gray-400 text-sm">
                  <p className="mb-4">
                    L자형 단면을 가진 구조물의 2-D 정상상태 온도 분포를 구하시오.
                  </p>
                  <ul className="space-y-2">
                    <li>&bull; 내부 면: <Math tex="T = 300" />°C</li>
                    <li>&bull; 외부 면: 대류 (<Math tex="h = 100" /> W/m²K, <Math tex="T_\infty = 50" />°C)</li>
                    <li>&bull; <Math tex="k = 15" /> W/mK</li>
                    <li>&bull; <Math tex="\Delta x = \Delta y = 0.05" /> m</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  {/* L-shape visualization */}
                  <div className="relative">
                    <div className="grid grid-cols-4 gap-1">
                      {/* Top row - empty + 3 filled */}
                      <div className="w-10 h-10"></div>
                      <div className="w-10 h-10 bg-red-500/30 rounded"></div>
                      <div className="w-10 h-10 bg-emerald-500/30 rounded"></div>
                      <div className="w-10 h-10 bg-blue-500/30 rounded"></div>
                      {/* Second row - 4 filled */}
                      <div className="w-10 h-10 bg-red-500/30 rounded"></div>
                      <div className="w-10 h-10 bg-emerald-500/30 rounded text-xs flex items-center justify-center text-emerald-300">1</div>
                      <div className="w-10 h-10 bg-emerald-500/30 rounded text-xs flex items-center justify-center text-emerald-300">2</div>
                      <div className="w-10 h-10 bg-blue-500/30 rounded"></div>
                      {/* Bottom row - 4 filled */}
                      <div className="w-10 h-10 bg-red-500/30 rounded"></div>
                      <div className="w-10 h-10 bg-emerald-500/30 rounded text-xs flex items-center justify-center text-emerald-300">3</div>
                      <div className="w-10 h-10 bg-emerald-500/30 rounded text-xs flex items-center justify-center text-emerald-300">4</div>
                      <div className="w-10 h-10 bg-blue-500/30 rounded"></div>
                    </div>
                    <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-xs text-red-400">
                      T=300°C
                    </div>
                    <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-xs text-blue-400">
                      h, <Math tex="T_\infty" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                <strong className="text-orange-300">핵심:</strong> 내부 모서리 노드(노드 1)에서 특별한 방정식이 필요합니다.
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                풀이 요점
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-orange-400 font-bold mb-2">Biot 수</p>
                  <Math tex={String.raw`Bi = \frac{h \cdot \Delta x}{k} = \frac{100 \times 0.05}{15} = 0.333`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-orange-400 font-bold mb-2">내부 모서리 노드 1 방정식</p>
                  <Math tex={String.raw`2(T_{left} + T_{up}) + T_{right} + T_{down} + 2Bi \cdot T_\infty - 2(3 + Bi)T_1 = 0`} display />
                  <Math tex={String.raw`2(300 + 300) + T_2 + T_3 + 2(0.333)(50) - 2(3.333)T_1 = 0`} display />
                  <Math tex={String.raw`1200 + T_2 + T_3 + 33.3 - 6.67T_1 = 0`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-orange-400 font-bold mb-2">일반 대류 표면 노드 (노드 2, 4)</p>
                  <Math tex={String.raw`2T_{interior} + T_{up} + T_{down} + 2Bi \cdot T_\infty - 2(2 + Bi)T = 0`} display />
                </div>
              </div>

              <p className="text-sm text-gray-400 mt-6 text-center">
                4개의 연립방정식을 Gauss-Seidel로 풀어 <Math tex="T_1, T_2, T_3, T_4" />를 구합니다.
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="문제 풀이 전략 요약" accent="yellow" icon="*">
              <ol className="space-y-2 mt-2">
                <li>1. <strong className="text-yellow-300">격자 설정:</strong> 영역 형상에 맞게 노드 배치</li>
                <li>2. <strong className="text-yellow-300">노드 유형 분류:</strong> 내부, 표면, 모서리, 등온 구분</li>
                <li>3. <strong className="text-yellow-300">방정식 작성:</strong> 각 노드 유형에 맞는 에너지 균형 적용</li>
                <li>4. <strong className="text-yellow-300">반복 풀이:</strong> Gauss-Seidel 또는 행렬 직접 풀이</li>
                <li>5. <strong className="text-yellow-300">결과 검증:</strong> 대칭성, 경계조건, 에너지 균형 확인</li>
              </ol>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

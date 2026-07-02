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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "orange",
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
  accent = "orange",
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
  const c = colors[accent] || colors.orange;
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

export default function BoundaryNodes() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Treatment of Boundary Conditions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            다양한 경계조건(등온, 단열, 대류)에서 경계 노드의 유한 차분 방정식을 유도합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 경계조건 유형 */}
          <SectionDivider number="1" title="Types of Boundary Conditions" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열전달 문제의 경계조건은 크게 세 가지 유형으로 분류됩니다.
              각 유형에 따라 경계 노드의 처리 방법이 달라집니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <h4 className="text-sm font-bold text-red-400 mb-3">1종 (Dirichlet)</h4>
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">지정 온도</strong>
                </p>
                <div className="text-center p-2 rounded bg-slate-900/80 border border-slate-700">
                  <Math tex="T_{boundary} = T_s" />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  경계 노드 온도가 직접 주어짐. 가장 간단한 경우.
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <h4 className="text-sm font-bold text-emerald-400 mb-3">2종 (Neumann)</h4>
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">지정 열유속</strong>
                </p>
                <div className="text-center p-2 rounded bg-slate-900/80 border border-slate-700">
                  <Math tex={String.raw`-k\frac{\partial T}{\partial n} = q''_s`} />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  단열 (<Math tex="q''_s = 0" />)이 특수한 경우.
                </p>
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
                <h4 className="text-sm font-bold text-blue-400 mb-3">3종 (Robin/Mixed)</h4>
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">대류 경계</strong>
                </p>
                <div className="text-center p-2 rounded bg-slate-900/80 border border-slate-700">
                  <Math tex={String.raw`-k\frac{\partial T}{\partial n} = h(T_s - T_\infty)`} />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  가장 일반적인 실제 경계조건.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. 등온 경계 (1종) */}
          <SectionDivider number="2" title="Prescribed Temperature (Dirichlet)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              경계 온도가 지정된 경우, 해당 노드의 온도는 미지수가 아닙니다.
              방정식 체계에서 기지수로 처리됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                등온 경계 처리
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-400 mb-4">
                    왼쪽 경계 (i=0)가 <Math tex="T_s" />로 고정된 경우:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; <Math tex="T_{0,j} = T_s" /> (모든 j에 대해)</li>
                    <li>&bull; 경계 노드는 미지수가 아님</li>
                    <li>&bull; 인접 내부 노드 방정식에서 <Math tex="T_s" />를 대입</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-2">예: 노드 (1, j)의 방정식</p>
                  <Math tex={String.raw`T_s + T_{2,j} + T_{1,j-1} + T_{1,j+1} - 4T_{1,j} = 0`} display />
                  <p className="text-xs text-gray-500 mt-2">
                    <Math tex="T_{0,j} = T_s" />가 상수 항으로 이동
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. 단열 경계 (2종, q=0) */}
          <SectionDivider number="3" title="Insulated (Adiabatic) Boundary" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              단열 경계에서는 열유속이 0입니다. 이는 온도 구배가 0임을 의미하며,
              <strong className="text-white">&quot;가상 노드&quot; (Fictitious Node)</strong> 기법으로 처리합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                단열 경계 처리 (가상 노드 방법)
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-3">왼쪽 경계 (i=0)가 단열인 경우:</p>
                  <Math tex={String.raw`\left.\frac{\partial T}{\partial x}\right|_{i=0} = 0 \quad \Rightarrow \quad \frac{T_{1,j} - T_{-1,j}}{2\Delta x} = 0`} display />
                </div>

                <div className="text-center text-gray-500 py-2">&darr; 가상 노드 <Math tex="T_{-1,j}" />에 대해 풀면</div>

                <EquationBox label="가상 노드 관계" accent="emerald">
                  <Math tex={String.raw`T_{-1,j} = T_{1,j}`} display />
                </EquationBox>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-3">경계 노드 (0, j)의 에너지 균형에 대입:</p>
                  <Math tex={String.raw`T_{-1,j} + T_{1,j} + T_{0,j-1} + T_{0,j+1} - 4T_{0,j} = 0`} display />
                </div>

                <div className="text-center text-gray-500 py-2">&darr; <Math tex="T_{-1,j} = T_{1,j}" /> 대입</div>

                <EquationBox label="단열 경계 노드 방정식" accent="emerald">
                  <Math tex={String.raw`2T_{1,j} + T_{0,j-1} + T_{0,j+1} - 4T_{0,j} = 0`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="물리적 해석: 대칭면" accent="emerald" icon="S">
              <p>
                단열 경계는 <strong className="text-emerald-300">대칭면(symmetry plane)</strong>과 동일합니다.
                온도 분포가 경계를 기준으로 거울 대칭이면 경계에서 열유속은 0입니다.
                따라서 대칭을 이용하여 계산 영역을 절반으로 줄일 수 있습니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. 대류 경계 (3종) */}
          <SectionDivider number="4" title="Convection Boundary" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              대류 경계에서는 고체 표면과 주변 유체 사이에 열전달이 발생합니다.
              에너지 균형을 통해 경계 노드 방정식을 유도합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                대류 경계 노드 (표면 노드)
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-400 mb-4">
                    왼쪽 경계 (i=0)에 대류가 있는 경우의 제어 체적:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; 제어 체적의 x 방향 크기: <Math tex="\Delta x / 2" /> (반쪽)</li>
                    <li>&bull; 왼쪽 면: 대류 열전달</li>
                    <li>&bull; 오른쪽 면: 내부 노드로 전도</li>
                    <li>&bull; 상/하 면: 인접 경계 노드로 전도</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-40 border-2 border-dashed border-blue-500/50 rounded-r-lg relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/50"></div>
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 text-xs text-blue-400">
                        h, <Math tex="T_\infty" />
                      </div>
                      <div className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">
                        0,j
                      </div>
                      <div className="absolute top-1/2 right-2 -translate-y-1/2 w-4 h-4 bg-emerald-500/50 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-gray-500">
                      <Math tex="\Delta x / 2" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700">
                  <p className="text-sm text-gray-400 mb-3">에너지 균형 (노드 0, j):</p>
                  <Math tex={String.raw`h(\Delta y \cdot 1)(T_\infty - T_{0,j}) + k\frac{\Delta y}{2}\frac{T_{0,j-1} - T_{0,j}}{\Delta y} + k\frac{\Delta y}{2}\frac{T_{0,j+1} - T_{0,j}}{\Delta y} + k(\Delta y \cdot 1)\frac{T_{1,j} - T_{0,j}}{\Delta x} = 0`} display />
                </div>

                <div className="text-center text-gray-500 py-2">&darr; <Math tex="\Delta x = \Delta y" />, Biot 수 정의: <Math tex="Bi = h\Delta x / k" /></div>

                <EquationBox label="대류 경계 노드 방정식 (왼쪽 표면)" accent="blue">
                  <Math tex={String.raw`2T_{1,j} + T_{0,j-1} + T_{0,j+1} + 2Bi \cdot T_\infty - 2(2 + Bi)T_{0,j} = 0`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="격자 Biot 수" accent="blue" icon="Bi">
              <p>
                <Math tex="Bi = h\Delta x / k" />는 <strong className="text-blue-300">격자 Biot 수</strong>입니다.
                대류 열저항 대비 격자 내 전도 열저항의 비율을 나타냅니다.
                <Math tex="Bi" />가 클수록 대류의 영향이 크고, <Math tex="Bi \to 0" />이면 단열에 가까워집니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 외부 모서리 노드 */}
          <SectionDivider number="5" title="External Corner Node" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              외부 모서리에서는 두 면이 외부에 노출됩니다.
              제어 체적의 크기가 <Math tex="(\Delta x / 2) \times (\Delta y / 2)" />로 더 작아집니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                외부 모서리 (대류)
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 border-2 border-dashed border-orange-500/50 rounded-br-lg relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500/50"></div>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500/50"></div>
                      <div className="absolute top-4 left-4 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-xs text-white">
                        0,N
                      </div>
                      <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-xs text-orange-400">
                        h, <Math tex="T_\infty" />
                      </div>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-orange-400">
                        h, <Math tex="T_\infty" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-4">
                    왼쪽 위 모서리 (0, N)의 에너지 균형:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; 왼쪽 면: 대류 (<Math tex="\Delta y / 2" />)</li>
                    <li>&bull; 위쪽 면: 대류 (<Math tex="\Delta x / 2" />)</li>
                    <li>&bull; 오른쪽 면: 전도 (<Math tex="\Delta y / 2" />)</li>
                    <li>&bull; 아래쪽 면: 전도 (<Math tex="\Delta x / 2" />)</li>
                  </ul>
                </div>
              </div>

              <EquationBox label="외부 모서리 노드 방정식 (대류)" accent="orange">
                <Math tex={String.raw`T_{1,N} + T_{0,N-1} + 2Bi \cdot T_\infty - 2(1 + Bi)T_{0,N} = 0`} display />
              </EquationBox>
            </div>
          </motion.div>

          {/* 6. 내부 모서리 노드 */}
          <SectionDivider number="6" title="Internal Corner Node" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              L자형 영역 등에서 나타나는 내부 모서리에서는 제어 체적이
              <Math tex="(3/4) \cdot \Delta x \cdot \Delta y" />입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                내부 모서리 (대류)
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* L-shape representation */}
                    <div className="w-32 h-32 relative">
                      <div className="absolute top-0 left-0 w-24 h-16 bg-slate-700/30 border-2 border-slate-600"></div>
                      <div className="absolute bottom-0 left-0 w-32 h-16 bg-slate-700/30 border-2 border-slate-600"></div>
                      <div className="absolute top-16 left-24 w-1 h-4 bg-purple-500"></div>
                      <div className="absolute top-16 left-16 right-8 h-1 bg-purple-500"></div>
                      <div className="absolute top-14 left-22 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-xs text-white">
                        i,j
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-4">
                    내부 모서리 노드의 에너지 균형:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; 3개의 내부 이웃: 전도</li>
                    <li>&bull; 2개의 외부 면: 대류</li>
                    <li>&bull; 제어 체적: 3/4 크기</li>
                  </ul>
                </div>
              </div>

              <EquationBox label="내부 모서리 노드 방정식 (대류)" accent="purple">
                <Math tex={String.raw`2(T_{i-1,j} + T_{i,j+1}) + T_{i+1,j} + T_{i,j-1} + 2Bi \cdot T_\infty - 2(3 + Bi)T_{i,j} = 0`} display />
              </EquationBox>
            </div>
          </motion.div>

          {/* 7. 경계조건 요약 표 */}
          <SectionDivider number="7" title="Summary of Boundary Node Equations" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6 overflow-x-auto">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                경계 노드 방정식 요약 (정사각형 격자, <Math tex="\Delta x = \Delta y" />)
              </h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">노드 유형</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">방정식</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-bold text-emerald-400">내부 노드</td>
                    <td className="py-4 px-4"><Math tex="T_{i-1,j} + T_{i+1,j} + T_{i,j-1} + T_{i,j+1} - 4T_{i,j} = 0" /></td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-bold text-emerald-400">단열 표면 (flat)</td>
                    <td className="py-4 px-4"><Math tex="2T_{1,j} + T_{0,j-1} + T_{0,j+1} - 4T_{0,j} = 0" /></td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-bold text-blue-400">대류 표면 (flat)</td>
                    <td className="py-4 px-4"><Math tex="2T_{1,j} + T_{0,j-1} + T_{0,j+1} + 2Bi \cdot T_\infty - 2(2+Bi)T_{0,j} = 0" /></td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-bold text-orange-400">외부 모서리 (대류)</td>
                    <td className="py-4 px-4"><Math tex="T_{1,N} + T_{0,N-1} + 2Bi \cdot T_\infty - 2(1+Bi)T_{0,N} = 0" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-purple-400">내부 모서리 (대류)</td>
                    <td className="py-4 px-4"><Math tex="2(T_{i-1,j} + T_{i,j+1}) + T_{i+1,j} + T_{i,j-1} + 2Bi \cdot T_\infty - 2(3+Bi)T_{i,j} = 0" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="에너지 균형으로 유도" accent="yellow" icon="!">
              <p>
                위 표의 모든 방정식은 <strong className="text-yellow-300">에너지 균형</strong>으로 유도할 수 있습니다.
                공식을 암기하기보다 에너지 균형 원리를 이해하면 어떤 형상의 경계에도 적용할 수 있습니다.
                교과서(Incropera Table 4.2)에 더 많은 경우가 정리되어 있습니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

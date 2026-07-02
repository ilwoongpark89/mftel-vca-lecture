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
  const borderColor = accent === "red" ? "border-red-500/30" : accent === "pink" ? "border-pink-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : "border-slate-700";
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
    pink: { bg: "bg-pink-500/5", border: "border-pink-500/20", text: "text-pink-400", iconBg: "bg-pink-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
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

export default function BlackbodyExchange() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Radiation Exchange: Black Surfaces
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            흑체 표면 간의 복사 열교환을 분석합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Two Blackbody Exchange */}
          <SectionDivider number="1" title="Two Blackbody Surface Exchange" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              두 <strong className="text-red-400">흑체 표면</strong> 사이의 <strong className="text-white">순 복사 열전달</strong>은
              형상인자와 Stefan-Boltzmann 법칙을 이용하여 간단히 계산할 수 있습니다.
              흑체는 입사 복사를 모두 흡수하고, 방출은 T^4에만 의존하므로 해석이 단순합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                Net Radiation Exchange Between Two Black Surfaces
              </h4>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <EquationBox label="Surface 1 to Surface 2" accent="red">
                  <Math tex={`q_{1 \\to 2} = A_1 F_{12} E_{b1} = A_1 F_{12} \\sigma T_1^4`} display />
                </EquationBox>
                <EquationBox label="Surface 2 to Surface 1" accent="pink">
                  <Math tex={`q_{2 \\to 1} = A_2 F_{21} E_{b2} = A_2 F_{21} \\sigma T_2^4`} display />
                </EquationBox>
              </div>

              <EquationBox label="Net Heat Transfer Rate (1 to 2)" accent="red">
                <Math tex={`q_{12} = q_{1 \\to 2} - q_{2 \\to 1} = A_1 F_{12} \\sigma (T_1^4 - T_2^4)`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">상호성 법칙</strong>을 적용하면:
                </p>
                <div className="mt-2 text-center">
                  <Math tex={`q_{12} = A_1 F_{12} \\sigma (T_1^4 - T_2^4) = A_2 F_{21} \\sigma (T_1^4 - T_2^4)`} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="핵심 공식" accent="red" icon="!">
              <div className="p-4 rounded-lg bg-slate-950/80 text-center">
                <Math tex={`q_{12} = A_1 F_{12} \\sigma (T_1^4 - T_2^4) \\quad [\\text{W}]`} display />
              </div>
              <p className="mt-3">
                이 공식은 흑체 간 복사 열전달의 <strong className="text-red-400">기본 공식</strong>입니다.
                <br />
                &bull; <Math tex="q_{12} > 0" />: 1에서 2로 순 열전달 (T_1 &gt; T_2)
                <br />
                &bull; <Math tex="q_{12} < 0" />: 2에서 1로 순 열전달 (T_2 &gt; T_1)
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. Blackbody Enclosure */}
          <SectionDivider number="2" title="Blackbody Enclosure" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              N개의 흑체 표면으로 이루어진 <strong className="text-white">닫힌 인클로저</strong>에서
              각 표면의 순 복사 열전달을 계산합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-6 text-center">
                Net Radiation from Surface i in N-Surface Enclosure
              </h4>

              <EquationBox label="Net Heat Transfer from Surface i" accent="pink">
                <Math tex={`q_i = \\sum_{j=1}^{N} q_{ij} = \\sum_{j=1}^{N} A_i F_{ij} \\sigma (T_i^4 - T_j^4)`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">에너지 보존:</strong> 정상상태에서 각 표면이 방출/흡수하는 복사 에너지의 합은
                  그 표면으로 공급/제거되는 에너지와 같습니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. Special Cases */}
          <SectionDivider number="3" title="Special Cases" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              자주 사용되는 특수한 형상의 흑체 복사 열교환 공식입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
                <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                  Infinite Parallel Planes
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  F_12 = 1, A_1 = A_2 = A
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                  <Math tex={`q_{12} = A \\sigma (T_1^4 - T_2^4)`} display />
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  예: 두 평판 히터 사이, 이중 유리창 사이
                </p>
              </div>

              <div className="rounded-xl border border-pink-500/30 bg-pink-500/5 p-6">
                <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-4">
                  Small Object in Large Enclosure
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  F_12 = 1, A_1 &lt;&lt; A_2
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-pink-500/30">
                  <Math tex={`q_{1} = A_1 \\sigma (T_1^4 - T_{sur}^4)`} display />
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  예: 방 안의 사람, 오븐 내 제품
                </p>
              </div>

              <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                  Concentric Spheres
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  F_12 = 1 (inner to outer)
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-orange-500/30">
                  <Math tex={`q_{12} = A_1 \\sigma (T_1^4 - T_2^4) = 4\\pi r_1^2 \\sigma (T_1^4 - T_2^4)`} display />
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  예: 진공 보온병, 동심 용기
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
                <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                  Concentric Cylinders (Long)
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  F_12 = 1 (inner to outer)
                </p>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30">
                  <Math tex={`q_{12}' = 2\\pi r_1 \\sigma (T_1^4 - T_2^4) \\quad [\\text{W/m}]`} display />
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  예: 파이프 단열, 동축 케이블
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. Example Problem */}
          <SectionDivider number="4" title="Example Problem" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Example: Blackbody Radiation in a Furnace
              </h4>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700 mb-6">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">문제:</strong> 1 m x 1 m 크기의 두 평행 흑체 평판이 0.5 m 간격으로 놓여 있다.
                  표면 1은 1000 K, 표면 2는 500 K이다. 표면 1에서 2로의 순 복사 열전달률을 구하시오.
                  형상인자 F_12 = 0.415로 주어진다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">1</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">주어진 값:</strong>
                    </p>
                    <div className="mt-2 p-3 rounded-lg bg-slate-950/80">
                      <Math tex={`A_1 = 1 \\times 1 = 1 \\, \\text{m}^2, \\quad T_1 = 1000 \\, \\text{K}, \\quad T_2 = 500 \\, \\text{K}, \\quad F_{12} = 0.415`} />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">공식 적용:</strong>
                    </p>
                    <div className="mt-2 p-3 rounded-lg bg-slate-950/80">
                      <Math tex={`q_{12} = A_1 F_{12} \\sigma (T_1^4 - T_2^4)`} />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">계산:</strong>
                    </p>
                    <div className="mt-2 p-3 rounded-lg bg-slate-950/80">
                      <Math tex={`q_{12} = (1)(0.415)(5.67 \\times 10^{-8})(1000^4 - 500^4)`} />
                      <br />
                      <Math tex={`q_{12} = (0.415)(5.67 \\times 10^{-8})(10^{12} - 6.25 \\times 10^{10})`} />
                      <br />
                      <Math tex={`q_{12} = (0.415)(5.67 \\times 10^{-8})(9.375 \\times 10^{11})`} />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">4</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">결과:</strong>
                    </p>
                    <div className="mt-2 p-3 rounded-lg bg-slate-950/80 border border-emerald-500/30">
                      <Math tex={`q_{12} = 22,060 \\, \\text{W} \\approx 22.1 \\, \\text{kW}`} display />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Energy Balance in Enclosure */}
          <SectionDivider number="5" title="Energy Balance in Blackbody Enclosure" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              닫힌 인클로저 내에서 <strong className="text-white">에너지 보존</strong>을 적용하여
              알려지지 않은 온도나 열전달률을 구할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                Enclosure Energy Balance
              </h4>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700 mb-4">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">정상상태 조건:</strong>
                </p>
                <ul className="mt-2 text-sm text-gray-400 space-y-1">
                  <li>&bull; 인클로저 전체: <Math tex="\sum_{i=1}^{N} q_i = 0" /></li>
                  <li>&bull; 단열 표면 (reradiating): <Math tex="q_i = 0" /></li>
                  <li>&bull; 등온 표면: T_i가 주어짐 -&gt; q_i 구함</li>
                  <li>&bull; 일정 열유속 표면: q_i가 주어짐 -&gt; T_i 구함</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Reradiating Surface:</strong> 단열 표면은 흡수한 복사를 모두 재방출합니다.
                  따라서 q = 0이지만, 복사 교환에 참여하며 온도는 에너지 균형에 의해 결정됩니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="흑체 해석의 한계" accent="orange" icon="!">
              <p>
                실제 표면은 흑체가 아니므로 (epsilon &lt; 1):
              </p>
              <ul className="mt-2 space-y-1">
                <li>&bull; 방출 복사가 흑체보다 적음</li>
                <li>&bull; 입사 복사의 일부가 반사됨</li>
                <li>&bull; 반사에 의한 <strong className="text-orange-400">다중 반사</strong>가 발생</li>
              </ul>
              <p className="mt-2">
                -&gt; 다음 섹션에서 <strong className="text-white">Gray Surface 해석</strong>을 다룹니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. Summary */}
          <SectionDivider number="6" title="Blackbody Exchange Summary" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-slate-950 p-8">
              <h4 className="text-xl font-bold text-red-400 mb-6 text-center">
                Key Equations for Black Surfaces
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Configuration</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Formula</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-white">General (two surfaces)</td>
                      <td className="py-4 px-4 text-red-400"><Math tex={`q_{12} = A_1 F_{12} \\sigma (T_1^4 - T_2^4)`} /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-white">Parallel plates (F=1)</td>
                      <td className="py-4 px-4 text-red-400"><Math tex={`q_{12} = A \\sigma (T_1^4 - T_2^4)`} /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-white">Small object in enclosure</td>
                      <td className="py-4 px-4 text-red-400"><Math tex={`q_1 = A_1 \\sigma (T_1^4 - T_{sur}^4)`} /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-white">N-surface enclosure</td>
                      <td className="py-4 px-4 text-red-400"><Math tex={`q_i = \\sum_{j=1}^{N} A_i F_{ij} \\sigma (T_i^4 - T_j^4)`} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400 text-center">
                  <strong className="text-white">핵심:</strong> 흑체는 epsilon = alpha = 1이므로 반사가 없어
                  해석이 단순합니다. 형상인자와 온도만 알면 열전달 계산 가능!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

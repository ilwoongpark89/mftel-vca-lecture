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
  const borderColor = accent === "purple" ? "border-purple-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "blue" ? "border-blue-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div>
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
    purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", iconBg: "bg-purple-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
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

export default function NTURelations() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Part 5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            e-NTU Relations
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            다양한 열교환기 유형에 대한 e-NTU 관계식을 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Parallel Flow */}
          <SectionDivider number="1" title="Parallel Flow" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                병류 열교환기 e-NTU 관계식
              </h4>

              <EquationBox label="Effectiveness (e from NTU)" accent="orange">
                <Math tex={`\\varepsilon = \\frac{1 - \\exp[-NTU(1 + C_r)]}{1 + C_r}`} display />
              </EquationBox>

              <div className="mt-6">
                <EquationBox label="NTU (from e)" accent="orange">
                  <Math tex={`NTU = -\\frac{\\ln[1 - \\varepsilon(1 + C_r)]}{1 + C_r}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-orange-400">최대 효율 (NTU &rarr; &infin;):</strong>
                </p>
                <Math tex={`\\varepsilon_{max} = \\frac{1}{1 + C_r}`} display />
                <p className="text-sm text-gray-500 mt-2">
                  <Math tex="C_r = 1" />일 때: <Math tex="\varepsilon_{max} = 0.5" /> (최대 50%)<br />
                  병류는 본질적으로 효율이 제한됩니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. Counter Flow */}
          <SectionDivider number="2" title="Counter Flow" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                역류 열교환기 e-NTU 관계식
              </h4>

              <EquationBox label="Effectiveness (C_r < 1)" accent="cyan">
                <Math tex={`\\varepsilon = \\frac{1 - \\exp[-NTU(1 - C_r)]}{1 - C_r \\exp[-NTU(1 - C_r)]}`} display />
              </EquationBox>

              <div className="mt-6">
                <EquationBox label="Effectiveness (C_r = 1)" accent="cyan">
                  <Math tex={`\\varepsilon = \\frac{NTU}{1 + NTU}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <EquationBox label="NTU (C_r < 1)" accent="purple">
                  <Math tex={`NTU = \\frac{1}{C_r - 1}\\ln\\left(\\frac{\\varepsilon - 1}{\\varepsilon C_r - 1}\\right)`} display />
                </EquationBox>
                <EquationBox label="NTU (C_r = 1)" accent="purple">
                  <Math tex={`NTU = \\frac{\\varepsilon}{1 - \\varepsilon}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="역류의 우수성" accent="cyan" icon="!">
              <p className="mb-2">
                역류 열교환기는 <strong className="text-white">NTU &rarr; &infin;일 때 <Math tex="\varepsilon \to 1" /></strong>
              </p>
              <ul className="space-y-1 mt-2">
                <li>- 이론적으로 100% 효율 달성 가능</li>
                <li>- 모든 유동 배열 중 최고 효율</li>
                <li>- 같은 NTU에서 항상 병류보다 높은 효율</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. Shell-and-Tube */}
          <SectionDivider number="3" title="Shell-and-Tube Heat Exchangers" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                1 Shell Pass, 2 Tube Passes (1-2 HX)
              </h4>

              <EquationBox label="Effectiveness" accent="purple">
                <Math tex={`\\varepsilon = 2\\left\\{1 + C_r + \\sqrt{1 + C_r^2} \\cdot \\frac{1 + \\exp(-NTU\\sqrt{1+C_r^2})}{1 - \\exp(-NTU\\sqrt{1+C_r^2})}\\right\\}^{-1}`} display />
              </EquationBox>

              <div className="mt-6">
                <EquationBox label="NTU (from e)" accent="purple">
                  <Math tex={`NTU = -\\frac{1}{\\sqrt{1+C_r^2}}\\ln\\left(\\frac{E-1}{E+1}\\right)`} display />
                </EquationBox>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  여기서 <Math tex={`E = \\frac{2/\\varepsilon - (1+C_r)}{\\sqrt{1+C_r^2}}`} />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                n Shell Passes, 2n Tube Passes
              </h4>

              <EquationBox label="Multiple Shell Passes" accent="blue">
                <Math tex={`\\varepsilon = \\left[\\left(\\frac{1-\\varepsilon_1 C_r}{1-\\varepsilon_1}\\right)^n - 1\\right] \\left[\\left(\\frac{1-\\varepsilon_1 C_r}{1-\\varepsilon_1}\\right)^n - C_r\\right]^{-1}`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                <Math tex="\varepsilon_1" />은 single shell pass (1-2 HX)의 effectiveness
              </p>
            </div>
          </motion.div>

          {/* 4. Cross Flow */}
          <SectionDivider number="4" title="Cross Flow Heat Exchangers" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Cross Flow, Both Fluids Unmixed
              </h4>

              <EquationBox label="Effectiveness (근사식)" accent="emerald">
                <Math tex={`\\varepsilon \\approx 1 - \\exp\\left\\{\\frac{NTU^{0.22}}{C_r}[\\exp(-C_r \\cdot NTU^{0.78}) - 1]\\right\\}`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                정확한 해는 급수 형태로 주어지며, 위 식은 좋은 근사입니다.
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                Cross Flow, One Fluid Mixed
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2"><Math tex="C_{max}" /> mixed</h5>
                  <Math tex={`\\varepsilon = \\frac{1}{C_r}\\left(1 - \\exp\\{-C_r[1-\\exp(-NTU)]\\}\\right)`} display />
                </div>
                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2"><Math tex="C_{min}" /> mixed</h5>
                  <Math tex={`\\varepsilon = 1 - \\exp\\left\\{-\\frac{1}{C_r}[1-\\exp(-C_r \\cdot NTU)]\\right\\}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Special Case: Phase Change */}
          <SectionDivider number="5" title="Special Case: Phase Change (C_r = 0)" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-6">
                응축기/증발기 (Condenser/Evaporator)
              </h4>

              <EquationBox label="상변화 시 (C_r = 0, 모든 유동 배열)" accent="yellow">
                <Math tex={`\\varepsilon = 1 - \\exp(-NTU)`} display />
              </EquationBox>

              <div className="mt-6">
                <EquationBox label="NTU (from e)" accent="yellow">
                  <Math tex={`NTU = -\\ln(1 - \\varepsilon)`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-yellow-400">물리적 의미:</strong>
                </p>
                <ul className="text-sm text-gray-500 mt-2 space-y-1 ml-4">
                  <li>- 상변화 유체는 온도가 일정 (<Math tex="C \to \infty" />)</li>
                  <li>- 유동 배열에 무관하게 같은 공식</li>
                  <li>- <Math tex="NTU \to \infty" />이면 <Math tex="\varepsilon \to 1" /></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 6. 공식 요약표 */}
          <SectionDivider number="6" title="e-NTU Relations Summary Table" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                e-NTU 관계식 요약
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Heat Exchanger Type</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Effectiveness <Math tex="\varepsilon" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">Parallel Flow</td>
                      <td className="py-3 px-4"><Math tex="\frac{1-\exp[-NTU(1+C_r)]}{1+C_r}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Counter Flow (C_r &lt; 1)</td>
                      <td className="py-3 px-4"><Math tex="\frac{1-\exp[-NTU(1-C_r)]}{1-C_r\exp[-NTU(1-C_r)]}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Counter Flow (C_r = 1)</td>
                      <td className="py-3 px-4"><Math tex="\frac{NTU}{1+NTU}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-purple-400">Shell-and-Tube (1-2)</td>
                      <td className="py-3 px-4"><Math tex="2\left[1+C_r+\sqrt{1+C_r^2}\coth\left(\frac{NTU\sqrt{1+C_r^2}}{2}\right)\right]^{-1}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-emerald-400">Cross Flow (unmixed)</td>
                      <td className="py-3 px-4">급수 해 또는 근사식</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-yellow-400">Phase Change (C_r = 0)</td>
                      <td className="py-3 px-4"><Math tex="1-\exp(-NTU)" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="e-NTU 차트 사용" accent="purple" icon="G">
              <p className="mb-2">
                복잡한 공식 대신 <strong className="text-white">그래프(차트)</strong>를 사용하면 편리합니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li>- 가로축: NTU, 세로축: <Math tex="\varepsilon" /></li>
                <li>- 여러 <Math tex="C_r" /> 값에 대한 곡선</li>
                <li>- 교재 부록 또는 핸드북 참조</li>
                <li>- 빠른 예비 설계에 유용</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 7. 효율 vs NTU 경향 */}
          <SectionDivider number="7" title="Effectiveness Trends" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                NTU 증가에 따른 효율 변화
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-white font-bold mb-3">관찰되는 경향</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li><strong className="text-cyan-400">1.</strong> NTU 증가 &rarr; <Math tex="\varepsilon" /> 증가 (포화 경향)</li>
                    <li><strong className="text-cyan-400">2.</strong> <Math tex="C_r" /> 감소 &rarr; 더 높은 <Math tex="\varepsilon" /> 도달</li>
                    <li><strong className="text-cyan-400">3.</strong> NTU &gt; 3에서 효율 증가 둔화</li>
                    <li><strong className="text-cyan-400">4.</strong> 역류가 모든 NTU에서 최고 효율</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-white font-bold mb-3">설계 시사점</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li><strong className="text-orange-400">1.</strong> NTU &gt; 3-4: 면적 증가 대비 효율 증가 미미</li>
                    <li><strong className="text-orange-400">2.</strong> 경제적 최적점: NTU ~ 1-3</li>
                    <li><strong className="text-orange-400">3.</strong> 높은 <Math tex="\varepsilon" /> 필요 시 역류 선택</li>
                    <li><strong className="text-orange-400">4.</strong> 상변화 시 유동 배열 영향 없음</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

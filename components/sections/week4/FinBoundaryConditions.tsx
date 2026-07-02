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
  const borderColor = accent === "red" ? "border-red-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "emerald" ? "border-emerald-500/30" : "border-slate-700";
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

export default function FinBoundaryConditions() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fin Tip Boundary Conditions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            4가지 핀 끝단 경계 조건에 대한 해를 유도하고 비교합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <motion.div {...stagger} className="mb-12">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                공통 경계 조건: Base (x = 0)
              </h4>

              <EquationBox label="베이스 온도 조건">
                <Math tex={`\\theta(0) = \\theta_b = T_b - T_\\infty`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 mt-6 text-center">
                이 조건은 4가지 경우 모두에서 동일합니다.
                핀 끝단(x = L)의 조건만 다릅니다.
              </p>
            </div>
          </motion.div>

          {/* Case A: Convective Tip */}
          <SectionDivider number="A" title="Convective Tip (대류 끝단)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀 끝단에서 대류 열전달이 발생하는 <strong className="text-white">가장 일반적인</strong> 경우입니다.
              끝단의 열전달 계수는 <Math tex="h" />로 측면과 동일하다고 가정합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                경계 조건과 해
              </h4>

              <div className="space-y-4">
                <EquationBox label="끝단 경계 조건 (에너지 밸런스)">
                  <Math tex={`-kA_c\\left.\\frac{d\\theta}{dx}\\right|_{x=L} = hA_c\\,\\theta(L)`} display />
                </EquationBox>

                <p className="text-sm text-gray-400 text-center py-2">
                  정리하면: <Math tex="\\left.\\frac{d\\theta}{dx}\\right|_{x=L} = -\\frac{h}{k}\\theta(L)" />
                </p>

                <EquationBox label="온도 분포" accent="red">
                  <Math tex={`\\frac{\\theta}{\\theta_b} = \\frac{\\cosh[m(L-x)] + (h/mk)\\sinh[m(L-x)]}{\\cosh(mL) + (h/mk)\\sinh(mL)}`} display />
                </EquationBox>

                <EquationBox label="핀 열전달률" accent="red">
                  <Math tex={`q_f = \\sqrt{hPkA_c}\\,\\theta_b \\cdot \\frac{\\sinh(mL) + (h/mk)\\cosh(mL)}{\\cosh(mL) + (h/mk)\\sinh(mL)}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="복잡한 식!" accent="yellow" icon="!">
              <p>
                대류 끝단 조건의 해는 상당히 복잡합니다. 실제로는 <strong className="text-yellow-300">단열 끝단</strong> 조건을
                <strong className="text-yellow-300">보정된 길이</strong>와 함께 사용하는 것이 더 실용적입니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* Case B: Adiabatic Tip */}
          <SectionDivider number="B" title="Adiabatic Tip (단열 끝단)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀 끝단이 <strong className="text-white">단열</strong>되어 있거나, 끝단의 열전달이 무시할 수 있을 정도로 작은 경우입니다.
              이 조건은 수학적으로 가장 다루기 쉽고, <strong className="text-white">실제로 가장 많이 사용</strong>됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                경계 조건과 해
              </h4>

              <div className="space-y-4">
                <EquationBox label="끝단 경계 조건" accent="emerald">
                  <Math tex={`\\left.\\frac{d\\theta}{dx}\\right|_{x=L} = 0`} display />
                </EquationBox>

                <p className="text-sm text-gray-400 text-center py-2">
                  끝단에서 열유속이 0 (단열)
                </p>

                <EquationBox label="온도 분포" accent="red">
                  <Math tex={`\\frac{\\theta}{\\theta_b} = \\frac{\\cosh[m(L-x)]}{\\cosh(mL)}`} display />
                </EquationBox>

                <EquationBox label="핀 열전달률" accent="red">
                  <Math tex={`q_f = \\sqrt{hPkA_c}\\,\\theta_b \\cdot \\tanh(mL) = M\\theta_b\\tanh(mL)`} display />
                </EquationBox>

                <div className="p-4 rounded-xl bg-slate-900/50 mt-4">
                  <p className="text-sm text-gray-400 text-center">
                    여기서 <Math tex="M = \sqrt{hPkA_c}" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="보정 길이 (Corrected Length)" accent="emerald" icon="Lc">
              <p className="mb-2">
                대류 끝단을 단열 끝단으로 근사할 때, <strong className="text-emerald-300">보정 길이</strong>를 사용합니다:
              </p>
              <Math tex={`L_c = L + \\frac{A_c}{P}`} display />
              <ul className="space-y-1 mt-2">
                <li>&bull; 직사각형 핀 (w &gt;&gt; t): <Math tex="L_c = L + t/2" /></li>
                <li>&bull; 원형 핀 (직경 D): <Math tex="L_c = L + D/4" /></li>
              </ul>
              <p className="mt-2">
                보정 길이를 사용하면 대류 끝단의 결과를 약 2% 오차 내에서 근사할 수 있습니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* Case C: Prescribed Temperature */}
          <SectionDivider number="C" title="Prescribed Temperature Tip (지정 온도 끝단)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀 끝단의 온도가 <Math tex="T_L" />로 고정되어 있는 경우입니다.
              실제로 드물지만, 핀이 다른 벽면에 연결된 경우 등에 해당합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                경계 조건과 해
              </h4>

              <div className="space-y-4">
                <EquationBox label="끝단 경계 조건" accent="orange">
                  <Math tex={`\\theta(L) = \\theta_L = T_L - T_\\infty`} display />
                </EquationBox>

                <EquationBox label="온도 분포" accent="red">
                  <Math tex={`\\frac{\\theta}{\\theta_b} = \\frac{(\\theta_L/\\theta_b)\\sinh(mx) + \\sinh[m(L-x)]}{\\sinh(mL)}`} display />
                </EquationBox>

                <EquationBox label="핀 열전달률" accent="red">
                  <Math tex={`q_f = M\\theta_b \\cdot \\frac{\\cosh(mL) - \\theta_L/\\theta_b}{\\sinh(mL)}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          {/* Case D: Infinite Fin */}
          <SectionDivider number="D" title="Infinite Fin (무한 핀)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀이 매우 길어서 (<Math tex="mL \to \infty" />) 끝단에서 온도가 주위 온도에 도달하는 경우입니다.
              이론적 극한 상황으로, 긴 핀의 해석에 유용한 근사를 제공합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                경계 조건과 해
              </h4>

              <div className="space-y-4">
                <EquationBox label="끝단 경계 조건" accent="red">
                  <Math tex={`\\theta(L \\to \\infty) = 0 \\quad \\text{또는} \\quad T(\\infty) = T_\\infty`} display />
                </EquationBox>

                <p className="text-sm text-gray-400 text-center py-2">
                  이 조건은 일반해에서 <Math tex="C_1 = 0" />을 요구합니다 (무한대에서 발산 방지)
                </p>

                <EquationBox label="온도 분포" accent="red">
                  <Math tex={`\\frac{\\theta}{\\theta_b} = e^{-mx}`} display />
                </EquationBox>

                <EquationBox label="핀 열전달률" accent="red">
                  <Math tex={`q_f = M\\theta_b = \\sqrt{hPkA_c}\\,\\theta_b`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="무한 핀의 물리적 의미" accent="red" icon="inf">
              <p className="mb-2">
                무한 핀 조건은 <Math tex="mL > 2.65" /> (또는 <Math tex="mL > 5" />)일 때 좋은 근사가 됩니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <Math tex="\tanh(2.65) \approx 0.99" /></li>
                <li>&bull; <Math tex="\tanh(5) \approx 0.9999" /></li>
              </ul>
              <p className="mt-2">
                핀이 이보다 길면 추가 길이는 열전달에 거의 기여하지 않습니다 - <strong className="text-red-300">재료 낭비!</strong>
              </p>
            </InsightCard>
          </motion.div>

          {/* 요약 비교표 */}
          <SectionDivider number="5" title="Summary: Comparison of Solutions" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6 text-center">
                핀 끝단 조건별 해 비교
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Case</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Tip Condition</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="q_f / (M\theta_b)" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-blue-400">A</td>
                      <td className="py-4 px-4">Convective</td>
                      <td className="py-4 px-4"><Math tex="\frac{\sinh(mL) + (h/mk)\cosh(mL)}{\cosh(mL) + (h/mk)\sinh(mL)}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-emerald-500/5">
                      <td className="py-4 px-4 font-bold text-emerald-400">B</td>
                      <td className="py-4 px-4">Adiabatic</td>
                      <td className="py-4 px-4"><Math tex="\tanh(mL)" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-orange-400">C</td>
                      <td className="py-4 px-4">Prescribed Temp</td>
                      <td className="py-4 px-4"><Math tex="\frac{\cosh(mL) - \theta_L/\theta_b}{\sinh(mL)}" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-red-400">D</td>
                      <td className="py-4 px-4">Infinite</td>
                      <td className="py-4 px-4"><Math tex="1" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                <Math tex="M = \sqrt{hPkA_c}" />, 모든 경우에서 <Math tex="q_f = M\theta_b \times (\text{factor})" />
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="실무 권장사항" accent="emerald" icon="*">
              <p className="mb-2">
                대부분의 실제 문제에서는 <strong className="text-emerald-300">Case B (단열 끝단) + 보정 길이</strong>를 사용합니다:
              </p>
              <ol className="space-y-1 mt-2 list-decimal list-inside">
                <li><Math tex="L_c = L + A_c/P" /> 계산</li>
                <li><Math tex="mL_c" />로 모든 공식에서 <Math tex="mL" /> 대체</li>
                <li><Math tex="\eta_f = \tanh(mL_c)/(mL_c)" /> 사용</li>
              </ol>
              <p className="mt-2">
                이 방법은 단순하면서도 대부분의 경우 충분히 정확합니다 (오차 &lt; 2%).
              </p>
            </InsightCard>
          </motion.div>

          {/* 예제 문제 */}
          <SectionDivider number="6" title="Example Problem" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 4.1: 직사각형 핀의 온도 분포
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 알루미늄 직사각형 핀(k = 200 W/(m*K))이 다음 조건으로 설치되어 있다:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>&bull; 핀 길이: L = 50 mm</li>
                  <li>&bull; 핀 두께: t = 5 mm</li>
                  <li>&bull; 핀 폭: w = 100 mm (t &lt;&lt; w)</li>
                  <li>&bull; 베이스 온도: <Math tex="T_b" /> = 100 C</li>
                  <li>&bull; 주위 온도: <Math tex="T_\infty" /> = 25 C</li>
                  <li>&bull; 대류 계수: h = 10 W/(m2*K)</li>
                </ul>
                <p className="mt-4">
                  단열 끝단 조건을 가정하고:
                  (a) 핀 끝단 온도
                  (b) 핀 열전달률을 구하라.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">풀이: 기본 파라미터 계산</p>
                  <div className="space-y-2 text-sm">
                    <Math tex={`A_c = w \\cdot t = 0.1 \\times 0.005 = 5 \\times 10^{-4} \\, \\text{m}^2`} display />
                    <Math tex={`P \\approx 2w = 0.2 \\, \\text{m} \\quad (\\text{since } w \\gg t)`} display />
                    <Math tex={`m = \\sqrt{\\frac{hP}{kA_c}} = \\sqrt{\\frac{10 \\times 0.2}{200 \\times 5 \\times 10^{-4}}} = \\sqrt{20} = 4.47 \\, \\text{m}^{-1}`} display />
                    <Math tex={`mL = 4.47 \\times 0.05 = 0.224`} display />
                    <Math tex={`\\theta_b = T_b - T_\\infty = 100 - 25 = 75°\\text{C}`} display />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">(a) 핀 끝단 온도</p>
                  <Math tex={`\\frac{\\theta(L)}{\\theta_b} = \\frac{\\cosh[m(L-L)]}{\\cosh(mL)} = \\frac{1}{\\cosh(0.224)} = \\frac{1}{1.025} = 0.976`} display />
                  <Math tex={`\\theta(L) = 0.976 \\times 75 = 73.2°\\text{C}`} display />
                  <Math tex={`T(L) = \\theta(L) + T_\\infty = 73.2 + 25 = \\boxed{98.2°\\text{C}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">(b) 핀 열전달률</p>
                  <Math tex={`M = \\sqrt{hPkA_c} = \\sqrt{10 \\times 0.2 \\times 200 \\times 5 \\times 10^{-4}} = \\sqrt{0.2} = 0.447 \\, \\text{W/K}`} display />
                  <Math tex={`q_f = M\\theta_b \\tanh(mL) = 0.447 \\times 75 \\times \\tanh(0.224)`} display />
                  <Math tex={`q_f = 33.5 \\times 0.220 = \\boxed{7.37 \\, \\text{W}}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="결과 분석" accent="yellow" icon="!">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">핀 끝단 온도가 베이스 온도에 가깝다:</strong> <Math tex="T(L) = 98.2°C" /> vs <Math tex="T_b = 100°C" />. 이는 <Math tex="mL = 0.224" />가 작기 때문 (핀이 "짧다")</li>
                <li>&bull; <strong className="text-white">핀 효율이 높다:</strong> <Math tex="\eta_f = \tanh(0.224)/0.224 = 0.98" /> (98%)</li>
                <li>&bull; <strong className="text-white">핀 없이 같은 면적 열전달:</strong> <Math tex="q = hA_c\theta_b = 10 \times 5 \times 10^{-4} \times 75 = 0.375 \text{ W}" /></li>
                <li>&bull; <strong className="text-white">핀 유효성:</strong> <Math tex="\varepsilon = 7.37/0.375 = 19.7" /> - 핀이 매우 효과적!</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

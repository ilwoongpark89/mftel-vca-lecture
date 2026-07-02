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

export default function FinPerformance() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fin Performance Metrics
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            핀 효율, 핀 유효성, 핀 열저항의 정의와 의미를 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 핀 효율 */}
          <SectionDivider number="1" title="Fin Efficiency (eta_f)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">핀 효율(Fin Efficiency)</strong>은 핀이 이론적 최대 열전달 대비
              실제로 얼마나 효과적인지를 나타내는 지표입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                핀 효율 정의
              </h4>

              <EquationBox label="정의" accent="red">
                <Math tex={`\\eta_f = \\frac{q_f}{q_{max}} = \\frac{\\text{실제 핀 열전달률}}{\\text{최대 가능 열전달률}}`} display />
              </EquationBox>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">
                    <strong className="text-white">최대 가능 열전달률 <Math tex="q_{max}" />:</strong>
                    핀 전체가 베이스 온도 <Math tex="T_b" />로 유지될 때의 열전달률
                  </p>
                  <Math tex={`q_{max} = hA_f(T_b - T_\\infty) = hA_f\\theta_b`} display />
                  <p className="text-xs text-gray-500 mt-2">
                    <Math tex="A_f" />: 핀의 전체 표면적 (surface area)
                  </p>
                </div>

                <EquationBox label="핀 효율 공식" accent="emerald">
                  <Math tex={`\\eta_f = \\frac{q_f}{hA_f\\theta_b}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="핀 효율의 물리적 의미" accent="emerald" icon="eta">
              <p className="mb-2">
                핀 효율은 항상 <strong className="text-emerald-300">0 &lt; <Math tex="\eta_f" /> &le; 1</strong>입니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <Math tex="\eta_f = 1" />: 핀 전체가 <Math tex="T_b" />. 이상적이지만 불가능 (열전도에 의해 온도 강하 발생)</li>
                <li>&bull; <Math tex="\eta_f" /> 높음: 핀 내 온도 분포가 균일, k가 크고 L이 짧음</li>
                <li>&bull; <Math tex="\eta_f" /> 낮음: 핀 끝단 온도가 <Math tex="T_\infty" />에 가까움, 핀이 "길다"</li>
              </ul>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                균일 단면적 직선 핀의 효율 (단열 끝단)
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">핀 열전달률:</p>
                  <Math tex={`q_f = M\\theta_b\\tanh(mL) = \\sqrt{hPkA_c}\\,\\theta_b\\tanh(mL)`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">핀 표면적 (단열 끝단):</p>
                  <Math tex={`A_f = P \\cdot L`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">핀 효율 유도:</p>
                  <Math tex={`\\eta_f = \\frac{M\\theta_b\\tanh(mL)}{hPL\\theta_b} = \\frac{\\sqrt{hPkA_c}\\tanh(mL)}{hPL}`} display />
                </div>

                <EquationBox label="균일 단면 직선 핀 효율 (단열 끝단)" accent="red">
                  <Math tex={`\\eta_f = \\frac{\\tanh(mL)}{mL}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                mL에 따른 핀 효율
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">mL</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">tanh(mL)</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="\eta_f = \tanh(mL)/(mL)" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">해석</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">0.1</td>
                      <td className="py-3 px-4">0.100</td>
                      <td className="py-3 px-4 text-emerald-400 font-bold">0.997</td>
                      <td className="py-3 px-4 text-xs text-gray-500">매우 높은 효율</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">0.5</td>
                      <td className="py-3 px-4">0.462</td>
                      <td className="py-3 px-4 text-emerald-400 font-bold">0.924</td>
                      <td className="py-3 px-4 text-xs text-gray-500">높은 효율</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">1.0</td>
                      <td className="py-3 px-4">0.762</td>
                      <td className="py-3 px-4 text-yellow-400 font-bold">0.762</td>
                      <td className="py-3 px-4 text-xs text-gray-500">보통 효율</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">2.0</td>
                      <td className="py-3 px-4">0.964</td>
                      <td className="py-3 px-4 text-orange-400 font-bold">0.482</td>
                      <td className="py-3 px-4 text-xs text-gray-500">낮은 효율</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">5.0</td>
                      <td className="py-3 px-4">0.9999</td>
                      <td className="py-3 px-4 text-red-400 font-bold">0.200</td>
                      <td className="py-3 px-4 text-xs text-gray-500">매우 낮은 효율</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 2. 핀 유효성 */}
          <SectionDivider number="2" title="Fin Effectiveness (epsilon_f)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">핀 유효성(Fin Effectiveness)</strong>은 핀을 부착하지 않은 경우 대비
              얼마나 더 많은 열전달이 발생하는지를 나타냅니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                핀 유효성 정의
              </h4>

              <EquationBox label="정의" accent="red">
                <Math tex={`\\varepsilon_f = \\frac{q_f}{q_{no\\,fin}} = \\frac{\\text{핀이 있을 때 열전달률}}{\\text{핀이 없을 때 열전달률}}`} display />
              </EquationBox>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">
                    <strong className="text-white">핀이 없을 때 열전달률:</strong>
                    핀 베이스 면적 <Math tex="A_c" />에서의 대류 열전달
                  </p>
                  <Math tex={`q_{no\\,fin} = hA_c\\theta_b`} display />
                </div>

                <EquationBox label="핀 유효성 공식" accent="orange">
                  <Math tex={`\\varepsilon_f = \\frac{q_f}{hA_c\\theta_b}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                균일 단면적 직선 핀의 유효성
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">단열 끝단 핀의 유효성:</p>
                  <Math tex={`\\varepsilon_f = \\frac{M\\theta_b\\tanh(mL)}{hA_c\\theta_b} = \\frac{\\sqrt{hPkA_c}\\tanh(mL)}{hA_c}`} display />
                </div>

                <EquationBox label="핀 유효성" accent="red">
                  <Math tex={`\\varepsilon_f = \\sqrt{\\frac{Pk}{hA_c}}\\tanh(mL)`} display />
                </EquationBox>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">무한 핀의 경우 (<Math tex="mL \to \infty" />):</p>
                  <Math tex={`\\varepsilon_f = \\sqrt{\\frac{Pk}{hA_c}} = \\sqrt{\\frac{kP}{hA_c}}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="핀 유효성 해석" accent="orange" icon="eps">
              <p className="mb-2">
                핀 유효성은 핀 사용의 <strong className="text-orange-300">경제성</strong>을 판단하는 기준입니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <Math tex="\varepsilon_f < 1" />: 핀이 오히려 해로움 (거의 발생하지 않음)</li>
                <li>&bull; <Math tex="\varepsilon_f = 1" />: 핀 효과 없음</li>
                <li>&bull; <Math tex="\varepsilon_f > 1" />: 핀이 유익함</li>
                <li>&bull; <strong className="text-orange-300">실무 기준: <Math tex="\varepsilon_f \ge 2" /></strong> (핀 사용이 경제적)</li>
              </ul>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="핀 유효성 향상 조건" accent="yellow" icon="up">
              <p className="mb-2">
                <Math tex="\varepsilon_f = \sqrt{kP/(hA_c)}\tanh(mL)" />에서:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-yellow-300">k 증가:</strong> 열전도도가 큰 재료 (구리, 알루미늄)</li>
                <li>&bull; <strong className="text-yellow-300">P/A_c 증가:</strong> 얇고 길쭉한 핀</li>
                <li>&bull; <strong className="text-yellow-300">h 감소:</strong> 자연 대류에서 더 효과적</li>
              </ul>
              <p className="mt-2 text-white">
                &rarr; 핀은 공기 냉각(낮은 h)에서 매우 효과적, 물 냉각(높은 h)에서는 덜 효과적
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. 효율과 유효성의 관계 */}
          <SectionDivider number="3" title="Relationship Between eta_f and epsilon_f" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀 효율과 핀 유효성은 서로 관련되어 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                관계식 유도
              </h4>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/50">
                    <p className="text-sm text-emerald-400 font-bold mb-2">핀 효율</p>
                    <Math tex={`\\eta_f = \\frac{q_f}{hA_f\\theta_b}`} display />
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/50">
                    <p className="text-sm text-orange-400 font-bold mb-2">핀 유효성</p>
                    <Math tex={`\\varepsilon_f = \\frac{q_f}{hA_c\\theta_b}`} display />
                  </div>
                </div>

                <EquationBox label="관계식" accent="red">
                  <Math tex={`\\varepsilon_f = \\eta_f \\cdot \\frac{A_f}{A_c}`} display />
                </EquationBox>

                <p className="text-sm text-gray-400 text-center mt-4">
                  핀 유효성 = 핀 효율 x (핀 표면적 / 베이스 면적)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="효율 vs 유효성: 어느 것이 중요한가?" accent="blue" icon="vs">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-emerald-300">핀 효율 <Math tex="\eta_f" /></strong>: 핀 자체의 열적 성능. 핀 설계 최적화에 사용.</li>
                <li>&bull; <strong className="text-orange-300">핀 유효성 <Math tex="\varepsilon_f" /></strong>: 핀 사용의 전체적 이점. 핀 사용 여부 결정에 사용.</li>
              </ul>
              <p className="mt-2">
                <strong className="text-white">핀 효율이 낮더라도</strong> (예: <Math tex="\eta_f = 0.5" />),
                표면적 증가가 충분하면 (<Math tex="A_f/A_c > 4" />), <strong className="text-white">핀 유효성은 높을 수 있음</strong> (<Math tex="\varepsilon_f > 2" />).
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. 핀 열저항 */}
          <SectionDivider number="4" title="Fin Thermal Resistance" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀을 <strong className="text-white">열저항</strong> 관점에서 표현하면 열회로 해석에 편리합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                핀 열저항 정의
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">열전달률 = 온도차 / 열저항:</p>
                  <Math tex={`q_f = \\frac{\\theta_b}{R_{t,f}} = \\frac{T_b - T_\\infty}{R_{t,f}}`} display />
                </div>

                <EquationBox label="핀 열저항" accent="red">
                  <Math tex={`R_{t,f} = \\frac{\\theta_b}{q_f} = \\frac{1}{\\eta_f h A_f}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                핀 열저항 해석
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">핀이 없을 때 열저항:</p>
                  <Math tex={`R_{no\\,fin} = \\frac{1}{hA_c}`} display />
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">핀이 있을 때 열저항:</p>
                  <Math tex={`R_{t,f} = \\frac{1}{\\eta_f hA_f}`} display />
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4 text-center">
                <Math tex="A_f \gg A_c" />이고 <Math tex="\eta_f" />가 적당히 높으면, <Math tex="R_{t,f} \ll R_{no\,fin}" />
              </p>
            </div>
          </motion.div>

          {/* 5. 최적 핀 설계 */}
          <SectionDivider number="5" title="Optimal Fin Design" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀 설계에서 주요 트레이드오프는 <strong className="text-white">열전달 vs 재료비/무게</strong>입니다.
              최적 핀 길이를 결정하는 것이 중요합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-6">
                핀 열전달률 vs 핀 길이
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">단열 끝단 핀:</p>
                  <Math tex={`q_f = M\\theta_b\\tanh(mL)`} display />
                </div>

                <p className="text-sm text-gray-400">
                  <Math tex="mL" />이 증가하면 <Math tex="\tanh(mL)" />이 1에 접근하지만, <strong className="text-yellow-300">수확 체감</strong>이 발생합니다:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400">mL</th>
                        <th className="text-left py-2 px-3 text-gray-400">tanh(mL)</th>
                        <th className="text-left py-2 px-3 text-gray-400"><Math tex="q_f/M\theta_b" /></th>
                        <th className="text-left py-2 px-3 text-gray-400">증분 이득</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">1.0</td>
                        <td className="py-2 px-3">0.762</td>
                        <td className="py-2 px-3">76.2%</td>
                        <td className="py-2 px-3">-</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">2.0</td>
                        <td className="py-2 px-3">0.964</td>
                        <td className="py-2 px-3">96.4%</td>
                        <td className="py-2 px-3 text-emerald-400">+20.2%</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">3.0</td>
                        <td className="py-2 px-3">0.995</td>
                        <td className="py-2 px-3">99.5%</td>
                        <td className="py-2 px-3 text-yellow-400">+3.1%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">5.0</td>
                        <td className="py-2 px-3">0.9999</td>
                        <td className="py-2 px-3">99.99%</td>
                        <td className="py-2 px-3 text-red-400">+0.5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="실무 설계 지침" accent="yellow" icon="*">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-yellow-300">권장 범위:</strong> <Math tex="mL = 1 \sim 2" /> (효율 76~96%)</li>
                <li>&bull; <strong className="text-yellow-300">최대 권장:</strong> <Math tex="mL \le 2.5" /> (이 이상은 재료 낭비)</li>
                <li>&bull; <strong className="text-white">무한 핀의 99%:</strong> <Math tex="mL \approx 2.65" /></li>
              </ul>
              <p className="mt-2">
                핀 길이를 2배로 늘려도 열전달 증가는 <Math tex="\sim 20\%" />에 불과할 수 있습니다.
                재료비와 무게를 고려하면 짧은 핀 여러 개가 긴 핀 하나보다 효율적일 수 있습니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. 예제 문제 */}
          <SectionDivider number="6" title="Example Problem" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 4.2: 핀 효율 및 유효성 계산
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 구리 핀(k = 400 W/(m*K))이 다음 조건으로 설치되어 있다:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>&bull; 직사각형 단면: 폭 w = 50 mm, 두께 t = 2 mm</li>
                  <li>&bull; 핀 길이: L = 100 mm</li>
                  <li>&bull; 대류 계수: h = 50 W/(m2*K)</li>
                </ul>
                <p className="mt-4">
                  (a) 핀 효율, (b) 핀 유효성, (c) 핀 열저항을 구하라.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">풀이: 기본 파라미터</p>
                  <div className="space-y-2 text-sm">
                    <Math tex={`A_c = w \\cdot t = 0.05 \\times 0.002 = 10^{-4} \\, \\text{m}^2`} display />
                    <Math tex={`P = 2(w + t) \\approx 2w = 0.1 \\, \\text{m}`} display />
                    <Math tex={`A_f = P \\cdot L = 0.1 \\times 0.1 = 0.01 \\, \\text{m}^2`} display />
                    <Math tex={`m = \\sqrt{\\frac{hP}{kA_c}} = \\sqrt{\\frac{50 \\times 0.1}{400 \\times 10^{-4}}} = \\sqrt{125} = 11.18 \\, \\text{m}^{-1}`} display />
                    <Math tex={`mL = 11.18 \\times 0.1 = 1.118`} display />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">(a) 핀 효율</p>
                  <Math tex={`\\eta_f = \\frac{\\tanh(mL)}{mL} = \\frac{\\tanh(1.118)}{1.118} = \\frac{0.807}{1.118} = \\boxed{0.722 = 72.2\\%}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">(b) 핀 유효성</p>
                  <Math tex={`\\varepsilon_f = \\eta_f \\cdot \\frac{A_f}{A_c} = 0.722 \\times \\frac{0.01}{10^{-4}} = 0.722 \\times 100 = \\boxed{72.2}`} display />
                  <p className="text-sm text-gray-500 mt-2">
                    핀 사용으로 열전달이 72배 증가! 매우 효과적인 핀입니다.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">(c) 핀 열저항</p>
                  <Math tex={`R_{t,f} = \\frac{1}{\\eta_f h A_f} = \\frac{1}{0.722 \\times 50 \\times 0.01} = \\boxed{2.77 \\, \\text{K/W}}`} display />
                  <p className="text-sm text-gray-500 mt-2">
                    비교: 핀 없이 <Math tex="R_{no\,fin} = 1/(hA_c) = 1/(50 \times 10^{-4}) = 200 \text{ K/W}" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="결과 해석" accent="emerald" icon="!">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">핀 효율 72.2%:</strong> 합리적인 수준 (mL = 1.118은 적절한 범위)</li>
                <li>&bull; <strong className="text-white">핀 유효성 72.2:</strong> 매우 높음! 핀이 매우 효과적</li>
                <li>&bull; <strong className="text-white">열저항 감소:</strong> 200 K/W &rarr; 2.77 K/W (72배 감소)</li>
                <li>&bull; <strong className="text-white">높은 유효성의 이유:</strong> 높은 k (구리), 낮은 h (공기 대류), 큰 표면적 비율 (<Math tex="A_f/A_c = 100" />)</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

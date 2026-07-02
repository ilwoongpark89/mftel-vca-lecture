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
  const borderColor = accent === "orange" ? "border-orange-500/30" : accent === "amber" ? "border-amber-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "red" ? "border-red-500/30" : accent === "blue" ? "border-blue-500/30" : "border-slate-700";
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
  accent = "orange",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    amber: { bg: "bg-amber-500/5", border: "border-amber-500/20", text: "text-amber-400", iconBg: "bg-amber-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
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

export default function HorizontalPlate() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Horizontal Flat Plate
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            수평 평판의 자연 대류: 가열면 방향에 따른 열전달 특성
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 수평 평판 특성 */}
          <SectionDivider number="1" title="Horizontal Plate Configurations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              수평 평판의 자연 대류는 <strong className="text-white">가열면이 위를 향하는지 아래를 향하는지</strong>에 따라
              유동 패턴과 열전달 특성이 크게 달라집니다. 이는 부력 방향과 평판 위치의 조합에 따른 것입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                네 가지 경우
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-2">Case 1: 가열면 위 (Hot Surface Up)</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    T<sub>s</sub> &gt; T<sub>&infin;</sub>, 상면 가열
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 뜨거운 유체가 위로 상승</li>
                    <li>&bull; 자연스러운 대류 발생</li>
                    <li>&bull; <strong className="text-white">열전달 양호</strong></li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-2">Case 2: 냉각면 아래 (Cold Surface Down)</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    T<sub>s</sub> &lt; T<sub>&infin;</sub>, 하면 냉각
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 차가운 유체가 아래로 하강</li>
                    <li>&bull; 자연스러운 대류 발생</li>
                    <li>&bull; <strong className="text-white">열전달 양호</strong></li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">Case 3: 가열면 아래 (Hot Surface Down)</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    T<sub>s</sub> &gt; T<sub>&infin;</sub>, 하면 가열
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 뜨거운 유체가 평판에 가로막힘</li>
                    <li>&bull; 안정층 형성 (억제된 대류)</li>
                    <li>&bull; <strong className="text-white">열전달 감소</strong></li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <h5 className="text-amber-400 font-bold mb-2">Case 4: 냉각면 위 (Cold Surface Up)</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    T<sub>s</sub> &lt; T<sub>&infin;</sub>, 상면 냉각
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 차가운 유체가 평판 위에 정체</li>
                    <li>&bull; 안정층 형성 (억제된 대류)</li>
                    <li>&bull; <strong className="text-white">열전달 감소</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="열전달 방향과 부력" accent="orange" icon="B">
              <p className="mb-2">
                자연 대류 열전달은 <strong className="text-white">부력이 유동을 촉진하는 방향</strong>일 때 효과적입니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-red-400">가열면 위</strong> = 냉각면 아래: 불안정 &rarr; 열전달 촉진</li>
                <li>&bull; <strong className="text-cyan-400">가열면 아래</strong> = 냉각면 위: 안정 &rarr; 열전달 억제</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 2. 특성 길이 */}
          <SectionDivider number="2" title="Characteristic Length" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              수평 평판의 특성 길이는 평판 형상에 따라 정의됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
                특성 길이 정의
              </h4>

              <EquationBox label="수평 평판 특성 길이" accent="amber">
                <Math tex={`L = \\frac{A_s}{P}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">형상별 특성 길이</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">형상</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">면적 A<sub>s</sub></th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">둘레 P</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">L = A<sub>s</sub>/P</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3 text-orange-400">정사각형 (a x a)</td>
                        <td className="py-2 px-3">a<sup>2</sup></td>
                        <td className="py-2 px-3">4a</td>
                        <td className="py-2 px-3"><Math tex="a/4" /></td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3 text-amber-400">직사각형 (a x b)</td>
                        <td className="py-2 px-3">ab</td>
                        <td className="py-2 px-3">2(a+b)</td>
                        <td className="py-2 px-3"><Math tex="ab/(2(a+b))" /></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-cyan-400">원형 (직경 D)</td>
                        <td className="py-2 px-3"><Math tex="\pi D^2/4" /></td>
                        <td className="py-2 px-3"><Math tex="\pi D" /></td>
                        <td className="py-2 px-3"><Math tex="D/4" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. 가열면 위 (Hot Surface Up) */}
          <SectionDivider number="3" title="Hot Surface Up / Cold Surface Down" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              가열면이 위를 향하거나 냉각면이 아래를 향하는 경우 (불안정 배열),
              자연 대류가 활발하게 발생합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                가열면 위 상관식
              </h4>

              <div className="space-y-4">
                <EquationBox label="층류 (10^4 < Ra_L < 10^7)" accent="orange">
                  <Math tex={`\\overline{Nu}_L = 0.54 Ra_L^{1/4}`} display />
                </EquationBox>

                <EquationBox label="난류 (10^7 < Ra_L < 10^11)" accent="red">
                  <Math tex={`\\overline{Nu}_L = 0.15 Ra_L^{1/3}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-red-400">전이:</strong> 약 <Math tex="Ra_L \sim 10^7" />에서 전이 시작<br/>
                  층류에서 플룸(plume) 발생, 난류에서 활발한 혼합 발생
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="열 플룸 (Thermal Plume)" accent="red" icon="P">
              <p>
                가열면 위 배열에서는 가열된 유체가 <strong className="text-white">플룸(plume)</strong> 형태로 상승합니다.
                플룸은 평판 중앙부나 가장자리에서 형성되어 주변 유체를 끌어들입니다.
                Ra가 증가하면 다중 플룸이 형성되고 난류 상태로 전이됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. 가열면 아래 (Hot Surface Down) */}
          <SectionDivider number="4" title="Hot Surface Down / Cold Surface Up" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              가열면이 아래를 향하거나 냉각면이 위를 향하는 경우 (안정 배열),
              부력이 유동을 억제하여 열전달이 상대적으로 작습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                가열면 아래 상관식
              </h4>

              <EquationBox label="층류 (10^5 < Ra_L < 10^10)" accent="cyan">
                <Math tex={`\\overline{Nu}_L = 0.27 Ra_L^{1/4}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-cyan-400">특징:</strong><br/>
                  &bull; 계수 0.27 &lt; 0.54 (가열면 위 대비 절반 수준)<br/>
                  &bull; 난류 전이가 거의 발생하지 않음<br/>
                  &bull; 가장자리에서만 약한 대류 발생
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="왜 가열면 아래가 불리한가?" accent="cyan" icon="?">
              <p>
                뜨거운 유체가 상승하려 하지만 평판에 막혀 있습니다.
                유동은 평판 <strong className="text-white">가장자리</strong>로만 빠져나갈 수 있어,
                중앙부에는 정체된 고온층이 형성됩니다.
                결과적으로 열전달이 가열면 위 배열의 약 <strong className="text-cyan-400">절반</strong> 수준입니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 상관식 비교 */}
          <SectionDivider number="5" title="Correlation Summary" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                수평 평판 상관식 요약
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">배열</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">영역</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Ra 범위</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">상관식</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-red-400" rowSpan={2}>가열면 위<br/>(Hot Up)</td>
                      <td className="py-3 px-4">층류</td>
                      <td className="py-3 px-4"><Math tex="10^4 - 10^7" /></td>
                      <td className="py-3 px-4"><Math tex="\overline{Nu} = 0.54 Ra^{1/4}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">난류</td>
                      <td className="py-3 px-4"><Math tex="10^7 - 10^{11}" /></td>
                      <td className="py-3 px-4"><Math tex="\overline{Nu} = 0.15 Ra^{1/3}" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-cyan-400">가열면 아래<br/>(Hot Down)</td>
                      <td className="py-3 px-4">층류</td>
                      <td className="py-3 px-4"><Math tex="10^5 - 10^{10}" /></td>
                      <td className="py-3 px-4"><Math tex="\overline{Nu} = 0.27 Ra^{1/4}" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                * 냉각면 아래 = 가열면 위 상관식 적용 (물리적으로 동등)<br/>
                * 냉각면 위 = 가열면 아래 상관식 적용 (물리적으로 동등)
              </p>
            </div>
          </motion.div>

          {/* 6. 예제 */}
          <SectionDivider number="6" title="Example Problem" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 12.3: 수평 평판 냉각
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 0.4m x 0.4m 정사각형 평판이 온도 120°C로 유지된다.
                  주변 공기 온도 20°C일 때, (a) 가열면 위, (b) 가열면 아래의 열손실을 계산하라.
                </p>
                <p className="mb-4">
                  <strong className="text-white">공기 물성치 (T<sub>f</sub> = 70°C = 343K):</strong><br/>
                  k = 0.0295 W/(m·K), <Math tex="\nu = 20.0 \times 10^{-6}" /> m<sup>2</sup>/s,
                  <Math tex="\alpha = 28.5 \times 10^{-6}" /> m<sup>2</sup>/s, Pr = 0.70
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: 특성 길이 및 Ra 계산</p>
                  <Math tex={`L = \\frac{A_s}{P} = \\frac{0.4 \\times 0.4}{4 \\times 0.4} = 0.1 \\text{ m}`} display />
                  <Math tex={`\\beta = \\frac{1}{343} = 2.92 \\times 10^{-3} \\text{ K}^{-1}`} display />
                  <Math tex={`Ra_L = \\frac{9.81 \\times 2.92 \\times 10^{-3} \\times 100 \\times (0.1)^3}{20.0 \\times 10^{-6} \\times 28.5 \\times 10^{-6}}`} display />
                  <Math tex={`Ra_L = \\frac{9.81 \\times 2.92 \\times 10^{-3} \\times 100 \\times 10^{-3}}{5.7 \\times 10^{-10}} = 5.03 \\times 10^{6}`} display />
                </div>

                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-sm text-red-400 font-bold mb-2">(a) 가열면 위 (Hot Surface Up)</p>
                  <p className="text-sm text-gray-400 mb-2">
                    <Math tex="Ra_L = 5.03 \times 10^6" /> &rarr; 층류 영역 (<Math tex="10^4 < Ra < 10^7" />)
                  </p>
                  <Math tex={`\\overline{Nu}_L = 0.54 Ra_L^{1/4} = 0.54 \\times (5.03 \\times 10^6)^{1/4} = 0.54 \\times 47.4 = 25.6`} display />
                  <Math tex={`\\bar{h} = \\frac{25.6 \\times 0.0295}{0.1} = 7.55 \\text{ W/(m}^2\\text{K)}`} display />
                  <Math tex={`q = \\bar{h} A_s \\Delta T = 7.55 \\times 0.16 \\times 100 = \\boxed{121 \\text{ W}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <p className="text-sm text-cyan-400 font-bold mb-2">(b) 가열면 아래 (Hot Surface Down)</p>
                  <p className="text-sm text-gray-400 mb-2">
                    동일한 Ra<sub>L</sub> 사용
                  </p>
                  <Math tex={`\\overline{Nu}_L = 0.27 Ra_L^{1/4} = 0.27 \\times 47.4 = 12.8`} display />
                  <Math tex={`\\bar{h} = \\frac{12.8 \\times 0.0295}{0.1} = 3.78 \\text{ W/(m}^2\\text{K)}`} display />
                  <Math tex={`q = \\bar{h} A_s \\Delta T = 3.78 \\times 0.16 \\times 100 = \\boxed{60.5 \\text{ W}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">결과 비교</p>
                  <p className="text-sm text-gray-400">
                    가열면 위: <strong className="text-red-400">121 W</strong><br/>
                    가열면 아래: <strong className="text-cyan-400">60.5 W</strong><br/><br/>
                    <strong className="text-white">비율:</strong> 121 / 60.5 = 2.0배<br/>
                    가열면 위 배열이 <strong className="text-white">2배</strong> 효과적
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 7. 설계 시사점 */}
          <SectionDivider number="7" title="Design Implications" />

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="수평 평판 설계 가이드" accent="emerald" icon="HP">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">방열판:</strong> 가열면(핀)을 위로 향하게 배치</li>
                <li>&bull; <strong className="text-white">전자기기:</strong> 발열 부품을 기판 상단에 배치</li>
                <li>&bull; <strong className="text-white">가열 요소:</strong> 히터를 아래에 배치하면 자연 대류 촉진</li>
                <li>&bull; <strong className="text-white">태양열 집열기:</strong> 흡수판 위에 유리 덮개 (대류 억제 활용)</li>
              </ul>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="양면 노출 평판" accent="amber" icon="2">
              <p className="mb-2">
                양면이 공기에 노출된 수평 평판의 경우:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; 상면: 가열면 위 상관식</li>
                <li>&bull; 하면: 가열면 아래 상관식</li>
                <li>&bull; 총 열전달: <Math tex="q_{total} = q_{up} + q_{down}" /></li>
              </ul>
              <p className="text-gray-500 mt-2">
                예제의 경우: q<sub>total</sub> = 121 + 60.5 = 181.5 W
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

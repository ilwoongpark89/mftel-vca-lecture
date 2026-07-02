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
  const borderColor = accent === "orange" ? "border-orange-500/30" : accent === "amber" ? "border-amber-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "red" ? "border-red-500/30" : "border-slate-700";
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

export default function VerticalPlate() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vertical Flat Plate
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            수직 평판의 자연 대류 열전달: 경계층 해석과 상관식
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 수직 평판 개요 */}
          <SectionDivider number="1" title="Vertical Plate Configuration" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">수직 평판(Vertical Flat Plate)</strong>은 자연 대류 연구에서
              가장 기본적인 형상입니다. 평판 온도가 주변 온도보다 높으면 <strong className="text-orange-400">상승 유동</strong>,
              낮으면 <strong className="text-orange-400">하강 유동</strong>이 발생합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                수직 평판 경계층 특성
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-2">가열 평판 (T<sub>s</sub> &gt; T<sub>&infin;</sub>)</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 표면 근처 유체 가열</li>
                    <li>&bull; 밀도 감소 &rarr; 상승 유동</li>
                    <li>&bull; 경계층이 아래에서 위로 발달</li>
                    <li>&bull; 특성 길이: 하단부터 거리 x 또는 전체 높이 L</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">냉각 평판 (T<sub>s</sub> &lt; T<sub>&infin;</sub>)</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 표면 근처 유체 냉각</li>
                    <li>&bull; 밀도 증가 &rarr; 하강 유동</li>
                    <li>&bull; 경계층이 위에서 아래로 발달</li>
                    <li>&bull; 상관식 동일하게 적용 (|T<sub>s</sub>-T<sub>&infin;</sub>| 사용)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. 층류 상관식 */}
          <SectionDivider number="2" title="Laminar Flow Correlations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">층류 영역</strong> (<Math tex="Ra_L < 10^9" />)에서
              다양한 상관식이 개발되었습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                국소 Nusselt Number (층류)
              </h4>

              <EquationBox label="국소 Nu (Ostrach Solution)" accent="orange">
                <Math tex={`Nu_x = \\frac{hx}{k} = \\frac{Gr_x^{1/4}}{\\sqrt{2}} g(Pr)`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  여기서 g(Pr)은 Prandtl 수의 함수:
                </p>
                <Math tex={`g(Pr) = \\frac{0.75 Pr^{1/2}}{(0.609 + 1.221Pr^{1/2} + 1.238Pr)^{1/4}}`} display />
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
                평균 Nusselt Number (층류)
              </h4>

              <EquationBox label="평균 Nu (전체 평판)" accent="amber">
                <Math tex={`\\overline{Nu}_L = \\frac{\\bar{h}L}{k} = \\frac{4}{3} Nu_L = \\frac{4}{3} \\cdot \\frac{Gr_L^{1/4}}{\\sqrt{2}} g(Pr)`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-amber-400">간단한 형태 (공기, Pr ~ 0.7):</strong>
                </p>
                <Math tex={`\\overline{Nu}_L = 0.59 Ra_L^{1/4} \\quad (10^4 < Ra_L < 10^9)`} display />
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="4/3 계수의 의미" accent="amber" icon="4/3">
              <p className="mb-2">
                <Math tex="\overline{Nu} = (4/3) Nu_L" />가 되는 이유:
              </p>
              <Math tex={`\\bar{h} = \\frac{1}{L}\\int_0^L h_x dx = \\frac{1}{L}\\int_0^L C x^{-1/4} dx = \\frac{4}{3} \\frac{C L^{3/4}}{L} = \\frac{4}{3} h_L`} display />
              <p className="text-gray-500 mt-2">
                국소 열전달 계수 <Math tex="h_x \sim x^{-1/4}" />를 적분하면 평균값은 끝점 값의 4/3배가 됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. 전 영역 상관식 */}
          <SectionDivider number="3" title="All-Regime Correlation (Churchill-Chu)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Churchill-Chu 상관식</strong>은 층류와 난류 영역을
              모두 포함하는 가장 널리 사용되는 상관식입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Churchill-Chu Correlation
              </h4>

              <EquationBox label="전 영역 상관식" accent="orange">
                <Math tex={`\\overline{Nu}_L = \\left\\{ 0.825 + \\frac{0.387 Ra_L^{1/6}}{\\left[1 + (0.492/Pr)^{9/16}\\right]^{8/27}} \\right\\}^2`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <h5 className="text-emerald-400 font-bold mb-2">적용 범위</h5>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&bull; <strong>Rayleigh Number:</strong> <Math tex="10^{-1} < Ra_L < 10^{12}" /></li>
                  <li>&bull; <strong>모든 Prandtl Number:</strong> 0 &lt; Pr &lt; &infin;</li>
                  <li>&bull; <strong>등온 평판</strong> (Constant T<sub>s</sub>)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Churchill-Chu 상관식 특징" accent="orange" icon="CC">
              <ul className="space-y-1">
                <li>&bull; 층류-난류 전이를 <strong className="text-white">자연스럽게 포함</strong></li>
                <li>&bull; 낮은 Ra에서 <Math tex="Nu \to 0.825^2 = 0.68" /> (정적 조건)</li>
                <li>&bull; 높은 Ra에서 <Math tex="Nu \sim Ra^{1/3}" /> (난류)</li>
                <li>&bull; <strong className="text-white">가장 권장되는 상관식</strong></li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 4. 층류 전용 (더 정확) */}
          <SectionDivider number="4" title="Laminar-Only Correlation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              층류 영역에서만 적용할 경우, 더 간단하고 정확한 상관식이 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
                층류 전용 (Churchill-Chu, 단순화)
              </h4>

              <EquationBox label="층류 상관식 (Ra < 10^9)" accent="amber">
                <Math tex={`\\overline{Nu}_L = 0.68 + \\frac{0.670 Ra_L^{1/4}}{\\left[1 + (0.492/Pr)^{9/16}\\right]^{4/9}}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-amber-400">공기 (Pr = 0.71)에서 단순화:</strong>
                </p>
                <Math tex={`\\overline{Nu}_L \\approx 0.68 + 0.515 Ra_L^{1/4} \\quad (Ra_L < 10^9)`} display />
              </div>
            </div>
          </motion.div>

          {/* 5. 난류 상관식 */}
          <SectionDivider number="5" title="Turbulent Flow Correlations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">난류 영역</strong> (<Math tex="Ra_L > 10^9" />)에서는
              열전달이 크게 증가합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                난류 영역 상관식
              </h4>

              <EquationBox label="난류 상관식" accent="red">
                <Math tex={`\\overline{Nu}_L = 0.10 Ra_L^{1/3}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">적용 범위 및 특성</h5>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&bull; <Math tex="10^9 < Ra_L < 10^{13}" /></li>
                  <li>&bull; <Math tex="Pr \sim 1" /> (공기, 물)</li>
                  <li>&bull; <Math tex="Nu \sim Ra^{1/3}" />: h가 L에 무관</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="난류에서 h가 L에 무관한 이유" accent="red" icon="T">
              <p className="mb-2">
                난류에서 <Math tex="Nu = hL/k \sim Ra^{1/3} \sim L" />이므로:
              </p>
              <Math tex={`h \\sim \\frac{k}{L} \\cdot L = k = \\text{const}`} display />
              <p className="text-gray-500 mt-2">
                난류 혼합이 지배적이면 경계층 두께 증가가 L 증가와 상쇄됩니다.
                실제로 h는 <Math tex="\Delta T^{1/3}" />에 비례합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. 예제 */}
          <SectionDivider number="6" title="Example Problem" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 12.2: 수직 평판 열전달
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 높이 0.3m, 너비 0.5m의 수직 평판이 25°C 공기 중에 있다.
                  평판 온도가 85°C로 유지될 때, 평판에서의 총 열손실을 계산하라.
                </p>
                <p className="mb-4">
                  <strong className="text-white">공기 물성치 (T<sub>f</sub> = 55°C = 328K):</strong><br/>
                  k = 0.0283 W/(m·K), <Math tex="\nu = 18.6 \times 10^{-6}" /> m<sup>2</sup>/s,
                  <Math tex="\alpha = 26.6 \times 10^{-6}" /> m<sup>2</sup>/s, Pr = 0.70
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: Beta 및 Ra 계산</p>
                  <Math tex={`\\beta = \\frac{1}{T_f} = \\frac{1}{328} = 3.05 \\times 10^{-3} \\text{ K}^{-1}`} display />
                  <Math tex={`Ra_L = \\frac{g\\beta\\Delta T L^3}{\\nu \\alpha} = \\frac{9.81 \\times 3.05 \\times 10^{-3} \\times 60 \\times (0.3)^3}{18.6 \\times 10^{-6} \\times 26.6 \\times 10^{-6}}`} display />
                  <Math tex={`Ra_L = \\frac{9.81 \\times 3.05 \\times 10^{-3} \\times 60 \\times 0.027}{4.95 \\times 10^{-10}} = 9.85 \\times 10^{7}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 2: 유동 영역 확인</p>
                  <p className="text-sm text-gray-400">
                    <Math tex="Ra_L = 9.85 \times 10^7 < 10^9" /> &rarr; <strong className="text-emerald-400">층류</strong>
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: Churchill-Chu 상관식 적용</p>
                  <p className="text-sm text-gray-400 mb-2">층류 전용 상관식 사용:</p>
                  <Math tex={`\\overline{Nu}_L = 0.68 + \\frac{0.670 Ra_L^{1/4}}{[1 + (0.492/0.70)^{9/16}]^{4/9}}`} display />
                  <Math tex={`\\overline{Nu}_L = 0.68 + \\frac{0.670 \\times (9.85 \\times 10^7)^{1/4}}{[1 + 0.627]^{4/9}}`} display />
                  <Math tex={`\\overline{Nu}_L = 0.68 + \\frac{0.670 \\times 99.6}{1.23} = 0.68 + 54.2 = 54.9`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 4: 열전달 계수 및 열전달량</p>
                  <Math tex={`\\bar{h} = \\frac{\\overline{Nu}_L \\cdot k}{L} = \\frac{54.9 \\times 0.0283}{0.3} = 5.18 \\text{ W/(m}^2\\text{K)}`} display />
                  <Math tex={`A_s = 2 \\times 0.3 \\times 0.5 = 0.3 \\text{ m}^2 \\quad (\\text{양면})`} display />
                  <Math tex={`q = \\bar{h} A_s \\Delta T = 5.18 \\times 0.3 \\times 60 = \\boxed{93.2 \\text{ W}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">검증: 간단한 상관식</p>
                  <p className="text-sm text-gray-400">
                    <Math tex="\overline{Nu} = 0.59 Ra^{1/4} = 0.59 \times 99.6 = 58.8" /> (약간 높음)<br/>
                    Churchill-Chu 상관식이 더 정확함
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 7. 수직 원통 */}
          <SectionDivider number="7" title="Vertical Cylinder" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              수직 원통의 경우, 곡률 효과가 작으면 수직 평판 상관식을 그대로 적용할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
                수직 원통 적용 조건
              </h4>

              <EquationBox label="평판 상관식 적용 조건" accent="amber">
                <Math tex={`\\frac{D}{L} \\geq \\frac{35}{Gr_L^{1/4}}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  이 조건을 만족하면 경계층 두께가 원통 반지름에 비해 충분히 작아서,
                  곡률 효과를 무시할 수 있습니다. 그렇지 않으면 별도의 원통 상관식을 사용해야 합니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="상관식 선택 가이드" accent="emerald" icon="VP">
              <div className="overflow-x-auto">
                <table className="w-full text-sm mt-2">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-2 text-gray-400 font-medium">조건</th>
                      <th className="text-left py-2 px-2 text-gray-400 font-medium">권장 상관식</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-2">전 영역 (<Math tex="10^{-1} < Ra < 10^{12}" />)</td>
                      <td className="py-2 px-2">Churchill-Chu (전 영역)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-2">층류 (<Math tex="Ra < 10^9" />)</td>
                      <td className="py-2 px-2">Churchill-Chu (층류 전용)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2">빠른 계산 (공기)</td>
                      <td className="py-2 px-2"><Math tex="Nu = 0.59 Ra^{1/4}" /> 또는 <Math tex="0.10 Ra^{1/3}" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

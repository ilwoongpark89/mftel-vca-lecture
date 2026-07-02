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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "teal",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "teal" ? "border-teal-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "yellow" ? "border-yellow-500/30" : accent === "red" ? "border-red-500/30" : accent === "purple" ? "border-purple-500/30" : "border-slate-700";
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
  accent = "teal",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    teal: { bg: "bg-teal-500/5", border: "border-teal-500/20", text: "text-teal-400", iconBg: "bg-teal-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", iconBg: "bg-purple-500/20" },
  };
  const c = colors[accent] || colors.teal;
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

function ThinkLikeEngineer({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border-2 border-purple-500/40 bg-gradient-to-br from-purple-500/10 to-slate-950 p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-300 text-lg font-bold">
          E
        </span>
        <div>
          <span className="text-xs uppercase tracking-wider text-purple-400 font-medium">Think Like an Engineer</span>
          <h4 className="text-lg font-bold text-white">{title}</h4>
        </div>
      </div>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}

function DecisionTree() {
  return (
    <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-6">
      <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6 text-center">
        Correlation Selection Decision Tree
      </h4>

      <div className="space-y-4">
        {/* Level 1: Flow Type */}
        <div className="flex justify-center">
          <div className="p-3 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-400 font-bold text-center">
            Start: What drives the flow?
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-px h-8 bg-slate-600" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
              External Force<br />(pump, fan, wind)
            </div>
            <div className="w-px h-6 bg-slate-600 mx-auto" />
            <div className="p-2 rounded-lg bg-slate-800 text-gray-300 text-xs">
              Forced Convection<br />Use Re, Pr
            </div>
          </div>
          <div className="text-center">
            <div className="p-2 rounded-lg bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-medium">
              Both<br />(Gr/Re^2 ~ 1)
            </div>
            <div className="w-px h-6 bg-slate-600 mx-auto" />
            <div className="p-2 rounded-lg bg-slate-800 text-gray-300 text-xs">
              Mixed Convection<br />Special correlations
            </div>
          </div>
          <div className="text-center">
            <div className="p-2 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium">
              Buoyancy only<br />(temperature diff)
            </div>
            <div className="w-px h-6 bg-slate-600 mx-auto" />
            <div className="p-2 rounded-lg bg-slate-800 text-gray-300 text-xs">
              Natural Convection<br />Use Ra, Pr
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
          <p className="text-sm text-gray-400 mb-2"><strong className="text-white">For Forced Convection:</strong></p>
          <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-400">
            <div>
              <p className="text-cyan-400 font-medium mb-1">Internal Flow (pipe, duct)</p>
              <ul className="space-y-1">
                <li>- Laminar (Re &lt; 2300): Nu = 3.66 or 4.36</li>
                <li>- Turbulent (Re &gt; 10000): Dittus-Boelter or Gnielinski</li>
              </ul>
            </div>
            <div>
              <p className="text-emerald-400 font-medium mb-1">External Flow (plate, cylinder)</p>
              <ul className="space-y-1">
                <li>- Flat plate: Blasius-based correlations</li>
                <li>- Cylinder/Sphere: Churchill-Bernstein, Whitaker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConvectionCorrelations() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            Part 6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Convection Correlations Overview
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            상관식의 유도 철학, 유효 범위와 한계, 불확도 정량화, 그리고 어떤 상관식을 언제 사용할지에 대해 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 상관식의 철학 */}
          <SectionDivider number="1" title="Philosophy of Correlation Development" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              대류 열전달 상관식은 단순한 curve fitting이 아닙니다.
              <strong className="text-white">물리적 이론</strong>에 기반한 함수 형태에
              실험 데이터를 맞추는 과정입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Why Correlations Have These Forms
              </h4>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-teal-400 font-bold mb-3">1. Power-law form from dimensional analysis</h5>
                  <Math tex={`Nu = C \\cdot Re^m \\cdot Pr^n`} display />
                  <p className="text-sm text-gray-400 mt-2">
                    Pi theorem은 Nu = f(Re, Pr)만 알려줌. 멱법칙(power-law)은 가장 일반적인 함수 형태.
                    Exponents m, n은 물리적 의미를 가짐.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-3">2. Exponents from boundary layer analysis</h5>
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <p className="text-sm text-gray-400 mb-1">층류 (Blasius 해석):</p>
                      <Math tex={`Nu \\propto Re^{1/2} Pr^{1/3}`} display />
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/50">
                      <p className="text-sm text-gray-400 mb-1">난류 (경험적):</p>
                      <Math tex={`Nu \\propto Re^{0.8} Pr^{0.3-0.4}`} display />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-3">
                    <Math tex="Re^{1/2}" />는 층류 경계층 두께의 x 의존성, <Math tex="Pr^{1/3}" />은 열/속도 경계층 비율에서 유도.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-cyan-400 font-bold mb-3">3. Coefficients from experimental data</h5>
                  <p className="text-sm text-gray-400">
                    C = 0.664, 0.023, 0.3 등의 계수는 <strong className="text-white">실험 데이터</strong>로부터 결정.
                    수백~수천 개의 데이터 포인트를 log-log plot에서 regression.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="왜 Nu ~ Re^0.8인가? (난류)" accent="orange" icon="?">
              <p className="mb-2">
                난류에서 <Math tex="Nu \\propto Re^{0.8}" />의 물리적 해석:
              </p>
              <ul className="space-y-1 mt-2">
                <li><span className="text-orange-400">*</span> 난류 경계층 두께: <Math tex="\\delta \\propto x/Re^{0.2}" /></li>
                <li><span className="text-orange-400">*</span> 열전달은 경계층 두께에 반비례: <Math tex="h \\propto 1/\\delta" /></li>
                <li><span className="text-orange-400">*</span> 따라서: <Math tex="Nu = hL/k \\propto Re^{0.2} \\cdot Re^{0.6} = Re^{0.8}" /></li>
              </ul>
              <p className="mt-2 text-gray-500">
                0.8 = 1 - 0.2 (난류 경계층 성장률) + 0.6 추가 난류 mixing 효과
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. Validity Ranges and Limitations */}
          <SectionDivider number="2" title="Validity Ranges and Limitations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              모든 상관식에는 <strong className="text-white">유효 범위</strong>가 있습니다.
              이 범위를 벗어나면 예측 정확도가 급격히 저하됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-6">
                Common Validity Constraints
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">상관식</th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">Re 범위</th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">Pr 범위</th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">기타 제한</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-3 text-emerald-400 font-medium">Flat Plate Laminar</td>
                      <td className="py-3 px-3">&lt; 5e5</td>
                      <td className="py-3 px-3">&gt; 0.6</td>
                      <td className="py-3 px-3 text-gray-400">등온 or 등열유속</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-3 text-red-400 font-medium">Flat Plate Turbulent</td>
                      <td className="py-3 px-3">5e5 - 10^8</td>
                      <td className="py-3 px-3">0.6 - 60</td>
                      <td className="py-3 px-3 text-gray-400">Smooth surface</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-3 text-cyan-400 font-medium">Dittus-Boelter</td>
                      <td className="py-3 px-3">&gt; 10^4</td>
                      <td className="py-3 px-3">0.7 - 160</td>
                      <td className="py-3 px-3 text-gray-400">L/D &gt; 10, fully developed</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-3 text-teal-400 font-medium">Gnielinski</td>
                      <td className="py-3 px-3">3000 - 5e6</td>
                      <td className="py-3 px-3">0.5 - 2000</td>
                      <td className="py-3 px-3 text-gray-400">More accurate for transition</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-3 text-orange-400 font-medium">Churchill-Bernstein (Cyl)</td>
                      <td className="py-3 px-3">Any (Re.Pr &gt; 0.2)</td>
                      <td className="py-3 px-3">Any</td>
                      <td className="py-3 px-3 text-gray-400">Comprehensive range</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-purple-400 font-medium">Vertical Plate Natural</td>
                      <td className="py-3 px-3">-</td>
                      <td className="py-3 px-3">Any</td>
                      <td className="py-3 px-3 text-gray-400">10^-1 &lt; Ra &lt; 10^12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="범위 외 사용의 위험성" accent="red" icon="!">
              <p className="mb-2">
                상관식의 유효 범위를 벗어나면:
              </p>
              <ul className="space-y-1 mt-2">
                <li><span className="text-red-400">*</span> Pr &lt; 0.6에서 Flat plate 상관식: 액체 금속에 부적합 (특수 상관식 필요)</li>
                <li><span className="text-red-400">*</span> Re &lt; 10^4에서 Dittus-Boelter: 천이 영역, 큰 오차</li>
                <li><span className="text-red-400">*</span> L/D &lt; 10에서 완전 발달 가정: 입구 효과 무시로 h 과소평가</li>
              </ul>
              <p className="mt-2 text-gray-500">
                항상 논문 원문에서 유효 범위 확인!
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. Uncertainty Quantification */}
          <SectionDivider number="3" title="Uncertainty Quantification" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              모든 상관식에는 <strong className="text-white">불확도</strong>가 있습니다.
              실무에서는 이 불확도를 고려한 설계가 필수입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Typical Uncertainty Levels
              </h4>

              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                    <h5 className="text-emerald-400 font-bold mb-2">Analytical Solutions</h5>
                    <p className="text-2xl font-bold text-emerald-400 mb-1">1-5%</p>
                    <p className="text-xs text-gray-400">
                      층류 완전발달 (Nu = 3.66, 4.36)<br />
                      Blasius 층류 평판
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                    <h5 className="text-yellow-400 font-bold mb-2">Well-established</h5>
                    <p className="text-2xl font-bold text-yellow-400 mb-1">15-25%</p>
                    <p className="text-xs text-gray-400">
                      Dittus-Boelter (난류 관내)<br />
                      Churchill-Chu (자연 대류)
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                    <h5 className="text-red-400 font-bold mb-2">Complex Flows</h5>
                    <p className="text-2xl font-bold text-red-400 mb-1">30-50%</p>
                    <p className="text-xs text-gray-400">
                      천이 영역<br />
                      복잡한 형상, 혼합 대류
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-3">불확도의 원인</h5>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                    <div>
                      <p className="font-medium text-white mb-1">실험적 요인:</p>
                      <ul className="space-y-1">
                        <li>- 측정 장비 정확도</li>
                        <li>- 경계 조건 불확실성</li>
                        <li>- 데이터 산포</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">모델링 요인:</p>
                      <ul className="space-y-1">
                        <li>- 단순화된 함수 형태</li>
                        <li>- 물성치 온도 의존성</li>
                        <li>- 형상 차이</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <ThinkLikeEngineer title="Safety Factor in Design">
              <p className="mb-4">
                <strong>문제:</strong> 열교환기 설계에서 상관식으로 h = 500 W/(m^2.K)를 계산했습니다.
                25% 불확도를 고려하면 설계 면적을 어떻게 정해야 할까요?
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/30 mb-4">
                <p className="text-sm text-purple-400 font-bold mb-2">Engineering Approach:</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>1. <strong>최악 케이스:</strong> h_min = 500 * (1 - 0.25) = 375 W/(m^2.K)</li>
                  <li>2. <strong>필요 면적:</strong> A = Q / (h * LMTD)</li>
                  <li>3. <strong>설계 면적:</strong> A_design = A_calculated * (1.25 to 1.33)</li>
                  <li>4. <strong>Overdesign factor:</strong> 1/(1-0.25) = 1.33 또는 sqrt(1.25^2 + 1) = 1.6 (conservative)</li>
                </ul>
              </div>

              <p className="text-sm text-gray-400">
                <strong className="text-white">실무 관례:</strong>
                <span className="text-purple-400 font-bold"> 10-30% fouling margin</span>과
                <span className="text-purple-400 font-bold"> 15-25% correlation uncertainty</span>를 별도로 고려.
                총 overdesign은 보통 30-50% 정도. 비용과 신뢰성의 trade-off.
              </p>
            </ThinkLikeEngineer>
          </motion.div>

          {/* 4. Decision Tree */}
          <SectionDivider number="4" title="When to Use Which Correlation" />

          <motion.div {...stagger} className="mb-8">
            <DecisionTree />
          </motion.div>

          {/* 5. 주요 상관식 상세 */}
          <SectionDivider number="5" title="Key Correlations in Detail" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Isothermal Flat Plate (등온 평판)
              </h4>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-3">층류 (Laminar): <Math tex="Re_x < 5 \times 10^5" /></h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <EquationBox label="Local Nu" accent="emerald">
                      <Math tex={`Nu_x = 0.332 \\, Re_x^{1/2} \\, Pr^{1/3}`} display />
                    </EquationBox>
                    <EquationBox label="Average Nu" accent="emerald">
                      <Math tex={`\\overline{Nu}_L = 0.664 \\, Re_L^{1/2} \\, Pr^{1/3}`} display />
                    </EquationBox>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    유효 범위: <Math tex="Pr > 0.6" /> | 이론적 유도 (Blasius + Pohlhausen)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-3">난류 (Turbulent): <Math tex="Re_x > 5 \times 10^5" /></h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <EquationBox label="Local Nu" accent="red">
                      <Math tex={`Nu_x = 0.0296 \\, Re_x^{4/5} \\, Pr^{1/3}`} display />
                    </EquationBox>
                    <EquationBox label="Average Nu (전체 난류)" accent="red">
                      <Math tex={`\\overline{Nu}_L = 0.037 \\, Re_L^{4/5} \\, Pr^{1/3}`} display />
                    </EquationBox>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">유효 범위: <Math tex="0.6 < Pr < 60" /> | 경험적</p>
                </div>

                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-3">혼합 경계층 (Mixed): 선단 층류 + 후방 난류</h5>
                  <EquationBox label="Average Nu" accent="orange">
                    <Math tex={`\\overline{Nu}_L = (0.037 \\, Re_L^{4/5} - 871) \\, Pr^{1/3}`} display />
                  </EquationBox>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    871 = 0.037*(5e5)^0.8 - 0.664*(5e5)^0.5 (연속성 보정)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Fully Developed Internal Flow (원관)
              </h4>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-3">층류 완전 발달: <Math tex="Re_D < 2300" /></h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <EquationBox label="등온 벽면 (Constant Ts)" accent="emerald">
                      <Math tex={`Nu_D = 3.66`} display />
                    </EquationBox>
                    <EquationBox label="등열유속 (Constant q'')" accent="emerald">
                      <Math tex={`Nu_D = 4.36`} display />
                    </EquationBox>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    해석해! 불확도 &lt; 5% (완전 발달 조건 만족 시)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-3">난류 완전 발달</h5>

                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-slate-950/80">
                      <p className="text-sm text-red-400 font-bold mb-2">Dittus-Boelter (1930)</p>
                      <Math tex={`Nu_D = 0.023 \\, Re_D^{0.8} \\, Pr^n`} display />
                      <p className="text-xs text-gray-400 mt-2">
                        n = 0.4 (가열), n = 0.3 (냉각) |
                        <span className="text-yellow-400"> Re &gt; 10^4, 0.7 &lt; Pr &lt; 160, L/D &gt; 10</span>
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/80">
                      <p className="text-sm text-teal-400 font-bold mb-2">Gnielinski (1976) - 더 정확</p>
                      <Math tex={`Nu_D = \\frac{(f/8)(Re_D - 1000)Pr}{1 + 12.7(f/8)^{1/2}(Pr^{2/3}-1)}`} display />
                      <p className="text-xs text-gray-400 mt-2">
                        f = (0.790 ln Re - 1.64)^-2 |
                        <span className="text-emerald-400"> 3000 &lt; Re &lt; 5e6, 0.5 &lt; Pr &lt; 2000</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. Comparison with Experimental Data */}
          <SectionDivider number="6" title="Comparison with Experimental Data" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Dittus-Boelter vs Experimental Data
              </h4>

              <p className="text-gray-400 mb-4">
                아래는 다양한 연구자들의 실험 결과와 Dittus-Boelter 상관식의 비교입니다:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">Researcher</th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">Fluid</th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">Re Range</th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">Deviation</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-3">McAdams (1942)</td>
                      <td className="py-3 px-3">Air</td>
                      <td className="py-3 px-3">10^4 - 10^5</td>
                      <td className="py-3 px-3 text-emerald-400">+/- 20%</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-3">Sieder-Tate (1936)</td>
                      <td className="py-3 px-3">Water, oils</td>
                      <td className="py-3 px-3">10^4 - 10^6</td>
                      <td className="py-3 px-3 text-yellow-400">+/- 25%</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-3">Petukhov (1970)</td>
                      <td className="py-3 px-3">Various</td>
                      <td className="py-3 px-3">10^4 - 5x10^6</td>
                      <td className="py-3 px-3 text-emerald-400">+/- 10% (own corr.)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3">Gnielinski (1976)</td>
                      <td className="py-3 px-3">Various</td>
                      <td className="py-3 px-3">3000 - 5x10^6</td>
                      <td className="py-3 px-3 text-emerald-400">+/- 10%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">핵심 인사이트:</strong> Dittus-Boelter는 단순하지만 불확도가 20-25%.
                  더 정확한 설계가 필요하면 Gnielinski (10%) 또는 Petukhov-Kirillov 상관식 사용.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 7. Problem-Solving Procedure */}
          <SectionDivider number="7" title="Systematic Problem-Solving" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6 text-center">
                7-Step Problem-Solving Procedure
              </h4>

              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">문제 분류</strong><br />
                    강제 대류? 자연 대류? 내부 유동? 외부 유동?
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">물성치 온도 결정</strong><br />
                    Film temp <Math tex="T_f = (T_s + T_\\infty)/2" />, Bulk temp <Math tex="T_m" />, 또는 상관식 지정 온도
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">유체 물성치 결정</strong><br />
                    <Math tex="\\rho, \\mu, k, c_p, Pr" /> (또는 <Math tex="\\beta" /> for 자연 대류)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">무차원수 계산</strong><br />
                    Re (또는 Gr, Ra), Pr 계산. <span className="text-yellow-400">특성 길이 주의!</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">적절한 상관식 선택</strong><br />
                    유동 형태, Re/Ra 범위, 형상, 경계조건에 맞는 상관식. <span className="text-yellow-400">유효범위 확인!</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold">6</span>
                  <div>
                    <strong className="text-white">Nu 계산 후 h 결정</strong><br />
                    <Math tex="h = Nu \\cdot k / L" /> - k와 L은 상관식에서 사용한 것과 일치해야 함
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold">7</span>
                  <div>
                    <strong className="text-white">Newton의 법칙 적용 + 불확도 고려</strong><br />
                    <Math tex="q = hA_s(T_s - T_\\infty)" /> + safety factor (1.2-1.5x)
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="반복 계산 (Iteration)" accent="orange" icon="!">
              <p className="mb-2">
                표면 온도 <Math tex="T_s" />가 미지수인 경우, <strong className="text-orange-400">반복 계산</strong>이 필요합니다:
              </p>
              <ol className="space-y-1 mt-2 text-sm">
                <li>1. <Math tex="T_s" /> 가정 (예: T_inf와 예상 T_s의 중간)</li>
                <li>2. 물성치 및 h 계산</li>
                <li>3. 에너지 균형으로 새 <Math tex="T_s" /> 계산</li>
                <li>4. 수렴할 때까지 반복 (보통 2-3회)</li>
              </ol>
              <p className="mt-2 text-gray-500">
                자연 대류에서 특히 자주 발생 (h가 <Math tex="\\Delta T" />에 의존).
                spreadsheet나 코드로 자동화 가능.
              </p>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <ThinkLikeEngineer title="Complete Design Example">
              <p className="mb-4">
                <strong>문제:</strong> 직경 25 mm, 길이 3 m 스테인리스 관에 물(T_in = 20 C)이 0.5 kg/s로 흐릅니다.
                관 벽면은 90 C로 유지됩니다. 출구 온도와 필요한 가열량을 구하시오.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/30 mb-4">
                <p className="text-sm text-purple-400 font-bold mb-2">Solution:</p>
                <ol className="text-sm text-gray-400 space-y-2">
                  <li><strong>1. 분류:</strong> 강제 대류, 내부 유동</li>
                  <li><strong>2. 물성치:</strong> Bulk temp 가정 T_m ~ 50 C
                    <br />rho = 988 kg/m^3, mu = 5.5e-4 Pa.s, k = 0.643 W/(m.K), Pr = 3.6, cp = 4178 J/(kg.K)</li>
                  <li><strong>3. Re 계산:</strong>
                    <br />V = m_dot / (rho * A) = 0.5 / (988 * pi * 0.0125^2) = 1.03 m/s
                    <br />Re = rho * V * D / mu = 988 * 1.03 * 0.025 / 5.5e-4 = 46,300 (난류)</li>
                  <li><strong>4. 상관식:</strong> Dittus-Boelter (Re &gt; 10^4, 가열)
                    <br />Nu = 0.023 * (46300)^0.8 * (3.6)^0.4 = 220</li>
                  <li><strong>5. h 계산:</strong> h = Nu * k / D = 220 * 0.643 / 0.025 = 5660 W/(m^2.K)</li>
                  <li><strong>6. 출구 온도:</strong> epsilon-NTU 또는 log-mean method
                    <br />NTU = h * pi * D * L / (m_dot * cp) = 5660 * pi * 0.025 * 3 / (0.5 * 4178) = 0.64
                    <br />epsilon = 1 - exp(-NTU) = 0.47
                    <br />T_out = T_in + epsilon * (T_s - T_in) = 20 + 0.47 * 70 = 53 C</li>
                  <li><strong>7. 가열량:</strong> Q = m_dot * cp * (T_out - T_in) = 0.5 * 4178 * 33 = 69 kW</li>
                </ol>
              </div>

              <p className="text-sm text-gray-400">
                <strong className="text-white">검증:</strong> T_m_actual = (20 + 53)/2 = 36.5 C vs assumed 50 C.
                물성치 재계산 필요? Pr과 mu 변화가 ~20%, h 변화 ~10%. 엔지니어링 정확도에서는 OK.
                더 정확한 결과 위해 반복 계산 또는 구간별 계산 수행 가능.
              </p>
            </ThinkLikeEngineer>
          </motion.div>

          {/* 8. Quick Reference */}
          <SectionDivider number="8" title="Quick Reference Table" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6 overflow-x-auto">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-4">
                주요 상관식 Quick Reference
              </h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">형상/유동</th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">조건</th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">상관식</th>
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">불확도</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-3 text-emerald-400">평판 (층류)</td>
                    <td className="py-3 px-3"><Math tex="Re_L < 5 \\times 10^5" /></td>
                    <td className="py-3 px-3"><Math tex="\\overline{Nu}_L = 0.664 Re_L^{0.5} Pr^{1/3}" /></td>
                    <td className="py-3 px-3 text-emerald-400">5%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-3 text-red-400">평판 (난류)</td>
                    <td className="py-3 px-3">전체 난류</td>
                    <td className="py-3 px-3"><Math tex="\\overline{Nu}_L = 0.037 Re_L^{0.8} Pr^{1/3}" /></td>
                    <td className="py-3 px-3 text-yellow-400">20%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-3 text-cyan-400">원관 (층류)</td>
                    <td className="py-3 px-3">완전 발달, 등온</td>
                    <td className="py-3 px-3"><Math tex="Nu_D = 3.66" /></td>
                    <td className="py-3 px-3 text-emerald-400">5%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-3 text-red-400">원관 (난류)</td>
                    <td className="py-3 px-3">Dittus-Boelter</td>
                    <td className="py-3 px-3"><Math tex="Nu_D = 0.023 Re_D^{0.8} Pr^n" /></td>
                    <td className="py-3 px-3 text-yellow-400">25%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-3 text-teal-400">원관 (난류)</td>
                    <td className="py-3 px-3">Gnielinski</td>
                    <td className="py-3 px-3">See above</td>
                    <td className="py-3 px-3 text-emerald-400">10%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-orange-400">수직판 (자연)</td>
                    <td className="py-3 px-3">Churchill-Chu</td>
                    <td className="py-3 px-3">See above</td>
                    <td className="py-3 px-3 text-yellow-400">15%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "cyan",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "emerald" ? "border-emerald-500/30" : "border-slate-700";
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
  accent = "cyan",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
  };
  const c = colors[accent] || colors.cyan;
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

export default function InternalCorrelations() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Internal Flow Correlations
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dittus-Boelter, Sieder-Tate, Gnielinski 상관식과 적용 조건
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 층류 상관식 요약 */}
          <SectionDivider number="1" title="Laminar Flow Summary" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                완전 발달 층류 (Re &lt; 2300)
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <EquationBox label="Constant Ts" accent="cyan">
                  <Math tex={`Nu_D = 3.66`} display />
                </EquationBox>
                <EquationBox label="Constant q''s" accent="orange">
                  <Math tex={`Nu_D = 4.36`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">입구 영역 (Combined Entry):</strong>
                </p>
                <Math tex={`\\overline{Nu}_D = 1.86\\left(Re_D Pr \\frac{D}{L}\\right)^{1/3}\\left(\\frac{\\mu}{\\mu_s}\\right)^{0.14}`} display />
                <p className="text-xs text-gray-500 mt-2">
                  Sieder-Tate 식: <Math tex="Re_D Pr(D/L) \\geq 10" />, <Math tex="Pr \\geq 0.6" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. Dittus-Boelter */}
          <SectionDivider number="2" title="Dittus-Boelter Correlation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Dittus-Boelter 상관식</strong>은 가장 널리 사용되는
              난류 내부 유동 열전달 상관식입니다. 완전 발달 난류 유동에 적용됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Dittus-Boelter Equation
              </h4>

              <EquationBox label="난류 완전 발달 유동" accent="cyan">
                <Math tex={`Nu_D = 0.023 \\, Re_D^{0.8} \\, Pr^n`} display />
              </EquationBox>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-2">가열 (Heating): n = 0.4</h5>
                  <p className="text-sm text-gray-400">
                    <Math tex="T_s > T_m" /><br />
                    유체가 가열되는 경우
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-2">냉각 (Cooling): n = 0.3</h5>
                  <p className="text-sm text-gray-400">
                    <Math tex="T_s < T_m" /><br />
                    유체가 냉각되는 경우
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">적용 조건</h5>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>- <Math tex="Re_D \\geq 10,000" /> (완전 난류)</li>
                  <li>- <Math tex="0.6 \\leq Pr \\leq 160" /></li>
                  <li>- <Math tex="L/D \\geq 10" /> (완전 발달)</li>
                  <li>- 매끈한 관</li>
                </ul>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                물성치는 <strong className="text-white">평균 온도 <Math tex="T_m" /></strong>에서 평가
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="n값의 물리적 의미" accent="cyan" icon="n">
              <p className="mb-2">
                가열과 냉각에서 n이 다른 이유:
              </p>
              <ul className="space-y-1 mt-2">
                <li>- <strong className="text-white">가열:</strong> 벽면 근처 점도 감소 → 속도 증가 → 열전달 촉진</li>
                <li>- <strong className="text-white">냉각:</strong> 벽면 근처 점도 증가 → 속도 감소 → 열전달 억제</li>
              </ul>
              <p className="mt-2 text-gray-500">
                n = 0.4 (가열)이 0.3 (냉각)보다 커서 같은 조건에서 가열이 유리합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. Sieder-Tate */}
          <SectionDivider number="3" title="Sieder-Tate Correlation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Sieder-Tate 상관식</strong>은 점도 변화가 큰 유체
              (특히 오일)에 적합합니다. 점도비 보정항을 포함합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Sieder-Tate Equation
              </h4>

              <EquationBox label="점도 보정 포함" accent="orange">
                <Math tex={`Nu_D = 0.027 \\, Re_D^{0.8} \\, Pr^{1/3} \\left(\\frac{\\mu}{\\mu_s}\\right)^{0.14}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">적용 조건</h5>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>- <Math tex="Re_D \\geq 10,000" /></li>
                  <li>- <Math tex="0.7 \\leq Pr \\leq 16,700" /></li>
                  <li>- <Math tex="L/D \\geq 10" /></li>
                  <li>- <Math tex="\\mu" />: bulk temperature에서 평가</li>
                  <li>- <Math tex="\\mu_s" />: 표면 온도에서 평가</li>
                </ul>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-sm text-yellow-400 font-bold mb-1">점도비 효과</p>
                <p className="text-sm text-gray-400">
                  <Math tex="\\mu/\\mu_s > 1" /> (가열): Nu 증가 (점도 감소로 유동 촉진)<br />
                  <Math tex="\\mu/\\mu_s < 1" /> (냉각): Nu 감소 (점도 증가로 유동 억제)
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. Gnielinski */}
          <SectionDivider number="4" title="Gnielinski Correlation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Gnielinski 상관식</strong>은 가장 정확한 것으로 알려진
              상관식입니다. 천이 영역까지 적용 가능하며, 마찰 계수를 포함합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Gnielinski Equation (권장)
              </h4>

              <EquationBox label="천이 및 난류 영역" accent="emerald">
                <Math tex={`Nu_D = \\frac{(f/8)(Re_D - 1000)Pr}{1 + 12.7(f/8)^{1/2}(Pr^{2/3} - 1)}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-emerald-400 font-bold mb-2">마찰 계수 (Petukhov)</p>
                <Math tex={`f = (0.790 \\ln Re_D - 1.64)^{-2}`} display />
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">적용 조건</h5>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>- <Math tex="3000 \\leq Re_D \\leq 5 \\times 10^6" /> <strong className="text-emerald-400">(천이 영역 포함!)</strong></li>
                  <li>- <Math tex="0.5 \\leq Pr \\leq 2000" /></li>
                  <li>- 물성치는 bulk temperature에서 평가</li>
                </ul>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                정확도: <strong className="text-emerald-400">약 ±10%</strong> (가장 정확)
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Gnielinski의 장점" accent="emerald" icon="G">
              <ul className="space-y-2">
                <li>- <strong className="text-white">천이 영역</strong> (Re = 2300 ~ 10000) 적용 가능</li>
                <li>- 실험 데이터와의 일치도가 가장 높음</li>
                <li>- 마찰 계수를 통해 <strong className="text-white">표면 거칠기 효과</strong> 반영 가능</li>
                <li>- 가열/냉각 구분 없이 사용 (점도 보정 추가 가능)</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 5. 상관식 비교 */}
          <SectionDivider number="5" title="Correlation Comparison" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                난류 상관식 비교표
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400">상관식</th>
                      <th className="text-left py-3 px-4 text-gray-400">Re 범위</th>
                      <th className="text-left py-3 px-4 text-gray-400">Pr 범위</th>
                      <th className="text-left py-3 px-4 text-gray-400">특징</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Dittus-Boelter</td>
                      <td className="py-3 px-4">&ge; 10,000</td>
                      <td className="py-3 px-4">0.6 ~ 160</td>
                      <td className="py-3 px-4">간단, 널리 사용</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">Sieder-Tate</td>
                      <td className="py-3 px-4">&ge; 10,000</td>
                      <td className="py-3 px-4">0.7 ~ 16,700</td>
                      <td className="py-3 px-4">점도 변화 큰 유체 (오일)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-emerald-400">Gnielinski</td>
                      <td className="py-3 px-4">3,000 ~ 5M</td>
                      <td className="py-3 px-4">0.5 ~ 2,000</td>
                      <td className="py-3 px-4">가장 정확, 천이 영역 포함</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="어떤 상관식을 사용할까?" accent="blue" icon="?">
              <ol className="space-y-2">
                <li>1. <strong className="text-emerald-400">Gnielinski</strong>: 대부분의 경우 권장 (가장 정확)</li>
                <li>2. <strong className="text-cyan-400">Dittus-Boelter</strong>: 빠른 추정, 기체나 물</li>
                <li>3. <strong className="text-orange-400">Sieder-Tate</strong>: 오일, 고점도 유체</li>
              </ol>
              <p className="mt-2 text-gray-500">
                천이 영역 (2300 &lt; Re &lt; 10000)에서는 반드시 Gnielinski 사용!
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. 입구 효과 보정 */}
          <SectionDivider number="6" title="Entry Length Correction" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                짧은 관에서의 입구 효과 보정
              </h4>

              <p className="text-gray-400 mb-4">
                <Math tex="L/D < 10" />인 경우 입구 효과로 인해 Nu가 증가합니다:
              </p>

              <EquationBox label="입구 효과 보정" accent="cyan">
                <Math tex={`\\overline{Nu}_D = Nu_{D,fd}\\left[1 + \\left(\\frac{D}{L}\\right)^{2/3}\\right]`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">또는 Gnielinski 형태:</strong>
                </p>
                <Math tex={`\\overline{Nu}_D = Nu_D\\left[1 + \\left(\\frac{D}{L}\\right)^{0.7}\\right]`} display />
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                입구 영역에서 경계층이 얇아 열전달이 향상됩니다.
              </p>
            </div>
          </motion.div>

          {/* 7. 액체 금속 */}
          <SectionDivider number="7" title="Liquid Metals" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                액체 금속 (Pr &lt;&lt; 1)
              </h4>

              <p className="text-gray-400 mb-4">
                나트륨, 리튬, 수은 등 액체 금속은 Pr이 매우 작습니다 (0.001 ~ 0.03).
                일반 상관식 적용 불가!
              </p>

              <div className="space-y-4">
                <EquationBox label="Constant q''s (Skupinski)" accent="blue">
                  <Math tex={`Nu_D = 4.82 + 0.0185 \\, Pe^{0.827}`} display />
                </EquationBox>

                <EquationBox label="Constant Ts (Seban-Shimazaki)" accent="blue">
                  <Math tex={`Nu_D = 5.0 + 0.025 \\, Pe^{0.8}`} display />
                </EquationBox>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-blue-400">Peclet 수:</strong>
                </p>
                <Math tex={`Pe = Re \\cdot Pr = \\frac{u_m D}{\\alpha}`} display />
                <p className="text-xs text-gray-500 mt-2">
                  적용 범위: <Math tex="10^2 < Pe < 10^4" />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="액체 금속의 특성" accent="blue" icon="Na">
              <ul className="space-y-2">
                <li>- 열전도도가 매우 높음 → 높은 열전달 계수</li>
                <li>- Pr &lt;&lt; 1 → 열 경계층이 속도 경계층보다 훨씬 두꺼움</li>
                <li>- 원자력 발전소 냉각재로 사용 (나트륨 냉각로)</li>
                <li>- 일반 상관식 사용 불가 → 전용 상관식 필요</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

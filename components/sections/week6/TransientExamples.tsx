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
  const borderColor = accent === "emerald" ? "border-emerald-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "red" ? "border-red-500/30" : "border-slate-700";
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
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
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

export default function TransientExamples() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            Part 5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Worked Examples
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Lumped Capacitance Method를 적용하여 다양한 비정상 열전달 문제를 해결합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Example 1: Steel Ball Quenching */}
          <SectionDivider number="1" title="Steel Ball Quenching" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                Problem Statement
              </h4>
              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  직경 <strong className="text-white">D = 4 cm</strong>인 스테인리스강 구가
                  초기 온도 <strong className="text-white">T_i = 500°C</strong>에서
                  온도 <strong className="text-white">T_infinity = 20°C</strong>인 기름에 담금질됩니다.
                  대류 열전달 계수는 <strong className="text-white">h = 300 W/(m^2 K)</strong>입니다.
                </p>
                <p className="mb-4">
                  <strong className="text-emerald-400">스테인리스강 물성:</strong> rho = 7900 kg/m^3, c_p = 477 J/(kg K), k = 14.9 W/(m K)
                </p>
                <p>
                  <strong className="text-white">구하시오:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                  <li>Lumped Capacitance Method 적용 가능 여부</li>
                  <li>시간 상수 tau</li>
                  <li>100°C에 도달하는 시간</li>
                  <li>2분 후의 온도</li>
                  <li>2분 동안 전달된 열량</li>
                </ol>
              </div>

              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4 mt-8">
                Solution
              </h4>

              <div className="space-y-6">
                {/* Step 1: Validity Check */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: Lumped Capacitance Validity</p>
                  <Math tex={`L_c = \\frac{V}{A_s} = \\frac{(4/3)\\pi r^3}{4\\pi r^2} = \\frac{r}{3} = \\frac{0.02}{3} = 6.67 \\times 10^{-3} \\text{ m}`} display />
                  <Math tex={`\\text{Bi} = \\frac{hL_c}{k} = \\frac{300 \\times 6.67 \\times 10^{-3}}{14.9} = 0.134`} display />
                  <p className="text-sm text-gray-400 mt-3">
                    <strong className="text-yellow-400">Bi = 0.134 &gt; 0.1</strong> - 엄격한 기준은 만족하지 않지만,
                    0.1에 가까우므로 <strong className="text-white">근사적으로 적용 가능</strong>합니다.
                    더 정확한 해석이 필요하면 Heisler 차트를 사용해야 합니다.
                  </p>
                </div>

                {/* Step 2: Time Constant */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 2: Time Constant</p>
                  <Math tex={`\\tau = \\frac{\\rho V c_p}{hA_s} = \\frac{\\rho c_p L_c}{h} = \\frac{7900 \\times 477 \\times 6.67 \\times 10^{-3}}{300}`} display />
                  <Math tex={`\\tau = \\boxed{83.8 \\text{ s}} \\approx 1.4 \\text{ min}`} display />
                </div>

                {/* Step 3: Time to reach 100°C */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: Time to Reach 100°C</p>
                  <Math tex={`\\frac{T - T_\\infty}{T_i - T_\\infty} = e^{-t/\\tau}`} display />
                  <Math tex={`\\frac{100 - 20}{500 - 20} = e^{-t/83.8}`} display />
                  <Math tex={`0.1667 = e^{-t/83.8}`} display />
                  <Math tex={`t = -83.8 \\ln(0.1667) = 83.8 \\times 1.79 = \\boxed{150 \\text{ s}} \\approx 2.5 \\text{ min}`} display />
                </div>

                {/* Step 4: Temperature at t = 2 min */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 4: Temperature at t = 2 min (120 s)</p>
                  <Math tex={`T(120) = T_\\infty + (T_i - T_\\infty)e^{-120/83.8}`} display />
                  <Math tex={`T(120) = 20 + (500 - 20)e^{-1.43}`} display />
                  <Math tex={`T(120) = 20 + 480 \\times 0.239 = \\boxed{135°\\text{C}}`} display />
                </div>

                {/* Step 5: Heat Transferred */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 5: Heat Transferred in 2 min</p>
                  <Math tex={`V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (0.02)^3 = 3.35 \\times 10^{-5} \\text{ m}^3`} display />
                  <Math tex={`Q = \\rho V c_p (T_i - T_\\infty)[1 - e^{-t/\\tau}]`} display />
                  <Math tex={`Q = 7900 \\times 3.35 \\times 10^{-5} \\times 477 \\times 480 \\times (1 - 0.239)`} display />
                  <Math tex={`Q = \\boxed{46.1 \\text{ kJ}}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Key Observations" accent="emerald" icon="!">
              <ul className="space-y-2">
                <li>&bull; Bi가 0.1보다 약간 크지만 Lumped 근사로 합리적인 결과를 얻음</li>
                <li>&bull; 100°C에 도달하는 데 약 1.8 tau (2.5분) 소요</li>
                <li>&bull; 2분 동안 최대 열량의 약 76% 전달</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* Example 2: Thermocouple Response */}
          <SectionDivider number="2" title="Thermocouple Response Time" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                Problem Statement
              </h4>
              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  직경 <strong className="text-white">D = 1 mm</strong>인 구형 열전대 접합부가
                  초기 온도 <strong className="text-white">T_i = 25°C</strong>에서
                  온도 <strong className="text-white">T_infinity = 200°C</strong>인 가스 흐름에 삽입됩니다.
                  대류 열전달 계수는 <strong className="text-white">h = 400 W/(m^2 K)</strong>입니다.
                </p>
                <p className="mb-4">
                  <strong className="text-blue-400">열전대 물성 (Constantan):</strong> rho = 8920 kg/m^3, c_p = 384 J/(kg K), k = 23 W/(m K)
                </p>
                <p>
                  <strong className="text-white">구하시오:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                  <li>Lumped Capacitance Method 적용 가능 여부</li>
                  <li>시간 상수 (응답 시간)</li>
                  <li>가스 온도의 99%를 표시하는 데 걸리는 시간</li>
                  <li>실제 온도가 199°C일 때 열전대가 표시하는 온도</li>
                </ol>
              </div>

              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4 mt-8">
                Solution
              </h4>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-blue-400 font-bold mb-2">Step 1: Validity Check</p>
                  <Math tex={`L_c = \\frac{r}{3} = \\frac{0.0005}{3} = 1.67 \\times 10^{-4} \\text{ m}`} display />
                  <Math tex={`\\text{Bi} = \\frac{hL_c}{k} = \\frac{400 \\times 1.67 \\times 10^{-4}}{23} = \\boxed{0.0029}`} display />
                  <p className="text-sm text-emerald-400 mt-3">
                    <strong>Bi = 0.0029 &lt;&lt; 0.1</strong> - Lumped Capacitance Method 완벽하게 적용 가능!
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-blue-400 font-bold mb-2">Step 2: Time Constant</p>
                  <Math tex={`\\tau = \\frac{\\rho c_p L_c}{h} = \\frac{8920 \\times 384 \\times 1.67 \\times 10^{-4}}{400}`} display />
                  <Math tex={`\\tau = \\boxed{1.43 \\text{ s}}`} display />
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-blue-400 font-bold mb-2">Step 3: Time to Read 99% of Gas Temperature</p>
                  <p className="text-sm text-gray-400 mb-3">
                    99%를 읽는다는 것은 온도차가 초기값의 1%로 줄어든다는 의미:
                  </p>
                  <Math tex={`\\frac{T - T_\\infty}{T_i - T_\\infty} = 0.01 = e^{-t/\\tau}`} display />
                  <Math tex={`t = -\\tau \\ln(0.01) = 1.43 \\times 4.605 = \\boxed{6.6 \\text{ s}}`} display />
                  <p className="text-sm text-gray-400 mt-3">
                    또는 <Math tex="t \\approx 5\\tau" />를 사용하면 <Math tex="t \\approx 7.15" /> s (근사)
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-blue-400 font-bold mb-2">Step 4: Reading Error When Gas is 199°C</p>
                  <p className="text-sm text-gray-400 mb-3">
                    가스 온도가 200°C에서 199°C로 1°C 변했을 때, 열전대는 얼마나 빨리 따라가는가?
                    정상상태에서 1°C 차이가 발생하려면:
                  </p>
                  <Math tex={`\\Delta T = (T_\\infty^{old} - T_\\infty^{new})(1 - e^{-t/\\tau})`} display />
                  <p className="text-sm text-gray-400 mt-3">
                    만약 가스 온도가 갑자기 199°C로 바뀌고 열전대가 여전히 200°C를 표시한다면,
                    이는 <strong className="text-white">1 tau (1.43 s) 이내에 0.63°C 조정</strong>됨을 의미합니다.
                  </p>
                  <p className="text-sm text-yellow-400 mt-3">
                    빠른 온도 변동을 측정하려면 더 작은 열전대(더 작은 tau)가 필요합니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Sensor Design Implications" accent="blue" icon="S">
              <ul className="space-y-2">
                <li>&bull; 작은 센서 = 작은 tau = 빠른 응답</li>
                <li>&bull; 직경 1mm 열전대: tau ~ 1.4 s</li>
                <li>&bull; 직경 0.1mm 열전대: tau ~ 0.014 s (100배 빠름!)</li>
                <li>&bull; 빠른 과도 현상 측정에는 가능한 작은 센서 사용</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* Example 3: Aluminum Plate Heating */}
          <SectionDivider number="3" title="Aluminum Plate Heating" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                Problem Statement
              </h4>
              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  두께 <strong className="text-white">2L = 5 mm</strong>, 가로세로 <strong className="text-white">30 cm x 30 cm</strong>인
                  알루미늄 판이 초기 온도 <strong className="text-white">T_i = 25°C</strong>에서
                  온도 <strong className="text-white">T_infinity = 300°C</strong>인 가열 오븐에 넣어집니다.
                  양면에서 대류가 발생하며 <strong className="text-white">h = 80 W/(m^2 K)</strong>입니다.
                </p>
                <p className="mb-4">
                  <strong className="text-orange-400">알루미늄 물성:</strong> rho = 2702 kg/m^3, c_p = 903 J/(kg K), k = 237 W/(m K)
                </p>
                <p>
                  <strong className="text-white">구하시오:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                  <li>Lumped Capacitance Method 적용 가능 여부</li>
                  <li>시간 상수</li>
                  <li>150°C에 도달하는 시간</li>
                  <li>250°C에 도달하는 시간</li>
                </ol>
              </div>

              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4 mt-8">
                Solution
              </h4>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">Step 1: Validity Check</p>
                  <p className="text-sm text-gray-400 mb-3">
                    양면에서 대류가 발생하는 평판의 경우, A_s = 2A (상면 + 하면)
                  </p>
                  <Math tex={`L_c = \\frac{V}{A_s} = \\frac{A \\cdot 2L}{2A} = L = 2.5 \\times 10^{-3} \\text{ m}`} display />
                  <Math tex={`\\text{Bi} = \\frac{hL_c}{k} = \\frac{80 \\times 2.5 \\times 10^{-3}}{237} = \\boxed{8.44 \\times 10^{-4}}`} display />
                  <p className="text-sm text-emerald-400 mt-3">
                    <strong>Bi = 0.00084 &lt;&lt; 0.1</strong> - Lumped Capacitance Method 매우 적합!
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">Step 2: Time Constant</p>
                  <Math tex={`\\tau = \\frac{\\rho c_p L_c}{h} = \\frac{2702 \\times 903 \\times 2.5 \\times 10^{-3}}{80}`} display />
                  <Math tex={`\\tau = \\boxed{76.3 \\text{ s}} \\approx 1.27 \\text{ min}`} display />
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">Step 3: Time to Reach 150°C</p>
                  <Math tex={`\\frac{T - T_\\infty}{T_i - T_\\infty} = \\frac{150 - 300}{25 - 300} = \\frac{-150}{-275} = 0.545`} display />
                  <Math tex={`t = -\\tau \\ln(0.545) = -76.3 \\times (-0.607) = \\boxed{46.3 \\text{ s}}`} display />
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">Step 4: Time to Reach 250°C</p>
                  <Math tex={`\\frac{250 - 300}{25 - 300} = \\frac{-50}{-275} = 0.182`} display />
                  <Math tex={`t = -\\tau \\ln(0.182) = -76.3 \\times (-1.704) = \\boxed{130 \\text{ s}} \\approx 2.2 \\text{ min}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Heating vs. Cooling" accent="orange" icon="H">
              <p>
                이 예제는 <strong className="text-orange-400">가열(Heating)</strong> 문제입니다.
                수학적으로 냉각과 동일한 공식이 적용됩니다.
              </p>
              <ul className="mt-2 space-y-1">
                <li>&bull; 150°C (중간): ~ 0.6 tau 소요</li>
                <li>&bull; 250°C (90.9% 완료): ~ 1.7 tau 소요</li>
                <li>&bull; 알루미늄의 높은 k로 인해 매우 작은 Bi</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* Example 4: Copper Wire Cooling */}
          <SectionDivider number="4" title="Copper Wire Cooling" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                Problem Statement
              </h4>
              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  직경 <strong className="text-white">D = 2 mm</strong>, 길이 <strong className="text-white">L = 1 m</strong>인
                  구리 전선이 전류가 차단된 후 초기 온도 <strong className="text-white">T_i = 150°C</strong>에서
                  온도 <strong className="text-white">T_infinity = 25°C</strong>인 공기 중에서 자연 대류로 냉각됩니다.
                  <strong className="text-white">h = 15 W/(m^2 K)</strong>입니다.
                </p>
                <p className="mb-4">
                  <strong className="text-cyan-400">구리 물성:</strong> rho = 8933 kg/m^3, c_p = 385 J/(kg K), k = 401 W/(m K)
                </p>
                <p>
                  <strong className="text-white">구하시오:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                  <li>Biot 수와 적용 가능성</li>
                  <li>50°C에 도달하는 시간</li>
                  <li>냉각 과정에서 방출되는 총 열량</li>
                </ol>
              </div>

              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4 mt-8">
                Solution
              </h4>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Step 1: Validity Check (Long Cylinder)</p>
                  <p className="text-sm text-gray-400 mb-3">
                    긴 원통의 경우, 끝면의 열전달은 무시하고 측면만 고려:
                  </p>
                  <Math tex={`L_c = \\frac{V}{A_s} = \\frac{\\pi r^2 L}{2\\pi r L} = \\frac{r}{2} = \\frac{0.001}{2} = 5 \\times 10^{-4} \\text{ m}`} display />
                  <Math tex={`\\text{Bi} = \\frac{hL_c}{k} = \\frac{15 \\times 5 \\times 10^{-4}}{401} = \\boxed{1.87 \\times 10^{-5}}`} display />
                  <p className="text-sm text-emerald-400 mt-3">
                    <strong>Bi = 0.0000187 &lt;&lt; 0.1</strong> - 구리의 매우 높은 k로 인해 완벽하게 적용 가능!
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Step 2: Time Constant</p>
                  <Math tex={`\\tau = \\frac{\\rho c_p L_c}{h} = \\frac{8933 \\times 385 \\times 5 \\times 10^{-4}}{15}`} display />
                  <Math tex={`\\tau = \\boxed{114.7 \\text{ s}} \\approx 1.9 \\text{ min}`} display />
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Step 3: Time to Reach 50°C</p>
                  <Math tex={`\\frac{50 - 25}{150 - 25} = 0.2`} display />
                  <Math tex={`t = -\\tau \\ln(0.2) = -114.7 \\times (-1.609) = \\boxed{185 \\text{ s}} \\approx 3.1 \\text{ min}`} display />
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Step 4: Total Heat Released</p>
                  <Math tex={`V = \\pi r^2 L = \\pi \\times (0.001)^2 \\times 1 = 3.14 \\times 10^{-6} \\text{ m}^3`} display />
                  <Math tex={`Q_{max} = \\rho V c_p (T_i - T_\\infty)`} display />
                  <Math tex={`Q_{max} = 8933 \\times 3.14 \\times 10^{-6} \\times 385 \\times (150 - 25)`} display />
                  <Math tex={`Q_{max} = \\boxed{1350 \\text{ J}} = 1.35 \\text{ kJ}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Example 5: Battery Cell Cooling */}
          <SectionDivider number="5" title="Li-ion Battery Cell Cooling" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                Problem Statement (실용 예제)
              </h4>
              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  리튬이온 배터리 원통형 셀(18650 규격: 직경 18 mm, 높이 65 mm)이
                  빠른 충전 후 <strong className="text-white">T_i = 55°C</strong>에서
                  주위 온도 <strong className="text-white">T_infinity = 25°C</strong>까지 냉각됩니다.
                  자연 대류 조건에서 <strong className="text-white">h = 10 W/(m^2 K)</strong>입니다.
                </p>
                <p className="mb-4">
                  <strong className="text-red-400">유효 배터리 물성 (평균):</strong> rho = 2500 kg/m^3, c_p = 1000 J/(kg K), k = 3 W/(m K)
                </p>
                <p>
                  <strong className="text-white">구하시오:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                  <li>Lumped Capacitance 적용 가능성</li>
                  <li>안전 온도 35°C에 도달하는 시간</li>
                  <li>강제 대류(h = 50 W/m^2K)로 변경 시 냉각 시간</li>
                </ol>
              </div>

              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4 mt-8">
                Solution
              </h4>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-red-400 font-bold mb-2">Step 1: Validity Check</p>
                  <p className="text-sm text-gray-400 mb-3">
                    원통의 경우, 상면, 하면, 측면 모두 고려:
                  </p>
                  <Math tex={`V = \\pi r^2 H = \\pi \\times (0.009)^2 \\times 0.065 = 1.65 \\times 10^{-5} \\text{ m}^3`} display />
                  <Math tex={`A_s = 2\\pi r^2 + 2\\pi r H = 2\\pi(0.009)^2 + 2\\pi(0.009)(0.065) = 4.18 \\times 10^{-3} \\text{ m}^2`} display />
                  <Math tex={`L_c = \\frac{V}{A_s} = \\frac{1.65 \\times 10^{-5}}{4.18 \\times 10^{-3}} = 3.95 \\times 10^{-3} \\text{ m}`} display />
                  <Math tex={`\\text{Bi} = \\frac{hL_c}{k} = \\frac{10 \\times 3.95 \\times 10^{-3}}{3} = \\boxed{0.0132}`} display />
                  <p className="text-sm text-emerald-400 mt-3">
                    <strong>Bi = 0.013 &lt; 0.1</strong> - Lumped Capacitance 적용 가능
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-red-400 font-bold mb-2">Step 2: Time Constant (Natural Convection)</p>
                  <Math tex={`\\tau = \\frac{\\rho c_p L_c}{h} = \\frac{2500 \\times 1000 \\times 3.95 \\times 10^{-3}}{10} = \\boxed{988 \\text{ s}} \\approx 16.5 \\text{ min}`} display />
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-red-400 font-bold mb-2">Step 3: Time to Reach 35°C</p>
                  <Math tex={`\\frac{35 - 25}{55 - 25} = \\frac{10}{30} = 0.333`} display />
                  <Math tex={`t = -988 \\times \\ln(0.333) = 988 \\times 1.10 = \\boxed{1087 \\text{ s}} \\approx 18 \\text{ min}`} display />
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-red-400 font-bold mb-2">Step 4: With Forced Convection (h = 50 W/m^2K)</p>
                  <Math tex={`\\tau_{forced} = \\frac{\\rho c_p L_c}{h} = \\frac{2500 \\times 1000 \\times 3.95 \\times 10^{-3}}{50} = 197.5 \\text{ s}`} display />
                  <Math tex={`t_{forced} = -197.5 \\times \\ln(0.333) = \\boxed{217 \\text{ s}} \\approx 3.6 \\text{ min}`} display />
                  <p className="text-sm text-emerald-400 mt-3">
                    강제 대류로 냉각 시간이 <strong className="text-white">18분에서 3.6분으로 5배 단축</strong>!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Battery Thermal Management Insights" accent="red" icon="B">
              <ul className="space-y-2">
                <li>&bull; 배터리의 낮은 k (3 W/mK)는 내부 열 축적 위험</li>
                <li>&bull; 자연 대류만으로는 냉각이 느림 (tau ~ 16분)</li>
                <li>&bull; 강제 대류 또는 액침 냉각으로 h를 높여 빠른 냉각 달성</li>
                <li>&bull; 실제 배터리 팩에서는 셀 간 간격, 냉각 유로 설계가 중요</li>
                <li>&bull; 침수식 냉각 (h ~ 1000-5000 W/m^2K)으로 획기적 개선 가능</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* Summary of Examples */}
          <SectionDivider number="6" title="Summary of Problem-Solving Steps" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-slate-950 p-8">
              <h4 className="text-xl font-bold text-yellow-400 mb-6 text-center">
                Lumped Capacitance Problem-Solving Procedure
              </h4>

              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">물성 및 조건 파악:</strong> rho, c_p, k, h, 초기 온도, 주위 온도, 형상/치수
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">특성 길이 계산:</strong> <Math tex="L_c = V/A_s" /> (형상에 따라 계산)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">Biot 수 계산:</strong> <Math tex="\\text{Bi} = hL_c/k" /> - Bi &lt; 0.1 확인!
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">시간 상수 계산:</strong> <Math tex="\\tau = \\rho c_p L_c / h" />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">해 적용:</strong> <Math tex="(T - T_\\infty)/(T_i - T_\\infty) = e^{-t/\\tau}" />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold">6</span>
                  <div>
                    <strong className="text-white">필요시 열전달량 계산:</strong> <Math tex="Q = \\rho V c_p (T_i - T_\\infty)[1 - e^{-t/\\tau}]" />
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

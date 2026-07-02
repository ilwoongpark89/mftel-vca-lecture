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
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
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

export default function FinArrays() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fin Arrays and Overall Surface Efficiency
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            핀 배열과 전체 표면 효율을 분석하고 실제 열교환기 설계에 적용합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 핀 배열 소개 */}
          <SectionDivider number="1" title="Fin Arrays" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              실제 열전달 장치에서는 하나의 핀이 아닌 <strong className="text-white">다수의 핀이 배열</strong>되어 사용됩니다.
              히트싱크, 자동차 라디에이터, 에어컨 열교환기 등이 대표적인 예입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                핀 배열의 특징
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-white font-bold mb-3">전체 표면의 구성</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">&bull;</span>
                      <span><strong className="text-white">핀 표면적 <Math tex="A_f" />:</strong> 핀 자체의 표면</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">&bull;</span>
                      <span><strong className="text-white">베이스 표면적 <Math tex="A_b" />:</strong> 핀 사이의 노출된 베이스</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">&bull;</span>
                      <span><strong className="text-white">총 표면적 <Math tex="A_t" />:</strong> <Math tex="A_t = N \cdot A_f + A_b" /></span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-bold mb-3">핀 배열에서의 열전달</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">&bull;</span>
                      <span>핀을 통한 열전달 (효율 <Math tex="\eta_f" /> 적용)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">&bull;</span>
                      <span>베이스를 통한 직접 대류 (효율 = 1)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">&bull;</span>
                      <span>전체 표면 효율 <Math tex="\eta_o" />로 통합 표현</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. 총 열전달률 */}
          <SectionDivider number="2" title="Total Heat Transfer Rate" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀 배열을 통한 총 열전달률은 핀을 통한 열전달과 베이스 표면을 통한 열전달의 합입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                총 열전달률 유도
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">N개의 동일한 핀이 있는 배열:</p>
                  <Math tex={`q_t = N \\cdot q_f + q_b`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">각 항을 전개:</p>
                  <Math tex={`q_t = N \\cdot \\eta_f h A_f \\theta_b + h A_b \\theta_b`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">정리하면:</p>
                  <Math tex={`q_t = h\\theta_b(N\\eta_f A_f + A_b)`} display />
                </div>

                <EquationBox label="총 열전달률" accent="red">
                  <Math tex={`q_t = h\\theta_b\\left[A_t - N A_f(1 - \\eta_f)\\right]`} display />
                </EquationBox>

                <p className="text-sm text-gray-400 text-center mt-2">
                  여기서 <Math tex="A_t = NA_f + A_b" /> (총 표면적)
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. 전체 표면 효율 */}
          <SectionDivider number="3" title="Overall Surface Efficiency" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">전체 표면 효율(Overall Surface Efficiency)</strong> <Math tex="\eta_o" />는
              핀 배열 전체가 마치 <Math tex="\eta_o" />의 효율을 가진 하나의 표면처럼 작동한다고 볼 수 있게 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                전체 표면 효율 정의
              </h4>

              <EquationBox label="정의" accent="red">
                <Math tex={`\\eta_o = \\frac{q_t}{q_{max}} = \\frac{q_t}{hA_t\\theta_b}`} display />
              </EquationBox>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">총 열전달률 대입:</p>
                  <Math tex={`\\eta_o = \\frac{h\\theta_b[A_t - NA_f(1 - \\eta_f)]}{hA_t\\theta_b}`} display />
                </div>

                <EquationBox label="전체 표면 효율" accent="red">
                  <Math tex={`\\eta_o = 1 - \\frac{NA_f}{A_t}(1 - \\eta_f) = 1 - \\frac{A_f}{A_t}(1 - \\eta_f)`} display />
                </EquationBox>

                <p className="text-sm text-gray-400 text-center mt-2">
                  (마지막 형태는 N개 핀의 총 핀 표면적을 <Math tex="A_f" />로 표기한 경우)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="전체 표면 효율의 의미" accent="red" icon="eta_o">
              <p className="mb-2">
                전체 표면 효율 <Math tex="\eta_o" />를 사용하면 복잡한 핀 배열의 열전달을 간단히 표현할 수 있습니다:
              </p>
              <Math tex={`q_t = \\eta_o h A_t \\theta_b = \\eta_o h A_t (T_b - T_\\infty)`} display />
              <ul className="space-y-1 mt-2">
                <li>&bull; <Math tex="\eta_o" />는 항상 <Math tex="\eta_f < \eta_o < 1" /> 범위에 있음</li>
                <li>&bull; 핀이 없으면 (<Math tex="A_f = 0" />): <Math tex="\eta_o = 1" /></li>
                <li>&bull; <Math tex="\eta_f = 1" />이면: <Math tex="\eta_o = 1" /></li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 4. 열저항 표현 */}
          <SectionDivider number="4" title="Thermal Resistance of Finned Surface" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀 배열 표면의 열저항을 정의하여 열회로 해석에 적용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                핀 배열 표면의 열저항
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">열전달률과 열저항의 관계:</p>
                  <Math tex={`q_t = \\frac{\\theta_b}{R_{t,o}} = \\frac{T_b - T_\\infty}{R_{t,o}}`} display />
                </div>

                <EquationBox label="핀 배열 표면의 열저항" accent="red">
                  <Math tex={`R_{t,o} = \\frac{\\theta_b}{q_t} = \\frac{1}{\\eta_o h A_t}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                열저항 비교
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">상황</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">열저항</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">핀 없음 (bare surface)</td>
                      <td className="py-3 px-4"><Math tex="R_{bare} = 1/(hA_b)" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">핀 1개</td>
                      <td className="py-3 px-4"><Math tex="R_{t,f} = 1/(\eta_f h A_f)" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-red-400">핀 배열 전체</td>
                      <td className="py-3 px-4 font-bold text-red-400"><Math tex="R_{t,o} = 1/(\eta_o h A_t)" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 5. 열교환기 응용 */}
          <SectionDivider number="5" title="Application to Heat Exchangers" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀은 열교환기, 특히 <strong className="text-white">공기-액체 열교환기</strong>에서 공기 측의 열저항을 줄이는 데 필수적입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                열교환기 열저항 회로
              </h4>

              <p className="text-sm text-gray-400 mb-6 text-center">
                고온 유체 &rarr; 대류 (내부) &rarr; 벽 전도 &rarr; 대류 (외부, 핀) &rarr; 저온 유체
              </p>

              <EquationBox label="총괄 열저항" accent="blue">
                <Math tex={`R_{tot} = \\frac{1}{h_i A_i} + \\frac{\\ln(r_o/r_i)}{2\\pi kL} + \\frac{1}{\\eta_o h_o A_{t,o}}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400 mb-2">총괄 열전달 계수 (내부 면적 기준):</p>
                <Math tex={`U_i = \\frac{1}{R_{tot} \\cdot A_i} = \\frac{1}{\\frac{1}{h_i} + \\frac{A_i \\ln(r_o/r_i)}{2\\pi kL} + \\frac{A_i}{\\eta_o h_o A_{t,o}}}`} display />
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="핀의 역할 in 열교환기" accent="blue" icon="HX">
              <p className="mb-2">
                공기-물 열교환기에서 일반적인 열전달 계수:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-blue-300">물 측:</strong> h ~ 1,000 ~ 10,000 W/(m2*K)</li>
                <li>&bull; <strong className="text-blue-300">공기 측:</strong> h ~ 25 ~ 100 W/(m2*K)</li>
              </ul>
              <p className="mt-2">
                공기 측 열저항이 지배적이므로, 핀으로 <Math tex="A_{t,o}" />를 10~20배 증가시켜 열저항을 낮춥니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. 종합 예제 */}
          <SectionDivider number="6" title="Comprehensive Example" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 4.3: 히트싱크 열해석
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 알루미늄 히트싱크(k = 200 W/(m*K))가 다음 사양으로 제작되었다:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>&bull; 베이스: 60mm x 60mm x 5mm</li>
                  <li>&bull; 핀: 10개의 직사각형 핀, 높이 L = 40mm, 두께 t = 2mm, 폭 w = 60mm</li>
                  <li>&bull; 핀 간격: 4mm (핀 사이 공간)</li>
                  <li>&bull; 대류 계수: h = 25 W/(m2*K) (강제 대류)</li>
                  <li>&bull; 주위 온도: <Math tex="T_\infty" /> = 30 C</li>
                  <li>&bull; 열 발생: Q = 50 W (CPU)</li>
                </ul>
                <p className="mt-4">
                  (a) 핀 효율, (b) 전체 표면 효율, (c) 베이스 온도를 구하라.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">풀이: 기본 파라미터</p>
                  <div className="space-y-2 text-sm">
                    <Math tex={`A_c = w \\cdot t = 0.06 \\times 0.002 = 1.2 \\times 10^{-4} \\, \\text{m}^2`} display />
                    <Math tex={`P \\approx 2w = 0.12 \\, \\text{m}`} display />
                    <Math tex={`m = \\sqrt{\\frac{hP}{kA_c}} = \\sqrt{\\frac{25 \\times 0.12}{200 \\times 1.2 \\times 10^{-4}}} = \\sqrt{125} = 11.18 \\, \\text{m}^{-1}`} display />
                    <Math tex={`mL = 11.18 \\times 0.04 = 0.447`} display />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">(a) 핀 효율</p>
                  <Math tex={`\\eta_f = \\frac{\\tanh(mL)}{mL} = \\frac{\\tanh(0.447)}{0.447} = \\frac{0.419}{0.447} = \\boxed{0.937 = 93.7\\%}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">면적 계산</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400">단일 핀 표면적 (양면):</p>
                    <Math tex={`A_{f,single} = 2wL = 2 \\times 0.06 \\times 0.04 = 4.8 \\times 10^{-3} \\, \\text{m}^2`} display />
                    <p className="text-gray-400">총 핀 표면적 (N=10):</p>
                    <Math tex={`NA_f = 10 \\times 4.8 \\times 10^{-3} = 0.048 \\, \\text{m}^2`} display />
                    <p className="text-gray-400">베이스 노출 면적 (핀 사이 9개 공간):</p>
                    <Math tex={`A_b = 9 \\times 0.004 \\times 0.06 = 2.16 \\times 10^{-3} \\, \\text{m}^2`} display />
                    <p className="text-gray-400">총 표면적:</p>
                    <Math tex={`A_t = NA_f + A_b = 0.048 + 0.00216 = 0.0502 \\, \\text{m}^2`} display />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">(b) 전체 표면 효율</p>
                  <Math tex={`\\eta_o = 1 - \\frac{NA_f}{A_t}(1 - \\eta_f) = 1 - \\frac{0.048}{0.0502}(1 - 0.937)`} display />
                  <Math tex={`\\eta_o = 1 - 0.956 \\times 0.063 = 1 - 0.060 = \\boxed{0.940 = 94.0\\%}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">(c) 베이스 온도</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400">열전달률 = 총 발열량:</p>
                    <Math tex={`q_t = \\eta_o h A_t \\theta_b = Q`} display />
                    <Math tex={`\\theta_b = \\frac{Q}{\\eta_o h A_t} = \\frac{50}{0.940 \\times 25 \\times 0.0502} = \\frac{50}{1.18} = 42.4°\\text{C}`} display />
                    <Math tex={`T_b = \\theta_b + T_\\infty = 42.4 + 30 = \\boxed{72.4°\\text{C}}`} display />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">검증: 핀 없는 경우와 비교</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400">핀 없이 베이스만:</p>
                    <Math tex={`A_{base} = 0.06 \\times 0.06 = 0.0036 \\, \\text{m}^2`} display />
                    <Math tex={`\\theta_b = \\frac{Q}{hA_{base}} = \\frac{50}{25 \\times 0.0036} = 556°\\text{C}`} display />
                    <p className="text-red-400 font-bold mt-2">
                      핀 없이는 <Math tex="T_b = 586°C" /> - 완전히 허용 불가!
                    </p>
                    <p className="text-emerald-400 font-bold">
                      핀을 통해 온도가 586 C &rarr; 72 C로 감소 (약 8배 감소)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="결과 분석" accent="emerald" icon="!">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">핀 효율 93.7%:</strong> 매우 양호 (mL = 0.447로 짧은 핀)</li>
                <li>&bull; <strong className="text-white">전체 표면 효율 94.0%:</strong> 핀 효율과 거의 동일 (대부분 핀 표면)</li>
                <li>&bull; <strong className="text-white">표면적 증가:</strong> <Math tex="0.0036 \to 0.0502 \text{ m}^2" /> (14배)</li>
                <li>&bull; <strong className="text-white">온도 감소:</strong> 586 C &rarr; 72 C (핀의 극적인 효과)</li>
                <li>&bull; <strong className="text-white">열저항:</strong> <Math tex="R_{t,o} = 1/(0.94 \times 25 \times 0.0502) = 0.85 \text{ K/W}" /></li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 7. 설계 고려사항 */}
          <SectionDivider number="7" title="Design Considerations" />

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-yellow-400 mb-4">핀 간격 최적화</h4>
                <p className="text-sm text-gray-400 mb-4">
                  핀 간격이 좁으면 표면적은 증가하지만 유동 저항이 증가하고 h가 감소합니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; <strong className="text-white">자연 대류:</strong> 넓은 간격 (10~20mm)</li>
                  <li>&bull; <strong className="text-white">강제 대류:</strong> 좁은 간격 (2~5mm)</li>
                  <li>&bull; 최적 간격은 유동 조건에 따라 다름</li>
                </ul>
              </div>

              <div className="rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-orange-400 mb-4">핀 높이 vs 개수</h4>
                <p className="text-sm text-gray-400 mb-4">
                  같은 재료량으로 긴 핀 적은 개수 vs 짧은 핀 많은 개수?
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; 짧은 핀: 높은 <Math tex="\eta_f" />, 낮은 <Math tex="A_f" /></li>
                  <li>&bull; 긴 핀: 낮은 <Math tex="\eta_f" />, 높은 <Math tex="A_f" /></li>
                  <li>&bull; 일반적으로 <Math tex="mL \approx 1" />이 최적</li>
                </ul>
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-4">재료 선택</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; <strong className="text-white">알루미늄:</strong> 가볍고 가공 용이, k = 200</li>
                  <li>&bull; <strong className="text-white">구리:</strong> 최고의 k = 400, 무겁고 비쌈</li>
                  <li>&bull; <strong className="text-white">복합재:</strong> 구리 베이스 + 알루미늄 핀</li>
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-emerald-400 mb-4">제조 방법</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; <strong className="text-white">압출:</strong> 알루미늄, 저비용, 단순 형상</li>
                  <li>&bull; <strong className="text-white">다이캐스팅:</strong> 복잡한 형상 가능</li>
                  <li>&bull; <strong className="text-white">스키빙/포밍:</strong> 고밀도 핀</li>
                  <li>&bull; <strong className="text-white">브레이징:</strong> 핀을 베이스에 접합</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

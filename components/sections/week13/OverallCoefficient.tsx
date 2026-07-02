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

export default function OverallCoefficient() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Overall Heat Transfer Coefficient
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            총괄 열전달 계수 U와 오염 계수(Fouling Factor)를 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 열저항 네트워크 */}
          <SectionDivider number="1" title="Thermal Resistance Network" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열교환기에서 고온 유체에서 저온 유체로 열이 전달될 때, 여러 <strong className="text-white">열저항</strong>을
              통과합니다. 총괄 열전달 계수 U는 이 모든 저항을 종합한 것입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                열전달 경로 (이중관 열교환기)
              </h4>

              <div className="p-4 rounded-xl bg-slate-900/50 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400">Hot Fluid</span>
                  <span className="text-gray-500">&rarr;</span>
                  <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400">Convection (h_i)</span>
                  <span className="text-gray-500">&rarr;</span>
                  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">Fouling (R_f,i)</span>
                  <span className="text-gray-500">&rarr;</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">Wall (k)</span>
                  <span className="text-gray-500">&rarr;</span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400">Fouling (R_f,o)</span>
                  <span className="text-gray-500">&rarr;</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">Convection (h_o)</span>
                  <span className="text-gray-500">&rarr;</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">Cold Fluid</span>
                </div>
              </div>

              <EquationBox label="총 열저항 (직렬 연결)" accent="purple">
                <Math tex={`R_{tot} = R_{conv,i} + R_{f,i} + R_{wall} + R_{f,o} + R_{conv,o}`} display />
              </EquationBox>
            </div>
          </motion.div>

          {/* 2. 평판 형상 */}
          <SectionDivider number="2" title="Overall Coefficient for Plane Wall" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                평판 열교환기의 총괄 열전달 계수
              </h4>

              <EquationBox label="열전달률" accent="cyan">
                <Math tex={`q = UA\\Delta T = \\frac{\\Delta T}{R_{tot}}`} display />
              </EquationBox>

              <div className="mt-6">
                <EquationBox label="총괄 열전달 계수 정의" accent="cyan">
                  <Math tex={`\\frac{1}{UA} = \\frac{1}{h_1 A_1} + \\frac{R''_{f,1}}{A_1} + \\frac{t}{kA} + \\frac{R''_{f,2}}{A_2} + \\frac{1}{h_2 A_2}`} display />
                </EquationBox>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                여기서 <Math tex="R''_f" />는 오염 계수(Fouling factor), 단위: m<sup>2</sup>K/W
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="평판에서 A_1 = A_2 = A 일 때" accent="cyan" icon="=">
              <p className="mb-2">면적이 같은 평판에서는 단순화됩니다:</p>
              <div className="my-3 p-3 bg-slate-900/50 rounded-lg">
                <Math tex={`\\frac{1}{U} = \\frac{1}{h_1} + R''_{f,1} + \\frac{t}{k} + R''_{f,2} + \\frac{1}{h_2}`} display />
              </div>
              <p className="text-gray-500">
                오염이 없고 (<Math tex="R''_f = 0" />) 벽이 얇으면 (<Math tex="t/k \\approx 0" />):<br />
                <Math tex="U \\approx \\frac{h_1 h_2}{h_1 + h_2}" />
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. 원통 형상 */}
          <SectionDivider number="3" title="Overall Coefficient for Cylindrical Wall" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              튜브 열교환기에서는 내부와 외부 면적이 다릅니다 (<Math tex="A_i \neq A_o" />).
              따라서 U를 어느 면적 기준으로 정의하는지가 중요합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                원통형 튜브의 총괄 열전달 계수
              </h4>

              <EquationBox label="열전달률 (기준 면적에 무관)" accent="orange">
                <Math tex={`q = U_i A_i \\Delta T = U_o A_o \\Delta T`} display />
              </EquationBox>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <EquationBox label="내부 면적 기준 (U_i)" accent="orange">
                  <Math tex={`\\frac{1}{U_i A_i} = \\frac{1}{h_i A_i} + \\frac{R''_{f,i}}{A_i} + \\frac{\\ln(r_o/r_i)}{2\\pi kL} + \\frac{R''_{f,o}}{A_o} + \\frac{1}{h_o A_o}`} display />
                </EquationBox>

                <EquationBox label="외부 면적 기준 (U_o)" accent="orange">
                  <Math tex={`\\frac{1}{U_o A_o} = \\frac{1}{h_i A_i} + \\frac{R''_{f,i}}{A_i} + \\frac{\\ln(r_o/r_i)}{2\\pi kL} + \\frac{R''_{f,o}}{A_o} + \\frac{1}{h_o A_o}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                튜브 외부 면적 기준 전개 (가장 일반적)
              </h4>

              <EquationBox label="U_o 전개식" accent="purple">
                <Math tex={`\\frac{1}{U_o} = \\frac{r_o}{r_i h_i} + \\frac{r_o R''_{f,i}}{r_i} + \\frac{r_o \\ln(r_o/r_i)}{k} + R''_{f,o} + \\frac{1}{h_o}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-purple-400">주요 관계:</strong>
                </p>
                <ul className="text-sm text-gray-400 space-y-1 mt-2">
                  <li><Math tex="A_i = 2\pi r_i L" />, <Math tex="A_o = 2\pi r_o L" /></li>
                  <li><Math tex="A_o / A_i = r_o / r_i" /></li>
                  <li><Math tex="U_i A_i = U_o A_o" /> (열전달률은 동일)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 4. Fouling Factors */}
          <SectionDivider number="4" title="Fouling Factors" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">오염(Fouling)</strong>은 열교환기 표면에 불순물, 스케일, 생물막 등이
              축적되어 추가적인 열저항이 발생하는 현상입니다. 이는 열교환기 성능 저하의 주요 원인입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                오염의 종류
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-red-400 font-bold mb-2">Scaling (스케일링)</h5>
                  <p className="text-sm text-gray-400">
                    용해된 염류(CaCO<sub>3</sub>, CaSO<sub>4</sub> 등)의 결정화<br />
                    경수 사용 시 흔함
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-2">Particulate Fouling</h5>
                  <p className="text-sm text-gray-400">
                    부유 입자의 침전<br />
                    녹, 먼지, 모래 등
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-yellow-400 font-bold mb-2">Biological Fouling</h5>
                  <p className="text-sm text-gray-400">
                    미생물, 조류 성장<br />
                    냉각수 시스템에서 흔함
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-emerald-400 font-bold mb-2">Corrosion Fouling</h5>
                  <p className="text-sm text-gray-400">
                    표면 부식 산물 축적<br />
                    화학 반응에 의한 피막 형성
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                대표적인 오염 계수 값 (Fouling Factor, <Math tex="R''_f" />)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">유체/조건</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="R''_f" /> (m<sup>2</sup>K/W)</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">비고</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">증류수</td>
                      <td className="py-3 px-4">0.0001</td>
                      <td className="py-3 px-4 text-gray-400">가장 깨끗한 상태</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-blue-400">해수</td>
                      <td className="py-3 px-4">0.0001 - 0.0002</td>
                      <td className="py-3 px-4 text-gray-400">온도 50C 이하</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-emerald-400">도시 냉각수</td>
                      <td className="py-3 px-4">0.0001 - 0.0002</td>
                      <td className="py-3 px-4 text-gray-400">수처리된 경우</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">경수 (Hard water)</td>
                      <td className="py-3 px-4">0.0003 - 0.0005</td>
                      <td className="py-3 px-4 text-gray-400">스케일 형성 가능</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-yellow-400">연료유 (Fuel oil)</td>
                      <td className="py-3 px-4">0.0009</td>
                      <td className="py-3 px-4 text-gray-400">점성이 높음</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-purple-400">증기 (양질)</td>
                      <td className="py-3 px-4">0.0001</td>
                      <td className="py-3 px-4 text-gray-400">오일 없는 경우</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-red-400">강(River) 물</td>
                      <td className="py-3 px-4">0.0002 - 0.001</td>
                      <td className="py-3 px-4 text-gray-400">오염도에 따라 변동</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Fouling의 영향" accent="red" icon="!">
              <p className="mb-2">
                오염은 열교환기 성능에 심각한 영향을 미칩니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>- 열전달 계수 <Math tex="U" /> 감소 (20-50% 흔함)</li>
                <li>- 압력 강하 증가 (유로 단면적 감소)</li>
                <li>- 에너지 소비 증가</li>
                <li>- 정기적 청소/유지보수 필요</li>
              </ul>
              <p className="mt-2 text-gray-500">
                설계 시 <strong className="text-white">fouling allowance</strong>를 반드시 고려해야 합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 대표 U 값 */}
          <SectionDivider number="5" title="Typical Overall Heat Transfer Coefficient Values" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                대표적인 U 값 (W/m<sup>2</sup>K)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">유체 조합</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">U 범위</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Water to water</td>
                      <td className="py-3 px-4 font-bold text-cyan-400">850 - 1700</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Water to oil</td>
                      <td className="py-3 px-4 font-bold text-orange-400">110 - 350</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Steam to water (condensing)</td>
                      <td className="py-3 px-4 font-bold text-purple-400">1000 - 6000</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Steam to oil</td>
                      <td className="py-3 px-4 font-bold text-yellow-400">50 - 350</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Gas to gas (finned)</td>
                      <td className="py-3 px-4 font-bold text-emerald-400">25 - 50</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Organic solvent to water</td>
                      <td className="py-3 px-4 font-bold text-blue-400">280 - 850</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                <strong className="text-yellow-400">주의:</strong> 이 값들은 개략 설계용입니다.
                상세 설계 시 정확한 계산 필요.
              </p>
            </div>
          </motion.div>

          {/* 6. 지배 저항 분석 */}
          <SectionDivider number="6" title="Controlling Resistance" />

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="지배 저항 (Controlling Resistance)" accent="purple" icon="R">
              <p className="mb-2">
                총괄 열전달 계수 U는 <strong className="text-white">가장 큰 저항</strong>에 의해 지배됩니다.
              </p>
              <div className="my-3 p-3 bg-slate-900/50 rounded-lg">
                <Math tex={`\\frac{1}{U} \\approx \\text{(가장 큰 저항)}`} display />
              </div>
              <ul className="space-y-1 mt-2">
                <li><strong className="text-cyan-400">Gas side:</strong> 기체의 h가 매우 작음 (~10-100 W/m<sup>2</sup>K)</li>
                <li><strong className="text-orange-400">Liquid side:</strong> 액체의 h가 중간 (~100-10000 W/m<sup>2</sup>K)</li>
                <li><strong className="text-purple-400">Phase change:</strong> 응축/비등의 h가 매우 큼 (~1000-100000 W/m<sup>2</sup>K)</li>
              </ul>
              <p className="mt-2 text-gray-500">
                개선 효과는 <strong className="text-white">지배 저항을 줄이는 데</strong> 집중해야 합니다.<br />
                예: 기체측에 핀 추가, 유속 증가 등
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

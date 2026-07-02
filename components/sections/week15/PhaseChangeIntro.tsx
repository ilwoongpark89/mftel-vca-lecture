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
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "emerald" ? "border-emerald-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div className="text-cyan-400">
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
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
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

export default function PhaseChangeIntro() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Introduction to Phase Change Heat Transfer
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            상변화 열전달은 끓임(boiling)과 응축(condensation)을 통해
            매우 높은 열전달 계수를 달성합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 상변화의 중요성 */}
          <SectionDivider number="1" title="Why Phase Change Matters" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">상변화 열전달(Phase Change Heat Transfer)</strong>은
              열전달 분야에서 가장 효율적인 열전달 메커니즘 중 하나입니다.
              액체에서 기체로(끓임), 기체에서 액체로(응축) 상변화가 일어날 때
              <strong className="text-cyan-400"> 잠열(latent heat)</strong>이 관여하여
              매우 높은 열전달률을 달성할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                열전달 계수 비교 (Heat Transfer Coefficients)
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Mode</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="h" /> (W/m<sup>2</sup>K)</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">특징</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Free Convection (Air)</td>
                      <td className="py-3 px-4">5 - 25</td>
                      <td className="py-3 px-4 text-gray-500">자연 대류</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Forced Convection (Air)</td>
                      <td className="py-3 px-4">25 - 250</td>
                      <td className="py-3 px-4 text-gray-500">강제 대류</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Forced Convection (Water)</td>
                      <td className="py-3 px-4">50 - 20,000</td>
                      <td className="py-3 px-4 text-gray-500">단상 액체 대류</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Pool Boiling</td>
                      <td className="py-3 px-4 font-bold text-cyan-400">2,500 - 35,000</td>
                      <td className="py-3 px-4 text-cyan-400">핵비등 영역</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-blue-400">Flow Boiling</td>
                      <td className="py-3 px-4 font-bold text-blue-400">5,000 - 100,000+</td>
                      <td className="py-3 px-4 text-blue-400">관내 비등</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-emerald-400">Film Condensation</td>
                      <td className="py-3 px-4 font-bold text-emerald-400">5,000 - 25,000</td>
                      <td className="py-3 px-4 text-emerald-400">막응축</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 mt-6 text-center">
                상변화 열전달은 단상 대류에 비해 <strong className="text-cyan-400">10~100배 이상</strong> 높은 열전달 계수를 제공합니다.
              </p>
            </div>
          </motion.div>

          {/* 2. 잠열 (Latent Heat) */}
          <SectionDivider number="2" title="Latent Heat of Vaporization" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">잠열(Latent Heat, <Math tex="h_{fg}" />)</strong>은
              상변화에 필요한 에너지입니다. 온도 변화 없이 상변화만을 위해 흡수되거나 방출되는 열량으로,
              증발 잠열(<Math tex="h_{fg}" />)은 물질마다 다릅니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <EquationBox label="Latent Heat of Vaporization" accent="cyan">
              <Math tex={`q = \\dot{m} \\cdot h_{fg}`} display />
            </EquationBox>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <h5 className="text-cyan-400 font-bold mb-2">Water at 100°C, 1 atm</h5>
                <p className="text-sm text-gray-400">
                  <Math tex="h_{fg} = 2257 \\text{ kJ/kg}" /><br />
                  <Math tex="\\rho_l = 958 \\text{ kg/m}^3" /><br />
                  <Math tex="\\rho_v = 0.596 \\text{ kg/m}^3" />
                </p>
              </div>
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <h5 className="text-blue-400 font-bold mb-2">밀도비 (Density Ratio)</h5>
                <p className="text-sm text-gray-400">
                  <Math tex="\\rho_l / \\rho_v \\approx 1600" /><br />
                  액체가 기화하면 체적이 약 1600배 증가<br />
                  기포의 급격한 성장을 유발
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Modified Latent Heat" accent="cyan" icon="h'">
              <p className="mb-2">
                실제 응용에서는 <strong className="text-white">수정 잠열(modified latent heat)</strong>을 사용합니다.
                응축 또는 비등 시 현열 효과를 포함합니다:
              </p>
              <div className="my-3 p-3 bg-slate-900/50 rounded-lg">
                <Math tex={`h'_{fg} = h_{fg} + 0.68 \\, c_{p,l} (T_{sat} - T_s)`} display />
              </div>
              <p className="text-gray-500">
                응축 시 액막 내부의 과냉각(subcooling) 효과를 고려합니다.
                Nusselt 해석에서 <Math tex="h_{fg}" /> 대신 <Math tex="h'_{fg}" /> 사용을 권장합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. 상변화의 물리 */}
          <SectionDivider number="3" title="Physics of Phase Change" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              상변화는 분자 수준에서의 에너지 전환 과정입니다.
              액체 분자가 충분한 에너지를 얻어 분자간 인력을 극복하면 기체가 되고(증발/비등),
              기체 분자가 에너지를 잃으면 액체가 됩니다(응축).
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Saturation Properties
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-white font-bold mb-3">포화 온도 (Saturation Temperature)</h5>
                  <p className="text-sm text-gray-400 mb-4">
                    주어진 압력에서 액체와 기체가 평형을 이루는 온도입니다.
                    대기압(1 atm)에서 물의 포화 온도는 100°C입니다.
                  </p>
                  <div className="p-3 rounded-lg bg-slate-900/50">
                    <Math tex="T_{sat} = f(P)" display />
                  </div>
                </div>
                <div>
                  <h5 className="text-white font-bold mb-3">포화 압력 (Saturation Pressure)</h5>
                  <p className="text-sm text-gray-400 mb-4">
                    주어진 온도에서 액체와 기체가 평형을 이루는 압력입니다.
                    Clausius-Clapeyron 방정식으로 관계를 나타낼 수 있습니다.
                  </p>
                  <div className="p-3 rounded-lg bg-slate-900/50">
                    <Math tex="P_{sat} = f(T)" display />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. 과열도와 과냉도 */}
          <SectionDivider number="4" title="Superheat and Subcooling" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              상변화 열전달에서 중요한 온도차 개념이 있습니다:
              <strong className="text-cyan-400"> 과열도(superheat)</strong>와
              <strong className="text-blue-400"> 과냉도(subcooling)</strong>입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
                <h4 className="text-cyan-400 font-bold mb-4">Wall Superheat (Excess Temperature)</h4>
                <div className="p-4 rounded-lg bg-slate-900/50 mb-4">
                  <Math tex={`\\Delta T_e = T_s - T_{sat}`} display />
                </div>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">비등(Boiling)</strong>에서 중요한 파라미터입니다.
                  벽면 온도가 포화 온도보다 얼마나 높은지를 나타냅니다.
                  과열도가 증가하면 끓임 강도가 증가합니다.
                </p>
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
                <h4 className="text-blue-400 font-bold mb-4">Wall Subcooling</h4>
                <div className="p-4 rounded-lg bg-slate-900/50 mb-4">
                  <Math tex={`\\Delta T_{sub} = T_{sat} - T_s`} display />
                </div>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">응축(Condensation)</strong>에서 중요한 파라미터입니다.
                  벽면 온도가 포화 온도보다 얼마나 낮은지를 나타냅니다.
                  과냉도가 증가하면 응축률이 증가합니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5. 상변화 유형 */}
          <SectionDivider number="5" title="Types of Phase Change Heat Transfer" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                주요 상변화 현상
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">Pool Boiling (풀비등)</h5>
                  <p className="text-sm text-gray-400">
                    정지된 액체 속에서 가열면 위에서 일어나는 비등<br />
                    외부 강제 유동 없음<br />
                    전자 기기 냉각, 주방 조리에 적용
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">Flow Boiling (유동비등)</h5>
                  <p className="text-sm text-gray-400">
                    관 내부에서 유동하는 액체가 끓는 현상<br />
                    대류 + 비등 열전달 복합<br />
                    발전소 보일러, 원자로, 냉동기에 적용
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-2">Film Condensation (막응축)</h5>
                  <p className="text-sm text-gray-400">
                    냉각면에 연속적인 액막이 형성되며 응축<br />
                    대부분의 공학적 응축 현상<br />
                    열교환기, 응축기에 적용
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-2">Dropwise Condensation (적응축)</h5>
                  <p className="text-sm text-gray-400">
                    냉각면에 물방울 형태로 응축<br />
                    막응축보다 10배 이상 높은 열전달<br />
                    특수 코팅 표면에서 유도 가능
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="MFTEL 연구 - 상변화 열전달" accent="emerald" icon="Lab">
              <p className="mb-2">
                MFTEL(다상유동열공학연구실)에서는 상변화 열전달을 핵심 연구 분야로 다루고 있습니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">침수냉각 기술:</strong> GPU/TPU 고발열 반도체의 비등 냉각 (에너지 90% 절감)</li>
                <li>&bull; <strong className="text-white">SMR(소형모듈원자로):</strong> 상변화를 이용한 피동 안전 시스템</li>
                <li>&bull; <strong className="text-white">열에너지 저장:</strong> 잠열 저장을 이용한 그리드 안정화</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 6. 표면 특성의 중요성 */}
          <SectionDivider number="6" title="Surface Characteristics" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              상변화 열전달에서 <strong className="text-white">표면 특성</strong>은 매우 중요합니다.
              표면의 젖음성(wettability), 거칠기(roughness), 핵생성 사이트(nucleation sites)가
              비등과 응축 성능에 큰 영향을 미칩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                Surface Wettability
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">표면 유형</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">접촉각</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">비등</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">응축</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Hydrophilic (친수성)</td>
                      <td className="py-3 px-4"><Math tex="\\theta < 90°" /></td>
                      <td className="py-3 px-4 text-gray-400">CHF 증가</td>
                      <td className="py-3 px-4 text-gray-400">막응축</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-blue-400">Hydrophobic (소수성)</td>
                      <td className="py-3 px-4"><Math tex="\\theta > 90°" /></td>
                      <td className="py-3 px-4 text-gray-400">ONB 감소, 기포 이탈 촉진</td>
                      <td className="py-3 px-4 text-gray-400">적응축 유도</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Week 15 학습 목표" accent="blue" icon="W15">
              <p>
                이번 주에는 <strong className="text-white">Pool Boiling</strong> (비등 곡선, 핵비등, 막비등, CHF),
                <strong className="text-white"> Flow Boiling</strong> (유동비등),
                <strong className="text-white"> Film Condensation</strong> (막응축, Nusselt 해석),
                그리고 <strong className="text-white">Dropwise Condensation</strong> (적응축)을 학습합니다.
                상변화 열전달의 기본 원리와 공학적 응용을 이해하는 것이 목표입니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

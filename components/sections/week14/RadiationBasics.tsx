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
  const borderColor = accent === "red" ? "border-red-500/30" : accent === "pink" ? "border-pink-500/30" : accent === "orange" ? "border-orange-500/30" : "border-slate-700";
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
    pink: { bg: "bg-pink-500/5", border: "border-pink-500/20", text: "text-pink-400", iconBg: "bg-pink-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
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

const emSpectrumData = [
  { name: "Gamma Rays", range: "< 0.001", unit: "um", color: "bg-purple-600" },
  { name: "X-rays", range: "0.001-0.01", unit: "um", color: "bg-violet-500" },
  { name: "UV", range: "0.01-0.4", unit: "um", color: "bg-blue-500" },
  { name: "Visible", range: "0.4-0.7", unit: "um", color: "bg-gradient-to-r from-violet-500 via-green-400 to-red-500" },
  { name: "Thermal IR", range: "0.7-1000", unit: "um", color: "bg-red-500" },
  { name: "Microwave", range: "1-1000", unit: "mm", color: "bg-orange-400" },
  { name: "Radio", range: "> 1", unit: "m", color: "bg-yellow-400" },
];

const radiationExamples = [
  {
    name: "Solar Energy",
    desc: "태양에서 지구로의 에너지 전달 - 진공을 통해 1.5억 km 이동",
    icon: "S",
  },
  {
    name: "Furnace/Boiler",
    desc: "고온 연소 가스에서 튜브 벽으로의 열전달",
    icon: "F",
  },
  {
    name: "Building HVAC",
    desc: "벽, 창문, 사람 사이의 복사 열교환",
    icon: "B",
  },
  {
    name: "Electronics Cooling",
    desc: "고온 부품에서 인클로저로의 복사 열방출",
    icon: "E",
  },
  {
    name: "Space Systems",
    desc: "위성, 우주선의 열제어 - 진공에서 복사만 가능",
    icon: "X",
  },
  {
    name: "Thermal Imaging",
    desc: "물체가 방출하는 적외선을 감지하여 온도 측정",
    icon: "T",
  },
];

export default function RadiationBasics() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fundamentals of Thermal Radiation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            열복사의 기본 개념과 전자기파 스펙트럼, 흑체 개념을 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 복사 열전달이란? */}
          <SectionDivider number="1" title="What is Thermal Radiation?" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">열복사(Thermal Radiation)</strong>는 <strong className="text-red-400">전자기파</strong>에 의한
              열에너지 전달 방식입니다. 전도와 대류가 물질을 통해 열을 전달하는 것과 달리,
              복사는 <strong className="text-white">매질 없이도 진공을 통해</strong> 에너지를 전달할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                  Conduction
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&bull;</span>
                    <span>분자/전자의 직접 상호작용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&bull;</span>
                    <span><strong className="text-white">고체</strong> 내에서 주로 발생</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&bull;</span>
                    <span>매질 필수</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
                <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                  Convection
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">&bull;</span>
                    <span>유체의 bulk motion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">&bull;</span>
                    <span><strong className="text-white">유체</strong> 내에서 발생</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">&bull;</span>
                    <span>매질 필수</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
                <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                  Radiation
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&bull;</span>
                    <span><strong className="text-red-400">전자기파</strong> 방출/흡수</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&bull;</span>
                    <span>모든 물질에서 발생</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&bull;</span>
                    <span><strong className="text-white">매질 불필요</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="왜 복사 열전달이 중요한가?" accent="red" icon="!">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">고온</strong>에서 지배적 (<Math tex="E_b \propto T^4" />)</li>
                <li>&bull; <strong className="text-white">진공</strong>에서 유일한 열전달 방식 (우주, 진공단열)</li>
                <li>&bull; <strong className="text-white">빛의 속도</strong>로 전달 (즉각적 응답)</li>
                <li>&bull; <strong className="text-white">비선형</strong> - T^4 의존성</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 2. 전자기 스펙트럼 */}
          <SectionDivider number="2" title="Electromagnetic Spectrum" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열복사는 전자기파의 한 형태입니다. 전자기 스펙트럼에서 <strong className="text-red-400">열복사</strong>는
              주로 <strong className="text-white">0.1 ~ 100 um</strong> 파장 범위에 해당하며,
              가시광선(0.4-0.7 um)과 적외선(0.7-1000 um) 영역을 포함합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                Electromagnetic Spectrum
              </h4>

              <div className="space-y-2 mb-6">
                {emSpectrumData.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-8 h-6 rounded ${item.color}`} />
                    <span className="w-24 text-sm text-gray-300">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.range} {item.unit}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                <p className="text-center text-sm text-gray-400">
                  <strong className="text-red-400">Thermal Radiation Range:</strong> 0.1 - 100 um
                  <br />
                  <span className="text-xs">(includes visible 0.4-0.7 um and infrared 0.7-100 um)</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-4">
                Wave-Particle Duality
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Wave Properties</p>
                  <Math tex={`c = \\lambda \\nu`} display />
                  <p className="text-xs text-gray-400 mt-2">
                    c = 2.998 x 10^8 m/s (광속)
                    <br />
                    lambda = 파장 [m], nu = 진동수 [Hz]
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Particle (Photon) Energy</p>
                  <Math tex={`E = h\\nu = \\frac{hc}{\\lambda}`} display />
                  <p className="text-xs text-gray-400 mt-2">
                    h = 6.626 x 10^-34 J*s (Planck)
                    <br />
                    짧은 파장 = 높은 에너지
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. 복사 메커니즘 */}
          <SectionDivider number="3" title="Radiation Mechanism" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              모든 물질은 절대영도(0 K) 이상에서 <strong className="text-white">원자/분자의 열운동</strong>에 의해
              전자기파를 방출합니다. 온도가 높을수록 분자 진동이 활발해지고 더 많은 복사 에너지를 방출합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-pink-500/30 bg-pink-500/5 p-6">
              <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-4">
                Origin of Thermal Radiation
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">전자 전이 (Electron Transition)</strong>
                    <p className="text-sm text-gray-400">원자 내 전자가 높은 에너지 준위에서 낮은 에너지 준위로 전이할 때 광자 방출</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">분자 진동/회전 (Molecular Vibration/Rotation)</strong>
                    <p className="text-sm text-gray-400">분자의 진동 및 회전 에너지 변화에 의한 적외선 방출</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">자유 전자 가속 (Bremsstrahlung)</strong>
                    <p className="text-sm text-gray-400">플라즈마 등에서 자유 전자가 감속될 때 광자 방출</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. 흑체 개념 */}
          <SectionDivider number="4" title="Blackbody Concept" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-red-400">흑체(Blackbody)</strong>는 복사 열전달 분석의 기준이 되는 이상적인 표면입니다.
              흑체는 입사하는 모든 복사 에너지를 흡수하고, 주어진 온도에서 가능한 최대의 복사 에너지를 방출합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                Blackbody Properties
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                    <p className="text-sm text-red-400 font-bold mb-2">1. Perfect Absorber</p>
                    <Math tex={`\\alpha = 1`} display />
                    <p className="text-xs text-gray-400 mt-2">
                      모든 파장, 모든 방향에서 입사하는 복사를 100% 흡수
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                    <p className="text-sm text-red-400 font-bold mb-2">2. Perfect Emitter</p>
                    <Math tex={`\\varepsilon = 1`} display />
                    <p className="text-xs text-gray-400 mt-2">
                      주어진 온도에서 최대 복사 에너지 방출
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                    <p className="text-sm text-red-400 font-bold mb-2">3. Diffuse Emitter</p>
                    <p className="text-xs text-gray-400">
                      모든 방향으로 균일하게 복사 방출 (Lambert&apos;s cosine law)
                    </p>
                    <Math tex={`I = \\text{const}`} display />
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                    <p className="text-sm text-pink-400 font-bold mb-2">Hohlraum (Cavity)</p>
                    <p className="text-xs text-gray-400">
                      작은 구멍이 있는 단열 공동. 이상적인 흑체에 가까운 실제 장치.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="왜 &quot;흑체(Black)&quot;인가?" accent="pink" icon="?">
              <p>
                흑체가 모든 빛을 흡수하므로 반사되는 빛이 없어 <strong className="text-pink-400">&quot;검게&quot;</strong> 보입니다.
                그러나 흑체도 자체 온도에 따라 <strong className="text-white">복사를 방출</strong>합니다.
                고온 흑체는 빛나 보이고 (예: 태양), 저온 흑체만 검게 보입니다.
              </p>
              <p className="mt-2">
                실제 흑체에 가까운 예: 탄소 그을음 (alpha ~ 0.96), 공동 (cavity)
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 복사 응용 */}
          <SectionDivider number="5" title="Engineering Applications" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              복사 열전달은 특히 <strong className="text-white">고온 시스템</strong>과 <strong className="text-white">진공 환경</strong>에서
              중요합니다. 다양한 산업 분야에서 복사 열전달 설계가 필수적입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {radiationExamples.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-4 rounded-xl bg-slate-800/30 border border-slate-700"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">
                      {item.icon}
                    </span>
                    <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  </div>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 6. 복사 vs 전도/대류 비교 */}
          <SectionDivider number="6" title="When is Radiation Dominant?" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                Radiation becomes significant when:
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <p className="text-sm text-red-400 font-bold mb-2">High Temperature</p>
                    <p className="text-xs text-gray-400">
                      <Math tex="E_b = \sigma T^4" /> - T^4 의존성으로 고온에서 급격히 증가
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      예: T &gt; 500K에서 복사 무시 불가
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <p className="text-sm text-red-400 font-bold mb-2">Large Temperature Difference</p>
                    <p className="text-xs text-gray-400">
                      <Math tex="q_{rad} \propto (T_1^4 - T_2^4)" /> - 온도차가 클수록 복사 기여 증가
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <p className="text-sm text-red-400 font-bold mb-2">Low Convection</p>
                    <p className="text-xs text-gray-400">
                      자연대류, 저속 유동에서 상대적 복사 비중 증가
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      예: h &lt; 10 W/(m^2*K)
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <p className="text-sm text-red-400 font-bold mb-2">Vacuum Environment</p>
                    <p className="text-xs text-gray-400">
                      진공에서는 전도/대류 불가능 - 복사만 가능
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      예: 우주선, 진공 단열재 (MLI)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <EquationBox label="Radiation-Convection Comparison" accent="red">
              <Math tex={`\\frac{q_{rad}}{q_{conv}} = \\frac{\\varepsilon \\sigma (T_s^4 - T_{sur}^4)}{h(T_s - T_\\infty)}`} display />
            </EquationBox>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

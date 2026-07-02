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
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "red" ? "border-red-500/30" : "border-slate-700";
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
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
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

export default function FilmBoiling() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Film Boiling
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            막비등에서는 가열면 전체가 증기막으로 덮입니다.
            Leidenfrost 효과와 막비등 상관식을 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 막비등 개요 */}
          <SectionDivider number="1" title="Film Boiling Overview" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-red-400">막비등(Film Boiling)</strong>은 가열면과 액체 사이에
              연속적인 증기막이 형성되는 비등 영역입니다. 증기막은 열 저항으로 작용하여
              열전달 계수가 핵비등에 비해 현저히 낮습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                Film Boiling 특성
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-red-400 font-bold mb-3">열전달 메커니즘</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; 증기막 내 <strong className="text-white">전도</strong></li>
                    <li>&bull; 증기막 내 <strong className="text-white">대류</strong></li>
                    <li>&bull; <strong className="text-white">복사</strong> (고온에서 중요)</li>
                    <li>&bull; 증기-액체 경계면에서 <strong className="text-white">증발</strong></li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-cyan-400 font-bold mb-3">주요 특징</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>&bull; 액체가 가열면에 직접 접촉하지 않음</li>
                    <li>&bull; 증기막이 단열층 역할</li>
                    <li>&bull; 과열도 증가 시 열유속 증가 (안정)</li>
                    <li>&bull; <Math tex="\Delta T_e > 120°C" /> (물, 1 atm)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Leidenfrost 효과 */}
          <SectionDivider number="2" title="Leidenfrost Effect" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-orange-400">Leidenfrost 점(Point D)</strong>은 막비등이 시작되는 최소 열유속 점입니다.
              1756년 Johann Gottlob Leidenfrost가 처음 관찰했으며,
              뜨거운 표면 위의 물방울이 "춤추는" 현상으로 유명합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6 text-center">
                Minimum Heat Flux (Leidenfrost Point)
              </h4>

              <EquationBox label="Zuber Minimum Heat Flux Correlation" accent="orange">
                <Math tex={`q''_{min} = C \\, \\rho_v h_{fg} \\left[ \\frac{\\sigma g (\\rho_l - \\rho_v)}{(\\rho_l + \\rho_v)^2} \\right]^{1/4}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/80">
                <p className="text-sm text-gray-400 text-center">
                  <Math tex="C = 0.09" /> (실험적 상수)<br />
                  대기압 물에서 <Math tex="q''_{min} \approx 10 \text{ kW/m}^2" />, <Math tex="\Delta T_{Leidenfrost} \approx 120°C" />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Leidenfrost 현상 일상 예시" accent="orange" icon="L">
              <ul className="space-y-1">
                <li>&bull; <strong className="text-white">뜨거운 프라이팬:</strong> 물방울이 증기 위에 떠서 오래 유지됨</li>
                <li>&bull; <strong className="text-white">용광로 작업자:</strong> 젖은 손가락을 순간적으로 용융 금속에 담금 (위험!)</li>
                <li>&bull; <strong className="text-white">액체 질소:</strong> 손에 순간적으로 부으면 Leidenfrost 보호</li>
                <li>&bull; <strong className="text-white">MythBusters:</strong> 손가락 담그기 실험으로 유명해짐</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. 막비등 상관식 - 수평 원통 */}
          <SectionDivider number="3" title="Film Boiling Correlations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              막비등 열전달 계수는 <strong className="text-white">Bromley (1950)</strong>에 의해 처음 유도되었습니다.
              응축 해석(Nusselt)과 유사한 방법으로 증기막 내 유동을 해석합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 text-center">
                Bromley Correlation - Horizontal Cylinder
              </h4>

              <EquationBox label="막비등 열전달 계수 (수평 원통)" accent="cyan">
                <Math tex={`\\bar{h}_{conv} = 0.62 \\left[ \\frac{g \\rho_v (\\rho_l - \\rho_v) k_v^3 h'_{fg}}{\\mu_v D (T_s - T_{sat})} \\right]^{1/4}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/80">
                <h5 className="text-white font-bold mb-3 text-center">수정 잠열 (Modified Latent Heat):</h5>
                <div className="text-center">
                  <Math tex={`h'_{fg} = h_{fg} + 0.4 \\, c_{p,v} (T_s - T_{sat})`} display />
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  증기의 과열 효과를 고려합니다. 응축의 수정 잠열과 유사한 개념입니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                물성치 정의 (증기 기준)
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <div>
                  <p><Math tex="\rho_v" />: 증기 밀도</p>
                  <p><Math tex="k_v" />: 증기 열전도도</p>
                  <p><Math tex="\mu_v" />: 증기 점성</p>
                </div>
                <div>
                  <p><Math tex="c_{p,v}" />: 증기 비열</p>
                  <p><Math tex="D" />: 원통 직경</p>
                  <p>물성치: <Math tex="T_{film} = (T_s + T_{sat})/2" /> 에서 평가</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. 수평 평판 및 구 */}
          <SectionDivider number="4" title="Other Geometries" />

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
                <h4 className="text-cyan-400 font-bold mb-4">Horizontal Surface (Upper)</h4>
                <EquationBox accent="cyan">
                  <Math tex={`\\bar{h} = 0.67 \\left[ \\frac{g \\rho_v (\\rho_l - \\rho_v) k_v^3 h'_{fg}}{\\mu_v \\lambda (T_s - T_{sat})} \\right]^{1/4}`} display />
                </EquationBox>
                <p className="text-sm text-gray-400 mt-4">
                  특성 길이: <Math tex={`\\lambda = 2\\pi \\sqrt{\\frac{\\sigma}{g(\\rho_l - \\rho_v)}}`} /><br />
                  (Taylor 불안정성 파장)
                </p>
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
                <h4 className="text-blue-400 font-bold mb-4">Sphere</h4>
                <EquationBox accent="blue">
                  <Math tex={`\\bar{h} = 0.67 \\left[ \\frac{g \\rho_v (\\rho_l - \\rho_v) k_v^3 h'_{fg}}{\\mu_v D (T_s - T_{sat})} \\right]^{1/4}`} display />
                </EquationBox>
                <p className="text-sm text-gray-400 mt-4">
                  <Math tex="D" />: 구의 직경<br />
                  수평 원통과 유사한 형태
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5. 복사 열전달 */}
          <SectionDivider number="5" title="Radiation Effects" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              막비등에서 표면 온도가 높으면 (<Math tex="T_s > 300°C" />),
              <strong className="text-red-400"> 복사 열전달</strong>이 중요해집니다.
              전체 열전달 계수는 대류와 복사의 합으로 계산됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                Total Heat Transfer with Radiation
              </h4>

              <EquationBox label="복사 열전달 계수" accent="red">
                <Math tex={`h_{rad} = \\varepsilon \\sigma_{SB} \\frac{T_s^4 - T_{sat}^4}{T_s - T_{sat}}`} display />
              </EquationBox>

              <div className="mt-6">
                <EquationBox label="전체 열전달 계수 (Bromley)" accent="red">
                  <Math tex={`h = h_{conv} \\left( \\frac{h_{conv}}{h_{conv} + h_{rad}} \\right)^{1/3} + h_{rad}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/80">
                <p className="text-sm text-gray-400">
                  <Math tex="\varepsilon" />: 표면 방사율 (emissivity)<br />
                  <Math tex="\sigma_{SB} = 5.67 \times 10^{-8}" /> W/m<sup>2</sup>K<sup>4</sup> (Stefan-Boltzmann 상수)<br />
                  복사가 대류에 영향을 주므로 단순 합이 아닌 결합 계수 사용
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="간략화된 총 열전달 계수" accent="red" icon="h">
              <p className="mb-2">
                <Math tex="h_{rad} < h_{conv}" />인 경우 (대부분의 경우):
              </p>
              <div className="my-3 p-3 bg-slate-900/50 rounded-lg">
                <Math tex={`h \\approx h_{conv} + 0.75 h_{rad}`} display />
              </div>
              <p className="text-gray-500">
                복사가 작은 경우의 근사식입니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. 금속 담금질 응용 */}
          <SectionDivider number="6" title="Quenching Applications" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">담금질(Quenching)</strong>은 금속 열처리의 핵심 공정입니다.
              고온의 금속을 냉각제(물, 오일)에 담그면 막비등, 천이비등, 핵비등을 순차적으로 거칩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Quenching Process Stages
              </h4>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-red-500/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-400 font-bold">1</span>
                  </div>
                  <h5 className="text-red-400 font-bold mb-2">Vapor Blanket</h5>
                  <p className="text-xs text-gray-400">
                    막비등 단계<br />
                    증기막 형성<br />
                    느린 냉각
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-cyan-400 font-bold">2</span>
                  </div>
                  <h5 className="text-cyan-400 font-bold mb-2">Nucleate Boiling</h5>
                  <p className="text-xs text-gray-400">
                    핵비등 단계<br />
                    빠른 냉각<br />
                    열응력 위험
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-blue-500/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-400 font-bold">3</span>
                  </div>
                  <h5 className="text-blue-400 font-bold mb-2">Convection</h5>
                  <p className="text-xs text-gray-400">
                    대류 냉각<br />
                    비등 종료<br />
                    느린 냉각
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="담금질과 재료 특성" accent="blue" icon="Q">
              <p className="mb-2">
                냉각 속도가 금속의 미세조직과 기계적 특성을 결정합니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">빠른 냉각:</strong> 마르텐사이트 형성 &rarr; 높은 경도</li>
                <li>&bull; <strong className="text-white">느린 냉각:</strong> 펄라이트/페라이트 형성 &rarr; 높은 연성</li>
                <li>&bull; <strong className="text-white">냉각제 선택:</strong> 물(빠름) &gt; 오일(중간) &gt; 공기(느림)</li>
                <li>&bull; <strong className="text-white">균일 냉각 중요:</strong> 불균일 시 잔류 응력/변형 발생</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 7. 예제 */}
          <SectionDivider number="7" title="Example Problem" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Example: Film Boiling on a Horizontal Cylinder
              </h4>

              <div className="p-4 rounded-xl bg-slate-900/50 mb-6">
                <p className="text-gray-400 mb-4">
                  <strong className="text-white">문제:</strong> 직경 10 mm의 수평 원통이 1 atm 포화 물에 잠겨 있습니다.
                  표면 온도가 350°C일 때 막비등 열전달 계수를 구하시오.
                </p>
                <p className="text-sm text-gray-500">
                  포화 온도: <Math tex="T_{sat} = 100°C" /><br />
                  막온도: <Math tex="T_{film} = (350 + 100)/2 = 225°C" /> 에서 증기 물성치:<br />
                  <Math tex="\rho_v = 0.441" /> kg/m<sup>3</sup>,
                  <Math tex="k_v = 0.0331" /> W/m·K,
                  <Math tex="\mu_v = 1.59 \times 10^{-5}" /> Pa·s,
                  <Math tex="c_{p,v} = 2.01" /> kJ/kg·K<br />
                  <Math tex="\rho_l = 958" /> kg/m<sup>3</sup>,
                  <Math tex="h_{fg} = 2257" /> kJ/kg
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-cyan-400 font-bold mb-2">Step 1: 수정 잠열 계산</h5>
                  <div className="text-sm text-gray-400">
                    <Math tex={`h'_{fg} = h_{fg} + 0.4 c_{p,v} \\Delta T`} /><br />
                    <Math tex={`h'_{fg} = 2257 + 0.4 \\times 2.01 \\times (350 - 100) = 2457 \\text{ kJ/kg}`} />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-cyan-400 font-bold mb-2">Step 2: Bromley 상관식 적용</h5>
                  <div className="text-sm text-gray-400">
                    <Math tex={`\\bar{h}_{conv} = 0.62 \\left[ \\frac{g \\rho_v (\\rho_l - \\rho_v) k_v^3 h'_{fg}}{\\mu_v D \\Delta T} \\right]^{1/4}`} />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/50">
                  <h5 className="text-cyan-400 font-bold mb-2">Step 3: 수치 대입</h5>
                  <div className="text-sm text-gray-400">
                    <Math tex={`\\bar{h}_{conv} = 0.62 \\left[ \\frac{9.81 \\times 0.441 \\times (958-0.441) \\times 0.0331^3 \\times 2.457 \\times 10^6}{1.59 \\times 10^{-5} \\times 0.01 \\times 250} \\right]^{1/4}`} />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                  <h5 className="text-emerald-400 font-bold mb-2">Result</h5>
                  <p className="text-lg text-white text-center">
                    <Math tex={`\\bar{h}_{conv} \\approx 240 \\text{ W/m}^2\\text{K}`} />
                  </p>
                  <p className="text-sm text-gray-400 text-center mt-2">
                    핵비등 (<Math tex="h \sim 10,000" /> W/m<sup>2</sup>K)에 비해 현저히 낮습니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="핵심 요약" accent="blue" icon="S">
              <p>
                막비등에서는 <strong className="text-red-400">증기막이 열 저항</strong>으로 작용하여 열전달이 저하됩니다.
                <strong className="text-orange-400"> Leidenfrost 점</strong>이 안정 막비등의 시작점이며,
                고온에서는 <strong className="text-white">복사 효과</strong>도 고려해야 합니다.
                금속 담금질에서 막비등 이해가 중요합니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
  const borderColor = accent === "red" ? "border-red-500/30" : accent === "pink" ? "border-pink-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "yellow" ? "border-yellow-500/30" : "border-slate-700";
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

const tempExamples = [
  { source: "Sun (surface)", T: "5778", lambda_max: "0.50", color: "bg-yellow-400" },
  { source: "Incandescent bulb", T: "2800", lambda_max: "1.04", color: "bg-orange-400" },
  { source: "Molten metal", T: "1500", lambda_max: "1.93", color: "bg-red-500" },
  { source: "Human body", T: "310", lambda_max: "9.35", color: "bg-red-900" },
  { source: "Room temp", T: "293", lambda_max: "9.89", color: "bg-red-950" },
];

const bandFractions = [
  { range: "0 ~ lambda_1", F: "F_{0-\\lambda_1 T}", desc: "주어진 파장 이하의 복사 비율" },
  { range: "lambda_1 ~ lambda_2", F: "F_{\\lambda_1 T - \\lambda_2 T} = F_{0-\\lambda_2 T} - F_{0-\\lambda_1 T}", desc: "특정 파장 구간의 복사 비율" },
];

export default function BlackbodyLaws() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blackbody Radiation Laws
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Planck의 법칙, Wien의 변위법칙, Stefan-Boltzmann 법칙을 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Planck's Law */}
          <SectionDivider number="1" title="Planck's Distribution Law" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              1900년 Max Planck는 흑체 복사의 <strong className="text-white">스펙트럼 분포</strong>를 정확히 설명하는
              법칙을 제시했습니다. 이 법칙은 양자역학의 시작점이 되었으며, 특정 온도에서 각 파장별로
              방출되는 복사 에너지의 분포를 나타냅니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                Planck&apos;s Law - Spectral Blackbody Emissive Power
              </h4>

              <EquationBox label="Spectral Emissive Power [W/(m^2*um)]" accent="red">
                <Math tex={`E_{\\lambda,b}(\\lambda, T) = \\frac{C_1}{\\lambda^5 \\left[\\exp\\left(\\frac{C_2}{\\lambda T}\\right) - 1\\right]}`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">First Radiation Constant</p>
                  <Math tex={`C_1 = 2\\pi h c^2 = 3.742 \\times 10^8 \\, \\text{W}\\cdot\\mu\\text{m}^4/\\text{m}^2`} display />
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Second Radiation Constant</p>
                  <Math tex={`C_2 = \\frac{hc}{k_B} = 1.439 \\times 10^4 \\, \\mu\\text{m}\\cdot\\text{K}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Planck 분포의 특징" accent="red" icon="!">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">연속 스펙트럼:</strong> 모든 파장에서 복사 방출</li>
                <li>&bull; <strong className="text-white">단일 최대값:</strong> 각 온도에서 하나의 피크 파장 존재</li>
                <li>&bull; <strong className="text-white">온도 증가:</strong> 피크가 짧은 파장으로 이동, 전체 면적 증가</li>
                <li>&bull; <strong className="text-white">절대영도:</strong> T = 0 K에서 복사 방출 없음</li>
              </ul>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-4">
                Planck Distribution Curve Characteristics
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Short wavelength (lambda -&gt; 0)</p>
                  <Math tex={`E_{\\lambda,b} \\to 0`} />
                  <p className="text-xs text-gray-400 mt-2">(exponential decay)</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Peak wavelength</p>
                  <Math tex={`\\frac{dE_{\\lambda,b}}{d\\lambda} = 0`} />
                  <p className="text-xs text-gray-400 mt-2">(Wien&apos;s displacement)</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Long wavelength (lambda -&gt; inf)</p>
                  <Math tex={`E_{\\lambda,b} \\to 0`} />
                  <p className="text-xs text-gray-400 mt-2">(1/lambda^4 decay)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Wien's Displacement Law */}
          <SectionDivider number="2" title="Wien's Displacement Law" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Wien의 변위법칙은 흑체 스펙트럼의 <strong className="text-orange-400">피크 파장</strong>이 온도에 반비례함을 나타냅니다.
              온도가 높을수록 복사 에너지의 피크가 <strong className="text-white">짧은 파장(고에너지)</strong>으로 이동합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6 text-center">
                Wien&apos;s Displacement Law
              </h4>

              <EquationBox label="Peak Wavelength" accent="orange">
                <Math tex={`\\lambda_{\\max} \\cdot T = 2898 \\, \\mu\\text{m}\\cdot\\text{K}`} display />
              </EquationBox>

              <p className="text-center text-sm text-gray-400 mt-4">
                또는 <Math tex={`\\lambda_{\\max} = \\frac{2898}{T} \\, \\mu\\text{m}`} /> (T in Kelvin)
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                Temperature vs Peak Wavelength Examples
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Source</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">T [K]</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="\lambda_{max}" /> [um]</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Region</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {tempExamples.map((item, i) => (
                      <tr key={i} className="border-b border-slate-800">
                        <td className="py-3 px-4 font-bold text-white">{item.source}</td>
                        <td className="py-3 px-4">{item.T}</td>
                        <td className="py-3 px-4 text-orange-400">{item.lambda_max}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-block w-4 h-4 rounded ${item.color} mr-2`} />
                          {parseFloat(item.lambda_max) < 0.4 ? "UV" :
                           parseFloat(item.lambda_max) < 0.7 ? "Visible" : "Infrared"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="색 온도 (Color Temperature)" accent="orange" icon="T">
              <p>
                Wien&apos;s law로 물체의 색으로부터 온도를 추정할 수 있습니다.
              </p>
              <ul className="mt-2 space-y-1">
                <li>&bull; <span className="text-red-400">적색</span>: ~1000K (방사열기)</li>
                <li>&bull; <span className="text-orange-400">주황색</span>: ~2000K (용융 금속)</li>
                <li>&bull; <span className="text-yellow-400">백열색</span>: ~3000K (텅스텐 필라멘트)</li>
                <li>&bull; <span className="text-white">백색</span>: ~5000K (태양)</li>
                <li>&bull; <span className="text-blue-400">청백색</span>: &gt;10000K (고온 플라즈마)</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. Stefan-Boltzmann Law */}
          <SectionDivider number="3" title="Stefan-Boltzmann Law" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Stefan-Boltzmann 법칙은 흑체가 방출하는 <strong className="text-red-400">총 복사 에너지</strong>가
              절대온도의 4제곱에 비례함을 나타냅니다. Planck 분포를 전체 파장에 대해 적분하면 이 결과를 얻습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                Stefan-Boltzmann Law - Total Emissive Power
              </h4>

              <EquationBox label="Blackbody Emissive Power [W/m^2]" accent="red">
                <Math tex={`E_b = \\int_0^\\infty E_{\\lambda,b} \\, d\\lambda = \\sigma T^4`} display />
              </EquationBox>

              <div className="mt-6 text-center p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                <p className="text-xs text-gray-500 mb-2">Stefan-Boltzmann Constant</p>
                <Math tex={`\\sigma = 5.670 \\times 10^{-8} \\, \\text{W}/(\\text{m}^2 \\cdot \\text{K}^4)`} display />
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-pink-500/30 bg-pink-500/5 p-6">
                <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-4">
                  Physical Significance
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">T^4</span>
                    <span>온도 2배 -&gt; 복사 16배 증가!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">E_b</span>
                    <span>단위 면적당 전 방향 방출 에너지</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">sigma</span>
                    <span>Planck 상수, 광속, Boltzmann 상수로 유도</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
                  Quick Reference Values
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">T = 300 K (room)</span>
                    <span className="text-red-400">E_b = 459 W/m^2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">T = 500 K</span>
                    <span className="text-red-400">E_b = 3544 W/m^2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">T = 1000 K</span>
                    <span className="text-red-400">E_b = 56.7 kW/m^2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">T = 5778 K (Sun)</span>
                    <span className="text-red-400">E_b = 63.2 MW/m^2</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Blackbody Intensity */}
          <SectionDivider number="4" title="Blackbody Intensity" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">복사 강도(Intensity)</strong>는 특정 방향으로의 단위 입체각당 복사 에너지를 나타냅니다.
              흑체는 <strong className="text-red-400">등방성(diffuse)</strong> 방출체로, 모든 방향에서 동일한 강도를 가집니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-6">
                Blackbody Intensity and Emissive Power Relation
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <EquationBox label="Total Intensity" accent="pink">
                  <Math tex={`I_b = \\frac{E_b}{\\pi} = \\frac{\\sigma T^4}{\\pi}`} display />
                </EquationBox>
                <EquationBox label="Spectral Intensity" accent="pink">
                  <Math tex={`I_{\\lambda,b} = \\frac{E_{\\lambda,b}}{\\pi}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Lambert&apos;s Cosine Law:</strong> 표면에서 방출되는 복사는 시선 방향과
                  표면 법선 사이 각도(theta)의 코사인에 비례합니다.
                </p>
                <div className="mt-3 text-center">
                  <Math tex={`I(\\theta) = I_n \\cos\\theta \\quad \\Rightarrow \\quad E = \\int_{hemisphere} I \\cos\\theta \\, d\\Omega = \\pi I`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Band Emission */}
          <SectionDivider number="5" title="Band Emission Fraction" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              실제 응용에서는 특정 <strong className="text-white">파장 범위</strong>에서 방출되는 복사의 비율을 알아야 합니다.
              <strong className="text-yellow-400"> Band emission fraction</strong> <Math tex="F_{0-\lambda T}" />는
              파장 0부터 lambda까지의 복사 비율을 나타냅니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-6 text-center">
                Band Emission Fraction
              </h4>

              <EquationBox label="Definition" accent="yellow">
                <Math tex={`F_{0-\\lambda T} = \\frac{\\int_0^\\lambda E_{\\lambda,b} \\, d\\lambda}{\\sigma T^4} = f(\\lambda T)`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400 mb-4">
                  <strong className="text-white">특징:</strong> F는 <Math tex="\lambda T" /> (um*K)의 함수이므로, 테이블로 정리 가능합니다.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="\lambda T" /> [um*K]</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="F_{0-\lambda T}" /></th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">비고</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">1000</td>
                        <td className="py-2 px-3 text-yellow-400">0.0003</td>
                        <td className="py-2 px-3 text-xs text-gray-500">거의 0</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">2000</td>
                        <td className="py-2 px-3 text-yellow-400">0.067</td>
                        <td className="py-2 px-3 text-xs text-gray-500">약 7%</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">2898 (peak)</td>
                        <td className="py-2 px-3 text-yellow-400">0.250</td>
                        <td className="py-2 px-3 text-xs text-gray-500">피크 파장까지 25%</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">4000</td>
                        <td className="py-2 px-3 text-yellow-400">0.481</td>
                        <td className="py-2 px-3 text-xs text-gray-500">약 50%</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">6000</td>
                        <td className="py-2 px-3 text-yellow-400">0.738</td>
                        <td className="py-2 px-3 text-xs text-gray-500">약 74%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">10000</td>
                        <td className="py-2 px-3 text-yellow-400">0.914</td>
                        <td className="py-2 px-3 text-xs text-gray-500">약 91%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-4">
                Band Fraction Application
              </h4>
              <div className="space-y-4">
                {bandFractions.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-2">{item.range}</p>
                    <Math tex={item.F} />
                    <p className="text-xs text-gray-400 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="태양 복사의 스펙트럼 분포" accent="yellow" icon="S">
              <p>
                태양(T = 5778 K)의 복사 분포 예시:
              </p>
              <ul className="mt-2 space-y-1">
                <li>&bull; UV (lambda &lt; 0.4 um): lambda*T = 2311 um*K -&gt; F ~ 12%</li>
                <li>&bull; Visible (0.4-0.7 um): F ~ 37%</li>
                <li>&bull; IR (lambda &gt; 0.7 um): F ~ 51%</li>
              </ul>
              <p className="mt-2 text-yellow-400">
                가시광선 영역에 최대 에너지가 집중되어 있어 인간의 눈이 이 영역에 민감하게 진화했습니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. 역사적 배경 */}
          <SectionDivider number="6" title="Historical Context" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
                Development of Blackbody Radiation Theory
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-16 text-xs text-gray-500">1879</span>
                  <div>
                    <strong className="text-red-400">Stefan</strong>
                    <p className="text-sm text-gray-400">실험적으로 E ~ T^4 발견</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-16 text-xs text-gray-500">1884</span>
                  <div>
                    <strong className="text-red-400">Boltzmann</strong>
                    <p className="text-sm text-gray-400">열역학적으로 T^4 법칙 유도</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-16 text-xs text-gray-500">1893</span>
                  <div>
                    <strong className="text-orange-400">Wien</strong>
                    <p className="text-sm text-gray-400">변위법칙 발표 (lambda_max * T = const)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-16 text-xs text-gray-500">1896</span>
                  <div>
                    <strong className="text-orange-400">Wien</strong>
                    <p className="text-sm text-gray-400">스펙트럼 분포식 제안 (단파장에서만 정확)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-16 text-xs text-gray-500">1900</span>
                  <div>
                    <strong className="text-pink-400">Rayleigh-Jeans</strong>
                    <p className="text-sm text-gray-400">고전 이론 (장파장에서만 정확, UV catastrophe)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-16 text-xs text-gray-500">1900</span>
                  <div>
                    <strong className="text-emerald-400">Planck</strong>
                    <p className="text-sm text-gray-400">양자 가설로 완전한 스펙트럼 분포 유도 - 양자역학의 시작!</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

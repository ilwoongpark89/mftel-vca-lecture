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
  const borderColor = accent === "red" ? "border-red-500/30" : accent === "pink" ? "border-pink-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : "border-slate-700";
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

const emissivityData = [
  { material: "Polished silver", epsilon: "0.02-0.03", type: "Metal" },
  { material: "Polished aluminum", epsilon: "0.04-0.06", type: "Metal" },
  { material: "Polished copper", epsilon: "0.03-0.05", type: "Metal" },
  { material: "Oxidized copper", epsilon: "0.5-0.8", type: "Metal" },
  { material: "Oxidized steel", epsilon: "0.8-0.9", type: "Metal" },
  { material: "Black paint", epsilon: "0.95-0.98", type: "Coating" },
  { material: "White paint", epsilon: "0.90-0.95", type: "Coating" },
  { material: "Water", epsilon: "0.96", type: "Liquid" },
  { material: "Human skin", epsilon: "0.95", type: "Bio" },
  { material: "Concrete", epsilon: "0.85-0.95", type: "Building" },
  { material: "Glass", epsilon: "0.90-0.95", type: "Building" },
  { material: "Brick", epsilon: "0.90-0.94", type: "Building" },
];

const surfaceTypeComparison = [
  {
    type: "Blackbody",
    alpha: "1",
    rho: "0",
    tau: "0",
    epsilon: "1",
    desc: "이상적 표면 - 기준",
  },
  {
    type: "Opaque (불투명)",
    alpha: "alpha",
    rho: "1-alpha",
    tau: "0",
    epsilon: "alpha (by Kirchhoff)",
    desc: "대부분의 고체",
  },
  {
    type: "Transparent",
    alpha: "~0",
    rho: "~0",
    tau: "~1",
    epsilon: "~0",
    desc: "유리 (특정 파장)",
  },
  {
    type: "Gray",
    alpha: "const",
    rho: "const",
    tau: "0",
    epsilon: "alpha",
    desc: "파장 무관 - 해석 단순화",
  },
];

export default function SurfaceProperties() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Surface Radiative Properties
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            방사율, 흡수율, 반사율, 투과율과 Kirchhoff의 법칙을 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 입사 복사의 처리 */}
          <SectionDivider number="1" title="Irradiation and Surface Response" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              표면에 <strong className="text-white">입사(irradiation, G)</strong>되는 복사 에너지는
              표면에서 <strong className="text-red-400">흡수(absorbed)</strong>,
              <strong className="text-pink-400"> 반사(reflected)</strong>,
              <strong className="text-orange-400"> 투과(transmitted)</strong>됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                Energy Balance for Irradiation
              </h4>

              <EquationBox label="Conservation of Energy" accent="red">
                <Math tex={`G = G_{abs} + G_{ref} + G_{tr}`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                  <p className="text-sm text-red-400 font-bold mb-2">Absorptivity (alpha)</p>
                  <Math tex={`\\alpha = \\frac{G_{abs}}{G}`} display />
                  <p className="text-xs text-gray-400 mt-2">흡수된 복사의 비율</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-pink-500/30">
                  <p className="text-sm text-pink-400 font-bold mb-2">Reflectivity (rho)</p>
                  <Math tex={`\\rho = \\frac{G_{ref}}{G}`} display />
                  <p className="text-xs text-gray-400 mt-2">반사된 복사의 비율</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-orange-500/30">
                  <p className="text-sm text-orange-400 font-bold mb-2">Transmissivity (tau)</p>
                  <Math tex={`\\tau = \\frac{G_{tr}}{G}`} display />
                  <p className="text-xs text-gray-400 mt-2">투과된 복사의 비율</p>
                </div>
              </div>

              <div className="mt-6 text-center p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-xs text-gray-500 mb-2">Conservation Relation</p>
                <Math tex={`\\alpha + \\rho + \\tau = 1`} display />
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="불투명 표면 (Opaque Surface)" accent="red" icon="!">
              <p>
                대부분의 고체는 열복사에 대해 <strong className="text-red-400">불투명(tau = 0)</strong>합니다.
                따라서:
              </p>
              <div className="mt-2 p-3 rounded-lg bg-slate-950/80 text-center">
                <Math tex={`\\alpha + \\rho = 1`} />
              </div>
              <p className="mt-2">
                높은 흡수율 = 낮은 반사율 (검은 표면)
                <br />
                낮은 흡수율 = 높은 반사율 (광택 금속)
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. 방사율 */}
          <SectionDivider number="2" title="Emissivity" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-red-400">방사율(Emissivity, epsilon)</strong>은 실제 표면이 방출하는 복사와
              동일 온도의 흑체가 방출하는 복사의 비율입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                Emissivity Definition
              </h4>

              <EquationBox label="Total Hemispherical Emissivity" accent="red">
                <Math tex={`\\varepsilon = \\frac{E}{E_b} = \\frac{E}{\\sigma T^4}`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Spectral Emissivity</p>
                  <Math tex={`\\varepsilon_\\lambda = \\frac{E_\\lambda}{E_{\\lambda,b}}`} display />
                  <p className="text-xs text-gray-400 mt-2">파장별 방사율</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Directional Emissivity</p>
                  <Math tex={`\\varepsilon_\\theta = \\frac{I(\\theta)}{I_b}`} display />
                  <p className="text-xs text-gray-400 mt-2">방향별 방사율</p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Real Surface Emission:</strong>
                </p>
                <div className="mt-2 text-center">
                  <Math tex={`E = \\varepsilon \\sigma T^4`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                Typical Emissivity Values
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Material</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="\varepsilon" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {emissivityData.map((item, i) => (
                      <tr key={i} className="border-b border-slate-800">
                        <td className="py-2 px-4 text-white">{item.material}</td>
                        <td className="py-2 px-4 text-red-400">{item.epsilon}</td>
                        <td className="py-2 px-4 text-gray-500">{item.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="방사율에 영향을 미치는 요인" accent="pink" icon="!">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">표면 상태:</strong> 산화, 거칠기 증가 -&gt; epsilon 증가</li>
                <li>&bull; <strong className="text-white">온도:</strong> 일반적으로 온도 증가 -&gt; 금속 epsilon 증가</li>
                <li>&bull; <strong className="text-white">파장:</strong> 파장에 따라 epsilon 변화 (비금속 &gt; 금속)</li>
                <li>&bull; <strong className="text-white">방향:</strong> 입사각에 따라 변화 (특히 금속)</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. Kirchhoff's Law */}
          <SectionDivider number="3" title="Kirchhoff's Law" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-emerald-400">Kirchhoff의 복사 법칙</strong>은 열역학적 평형에서
              물체의 <strong className="text-white">흡수율과 방사율이 동일</strong>함을 나타냅니다.
              이 법칙은 복사 열전달 해석에서 매우 중요한 역할을 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6 text-center">
                Kirchhoff&apos;s Law of Thermal Radiation
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <EquationBox label="Spectral, Directional" accent="emerald">
                  <Math tex={`\\varepsilon_{\\lambda,\\theta} = \\alpha_{\\lambda,\\theta}`} display />
                </EquationBox>
                <EquationBox label="Total Hemispherical (Gray)" accent="emerald">
                  <Math tex={`\\varepsilon = \\alpha`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">적용 조건:</strong>
                </p>
                <ul className="mt-2 text-sm text-gray-400 space-y-1">
                  <li>&bull; 스펙트럼/방향 수준: 항상 성립 (열평형 상태)</li>
                  <li>&bull; 전체/반구 수준: <strong className="text-emerald-400">Gray surface</strong> 또는 <strong className="text-emerald-400">Diffuse surface</strong> 가정 시</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Kirchhoff 법칙의 물리적 의미" accent="emerald" icon="K">
              <p>
                좋은 방출체는 좋은 흡수체입니다. 열평형 상태에서 물체가 특정 파장/방향으로 잘 방출한다면,
                그 파장/방향에서도 잘 흡수해야 합니다. 그렇지 않으면 열역학 제2법칙에 위배됩니다.
              </p>
              <p className="mt-2">
                <strong className="text-emerald-400">예:</strong> 흑체(epsilon = 1)는 완벽한 흡수체(alpha = 1)
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. Gray Surface */}
          <SectionDivider number="4" title="Gray Surface Approximation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-pink-400">Gray surface</strong>는 방사율과 흡수율이
              <strong className="text-white"> 파장에 무관</strong>한 표면입니다.
              실제 표면을 단순화하여 해석할 때 널리 사용되는 가정입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-6 text-center">
                Gray Surface Properties
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <EquationBox label="Gray Surface" accent="pink">
                  <Math tex={`\\varepsilon_\\lambda = \\varepsilon = \\text{const}`} display />
                  <Math tex={`\\alpha_\\lambda = \\alpha = \\text{const}`} display />
                </EquationBox>
                <EquationBox label="By Kirchhoff's Law" accent="pink">
                  <Math tex={`\\varepsilon = \\alpha`} display />
                  <p className="text-xs text-gray-400 mt-2">(for opaque: rho = 1 - epsilon)</p>
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-4">
                Surface Type Comparison
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">Type</th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium"><Math tex="\alpha" /></th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium"><Math tex="\rho" /></th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium"><Math tex="\tau" /></th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium"><Math tex="\varepsilon" /></th>
                      <th className="text-left py-3 px-3 text-gray-400 font-medium">Note</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {surfaceTypeComparison.map((item, i) => (
                      <tr key={i} className="border-b border-slate-800">
                        <td className="py-3 px-3 font-bold text-white">{item.type}</td>
                        <td className="py-3 px-3 text-red-400">{item.alpha}</td>
                        <td className="py-3 px-3 text-pink-400">{item.rho}</td>
                        <td className="py-3 px-3 text-orange-400">{item.tau}</td>
                        <td className="py-3 px-3 text-emerald-400">{item.epsilon}</td>
                        <td className="py-3 px-3 text-xs text-gray-500">{item.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 5. Diffuse vs Specular */}
          <SectionDivider number="5" title="Diffuse vs Specular Reflection" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              표면의 <strong className="text-white">반사 특성</strong>은 표면 거칠기에 따라
              <strong className="text-pink-400"> 확산 반사(diffuse)</strong>와
              <strong className="text-orange-400"> 정반사(specular)</strong>로 구분됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-pink-500/30 bg-pink-500/5 p-6">
                <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-4">
                  Diffuse Reflection (확산 반사)
                </h4>
                <div className="space-y-4">
                  <p className="text-sm text-gray-400">
                    입사 복사가 <strong className="text-white">모든 방향으로 균일하게</strong> 반사됨
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 거친 표면 (roughness &gt;&gt; lambda)</li>
                    <li>&bull; 무광 페인트, 콘크리트, 종이</li>
                    <li>&bull; 해석이 단순 (방향 독립)</li>
                  </ul>
                  <div className="p-3 rounded-lg bg-slate-950/80 text-center">
                    <Math tex={`I_{ref} = \\text{const (all directions)}`} />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                  Specular Reflection (정반사)
                </h4>
                <div className="space-y-4">
                  <p className="text-sm text-gray-400">
                    입사 각도와 <strong className="text-white">동일한 각도로</strong> 반사됨
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 매끄러운 표면 (roughness &lt;&lt; lambda)</li>
                    <li>&bull; 광택 금속, 거울, 유리</li>
                    <li>&bull; 해석이 복잡 (방향 의존)</li>
                  </ul>
                  <div className="p-3 rounded-lg bg-slate-950/80 text-center">
                    <Math tex={`\\theta_{ref} = \\theta_{inc}`} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Diffuse-Gray Surface 가정" accent="cyan" icon="D">
              <p>
                복사 열전달 해석에서 가장 많이 사용되는 가정은 <strong className="text-cyan-400">Diffuse-Gray</strong> 표면입니다:
              </p>
              <ul className="mt-2 space-y-1">
                <li>&bull; <strong className="text-white">Diffuse:</strong> 방출/반사가 방향에 무관</li>
                <li>&bull; <strong className="text-white">Gray:</strong> epsilon, alpha가 파장에 무관</li>
                <li>&bull; <strong className="text-white">Opaque:</strong> tau = 0</li>
                <li>&bull; 결과: <Math tex="\varepsilon = \alpha = 1 - \rho" /></li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 6. Solar Absorptivity vs Emissivity */}
          <SectionDivider number="6" title="Solar Absorptivity vs Thermal Emissivity" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              태양 복사와 지구 표면 복사는 매우 다른 파장 범위를 가지므로,
              <strong className="text-yellow-400"> 태양 흡수율(alpha_s)</strong>과
              <strong className="text-red-400"> 열 방사율(epsilon)</strong>이 크게 다를 수 있습니다.
              이를 <strong className="text-white">선택적 표면(selective surface)</strong>이라 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-6 text-center">
                Spectral Range Difference
              </h4>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-yellow-500/30">
                  <p className="text-sm text-yellow-400 font-bold mb-2">Solar Radiation (T_sun ~ 5800 K)</p>
                  <p className="text-xs text-gray-400">
                    Peak: lambda ~ 0.5 um
                    <br />
                    Range: 0.3 - 3 um (주로 가시광선 + 근적외선)
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                  <p className="text-sm text-red-400 font-bold mb-2">Earth Surface (T ~ 300 K)</p>
                  <p className="text-xs text-gray-400">
                    Peak: lambda ~ 10 um
                    <br />
                    Range: 3 - 50 um (주로 원적외선)
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400 mb-4">
                  <strong className="text-white">Selective Surface Applications:</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <p className="text-xs text-emerald-400 font-bold mb-1">Solar Collector</p>
                    <p className="text-xs text-gray-400">
                      High alpha_s, Low epsilon
                      <br />
                      태양 에너지 흡수, 열 손실 최소화
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                    <p className="text-xs text-cyan-400 font-bold mb-1">Radiative Cooling</p>
                    <p className="text-xs text-gray-400">
                      Low alpha_s, High epsilon
                      <br />
                      태양 반사, 열 방출 최대화
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-4">
                alpha_s / epsilon Ratio Examples
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Surface</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="\alpha_s" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="\varepsilon" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="\alpha_s/\varepsilon" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-white">Black chrome</td>
                      <td className="py-3 px-4 text-yellow-400">0.95</td>
                      <td className="py-3 px-4 text-red-400">0.10</td>
                      <td className="py-3 px-4 text-emerald-400">9.5</td>
                      <td className="py-3 px-4 text-xs text-gray-500">Solar collector</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-white">White paint</td>
                      <td className="py-3 px-4 text-yellow-400">0.25</td>
                      <td className="py-3 px-4 text-red-400">0.90</td>
                      <td className="py-3 px-4 text-cyan-400">0.28</td>
                      <td className="py-3 px-4 text-xs text-gray-500">Radiative cooling</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-white">Polished Al</td>
                      <td className="py-3 px-4 text-yellow-400">0.15</td>
                      <td className="py-3 px-4 text-red-400">0.05</td>
                      <td className="py-3 px-4">3.0</td>
                      <td className="py-3 px-4 text-xs text-gray-500">Reflector</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Black paint</td>
                      <td className="py-3 px-4 text-yellow-400">0.97</td>
                      <td className="py-3 px-4 text-red-400">0.97</td>
                      <td className="py-3 px-4">1.0</td>
                      <td className="py-3 px-4 text-xs text-gray-500">Gray (non-selective)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

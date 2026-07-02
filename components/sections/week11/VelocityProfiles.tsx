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

export default function VelocityProfiles() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Velocity Profiles
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            층류와 난류 유동에서의 속도 분포와 그 특성을 비교합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 층류 속도 분포 */}
          <SectionDivider number="1" title="Laminar Velocity Profile" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              완전 발달 층류 유동에서 속도 분포는 <strong className="text-white">포물선(Parabolic)</strong> 형태입니다.
              이는 Navier-Stokes 방정식의 해석해로부터 유도됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Laminar Parabolic Profile
              </h4>

              <EquationBox label="완전 발달 층류 속도 분포" accent="cyan">
                <Math tex={`u(r) = 2u_m \\left[1 - \\left(\\frac{r}{r_o}\\right)^2\\right]`} display />
              </EquationBox>

              {/* Visual representation */}
              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <div className="relative flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-auto max-w-lg">
                    {/* Background grid */}
                    <defs>
                      <pattern id="grid-lam" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
                      </pattern>
                      <marker id="arrow-lam" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                        <path d="M0,0 L8,3 L0,6 Z" fill="#22d3ee" />
                      </marker>
                    </defs>
                    <rect x="50" y="20" width="300" height="160" fill="url(#grid-lam)" />

                    {/* Pipe walls */}
                    <rect x="50" y="20" width="300" height="8" fill="#475569" />
                    <rect x="50" y="172" width="300" height="8" fill="#475569" />
                    <text x="30" y="28" fontSize="10" fill="#94a3b8">Wall</text>
                    <text x="30" y="180" fontSize="10" fill="#94a3b8">Wall</text>

                    {/* Parabolic velocity profile */}
                    <path
                      d="M 100 28 Q 100 100 100 172 M 100 28 C 200 28 200 28 200 100 C 200 172 200 172 100 172"
                      fill="rgba(34, 211, 238, 0.15)"
                      stroke="#22d3ee"
                      strokeWidth="2"
                    />

                    {/* Velocity vectors at different r positions */}
                    <line x1="100" y1="100" x2="200" y2="100" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#arrow-lam)" />
                    <line x1="100" y1="65" x2="175" y2="65" stroke="#22d3ee" strokeWidth="1.5" markerEnd="url(#arrow-lam)" />
                    <line x1="100" y1="135" x2="175" y2="135" stroke="#22d3ee" strokeWidth="1.5" markerEnd="url(#arrow-lam)" />
                    <line x1="100" y1="45" x2="130" y2="45" stroke="#22d3ee" strokeWidth="1" markerEnd="url(#arrow-lam)" />
                    <line x1="100" y1="155" x2="130" y2="155" stroke="#22d3ee" strokeWidth="1" markerEnd="url(#arrow-lam)" />

                    {/* Axes and labels */}
                    <line x1="90" y1="100" x2="90" y2="28" stroke="#64748b" strokeWidth="1" />
                    <line x1="90" y1="100" x2="90" y2="172" stroke="#64748b" strokeWidth="1" />
                    <text x="75" y="35" fontSize="10" fill="#94a3b8">r=r₀</text>
                    <text x="75" y="105" fontSize="10" fill="#94a3b8">r=0</text>
                    <text x="75" y="175" fontSize="10" fill="#94a3b8">r=r₀</text>

                    {/* u_max label */}
                    <text x="205" y="95" fontSize="11" fill="#22d3ee" fontWeight="bold">u_max = 2u_m</text>

                    {/* Flow direction */}
                    <text x="280" y="105" fontSize="12" fill="#64748b">Flow →</text>

                    {/* Equation */}
                    <text x="250" y="150" fontSize="10" fill="#94a3b8">u(r) = 2u_m[1-(r/r₀)²]</text>
                  </svg>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  포물선 속도 분포: 벽면에서 0, 중심에서 최대 (u_max = 2u_m)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">최대 속도</p>
                  <Math tex={`u_{max} = 2u_m \\quad \\text{(at } r = 0 \\text{)}`} display />
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">벽면 속도</p>
                  <Math tex={`u(r_o) = 0 \\quad \\text{(no-slip condition)}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="왜 포물선인가?" accent="cyan" icon="?">
              <p>
                층류에서 전단 응력 <Math tex="\\tau" />는 반경에 선형 비례하고,
                Newton의 점성 법칙 <Math tex="\\tau = -\\mu(du/dr)" />에서
                <Math tex="du/dr \\propto r" />이므로 적분하면 <Math tex="u \\propto r^2" />
                형태가 됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. 층류 마찰 계수 */}
          <SectionDivider number="2" title="Laminar Friction Factor" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Darcy Friction Factor for Laminar Flow
              </h4>

              <EquationBox label="층류 마찰 계수 (Hagen-Poiseuille)" accent="cyan">
                <Math tex={`f = \\frac{64}{Re_D} \\quad \\text{(for } Re_D < 2300 \\text{)}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">압력 강하:</strong>
                </p>
                <Math tex={`\\Delta p = f \\frac{L}{D} \\frac{\\rho u_m^2}{2}`} display />
                <p className="text-xs text-gray-500 mt-2">
                  Darcy-Weisbach 방정식
                </p>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">벽면 전단 응력:</strong>
                </p>
                <Math tex={`\\tau_w = \\frac{f}{8} \\rho u_m^2`} display />
              </div>
            </div>
          </motion.div>

          {/* 3. 난류 속도 분포 */}
          <SectionDivider number="3" title="Turbulent Velocity Profile" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              난류 유동의 속도 분포는 층류보다 <strong className="text-white">더 균일(flatter)</strong>합니다.
              강한 난류 혼합으로 인해 모멘텀이 효과적으로 전달되어, 중심부의 속도가 벽면 근처까지 유지됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Turbulent Velocity Profile (Power Law)
              </h4>

              <EquationBox label="멱법칙 근사 (Power Law Approximation)" accent="orange">
                <Math tex={`\\frac{u}{u_{max}} = \\left(1 - \\frac{r}{r_o}\\right)^{1/n} = \\left(\\frac{y}{r_o}\\right)^{1/n}`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                여기서 <Math tex="y = r_o - r" /> (벽면으로부터의 거리), n은 Re에 따라 변함
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">지수 n과 Reynolds 수</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400"><Math tex="Re_D" /></th>
                        <th className="text-left py-2 px-3 text-gray-400">n</th>
                        <th className="text-left py-2 px-3 text-gray-400"><Math tex="u_m / u_{max}" /></th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">4,000</td>
                        <td className="py-2 px-3">6</td>
                        <td className="py-2 px-3">0.791</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">10,000</td>
                        <td className="py-2 px-3 font-bold text-orange-400">7</td>
                        <td className="py-2 px-3">0.817</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">110,000</td>
                        <td className="py-2 px-3">8</td>
                        <td className="py-2 px-3">0.837</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">3,200,000</td>
                        <td className="py-2 px-3">10</td>
                        <td className="py-2 px-3">0.865</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  일반적으로 <strong className="text-orange-400">n = 7 (1/7 power law)</strong>을 많이 사용
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="1/7 Power Law" accent="orange" icon="7">
              <p className="mb-2">
                <Math tex="Re_D \\approx 10^4" /> 근처에서 가장 많이 사용되는 근사입니다:
              </p>
              <div className="p-2 bg-slate-900/50 rounded-lg my-2">
                <Math tex={`\\frac{u}{u_{max}} = \\left(\\frac{y}{r_o}\\right)^{1/7}`} display />
              </div>
              <p className="text-gray-500">
                이 경우 <Math tex="u_m / u_{max} \\approx 0.82" />
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. 층류 vs 난류 비교 */}
          <SectionDivider number="4" title="Laminar vs Turbulent Comparison" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                속도 분포 비교
              </h4>

              {/* Visual comparison */}
              <div className="mb-6 p-4 rounded-xl bg-slate-900/50">
                <div className="relative flex items-center justify-center">
                  <svg viewBox="0 0 450 220" className="w-full h-auto max-w-xl">
                    {/* Background grid */}
                    <defs>
                      <pattern id="grid-comp" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect x="80" y="20" width="300" height="160" fill="url(#grid-comp)" />

                    {/* Pipe walls */}
                    <rect x="80" y="15" width="300" height="8" fill="#475569" />
                    <rect x="80" y="177" width="300" height="8" fill="#475569" />
                    <text x="55" y="22" fontSize="10" fill="#94a3b8">Wall</text>
                    <text x="55" y="185" fontSize="10" fill="#94a3b8">Wall</text>

                    {/* Centerline */}
                    <line x1="80" y1="100" x2="380" y2="100" stroke="#334155" strokeWidth="1" strokeDasharray="4,4" />
                    <text x="55" y="105" fontSize="10" fill="#64748b">r=0</text>

                    {/* Laminar profile (parabolic) - dashed cyan */}
                    <path
                      d="M 130 23 Q 230 100 130 177"
                      fill="rgba(34, 211, 238, 0.1)"
                      stroke="#22d3ee"
                      strokeWidth="2.5"
                      strokeDasharray="8,4"
                    />

                    {/* Turbulent profile (flatter) - solid orange */}
                    <path
                      d="M 130 23 C 150 40, 190 55, 210 100 C 190 145, 150 160, 130 177"
                      fill="rgba(251, 146, 60, 0.1)"
                      stroke="#fb923c"
                      strokeWidth="2.5"
                    />

                    {/* Velocity annotations */}
                    <line x1="130" y1="100" x2="230" y2="100" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3,2" />
                    <text x="235" y="95" fontSize="9" fill="#22d3ee">u_max (laminar)</text>
                    <line x1="130" y1="100" x2="210" y2="100" stroke="#fb923c" strokeWidth="1" />
                    <text x="215" y="108" fontSize="9" fill="#fb923c">u_max (turbulent)</text>

                    {/* r/r₀ axis labels */}
                    <text x="125" y="30" fontSize="9" fill="#94a3b8">r/r₀=1</text>
                    <text x="125" y="175" fontSize="9" fill="#94a3b8">r/r₀=1</text>

                    {/* Legend */}
                    <rect x="300" y="30" width="130" height="60" rx="5" fill="#0f172a" stroke="#334155" />
                    <line x1="310" y1="50" x2="340" y2="50" stroke="#22d3ee" strokeWidth="2" strokeDasharray="6,3" />
                    <text x="350" y="54" fontSize="10" fill="#22d3ee">Laminar</text>
                    <line x1="310" y1="70" x2="340" y2="70" stroke="#fb923c" strokeWidth="2" />
                    <text x="350" y="74" fontSize="10" fill="#fb923c">Turbulent</text>

                    {/* Key values */}
                    <text x="300" y="130" fontSize="10" fill="#22d3ee">u_max/u_m = 2.0</text>
                    <text x="300" y="150" fontSize="10" fill="#fb923c">u_max/u_m ≈ 1.2</text>
                  </svg>
                </div>
              </div>

              <div className="overflow-x-auto mt-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400">특성</th>
                      <th className="text-left py-3 px-4 text-cyan-400">Laminar</th>
                      <th className="text-left py-3 px-4 text-orange-400">Turbulent</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">속도 분포 형태</td>
                      <td className="py-3 px-4">포물선 (Parabolic)</td>
                      <td className="py-3 px-4">더 균일 (Flatter)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4"><Math tex="u_{max}/u_m" /></td>
                      <td className="py-3 px-4">2.0</td>
                      <td className="py-3 px-4">~1.2 (varies with Re)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">경계층 두께</td>
                      <td className="py-3 px-4">두꺼움</td>
                      <td className="py-3 px-4">얇음 (viscous sublayer)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">벽면 전단 응력</td>
                      <td className="py-3 px-4">낮음</td>
                      <td className="py-3 px-4">높음</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">열전달</td>
                      <td className="py-3 px-4">낮음</td>
                      <td className="py-3 px-4">높음 (enhanced mixing)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 5. 난류 마찰 계수 */}
          <SectionDivider number="5" title="Turbulent Friction Factor" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Turbulent Friction Factor Correlations
              </h4>

              <div className="space-y-4">
                <EquationBox label="Blasius Correlation (매끈한 관, Re < 2x10^4)" accent="orange">
                  <Math tex={`f = 0.316 \\, Re_D^{-1/4}`} display />
                </EquationBox>

                <EquationBox label="Petukhov Correlation (매끈한 관, 3000 < Re < 5x10^6)" accent="orange">
                  <Math tex={`f = (0.790 \\ln Re_D - 1.64)^{-2}`} display />
                </EquationBox>

                <EquationBox label="Colebrook Equation (거친 관)" accent="orange">
                  <Math tex={`\\frac{1}{\\sqrt{f}} = -2.0 \\log\\left(\\frac{\\varepsilon/D}{3.7} + \\frac{2.51}{Re_D \\sqrt{f}}\\right)`} display />
                </EquationBox>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                <Math tex="\\varepsilon" />: 표면 거칠기 (surface roughness)
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Moody Diagram" accent="blue" icon="M">
              <p>
                <strong className="text-white">Moody 선도</strong>는 마찰 계수 f를 Re와 상대 거칠기
                <Math tex="\\varepsilon/D" />의 함수로 나타낸 그래프입니다.
                열전달 상관식에서 f가 필요할 때 자주 참조됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. 열전달과의 관계 */}
          <SectionDivider number="6" title="Connection to Heat Transfer" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              속도 분포는 <strong className="text-white">열전달 특성</strong>과 밀접하게 연관됩니다.
              난류의 강한 혼합은 열전달을 크게 향상시킵니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Reynolds Analogy
              </h4>

              <p className="text-gray-400 mb-4">
                모멘텀 전달과 열전달 사이의 유사성 (Pr = 1일 때):
              </p>

              <EquationBox label="Reynolds Analogy" accent="emerald">
                <Math tex={`St = \\frac{f}{8}`} display />
              </EquationBox>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-emerald-400">Stanton Number:</strong>
                </p>
                <Math tex={`St = \\frac{Nu}{Re \\cdot Pr} = \\frac{h}{\\rho c_p u_m}`} display />
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                마찰 계수가 크면 열전달 계수도 높습니다 (강한 난류 혼합 때문)
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="난류에서 열전달이 좋은 이유" accent="emerald" icon="h">
              <ul className="space-y-2">
                <li>- 난류 혼합으로 <strong className="text-white">열 확산</strong>이 강화됨</li>
                <li>- 벽면 근처 경계층이 <strong className="text-white">얇아짐</strong></li>
                <li>- 평균 속도가 중심부까지 유지되어 <strong className="text-white">열 운반 능력</strong> 증가</li>
                <li>- 결과적으로 <Math tex="Nu" />가 크게 증가</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

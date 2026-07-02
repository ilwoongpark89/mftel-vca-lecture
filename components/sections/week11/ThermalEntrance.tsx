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

export default function ThermalEntrance() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thermal Entrance Region
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            열적 입구 길이와 발달 중/완전 발달 열 경계층을 이해합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 평균 온도 */}
          <SectionDivider number="1" title="Mean Temperature" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              외부 유동에서는 <Math tex="T_\\infty" />를 기준으로 열전달을 정의했습니다.
              내부 유동에서는 <strong className="text-white">평균 온도(Mean Temperature)</strong> <Math tex="T_m" />을
              사용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Mean (Bulk) Temperature Definition
              </h4>

              <EquationBox label="에너지 기준 평균 온도" accent="cyan">
                <Math tex={`T_m = \\frac{\\int_{A_c} \\rho u c_p T \\, dA_c}{\\dot{m} c_p} = \\frac{1}{\\dot{m} c_p} \\int_{A_c} \\rho u c_p T \\, dA_c`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">물리적 의미:</strong>
                </p>
                <p className="text-sm text-gray-400">
                  단면을 통해 운반되는 <strong className="text-cyan-400">총 열에너지</strong>를 나타내는 온도입니다.
                  유체를 잘 혼합하여 측정했을 때의 온도와 같습니다.
                </p>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">균일 물성치 가정 시:</strong>
                </p>
                <Math tex={`T_m = \\frac{\\int_{A_c} u T \\, dA_c}{u_m A_c} = \\frac{2}{u_m r_o^2} \\int_0^{r_o} u T \\cdot r \\, dr`} display />
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="왜 Bulk Temperature인가?" accent="cyan" icon="Tb">
              <p>
                <Math tex="T_m" />은 &quot;bulk&quot; 또는 &quot;mixing cup&quot; temperature라고도 불립니다.
                이는 유동 단면의 모든 유체를 <strong className="text-white">완전히 혼합</strong>했을 때 측정되는 온도이기 때문입니다.
                열전달량 계산의 기준이 됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. Newton의 냉각 법칙 (내부 유동) */}
          <SectionDivider number="2" title="Newton's Law of Cooling" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Internal Flow: Heat Transfer Rate
              </h4>

              <EquationBox label="Newton의 냉각 법칙" accent="cyan">
                <Math tex={`q''_s = h(T_s - T_m)`} display />
              </EquationBox>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">외부 유동</p>
                  <Math tex={`q''_s = h(T_s - T_\\infty)`} display />
                  <p className="text-xs text-gray-500 mt-2"><Math tex="T_\\infty" />: 자유 흐름 온도</p>
                </div>
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <p className="text-sm text-orange-400 font-bold mb-2">내부 유동</p>
                  <Math tex={`q''_s = h(T_s - T_m)`} display />
                  <p className="text-xs text-gray-500 mt-2"><Math tex="T_m" />: 평균 (bulk) 온도</p>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                <strong className="text-yellow-400">중요:</strong> 내부 유동에서 <Math tex="T_m" />은 x에 따라 변합니다!
              </p>
            </div>
          </motion.div>

          {/* 3. 열적 입구 길이 */}
          <SectionDivider number="3" title="Thermal Entry Length" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              유체역학적 경계층과 마찬가지로, <strong className="text-white">열 경계층(Thermal Boundary Layer)</strong>도
              입구에서부터 발달합니다. 열 경계층이 완전히 발달하는 거리를
              <strong className="text-cyan-400">열적 입구 길이</strong>라 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Thermal Entry Length
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <EquationBox label="층류 (Laminar)" accent="cyan">
                  <Math tex={`\\frac{x_{fd,t}}{D} \\approx 0.05 Re_D Pr`} display />
                </EquationBox>
                <EquationBox label="난류 (Turbulent)" accent="orange">
                  <Math tex={`\\frac{x_{fd,t}}{D} \\approx 10 \\text{ to } 60`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Prandtl 수와의 관계:</strong>
                </p>
                <Math tex={`\\frac{x_{fd,t}}{x_{fd,h}} \\approx Pr`} display />
                <ul className="text-xs text-gray-500 mt-2 space-y-1">
                  <li>- Pr &lt; 1 (액체 금속): 열 경계층이 먼저 발달</li>
                  <li>- Pr = 1 (기체): 동시에 발달</li>
                  <li>- Pr &gt; 1 (물, 오일): 속도 경계층이 먼저 발달</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Pr 수에 따른 경계층 발달" accent="orange" icon="Pr">
              <div className="space-y-2">
                <p>
                  <strong className="text-cyan-400">Pr &lt; 1 (액체 금속):</strong> 열확산이 모멘텀 확산보다 빠름
                  <br />→ 열 경계층이 속도 경계층보다 두꺼움
                </p>
                <p>
                  <strong className="text-orange-400">Pr &gt; 1 (물, 오일):</strong> 모멘텀 확산이 열확산보다 빠름
                  <br />→ 속도 경계층이 열 경계층보다 두꺼움
                </p>
              </div>
            </InsightCard>
          </motion.div>

          {/* 4. 완전 발달 열전달 */}
          <SectionDivider number="4" title="Fully Developed Thermal Conditions" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                완전 발달 열전달의 정의
              </h4>

              <div className="p-4 rounded-xl bg-slate-900/50 mb-4">
                <p className="text-sm text-emerald-400 font-bold mb-2">무차원 온도 분포가 x에 무관</p>
                <Math tex={`\\frac{\\partial}{\\partial x}\\left[\\frac{T_s(x) - T(r,x)}{T_s(x) - T_m(x)}\\right] = 0`} display />
              </div>

              <p className="text-sm text-gray-400 mb-4">
                이 조건은 다음을 의미합니다:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">온도 구배가 일정</p>
                  <Math tex={`\\left.\\frac{\\partial T}{\\partial r}\\right|_{r=r_o} \\propto (T_s - T_m)`} display />
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">h가 x에 무관</p>
                  <Math tex={`h = \\frac{-k(\\partial T/\\partial r)|_{r=r_o}}{T_s - T_m} = \\text{const}`} display />
                </div>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-sm text-yellow-400 font-bold mb-1">주의!</p>
                <p className="text-sm text-gray-400">
                  완전 발달 조건에서 <Math tex="T" />와 <Math tex="T_m" />은 여전히 x에 따라 변합니다.
                  단지 <strong className="text-white">무차원 온도 분포</strong>와 <strong className="text-white">h</strong>가 일정할 뿐입니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5. 입구 영역에서의 Nu */}
          <SectionDivider number="5" title="Nusselt Number in Entry Region" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              입구 영역에서 열 경계층이 얇기 때문에 <strong className="text-white">국소 열전달 계수</strong>가 높습니다.
              하류로 갈수록 경계층이 두꺼워지며 h가 감소합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Local Nusselt Number Variation
              </h4>

              {/* Visual representation */}
              <div className="mb-6 p-4 rounded-xl bg-slate-900/50">
                <div className="relative h-56">
                  <svg className="w-full h-full" viewBox="0 0 440 200" preserveAspectRatio="xMidYMid meet">
                    {/* Background grid */}
                    <defs>
                      <pattern id="gridNu" width="40" height="25" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 25" fill="none" stroke="rgb(51,65,85)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect x="60" y="20" width="360" height="150" fill="url(#gridNu)" />

                    {/* Axes */}
                    <line x1="60" y1="170" x2="420" y2="170" stroke="rgb(148,163,184)" strokeWidth="1.5" />
                    <line x1="60" y1="170" x2="60" y2="20" stroke="rgb(148,163,184)" strokeWidth="1.5" />

                    {/* Axis arrows */}
                    <polygon points="420,170 410,166 410,174" fill="rgb(148,163,184)" />
                    <polygon points="60,20 56,30 64,30" fill="rgb(148,163,184)" />

                    {/* Y-axis labels */}
                    <text x="50" y="175" fill="rgb(156,163,175)" fontSize="10" textAnchor="end">0</text>
                    <text x="50" y="125" fill="rgb(156,163,175)" fontSize="10" textAnchor="end">5</text>
                    <text x="50" y="75" fill="rgb(156,163,175)" fontSize="10" textAnchor="end">10</text>
                    <text x="50" y="35" fill="rgb(156,163,175)" fontSize="10" textAnchor="end">15</text>

                    {/* Y-axis tick marks */}
                    <line x1="55" y1="120" x2="60" y2="120" stroke="rgb(148,163,184)" strokeWidth="1" />
                    <line x1="55" y1="70" x2="60" y2="70" stroke="rgb(148,163,184)" strokeWidth="1" />

                    {/* Entrance region shading */}
                    <rect x="60" y="20" width="160" height="150" fill="rgb(34,211,238)" fillOpacity="0.05" />

                    {/* Fully developed region label */}
                    <text x="310" y="40" fill="rgb(74,222,128)" fontSize="9" textAnchor="middle">Fully Developed</text>
                    <text x="310" y="52" fill="rgb(74,222,128)" fontSize="9" textAnchor="middle">Region</text>

                    {/* Entry region label */}
                    <text x="140" y="40" fill="rgb(34,211,238)" fontSize="9" textAnchor="middle">Thermal Entry</text>
                    <text x="140" y="52" fill="rgb(34,211,238)" fontSize="9" textAnchor="middle">Region</text>

                    {/* Nu_fd horizontal line (fully developed) */}
                    <line x1="220" y1="130" x2="410" y2="130" stroke="rgb(74,222,128)" strokeWidth="2" strokeDasharray="6,3" />

                    {/* Nu_x curve - high at entrance, decreasing to fully developed */}
                    <path
                      d="M 60 35 C 80 45, 100 65, 120 85 C 140 100, 160 115, 180 125 C 200 130, 220 130, 410 130"
                      fill="none"
                      stroke="rgb(34, 211, 238)"
                      strokeWidth="2.5"
                    />

                    {/* x_fd,t marker vertical line */}
                    <line x1="220" y1="170" x2="220" y2="30" stroke="rgb(251,146,60)" strokeWidth="1.5" strokeDasharray="4,4" />

                    {/* Nu_fd value indicator */}
                    <line x1="60" y1="130" x2="220" y2="130" stroke="rgb(100,116,139)" strokeWidth="0.5" strokeDasharray="2,2" />

                    {/* Axis labels */}
                    <text x="430" y="175" fill="rgb(156,163,175)" fontSize="11" fontStyle="italic">x</text>
                    <text x="35" y="15" fill="rgb(156,163,175)" fontSize="11">Nu</text>

                    {/* x_fd,t label */}
                    <text x="220" y="185" fill="rgb(251,146,60)" fontSize="10" textAnchor="middle" fontStyle="italic">x_fd,t</text>

                    {/* Curve labels */}
                    <text x="340" y="122" fill="rgb(74,222,128)" fontSize="10" fontWeight="bold">Nu_fd = 4.36</text>
                    <text x="90" y="55" fill="rgb(34,211,238)" fontSize="10" fontWeight="bold">Nu_x</text>

                    {/* Arrow showing high Nu at entrance */}
                    <path d="M 75 65 L 65 45" stroke="rgb(34,211,238)" strokeWidth="1" fill="none" markerEnd="url(#arrowNu)" />
                    <defs>
                      <marker id="arrowNu" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                        <polygon points="0,0 6,3 0,6" fill="rgb(34,211,238)" />
                      </marker>
                    </defs>
                    <text x="85" y="75" fill="rgb(34,211,238)" fontSize="8">High at inlet</text>
                  </svg>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  입구에서 Nu가 높고 (열 경계층이 얇음), 완전 발달 영역에서 일정해짐 (Nu = 4.36 for q&apos;&apos;s = const)
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-cyan-400 font-bold mb-2">Combined Entry Length (Uniform Ts, Laminar)</p>
                <p className="text-xs text-gray-500 mb-2">Sieder-Tate (유체역학적 + 열적 입구 영역 모두 고려):</p>
                <Math tex={`\\overline{Nu}_D = 1.86 \\left(\\frac{Re_D Pr}{L/D}\\right)^{1/3} \\left(\\frac{\\mu}{\\mu_s}\\right)^{0.14}`} display />
                <p className="text-xs text-gray-500 mt-2">
                  적용 조건: <Math tex="0.48 < Pr < 16700" />, <Math tex="0.0044 < \\mu/\\mu_s < 9.75" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* 6. 결합 입구 vs 분리 입구 */}
          <SectionDivider number="6" title="Combined vs Separate Entry Effects" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                입구 조건에 따른 분류
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">1. Combined Entry Length</h5>
                  <p className="text-sm text-gray-400">
                    속도 경계층과 열 경계층이 <strong className="text-white">동시에 발달</strong>합니다.
                    가열/냉각이 입구에서부터 시작되는 경우입니다.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    예: 균일 온도로 가열되는 짧은 관
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">2. Thermal Entry Length (Unheated Starting Length)</h5>
                  <p className="text-sm text-gray-400">
                    유동이 <strong className="text-white">먼저 완전 발달</strong>한 후 가열/냉각이 시작됩니다.
                    속도 분포는 이미 포물선/난류 분포입니다.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    예: 긴 단열 구간 후 열교환기 진입
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-2">3. Fully Developed (Both)</h5>
                  <p className="text-sm text-gray-400">
                    속도와 온도 분포가 <strong className="text-white">모두 완전 발달</strong>한 상태입니다.
                    대부분의 상관식은 이 조건을 가정합니다.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    예: 충분히 긴 관 (L &gt;&gt; x_fd)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="실무에서의 입구 효과" accent="blue" icon="Tip">
              <p>
                대부분의 열교환기에서 관 길이는 입구 길이보다 훨씬 깁니다.
                따라서 <strong className="text-white">완전 발달 조건</strong>을 가정하는 것이 일반적입니다.
                단, 짧은 관이나 초기 영역이 중요한 경우 입구 효과를 고려해야 합니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "orange",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "orange" ? "border-orange-500/30" : accent === "amber" ? "border-amber-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "red" ? "border-red-500/30" : "border-slate-700";
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
  accent = "orange",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    amber: { bg: "bg-amber-500/5", border: "border-amber-500/20", text: "text-amber-400", iconBg: "bg-amber-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
  };
  const c = colors[accent] || colors.orange;
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

export default function GrashofRayleigh() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Grashof & Rayleigh Numbers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            자연 대류를 지배하는 핵심 무차원수: 부력 vs 점성력, 열전달 특성
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Grashof Number */}
          <SectionDivider number="1" title="Grashof Number (Gr)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Grashof 수</strong>는 자연 대류에서
              <strong className="text-orange-400"> 부력(Buoyancy)</strong>과
              <strong className="text-orange-400"> 점성력(Viscous force)</strong>의 비율을 나타내는 무차원수입니다.
              강제 대류에서 Reynolds 수가 하는 역할과 유사합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Grashof Number 정의
              </h4>

              <EquationBox label="Grashof Number" accent="orange">
                <Math tex={`Gr_L = \\frac{g \\beta (T_s - T_\\infty) L^3}{\\nu^2}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">변수 정의</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <p><Math tex="g" />: 중력 가속도 [m/s<sup>2</sup>]</p>
                    <p><Math tex="\beta" />: 체적 팽창 계수 [1/K]</p>
                    <p><Math tex="T_s" />: 표면 온도 [K]</p>
                  </div>
                  <div>
                    <p><Math tex="T_\infty" />: 주변 유체 온도 [K]</p>
                    <p><Math tex="L" />: 특성 길이 [m]</p>
                    <p><Math tex="\nu" />: 동점성계수 [m<sup>2</sup>/s]</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
                Grashof Number의 물리적 의미
              </h4>

              <EquationBox label="물리적 해석" accent="amber">
                <Math tex={`Gr = \\frac{\\text{Buoyancy force}}{\\text{Viscous force}} = \\frac{g\\beta \\Delta T L^3}{\\nu^2}`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-amber-400 font-bold mb-2">분자: 부력</h5>
                  <p className="text-sm text-gray-400">
                    <Math tex="g\beta\Delta T \cdot L^3" /> ~ <Math tex="\rho g \Delta V" /><br/>
                    온도차에 의한 밀도 변화로 발생하는 부력
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-amber-400 font-bold mb-2">분모: 점성력</h5>
                  <p className="text-sm text-gray-400">
                    <Math tex="\nu^2 / L^3" /> ~ <Math tex="\mu \cdot (u/L) / L^2" /><br/>
                    유동을 억제하는 점성 마찰력
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Gr과 Re의 비교" accent="orange" icon="Gr">
              <div className="overflow-x-auto">
                <table className="w-full text-sm mt-2">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-2 text-gray-400 font-medium">특성</th>
                      <th className="text-left py-2 px-2 text-gray-400 font-medium">Gr (자연 대류)</th>
                      <th className="text-left py-2 px-2 text-gray-400 font-medium">Re (강제 대류)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-2">관성력</td>
                      <td className="py-2 px-2">부력에 의해 유발</td>
                      <td className="py-2 px-2">외부에서 부여</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-2">정의</td>
                      <td className="py-2 px-2"><Math tex="g\beta\Delta T L^3/\nu^2" /></td>
                      <td className="py-2 px-2"><Math tex="\rho u L/\mu = uL/\nu" /></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2">난류 전이</td>
                      <td className="py-2 px-2"><Math tex="Gr \sim 10^9" /></td>
                      <td className="py-2 px-2"><Math tex="Re \sim 10^5" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </InsightCard>
          </motion.div>

          {/* 2. Rayleigh Number */}
          <SectionDivider number="2" title="Rayleigh Number (Ra)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Rayleigh 수</strong>는 Grashof 수와 Prandtl 수의 곱으로,
              자연 대류 열전달 상관식에서 가장 널리 사용되는 무차원수입니다.
              <strong className="text-orange-400"> 부력, 점성, 열확산</strong>의 상호작용을 통합적으로 나타냅니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Rayleigh Number 정의
              </h4>

              <EquationBox label="Rayleigh Number" accent="orange">
                <Math tex={`Ra_L = Gr_L \\cdot Pr = \\frac{g \\beta (T_s - T_\\infty) L^3}{\\nu \\alpha}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">전개 형태</h5>
                <Math tex={`Ra_L = \\frac{g \\beta (T_s - T_\\infty) L^3}{\\nu^2} \\cdot \\frac{\\nu}{\\alpha} = \\frac{g \\beta \\Delta T L^3}{\\nu \\alpha}`} display />
                <p className="text-sm text-gray-500 mt-4">
                  여기서 <Math tex="\alpha = k/(\rho c_p)" />는 열확산계수, <Math tex="Pr = \nu/\alpha" />는 Prandtl 수
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
                Rayleigh Number의 물리적 의미
              </h4>

              <EquationBox label="물리적 해석" accent="amber">
                <Math tex={`Ra = \\frac{\\text{Buoyancy force} \\times \\text{Thermal inertia}}{\\text{Viscous force} \\times \\text{Thermal diffusion}}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  Ra는 <strong className="text-white">열에 의해 구동되는 유동</strong>의 강도를 나타냅니다.
                  Ra가 클수록 부력 구동력이 강하고 열전달이 활발합니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="왜 Ra를 사용하는가?" accent="amber" icon="Ra">
              <p className="mb-2">
                대부분의 자연 대류 상관식이 <strong className="text-white">Ra</strong> 형태로 표현되는 이유:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <Math tex="Nu = f(Ra, Pr)" />: 열전달과 직접 연결</li>
                <li>&bull; 실험 데이터 정리에 편리</li>
                <li>&bull; <Math tex="Ra = Gr \cdot Pr" />로 두 효과 통합</li>
                <li>&bull; 대부분의 유체에서 <Math tex="Pr \sim O(1)" />이라 Gr과 유사</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. 층류-난류 전이 */}
          <SectionDivider number="3" title="Laminar-Turbulent Transition" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              자연 대류에서도 강제 대류와 마찬가지로 <strong className="text-white">층류-난류 전이</strong>가 발생합니다.
              Ra (또는 Gr) 값에 따라 유동 형태가 결정됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                수직 평판의 전이 기준
              </h4>

              <EquationBox label="임계 Rayleigh Number" accent="orange">
                <Math tex={`Ra_c \\approx 10^9`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-2">층류 (Laminar)</h5>
                  <p className="text-sm text-gray-400">
                    <Math tex="Ra_L < 10^9" /><br/><br/>
                    규칙적인 유동 패턴<br/>
                    경계층이 명확히 구분됨<br/>
                    열전달 상대적으로 낮음
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-2">난류 (Turbulent)</h5>
                  <p className="text-sm text-gray-400">
                    <Math tex="Ra_L > 10^9" /><br/><br/>
                    불규칙한 유동, 와류 발생<br/>
                    경계층 교란 증가<br/>
                    열전달 증가
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                형상별 전이 기준
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">형상</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">특성 길이 L</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">전이 기준</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">수직 평판</td>
                      <td className="py-3 px-4">높이 L</td>
                      <td className="py-3 px-4"><Math tex="Ra_c \approx 10^9" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-amber-400">수평 원통</td>
                      <td className="py-3 px-4">직경 D</td>
                      <td className="py-3 px-4"><Math tex="Ra_c \approx 10^9" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">구</td>
                      <td className="py-3 px-4">직경 D</td>
                      <td className="py-3 px-4"><Math tex="Ra_c \approx 10^9" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-emerald-400">수평 평판 (상면 가열)</td>
                      <td className="py-3 px-4"><Math tex="L = A_s/P" /></td>
                      <td className="py-3 px-4"><Math tex="Ra_c \approx 10^7" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 4. Nu-Ra 관계 */}
          <SectionDivider number="4" title="General Nu-Ra Relationship" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              자연 대류 열전달 상관식은 일반적으로 <strong className="text-white">Nusselt 수</strong>를
              <strong className="text-orange-400"> Rayleigh 수</strong>의 함수로 표현합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                일반 상관식 형태
              </h4>

              <EquationBox label="자연 대류 상관식" accent="orange">
                <Math tex={`\\overline{Nu}_L = C \\cdot Ra_L^n`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">지수 n의 의미</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <p className="text-emerald-400 font-bold mb-1">층류: n = 1/4</p>
                    <p><Math tex="\overline{Nu} \sim Ra^{1/4}" /></p>
                    <p className="text-xs mt-1">경계층 이론에서 유도</p>
                  </div>
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <p className="text-red-400 font-bold mb-1">난류: n = 1/3</p>
                    <p><Math tex="\overline{Nu} \sim Ra^{1/3}" /></p>
                    <p className="text-xs mt-1">난류 혼합 이론에서 유도</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="열전달 계수의 스케일링" accent="amber" icon="h">
              <p className="mb-2">
                상관식 <Math tex="Nu \sim Ra^n" />으로부터 열전달 계수 h를 유도하면:
              </p>
              <Math tex={`h \\sim \\frac{k}{L} Ra^n \\sim \\frac{k}{L} \\left(\\frac{g\\beta \\Delta T L^3}{\\nu \\alpha}\\right)^n`} display />
              <ul className="space-y-1 mt-2">
                <li>&bull; 층류 (n=1/4): <Math tex="h \sim L^{-1/4}" /> (L 증가 시 h 감소)</li>
                <li>&bull; 난류 (n=1/3): <Math tex="h \sim L^0" /> (L에 무관)</li>
                <li>&bull; 온도차: <Math tex="h \sim \Delta T^{1/4}" /> 또는 <Math tex="\Delta T^{1/3}" /></li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 5. 물성치 평가 온도 */}
          <SectionDivider number="5" title="Film Temperature" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              자연 대류 상관식 사용 시 유체 물성치를 평가할 온도를 결정해야 합니다.
              일반적으로 <strong className="text-white">막온도(Film Temperature)</strong>를 사용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
                막온도 (Film Temperature)
              </h4>

              <EquationBox label="Film Temperature 정의" accent="amber">
                <Math tex={`T_f = \\frac{T_s + T_\\infty}{2}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-amber-400">물성치 평가:</strong> <Math tex="\nu" />, <Math tex="\alpha" />, k, Pr을
                  막온도 <Math tex="T_f" />에서 평가합니다.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  <strong className="text-amber-400">예외 - 이상 기체:</strong> <Math tex="\beta = 1/T_\infty" /> (절대온도)로 평가하는 경우도 있음
                </p>
              </div>
            </div>
          </motion.div>

          {/* 6. 예제 */}
          <SectionDivider number="6" title="Example Calculation" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 12.1: Gr, Ra 계산
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 높이 0.5m의 수직 평판이 공기 중에 있다.
                  평판 온도 70°C, 주변 공기 온도 20°C일 때, Gr과 Ra를 계산하고 유동 영역을 판정하라.
                </p>
                <p className="mb-4">
                  <strong className="text-white">공기 물성치 (45°C = 318K):</strong><br/>
                  <Math tex="\nu = 17.4 \times 10^{-6}" /> m<sup>2</sup>/s,
                  <Math tex="\alpha = 24.7 \times 10^{-6}" /> m<sup>2</sup>/s,
                  <Math tex="Pr = 0.704" />
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: Beta 계산</p>
                  <p className="text-sm text-gray-400 mb-2">
                    이상 기체 가정: <Math tex="\beta = 1/T_f = 1/318" /> K<sup>-1</sup>
                  </p>
                  <Math tex={`\\beta = 3.14 \\times 10^{-3} \\text{ K}^{-1}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 2: Grashof Number</p>
                  <Math tex={`Gr_L = \\frac{g\\beta(T_s - T_\\infty)L^3}{\\nu^2}`} display />
                  <Math tex={`Gr_L = \\frac{9.81 \\times 3.14 \\times 10^{-3} \\times 50 \\times (0.5)^3}{(17.4 \\times 10^{-6})^2}`} display />
                  <Math tex={`Gr_L = \\frac{9.81 \\times 3.14 \\times 10^{-3} \\times 50 \\times 0.125}{3.03 \\times 10^{-10}} = \\boxed{6.35 \\times 10^8}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: Rayleigh Number</p>
                  <Math tex={`Ra_L = Gr_L \\times Pr = 6.35 \\times 10^8 \\times 0.704`} display />
                  <Math tex={`Ra_L = \\boxed{4.47 \\times 10^8}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 4: 유동 영역 판정</p>
                  <p className="text-sm text-gray-400">
                    <Math tex="Ra_L = 4.47 \times 10^8 < 10^9" /> (임계값)<br/><br/>
                    <strong className="text-emerald-400">결론: 층류 (Laminar) 영역</strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="계산 시 주의사항" accent="yellow" icon="!">
              <ul className="space-y-1">
                <li>&bull; <strong className="text-white">온도 단위:</strong> <Math tex="\Delta T" />는 K 또는 C 모두 가능 (차이이므로)</li>
                <li>&bull; <strong className="text-white">Beta 온도:</strong> 이상 기체는 절대온도 [K] 필수</li>
                <li>&bull; <strong className="text-white">물성치:</strong> 막온도 <Math tex="T_f" />에서 평가</li>
                <li>&bull; <strong className="text-white">특성 길이:</strong> 형상에 따라 다름 (높이, 직경 등)</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

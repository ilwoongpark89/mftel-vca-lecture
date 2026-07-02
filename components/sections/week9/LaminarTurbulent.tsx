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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "teal",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "teal" ? "border-teal-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "red" ? "border-red-500/30" : "border-slate-700";
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
  accent = "teal",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    teal: { bg: "bg-teal-500/5", border: "border-teal-500/20", text: "text-teal-400", iconBg: "bg-teal-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
  };
  const c = colors[accent] || colors.teal;
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

export default function LaminarTurbulent() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            Part 5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Laminar vs Turbulent Flow
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            층류와 난류의 특성, 천이 현상, 그리고 열전달에 미치는 영향을 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 층류와 난류의 특성 */}
          <SectionDivider number="1" title="Characteristics of Laminar and Turbulent Flow" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              유동은 크게 <strong className="text-emerald-400">층류(Laminar Flow)</strong>와
              <strong className="text-red-400">난류(Turbulent Flow)</strong>로 구분됩니다.
              이 두 유동 형태는 열전달 특성이 크게 다릅니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
                <h4 className="text-lg font-bold text-emerald-400 mb-4">
                  Laminar Flow (층류)
                </h4>
                <ul className="text-sm text-gray-400 space-y-3">
                  <li>
                    <span className="text-emerald-400 font-bold">유동 패턴:</span><br />
                    규칙적이고 층상(layered) 유동<br />
                    유체 입자가 평행한 경로 유지
                  </li>
                  <li>
                    <span className="text-emerald-400 font-bold">운동량/열 전달:</span><br />
                    분자 확산(molecular diffusion)에 의존<br />
                    <Math tex="\\tau = \\mu \\frac{\\partial u}{\\partial y}" />
                  </li>
                  <li>
                    <span className="text-emerald-400 font-bold">특성:</span><br />
                    예측 가능<br />
                    해석적 해 가능한 경우 많음<br />
                    마찰과 열전달이 상대적으로 낮음
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
                <h4 className="text-lg font-bold text-red-400 mb-4">
                  Turbulent Flow (난류)
                </h4>
                <ul className="text-sm text-gray-400 space-y-3">
                  <li>
                    <span className="text-red-400 font-bold">유동 패턴:</span><br />
                    불규칙하고 3차원적 유동<br />
                    와류(eddies)와 혼합 발생
                  </li>
                  <li>
                    <span className="text-red-400 font-bold">운동량/열 전달:</span><br />
                    와류에 의한 난류 혼합 지배<br />
                    <Math tex="\\tau = (\\mu + \\mu_t) \\frac{\\partial u}{\\partial y}" />
                  </li>
                  <li>
                    <span className="text-red-400 font-bold">특성:</span><br />
                    확률적/통계적 접근 필요<br />
                    경험적 모델 필요<br />
                    높은 마찰과 열전달
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="난류의 이점과 단점" accent="red" icon="T">
              <p className="mb-2">
                <strong className="text-emerald-400">열전달 관점:</strong> 난류는 혼합을 강화하여
                <strong className="text-white"> h를 수 배에서 수십 배 증가</strong>시킵니다.
              </p>
              <p className="mb-2">
                <strong className="text-orange-400">펌핑 파워 관점:</strong> 난류는 마찰 손실을 증가시켜
                <strong className="text-white"> 압력 강하가 커집니다.</strong>
              </p>
              <p className="text-gray-500">
                열교환기 설계는 이 두 가지 사이의 최적화 문제입니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. 층류-난류 천이 */}
          <SectionDivider number="2" title="Laminar-Turbulent Transition" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              유동은 낮은 Re에서 층류로 시작하여 Re가 증가하면 <strong className="text-white">천이(Transition)</strong>를 거쳐
              난류로 변합니다. 천이는 미세한 교란이 증폭되어 발생합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-6">
                Transition Process
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">1</span>
                  <div className="flex-1 p-4 rounded-xl bg-slate-950/80 border border-emerald-500/20">
                    <h5 className="text-emerald-400 font-bold mb-1">Stable Laminar Flow</h5>
                    <p className="text-sm text-gray-400">
                      낮은 Re에서 모든 교란이 감쇠됨
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">2</span>
                  <div className="flex-1 p-4 rounded-xl bg-slate-950/80 border border-yellow-500/20">
                    <h5 className="text-yellow-400 font-bold mb-1">Instability Onset</h5>
                    <p className="text-sm text-gray-400">
                      Re가 증가하면 특정 주파수의 교란이 성장 시작 (Tollmien-Schlichting waves)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">3</span>
                  <div className="flex-1 p-4 rounded-xl bg-slate-950/80 border border-orange-500/20">
                    <h5 className="text-orange-400 font-bold mb-1">Nonlinear Growth</h5>
                    <p className="text-sm text-gray-400">
                      2D 파동이 3D 구조로 발전, 스팟(turbulent spots) 형성
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">4</span>
                  <div className="flex-1 p-4 rounded-xl bg-slate-950/80 border border-red-500/20">
                    <h5 className="text-red-400 font-bold mb-1">Fully Turbulent Flow</h5>
                    <p className="text-sm text-gray-400">
                      난류 스팟이 합쳐져 완전한 난류 경계층 형성
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-4">
                임계 Reynolds 수 (Critical Reynolds Number)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">형상</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Re 정의</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">전형적 Re_crit</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">범위</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-teal-400">평판 (Flat Plate)</td>
                      <td className="py-3 px-4"><Math tex="Re_x = u_\\infty x / \\nu" /></td>
                      <td className="py-3 px-4"><Math tex="5 \\times 10^5" /></td>
                      <td className="py-3 px-4"><Math tex="10^5 - 3 \\times 10^6" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-orange-400">원관 (Pipe)</td>
                      <td className="py-3 px-4"><Math tex="Re_D = V_{avg} D / \\nu" /></td>
                      <td className="py-3 px-4"><Math tex="2300" /></td>
                      <td className="py-3 px-4"><Math tex="2000 - 4000" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-cyan-400">원통 외부</td>
                      <td className="py-3 px-4"><Math tex="Re_D = u_\\infty D / \\nu" /></td>
                      <td className="py-3 px-4"><Math tex="2 \\times 10^5" /></td>
                      <td className="py-3 px-4">조건에 따라 변동</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="천이에 영향을 미치는 요인" accent="yellow" icon="!">
              <p className="mb-2">
                임계 Reynolds 수는 다음 요인에 의해 <strong className="text-yellow-400">크게 변동</strong>할 수 있습니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li><span className="text-yellow-400">*</span> <strong>자유 흐름 난류도:</strong> 높으면 더 일찍 천이</li>
                <li><span className="text-yellow-400">*</span> <strong>표면 거칠기:</strong> 거칠면 더 일찍 천이</li>
                <li><span className="text-yellow-400">*</span> <strong>압력 구배:</strong> 역압력 구배는 천이 촉진</li>
                <li><span className="text-yellow-400">*</span> <strong>열전달:</strong> 벽면 가열/냉각이 영향</li>
                <li><span className="text-yellow-400">*</span> <strong>진동 및 음향:</strong> 교란으로 작용</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. 난류 경계층 구조 */}
          <SectionDivider number="3" title="Turbulent Boundary Layer Structure" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              난류 경계층은 벽면 근처의 특성에 따라 여러 영역으로 구분됩니다.
              각 영역에서 지배적인 물리 현상이 다릅니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                Turbulent Boundary Layer Regions
              </h4>

              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-slate-950/80 border border-teal-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-teal-400 font-bold">1. Viscous Sublayer (점성 저층)</h5>
                    <span className="text-xs text-gray-500"><Math tex="y^+ < 5" /></span>
                  </div>
                  <p className="text-sm text-gray-400">
                    벽면 바로 근처, 점성 효과 지배<br />
                    <Math tex="u^+ = y^+" /> (선형 속도 프로파일)<br />
                    여기서 대부분의 속도/온도 구배 발생
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-yellow-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-yellow-400 font-bold">2. Buffer Layer (완충층)</h5>
                    <span className="text-xs text-gray-500"><Math tex="5 < y^+ < 30" /></span>
                  </div>
                  <p className="text-sm text-gray-400">
                    점성과 난류 효과가 모두 중요<br />
                    천이 영역, 복잡한 거동
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-orange-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-orange-400 font-bold">3. Log-Law Layer (대수층)</h5>
                    <span className="text-xs text-gray-500"><Math tex="30 < y^+ < 300" /></span>
                  </div>
                  <p className="text-sm text-gray-400">
                    난류 혼합 지배<br />
                    <Math tex="u^+ = \\frac{1}{\\kappa}\\ln y^+ + B" /> (von Karman의 법칙)<br />
                    <Math tex="\\kappa \\approx 0.41, B \\approx 5.0" />
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-red-500/20">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-red-400 font-bold">4. Outer Layer (외부층)</h5>
                    <span className="text-xs text-gray-500"><Math tex="y^+ > 300" /></span>
                  </div>
                  <p className="text-sm text-gray-400">
                    자유 흐름과의 천이 영역<br />
                    Wake 영역 포함
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-2">벽면 좌표계 (Wall Coordinates)</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <p><Math tex="y^+ = \\frac{y u_\\tau}{\\nu}" /> (무차원 거리)</p>
                  <p><Math tex="u^+ = \\frac{u}{u_\\tau}" /> (무차원 속도)</p>
                  <p><Math tex="u_\\tau = \\sqrt{\\tau_s/\\rho}" /> (마찰 속도)</p>
                  <p><Math tex="T^+ = \\frac{(T_s - T)\\rho c_p u_\\tau}{q''_s}" /> (무차원 온도)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. 열전달에 미치는 영향 */}
          <SectionDivider number="4" title="Effect on Heat Transfer" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              난류 유동은 <strong className="text-white">와류에 의한 혼합</strong>으로 인해
              층류보다 훨씬 높은 열전달률을 보입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6 text-center">
                Laminar vs Turbulent Heat Transfer (Flat Plate)
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <EquationBox label="층류 (Laminar)" accent="emerald">
                  <Math tex={`Nu_x = 0.332 \\, Re_x^{1/2} \\, Pr^{1/3}`} display />
                  <p className="text-xs text-gray-500 mt-2">Blasius solution</p>
                </EquationBox>

                <EquationBox label="난류 (Turbulent)" accent="red">
                  <Math tex={`Nu_x = 0.0296 \\, Re_x^{4/5} \\, Pr^{1/3}`} display />
                  <p className="text-xs text-gray-500 mt-2">Colburn analogy</p>
                </EquationBox>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-2">Re 지수의 의미</h5>
                <p className="text-sm text-gray-400">
                  층류: <Math tex="Nu \\propto Re^{0.5}" /> &rarr; Re가 100배 증가하면 Nu가 10배 증가<br />
                  난류: <Math tex="Nu \\propto Re^{0.8}" /> &rarr; Re가 100배 증가하면 Nu가 약 40배 증가
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-4">
                층류 vs 난류 비교 (동일 Re에서)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">특성</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">층류</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">난류</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">경계층 두께</td>
                      <td className="py-3 px-4 text-emerald-400">더 얇음</td>
                      <td className="py-3 px-4 text-red-400">더 두꺼움 (약 5배)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">벽면 전단 응력</td>
                      <td className="py-3 px-4 text-emerald-400">낮음</td>
                      <td className="py-3 px-4 text-red-400">높음 (수 배)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">열전달 계수 h</td>
                      <td className="py-3 px-4 text-emerald-400">낮음</td>
                      <td className="py-3 px-4 text-red-400">높음 (수 배 ~ 수십 배)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">속도 프로파일</td>
                      <td className="py-3 px-4 text-emerald-400">포물선형</td>
                      <td className="py-3 px-4 text-red-400">더 평평함 (벽면 근처 급변)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="난류 열전달 향상의 물리" accent="red" icon="h">
              <p className="mb-2">
                난류에서 열전달이 향상되는 이유:
              </p>
              <ul className="space-y-1 mt-2">
                <li><strong className="text-red-400">1.</strong> 와류가 뜨거운/찬 유체를 빠르게 혼합</li>
                <li><strong className="text-red-400">2.</strong> 효과적인 열확산 계수 증가: <Math tex="\\alpha_{eff} = \\alpha + \\epsilon_H" /></li>
                <li><strong className="text-red-400">3.</strong> 온도 프로파일이 더 평평해지고 벽면 근처 구배 증가</li>
              </ul>
              <p className="mt-2 text-gray-500">
                그러나 점성 저층에서는 여전히 분자 전도가 지배적입니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 혼합 경계층 */}
          <SectionDivider number="5" title="Mixed Boundary Layer" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              평판에서 경계층이 선단부터 시작하면, 처음에는 <strong className="text-emerald-400">층류</strong>였다가
              임계점에서 <strong className="text-red-400">난류</strong>로 천이합니다.
              이러한 <strong className="text-white">혼합 경계층(Mixed Boundary Layer)</strong>을 해석해야 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Mixed Boundary Layer Analysis
              </h4>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-sm font-bold text-white mb-2">평균 Nusselt 수 (평판)</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    천이 위치 <Math tex="x_c" />가 판 길이 L 내에 있을 때:
                  </p>
                  <EquationBox label="혼합 경계층 평균 Nu" accent="teal">
                    <Math tex={`\\overline{Nu}_L = \\left(0.037 Re_L^{4/5} - A\\right) Pr^{1/3}`} display />
                  </EquationBox>
                  <p className="text-sm text-gray-400 mt-3">
                    여기서 <Math tex="A = 0.037 Re_{x,c}^{4/5} - 0.664 Re_{x,c}^{1/2}" />
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    <Math tex="Re_{x,c} = 5 \\times 10^5" />일 때 <Math tex="A \\approx 871" />
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <h5 className="text-emerald-400 font-bold mb-2">전체 층류</h5>
                    <p className="text-sm text-gray-400">
                      <Math tex="Re_L < Re_{x,c}" />
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      <Math tex="\\overline{Nu}_L = 0.664 Re_L^{1/2} Pr^{1/3}" />
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <h5 className="text-red-400 font-bold mb-2">전체 난류</h5>
                    <p className="text-sm text-gray-400">
                      선단부터 난류 (tripped)
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      <Math tex="\\overline{Nu}_L = 0.037 Re_L^{4/5} Pr^{1/3}" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Tripping the Boundary Layer" accent="orange" icon="T">
              <p>
                실제 응용에서는 의도적으로 경계층을 <strong className="text-orange-400">난류로 전환(trip)</strong>시키기도 합니다.
              </p>
              <ul className="mt-2 space-y-1">
                <li><strong className="text-white">방법:</strong> 와이어, 거친 띠, 돌출부 등</li>
                <li><strong className="text-white">목적:</strong> 열전달 향상, 유동 박리 방지</li>
                <li><strong className="text-white">예시:</strong> 골프공의 딤플 (항력 감소)</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 6. Reynolds Analogy */}
          <SectionDivider number="6" title="Reynolds Analogy" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Reynolds Analogy</strong>는 운동량 전달과 열전달 사이의
              유사성을 나타내는 중요한 관계입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 text-center">
                Reynolds Analogy (Pr = 1)
              </h4>

              <EquationBox label="기본 형태" accent="cyan">
                <Math tex={`\\frac{C_f}{2} = St \\quad \\text{(when } Pr = 1 \\text{)}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-2">무차원수 정의</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <p className="text-cyan-400 font-bold mb-1">마찰 계수 (Friction Coefficient)</p>
                    <Math tex="C_f = \\frac{\\tau_s}{\\frac{1}{2}\\rho u_\\infty^2}" />
                  </div>
                  <div>
                    <p className="text-orange-400 font-bold mb-1">Stanton 수</p>
                    <Math tex="St = \\frac{h}{\\rho c_p u_\\infty} = \\frac{Nu}{Re \\cdot Pr}" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Modified Reynolds Analogy (Chilton-Colburn)
              </h4>

              <EquationBox label="Chilton-Colburn Analogy" accent="orange">
                <Math tex={`\\frac{C_f}{2} = St \\cdot Pr^{2/3} = j_H`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 text-center mt-4">
                <Math tex="j_H" />는 Colburn j-factor로, <Math tex="0.6 < Pr < 60" /> 범위에서 유효
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Reynolds Analogy의 실용적 의미" accent="cyan" icon="RA">
              <p className="mb-2">
                운동량과 열전달의 유사성을 이용하면:
              </p>
              <ul className="space-y-1 mt-2">
                <li><strong className="text-cyan-400">*</strong> 마찰 계수로부터 열전달 계수 예측 가능</li>
                <li><strong className="text-cyan-400">*</strong> 유동 저항 측정으로 열전달 성능 추정</li>
                <li><strong className="text-cyan-400">*</strong> 한 번의 실험으로 두 가지 정보 획득</li>
              </ul>
              <p className="mt-2 text-gray-500">
                이 유사성은 물리적으로 운동량과 열이 같은 메커니즘(분자 확산 또는 난류 혼합)으로 전달되기 때문입니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

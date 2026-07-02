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

export default function InternalFlowBasics() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Internal Flow Fundamentals
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            파이프 및 덕트 내부 유동의 기본 특성과 입구 영역, 완전 발달 유동을 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 내부 유동 vs 외부 유동 */}
          <SectionDivider number="1" title="Internal vs External Flow" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">내부 유동(Internal Flow)</strong>은 파이프, 덕트, 채널 등
              완전히 둘러싸인 표면 내부를 흐르는 유동입니다. 외부 유동과 달리 유체 전체가
              경계층의 영향을 받습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Internal vs External Flow 비교
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-3">Internal Flow</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>- 유동이 표면에 의해 완전히 구속됨</li>
                    <li>- 경계층이 결국 합쳐짐 (merge)</li>
                    <li>- 질량 유량이 일정</li>
                    <li>- <strong className="text-white">평균 속도 <Math tex="u_m" /></strong> 사용</li>
                    <li>- 예: 파이프, 덕트, 열교환기</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-3">External Flow</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>- 유동이 물체 주위를 지나감</li>
                    <li>- 경계층 외부에 자유 흐름 존재</li>
                    <li>- 자유 흐름 속도 <Math tex="u_\\infty" /> 사용</li>
                    <li>- 경계층 두께가 계속 성장</li>
                    <li>- 예: 평판, 실린더, 구 주위 유동</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. 평균 속도와 질량 유량 */}
          <SectionDivider number="2" title="Mean Velocity and Mass Flow Rate" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              내부 유동에서는 단면에서의 <strong className="text-white">평균 속도(Mean Velocity)</strong>를
              정의합니다. 실제 속도 분포는 위치에 따라 다르지만, 평균 속도는 전체 질량 유량을 대표합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Mean Velocity Definition
              </h4>

              <EquationBox label="질량 유량 (Mass Flow Rate)" accent="cyan">
                <Math tex={`\\dot{m} = \\rho u_m A_c = \\int_{A_c} \\rho u \\, dA_c`} display />
              </EquationBox>

              <div className="mt-6">
                <EquationBox label="평균 속도 (Mean Velocity)" accent="cyan">
                  <Math tex={`u_m = \\frac{1}{A_c} \\int_{A_c} u \\, dA_c`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-cyan-400">원형 관의 경우:</strong>
                </p>
                <div className="mt-2">
                  <Math tex={`u_m = \\frac{2}{r_o^2} \\int_0^{r_o} u(r) \\cdot r \\, dr`} display />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  여기서 <Math tex="r_o" />는 관 반지름, <Math tex="A_c = \\pi r_o^2" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. 입구 영역 */}
          <SectionDivider number="3" title="Entrance Region" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              유체가 파이프에 들어가면 벽면에서 <strong className="text-white">경계층(Boundary Layer)</strong>이
              발달하기 시작합니다. 이 영역을 <strong className="text-cyan-400">입구 영역(Entrance Region)</strong>이라 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                유동 발달 과정
              </h4>

              {/* Visual representation */}
              <div className="mb-6 p-4 rounded-xl bg-slate-900/50">
                <div className="relative h-32 bg-slate-800 rounded-lg overflow-hidden">
                  {/* Pipe walls */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-slate-600"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-slate-600"></div>

                  {/* Boundary layer growth */}
                  <div className="absolute top-2 left-0 w-1/3 h-4 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-0 w-1/3 h-4 bg-gradient-to-t from-cyan-500/50 to-transparent"></div>

                  <div className="absolute top-2 left-1/3 w-1/6 h-8 bg-gradient-to-b from-cyan-500/40 to-transparent"></div>
                  <div className="absolute bottom-2 left-1/3 w-1/6 h-8 bg-gradient-to-t from-cyan-500/40 to-transparent"></div>

                  {/* Fully developed region */}
                  <div className="absolute top-2 left-1/2 right-0 h-[calc(50%-4px)] bg-gradient-to-b from-orange-500/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-1/2 right-0 h-[calc(50%-4px)] bg-gradient-to-t from-orange-500/30 to-transparent"></div>

                  {/* Labels */}
                  <div className="absolute top-1/2 left-[15%] -translate-y-1/2 text-xs text-cyan-400 font-bold">Entrance</div>
                  <div className="absolute top-1/2 left-[75%] -translate-y-1/2 text-xs text-orange-400 font-bold">Fully Developed</div>

                  {/* x_fd marker */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/50 border-dashed"></div>
                  <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-xs text-gray-400">
                    <Math tex="x_{fd,h}" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">입구 영역 (Entrance Region)</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>- 경계층이 성장 중</li>
                    <li>- 중심부에 무점성 코어(inviscid core) 존재</li>
                    <li>- 속도 분포가 x에 따라 변화</li>
                    <li>- <Math tex="\\partial u / \\partial x \\neq 0" /></li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">완전 발달 영역 (Fully Developed)</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>- 경계층이 합쳐짐 (merge)</li>
                    <li>- 속도 분포가 x에 무관</li>
                    <li>- <Math tex="u = u(r)" /> only</li>
                    <li>- <Math tex="\\partial u / \\partial x = 0" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. 유체역학적 입구 길이 */}
          <SectionDivider number="4" title="Hydrodynamic Entry Length" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                유체역학적 입구 길이 (Hydrodynamic Entry Length)
              </h4>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <EquationBox label="층류 (Laminar, Re < 2300)" accent="cyan">
                  <Math tex={`\\frac{x_{fd,h}}{D} \\approx 0.05 Re_D`} display />
                </EquationBox>
                <EquationBox label="난류 (Turbulent, Re > 10000)" accent="orange">
                  <Math tex={`\\frac{x_{fd,h}}{D} \\approx 10 \\text{ to } 60`} display />
                </EquationBox>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">Reynolds 수 정의:</strong>
                </p>
                <Math tex={`Re_D = \\frac{\\rho u_m D}{\\mu} = \\frac{u_m D}{\\nu}`} display />
                <p className="text-xs text-gray-500 mt-2">
                  여기서 D는 관 직경 (원형관의 경우 <Math tex="D = 2r_o" />)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="층류 입구 길이 예시" accent="cyan" icon="Ex">
              <p className="mb-2">
                <Math tex="Re_D = 2000" />인 층류 유동에서:
              </p>
              <p className="text-white">
                <Math tex="x_{fd,h} = 0.05 \\times 2000 \\times D = 100D" />
              </p>
              <p className="mt-2 text-gray-500">
                직경 2 cm 관이라면 입구 길이가 약 2 m! 상당히 긴 거리가 필요합니다.
              </p>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="난류에서 입구 길이가 짧은 이유" accent="orange" icon="?">
              <p>
                난류에서는 <strong className="text-white">강한 혼합(mixing)</strong>으로 인해
                모멘텀이 빠르게 전달됩니다. 따라서 경계층이 빠르게 발달하고,
                입구 길이가 상대적으로 짧습니다 (약 10~60D).
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 완전 발달 유동 */}
          <SectionDivider number="5" title="Fully Developed Flow" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">완전 발달 유동(Fully Developed Flow)</strong>에서는
              속도 분포가 유동 방향으로 더 이상 변하지 않습니다. 이 조건은 열전달 해석을 크게 단순화합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                완전 발달 유동의 특성
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">속도 분포가 x에 무관</p>
                  <Math tex={`\\frac{\\partial u(r,x)}{\\partial x} = 0 \\quad \\Rightarrow \\quad u = u(r) \\text{ only}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">반경 방향 속도 = 0</p>
                  <Math tex={`v = 0 \\quad \\text{(연속 방정식으로부터)}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">압력 구배가 일정</p>
                  <Math tex={`\\frac{dp}{dx} = \\text{constant} < 0`} display />
                  <p className="text-xs text-gray-500 mt-2">마찰로 인해 압력이 유동 방향으로 감소</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. 수력 직경 */}
          <SectionDivider number="6" title="Hydraulic Diameter" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              비원형 단면의 경우, <strong className="text-white">수력 직경(Hydraulic Diameter)</strong>을
              사용하여 원형관에 대한 상관식을 적용할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Hydraulic Diameter
              </h4>

              <EquationBox label="수력 직경 정의" accent="cyan">
                <Math tex={`D_h = \\frac{4 A_c}{P}`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                <Math tex="A_c" />: 유동 단면적, <Math tex="P" />: 젖은 둘레 (Wetted Perimeter)
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">형상별 수력 직경</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400">단면 형상</th>
                        <th className="text-left py-2 px-3 text-gray-400"><Math tex="D_h" /></th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">원형 (직경 D)</td>
                        <td className="py-2 px-3"><Math tex="D_h = D" /></td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">정사각형 (변 a)</td>
                        <td className="py-2 px-3"><Math tex="D_h = a" /></td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">직사각형 (a x b)</td>
                        <td className="py-2 px-3"><Math tex="D_h = 2ab/(a+b)" /></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">환형 (내경 <Math tex="D_i" />, 외경 <Math tex="D_o" />)</td>
                        <td className="py-2 px-3"><Math tex="D_h = D_o - D_i" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="수력 직경 사용 시 주의" accent="yellow" icon="!">
              <p>
                수력 직경을 사용한 상관식은 <strong className="text-white">근사</strong>입니다.
                정확도는 단면 형상의 종횡비에 따라 달라집니다.
                특히 <strong className="text-yellow-300">매우 납작하거나 좁은 채널</strong>에서는
                별도의 상관식을 사용하는 것이 좋습니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

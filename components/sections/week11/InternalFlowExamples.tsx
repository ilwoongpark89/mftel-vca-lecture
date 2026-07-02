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

export default function InternalFlowExamples() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 7
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Internal Flow Examples
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            파이프 가열/냉각의 실제 문제 풀이와 설계 적용
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Example 1: 파이프 가열 */}
          <SectionDivider number="1" title="Example 1: Pipe Heating" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                문제
              </h4>
              <p className="text-gray-400 mb-4">
                물이 내경 D = 20 mm, 길이 L = 6 m인 원형 관을 통해 흐릅니다.
                입구 온도 <Math tex="T_{m,i} = 20°C" />, 유량 <Math tex="\\dot{m} = 0.1" /> kg/s입니다.
                관 표면이 <Math tex="T_s = 100°C" />로 균일하게 유지될 때, 출구 온도를 구하시오.
              </p>

              <div className="p-4 rounded-xl bg-slate-900/50 mb-4">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">물 물성치</strong> (평균 온도 60도로 가정):<br />
                  <Math tex="\\rho = 983" /> kg/m³, <Math tex="c_p = 4185" /> J/(kg·K),
                  <Math tex="k = 0.654" /> W/(m·K), <Math tex="\\mu = 467 \\times 10^{-6}" /> Pa·s,
                  <Math tex="Pr = 2.99" />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                풀이
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: Reynolds 수 계산</p>
                  <Math tex={`u_m = \\frac{\\dot{m}}{\\rho A_c} = \\frac{0.1}{983 \\times \\pi(0.01)^2} = 0.324 \\text{ m/s}`} display />
                  <Math tex={`Re_D = \\frac{\\rho u_m D}{\\mu} = \\frac{983 \\times 0.324 \\times 0.02}{467 \\times 10^{-6}} = 13,640`} display />
                  <p className="text-xs text-gray-500 mt-2">Re &gt; 10,000 → 난류 유동</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 2: 입구 길이 확인</p>
                  <Math tex={`\\frac{L}{D} = \\frac{6}{0.02} = 300 > 10 \\quad \\checkmark`} display />
                  <p className="text-xs text-gray-500">완전 발달 조건 만족</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: Dittus-Boelter 적용 (가열, n=0.4)</p>
                  <Math tex={`Nu_D = 0.023 Re_D^{0.8} Pr^{0.4} = 0.023 \\times 13640^{0.8} \\times 2.99^{0.4}`} display />
                  <Math tex={`Nu_D = 0.023 \\times 2215 \\times 1.52 = 77.5`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 4: 열전달 계수</p>
                  <Math tex={`h = \\frac{Nu_D \\cdot k}{D} = \\frac{77.5 \\times 0.654}{0.02} = 2534 \\text{ W/(m}^2\\text{·K)}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 5: 출구 온도 (Constant Ts)</p>
                  <Math tex={`A_s = \\pi D L = \\pi \\times 0.02 \\times 6 = 0.377 \\text{ m}^2`} display />
                  <Math tex={`\\frac{T_s - T_{m,o}}{T_s - T_{m,i}} = \\exp\\left(-\\frac{hA_s}{\\dot{m}c_p}\\right)`} display />
                  <Math tex={`= \\exp\\left(-\\frac{2534 \\times 0.377}{0.1 \\times 4185}\\right) = \\exp(-2.28) = 0.102`} display />
                </div>

                <EquationBox label="결과" accent="emerald">
                  <Math tex={`T_{m,o} = T_s - 0.102(T_s - T_{m,i}) = 100 - 0.102(80) = 91.8°\\text{C}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="검증: 평균 온도 확인" accent="yellow" icon="!">
              <p>
                처음에 평균 온도 60도를 가정했는데, 실제 평균은
                <Math tex="(20+91.8)/2 = 56°C" />입니다.
                필요시 이 온도에서 물성치를 다시 구하고 반복 계산합니다.
                이 경우 차이가 크지 않아 결과는 유효합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* Example 2: 전기 히터 */}
          <SectionDivider number="2" title="Example 2: Electric Heater" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                문제
              </h4>
              <p className="text-gray-400 mb-4">
                공기가 내경 D = 50 mm, 길이 L = 3 m인 관을 통해 흐릅니다.
                관 표면에 전기 저항 가열로 균일 열유속 <Math tex="q''_s = 1000" /> W/m²가 인가됩니다.
                공기 입구 온도 <Math tex="T_{m,i} = 25°C" />, 평균 속도 <Math tex="u_m = 5" /> m/s일 때,
                출구 온도와 최대 표면 온도를 구하시오.
              </p>

              <div className="p-4 rounded-xl bg-slate-900/50 mb-4">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">공기 물성치</strong> (T = 50도):<br />
                  <Math tex="\\rho = 1.093" /> kg/m³, <Math tex="c_p = 1007" /> J/(kg·K),
                  <Math tex="k = 0.0282" /> W/(m·K), <Math tex="\\nu = 18.2 \\times 10^{-6}" /> m²/s,
                  <Math tex="Pr = 0.70" />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                풀이
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: Reynolds 수</p>
                  <Math tex={`Re_D = \\frac{u_m D}{\\nu} = \\frac{5 \\times 0.05}{18.2 \\times 10^{-6}} = 13,740`} display />
                  <p className="text-xs text-gray-500 mt-2">난류 유동</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 2: 질량 유량</p>
                  <Math tex={`\\dot{m} = \\rho u_m A_c = 1.093 \\times 5 \\times \\frac{\\pi(0.05)^2}{4} = 0.0107 \\text{ kg/s}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: 출구 온도 (Constant q&apos;&apos;s)</p>
                  <Math tex={`T_{m,o} = T_{m,i} + \\frac{q''_s \\pi D L}{\\dot{m} c_p}`} display />
                  <Math tex={`= 25 + \\frac{1000 \\times \\pi \\times 0.05 \\times 3}{0.0107 \\times 1007} = 25 + 43.7 = 68.7°\\text{C}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 4: Dittus-Boelter (가열)</p>
                  <Math tex={`Nu_D = 0.023 \\times 13740^{0.8} \\times 0.70^{0.4} = 44.6`} display />
                  <Math tex={`h = \\frac{44.6 \\times 0.0282}{0.05} = 25.2 \\text{ W/(m}^2\\text{·K)}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 5: 최대 표면 온도 (출구에서)</p>
                  <Math tex={`T_s = T_m + \\frac{q''_s}{h}`} display />
                  <Math tex={`T_{s,max} = T_{m,o} + \\frac{q''_s}{h} = 68.7 + \\frac{1000}{25.2} = 108.4°\\text{C}`} display />
                </div>

                <EquationBox label="결과" accent="emerald">
                  <Math tex={`T_{m,o} = 68.7°\\text{C}, \\quad T_{s,max} = 108.4°\\text{C}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          {/* Example 3: 오일 냉각 */}
          <SectionDivider number="3" title="Example 3: Oil Cooling" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                문제
              </h4>
              <p className="text-gray-400 mb-4">
                엔진 오일이 내경 D = 25 mm 관을 통해 유량 <Math tex="\\dot{m} = 0.5" /> kg/s로 흐릅니다.
                입구 온도 80도에서 출구 온도 60도로 냉각하려 합니다.
                관 표면 온도가 40도로 유지될 때, 필요한 관 길이를 구하시오.
              </p>

              <div className="p-4 rounded-xl bg-slate-900/50 mb-4">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">엔진 오일 물성치</strong> (T = 70도):<br />
                  <Math tex="\\rho = 852" /> kg/m³, <Math tex="c_p = 2131" /> J/(kg·K),
                  <Math tex="k = 0.138" /> W/(m·K), <Math tex="\\mu = 0.0141" /> Pa·s,
                  <Math tex="Pr = 218" /><br />
                  <Math tex="\\mu_s" /> (40도) = 0.212 Pa·s
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                풀이
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: Reynolds 수</p>
                  <Math tex={`u_m = \\frac{\\dot{m}}{\\rho A_c} = \\frac{0.5}{852 \\times \\frac{\\pi(0.025)^2}{4}} = 1.20 \\text{ m/s}`} display />
                  <Math tex={`Re_D = \\frac{\\rho u_m D}{\\mu} = \\frac{852 \\times 1.20 \\times 0.025}{0.0141} = 1813`} display />
                  <p className="text-xs text-gray-500 mt-2">Re &lt; 2300 → 층류 유동!</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 2: Sieder-Tate (층류, 입구 영역)</p>
                  <p className="text-xs text-gray-500 mb-2">L을 가정하여 반복 계산 필요. 먼저 완전 발달 가정:</p>
                  <Math tex={`Nu_D = 3.66 \\quad (\\text{for const } T_s, \\text{ fully developed})`} display />
                  <Math tex={`h = \\frac{3.66 \\times 0.138}{0.025} = 20.2 \\text{ W/(m}^2\\text{·K)}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: 필요한 관 길이</p>
                  <p className="text-xs text-gray-500 mb-2">Constant Ts 식 사용:</p>
                  <Math tex={`\\frac{T_s - T_{m,o}}{T_s - T_{m,i}} = \\exp\\left(-\\frac{hPL}{\\dot{m}c_p}\\right)`} display />
                  <Math tex={`\\frac{40-60}{40-80} = 0.5 = \\exp\\left(-\\frac{20.2 \\times \\pi \\times 0.025 \\times L}{0.5 \\times 2131}\\right)`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 4: L 계산</p>
                  <Math tex={`\\ln(0.5) = -0.693 = -\\frac{1.586 L}{1065.5}`} display />
                  <Math tex={`L = \\frac{0.693 \\times 1065.5}{1.586} = 465 \\text{ m}`} display />
                </div>

                <EquationBox label="결과" accent="emerald">
                  <Math tex={`L \\approx 465 \\text{ m} \\quad (\\text{매우 긴 길이!})`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="층류 오일 냉각의 한계" accent="yellow" icon="!">
              <p className="mb-2">
                오일의 층류 유동은 열전달 계수가 매우 낮아 긴 관이 필요합니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li>- <strong className="text-white">해결책 1:</strong> 유속 증가 → 난류 유동 유도</li>
                <li>- <strong className="text-white">해결책 2:</strong> 핀(fin) 추가 → 표면적 증가</li>
                <li>- <strong className="text-white">해결책 3:</strong> Shell-and-tube 열교환기 → 다중 관 배열</li>
                <li>- <strong className="text-white">해결책 4:</strong> 난류 촉진 장치(turbulator) 삽입</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 4. 문제 풀이 전략 */}
          <SectionDivider number="4" title="Problem-Solving Strategy" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                내부 유동 열전달 문제 풀이 순서
              </h4>

              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">주어진 정보 정리</strong>
                    <p className="text-sm">기하 조건 (D, L), 유동 조건 (um, m), 온도 조건 (Tm,i, Ts 또는 q&apos;&apos;s)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">평균 온도 가정 및 물성치 결정</strong>
                    <p className="text-sm">처음에는 <Math tex="T_m = (T_{m,i} + T_{m,o})/2" />를 추정하고, 결과 후 확인</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">Reynolds 수 계산 → 층류/난류 판별</strong>
                    <p className="text-sm">Re &lt; 2300: 층류, Re &gt; 10000: 난류, 중간: 천이</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">L/D 확인 → 완전 발달 여부</strong>
                    <p className="text-sm">L/D &gt; 10이면 완전 발달 가정, 아니면 입구 효과 고려</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">적절한 상관식 선택 → Nu 계산</strong>
                    <p className="text-sm">층류: 3.66/4.36, 난류: Dittus-Boelter/Gnielinski</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">6</span>
                  <div>
                    <strong className="text-white">h 계산 → 열전달량/온도 계산</strong>
                    <p className="text-sm">경계조건(const Ts 또는 const q&apos;&apos;s)에 맞는 공식 적용</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">7</span>
                  <div>
                    <strong className="text-white">가정 확인 및 필요시 반복</strong>
                    <p className="text-sm">평균 온도 재확인, 물성치 차이가 크면 반복 계산</p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="실무 팁" accent="emerald" icon="Tip">
              <ul className="space-y-2">
                <li>- 물성치 테이블이 없으면 온라인 데이터베이스 활용 (NIST, CoolProp)</li>
                <li>- 설계 시 안전 계수를 고려하여 여유있게 설계</li>
                <li>- 높은 정확도가 필요하면 Gnielinski 상관식 사용</li>
                <li>- 복잡한 경우 CFD 시뮬레이션으로 검증</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

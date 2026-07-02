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

export default function ConstantHeatFlux() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Constant Heat Flux Condition
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            균일 열유속 <Math tex="q''_s = \\text{const}" /> 조건에서의 열전달 해석
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 에너지 균형 */}
          <SectionDivider number="1" title="Energy Balance" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">균일 열유속(Constant Heat Flux)</strong> 조건은
              전기 저항 가열, 핵연료봉, 태양열 집열관 등에서 나타납니다.
              벽면에서 일정한 열유속이 유체로 전달됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                미소 검사체적에 대한 에너지 균형
              </h4>

              {/* Visual representation */}
              <div className="mb-6 p-4 rounded-xl bg-slate-900/50">
                <div className="relative h-32 flex items-center justify-center">
                  {/* Control volume */}
                  <div className="relative w-48 h-20 border-2 border-cyan-400 rounded-lg">
                    {/* Heat flux arrows at top and bottom */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <span className="text-xs text-orange-400"><Math tex="q''_s" /></span>
                      <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 4l-8 8h6v8h4v-8h6z" />
                      </svg>
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <svg className="w-4 h-4 text-orange-400 rotate-180" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 4l-8 8h6v8h4v-8h6z" />
                      </svg>
                      <span className="text-xs text-orange-400"><Math tex="q''_s" /></span>
                    </div>

                    {/* Flow arrows */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 flex items-center">
                      <span className="text-xs text-cyan-400 mr-1"><Math tex="\\dot{m}c_pT_m" /></span>
                      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M4 12l8-8v6h8v4h-8v6z" />
                      </svg>
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 flex items-center">
                      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M4 12l8-8v6h8v4h-8v6z" />
                      </svg>
                      <span className="text-xs text-cyan-400 ml-1"><Math tex="\\dot{m}c_p(T_m+dT_m)" /></span>
                    </div>

                    {/* dx label */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs text-gray-400">
                      <Math tex="dx" />
                    </div>
                  </div>
                </div>
              </div>

              <EquationBox label="미소 구간 에너지 균형" accent="cyan">
                <Math tex={`dq_{conv} = q''_s (P \\cdot dx) = \\dot{m} c_p \\, dT_m`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                P: 관의 둘레 (Perimeter), 원형관의 경우 <Math tex="P = \\pi D" />
              </p>
            </div>
          </motion.div>

          {/* 2. 평균 온도 변화 */}
          <SectionDivider number="2" title="Mean Temperature Variation" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Tm(x) for Constant q"s
              </h4>

              <div className="p-4 rounded-xl bg-slate-900/50 mb-4">
                <p className="text-sm text-cyan-400 font-bold mb-2">미분 형태</p>
                <Math tex={`\\frac{dT_m}{dx} = \\frac{q''_s P}{\\dot{m} c_p} = \\text{constant}`} display />
              </div>

              <EquationBox label="적분 결과: 선형 온도 변화" accent="cyan">
                <Math tex={`T_m(x) = T_{m,i} + \\frac{q''_s P}{\\dot{m} c_p} x`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">원형관의 경우:</strong>
                </p>
                <Math tex={`T_m(x) = T_{m,i} + \\frac{q''_s \\pi D}{\\dot{m} c_p} x = T_{m,i} + \\frac{4q''_s}{\\rho u_m c_p D} x`} display />
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="선형 온도 증가" accent="cyan" icon="T">
              <p>
                균일 열유속 조건에서 <strong className="text-white">평균 온도 <Math tex="T_m" /></strong>은
                x에 대해 <strong className="text-cyan-400">선형적으로 증가</strong>합니다.
                기울기는 <Math tex="q''_s P / (\\dot{m} c_p)" />로 일정합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. 표면 온도 변화 */}
          <SectionDivider number="3" title="Surface Temperature Variation" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Ts(x) for Constant q"s
              </h4>

              <p className="text-gray-400 mb-4">
                Newton의 냉각 법칙으로부터:
              </p>

              <EquationBox label="표면 온도" accent="orange">
                <Math tex={`T_s(x) = T_m(x) + \\frac{q''_s}{h}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">완전 발달 영역에서:</strong>
                </p>
                <p className="text-sm text-gray-400">
                  h가 일정하므로 <Math tex="T_s - T_m = q''_s / h = \\text{const}" />
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  따라서 <Math tex="T_s" />도 <Math tex="T_m" />과 <strong className="text-orange-400">같은 기울기로 선형 증가</strong>합니다.
                </p>
              </div>

              {/* Temperature profile graph */}
              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <div className="relative h-56">
                  <svg className="w-full h-full" viewBox="0 0 440 210" preserveAspectRatio="xMidYMid meet">
                    {/* Background grid */}
                    <defs>
                      <pattern id="gridTq" width="40" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 30" fill="none" stroke="rgb(51,65,85)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect x="60" y="20" width="360" height="160" fill="url(#gridTq)" />

                    {/* Axes */}
                    <line x1="60" y1="180" x2="420" y2="180" stroke="rgb(148,163,184)" strokeWidth="1.5" />
                    <line x1="60" y1="180" x2="60" y2="20" stroke="rgb(148,163,184)" strokeWidth="1.5" />

                    {/* Axis arrows */}
                    <polygon points="420,180 410,176 410,184" fill="rgb(148,163,184)" />
                    <polygon points="60,20 56,30 64,30" fill="rgb(148,163,184)" />

                    {/* Pipe representation at bottom */}
                    <rect x="60" y="185" width="360" height="10" fill="rgb(71,85,105)" rx="2" />
                    <text x="240" y="203" fill="rgb(148,163,184)" fontSize="8" textAnchor="middle">Pipe with constant q&apos;&apos;s</text>

                    {/* Y-axis labels */}
                    <text x="50" y="175" fill="rgb(156,163,175)" fontSize="9" textAnchor="end">T_m,i</text>
                    <text x="50" y="140" fill="rgb(156,163,175)" fontSize="9" textAnchor="end">T₁</text>
                    <text x="50" y="95" fill="rgb(156,163,175)" fontSize="9" textAnchor="end">T₂</text>
                    <text x="50" y="50" fill="rgb(156,163,175)" fontSize="9" textAnchor="end">T₃</text>

                    {/* Tm line - mean temperature (linear increase) */}
                    <line x1="60" y1="160" x2="400" y2="70" stroke="rgb(34, 211, 238)" strokeWidth="2.5" />

                    {/* Ts line - surface temperature (parallel, higher) */}
                    <line x1="60" y1="135" x2="400" y2="45" stroke="rgb(251, 146, 60)" strokeWidth="2.5" />

                    {/* Gap indicators showing q''/h = const */}
                    <line x1="120" y1="149" x2="120" y2="124" stroke="rgb(156,163,175)" strokeWidth="1" strokeDasharray="3,2" />
                    <line x1="240" y1="111" x2="240" y2="86" stroke="rgb(156,163,175)" strokeWidth="1" strokeDasharray="3,2" />
                    <line x1="360" y1="78" x2="360" y2="53" stroke="rgb(156,163,175)" strokeWidth="1" strokeDasharray="3,2" />

                    {/* Delta T labels */}
                    <text x="130" y="140" fill="rgb(156,163,175)" fontSize="8">ΔT</text>
                    <text x="250" y="102" fill="rgb(156,163,175)" fontSize="8">ΔT</text>
                    <text x="370" y="68" fill="rgb(156,163,175)" fontSize="8">ΔT</text>

                    {/* Slope indicator */}
                    <path d="M 80 155 L 130 145" stroke="rgb(34,211,238)" strokeWidth="1" strokeDasharray="2,2" />
                    <path d="M 130 145 L 130 155" stroke="rgb(100,116,139)" strokeWidth="1" />
                    <path d="M 80 155 L 130 155" stroke="rgb(100,116,139)" strokeWidth="1" />
                    <text x="105" y="168" fill="rgb(100,116,139)" fontSize="7">dT_m/dx = const</text>

                    {/* Axis labels */}
                    <text x="430" y="185" fill="rgb(156,163,175)" fontSize="11" fontStyle="italic">x</text>
                    <text x="35" y="15" fill="rgb(156,163,175)" fontSize="11">T</text>

                    {/* Curve labels with boxes */}
                    <rect x="405" y="38" width="25" height="14" fill="rgb(15,23,42)" rx="2" />
                    <text x="417" y="48" fill="rgb(251,146,60)" fontSize="10" fontWeight="bold" textAnchor="middle">T_s</text>
                    <rect x="405" y="62" width="25" height="14" fill="rgb(15,23,42)" rx="2" />
                    <text x="417" y="72" fill="rgb(34,211,238)" fontSize="10" fontWeight="bold" textAnchor="middle">T_m</text>

                    {/* Inlet marker */}
                    <circle cx="60" cy="160" r="4" fill="rgb(34,211,238)" />
                    <circle cx="60" cy="135" r="4" fill="rgb(251,146,60)" />
                    <text x="70" y="165" fill="rgb(34,211,238)" fontSize="8">T_m,i</text>

                    {/* Outlet markers */}
                    <circle cx="400" cy="70" r="4" fill="rgb(34,211,238)" />
                    <circle cx="400" cy="45" r="4" fill="rgb(251,146,60)" />

                    {/* Legend */}
                    <rect x="280" y="25" width="100" height="32" fill="rgb(15,23,42)" fillOpacity="0.8" rx="4" stroke="rgb(71,85,105)" strokeWidth="1" />
                    <line x1="285" y1="37" x2="305" y2="37" stroke="rgb(251,146,60)" strokeWidth="2" />
                    <text x="310" y="40" fill="rgb(156,163,175)" fontSize="8">Surface T_s(x)</text>
                    <line x1="285" y1="50" x2="305" y2="50" stroke="rgb(34,211,238)" strokeWidth="2" />
                    <text x="310" y="53" fill="rgb(156,163,175)" fontSize="8">Mean T_m(x)</text>
                  </svg>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Constant q&apos;&apos;s: T_m과 T_s가 동일한 기울기로 선형 증가, ΔT = q&apos;&apos;s/h = constant
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. 출구 온도 */}
          <SectionDivider number="4" title="Outlet Temperature" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Outlet Mean Temperature
              </h4>

              <EquationBox label="출구 평균 온도" accent="cyan">
                <Math tex={`T_{m,o} = T_{m,i} + \\frac{q''_s P L}{\\dot{m} c_p} = T_{m,i} + \\frac{q''_s \\cdot A_s}{\\dot{m} c_p}`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                <Math tex="A_s = P \\cdot L" />: 열전달 표면적
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">총 열전달량:</strong>
                </p>
                <Math tex={`q = q''_s \\cdot A_s = \\dot{m} c_p (T_{m,o} - T_{m,i})`} display />
              </div>
            </div>
          </motion.div>

          {/* 5. 층류 완전 발달 Nu */}
          <SectionDivider number="5" title="Fully Developed Laminar Nu" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                완전 발달 층류 Nusselt 수 (Constant q&apos;&apos;s)
              </h4>

              <EquationBox label="원형관, 균일 열유속" accent="emerald">
                <Math tex={`Nu_D = \\frac{hD}{k} = \\frac{48}{11} \\approx 4.36`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 mt-4 text-center">
                이 값은 <strong className="text-white">Re와 Pr에 무관</strong>합니다!
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">다른 단면 형상</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400">단면 형상</th>
                        <th className="text-left py-2 px-3 text-gray-400"><Math tex="Nu_{D_h}" /> (q&apos;&apos;s = const)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">원형</td>
                        <td className="py-2 px-3 text-emerald-400 font-bold">4.36</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">정사각형</td>
                        <td className="py-2 px-3">3.61</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">직사각형 (b/a = 2)</td>
                        <td className="py-2 px-3">4.12</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">직사각형 (b/a = 4)</td>
                        <td className="py-2 px-3">5.33</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">평행 평판</td>
                        <td className="py-2 px-3">8.23</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="왜 Nu가 상수인가?" accent="emerald" icon="?">
              <p>
                완전 발달 층류 유동에서 속도 분포와 무차원 온도 분포가 모두 <strong className="text-white">x에 무관</strong>하기 때문입니다.
                열전달은 오직 분자 전도에 의해서만 일어나며, 이는 기하학적 형상에만 의존합니다.
                Reynolds 수가 증가해도 층류이면 Nu는 변하지 않습니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. 실제 응용 */}
          <SectionDivider number="6" title="Practical Applications" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Constant q&apos;&apos;s 조건의 응용
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-cyan-400 font-bold mb-2">전기 저항 가열</h5>
                  <p className="text-sm text-gray-400">
                    전기 히터로 감싼 관<br />
                    저항에 의해 균일한 열 발생
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-cyan-400 font-bold mb-2">핵연료봉 냉각</h5>
                  <p className="text-sm text-gray-400">
                    핵분열에 의한 균일 열발생<br />
                    냉각수가 연료봉 사이를 흐름
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-2">태양열 집열관</h5>
                  <p className="text-sm text-gray-400">
                    집광된 태양열이 균일하게 흡수<br />
                    내부 유체가 가열됨
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-2">반도체 냉각 채널</h5>
                  <p className="text-sm text-gray-400">
                    칩에서 균일 발열<br />
                    마이크로채널 냉각
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="설계 시 주의사항" accent="yellow" icon="!">
              <p className="mb-2">
                Constant q&apos;&apos;s 조건에서 <Math tex="T_s" />가 계속 증가하므로,
                <strong className="text-yellow-300">출구 근처에서 최고 온도</strong>가 발생합니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li>- 재료의 최대 허용 온도 확인 필요</li>
                <li>- 유체의 끓음점 초과 주의 (특히 물)</li>
                <li>- 필요시 유량 증가 또는 관 길이 제한</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

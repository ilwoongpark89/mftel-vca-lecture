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

export default function ConstantSurfaceTemp() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Constant Surface Temperature
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            균일 표면 온도 <Math tex="T_s = \\text{const}" /> 조건과 로그 평균 온도차
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 에너지 균형 */}
          <SectionDivider number="1" title="Energy Balance" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">균일 표면 온도(Constant Surface Temperature)</strong> 조건은
              응축, 비등, 또는 외부 유체 온도가 일정한 열교환기에서 발생합니다.
              이 경우 열유속은 위치에 따라 변합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                미소 구간 에너지 균형
              </h4>

              <EquationBox label="에너지 균형" accent="cyan">
                <Math tex={`dq = h(T_s - T_m) P \\, dx = \\dot{m} c_p \\, dT_m`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">재정리:</strong>
                </p>
                <Math tex={`\\frac{dT_m}{T_s - T_m} = \\frac{hP}{\\dot{m} c_p} dx`} display />
              </div>
            </div>
          </motion.div>

          {/* 2. 평균 온도 변화 */}
          <SectionDivider number="2" title="Mean Temperature Variation" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Tm(x) for Constant Ts
              </h4>

              <p className="text-gray-400 mb-4">
                적분 (h가 일정할 때):
              </p>

              <EquationBox label="온도비의 지수적 감소" accent="cyan">
                <Math tex={`\\frac{T_s - T_m(x)}{T_s - T_{m,i}} = \\exp\\left(-\\frac{hPx}{\\dot{m}c_p}\\right) = \\exp\\left(-\\frac{hA_s}{\\dot{m}c_p}\\right)`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  또는 정리하면:
                </p>
                <Math tex={`T_m(x) = T_s - (T_s - T_{m,i})\\exp\\left(-\\frac{hPx}{\\dot{m}c_p}\\right)`} display />
                <p className="text-xs text-gray-500 mt-2">
                  <Math tex="T_m" />이 <Math tex="T_s" />에 <strong className="text-cyan-400">지수적으로 접근</strong>
                </p>
              </div>

              {/* Temperature profile graph */}
              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <div className="relative h-56">
                  <svg className="w-full h-full" viewBox="0 0 440 210" preserveAspectRatio="xMidYMid meet">
                    {/* Background grid */}
                    <defs>
                      <pattern id="gridTs" width="40" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 30" fill="none" stroke="rgb(51,65,85)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect x="60" y="20" width="360" height="160" fill="url(#gridTs)" />

                    {/* Axes */}
                    <line x1="60" y1="180" x2="420" y2="180" stroke="rgb(148,163,184)" strokeWidth="1.5" />
                    <line x1="60" y1="180" x2="60" y2="20" stroke="rgb(148,163,184)" strokeWidth="1.5" />

                    {/* Axis arrows */}
                    <polygon points="420,180 410,176 410,184" fill="rgb(148,163,184)" />
                    <polygon points="60,20 56,30 64,30" fill="rgb(148,163,184)" />

                    {/* Pipe representation at bottom */}
                    <rect x="60" y="185" width="360" height="10" fill="rgb(71,85,105)" rx="2" />
                    <text x="240" y="203" fill="rgb(148,163,184)" fontSize="8" textAnchor="middle">Pipe with constant T_s</text>

                    {/* Ts line (horizontal constant) */}
                    <line x1="60" y1="45" x2="410" y2="45" stroke="rgb(251, 146, 60)" strokeWidth="2.5" />

                    {/* Tm curve (exponential approach to Ts) */}
                    <path
                      d="M 60 160 C 100 140, 140 110, 180 85 C 220 65, 280 52, 340 48 C 370 46, 400 45, 410 45"
                      fill="none"
                      stroke="rgb(34, 211, 238)"
                      strokeWidth="2.5"
                    />

                    {/* Shaded area between curves (decreasing ΔT) */}
                    <path
                      d="M 60 160 C 100 140, 140 110, 180 85 C 220 65, 280 52, 340 48 C 370 46, 400 45, 410 45 L 410 45 L 60 45 Z"
                      fill="rgb(34,211,238)"
                      fillOpacity="0.1"
                    />

                    {/* Delta T indicators at different positions */}
                    <line x1="100" y1="45" x2="100" y2="145" stroke="rgb(251,146,60)" strokeWidth="1.5" strokeDasharray="4,3" />
                    <line x1="200" y1="45" x2="200" y2="78" stroke="rgb(251,146,60)" strokeWidth="1" strokeDasharray="4,3" />
                    <line x1="300" y1="45" x2="300" y2="52" stroke="rgb(251,146,60)" strokeWidth="1" strokeDasharray="4,3" />

                    {/* Delta T labels */}
                    <text x="110" y="100" fill="rgb(251,146,60)" fontSize="9">ΔT_i</text>
                    <text x="210" y="68" fill="rgb(251,146,60)" fontSize="8">ΔT</text>
                    <text x="310" y="55" fill="rgb(251,146,60)" fontSize="7">ΔT_o</text>

                    {/* Y-axis labels */}
                    <text x="50" y="50" fill="rgb(251,146,60)" fontSize="9" textAnchor="end">T_s</text>
                    <text x="50" y="165" fill="rgb(34,211,238)" fontSize="9" textAnchor="end">T_m,i</text>
                    <text x="50" y="110" fill="rgb(156,163,175)" fontSize="8" textAnchor="end">T</text>

                    {/* Axis labels */}
                    <text x="430" y="185" fill="rgb(156,163,175)" fontSize="11" fontStyle="italic">x</text>
                    <text x="35" y="15" fill="rgb(156,163,175)" fontSize="11">T</text>

                    {/* Curve labels */}
                    <rect x="350" y="28" width="55" height="14" fill="rgb(15,23,42)" rx="2" />
                    <text x="377" y="38" fill="rgb(251,146,60)" fontSize="10" fontWeight="bold" textAnchor="middle">T_s = const</text>

                    {/* Inlet/outlet markers */}
                    <circle cx="60" cy="160" r="4" fill="rgb(34,211,238)" />
                    <circle cx="60" cy="45" r="4" fill="rgb(251,146,60)" />
                    <circle cx="410" cy="45" r="3" fill="rgb(34,211,238)" />

                    {/* Asymptotic approach annotation */}
                    <path d="M 350 55 C 370 55, 390 50, 400 47" stroke="rgb(74,222,128)" strokeWidth="1" fill="none" strokeDasharray="2,2" />
                    <text x="350" y="70" fill="rgb(74,222,128)" fontSize="8">T_m → T_s</text>
                    <text x="350" y="80" fill="rgb(74,222,128)" fontSize="7">(asymptotically)</text>

                    {/* Legend */}
                    <rect x="280" y="115" width="100" height="45" fill="rgb(15,23,42)" fillOpacity="0.9" rx="4" stroke="rgb(71,85,105)" strokeWidth="1" />
                    <line x1="285" y1="127" x2="305" y2="127" stroke="rgb(251,146,60)" strokeWidth="2" />
                    <text x="310" y="130" fill="rgb(156,163,175)" fontSize="8">Surface T_s</text>
                    <line x1="285" y1="142" x2="305" y2="142" stroke="rgb(34,211,238)" strokeWidth="2" />
                    <text x="310" y="145" fill="rgb(156,163,175)" fontSize="8">Mean T_m(x)</text>
                    <text x="300" y="157" fill="rgb(100,116,139)" fontSize="7">ΔT decreases</text>
                  </svg>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Constant T_s: T_m이 T_s에 지수적으로 접근, ΔT가 점차 감소 (exp(-hA_s/ṁc_p))
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="지수적 접근의 의미" accent="cyan" icon="exp">
              <p>
                <Math tex="T_m \\to T_s" />로 접근함에 따라 <Math tex="(T_s - T_m)" />이 감소하고,
                열전달 driving force가 약해집니다. 따라서 온도 변화율도 감소하여
                <strong className="text-white">지수적 접근</strong>이 됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. 출구 온도 */}
          <SectionDivider number="3" title="Outlet Temperature" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Outlet Mean Temperature
              </h4>

              <EquationBox label="출구 온도 (x = L)" accent="cyan">
                <Math tex={`\\frac{T_s - T_{m,o}}{T_s - T_{m,i}} = \\exp\\left(-\\frac{\\overline{h}A_s}{\\dot{m}c_p}\\right) = \\exp(-NTU)`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">NTU (Number of Transfer Units):</strong>
                </p>
                <Math tex={`NTU = \\frac{\\overline{h}A_s}{\\dot{m}c_p} = \\frac{UA_s}{C_{min}}`} display />
                <p className="text-xs text-gray-500 mt-2">
                  NTU는 열교환기의 &quot;크기&quot;를 나타내는 무차원 수입니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. 로그 평균 온도차 */}
          <SectionDivider number="4" title="Log Mean Temperature Difference" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              총 열전달량을 계산하려면 적절한 <strong className="text-white">평균 온도차</strong>가 필요합니다.
              <Math tex="\\Delta T" />가 x에 따라 변하므로 산술 평균은 부정확합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Log Mean Temperature Difference (LMTD)
              </h4>

              <EquationBox label="로그 평균 온도차 정의" accent="orange">
                <Math tex={`\\Delta T_{lm} = \\frac{\\Delta T_o - \\Delta T_i}{\\ln(\\Delta T_o / \\Delta T_i)} = \\frac{(T_s - T_{m,o}) - (T_s - T_{m,i})}{\\ln\\frac{T_s - T_{m,o}}{T_s - T_{m,i}}}`} display />
              </EquationBox>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">입구 온도차</p>
                  <Math tex={`\\Delta T_i = T_s - T_{m,i}`} display />
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">출구 온도차</p>
                  <Math tex={`\\Delta T_o = T_s - T_{m,o}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="왜 로그 평균인가?" accent="orange" icon="ln">
              <p className="mb-2">
                에너지 균형 적분에서 자연스럽게 유도됩니다:
              </p>
              <div className="p-2 bg-slate-900/50 rounded-lg my-2">
                <Math tex={`q = \\int_0^L h(T_s - T_m)P\\,dx = hA_s \\Delta T_{lm}`} display />
              </div>
              <p className="text-gray-500">
                로그 평균은 항상 산술 평균과 기하 평균 사이의 값을 가집니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 총 열전달량 */}
          <SectionDivider number="5" title="Total Heat Transfer Rate" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Heat Transfer Rate Equations
              </h4>

              <div className="space-y-4">
                <EquationBox label="방법 1: 에너지 균형" accent="cyan">
                  <Math tex={`q = \\dot{m}c_p(T_{m,o} - T_{m,i})`} display />
                </EquationBox>

                <EquationBox label="방법 2: LMTD 사용" accent="orange">
                  <Math tex={`q = \\overline{h}A_s \\Delta T_{lm}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-sm text-emerald-400 font-bold mb-2">두 방법은 동등합니다!</p>
                <p className="text-sm text-gray-400">
                  어느 쪽으로 계산해도 같은 결과를 얻습니다. 주어진 정보에 따라 편리한 방법을 선택하세요.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 6. 층류 완전 발달 Nu */}
          <SectionDivider number="6" title="Fully Developed Laminar Nu" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                완전 발달 층류 Nusselt 수 (Constant Ts)
              </h4>

              <EquationBox label="원형관, 균일 표면 온도" accent="emerald">
                <Math tex={`Nu_D = \\frac{hD}{k} = 3.66`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">경계조건별 비교</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400">조건</th>
                        <th className="text-left py-2 px-3 text-gray-400"><Math tex="Nu_D" /> (원형관)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3"><Math tex="T_s = \\text{const}" /></td>
                        <td className="py-2 px-3 text-emerald-400 font-bold">3.66</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3"><Math tex="q''_s = \\text{const}" /></td>
                        <td className="py-2 px-3 text-cyan-400 font-bold">4.36</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  균일 열유속 조건이 균일 온도 조건보다 Nu가 약 20% 높습니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="두 경계조건의 차이" accent="blue" icon="vs">
              <div className="space-y-2">
                <p>
                  <strong className="text-orange-400">Const q&apos;&apos;s:</strong> 열유속이 고정되어 벽면 온도가 변함
                </p>
                <p>
                  <strong className="text-cyan-400">Const Ts:</strong> 표면 온도가 고정되어 열유속이 변함
                </p>
                <p className="text-gray-500 mt-2">
                  균일 열유속 조건에서 벽면 열유속이 최적으로 분배되어 Nu가 더 높습니다.
                </p>
              </div>
            </InsightCard>
          </motion.div>

          {/* 7. 응용 예시 */}
          <SectionDivider number="7" title="Practical Applications" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Constant Ts 조건의 응용
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-cyan-400 font-bold mb-2">증기 응축</h5>
                  <p className="text-sm text-gray-400">
                    포화 증기의 응축<br />
                    표면 온도 = 포화 온도
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-cyan-400 font-bold mb-2">비등</h5>
                  <p className="text-sm text-gray-400">
                    풀비등(pool boiling) 조건<br />
                    표면 온도가 일정하게 유지
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-2">열교환기 (외부 유체 대용량)</h5>
                  <p className="text-sm text-gray-400">
                    외부 유체의 열용량이 매우 클 때<br />
                    외부 온도 변화 무시 가능
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-2">빙축열 시스템</h5>
                  <p className="text-sm text-gray-400">
                    얼음이 녹으면서 0도 유지<br />
                    잠열을 이용한 열저장
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="특수 경우: Delta Ti = Delta To" accent="yellow" icon="=">
              <p className="mb-2">
                만약 <Math tex="\\Delta T_i = \\Delta T_o" />이면 LMTD 공식에서 0/0 형태가 됩니다.
                이 경우:
              </p>
              <div className="p-2 bg-slate-900/50 rounded-lg my-2">
                <Math tex={`\\Delta T_{lm} = \\Delta T_i = \\Delta T_o`} display />
              </div>
              <p className="text-gray-500">
                로피탈의 정리를 적용하거나, 직접 온도차가 같음을 사용합니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

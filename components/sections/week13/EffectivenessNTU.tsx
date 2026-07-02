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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "purple",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "purple" ? "border-purple-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "blue" ? "border-blue-500/30" : "border-slate-700";
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
  accent = "purple",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", iconBg: "bg-purple-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
  };
  const c = colors[accent] || colors.purple;
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

export default function EffectivenessNTU() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Effectiveness-NTU Method
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            열교환기 효율과 NTU(Number of Transfer Units)의 정의를 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. LMTD vs NTU */}
          <SectionDivider number="1" title="Why Effectiveness-NTU Method?" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              LMTD 방법은 입구와 출구 온도가 모두 알려진 경우 유용합니다.
              하지만 <strong className="text-white">출구 온도를 모르는 경우</strong> 반복 계산이 필요합니다.
              이때 <strong className="text-white">Effectiveness-NTU 방법</strong>이 더 편리합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                두 방법의 비교
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">구분</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">LMTD Method</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">e-NTU Method</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-purple-400">적합한 경우</td>
                      <td className="py-3 px-4">모든 온도 known</td>
                      <td className="py-3 px-4">입구 온도만 known</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">주 용도</td>
                      <td className="py-3 px-4">Sizing (면적 결정)</td>
                      <td className="py-3 px-4">Rating (성능 예측)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-orange-400">계산 특성</td>
                      <td className="py-3 px-4">직접 계산</td>
                      <td className="py-3 px-4">반복 불필요</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 2. Effectiveness 정의 */}
          <SectionDivider number="2" title="Effectiveness Definition" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                열교환기 효율 (Effectiveness)
              </h4>

              <EquationBox label="효율 정의" accent="purple">
                <Math tex={`\\varepsilon = \\frac{q}{q_{max}} = \\frac{\\text{Actual heat transfer}}{\\text{Maximum possible heat transfer}}`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                <Math tex="0 \leq \varepsilon \leq 1" /> (무차원, 0에서 1 사이)
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                최대 열전달률 q_max
              </h4>

              <EquationBox label="최대 열전달률" accent="cyan">
                <Math tex={`q_{max} = C_{min}(T_{h,i} - T_{c,i})`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-cyan-400">물리적 의미:</strong><br />
                  무한히 긴 역류 열교환기에서 달성 가능한 최대 열전달률.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <Math tex="C_{min}" /> 유체가 최대 온도 변화를 경험:
                </p>
                <ul className="text-sm text-gray-500 mt-2 space-y-1 ml-4">
                  <li>- <Math tex="C_{min} = C_h" />이면: <Math tex="T_{h,o} \to T_{c,i}" /></li>
                  <li>- <Math tex="C_{min} = C_c" />이면: <Math tex="T_{c,o} \to T_{h,i}" /></li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Effectiveness 표현식
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <EquationBox label="고온 유체 기준" accent="orange">
                  <Math tex={`\\varepsilon = \\frac{C_h(T_{h,i} - T_{h,o})}{C_{min}(T_{h,i} - T_{c,i})}`} display />
                </EquationBox>
                <EquationBox label="저온 유체 기준" accent="cyan">
                  <Math tex={`\\varepsilon = \\frac{C_c(T_{c,o} - T_{c,i})}{C_{min}(T_{h,i} - T_{c,i})}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-orange-400">간단화 (when <Math tex="C_{min} = C_h" />):</strong>
                </p>
                <Math tex={`\\varepsilon = \\frac{T_{h,i} - T_{h,o}}{T_{h,i} - T_{c,i}}`} display />
                <p className="text-sm text-gray-400 mt-3">
                  <strong className="text-cyan-400">간단화 (when <Math tex="C_{min} = C_c" />):</strong>
                </p>
                <Math tex={`\\varepsilon = \\frac{T_{c,o} - T_{c,i}}{T_{h,i} - T_{c,i}}`} display />
              </div>
            </div>
          </motion.div>

          {/* 3. NTU 정의 */}
          <SectionDivider number="3" title="Number of Transfer Units (NTU)" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                NTU 정의
              </h4>

              <EquationBox label="Number of Transfer Units" accent="purple">
                <Math tex={`NTU = \\frac{UA}{C_{min}}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-purple-400">물리적 의미:</strong>
                </p>
                <ul className="text-sm text-gray-500 mt-2 space-y-1 ml-4">
                  <li>- 열교환기의 <strong className="text-white">"크기"</strong>를 나타내는 무차원 수</li>
                  <li>- UA (열전달 능력) 대 <Math tex="C_{min}" /> (열용량 흐름률)의 비</li>
                  <li>- NTU가 클수록 더 많은 열전달 가능</li>
                  <li>- NTU &rarr; &infin; 이면 <Math tex="\varepsilon" /> &rarr; 최대값</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 4. Capacity Ratio */}
          <SectionDivider number="4" title="Capacity Ratio" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                열용량비 정의
              </h4>

              <EquationBox label="Capacity Ratio (C_r)" accent="cyan">
                <Math tex={`C_r = \\frac{C_{min}}{C_{max}} \\quad (0 \\leq C_r \\leq 1)`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-cyan-400 font-bold mb-2"><Math tex="C_r = 0" /></h5>
                  <p className="text-sm text-gray-400">
                    상변화 (응축/비등)<br />
                    한 쪽 유체의 <Math tex="C \to \infty" />
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-2"><Math tex="0 < C_r < 1" /></h5>
                  <p className="text-sm text-gray-400">
                    일반적인 경우<br />
                    불균형 열용량
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-purple-400 font-bold mb-2"><Math tex="C_r = 1" /></h5>
                  <p className="text-sm text-gray-400">
                    균형 열교환기<br />
                    <Math tex="C_h = C_c" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="e-NTU 관계식" accent="purple" icon="f">
              <p className="mb-2">
                효율 <Math tex="\varepsilon" />은 <strong className="text-white">NTU, <Math tex="C_r" />, 유동 배열</strong>의 함수입니다:
              </p>
              <div className="my-3 p-3 bg-slate-900/50 rounded-lg">
                <Math tex={`\\varepsilon = f(NTU, C_r, \\text{flow arrangement})`} display />
              </div>
              <p className="text-gray-500">
                또는 역으로: <Math tex="NTU = f(\varepsilon, C_r, \text{flow arrangement})" />
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 열전달률 계산 */}
          <SectionDivider number="5" title="Heat Transfer Rate from Effectiveness" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                e-NTU 방법 절차
              </h4>

              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">열용량률 계산:</strong>
                    <p className="text-sm mt-1">
                      <Math tex="C_h = \dot{m}_h c_{p,h}" />, <Math tex="C_c = \dot{m}_c c_{p,c}" /><br />
                      <Math tex="C_{min} = \min(C_h, C_c)" />, <Math tex="C_{max} = \max(C_h, C_c)" />
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">NTU와 C_r 계산:</strong>
                    <p className="text-sm mt-1">
                      <Math tex="NTU = UA/C_{min}" />, <Math tex="C_r = C_{min}/C_{max}" />
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">효율 결정:</strong>
                    <p className="text-sm mt-1">
                      적절한 e-NTU 관계식 또는 차트 사용<br />
                      <Math tex="\varepsilon = f(NTU, C_r)" />
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">열전달률 계산:</strong>
                    <p className="text-sm mt-1">
                      <Math tex="q = \varepsilon \cdot q_{max} = \varepsilon \cdot C_{min}(T_{h,i} - T_{c,i})" />
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">출구 온도 계산:</strong>
                    <p className="text-sm mt-1">
                      <Math tex="T_{h,o} = T_{h,i} - q/C_h" />, <Math tex="T_{c,o} = T_{c,i} + q/C_c" />
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* 6. 적용 범위 */}
          <SectionDivider number="6" title="When to Use Each Method" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                방법 선택 가이드
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">LMTD Method 사용</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li><strong className="text-white">Sizing Problem:</strong></li>
                    <li>- 입출구 온도 모두 알려짐</li>
                    <li>- 필요 면적 A 결정</li>
                    <li>- 직접 계산 가능</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">e-NTU Method 사용</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li><strong className="text-white">Rating Problem:</strong></li>
                    <li>- 열교환기 형상/면적 알려짐</li>
                    <li>- 입구 온도만 알려짐</li>
                    <li>- 출구 온도 및 q 예측</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="두 방법의 동등성" accent="blue" icon="=">
              <p className="mb-2">
                LMTD와 e-NTU 방법은 <strong className="text-white">수학적으로 동등</strong>합니다.
              </p>
              <p className="text-gray-500">
                같은 문제에 대해 같은 답을 제공하며, 상황에 따라 편리한 방법을 선택합니다.
                특히 컴퓨터 시뮬레이션에서는 반복 계산이 쉬우므로 LMTD도 널리 사용됩니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

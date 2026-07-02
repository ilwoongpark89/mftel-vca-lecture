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

export default function HXDesign() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Part 6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Heat Exchanger Design
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            설계 고려사항, 선택 기준, Rating vs Sizing 문제를 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 설계 문제 유형 */}
          <SectionDivider number="1" title="Rating vs Sizing Problems" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                열교환기 설계 문제의 두 가지 유형
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-3 text-lg">Rating Problem</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    <strong className="text-white">기존 열교환기의 성능 평가</strong>
                  </p>
                  <div className="text-sm text-gray-400 space-y-2">
                    <p><strong className="text-cyan-400">Given:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>- 열교환기 형상 (A, type)</li>
                      <li>- 유량 (<Math tex="\dot{m}_h, \dot{m}_c" />)</li>
                      <li>- 입구 온도 (<Math tex="T_{h,i}, T_{c,i}" />)</li>
                    </ul>
                    <p className="mt-2"><strong className="text-cyan-400">Find:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>- 열전달률 q</li>
                      <li>- 출구 온도 (<Math tex="T_{h,o}, T_{c,o}" />)</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-slate-900/50">
                    <p className="text-xs text-gray-500">
                      <strong className="text-cyan-400">추천 방법:</strong> e-NTU Method
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-3 text-lg">Sizing Problem</h5>
                  <p className="text-sm text-gray-400 mb-3">
                    <strong className="text-white">새 열교환기의 크기 결정</strong>
                  </p>
                  <div className="text-sm text-gray-400 space-y-2">
                    <p><strong className="text-orange-400">Given:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>- 열전달 요구량 q</li>
                      <li>- 유량 또는 입출구 온도</li>
                      <li>- 열교환기 유형</li>
                    </ul>
                    <p className="mt-2"><strong className="text-orange-400">Find:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>- 필요 열전달 면적 A</li>
                      <li>- 또는 열교환기 사양</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-slate-900/50">
                    <p className="text-xs text-gray-500">
                      <strong className="text-orange-400">추천 방법:</strong> LMTD Method
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Sizing 절차 */}
          <SectionDivider number="2" title="Sizing Procedure (LMTD Method)" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                LMTD 방법을 이용한 Sizing 절차
              </h4>

              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">열전달률 계산:</strong>
                    <p className="text-sm mt-1">
                      <Math tex="q = C_h(T_{h,i} - T_{h,o}) = C_c(T_{c,o} - T_{c,i})" />
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">LMTD 계산:</strong>
                    <p className="text-sm mt-1">
                      <Math tex="\Delta T_{lm} = \frac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1/\Delta T_2)}" />
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">보정계수 F 결정:</strong>
                    <p className="text-sm mt-1">
                      P, R 계산 후 차트 또는 공식으로 F 결정<br />
                      (순수 역류/병류면 F = 1)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">총괄 열전달 계수 U 산정:</strong>
                    <p className="text-sm mt-1">
                      물성치, 유속, 형상에 따라 <Math tex="h_i, h_o" /> 계산<br />
                      Fouling factor 포함하여 U 계산
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">필요 면적 계산:</strong>
                    <p className="text-sm mt-1">
                      <Math tex="A = \frac{q}{U \cdot F \cdot \Delta T_{lm}}" />
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* 3. Rating 절차 */}
          <SectionDivider number="3" title="Rating Procedure (e-NTU Method)" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                e-NTU 방법을 이용한 Rating 절차
              </h4>

              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">열용량률 계산:</strong>
                    <p className="text-sm mt-1">
                      <Math tex="C_h = \dot{m}_h c_{p,h}" />, <Math tex="C_c = \dot{m}_c c_{p,c}" /><br />
                      <Math tex="C_{min}, C_{max}, C_r = C_{min}/C_{max}" />
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">U 및 NTU 계산:</strong>
                    <p className="text-sm mt-1">
                      <Math tex="NTU = UA/C_{min}" />
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">효율 결정:</strong>
                    <p className="text-sm mt-1">
                      유동 배열에 맞는 e-NTU 관계식 적용<br />
                      <Math tex="\varepsilon = f(NTU, C_r)" />
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">열전달률 계산:</strong>
                    <p className="text-sm mt-1">
                      <Math tex="q = \varepsilon \cdot C_{min}(T_{h,i} - T_{c,i})" />
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">출구 온도 계산:</strong>
                    <p className="text-sm mt-1">
                      <Math tex="T_{h,o} = T_{h,i} - q/C_h" /><br />
                      <Math tex="T_{c,o} = T_{c,i} + q/C_c" />
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* 4. 설계 시 고려사항 */}
          <SectionDivider number="4" title="Design Considerations" />

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <InsightCard title="열적 설계" accent="purple" icon="T">
                <ul className="space-y-1">
                  <li>- 열전달률 요구사항</li>
                  <li>- 허용 온도 범위</li>
                  <li>- 접근 온도 (approach temperature)</li>
                  <li>- Fouling margin</li>
                </ul>
              </InsightCard>

              <InsightCard title="유체역학적 설계" accent="cyan" icon="P">
                <ul className="space-y-1">
                  <li>- 허용 압력강하</li>
                  <li>- 펌프/팬 동력</li>
                  <li>- 유속 제한 (침식 방지)</li>
                  <li>- 유동 분배 균일성</li>
                </ul>
              </InsightCard>

              <InsightCard title="기계적 설계" accent="orange" icon="M">
                <ul className="space-y-1">
                  <li>- 설계 압력/온도</li>
                  <li>- 재료 선정 (부식, 강도)</li>
                  <li>- 열응력, 열팽창</li>
                  <li>- 진동, 피로</li>
                </ul>
              </InsightCard>

              <InsightCard title="경제적 고려" accent="emerald" icon="$">
                <ul className="space-y-1">
                  <li>- 초기 투자비</li>
                  <li>- 운영비 (펌핑 동력)</li>
                  <li>- 유지보수 비용</li>
                  <li>- 수명주기 비용</li>
                </ul>
              </InsightCard>
            </div>
          </motion.div>

          {/* 5. 열교환기 선정 */}
          <SectionDivider number="5" title="Heat Exchanger Selection" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                열교환기 유형 선정 가이드
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">조건</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">추천 유형</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">이유</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">고압/고온</td>
                      <td className="py-3 px-4 font-bold text-purple-400">Shell-and-Tube</td>
                      <td className="py-3 px-4 text-gray-400">튼튼한 구조</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">소용량</td>
                      <td className="py-3 px-4 font-bold text-cyan-400">Double-Pipe</td>
                      <td className="py-3 px-4 text-gray-400">단순, 저렴</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">높은 효율</td>
                      <td className="py-3 px-4 font-bold text-orange-400">Plate HX</td>
                      <td className="py-3 px-4 text-gray-400">높은 U, 콤팩트</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">기체-기체</td>
                      <td className="py-3 px-4 font-bold text-emerald-400">Plate-Fin</td>
                      <td className="py-3 px-4 text-gray-400">확장 표면</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">점성 유체</td>
                      <td className="py-3 px-4 font-bold text-yellow-400">Scraped Surface</td>
                      <td className="py-3 px-4 text-gray-400">오염 방지</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">상변화</td>
                      <td className="py-3 px-4 font-bold text-blue-400">Shell-and-Tube, Plate</td>
                      <td className="py-3 px-4 text-gray-400">설계 유연성</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 6. 최적화 */}
          <SectionDivider number="6" title="Design Optimization" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                설계 최적화 전략
              </h4>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-emerald-400 font-bold mb-2">1. 열전달 vs 압력강하 트레이드오프</h5>
                  <p className="text-sm text-gray-400">
                    유속 증가 &rarr; h 증가 (좋음) &rarr; <Math tex="\Delta P" /> 증가 (나쁨)<br />
                    최적점: 총 비용 (초기 + 운영) 최소화
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-emerald-400 font-bold mb-2">2. 확장 표면 (Fins) 활용</h5>
                  <p className="text-sm text-gray-400">
                    지배 저항이 있는 측에 핀 추가<br />
                    예: 기체측 핀 &rarr; 기체측 저항 감소 &rarr; 전체 U 증가
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-emerald-400 font-bold mb-2">3. 유동 배열 선택</h5>
                  <p className="text-sm text-gray-400">
                    높은 효율 필요 &rarr; 역류 (Counter flow)<br />
                    공간 제약 &rarr; Cross flow 또는 Multi-pass
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-emerald-400 font-bold mb-2">4. Fouling 대비</h5>
                  <p className="text-sm text-gray-400">
                    설계 시 여유 면적 포함 (10-25% 전형적)<br />
                    청소 가능한 구조, 적절한 유속 유지
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="실무 설계 팁" accent="yellow" icon="!">
              <ul className="space-y-2">
                <li><strong className="text-white">1.</strong> 초기 설계에는 대표 U 값 사용, 상세 설계에서 정확한 계산</li>
                <li><strong className="text-white">2.</strong> F &lt; 0.75이면 shell pass 수 증가 고려</li>
                <li><strong className="text-white">3.</strong> NTU &gt; 3이면 효율 증가 대비 비용 증가가 큼</li>
                <li><strong className="text-white">4.</strong> 압력강하는 일반적으로 유속<sup>2</sup>에 비례</li>
                <li><strong className="text-white">5.</strong> 상변화 열교환기는 특별한 설계 고려 필요</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

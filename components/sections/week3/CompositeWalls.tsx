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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "emerald",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "red" ? "border-red-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "orange" ? "border-orange-500/30" : "border-slate-700";
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
  accent = "emerald",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
  };
  const c = colors[accent] || colors.emerald;
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

export default function CompositeWalls() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Composite Walls (복합벽)
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            여러 층으로 구성된 복합벽의 열저항 회로를 구성하고 해석합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 직렬 연결 */}
          <SectionDivider number="1" title="Series Thermal Resistances" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열이 여러 층을 <strong className="text-white">순차적으로</strong> 통과하는 경우,
              열저항들은 <strong className="text-white">직렬 연결</strong>됩니다.
              전기 회로의 직렬 저항과 동일한 법칙이 적용됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                n층 복합 평판 (직렬)
              </h4>

              <p className="text-sm text-gray-400 mb-6 text-center">
                <Math tex="T_{\\infty,1} \\rightarrow R_{conv,1} \\rightarrow R_1 \\rightarrow R_2 \\rightarrow \\cdots \\rightarrow R_n \\rightarrow R_{conv,2} \\rightarrow T_{\\infty,2}" />
              </p>

              <EquationBox label="직렬 연결 총 열저항">
                <Math tex={`R_{tot} = R_{conv,1} + \\sum_{i=1}^{n} R_i + R_{conv,2} = \\frac{1}{h_1 A} + \\sum_{i=1}^{n}\\frac{L_i}{k_i A} + \\frac{1}{h_2 A}`} display />
              </EquationBox>

              <EquationBox label="열전달률" accent="red">
                <Math tex={`q = \\frac{T_{\\infty,1} - T_{\\infty,2}}{R_{tot}}`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="직렬 연결의 특징" accent="emerald" icon="S">
              <ul className="space-y-1">
                <li>&bull; 모든 저항을 통과하는 <strong className="text-white">열전달률 q가 동일</strong></li>
                <li>&bull; 각 저항에서의 온도 강하: <Math tex="\\Delta T_i = q \\cdot R_i" /></li>
                <li>&bull; 가장 큰 저항이 총 열저항을 지배</li>
                <li>&bull; 약한 고리 원칙: 열전달 향상은 가장 큰 저항을 줄여야 효과적</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 2. 병렬 연결 */}
          <SectionDivider number="2" title="Parallel Thermal Resistances" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열이 여러 경로로 <strong className="text-white">동시에</strong> 흐르는 경우,
              열저항들은 <strong className="text-white">병렬 연결</strong>됩니다.
              예: 단열재 사이의 목재 구조재, 스터드 월(stud wall) 등
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                병렬 연결
              </h4>

              <EquationBox label="병렬 연결 등가 열저항" accent="orange">
                <Math tex={`\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots + \\frac{1}{R_n} = \\sum_{i=1}^{n}\\frac{1}{R_i}`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 mt-6 text-center">
                또는 2개의 병렬 저항: <Math tex="R_{eq} = \\frac{R_1 R_2}{R_1 + R_2}" />
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="병렬 연결의 특징" accent="orange" icon="P">
              <ul className="space-y-1">
                <li>&bull; 양단의 <strong className="text-white">온도차가 동일</strong></li>
                <li>&bull; 총 열전달률 = 각 경로 열전달률의 합: <Math tex="q_{tot} = q_1 + q_2 + \\cdots" /></li>
                <li>&bull; 등가 저항은 항상 개별 저항보다 작음</li>
                <li>&bull; 가장 작은 저항(열 흐름이 쉬운 경로)이 지배적</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. 복합 회로 */}
          <SectionDivider number="3" title="Series-Parallel Combinations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              실제 구조물은 직렬과 병렬이 <strong className="text-white">혼합</strong>된 형태가 많습니다.
              이 경우 회로를 단계적으로 단순화하여 해석합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                예: 스터드 월 (Stud Wall) 해석
              </h4>

              <div className="text-sm text-gray-400 mb-6">
                <p className="mb-2">구조: 외부 사이딩 - (단열재 || 목재 스터드) - 내부 석고보드</p>
                <p>목재 스터드가 단열재를 관통하므로, 중간층에서 병렬 경로가 발생합니다.</p>
              </div>

              <div className="space-y-4">
                <EquationBox label="Step 1: 중간층 등가 저항 (병렬)">
                  <Math tex={`\\frac{1}{R_{mid}} = \\frac{1}{R_{ins}} + \\frac{1}{R_{stud}} = \\frac{A_{ins}/L_{ins}}{k_{ins}} + \\frac{A_{stud}/L_{stud}}{k_{stud}}`} display />
                </EquationBox>

                <EquationBox label="Step 2: 총 열저항 (직렬)" accent="red">
                  <Math tex={`R_{tot} = R_{siding} + R_{mid} + R_{gypsum} + R_{conv}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          {/* 4. 접촉 열저항 */}
          <SectionDivider number="4" title="Thermal Contact Resistance" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              두 고체가 접촉할 때, 계면에서 <strong className="text-white">추가적인 열저항</strong>이 발생합니다.
              이는 실제 접촉 면적이 겉보기 면적보다 훨씬 작기 때문입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-6">
                Thermal Contact Resistance
              </h4>

              <EquationBox label="정의" accent="yellow">
                <Math tex={`R''_{t,c} = \\frac{T_A - T_B}{q''} \\quad \\left[\\frac{\\text{m}^2 \\cdot \\text{K}}{\\text{W}}\\right]`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 mt-6 mb-4 text-center">
                <Math tex="T_A" />와 <Math tex="T_B" />는 계면 양쪽 표면의 온도
              </p>

              <EquationBox label="열저항으로 변환" accent="orange">
                <Math tex={`R_{t,c} = \\frac{R''_{t,c}}{A} \\quad \\left[\\frac{\\text{K}}{\\text{W}}\\right]`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-4">
                접촉 열저항에 영향을 주는 요소
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">&bull;</span>
                    <span><strong className="text-white">표면 거칠기:</strong> 거칠수록 <Math tex="R''_{t,c}" /> 증가</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">&bull;</span>
                    <span><strong className="text-white">접촉 압력:</strong> 높을수록 <Math tex="R''_{t,c}" /> 감소</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">&bull;</span>
                    <span><strong className="text-white">틈새 물질:</strong> 공기 vs 열 그리스 vs 진공</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">&bull;</span>
                    <span><strong className="text-white">재료 경도:</strong> 부드러운 재료가 더 좋은 접촉</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">&bull;</span>
                    <span><strong className="text-white">열 그리스 (TIM):</strong> 공기 대신 채워 저항 감소</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-4">
                대표적인 접촉 열저항 값 (공기 중)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">접촉면</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="R''_{t,c}" /> [m²·K/W]</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">알루미늄-알루미늄 (매끄러운 면)</td>
                      <td className="py-3 px-4"><Math tex="0.5 \\sim 3 \\times 10^{-4}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">구리-구리</td>
                      <td className="py-3 px-4"><Math tex="0.1 \\sim 1 \\times 10^{-4}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">스테인리스강-스테인리스강</td>
                      <td className="py-3 px-4"><Math tex="0.5 \\sim 5 \\times 10^{-4}" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">열 그리스 사용 시</td>
                      <td className="py-3 px-4"><Math tex="0.2 \\sim 1 \\times 10^{-5}" /> (10배 감소!)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="전자기기 방열에서의 중요성" accent="yellow" icon="!">
              <p>
                CPU와 히트싱크 사이의 접촉 열저항은 <strong className="text-white">전체 열저항의 상당 부분</strong>을 차지할 수 있습니다.
                이를 줄이기 위해 열 페이스트(Thermal Paste)나 열 패드(Thermal Pad)를 사용합니다.
                고급 제품에서는 액체 금속(Liquid Metal) TIM을 사용하기도 합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 종합 예제 */}
          <SectionDivider number="5" title="Comprehensive Example" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 3.4: 3층 복합벽
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 건물 외벽이 다음과 같이 구성되어 있다:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>외부 벽돌: 100mm, k = 0.7 W/(m·K)</li>
                  <li>공기층 (틈새): R'' = 0.18 m²·K/W</li>
                  <li>단열재: 50mm, k = 0.04 W/(m·K)</li>
                  <li>석고보드: 12mm, k = 0.16 W/(m·K)</li>
                </ol>
                <p className="mt-4">
                  내부 공기 20°C(<Math tex="h_1 = 8" />), 외부 공기 -10°C(<Math tex="h_2 = 20" />)일 때,
                  단위 면적당 열손실과 각 층의 온도를 구하라.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">단위 면적당 열저항 계산</p>
                  <div className="space-y-2 text-sm">
                    <Math tex={`R''_{conv,in} = \\frac{1}{h_1} = \\frac{1}{8} = 0.125 \\, \\text{m}^2\\text{K/W}`} display />
                    <Math tex={`R''_{brick} = \\frac{L}{k} = \\frac{0.1}{0.7} = 0.143 \\, \\text{m}^2\\text{K/W}`} display />
                    <Math tex={`R''_{air} = 0.18 \\, \\text{m}^2\\text{K/W} \\quad (\\text{주어진 값})`} display />
                    <Math tex={`R''_{ins} = \\frac{0.05}{0.04} = 1.25 \\, \\text{m}^2\\text{K/W}`} display />
                    <Math tex={`R''_{gyp} = \\frac{0.012}{0.16} = 0.075 \\, \\text{m}^2\\text{K/W}`} display />
                    <Math tex={`R''_{conv,out} = \\frac{1}{h_2} = \\frac{1}{20} = 0.05 \\, \\text{m}^2\\text{K/W}`} display />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">총 열저항 및 열손실</p>
                  <Math tex={`R''_{tot} = 0.125 + 0.143 + 0.18 + 1.25 + 0.075 + 0.05 = 1.823 \\, \\text{m}^2\\text{K/W}`} display />
                  <Math tex={`q'' = \\frac{20 - (-10)}{1.823} = \\frac{30}{1.823} = \\boxed{16.5 \\, \\text{W/m}^2}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">각 층 경계면 온도</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-400">내부에서 외부로: <Math tex="\\Delta T = q'' \\cdot R''" /></p>
                    <Math tex={`T_1 = 20 - 16.5 \\times 0.125 = 17.9°\\text{C} \\quad (\\text{석고보드 내측})`} display />
                    <Math tex={`T_2 = 17.9 - 16.5 \\times 0.075 = 16.7°\\text{C} \\quad (\\text{단열재 내측})`} display />
                    <Math tex={`T_3 = 16.7 - 16.5 \\times 1.25 = -3.9°\\text{C} \\quad (\\text{공기층 내측})`} display />
                    <Math tex={`T_4 = -3.9 - 16.5 \\times 0.18 = -6.9°\\text{C} \\quad (\\text{벽돌 내측})`} display />
                    <Math tex={`T_5 = -6.9 - 16.5 \\times 0.143 = -9.3°\\text{C} \\quad (\\text{벽돌 외측})`} display />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="온도 분포 분석" accent="emerald" icon="T">
              <p className="mb-2">
                <strong className="text-white">단열재에서 가장 큰 온도 강하</strong>가 발생합니다 (약 20.6°C).
                이는 단열재의 열저항이 총 열저항의 69%를 차지하기 때문입니다.
              </p>
              <p>
                결로 방지를 위해서는 벽 내부에서 이슬점 온도(약 10°C @ 50% RH)보다 높은 온도를 유지해야 합니다.
                이 예에서 단열재 내측(16.7°C)까지는 안전하지만, 공기층부터는 결로 위험이 있습니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. R-value와 U-value */}
          <SectionDivider number="6" title="R-value and U-value" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              건축/단열 산업에서는 <strong className="text-white">R-value</strong>와 <strong className="text-white">U-value</strong>라는 용어를 자주 사용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-emerald-400 mb-4">R-value (열저항)</h4>
                <EquationBox label="정의" accent="emerald">
                  <Math tex={`R = R''_{t} = \\frac{\\Delta T}{q''} \\quad \\left[\\frac{\\text{m}^2 \\cdot \\text{K}}{\\text{W}}\\right]`} display />
                </EquationBox>
                <ul className="space-y-2 text-sm text-gray-400 mt-4">
                  <li>&bull; 높을수록 단열 성능 좋음</li>
                  <li>&bull; 직렬 연결 시 합산</li>
                  <li>&bull; 미국: ft²·°F·h/BTU</li>
                </ul>
              </div>
              <div className="rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-orange-400 mb-4">U-value (열관류율)</h4>
                <EquationBox label="정의" accent="orange">
                  <Math tex={`U = \\frac{1}{R_{tot}} = \\frac{q''}{\\Delta T} \\quad \\left[\\frac{\\text{W}}{\\text{m}^2 \\cdot \\text{K}}\\right]`} display />
                </EquationBox>
                <ul className="space-y-2 text-sm text-gray-400 mt-4">
                  <li>&bull; 낮을수록 단열 성능 좋음</li>
                  <li>&bull; 전체 구조물 성능 표시에 사용</li>
                  <li>&bull; 창문 성능 표시에 주로 사용</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="단위 환산" accent="blue" icon="=">
              <p>
                미국에서 사용하는 R-value 단위와 SI 단위의 환산:
              </p>
              <Math tex={`R_{SI} \\, [\\text{m}^2\\text{K/W}] = R_{US} \\, [\\text{ft}^2\\cdot°\\text{F}\\cdot\\text{h/BTU}] \\times 0.176`} display />
              <p className="mt-2">
                예: R-19 (미국) = R-3.35 (SI)
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

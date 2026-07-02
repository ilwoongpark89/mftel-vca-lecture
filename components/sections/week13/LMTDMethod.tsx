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

export default function LMTDMethod() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Log Mean Temperature Difference
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            LMTD 방법의 유도와 보정계수 F를 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 에너지 균형 */}
          <SectionDivider number="1" title="Energy Balance Equations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열교환기 해석의 기본은 <strong className="text-white">에너지 균형</strong>입니다.
              정상 상태에서 고온 유체가 잃은 열량은 저온 유체가 얻은 열량과 같습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                열교환기 에너지 균형
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <EquationBox label="고온 유체 (Hot fluid)" accent="orange">
                  <Math tex={`q = \\dot{m}_h c_{p,h} (T_{h,i} - T_{h,o})`} display />
                </EquationBox>
                <EquationBox label="저온 유체 (Cold fluid)" accent="cyan">
                  <Math tex={`q = \\dot{m}_c c_{p,c} (T_{c,o} - T_{c,i})`} display />
                </EquationBox>
              </div>

              <div className="mt-6">
                <EquationBox label="열용량률 (Heat Capacity Rate)" accent="purple">
                  <Math tex={`C_h = \\dot{m}_h c_{p,h}, \\quad C_c = \\dot{m}_c c_{p,c} \\quad [\\text{W/K}]`} display />
                </EquationBox>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                따라서 <Math tex="q = C_h (T_{h,i} - T_{h,o}) = C_c (T_{c,o} - T_{c,i})" />
              </p>
            </div>
          </motion.div>

          {/* 2. LMTD 유도 */}
          <SectionDivider number="2" title="LMTD Derivation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열교환기에서 두 유체 사이의 온도차 <Math tex="\Delta T" />는 위치에 따라 변합니다.
              열전달률을 계산하기 위해 <strong className="text-white">적절한 평균 온도차</strong>가 필요합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                미소 요소에서의 열전달
              </h4>

              <EquationBox label="미소 면적 dA에서의 열전달" accent="cyan">
                <Math tex={`dq = U \\cdot dA \\cdot \\Delta T`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400 mb-3">
                  <strong className="text-cyan-400">유도 과정:</strong>
                </p>
                <ol className="text-sm text-gray-400 space-y-2">
                  <li>1. 에너지 균형: <Math tex="dq = -C_h dT_h = C_c dT_c" /></li>
                  <li>2. 온도차 미분: <Math tex="d(\Delta T) = dT_h - dT_c" /></li>
                  <li>3. 대입 및 정리: <Math tex="\\frac{d(\\Delta T)}{\\Delta T} = -U\\left(\\frac{1}{C_h} + \\frac{1}{C_c}\\right)dA" /> (병류)</li>
                  <li>4. 적분: <Math tex="\\ln\\frac{\\Delta T_2}{\\Delta T_1} = -UA\\left(\\frac{1}{C_h} + \\frac{1}{C_c}\\right)" /></li>
                </ol>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                LMTD (Log Mean Temperature Difference)
              </h4>

              <EquationBox label="LMTD 정의" accent="purple">
                <Math tex={`\\Delta T_{lm} = \\frac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1 / \\Delta T_2)}`} display />
              </EquationBox>

              <div className="mt-6">
                <EquationBox label="열교환기 설계 방정식" accent="purple">
                  <Math tex={`q = UA \\cdot \\Delta T_{lm}`} display />
                </EquationBox>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                이것이 열교환기 설계의 <strong className="text-white">기본 방정식</strong>입니다.
              </p>
            </div>
          </motion.div>

          {/* 3. 병류 vs 역류 LMTD */}
          <SectionDivider number="3" title="LMTD for Parallel and Counter Flow" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Parallel Flow (병류)
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-3">
                    <strong className="text-orange-400">온도차 정의:</strong>
                  </p>
                  <Math tex={`\\Delta T_1 = T_{h,i} - T_{c,i}`} display />
                  <Math tex={`\\Delta T_2 = T_{h,o} - T_{c,o}`} display />
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-3">온도 분포 개념도</p>
                  <div className="relative">
                    <svg viewBox="0 0 260 120" className="w-full h-auto">
                      {/* Background grid */}
                      <defs>
                        <pattern id="grid-lmtd-pf" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect x="45" y="10" width="180" height="85" fill="url(#grid-lmtd-pf)" />

                      {/* Axes */}
                      <line x1="45" y1="95" x2="235" y2="95" stroke="#64748b" strokeWidth="1" />
                      <line x1="45" y1="95" x2="45" y2="5" stroke="#64748b" strokeWidth="1" />
                      <text x="140" y="110" fontSize="9" fill="#94a3b8" textAnchor="middle">x</text>
                      <text x="30" y="55" fontSize="9" fill="#94a3b8" textAnchor="middle" transform="rotate(-90, 30, 55)">T</text>

                      {/* Hot fluid curve (decreasing) */}
                      <path d="M 50 18 Q 140 38 225 58" stroke="#f87171" strokeWidth="2.5" fill="none" />
                      {/* Cold fluid curve (increasing) */}
                      <path d="M 50 85 Q 140 68 225 62" stroke="#60a5fa" strokeWidth="2.5" fill="none" />

                      {/* ΔT indicators */}
                      <line x1="50" y1="18" x2="50" y2="85" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,2" />
                      <line x1="225" y1="58" x2="225" y2="62" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,2" />

                      {/* Labels */}
                      <text x="32" y="52" fontSize="9" fill="#a855f7" fontWeight="bold">ΔT₁</text>
                      <text x="230" y="62" fontSize="9" fill="#a855f7" fontWeight="bold">ΔT₂</text>
                      <text x="160" y="35" fontSize="8" fill="#f87171">Hot →</text>
                      <text x="160" y="82" fontSize="8" fill="#60a5fa">Cold →</text>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 text-center"><Math tex="\Delta T_1 > \Delta T_2" /> (입구에서 최대 온도차)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                Counter Flow (역류)
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-3">
                    <strong className="text-cyan-400">온도차 정의:</strong>
                  </p>
                  <Math tex={`\\Delta T_1 = T_{h,i} - T_{c,o}`} display />
                  <Math tex={`\\Delta T_2 = T_{h,o} - T_{c,i}`} display />
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-3">온도 분포 개념도</p>
                  <div className="relative">
                    <svg viewBox="0 0 260 120" className="w-full h-auto">
                      {/* Background grid */}
                      <defs>
                        <pattern id="grid-lmtd-cf" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect x="45" y="10" width="180" height="85" fill="url(#grid-lmtd-cf)" />

                      {/* Axes */}
                      <line x1="45" y1="95" x2="235" y2="95" stroke="#64748b" strokeWidth="1" />
                      <line x1="45" y1="95" x2="45" y2="5" stroke="#64748b" strokeWidth="1" />
                      <text x="140" y="110" fontSize="9" fill="#94a3b8" textAnchor="middle">x</text>
                      <text x="30" y="55" fontSize="9" fill="#94a3b8" textAnchor="middle" transform="rotate(-90, 30, 55)">T</text>

                      {/* Hot fluid curve (decreasing) */}
                      <path d="M 50 20 Q 140 38 225 55" stroke="#f87171" strokeWidth="2.5" fill="none" />
                      {/* Cold fluid curve (opposite direction, so increasing from right to left) */}
                      <path d="M 50 40 Q 140 58 225 75" stroke="#60a5fa" strokeWidth="2.5" fill="none" />

                      {/* ΔT indicators - more uniform */}
                      <line x1="50" y1="20" x2="50" y2="40" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,2" />
                      <line x1="225" y1="55" x2="225" y2="75" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,2" />
                      <line x1="140" y1="38" x2="140" y2="58" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,2" opacity="0.5" />

                      {/* Labels */}
                      <text x="32" y="33" fontSize="9" fill="#a855f7" fontWeight="bold">ΔT₁</text>
                      <text x="230" y="68" fontSize="9" fill="#a855f7" fontWeight="bold">ΔT₂</text>
                      <text x="160" y="32" fontSize="8" fill="#f87171">Hot →</text>
                      <text x="160" y="85" fontSize="8" fill="#60a5fa">← Cold</text>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 text-center">비교적 균일한 <Math tex="\Delta T" /> (ΔT₁ ≈ ΔT₂)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="LMTD 계산 시 주의사항" accent="yellow" icon="!">
              <ul className="space-y-2">
                <li><strong className="text-white">1.</strong> <Math tex="\Delta T_1" />과 <Math tex="\Delta T_2" />는 양수여야 합니다.</li>
                <li><strong className="text-white">2.</strong> <Math tex="\Delta T_1 = \Delta T_2" />이면 <Math tex="\Delta T_{lm} = \Delta T_1 = \Delta T_2" /> (산술평균과 같음)</li>
                <li><strong className="text-white">3.</strong> 역류의 LMTD가 병류보다 항상 크거나 같음</li>
                <li><strong className="text-white">4.</strong> 같은 q에서 역류는 더 작은 면적 필요</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 4. 보정계수 F */}
          <SectionDivider number="4" title="Correction Factor F" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              LMTD 공식은 순수한 병류 또는 역류에만 적용됩니다.
              복잡한 유동 배열(cross flow, multi-pass)에서는 <strong className="text-white">보정계수 F</strong>가 필요합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                보정계수 F를 적용한 설계 방정식
              </h4>

              <EquationBox label="일반 열교환기 설계 방정식" accent="purple">
                <Math tex={`q = UA \\cdot F \\cdot \\Delta T_{lm,cf}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  여기서 <Math tex="\Delta T_{lm,cf}" />는 <strong className="text-white">역류(counter flow) 기준</strong> LMTD
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  F는 해당 유동 배열의 효율을 역류 대비로 나타냄 (<Math tex="0 < F \leq 1" />)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                F 결정을 위한 무차원 변수
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <EquationBox label="온도 효율 P" accent="cyan">
                  <Math tex={`P = \\frac{T_{t,o} - T_{t,i}}{T_{s,i} - T_{t,i}}`} display />
                </EquationBox>
                <EquationBox label="열용량비 R" accent="orange">
                  <Math tex={`R = \\frac{T_{s,i} - T_{s,o}}{T_{t,o} - T_{t,i}} = \\frac{C_t}{C_s}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-cyan-400">Subscripts:</strong><br />
                  t = tube side fluid, s = shell side fluid<br />
                  i = inlet, o = outlet
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                1-2 Shell-and-Tube HX의 F 공식
              </h4>

              <EquationBox label="F for 1 shell pass, 2 tube passes" accent="purple">
                <Math tex={`F = \\frac{\\sqrt{R^2+1}\\ln\\left(\\frac{1-P}{1-PR}\\right)}{(R-1)\\ln\\left(\\frac{2-P(R+1-\\sqrt{R^2+1})}{2-P(R+1+\\sqrt{R^2+1})}\\right)}`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                실제 계산에서는 <strong className="text-white">차트(그래프)</strong>를 사용하는 것이 일반적입니다.
              </p>
            </div>
          </motion.div>

          {/* 5. F 차트 해석 */}
          <SectionDivider number="5" title="F-Factor Charts" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                F 값 범위와 의미
              </h4>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-2"><Math tex="F \geq 0.9" /></h5>
                  <p className="text-sm text-gray-400">
                    양호한 설계<br />
                    역류에 가까운 성능
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <h5 className="text-yellow-400 font-bold mb-2"><Math tex="0.75 < F < 0.9" /></h5>
                  <p className="text-sm text-gray-400">
                    허용 가능<br />
                    pass 수 증가 고려
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-2"><Math tex="F < 0.75" /></h5>
                  <p className="text-sm text-gray-400">
                    비효율적 설계<br />
                    재설계 필요
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-emerald-400">설계 팁:</strong><br />
                  F가 낮으면 shell pass 수를 증가시켜 순수 역류에 가깝게 만듭니다.<br />
                  예: 1-2 &rarr; 2-4 &rarr; 3-6 (shell passes - tube passes)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Temperature Cross와 F의 관계" accent="red" icon="X">
              <p className="mb-2">
                <strong className="text-white">Temperature cross</strong>: <Math tex="T_{c,o} > T_{h,o}" />인 상황
              </p>
              <ul className="space-y-1 mt-2">
                <li>- 병류에서는 절대 발생 불가</li>
                <li>- 역류에서는 가능 (이점 중 하나)</li>
                <li>- Multi-pass에서 temperature cross가 심하면 F가 급격히 감소</li>
                <li>- F 차트에서 불연속 또는 비현실적 영역이 됨</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 6. 특수 경우 */}
          <SectionDivider number="6" title="Special Cases" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                상변화가 있는 경우
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">응축기 (Condenser)</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    고온측이 일정 온도에서 응축
                  </p>
                  <Math tex="C_h \to \infty, \quad R = 0" display />
                  <p className="text-xs text-gray-500 mt-2">
                    <Math tex="F = 1" /> (유동 배열 무관)
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">증발기 (Evaporator)</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    저온측이 일정 온도에서 비등
                  </p>
                  <Math tex="C_c \to \infty, \quad R \to \infty" display />
                  <p className="text-xs text-gray-500 mt-2">
                    <Math tex="F = 1" /> (유동 배열 무관)
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                <h5 className="text-purple-400 font-bold mb-2"><Math tex="C_h = C_c" />인 경우 (역류)</h5>
                <p className="text-sm text-gray-400 mb-2">
                  두 유체의 온도 변화가 동일하여 <Math tex="\Delta T" />가 일정
                </p>
                <Math tex="\Delta T_1 = \Delta T_2 \quad \Rightarrow \quad \Delta T_{lm} = \Delta T_1" display />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

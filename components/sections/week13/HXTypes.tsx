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

export default function HXTypes() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Types of Heat Exchangers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            열교환기의 기본 구조와 유동 배열에 따른 분류를 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 열교환기 소개 */}
          <SectionDivider number="1" title="Introduction to Heat Exchangers" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">열교환기(Heat Exchanger)</strong>는 두 유체 사이에서
              열을 전달하는 장치입니다. 산업 공정, 발전소, 냉난방 시스템, 자동차 등
              거의 모든 열시스템에서 핵심적인 역할을 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                열교환기의 주요 응용 분야
              </h4>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-purple-400 font-bold mb-2">발전/에너지</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>- 보일러, 응축기</li>
                    <li>- 재생기, 예열기</li>
                    <li>- 원자로 냉각</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-cyan-400 font-bold mb-2">화학/석유</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>- 반응기 냉각</li>
                    <li>- 증류탑 응축기</li>
                    <li>- 공정 가열/냉각</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-2">냉난방/수송</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>- 증발기, 응축기</li>
                    <li>- 자동차 라디에이터</li>
                    <li>- 데이터센터 냉각</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. 유동 배열에 따른 분류 */}
          <SectionDivider number="2" title="Classification by Flow Arrangement" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열교환기는 <strong className="text-white">두 유체의 상대적 유동 방향</strong>에 따라 분류됩니다.
              유동 배열은 온도 분포와 열전달 성능에 직접적인 영향을 미칩니다.
            </p>
          </motion.div>

          {/* Parallel Flow */}
          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                1. Parallel Flow (병류)
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="p-4 rounded-xl bg-slate-900/50 mb-4">
                    <p className="text-gray-400 text-sm mb-3">
                      두 유체가 <strong className="text-white">같은 방향</strong>으로 흐릅니다.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-red-400">Hot fluid</span>
                      <span className="text-gray-500">&rarr;</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-blue-400">Cold fluid</span>
                      <span className="text-gray-500">&rarr;</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-400">
                    <p><strong className="text-cyan-400">특징:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>- 입구에서 최대 온도차 (<Math tex="\Delta T_1 = T_{h,i} - T_{c,i}" />)</li>
                      <li>- 출구에서 최소 온도차 (<Math tex="\Delta T_2 = T_{h,o} - T_{c,o}" />)</li>
                      <li>- <Math tex="T_{c,o}" />는 절대 <Math tex="T_{h,o}" />를 초과할 수 없음</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-500 mb-3">온도 분포 (위치에 따른 변화)</p>
                  <div className="relative">
                    <svg viewBox="0 0 280 140" className="w-full h-auto">
                      {/* Background grid */}
                      <defs>
                        <pattern id="grid-pf" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect x="50" y="15" width="200" height="100" fill="url(#grid-pf)" />

                      {/* Axes */}
                      <line x1="50" y1="115" x2="260" y2="115" stroke="#64748b" strokeWidth="1.5" />
                      <line x1="50" y1="115" x2="50" y2="10" stroke="#64748b" strokeWidth="1.5" />
                      <polygon points="260,115 252,111 252,119" fill="#64748b" />
                      <polygon points="50,10 46,18 54,18" fill="#64748b" />

                      {/* Axis labels */}
                      <text x="150" y="132" fontSize="10" fill="#94a3b8" textAnchor="middle">Position x</text>
                      <text x="25" y="65" fontSize="10" fill="#94a3b8" textAnchor="middle" transform="rotate(-90, 25, 65)">Temperature</text>

                      {/* Hot fluid curve (decreasing) */}
                      <path d="M 55 25 Q 150 45 250 70" stroke="#f87171" strokeWidth="2.5" fill="none" />
                      {/* Cold fluid curve (increasing) */}
                      <path d="M 55 105 Q 150 85 250 75" stroke="#60a5fa" strokeWidth="2.5" fill="none" />

                      {/* ΔT indicators */}
                      <line x1="55" y1="25" x2="55" y2="105" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,2" />
                      <line x1="250" y1="70" x2="250" y2="75" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,2" />

                      {/* Labels */}
                      <text x="60" y="22" fontSize="9" fill="#f87171" fontWeight="bold">T_h,i</text>
                      <text x="60" y="110" fontSize="9" fill="#60a5fa" fontWeight="bold">T_c,i</text>
                      <text x="220" y="65" fontSize="9" fill="#f87171" fontWeight="bold">T_h,o</text>
                      <text x="220" y="88" fontSize="9" fill="#60a5fa" fontWeight="bold">T_c,o</text>
                      <text x="35" y="65" fontSize="9" fill="#a855f7">ΔT₁</text>
                      <text x="255" y="75" fontSize="9" fill="#a855f7">ΔT₂</text>

                      {/* Flow direction arrows */}
                      <text x="150" y="35" fontSize="8" fill="#f87171">Hot →</text>
                      <text x="150" y="98" fontSize="8" fill="#60a5fa">Cold →</text>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">출구에서 두 온도가 접근 (ΔT₁ &gt; ΔT₂)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Counter Flow */}
          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                2. Counter Flow (역류)
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="p-4 rounded-xl bg-slate-900/50 mb-4">
                    <p className="text-gray-400 text-sm mb-3">
                      두 유체가 <strong className="text-white">반대 방향</strong>으로 흐릅니다.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-red-400">Hot fluid</span>
                      <span className="text-gray-500">&rarr;</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-blue-400">Cold fluid</span>
                      <span className="text-gray-500">&larr;</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-400">
                    <p><strong className="text-orange-400">특징:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>- 전 구간에서 상대적으로 균일한 온도차</li>
                      <li>- <Math tex="T_{c,o}" />가 <Math tex="T_{h,o}" />를 초과 가능</li>
                      <li>- <strong className="text-white">가장 높은 열전달 효율</strong></li>
                      <li>- 같은 조건에서 최소 면적 필요</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-500 mb-3">온도 분포 (위치에 따른 변화)</p>
                  <div className="relative">
                    <svg viewBox="0 0 280 140" className="w-full h-auto">
                      {/* Background grid */}
                      <defs>
                        <pattern id="grid-cf" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect x="50" y="15" width="200" height="100" fill="url(#grid-cf)" />

                      {/* Axes */}
                      <line x1="50" y1="115" x2="260" y2="115" stroke="#64748b" strokeWidth="1.5" />
                      <line x1="50" y1="115" x2="50" y2="10" stroke="#64748b" strokeWidth="1.5" />
                      <polygon points="260,115 252,111 252,119" fill="#64748b" />
                      <polygon points="50,10 46,18 54,18" fill="#64748b" />

                      {/* Axis labels */}
                      <text x="150" y="132" fontSize="10" fill="#94a3b8" textAnchor="middle">Position x</text>
                      <text x="25" y="65" fontSize="10" fill="#94a3b8" textAnchor="middle" transform="rotate(-90, 25, 65)">Temperature</text>

                      {/* Hot fluid curve (decreasing) */}
                      <path d="M 55 25 Q 150 45 250 65" stroke="#f87171" strokeWidth="2.5" fill="none" />
                      {/* Cold fluid curve (increasing but from inlet at right) */}
                      <path d="M 55 45 Q 150 65 250 85" stroke="#60a5fa" strokeWidth="2.5" fill="none" />

                      {/* ΔT indicators - more uniform */}
                      <line x1="55" y1="25" x2="55" y2="45" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,2" />
                      <line x1="250" y1="65" x2="250" y2="85" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,2" />
                      <line x1="150" y1="45" x2="150" y2="65" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,2" opacity="0.5" />

                      {/* Labels */}
                      <text x="60" y="22" fontSize="9" fill="#f87171" fontWeight="bold">T_h,i</text>
                      <text x="60" y="55" fontSize="9" fill="#60a5fa" fontWeight="bold">T_c,o</text>
                      <text x="220" y="60" fontSize="9" fill="#f87171" fontWeight="bold">T_h,o</text>
                      <text x="220" y="98" fontSize="9" fill="#60a5fa" fontWeight="bold">T_c,i</text>
                      <text x="35" y="38" fontSize="9" fill="#a855f7">ΔT₁</text>
                      <text x="255" y="78" fontSize="9" fill="#a855f7">ΔT₂</text>

                      {/* Flow direction arrows */}
                      <text x="150" y="35" fontSize="8" fill="#f87171">Hot →</text>
                      <text x="150" y="98" fontSize="8" fill="#60a5fa">← Cold</text>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">전 구간에서 비교적 균일한 온도차 유지</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Counter Flow의 우수성" accent="orange" icon="!">
              <p className="mb-2">
                역류(Counter flow) 열교환기가 <strong className="text-white">가장 효율적</strong>입니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>- 주어진 열교환량에서 가장 작은 면적 필요</li>
                <li>- 최대 <Math tex="\varepsilon = 1" /> (이론적 한계)</li>
                <li>- 냉유체 출구 온도가 고유체 출구 온도보다 높을 수 있음</li>
              </ul>
              <p className="mt-2 text-gray-500">
                <Math tex="T_{c,o} > T_{h,o}" />는 병류에서는 불가능합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* Cross Flow */}
          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                3. Cross Flow (직교류)
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="p-4 rounded-xl bg-slate-900/50 mb-4">
                    <p className="text-gray-400 text-sm mb-3">
                      두 유체가 <strong className="text-white">수직</strong>으로 흐릅니다.
                    </p>
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <span className="text-red-400">Hot fluid</span>
                      <span className="text-gray-500">&rarr;</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-blue-400">Cold fluid</span>
                      <span className="text-gray-500">&darr;</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-400">
                    <p><strong className="text-blue-400">종류:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>- <strong className="text-white">Unmixed:</strong> 유체가 가로방향으로 섞이지 않음</li>
                      <li>- <strong className="text-white">Mixed:</strong> 유체가 가로방향으로 자유롭게 섞임</li>
                      <li>- 핀-튜브, 플레이트-핀 열교환기에서 사용</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-500 mb-3">직교류 개념도</p>
                  <div className="relative flex items-center justify-center">
                    <svg viewBox="0 0 200 180" className="w-full h-auto max-w-xs">
                      {/* Heat exchanger core boundary */}
                      <rect x="40" y="40" width="120" height="100" fill="none" stroke="#64748b" strokeWidth="2" rx="3" />

                      {/* Horizontal tubes (hot fluid) */}
                      <line x1="10" y1="60" x2="190" y2="60" stroke="#f87171" strokeWidth="3" />
                      <line x1="10" y1="90" x2="190" y2="90" stroke="#f87171" strokeWidth="3" />
                      <line x1="10" y1="120" x2="190" y2="120" stroke="#f87171" strokeWidth="3" />

                      {/* Tube circles (cross section view illusion) */}
                      <circle cx="55" cy="60" r="4" fill="#f87171" />
                      <circle cx="100" cy="60" r="4" fill="#f87171" />
                      <circle cx="145" cy="60" r="4" fill="#f87171" />
                      <circle cx="55" cy="90" r="4" fill="#f87171" />
                      <circle cx="100" cy="90" r="4" fill="#f87171" />
                      <circle cx="145" cy="90" r="4" fill="#f87171" />
                      <circle cx="55" cy="120" r="4" fill="#f87171" />
                      <circle cx="100" cy="120" r="4" fill="#f87171" />
                      <circle cx="145" cy="120" r="4" fill="#f87171" />

                      {/* Vertical cold fluid flow */}
                      <defs>
                        <marker id="arrow-cf-hx" markerWidth="8" markerHeight="6" refX="4" refY="3" orient="auto">
                          <path d="M0,0 L8,3 L0,6 Z" fill="#60a5fa" />
                        </marker>
                      </defs>
                      <path d="M 70 15 L 70 165" stroke="#60a5fa" strokeWidth="10" opacity="0.25" />
                      <path d="M 100 15 L 100 165" stroke="#60a5fa" strokeWidth="10" opacity="0.25" />
                      <path d="M 130 15 L 130 165" stroke="#60a5fa" strokeWidth="10" opacity="0.25" />
                      <line x1="100" y1="10" x2="100" y2="170" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrow-cf-hx)" />

                      {/* Hot fluid arrow */}
                      <defs>
                        <marker id="arrow-hf-hx" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                          <path d="M0,0 L8,3 L0,6 Z" fill="#f87171" />
                        </marker>
                      </defs>
                      <line x1="5" y1="90" x2="35" y2="90" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrow-hf-hx)" />

                      {/* Labels */}
                      <text x="8" y="82" fontSize="10" fill="#f87171" fontWeight="bold">Hot</text>
                      <text x="175" y="95" fontSize="10" fill="#f87171">→</text>
                      <text x="105" y="12" fontSize="10" fill="#60a5fa" fontWeight="bold">Cold</text>
                      <text x="105" y="175" fontSize="10" fill="#60a5fa">↓</text>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">튜브 내 고온유체 (수평), 외부 저온유체 (수직)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Shell-and-Tube Heat Exchanger */}
          <SectionDivider number="3" title="Shell-and-Tube Heat Exchanger" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Shell-and-Tube 열교환기</strong>는 산업에서 가장 널리 사용되는 형태입니다.
              튜브 다발(bundle)이 원통형 shell 내부에 위치하며, 한 유체는 튜브 내부로,
              다른 유체는 shell 측으로 흐릅니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
                Shell-and-Tube 구조
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3 text-sm text-gray-400">
                    <p><strong className="text-purple-400">주요 구성요소:</strong></p>
                    <ul className="space-y-2 ml-4">
                      <li><strong className="text-white">Shell:</strong> 외부 원통형 용기</li>
                      <li><strong className="text-white">Tubes:</strong> 내부 튜브 다발</li>
                      <li><strong className="text-white">Baffles:</strong> Shell 측 유동 유도판</li>
                      <li><strong className="text-white">Tube sheets:</strong> 튜브 고정판</li>
                      <li><strong className="text-white">Headers:</strong> 입출구 분배기</li>
                    </ul>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                    <p className="text-sm text-yellow-400">
                      <strong>Baffle의 역할:</strong> Shell 측 유체를 튜브에 수직으로 유도하여
                      열전달 계수를 증가시킵니다.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-500 mb-3">Shell-and-Tube 개념도</p>
                  <div className="relative flex items-center justify-center">
                    <svg viewBox="0 0 380 160" className="w-full h-auto">
                      {/* Shell outline with rounded ends */}
                      <ellipse cx="40" cy="80" rx="20" ry="55" fill="none" stroke="#a855f7" strokeWidth="2.5" />
                      <ellipse cx="340" cy="80" rx="20" ry="55" fill="none" stroke="#a855f7" strokeWidth="2.5" />
                      <line x1="40" y1="25" x2="340" y2="25" stroke="#a855f7" strokeWidth="2.5" />
                      <line x1="40" y1="135" x2="340" y2="135" stroke="#a855f7" strokeWidth="2.5" />

                      {/* Tube sheet */}
                      <rect x="55" y="28" width="8" height="104" fill="#64748b" />
                      <rect x="317" y="28" width="8" height="104" fill="#64748b" />

                      {/* Tubes (hot fluid - red) */}
                      <line x1="30" y1="55" x2="350" y2="55" stroke="#f87171" strokeWidth="3" />
                      <line x1="30" y1="80" x2="350" y2="80" stroke="#f87171" strokeWidth="3" />
                      <line x1="30" y1="105" x2="350" y2="105" stroke="#f87171" strokeWidth="3" />

                      {/* Baffles */}
                      <rect x="120" y="30" width="6" height="70" fill="#475569" rx="1" />
                      <rect x="190" y="60" width="6" height="72" fill="#475569" rx="1" />
                      <rect x="260" y="30" width="6" height="70" fill="#475569" rx="1" />

                      {/* Shell side flow path (blue dashed) */}
                      <defs>
                        <marker id="arrow-shell" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
                          <path d="M0,0 L6,2.5 L0,5 Z" fill="#60a5fa" />
                        </marker>
                      </defs>
                      <path d="M 75 45 L 115 45 L 115 95 L 130 95 L 130 120 L 185 120 L 185 45 L 200 45 L 200 95 L 255 95 L 255 45 L 270 45 L 270 120 L 310 120"
                            stroke="#60a5fa" strokeWidth="2" fill="none" strokeDasharray="6,3" markerEnd="url(#arrow-shell)" />

                      {/* Inlet/Outlet nozzles */}
                      <rect x="70" y="15" width="20" height="15" fill="#64748b" rx="2" />
                      <rect x="290" y="130" width="20" height="15" fill="#64748b" rx="2" />
                      <text x="75" y="10" fontSize="9" fill="#60a5fa">Shell In</text>
                      <text x="285" y="155" fontSize="9" fill="#60a5fa">Shell Out</text>

                      {/* Tube side labels */}
                      <text x="10" y="80" fontSize="9" fill="#f87171">Tube In</text>
                      <text x="355" y="80" fontSize="9" fill="#f87171">→</text>

                      {/* Component labels */}
                      <text x="118" y="22" fontSize="8" fill="#475569">Baffle</text>
                      <text x="55" y="145" fontSize="8" fill="#64748b">Tube Sheet</text>
                      <text x="165" y="145" fontSize="8" fill="#a855f7">Shell</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                Shell-and-Tube 유형 (TEMA 표준)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">구분</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">설명</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">특징</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-purple-400">1-1</td>
                      <td className="py-3 px-4">One shell pass, one tube pass</td>
                      <td className="py-3 px-4 text-gray-400">순수 역류/병류에 가까움</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">1-2</td>
                      <td className="py-3 px-4">One shell pass, two tube passes</td>
                      <td className="py-3 px-4 text-gray-400">가장 일반적, 혼합 유동</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">2-4</td>
                      <td className="py-3 px-4">Two shell passes, four tube passes</td>
                      <td className="py-3 px-4 text-gray-400">높은 효율, 복잡한 구조</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-blue-400">n-2n</td>
                      <td className="py-3 px-4">Multiple passes</td>
                      <td className="py-3 px-4 text-gray-400">순수 역류에 접근</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 4. Other Types */}
          <SectionDivider number="4" title="Other Heat Exchanger Types" />

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <h5 className="text-emerald-400 font-bold mb-3">Compact Heat Exchangers</h5>
                <p className="text-sm text-gray-400 mb-2">
                  높은 <Math tex="\beta" /> (열전달 면적 밀도) 특징
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>- Plate-fin HX: <Math tex="\beta > 700" /> m<sup>2</sup>/m<sup>3</sup></li>
                  <li>- Finned-tube HX: 자동차 라디에이터</li>
                  <li>- 경량, 소형, 높은 효율</li>
                </ul>
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
                <h5 className="text-blue-400 font-bold mb-3">Plate Heat Exchangers</h5>
                <p className="text-sm text-gray-400 mb-2">
                  corrugated 플레이트 적층 구조
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>- 높은 열전달 계수</li>
                  <li>- 용량 조절 용이 (플레이트 추가/제거)</li>
                  <li>- 세척 및 유지보수 용이</li>
                </ul>
              </div>

              <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
                <h5 className="text-orange-400 font-bold mb-3">Double-Pipe (Concentric Tube)</h5>
                <p className="text-sm text-gray-400 mb-2">
                  동심원 이중관 구조
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>- 가장 단순한 구조</li>
                  <li>- 소용량 적용</li>
                  <li>- 순수 병류/역류 가능</li>
                </ul>
              </div>

              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <h5 className="text-red-400 font-bold mb-3">Regenerators</h5>
                <p className="text-sm text-gray-400 mb-2">
                  축열체(matrix)를 통한 간접 열교환
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>- 고온/고압 응용</li>
                  <li>- Rotary 또는 Fixed bed 타입</li>
                  <li>- 가스터빈, 제철소 등</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 5. 선택 기준 */}
          <SectionDivider number="5" title="Selection Criteria" />

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="열교환기 선택 시 고려사항" accent="purple" icon="?">
              <div className="space-y-2">
                <p><strong className="text-white">1. 유체 특성:</strong> 점도, 부식성, 상변화 여부</p>
                <p><strong className="text-white">2. 운전 조건:</strong> 온도, 압력 범위</p>
                <p><strong className="text-white">3. 열교환량:</strong> 필요 열전달률</p>
                <p><strong className="text-white">4. 압력 손실:</strong> 허용 압력강하</p>
                <p><strong className="text-white">5. 공간 제약:</strong> 설치 면적, 중량</p>
                <p><strong className="text-white">6. 경제성:</strong> 초기비용, 운영비용, 유지보수</p>
              </div>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import MathTex from "@/components/Math";
const Math = MathTex;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function InsightCard({ title, children, accent = "purple", icon = "!" }: { title: string; children: React.ReactNode; accent?: string; icon?: string }) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", iconBg: "bg-purple-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
  };
  const c = colors[accent] || colors.purple;
  return (
    <div className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
      <div className="flex items-start gap-3">
        <span className={`flex-shrink-0 w-7 h-7 rounded-full ${c.iconBg} flex items-center justify-center ${c.text} text-xs font-bold`}>{icon}</span>
        <div>
          <h4 className={`font-bold ${c.text} mb-2`}>{title}</h4>
          <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function PhaseChangeApplications() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Part 8
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Applications</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">상변화 열전달의 산업 응용</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 발전 산업 */}
          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-purple-400 mb-6">1. 발전 산업 (Power Generation)</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-white">보일러 (Boiler)</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>&bull; 물 → 증기 (비등)</li>
                    <li>&bull; 핵비등 영역에서 운전</li>
                    <li>&bull; CHF 회피가 중요 (안전)</li>
                    <li>&bull; 화력, 원자력 발전소</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-white">응축기 (Condenser)</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>&bull; 증기 → 물 (응축)</li>
                    <li>&bull; 막 응축 (수천 개 튜브)</li>
                    <li>&bull; 진공 유지가 효율에 중요</li>
                    <li>&bull; 해수/냉각탑 냉각</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 원자력 */}
          <motion.div {...fadeUp} className="mb-8">
            <InsightCard title="원자력 안전과 CHF" accent="red" icon="☢">
              <p className="mb-2">
                원자력 발전에서 <strong className="text-white">CHF (Critical Heat Flux)</strong>는 가장 중요한 안전 한계입니다.
              </p>
              <ul className="space-y-1">
                <li>&bull; CHF 초과 시 → 연료봉 과열 → 노심 손상 위험</li>
                <li>&bull; DNBR (Departure from Nucleate Boiling Ratio) &gt; 1.3 유지</li>
                <li>&bull; SMR (소형 모듈 원자로) 설계에서도 핵심 파라미터</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 전자 냉각 */}
          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">2. 전자기기 냉각 (Electronics Cooling)</h3>

              <p className="text-gray-400 mb-6">
                AI/GPU 시대의 고발열 반도체는 공랭으로 감당하기 어렵습니다.
                <strong className="text-white"> 침수 냉각(Immersion Cooling)</strong>이 주목받고 있습니다.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="font-bold text-cyan-400 mb-2">단상 침수 냉각</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 유전성 액체 (광유, 합성유)</li>
                    <li>&bull; h ~ 100-500 W/(m²·K)</li>
                    <li>&bull; 단순한 시스템</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="font-bold text-emerald-400 mb-2">2상 침수 냉각</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 유전성 냉매 (3M Novec 등)</li>
                    <li>&bull; h ~ 10,000+ W/(m²·K)</li>
                    <li>&bull; 더 높은 열유속 처리</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                MFTEL 연구실의 주요 연구 분야 중 하나입니다!
              </p>
            </div>
          </motion.div>

          {/* 냉동/공조 */}
          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">3. 냉동/공조 (HVAC&R)</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-white">증발기 (Evaporator)</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>&bull; 냉매 비등 → 열 흡수</li>
                    <li>&bull; 유동 비등 (관내)</li>
                    <li>&bull; 건도(quality) 변화</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-white">응축기 (Condenser)</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>&bull; 냉매 응축 → 열 방출</li>
                    <li>&bull; 관내 응축</li>
                    <li>&bull; 고압 상태</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 열에너지 저장 */}
          <motion.div {...fadeUp} className="mb-8">
            <InsightCard title="열에너지 저장 (TES) - 교수님 연구 분야" accent="purple" icon="🔋">
              <p className="mb-2">
                상변화 물질(PCM)을 이용한 잠열 저장:
              </p>
              <ul className="space-y-1">
                <li>&bull; 높은 에너지 밀도 (잠열 활용)</li>
                <li>&bull; 일정 온도에서 열 저장/방출</li>
                <li>&bull; 카르노 배터리, 태양열 발전에 적용</li>
                <li>&bull; 그리드 안정성 기여</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 기타 응용 */}
          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">기타 응용 분야</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
                <div>
                  <h5 className="font-bold text-white mb-2">Heat Pipe</h5>
                  <p>증발-응축 사이클을 이용한 고효율 열전달 장치</p>
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">Spray Cooling</h5>
                  <p>분무 냉각, 담금질, 금속 가공</p>
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">Desalination</h5>
                  <p>해수 담수화 (다중 효용 증류)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

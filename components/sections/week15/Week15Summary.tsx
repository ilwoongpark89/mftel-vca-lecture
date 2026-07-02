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

function KeyConceptCard({ title, children, accent = "purple" }: { title: string; children: React.ReactNode; accent?: string }) {
  const colors: Record<string, { border: string; text: string }> = {
    purple: { border: "border-purple-500/20", text: "text-purple-400" },
    cyan: { border: "border-cyan-500/20", text: "text-cyan-400" },
    emerald: { border: "border-emerald-500/20", text: "text-emerald-400" },
    red: { border: "border-red-500/20", text: "text-red-400" },
  };
  const c = colors[accent] || colors.purple;
  return (
    <div className={`p-4 rounded-xl bg-slate-800/30 border ${c.border}`}>
      <h4 className={`text-sm font-bold ${c.text} mb-2`}>{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Week15Summary() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Week 15 요약</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">상변화 열전달의 핵심 개념과 상관식</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 비등 열전달 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-purple-400 mb-6 text-center">비등 열전달 (Boiling)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-purple-400 mb-2">Pool Boiling Regimes</h4>
                  <ol className="text-sm text-gray-400 space-y-1">
                    <li>1. 자연대류 비등</li>
                    <li>2. 핵비등 (가장 효율적)</li>
                    <li>3. 천이 비등</li>
                    <li>4. 막비등</li>
                  </ol>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-cyan-400 mb-2">Rohsenow 상관식</h4>
                  <Math tex="q''_s = \mu_l h_{fg} \left[ \frac{g(\rho_l - \rho_v)}{\sigma} \right]^{1/2} \left[ \frac{c_{p,l} \Delta T_e}{C_{sf} h_{fg} Pr_l^n} \right]^3" display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* CHF */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-red-400 mb-6 text-center">임계 열유속 (CHF)</h3>
              <div className="p-4 rounded-xl bg-slate-900/50 mb-4">
                <h4 className="text-sm font-bold text-red-400 mb-2">Zuber 상관식</h4>
                <Math tex="q''_{max} = 0.149 \, h_{fg} \rho_v \left[ \frac{\sigma g (\rho_l - \rho_v)}{\rho_v^2} \right]^{1/4}" display />
              </div>
              <p className="text-sm text-gray-400 text-center">
                <strong className="text-white">물 @ 1 atm:</strong> <Math tex="q''_{max} \approx 1.26 \times 10^6" /> W/m² (1.26 MW/m²)
              </p>
            </div>
          </motion.div>

          {/* 응축 열전달 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center">응축 열전달 (Condensation)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-cyan-400 mb-2">Nusselt 막 응축</h4>
                  <Math tex="\bar{h}_L = 0.943 \left[ \frac{\rho_l g h'_{fg} k_l^3}{\mu_l (T_{sat} - T_s) L} \right]^{1/4}" display />
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-emerald-400 mb-2">적상 응축</h4>
                  <p className="text-sm text-gray-400 mb-2">막 응축 대비 5-10배 높은 h</p>
                  <p className="text-xs text-gray-500">소수성 표면에서 방울 형태로 응축</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                수정 잠열: <Math tex="h'_{fg} = h_{fg} + 0.68 c_{p,l}(T_{sat} - T_s)" />
              </p>
            </div>
          </motion.div>

          {/* 핵심 개념 */}
          <motion.div {...fadeUp} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">핵심 개념</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <KeyConceptCard title="1. 잠열의 역할" accent="purple">
                상변화 시 대량의 열 흡수/방출 → 높은 열유속 처리 가능
              </KeyConceptCard>
              <KeyConceptCard title="2. 안전 한계" accent="red">
                CHF 초과 → 막비등 전환 → 급격한 온도 상승 (Burnout)
              </KeyConceptCard>
              <KeyConceptCard title="3. 막 두께" accent="cyan">
                응축/비등에서 열저항은 주로 액막/기포층에 의해 결정
              </KeyConceptCard>
              <KeyConceptCard title="4. 표면 영향" accent="emerald">
                표면 조도, 젖음성이 기포 생성 및 응축 모드에 큰 영향
              </KeyConceptCard>
            </div>
          </motion.div>

          {/* 응용 분야 요약 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">주요 응용 분야</h4>
              <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-400">
                <div className="text-center">
                  <span className="text-2xl">⚡</span>
                  <p className="font-bold text-white mt-2">발전</p>
                  <p className="text-xs">보일러/응축기</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl">☢️</span>
                  <p className="font-bold text-white mt-2">원자력</p>
                  <p className="text-xs">CHF 안전 설계</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl">💻</span>
                  <p className="font-bold text-white mt-2">전자 냉각</p>
                  <p className="text-xs">침수 냉각</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl">❄️</span>
                  <p className="font-bold text-white mt-2">냉동/공조</p>
                  <p className="text-xs">증발기/응축기</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 최종 */}
          <motion.div {...fadeUp}>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-4">Final Exam</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-purple-400">Week 16: 기말고사</strong>
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Week 9-15 범위 (Convection ~ Phase Change)
              </p>
              <div className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30">
                <p className="text-white font-medium">수고하셨습니다! 🎉</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

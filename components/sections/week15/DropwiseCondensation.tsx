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

function EquationBox({ label, children, accent = "cyan" }: { label?: string; children: React.ReactNode; accent?: string }) {
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div className="text-cyan-400">{children}</div>
    </div>
  );
}

function InsightCard({ title, children, icon = "!" }: { title: string; children: React.ReactNode; icon?: string }) {
  return (
    <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">{icon}</span>
        <div>
          <h4 className="font-bold text-cyan-400 mb-2">{title}</h4>
          <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function DropwiseCondensation() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 7
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Dropwise Condensation</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">적상 응축: 막 응축보다 5-10배 높은 열전달</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">적상 응축(Dropwise Condensation)</strong>은 응축액이 연속 막 대신
              개별 방울 형태로 형성되는 현상입니다. 표면의 상당 부분이 액막 없이 증기와 직접 접촉하므로
              열전달이 훨씬 효율적입니다.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">막 vs 적상 응축 비교</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400">특성</th>
                      <th className="text-left py-3 px-4 text-gray-400">막 응축</th>
                      <th className="text-left py-3 px-4 text-gray-400">적상 응축</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">형태</td>
                      <td className="py-3 px-4">연속 액막</td>
                      <td className="py-3 px-4">개별 방울</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">표면 조건</td>
                      <td className="py-3 px-4">친수성 (Hydrophilic)</td>
                      <td className="py-3 px-4">소수성 (Hydrophobic)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold">h (수증기)</td>
                      <td className="py-3 px-4 text-blue-400">~10,000 W/(m²·K)</td>
                      <td className="py-3 px-4 text-cyan-400 font-bold">~100,000 W/(m²·K)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">지속성</td>
                      <td className="py-3 px-4">안정적</td>
                      <td className="py-3 px-4">유지 어려움</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <InsightCard title="왜 적상 응축이 더 효율적인가?" icon="?">
              <ol className="space-y-2">
                <li>1. 표면의 ~90%가 막 없이 증기와 직접 접촉</li>
                <li>2. 방울이 커지면 중력으로 떨어져 표면 갱신</li>
                <li>3. 액막의 열저항이 없음</li>
                <li>4. 방울 주변에서 국소적으로 매우 높은 h</li>
              </ol>
            </InsightCard>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">적상 응축 촉진 방법</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <ul className="space-y-2">
                  <li><strong className="text-white">화학적 코팅:</strong></li>
                  <li>&bull; 자기조립 단분자막 (SAM)</li>
                  <li>&bull; 불소계 폴리머 코팅</li>
                  <li>&bull; 금속 촉진제 (유기 티올 등)</li>
                </ul>
                <ul className="space-y-2">
                  <li><strong className="text-white">물리적 방법:</strong></li>
                  <li>&bull; 나노/마이크로 구조 표면</li>
                  <li>&bull; 초발수성 표면 (SHS)</li>
                  <li>&bull; 하이브리드 구조 (친수성+소수성)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <InsightCard title="실용화의 도전 과제" icon="!">
              <p className="mb-2">
                적상 응축을 실제 응축기에 적용하기 어려운 이유:
              </p>
              <ul className="space-y-1">
                <li>&bull; 코팅 내구성: 장기 운전 시 열화</li>
                <li>&bull; 오염 (fouling): 불순물에 의한 친수성 전환</li>
                <li>&bull; 비용: 특수 표면 처리 비용</li>
                <li>&bull; 비응축 가스: 소량의 공기도 성능 급감</li>
              </ul>
            </InsightCard>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">최신 연구 동향</h4>
              <p className="text-gray-400 mb-4">
                MFTEL 연구실에서도 관심을 갖고 있는 분야입니다:
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>&bull; <strong className="text-white">점핑 방울 응축:</strong> 초발수성 표면에서 방울이 합쳐질 때 표면에서 "점프"하여 떨어짐</li>
                <li>&bull; <strong className="text-white">Biphilic 표면:</strong> 친수성과 소수성 영역을 패턴화하여 최적화</li>
                <li>&bull; <strong className="text-white">나노구조 코팅:</strong> CuO 나노와이어, CNT 등</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

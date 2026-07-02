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

function EquationBox({ label, children, accent = "red" }: { label?: string; children: React.ReactNode; accent?: string }) {
  const borderColor = accent === "red" ? "border-red-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div className="text-red-400">{children}</div>
    </div>
  );
}

function InsightCard({ title, children, icon = "!" }: { title: string; children: React.ReactNode; icon?: string }) {
  return (
    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">{icon}</span>
        <div>
          <h4 className="font-bold text-red-400 mb-2">{title}</h4>
          <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function RadiationShields() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 7
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Radiation Shields</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">복사 차폐막을 이용한 열전달 감소</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              두 표면 사이에 <strong className="text-white">복사 차폐막(radiation shield)</strong>을 삽입하면
              복사 열전달을 크게 줄일 수 있습니다. 차폐막은 저방사율 표면을 가진 얇은 판입니다.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">단일 차폐막 효과</h4>

              <p className="text-sm text-gray-400 mb-4 text-center">
                두 무한 평행 평판(ε₁, ε₂) 사이에 차폐막(ε₃ = 양면 동일) 삽입 시:
              </p>

              <EquationBox label="차폐막 없을 때">
                <Math tex="q_{12} = \\frac{\\sigma(T_1^4 - T_2^4)}{\\frac{1}{\\varepsilon_1} + \\frac{1}{\\varepsilon_2} - 1}" display />
              </EquationBox>

              <div className="my-6 text-center text-gray-500">&darr; 차폐막 삽입</div>

              <EquationBox label="차폐막 있을 때" accent="red">
                <Math tex="q_{123} = \\frac{\\sigma(T_1^4 - T_2^4)}{\\left(\\frac{1}{\\varepsilon_1} + \\frac{1}{\\varepsilon_2} - 1\\right) + 2\\left(\\frac{1}{\\varepsilon_3} - 1\\right)}" display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-6">N개의 차폐막</h4>

              <p className="text-sm text-gray-400 mb-4">
                모든 표면의 방사율이 동일(<Math tex="\\varepsilon" />)할 때, N개의 차폐막 효과:
              </p>

              <EquationBox label="N개 차폐막">
                <Math tex="q_N = \\frac{q_0}{N + 1}" display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                차폐막 N개 → 열전달이 <Math tex="1/(N+1)" />로 감소!
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <InsightCard title="실제 응용 예시" icon="★">
              <ul className="space-y-2">
                <li><strong className="text-white">MLI (Multi-Layer Insulation):</strong> 우주선, 극저온 탱크에 사용. 얇은 알루미늄 호일을 여러 겹 적층.</li>
                <li><strong className="text-white">보온병 (Dewar flask):</strong> 진공 + 은 코팅 유리 벽면</li>
                <li><strong className="text-white">건물 단열:</strong> 저방사율 코팅(Low-E) 유리창</li>
              </ul>
            </InsightCard>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">차폐막 수에 따른 열전달 감소</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-4 text-gray-400">N (차폐막 수)</th>
                      <th className="text-left py-2 px-4 text-gray-400">열전달 비율 <Math tex="q_N/q_0" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800"><td className="py-2 px-4">0</td><td className="py-2 px-4">100%</td></tr>
                    <tr className="border-b border-slate-800"><td className="py-2 px-4">1</td><td className="py-2 px-4">50%</td></tr>
                    <tr className="border-b border-slate-800"><td className="py-2 px-4">2</td><td className="py-2 px-4">33%</td></tr>
                    <tr className="border-b border-slate-800"><td className="py-2 px-4">5</td><td className="py-2 px-4">17%</td></tr>
                    <tr><td className="py-2 px-4">10</td><td className="py-2 px-4">9%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

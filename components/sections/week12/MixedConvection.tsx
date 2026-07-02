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

function EquationBox({ label, children, accent = "orange" }: { label?: string; children: React.ReactNode; accent?: string }) {
  const borderColor = accent === "orange" ? "border-orange-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div className="text-orange-400">{children}</div>
    </div>
  );
}

function InsightCard({ title, children, accent = "orange", icon = "!" }: { title: string; children: React.ReactNode; accent?: string; icon?: string }) {
  return (
    <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs font-bold">{icon}</span>
        <div>
          <h4 className="font-bold text-orange-400 mb-2">{title}</h4>
          <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function MixedConvection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 7
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Mixed Convection</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">강제 대류와 자연 대류가 함께 작용하는 경우</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              강제 대류와 자연 대류가 비슷한 크기일 때, 두 효과를 모두 고려해야 합니다.
              <strong className="text-white"> Gr/Re²</strong> 비율이 이를 판단하는 기준이 됩니다.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">판단 기준</h4>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">조건</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">지배 메커니즘</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4"><Math tex="Gr/Re^2 \\ll 1" /></td>
                      <td className="py-3 px-4 text-cyan-400">강제 대류 지배 (자연 대류 무시)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4"><Math tex="Gr/Re^2 \\gg 1" /></td>
                      <td className="py-3 px-4 text-orange-400">자연 대류 지배 (강제 대류 무시)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4"><Math tex="Gr/Re^2 \\approx 1" /></td>
                      <td className="py-3 px-4 text-yellow-400">혼합 대류 (둘 다 고려)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <EquationBox label="혼합 대류 상관식 (근사)">
              <Math tex="Nu^n = Nu_{forced}^n \\pm Nu_{natural}^n" display />
            </EquationBox>
            <p className="text-sm text-gray-500 mt-4 text-center">
              (+): 동일 방향 유동 (assisting flow), (-): 반대 방향 유동 (opposing flow), n ≈ 3~4
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-8">
            <InsightCard title="Assisting vs Opposing Flow" icon="↕">
              <p className="mb-2">
                <strong className="text-emerald-400">Assisting flow:</strong> 부력이 강제 유동을 도움 (예: 뜨거운 수직면에서 위로 향하는 유동)
              </p>
              <p>
                <strong className="text-red-400">Opposing flow:</strong> 부력이 강제 유동을 방해 (예: 뜨거운 수직면에서 아래로 향하는 유동)
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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

function KeyConceptCard({ title, children, accent = "emerald" }: { title: string; children: React.ReactNode; accent?: string }) {
  const borderColor = accent === "emerald" ? "border-emerald-500/20" : accent === "teal" ? "border-teal-500/20" : "border-slate-700";
  const textColor = accent === "emerald" ? "text-emerald-400" : accent === "teal" ? "text-teal-400" : "text-gray-400";
  return (
    <div className={`p-4 rounded-xl bg-slate-800/30 border ${borderColor}`}>
      <h4 className={`text-sm font-bold ${textColor} mb-2`}>{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Week9Summary() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Week 9 요약</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">대류 열전달의 핵심 개념과 무차원 수를 정리합니다.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 무차원 수 요약 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 text-center">핵심 무차원 수 (Dimensionless Numbers)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Number</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Definition</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Physical Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-emerald-400">Reynolds (Re)</td>
                      <td className="py-3 px-4"><Math tex="\\frac{\\rho V L}{\\mu} = \\frac{VL}{\\nu}" /></td>
                      <td className="py-3 px-4">관성력 / 점성력</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-teal-400">Prandtl (Pr)</td>
                      <td className="py-3 px-4"><Math tex="\\frac{\\nu}{\\alpha} = \\frac{\\mu c_p}{k}" /></td>
                      <td className="py-3 px-4">운동량 확산 / 열 확산</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">Nusselt (Nu)</td>
                      <td className="py-3 px-4"><Math tex="\\frac{hL}{k}" /></td>
                      <td className="py-3 px-4">대류 / 전도 (무차원 h)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-blue-400">Stanton (St)</td>
                      <td className="py-3 px-4"><Math tex="\\frac{Nu}{Re \\cdot Pr} = \\frac{h}{\\rho V c_p}" /></td>
                      <td className="py-3 px-4">실제 열전달 / 유체 열용량</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 경계층 요약 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-teal-400 mb-6 text-center">경계층 (Boundary Layer)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-emerald-400 mb-2">속도 경계층 두께</h4>
                  <Math tex="\\delta \\sim \\frac{x}{\\sqrt{Re_x}}" display />
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h4 className="text-sm font-bold text-teal-400 mb-2">열 경계층 두께</h4>
                  <Math tex="\\delta_t \\sim \\frac{\\delta}{Pr^{1/3}}" display />
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4 text-center">
                <Math tex="Pr > 1" />: <Math tex="\\delta_t < \\delta" /> (대부분 액체) &nbsp;|&nbsp;
                <Math tex="Pr < 1" />: <Math tex="\\delta_t > \\delta" /> (액체 금속)
              </p>
            </div>
          </motion.div>

          {/* 핵심 개념 카드 */}
          <motion.div {...fadeUp} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">핵심 개념</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <KeyConceptCard title="1. Newton의 냉각 법칙" accent="emerald">
                <Math tex="q = hA(T_s - T_\\infty)" />. h는 유동 조건, 형상, 유체 물성에 의존.
              </KeyConceptCard>
              <KeyConceptCard title="2. 층류 vs 난류" accent="teal">
                평판: <Math tex="Re_{cr} \\approx 5 \\times 10^5" />. 난류에서 열전달 계수가 훨씬 큼.
              </KeyConceptCard>
              <KeyConceptCard title="3. 대류 상관식 형태" accent="emerald">
                <Math tex="Nu = C \\cdot Re^m \\cdot Pr^n" />. C, m, n은 형상과 유동 조건에 따라 결정.
              </KeyConceptCard>
              <KeyConceptCard title="4. 물성치 평가 온도" accent="teal">
                막 온도 <Math tex="T_f = (T_s + T_\\infty)/2" /> 또는 평균 온도에서 물성치 평가.
              </KeyConceptCard>
            </div>
          </motion.div>

          {/* 다음 주 예고 */}
          <motion.div {...fadeUp}>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-4">Next Week Preview</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-teal-400">Week 10: External Flow</strong>
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>평판 위 유동 (Flat Plate)</li>
                <li>실린더, 구 주위 유동</li>
                <li>튜브 뱅크 열전달</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

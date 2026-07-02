"use client";

import { motion } from "framer-motion";
import Math from "@/components/Math";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function KeyConceptCard({
  title,
  children,
  accent = "cyan",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "cyan" ? "border-cyan-500/20" : accent === "orange" ? "border-orange-500/20" : accent === "blue" ? "border-blue-500/20" : accent === "emerald" ? "border-emerald-500/20" : "border-slate-700";
  const textColor = accent === "cyan" ? "text-cyan-400" : accent === "orange" ? "text-orange-400" : accent === "blue" ? "text-blue-400" : accent === "emerald" ? "text-emerald-400" : "text-gray-400";
  return (
    <div className={`p-4 rounded-xl bg-slate-800/30 border ${borderColor}`}>
      <h4 className={`text-sm font-bold ${textColor} mb-2`}>{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Week11Summary() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Week 11 Summary
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            내부 유동 열전달의 핵심 개념과 공식을 정리합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 핵심 정의 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center">
                핵심 정의
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">개념</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">정의/공식</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">비고</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">평균 온도 <Math tex="T_m" /></td>
                      <td className="py-3 px-4"><Math tex="T_m = \\frac{1}{\\dot{m}c_p}\\int \\rho u c_p T \\, dA_c" /></td>
                      <td className="py-3 px-4">Bulk temperature</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">유체역학적 입구 길이</td>
                      <td className="py-3 px-4"><Math tex="x_{fd,h}/D \\approx 0.05 Re_D" /> (층류)</td>
                      <td className="py-3 px-4">난류: 10~60</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">열적 입구 길이</td>
                      <td className="py-3 px-4"><Math tex="x_{fd,t}/D \\approx 0.05 Re_D \\cdot Pr" /> (층류)</td>
                      <td className="py-3 px-4">난류: 10~60</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-orange-400">수력 직경</td>
                      <td className="py-3 px-4"><Math tex="D_h = 4A_c / P" /></td>
                      <td className="py-3 px-4">비원형 단면</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 경계조건별 특성 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-6 text-center">
                경계조건별 특성
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">조건</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="T_m(x)" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="Nu_D" /> (층류)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-cyan-400"><Math tex="q''_s = \\text{const}" /></td>
                      <td className="py-4 px-4">선형 증가<br /><Math tex="T_m = T_{m,i} + \\frac{q''_s P x}{\\dot{m}c_p}" /></td>
                      <td className="py-4 px-4 text-xl font-bold text-cyan-400">4.36</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-orange-400"><Math tex="T_s = \\text{const}" /></td>
                      <td className="py-4 px-4">지수적 접근<br /><Math tex="\\frac{T_s-T_m}{T_s-T_{m,i}} = e^{-hPx/(\\dot{m}c_p)}" /></td>
                      <td className="py-4 px-4 text-xl font-bold text-orange-400">3.66</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 난류 상관식 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 text-center">
                난류 상관식
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20">
                  <p className="text-cyan-400 font-bold mb-2">Dittus-Boelter</p>
                  <Math tex={`Nu_D = 0.023 Re_D^{0.8} Pr^n`} display />
                  <p className="text-xs text-gray-500 mt-2">n = 0.4 (가열), 0.3 (냉각); Re &ge; 10000</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-orange-500/20">
                  <p className="text-orange-400 font-bold mb-2">Sieder-Tate</p>
                  <Math tex={`Nu_D = 0.027 Re_D^{0.8} Pr^{1/3} \\left(\\frac{\\mu}{\\mu_s}\\right)^{0.14}`} display />
                  <p className="text-xs text-gray-500 mt-2">점도 변화가 큰 유체 (오일)</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-emerald-500/20">
                  <p className="text-emerald-400 font-bold mb-2">Gnielinski (권장)</p>
                  <Math tex={`Nu_D = \\frac{(f/8)(Re_D - 1000)Pr}{1 + 12.7(f/8)^{1/2}(Pr^{2/3}-1)}`} display />
                  <p className="text-xs text-gray-500 mt-2">Re &ge; 3000 (천이 영역 포함); <Math tex="f = (0.790\\ln Re_D - 1.64)^{-2}" /></p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LMTD */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-blue-400 mb-6 text-center">
                Log Mean Temperature Difference
              </h3>

              <div className="text-center p-6 rounded-xl bg-slate-950/80 border border-blue-500/30 mb-4">
                <Math tex={`\\Delta T_{lm} = \\frac{\\Delta T_o - \\Delta T_i}{\\ln(\\Delta T_o / \\Delta T_i)} = \\frac{(T_s-T_{m,o}) - (T_s-T_{m,i})}{\\ln\\frac{T_s-T_{m,o}}{T_s-T_{m,i}}}`} display />
              </div>

              <div className="text-center p-4 rounded-xl bg-slate-900/50">
                <p className="text-blue-400 font-bold mb-2">총 열전달량</p>
                <Math tex={`q = \\dot{m}c_p(T_{m,o}-T_{m,i}) = \\bar{h}A_s \\Delta T_{lm}`} display />
              </div>
            </div>
          </motion.div>

          {/* 핵심 개념 카드 */}
          <motion.div {...fadeUp} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">핵심 개념</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <KeyConceptCard title="1. Mean Temperature" accent="cyan">
                <p>
                  내부 유동에서 열전달의 기준은 <Math tex="T_m" /> (bulk temperature).<br />
                  <Math tex="q''_s = h(T_s - T_m)" />
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="2. Fully Developed Flow" accent="cyan">
                <p>
                  <Math tex="\\partial u/\\partial x = 0" />, h가 일정.<br />
                  Nu는 Re, Pr에 무관 (층류)
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="3. Velocity Profile" accent="orange">
                <p>
                  층류: 포물선 (<Math tex="u_{max}=2u_m" />)<br />
                  난류: 더 균일 (1/7 power law)
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="4. Entry Effects" accent="orange">
                <p>
                  입구에서 Nu가 높고 점차 감소.<br />
                  짧은 관: 평균 Nu 사용
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="5. Correlation Selection" accent="blue">
                <p>
                  층류: 3.66/4.36<br />
                  난류: Gnielinski (가장 정확)
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="6. Design Considerations" accent="blue">
                <p>
                  Const q&apos;&apos;s: 출구에서 T_s 최대<br />
                  Const Ts: LMTD 사용
                </p>
              </KeyConceptCard>
            </div>
          </motion.div>

          {/* 문제 풀이 전략 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 text-center">
                Problem-Solving Checklist
              </h3>

              <ol className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">1</span>
                  <span>물성치 결정을 위한 <strong className="text-white">평균 온도 가정</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">2</span>
                  <span><Math tex="Re_D" /> 계산 → <strong className="text-white">층류/난류 판별</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">3</span>
                  <span>L/D 확인 → <strong className="text-white">완전 발달 여부</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">4</span>
                  <span>경계조건 확인 → <strong className="text-white">Const Ts or q&apos;&apos;s</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">5</span>
                  <span>적절한 상관식 → <strong className="text-white">Nu, h 계산</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">6</span>
                  <span>에너지 균형 → <strong className="text-white">Tm,o or q 계산</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">7</span>
                  <span><strong className="text-white">가정 검증</strong> 및 필요시 반복</span>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Quick Reference */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Quick Reference</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <h4 className="text-cyan-400 font-bold mb-3">층류 (Re &lt; 2300)</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>Const Ts: Nu = 3.66</li>
                    <li>Const q&apos;&apos;: Nu = 4.36</li>
                    <li><Math tex="x_{fd,h}/D = 0.05 Re" /></li>
                    <li><Math tex="x_{fd,t}/D = 0.05 Re \\cdot Pr" /></li>
                    <li><Math tex="f = 64/Re" /></li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <h4 className="text-orange-400 font-bold mb-3">난류 (Re &gt; 10000)</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>Dittus-Boelter: <Math tex="0.023Re^{0.8}Pr^n" /></li>
                    <li>Gnielinski: 천이 영역 포함</li>
                    <li><Math tex="x_{fd}/D \\approx 10 \\sim 60" /></li>
                    <li><Math tex="f = 0.316 Re^{-1/4}" /> (Blasius)</li>
                    <li>Nu가 Re, Pr에 강하게 의존</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 다음 주 예고 */}
          <motion.div {...fadeUp}>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-4">Next Week Preview</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-cyan-400">Week 12: Free Convection</strong>
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>자연 대류의 원리와 Grashof Number</li>
                <li>수직/수평 평판, 실린더의 자연 대류</li>
                <li>밀폐 공간에서의 자연 대류</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

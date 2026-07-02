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
  accent = "red",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "red" ? "border-red-500/20" : accent === "orange" ? "border-orange-500/20" : accent === "blue" ? "border-blue-500/20" : "border-slate-700";
  const textColor = accent === "red" ? "text-red-400" : accent === "orange" ? "text-orange-400" : accent === "blue" ? "text-blue-400" : "text-gray-400";
  return (
    <div className={`p-4 rounded-xl bg-slate-800/30 border ${borderColor}`}>
      <h4 className={`text-sm font-bold ${textColor} mb-2`}>{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Week3Summary() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Week 3 요약
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            1차원 정상상태 전도의 핵심 개념과 공식을 정리합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 열저항 공식 요약 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-red-400 mb-6 text-center">
                전도 열저항 공식 (Summary)
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Geometry</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Temperature</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="R_{t,cond}" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="q" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-red-400">Plane Wall</td>
                      <td className="py-4 px-4"><Math tex="T(x) = T_1 + (T_2-T_1)\\frac{x}{L}" /></td>
                      <td className="py-4 px-4"><Math tex="\\frac{L}{kA}" /></td>
                      <td className="py-4 px-4"><Math tex="\\frac{kA(T_1-T_2)}{L}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-orange-400">Cylinder</td>
                      <td className="py-4 px-4"><Math tex="T(r) = T_1 + (T_2-T_1)\\frac{\\ln(r/r_1)}{\\ln(r_2/r_1)}" /></td>
                      <td className="py-4 px-4"><Math tex="\\frac{\\ln(r_2/r_1)}{2\\pi kL}" /></td>
                      <td className="py-4 px-4"><Math tex="\\frac{2\\pi kL(T_1-T_2)}{\\ln(r_2/r_1)}" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-blue-400">Sphere</td>
                      <td className="py-4 px-4"><Math tex="T(r) = T_1 - (T_1-T_2)\\frac{1/r_1 - 1/r}{1/r_1 - 1/r_2}" /></td>
                      <td className="py-4 px-4"><Math tex="\\frac{1}{4\\pi k}\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right)" /></td>
                      <td className="py-4 px-4"><Math tex="\\frac{4\\pi k r_1 r_2(T_1-T_2)}{r_2-r_1}" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 대류 열저항 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-6 text-center">
                대류 열저항
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Geometry</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="R_{t,conv}" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-red-400">Plane Wall</td>
                      <td className="py-3 px-4"><Math tex="\\frac{1}{hA}" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">Cylinder (at radius r)</td>
                      <td className="py-3 px-4"><Math tex="\\frac{1}{h(2\\pi rL)}" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-blue-400">Sphere (at radius r)</td>
                      <td className="py-3 px-4"><Math tex="\\frac{1}{h(4\\pi r^2)}" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 핵심 개념 카드 */}
          <motion.div {...fadeUp} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">핵심 개념</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <KeyConceptCard title="1. 열저항 회로 유추" accent="red">
                <p><Math tex="q = \\Delta T / R_{tot}" />. 직렬: <Math tex="R_{tot} = \\Sigma R_i" />, 병렬: <Math tex="1/R_{eq} = \\Sigma(1/R_i)" /></p>
              </KeyConceptCard>

              <KeyConceptCard title="2. 총괄 열전달 계수 U" accent="red">
                <p><Math tex="q = UA\\Delta T" />. <Math tex="U = 1/(R_{tot} \\cdot A)" />로 전체 열전달 성능을 하나의 계수로 표현.</p>
              </KeyConceptCard>

              <KeyConceptCard title="3. 온도 분포 패턴" accent="orange">
                <p>평판: 선형(x), 원통: 로그(ln r), 구: 쌍곡선(1/r). 면적 변화가 분포 형태를 결정.</p>
              </KeyConceptCard>

              <KeyConceptCard title="4. 임계 단열 반경" accent="orange">
                <p>원통: <Math tex="r_{cr} = k/h" />, 구: <Math tex="r_{cr} = 2k/h" />. 이보다 작으면 단열재가 오히려 열손실 증가!</p>
              </KeyConceptCard>

              <KeyConceptCard title="5. 접촉 열저항" accent="blue">
                <p><Math tex="R''_{t,c}" /> [m²·K/W]. 표면 거칠기, 접촉 압력, 틈새 물질에 의존. TIM으로 10배 이상 감소 가능.</p>
              </KeyConceptCard>

              <KeyConceptCard title="6. 저항 지배 원칙" accent="blue">
                <p>직렬 연결에서 가장 큰 저항이 전체를 지배. 열전달 개선은 지배 저항 감소에 집중!</p>
              </KeyConceptCard>
            </div>
          </motion.div>

          {/* 문제 풀이 전략 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 text-center">
                Problem-Solving Strategy
              </h3>

              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">형상 파악:</strong> 평판/원통/구 중 어떤 형상인가? 1D 가정이 유효한가?
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">열저항 회로 구성:</strong> 각 층과 대류를 열저항으로 변환. 직렬/병렬 연결 파악.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">총 열저항 계산:</strong> 직렬은 합산, 병렬은 역수의 합.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">열전달률 계산:</strong> <Math tex="q = \\Delta T_{overall} / R_{tot}" />
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">온도 분포:</strong> 필요시 각 경계면 온도 계산. <Math tex="\\Delta T_i = q \\cdot R_i" />
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* 다음 주 예고 */}
          <motion.div {...fadeUp}>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-4">Next Week Preview</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-red-400">Week 4: 1-D Steady Conduction II</strong>
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Extended Surfaces (Fins) - 핀 열전달</li>
                <li>Fin Efficiency and Effectiveness</li>
                <li>Fin Arrays and Thermal Enhancement</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

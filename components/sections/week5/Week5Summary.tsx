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
  accent = "blue",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "blue" ? "border-blue-500/20" : accent === "orange" ? "border-orange-500/20" : accent === "emerald" ? "border-emerald-500/20" : accent === "purple" ? "border-purple-500/20" : "border-slate-700";
  const textColor = accent === "blue" ? "text-blue-400" : accent === "orange" ? "text-orange-400" : accent === "emerald" ? "text-emerald-400" : accent === "purple" ? "text-purple-400" : "text-gray-400";
  return (
    <div className={`p-4 rounded-xl bg-slate-800/30 border ${borderColor}`}>
      <h4 className={`text-sm font-bold ${textColor} mb-2`}>{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Week5Summary() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Week 5 요약
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            2차원 정상상태 전도의 유한 차분법 핵심 개념을 정리합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 핵심 방정식 요약 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-blue-400 mb-6 text-center">
                유한 차분 방정식 요약
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">미분</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">차분 근사</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">정확도</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-orange-400">1차 미분 (Forward)</td>
                      <td className="py-4 px-4"><Math tex="(T_{i+1} - T_i) / \Delta x" /></td>
                      <td className="py-4 px-4"><Math tex="O(\Delta x)" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-emerald-400">1차 미분 (Central)</td>
                      <td className="py-4 px-4"><Math tex="(T_{i+1} - T_{i-1}) / (2\Delta x)" /></td>
                      <td className="py-4 px-4"><Math tex="O(\Delta x^2)" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-blue-400">2차 미분 (Central)</td>
                      <td className="py-4 px-4"><Math tex="(T_{i+1} - 2T_i + T_{i-1}) / (\Delta x)^2" /></td>
                      <td className="py-4 px-4"><Math tex="O(\Delta x^2)" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 노드 방정식 요약 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 text-center">
                노드 방정식 (정사각형 격자, <Math tex="\Delta x = \Delta y" />)
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">노드 유형</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">방정식</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-emerald-400">내부 노드</td>
                      <td className="py-4 px-4"><Math tex="T_{i,j} = \frac{1}{4}(T_{i+1,j} + T_{i-1,j} + T_{i,j+1} + T_{i,j-1})" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-blue-400">단열 표면</td>
                      <td className="py-4 px-4"><Math tex="2T_{interior} + T_{up} + T_{down} - 4T = 0" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-4 px-4 font-bold text-orange-400">대류 표면</td>
                      <td className="py-4 px-4"><Math tex="2T_{interior} + T_{up} + T_{down} + 2Bi \cdot T_\infty - 2(2+Bi)T = 0" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-purple-400">외부 모서리 (대류)</td>
                      <td className="py-4 px-4"><Math tex="T_{adj1} + T_{adj2} + 2Bi \cdot T_\infty - 2(1+Bi)T = 0" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-400 mt-6 text-center">
                <Math tex="Bi = h\Delta x / k" /> (격자 Biot 수)
              </p>
            </div>
          </motion.div>

          {/* 핵심 개념 카드 */}
          <motion.div {...fadeUp} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">핵심 개념</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <KeyConceptCard title="1. 이산화 (Discretization)" accent="blue">
                <p>연속 영역을 유한 개의 노드로 분할. 연속 함수 <Math tex="T(x,y)" />를 이산 값 <Math tex="T_{i,j}" />로 근사.</p>
              </KeyConceptCard>

              <KeyConceptCard title="2. Taylor 급수 기반" accent="blue">
                <p>미분을 Taylor 급수로 전개하여 차분으로 근사. 고차 항 무시가 절단 오차 발생.</p>
              </KeyConceptCard>

              <KeyConceptCard title="3. 에너지 균형 접근법" accent="emerald">
                <p>각 노드 주위 제어 체적에 <Math tex="\sum \dot{Q}_{in} = 0" /> 적용. 물리적으로 직관적이며 경계조건 처리에 유리.</p>
              </KeyConceptCard>

              <KeyConceptCard title="4. 5점 스텐실" accent="emerald">
                <p>2-D 내부 노드는 중심 + 동서남북 4개 인접 노드 사용. 희소 행렬 구조 형성.</p>
              </KeyConceptCard>

              <KeyConceptCard title="5. Gauss-Seidel 반복법" accent="orange">
                <p>새로 계산된 값을 즉시 사용하여 수렴 가속. 대각 우세 행렬에서 수렴 보장.</p>
              </KeyConceptCard>

              <KeyConceptCard title="6. 수렴 기준" accent="orange">
                <p><Math tex="\max|T^{(k+1)} - T^{(k)}| < \epsilon" />로 수렴 판정. <Math tex="\epsilon = 10^{-4} \sim 10^{-6}" /> 일반적.</p>
              </KeyConceptCard>
            </div>
          </motion.div>

          {/* 문제 풀이 전략 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-purple-400 mb-6 text-center">
                Problem-Solving Strategy
              </h3>

              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">격자 설정:</strong> 영역을 균일 격자로 분할. 정사각형 격자 (<Math tex="\Delta x = \Delta y" />) 권장.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">노드 분류:</strong> 내부 노드, 경계 노드 (등온, 단열, 대류), 모서리 노드 구분.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">방정식 작성:</strong> 각 미지 노드에서 에너지 균형 적용. 경계조건 반영.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">연립방정식 구성:</strong> <Math tex="\mathbf{A}\mathbf{T} = \mathbf{b}" /> 형태로 정리.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">풀이:</strong> Gauss-Seidel 반복 또는 직접법(Gaussian elimination). 수렴 모니터링.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">6</span>
                  <div>
                    <strong className="text-white">검증:</strong> 에너지 균형 확인, 대칭성 확인, 격자 독립성 검토.
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* 실무 적용 팁 */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-6 text-center">
                실무 적용 팁
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                  <h4 className="text-sm font-bold text-yellow-400 mb-2">격자 정밀화</h4>
                  <p className="text-sm text-gray-400">
                    <Math tex="\Delta x" />를 절반으로 줄여 해가 크게 변하지 않으면 격자 독립성 확보.
                    리차드슨 외삽법으로 정확도 향상 가능.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                  <h4 className="text-sm font-bold text-yellow-400 mb-2">대칭성 활용</h4>
                  <p className="text-sm text-gray-400">
                    대칭 문제에서 계산 영역을 절반/사분면으로 줄여 효율 향상.
                    대칭면은 단열 경계로 처리.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                  <h4 className="text-sm font-bold text-yellow-400 mb-2">초기 추정값</h4>
                  <p className="text-sm text-gray-400">
                    좋은 초기 추정값은 수렴 속도 향상. 경계 온도의 평균이나 선형 보간값 사용.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                  <h4 className="text-sm font-bold text-yellow-400 mb-2">소프트웨어</h4>
                  <p className="text-sm text-gray-400">
                    MATLAB, Python (NumPy/SciPy), Excel로 구현 가능.
                    대규모 문제는 상용 CFD 소프트웨어 활용.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 다음 주 예고 */}
          <motion.div {...fadeUp}>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-4">Next Week Preview</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-blue-400">Week 6: Transient Conduction</strong>
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Lumped Capacitance Method</li>
                <li>Biot Number and Validity</li>
                <li>Transient Conduction in Semi-Infinite Solids</li>
                <li>Heisler Charts</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

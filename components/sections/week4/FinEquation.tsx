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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "orange",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "red" ? "border-red-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "blue" ? "border-blue-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div className={`text-${accent}-400`}>
        {children}
      </div>
    </div>
  );
}

function InsightCard({
  title,
  children,
  accent = "orange",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
  };
  const c = colors[accent] || colors.orange;
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

export default function FinEquation() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fin Equation Derivation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            핀 방정식을 유도하고 일반해를 구합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 문제 설정 */}
          <SectionDivider number="1" title="Problem Setup" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              균일한 단면적 <Math tex="A_c" />와 둘레 <Math tex="P" />를 가진 직선 핀을 고려합니다.
              핀의 베이스(x=0)는 온도 <Math tex="T_b" />인 벽면에 부착되어 있고, 주위 유체 온도는 <Math tex="T_\infty" />입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                기하학적 정의
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">&bull;</span>
                    <span><Math tex="A_c" />: 핀의 단면적 (cross-sectional area)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">&bull;</span>
                    <span><Math tex="P" />: 핀의 둘레 (perimeter)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">&bull;</span>
                    <span><Math tex="L" />: 핀의 길이 (length)</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">&bull;</span>
                    <span><Math tex="T_b" />: 핀 베이스 온도</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">&bull;</span>
                    <span><Math tex="T_\infty" />: 주위 유체 온도</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">&bull;</span>
                    <span><Math tex="h" />: 대류 열전달 계수</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                일반적인 핀 단면의 예
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">단면 형상</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="A_c" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="P" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">직사각형 (w x t)</td>
                      <td className="py-3 px-4"><Math tex="w \cdot t" /></td>
                      <td className="py-3 px-4"><Math tex="2(w + t) \approx 2w" /> (if w &gt;&gt; t)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">원형 (직경 D)</td>
                      <td className="py-3 px-4"><Math tex="\pi D^2/4" /></td>
                      <td className="py-3 px-4"><Math tex="\pi D" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">환형 (반경 r, 두께 t)</td>
                      <td className="py-3 px-4"><Math tex="2\pi r \cdot t" /></td>
                      <td className="py-3 px-4"><Math tex="4\pi r" /> (양면)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 2. 에너지 밸런스 */}
          <SectionDivider number="2" title="Energy Balance on Differential Element" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀의 미소 요소 <Math tex="dx" />에 대해 에너지 밸런스를 적용합니다.
              정상 상태에서 들어오는 열 = 나가는 열입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                에너지 밸런스
              </h4>

              <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                <div className="p-4 rounded-xl bg-slate-900/50 text-center">
                  <p className="text-emerald-400 font-bold mb-2">In</p>
                  <Math tex="q_x" />
                  <p className="text-gray-500 mt-1">x에서 전도 열전달</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 text-center">
                  <p className="text-red-400 font-bold mb-2">Out (전도)</p>
                  <Math tex="q_{x+dx}" />
                  <p className="text-gray-500 mt-1">x+dx에서 전도 열전달</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 text-center">
                  <p className="text-red-400 font-bold mb-2">Out (대류)</p>
                  <Math tex="dq_{conv}" />
                  <p className="text-gray-500 mt-1">표면에서 대류 열전달</p>
                </div>
              </div>

              <EquationBox label="에너지 밸런스">
                <Math tex={`q_x = q_{x+dx} + dq_{conv}`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                각 항의 표현
              </h4>

              <div className="space-y-4">
                <EquationBox label="전도 열전달 (Fourier 법칙)">
                  <Math tex={`q_x = -kA_c \\frac{dT}{dx}`} display />
                </EquationBox>

                <EquationBox label="Taylor 전개">
                  <Math tex={`q_{x+dx} = q_x + \\frac{dq_x}{dx}dx = q_x + \\frac{d}{dx}\\left(-kA_c\\frac{dT}{dx}\\right)dx`} display />
                </EquationBox>

                <EquationBox label="대류 열전달 (미소 표면적에서)">
                  <Math tex={`dq_{conv} = h \\cdot dA_s \\cdot (T - T_\\infty) = h \\cdot P \\cdot dx \\cdot (T - T_\\infty)`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          {/* 3. 핀 방정식 유도 */}
          <SectionDivider number="3" title="Derivation of the Fin Equation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              에너지 밸런스 식에 각 항을 대입하여 정리합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                유도 과정
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">에너지 밸런스에 대입:</p>
                  <Math tex={`q_x = q_x + \\frac{d}{dx}\\left(-kA_c\\frac{dT}{dx}\\right)dx + hP\\,dx\\,(T - T_\\infty)`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">정리하면:</p>
                  <Math tex={`-\\frac{d}{dx}\\left(kA_c\\frac{dT}{dx}\\right)dx = hP\\,dx\\,(T - T_\\infty)`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">dx로 나누고, k와 <Math tex="A_c" />가 상수일 때:</p>
                  <Math tex={`\\frac{d^2T}{dx^2} = \\frac{hP}{kA_c}(T - T_\\infty)`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="초과 온도 (Excess Temperature) 정의" accent="blue" icon="theta">
              <p className="mb-2">
                해석을 단순화하기 위해 <strong className="text-blue-300">초과 온도</strong> <Math tex="\theta" />를 정의합니다:
              </p>
              <Math tex={`\\theta(x) \\equiv T(x) - T_\\infty`} display />
              <p className="mt-2">
                <Math tex="T_\infty" />가 상수이므로: <Math tex="d\theta/dx = dT/dx" />, <Math tex="d^2\theta/dx^2 = d^2T/dx^2" />
              </p>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                The Fin Equation
              </h4>

              <EquationBox label="핀 방정식 (기본 형태)" accent="red">
                <Math tex={`\\frac{d^2\\theta}{dx^2} - m^2\\theta = 0`} display />
              </EquationBox>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400 mb-2">여기서:</p>
                <EquationBox label="핀 파라미터 m" accent="orange">
                  <Math tex={`m^2 = \\frac{hP}{kA_c} \\quad \\Rightarrow \\quad m = \\sqrt{\\frac{hP}{kA_c}}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="m의 물리적 의미" accent="orange" icon="m">
              <p className="mb-2">
                <Math tex="m" />은 <strong className="text-orange-300">[1/m] = [m^{-1}]</strong> 단위를 가지며, 핀의 열적 특성을 나타냅니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-white">큰 m:</strong> 대류가 강하거나, 단면적이 작거나, k가 낮음 &rarr; 온도가 빨리 감소</li>
                <li>&bull; <strong className="text-white">작은 m:</strong> 대류가 약하거나, 단면적이 크거나, k가 높음 &rarr; 온도가 천천히 감소</li>
                <li>&bull; <Math tex="mL" />은 무차원 핀 길이로, 핀의 열적 성능을 특징짓는 중요한 파라미터</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 4. 일반해 */}
          <SectionDivider number="4" title="General Solution" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀 방정식 <Math tex="d^2\theta/dx^2 - m^2\theta = 0" />은 <strong className="text-white">2차 선형 상미분 방정식</strong>입니다.
              특성 방정식을 통해 일반해를 구합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                일반해 유도
              </h4>

              <div className="space-y-4">
                <EquationBox label="특성 방정식">
                  <Math tex={`\\lambda^2 - m^2 = 0 \\quad \\Rightarrow \\quad \\lambda = \\pm m`} display />
                </EquationBox>

                <EquationBox label="일반해 (지수 함수 형태)" accent="red">
                  <Math tex={`\\theta(x) = C_1 e^{mx} + C_2 e^{-mx}`} display />
                </EquationBox>

                <div className="text-center text-gray-500 py-2">또는 동등하게:</div>

                <EquationBox label="일반해 (쌍곡선 함수 형태)" accent="red">
                  <Math tex={`\\theta(x) = C_3 \\cosh(mx) + C_4 \\sinh(mx)`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                쌍곡선 함수 정의
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <div className="p-3 rounded-lg bg-slate-900/50">
                  <Math tex={`\\cosh(x) = \\frac{e^x + e^{-x}}{2}`} display />
                </div>
                <div className="p-3 rounded-lg bg-slate-900/50">
                  <Math tex={`\\sinh(x) = \\frac{e^x - e^{-x}}{2}`} display />
                </div>
                <div className="p-3 rounded-lg bg-slate-900/50">
                  <Math tex={`\\frac{d}{dx}\\cosh(x) = \\sinh(x)`} display />
                </div>
                <div className="p-3 rounded-lg bg-slate-900/50">
                  <Math tex={`\\frac{d}{dx}\\sinh(x) = \\cosh(x)`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="두 형태의 관계" accent="blue" icon="=">
              <p className="mb-2">
                지수 함수와 쌍곡선 함수 형태는 수학적으로 동등합니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <Math tex="C_3 = C_1 + C_2" /></li>
                <li>&bull; <Math tex="C_4 = C_1 - C_2" /></li>
              </ul>
              <p className="mt-2">
                경계 조건에 따라 더 편리한 형태를 선택합니다. 일반적으로 쌍곡선 함수 형태가
                유한 핀에서 더 편리합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 경계 조건 필요성 */}
          <SectionDivider number="5" title="Need for Boundary Conditions" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              2차 미분 방정식의 일반해에는 2개의 적분 상수(<Math tex="C_1, C_2" /> 또는 <Math tex="C_3, C_4" />)가 있습니다.
              이를 결정하기 위해 <strong className="text-white">2개의 경계 조건</strong>이 필요합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                경계 조건
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-900/50 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-3">Base (x = 0)</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    핀 베이스는 벽면에 부착되어 있으므로 온도가 지정됩니다:
                  </p>
                  <Math tex={`\\theta(0) = T_b - T_\\infty = \\theta_b`} display />
                </div>

                <div className="p-5 rounded-xl bg-slate-900/50 border border-yellow-500/20">
                  <h5 className="text-yellow-400 font-bold mb-3">Tip (x = L)</h5>
                  <p className="text-sm text-gray-400 mb-2">
                    핀 끝단의 조건은 물리적 상황에 따라 여러 가지가 가능합니다:
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>&bull; 대류 열전달</li>
                    <li>&bull; 단열 (adiabatic)</li>
                    <li>&bull; 지정 온도</li>
                    <li>&bull; 무한 핀</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="다음 섹션 예고" accent="red" icon="&rarr;">
              <p>
                다음 섹션에서 4가지 다른 핀 끝단 경계 조건에 대한 해를 구하고,
                각 경우의 온도 분포와 열전달률 공식을 유도합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. 단면적이 변하는 경우 */}
          <SectionDivider number="6" title="Variable Cross-Section (Optional)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              단면적 <Math tex="A_c(x)" />가 x에 따라 변하는 경우(예: 삼각형 핀, 원뿔형 핀),
              핀 방정식은 더 복잡해집니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-6">
                일반적인 핀 방정식 (가변 단면적)
              </h4>

              <EquationBox label="일반 형태">
                <Math tex={`\\frac{d}{dx}\\left(A_c \\frac{d\\theta}{dx}\\right) - \\frac{hP}{k}\\theta = 0`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 mt-6 text-center">
                <Math tex="A_c" />와 <Math tex="P" />가 x의 함수일 때, 해석해를 구하기 어려울 수 있습니다.
                특정 형상(삼각형, 포물선형)에서는 Bessel 함수 등을 사용한 해가 존재합니다.
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                특수 형상의 핀 효율 (미리보기)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">핀 형상</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">핀 효율 <Math tex="\eta_f" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">직사각형 (균일 단면, 단열 끝단)</td>
                      <td className="py-3 px-4"><Math tex="\tanh(mL)/(mL)" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">삼각형</td>
                      <td className="py-3 px-4"><Math tex="I_1(2mL)/[mL \cdot I_0(2mL)]" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">포물선형 (최적)</td>
                      <td className="py-3 px-4"><Math tex="2/[1 + \sqrt{1 + (2mL)^2}]" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                <Math tex="I_0, I_1" />: 수정된 Bessel 함수 (modified Bessel functions)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

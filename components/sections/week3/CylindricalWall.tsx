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
  const borderColor = accent === "red" ? "border-red-500/30" : accent === "orange" ? "border-orange-500/30" : "border-slate-700";
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

export default function CylindricalWall() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 2
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cylindrical Wall (원통)
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            파이프, 원통형 용기 등 축대칭 형상의 1차원 정상상태 전도를 분석합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 문제 설정 */}
          <SectionDivider number="1" title="Problem Setup" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              내경 <Math tex="r_1" />, 외경 <Math tex="r_2" />인 원통 벽의 내부 표면 온도가 <Math tex="T_1" />,
              외부 표면 온도가 <Math tex="T_2" />일 때 (<Math tex="T_1 > T_2" />), 원통을 통한 <strong className="text-white">반경 방향</strong> 열전달을 분석합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                가정 (Assumptions)
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">1.</span>
                    <span><strong className="text-white">1차원 전도:</strong> <Math tex="T = T(r)" /> only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">2.</span>
                    <span><strong className="text-white">정상상태:</strong> <Math tex="\\partial T/\\partial t = 0" /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">3.</span>
                    <span><strong className="text-white">축방향 무한:</strong> 끝단 효과 무시</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">4.</span>
                    <span><strong className="text-white">균일한 k:</strong> <Math tex="k = \\text{const}" /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">5.</span>
                    <span><strong className="text-white">내부 열 생성 없음:</strong> <Math tex="\\dot{q} = 0" /></span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 2. 지배방정식 */}
          <SectionDivider number="2" title="Governing Equation in Cylindrical Coordinates" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              원통 좌표계에서의 열확산 방정식을 적용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                단순화 과정
              </h4>

              <div className="space-y-4">
                <EquationBox label="원통좌표 열확산 방정식 (General)">
                  <Math tex={`\\frac{1}{r}\\frac{\\partial}{\\partial r}\\left(kr\\frac{\\partial T}{\\partial r}\\right) + \\frac{1}{r^2}\\frac{\\partial}{\\partial \\phi}\\left(k\\frac{\\partial T}{\\partial \\phi}\\right) + \\frac{\\partial}{\\partial z}\\left(k\\frac{\\partial T}{\\partial z}\\right) + \\dot{q} = \\rho c_p \\frac{\\partial T}{\\partial t}`} display />
                </EquationBox>

                <div className="text-center text-gray-500 py-2">&darr; 1D (r only), 정상상태, k=const, 발열 없음</div>

                <EquationBox label="단순화된 방정식" accent="red">
                  <Math tex={`\\frac{1}{r}\\frac{d}{dr}\\left(r\\frac{dT}{dr}\\right) = 0`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="평판과의 차이점" accent="blue" icon="?">
              <p>
                평판에서는 <Math tex="d^2T/dx^2 = 0" />이었지만, 원통에서는 <Math tex="(1/r)d/dr(r\\,dT/dr) = 0" />입니다.
                이 차이는 <strong className="text-white">면적이 r에 따라 변하기 때문</strong>입니다.
                원통에서는 반경이 커질수록 열이 통과하는 면적(<Math tex="2\\pi rL" />)이 증가합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. 온도 분포 해 */}
          <SectionDivider number="3" title="Temperature Distribution" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              지배방정식을 적분하여 온도 분포를 구합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <div className="space-y-4">
                <EquationBox label="지배방정식 정리">
                  <Math tex={`\\frac{d}{dr}\\left(r\\frac{dT}{dr}\\right) = 0`} display />
                </EquationBox>

                <EquationBox label="1차 적분">
                  <Math tex={`r\\frac{dT}{dr} = C_1 \\quad \\Rightarrow \\quad \\frac{dT}{dr} = \\frac{C_1}{r}`} display />
                </EquationBox>

                <EquationBox label="2차 적분 (일반해)">
                  <Math tex={`T(r) = C_1 \\ln r + C_2`} display />
                </EquationBox>

                <div className="text-center text-gray-500 py-2">&darr; 경계조건: <Math tex="T(r_1) = T_1" />, <Math tex="T(r_2) = T_2" /></div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">경계조건 적용:</p>
                  <Math tex={`T_1 = C_1 \\ln r_1 + C_2`} display />
                  <Math tex={`T_2 = C_1 \\ln r_2 + C_2`} display />
                  <p className="text-sm text-gray-400 mt-4">빼면:</p>
                  <Math tex={`T_1 - T_2 = C_1(\\ln r_1 - \\ln r_2) = C_1 \\ln\\frac{r_1}{r_2} = -C_1 \\ln\\frac{r_2}{r_1}`} display />
                  <Math tex={`C_1 = \\frac{T_1 - T_2}{\\ln(r_1/r_2)} = -\\frac{T_1 - T_2}{\\ln(r_2/r_1)}`} display />
                </div>

                <EquationBox label="최종 온도 분포" accent="red">
                  <Math tex={`T(r) = T_1 - \\frac{T_1 - T_2}{\\ln(r_2/r_1)}\\ln\\frac{r}{r_1} = T_1 + \\frac{T_2 - T_1}{\\ln(r_2/r_1)}\\ln\\frac{r}{r_1}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="대수적(Logarithmic) 온도 분포" accent="orange" icon="ln">
              <p>
                원통에서 온도 분포는 <strong className="text-white">로그 함수</strong>입니다 (평판의 선형 분포와 대비).
                이는 열이 통과하는 면적이 r에 비례하여 증가하기 때문입니다.
                결과적으로 온도 변화율 <Math tex="|dT/dr|" />은 r이 커질수록 감소합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. 열전달률 */}
          <SectionDivider number="4" title="Heat Transfer Rate" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Fourier 법칙을 적용하여 열전달률을 계산합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <div className="space-y-4">
                <EquationBox label="온도 구배">
                  <Math tex={`\\frac{dT}{dr} = \\frac{T_2 - T_1}{\\ln(r_2/r_1)} \\cdot \\frac{1}{r}`} display />
                </EquationBox>

                <EquationBox label="열유속 (Heat Flux)">
                  <Math tex={`q''_r = -k\\frac{dT}{dr} = -k \\cdot \\frac{T_2 - T_1}{\\ln(r_2/r_1)} \\cdot \\frac{1}{r} = \\frac{k(T_1 - T_2)}{r\\ln(r_2/r_1)}`} display />
                </EquationBox>

                <EquationBox label="열전달률 (반경 r에서의 원통면 통과)" accent="red">
                  <Math tex={`q_r = q''_r \\cdot (2\\pi r L) = \\frac{2\\pi k L(T_1 - T_2)}{\\ln(r_2/r_1)}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="q는 상수, q''은 변함" accent="red" icon="!">
              <p className="mb-2">
                정상상태에서 열전달률 <Math tex="q_r" />는 <strong className="text-white">r에 무관하게 일정</strong>합니다 (에너지 보존).
              </p>
              <p>
                하지만 열유속 <Math tex="q''_r = q_r/(2\\pi rL)" />은 r이 커질수록 <strong className="text-red-300">감소</strong>합니다.
                이는 같은 양의 열이 더 넓은 면적으로 퍼지기 때문입니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 열저항 */}
          <SectionDivider number="5" title="Thermal Resistance for Cylindrical Wall" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              원통 벽의 전도 열저항을 정의합니다. 평판과 형태가 다름에 주의하세요.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                원통 전도 열저항
              </h4>

              <EquationBox label="열전달률 (다시 정리)" accent="orange">
                <Math tex={`q = \\frac{T_1 - T_2}{\\frac{\\ln(r_2/r_1)}{2\\pi k L}}`} display />
              </EquationBox>

              <div className="text-center text-gray-500 py-4">&darr; <Math tex="q = \\Delta T / R_{th}" /> 형태</div>

              <EquationBox label="Conduction Thermal Resistance (Cylinder)" accent="red">
                <Math tex={`R_{t,cond} = \\frac{\\ln(r_2/r_1)}{2\\pi k L} \\quad \\left[\\frac{\\text{K}}{\\text{W}}\\right]`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                평판 vs 원통 열저항 비교
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">형상</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">전도 열저항 <Math tex="R_{t,cond}" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">대류 열저항 <Math tex="R_{t,conv}" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-white">Plane Wall</td>
                      <td className="py-3 px-4"><Math tex="L/(kA)" /></td>
                      <td className="py-3 px-4"><Math tex="1/(hA)" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">Cylinder</td>
                      <td className="py-3 px-4"><Math tex="\\ln(r_2/r_1)/(2\\pi kL)" /></td>
                      <td className="py-3 px-4"><Math tex="1/(h \\cdot 2\\pi rL)" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 6. 대류 경계조건 */}
          <SectionDivider number="6" title="Cylinder with Convection" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              내부 유체(<Math tex="T_{\\infty,1}" />, <Math tex="h_1" />)와 외부 유체(<Math tex="T_{\\infty,2}" />, <Math tex="h_2" />) 사이에
              원통 벽이 있는 경우의 총 열저항을 구합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                직렬 열저항 회로
              </h4>

              <p className="text-sm text-gray-400 mb-6 text-center">
                내부 유체 &rarr; 내면 대류 &rarr; 원통 전도 &rarr; 외면 대류 &rarr; 외부 유체
              </p>

              <EquationBox label="총 열저항">
                <Math tex={`R_{tot} = \\frac{1}{h_1(2\\pi r_1 L)} + \\frac{\\ln(r_2/r_1)}{2\\pi k L} + \\frac{1}{h_2(2\\pi r_2 L)}`} display />
              </EquationBox>

              <EquationBox label="열전달률" accent="red">
                <Math tex={`q = \\frac{T_{\\infty,1} - T_{\\infty,2}}{R_{tot}}`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="면적이 다르다!" accent="yellow" icon="A">
              <p>
                원통에서 주의할 점: 내면 대류 면적은 <Math tex="2\\pi r_1 L" />, 외면 대류 면적은 <Math tex="2\\pi r_2 L" />입니다.
                <strong className="text-yellow-300"> 두 면적이 다르므로</strong>, 총괄 열전달 계수 <Math tex="U" />를 정의할 때
                어느 면적을 기준으로 할지 명시해야 합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 7. 임계 단열 반경 */}
          <SectionDivider number="7" title="Critical Radius of Insulation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              원통형 파이프에 단열재를 추가할 때 흥미로운 현상이 발생합니다.
              단열재 두께가 <strong className="text-white">어느 수준까지는 오히려 열손실이 증가</strong>할 수 있습니다!
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-6">
                임계 반경 유도
              </h4>

              <p className="text-sm text-gray-400 mb-4">
                단열재 외경을 <Math tex="r" />이라 하면, 총 열저항은:
              </p>

              <EquationBox label="총 열저항 (파이프 + 단열재 + 외부 대류)">
                <Math tex={`R_{tot}(r) = \\frac{\\ln(r/r_1)}{2\\pi k_{ins} L} + \\frac{1}{h(2\\pi r L)}`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 my-4 text-center">
                열전달을 최대화(또는 열저항을 최소화)하는 r을 찾기 위해 <Math tex="dR_{tot}/dr = 0" />:
              </p>

              <EquationBox label="미분">
                <Math tex={`\\frac{dR_{tot}}{dr} = \\frac{1}{2\\pi k_{ins} L \\cdot r} - \\frac{1}{h \\cdot 2\\pi L \\cdot r^2} = 0`} display />
              </EquationBox>

              <EquationBox label="임계 반경 (Critical Radius)" accent="red">
                <Math tex={`r_{cr} = \\frac{k_{ins}}{h}`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="임계 반경의 물리적 의미" accent="yellow" icon="!">
              <p className="mb-2">
                <strong className="text-white">단열재를 추가하면 두 가지 상반된 효과</strong>가 있습니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <strong className="text-yellow-300">전도 저항 증가:</strong> 단열재 두께 증가 &rarr; <Math tex="R_{cond} \\uparrow" /></li>
                <li>&bull; <strong className="text-yellow-300">대류 저항 감소:</strong> 외표면적 증가 &rarr; <Math tex="R_{conv} \\downarrow" /></li>
              </ul>
              <p className="mt-2">
                <Math tex="r < r_{cr}" />이면 대류 저항 감소 효과가 더 커서 <strong className="text-red-400">열손실 증가</strong>!
              </p>
              <p className="mt-2">
                <Math tex="r > r_{cr}" />이면 전도 저항 증가 효과가 더 커서 <strong className="text-emerald-400">열손실 감소</strong>.
              </p>
            </InsightCard>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-4">
                실용적 예시
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                일반적인 단열재 (<Math tex="k_{ins} \\approx 0.05" /> W/(m·K))와 자연대류 (<Math tex="h \\approx 5" /> W/(m²·K)):
              </p>
              <Math tex={`r_{cr} = \\frac{0.05}{5} = 0.01 \\, \\text{m} = 10 \\, \\text{mm}`} display />
              <p className="text-sm text-gray-400 mt-4">
                반경이 10mm보다 작은 가느다란 파이프(예: 전선)에서는 단열재 추가가 오히려 열방출을 증가시킬 수 있습니다.
                전자기기 방열에 이 원리가 활용되기도 합니다.
              </p>
            </div>
          </motion.div>

          {/* 8. 예제 */}
          <SectionDivider number="8" title="Example Problem" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 3.2: 단열 파이프
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 내경 50mm, 외경 60mm인 강관(k=50 W/(m·K))에
                  두께 50mm의 단열재(k=0.1 W/(m·K))를 감쌌다.
                  내부 유체 온도 200°C, 외부 공기 온도 25°C일 때 파이프 1m당 열손실을 구하라.
                  (내부 대류계수 <Math tex="h_1 = 100" />, 외부 대류계수 <Math tex="h_2 = 10" /> W/(m²·K))
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">주어진 값 정리</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; <Math tex="r_1 = 25" /> mm, <Math tex="r_2 = 30" /> mm (강관), <Math tex="r_3 = 80" /> mm (단열재 외경)</li>
                    <li>&bull; <Math tex="k_{steel} = 50" /> W/(m·K), <Math tex="k_{ins} = 0.1" /> W/(m·K)</li>
                    <li>&bull; <Math tex="T_{\\infty,1} = 200" />°C, <Math tex="T_{\\infty,2} = 25" />°C, <Math tex="L = 1" /> m</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">풀이: 각 열저항 계산</p>
                  <div className="space-y-2 text-sm">
                    <Math tex={`R_1 = \\frac{1}{h_1 \\cdot 2\\pi r_1 L} = \\frac{1}{100 \\cdot 2\\pi \\cdot 0.025 \\cdot 1} = 0.0637 \\, \\text{K/W}`} display />
                    <Math tex={`R_2 = \\frac{\\ln(r_2/r_1)}{2\\pi k_{st} L} = \\frac{\\ln(30/25)}{2\\pi \\cdot 50 \\cdot 1} = 5.8 \\times 10^{-4} \\, \\text{K/W}`} display />
                    <Math tex={`R_3 = \\frac{\\ln(r_3/r_2)}{2\\pi k_{ins} L} = \\frac{\\ln(80/30)}{2\\pi \\cdot 0.1 \\cdot 1} = 1.56 \\, \\text{K/W}`} display />
                    <Math tex={`R_4 = \\frac{1}{h_2 \\cdot 2\\pi r_3 L} = \\frac{1}{10 \\cdot 2\\pi \\cdot 0.08 \\cdot 1} = 0.199 \\, \\text{K/W}`} display />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">총 열저항 및 열손실</p>
                  <Math tex={`R_{tot} = R_1 + R_2 + R_3 + R_4 = 0.0637 + 0.00058 + 1.56 + 0.199 = 1.82 \\, \\text{K/W}`} display />
                  <Math tex={`q = \\frac{T_{\\infty,1} - T_{\\infty,2}}{R_{tot}} = \\frac{200 - 25}{1.82} = \\boxed{96.2 \\, \\text{W/m}}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="저항 비중 분석" accent="emerald" icon="%">
              <ul className="space-y-1">
                <li>&bull; 내부 대류: 3.5%</li>
                <li>&bull; 강관 전도: 0.03% (무시 가능!)</li>
                <li>&bull; <strong className="text-emerald-300">단열재 전도: 85.7% (지배적)</strong></li>
                <li>&bull; 외부 대류: 10.9%</li>
              </ul>
              <p className="mt-2">
                금속 파이프의 전도 저항은 매우 작아 거의 무시됩니다. 열손실 감소에는 단열재 두께 증가가 가장 효과적입니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

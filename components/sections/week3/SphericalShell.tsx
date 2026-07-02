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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "blue",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "red" ? "border-red-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "orange" ? "border-orange-500/30" : "border-slate-700";
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
  accent = "blue",
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
  const c = colors[accent] || colors.blue;
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

export default function SphericalShell() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Spherical Shell (구)
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            구형 용기, 탱크, 핵연료 펠릿 등 구 대칭 형상의 1차원 정상상태 전도를 분석합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 문제 설정 */}
          <SectionDivider number="1" title="Problem Setup" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              내경 <Math tex="r_1" />, 외경 <Math tex="r_2" />인 구형 쉘(껍질)의 내부 표면 온도가 <Math tex="T_1" />,
              외부 표면 온도가 <Math tex="T_2" />일 때 (<Math tex="T_1 > T_2" />), 구를 통한 <strong className="text-white">반경 방향</strong> 열전달을 분석합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                적용 예시
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&bull;</span>
                    <span>구형 저장 탱크 (LNG, 가스)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&bull;</span>
                    <span>핵연료 펠릿 (UO₂ 소결체)</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&bull;</span>
                    <span>반도체 나노입자</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">&bull;</span>
                    <span>생체세포 열해석</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 2. 지배방정식 */}
          <SectionDivider number="2" title="Governing Equation in Spherical Coordinates" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                구좌표 열확산 방정식
              </h4>

              <div className="space-y-4">
                <EquationBox label="General Form (구좌표)">
                  <Math tex={`\\frac{1}{r^2}\\frac{\\partial}{\\partial r}\\left(kr^2\\frac{\\partial T}{\\partial r}\\right) + \\frac{1}{r^2\\sin\\theta}\\frac{\\partial}{\\partial \\theta}\\left(k\\sin\\theta\\frac{\\partial T}{\\partial \\theta}\\right) + \\frac{1}{r^2\\sin^2\\theta}\\frac{\\partial}{\\partial \\phi}\\left(k\\frac{\\partial T}{\\partial \\phi}\\right) + \\dot{q} = \\rho c_p \\frac{\\partial T}{\\partial t}`} display />
                </EquationBox>

                <div className="text-center text-gray-500 py-2">&darr; 1D (r only), 정상상태, k=const, 발열 없음</div>

                <EquationBox label="단순화된 방정식" accent="red">
                  <Math tex={`\\frac{1}{r^2}\\frac{d}{dr}\\left(r^2\\frac{dT}{dr}\\right) = 0`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          {/* 3. 온도 분포 해 */}
          <SectionDivider number="3" title="Temperature Distribution" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <div className="space-y-4">
                <EquationBox label="지배방정식 정리">
                  <Math tex={`\\frac{d}{dr}\\left(r^2\\frac{dT}{dr}\\right) = 0`} display />
                </EquationBox>

                <EquationBox label="1차 적분">
                  <Math tex={`r^2\\frac{dT}{dr} = C_1 \\quad \\Rightarrow \\quad \\frac{dT}{dr} = \\frac{C_1}{r^2}`} display />
                </EquationBox>

                <EquationBox label="2차 적분 (일반해)">
                  <Math tex={`T(r) = -\\frac{C_1}{r} + C_2`} display />
                </EquationBox>

                <div className="text-center text-gray-500 py-2">&darr; 경계조건: <Math tex="T(r_1) = T_1" />, <Math tex="T(r_2) = T_2" /></div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400 mb-2">경계조건 적용:</p>
                  <Math tex={`T_1 - T_2 = -C_1\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right) = C_1\\left(\\frac{1}{r_2} - \\frac{1}{r_1}\\right)`} display />
                  <Math tex={`C_1 = \\frac{T_1 - T_2}{\\frac{1}{r_2} - \\frac{1}{r_1}} = \\frac{(T_1 - T_2)r_1 r_2}{r_1 - r_2}`} display />
                </div>

                <EquationBox label="최종 온도 분포" accent="red">
                  <Math tex={`T(r) = T_1 - (T_1 - T_2)\\frac{\\frac{1}{r_1} - \\frac{1}{r}}{\\frac{1}{r_1} - \\frac{1}{r_2}} = T_1 - (T_1 - T_2)\\frac{r_2(r - r_1)}{r(r_2 - r_1)}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="형상별 온도 분포 비교" accent="blue" icon="T">
              <div className="overflow-x-auto">
                <table className="w-full text-xs mt-2">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-2 text-gray-400">형상</th>
                      <th className="text-left py-2 px-2 text-gray-400">온도 분포</th>
                      <th className="text-left py-2 px-2 text-gray-400">패턴</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-2 font-bold">평판</td>
                      <td className="py-2 px-2"><Math tex="T \\sim x" /></td>
                      <td className="py-2 px-2">선형 (Linear)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-2 font-bold">원통</td>
                      <td className="py-2 px-2"><Math tex="T \\sim \\ln r" /></td>
                      <td className="py-2 px-2">로그 (Logarithmic)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 font-bold">구</td>
                      <td className="py-2 px-2"><Math tex="T \\sim 1/r" /></td>
                      <td className="py-2 px-2">쌍곡선 (Hyperbolic)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </InsightCard>
          </motion.div>

          {/* 4. 열전달률 */}
          <SectionDivider number="4" title="Heat Transfer Rate" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <div className="space-y-4">
                <EquationBox label="온도 구배">
                  <Math tex={`\\frac{dT}{dr} = \\frac{C_1}{r^2} = \\frac{(T_1 - T_2)r_1 r_2}{(r_1 - r_2)r^2}`} display />
                </EquationBox>

                <EquationBox label="열유속 (Heat Flux)">
                  <Math tex={`q''_r = -k\\frac{dT}{dr} = \\frac{k(T_1 - T_2)r_1 r_2}{(r_2 - r_1)r^2}`} display />
                </EquationBox>

                <EquationBox label="열전달률 (반경 r에서의 구면 통과)" accent="red">
                  <Math tex={`q_r = q''_r \\cdot (4\\pi r^2) = \\frac{4\\pi k r_1 r_2 (T_1 - T_2)}{r_2 - r_1}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="열유속의 r² 감소" accent="orange" icon="!">
              <p>
                구에서 열유속 <Math tex="q''_r \\propto 1/r^2" />로 감소합니다 (원통의 <Math tex="1/r" />보다 빠름).
                이는 구면적이 <Math tex="4\\pi r^2" />로 빠르게 증가하기 때문입니다.
                중심부에 열원이 있는 경우, 중심 근처에서 열유속이 매우 높아질 수 있어 주의가 필요합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 열저항 */}
          <SectionDivider number="5" title="Thermal Resistance for Spherical Shell" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <EquationBox label="열전달률 (정리)" accent="orange">
                <Math tex={`q = \\frac{T_1 - T_2}{\\frac{r_2 - r_1}{4\\pi k r_1 r_2}} = \\frac{T_1 - T_2}{\\frac{1}{4\\pi k}\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right)}`} display />
              </EquationBox>

              <div className="text-center text-gray-500 py-4">&darr; <Math tex="q = \\Delta T / R_{th}" /> 형태</div>

              <EquationBox label="Conduction Thermal Resistance (Sphere)" accent="red">
                <Math tex={`R_{t,cond} = \\frac{1}{4\\pi k}\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right) = \\frac{r_2 - r_1}{4\\pi k r_1 r_2} \\quad \\left[\\frac{\\text{K}}{\\text{W}}\\right]`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                세 형상 열저항 비교 (전도)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">형상</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="R_{t,cond}" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">특징</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-red-400">평판</td>
                      <td className="py-3 px-4"><Math tex="\\frac{L}{kA}" /></td>
                      <td className="py-3 px-4 text-gray-400">면적 일정</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">원통</td>
                      <td className="py-3 px-4"><Math tex="\\frac{\\ln(r_2/r_1)}{2\\pi kL}" /></td>
                      <td className="py-3 px-4 text-gray-400">면적 <Math tex="\\propto r" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-blue-400">구</td>
                      <td className="py-3 px-4"><Math tex="\\frac{1}{4\\pi k}\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right)" /></td>
                      <td className="py-3 px-4 text-gray-400">면적 <Math tex="\\propto r^2" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 6. 구의 임계 반경 */}
          <SectionDivider number="6" title="Critical Radius for Sphere" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              원통과 마찬가지로, 구형 물체에도 <strong className="text-white">임계 단열 반경</strong>이 존재합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-yellow-400 uppercase tracking-wider mb-6">
                구의 임계 반경
              </h4>

              <EquationBox label="총 열저항">
                <Math tex={`R_{tot}(r) = \\frac{1}{4\\pi k_{ins}}\\left(\\frac{1}{r_1} - \\frac{1}{r}\\right) + \\frac{1}{h(4\\pi r^2)}`} display />
              </EquationBox>

              <div className="text-center text-gray-500 py-4">
                <Math tex="dR_{tot}/dr = 0" /> 풀이
              </div>

              <EquationBox label="Critical Radius (Sphere)" accent="red">
                <Math tex={`r_{cr} = \\frac{2k_{ins}}{h}`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 mt-4 text-center">
                원통(<Math tex="r_{cr} = k/h" />)보다 2배 큽니다!
              </p>
            </div>
          </motion.div>

          {/* 7. 대류 경계조건 포함 */}
          <SectionDivider number="7" title="Complete Thermal Circuit" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                내외부 대류가 있는 구형 쉘
              </h4>

              <EquationBox label="총 열저항">
                <Math tex={`R_{tot} = \\frac{1}{h_1(4\\pi r_1^2)} + \\frac{1}{4\\pi k}\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right) + \\frac{1}{h_2(4\\pi r_2^2)}`} display />
              </EquationBox>

              <EquationBox label="열전달률" accent="red">
                <Math tex={`q = \\frac{T_{\\infty,1} - T_{\\infty,2}}{R_{tot}}`} display />
              </EquationBox>
            </div>
          </motion.div>

          {/* 8. 예제 */}
          <SectionDivider number="8" title="Example Problem" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 3.3: 구형 저장탱크
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 내경 2m인 구형 LNG 저장탱크가 있다.
                  탱크 벽 두께 20mm(스테인리스강, k=15 W/(m·K))이고 외부에 100mm 두께의 단열재(k=0.04 W/(m·K))가 감싸져 있다.
                  내부 LNG 온도 -162°C, 외부 공기 온도 25°C일 때 열침입률을 구하라.
                  (내부 대류계수 <Math tex="h_1 = 50" />, 외부 대류계수 <Math tex="h_2 = 10" /> W/(m²·K))
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">주어진 값</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; <Math tex="r_1 = 1.0" /> m (내경), <Math tex="r_2 = 1.02" /> m (강벽 외경), <Math tex="r_3 = 1.12" /> m (단열재 외경)</li>
                    <li>&bull; <Math tex="k_1 = 15" /> W/(m·K) (강), <Math tex="k_2 = 0.04" /> W/(m·K) (단열재)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">각 열저항 계산</p>
                  <div className="space-y-2 text-sm">
                    <Math tex={`R_1 = \\frac{1}{h_1 \\cdot 4\\pi r_1^2} = \\frac{1}{50 \\cdot 4\\pi \\cdot 1^2} = 1.59 \\times 10^{-3} \\, \\text{K/W}`} display />
                    <Math tex={`R_2 = \\frac{1}{4\\pi k_1}\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right) = \\frac{1}{4\\pi \\cdot 15}\\left(\\frac{1}{1} - \\frac{1}{1.02}\\right) = 1.04 \\times 10^{-4} \\, \\text{K/W}`} display />
                    <Math tex={`R_3 = \\frac{1}{4\\pi k_2}\\left(\\frac{1}{r_2} - \\frac{1}{r_3}\\right) = \\frac{1}{4\\pi \\cdot 0.04}\\left(\\frac{1}{1.02} - \\frac{1}{1.12}\\right) = 0.175 \\, \\text{K/W}`} display />
                    <Math tex={`R_4 = \\frac{1}{h_2 \\cdot 4\\pi r_3^2} = \\frac{1}{10 \\cdot 4\\pi \\cdot 1.12^2} = 6.35 \\times 10^{-3} \\, \\text{K/W}`} display />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">총 열저항 및 열침입률</p>
                  <Math tex={`R_{tot} = 0.00159 + 0.000104 + 0.175 + 0.00635 = 0.183 \\, \\text{K/W}`} display />
                  <Math tex={`q = \\frac{25 - (-162)}{0.183} = \\frac{187}{0.183} = \\boxed{1022 \\, \\text{W}}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="단열재가 95% 이상 지배" accent="emerald" icon="%">
              <p>
                단열재 열저항이 총 열저항의 95.6%를 차지합니다.
                금속 벽의 열저항은 무시할 수 있을 정도로 작습니다 (0.06%).
                열침입을 더 줄이려면 단열재 두께 증가가 가장 효과적입니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

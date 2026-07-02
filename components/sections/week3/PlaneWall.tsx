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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "red",
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
  accent = "red",
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
  const c = colors[accent] || colors.red;
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

export default function PlaneWall() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Plane Wall (평판)
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            가장 기본적인 1차원 정상상태 전도 문제인 평판 열전달을 분석합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 문제 설정 */}
          <SectionDivider number="1" title="Problem Setup" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              두께 <Math tex="L" />인 평판의 양쪽 표면 온도가 각각 <Math tex="T_1" />과 <Math tex="T_2" />로
              유지될 때 (<Math tex="T_1 > T_2" />), 평판을 통한 열전달을 분석합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                가정 (Assumptions)
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">1.</span>
                    <span><strong className="text-white">1차원 전도:</strong> <Math tex="T = T(x)" /> only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">2.</span>
                    <span><strong className="text-white">정상상태:</strong> <Math tex="\\partial T/\\partial t = 0" /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">3.</span>
                    <span><strong className="text-white">균일한 열전도도:</strong> <Math tex="k = \\text{const}" /></span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">4.</span>
                    <span><strong className="text-white">내부 열 생성 없음:</strong> <Math tex="\\dot{q} = 0" /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">5.</span>
                    <span><strong className="text-white">경계조건:</strong> <Math tex="T(0) = T_1" />, <Math tex="T(L) = T_2" /></span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 2. 지배방정식 */}
          <SectionDivider number="2" title="Governing Equation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Week 2에서 유도한 <strong className="text-white">Heat Diffusion Equation</strong>에 위의 가정을 적용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                단순화 과정
              </h4>

              <div className="space-y-4">
                <EquationBox label="일반 열확산 방정식 (General Heat Diffusion Equation)">
                  <Math tex={`\\frac{\\partial}{\\partial x}\\left(k\\frac{\\partial T}{\\partial x}\\right) + \\frac{\\partial}{\\partial y}\\left(k\\frac{\\partial T}{\\partial y}\\right) + \\frac{\\partial}{\\partial z}\\left(k\\frac{\\partial T}{\\partial z}\\right) + \\dot{q} = \\rho c_p \\frac{\\partial T}{\\partial t}`} display />
                </EquationBox>

                <div className="text-center text-gray-500 py-2">&darr; 1D, 정상상태, k=const, 발열 없음</div>

                <EquationBox label="단순화된 방정식" accent="orange">
                  <Math tex={`\\frac{d^2 T}{dx^2} = 0`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          {/* 3. 온도 분포 해 */}
          <SectionDivider number="3" title="Temperature Distribution" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <Math tex="d^2T/dx^2 = 0" />을 두 번 적분하여 일반해를 구합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <div className="space-y-4">
                <EquationBox label="1차 적분">
                  <Math tex={`\\frac{dT}{dx} = C_1`} display />
                </EquationBox>

                <EquationBox label="2차 적분 (일반해)">
                  <Math tex={`T(x) = C_1 x + C_2`} display />
                </EquationBox>

                <div className="text-center text-gray-500 py-2">&darr; 경계조건 적용: <Math tex="T(0) = T_1" />, <Math tex="T(L) = T_2" /></div>

                <EquationBox label="상수 결정">
                  <Math tex={`C_2 = T_1, \\quad C_1 = \\frac{T_2 - T_1}{L}`} display />
                </EquationBox>

                <EquationBox label="최종 온도 분포" accent="red">
                  <Math tex={`T(x) = T_1 + \\frac{T_2 - T_1}{L}x = T_1 - \\frac{T_1 - T_2}{L}x`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="선형 온도 분포 (Linear Profile)" accent="blue" icon="L">
              <p>
                평판에서 정상상태, k=const, 발열 없음 조건에서 온도 분포는 <strong className="text-white">직선(linear)</strong>입니다.
                이는 <Math tex="d^2T/dx^2 = 0" />의 직접적인 결과입니다.
                만약 <Math tex="k" />가 온도에 따라 변하거나 내부 발열이 있으면 온도 분포는 비선형이 됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. 열유속과 열전달률 */}
          <SectionDivider number="4" title="Heat Flux and Heat Rate" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Fourier 법칙을 적용하여 열유속과 열전달률을 계산합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <div className="space-y-4">
                <EquationBox label="온도 구배">
                  <Math tex={`\\frac{dT}{dx} = \\frac{T_2 - T_1}{L} = -\\frac{T_1 - T_2}{L} = -\\frac{\\Delta T}{L}`} display />
                </EquationBox>

                <EquationBox label="열유속 (Heat Flux)" accent="orange">
                  <Math tex={`q''_x = -k\\frac{dT}{dx} = k\\frac{T_1 - T_2}{L} = \\frac{k\\Delta T}{L}`} display />
                </EquationBox>

                <EquationBox label="열전달률 (Heat Rate)" accent="red">
                  <Math tex={`q_x = q''_x \\cdot A = \\frac{kA(T_1 - T_2)}{L} = \\frac{kA\\Delta T}{L}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="정상상태에서 열유속은 일정" accent="red" icon="=">
              <p>
                정상상태에서는 에너지가 축적되지 않으므로, 평판 내 모든 위치에서 <Math tex="q''_x" />가 <strong className="text-white">동일</strong>합니다.
                이는 온도 구배 <Math tex="dT/dx" />가 상수(선형 온도 분포)라는 사실과 일치합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 열저항 개념 */}
          <SectionDivider number="5" title="Thermal Resistance Concept" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열전달을 <strong className="text-white">전기 회로</strong>에 비유하면 매우 유용한 해석 도구가 됩니다.
              Ohm의 법칙 <Math tex="V = IR" />과 유사하게 열전달을 표현할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                전기-열 유추 (Thermal-Electrical Analogy)
              </h4>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">전기</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">기호</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">열</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">기호</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">전압차 (Voltage)</td>
                      <td className="py-3 px-4 font-mono text-blue-400"><Math tex="\\Delta V" /></td>
                      <td className="py-3 px-4">온도차</td>
                      <td className="py-3 px-4 font-mono text-red-400"><Math tex="\\Delta T" /></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">전류 (Current)</td>
                      <td className="py-3 px-4 font-mono text-blue-400"><Math tex="I" /></td>
                      <td className="py-3 px-4">열전달률</td>
                      <td className="py-3 px-4 font-mono text-red-400"><Math tex="q" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">전기 저항</td>
                      <td className="py-3 px-4 font-mono text-blue-400"><Math tex="R = \\rho L/A" /></td>
                      <td className="py-3 px-4">열저항</td>
                      <td className="py-3 px-4 font-mono text-red-400"><Math tex="R_{th} = L/(kA)" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <EquationBox label="Ohm의 법칙" accent="blue">
                  <Math tex={`I = \\frac{\\Delta V}{R}`} display />
                </EquationBox>
                <EquationBox label="열전달 (유사 형태)" accent="red">
                  <Math tex={`q = \\frac{\\Delta T}{R_{th}}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                평판의 전도 열저항
              </h4>

              <EquationBox label="Conduction Thermal Resistance (Plane Wall)" accent="red">
                <Math tex={`R_{t,cond} = \\frac{L}{kA} \\quad \\left[\\frac{\\text{K}}{\\text{W}}\\right]`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 mt-6 text-center">
                따라서 열전달률은 <Math tex={`q = \\frac{T_1 - T_2}{R_{t,cond}} = \\frac{T_1 - T_2}{L/(kA)}`} />
              </p>
            </div>
          </motion.div>

          {/* 6. 대류 경계조건 */}
          <SectionDivider number="6" title="Convection Boundary Conditions" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              실제로는 평판의 표면 온도가 직접 주어지지 않고, 주변 유체 온도와 대류 열전달 계수가 주어지는 경우가 많습니다.
              이 경우 <strong className="text-white">대류 열저항</strong>을 고려해야 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                대류 열저항 (Convection Thermal Resistance)
              </h4>

              <EquationBox label="Newton의 냉각 법칙" accent="orange">
                <Math tex={`q = hA(T_s - T_\\infty)`} display />
              </EquationBox>

              <div className="text-center text-gray-500 py-4">&darr; <Math tex="q = \\Delta T / R_{th}" /> 형태로 정리</div>

              <EquationBox label="Convection Thermal Resistance" accent="red">
                <Math tex={`R_{t,conv} = \\frac{1}{hA} \\quad \\left[\\frac{\\text{K}}{\\text{W}}\\right]`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                열저항 종류 요약
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Type</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Formula</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Units</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-white">Conduction (Plane)</td>
                      <td className="py-3 px-4"><Math tex="L/(kA)" /></td>
                      <td className="py-3 px-4 font-mono text-xs">K/W</td>
                      <td className="py-3 px-4 text-gray-400">L = 두께, A = 면적</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-white">Convection</td>
                      <td className="py-3 px-4"><Math tex="1/(hA)" /></td>
                      <td className="py-3 px-4 font-mono text-xs">K/W</td>
                      <td className="py-3 px-4 text-gray-400">h = 대류계수</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">Radiation</td>
                      <td className="py-3 px-4"><Math tex="1/(h_r A)" /></td>
                      <td className="py-3 px-4 font-mono text-xs">K/W</td>
                      <td className="py-3 px-4 text-gray-400"><Math tex="h_r = \\varepsilon\\sigma(T_s + T_{sur})(T_s^2 + T_{sur}^2)" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 7. 총괄 열전달 계수 */}
          <SectionDivider number="7" title="Overall Heat Transfer Coefficient" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              양쪽에 대류가 있는 평판의 열전달을 분석할 때, <strong className="text-white">총괄 열전달 계수(Overall Heat Transfer Coefficient)</strong> <Math tex="U" />를
              정의하면 편리합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                대류-전도-대류 복합 열저항
              </h4>

              <p className="text-sm text-gray-400 mb-6 text-center">
                고온 유체(<Math tex="T_{\\infty,1}" />, <Math tex="h_1" />) &rarr; 평판(k, L) &rarr; 저온 유체(<Math tex="T_{\\infty,2}" />, <Math tex="h_2" />)
              </p>

              <EquationBox label="총 열저항 (직렬 연결)">
                <Math tex={`R_{tot} = R_{conv,1} + R_{cond} + R_{conv,2} = \\frac{1}{h_1 A} + \\frac{L}{kA} + \\frac{1}{h_2 A}`} display />
              </EquationBox>

              <EquationBox label="열전달률" accent="orange">
                <Math tex={`q = \\frac{T_{\\infty,1} - T_{\\infty,2}}{R_{tot}} = \\frac{T_{\\infty,1} - T_{\\infty,2}}{\\frac{1}{h_1 A} + \\frac{L}{kA} + \\frac{1}{h_2 A}}`} display />
              </EquationBox>

              <div className="text-center text-gray-500 py-4">&darr; <Math tex="q = UA\\Delta T" /> 형태로 정의</div>

              <EquationBox label="Overall Heat Transfer Coefficient" accent="red">
                <Math tex={`U = \\frac{1}{R_{tot} \\cdot A} = \\frac{1}{\\frac{1}{h_1} + \\frac{L}{k} + \\frac{1}{h_2}} \\quad \\left[\\frac{\\text{W}}{\\text{m}^2 \\cdot \\text{K}}\\right]`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="U의 물리적 의미" accent="blue" icon="U">
              <p className="mb-2">
                <Math tex="U" />는 두 유체 사이의 <strong className="text-white">전체 열전달 성능</strong>을 나타내는 단일 계수입니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <Math tex="U" />가 클수록 열전달이 잘 됨</li>
                <li>&bull; <Math tex="U" />는 항상 가장 작은 <Math tex="h" />나 <Math tex="k/L" />보다 작음</li>
                <li>&bull; 열교환기 설계에서 핵심 파라미터</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 8. 예제 */}
          <SectionDivider number="8" title="Example Problem" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 3.1: 단일 평판 열전달
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 두께 0.3m, 열전도도 1.0 W/(m·K)인 벽돌 벽이 있다.
                  내부 공기 온도는 25°C, 외부 공기 온도는 -5°C이다.
                  내부 대류계수 <Math tex="h_1 = 10" /> W/(m²·K), 외부 대류계수 <Math tex="h_2 = 25" /> W/(m²·K)일 때,
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>단위 면적당 열손실률을 구하라</li>
                  <li>벽 내부 표면 온도를 구하라</li>
                  <li>총괄 열전달 계수를 구하라</li>
                </ol>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">풀이 (1): 열손실률</p>
                  <Math tex={`R''_{tot} = \\frac{1}{h_1} + \\frac{L}{k} + \\frac{1}{h_2} = \\frac{1}{10} + \\frac{0.3}{1.0} + \\frac{1}{25} = 0.1 + 0.3 + 0.04 = 0.44 \\, \\text{m}^2\\text{K/W}`} display />
                  <Math tex={`q'' = \\frac{\\Delta T}{R''_{tot}} = \\frac{25 - (-5)}{0.44} = \\frac{30}{0.44} = \\boxed{68.2 \\, \\text{W/m}^2}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">풀이 (2): 내부 표면 온도</p>
                  <Math tex={`q'' = h_1(T_{\\infty,1} - T_{s,1})`} display />
                  <Math tex={`T_{s,1} = T_{\\infty,1} - \\frac{q''}{h_1} = 25 - \\frac{68.2}{10} = \\boxed{18.2°\\text{C}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">풀이 (3): 총괄 열전달 계수</p>
                  <Math tex={`U = \\frac{1}{R''_{tot}} = \\frac{1}{0.44} = \\boxed{2.27 \\, \\text{W/(m}^2\\text{K)}}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="저항의 상대적 크기" accent="yellow" icon="%">
              <p>
                이 예제에서 각 저항의 비중:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; 내부 대류: <Math tex="0.1/0.44 = 22.7\\%" /></li>
                <li>&bull; 벽 전도: <Math tex="0.3/0.44 = 68.2\\%" /> (가장 큼!)</li>
                <li>&bull; 외부 대류: <Math tex="0.04/0.44 = 9.1\\%" /></li>
              </ul>
              <p className="mt-2">
                <strong className="text-yellow-300">열손실을 줄이려면 가장 큰 저항(벽 전도)을 더 높여야 합니다</strong> &rarr; 단열재 추가
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

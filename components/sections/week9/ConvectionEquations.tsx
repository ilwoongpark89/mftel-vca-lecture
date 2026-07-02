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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "teal",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "teal" ? "border-teal-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "yellow" ? "border-yellow-500/30" : "border-slate-700";
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
  accent = "teal",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    teal: { bg: "bg-teal-500/5", border: "border-teal-500/20", text: "text-teal-400", iconBg: "bg-teal-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
  };
  const c = colors[accent] || colors.teal;
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

export default function ConvectionEquations() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conservation Equations for Boundary Layer
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            경계층 내 질량, 운동량, 에너지 보존 방정식과 그 단순화 과정을 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 지배 방정식 개요 */}
          <SectionDivider number="1" title="Overview of Governing Equations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              대류 열전달을 해석하려면 유동장과 온도장을 함께 풀어야 합니다.
              이를 위한 기본 지배 방정식은 <strong className="text-white">Navier-Stokes 방정식</strong>과
              <strong className="text-white">에너지 방정식</strong>입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                필요한 방정식 체계
              </h4>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-teal-500/20">
                  <h5 className="text-teal-400 font-bold mb-2">연속 방정식</h5>
                  <p className="text-sm text-gray-400">
                    질량 보존<br />
                    속도장의 제약조건
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">운동량 방정식</h5>
                  <p className="text-sm text-gray-400">
                    Newton의 제2법칙<br />
                    속도장 결정
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">에너지 방정식</h5>
                  <p className="text-sm text-gray-400">
                    열역학 제1법칙<br />
                    온도장 결정
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-400 text-center mt-6">
                이 방정식들은 <strong className="text-white">연성(coupled)</strong>되어 있어 동시에 풀어야 합니다.
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="경계층 근사의 필요성" accent="teal" icon="BL">
              <p>
                완전한 Navier-Stokes 방정식은 비선형 편미분 방정식으로, 대부분의 경우 해석해가 존재하지 않습니다.
                <strong className="text-teal-400">경계층 근사(Boundary Layer Approximation)</strong>를 적용하면
                방정식이 크게 단순화되어 해석적 해를 구할 수 있는 경우가 있습니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. 연속 방정식 */}
          <SectionDivider number="2" title="Continuity Equation (Mass Conservation)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">연속 방정식</strong>은 질량 보존을 나타내며,
              속도장이 만족해야 하는 기하학적 제약조건입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6 text-center">
                Continuity Equation
              </h4>

              <EquationBox label="일반 형태 (압축성 유동)" accent="teal">
                <Math tex={`\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\vec{V}) = 0`} display />
              </EquationBox>

              <div className="mt-6">
                <EquationBox label="비압축성 유동 (rho = const)" accent="teal">
                  <Math tex={`\\nabla \\cdot \\vec{V} = 0 \\quad \\Rightarrow \\quad \\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} = 0`} display />
                </EquationBox>
              </div>

              <p className="text-sm text-gray-400 text-center mt-6">
                2D 정상 유동에서 x-방향 속도 u와 y-방향 속도 v의 관계를 나타냅니다.
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="물리적 의미" accent="teal" icon="M">
              <p>
                연속 방정식은 유체가 <strong className="text-teal-400">생성되거나 소멸되지 않음</strong>을 나타냅니다.
                미소 체적으로 들어오는 질량과 나가는 질량이 같아야 합니다.
              </p>
              <p className="mt-2 text-gray-500">
                예: u가 x 방향으로 감소하면 (<Math tex="\\partial u/\\partial x < 0" />),
                질량 보존을 위해 v가 y 방향으로 증가해야 합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. 운동량 방정식 */}
          <SectionDivider number="3" title="Momentum Equation (Navier-Stokes)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">운동량 방정식</strong>은 Newton의 제2법칙 (<Math tex="F = ma" />)을
              유체 입자에 적용한 것입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6 text-center">
                x-Momentum Equation (2D, Steady, Incompressible)
              </h4>

              <EquationBox label="일반 형태" accent="orange">
                <Math tex={`\\rho \\left( u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} \\right) = -\\frac{\\partial p}{\\partial x} + \\mu \\left( \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} \\right)`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">각 항의 물리적 의미</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <p className="text-orange-400 font-bold mb-1">좌변: 관성력</p>
                    <p><Math tex="\\rho(u \\partial u/\\partial x + v \\partial u/\\partial y)" /></p>
                    <p className="mt-1">유체 입자의 가속도 x 밀도</p>
                  </div>
                  <div>
                    <p className="text-teal-400 font-bold mb-1">우변: 표면력</p>
                    <p><Math tex="-\\partial p/\\partial x" />: 압력 구배</p>
                    <p><Math tex="\\mu \\nabla^2 u" />: 점성 전단력</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                y-Momentum Equation
              </h4>

              <EquationBox label="일반 형태" accent="orange">
                <Math tex={`\\rho \\left( u\\frac{\\partial v}{\\partial x} + v\\frac{\\partial v}{\\partial y} \\right) = -\\frac{\\partial p}{\\partial y} + \\mu \\left( \\frac{\\partial^2 v}{\\partial x^2} + \\frac{\\partial^2 v}{\\partial y^2} \\right)`} display />
              </EquationBox>
            </div>
          </motion.div>

          {/* 4. 에너지 방정식 */}
          <SectionDivider number="4" title="Energy Equation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">에너지 방정식</strong>은 열역학 제1법칙을 유동하는 유체에 적용한 것입니다.
              온도장을 결정하며, 대류 열전달 해석의 핵심입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 text-center">
                Energy Equation (2D, Steady, Incompressible)
              </h4>

              <EquationBox label="일반 형태" accent="cyan">
                <Math tex={`\\rho c_p \\left( u\\frac{\\partial T}{\\partial x} + v\\frac{\\partial T}{\\partial y} \\right) = k \\left( \\frac{\\partial^2 T}{\\partial x^2} + \\frac{\\partial^2 T}{\\partial y^2} \\right) + \\mu \\Phi`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">각 항의 물리적 의미</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <p className="text-cyan-400 font-bold mb-1">좌변: 이류 (Advection)</p>
                    <p>유체의 이동에 의한 에너지 전달</p>
                    <p className="mt-1"><Math tex="\\rho c_p (u \\partial T/\\partial x + v \\partial T/\\partial y)" /></p>
                  </div>
                  <div>
                    <p className="text-orange-400 font-bold mb-1">우변: 전도 + 점성 소산</p>
                    <p><Math tex="k \\nabla^2 T" />: 열전도</p>
                    <p><Math tex="\\mu \\Phi" />: 점성 소산 (발열)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="점성 소산 (Viscous Dissipation)" accent="orange" icon="Phi">
              <p className="mb-2">
                점성 소산 함수 <Math tex="\\Phi" />는 점성에 의한 운동에너지의 열에너지 변환을 나타냅니다:
              </p>
              <div className="mt-2 p-3 bg-slate-950/80 rounded-lg text-center">
                <Math tex={`\\Phi = 2\\left[\\left(\\frac{\\partial u}{\\partial x}\\right)^2 + \\left(\\frac{\\partial v}{\\partial y}\\right)^2\\right] + \\left(\\frac{\\partial u}{\\partial y} + \\frac{\\partial v}{\\partial x}\\right)^2`} display />
              </div>
              <p className="mt-2 text-gray-500">
                고속 유동이나 고점성 유체에서 중요합니다. 대부분의 경우 무시 가능합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 경계층 방정식 */}
          <SectionDivider number="5" title="Boundary Layer Equations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Prandtl의 <strong className="text-white">경계층 근사</strong>를 적용하면 방정식이 크게 단순화됩니다.
              핵심 가정은 경계층이 <strong className="text-teal-400">매우 얇다</strong>는 것입니다 (<Math tex="\\delta \\ll L" />).
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Order of Magnitude Analysis (차수 분석)
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-emerald-400 font-bold mb-2">1. 속도 스케일</h5>
                  <p className="text-sm text-gray-400">
                    <Math tex="u \\sim U_\\infty" /> (자유 흐름 속도)<br />
                    <Math tex="v \\sim U_\\infty (\\delta/L)" /> (연속 방정식으로부터)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-emerald-400 font-bold mb-2">2. 미분 스케일</h5>
                  <p className="text-sm text-gray-400">
                    <Math tex="\\partial/\\partial x \\sim 1/L" /> (x 방향 변화는 L 스케일)<br />
                    <Math tex="\\partial/\\partial y \\sim 1/\\delta" /> (y 방향 변화는 delta 스케일)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-emerald-400 font-bold mb-2">3. 결론</h5>
                  <p className="text-sm text-gray-400">
                    <Math tex="\\delta/L \\ll 1" />이므로:<br />
                    <Math tex="\\partial^2/\\partial x^2 \\ll \\partial^2/\\partial y^2" /> (x 방향 확산 무시 가능)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6 text-center">
                Boundary Layer Equations (Laminar, 2D, Steady)
              </h4>

              <div className="space-y-6">
                <EquationBox label="연속 방정식" accent="teal">
                  <Math tex={`\\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} = 0`} display />
                </EquationBox>

                <EquationBox label="x-운동량 방정식" accent="orange">
                  <Math tex={`u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = -\\frac{1}{\\rho}\\frac{dp}{dx} + \\nu \\frac{\\partial^2 u}{\\partial y^2}`} display />
                </EquationBox>

                <EquationBox label="에너지 방정식" accent="cyan">
                  <Math tex={`u\\frac{\\partial T}{\\partial x} + v\\frac{\\partial T}{\\partial y} = \\alpha \\frac{\\partial^2 T}{\\partial y^2}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="경계층 방정식의 특징" accent="teal" icon="BL">
              <p className="mb-2">
                경계층 근사의 결과:
              </p>
              <ul className="space-y-1 mt-2">
                <li><Math tex="\\partial^2 u / \\partial x^2" /> 항 제거 (x 방향 확산 무시)</li>
                <li><Math tex="\\partial^2 T / \\partial x^2" /> 항 제거</li>
                <li>y-운동량 방정식이 <Math tex="\\partial p / \\partial y = 0" />으로 단순화</li>
                <li><strong className="text-white">포물선형(Parabolic)</strong> 방정식이 됨 (초기값 문제로 해석 가능)</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 6. 경계 조건 */}
          <SectionDivider number="6" title="Boundary Conditions" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              경계층 방정식을 풀기 위해서는 적절한 <strong className="text-white">경계 조건</strong>이 필요합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Boundary Conditions for Flat Plate
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-950/80 border border-teal-500/20">
                  <h5 className="text-teal-400 font-bold mb-3">유동장 경계조건</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>
                      <strong className="text-white">벽면 (y=0):</strong><br />
                      <Math tex="u = 0" /> (no-slip)<br />
                      <Math tex="v = 0" /> (불투과)
                    </li>
                    <li>
                      <strong className="text-white">자유 흐름 (y &rarr; infinity):</strong><br />
                      <Math tex="u = U_\\infty" />
                    </li>
                    <li>
                      <strong className="text-white">선단 (x=0):</strong><br />
                      <Math tex="u = U_\\infty" />
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-3">온도장 경계조건</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>
                      <strong className="text-white">벽면 (y=0):</strong><br />
                      <Math tex="T = T_s" /> (등온) 또는<br />
                      <Math tex="-k \\partial T/\\partial y = q''_s" /> (등열유속)
                    </li>
                    <li>
                      <strong className="text-white">자유 흐름 (y &rarr; infinity):</strong><br />
                      <Math tex="T = T_\\infty" />
                    </li>
                    <li>
                      <strong className="text-white">선단 (x=0):</strong><br />
                      <Math tex="T = T_\\infty" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 7. 무차원 경계층 방정식 */}
          <SectionDivider number="7" title="Dimensionless Boundary Layer Equations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              무차원 변수를 도입하면 방정식이 더욱 일반화되고, Re와 Pr의 역할이 명확해집니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Dimensionless Variables
              </h4>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-sm font-bold text-emerald-400 mb-2">좌표 및 속도</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li><Math tex="x^* = x/L" /></li>
                    <li><Math tex="y^* = y/L" /></li>
                    <li><Math tex="u^* = u/U_\\infty" /></li>
                    <li><Math tex="v^* = v/U_\\infty" /></li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-sm font-bold text-cyan-400 mb-2">압력 및 온도</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li><Math tex="p^* = p/(\\rho U_\\infty^2)" /></li>
                    <li><Math tex="T^* = \\frac{T - T_s}{T_\\infty - T_s}" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6 text-center">
                Dimensionless Boundary Layer Equations
              </h4>

              <div className="space-y-6">
                <EquationBox label="연속 방정식" accent="teal">
                  <Math tex={`\\frac{\\partial u^*}{\\partial x^*} + \\frac{\\partial v^*}{\\partial y^*} = 0`} display />
                </EquationBox>

                <EquationBox label="x-운동량 방정식" accent="orange">
                  <Math tex={`u^*\\frac{\\partial u^*}{\\partial x^*} + v^*\\frac{\\partial u^*}{\\partial y^*} = -\\frac{dp^*}{dx^*} + \\frac{1}{Re_L} \\frac{\\partial^2 u^*}{\\partial y^{*2}}`} display />
                </EquationBox>

                <EquationBox label="에너지 방정식" accent="cyan">
                  <Math tex={`u^*\\frac{\\partial T^*}{\\partial x^*} + v^*\\frac{\\partial T^*}{\\partial y^*} = \\frac{1}{Re_L \\cdot Pr} \\frac{\\partial^2 T^*}{\\partial y^{*2}}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="무차원 방정식의 의미" accent="emerald" icon="!">
              <p className="mb-2">
                무차원 방정식으로부터 <strong className="text-emerald-400">상관식의 형태</strong>를 예측할 수 있습니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>운동량 방정식에 <Math tex="Re" />만 나타남 &rarr; <Math tex="u^* = f(x^*, y^*, Re)" /></li>
                <li>에너지 방정식에 <Math tex="Re, Pr" /> 나타남 &rarr; <Math tex="T^* = f(x^*, y^*, Re, Pr)" /></li>
                <li>따라서: <Math tex="Nu = f(Re, Pr)" /> (강제 대류)</li>
              </ul>
              <p className="mt-2 text-gray-500">
                이것이 대류 상관식이 <Math tex="Nu = C \\cdot Re^m \\cdot Pr^n" /> 형태인 이유입니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
  const borderColor = accent === "orange" ? "border-orange-500/30" : accent === "amber" ? "border-amber-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div>
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
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    amber: { bg: "bg-amber-500/5", border: "border-amber-500/20", text: "text-amber-400", iconBg: "bg-amber-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
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

export default function FreeConvectionBasics() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Free Convection Basics
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            자연 대류의 기본 원리: 부력 구동 유동과 Boussinesq 근사
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 자연 대류 소개 */}
          <SectionDivider number="1" title="What is Free (Natural) Convection?" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">자연 대류(Free Convection)</strong> 또는 <strong className="text-white">Natural Convection</strong>은
              외부 펌프나 팬 없이 <strong className="text-orange-400">온도 차이에 의한 밀도 변화</strong>와
              <strong className="text-orange-400">중력</strong>의 상호작용으로 발생하는 유동입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                자연 대류 vs 강제 대류
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <h5 className="text-amber-400 font-bold mb-2">Free (Natural) Convection</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 유동 구동: 밀도 차이 + 중력 (부력)</li>
                    <li>&bull; 외부 동력: 불필요</li>
                    <li>&bull; 유동 속도: 상대적으로 느림</li>
                    <li>&bull; 열전달 계수: 낮음 (5-25 W/m<sup>2</sup>K)</li>
                    <li>&bull; 예: 방열판 냉각, 건물 환기</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">Forced Convection</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 유동 구동: 펌프, 팬, 바람</li>
                    <li>&bull; 외부 동력: 필요</li>
                    <li>&bull; 유동 속도: 상대적으로 빠름</li>
                    <li>&bull; 열전달 계수: 높음 (25-250 W/m<sup>2</sup>K)</li>
                    <li>&bull; 예: CPU 팬 냉각, 자동차 라디에이터</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="왜 자연 대류가 중요한가?" accent="orange" icon="!">
              <ul className="space-y-2">
                <li>&bull; <strong className="text-white">패시브 냉각:</strong> 동력 없이 열관리 가능 (전자기기, 건물)</li>
                <li>&bull; <strong className="text-white">원자력 안전:</strong> 정전 시에도 작동하는 비상 냉각 시스템</li>
                <li>&bull; <strong className="text-white">일상생활:</strong> 난방/냉방, 요리, 기상 현상</li>
                <li>&bull; <strong className="text-white">신뢰성:</strong> 움직이는 부품이 없어 고장 위험 낮음</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 2. 부력의 기원 */}
          <SectionDivider number="2" title="Buoyancy: The Driving Force" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              자연 대류의 구동력은 <strong className="text-white">부력(Buoyancy)</strong>입니다.
              유체가 가열되면 밀도가 감소하고, 주변의 차가운 유체보다 가벼워져 상승합니다.
              이 과정이 연속적으로 반복되며 순환 유동이 형성됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                부력의 원리
              </h4>

              <EquationBox label="부력 (Archimedes)" accent="orange">
                <Math tex={`F_b = (\\rho_\\infty - \\rho) g V`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-orange-400">단위 체적당 부력:</strong>
                </p>
                <Math tex={`f_b = (\\rho_\\infty - \\rho) g = \\rho_\\infty \\left(1 - \\frac{\\rho}{\\rho_\\infty}\\right) g`} display />
                <p className="text-xs text-gray-500 mt-4">
                  여기서 <Math tex="\rho_\infty" />: 무한대 (주변) 유체 밀도, <Math tex="\rho" />: 가열된 유체 밀도
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
                자연 대류 메커니즘
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">1</span>
                  <div>
                    <h5 className="text-white font-medium mb-1">표면 가열</h5>
                    <p className="text-sm text-gray-400">고온 표면이 인접한 유체를 가열</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">2</span>
                  <div>
                    <h5 className="text-white font-medium mb-1">밀도 감소</h5>
                    <p className="text-sm text-gray-400">가열된 유체의 밀도가 감소 (<Math tex="\rho = \rho(T)" />)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">3</span>
                  <div>
                    <h5 className="text-white font-medium mb-1">부력 발생</h5>
                    <p className="text-sm text-gray-400">가벼워진 유체가 부력을 받아 상승</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">4</span>
                  <div>
                    <h5 className="text-white font-medium mb-1">순환 형성</h5>
                    <p className="text-sm text-gray-400">차가운 유체가 빈자리를 채우며 연속 순환 발생</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. 체적 팽창 계수 */}
          <SectionDivider number="3" title="Volumetric Thermal Expansion Coefficient" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              온도에 따른 밀도 변화를 정량화하기 위해 <strong className="text-white">체적 열팽창 계수 (Coefficient of Volumetric Thermal Expansion)</strong>
              <Math tex="\beta" />를 정의합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                체적 팽창 계수 정의
              </h4>

              <EquationBox label="Beta 정의" accent="orange">
                <Math tex={`\\beta = -\\frac{1}{\\rho}\\left(\\frac{\\partial \\rho}{\\partial T}\\right)_p = \\frac{1}{v}\\left(\\frac{\\partial v}{\\partial T}\\right)_p`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 mb-4 text-center">
                단위: [1/K] 또는 [1/R]
              </p>

              <EquationBox label="밀도-온도 관계 근사" accent="amber">
                <Math tex={`\\rho \\approx \\rho_\\infty [1 - \\beta(T - T_\\infty)]`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                대표적인 Beta 값
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">유체</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">온도</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="\beta" /> [1/K]</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">비고</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-orange-400">이상 기체</td>
                      <td className="py-3 px-4">모든 온도</td>
                      <td className="py-3 px-4"><Math tex="1/T" /> (절대온도)</td>
                      <td className="py-3 px-4 text-gray-400">공기, 가스류</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-amber-400">공기</td>
                      <td className="py-3 px-4">300 K (27°C)</td>
                      <td className="py-3 px-4"><Math tex="3.33 \times 10^{-3}" /></td>
                      <td className="py-3 px-4 text-gray-400">= 1/300</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">물</td>
                      <td className="py-3 px-4">300 K</td>
                      <td className="py-3 px-4"><Math tex="2.76 \times 10^{-4}" /></td>
                      <td className="py-3 px-4 text-gray-400">표에서 참조</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 font-bold text-cyan-400">물</td>
                      <td className="py-3 px-4">350 K</td>
                      <td className="py-3 px-4"><Math tex="6.24 \times 10^{-4}" /></td>
                      <td className="py-3 px-4 text-gray-400">온도에 따라 변화</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-emerald-400">엔진 오일</td>
                      <td className="py-3 px-4">400 K</td>
                      <td className="py-3 px-4"><Math tex="7.0 \times 10^{-4}" /></td>
                      <td className="py-3 px-4 text-gray-400">점성유체</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="이상 기체의 Beta" accent="amber" icon="G">
              <p className="mb-2">
                이상 기체 상태 방정식 <Math tex="p = \rho R T" />로부터:
              </p>
              <Math tex={`\\beta_{\\text{ideal gas}} = \\frac{1}{T}`} display />
              <p className="text-gray-500 mt-2">
                <strong className="text-white">주의:</strong> T는 반드시 <strong className="text-amber-300">절대 온도</strong> [K 또는 R]를 사용해야 합니다!
                공기 25°C = 298 K에서 <Math tex="\beta = 1/298 = 3.36 \times 10^{-3}" /> K<sup>-1</sup>
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. Boussinesq 근사 */}
          <SectionDivider number="4" title="Boussinesq Approximation" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              자연 대류 해석을 단순화하기 위해 <strong className="text-white">Boussinesq 근사</strong>를 사용합니다.
              이 근사에서는 밀도 변화가 <strong className="text-orange-400">부력 항에서만</strong> 고려되고,
              다른 항에서는 밀도를 상수로 취급합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Boussinesq 근사의 핵심
              </h4>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-2">가정</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 온도 차이 <Math tex="\Delta T" />가 작음</li>
                    <li>&bull; <Math tex="\beta \Delta T \ll 1" /></li>
                    <li>&bull; 유체 비압축성</li>
                    <li>&bull; 물성치 일정 (k, <Math tex="\mu" />, <Math tex="c_p" />)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <h5 className="text-amber-400 font-bold mb-2">적용</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 연속 방정식: <Math tex="\rho = \rho_\infty" /> (상수)</li>
                    <li>&bull; 운동량 방정식: 관성/점성항에서 <Math tex="\rho = \rho_\infty" /></li>
                    <li>&bull; <strong className="text-white">부력항에서만</strong> <Math tex="\rho = \rho(T)" /> 고려</li>
                  </ul>
                </div>
              </div>

              <EquationBox label="부력항 (Boussinesq)" accent="orange">
                <Math tex={`(\\rho_\\infty - \\rho)g \\approx \\rho_\\infty \\beta (T - T_\\infty) g`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
                x-방향 운동량 방정식 (경계층)
              </h4>

              <EquationBox label="원래 형태" accent="cyan">
                <Math tex={`\\rho \\left( u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} \\right) = -\\frac{\\partial p}{\\partial x} + \\mu \\nabla^2 u + (\\rho_\\infty - \\rho)g`} display />
              </EquationBox>

              <div className="my-4 text-center text-gray-500">
                <span className="text-2xl">&darr;</span>
                <span className="mx-2">Boussinesq 근사 적용</span>
                <span className="text-2xl">&darr;</span>
              </div>

              <EquationBox label="Boussinesq 형태" accent="orange">
                <Math tex={`u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = \\nu \\frac{\\partial^2 u}{\\partial y^2} + g\\beta (T - T_\\infty)`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-4 text-center">
                수직 평판, 경계층 근사, 압력 구배 무시 (정수압 조건)
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Boussinesq 근사의 유효 범위" accent="yellow" icon="!">
              <p className="mb-2">
                Boussinesq 근사는 <Math tex="\beta(T_s - T_\infty) \ll 1" />일 때 유효합니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; 공기 300K: <Math tex="\Delta T < 100" />K 정도까지 적용 가능</li>
                <li>&bull; 물: 더 넓은 온도 범위에서 유효</li>
                <li>&bull; 고온 차이, 압축성 효과 중요 시: 전체 압축성 방정식 필요</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 5. 자연 대류 응용 */}
          <SectionDivider number="5" title="Applications of Natural Convection" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                자연 대류 응용 분야
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <h5 className="text-orange-400 font-bold mb-2">전자기기 냉각</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 방열판 (Heat Sink)</li>
                    <li>&bull; LED 조명 냉각</li>
                    <li>&bull; 배터리 팩 냉각</li>
                    <li>&bull; 전력 변환 장치</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                  <h5 className="text-amber-400 font-bold mb-2">건축/에너지</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 건물 자연 환기</li>
                    <li>&bull; 이중창 단열</li>
                    <li>&bull; 태양열 집열기</li>
                    <li>&bull; 지열 히트펌프</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">산업 공정</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 용융 금속 응고</li>
                    <li>&bull; 결정 성장 (Czochralski)</li>
                    <li>&bull; 화학 반응기 냉각</li>
                    <li>&bull; 열처리 공정</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-2">원자력 안전</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 비상 노심 냉각</li>
                    <li>&bull; 격납 건물 냉각</li>
                    <li>&bull; 사용후 핵연료 저장조</li>
                    <li>&bull; 수동 안전 시스템</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="자연 대류의 장단점" accent="emerald" icon="NC">
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-emerald-400 font-bold mb-1">장점</p>
                  <ul className="space-y-1 text-sm">
                    <li>&bull; 외부 동력 불필요</li>
                    <li>&bull; 고장 위험 낮음</li>
                    <li>&bull; 조용한 작동</li>
                    <li>&bull; 낮은 유지보수</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-400 font-bold mb-1">단점</p>
                  <ul className="space-y-1 text-sm">
                    <li>&bull; 열전달 계수 낮음</li>
                    <li>&bull; 제어 어려움</li>
                    <li>&bull; 방향 의존성</li>
                    <li>&bull; 큰 온도차 필요</li>
                  </ul>
                </div>
              </div>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

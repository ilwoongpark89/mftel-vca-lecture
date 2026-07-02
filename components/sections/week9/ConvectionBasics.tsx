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
  const borderColor = accent === "teal" ? "border-teal-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : "border-slate-700";
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

export default function ConvectionBasics() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Convection Fundamentals
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            대류 열전달의 기초 개념과 Newton의 냉각 법칙, 대류 열전달 계수 h를 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 대류란 무엇인가? */}
          <SectionDivider number="1" title="What is Convection?" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">대류(Convection)</strong>는 유체(액체 또는 기체)의 <strong className="text-teal-400">이동</strong>에 의해
              열이 전달되는 현상입니다. 전도와 달리, 대류는 물질의 거시적인 운동이 관여합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Convection = Conduction + Advection
              </h4>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-teal-400 font-bold mb-2">Conduction</h5>
                  <p className="text-sm text-gray-400">
                    분자 간 에너지 전달<br />
                    랜덤 분자 운동에 의함
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700 text-center">
                  <span className="text-2xl text-gray-500">+</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <h5 className="text-orange-400 font-bold mb-2">Advection</h5>
                  <p className="text-sm text-gray-400">
                    유체의 벌크 운동<br />
                    거시적 유동에 의한 에너지 전달
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-400 text-center">
                벽면 근처에서는 전도가 지배적, 유체 내부에서는 이류가 지배적
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="벽면에서의 열전달" accent="teal" icon="W">
              <p>
                <strong className="text-teal-400">고체 표면(벽면)</strong>에서 유체 속도는 0입니다 (no-slip condition).
                따라서 표면에서의 열전달은 순수한 <strong className="text-white">전도</strong>에 의해 발생합니다:
              </p>
              <div className="mt-2 p-3 bg-slate-950/80 rounded-lg text-center">
                <Math tex={`q''_s = -k_f \\left.\\frac{\\partial T}{\\partial y}\\right|_{y=0}`} display />
              </div>
              <p className="mt-2 text-gray-500">
                여기서 <Math tex="k_f" />는 유체의 열전도도, y는 벽면에 수직인 방향입니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. 강제 대류 vs 자연 대류 */}
          <SectionDivider number="2" title="Forced vs Natural Convection" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              대류는 유동을 발생시키는 <strong className="text-white">원인</strong>에 따라 두 가지로 분류됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-6">
                <h4 className="text-lg font-bold text-teal-400 mb-4">
                  Forced Convection (강제 대류)
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  <strong className="text-white">외부 장치</strong>(펌프, 팬, 바람 등)에 의해 유동이 강제로 유지됩니다.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li><span className="text-teal-400">*</span> 펌프로 순환되는 냉각수</li>
                  <li><span className="text-teal-400">*</span> 팬으로 냉각되는 CPU</li>
                  <li><span className="text-teal-400">*</span> 자동차 주행 시 라디에이터</li>
                  <li><span className="text-teal-400">*</span> 공조 시스템의 덕트 유동</li>
                </ul>
                <div className="mt-4 p-3 rounded-lg bg-slate-950/80 border border-teal-500/20">
                  <p className="text-xs text-gray-500 mb-1">전형적인 h 값</p>
                  <p className="text-sm text-teal-400">
                    기체: 25-250 W/(m<sup>2</sup>K)<br />
                    액체: 50-20,000 W/(m<sup>2</sup>K)
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                <h4 className="text-lg font-bold text-orange-400 mb-4">
                  Natural Convection (자연 대류)
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                  온도차에 의한 <strong className="text-white">밀도차</strong>로 인해 부력에 의해 유동이 발생합니다.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li><span className="text-orange-400">*</span> 라디에이터(난방기)의 열 상승</li>
                  <li><span className="text-orange-400">*</span> 뜨거운 음식 위의 공기 상승</li>
                  <li><span className="text-orange-400">*</span> 전자기기의 자연 냉각</li>
                  <li><span className="text-orange-400">*</span> 대기 순환, 해양 순환</li>
                </ul>
                <div className="mt-4 p-3 rounded-lg bg-slate-950/80 border border-orange-500/20">
                  <p className="text-xs text-gray-500 mb-1">전형적인 h 값</p>
                  <p className="text-sm text-orange-400">
                    기체: 2-25 W/(m<sup>2</sup>K)<br />
                    액체: 10-1,000 W/(m<sup>2</sup>K)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Mixed Convection (혼합 대류)" accent="yellow" icon="M">
              <p>
                강제 대류와 자연 대류가 동시에 중요한 경우를 <strong className="text-yellow-400">혼합 대류</strong>라고 합니다.
                일반적으로 유동 속도가 낮고 온도차가 클 때 발생합니다.
              </p>
              <p className="mt-2">
                해석 시 <Math tex="Gr/Re^2" /> 비율로 어떤 모드가 지배적인지 판단합니다:
              </p>
              <ul className="mt-2 space-y-1">
                <li><Math tex="Gr/Re^2 \\ll 1" />: 강제 대류 지배</li>
                <li><Math tex="Gr/Re^2 \\gg 1" />: 자연 대류 지배</li>
                <li><Math tex="Gr/Re^2 \\sim 1" />: 혼합 대류</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. Newton의 냉각 법칙 */}
          <SectionDivider number="3" title="Newton's Law of Cooling" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              복잡한 대류 열전달을 간단히 표현하는 가장 기본적인 법칙입니다.
              <strong className="text-white"> 대류 열전달 계수 h</strong>라는 단일 매개변수로 열전달 속도를 나타냅니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6 text-center">
                Newton&apos;s Law of Cooling
              </h4>

              <EquationBox label="열유속 (Heat Flux) 형태" accent="teal">
                <Math tex={`q'' = h(T_s - T_\\infty) \\quad [\\text{W/m}^2]`} display />
              </EquationBox>

              <div className="mt-6">
                <EquationBox label="열전달률 (Heat Rate) 형태" accent="teal">
                  <Math tex={`q = hA_s(T_s - T_\\infty) \\quad [\\text{W}]`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">변수 설명</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <p><Math tex="q''" /> : 열유속 [W/m<sup>2</sup>]</p>
                    <p><Math tex="q" /> : 열전달률 [W]</p>
                    <p><Math tex="h" /> : 대류 열전달 계수 [W/(m<sup>2</sup>K)]</p>
                  </div>
                  <div>
                    <p><Math tex="T_s" /> : 표면 온도 [K 또는 C]</p>
                    <p><Math tex="T_\\infty" /> : 자유 흐름 유체 온도</p>
                    <p><Math tex="A_s" /> : 열전달 표면적 [m<sup>2</sup>]</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Newton의 냉각 법칙의 의미" accent="teal" icon="N">
              <p className="mb-2">
                이 법칙은 <strong className="text-teal-400">모든 복잡한 물리 현상</strong>을 h라는 하나의 계수로 압축합니다.
                h에는 다음 정보가 모두 포함됩니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li><span className="text-teal-400">*</span> 유체의 물성치 (밀도, 점도, 열전도도, 비열)</li>
                <li><span className="text-teal-400">*</span> 유동의 특성 (속도, 난류도)</li>
                <li><span className="text-teal-400">*</span> 형상의 영향 (평판, 원통, 구 등)</li>
                <li><span className="text-teal-400">*</span> 경계층의 특성</li>
              </ul>
              <p className="mt-2 text-gray-500">
                따라서 h를 정확히 결정하는 것이 대류 해석의 핵심 과제입니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. 대류 열전달 계수 h */}
          <SectionDivider number="4" title="Convection Heat Transfer Coefficient" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              h는 <strong className="text-white">상수가 아닙니다.</strong> 위치, 시간, 그리고 유동 조건에 따라 변합니다.
              국소(local) 값과 평균(average) 값을 구별해야 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Local vs Average Convection Coefficient
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-sm font-bold text-teal-400 mb-3">Local Coefficient <Math tex="h(x)" /></h5>
                  <div className="text-center p-3 rounded-lg bg-slate-900/50 mb-3">
                    <Math tex={`q''(x) = h(x)[T_s - T_\\infty]`} display />
                  </div>
                  <p className="text-sm text-gray-400">
                    특정 위치 x에서의 열유속과 온도차의 비율
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-700">
                  <h5 className="text-sm font-bold text-orange-400 mb-3">Average Coefficient <Math tex="\\bar{h}" /></h5>
                  <div className="text-center p-3 rounded-lg bg-slate-900/50 mb-3">
                    <Math tex={`q = \\bar{h}A_s[T_s - T_\\infty]`} display />
                  </div>
                  <p className="text-sm text-gray-400">
                    전체 표면에 대한 평균값
                  </p>
                </div>
              </div>

              <EquationBox label="평균 계수의 정의" accent="teal">
                <Math tex={`\\bar{h} = \\frac{1}{L}\\int_0^L h(x)\\,dx`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-4">
                h의 전형적인 값 범위
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">대류 형태</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">h [W/(m<sup>2</sup>K)]</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-teal-400">자연 대류 - 기체</td>
                      <td className="py-3 px-4">2 - 25</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-teal-400">자연 대류 - 액체</td>
                      <td className="py-3 px-4">10 - 1,000</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-orange-400">강제 대류 - 기체</td>
                      <td className="py-3 px-4">25 - 250</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-orange-400">강제 대류 - 액체</td>
                      <td className="py-3 px-4">50 - 20,000</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4 text-cyan-400">끓음 (Boiling)</td>
                      <td className="py-3 px-4">2,500 - 100,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-cyan-400">응축 (Condensation)</td>
                      <td className="py-3 px-4">5,000 - 100,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="상변화 열전달의 높은 h" accent="cyan" icon="h">
              <p>
                <strong className="text-cyan-400">끓음(Boiling)</strong>과 <strong className="text-cyan-400">응축(Condensation)</strong>은
                매우 높은 h 값을 가집니다. 이는 상변화 시 잠열(latent heat)이 관여하기 때문입니다.
              </p>
              <p className="mt-2">
                이 특성을 활용하면 매우 효율적인 냉각 시스템을 설계할 수 있습니다
                (예: 침수식 냉각, 히트파이프).
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 대류 열저항 */}
          <SectionDivider number="5" title="Convection Thermal Resistance" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              전도와 마찬가지로 대류 열전달도 <strong className="text-white">열저항</strong> 개념으로 표현할 수 있습니다.
              이를 통해 전도와 대류가 복합된 시스템을 쉽게 해석할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6 text-center">
                Convection Thermal Resistance
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <EquationBox label="Newton의 법칙으로부터" accent="emerald">
                  <Math tex={`q = hA_s(T_s - T_\\infty) = \\frac{T_s - T_\\infty}{1/(hA_s)}`} display />
                </EquationBox>

                <EquationBox label="대류 열저항" accent="emerald">
                  <Math tex={`R_{conv} = \\frac{1}{hA_s} \\quad [\\text{K/W}]`} display />
                </EquationBox>
              </div>

              <p className="text-sm text-gray-400 text-center">
                전도와 대류가 직렬로 연결된 경우: <Math tex="R_{total} = R_{cond} + R_{conv}" />
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="열회로 해석" accent="emerald" icon="R">
              <p className="mb-2">
                전기회로와 유사하게 <strong className="text-emerald-400">열회로(Thermal Circuit)</strong>를 구성하여
                복잡한 열전달 문제를 체계적으로 해석할 수 있습니다.
              </p>
              <div className="mt-2 p-3 bg-slate-950/80 rounded-lg text-center">
                <Math tex={`q = \\frac{\\Delta T}{R_{total}} = \\frac{T_1 - T_2}{R_1 + R_2 + \\cdots}`} display />
              </div>
              <p className="mt-2 text-gray-500">
                이 접근법은 Week 3에서 학습한 전도 열저항과 결합하여 복합 벽, 핀 등의 해석에 사용됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. h의 결정 방법 */}
          <SectionDivider number="6" title="How to Determine h" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              대류 열전달 계수 h를 결정하는 방법은 크게 세 가지입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-5">
                <h5 className="text-teal-400 font-bold mb-3">1. 해석적 방법</h5>
                <p className="text-sm text-gray-400">
                  경계층 방정식을 풀어 정확한 해를 구함.<br /><br />
                  <strong className="text-gray-300">적용:</strong> 단순한 형상, 층류 유동
                </p>
              </div>

              <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-5">
                <h5 className="text-orange-400 font-bold mb-3">2. 실험적 방법</h5>
                <p className="text-sm text-gray-400">
                  실험을 통해 경험적 상관식(correlation)을 개발.<br /><br />
                  <strong className="text-gray-300">적용:</strong> 복잡한 형상, 난류 유동
                </p>
              </div>

              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">
                <h5 className="text-cyan-400 font-bold mb-3">3. 수치적 방법</h5>
                <p className="text-sm text-gray-400">
                  CFD(전산유체역학)로 유동과 열전달을 직접 계산.<br /><br />
                  <strong className="text-gray-300">적용:</strong> 복잡한 형상, 상세 해석
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="실무에서의 접근 방법" accent="orange" icon="P">
              <p>
                실무에서는 대부분 <strong className="text-orange-400">경험적 상관식(Empirical Correlations)</strong>을 사용합니다.
                이는 무차원수(Re, Pr, Nu 등)의 관계로 표현됩니다:
              </p>
              <div className="mt-2 p-3 bg-slate-950/80 rounded-lg text-center">
                <Math tex={`Nu = f(Re, Pr, \\text{geometry}, \\ldots)`} display />
              </div>
              <p className="mt-2 text-gray-500">
                다음 Part에서 이러한 무차원수들의 물리적 의미를 자세히 학습합니다.
              </p>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

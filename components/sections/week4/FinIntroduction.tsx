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

export default function FinIntroduction() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Extended Surfaces (Fins)
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            핀(확장 표면)의 필요성과 기본 원리를 이해하고 다양한 응용 분야를 살펴봅니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 왜 핀이 필요한가? */}
          <SectionDivider number="1" title="Why Do We Need Fins?" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열전달을 향상시키기 위한 가장 직접적인 방법은 <strong className="text-white">열전달 표면적을 증가</strong>시키는 것입니다.
              Newton의 냉각 법칙을 다시 살펴봅시다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                열전달률 향상 방법
              </h4>

              <EquationBox label="Newton의 냉각 법칙">
                <Math tex={`q = hA_s(T_s - T_\\infty)`} display />
              </EquationBox>

              <p className="text-sm text-gray-400 mt-6 mb-4">
                열전달률 <Math tex="q" />를 증가시키려면:
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <p className="text-red-400 font-bold mb-2">1. h 증가</p>
                  <p className="text-gray-400">대류 계수 향상 (유속 증가, 유체 변경)</p>
                  <p className="text-gray-500 mt-2 text-xs">제한적: 팬/펌프 동력 증가</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <p className="text-red-400 font-bold mb-2">2. <Math tex="\Delta T" /> 증가</p>
                  <p className="text-gray-400">온도차 증가</p>
                  <p className="text-gray-500 mt-2 text-xs">제한적: 운전 조건에 의해 결정</p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                  <p className="text-red-400 font-bold mb-2">3. A 증가</p>
                  <p className="text-white">표면적 증가 &rarr; 핀 사용!</p>
                  <p className="text-red-300 mt-2 text-xs">가장 실용적인 방법</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="핀의 정의" accent="red" icon="F">
              <p>
                <strong className="text-white">핀(Fin)</strong> 또는 <strong className="text-white">확장 표면(Extended Surface)</strong>은
                기본 표면(primary surface)에서 돌출되어 <strong className="text-red-300">열전달 면적을 증가</strong>시키는 구조물입니다.
                핀을 통해 열은 전도로 전달되고, 핀 표면에서 대류로 주변 유체에 방출됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 2. 열저항 관점 */}
          <SectionDivider number="2" title="Thermal Resistance Perspective" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              열저항 관점에서 핀의 역할을 이해해봅시다. 대류 열저항은 <Math tex="R_{conv} = 1/(hA)" />입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                핀이 효과적인 조건
              </h4>

              <p className="text-sm text-gray-400 mb-6">
                전도와 대류가 직렬로 연결된 시스템에서:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <EquationBox label="전도 열저항" accent="blue">
                  <Math tex={`R_{cond} = \\frac{L}{kA}`} display />
                </EquationBox>
                <EquationBox label="대류 열저항" accent="blue">
                  <Math tex={`R_{conv} = \\frac{1}{hA}`} display />
                </EquationBox>
              </div>

              <InsightCard title="핀 사용의 효과성 조건" accent="yellow" icon="!">
                <p className="mb-2">
                  핀은 <strong className="text-yellow-300">대류 열저항이 지배적일 때</strong> 효과적입니다.
                </p>
                <ul className="space-y-1 mt-2">
                  <li>&bull; <Math tex="R_{conv} \gg R_{cond}" /> &rarr; 핀이 효과적</li>
                  <li>&bull; <strong className="text-white">낮은 h (기체 대류)</strong>: 핀 매우 효과적</li>
                  <li>&bull; <strong className="text-white">높은 h (액체 대류, 끓음)</strong>: 핀 효과 제한적</li>
                  <li>&bull; <strong className="text-white">높은 k (금속)</strong>: 핀 재료로 적합</li>
                </ul>
              </InsightCard>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                대류 계수 범위 비교
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">대류 유형</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">h [W/(m2*K)]</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">핀 효과</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">자연 대류 (기체)</td>
                      <td className="py-3 px-4">5 ~ 25</td>
                      <td className="py-3 px-4 text-emerald-400 font-bold">매우 효과적</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">강제 대류 (기체)</td>
                      <td className="py-3 px-4">25 ~ 250</td>
                      <td className="py-3 px-4 text-emerald-400">효과적</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">자연 대류 (액체)</td>
                      <td className="py-3 px-4">50 ~ 1,000</td>
                      <td className="py-3 px-4 text-yellow-400">보통</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">강제 대류 (액체)</td>
                      <td className="py-3 px-4">100 ~ 20,000</td>
                      <td className="py-3 px-4 text-orange-400">제한적</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">끓음/응축</td>
                      <td className="py-3 px-4">2,500 ~ 100,000</td>
                      <td className="py-3 px-4 text-red-400">거의 없음</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 3. 핀의 종류 */}
          <SectionDivider number="3" title="Types of Fins" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀은 형상에 따라 여러 종류로 분류됩니다. 각 형상은 특정 응용에 최적화되어 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-red-400 mb-4">직선 핀 (Straight Fins)</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">a.</span>
                    <div>
                      <strong className="text-white">균일 단면적 직선 핀</strong>
                      <p className="text-gray-500">Uniform cross-sectional area (직사각형)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">b.</span>
                    <div>
                      <strong className="text-white">삼각형 핀</strong>
                      <p className="text-gray-500">Triangular fin (끝으로 갈수록 좁아짐)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">c.</span>
                    <div>
                      <strong className="text-white">포물선형 핀</strong>
                      <p className="text-gray-500">Parabolic fin (최적 무게 대비 성능)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-orange-400 mb-4">원형 핀 (Annular/Circular Fins)</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">a.</span>
                    <div>
                      <strong className="text-white">환형 핀</strong>
                      <p className="text-gray-500">원통 표면에 부착된 원형 디스크</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">b.</span>
                    <div>
                      <strong className="text-white">나선형 핀</strong>
                      <p className="text-gray-500">파이프에 감긴 연속 핀</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-4">핀 (Pin Fins)</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">a.</span>
                    <div>
                      <strong className="text-white">원통형 핀</strong>
                      <p className="text-gray-500">Cylindrical pin fins</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">b.</span>
                    <div>
                      <strong className="text-white">원뿔형 핀</strong>
                      <p className="text-gray-500">Conical pin fins</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-emerald-400 mb-4">특수 형상</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">a.</span>
                    <div>
                      <strong className="text-white">루버 핀 (Louver Fins)</strong>
                      <p className="text-gray-500">자동차 라디에이터</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">b.</span>
                    <div>
                      <strong className="text-white">오프셋 핀 (Offset Strip Fins)</strong>
                      <p className="text-gray-500">컴팩트 열교환기</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 4. 응용 분야 */}
          <SectionDivider number="4" title="Applications" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀은 열전달 향상이 필요한 거의 모든 분야에서 사용됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                <h4 className="text-lg font-bold text-white mb-4">전자 냉각 (Electronics Cooling)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; CPU/GPU 히트싱크</li>
                  <li>&bull; LED 방열판</li>
                  <li>&bull; 전력 반도체 냉각</li>
                  <li>&bull; 데이터 센터 서버 냉각</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  핀 히트싱크 + 팬 조합이 가장 일반적
                </p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                <h4 className="text-lg font-bold text-white mb-4">열교환기 (Heat Exchangers)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; 자동차 라디에이터</li>
                  <li>&bull; 에어컨 증발기/응축기</li>
                  <li>&bull; 보일러 이코노마이저</li>
                  <li>&bull; 폐열 회수 장치</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  공기측(기체측)에 핀 부착이 일반적
                </p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                <h4 className="text-lg font-bold text-white mb-4">자동차/항공 (Automotive/Aerospace)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; 엔진 냉각 시스템</li>
                  <li>&bull; 오일 쿨러</li>
                  <li>&bull; 인터쿨러</li>
                  <li>&bull; 항공기 열관리 시스템</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  경량화와 열성능의 균형이 중요
                </p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                <h4 className="text-lg font-bold text-white mb-4">에너지/산업 (Energy/Industry)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>&bull; 발전소 공냉 응축기</li>
                  <li>&bull; 천연가스 처리 장치</li>
                  <li>&bull; 화학 반응기 냉각</li>
                  <li>&bull; 태양열 집열기</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  대규모 열전달 시스템에 필수
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="실제 사례: CPU 히트싱크" accent="blue" icon="CPU">
              <p className="mb-2">
                현대 고성능 CPU는 100W 이상의 열을 발생시킵니다. 자연 대류만으로는 열저항이 너무 커서
                온도가 허용치를 초과합니다.
              </p>
              <p className="mb-2">
                핀 히트싱크를 사용하면 표면적이 수십 배 증가하고, 팬과 함께 사용하면 h도 크게 증가합니다.
              </p>
              <p>
                <strong className="text-blue-300">예:</strong> 60mm x 60mm 베이스 &rarr; 핀으로 확장 시
                표면적 <Math tex="0.036 \text{ m}^2" /> &rarr; <Math tex="0.2 \text{ m}^2" /> 이상 (5배 이상 증가)
              </p>
            </InsightCard>
          </motion.div>

          {/* 5. 핀 해석의 기본 가정 */}
          <SectionDivider number="5" title="Basic Assumptions for Fin Analysis" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀 열전달 해석을 위해 다음과 같은 표준 가정을 적용합니다.
              이러한 가정은 대부분의 실제 응용에서 합리적입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                핀 해석의 기본 가정
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">1</span>
                  <div>
                    <p className="text-white font-bold">1차원 전도</p>
                    <p className="text-sm text-gray-400">
                      핀 내의 온도는 길이 방향(x)으로만 변함: <Math tex="T = T(x)" />.
                      핀의 두께가 길이에 비해 충분히 작으면 유효 (<Math tex="Bi < 0.1" />).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">2</span>
                  <div>
                    <p className="text-white font-bold">정상 상태</p>
                    <p className="text-sm text-gray-400">
                      시간에 따른 온도 변화 없음: <Math tex="\\partial T/\\partial t = 0" />.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">3</span>
                  <div>
                    <p className="text-white font-bold">균일한 열전도도</p>
                    <p className="text-sm text-gray-400">
                      <Math tex="k = \\text{const}" /> (온도에 무관).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">4</span>
                  <div>
                    <p className="text-white font-bold">균일한 대류 계수</p>
                    <p className="text-sm text-gray-400">
                      <Math tex="h = \\text{const}" /> (핀 표면 전체에서 동일).
                      실제로는 위치에 따라 변하지만, 평균값 사용.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">5</span>
                  <div>
                    <p className="text-white font-bold">내부 열 생성 없음</p>
                    <p className="text-sm text-gray-400">
                      <Math tex="\\dot{q} = 0" />.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">6</span>
                  <div>
                    <p className="text-white font-bold">복사 무시</p>
                    <p className="text-sm text-gray-400">
                      열전달은 대류만 고려. 고온 핀에서는 복사도 중요할 수 있음.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="1차원 가정의 유효성: Biot Number" accent="yellow" icon="Bi">
              <p className="mb-2">
                핀 내 온도가 횡방향으로 균일하다는 가정은 <strong className="text-yellow-300">Biot 수</strong>가 작을 때 유효합니다:
              </p>
              <Math tex={`Bi = \\frac{h \\cdot t/2}{k} < 0.1`} display />
              <p className="mt-2">
                여기서 <Math tex="t" />는 핀의 두께입니다. 금속 핀 + 공기 대류에서 이 조건은 대부분 만족됩니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 6. 핀 해석의 목표 */}
          <SectionDivider number="6" title="Objectives of Fin Analysis" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              핀 해석을 통해 다음과 같은 중요한 정보를 얻을 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-red-400 mb-4">온도 분포 <Math tex="T(x)" /></h4>
                <p className="text-sm text-gray-400 mb-4">
                  핀 내부의 온도가 길이에 따라 어떻게 변하는지 알 수 있습니다.
                </p>
                <ul className="space-y-1 text-sm text-gray-500">
                  <li>&bull; 최대 온도 위치 확인</li>
                  <li>&bull; 재료 허용 온도 검토</li>
                  <li>&bull; 핀 끝단 온도 예측</li>
                </ul>
              </div>

              <div className="rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-orange-400 mb-4">핀 열전달률 <Math tex="q_f" /></h4>
                <p className="text-sm text-gray-400 mb-4">
                  하나의 핀을 통해 전달되는 총 열량을 계산합니다.
                </p>
                <ul className="space-y-1 text-sm text-gray-500">
                  <li>&bull; 냉각 용량 설계</li>
                  <li>&bull; 필요한 핀 수 결정</li>
                  <li>&bull; 시스템 열성능 예측</li>
                </ul>
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-blue-400 mb-4">핀 효율 <Math tex="\\eta_f" /></h4>
                <p className="text-sm text-gray-400 mb-4">
                  핀이 이론적 최대값 대비 얼마나 효과적인지 나타냅니다.
                </p>
                <ul className="space-y-1 text-sm text-gray-500">
                  <li>&bull; 핀 설계 최적화</li>
                  <li>&bull; 길이/두께 결정</li>
                  <li>&bull; 재료 선택 지침</li>
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-6">
                <h4 className="text-lg font-bold text-emerald-400 mb-4">핀 유효성 <Math tex="\\varepsilon_f" /></h4>
                <p className="text-sm text-gray-400 mb-4">
                  핀을 달지 않은 경우 대비 열전달 향상 정도입니다.
                </p>
                <ul className="space-y-1 text-sm text-gray-500">
                  <li>&bull; 핀 사용 여부 결정</li>
                  <li>&bull; 비용 대비 효과 분석</li>
                  <li>&bull; 설계 타당성 검토</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

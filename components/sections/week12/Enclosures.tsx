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
  const borderColor = accent === "orange" ? "border-orange-500/30" : accent === "amber" ? "border-amber-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "red" ? "border-red-500/30" : accent === "blue" ? "border-blue-500/30" : "border-slate-700";
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

export default function Enclosures() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Part 5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Natural Convection in Enclosures
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            밀폐 공간 내부의 자연 대류: 이중창, 태양열 집열기, 전자기기 케이스
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. 밀폐 공간 개요 */}
          <SectionDivider number="1" title="Enclosure Configurations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">밀폐 공간(Enclosure)</strong> 내의 자연 대류는
              두 벽면 사이의 <strong className="text-orange-400">온도 차이</strong>에 의해 구동됩니다.
              유동 패턴과 열전달은 <strong className="text-orange-400">방향</strong>과
              <strong className="text-orange-400">종횡비(Aspect Ratio)</strong>에 크게 의존합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                대표적인 밀폐 공간 형상
              </h4>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <h5 className="text-amber-400 font-bold mb-2">수직 공간</h5>
                  <p className="text-sm text-gray-400">
                    두 수직 평판 사이<br/>
                    (이중창, 벽 공동)<br/>
                    <strong className="text-white">L: 간격, H: 높이</strong>
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-2">수평 공간 (가열 아래)</h5>
                  <p className="text-sm text-gray-400">
                    아래 벽 고온, 위 벽 저온<br/>
                    (태양열 집열기)<br/>
                    <strong className="text-white">L: 간격</strong>
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <h5 className="text-cyan-400 font-bold mb-2">수평 공간 (가열 위)</h5>
                  <p className="text-sm text-gray-400">
                    위 벽 고온, 아래 벽 저온<br/>
                    (안정 배열)<br/>
                    <strong className="text-white">전도 지배</strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. 수직 밀폐 공간 */}
          <SectionDivider number="2" title="Vertical Rectangular Enclosures" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              두 수직 평판 사이의 공간에서, 한쪽이 고온(T<sub>1</sub>), 다른 쪽이 저온(T<sub>2</sub>)일 때,
              <strong className="text-white">회전 셀(circulation cell)</strong>이 형성됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
                수직 밀폐 공간 변수
              </h4>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-amber-400 font-bold mb-2">기하학적 변수</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; L: 두 벽 사이 간격</li>
                    <li>&bull; H: 공간 높이</li>
                    <li>&bull; H/L: 종횡비 (Aspect Ratio)</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <h5 className="text-amber-400 font-bold mb-2">무차원수</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; <Math tex="Ra_L = g\beta(T_1-T_2)L^3/(\nu\alpha)" /></li>
                    <li>&bull; 특성 길이: L (간격)</li>
                    <li>&bull; 온도차: <Math tex="\Delta T = T_1 - T_2" /></li>
                  </ul>
                </div>
              </div>

              <EquationBox label="열전달량" accent="amber">
                <Math tex={`q = \\bar{h} A (T_1 - T_2) = \\frac{k_{eff}}{L} A (T_1 - T_2)`} display />
              </EquationBox>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-amber-400">유효 열전도도:</strong> <Math tex="k_{eff} = Nu \cdot k" /><br/>
                  자연 대류에 의해 열전도도가 효과적으로 증가한 것처럼 작용
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                수직 공간 상관식 (Catton)
              </h4>

              <div className="space-y-4">
                <EquationBox label="좁은 공간 (2 < H/L < 10)" accent="orange">
                  <Math tex={`\\overline{Nu}_L = 0.22 \\left(\\frac{Pr}{0.2 + Pr} Ra_L\\right)^{0.28} \\left(\\frac{H}{L}\\right)^{-1/4}`} display />
                </EquationBox>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400">
                    <strong>적용 범위:</strong> <Math tex="Ra_L < 10^{10}" />, Pr: 모든 값
                  </p>
                </div>

                <EquationBox label="넓은 공간 (10 < H/L < 40)" accent="amber">
                  <Math tex={`\\overline{Nu}_L = 0.18 \\left(\\frac{Pr}{0.2 + Pr} Ra_L\\right)^{0.29}`} display />
                </EquationBox>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400">
                    <strong>적용 범위:</strong> <Math tex="10^3 < Ra_L < 10^{10}" />, <Math tex="Pr (Ra_L)^{0.2} > 10^3" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="이중창 (Double-Pane Window)" accent="amber" icon="W">
              <p className="mb-2">
                이중창은 두 유리판 사이 공기층의 <strong className="text-white">자연 대류를 억제</strong>하여 단열합니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; 최적 간격: 약 10-20mm</li>
                <li>&bull; 너무 좁으면: 전도 지배</li>
                <li>&bull; 너무 넓으면: 대류 증가</li>
                <li>&bull; 아르곤 충전: <Math tex="\alpha" /> 감소로 Nu 감소</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 3. 수평 밀폐 공간 (가열 아래) */}
          <SectionDivider number="3" title="Horizontal Enclosures (Heated from Below)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              아래 벽이 고온, 위 벽이 저온인 경우 (Benard convection),
              <strong className="text-white">Rayleigh 수</strong>가 임계값을 초과하면 대류 셀이 형성됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
                Benard Convection
              </h4>

              <EquationBox label="임계 Rayleigh 수" accent="red">
                <Math tex={`Ra_c \\approx 1708`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h5 className="text-emerald-400 font-bold mb-2">Ra &lt; 1708 (전도)</h5>
                  <p className="text-sm text-gray-400">
                    유동 없음 (정적)<br/>
                    순수 전도에 의한 열전달<br/>
                    <Math tex="Nu = 1" />
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <h5 className="text-red-400 font-bold mb-2">Ra &gt; 1708 (대류)</h5>
                  <p className="text-sm text-gray-400">
                    Benard 셀 형성<br/>
                    규칙적인 대류 패턴<br/>
                    열전달 증가
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                수평 공간 상관식 (가열 아래)
              </h4>

              <EquationBox label="Globe-Dropkin Correlation" accent="orange">
                <Math tex={`\\overline{Nu}_L = 0.069 Ra_L^{1/3} Pr^{0.074}`} display />
              </EquationBox>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong>적용 범위:</strong> <Math tex="3 \\times 10^5 < Ra_L < 7 \\times 10^9" /><br/>
                  <strong>참고:</strong> Ra &lt; 1708에서는 Nu = 1 (전도)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Benard 셀의 아름다움" accent="red" icon="B">
              <p>
                <strong className="text-white">Benard 대류</strong>는 자연계에서 발견되는 자기 조직화의 대표적 예입니다.
                Ra가 임계값을 약간 초과하면 육각형 셀 패턴이 형성됩니다.
                이는 꿀벌 벌집, 사막의 균열 패턴과 유사합니다.
              </p>
            </InsightCard>
          </motion.div>

          {/* 4. 수평 밀폐 공간 (가열 위) */}
          <SectionDivider number="4" title="Horizontal Enclosures (Heated from Above)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              위 벽이 고온, 아래 벽이 저온인 경우 (안정 배열),
              뜨거운 유체가 위에 있어 <strong className="text-white">자연 대류가 발생하지 않습니다</strong>.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                안정 배열 (가열 위)
              </h4>

              <EquationBox label="안정 조건" accent="cyan">
                <Math tex={`Nu_L = 1 \\quad \\text{(모든 Ra)}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400">
                  <strong className="text-cyan-400">물리적 해석:</strong><br/>
                  &bull; 뜨거운 유체가 이미 위에 위치 (안정층)<br/>
                  &bull; 부력이 유동을 구동하지 못함<br/>
                  &bull; 열전달은 순수 전도<br/>
                  &bull; <Math tex="q = kA(T_1-T_2)/L" /> (Fourier 법칙)
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5. 경사 밀폐 공간 */}
          <SectionDivider number="5" title="Inclined Enclosures" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              경사진 밀폐 공간 (예: 태양열 집열기)에서는 경사각 <Math tex="\tau" />가 열전달에 영향을 줍니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
                경사 공간 (가열면 아래)
              </h4>

              <EquationBox label="Holland et al. Correlation" accent="amber">
                <Math tex={`\\overline{Nu}_L = 1 + 1.44\\left[1 - \\frac{1708}{Ra_L \\cos\\tau}\\right]^+ \\left[1 - \\frac{1708(\\sin 1.8\\tau)^{1.6}}{Ra_L \\cos\\tau}\\right] + \\left[\\left(\\frac{Ra_L \\cos\\tau}{5830}\\right)^{1/3} - 1\\right]^+`} display />
              </EquationBox>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-amber-400">참고:</strong> [ ]<sup>+</sup>는 대괄호 안의 값이 양수면 그 값, 음수면 0
                </p>
                <p className="text-sm text-gray-400">
                  <strong>적용 범위:</strong> 0 &lt; <Math tex="\tau" /> &lt; 60deg, H/L &gt; 12
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="태양열 집열기 설계" accent="amber" icon="S">
              <p className="mb-2">
                평판형 태양열 집열기에서 <strong className="text-white">대류 손실 억제</strong>가 중요합니다:
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; 흡수판-유리 간격: 25-40mm</li>
                <li>&bull; 경사각: 위도 ±15deg</li>
                <li>&bull; Nu 감소: 진공, 허니콤 삽입</li>
                <li>&bull; 선택적 코팅: 복사 손실 억제</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 6. 동심 원통/구 */}
          <SectionDivider number="6" title="Concentric Cylinders and Spheres" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              동심 원통 또는 동심 구 사이의 자연 대류도 중요한 응용 분야입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                동심 원통
              </h4>

              <EquationBox label="유효 열전도도 (Raithby-Hollands)" accent="orange">
                <Math tex={`\\frac{k_{eff}}{k} = 0.386 \\left(\\frac{Pr}{0.861 + Pr}\\right)^{1/4} Ra_c^{1/4}`} display />
              </EquationBox>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400 mb-2">
                  수정된 Rayleigh 수:
                </p>
                <Math tex={`Ra_c = \\frac{g\\beta(T_i - T_o)L_c^3}{\\nu\\alpha}, \\quad L_c = \\frac{2[\\ln(r_o/r_i)]^{4/3}}{(r_i^{-3/5} + r_o^{-3/5})^{5/3}}`} display />
                <p className="text-xs text-gray-500 mt-2">
                  적용: <Math tex="10^2 < Ra_c < 10^7" />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
                동심 구
              </h4>

              <EquationBox label="유효 열전도도" accent="amber">
                <Math tex={`\\frac{k_{eff}}{k} = 0.74 \\left(\\frac{Pr}{0.861 + Pr}\\right)^{1/4} Ra_s^{1/4}`} display />
              </EquationBox>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/50">
                <p className="text-sm text-gray-400 mb-2">
                  수정된 Rayleigh 수 및 특성 길이:
                </p>
                <Math tex={`L_s = \\frac{2[(r_o r_i)^{-7/5}(r_o^{-7/5} + r_i^{-7/5})]^{5/7}}{(r_i^{-1} + r_o^{-1})}`} display />
              </div>
            </div>
          </motion.div>

          {/* 7. 예제 */}
          <SectionDivider number="7" title="Example Problem" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 12.4: 이중창 열손실
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 이중창 (0.8m x 0.8m)의 두 유리판 사이 간격이 15mm이다.
                  내부 유리 온도 20°C, 외부 유리 온도 -10°C일 때, 공기층을 통한 열손실을 계산하라.
                </p>
                <p className="mb-4">
                  <strong className="text-white">공기 물성치 (T<sub>f</sub> = 5°C = 278K):</strong><br/>
                  k = 0.0243 W/(m·K), <Math tex="\nu = 14.1 \times 10^{-6}" /> m<sup>2</sup>/s,
                  <Math tex="\alpha = 19.9 \times 10^{-6}" /> m<sup>2</sup>/s, Pr = 0.71
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: 기하학적 파라미터</p>
                  <p className="text-sm text-gray-400">
                    L = 0.015 m (간격), H = 0.8 m (높이)<br/>
                    H/L = 0.8/0.015 = 53.3
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 2: Rayleigh Number</p>
                  <Math tex={`\\beta = \\frac{1}{278} = 3.60 \\times 10^{-3} \\text{ K}^{-1}`} display />
                  <Math tex={`Ra_L = \\frac{9.81 \\times 3.60 \\times 10^{-3} \\times 30 \\times (0.015)^3}{14.1 \\times 10^{-6} \\times 19.9 \\times 10^{-6}}`} display />
                  <Math tex={`Ra_L = \\frac{9.81 \\times 3.60 \\times 10^{-3} \\times 30 \\times 3.38 \\times 10^{-6}}{2.81 \\times 10^{-10}} = 1.28 \\times 10^{4}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: Nusselt Number (H/L &gt; 40)</p>
                  <Math tex={`\\overline{Nu}_L = 0.18 \\left(\\frac{Pr}{0.2 + Pr} Ra_L\\right)^{0.29}`} display />
                  <Math tex={`\\overline{Nu}_L = 0.18 \\left(\\frac{0.71}{0.91} \\times 1.28 \\times 10^4\\right)^{0.29}`} display />
                  <Math tex={`\\overline{Nu}_L = 0.18 \\times (9987)^{0.29} = 0.18 \\times 15.8 = 2.84`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 4: 열전달량</p>
                  <Math tex={`\\bar{h} = \\frac{Nu \\cdot k}{L} = \\frac{2.84 \\times 0.0243}{0.015} = 4.60 \\text{ W/(m}^2\\text{K)}`} display />
                  <Math tex={`q = \\bar{h} A \\Delta T = 4.60 \\times 0.64 \\times 30 = \\boxed{88.3 \\text{ W}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">단일창과 비교</p>
                  <p className="text-sm text-gray-400">
                    단일창 (전도만): <Math tex="q = kA\Delta T/L = 0.0243 \times 0.64 \times 30 / 0.015 = 31.1" /> W<br/><br/>
                    <strong className="text-white">결과:</strong> 자연 대류로 인해 열손실이 전도의 약 2.8배 (Nu = 2.84)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="밀폐 공간 단열 최적화" accent="emerald" icon="E">
              <ul className="space-y-1">
                <li>&bull; <strong className="text-white">간격 최적화:</strong> 너무 좁으면 전도, 넓으면 대류 증가</li>
                <li>&bull; <strong className="text-white">가스 충전:</strong> Ar, Kr (낮은 k, 높은 <Math tex="\nu" />)</li>
                <li>&bull; <strong className="text-white">진공:</strong> 가장 효과적이지만 비용 높음</li>
                <li>&bull; <strong className="text-white">허니콤:</strong> 대류 억제 (태양열 집열기)</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

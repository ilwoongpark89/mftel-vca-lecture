"use client";

import { motion } from "framer-motion";
import Math from "@/components/Math";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function SteadyStateWithGeneration() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Header ── */}
        <motion.div {...fadeIn} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            Part 6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Steady-State Conduction With Generation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            전기 가열, 핵분열 등 내부 열 생성이 있는 경우의 온도 분포를 구합니다.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            1. HEAT GENERATION SOURCES
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-900 p-8"
          >
            <h3 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-2">
              Section 1
            </h3>
            <h4 className="text-2xl font-bold text-white mb-6">
              Sources of Internal Heat Generation
            </h4>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-sm text-gray-400 mb-4">
                  내부 열생성 <Math tex="\dot{q}" />는 매질 내에서의 체적 에너지 변환을 나타냅니다.
                  단위: <strong className="text-white"><Math tex="\text{W/m}^3" /></strong> (단위 체적당, 단위 시간당 에너지).
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/20">
                    <p className="text-xs text-amber-400 font-mono mb-2">Joule (Ohmic) Heating</p>
                    <div className="text-center mb-2">
                      <Math tex="\dot{q} = \frac{I^2 \rho_e}{A_c^2}" display />
                    </div>
                    <p className="text-xs text-gray-500">
                      <Math tex="I" /> = 전류 [A], <Math tex="\rho_e" /> = 전기 비저항 [<Math tex="\Omega \cdot \text{m}" />], <Math tex="A_c" /> = 단면적 [m&sup2;].
                      또는: <Math tex="\dot{q} = I^2 R_e / V" /> (V는 체적).
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/20">
                    <p className="text-xs text-amber-400 font-mono mb-2">Nuclear Fission</p>
                    <p className="text-xs text-gray-500">
                      핵연료봉은 핵분열 반응으로 막대한 체적 가열을 생성합니다.
                      일반적으로: UO<sub>2</sub> 연료에서 <Math tex={"\dot{q} \\sim 10^7 \\text{--} 10^8 \\text{ W/m}^3"} />.
                      분포는 균일하거나 cosine/Bessel 프로파일을 따를 수 있습니다.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/20">
                    <p className="text-xs text-amber-400 font-mono mb-2">Chemical Reactions</p>
                    <p className="text-xs text-gray-500">
                      촉매층의 발열 반응, 콘크리트/에폭시 경화, 다공성 매질 내 연소.
                      온도에 강하게 의존할 수 있음: <Math tex="\dot{q}(T)" />.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/20">
                    <p className="text-xs text-amber-400 font-mono mb-2">Microwave &amp; Biological</p>
                    <p className="text-xs text-gray-500">
                      식품/재료의 마이크로파 가열 (유전체 가열).
                      조직의 생체 대사 (인체에서 <Math tex={"\dot{q} \\sim 700\\text{--}10{,}000 \\text{ W/m}^3"} />).
                      반투명 매질에서의 복사 흡수.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <p className="text-xs text-amber-400 font-mono mb-2">핵심 포인트</p>
                <p className="text-sm text-gray-400">
                  열생성이 있으면 온도 프로파일은 더 이상 <strong className="text-white">선형이 아닙니다</strong> (평판) 또는 순수 대수적이 아닙니다 (원통).
                  열생성 항이 해에 <strong className="text-white">포물선 성분</strong>을 추가합니다.
                  최고 온도는 표면이 아닌 매질 <strong className="text-white">내부</strong>에서 발생합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            2. PLANE WALL: GENERAL SOLUTION
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-amber-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-2">
              Section 2
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Plane Wall with Uniform Heat Generation</h4>
            <p className="text-gray-400 mb-6">
              두께 2L (<Math tex="x = -L" />에서 <Math tex="x = +L" />)인 평판에 균일 체적 열생성 <Math tex="\dot{q}" />와 일정한 열전도율 k가 적용되는 경우를 고려합니다.
            </p>

            <div className="space-y-4">
              {/* Governing */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-amber-400 font-mono mb-2">Governing Equation</p>
                <div className="text-center py-2">
                  <Math tex="\frac{d^2T}{dx^2} + \frac{\dot{q}}{k} = 0" display />
                </div>
                <p className="text-xs text-gray-500 text-center mt-1">
                  이것은 1차원 <strong className="text-white">Poisson 방정식</strong>입니다. <Math tex="\dot{q}/k" /> 항이 Laplace 방정식과의 차이를 만듭니다.
                </p>
              </div>

              {/* Step-by-step */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-amber-400 font-mono mb-3">Step-by-Step Integration</p>
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Rewrite:</p>
                    <div className="text-center">
                      <Math tex="\frac{d^2T}{dx^2} = -\frac{\dot{q}}{k}" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">First integration:</p>
                    <div className="text-center">
                      <Math tex="\frac{dT}{dx} = -\frac{\dot{q}}{k}x + C_1" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-center">
                      기울기가 이제 x의 선형 함수입니다 &mdash; 상수가 아닙니다!
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Second integration:</p>
                    <div className="text-center">
                      <Math tex="T(x) = -\frac{\dot{q}}{2k}x^2 + C_1 x + C_2" display />
                    </div>
                  </div>
                </div>
              </div>

              {/* General solution */}
              <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <p className="text-xs text-amber-400 font-mono mb-2">General Solution</p>
                <div className="text-center py-3">
                  <Math tex="T(x) = -\frac{\dot{q}}{2k}x^2 + C_1 x + C_2" display />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  <strong className="text-white">포물선</strong> 온도 분포! <Math tex="-x^2" /> 항이 아래로 오목한 포물선을 생성합니다.
                  <Math tex="C_1" />과 <Math tex="C_2" />는 경계 조건으로부터 결정됩니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            3. ASYMMETRIC BOUNDARY CONDITIONS
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-amber-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-2">
              Section 3
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Asymmetric Boundary Conditions (비대칭 경계조건)</h4>
            <p className="text-gray-400 mb-6">
              두 표면 온도가 다른 경우: <Math tex="T(-L) = T_{s,1}" /> 및 <Math tex="T(+L) = T_{s,2}" />.
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-amber-400 font-mono mb-3">Applying BCs to the General Solution</p>
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">BC 1: <Math tex="T(-L) = T_{s,1}" /></p>
                    <div className="text-center text-sm">
                      <Math tex="T_{s,1} = -\frac{\dot{q}}{2k}L^2 - C_1 L + C_2" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">BC 2: <Math tex="T(+L) = T_{s,2}" /></p>
                    <div className="text-center text-sm">
                      <Math tex="T_{s,2} = -\frac{\dot{q}}{2k}L^2 + C_1 L + C_2" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Solving for constants:</p>
                    <div className="text-center text-sm">
                      <Math tex="C_1 = \frac{T_{s,2} - T_{s,1}}{2L}" display />
                    </div>
                    <div className="text-center text-sm mt-1">
                      <Math tex="C_2 = \frac{T_{s,1} + T_{s,2}}{2} + \frac{\dot{q}L^2}{2k}" display />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <p className="text-xs text-amber-400 font-mono mb-2">Full Solution (Asymmetric)</p>
                <div className="text-center py-3">
                  <Math tex="T(x) = \frac{\dot{q}L^2}{2k}\!\left(1 - \frac{x^2}{L^2}\right) + \frac{T_{s,2} - T_{s,1}}{2}\,\frac{x}{L} + \frac{T_{s,1} + T_{s,2}}{2}" display />
                </div>
                <p className="text-sm text-gray-400 mt-3 text-center">
                  세 가지 기여: (1) 열생성으로 인한 포물선, (2) 비대칭 경계조건으로 인한 선형, (3) 평균값 상수.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                <p className="text-xs text-amber-400 font-mono mb-2">Maximum Temperature Location</p>
                <p className="text-sm text-gray-400 mb-2">
                  <Math tex="dT/dx = 0" />으로 놓아 <Math tex="x_{\max}" />를 구합니다:
                </p>
                <div className="text-center py-2">
                  <Math tex="\frac{dT}{dx} = -\frac{\dot{q}}{k}x + \frac{T_{s,2} - T_{s,1}}{2L} = 0" display />
                </div>
                <div className="text-center py-2">
                  <Math tex="x_{\max} = \frac{k(T_{s,2} - T_{s,1})}{2\dot{q}L}" display />
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  <Math tex="T_{s,1} \neq T_{s,2}" />일 때, 최고 온도는 <strong className="text-white">중심에서 벗어나</strong> 더 뜨거운 표면 쪽으로 이동합니다.
                  <Math tex="T_{s,1} = T_{s,2}" />이면 최고 온도는 <Math tex="x = 0" /> (중심)에 위치합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            4. SYMMETRIC BOUNDARY CONDITIONS
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-amber-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-2">
              Section 4
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Symmetric Boundary Conditions (대칭 경계조건)</h4>
            <p className="text-gray-400 mb-6">
              두 표면이 같은 온도: <Math tex="T(-L) = T(+L) = T_s" />.
              가장 일반적이고 중요한 경우입니다.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-amber-400 font-mono mb-2">Boundary Conditions</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700 text-center">
                    <p className="text-xs text-gray-500 mb-1">BC 1: <Math tex="x = -L" /></p>
                    <div>
                      <Math tex="T(-L) = T_s" />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700 text-center">
                    <p className="text-xs text-gray-500 mb-1">BC 2: <Math tex="x = +L" /></p>
                    <div>
                      <Math tex="T(+L) = T_s" />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  By symmetry: <Math tex="C_1 = 0" /> (no linear term), <Math tex={"C_2 = T_s + \\frac{\\dot{q}L^2}{2k}"} />.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <p className="text-xs text-amber-400 font-mono mb-2">Temperature Distribution (Symmetric)</p>
                <div className="text-center py-3">
                  <Math tex="T(x) = \frac{\dot{q}L^2}{2k}\!\left(1 - \frac{x^2}{L^2}\right) + T_s" display />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  꼭짓점(최댓값)이 중심 <Math tex="x = 0" />에 있는 <strong className="text-white">대칭 포물선</strong>.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <p className="text-xs text-amber-400 font-mono mb-2">Maximum Temperature (at center, x = 0)</p>
                <div className="text-center py-3">
                  <Math tex="T_{\max} = T(0) = \frac{\dot{q}L^2}{2k} + T_s" display />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  중심 온도가 표면 온도보다 <Math tex="\dot{q}L^2/(2k)" />만큼 높습니다.
                  이것이 <strong className="text-white"><Math tex="\Delta T_{\text{cond}}" /></strong> &mdash; 내부 열생성이 있는 반벽을 통한 전도에 의한 온도 상승입니다.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                <p className="text-xs text-amber-400 font-mono mb-2">Heat Flux at the Surface</p>
                <div className="text-center py-2">
                  <Math tex="q''_s = -k\left.\frac{dT}{dx}\right|_{x=L} = \dot{q}L" display />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  반벽에서 생성된 모든 열(단위 면적당 <Math tex="\dot{q} \times L \times A" />)이 표면을 통해 빠져나갑니다.
                  이것은 정상상태에서의 에너지 균형: <Math tex="\dot{E}_{\text{gen}} = \dot{E}_{\text{out}}" />입니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            5. ONE SIDE INSULATED
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-amber-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-2">
              Section 5
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">One Side Insulated (한쪽 단열)</h4>
            <p className="text-gray-400 mb-6">
              두께 L인 벽의 한쪽(<Math tex="x = 0" />)이 단열되고 다른 쪽(<Math tex="x = L" />)이 노출된 경우를 고려합니다.
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-amber-400 font-mono mb-3">Boundary Conditions</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-amber-500/20 text-center">
                    <p className="text-xs text-amber-400 mb-1">BC 1: Insulated at x = 0</p>
                    <div>
                      <Math tex="\left.\frac{dT}{dx}\right|_{x=0} = 0" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">단열 표면을 통한 열유동 없음</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-amber-500/20 text-center">
                    <p className="text-xs text-amber-400 mb-1">BC 2: Prescribed T at x = L</p>
                    <div>
                      <Math tex="T(L) = T_s" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">알려진 표면 온도</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-amber-400 font-mono mb-3">Solution</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400">From BC1: <Math tex={"\\left.\\frac{dT}{dx}\\right|_{x=0} = C_1 = 0"} /></p>
                  <p className="text-sm text-gray-400">From BC2: <Math tex={"T_s = -\\frac{\\dot{q}}{2k}L^2 + C_2 \\;\\Rightarrow\\; C_2 = T_s + \\frac{\\dot{q}L^2}{2k}"} /></p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <p className="text-xs text-amber-400 font-mono mb-2">Temperature Distribution</p>
                <div className="text-center py-3">
                  <Math tex="T(x) = \frac{\dot{q}}{2k}(L^2 - x^2) + T_s" display />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  Maximum at <Math tex="x = 0" />: <Math tex={"T_{\\max} = \\frac{\\dot{q}L^2}{2k} + T_s"} />
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                <p className="text-xs text-amber-400 font-mono mb-2">핵심 포인트: 단열 표면 = 대칭면</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  이 해는 반 영역 <Math tex="0 \le x \le L" />에서 대칭 경우(Section 4)와 <strong className="text-white">동일</strong>합니다.
                  단열 경계(<Math tex="dT/dx = 0" />)는 수학적으로 <strong className="text-white">대칭면</strong>과 동등합니다.
                  즉, 열생성이 있는 두께 2L의 대칭 벽을 중심에 단열 경계조건을 적용하여 절반(두께 L)만 분석할 수 있습니다.
                  이것은 문제를 단순화하는 데 매우 유용한 개념입니다!
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            6. CONVECTION BOUNDARY CONDITIONS
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-amber-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-2">
              Section 6
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Convection at the Surface (대류 경계조건)</h4>
            <p className="text-gray-400 mb-6">
              대부분의 실제 문제에서 표면 온도 <Math tex="T_s" />는 알려져 있지 않으며, 주위 유체 온도 <Math tex="T_\infty" />와 대류 계수 h를 알고 있습니다.
              에너지 균형으로부터 <Math tex="T_s" />를 구해야 합니다.
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-amber-400 font-mono mb-3">Energy Balance at the Surface (symmetric wall, both sides cooled)</p>
                <p className="text-sm text-gray-400 mb-3">
                  정상상태에서 생성된 모든 열은 대류로 제거되어야 합니다. 두께 2L인 벽의 양쪽이 같은 유체에 노출된 경우:
                </p>
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">한쪽 표면 단위 면적당 생성된 에너지:</p>
                    <div className="text-center">
                      <Math tex="q''_{\text{gen}} = \dot{q} \cdot L" display />
                    </div>
                    <p className="text-xs text-gray-500 text-center">(heat from half the wall exits through one surface)</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">한쪽 표면에서 대류로 제거된 에너지:</p>
                    <div className="text-center">
                      <Math tex="q''_{\text{conv}} = h(T_s - T_\infty)" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Balance: <Math tex="\dot{q}L = h(T_s - T_\infty)" /></p>
                    <div className="text-center">
                      <Math tex="T_s = T_\infty + \frac{\dot{q}L}{h}" display />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <p className="text-xs text-amber-400 font-mono mb-2">Surface Temperature</p>
                <div className="text-center py-3">
                  <Math tex="T_s = T_\infty + \frac{\dot{q}L}{h}" display />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  표면 온도는 <Math tex="T_\infty" />보다 <Math tex="\dot{q}L/h" />만큼 높아집니다.
                  이것이 <strong className="text-white"><Math tex="\Delta T_{\text{conv}}" /></strong> &mdash; 대류 저항에 의한 온도 상승입니다.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <p className="text-xs text-amber-400 font-mono mb-2">Maximum (Center) Temperature</p>
                <div className="text-center py-3">
                  <Math tex="T_{\max} = T(0) = T_\infty + \frac{\dot{q}L}{h} + \frac{\dot{q}L^2}{2k}" display />
                </div>
                <div className="grid md:grid-cols-2 gap-3 mt-4">
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                    <p className="text-xs text-gray-500 mb-1"><Math tex="\Delta T_{\text{conv}}" /> (convection rise)</p>
                    <div><Math tex="\dot{q}L/h" /></div>
                    <p className="text-xs text-gray-500 mt-1">표면 - 주위 온도차</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                    <p className="text-xs text-gray-500 mb-1"><Math tex="\Delta T_{\text{cond}}" /> (전도 상승)</p>
                    <div><Math tex="\dot{q}L^2/(2k)" /></div>
                    <p className="text-xs text-gray-500 mt-1">중심 - 표면 온도차</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            7. SOLID CYLINDER WITH GENERATION
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-orange-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-2">
              Section 7
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Solid Cylinder with Uniform Heat Generation</h4>
            <p className="text-gray-400 mb-6">
              반지름 <Math tex="r_o" />인 원통(예: 전선, 연료봉)에 균일한 <Math tex="\dot{q}" />와 일정한 k가 적용되는 경우.
              전기 전선과 핵연료봉에 매우 중요합니다.
            </p>

            <div className="space-y-4">
              {/* Governing */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-orange-400 font-mono mb-2">Governing Equation (1D radial, cylindrical)</p>
                <div className="text-center py-2">
                  <Math tex="\frac{1}{r}\frac{d}{dr}\!\left(r\frac{dT}{dr}\right) + \frac{\dot{q}}{k} = 0" display />
                </div>
              </div>

              {/* Step-by-step */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-orange-400 font-mono mb-3">Step-by-Step Integration</p>
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Multiply by r:</p>
                    <div className="text-center">
                      <Math tex="\frac{d}{dr}\!\left(r\frac{dT}{dr}\right) = -\frac{\dot{q}}{k}r" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">First integration:</p>
                    <div className="text-center">
                      <Math tex="r\frac{dT}{dr} = -\frac{\dot{q}}{2k}r^2 + C_1" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Divide by r:</p>
                    <div className="text-center">
                      <Math tex="\frac{dT}{dr} = -\frac{\dot{q}}{2k}r + \frac{C_1}{r}" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Second integration:</p>
                    <div className="text-center">
                      <Math tex="T(r) = -\frac{\dot{q}}{4k}r^2 + C_1\ln(r) + C_2" display />
                    </div>
                  </div>
                </div>
              </div>

              {/* BCs */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-orange-400 font-mono mb-3">Boundary Conditions</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-orange-500/20 text-center">
                    <p className="text-xs text-orange-400 mb-1">BC 1: Symmetry at center (r = 0)</p>
                    <div>
                      <Math tex="\left.\frac{dT}{dr}\right|_{r=0} = 0" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      or T(0) must be finite <Math tex="\Rightarrow C_1 = 0" />
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      (since <Math tex="C_1\ln(0) \to -\infty" /> unless <Math tex="C_1 = 0" />)
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-orange-500/20 text-center">
                    <p className="text-xs text-orange-400 mb-1">BC 2: Surface temperature</p>
                    <div>
                      <Math tex="T(r_o) = T_s" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      <Math tex={"\\ \\Rightarrow C_2 = T_s + \\frac{\\dot{q}r_o^2}{4k}"} />
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-xl bg-orange-500/5 border border-orange-500/20">
                <p className="text-xs text-orange-400 font-mono mb-2">Temperature Distribution</p>
                <div className="text-center py-3">
                  <Math tex="T(r) = \frac{\dot{q}r_o^2}{4k}\!\left(1 - \frac{r^2}{r_o^2}\right) + T_s" display />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  <Math tex="r^2" />에 대해 포물선. 중심(<Math tex="r = 0" />)에서 최대, 표면(<Math tex="r = r_o" />)에서 <Math tex="T_s" />와 같음.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-orange-500/5 border border-orange-500/20">
                <p className="text-xs text-orange-400 font-mono mb-2">Maximum Temperature (at center)</p>
                <div className="text-center py-3">
                  <Math tex="T_{\max} = T(0) = \frac{\dot{q}r_o^2}{4k} + T_s" display />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  <strong className="text-white">4k</strong> 인자(평판의 2k와 비교)에 주목 &mdash; 원통 형상은 면적이 r에 따라 증가하므로 열 제거에 더 &ldquo;효율적&rdquo;입니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            8. CYLINDER WITH CONVECTION
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-orange-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-2">
              Section 8
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Cylinder with Convection Cooling</h4>
            <p className="text-gray-400 mb-6">
              표면이 대류 계수 h로 <Math tex="T_\infty" />인 유체에 의해 냉각될 때, 먼저 에너지 균형에서 <Math tex="T_s" />를 구합니다.
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-orange-400 font-mono mb-3">Energy Balance at the Surface</p>
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">총 열 생성량 (단위 길이당):</p>
                    <div className="text-center">
                      <Math tex="q'_{\text{gen}} = \dot{q} \cdot \pi r_o^2" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">대류로 제거 (단위 길이당):</p>
                    <div className="text-center">
                      <Math tex="q'_{\text{conv}} = h \cdot 2\pi r_o \cdot (T_s - T_\infty)" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">균형 및 풀이:</p>
                    <div className="text-center">
                      <Math tex="\dot{q}\pi r_o^2 = h \cdot 2\pi r_o(T_s - T_\infty)" display />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-orange-500/5 border border-orange-500/20">
                <p className="text-xs text-orange-400 font-mono mb-2">Surface Temperature</p>
                <div className="text-center py-3">
                  <Math tex="T_s = T_\infty + \frac{\dot{q}r_o}{2h}" display />
                </div>
              </div>

              <div className="p-5 rounded-xl bg-orange-500/5 border border-orange-500/20">
                <p className="text-xs text-orange-400 font-mono mb-2">Center (Maximum) Temperature</p>
                <div className="text-center py-3">
                  <Math tex="T(0) = T_\infty + \frac{\dot{q}r_o}{2h} + \frac{\dot{q}r_o^2}{4k}" display />
                </div>
                <div className="grid md:grid-cols-2 gap-3 mt-4">
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                    <p className="text-xs text-gray-500 mb-1"><Math tex="\Delta T_{\text{conv}}" /></p>
                    <div><Math tex="\dot{q}r_o/(2h)" /></div>
                    <p className="text-xs text-gray-500 mt-1">표면 - 주위 온도차</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                    <p className="text-xs text-gray-500 mb-1"><Math tex="\Delta T_{\text{cond}}" /></p>
                    <div><Math tex="\dot{q}r_o^2/(4k)" /></div>
                    <p className="text-xs text-gray-500 mt-1">중심 - 표면 온도차</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            9. EXAMPLE 1: COPPER WIRE
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-900 p-8"
          >
            <h3 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-2">
              Example 1
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Copper Wire Heating</h4>
            <p className="text-gray-400 mb-6">
              전류가 흐르는 구리 전선. 열 생성률, 표면 온도, 중심 온도를 구합니다.
            </p>

            <div className="space-y-4">
              {/* Given */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-amber-400 font-mono mb-3">Given Data</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div className="space-y-1">
                    <p>Diameter: D = 2 mm <Math tex="\Rightarrow r_o" /> = 1 mm = 0.001 m</p>
                    <p>Current: I = 20 A</p>
                    <p>Electrical resistivity: <Math tex={"\\ \\rho_e = 1.72 \\times 10^{-8}\\;\\Omega{\\cdot}\\text{m}"} /></p>
                  </div>
                  <div className="space-y-1">
                    <p>Thermal conductivity: k = 401 W/m&middot;K</p>
                    <p>Air: <Math tex="T_\infty" /> = 25&deg;C</p>
                    <p>Convection coefficient: h = 15 W/m&sup2;&middot;K</p>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-amber-400 font-mono mb-3">Step 1: Heat Generation Rate</p>
                <div className="space-y-2">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Cross-sectional area:</p>
                    <div className="text-center text-sm">
                      <Math tex="A_c = \pi r_o^2 = \pi(0.001)^2 = 3.1416 \times 10^{-6}\;\text{m}^2" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Heat generation:</p>
                    <div className="text-center text-sm">
                      <Math tex="\dot{q} = \frac{I^2\rho_e}{A_c^2} = \frac{(20)^2 \times 1.72 \times 10^{-8}}{(3.1416 \times 10^{-6})^2}" display />
                    </div>
                    <div className="text-center text-lg mt-2">
                      <Math tex="\dot{q} = 6.88 \times 10^5\;\text{W/m}^3 = 0.688\;\text{MW/m}^3" display />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <p className="text-xs text-amber-400 font-mono mb-3">Step 2: Surface Temperature</p>
                <div className="text-center">
                  <div className="mb-2 text-sm">
                    <Math tex="T_s = T_\infty + \frac{\dot{q}r_o}{2h} = 25 + \frac{(6.88 \times 10^5)(0.001)}{2 \times 15}" display />
                  </div>
                  <div className="text-xl">
                    <Math tex="T_s = 25 + 22.9 = " /> <span className="font-bold text-white">47.9&deg;C</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <p className="text-xs text-amber-400 font-mono mb-3">Step 3: Center Temperature</p>
                <div className="text-center">
                  <div className="mb-2 text-sm">
                    <Math tex="T(0) = T_s + \frac{\dot{q}r_o^2}{4k} = 47.9 + \frac{(6.88 \times 10^5)(0.001)^2}{4 \times 401}" display />
                  </div>
                  <div className="text-xl">
                    <Math tex="T(0) = 47.9 + 0.00043 \approx " /> <span className="font-bold text-white">47.9&deg;C</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                <p className="text-xs text-amber-400 font-mono mb-2">Observation</p>
                <p className="text-sm text-gray-400">
                  <Math tex="\Delta T_{\text{cond}} = 0.00043\text{°C} \approx 0" />. 중심 온도가 표면 온도와 사실상 동일합니다!
                  이는 구리의 열전도율이 극히 높기 때문입니다 (k = 401 W/m&middot;K).
                  <strong className="text-white">병목은 대류</strong>(<Math tex="\Delta T_{\text{conv}} = 22.9\text{°C}" />)이며, 전도가 아닙니다.
                  전선 온도를 낮추려면 h를 개선해야 합니다 (예: 강제 대류, 더 가는 전선).
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            10. EXAMPLE 2: NUCLEAR FUEL ROD
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-900 p-8"
          >
            <h3 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-2">
              Example 2
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Nuclear Fuel Rod &mdash; Safety Analysis</h4>
            <p className="text-gray-400 mb-6">
              UO<sub>2</sub> 핵연료봉. 중심 온도가 용융점 이하인지 확인합니다.
            </p>

            <div className="space-y-4">
              {/* Given */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-red-400 font-mono mb-3">Given Data</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div className="space-y-1">
                    <p>Heat generation: <Math tex={"\\ \\dot{q} = 2 \\times 10^8\\;\\text{W/m}^3"} /></p>
                    <p>Radius: <Math tex="r_o" /> = 5 mm = 0.005 m</p>
                    <p>Thermal conductivity: k = 3 W/m&middot;K</p>
                  </div>
                  <div className="space-y-1">
                    <p>Coolant: <Math tex="T_\infty" /> = 300&deg;C</p>
                    <p>Convection coefficient: h = 10,000 W/m&sup2;&middot;K</p>
                    <p>Melting point of UO<sub>2</sub>: <Math tex="T_{\text{melt}} \approx 2800\text{°C}" /></p>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-red-400 font-mono mb-3">Step 1: Surface Temperature</p>
                <div className="text-center">
                  <div className="mb-2 text-sm">
                    <Math tex="T_s = T_\infty + \frac{\dot{q}r_o}{2h} = 300 + \frac{(2 \times 10^8)(0.005)}{2 \times 10{,}000}" display />
                  </div>
                  <div className="text-xl font-bold text-red-400">
                    <Math tex="T_s = 300 + 50 = " /> <span className="text-white">350&deg;C</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-red-400 font-mono mb-3">Step 2: Center Temperature</p>
                <div className="text-center">
                  <div className="mb-2 text-sm">
                    <Math tex="T(0) = T_s + \frac{\dot{q}r_o^2}{4k} = 350 + \frac{(2 \times 10^8)(0.005)^2}{4 \times 3}" display />
                  </div>
                  <div className="text-xl font-bold text-red-400">
                    <Math tex="T(0) = 350 + 416.7 = " /> <span className="text-white">766.7&deg;C</span>
                  </div>
                </div>
              </div>

              {/* Temperature breakdown */}
              <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20">
                <p className="text-xs text-red-400 font-mono mb-3">Temperature Breakdown</p>
                <div className="space-y-2">
                  {[
                    { label: "Coolant T_inf", val: "300.0°C", delta: "" },
                    { label: "Delta T_conv (q_dot*r_o/2h)", val: "350.0°C", delta: "+50.0°C" },
                    { label: "Delta T_cond (q_dot*r_o^2/4k)", val: "766.7°C", delta: "+416.7°C" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-2 rounded-xl bg-slate-900 border border-slate-700 text-sm">
                      <span className="text-gray-400">{item.label}</span>
                      <div className="text-right">
                        <span className="text-white font-mono">{item.val}</span>
                        {item.delta && <span className="text-red-300 ml-2 text-xs">({item.delta})</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/30 border border-green-500/20">
                <p className="text-xs text-green-400 font-mono mb-2">Safety Assessment</p>
                <p className="text-sm text-gray-400">
                  <Math tex="T_{\text{center}} = 766.7\text{°C} \ll T_{\text{melt}} = 2800\text{°C}" />.
                  연료봉 중심 온도가 용융점보다 <strong className="text-green-400">충분히 낮으므로</strong> &mdash; 설계가 안전합니다.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  여기서는 <strong className="text-white">전도 저항이 지배적</strong>입니다 (<Math tex="\Delta T_{\text{cond}} = 416.7\text{°C}" /> vs <Math tex="\Delta T_{\text{conv}} = 50\text{°C}" />).
                  UO<sub>2</sub>는 열전도율이 매우 낮아(k = 3 W/m&middot;K) 내부 온도 구배가 급합니다.
                  <Math tex="\dot{q}" />가 <Math tex={"\\ {\\sim}2 \\times 10^9\\;\\text{W/m}^3"} />로 증가하면 중심이 용융에 근접합니다 &mdash; 이것이 최대 출력 밀도를 결정합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            11. KEY INSIGHTS
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-900 p-8"
          >
            <h3 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-2">
              Key Insights
            </h3>
            <h4 className="text-2xl font-bold text-white mb-6">
              Summary of Heat Generation Problems
            </h4>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Not Linear!",
                    desc: "열생성이 있으면 온도 프로파일은 포물선(평판: x^2, 원통: r^2)입니다. q-dot/k 항이 해의 형태를 근본적으로 바꿉니다.",
                    accent: "border-amber-500/30",
                  },
                  {
                    title: "Max T at Symmetry/Insulated Surface",
                    desc: "최고 온도는 항상 dT/dx = 0 또는 dT/dr = 0인 곳 -- 대칭 형상의 중심 또는 단열 경계에서 발생합니다.",
                    accent: "border-amber-500/30",
                  },
                  {
                    title: "Surface T Depends on Cooling",
                    desc: "표면 온도는 고정값이 아니며, 대류에 의한 열 제거 효율에 따라 달라집니다 (T_s = T_inf + q_dot*L/h 또는 q_dot*r_o/2h).",
                    accent: "border-orange-500/30",
                  },
                  {
                    title: "Two Temperature Rises",
                    desc: "T_max = T_inf + Delta_T_conv + Delta_T_cond. 대류와 전도 저항 모두 주위 온도 이상의 총 온도 상승에 기여합니다.",
                    accent: "border-orange-500/30",
                  },
                  {
                    title: "Geometry Matters (2k vs 4k)",
                    desc: "평판: q_dot*L^2/(2k). 원통: q_dot*r_o^2/(4k). 원통은 면적이 r에 따라 증가하므로 열 제거가 더 효율적입니다.",
                    accent: "border-red-500/30",
                  },
                  {
                    title: "Energy Balance is Key",
                    desc: "열생성이 있는 정상상태: E_gen = E_out. 생성된 모든 열은 표면을 통해 빠져나가야 합니다. 이 간단한 균형으로 T_s를 직접 구할 수 있습니다.",
                    accent: "border-red-500/30",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`p-5 rounded-xl bg-slate-800/30 border-l-4 ${item.accent} border border-slate-700`}
                  >
                    <h5 className="text-white font-bold mb-2">{item.title}</h5>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Comparison table */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 mt-6">
                <p className="text-xs text-amber-400 font-mono mb-3">Quick Reference: Generation Formulas</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-500">Quantity</th>
                        <th className="text-center py-2 px-3 text-amber-400">Plane Wall (2L thick)</th>
                        <th className="text-center py-2 px-3 text-orange-400">Solid Cylinder</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3 text-gray-500 text-xs">Governing Eq.</td>
                        <td className="text-center py-2 px-3 text-amber-300"><Math tex="\frac{d^2T}{dx^2} + \frac{\dot{q}}{k} = 0" /></td>
                        <td className="text-center py-2 px-3 text-orange-300"><Math tex="\frac{1}{r}\frac{d}{dr}\!\left(r\frac{dT}{dr}\right) + \frac{\dot{q}}{k} = 0" /></td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3 text-gray-500 text-xs">T(x) or T(r)</td>
                        <td className="text-center py-2 px-3 text-amber-300"><Math tex="\frac{\dot{q}L^2}{2k}\!\left(1-\frac{x^2}{L^2}\right)+T_s" /></td>
                        <td className="text-center py-2 px-3 text-orange-300"><Math tex="\frac{\dot{q}r_o^2}{4k}\!\left(1-\frac{r^2}{r_o^2}\right)+T_s" /></td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3 text-gray-500 text-xs"><Math tex="\Delta T_{\text{cond}}" /></td>
                        <td className="text-center py-2 px-3 text-amber-300"><Math tex="\dot{q}L^2/(2k)" /></td>
                        <td className="text-center py-2 px-3 text-orange-300"><Math tex="\dot{q}r_o^2/(4k)" /></td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3 text-gray-500 text-xs"><Math tex="T_s" /></td>
                        <td className="text-center py-2 px-3 text-amber-300"><Math tex="T_\infty + \dot{q}L/h" /></td>
                        <td className="text-center py-2 px-3 text-orange-300"><Math tex="T_\infty + \dot{q}r_o/(2h)" /></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-gray-500 text-xs"><Math tex="T_{\max}" /></td>
                        <td className="text-center py-2 px-3 text-amber-300"><Math tex="T_\infty + \dot{q}L/h + \dot{q}L^2/(2k)" /></td>
                        <td className="text-center py-2 px-3 text-orange-300"><Math tex="T_\infty + \dot{q}r_o/(2h) + \dot{q}r_o^2/(4k)" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Math from "@/components/Math";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = (i: number) => ({
  ...fadeIn,
  transition: { duration: 0.6, delay: i * 0.08 },
});

export default function SteadyStateNoGeneration() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Header ── */}
        <motion.div {...fadeIn} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
            Part 5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Steady-State Conduction Without Generation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            열 생성이 없는 정상상태 1차원 전도: 평판, 원통, 구에 대한 해를 구합니다.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            1. GOVERNING EQUATION
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-slate-950 p-8"
          >
            <h3 className="text-sm font-mono text-green-400 uppercase tracking-wider mb-2">
              Section 1
            </h3>
            <h4 className="text-2xl font-bold text-white mb-6">
              Governing Equation &mdash; Laplace&rsquo;s Equation
            </h4>

            <div className="space-y-4">
              {/* General heat eq */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-sm text-gray-400 mb-3">
                  <strong className="text-white">일반 열확산 방정식</strong>에서 출발합니다. 균질, 등방성 매질에서 열전도율이 일정한 경우:
                </p>
                <div className="text-center mb-3">
                  <Math tex="\nabla\!\cdot\!(k\nabla T) + \dot{q} = \rho c_p \frac{\partial T}{\partial t}" display />
                </div>
                <p className="text-sm text-gray-400">
                  k가 일정하면 다음과 같이 됩니다:
                </p>
                <div className="text-center my-3">
                  <Math tex="k\nabla^2 T + \dot{q} = \rho c_p \frac{\partial T}{\partial t}" display />
                </div>
                <p className="text-xs text-gray-500 text-center">
                  or equivalently: <Math tex="\nabla^2 T + \dot{q}/k = (1/\alpha)(\partial T/\partial t)" />, where <Math tex="\alpha = k/(\rho c_p)" /> is the thermal diffusivity.
                </p>
              </div>

              {/* Two conditions */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-sm text-gray-400 mb-3">
                  이제 <strong className="text-white">두 가지 단순화 조건</strong>을 적용합니다:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-green-500/20">
                    <p className="text-xs text-green-400 font-mono mb-1">Condition 1: Steady-state (정상상태)</p>
                    <div className="text-center py-2">
                      <Math tex="\frac{\partial T}{\partial t} = 0" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-center">
                      매질 내 어느 점에서도 온도가 시간에 따라 변하지 않습니다.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-green-500/20">
                    <p className="text-xs text-green-400 font-mono mb-1">Condition 2: No heat generation (열 생성 없음)</p>
                    <div className="text-center py-2">
                      <Math tex="\dot{q} = 0" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-center">
                      매질 내에 내부 에너지원이나 흡수원이 없음 (Joule 가열, 반응 등 없음).
                    </p>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                <p className="text-sm text-gray-400 mb-2">
                  지배 방정식이 <strong className="text-white">Laplace 방정식</strong> (라플라스 방정식)으로 축소됩니다:
                </p>
                <div className="text-center py-4">
                  <Math tex="\nabla^2 T = 0" display />
                </div>
                <p className="text-sm text-gray-500 text-center">
                  이는 T의 2차 공간 미분의 합이 모든 곳에서 0임을 나타냅니다.
                </p>
              </div>

              {/* 1D forms */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-sm text-gray-400 mb-4">
                  <strong className="text-white">1차원</strong>에서 Laplacian은 좌표계에 따라 다른 형태를 취합니다:
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-green-500/20 text-center">
                    <p className="text-xs text-green-400 font-mono mb-2">Cartesian (평판)</p>
                    <div>
                      <Math tex="\frac{d^2T}{dx^2} = 0" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-cyan-500/20 text-center">
                    <p className="text-xs text-cyan-400 font-mono mb-2">Cylindrical (원통)</p>
                    <div>
                      <Math tex="\frac{1}{r}\frac{d}{dr}\!\left(r\frac{dT}{dr}\right) = 0" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-teal-500/20 text-center">
                    <p className="text-xs text-teal-400 font-mono mb-2">Spherical (구)</p>
                    <div>
                      <Math tex="\frac{1}{r^2}\frac{d}{dr}\!\left(r^2\frac{dT}{dr}\right) = 0" display />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  각각 두 개의 경계 조건이 필요한 2차 ODE입니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            2. PLANE WALL
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-green-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-green-400 uppercase tracking-wider mb-2">
              Section 2
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Plane Wall (평판)</h4>
            <p className="text-gray-400 mb-6">
              두께 L인 평판에서 <Math tex="x = 0" />의 표면 온도가 <Math tex="T_{s,1}" />, <Math tex="x = L" />의 표면 온도가 <Math tex="T_{s,2}" />인 경우를 고려합니다.
              벽은 일정한 열전도율 k를 가지며, 내부 열생성이 없고, 정상상태입니다.
            </p>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-green-400 font-mono mb-2">Step 1: Governing Equation</p>
                <div className="text-center py-2">
                  <Math tex="\frac{d^2T}{dx^2} = 0" display />
                </div>
                <p className="text-xs text-gray-500 text-center mt-1">
                  1D Cartesian, steady state, no generation, constant k.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-green-400 font-mono mb-2">Step 2: Integration (두 번 적분)</p>
                <div className="space-y-3 text-center">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">First integration:</p>
                    <div>
                      <Math tex="\frac{dT}{dx} = C_1" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">온도 기울기가 벽 전체에서 상수입니다.</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Second integration:</p>
                    <div>
                      <Math tex="T(x) = C_1 \cdot x + C_2" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      x의 <strong className="text-white">선형 함수</strong>. 두 미지수(<Math tex="C_1" />, <Math tex="C_2" />)에 두 개의 경계조건이 필요합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: BCs */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-green-400 font-mono mb-2">Step 3: Apply Boundary Conditions</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">BC 1: x = 0</p>
                    <div className="text-center">
                      <Math tex="T(0) = C_2 = T_{s,1}" />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">BC 2: x = L</p>
                    <div className="text-center">
                      <Math tex="T(L) = C_1 L + T_{s,1} = T_{s,2}" />
                    </div>
                    <div className="text-center text-sm mt-1">
                      <Math tex="\Rightarrow C_1 = \frac{T_{s,2} - T_{s,1}}{L}" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Final solution */}
              <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                <p className="text-xs text-green-400 font-mono mb-2">Final Temperature Distribution</p>
                <div className="text-center py-3">
                  <Math tex="T(x) = T_{s,1} + (T_{s,2} - T_{s,1})\frac{x}{L}" display />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  선형 온도 분포 &mdash; 온도가 <Math tex="T_{s,1}" />에서 <Math tex="T_{s,2}" />까지 <strong className="text-white">선형적으로</strong> 변합니다.
                </p>
              </div>

              {/* Heat flux and rate */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-gray-500 mb-2">Heat Flux (constant throughout wall)</p>
                  <div className="text-center">
                    <Math tex="q''_x = -k\frac{dT}{dx} = \frac{k(T_{s,1} - T_{s,2})}{L}" display />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    <Math tex="dT/dx = C_1" /> = 상수이므로, <Math tex="q''" />는 벽 <strong className="text-white">전체에서 동일</strong>합니다. 이는 에너지 보존과 일치합니다: 에너지가 저장되거나 생성되지 않습니다.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-gray-500 mb-2">Heat Transfer Rate</p>
                  <div className="text-center">
                    <Math tex="q_x = \frac{kA(T_{s,1} - T_{s,2})}{L}" display />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    여기서 A는 열 흐름 방향에 수직인 단면적입니다.
                  </p>
                </div>
              </div>

              {/* Thermal resistance */}
              <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                <p className="text-xs text-green-400 font-mono mb-2">Thermal Resistance (열저항)</p>
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">By analogy with Ohm&rsquo;s Law: <Math tex="V = IR \;\Leftrightarrow\; \Delta T = qR" /></p>
                  <div className="py-3">
                    <Math tex="R_{\text{cond,wall}} = \frac{L}{kA} \quad [\text{K/W}]" display />
                  </div>
                </div>
              </div>

              {/* Physical insight */}
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <p className="text-xs text-green-400 font-mono mb-2">물리적 의미</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-white">선형 온도 프로파일</strong>은 열유속 <Math tex="q''" />가 <strong className="text-white">벽 전체에서 일정</strong>함을 의미합니다.
                  이는 물리적으로 타당합니다: 열생성이 없는 정상상태에서, <em>한 면으로 들어오는 모든 에너지는 반대쪽 면으로 나가야 합니다</em> (에너지 보존).
                  벽은 단순히 &ldquo;열저항기&rdquo;로 작동합니다 &mdash; 구동력은 <Math tex="\Delta T" />이고 저항은 <Math tex="L/(kA)" />입니다.
                  k가 높거나 L이 작으면 저항이 적어 급한 기울기가 필요 없으며, 더 많은 열이 통과합니다.
                  반대로, 좋은 단열재(낮은 k)는 같은 열유속을 위해 큰 <Math tex="\Delta T" />가 필요합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            3. COMPOSITE PLANE WALL
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-green-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-green-400 uppercase tracking-wider mb-2">
              Section 3
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Composite Plane Wall (복합 평판)</h4>
            <p className="text-gray-400 mb-6">
              실제 벽은 종종 여러 재료의 다중 층으로 구성됩니다 (예: 벽돌 + 단열재 + 석고).
              정상상태 1차원 전도에서, 열전달률 q는 <strong className="text-white">모든 층에서 동일</strong>합니다 (에너지 보존).
            </p>

            <div className="space-y-4">
              {/* Series resistance */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-green-400 font-mono mb-2">Series Thermal Resistance Network (직렬 열저항 회로)</p>
                <p className="text-sm text-gray-400 mb-3">
                  직렬로 연결된 층 A, B, C의 총 저항은 개별 저항의 합입니다:
                </p>
                <div className="text-center mb-4">
                  <Math tex="R_{\text{total}} = R_{\text{conv,1}} + R_A + R_B + R_C + R_{\text{conv,2}}" display />
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  양쪽에 대류가 있는 경우 전개하면:
                </p>
                <div className="text-center py-2">
                  <Math tex="R_{\text{total}} = \frac{1}{h_1 A} + \frac{L_A}{k_A A} + \frac{L_B}{k_B A} + \frac{L_C}{k_C A} + \frac{1}{h_2 A}" display />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  <Math tex="R_{\text{conv}} = 1/(hA)" /> is added at each fluid-solid interface.
                </p>
              </div>

              {/* Heat transfer rate */}
              <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                <p className="text-xs text-green-400 font-mono mb-2">Heat Transfer Rate</p>
                <div className="text-center py-2">
                  <Math tex="q = \frac{T_{\infty,1} - T_{\infty,2}}{R_{\text{total}}}" display />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  전체 온도차를 총 열저항으로 나누면 열전달률을 구할 수 있습니다.
                </p>
              </div>

              {/* Overall U */}
              <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                <p className="text-xs text-green-400 font-mono mb-2">Overall Heat Transfer Coefficient U (총괄 열전달 계수)</p>
                <p className="text-sm text-gray-400 mb-3">
                  모든 저항을 하나로 묶는 <strong className="text-white">총괄 열전달 계수</strong>를 정의하면 편리합니다:
                </p>
                <div className="text-center py-2">
                  <Math tex="q = UA \cdot \Delta T_{\text{overall}}" display />
                </div>
                <div className="text-center text-sm text-gray-400 my-2">where</div>
                <div className="text-center">
                  <Math tex="\frac{1}{UA} = R_{\text{total}} = \frac{1}{h_1 A} + \sum\frac{L_i}{k_i A} + \frac{1}{h_2 A}" display />
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  U의 단위는 [<Math tex="\text{W/(m}^2\!\cdot\!\text{K)}" />]입니다. 단위 면적당, 단위 온도차당 복합벽의 총체적 열전달 능력을 나타냅니다.
                </p>
              </div>

              {/* Intermediate temperatures */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-green-400 font-mono mb-2">Finding Intermediate Temperatures</p>
                <p className="text-sm text-gray-400 mb-3">
                  q가 모든 층에서 동일하므로, 저항을 하나씩 &ldquo;벗겨내어&rdquo; 임의의 경계면 온도를 구할 수 있습니다:
                </p>
                <div className="text-center py-2">
                  <Math tex="q = \frac{T_{\infty,1} - T_1}{R_{\text{conv,1}}} = \frac{T_1 - T_2}{R_A} = \frac{T_2 - T_3}{R_B} = \cdots" display />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  q를 알면, 임의의 경계면 온도 = 이전 경계면 온도 <Math tex="- q \times" /> 해당 층의 R.
                </p>
              </div>

              {/* Worked example: 3-layer wall */}
              <div className="p-5 rounded-xl bg-slate-800/30 border border-green-500/20">
                <p className="text-xs text-green-400 font-mono mb-3">Worked Example: 3-Layer Composite Wall</p>
                <p className="text-sm text-gray-400 mb-4">
                  벽이 세 개의 층으로 구성됩니다 (<Math tex="A = 1\;\text{m}^2" /> 단면적):
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-green-400 border-b border-slate-700">
                        <th className="text-left py-2 px-3">Layer</th>
                        <th className="text-center py-2 px-3">L (m)</th>
                        <th className="text-center py-2 px-3"><Math tex="k" /> (W/m·K)</th>
                        <th className="text-center py-2 px-3">R = L/(kA) (K/W)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">Brick</td>
                        <td className="text-center py-2 px-3">0.20</td>
                        <td className="text-center py-2 px-3">0.72</td>
                        <td className="text-center py-2 px-3 text-white font-mono">0.278</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">Insulation</td>
                        <td className="text-center py-2 px-3">0.08</td>
                        <td className="text-center py-2 px-3">0.04</td>
                        <td className="text-center py-2 px-3 text-white font-mono">2.000</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">Plaster</td>
                        <td className="text-center py-2 px-3">0.02</td>
                        <td className="text-center py-2 px-3">0.48</td>
                        <td className="text-center py-2 px-3 text-white font-mono">0.042</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <p>Interior: <Math tex="T_{\infty,1} = 25°\text{C}" />, <Math tex="h_1 = 10\;\text{W/m}^2\text{K}" /> <Math tex="\Rightarrow R_{\text{conv,1}} = 1/(10 \times 1) =" /> <span className="text-white font-mono">0.100</span> K/W</p>
                  <p>Exterior: <Math tex="T_{\infty,2} = -10°\text{C}" />, <Math tex="h_2 = 25\;\text{W/m}^2\text{K}" /> <Math tex="\Rightarrow R_{\text{conv,2}} = 1/(25 \times 1) =" /> <span className="text-white font-mono">0.040</span> K/W</p>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <p className="text-xs text-gray-500 mb-1">Total resistance:</p>
                    <div className="text-center text-sm">
                      <Math tex="R_{\text{total}} = 0.100 + 0.278 + 2.000 + 0.042 + 0.040 = " /> <span className="text-green-400 text-base font-bold">2.460 K/W</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <p className="text-xs text-gray-500 mb-1">Heat transfer rate:</p>
                    <div className="text-center text-sm">
                      <Math tex="q = \frac{25 - (-10)}{2.460} = \frac{35}{2.460} = " /> <span className="text-green-400 text-base font-bold">14.2 W</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <p className="text-xs text-gray-500 mb-1">Overall heat transfer coefficient:</p>
                    <div className="text-center text-sm">
                      <Math tex="U = \frac{1}{R_{\text{total}} \times A} = \frac{1}{2.460} = " /> <span className="text-green-400 text-base font-bold"><Math tex="0.407\;\text{W/(m}^2\!\cdot\!\text{K)}" /></span>
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <p className="text-xs text-gray-500 mb-1">Interface temperatures:</p>
                    <div className="space-y-1 text-sm text-gray-400">
                      <p><Math tex="T_1" /> (brick inner) = <Math tex="25 - 14.2 \times 0.100 =" /> <span className="text-white font-mono">23.6°C</span></p>
                      <p><Math tex="T_2" /> (brick/insulation) = <Math tex="23.6 - 14.2 \times 0.278 =" /> <span className="text-white font-mono">19.7°C</span></p>
                      <p><Math tex="T_3" /> (insulation/plaster) = <Math tex="19.7 - 14.2 \times 2.000 =" /> <span className="text-white font-mono">-8.7°C</span></p>
                      <p><Math tex="T_4" /> (plaster outer) = <Math tex="-8.7 - 14.2 \times 0.042 =" /> <span className="text-white font-mono">-9.3°C</span></p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  단열층이 가장 얇음에도 <Math tex="R_{\text{total}}" />의 81%를 차지합니다 &mdash; 이것이 단열이 작동하는 이유입니다!
                  단열층에서의 큰 온도 강하(19.7에서 -8.7°C)에 주목하십시오.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            4. CONTACT RESISTANCE
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-green-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-green-400 uppercase tracking-wider mb-2">
              Section 4
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Contact Resistance (접촉 열저항)</h4>
            <p className="text-gray-400 mb-6">
              실제 표면은 완벽하게 매끄럽지 않습니다. 두 고체가 접촉하면, 경계면에 미세한 공기 틈이 존재하여 추가적인 열저항을 생성합니다.
            </p>

            <div className="space-y-4">
              {/* Physical mechanism */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-green-400 font-mono mb-2">Physical Mechanism</p>
                <p className="text-sm text-gray-400 mb-3">
                  두 고체 사이의 접합부에서 열은 다음을 통해 전달됩니다:
                </p>
                <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                  <li>돌기 꼭대기에서의 <strong className="text-white">직접 고체-고체 접촉</strong> (전도 양호, 그러나 면적 매우 작음 &mdash; 겉보기 접촉 면적의 1-2%에 불과)</li>
                  <li>돌기 사이의 <strong className="text-white">틈을 채우는 가스(공기)</strong> (전도 불량: <Math tex="k_{\text{air}} = 0.026\;\text{W/m·K}" />)</li>
                  <li>틈을 가로지르는 <strong className="text-white">복사</strong> (일반적으로 ~300°C 이하의 보통 온도에서 무시 가능)</li>
                </ul>
                <p className="text-sm text-gray-400 mt-3">
                  최종 효과는 물리적 두께가 0임에도 경계면을 가로지르는 <strong className="text-white">온도 강하 <Math tex="\Delta T_c" /></strong>입니다.
                  이는 열 흐름 경로의 &ldquo;열적 과속방지턱&rdquo;에 비유할 수 있습니다.
                </p>
              </div>

              {/* Definition */}
              <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                <p className="text-xs text-green-400 font-mono mb-2">Thermal Contact Resistance</p>
                <div className="text-center py-3">
                  <Math tex="R''_{t,c} = \frac{\Delta T_c}{q''} \quad [\text{m}^2\!\cdot\!\text{K/W}]" display />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  To use in a resistance network: <Math tex="R_{t,c} = R''_{t,c} / A_c" /> [K/W]
                </p>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  <Math tex="R''_{t,c}" /> is defined per unit area. Divide by contact area to get absolute resistance.
                </p>
              </div>

              {/* Factors */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-green-400 font-mono mb-3">Factors Affecting Contact Resistance</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-green-400 mb-1">Surface roughness (표면 거칠기)</p>
                    <p className="text-sm text-gray-400">거친 표면 &rarr; 접촉점 감소 &rarr; 높은 <Math tex="R_{t,c}" /></p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-green-400 mb-1">Contact pressure (접촉 압력)</p>
                    <p className="text-sm text-gray-400">높은 압력 &rarr; 돌기 변형 &rarr; 접촉 면적 증가 &rarr; 낮은 <Math tex="R_{t,c}" /></p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-green-400 mb-1">Interstitial fluid (간극 유체)</p>
                    <p className="text-sm text-gray-400">공기 (<Math tex="k=0.026" />) vs thermal grease (<Math tex="k \sim 3\text{-}5" />)는 엄청난 차이를 만듦</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-green-400 mb-1">Material hardness (재료 경도)</p>
                    <p className="text-sm text-gray-400">부드러운 재료일수록 쉽게 변형 &rarr; 실제 접촉 면적 증가 &rarr; 낮은 <Math tex="R_{t,c}" /></p>
                  </div>
                </div>
              </div>

              {/* Typical values */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-green-400 font-mono mb-3">Typical Values of <Math tex="R''_{t,c}" /></p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-green-400 border-b border-slate-700">
                        <th className="text-left py-2 px-3">Interface Type</th>
                        <th className="text-center py-2 px-3"><Math tex="R''_{t,c}" /> (<Math tex="\text{m}^2\!\cdot\!\text{K/W}" />)</th>
                        <th className="text-center py-2 px-3">Conditions</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">Metal-metal (ground surfaces)</td>
                        <td className="text-center py-2 px-3 font-mono text-white"><Math tex="10^{-4}" /> &ndash; <Math tex="10^{-2}" /></td>
                        <td className="text-center py-2 px-3 text-xs">Air in gaps</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">Metal-metal (with thermal grease)</td>
                        <td className="text-center py-2 px-3 font-mono text-white"><Math tex="\sim 0.3 \times 10^{-4}" /></td>
                        <td className="text-center py-2 px-3 text-xs">Grease fills gaps</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">Ceramic-ceramic</td>
                        <td className="text-center py-2 px-3 font-mono text-white"><Math tex="10^{-2}" /> &ndash; <Math tex="10^{-1}" /></td>
                        <td className="text-center py-2 px-3 text-xs">Very hard, poor conformity</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">Silicon chip &ndash; Al heat sink</td>
                        <td className="text-center py-2 px-3 font-mono text-white"><Math tex="\sim 0.5 \times 10^{-4}" /></td>
                        <td className="text-center py-2 px-3 text-xs">With TIM</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">Aluminum-aluminum (pressed)</td>
                        <td className="text-center py-2 px-3 font-mono text-white"><Math tex="\sim 2.75 \times 10^{-4}" /></td>
                        <td className="text-center py-2 px-3 text-xs">~10 atm pressure</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Methods to reduce */}
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <p className="text-xs text-green-400 font-mono mb-3">Methods to Reduce Contact Resistance</p>
                <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                  <li><strong className="text-white">Thermal grease / paste</strong> &mdash; 공기 틈을 높은 k의 유체로 채움 (<Math tex="k \sim 3\text{-}5\;\text{W/m·K}" /> vs 공기 0.026)</li>
                  <li><strong className="text-white">연질 금속 호일</strong> (인듐, 주석, 납) &mdash; 변형되어 틈을 채우며, 우수한 밀착성</li>
                  <li><strong className="text-white">높은 접촉 압력</strong> &mdash; 돌기의 소성 변형을 통해 실제 접촉 면적 증가</li>
                  <li><strong className="text-white">매끄러운 표면 마감</strong> &mdash; 틈 크기 감소 및 실제 접촉 비율 증가</li>
                  <li><strong className="text-white">열 인터페이스 재료 (TIM)</strong> &mdash; 상변화 재료, 탄소나노튜브 배열, 그래핀 시트</li>
                  <li><strong className="text-white">진공 또는 불활성 가스</strong> &mdash; R을 증가시키기 위해 사용되기도 함 (우주선의 열 스위치)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            5. CYLINDRICAL SHELL
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-cyan-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-2">
              Section 5
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Cylindrical Shell (원통)</h4>
            <p className="text-gray-400 mb-6">
              파이프, 튜브, 원통형 단열재는 공학에서 매우 흔합니다. 열은 원통 벽을 통해 반경 방향으로 흐릅니다.
              평판과의 핵심 차이점은 <strong className="text-white">면적이 반경에 따라 변한다</strong>는 것입니다.
            </p>

            <div className="space-y-4">
              {/* Governing */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-cyan-400 font-mono mb-2">Governing Equation (1D radial, cylindrical coordinates)</p>
                <div className="text-center py-2">
                  <Math tex="\frac{1}{r}\frac{d}{dr}\!\left(r\frac{dT}{dr}\right) = 0" display />
                </div>
                <p className="text-xs text-gray-500 text-center mt-1">
                  Steady state, no generation, constant k, radial symmetry (<Math tex="\partial T/\partial\theta = 0" />, <Math tex="\partial T/\partial z = 0" />).
                </p>
              </div>

              {/* Step-by-step */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-cyan-400 font-mono mb-3">Step-by-Step Integration</p>
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Since r &ne; 0 in the domain, multiply both sides by r:</p>
                    <div className="text-center">
                      <Math tex="\frac{d}{dr}\!\left(r\frac{dT}{dr}\right) = 0" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">First integration with respect to r:</p>
                    <div className="text-center">
                      <Math tex="r\frac{dT}{dr} = C_1" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Divide both sides by r:</p>
                    <div className="text-center">
                      <Math tex="\frac{dT}{dr} = \frac{C_1}{r}" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-center">
                      참고: 기울기 dT/dr은 상수가 아닙니다 &mdash; 1/r로 감소합니다.
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Second integration:</p>
                    <div className="text-center">
                      <Math tex="T(r) = C_1\ln(r) + C_2" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-center">
                      The <Math tex="\int(1/r)\,dr = \ln(r)" /> gives rise to the logarithmic profile.
                    </p>
                  </div>
                </div>
              </div>

              {/* BCs */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-cyan-400 font-mono mb-2">Boundary Conditions & Constants</p>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">BC 1: <Math tex="r = r_i" /></p>
                    <div className="text-center">
                      <Math tex="T(r_i) = T_{s,i}" />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">BC 2: <Math tex="r = r_o" /></p>
                    <div className="text-center">
                      <Math tex="T(r_o) = T_{s,o}" />
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700 text-sm text-gray-400">
                  <p className="text-xs text-gray-500 mb-2">Solving the system:</p>
                  <p><Math tex={"C_1 = \\frac{T_{s,o} - T_{s,i}}{\\ln(r_o/r_i)}"} /></p>
                  <p className="mt-1"><Math tex={"C_2 = T_{s,i} - C_1\\ln(r_i)"} /></p>
                </div>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                <p className="text-xs text-cyan-400 font-mono mb-2">Final Temperature Distribution</p>
                <div className="text-center py-3">
                  <Math tex="T(r) = T_{s,i} + (T_{s,o} - T_{s,i})\frac{\ln(r/r_i)}{\ln(r_o/r_i)}" display />
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  <strong className="text-white">대수 프로파일</strong> (대수 온도 분포) &mdash; 선형이 아닙니다!
                  <Math tex="T_{s,i} > T_{s,o}" />일 때 온도 곡선은 오목합니다.
                </p>
              </div>

              {/* Heat rate & resistance */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-gray-500 mb-2">Heat Transfer Rate</p>
                  <div className="text-center">
                    <Math tex="q_r = \frac{2\pi Lk(T_{s,i} - T_{s,o})}{\ln(r_o/r_i)}" display />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    <Math tex="q_r" /> is constant with r (energy conservation in steady state with no generation).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-gray-500 mb-2">Thermal Resistance</p>
                  <div className="text-center">
                    <Math tex="R_{\text{cond,cyl}} = \frac{\ln(r_o/r_i)}{2\pi kL}" display />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Units: [K/W]. Depends on the radius <em>ratio</em>, not the thickness alone!
                  </p>
                </div>
              </div>

              {/* Physical insight */}
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <p className="text-xs text-cyan-400 font-mono mb-2">Key Difference from Plane Wall</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  원통에서는 열이 흐르는 면적이 <strong className="text-white">반경에 따라 변합니다</strong>: <Math tex="A(r) = 2\pi rL" />은 r이 증가하면 증가합니다.
                  이것이 온도 프로파일이 선형이 아닌 대수적인 이유입니다.
                  <Math tex="q_r" />은 일정하지만, 열유속 <Math tex="q'' = q_r/(2\pi rL)" />은 면적이 커지므로 <strong className="text-white">r에 따라 감소</strong>합니다.
                  기울기 <Math tex="dT/dr = C_1/r" />도 r에 따라 감소합니다 &mdash; 온도 프로파일이 외면으로 갈수록 완만해집니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            6. COMPOSITE CYLINDER
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-cyan-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-2">
              Section 6
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Composite Cylindrical Wall (복합 원통벽)</h4>
            <p className="text-gray-400 mb-6">
              외부에 단열재가 있는 고온 유체 배관: 내부 대류 + 배관 벽 + 단열재 + 외부 대류.
              이것은 산업용 배관 시스템에서 가장 일반적인 구성입니다.
            </p>

            <div className="space-y-4">
              {/* Resistance network */}
              <div className="p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                <p className="text-xs text-cyan-400 font-mono mb-3">Total Thermal Resistance (for pipe of length L)</p>
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <p className="text-xs text-gray-500 mb-1">Inner convection (fluid to pipe inner wall):</p>
                    <div className="text-center text-sm">
                      <Math tex="R_{\text{conv,i}} = \frac{1}{h_i \cdot 2\pi r_1 L}" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <p className="text-xs text-gray-500 mb-1">Pipe wall conduction (<Math tex="r_1" /> to <Math tex="r_2" />):</p>
                    <div className="text-center text-sm">
                      <Math tex="R_{\text{pipe}} = \frac{\ln(r_2/r_1)}{2\pi k_{\text{pipe}} L}" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <p className="text-xs text-gray-500 mb-1">Insulation conduction (<Math tex="r_2" /> to <Math tex="r_3" />):</p>
                    <div className="text-center text-sm">
                      <Math tex="R_{\text{ins}} = \frac{\ln(r_3/r_2)}{2\pi k_{\text{ins}} L}" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <p className="text-xs text-gray-500 mb-1">Outer convection (insulation outer to ambient):</p>
                    <div className="text-center text-sm">
                      <Math tex="R_{\text{conv,o}} = \frac{1}{h_o \cdot 2\pi r_3 L}" display />
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-2xl bg-slate-900 border border-cyan-500/30">
                  <p className="text-xs text-cyan-400 mb-1">Total:</p>
                  <div className="text-center">
                    <Math tex="R_{\text{total}} = \frac{1}{h_i 2\pi r_1 L} + \frac{\ln(r_2/r_1)}{2\pi k_1 L} + \frac{\ln(r_3/r_2)}{2\pi k_2 L} + \frac{1}{h_o 2\pi r_3 L}" display />
                  </div>
                </div>
              </div>

              {/* Heat transfer */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-cyan-400 font-mono mb-2">Heat Transfer Rate</p>
                <div className="text-center py-2">
                  <Math tex="q = \frac{T_{\infty,i} - T_{\infty,o}}{R_{\text{total}}}" display />
                </div>
              </div>

              {/* Important note on area */}
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <p className="text-xs text-cyan-400 font-mono mb-2">Important: Area-Based U for Cylinders</p>
                <p className="text-sm text-gray-400 mb-3">
                  원통 시스템에서는 각 저항이 <strong className="text-white">서로 다른 면적</strong>을 가집니다.
                  총괄 U를 정의할 때, <strong className="text-white">어느 면적</strong>을 기준으로 하는지 명시해야 합니다 (내면 또는 외면):
                </p>
                <div className="text-center mt-3">
                  <Math tex="q = U_i A_i \Delta T = U_o A_o \Delta T" display />
                </div>
                <p className="text-sm text-gray-400 mt-3 text-center">
                  <Math tex="U_i A_i = U_o A_o = 1/R_{\text{total}}" />
                </p>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Convention: U is usually based on the <em>outer</em> surface area in industrial practice.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            7. CRITICAL RADIUS OF INSULATION
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-emerald-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-2">
              Section 7
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Critical Radius of Insulation (임계 반지름)</h4>
            <p className="text-gray-400 mb-6">
              직관에 반하는 결과: 작은 원통에 단열재를 추가하면 열손실이 줄어드는 대신 오히려 <strong className="text-white">증가</strong>할 수 있습니다!
            </p>

            <div className="space-y-4">
              {/* Physical explanation */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-emerald-400 font-mono mb-3">Physical Explanation: Two Competing Effects</p>
                <p className="text-sm text-gray-400 mb-3">
                  반경 <Math tex="r_i" />인 원통에 외경 r인 단열재를 추가하면, 두 가지 상반된 효과가 동시에 발생합니다:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-900 border border-red-500/20">
                    <p className="text-xs text-red-400 font-mono mb-2">Effect 1: Conduction R increases</p>
                    <div className="text-center text-sm">
                      <Math tex="R_{\text{cond}} = \frac{\ln(r/r_i)}{2\pi kL}\;\uparrow" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">열이 통과해야 할 재료가 더 많아짐. 이는 열 흐름을 <strong className="text-red-400">방해</strong>합니다.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 border border-green-500/20">
                    <p className="text-xs text-green-400 font-mono mb-2">Effect 2: Convection R decreases</p>
                    <div className="text-center text-sm">
                      <Math tex="R_{\text{conv}} = \frac{1}{h \cdot 2\pi rL}\;\downarrow" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">대류를 위한 외부 표면적 증가. 이는 열 방출을 <strong className="text-green-400">촉진</strong>합니다.</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4 text-center">
                  외경이 작을 때는 대류 면적 증가가 <strong className="text-white">지배적</strong>이어서 <Math tex="R_{\text{total}}" />이 감소합니다 (열손실 증가).
                </p>
              </div>

              {/* Derivation */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-emerald-400 font-mono mb-3">Derivation of Critical Radius</p>
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Total resistance as a function of outer radius r:</p>
                    <div className="text-center">
                      <Math tex="R_{\text{total}}(r) = \frac{\ln(r/r_i)}{2\pi kL} + \frac{1}{h \cdot 2\pi rL}" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">To find the minimum <Math tex="R_{\text{total}}" />, differentiate and set to zero:</p>
                    <div className="text-center">
                      <Math tex="\frac{dR_{\text{total}}}{dr} = \frac{1}{2\pi kLr} - \frac{1}{2\pi hLr^2} = 0" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Simplify:</p>
                    <div className="text-center">
                      <Math tex="\frac{1}{kr} = \frac{1}{hr^2} \;\Rightarrow\; hr^2 = kr \;\Rightarrow\; r = \frac{k}{h}" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Verify this is a minimum (not maximum):</p>
                    <div className="text-center text-sm">
                      <Math tex="\left.\frac{d^2R}{dr^2}\right|_{r=k/h} = \frac{h}{2\pi k^3 L} > 0 \;\text{(minimum confirmed)}" display />
                    </div>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <p className="text-xs text-emerald-400 font-mono mb-3">Critical Radius Formulas</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                    <p className="text-xs text-gray-500 mb-2">Cylinder (원통)</p>
                    <div>
                      <Math tex="r_{cr} = \frac{k}{h}" display />
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                    <p className="text-xs text-gray-500 mb-2">Sphere (구)</p>
                    <div>
                      <Math tex="r_{cr} = \frac{2k}{h}" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      (factor of 2 due to <Math tex="A = 4\pi r^2" />)
                    </p>
                  </div>
                </div>
              </div>

              {/* Interpretation */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-emerald-400 font-mono mb-3">Interpretation</p>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-red-500/20">
                    <strong className="text-white">If <Math tex="r_o < r_{cr}" /></strong>: Adding insulation <strong className="text-red-400">increases</strong> heat loss (<Math tex="R_{\text{total}}" /> decreases as r increases toward <Math tex="r_{cr}" />). The area effect wins.
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-yellow-500/20">
                    <strong className="text-white">If <Math tex="r_o = r_{cr}" /></strong>: Heat loss is at its <strong className="text-yellow-400">maximum</strong> (<Math tex="R_{\text{total}}" /> is minimum). Worst case for insulation!
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-green-500/20">
                    <strong className="text-white">If <Math tex="r_o > r_{cr}" /></strong>: Adding more insulation <strong className="text-green-400">decreases</strong> heat loss as expected. The conduction resistance effect wins.
                  </div>
                </div>
              </div>

              {/* Practical example */}
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <p className="text-xs text-emerald-400 font-mono mb-3">Practical Significance</p>
                <p className="text-sm text-gray-400 mb-3">
                  자연 대류 공기(<Math tex="h \approx 10\;\text{W/m}^2\!\cdot\!\text{K}" />)에서 일반적인 단열재(<Math tex="k \approx 0.05\;\text{W/m·K}" />)의 경우:
                </p>
                <div className="text-center py-3">
                  <Math tex="r_{cr} = \frac{0.05}{10} = 0.005\;\text{m} = 5\;\text{mm}" display />
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-400">
                  <p>
                    이는 <strong className="text-white">가는 전선</strong> (<Math tex="r \sim 1\text{-}3\;\text{mm}" />)과 <strong className="text-white">소구경 튜브</strong>에만 해당됩니다.
                  </p>
                  <p>
                    대형 산업용 배관(<Math tex="r \gg r_{cr}" />)에서는 단열재 추가가 항상 열손실을 줄입니다 &mdash; 임계 반경 걱정 없음.
                  </p>
                  <p>
                    전자 냉각에서 이 효과를 <strong className="text-white">의도적으로 활용</strong>할 수 있습니다: 작은 전선이나 부품에 얇고 높은 k의 &ldquo;단열&rdquo; 층을 추가하면 대류 면적 증가로 열 방출을 향상시킬 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            8. SPHERICAL SHELL
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border-l-4 border-teal-500/30 border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-2">
              Section 8
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Spherical Shell (구)</h4>
            <p className="text-gray-400 mb-6">
              구형 형상은 압력 용기, 저장 탱크, 반응기 용기, 생체 세포, 구형 컨테이너에서 나타납니다.
              열은 반경 방향으로 흐르며, 면적이 <Math tex="4\pi r^2" />로 변합니다.
            </p>

            <div className="space-y-4">
              {/* Governing */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-teal-400 font-mono mb-2">Governing Equation (1D radial, spherical coordinates)</p>
                <div className="text-center py-2">
                  <Math tex="\frac{1}{r^2}\frac{d}{dr}\!\left(r^2\frac{dT}{dr}\right) = 0" display />
                </div>
                <p className="text-xs text-gray-500 text-center mt-1">
                  Steady state, no generation, constant k, radial symmetry.
                </p>
              </div>

              {/* Derivation */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-teal-400 font-mono mb-3">Step-by-Step Integration</p>
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Multiply both sides by <Math tex="r^2" />:</p>
                    <div className="text-center">
                      <Math tex="\frac{d}{dr}\!\left(r^2\frac{dT}{dr}\right) = 0" display />
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">First integration:</p>
                    <div className="text-center">
                      <Math tex="r^2\frac{dT}{dr} = C_1" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-center">
                      <Math tex="dT/dr = C_1/r^2" /> &mdash; gradient decreases as <Math tex="1/r^2" />, even faster than the cylinder.
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700">
                    <p className="text-xs text-gray-500 mb-1">Second integration (<Math tex="\int r^{-2}\,dr = -1/r" />):</p>
                    <div className="text-center">
                      <Math tex="T(r) = -\frac{C_1}{r} + C_2" display />
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-center">
                      A 1/r profile &mdash; neither linear nor logarithmic. A third distinct shape.
                    </p>
                  </div>
                </div>
              </div>

              {/* BCs & Solution */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-teal-400 font-mono mb-3">Boundary Conditions & Solution</p>
                <p className="text-sm text-gray-400 mb-3">
                  With <Math tex="T(r_i) = T_{s,i}" /> and <Math tex="T(r_o) = T_{s,o}" />:
                </p>
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
                    <span className="text-xs text-gray-500">From BC1:</span> <Math tex="T_{s,i} = -C_1/r_i + C_2" />
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
                    <span className="text-xs text-gray-500">From BC2:</span> <Math tex="T_{s,o} = -C_1/r_o + C_2" />
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
                    <span className="text-xs text-gray-500">Subtract:</span> <Math tex={"T_{s,i} - T_{s,o} = C_1(1/r_o - 1/r_i) \\;\\Rightarrow\\; C_1 = \\frac{T_{s,i} - T_{s,o}}{1/r_o - 1/r_i}"} />
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/20 text-center">
                  <p className="text-xs text-teal-400 font-mono mb-2">Temperature Distribution</p>
                  <div>
                    <Math tex="T(r) = T_{s,i} - (T_{s,i} - T_{s,o})\frac{1/r_i - 1/r}{1/r_i - 1/r_o}" display />
                  </div>
                </div>
              </div>

              {/* Heat rate & resistance */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/20">
                  <p className="text-xs text-gray-500 mb-2">Heat Transfer Rate</p>
                  <div className="text-center">
                    <Math tex="q_r = \frac{4\pi k(T_{s,i} - T_{s,o})}{1/r_i - 1/r_o}" display />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Derived from <Math tex="q = -kA(dT/dr)" /> with <Math tex="A = 4\pi r^2" />.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/20">
                  <p className="text-xs text-gray-500 mb-2">Thermal Resistance</p>
                  <div className="text-center">
                    <Math tex="R_{\text{sph}} = \frac{1/r_i - 1/r_o}{4\pi k}" display />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Units: [K/W]. Note: involves 1/r, not ln(r).
                  </p>
                </div>
              </div>

              {/* Special case */}
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <p className="text-xs text-teal-400 font-mono mb-2">Special Case: Sphere in Infinite Medium</p>
                <p className="text-sm text-gray-400 mb-2">
                  As <Math tex="r_o \to \infty" />, <Math tex="1/r_o \to 0" />. Then:
                </p>
                <div className="text-center py-2">
                  <Math tex="R_{\text{sph},\infty} = \frac{1}{4\pi k r_i}" display />
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  이것은 반경 <Math tex="r_i" />인 구에서 무한 주위 매질까지의 전도 저항을 제공합니다.
                  매설물, 유체 내 나노입자, 과일 냉각의 열 해석 등에 유용합니다.
                </p>
              </div>

              {/* Convection resistance for sphere */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-teal-400 font-mono mb-2">Convection Resistance for a Sphere</p>
                <div className="text-center">
                  <Math tex="R_{\text{conv,sph}} = \frac{1}{h \cdot 4\pi r_o^2}" display />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Used when the outer surface exchanges heat with a surrounding fluid by convection.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            9. COMPARISON TABLE
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-slate-950 p-8"
          >
            <h3 className="text-sm font-mono text-green-400 uppercase tracking-wider mb-2">
              Section 9
            </h3>
            <h4 className="text-2xl font-bold text-white mb-6">
              Comprehensive Comparison: Plane Wall vs Cylinder vs Sphere
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-700">
                    <th className="text-left py-3 px-3 text-gray-500">Property</th>
                    <th className="text-center py-3 px-3 text-green-400">Plane Wall</th>
                    <th className="text-center py-3 px-3 text-cyan-400">Cylinder</th>
                    <th className="text-center py-3 px-3 text-teal-400">Sphere</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-3 text-gray-500 text-xs">Coordinate</td>
                    <td className="text-center py-3 px-3"><Math tex="x" /></td>
                    <td className="text-center py-3 px-3"><Math tex="r" /></td>
                    <td className="text-center py-3 px-3"><Math tex="r" /></td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-3 text-gray-500 text-xs">Area A</td>
                    <td className="text-center py-3 px-3 text-green-300">A (const)</td>
                    <td className="text-center py-3 px-3 text-cyan-300"><Math tex="2\pi rL" /></td>
                    <td className="text-center py-3 px-3 text-teal-300"><Math tex="4\pi r^2" /></td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-3 text-gray-500 text-xs">Governing Eq.</td>
                    <td className="text-center py-3 px-3 text-green-300"><Math tex="\frac{d^2T}{dx^2}=0" /></td>
                    <td className="text-center py-3 px-3 text-cyan-300"><Math tex="\frac{1}{r}\frac{d}{dr}\!\left(r\frac{dT}{dr}\right)=0" /></td>
                    <td className="text-center py-3 px-3 text-teal-300"><Math tex="\frac{1}{r^2}\frac{d}{dr}\!\left(r^2\frac{dT}{dr}\right)=0" /></td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-3 text-gray-500 text-xs">General Solution</td>
                    <td className="text-center py-3 px-3 text-green-300"><Math tex="C_1 x + C_2" /></td>
                    <td className="text-center py-3 px-3 text-cyan-300"><Math tex="C_1\ln(r)+C_2" /></td>
                    <td className="text-center py-3 px-3 text-teal-300"><Math tex="-C_1/r+C_2" /></td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-3 text-gray-500 text-xs">T profile shape</td>
                    <td className="text-center py-3 px-3 text-green-300">Linear</td>
                    <td className="text-center py-3 px-3 text-cyan-300">Logarithmic</td>
                    <td className="text-center py-3 px-3 text-teal-300">Hyperbolic (1/r)</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-3 text-gray-500 text-xs">Heat Rate q</td>
                    <td className="text-center py-3 px-3 text-green-300"><Math tex="kA\Delta T/L" /></td>
                    <td className="text-center py-3 px-3 text-cyan-300"><Math tex="\frac{2\pi kL\Delta T}{\ln(r_o/r_i)}" /></td>
                    <td className="text-center py-3 px-3 text-teal-300"><Math tex="\frac{4\pi k\Delta T}{1/r_i - 1/r_o}" /></td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-3 text-gray-500 text-xs">Resistance R</td>
                    <td className="text-center py-3 px-3 text-green-300"><Math tex="L/(kA)" /></td>
                    <td className="text-center py-3 px-3 text-cyan-300"><Math tex="\frac{\ln(r_o/r_i)}{2\pi kL}" /></td>
                    <td className="text-center py-3 px-3 text-teal-300"><Math tex="\frac{1/r_i - 1/r_o}{4\pi k}" /></td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-3 px-3 text-gray-500 text-xs"><Math tex="R_{\text{conv}}" /></td>
                    <td className="text-center py-3 px-3 text-green-300"><Math tex="1/(hA)" /></td>
                    <td className="text-center py-3 px-3 text-cyan-300"><Math tex="1/(h \cdot 2\pi rL)" /></td>
                    <td className="text-center py-3 px-3 text-teal-300"><Math tex="1/(h \cdot 4\pi r^2)" /></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-gray-500 text-xs">Critical radius <Math tex="r_{cr}" /></td>
                    <td className="text-center py-3 px-3 text-gray-600">N/A</td>
                    <td className="text-center py-3 px-3 text-cyan-300"><Math tex="k/h" /></td>
                    <td className="text-center py-3 px-3 text-teal-300"><Math tex="2k/h" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-800/30 border border-slate-700">
              <p className="text-xs text-green-400 font-mono mb-2">Pattern Recognition</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                프로파일이 다른 근본적인 이유는 <strong className="text-white">위치에 따른 면적 변화</strong>입니다.
                평판에서 A는 일정 &rarr; 선형. 원통에서 <Math tex="A \propto r" /> &rarr; 대수적.
                구에서 <Math tex="A \propto r^2" /> &rarr; 1/r 프로파일. 면적의 &ldquo;확산&rdquo;으로 온도 기울기가 더 빠르게 감소하여,
                평판 &rarr; 원통 &rarr; 구로 갈수록 점점 더 오목한 프로파일을 나타냅니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            10. WORKED EXAMPLE: STEAM PIPE
        ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-slate-950 p-8"
          >
            <h3 className="text-sm font-mono text-green-400 uppercase tracking-wider mb-2">
              Section 10
            </h3>
            <h4 className="text-2xl font-bold text-white mb-2">Worked Example: Insulated Steam Pipe</h4>
            <p className="text-gray-400 mb-6">
              강관이 증기를 운반합니다. 미터당 총 열저항, 미터당 열손실, 외부 표면 온도를 계산합니다.
            </p>

            <div className="space-y-4">
              {/* Given data */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-green-400 font-mono mb-3">Given Data</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div className="space-y-1">
                    <p className="text-green-400 font-medium">Steel pipe:</p>
                    <p><Math tex="k_{\text{steel}} = 60\;\text{W/m·K}" /></p>
                    <p>Inner radius: <Math tex="r_1" /> = 5 cm = 0.05 m</p>
                    <p>Outer radius: <Math tex="r_2" /> = 6 cm = 0.06 m</p>
                    <p>Wall thickness: 1 cm</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-green-400 font-medium">Insulation:</p>
                    <p><Math tex="k_{\text{ins}} = 0.05\;\text{W/m·K}" /></p>
                    <p>Outer radius: <Math tex="r_3" /> = 11 cm = 0.11 m</p>
                    <p>Insulation thickness: 5 cm</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-green-400 font-medium">Steam (inside):</p>
                    <p><Math tex="T_{\infty,i} = 150°\text{C}" /></p>
                    <p><Math tex="h_i = 200\;\text{W/m}^2\!\cdot\!\text{K}" /></p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-green-400 font-medium">Air (outside):</p>
                    <p><Math tex="T_{\infty,o} = 25°\text{C}" /></p>
                    <p><Math tex="h_o = 15\;\text{W/m}^2\!\cdot\!\text{K}" /></p>
                  </div>
                </div>
              </div>

              {/* Step 1: Individual resistances */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-green-400 font-mono mb-3">Step 1: Calculate Individual Resistances (per meter, L = 1 m)</p>
                <div className="space-y-3 text-sm">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center p-3 rounded-xl bg-slate-900 border border-slate-700 gap-1">
                    <span className="text-gray-400">Inner convection:</span>
                    <span className="text-green-300">
                      <Math tex="R_{\text{conv,i}} = 1/(200 \times 2\pi \times 0.05 \times 1) =" /> <strong className="text-white">0.01592</strong> K/W
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center p-3 rounded-xl bg-slate-900 border border-slate-700 gap-1">
                    <span className="text-gray-400">Steel pipe wall:</span>
                    <span className="text-green-300">
                      <Math tex="R_{\text{steel}} = \ln(0.06/0.05)/(2\pi \times 60 \times 1) =" /> <strong className="text-white">0.000484</strong> K/W
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center p-3 rounded-xl bg-slate-900 border border-slate-700 gap-1">
                    <span className="text-gray-400">Insulation layer:</span>
                    <span className="text-green-300">
                      <Math tex="R_{\text{ins}} = \ln(0.11/0.06)/(2\pi \times 0.05 \times 1) =" /> <strong className="text-white">1.9108</strong> K/W
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center p-3 rounded-xl bg-slate-900 border border-slate-700 gap-1">
                    <span className="text-gray-400">Outer convection:</span>
                    <span className="text-green-300">
                      <Math tex="R_{\text{conv,o}} = 1/(15 \times 2\pi \times 0.11 \times 1) =" /> <strong className="text-white">0.09646</strong> K/W
                    </span>
                  </div>
                </div>
              </div>

              {/* Percentage breakdown */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-green-400 font-mono mb-3">Resistance Breakdown</p>
                <div className="space-y-2">
                  {[
                    { label: "Inner convection", val: 0.01592, pct: 0.8, color: "bg-blue-500" },
                    { label: "Steel pipe", val: 0.000484, pct: 0.024, color: "bg-gray-500" },
                    { label: "Insulation", val: 1.9108, pct: 94.4, color: "bg-green-500" },
                    { label: "Outer convection", val: 0.09646, pct: 4.8, color: "bg-orange-500" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 w-32 shrink-0">{item.label}</span>
                      <div className="flex-1 h-5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.pct < 1 ? 1 : item.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.15 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                      <span className="text-xs text-white font-mono w-16 text-right">{item.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                <p className="text-xs text-green-400 font-mono mb-3">Step 2: Total Resistance</p>
                <div className="text-center">
                  <div className="mb-2">
                    <Math tex="R_{\text{total}} = 0.01592 + 0.000484 + 1.9108 + 0.09646" />
                  </div>
                  <div className="text-2xl font-bold text-green-400 py-2">
                    <Math tex="R_{\text{total}} = 2.0237\;\text{K/W}" /> (per meter)
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    The insulation dominates at 94.4% of total resistance. Steel pipe contributes only 0.024%.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                <p className="text-xs text-green-400 font-mono mb-3">Step 3: Heat Loss per Meter</p>
                <div className="text-center">
                  <div className="mb-2">
                    <Math tex="q = \frac{T_{\infty,i} - T_{\infty,o}}{R_{\text{total}}} = \frac{150 - 25}{2.0237}" display />
                  </div>
                  <div className="text-2xl font-bold text-green-400 py-2">
                    q = 61.8 W/m
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/20">
                <p className="text-xs text-green-400 font-mono mb-3">Step 4: Outer Surface Temperature</p>
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-2">From the outer convection resistance:</p>
                  <div className="mb-2">
                    <Math tex="q = \frac{T_{s,o} - T_{\infty,o}}{R_{\text{conv,o}}}" display />
                  </div>
                  <div className="mb-2">
                    <Math tex="T_{s,o} = T_{\infty,o} + q \cdot R_{\text{conv,o}} = 25 + 61.8 \times 0.09646" display />
                  </div>
                  <div className="text-2xl font-bold text-green-400 py-2">
                    <Math tex="T_{s,o} = 31.0\text{°C}" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    외부 표면이 주위보다 단 6°C 높습니다 &mdash; 단열재가 제 역할을 하고 있습니다!
                    접촉 가능한 온도 (화상 임계값 <Math tex="\sim 60°\text{C}" /> 이하).
                  </p>
                </div>
              </div>

              {/* All interface temperatures */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-green-400 font-mono mb-3">All Interface Temperatures</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 rounded-xl bg-slate-900 border border-slate-700">
                    <span className="text-gray-400">Steam (bulk):</span>
                    <span className="text-white font-mono">150.0°C</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-xl bg-slate-900 border border-slate-700">
                    <span className="text-gray-400">Pipe inner wall (<Math tex="r_1" />):</span>
                    <span className="text-white font-mono"><Math tex="150.0 - 61.8 \times 0.01592 = 149.0°\text{C}" /></span>
                  </div>
                  <div className="flex justify-between p-2 rounded-xl bg-slate-900 border border-slate-700">
                    <span className="text-gray-400">Pipe outer / insulation inner (<Math tex="r_2" />):</span>
                    <span className="text-white font-mono"><Math tex="149.0 - 61.8 \times 0.000484 = 149.0°\text{C}" /></span>
                  </div>
                  <div className="flex justify-between p-2 rounded-xl bg-slate-900 border border-slate-700">
                    <span className="text-gray-400">Insulation outer (<Math tex="r_3" />):</span>
                    <span className="text-white font-mono"><Math tex="149.0 - 61.8 \times 1.9108 = 31.0°\text{C}" /></span>
                  </div>
                  <div className="flex justify-between p-2 rounded-xl bg-slate-900 border border-slate-700">
                    <span className="text-gray-400">Air (bulk):</span>
                    <span className="text-white font-mono">25.0°C</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  거의 모든 온도 강하가 단열재에서 발생합니다 (149°C → 31°C, 즉 전체 125°C 중 118°C 강하).
                  강관은 온도 강하가 사실상 0입니다 &mdash; 높은 열전도율로 인해 열적으로 &ldquo;투명&rdquo;합니다.
                </p>
              </div>

              {/* Critical radius check */}
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                <p className="text-xs text-green-400 font-mono mb-2">Bonus Check: Critical Radius</p>
                <p className="text-sm text-gray-400">
                  <Math tex="r_{cr} = k_{\text{ins}}/h_o = 0.05/15 = 0.0033\;\text{m} = " /> <strong className="text-white">3.3 mm</strong>.
                  <Math tex="r_2" /> = 60 mm &gt;&gt; <Math tex="r_{cr}" /> = 3.3 mm이므로, 임계 반경을 훨씬 초과합니다.
                  이 경우 단열재 추가는 확실히 열손실을 줄입니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

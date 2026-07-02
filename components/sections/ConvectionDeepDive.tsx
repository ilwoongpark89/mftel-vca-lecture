"use client";

import { motion } from "framer-motion";
import Math from "@/components/Math";

const hValues = [
  { scenario: "자연대류 — 기체", range: "2 – 25", color: "bg-cyan-400/20 text-cyan-300", barW: 2 },
  { scenario: "자연대류 — 액체", range: "50 – 1,000", color: "bg-cyan-500/20 text-cyan-300", barW: 8 },
  { scenario: "강제대류 — 기체", range: "25 – 250", color: "bg-blue-400/20 text-blue-300", barW: 4 },
  { scenario: "강제대류 — 액체", range: "100 – 20,000", color: "bg-blue-500/20 text-blue-300", barW: 25 },
  { scenario: "비등 (Boiling)", range: "2,500 – 100,000", color: "bg-violet-500/20 text-violet-300", barW: 70 },
  { scenario: "응축 (Condensation)", range: "5,000 – 100,000", color: "bg-purple-500/20 text-purple-300", barW: 100 },
];

export default function ConvectionDeepDive() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Part 5
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Convection: Newton&apos;s Law of Cooling
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Newton&apos;s Law of Cooling
            <br />
            대류는 유체의 <strong className="text-white">bulk motion</strong>과{" "}
            <strong className="text-white">분자 확산</strong>이 결합된 열전달 메커니즘입니다.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-14">
          {/* Diffusion vs Advection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-900 p-8"
          >
            <h3 className="text-xl font-bold text-white mb-8">
              Convection = Diffusion + Advection
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-base font-bold text-cyan-300 mb-3">Diffusion (확산)</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  분자의 무질서한 운동에 의한 에너지 전달. 전도와 동일한 메커니즘이며,
                  고체 표면 바로 위(no-slip 조건)에서 벌크 유동이 없는 영역에서 지배적입니다.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-base font-bold text-blue-300 mb-3">Advection (이류)</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  유체의 거시적 운동(bulk motion)에 의한 에너지 수송. 유체 덩어리가 이동하면서
                  열 에너지를 함께 운반합니다. 이것이 대류가 전도보다 효율적인 이유입니다.
                </p>
              </div>
            </div>
            <div className="p-5 rounded-lg bg-blue-500/5 border border-blue-500/10">
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong className="text-white">핵심</strong>: 대류 열전달에서 우리가 관심을 갖는 것은
                서로 다른 온도의 유체와 고체 표면 사이의 열전달입니다.
              </p>
            </div>
          </motion.div>

          {/* Newton's Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-900 p-8"
          >
            <h3 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-8">
              Newton&apos;s Law of Cooling
            </h3>
            <div className="text-center mb-10">
              <div className="inline-block px-10 py-6 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-4xl font-bold text-blue-400">
                  <Math tex="q'' = h(T_s - T_\infty)" />
                </span>
              </div>
            </div>

            {/* Forced vs Natural */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-base font-bold text-blue-300 mb-3">
                  강제 대류 (Forced Convection)
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  외부 요인(펌프, 팬, 바람)에 의해 유동이 발생합니다.
                  유속이 높을수록 경계층이 얇아지고 h가 증가하여 열전달이 향상됩니다.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300">팬 냉각</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300">바람</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300">펌프 유동</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300">자동차 주행</span>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-base font-bold text-cyan-300 mb-3">
                  자연 대류 (Natural / Free Convection)
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  온도 차에 의한 밀도 차이가 부력(buoyancy)을 만들어 유동을 유발합니다.
                  외부 동력 없이 자연적으로 발생하며, 일반적으로 h가 더 작습니다.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300">라디에이터</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300">뜨거운 도로</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300">실내 난방</span>
                </div>
              </div>
            </div>

            {/* Phase Change: Boiling & Condensation */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-violet-500/5 border border-violet-500/20">
                <h4 className="text-base font-bold text-violet-300 mb-3">Boiling (비등)</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  가열된 표면에서 액체가 기화하면서 잠열(latent heat)을 흡수합니다.
                  기포 형성과 이탈이 표면 근처의 유체 혼합을 촉진하여 매우 높은 h 값을 달성합니다.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-purple-500/5 border border-purple-500/20">
                <h4 className="text-base font-bold text-purple-300 mb-3">Condensation (응축)</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  증기가 차가운 표면에서 액화되며 잠열을 방출합니다.
                  얇은 액막이 형성되며, 막의 두께가 열저항을 결정합니다.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-violet-500/5 border border-violet-500/10 mb-8">
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong className="text-white">Phase Change: Boiling &amp; Condensation</strong> &mdash;
                상변화를 수반하는 대류는 sensible heat뿐 아니라 latent heat도 수송하므로,
                h가 일반 대류보다 10~100배 큽니다.
              </p>
            </div>

            {/* Boundary Layer Note */}
            <div className="p-5 rounded-lg bg-blue-500/5 border border-blue-500/10">
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong className="text-white">경계층(Boundary Layer)</strong>:
                고체 표면 근처에서 유속이 0(no-slip)에서 자유 흐름 속도로 변하는 얇은 영역.
                이 경계층 내에서 대류와 전도가 함께 작용하며, <strong className="text-blue-300">h 값을 결정</strong>합니다.
                경계층이 얇을수록 온도 기울기가 크고 열전달이 증가합니다.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mt-3">
                <strong className="text-white">속도 경계층(Velocity BL, <Math tex="\delta" />)</strong>: 표면에서 u=0(no-slip)부터 자유류 속도 <Math tex="U_\infty" />까지 변하는 영역.
                {" "}<strong className="text-white">열 경계층(Thermal BL, <Math tex="\delta_t" />)</strong>: 표면 온도 <Math tex="T_s" />에서 자유류 온도 <Math tex="T_\infty" />까지 변하는 영역.
                이 두 경계층의 상대적 두께는 Prandtl 수(<Math tex="\text{Pr} = \nu / \alpha" />)에 의해 결정됩니다.
                경계층 해석은 Week 9&ndash;10에서 본격적으로 다룹니다.
              </p>
            </div>
          </motion.div>

          {/* h value chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-3">
              Typical Values of h
            </h3>
            <p className="text-base text-gray-500 mb-8 leading-relaxed">
              대류 열전달 계수는 물성이 아닌, <strong className="text-white">유동 조건</strong>에 따라 달라지는 값입니다
            </p>

            <div className="space-y-3">
              {hValues.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center justify-between p-5 rounded-xl bg-slate-800/30 border border-slate-700/50"
                >
                  <span className="text-base text-gray-300">{item.scenario}</span>
                  <span className={`font-mono text-sm px-4 py-1.5 rounded-full ${item.color}`}>
                    {item.range} <Math tex="\text{W/m}^2 \cdot \text{K}" />
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-xs text-gray-600 text-center">
              Note: 비등/응축은 상변화(phase change)가 수반되어 h가 매우 큽니다.
              잠열(latent heat)이 추가 에너지 수송 메커니즘으로 작용합니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

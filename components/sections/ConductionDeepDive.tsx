"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Math from "@/components/Math";

const materials = [
  { name: "구리 (Copper)", k: 401, category: "metal", bar: 100 },
  { name: "알루미늄 (Aluminum)", k: 237, category: "metal", bar: 59 },
  { name: "탄소강 (Carbon Steel)", k: 60.5, category: "metal", bar: 15 },
  { name: "스테인리스강 (Stainless)", k: 15.1, category: "metal", bar: 3.8 },
  { name: "유리 (Glass)", k: 1.4, category: "nonmetal", bar: 0.35 },
  { name: "물 (Water, 25°C)", k: 0.613, category: "fluid", bar: 0.15 },
  { name: "공기 (Air, 25°C)", k: 0.0261, category: "fluid", bar: 0.007 },
  { name: "폴리우레탄 폼 (PU Foam)", k: 0.026, category: "insulation", bar: 0.006 },
];

const categoryColors: Record<string, string> = {
  metal: "bg-red-500",
  nonmetal: "bg-orange-500",
  fluid: "bg-blue-500",
  insulation: "bg-green-500",
};

const categoryLabels: Record<string, string> = {
  metal: "금속",
  nonmetal: "비금속 고체",
  fluid: "유체",
  insulation: "단열재",
};

export default function ConductionDeepDive() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? materials : materials.slice(0, 5);

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conduction: Fourier&apos;s Law
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fourier&apos;s Law of Heat Conduction
            <br />
            열전도는 물질 내부에서 온도 기울기에 비례하여 에너지가 전달되는 현상입니다.
          </p>
        </motion.div>

        {/* Mechanism Diagram */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-red-400 mb-2">금속의 전도 메커니즘</h4>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">자유 전자(free electrons)</strong>가 격자 사이를 이동하며 에너지를 전달합니다.
                  전기 전도도가 높은 금속이 열전도도도 높은 이유입니다 (Wiedemann-Franz Law).
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-orange-400 mb-2">비금속의 전도 메커니즘</h4>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">격자 진동(phonons)</strong>이 에너지를 전달합니다.
                  자유 전자가 없어 금속보다 열전도도가 훨씬 낮습니다. 결정 구조가 규칙적일수록 k가 높습니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Conduction in Gases & Liquids */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 text-center">
              Conduction Mechanism in Gases &amp; Liquids
            </h3>

            {/* Three explanation cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-blue-400 mb-2">Gas (기체)</h4>
                <p className="text-sm text-gray-400">
                  기체에서의 전도는 분자의 무질서한 운동(random molecular motion)에 의해 발생합니다.
                  고온 영역의 분자는 더 큰 운동 에너지를 가지며, 저온 영역 분자와의 충돌을 통해 에너지를 전달합니다.
                  또한 고온 영역의 분자가 저온 영역으로 확산(diffusion)하면서 에너지를 수송합니다.
                  벌크 유동(bulk motion)이 없는 정지 기체에서도 전도는 발생합니다.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-cyan-400 mb-2">Liquid (액체)</h4>
                <p className="text-sm text-gray-400">
                  액체에서도 분자 충돌과 확산이 전도의 메커니즘이지만,
                  분자 간 거리가 더 짧아 상호작용이 강하므로 일반적으로 기체보다 k가 높습니다.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-orange-400 mb-2">Solid (고체)</h4>
                <p className="text-sm text-gray-400">
                  고체에서는 격자 진동(phonon)과 자유 전자가 에너지를 전달합니다.
                  금속은 자유 전자가 지배적이고, 비금속은 phonon이 지배적입니다. (위 다이어그램 참조)
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fourier's Law Detail */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8"
          >
            <h3 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6">
              Fourier&apos;s Law of Heat Conduction (1822)
            </h3>

            {/* 1D */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="text-center p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-sm text-gray-500 mb-2">1-D form</p>
                <div className="text-3xl font-bold text-red-400">
                  <Math tex="q''_x = -k \frac{dT}{dx}" />
                </div>
              </div>
              <div className="text-center p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-sm text-gray-500 mb-2">General 3-D form (vector)</p>
                <div className="text-3xl font-bold text-red-400">
                  <Math tex="\vec{q''} = -k \nabla T" />
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  <Math tex="\nabla T = \frac{\partial T}{\partial x}\hat{i} + \frac{\partial T}{\partial y}\hat{j} + \frac{\partial T}{\partial z}\hat{k}" />
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-white mb-2">음수 부호 (<Math tex="-" />) 의 의미</h4>
                <p className="text-sm text-gray-400">
                  열은 온도가 <strong className="text-red-300">감소하는 방향</strong>으로 흐릅니다.
                  <Math tex="dT/dx < 0" /> 이면 <Math tex="q'' > 0" /> (+x 방향).
                  이는 열역학 제2법칙과 일관됩니다.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-white mb-2">열전도도 k <Math tex="[\text{W/m} \cdot \text{K}]" /></h4>
                <p className="text-sm text-gray-400">
                  물질의 고유 물성(transport property)입니다. 온도에 따라 변하며,
                  금속은 <span className="text-yellow-400">자유 전자</span>, 비금속은 <span className="text-orange-400">phonon</span>이 주요 메커니즘입니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* k values chart */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-2">
              Thermal Conductivity of Common Materials
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              k 값은 약 5자릿수(<Math tex="10^5" />)에 걸쳐 분포합니다 &mdash; 이 차이가 단열재와 방열판을 가능하게 합니다
            </p>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mb-6">
              {Object.entries(categoryLabels).map(([key, label]) => (
                <div key={key} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${categoryColors[key]}`} />
                  <span className="text-xs text-gray-400">{label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {displayed.map((mat, i) => (
                <motion.div
                  key={mat.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-48 flex-shrink-0">
                    <span className="text-sm text-gray-300">{mat.name}</span>
                  </div>
                  <div className="flex-1 h-7 bg-slate-800/50 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${categoryColors[mat.category]}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${globalThis.Math.max(mat.bar, 0.5)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.05 }}
                    />
                  </div>
                  <div className="w-28 text-right flex-shrink-0">
                    <span className="font-mono text-sm text-gray-300">
                      {mat.k}
                    </span>
                    <span className="text-xs text-gray-600 ml-1">W/m·K</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {!showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="mt-4 text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                + 더 보기
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

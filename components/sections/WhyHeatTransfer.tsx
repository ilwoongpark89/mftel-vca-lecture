"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const comparisons = [
  {
    thermo: "물이 100°C에서 끓는다",
    ht: "주전자의 물이 얼마나 빨리 끓는가?",
    icon: "🫖",
  },
  {
    thermo: "열은 고온에서 저온으로 이동한다",
    ht: "열이 벽을 통해 얼마의 속도로 빠져나가는가?",
    icon: "🏠",
  },
  {
    thermo: "평형 상태에서의 최종 온도는?",
    ht: "그 평형에 도달하는 데 걸리는 시간은?",
    icon: "⏱️",
  },
  {
    thermo: "엔진의 최대 효율은?",
    ht: "냉각 시스템이 열을 충분히 빠르게 제거하는가?",
    icon: "🚗",
  },
];

export default function WhyHeatTransfer() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Study Heat Transfer?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Thermodynamics vs Heat Transfer
            <br />
            열역학은 평형 상태를, 열전달은 비평형 과정의 속도(rate)를 다룹니다. 이 둘의 차이를 이해하는 것이 출발점입니다.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 px-8 py-6 rounded-2xl bg-slate-800/50 border-l-4 border-orange-500"
        >
          <p className="text-lg text-gray-300 italic leading-relaxed">
            &ldquo;Thermodynamics tells us <strong className="text-white">how much</strong> energy is transferred.
            Heat transfer tells us <strong className="text-orange-400">how fast</strong> and at what <strong className="text-orange-400">rate</strong> it happens.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-gray-500">
            — Incropera, <cite>Fundamentals of Heat and Mass Transfer</cite>, 8th Ed.
          </footer>
        </motion.blockquote>

        {/* Comparison Cards */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest mb-8"
          >
            Thermodynamics vs Heat Transfer
          </motion.h3>

          <div className="grid gap-4">
            {comparisons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              >
                <div
                  className={`grid grid-cols-[auto_1fr_auto_1fr] items-center gap-4 p-5 rounded-xl border transition-all duration-300 ${
                    activeIdx === i
                      ? "border-orange-500/50 bg-orange-500/5"
                      : "border-slate-700 bg-slate-800/30 hover:border-slate-600"
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                      Thermodynamics
                    </div>
                    <p className="text-sm text-gray-300">{item.thermo}</p>
                  </div>
                  <div className="text-orange-500 text-xl font-bold">→</div>
                  <div>
                    <div className="text-[10px] font-mono text-orange-400/70 uppercase tracking-wider mb-1">
                      Heat Transfer
                    </div>
                    <p className="text-sm text-white font-medium">{item.ht}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
            <span className="text-3xl">💡</span>
            <p className="text-gray-300 text-left">
              열전달은 <strong className="text-white">온도 차이(temperature difference)</strong>가 존재할 때 발생합니다.
              온도 차이가 driving force이며, 열전달의 목표는{" "}
              <strong className="text-orange-400">열전달 속도(rate, q)</strong>와{" "}
              <strong className="text-orange-400">온도 분포(T distribution)</strong>를 결정하는 것입니다.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

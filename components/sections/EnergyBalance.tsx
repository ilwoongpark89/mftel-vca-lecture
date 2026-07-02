"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Known",
    titleKr: "알려진 정보",
    desc: "문제에서 주어진 조건을 간결하게 정리합니다. 온도, 물성, 기하학적 조건 등을 명확히 합니다.",
  },
  {
    num: 2,
    title: "Find",
    titleKr: "구할 것",
    desc: "무엇을 구해야 하는지 명확히 서술합니다. 열전달률, 온도, 또는 필요한 단열 두께 등.",
  },
  {
    num: 3,
    title: "Schematic",
    titleKr: "개략도 작성",
    desc: "물리적 시스템의 개략도(schematic)를 그립니다. 좌표계, 경계 조건, 열전달 방향을 표시합니다.",
  },
  {
    num: 4,
    title: "Assumptions",
    titleKr: "가정 설정",
    desc: "적절한 단순화 가정을 나열합니다. 정상상태, 1차원, 일정 물성치, 균일 h 등.",
  },
  {
    num: 5,
    title: "Properties",
    titleKr: "물성치 확인",
    desc: "계산에 필요한 물성치(k, cp, ρ, h, ε 등)를 교과서 부록에서 찾아 정리합니다.",
  },
  {
    num: 6,
    title: "Analysis",
    titleKr: "해석 및 계산",
    desc: "적절한 보존 법칙(에너지 보존)을 적용하고, rate equation(Fourier, Newton, Stefan-Boltzmann)을 대입하여 미지수를 구합니다.",
  },
  {
    num: 7,
    title: "Comments",
    titleKr: "결과 해석",
    desc: "결과의 물리적 타당성을 검증합니다. 단위 확인, 극한 경우 점검, 실제 현상과의 비교를 수행합니다.",
  },
];

export default function EnergyBalance() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Part 8
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conservation of Energy
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            열전달 문제 풀이의 출발점은 항상 에너지 보존 법칙(First Law)입니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Energy Balance Equation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8 mb-12"
          >
            <h3 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-6">
              General Energy Balance for a Control Volume
            </h3>

            <div className="text-center mb-8">
              <div className="inline-block px-8 py-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-2xl md:text-3xl font-mono font-bold text-purple-400">
                  Ė_in + Ė_g − Ė_out = Ė_st
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { sym: "Ė_in", label: "유입 에너지", desc: "경계를 통해 들어오는 열" },
                { sym: "Ė_g", label: "내부 생성", desc: "전기 가열, 화학 반응, 핵분열 등" },
                { sym: "Ė_out", label: "유출 에너지", desc: "경계를 통해 나가는 열" },
                { sym: "Ė_st", label: "에너지 저장", desc: "내부 에너지 변화 (ρcₚ∂T/∂t)" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-slate-800/30 border border-slate-700 text-center"
                >
                  <span className="font-mono font-bold text-purple-400 text-lg">
                    {item.sym}
                  </span>
                  <p className="text-xs text-white mt-1">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Special cases */}
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-lg bg-slate-800/20 border border-slate-700">
                <h4 className="text-sm font-bold text-white mb-1">정상 상태 (Steady-State)</h4>
                <p className="text-sm text-gray-400">
                  Ė_st = 0 → 시간에 따라 변하지 않는 경우.
                  유입+생성 = 유출
                </p>
                <p className="font-mono text-purple-300 text-sm mt-2">
                  Ė_in + Ė_g = Ė_out
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/20 border border-slate-700">
                <h4 className="text-sm font-bold text-white mb-1">표면 에너지 균형</h4>
                <p className="text-sm text-gray-400">
                  표면은 체적이 없으므로 저장과 생성이 0.
                  표면을 통과하는 열유속은 연속이어야 합니다.
                </p>
                <p className="font-mono text-purple-300 text-sm mt-2">
                  Ė_in = Ė_out (at surface)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Problem-Solving Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-2">
              Problem-Solving Methodology
            </h3>
            <p className="text-sm text-gray-500 mb-8">
              체계적인 접근법은 복잡한 문제도 단계별로 풀 수 있게 합니다
            </p>

            <div className="space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl bg-slate-800/30 border border-slate-700/50"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {step.title}{" "}
                      <span className="text-gray-500 font-normal text-sm">
                        ({step.titleKr})
                      </span>
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

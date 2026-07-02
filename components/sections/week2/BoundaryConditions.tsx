"use client";

import { motion } from "framer-motion";
import Math from "@/components/Math";

/* ───────── data ───────── */

const bcRequirements = [
  { problem: "1D Steady", space: "2nd order in x", time: "—", bcs: "2 BCs", ics: "—", total: "2" },
  { problem: "1D Transient", space: "2nd order in x", time: "1st order in t", bcs: "2 BCs", ics: "1 IC", total: "3" },
  { problem: "2D Steady", space: "2nd in x + 2nd in y", time: "—", bcs: "2+2 = 4 BCs", ics: "—", total: "4" },
  { problem: "2D Transient", space: "2nd in x + 2nd in y", time: "1st order in t", bcs: "4 BCs", ics: "1 IC", total: "5" },
  { problem: "3D Steady", space: "2nd in x, y, z", time: "—", bcs: "6 BCs", ics: "—", total: "6" },
  { problem: "3D Transient", space: "2nd in x, y, z", time: "1st order in t", bcs: "6 BCs", ics: "1 IC", total: "7" },
];

const summaryTable = [
  {
    type: "Type 1 (Dirichlet)",
    korean: "1종 경계조건",
    math: "T(0, t) = Ts",
    specified: "표면 온도",
    physical: "표면 온도 지정",
    example: "얼음물 (0 °C), 끓는 물 (100 °C), 상변화 표면",
    color: "border-blue-500/40",
    accent: "text-blue-400",
    bg: "from-blue-500/5",
  },
  {
    type: "Type 2 (Neumann)",
    korean: "2종 경계조건",
    math: "-k(dT/dx)|₀ = q\"s",
    specified: "표면 열유속",
    physical: "표면 열유속 지정",
    example: "전기 히터, 레이저 조사, 단열벽 (q\"=0)",
    color: "border-emerald-500/40",
    accent: "text-emerald-400",
    bg: "from-emerald-500/5",
  },
  {
    type: "Type 3 (Robin)",
    korean: "3종 경계조건",
    math: "-k(dT/dx)|₀ = h[T(0,t) - T∞]",
    specified: "대류 관계식",
    physical: "표면 대류",
    example: "공기 냉각, 액체 침지, 대부분의 실제 공학 표면",
    color: "border-amber-500/40",
    accent: "text-amber-400",
    bg: "from-amber-500/5",
  },
  {
    type: "Type 4 (Radiation)",
    korean: "복사 경계조건",
    math: "-k(dT/dx)|₀ = εσ[T⁴ - T⁴sur]",
    specified: "복사 교환",
    physical: "표면 복사 교환",
    example: "우주선 표면, 로벽, 고온 부품",
    color: "border-red-500/40",
    accent: "text-red-400",
    bg: "from-red-500/5",
  },
];

const specialCasesNeumann = [
  {
    name: "Insulated (Adiabatic) Surface",
    eq: "∂T/∂x|_{x=0} = 0",
    desc: "열유속이 0 — 표면을 통해 열이 전달되지 않습니다. 완벽한 단열재로 감싼 경우에 해당합니다.",
  },
  {
    name: "Symmetry Plane",
    eq: "∂T/∂x|_{x=L/2} = 0",
    desc: "대칭면에서의 온도 기울기는 0입니다. 수학적으로 단열 조건과 동일한 형태입니다!",
  },
];

const specialCasesRobin = [
  { condition: "h → ∞", result: "T(0,t) → T∞", meaning: "Type 1 (Dirichlet)로 환원됩니다. 표면 온도가 유체 온도와 같아집니다." },
  { condition: "h → 0", result: "∂T/∂x|₀ → 0", meaning: "단열 표면 (Type 2, q\"=0)으로 환원됩니다. 열 교환이 없습니다." },
  { condition: "h is finite", result: "T(0,t) ≠ T∞", meaning: "표면 온도가 고체 내부와 유체 사이의 값을 가집니다 — 일반적인 경우입니다." },
];

const dirichletExamples = [
  {
    name: "Ice Bath Contact",
    temp: "T(0,t) = 0 °C",
    desc: "금속 막대의 한 끝을 얼음물에 담그면 해당 끝은 0 °C로 유지됩니다. 얼음이 녹으면서 상변화 잠열이 온도를 일정하게 유지합니다.",
  },
  {
    name: "Boiling Water Surface",
    temp: "T(0,t) = 100 °C",
    desc: "1 atm에서 끓는 물의 온도는 100 °C로 일정합니다. 상변화(boiling) 과정에서 온도가 변하지 않습니다.",
  },
  {
    name: "Isothermal Heat Exchanger Wall",
    temp: "T(0,t) = Tw",
    desc: "대량의 냉각수가 공급되는 열교환기 벽면. 유체 유량이 매우 크면 벽면 온도가 거의 일정합니다.",
  },
  {
    name: "Thermostat-Controlled Surface",
    temp: "T(0,t) = Tset",
    desc: "PID 제어기가 표면 온도를 설정값으로 유지합니다. 실험실 환경에서 정밀 온도 제어.",
  },
  {
    name: "Melting Solid",
    temp: "T(0,t) = Tmelt",
    desc: "고체가 녹는 동안 고체-액체 경계면의 온도는 융점에서 일정합니다. 예: 파라핀 왁스, PCM.",
  },
];

const contactResistanceData = [
  { surface: "Al-Al (smooth, 접촉압력 ~100 kPa)", value: "~0.5 × 10⁻⁴", quality: "매우 양호" },
  { surface: "Al-Al (rough)", value: "~3 × 10⁻⁴", quality: "보통" },
  { surface: "SS-SS (smooth)", value: "~3 × 10⁻⁴", quality: "보통" },
  { surface: "Cu-Cu (smooth)", value: "~0.2 × 10⁻⁴", quality: "매우 양호" },
  { surface: "Metal-Metal (rough, 일반)", value: "~1-10 × 10⁻⁴", quality: "불량" },
  { surface: "Ceramic-Metal", value: "~1-5 × 10⁻³", quality: "불량" },
  { surface: "Thermal grease 적용", value: "~0.2-1 × 10⁻⁴", quality: "매우 양호" },
  { surface: "Thermal pad 적용", value: "~1-3 × 10⁻⁴", quality: "양호" },
];

const commonMistakes = [
  {
    mistake: "정상상태 문제에 초기 조건(IC) 적용",
    correction: "정상상태에서는 시간 의존성이 없으므로 (∂T/∂t = 0), IC가 필요하지 않으며 의미도 없습니다. 해는 경계조건(BC)에만 의존합니다.",
    severity: "high",
  },
  {
    mistake: "Neumann BC에서 부호(−) 누락",
    correction: "올바른 형태는 -k(∂T/∂x) = q\"입니다. 부호는 Fourier 법칙 q = -k(dT/dx)에서 유래합니다. 열은 온도가 감소하는 방향으로 흐릅니다.",
    severity: "high",
  },
  {
    mistake: "Type 3과 Type 1을 혼동",
    correction: "Type 3에서는 표면 온도가 지정되지 않습니다 — 미지수이며 풀이 과정에서 결정됩니다. h와 T∞만 주어집니다.",
    severity: "high",
  },
  {
    mistake: "2차 방정식에 경계조건 1개만 적용",
    correction: "공간에 대한 2차 ODE/PDE는 2개의 BC가 필요합니다. 1D 문제에서는 각 경계(x=0, x=L)에 하나씩. BC가 부족하면 해가 유일하지 않습니다.",
    severity: "medium",
  },
  {
    mistake: "Kelvin과 Celsius 단위 혼용",
    correction: "복사 BC (T⁴ 항)에서는 반드시 절대온도(Kelvin)를 사용해야 합니다. 대류에서는 ΔT이므로 어느 쪽이든 가능합니다. 단위를 절대 혼용하지 마세요!",
    severity: "medium",
  },
  {
    mistake: "고온에서 복사 무시",
    correction: "T > 300 °C에서는 복사가 대류와 비슷하거나 더 큰 경우가 많습니다. 복사를 무시하기 전에 항상 q_rad/q_conv 비율을 확인하세요.",
    severity: "medium",
  },
  {
    mistake: "접촉면에서 완전 접촉 가정",
    correction: "실제 표면에는 미세한 거칠기가 있습니다. 접촉 열저항 R\"tc가 상당할 수 있으며, 특히 전자 장치 열관리에서 중요합니다.",
    severity: "low",
  },
];

const decisionGuide = [
  {
    question: "표면 온도를 알고 있는가?",
    yes: "Type 1 (Dirichlet): T = Ts",
    no: "Continue below",
    color: "blue",
    detail: "상변화, 항온조, 실험적 온도 제어 등",
  },
  {
    question: "표면 열유속을 알고 있는가?",
    yes: "Type 2 (Neumann): -k(dT/dx) = q\"s",
    no: "Continue below",
    color: "emerald",
    detail: "전기 히터, 레이저, 단열(q\"=0), 대칭",
  },
  {
    question: "표면이 유체와 접촉하여 대류가 발생하는가?",
    yes: "Type 3 (Robin): -k(dT/dx) = h(Ts - T∞)",
    no: "Continue below",
    color: "amber",
    detail: "자연/강제 대류, 대부분의 공학 문제",
  },
  {
    question: "표면이 고온이고 복사가 중요한가?",
    yes: "Type 4 (Radiation) or Combined",
    no: "Check if insulated or symmetric",
    color: "red",
    detail: "로, 우주선 표면, 300 °C 이상",
  },
];

const bcComparisonChart = [
  { type: "Type 1", known: "T", unknown: "q\"", difficulty: "가장 쉬움", usage: "20%", barWidth: "20%" },
  { type: "Type 2", known: "q\"", unknown: "T", difficulty: "쉬움", usage: "15%", barWidth: "15%" },
  { type: "Type 3", known: "h, T∞", unknown: "T, q\"", difficulty: "보통", usage: "50%", barWidth: "50%" },
  { type: "Type 4", known: "ε, Tsur", unknown: "T, q\"", difficulty: "어려움 (비선형)", usage: "15%", barWidth: "15%" },
];

const fullProblemExamples = [
  {
    title: "Example 1: Heated Rod with Fixed Ends",
    type: "1D 정상상태, Dirichlet BCs",
    color: "blue",
    governing: "d²T/dx² = 0",
    bc1: "T(0) = T₁ = 100 °C (왼쪽 끝: 끓는 물)",
    bc2: "T(L) = T₂ = 25 °C (오른쪽 끝: 실내 공기, h 매우 큼)",
    ic: "불필요 (정상상태)",
    solution: "T(x) = T₁ + (T₂ - T₁)(x/L) = 100 - 75(x/L)",
    note: "직선 온도 분포. 열유속 q\" = k(T₁-T₂)/L = constant.",
  },
  {
    title: "Example 2: Insulated Rod with Convection End",
    type: "1D 정상상태, 혼합 BCs",
    color: "emerald",
    governing: "d²T/dx² = 0",
    bc1: "dT/dx|_{x=0} = 0 (왼쪽 끝 단열)",
    bc2: "-k(dT/dx)|_{x=L} = h[T(L) - T∞] (오른쪽 끝 대류)",
    ic: "불필요 (정상상태)",
    solution: "T(x) = T∞ (균일 — 열 생성 없음, 단열 끝 → 열유속 없음 → 균일 온도)",
    note: "열 생성이 없고 한쪽이 단열이면, 정상상태에서 열유속 = 0 → 온도 균일.",
  },
  {
    title: "Example 3: Sudden Cooling of a Wall",
    type: "1D 비정상, 대류 + IC",
    color: "amber",
    governing: "∂T/∂t = α(∂²T/∂x²)",
    bc1: "-k(∂T/∂x)|_{x=0} = h[T(0,t) - T∞] (왼쪽 표면 대류)",
    bc2: "∂T/∂x|_{x=L} = 0 (오른쪽 단열 또는 대칭)",
    ic: "T(x, 0) = Tᵢ = 200 °C (균일 초기 온도)",
    solution: "Fourier 급수 또는 수치해법 필요",
    note: "가장 대표적인 transient 문제. 2 BCs + 1 IC = 3개 조건 필요.",
  },
];

export default function BoundaryConditions() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Part 3
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Boundary &amp; Initial Conditions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            열전도 방정식을 풀기 위해 필요한 경계 조건(BC)과 초기 조건(IC)의 종류, 수학적 표현, 그리고 물리적 의미를 체계적으로 배웁니다.
          </p>
        </motion.div>

        {/* ════════════════════════════════════════════════
            SECTION 1 — Why BCs and ICs are needed
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-3">
              1. Why Are Boundary &amp; Initial Conditions Needed?
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed text-base">
              Heat equation은 공간에 대해 <strong className="text-white">2차 편미분방정식</strong>이고,
              시간에 대해 <strong className="text-white">1차 편미분방정식</strong>입니다.
              미분방정식의 해를 유일하게 결정하려면, 적분 상수를 결정할 수 있는 추가 조건이 반드시 필요합니다.
            </p>

            {/* Governing equation reminder */}
            <div className="p-5 rounded-xl bg-slate-950/80 border border-blue-500/20 text-center mb-6">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">General Heat Equation (1D)</p>
              <div className="text-2xl font-bold text-blue-400 mb-1">
                <Math tex="\rho c_p \cdot \frac{\partial T}{\partial t} = \frac{\partial}{\partial x}\!\left[k \cdot \frac{\partial T}{\partial x}\right] + \dot{q}" display />
              </div>
              <div className="flex items-center justify-center gap-6 mt-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-500/60" />
                  <span className="text-gray-400">1st order in <strong className="text-cyan-400">t</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500/60" />
                  <span className="text-gray-400">2nd order in <strong className="text-blue-400">x</strong></span>
                </div>
              </div>
            </div>

            {/* Mathematical reasoning */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-blue-300 mb-3">Why 2nd Order in Space Needs 2 BCs</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  2차 ODE를 적분하면 <strong className="text-white">2개의 적분 상수</strong> C₁, C₂가 발생합니다.
                </p>
                <div className="p-3 rounded-2xl bg-slate-950/80 text-sm font-mono text-gray-300 space-y-1">
                  <p>d²T/dx² = 0</p>
                  <p className="text-gray-500">-- 1st integration --</p>
                  <p>dT/dx = <span className="text-blue-400">C₁</span></p>
                  <p className="text-gray-500">-- 2nd integration --</p>
                  <p>T(x) = <span className="text-blue-400">C₁</span>x + <span className="text-blue-400">C₂</span></p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  C₁과 C₂를 결정하려면 2개의 조건 (경계조건)이 필요합니다.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-cyan-300 mb-3">Why 1st Order in Time Needs 1 IC</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  시간에 대한 1차 미분은 <strong className="text-white">1개의 적분 상수</strong>를 생성합니다.
                </p>
                <div className="p-3 rounded-2xl bg-slate-950/80 text-sm font-mono text-gray-300 space-y-1">
                  <p>∂T/∂t = f(x, t)</p>
                  <p className="text-gray-500">-- Integration in time --</p>
                  <p>T(x, t) = F(x, t) + <span className="text-cyan-400">g(x)</span></p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  g(x)를 결정하려면 t = 0에서의 초기 온도 분포, 즉 초기 조건 T(x, 0)이 필요합니다.
                </p>
              </div>
            </div>

            {/* Key rule box */}
            <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/20 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 font-bold text-sm">!</span>
                </div>
                <div>
                  <p className="text-blue-300 font-semibold mb-2">핵심 규칙</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-white">공간 2차</strong>이면 각 공간 차원당 <strong className="text-blue-300">2개의 경계조건</strong>이 필요합니다.
                    <br />
                    <strong className="text-white">시간 1차</strong>이면 비정상 문제에서 <strong className="text-blue-300">1개의 초기조건</strong>이 필요합니다.
                    <br />
                    적절한 BCs/ICs 없이는 해가 <strong className="text-red-400">유일하지 않습니다</strong> — 무한히 많은 해가 존재합니다!
                  </p>
                </div>
              </div>
            </div>

            {/* Requirements table */}
            <h4 className="text-sm font-bold text-white mb-3">Required Number of Conditions by Problem Type</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 px-3 text-left text-gray-400 font-medium">Problem Type</th>
                    <th className="py-3 px-3 text-center text-gray-400 font-medium">Space Order</th>
                    <th className="py-3 px-3 text-center text-gray-400 font-medium">Time Order</th>
                    <th className="py-3 px-3 text-center text-gray-400 font-medium">BCs Needed</th>
                    <th className="py-3 px-3 text-center text-gray-400 font-medium">ICs Needed</th>
                    <th className="py-3 px-3 text-center text-blue-400 font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {bcRequirements.map((r, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-slate-800/50"
                    >
                      <td className="py-2.5 px-3 text-white font-medium">{r.problem}</td>
                      <td className="py-2.5 px-3 text-center text-gray-400">{r.space}</td>
                      <td className="py-2.5 px-3 text-center text-gray-400">{r.time}</td>
                      <td className="py-2.5 px-3 text-center text-gray-300">{r.bcs}</td>
                      <td className="py-2.5 px-3 text-center text-gray-300">{r.ics}</td>
                      <td className="py-2.5 px-3 text-center text-blue-400 font-bold">{r.total}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Visual: what happens without BCs */}
            <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20 mb-6">
              <h4 className="text-sm font-bold text-red-300 mb-3">What Happens Without Proper BCs?</h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-red-400 font-bold mb-1">0 BCs given (need 2)</p>
                  <p className="text-xs font-mono text-gray-400">T(x) = C₁x + C₂</p>
                  <p className="text-xs text-gray-500 mt-1">무한히 많은 해. C₁, C₂ 모두 미결정.</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-amber-400 font-bold mb-1">1 BC given (need 2)</p>
                  <p className="text-xs font-mono text-gray-400">T(0) = 100 → C₂ = 100</p>
                  <p className="text-xs text-gray-500 mt-1">T = C₁x + 100. 여전히 C₁ 미결정. 기울기 불명.</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-emerald-400 font-bold mb-1">2 BCs given (correct!)</p>
                  <p className="text-xs font-mono text-gray-400">T(0)=100, T(L)=25</p>
                  <p className="text-xs text-gray-500 mt-1">T = 100 - 75(x/L). 유일한 해 결정!</p>
                </div>
              </div>
            </div>

            {/* Analogy */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <p className="text-sm text-gray-400">
                <strong className="text-gray-300">Analogy:</strong> 미분방정식을 푸는 것은 &ldquo;어떤 함수가 이 조건을 만족하는가?&rdquo;를 찾는 것입니다.
                경계조건 없이는 &ldquo;기울기가 2인 직선을 찾아라&rdquo;와 같습니다 — y = 2x + C에서 C를 결정할 수 없으므로 무한히 많은 해가 존재합니다.
                경계조건은 이 C를 확정하는 역할을 합니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 2 — Type 1: Dirichlet
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <span className="text-blue-400 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Type 1: Dirichlet Boundary Condition</h3>
                <p className="text-sm text-blue-400">1종 경계조건 &mdash; Prescribed Temperature</p>
              </div>
            </div>

            {/* Main equation */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-blue-500/20 text-center mb-6">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Mathematical Form</p>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                <Math tex="T(0,\, t) = T_s" display />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                표면 온도가 알려진 값 <Math tex="T_s" />로 직접 지정됩니다
              </p>
              <div className="mt-3 pt-3 border-t border-slate-800">
                <p className="text-xs text-gray-500 mb-1">General form (may vary with time)</p>
                <p className="text-lg font-bold text-blue-300">
                  <Math tex="T(0,\, t) = T_s(t)" />
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  시간에 따라 변하는 지정 온도도 가능합니다 (예: 주기적 가열)
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-blue-300 mb-3">물리적 의미</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  표면 온도가 특정 값으로 <strong className="text-white">직접 지정</strong>됩니다.
                  이는 표면이 매우 강력한 열원(heat source) 또는 열침(heat sink)과 접촉하여
                  온도가 일정하게 유지되는 상황에 해당합니다.
                </p>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-gray-500 mb-1">Physical interpretation</p>
                  <p className="text-xs text-gray-400">
                    표면이 열적 관성(thermal inertia)이 매우 큰 매체와 접촉하면, 해당 표면은 매체의 온도를 &ldquo;강제&rdquo;로 따릅니다.
                    상변화(phase change) 표면이 대표적입니다. 얼음이 녹는 동안 온도는 0 °C에서 변하지 않습니다.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-blue-300 mb-3">When to Use</h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">--</span>
                    <span>상변화 표면 (비등: 100 °C, 얼음 융해: 0 °C)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">--</span>
                    <span>잘 혼합된 대용량 저장소와 접촉하는 표면</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">--</span>
                    <span>실험적으로 제어된 온도 (thermostat, PID 제어기)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">--</span>
                    <span>h가 매우 큰 경우 (h → ∞), 표면이 유체 온도에 접근</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">--</span>
                    <span>응축 표면 (포화 증기 온도)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Detailed Examples */}
            <h4 className="text-sm font-bold text-white mb-3">Practical Examples in Detail</h4>
            <div className="grid md:grid-cols-3 gap-3 mb-6">
              {dirichletExamples.map((ex, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/50"
                >
                  <p className="text-xs text-blue-400 font-medium mb-1">{ex.name}</p>
                  <p className="text-xs font-mono text-blue-300 mb-2">{ex.temp}</p>
                  <p className="text-xs text-gray-500">{ex.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Worked example */}
            <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/20 mb-4">
              <h4 className="text-sm font-bold text-blue-300 mb-3">Worked Example: 1D Steady with Two Dirichlet BCs</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400 mb-2">
                    <strong className="text-white">Problem:</strong> 길이 L = 0.5 m, k = 50 W/(m K)인 벽의 양쪽 면 온도가 T(0) = 150 °C, T(L) = 30 °C 일 때, 온도 분포와 열유속을 구하라.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 rounded-xl bg-slate-950/80 font-mono text-xs text-gray-300">
                      <p>Governing: d²T/dx² = 0</p>
                      <p>General solution: T(x) = C₁x + C₂</p>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/80 font-mono text-xs text-gray-300">
                      <p>BC1: T(0) = 150 → C₂ = 150</p>
                      <p>BC2: T(L) = 30 → C₁(0.5) + 150 = 30</p>
                      <p>→ C₁ = -240</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-blue-500/15 text-center mb-3">
                    <p className="text-xs text-gray-500 mb-1">Solution</p>
                    <p className="text-lg font-bold text-blue-400">
                      <Math tex="T(x) = 150 - 240x \;\text{[°C]}" />
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-blue-500/15 text-center">
                    <p className="text-xs text-gray-500 mb-1">Heat Flux</p>
                    <p className="text-base font-bold text-blue-400">
                      <Math tex="q'' = -k\frac{dT}{dx} = 50 \times 240 = 12{,}000 \;\text{W/m}^2" />
                    </p>
                    <p className="text-xs text-gray-500 mt-1">= 12 kW/m² (left to right)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special case */}
            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/15">
              <p className="text-sm text-gray-400">
                <strong className="text-blue-300">Special Case:</strong> <Math tex="T(0,t) = T_\infty" /> &mdash;
                표면 온도가 주변 환경 온도로 지정되는 경우. 이는 대류 열전달 계수 h가 매우 큰 극한 상황 (h → ∞)에 해당합니다.
                실제로 h &gt; 10,000 W/(m²K) 정도면 Dirichlet로 근사 가능합니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 3 — Type 2: Neumann
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-emerald-400 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Type 2: Neumann Boundary Condition</h3>
                <p className="text-sm text-emerald-400">2종 경계조건 &mdash; Prescribed Heat Flux</p>
              </div>
            </div>

            {/* Main equation */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-emerald-500/20 text-center mb-6">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Mathematical Form</p>
              <div className="text-2xl font-bold text-emerald-400 mb-2">
                <Math tex="-k\left.\frac{\partial T}{\partial x}\right|_{x=0} = q''_s" display />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                표면 열유속이 알려진 값 <Math tex="q''_s" />로 직접 지정됩니다
              </p>
              <div className="mt-3 pt-3 border-t border-slate-800">
                <p className="text-xs text-gray-500 mb-1">Equivalently (temperature gradient form)</p>
                <p className="text-lg font-bold text-emerald-300">
                  <Math tex="\left.\frac{\partial T}{\partial x}\right|_{x=0} = -\frac{q''_s}{k}" />
                </p>
              </div>
            </div>

            {/* Sign convention explanation */}
            <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 mb-6">
              <h4 className="text-sm font-bold text-emerald-300 mb-3">Understanding the Minus Sign</h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-emerald-400 font-bold mb-1">Fourier&apos;s Law</p>
                  <p className="text-xs text-gray-300"><Math tex="q'' = -k(dT/dx)" /></p>
                  <p className="text-xs text-gray-500 mt-1">열은 온도가 감소하는 방향으로 흐릅니다</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-emerald-400 font-bold mb-1">Heat into surface (<Math tex="q''_s > 0" />)</p>
                  <p className="text-xs text-gray-300">표면으로 열이 들어오는 경우 (heating)</p>
                  <p className="text-xs text-gray-500 mt-1">dT/dx &lt; 0 at x = 0 (온도가 내부로 갈수록 감소)</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-emerald-400 font-bold mb-1">Heat out of surface (<Math tex="q''_s < 0" />)</p>
                  <p className="text-xs text-gray-300">표면에서 열이 나가는 경우 (cooling)</p>
                  <p className="text-xs text-gray-500 mt-1">dT/dx &gt; 0 at x = 0 (온도가 내부로 갈수록 증가)</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-emerald-300 mb-3">물리적 의미</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  경계면을 통과하는 열유속(heat flux)이 <strong className="text-white">직접 지정</strong>됩니다.
                  표면에 알려진 양의 에너지가 공급되거나 제거되는 상황입니다.
                  온도 자체는 미지수로 남습니다.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed mt-2">
                  Dirichlet에서는 &ldquo;온도를 알고 열유속을 구한다&rdquo;면,
                  Neumann에서는 &ldquo;<strong className="text-emerald-300">열유속을 알고 온도를 구한다</strong>&rdquo;입니다.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-emerald-300 mb-3">When to Use</h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1 flex-shrink-0">--</span>
                    <span>표면에 부착된 전기 저항 히터</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1 flex-shrink-0">--</span>
                    <span>알려진 강도의 레이저 또는 복사 열 입력</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1 flex-shrink-0">--</span>
                    <span>단열 경계 (<Math tex="q'' = 0" />) &mdash; 매우 자주 사용!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1 flex-shrink-0">--</span>
                    <span>대칭 형상의 대칭면</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1 flex-shrink-0">--</span>
                    <span>건물 표면의 알려진 태양 복사량</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Special cases */}
            <h4 className="text-sm font-bold text-white mb-3">Important Special Cases</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {specialCasesNeumann.map((sc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/15"
                >
                  <p className="text-sm font-semibold text-emerald-300 mb-1">{sc.name}</p>
                  <div className="text-base font-bold text-emerald-400 mb-2 font-mono">{sc.eq}</div>
                  <p className="text-xs text-gray-400">{sc.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Key insight */}
            <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-2xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 font-bold text-xs">!</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-2">
                    <strong className="text-emerald-300">핵심 포인트:</strong> 단열(insulated) 조건과 대칭(symmetry) 조건은
                    수학적으로 <strong className="text-white">완전히 동일한 형태</strong>입니다: ∂T/∂x = 0.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <p className="text-xs text-emerald-400 font-bold mb-1">Insulated (물리적 단열)</p>
                      <p className="text-xs text-gray-500">표면을 통해 열이 통과하지 못합니다. 단열재(fiberglass, foam)로 감싼 경우.</p>
                    </div>
                    <div className="p-2 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <p className="text-xs text-emerald-400 font-bold mb-1">Symmetry (기하학적 대칭)</p>
                      <p className="text-xs text-gray-500">양쪽에서 동일한 열유속이 들어와 순 열유속 = 0. 절반만 해석하면 됩니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Worked example */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-sm font-bold text-gray-300 mb-3">Worked Example: Electric Heater on Wall</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400 mb-2">
                    <strong className="text-white">Problem:</strong> 500 W 전기 히터가 0.1 m &times; 0.1 m 면적의 벽면에 부착됨.
                    벽 두께 L = 0.05 m, k = 20 W/(m K). 반대편은 T = 25 °C로 유지.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 rounded-xl bg-slate-800/40 font-mono text-xs text-gray-300">
                      <p><Math tex="q''_s = 500 / (0.1 \times 0.1) = 50{,}000 \;\text{W/m}^2" /></p>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-800/40 font-mono text-xs text-gray-300">
                      <p>BC1: <Math tex="-k(dT/dx)|_{x=0} = 50{,}000" /></p>
                      <p>BC2: T(L) = 25 °C</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-2 rounded-xl bg-slate-800/40 font-mono text-xs text-gray-300 mb-2">
                    <p>T(x) = C₁x + C₂</p>
                    <p><Math tex="-k \cdot C_1 = 50{,}000 \rightarrow C_1 = -2{,}500" /></p>
                    <p>T(0.05) = -2500(0.05) + C₂ = 25</p>
                    <p>C₂ = 150</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 text-center">
                    <p className="text-xs text-gray-500 mb-1">Solution</p>
                    <p className="text-base font-bold text-emerald-400">
                      <Math tex="T(x) = 150 - 2500x \;\text{[°C]}" />
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Heater surface: T(0) = <strong className="text-white">150 °C</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 4 — Type 3: Robin / Convection
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                <span className="text-amber-400 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Type 3: Robin / Convection Boundary Condition</h3>
                <p className="text-sm text-amber-400">3종 경계조건 &mdash; Convection at Surface (가장 흔한 BC!)</p>
              </div>
            </div>

            {/* Main equation */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-amber-500/20 text-center mb-6">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Mathematical Form</p>
              <div className="text-2xl font-bold text-amber-400 mb-2">
                <Math tex="-k\left.\frac{\partial T}{\partial x}\right|_{x=0} = h\bigl[T(0,t) - T_\infty\bigr]" display />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                고체 내부의 전도 = 표면에서의 유체 대류
              </p>
              <div className="mt-3 pt-3 border-t border-slate-800">
                <p className="text-xs text-gray-500 mb-1">Alternative form (at x = L, heat leaving surface)</p>
                <p className="text-lg font-bold text-amber-300">
                  <Math tex="-k\left.\frac{\partial T}{\partial x}\right|_{x=L} = h\bigl[T(L,t) - T_\infty\bigr]" />
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  참고: 부호는 바깥 방향 법선에 따라 달라집니다. x = L에서 바깥 법선은 +x 방향입니다.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-amber-300 mb-3">물리적 의미</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  표면에서 고체 내부의 전도와 유체로의 대류가 <strong className="text-white">에너지 균형</strong>을 이룹니다.
                  실제 공학 문제에서 <strong className="text-amber-300">가장 흔하게</strong> 사용되는 경계조건입니다.
                  표면 온도 <Math tex="T(0,t)" />와 열유속 <Math tex="q''" /> <strong className="text-white">모두 미지수</strong>라는 점이 핵심입니다!
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-amber-300 mb-3">Key Difference from Type 1 &amp; 2</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Type 1은 T를 지정하고, Type 2는 <Math tex="q''" />를 지정합니다.
                  하지만 Type 3에서는 <strong className="text-red-400">T도 <Math tex="q''" />도 직접 지정하지 않습니다</strong>.
                  대신 T와 <Math tex="q''" /> 사이의 <strong className="text-white">관계</strong>(Newton&apos;s law of cooling)만 제공합니다.
                  두 미지수는 연립하여 결정됩니다.
                </p>
              </div>
            </div>

            {/* Typical h values */}
            <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700 mb-6">
              <h4 className="text-sm font-bold text-amber-300 mb-3">Typical Values of Convection Coefficient h [W/(m²K)]</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="py-2 px-3 text-left text-gray-400 font-medium">Mode</th>
                      <th className="py-2 px-3 text-center text-gray-400 font-medium">h Range</th>
                      <th className="py-2 px-3 text-left text-gray-400 font-medium">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { mode: "Free convection (gas)", h: "2 - 25", ex: "실내 공기 자연 대류" },
                      { mode: "Free convection (liquid)", h: "50 - 1,000", ex: "물 속 자연 대류" },
                      { mode: "Forced convection (gas)", h: "25 - 250", ex: "선풍기, 공조 시스템" },
                      { mode: "Forced convection (liquid)", h: "100 - 20,000", ex: "수냉 시스템, 열교환기" },
                      { mode: "Boiling", h: "2,500 - 100,000", ex: "핵비등, 막비등" },
                      { mode: "Condensation", h: "5,000 - 100,000", ex: "응축기 표면" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-800/50">
                        <td className="py-2 px-3 text-gray-300 text-xs">{row.mode}</td>
                        <td className="py-2 px-3 text-center font-mono text-amber-400 text-xs">{row.h}</td>
                        <td className="py-2 px-3 text-gray-500 text-xs">{row.ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Limiting cases */}
            <h4 className="text-sm font-bold text-white mb-3">Limiting Cases of h</h4>
            <div className="space-y-3 mb-6">
              {specialCasesRobin.map((sc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700"
                >
                  <div className="w-20 flex-shrink-0 text-center">
                    <span className="text-amber-400 font-bold font-mono text-sm">{sc.condition}</span>
                  </div>
                  <div className="w-px h-8 bg-slate-700" />
                  <div className="w-36 flex-shrink-0">
                    <span className="text-white font-mono text-sm">{sc.result}</span>
                  </div>
                  <div className="w-px h-8 bg-slate-700" />
                  <p className="text-sm text-gray-400 flex-1">{sc.meaning}</p>
                </motion.div>
              ))}
            </div>

            {/* Biot number connection */}
            <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20 mb-6">
              <h4 className="text-sm font-bold text-amber-300 mb-3">Connection to Biot Number (Bi)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 rounded-2xl bg-slate-950/80 text-center">
                  <p className="text-xs text-gray-500 mb-1">Definition</p>
                  <p className="text-xl font-bold text-amber-400">
                    <Math tex="\text{Bi} = \frac{hL}{k}" display />
                  </p>
                  <p className="text-xs text-gray-500 mt-1">대류 저항 대 전도 저항의 비</p>
                </div>
                <div className="space-y-2">
                  <div className="p-2 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                    <p className="text-xs"><span className="text-amber-400 font-bold">Bi &gt;&gt; 1:</span> <span className="text-gray-400">전도 저항이 지배 → 표면 T ≈ T∞ → Type 1 근사</span></p>
                  </div>
                  <div className="p-2 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                    <p className="text-xs"><span className="text-amber-400 font-bold">Bi &lt;&lt; 1:</span> <span className="text-gray-400">대류 저항이 지배 → 고체 내 거의 균일한 T (집중 계)</span></p>
                  </div>
                  <div className="p-2 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                    <p className="text-xs"><span className="text-amber-400 font-bold">Bi ~ 1:</span> <span className="text-gray-400">두 저항이 비슷 → 전체 해석 필요</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Energy balance diagram */}
            <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <h4 className="text-sm font-bold text-amber-300 mb-3">Energy Balance at Surface</h4>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <div className="px-4 py-2 rounded-2xl bg-slate-800/60 border border-slate-700">
                  <p className="text-xs text-gray-500">Conduction (solid side)</p>
                  <p className="text-sm text-amber-400"><Math tex="-k\left.\frac{\partial T}{\partial x}\right|_{\text{surface}}" /></p>
                </div>
                <span className="text-2xl text-gray-500">=</span>
                <div className="px-4 py-2 rounded-2xl bg-slate-800/60 border border-slate-700">
                  <p className="text-xs text-gray-500">Convection (fluid side)</p>
                  <p className="text-sm text-amber-400"><Math tex="h[T_s - T_\infty]" /></p>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center mt-3">
                이것은 단순한 에너지 균형입니다: 내부에서 표면으로 전도된 열 = 유체에 의해 대류로 제거된 열.
                표면 자체는 두께가 0이므로 → 표면에 에너지 저장이 없습니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 5 — Type 4: Radiation
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/5 to-slate-950 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                <span className="text-red-400 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Type 4: Radiation Boundary Condition</h3>
                <p className="text-sm text-red-400">복사 경계조건 &mdash; Radiation at Surface</p>
              </div>
            </div>

            {/* Main equation */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-red-500/20 text-center mb-6">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Mathematical Form</p>
              <div className="text-2xl font-bold text-red-400 mb-2">
                <Math tex="-k\left.\frac{\partial T}{\partial x}\right|_{x=0} = \varepsilon\sigma\bigl[T(0,t)^4 - T_{\text{sur}}^4\bigr]" display />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                <Math tex="\varepsilon" />: emissivity (<Math tex="0 \le \varepsilon \le 1" />), <Math tex="\sigma = 5.67 \times 10^{-8}" /> W/(m²·K⁴): Stefan-Boltzmann constant
              </p>
              <div className="mt-3 pt-3 border-t border-slate-800">
                <p className="text-xs text-red-400 font-bold">IMPORTANT: T must be in Kelvin (absolute temperature)!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-red-300 mb-3">Why Is This Difficult?</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  온도가 <strong className="text-red-300">4제곱</strong>으로 나타나므로 <strong className="text-white">비선형(nonlinear)</strong> 경계조건입니다.
                  해석적 풀이가 매우 어려워지며, 대부분의 경우 수치해법이 필요합니다.
                </p>
                <div className="p-3 rounded-2xl bg-red-500/5 border border-red-500/15">
                  <p className="text-xs text-gray-400">
                    <strong className="text-red-300">Nonlinearity problem:</strong> T가 4제곱으로 나타나면 중첩의 원리(superposition)를
                    사용할 수 없습니다. 선형 문제의 강력한 해석 도구를 잃게 됩니다.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-red-300 mb-3">Linearization Technique</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-2">
                  복사 열전달 계수 <Math tex="h_r" />을 도입하여 선형화할 수 있습니다:
                </p>
                <div className="p-3 rounded-xl bg-slate-950/80 text-center mb-2">
                  <p className="text-base text-red-400">
                    <Math tex="h_r = \varepsilon\sigma(T_s + T_{\text{sur}})(T_s^2 + T_{\text{sur}}^2)" display />
                  </p>
                </div>
                <p className="text-xs text-gray-400 mb-2">
                  Then: <Math tex="q''_{\text{rad}} \approx h_r(T_s - T_{\text{sur}})" /> — same form as convection!
                </p>
                <div className="p-2 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <p className="text-xs text-gray-500">
                    <strong className="text-gray-300">Derivation:</strong> Factor <Math tex="a^4 - b^4 = (a-b)(a+b)(a^2+b^2)" />. Thus <Math tex="h_r = \varepsilon\sigma(a+b)(a^2+b^2)" />.
                  </p>
                </div>
              </div>
            </div>

            {/* Numerical example of hr */}
            <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20 mb-6">
              <h4 className="text-sm font-bold text-red-300 mb-3">Numerical Example: How large is <Math tex="h_r" />?</h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-red-400 font-bold mb-1">Low Temperature</p>
                  <p className="text-xs text-gray-400"><Math tex="T_s" /> = 50 °C (323 K), <Math tex="T_{\text{sur}}" /> = 25 °C (298 K), ε = 0.9</p>
                  <p className="text-xs font-mono text-red-300 mt-1"><Math tex="h_r \approx 6" /> W/(m²K)</p>
                  <p className="text-xs text-gray-500 mt-1">Natural convection h ~ 5-10 → 복사와 비슷</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-red-400 font-bold mb-1">Moderate Temperature</p>
                  <p className="text-xs text-gray-400"><Math tex="T_s" /> = 300 °C (573 K), <Math tex="T_{\text{sur}}" /> = 25 °C (298 K), ε = 0.9</p>
                  <p className="text-xs font-mono text-red-300 mt-1"><Math tex="h_r \approx 22" /> W/(m²K)</p>
                  <p className="text-xs text-gray-500 mt-1">Natural convection과 비슷하거나 더 큼</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-red-400 font-bold mb-1">High Temperature</p>
                  <p className="text-xs text-gray-400"><Math tex="T_s" /> = 1000 °C (1273 K), <Math tex="T_{\text{sur}}" /> = 25 °C (298 K), ε = 0.9</p>
                  <p className="text-xs font-mono text-red-300 mt-1"><Math tex="h_r \approx 150" /> W/(m²K)</p>
                  <p className="text-xs text-gray-500 mt-1">복사가 대류를 압도!</p>
                </div>
              </div>
            </div>

            {/* Combined convection + radiation */}
            <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20 mb-6">
              <h4 className="text-sm font-bold text-red-300 mb-3">Combined Convection + Radiation (Common in Practice)</h4>
              <div className="p-4 rounded-2xl bg-slate-950/80 text-center mb-3">
                <p className="text-lg text-red-400">
                  <Math tex="-k\left.\frac{\partial T}{\partial x}\right|_{x=0} = h(T_s - T_\infty) + \varepsilon\sigma(T_s^4 - T_{\text{sur}}^4)" display />
                </p>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                실제로 표면은 대류와 복사를 <strong className="text-white">동시에</strong> 경험합니다.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                  <p className="text-xs text-red-400 font-bold mb-1">Linearized Combined Form</p>
                  <p className="text-xs font-mono text-gray-300">
                    <Math tex="-k(\partial T/\partial x) = (h + h_r)(T_s - T_\infty)" />
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Valid when <Math tex="T_\infty \approx T_{\text{sur}}" /></p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                  <p className="text-xs text-red-400 font-bold mb-1">When to Include Radiation</p>
                  <p className="text-xs text-gray-400">
                    경험적 기준: T &gt; 300 °C → 복사가 지배적인 경우가 많음.
                    T &lt; 100 °C → 강제 대류 시 복사 무시 가능.
                    항상 <Math tex="h_r/h" /> 비율을 확인하세요!
                  </p>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-sm font-bold text-gray-300 mb-3">Engineering Applications</h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                  <p className="text-xs text-red-400 font-medium mb-1">Spacecraft Thermal Control</p>
                  <p className="text-xs text-gray-500">진공에서는 대류 없음 → 복사가 유일한 열전달 메커니즘. ε 제어가 핵심.</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                  <p className="text-xs text-red-400 font-medium mb-1">Furnace/Boiler Walls</p>
                  <p className="text-xs text-gray-500">1000+ °C 화염 → 복사가 90% 이상. Refractory brick 설계 핵심.</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                  <p className="text-xs text-red-400 font-medium mb-1">Electronic Enclosures</p>
                  <p className="text-xs text-gray-500">자연 대류 환경에서 h ~ 5, <Math tex="h_r" /> ~ 5 → 복사가 총 열전달의 ~50%!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 6 — Initial Condition
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <span className="text-cyan-400 font-bold">IC</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Initial Condition (초기 조건)</h3>
                <p className="text-sm text-cyan-400">비정상(transient) 문제에서만 필요</p>
              </div>
            </div>

            {/* Main equation */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-center mb-6">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">General Form</p>
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                <Math tex="T(x,\, 0) = T_i(x)" display />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                시간 t = 0에서 도메인 전체의 온도 분포
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-cyan-300 mb-3">Why Needed?</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  열전도 방정식은 시간에 대해 <strong className="text-white">1차</strong>이므로,
                  시간 적분을 시작하기 위한 초기 상태가 반드시 필요합니다.
                  이것은 &ldquo;t = 0 에서 시스템이 어떤 온도 상태에 있었는가?&rdquo;를 알려줍니다.
                </p>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-gray-500">
                    <strong className="text-cyan-300">Note:</strong> IC는 도메인 <strong className="text-white">내부 모든 점</strong>에서의 온도를 지정합니다.
                    BC는 도메인의 <strong className="text-white">경계면</strong>에서의 조건만 지정합니다.
                    두 개념을 혼동하지 마세요!
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-cyan-300 mb-3">Most Common Case: Uniform IC</h4>
                <div className="p-4 rounded-2xl bg-slate-950/80 text-center mb-3">
                  <p className="text-2xl font-bold text-cyan-400">
                    <Math tex="T(x,\, 0) = T_i = \text{constant}" display />
                  </p>
                </div>
                <p className="text-sm text-gray-400">
                  균일한 초기 온도 — 물체가 처음에 일정한 온도 <Math tex="T_i" />에서 열적 평형 상태에 있었던 경우.
                </p>
                <ul className="text-xs text-gray-500 mt-2 space-y-1">
                  <li>-- 실온(25 °C)의 금속을 갑자기 뜨거운 오븐에 넣는 경우</li>
                  <li>-- 가열된 강철 빌렛을 공기 중에 방치하여 냉각하는 경우</li>
                  <li>-- 냉장고에서 꺼낸 음식(4 °C)을 실온에 놓는 경우</li>
                </ul>
              </div>
            </div>

            {/* Steady vs transient note */}
            <div className="p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/20 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-2xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-cyan-400 font-bold text-xs">!</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-2">
                    <strong className="text-cyan-300">Important:</strong> 정상상태(steady-state) 문제에서는 ∂T/∂t = 0이므로
                    시간 변수가 존재하지 않습니다. 따라서 초기 조건이 <strong className="text-white">필요 없습니다</strong>.
                    경계 조건만으로 해가 유일하게 결정됩니다.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="p-2 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                      <p className="text-xs text-cyan-400 font-bold">Steady-State</p>
                      <p className="text-xs text-gray-400 mt-1">BCs only</p>
                      <p className="text-xs text-gray-600">IC not needed</p>
                    </div>
                    <div className="p-2 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                      <p className="text-xs text-cyan-400 font-bold">Transient</p>
                      <p className="text-xs text-gray-400 mt-1">BCs + IC</p>
                      <p className="text-xs text-gray-600">IC required at t=0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-uniform IC examples */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-sm font-bold text-gray-300 mb-3">Non-uniform Initial Conditions (Advanced)</h4>
              <p className="text-sm text-gray-400 mb-3">
                초기 온도가 공간적으로 균일하지 않은 경우도 있습니다. 이전 과정의 정상상태 해가 새로운 문제의 초기 조건이 되는 경우가 대표적입니다.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                  <p className="text-xs text-cyan-400 font-medium mb-1">Linear Profile</p>
                  <p className="text-xs text-gray-400 font-mono">T(x,0) = T₁ + (T₂-T₁)(x/L)</p>
                  <p className="text-xs text-gray-500 mt-1">이전 정상상태 해가 초기 조건이 되는 경우. 예: 벽의 한쪽이 갑자기 단열됨.</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                  <p className="text-xs text-cyan-400 font-medium mb-1">Sinusoidal Profile</p>
                  <p className="text-xs text-gray-400"><Math tex="T(x,0) = T_m + A\sin(\pi x/L)" /></p>
                  <p className="text-xs text-gray-500 mt-1">특정 가열 패턴이 적용된 후의 초기 상태. Fourier 해석에 유용.</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                  <p className="text-xs text-cyan-400 font-medium mb-1">Parabolic Profile</p>
                  <p className="text-xs text-gray-400"><Math tex="T(x,0) = T_s + \frac{\dot{q}}{2k}(L^2 - x^2)" /></p>
                  <p className="text-xs text-gray-500 mt-1">내부 열 생성이 있는 정상상태 해. 전류가 흐르던 도선을 끊은 경우.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 7 — Interface Conditions
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <span className="text-purple-400 font-bold text-sm">IF</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Interface Conditions (접촉 경계)</h3>
                <p className="text-sm text-purple-400">두 물질이 만나는 경계면의 조건</p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              서로 다른 두 물질 A와 B가 접촉하는 경계면에서는 <strong className="text-white">두 가지 조건</strong>이 동시에 적용됩니다.
              이는 &ldquo;경계 조건&rdquo;이라기보다는 물질 사이의 &ldquo;연결 조건(matching conditions)&rdquo;에 가깝습니다.
            </p>

            {/* Two conditions */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-purple-500/5 border border-purple-500/20">
                <h4 className="text-sm font-bold text-purple-300 mb-3">Condition 1: Temperature Continuity</h4>
                <div className="p-4 rounded-2xl bg-slate-950/80 text-center mb-3">
                  <p className="text-xl font-bold text-purple-400">
                    <Math tex="T_A(x_{\text{int}}) = T_B(x_{\text{int}})" display />
                  </p>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  완전 접촉(perfect contact)에서는 접촉면 양쪽의 온도가 동일합니다.
                </p>
                <div className="p-2 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                  <p className="text-xs text-gray-500">
                    <strong className="text-purple-300">Why?</strong> 온도가 불연속이면 무한대의 온도 기울기 → 무한대의 열유속이 필요합니다.
                    이는 물리적으로 불가능합니다. (Fourier&apos;s law: q = -k dT/dx → if dT = finite over dx = 0, then q → ∞)
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-purple-500/5 border border-purple-500/20">
                <h4 className="text-sm font-bold text-purple-300 mb-3">Condition 2: Heat Flux Continuity</h4>
                <div className="p-4 rounded-2xl bg-slate-950/80 text-center mb-3">
                  <p className="text-xl font-bold text-purple-400">
                    <Math tex="-k_A\left.\frac{\partial T}{\partial x}\right|_A = -k_B\left.\frac{\partial T}{\partial x}\right|_B" display />
                  </p>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  에너지 보존에 의해, 경계면으로 들어오는 열유속과 나가는 열유속은 동일해야 합니다.
                </p>
                <div className="p-2 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                  <p className="text-xs text-gray-500">
                    <strong className="text-purple-300">Important:</strong> <Math tex="k_A \ne k_B" />이면
                    온도 <strong className="text-white">기울기(∂T/∂x)는 불연속</strong>이 됩니다!
                    온도 자체는 연속이지만, 기울기는 k값의 비만큼 변합니다: <Math tex="(dT/dx)_A / (dT/dx)_B = k_B / k_A" />
                  </p>
                </div>
              </div>
            </div>

            {/* Visual: slope discontinuity */}
            <div className="p-5 rounded-xl bg-slate-800/30 border border-purple-500/15 mb-6">
              <h4 className="text-sm font-bold text-purple-300 mb-3">Temperature Profile at Interface: Slope Changes</h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                  <p className="text-xs text-purple-400 font-bold mb-1"><Math tex="k_A > k_B" /></p>
                  <p className="text-xs text-gray-400">물질 A의 전도율이 더 높음</p>
                  <p className="text-xs text-gray-500 mt-1">A의 기울기가 <strong className="text-white">더 작음</strong> → A에서 완만, B에서 급격</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                  <p className="text-xs text-purple-400 font-bold mb-1"><Math tex="k_A = k_B" /></p>
                  <p className="text-xs text-gray-400">전도율이 동일</p>
                  <p className="text-xs text-gray-500 mt-1">기울기가 <strong className="text-white">연속</strong> → 단일 물질처럼 행동</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                  <p className="text-xs text-purple-400 font-bold mb-1"><Math tex="k_A < k_B" /></p>
                  <p className="text-xs text-gray-400">물질 B의 전도율이 더 높음</p>
                  <p className="text-xs text-gray-500 mt-1">A의 기울기가 <strong className="text-white">더 큼</strong> → A에서 급격, B에서 완만</p>
                </div>
              </div>
            </div>

            {/* Contact resistance */}
            <div className="p-5 rounded-xl bg-slate-800/30 border border-purple-500/20 mb-6">
              <h4 className="text-sm font-bold text-purple-300 mb-3">Contact Resistance (접촉 열저항)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    실제 접촉면은 <strong className="text-white">완전히 매끄럽지 않습니다</strong>.
                    미세한 표면 거칠기로 인해 실제 접촉은 점 접촉이며,
                    사이의 공간에는 공기(낮은 k)가 차 있습니다.
                    이로 인해 접촉면에서 <strong className="text-purple-300">온도 불연속(temperature jump)</strong>이 발생합니다.
                  </p>
                  <div className="p-4 rounded-2xl bg-slate-950/80 text-center mb-3">
                    <p className="text-xs text-gray-500 mb-1">Modified interface condition</p>
                    <p className="text-lg font-bold text-purple-400">
                      <Math tex="q'' = \frac{T_A - T_B}{R''_{t,c}}" display />
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      <Math tex="R''_{t,c}" />: thermal contact resistance [m²·K/W]
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-purple-500/5 border border-purple-500/15">
                    <p className="text-xs text-gray-400">
                      <strong className="text-purple-300"><Math tex="R''_{t,c}" />에 영향을 주는 요인:</strong> 표면 거칠기, 접촉 압력, 틈새 유체 (공기 vs. thermal grease), 표면 경도, 온도 수준.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-gray-300 mb-2">Typical Contact Resistance Values [m²·K/W]</p>
                  {contactResistanceData.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-2 rounded-xl bg-slate-800/40 border border-slate-700/50">
                      <span className="text-xs text-gray-400 flex-1">{item.surface}</span>
                      <span className="text-xs font-mono text-purple-400 w-28 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-2xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-400 font-bold text-xs">!</span>
                </div>
                <p className="text-sm text-gray-300">
                  <strong className="text-purple-300">공학적 의미:</strong> 접촉 열저항을 줄이기 위해
                  thermal grease (열전도 그리스), thermal pad, 또는 높은 접촉 압력을 사용합니다.
                  전자 장치에서 CPU와 방열판 사이에 바르는 서멀 페이스트가 대표적인 예입니다.
                  <Math tex="R''_{t,c}" />를 무시하면 과도하게 낙관적인 설계가 됩니다!
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 8 — Summary Table
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2 text-center">
              Summary: All Boundary Condition Types
            </h3>
            <p className="text-sm text-gray-500 text-center mb-6">
              BC 유형, 수학적 형태, 물리적 예시의 종합 참고자료
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 px-3 text-left text-gray-400 font-medium w-32">BC Type</th>
                    <th className="py-3 px-3 text-left text-gray-400 font-medium">Mathematical Form</th>
                    <th className="py-3 px-3 text-left text-gray-400 font-medium">What is Specified</th>
                    <th className="py-3 px-3 text-left text-gray-400 font-medium">Physical Example</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryTable.map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="border-b border-slate-800/50"
                    >
                      <td className="py-3 px-3">
                        <span className={`font-bold ${row.accent} text-xs`}>{row.type}</span>
                        <br />
                        <span className="text-xs text-gray-600">{row.korean}</span>
                      </td>
                      <td className="py-3 px-3 font-mono text-xs text-gray-300">{row.math}</td>
                      <td className="py-3 px-3 text-xs text-gray-400">{row.specified}</td>
                      <td className="py-3 px-3 text-xs text-gray-400">{row.example}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Usage frequency bar chart (CSS only) */}
            <h4 className="text-sm font-bold text-white mb-4">Relative Usage Frequency in Engineering Problems</h4>
            <div className="space-y-3 mb-6">
              {bcComparisonChart.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-20 flex-shrink-0 text-xs text-gray-400 font-medium">{item.type}</div>
                  <div className="flex-1 h-7 bg-slate-800/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-blue-500/60"
                      initial={{ width: 0 }}
                      whileInView={{ width: item.barWidth }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                    />
                  </div>
                  <div className="w-16 text-right text-xs font-mono text-blue-400">{item.usage}</div>
                </div>
              ))}
              <p className="text-xs text-gray-600">Type 3 (대류)이 실제 공학에서 압도적으로 가장 흔합니다</p>
            </div>

            {/* Quick comparison */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 px-2 text-left text-gray-400">Type</th>
                    <th className="py-2 px-2 text-center text-gray-400">Known</th>
                    <th className="py-2 px-2 text-center text-gray-400">Unknown</th>
                    <th className="py-2 px-2 text-center text-gray-400">Linearity</th>
                    <th className="py-2 px-2 text-center text-gray-400">Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {bcComparisonChart.map((item, i) => (
                    <tr key={i} className="border-b border-slate-800/50">
                      <td className="py-2 px-2 text-blue-400 font-medium">{item.type}</td>
                      <td className="py-2 px-2 text-center text-gray-300">{item.known}</td>
                      <td className="py-2 px-2 text-center text-gray-400">{item.unknown}</td>
                      <td className="py-2 px-2 text-center text-gray-400">{i < 3 ? "Linear" : "Nonlinear"}</td>
                      <td className="py-2 px-2 text-center text-gray-400">{item.difficulty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 9 — Full Problem Examples
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2 text-center">
              Complete Problem Setup Examples
            </h3>
            <p className="text-sm text-gray-500 text-center mb-6">
              지배 방정식 + BCs + IC: 완전한 문제를 수립하는 방법
            </p>

            <div className="space-y-6">
              {fullProblemExamples.map((ex, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-5 rounded-xl border border-${ex.color}-500/20 bg-${ex.color}-500/5`}
                >
                  <h4 className="text-sm font-bold text-white mb-1">{ex.title}</h4>
                  <p className="text-xs text-gray-500 mb-4">{ex.type}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="p-2 rounded-2xl bg-slate-950/80 border border-slate-800">
                        <p className="text-xs text-gray-500">Governing Equation</p>
                        <p className="text-sm font-mono text-white">{ex.governing}</p>
                      </div>
                      <div className="p-2 rounded-2xl bg-slate-950/80 border border-slate-800">
                        <p className="text-xs text-gray-500">BC at x = 0</p>
                        <p className="text-xs font-mono text-gray-300">{ex.bc1}</p>
                      </div>
                      <div className="p-2 rounded-2xl bg-slate-950/80 border border-slate-800">
                        <p className="text-xs text-gray-500">BC at x = L</p>
                        <p className="text-xs font-mono text-gray-300">{ex.bc2}</p>
                      </div>
                      <div className="p-2 rounded-2xl bg-slate-950/80 border border-slate-800">
                        <p className="text-xs text-gray-500">Initial Condition</p>
                        <p className="text-xs font-mono text-gray-300">{ex.ic}</p>
                      </div>
                    </div>
                    <div>
                      <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 mb-2">
                        <p className="text-xs text-gray-500 mb-1">Solution</p>
                        <p className="text-sm font-mono text-blue-400">{ex.solution}</p>
                      </div>
                      <div className="p-3 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                        <p className="text-xs text-gray-500 mb-1">Note</p>
                        <p className="text-xs text-gray-400">{ex.note}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 10 — Choosing the Right BC
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              How to Choose the Correct BC?
            </h3>
            <p className="text-sm text-gray-400 text-center mb-6">
              결정 순서도: 각 경계 표면에 대해 다음 질문을 순서대로 확인하세요
            </p>

            <div className="space-y-4">
              {decisionGuide.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-xl bg-slate-800/30 border border-slate-700"
                >
                  <p className="text-sm font-semibold text-white mb-1">
                    <span className={`text-${item.color}-400`}>Q{i + 1}.</span> {item.question}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">{item.detail}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                      <p className="text-xs text-emerald-400 font-medium">YES</p>
                      <p className="text-xs text-gray-400 mt-1">{item.yes}</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700">
                      <p className="text-xs text-gray-500 font-medium">NO</p>
                      <p className="text-xs text-gray-400 mt-1">{item.no}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 11 — Common Mistakes
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Common Mistakes to Avoid
            </h3>

            <div className="space-y-3">
              {commonMistakes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="p-4 rounded-xl bg-slate-800/30 border border-slate-700 flex items-start gap-4"
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    item.severity === "high" ? "bg-red-500/20" : item.severity === "medium" ? "bg-amber-500/20" : "bg-gray-500/20"
                  }`}>
                    <span className={`text-xs font-bold ${
                      item.severity === "high" ? "text-red-400" : item.severity === "medium" ? "text-amber-400" : "text-gray-400"
                    }`}>X</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold text-red-300">{item.mistake}</p>
                      <span className={`text-xs px-1.5 py-0.5 rounded-xl ${
                        item.severity === "high" ? "bg-red-500/10 text-red-400" : item.severity === "medium" ? "bg-amber-500/10 text-amber-400" : "bg-gray-500/10 text-gray-400"
                      }`}>{item.severity}</span>
                    </div>
                    <p className="text-xs text-gray-400">{item.correction}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Final summary box */}
            <div className="mt-8 p-5 rounded-xl bg-blue-500/5 border border-blue-500/20">
              <h4 className="text-sm font-bold text-blue-300 mb-3 text-center">Final Checklist: Problem Formulation</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  {[
                    "지배 방정식 확인 (정상 또는 비정상)?",
                    "BCs 수가 공간 차수와 일치하는가?",
                    "비정상 문제에서 IC가 지정되었는가?",
                    "올바른 부호 규약을 사용하였는가?",
                  ].map((check, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <div className="w-4 h-4 rounded-xl border border-blue-500/40 flex-shrink-0" />
                      <p className="text-xs text-gray-400">{check}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    "복사 BC에서 온도를 Kelvin으로 사용하였는가?",
                    "물질 접합부에서 접촉면 조건을 적용하였는가?",
                    "필요시 접촉 열저항을 포함하였는가?",
                    "각 표면에 물리적으로 적절한 BC 유형을 선택하였는가?",
                  ].map((check, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <div className="w-4 h-4 rounded-xl border border-blue-500/40 flex-shrink-0" />
                      <p className="text-xs text-gray-400">{check}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

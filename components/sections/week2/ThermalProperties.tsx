"use client";

import { motion } from "framer-motion";
import MathTex from "@/components/Math";

/* ───────── data ───────── */

const propertyClassification = [
  {
    category: "Transport Property",
    symbol: "k",
    symbolTex: "k",
    name: "Thermal Conductivity",
    unit: "W/(m·K)",
    meaning: "물질이 열을 전달하는 능력",
    color: "violet",
  },
  {
    category: "Thermodynamic Properties",
    symbol: "ρ",
    symbolTex: "\\rho",
    name: "Density",
    unit: "kg/m³",
    meaning: "단위 부피당 질량",
    color: "blue",
  },
  {
    category: "Thermodynamic Properties",
    symbol: "cp",
    symbolTex: "c_p",
    name: "Specific Heat",
    unit: "J/(kg·K)",
    meaning: "단위 질량을 1 K 올리는 데 필요한 에너지",
    color: "blue",
  },
  {
    category: "Derived Property",
    symbol: "α",
    symbolTex: "\\alpha",
    name: "Thermal Diffusivity",
    unit: "m²/s",
    meaning: "열 전달 속도 대비 열 저장 능력의 비",
    color: "emerald",
  },
];

const kRanges = [
  { label: "Diamond", range: "2,000", color: "bg-violet-500", width: "100%", value: 2000 },
  { label: "Pure Metals", range: "50 – 400", color: "bg-red-500", width: "20%", value: 400 },
  { label: "Alloys", range: "10 – 100", color: "bg-orange-500", width: "5%", value: 100 },
  { label: "Nonmetallic Solids", range: "0.5 – 40", color: "bg-yellow-500", width: "2%", value: 40 },
  { label: "Liquids", range: "0.1 – 0.7", color: "bg-blue-500", width: "0.5%", value: 0.7 },
  { label: "Gases", range: "0.01 – 0.3", color: "bg-cyan-500", width: "0.3%", value: 0.3 },
  { label: "Insulators", range: "0.01 – 0.05", color: "bg-green-500", width: "0.2%", value: 0.05 },
];

const kComprehensiveTable = [
  // Metals
  { name: "Silver (Ag)", k: 429, category: "metal", note: "최고 전기/열전도체" },
  { name: "Copper (Cu)", k: 401, category: "metal", note: "열교환기, 전선" },
  { name: "Gold (Au)", k: 317, category: "metal", note: "전자 접점" },
  { name: "Aluminum (Al)", k: 237, category: "metal", note: "방열판, 항공기" },
  { name: "Brass (Cu-Zn)", k: 110, category: "metal", note: "합금 → k 감소" },
  { name: "Iron (Fe)", k: 80, category: "metal", note: "구조재" },
  { name: "Carbon Steel", k: 60.5, category: "metal", note: "일반 강재" },
  { name: "Stainless Steel (304)", k: 15.1, category: "metal", note: "합금 → k 매우 낮음" },
  { name: "Titanium (Ti)", k: 21.9, category: "metal", note: "항공/의료" },
  // Non-metals
  { name: "Diamond", k: 2000, category: "nonmetal", note: "최고 k 물질" },
  { name: "Silicon Carbide (SiC)", k: 120, category: "nonmetal", note: "세라믹 고열전도" },
  { name: "Alumina (Al₂O₃)", k: 36, category: "nonmetal", note: "전자 기판" },
  { name: "Silicon (Si)", k: 148, category: "nonmetal", note: "반도체" },
  { name: "Concrete", k: 1.4, category: "nonmetal", note: "건축재" },
  { name: "Brick", k: 0.72, category: "nonmetal", note: "건축재" },
  { name: "Glass (soda-lime)", k: 1.4, category: "nonmetal", note: "창유리" },
  { name: "Wood (oak, ⊥grain)", k: 0.17, category: "nonmetal", note: "단열성 양호" },
  { name: "Wood (pine, ⊥grain)", k: 0.12, category: "nonmetal", note: "단열성 양호" },
  // Insulators
  { name: "Fiberglass", k: 0.04, category: "insulator", note: "건축 단열재" },
  { name: "PU Foam", k: 0.026, category: "insulator", note: "냉장고 단열" },
  { name: "Aerogel", k: 0.013, category: "insulator", note: "최고 성능 단열" },
  { name: "Styrofoam (EPS)", k: 0.033, category: "insulator", note: "포장/건축 단열" },
  // Fluids
  { name: "Water (25 °C)", k: 0.613, category: "fluid", note: "높은 k (액체 중)" },
  { name: "Engine Oil", k: 0.145, category: "fluid", note: "낮은 k" },
  { name: "Ethylene Glycol", k: 0.252, category: "fluid", note: "부동액" },
  { name: "Air (25 °C)", k: 0.0261, category: "fluid", note: "매우 낮은 k" },
  { name: "Hydrogen (25 °C)", k: 0.183, category: "fluid", note: "기체 중 최고 k" },
  { name: "Liquid Sodium (100 °C)", k: 86, category: "fluid", note: "원자로 냉각재" },
  { name: "Mercury (25 °C)", k: 8.54, category: "fluid", note: "액체 금속" },
];

const metalKTable = [
  { metal: "Silver (Ag)", k: 429, sigma: "63.0 × 10⁶", kOverSigma: "6.81 × 10⁻⁶", note: "최고 k" },
  { metal: "Copper (Cu)", k: 401, sigma: "59.6 × 10⁶", kOverSigma: "6.73 × 10⁻⁶", note: "열교환기" },
  { metal: "Gold (Au)", k: 317, sigma: "45.2 × 10⁶", kOverSigma: "7.01 × 10⁻⁶", note: "전자접점" },
  { metal: "Aluminum (Al)", k: 237, sigma: "37.7 × 10⁶", kOverSigma: "6.29 × 10⁻⁶", note: "방열판" },
  { metal: "Iron (Fe)", k: 80, sigma: "10.0 × 10⁶", kOverSigma: "8.00 × 10⁻⁶", note: "구조재" },
  { metal: "Stainless Steel 304", k: 15.1, sigma: "1.39 × 10⁶", kOverSigma: "10.9 × 10⁻⁶", note: "합금" },
];

const nonmetalKTable = [
  { material: "Diamond", k: 2000, mechanism: "Phonon (극히 규칙적 결정)", note: "자연계 최고 k" },
  { material: "Silicon Carbide", k: 120, mechanism: "Phonon (결정질 세라믹)", note: "고온 부품" },
  { material: "Alumina (Al₂O₃)", k: 36, mechanism: "Phonon (다결정)", note: "전자 기판" },
  { material: "Fused Quartz", k: 1.4, mechanism: "Phonon (비정질)", note: "결정질 quartz: 10.4" },
  { material: "Concrete", k: 1.4, mechanism: "Composite", note: "건축 열관류" },
  { material: "Brick", k: 0.72, mechanism: "Composite + air pores", note: "건축" },
  { material: "Wood (oak)", k: 0.17, mechanism: "Fiber + air pores", note: "방향에 따라 다름" },
  { material: "Fiberglass", k: 0.04, mechanism: "Trapped air", note: "건축 단열" },
  { material: "PU Foam", k: 0.026, mechanism: "Sealed gas cells", note: "냉장고" },
  { material: "Aerogel", k: 0.013, mechanism: "Nanoporous → suppress convection", note: "NASA 우주복" },
];

const fluidKTable = [
  { fluid: "Liquid Sodium", k: 86, type: "Liquid metal", note: "원자로 냉각재" },
  { fluid: "Mercury", k: 8.54, type: "Liquid metal", note: "온도계" },
  { fluid: "Water", k: 0.613, type: "Liquid", note: "가장 흔한 냉각제" },
  { fluid: "Ethylene Glycol", k: 0.252, type: "Liquid", note: "부동액" },
  { fluid: "Engine Oil", k: 0.145, type: "Liquid", note: "윤활/냉각" },
  { fluid: "Hydrogen", k: 0.183, type: "Gas", note: "기체 중 최고 k" },
  { fluid: "Helium", k: 0.152, type: "Gas", note: "불활성 기체" },
  { fluid: "Air", k: 0.0261, type: "Gas", note: "가장 흔한 기체" },
  { fluid: "CO₂", k: 0.0166, type: "Gas", note: "온실가스" },
  { fluid: "R-134a", k: 0.0127, type: "Gas", note: "냉매" },
];

const cpTable = [
  { material: "Water", cp: 4186, rho: 997, rhoCp: "4.17 × 10⁶", note: "최고 열저장 능력" },
  { material: "Ethylene Glycol", cp: 2382, rho: 1117, rhoCp: "2.66 × 10⁶", note: "부동액" },
  { material: "Engine Oil", cp: 1909, rho: 884, rhoCp: "1.69 × 10⁶", note: "오일" },
  { material: "Aluminum", cp: 903, rho: 2702, rhoCp: "2.44 × 10⁶", note: "경량 금속" },
  { material: "Iron", cp: 447, rho: 7870, rhoCp: "3.52 × 10⁶", note: "철" },
  { material: "Copper", cp: 385, rho: 8933, rhoCp: "3.44 × 10⁶", note: "구리" },
  { material: "Gold", cp: 129, rho: 19300, rhoCp: "2.49 × 10⁶", note: "금" },
  { material: "Concrete", cp: 880, rho: 2300, rhoCp: "2.02 × 10⁶", note: "축열재" },
  { material: "Wood (oak)", cp: 2390, rho: 545, rhoCp: "1.30 × 10⁶", note: "유기물" },
  { material: "Air (25 °C)", cp: 1007, rho: 1.184, rhoCp: "1.19 × 10³", note: "매우 낮음" },
];

const alphaTable = [
  { material: "Silver", alpha: "174 × 10⁻⁶", alphaNum: 174, response: "가장 빠름", category: "metal" },
  { material: "Copper", alpha: "117 × 10⁻⁶", alphaNum: 117, response: "매우 빠름", category: "metal" },
  { material: "Aluminum", alpha: "97.1 × 10⁻⁶", alphaNum: 97.1, response: "빠름", category: "metal" },
  { material: "Iron", alpha: "22.8 × 10⁻⁶", alphaNum: 22.8, response: "보통", category: "metal" },
  { material: "Stainless Steel", alpha: "3.91 × 10⁻⁶", alphaNum: 3.91, response: "느림", category: "metal" },
  { material: "Alumina", alpha: "11.9 × 10⁻⁶", alphaNum: 11.9, response: "보통", category: "nonmetal" },
  { material: "Glass", alpha: "0.64 × 10⁻⁶", alphaNum: 0.64, response: "느림", category: "nonmetal" },
  { material: "Concrete", alpha: "0.69 × 10⁻⁶", alphaNum: 0.69, response: "느림", category: "nonmetal" },
  { material: "Wood (oak)", alpha: "0.13 × 10⁻⁶", alphaNum: 0.13, response: "매우 느림", category: "nonmetal" },
  { material: "Water", alpha: "0.146 × 10⁻⁶", alphaNum: 0.146, response: "매우 느림", category: "fluid" },
  { material: "Air", alpha: "22.5 × 10⁻⁶", alphaNum: 22.5, response: "보통 (k 낮지만 ρcp도 낮음)", category: "fluid" },
  { material: "PU Foam", alpha: "~0.01 × 10⁻⁶", alphaNum: 0.01, response: "극히 느림", category: "insulator" },
];

const tempDependenceData = [
  {
    material: "Metals (pure)",
    kTrend: "T ↑ → k ↓",
    reason: "온도 증가 시 electron-phonon scattering 증가",
    color: "text-red-400",
  },
  {
    material: "Alloys",
    kTrend: "T ↑ → k ↑ (slightly)",
    reason: "불순물 산란이 이미 지배적; phonon 기여가 증가",
    color: "text-orange-400",
  },
  {
    material: "Nonmetallic Solids",
    kTrend: "T ↑ → k ↓",
    reason: "Phonon-phonon scattering (Umklapp)이 온도와 함께 증가",
    color: "text-yellow-400",
  },
  {
    material: "Gases",
    kTrend: "T ↑ → k ↑",
    reason: "평균 분자 속도 ∝ √T, 충돌 빈도 증가",
    color: "text-cyan-400",
  },
  {
    material: "Liquids (most)",
    kTrend: "T ↑ → k ↓ (except water)",
    reason: "분자 간 상호작용 감소",
    color: "text-blue-400",
  },
  {
    material: "Water (special)",
    kTrend: "T ↑ → k ↑ (up to ~130 °C)",
    reason: "독특한 수소 결합 구조가 열 전달을 촉진",
    color: "text-emerald-400",
  },
];

const categoryColors: Record<string, string> = {
  metal: "text-red-400",
  nonmetal: "text-yellow-400",
  insulator: "text-green-400",
  fluid: "text-blue-400",
};

const categoryBg: Record<string, string> = {
  metal: "bg-red-500/10",
  nonmetal: "bg-yellow-500/10",
  insulator: "bg-green-500/10",
  fluid: "bg-blue-500/10",
};

export default function ThermalProperties() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thermophysical Properties
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            열전달 해석에 필요한 물성치의 물리적 의미, 전달 메커니즘, 그리고 온도 의존성을 체계적으로 이해합니다.
          </p>
        </motion.div>

        {/* ════════════════════════════════════════════════
            SECTION 1 — Classification of Properties
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-slate-950 p-8"
          >
            <h3 className="text-2xl font-bold text-violet-400 mb-3">
              1. Classification of Thermophysical Properties
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              열전달 해석에 사용되는 물성치는 크게 <strong className="text-white">수송 물성치(transport property)</strong>,
              <strong className="text-white">열역학적 물성치(thermodynamic properties)</strong>,
              그리고 이들의 조합인 <strong className="text-white">유도 물성치(derived property)</strong>로 분류됩니다.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {propertyClassification.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`p-5 rounded-xl bg-slate-950/80 border border-${p.color}-500/20`}
                >
                  <p className={`text-xs text-${p.color}-400 font-medium mb-1`}>{p.category}</p>
                  <div className="text-2xl font-bold text-white mb-1">
                    <MathTex tex={p.symbolTex} />
                  </div>
                  <p className="text-sm text-gray-300 font-medium">{p.name}</p>
                  <p className="text-xs text-gray-500 mt-1">[{p.unit}]</p>
                  <p className="text-xs text-gray-400 mt-2">{p.meaning}</p>
                </motion.div>
              ))}
            </div>

            {/* Alpha definition */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-violet-500/20 text-center mb-6">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Thermal Diffusivity (핵심 유도 물성치)</p>
              <div className="text-4xl font-bold text-violet-400 mb-2">
                <MathTex tex="\alpha = \frac{k}{\rho c_p}" display />
              </div>
              <p className="text-sm text-gray-500">[<MathTex tex="\text{m}^2/\text{s}" />]</p>
              <div className="mt-4 grid md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                <div className="p-2 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-center">
                  <p className="text-xs text-violet-400 font-bold"><MathTex tex="k" /> (numerator)</p>
                  <p className="text-xs text-gray-400">열을 전달하는 능력</p>
                </div>
                <div className="p-2 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-center">
                  <p className="text-xs text-violet-400 font-bold"><MathTex tex="\rho c_p" /> (denominator)</p>
                  <p className="text-xs text-gray-400">열을 저장하는 능력</p>
                </div>
                <div className="p-2 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-center">
                  <p className="text-xs text-violet-400 font-bold"><MathTex tex="\alpha" /> (ratio)</p>
                  <p className="text-xs text-gray-400">열적 반응 속도</p>
                </div>
              </div>
            </div>

            {/* Insight */}
            <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/20">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-2xl bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-violet-400 font-bold text-xs">!</span>
                </div>
                <p className="text-sm text-gray-300">
                  <strong className="text-violet-300">물리적 의미:</strong> <MathTex tex="\alpha" />가 큰 물질은 열을 빠르게 전달하지만 적게 저장합니다.
                  구리의 <MathTex tex="\alpha" />는 물의 약 <strong className="text-white">800배</strong>입니다.
                  이는 구리가 열적 변화에 훨씬 빠르게 반응한다는 의미입니다.
                  Heat equation에서 <MathTex tex="\partial T / \partial t = \alpha \cdot \partial^2 T / \partial x^2" /> 이므로,
                  {" "}<MathTex tex="\alpha" />가 클수록 같은 온도 기울기에서 온도 변화가 빠릅니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 2 — Thermal Conductivity k Overview
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-slate-950 p-8"
          >
            <h3 className="text-2xl font-bold text-violet-400 mb-3">
              2. Thermal Conductivity k — Overview
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              열전도율 k는 물질이 열을 전도(conduction)로 전달하는 능력을 나타내는 <strong className="text-white">가장 중요한 물성치</strong>입니다.
              Fourier&apos;s law에서 직접 사용됩니다: <MathTex tex="q'' = -k \frac{dT}{dx}" />.
            </p>

            {/* Definition box */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-violet-500/20 text-center mb-6">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Definition from Fourier&apos;s Law</p>
              <div className="text-2xl font-bold text-violet-400 mb-2">
                <MathTex tex="k = -\frac{q''}{dT/dx}" display />
              </div>
              <p className="text-sm text-gray-500">
                [W/(m·K)] = heat flux per unit temperature gradient
              </p>
            </div>

            {/* Transport mechanisms */}
            <h4 className="text-sm font-bold text-white mb-3">Heat Transport Mechanisms by Material Type</h4>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20">
                <h5 className="text-sm font-bold text-red-300 mb-2">Metals: Free Electrons</h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  금속에서는 <strong className="text-white">자유 전자(free electrons)</strong>가 열 전달의 주요 매개체입니다.
                  전자가 에너지를 운반하며 격자를 통해 이동합니다.
                  이 때문에 전기 전도도와 열 전도도가 비례합니다 (Wiedemann-Franz law).
                </p>
              </div>
              <div className="p-5 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                <h5 className="text-sm font-bold text-yellow-300 mb-2">Non-metals: Phonons</h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  비금속 고체에서는 <strong className="text-white">격자 진동(phonons)</strong>이 열을 전달합니다.
                  결정질 물질은 phonon이 잘 전파되어 k가 높고,
                  비정질(amorphous) 물질은 phonon 산란이 심해 k가 낮습니다.
                  Diamond: 가장 규칙적인 결정 → k = 2,000!
                </p>
              </div>
              <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/20">
                <h5 className="text-sm font-bold text-blue-300 mb-2">Fluids: Molecular Collisions</h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  유체에서는 <strong className="text-white">분자 충돌(molecular collisions)</strong>이 열을 전달합니다.
                  기체: 분자 간 거리가 멀어 k 매우 낮음.
                  액체: 분자가 더 가까워 k가 약간 높음.
                  액체 금속: 자유 전자 존재 → k 매우 높음!
                </p>
              </div>
            </div>

            {/* k ranges visual */}
            <h4 className="text-sm font-bold text-white mb-3">Thermal Conductivity Ranges [W/(m·K)]</h4>
            <div className="space-y-3 mb-6">
              {kRanges.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-44 flex-shrink-0 text-sm text-gray-300">{item.label}</div>
                  <div className="flex-1 h-7 bg-slate-800/50 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${item.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: item.width }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.08 }}
                    />
                  </div>
                  <div className="w-24 text-right text-sm font-mono text-gray-400">{item.range}</div>
                </div>
              ))}
              <p className="text-xs text-gray-600">Note: logarithmic scale — metals are 10,000x more conductive than insulators</p>
            </div>

            {/* Comprehensive k table */}
            <h4 className="text-sm font-bold text-white mb-3">Comprehensive Material Conductivity Table (at ~300 K)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 px-3 text-left text-gray-400 font-medium">Material</th>
                    <th className="py-2 px-3 text-right text-violet-400 font-medium">k [W/(m·K)]</th>
                    <th className="py-2 px-3 text-center text-gray-400 font-medium">Category</th>
                    <th className="py-2 px-3 text-left text-gray-400 font-medium">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {kComprehensiveTable.map((m, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.02 }}
                      className="border-b border-slate-800/50"
                    >
                      <td className="py-1.5 px-3 text-gray-300 text-xs">{m.name}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-violet-400 text-xs font-bold">{m.k}</td>
                      <td className="py-1.5 px-3 text-center">
                        <span className={`text-xs px-2 py-0.5 rounded-xl ${categoryBg[m.category]} ${categoryColors[m.category]}`}>
                          {m.category}
                        </span>
                      </td>
                      <td className="py-1.5 px-3 text-xs text-gray-500">{m.note}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 3 — k of Metals
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-3">
              3. Thermal Conductivity of Metals
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              금속의 열전도는 주로 <strong className="text-white">자유 전자(free electron) 수송</strong>에 의해 이루어집니다.
              이는 금속이 전기도 잘 전도하는 이유와 동일한 메커니즘입니다.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-red-300 mb-3">Wiedemann-Franz Law</h4>
                <div className="p-4 rounded-2xl bg-slate-950/80 text-center mb-3">
                  <p className="text-xl font-bold text-red-400">
                    <MathTex tex="\frac{k}{\sigma_e} = LT" display />
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    <MathTex tex="L = 2.44 \times 10^{-8}" /> W·Ω/K² (Lorenz number)
                  </p>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  열전도율 k와 전기전도율 <MathTex tex="\sigma_e" />의 비는 온도에 비례합니다.
                  이는 열과 전기 모두 <strong className="text-white">같은 자유 전자</strong>가 전달하기 때문입니다.
                  따라서 전기를 잘 전도하는 금속(Ag, Cu, Au, Al)은 열도 잘 전도합니다.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-red-300 mb-3">Temperature Dependence</h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-red-500/5 border border-red-500/15">
                    <p className="text-xs text-red-400 font-bold mb-1">Pure Metals: k decreases with T</p>
                    <p className="text-xs text-gray-400">
                      온도 증가 → electron-phonon 산란 증가 → 전자의 평균자유경로(mean free path) 감소 → k 감소.
                      예: Cu at 100K: ~482, at 300K: 401, at 600K: ~379
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-orange-500/5 border border-orange-500/15">
                    <p className="text-xs text-orange-400 font-bold mb-1">Alloys: k increases slightly with T</p>
                    <p className="text-xs text-gray-400">
                      합금 원소가 이미 강한 산란을 유발 → 추가 phonon 산란의 영향이 상대적으로 작음.
                      격자 진동(phonon) 기여분이 T와 함께 증가. SS304: 15 → 20 W/(mK) at 300→800K.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pure vs alloy insight */}
            <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20 mb-6">
              <h4 className="text-sm font-bold text-red-300 mb-3">Pure Metals vs Alloys: Why Alloys Have Lower k</h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-white font-bold mb-1">Pure Copper</p>
                  <p className="text-xs font-mono text-red-400">k = 401 W/(m·K)</p>
                  <p className="text-xs text-gray-500 mt-1">규칙적 격자 → 전자 산란 적음</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-white font-bold mb-1">Brass (Cu-Zn)</p>
                  <p className="text-xs font-mono text-orange-400">k = 110 W/(m·K)</p>
                  <p className="text-xs text-gray-500 mt-1">Zn 원자가 격자 불규칙성 유발 → 산란 증가</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-white font-bold mb-1">Stainless Steel (Fe-Cr-Ni)</p>
                  <p className="text-xs font-mono text-yellow-400">k = 15.1 W/(m·K)</p>
                  <p className="text-xs text-gray-500 mt-1">다량의 합금 원소 → k 극적 감소</p>
                </div>
              </div>
            </div>

            {/* Wiedemann-Franz verification table */}
            <h4 className="text-sm font-bold text-white mb-3">Wiedemann-Franz Law Verification (at 300 K)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 px-3 text-left text-gray-400 font-medium">Metal</th>
                    <th className="py-2 px-3 text-right text-gray-400 font-medium">k [W/(mK)]</th>
                    <th className="py-2 px-3 text-right text-gray-400 font-medium"><MathTex tex="\sigma_e" /> [1/(Ω·m)]</th>
                    <th className="py-2 px-3 text-right text-red-400 font-medium"><MathTex tex="k/(\sigma_e T)" /></th>
                    <th className="py-2 px-3 text-left text-gray-400 font-medium">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {metalKTable.map((m, i) => (
                    <tr key={i} className="border-b border-slate-800/50">
                      <td className="py-1.5 px-3 text-gray-300">{m.metal}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-red-400">{m.k}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-gray-400">{m.sigma}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-red-300">{m.kOverSigma}</td>
                      <td className="py-1.5 px-3 text-gray-500">{m.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-600 mt-2">
                <MathTex tex="k/(\sigma T) \approx L = 2.44 \times 10^{-8}" /> for all metals — confirming the law
              </p>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 4 — k of Non-metals
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-slate-950 p-8"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">
              4. Thermal Conductivity of Non-metallic Solids
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              비금속 고체에서는 <strong className="text-white">격자 진동(phonon transport)</strong>이 열전달의 주요 메커니즘입니다.
              결정질(crystalline) 물질은 phonon이 잘 전파되어 k가 높고,
              비정질(amorphous) 물질은 산란이 심해 k가 낮습니다.
            </p>

            {/* Key rule */}
            <div className="p-5 rounded-xl bg-yellow-500/5 border border-yellow-500/20 mb-6">
              <h4 className="text-sm font-bold text-yellow-300 mb-2">Key Principle</h4>
              <p className="text-sm text-gray-300">
                <strong className="text-white">Crystalline &gt; Polycrystalline &gt; Amorphous</strong> in thermal conductivity.
                Perfect single crystal diamond (k = 2,000) vs. amorphous glass (k = 1.4): <strong className="text-yellow-300">1,400x difference</strong>!
              </p>
            </div>

            {/* Non-metal table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 px-3 text-left text-gray-400 font-medium">Material</th>
                    <th className="py-2 px-3 text-right text-yellow-400 font-medium">k [W/(mK)]</th>
                    <th className="py-2 px-3 text-left text-gray-400 font-medium">Mechanism</th>
                    <th className="py-2 px-3 text-left text-gray-400 font-medium">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {nonmetalKTable.map((m, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="border-b border-slate-800/50"
                    >
                      <td className="py-1.5 px-3 text-gray-300 text-xs">{m.material}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-yellow-400 text-xs font-bold">{m.k}</td>
                      <td className="py-1.5 px-3 text-xs text-gray-400">{m.mechanism}</td>
                      <td className="py-1.5 px-3 text-xs text-gray-500">{m.note}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Insulation principle */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-yellow-300 mb-3">Why Insulators Work: Trapped Air</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-2">
                  대부분의 단열재는 <strong className="text-white">작은 공기 셀(trapped air cells)</strong>을 포함합니다.
                  공기 자체의 k = 0.026은 매우 낮지만, 큰 공간에서는 자연 대류가 발생합니다.
                  단열재는 공기를 <strong className="text-yellow-300">미세한 공간에 가둬</strong> 대류를 억제합니다.
                </p>
                <div className="space-y-1">
                  <div className="flex justify-between p-1.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                    <span className="text-xs text-gray-400">Still air</span>
                    <span className="text-xs font-mono text-yellow-400">k = 0.026</span>
                  </div>
                  <div className="flex justify-between p-1.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                    <span className="text-xs text-gray-400">Fiberglass</span>
                    <span className="text-xs font-mono text-yellow-400">k = 0.04</span>
                  </div>
                  <div className="flex justify-between p-1.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                    <span className="text-xs text-gray-400">PU Foam</span>
                    <span className="text-xs font-mono text-yellow-400">k = 0.026</span>
                  </div>
                  <div className="flex justify-between p-1.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                    <span className="text-xs text-gray-400">Aerogel</span>
                    <span className="text-xs font-mono text-green-400">k = 0.013</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Aerogel: nanopore가 공기 분자의 평균자유경로보다 작아 기체 전도까지 억제!
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-yellow-300 mb-3">Building Materials</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-3">
                  건축 재료의 k는 열관류 계산(U-value)에 필수적입니다.
                  벽체의 총 열저항 <MathTex tex="R = \sum(L/k)" />로 계산합니다.
                </p>
                <div className="space-y-1.5">
                  {[
                    { name: "Concrete", k: 1.4, comment: "열교(thermal bridge) 주의" },
                    { name: "Brick", k: 0.72, comment: "중간 수준" },
                    { name: "Wood", k: "0.12-0.17", comment: "양호한 단열성" },
                    { name: "Gypsum board", k: 0.16, comment: "내벽 마감재" },
                    { name: "Window glass", k: 1.4, comment: "열 취약부" },
                  ].map((b, i) => (
                    <div key={i} className="flex items-center justify-between p-1.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                      <span className="text-xs text-gray-300">{b.name}</span>
                      <span className="text-xs font-mono text-yellow-400">{b.k}</span>
                      <span className="text-xs text-gray-500">{b.comment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Anisotropy note */}
            <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-2xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-yellow-400 font-bold text-xs">!</span>
                </div>
                <p className="text-sm text-gray-300">
                  <strong className="text-yellow-300">Anisotropy:</strong> 목재, 복합재료, 적층판 등은 방향에 따라 k가 다릅니다.
                  Wood: <MathTex tex="k_{\parallel} = 0.35" /> vs <MathTex tex="k_{\perp} = 0.15" /> W/(mK).
                  Carbon fiber composites: <MathTex tex="k_{\text{fiber}} = 10" /> vs <MathTex tex="k_{\text{matrix}} = 0.2" />.
                  3D 해석 시 k를 텐서로 취급해야 합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 5 — k of Fluids
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-3">
              5. Thermal Conductivity of Fluids
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              유체의 열전도율은 고체에 비해 일반적으로 낮습니다 (예외: 액체 금속).
              기체는 분자 운동에너지 전달, 액체는 분자간 상호작용에 의해 열이 전도됩니다.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                <h5 className="text-sm font-bold text-cyan-300 mb-2">Gases</h5>
                <p className="text-xs text-gray-400 leading-relaxed mb-2">
                  k는 매우 낮음 (0.01 - 0.2).
                  <strong className="text-white"> T ↑ → k ↑</strong>: 분자 평균 속도 <MathTex tex="\propto \sqrt{T}" /> 증가로 에너지 수송 능력 증가.
                  압력의 영향은 미미 (이상기체 범위에서).
                </p>
                <div className="p-2 rounded-2xl bg-slate-950/80 text-center">
                  <p className="text-xs text-gray-500 mb-1">Kinetic Theory</p>
                  <p className="text-sm text-cyan-400"><MathTex tex="k \propto \sqrt{T}" /></p>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/20">
                <h5 className="text-sm font-bold text-blue-300 mb-2">Liquids</h5>
                <p className="text-xs text-gray-400 leading-relaxed mb-2">
                  대부분의 액체: <strong className="text-white">T ↑ → k ↓</strong> (분자간 결합력 감소).
                  <strong className="text-blue-300">예외: 물</strong>은 T 증가 시 k가 130 °C까지 증가!
                  H-bonding 네트워크의 특수한 거동.
                </p>
                <div className="p-2 rounded-2xl bg-slate-950/80 text-center">
                  <p className="text-xs text-gray-500 mb-1">Water at 25 °C</p>
                  <p className="text-sm font-mono text-blue-400">k = 0.613 W/(mK)</p>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-violet-500/5 border border-violet-500/20">
                <h5 className="text-sm font-bold text-violet-300 mb-2">Liquid Metals</h5>
                <p className="text-xs text-gray-400 leading-relaxed mb-2">
                  자유 전자 존재 → <strong className="text-white">매우 높은 k</strong>.
                  Na: 86, NaK: ~25, Hg: 8.5.
                  원자력 발전소의 냉각재, 고성능 열교환기에 사용.
                </p>
                <div className="p-2 rounded-2xl bg-slate-950/80 text-center">
                  <p className="text-xs text-gray-500 mb-1">Liquid Na (100 °C)</p>
                  <p className="text-sm font-mono text-violet-400">k = 86 W/(mK)</p>
                </div>
              </div>
            </div>

            {/* Fluid k table */}
            <h4 className="text-sm font-bold text-white mb-3">Fluid Thermal Conductivity Table (at ~300 K unless noted)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 px-3 text-left text-gray-400 font-medium">Fluid</th>
                    <th className="py-2 px-3 text-right text-blue-400 font-medium">k [W/(mK)]</th>
                    <th className="py-2 px-3 text-center text-gray-400 font-medium">Type</th>
                    <th className="py-2 px-3 text-left text-gray-400 font-medium">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {fluidKTable.map((f, i) => (
                    <tr key={i} className="border-b border-slate-800/50">
                      <td className="py-1.5 px-3 text-gray-300 text-xs">{f.fluid}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-blue-400 text-xs font-bold">{f.k}</td>
                      <td className="py-1.5 px-3 text-center text-xs text-gray-400">{f.type}</td>
                      <td className="py-1.5 px-3 text-xs text-gray-500">{f.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 6 — Specific Heat cp and Density ρ
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-3">
              6. Specific Heat <MathTex tex="c_p" /> and Density <MathTex tex="\rho" />
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              비열 <MathTex tex="c_p" />와 밀도 <MathTex tex="\rho" />는 물질의 <strong className="text-white">열 저장 능력</strong>을 결정합니다.
              이들의 곱 <MathTex tex="\rho c_p" />는 <strong className="text-white">체적 열용량(volumetric heat capacity)</strong>이라 하며,
              단위 부피의 물질을 1 K 올리는 데 필요한 에너지 [J/(m³·K)]입니다.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-slate-950/80 border border-blue-500/20 text-center">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Specific Heat</p>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  <MathTex tex="c_p = \left(\frac{\partial h}{\partial T}\right)_p" display />
                </div>
                <p className="text-sm text-gray-500">[J/(kg·K)]</p>
                <p className="text-xs text-gray-400 mt-2">단위 질량을 1 K 올리는 데 필요한 에너지</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-950/80 border border-blue-500/20 text-center">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Volumetric Heat Capacity</p>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  <MathTex tex="\rho c_p" display />
                </div>
                <p className="text-sm text-gray-500">[J/(m³·K)]</p>
                <p className="text-xs text-gray-400 mt-2">단위 부피를 1 K 올리는 데 필요한 에너지</p>
              </div>
            </div>

            {/* Why ρcp matters */}
            <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/20 mb-6">
              <h4 className="text-sm font-bold text-blue-300 mb-3">Why <MathTex tex="\rho c_p" /> Matters More Than <MathTex tex="c_p" /> Alone</h4>
              <p className="text-xs text-gray-400 mb-3">
                열전달에서는 질량당이 아닌 <strong className="text-white">부피당</strong> 열용량이 중요합니다.
                물체의 부피가 고정된 상황에서 얼마나 많은 에너지를 저장할 수 있는가가 핵심입니다.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-blue-400 font-bold mb-1">Water: high <MathTex tex="c_p" />, moderate <MathTex tex="\rho" /></p>
                  <p className="text-xs text-gray-400"><MathTex tex="c_p = 4{,}186" /> J/(kgK), <MathTex tex="\rho = 997" /> kg/m³</p>
                  <p className="text-xs font-mono text-blue-300"><MathTex tex="\rho c_p = 4.17 \times 10^6" /> J/(m³K)</p>
                  <p className="text-xs text-gray-500 mt-1">→ 최고의 열 저장 능력</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-blue-400 font-bold mb-1">Copper: low <MathTex tex="c_p" />, high <MathTex tex="\rho" /></p>
                  <p className="text-xs text-gray-400"><MathTex tex="c_p = 385" /> J/(kgK), <MathTex tex="\rho = 8{,}933" /> kg/m³</p>
                  <p className="text-xs font-mono text-blue-300"><MathTex tex="\rho c_p = 3.44 \times 10^6" /> J/(m³K)</p>
                  <p className="text-xs text-gray-500 mt-1">→ <MathTex tex="c_p" /> 낮지만 <MathTex tex="\rho" /> 높아서 <MathTex tex="\rho c_p" />는 물과 비슷!</p>
                </div>
              </div>
            </div>

            {/* cp table */}
            <h4 className="text-sm font-bold text-white mb-3">Specific Heat &amp; Volumetric Heat Capacity Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 px-2 text-left text-gray-400 font-medium">Material</th>
                    <th className="py-2 px-2 text-right text-gray-400 font-medium"><MathTex tex="c_p" /> [J/(kgK)]</th>
                    <th className="py-2 px-2 text-right text-gray-400 font-medium"><MathTex tex="\rho" /> [kg/m³]</th>
                    <th className="py-2 px-2 text-right text-blue-400 font-medium"><MathTex tex="\rho c_p" /> [J/(m³K)]</th>
                    <th className="py-2 px-2 text-left text-gray-400 font-medium">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {cpTable.map((m, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="border-b border-slate-800/50"
                    >
                      <td className="py-1.5 px-2 text-gray-300">{m.material}</td>
                      <td className="py-1.5 px-2 text-right font-mono text-gray-300">{m.cp}</td>
                      <td className="py-1.5 px-2 text-right font-mono text-gray-400">{m.rho}</td>
                      <td className="py-1.5 px-2 text-right font-mono text-blue-400 font-bold">{m.rhoCp}</td>
                      <td className="py-1.5 px-2 text-gray-500">{m.note}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Insight */}
            <div className="mt-4 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 font-bold text-xs">!</span>
                </div>
                <p className="text-sm text-gray-300">
                  <strong className="text-blue-300">공학적 의미:</strong> 물(water)이 냉각재로 널리 쓰이는 이유는
                  {" "}<MathTex tex="c_p" />가 매우 높고, 액체 상태에서 <MathTex tex="\rho" />도 적당하여
                  <strong className="text-white"> <MathTex tex="\rho c_p" />가 모든 일반 물질 중 최고</strong>이기 때문입니다.
                  공기는 <MathTex tex="c_p" />가 나쁘지 않지만 <MathTex tex="\rho" />가 매우 낮아 <MathTex tex="\rho c_p = 1{,}190" /> — 물의 <strong className="text-red-400">1/3,500</strong>!
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 7 — Thermal Diffusivity α
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8"
          >
            <h3 className="text-2xl font-bold text-emerald-400 mb-3">
              7. Thermal Diffusivity <MathTex tex="\alpha" />
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              열확산율 <MathTex tex="\alpha" />는 물질의 <strong className="text-white">열전도 능력(k)</strong>과
              <strong className="text-white">열저장 능력(<MathTex tex="\rho c_p" />)</strong>의 비입니다.
              <strong className="text-emerald-300"> 높은 <MathTex tex="\alpha" /></strong>는 빠른 열적 반응을 의미합니다.
            </p>

            {/* Definition */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-emerald-500/20 text-center mb-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                <MathTex tex="\alpha = \frac{k}{\rho c_p}" display />
              </div>
              <p className="text-sm text-gray-500">[<MathTex tex="\text{m}^2/\text{s}" />]</p>
              <div className="mt-3 pt-3 border-t border-slate-800 max-w-lg mx-auto">
                <p className="text-xs text-gray-400">
                  In the heat equation: <MathTex tex="\frac{\partial T}{\partial t} = \alpha \cdot \frac{\partial^2 T}{\partial x^2}" className="text-emerald-300" />
                  <br />
                  <MathTex tex="\alpha" /> controls how fast temperature changes propagate through the material
                </p>
              </div>
            </div>

            {/* Physical meaning */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <h4 className="text-sm font-bold text-emerald-300 mb-2">High <MathTex tex="\alpha" /> Material</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  k가 높고 <MathTex tex="\rho c_p" />가 낮음. 열을 빠르게 전달하고 적게 저장합니다.
                  온도 변화에 <strong className="text-white">빠르게 반응</strong>합니다.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  예: 금속 — 뜨거운 팬의 손잡이가 빠르게 뜨거워지는 이유
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-gray-300 mb-2">Low <MathTex tex="\alpha" /> Material</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  k가 낮고/또는 <MathTex tex="\rho c_p" />가 높음. 열을 느리게 전달하거나 많이 저장합니다.
                  온도 변화에 <strong className="text-white">느리게 반응</strong>합니다.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  예: 물, 나무 — 나무 손잡이의 팬이 잡기 편한 이유
                </p>
              </div>
            </div>

            {/* Alpha comparison table */}
            <h4 className="text-sm font-bold text-white mb-3">Thermal Diffusivity Comparison</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 px-3 text-left text-gray-400 font-medium">Material</th>
                    <th className="py-2 px-3 text-right text-emerald-400 font-medium"><MathTex tex="\alpha" /> [m²/s]</th>
                    <th className="py-2 px-3 text-left text-gray-400 font-medium">Relative Speed</th>
                    <th className="py-2 px-3 text-center text-gray-400 font-medium">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {alphaTable.map((m, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="border-b border-slate-800/50"
                    >
                      <td className="py-1.5 px-3 text-gray-300">{m.material}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-emerald-400 font-bold">{m.alpha}</td>
                      <td className="py-1.5 px-3 text-gray-400">{m.response}</td>
                      <td className="py-1.5 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded-xl ${categoryBg[m.category]} ${categoryColors[m.category]}`}>
                          {m.category}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bar-style comparison */}
            <h4 className="text-sm font-bold text-white mb-3">Visual: <MathTex tex="\alpha" /> Relative Magnitude (log scale concept)</h4>
            <div className="space-y-2 mb-6">
              {alphaTable.slice(0, 8).map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-32 flex-shrink-0 text-xs text-gray-400">{m.material}</div>
                  <div className="flex-1 h-5 bg-slate-800/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-emerald-500/60"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${globalThis.Math.min(100, (m.alphaNum / 174) * 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.06 }}
                    />
                  </div>
                  <div className="w-32 text-right text-xs font-mono text-emerald-400">{m.alpha}</div>
                </div>
              ))}
            </div>

            {/* Key comparison */}
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <h4 className="text-sm font-bold text-emerald-300 mb-2">Interesting Comparison: Air vs Water</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                  <p className="text-xs text-cyan-400 font-bold">Air</p>
                  <p className="text-xs text-gray-400">k = 0.026 (very low!)</p>
                  <p className="text-xs font-mono text-emerald-400"><MathTex tex="\alpha = 22.5 \times 10^{-6}" /></p>
                  <p className="text-xs text-gray-500 mt-1"><MathTex tex="\rho c_p = 1{,}190" /> (극히 낮음)</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                  <p className="text-xs text-blue-400 font-bold">Water</p>
                  <p className="text-xs text-gray-400">k = 0.613 (24x air)</p>
                  <p className="text-xs font-mono text-emerald-400"><MathTex tex="\alpha = 0.146 \times 10^{-6}" /></p>
                  <p className="text-xs text-gray-500 mt-1"><MathTex tex="\rho c_p = 4.17 \times 10^6" /> (3,500x air)</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">
                공기는 k가 물보다 24배 낮지만 <MathTex tex="\alpha" />는 154배 <strong className="text-white">높습니다</strong>!
                공기가 에너지를 거의 저장하지 못하기 때문입니다 (<MathTex tex="\rho c_p" />가 매우 작음).
              </p>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════
            SECTION 8 — Temperature Dependence
            ════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-slate-950 p-8"
          >
            <h3 className="text-2xl font-bold text-violet-400 mb-3">
              8. Temperature Dependence of Properties
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              모든 물성치(<MathTex tex="k" />, <MathTex tex="\rho" />, <MathTex tex="c_p" />)는 온도에 따라 변합니다.
              실제 해석에서는 <strong className="text-white">적절한 온도에서의 물성치</strong>를 사용하는 것이 중요합니다.
            </p>

            {/* Summary table */}
            <h4 className="text-sm font-bold text-white mb-3">Temperature Trends Summary</h4>
            <div className="space-y-3 mb-6">
              {tempDependenceData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="p-4 rounded-xl bg-slate-800/30 border border-slate-700 flex items-start gap-4"
                >
                  <div className="w-36 flex-shrink-0">
                    <span className={`text-sm font-bold ${item.color}`}>{item.material}</span>
                  </div>
                  <div className="w-px h-10 bg-slate-700 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-mono text-white mb-1">{item.kTrend}</p>
                    <p className="text-xs text-gray-400">{item.reason}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Practical guidance */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-violet-300 mb-3">Mean Temperature Method</h4>
                <div className="p-3 rounded-2xl bg-slate-950/80 text-center mb-3">
                  <MathTex tex="T_{\text{mean}} = \frac{T_1 + T_2}{2}" display />
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  물성치를 평균 온도에서 평가하는 가장 간단한 방법입니다.
                  <MathTex tex="\Delta T" />가 작으면 (100 K 이내) 이 방법이 충분히 정확합니다.
                  모든 property tables는 특정 온도에서의 값이므로,
                  해당 온도가 문제의 평균 온도와 가까운지 확인해야 합니다.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-violet-300 mb-3">When Mean T is Not Enough</h4>
                <div className="space-y-2">
                  <div className="p-2 rounded-2xl bg-red-500/5 border border-red-500/15">
                    <p className="text-xs text-red-400 font-bold">Large ΔT (&gt; 200 K)</p>
                    <p className="text-xs text-gray-400">물성치 변화가 커서 mean T 방법이 부정확. 수치해법(numerical methods) 필요.</p>
                  </div>
                  <div className="p-2 rounded-2xl bg-amber-500/5 border border-amber-500/15">
                    <p className="text-xs text-amber-400 font-bold">Phase change region</p>
                    <p className="text-xs text-gray-400">상변화 근처에서 물성치가 급변. 예: 물 0 °C 부근에서 <MathTex tex="\rho" /> 변화.</p>
                  </div>
                  <div className="p-2 rounded-2xl bg-blue-500/5 border border-blue-500/15">
                    <p className="text-xs text-blue-400 font-bold">Nonlinear problems</p>
                    <p className="text-xs text-gray-400"><MathTex tex="k(T)" /> 의존성을 직접 미분방정식에 포함: <MathTex tex="\frac{\partial}{\partial x}\!\left[k(T)\frac{\partial T}{\partial x}\right]" />. 비선형 PDE가 됩니다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Numerical example */}
            <div className="p-5 rounded-xl bg-violet-500/5 border border-violet-500/20 mb-6">
              <h4 className="text-sm font-bold text-violet-300 mb-3">Example: How Much Does k Vary?</h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-violet-400 font-bold mb-1">Copper (pure)</p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <p>100 K: k = 482</p>
                    <p>300 K: k = 401</p>
                    <p>600 K: k = 379</p>
                    <p>1000 K: k = 352</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">~27% decrease from 100K to 1000K</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-violet-400 font-bold mb-1">Stainless Steel 304</p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <p>300 K: k = 14.9</p>
                    <p>600 K: k = 19.8</p>
                    <p>1000 K: k = 25.4</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">~70% increase! Alloy behavior.</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <p className="text-xs text-violet-400 font-bold mb-1">Air (1 atm)</p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <p>200 K: k = 0.0181</p>
                    <p>300 K: k = 0.0263</p>
                    <p>500 K: k = 0.0407</p>
                    <p>1000 K: k = 0.0667</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">k roughly doubles from 300K to 1000K</p>
                </div>
              </div>
            </div>

            {/* Final summary */}
            <div className="p-5 rounded-xl bg-slate-950/80 border border-violet-500/20">
              <h4 className="text-sm font-bold text-white mb-4 text-center">
                Final Summary: Property Ranges at a Glance
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="py-2 px-2 text-left text-gray-400">Property</th>
                      <th className="py-2 px-2 text-center text-red-400">Metals</th>
                      <th className="py-2 px-2 text-center text-yellow-400">Non-metals</th>
                      <th className="py-2 px-2 text-center text-blue-400">Liquids</th>
                      <th className="py-2 px-2 text-center text-cyan-400">Gases</th>
                      <th className="py-2 px-2 text-center text-green-400">Insulators</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-2 px-2 text-gray-300 font-medium">k [W/(mK)]</td>
                      <td className="py-2 px-2 text-center text-red-400">15 - 430</td>
                      <td className="py-2 px-2 text-center text-yellow-400">0.5 - 2000</td>
                      <td className="py-2 px-2 text-center text-blue-400">0.1 - 0.7</td>
                      <td className="py-2 px-2 text-center text-cyan-400">0.01 - 0.2</td>
                      <td className="py-2 px-2 text-center text-green-400">0.01 - 0.05</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-2 px-2 text-gray-300 font-medium"><MathTex tex="\alpha" /> [m²/s]</td>
                      <td className="py-2 px-2 text-center text-red-400">10⁻⁵ – 10⁻⁴</td>
                      <td className="py-2 px-2 text-center text-yellow-400">10⁻⁷ – 10⁻⁵</td>
                      <td className="py-2 px-2 text-center text-blue-400">10⁻⁸ – 10⁻⁷</td>
                      <td className="py-2 px-2 text-center text-cyan-400">10⁻⁶ – 10⁻⁵</td>
                      <td className="py-2 px-2 text-center text-green-400">~10⁻⁸</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-2 px-2 text-gray-300 font-medium">k vs T</td>
                      <td className="py-2 px-2 text-center text-red-400">↓ (pure) / ↑ (alloy)</td>
                      <td className="py-2 px-2 text-center text-yellow-400">↓</td>
                      <td className="py-2 px-2 text-center text-blue-400">↓ (except water)</td>
                      <td className="py-2 px-2 text-center text-cyan-400">↑</td>
                      <td className="py-2 px-2 text-center text-green-400">varies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

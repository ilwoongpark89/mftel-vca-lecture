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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "purple",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "purple" ? "border-purple-500/30" : accent === "cyan" ? "border-cyan-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "blue" ? "border-blue-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div>
        {children}
      </div>
    </div>
  );
}

export default function HXExamples() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Part 7
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Worked Examples
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            열교환기 설계 및 성능 분석의 종합 예제를 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Example 1: LMTD - Sizing */}
          <SectionDivider number="1" title="Example: Sizing with LMTD Method" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 13.1: Counter Flow HX Sizing
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 역류 열교환기에서 오일을 냉각하려 합니다.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>- 오일: 입구 100C, 출구 60C, <Math tex="\dot{m}_h = 2" /> kg/s, <Math tex="c_{p,h} = 2100" /> J/(kg K)</li>
                  <li>- 냉각수: 입구 20C, 출구 40C, <Math tex="c_{p,c} = 4180" /> J/(kg K)</li>
                  <li>- 총괄 열전달 계수: U = 500 W/(m<sup>2</sup>K)</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-white">구하시오:</strong> 필요한 열전달 면적 A
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1: 열전달률 계산</p>
                  <Math tex={`q = \\dot{m}_h c_{p,h} (T_{h,i} - T_{h,o}) = 2 \\times 2100 \\times (100 - 60)`} display />
                  <Math tex={`q = 2 \\times 2100 \\times 40 = 168,000 \\text{ W} = 168 \\text{ kW}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 2: 냉각수 유량 확인</p>
                  <Math tex={`\\dot{m}_c = \\frac{q}{c_{p,c}(T_{c,o} - T_{c,i})} = \\frac{168000}{4180 \\times (40-20)} = 2.01 \\text{ kg/s}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: LMTD 계산 (역류)</p>
                  <p className="text-sm text-gray-400 mb-2">
                    역류: <Math tex="\Delta T_1 = T_{h,i} - T_{c,o} = 100 - 40 = 60" />C<br />
                    <Math tex="\Delta T_2 = T_{h,o} - T_{c,i} = 60 - 20 = 40" />C
                  </p>
                  <Math tex={`\\Delta T_{lm} = \\frac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1/\\Delta T_2)} = \\frac{60 - 40}{\\ln(60/40)} = \\frac{20}{\\ln(1.5)} = \\frac{20}{0.405} = 49.3°\\text{C}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 4: 필요 면적 계산</p>
                  <Math tex={`A = \\frac{q}{U \\cdot \\Delta T_{lm}} = \\frac{168000}{500 \\times 49.3} = \\boxed{6.82 \\text{ m}^2}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Example 2: e-NTU Rating */}
          <SectionDivider number="2" title="Example: Rating with e-NTU Method" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                예제 13.2: Counter Flow HX Rating
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 위 예제와 같은 역류 열교환기 (A = 6.82 m<sup>2</sup>, U = 500 W/(m<sup>2</sup>K))에서
                  냉각수 유량이 3 kg/s로 증가했을 때의 성능을 예측하시오.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>- 오일: 입구 100C, <Math tex="\dot{m}_h = 2" /> kg/s, <Math tex="c_{p,h} = 2100" /> J/(kg K)</li>
                  <li>- 냉각수: 입구 20C, <Math tex="\dot{m}_c = 3" /> kg/s, <Math tex="c_{p,c} = 4180" /> J/(kg K)</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-white">구하시오:</strong> q, <Math tex="T_{h,o}" />, <Math tex="T_{c,o}" />
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Step 1: 열용량률 계산</p>
                  <Math tex={`C_h = \\dot{m}_h c_{p,h} = 2 \\times 2100 = 4200 \\text{ W/K}`} display />
                  <Math tex={`C_c = \\dot{m}_c c_{p,c} = 3 \\times 4180 = 12540 \\text{ W/K}`} display />
                  <p className="text-sm text-gray-400 mt-2">
                    <Math tex="C_{min} = C_h = 4200" /> W/K, <Math tex="C_{max} = C_c = 12540" /> W/K<br />
                    <Math tex="C_r = C_{min}/C_{max} = 4200/12540 = 0.335" />
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Step 2: NTU 계산</p>
                  <Math tex={`NTU = \\frac{UA}{C_{min}} = \\frac{500 \\times 6.82}{4200} = \\frac{3410}{4200} = 0.812`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Step 3: 효율 계산 (역류)</p>
                  <Math tex={`\\varepsilon = \\frac{1 - \\exp[-NTU(1-C_r)]}{1 - C_r\\exp[-NTU(1-C_r)]}`} display />
                  <p className="text-sm text-gray-400 mt-2">
                    <Math tex="NTU(1-C_r) = 0.812 \times (1-0.335) = 0.540" /><br />
                    <Math tex="\exp(-0.540) = 0.583" />
                  </p>
                  <Math tex={`\\varepsilon = \\frac{1 - 0.583}{1 - 0.335 \\times 0.583} = \\frac{0.417}{1 - 0.195} = \\frac{0.417}{0.805} = 0.518`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Step 4: 열전달률 계산</p>
                  <Math tex={`q_{max} = C_{min}(T_{h,i} - T_{c,i}) = 4200 \\times (100 - 20) = 336,000 \\text{ W}`} display />
                  <Math tex={`q = \\varepsilon \\cdot q_{max} = 0.518 \\times 336000 = \\boxed{174,000 \\text{ W}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-cyan-400 font-bold mb-2">Step 5: 출구 온도 계산</p>
                  <Math tex={`T_{h,o} = T_{h,i} - \\frac{q}{C_h} = 100 - \\frac{174000}{4200} = 100 - 41.4 = \\boxed{58.6°\\text{C}}`} display />
                  <Math tex={`T_{c,o} = T_{c,i} + \\frac{q}{C_c} = 20 + \\frac{174000}{12540} = 20 + 13.9 = \\boxed{33.9°\\text{C}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <p className="text-sm text-emerald-400 font-bold mb-2">결과 해석</p>
                  <p className="text-sm text-gray-400">
                    냉각수 유량 증가(2&rarr;3 kg/s)로:<br />
                    - 열전달률: 168 &rarr; 174 kW (3.6% 증가)<br />
                    - 오일 출구 온도: 60 &rarr; 58.6C (더 많이 냉각)<br />
                    - 냉각수 출구 온도: 40 &rarr; 33.9C (덜 가열됨)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Example 3: Shell-and-Tube */}
          <SectionDivider number="3" title="Example: Shell-and-Tube with F Factor" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-4">
                예제 13.3: 1-2 Shell-and-Tube HX
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 1-2 shell-and-tube 열교환기에서 물을 가열합니다.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>- Shell side (steam condensing): 120C 일정</li>
                  <li>- Tube side (water): 입구 20C, 출구 80C, <Math tex="\dot{m}_c = 5" /> kg/s</li>
                  <li>- U = 2000 W/(m<sup>2</sup>K)</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-white">구하시오:</strong> 필요 면적 A
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-purple-400 font-bold mb-2">Step 1: 특수 경우 확인 - 응축</p>
                  <p className="text-sm text-gray-400">
                    Shell side가 응축이므로 <Math tex="C_h \to \infty" />, <Math tex="C_r = 0" /><br />
                    따라서 <strong className="text-white">F = 1</strong> (유동 배열 무관)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-purple-400 font-bold mb-2">Step 2: 열전달률 계산</p>
                  <Math tex={`q = \\dot{m}_c c_{p,c} (T_{c,o} - T_{c,i}) = 5 \\times 4180 \\times (80 - 20)`} display />
                  <Math tex={`q = 5 \\times 4180 \\times 60 = 1,254,000 \\text{ W} = 1.254 \\text{ MW}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-purple-400 font-bold mb-2">Step 3: LMTD 계산</p>
                  <p className="text-sm text-gray-400 mb-2">
                    응축 시 shell 온도 일정: <Math tex="T_h = 120" />C<br />
                    <Math tex="\Delta T_1 = 120 - 20 = 100" />C<br />
                    <Math tex="\Delta T_2 = 120 - 80 = 40" />C
                  </p>
                  <Math tex={`\\Delta T_{lm} = \\frac{100 - 40}{\\ln(100/40)} = \\frac{60}{\\ln(2.5)} = \\frac{60}{0.916} = 65.5°\\text{C}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-purple-400 font-bold mb-2">Step 4: 면적 계산</p>
                  <Math tex={`A = \\frac{q}{U \\cdot F \\cdot \\Delta T_{lm}} = \\frac{1254000}{2000 \\times 1 \\times 65.5} = \\boxed{9.57 \\text{ m}^2}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Example 4: Comprehensive */}
          <SectionDivider number="4" title="Example: Comprehensive Problem" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                예제 13.4: Cross Flow HX Analysis
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 자동차 라디에이터(cross flow, both unmixed)의 성능을 분석합니다.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>- 냉각수(hot): 입구 95C, <Math tex="\dot{m}_h = 0.5" /> kg/s, <Math tex="c_{p,h} = 4000" /> J/(kg K)</li>
                  <li>- 공기(cold): 입구 25C, <Math tex="\dot{m}_c = 1.5" /> kg/s, <Math tex="c_{p,c} = 1000" /> J/(kg K)</li>
                  <li>- UA = 3000 W/K</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-white">구하시오:</strong> 효율, 열전달률, 출구 온도들
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">Step 1: 열용량률 및 NTU 계산</p>
                  <Math tex={`C_h = 0.5 \\times 4000 = 2000 \\text{ W/K}`} display />
                  <Math tex={`C_c = 1.5 \\times 1000 = 1500 \\text{ W/K}`} display />
                  <p className="text-sm text-gray-400 mt-2">
                    <Math tex="C_{min} = C_c = 1500" /> W/K, <Math tex="C_{max} = C_h = 2000" /> W/K<br />
                    <Math tex="C_r = 1500/2000 = 0.75" /><br />
                    <Math tex="NTU = UA/C_{min} = 3000/1500 = 2.0" />
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">Step 2: 효율 계산 (Cross flow, unmixed)</p>
                  <p className="text-sm text-gray-400 mb-2">
                    근사식 사용: <Math tex="\varepsilon \approx 1 - \exp\left\{\frac{NTU^{0.22}}{C_r}[\exp(-C_r \cdot NTU^{0.78}) - 1]\right\}" />
                  </p>
                  <p className="text-sm text-gray-400 mb-2">
                    <Math tex="NTU^{0.22} = 2^{0.22} = 1.164" /><br />
                    <Math tex="NTU^{0.78} = 2^{0.78} = 1.718" /><br />
                    <Math tex="C_r \cdot NTU^{0.78} = 0.75 \times 1.718 = 1.289" /><br />
                    <Math tex="\exp(-1.289) = 0.276" />
                  </p>
                  <Math tex={`\\varepsilon \\approx 1 - \\exp\\left\\{\\frac{1.164}{0.75}(0.276 - 1)\\right\\} = 1 - \\exp(-1.124) = 1 - 0.325`} display />
                  <Math tex={`\\varepsilon \\approx 0.675`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-orange-400 font-bold mb-2">Step 3: 열전달률 및 출구 온도</p>
                  <Math tex={`q_{max} = C_{min}(T_{h,i} - T_{c,i}) = 1500 \\times (95 - 25) = 105,000 \\text{ W}`} display />
                  <Math tex={`q = \\varepsilon \\cdot q_{max} = 0.675 \\times 105000 = \\boxed{70,875 \\text{ W}}`} display />
                  <Math tex={`T_{h,o} = 95 - \\frac{70875}{2000} = 95 - 35.4 = \\boxed{59.6°\\text{C}}`} display />
                  <Math tex={`T_{c,o} = 25 + \\frac{70875}{1500} = 25 + 47.3 = \\boxed{72.3°\\text{C}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <p className="text-sm text-emerald-400 font-bold mb-2">물리적 해석</p>
                  <p className="text-sm text-gray-400">
                    - 효율 67.5%: 양호한 성능<br />
                    - 냉각수는 95C에서 59.6C로 35.4C 냉각<br />
                    - 공기는 25C에서 72.3C로 47.3C 가열 (C_min이므로 온도 변화 큼)<br />
                    - NTU = 2.0: 적절한 크기의 열교환기
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Example 5: Overall U Calculation */}
          <SectionDivider number="5" title="Example: Overall Coefficient Calculation" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                예제 13.5: U 계산 with Fouling
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 이중관 열교환기의 총괄 열전달 계수를 계산합니다.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>- 내관: <Math tex="r_i = 12.5" /> mm, <Math tex="r_o = 15" /> mm, k = 50 W/(m K)</li>
                  <li>- 내부 (water): <Math tex="h_i = 3000" /> W/(m<sup>2</sup>K), <Math tex="R''_{f,i} = 0.0001" /> m<sup>2</sup>K/W</li>
                  <li>- 외부 (oil): <Math tex="h_o = 200" /> W/(m<sup>2</sup>K), <Math tex="R''_{f,o} = 0.0003" /> m<sup>2</sup>K/W</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-white">구하시오:</strong> 외부 면적 기준 <Math tex="U_o" />
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-blue-400 font-bold mb-2">U_o 공식</p>
                  <Math tex={`\\frac{1}{U_o} = \\frac{r_o}{r_i h_i} + \\frac{r_o R''_{f,i}}{r_i} + \\frac{r_o \\ln(r_o/r_i)}{k} + R''_{f,o} + \\frac{1}{h_o}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-blue-400 font-bold mb-2">각 항 계산</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>내부 대류: <Math tex="\frac{r_o}{r_i h_i} = \frac{0.015}{0.0125 \times 3000} = 0.0004" /> m<sup>2</sup>K/W</p>
                    <p>내부 fouling: <Math tex="\frac{r_o R''_{f,i}}{r_i} = \frac{0.015 \times 0.0001}{0.0125} = 0.00012" /> m<sup>2</sup>K/W</p>
                    <p>벽 전도: <Math tex="\frac{r_o \ln(r_o/r_i)}{k} = \frac{0.015 \times \ln(1.2)}{50} = \frac{0.015 \times 0.182}{50} = 0.0000546" /> m<sup>2</sup>K/W</p>
                    <p>외부 fouling: <Math tex="R''_{f,o} = 0.0003" /> m<sup>2</sup>K/W</p>
                    <p>외부 대류: <Math tex="\frac{1}{h_o} = \frac{1}{200} = 0.005" /> m<sup>2</sup>K/W</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-blue-400 font-bold mb-2">합산</p>
                  <Math tex={`\\frac{1}{U_o} = 0.0004 + 0.00012 + 0.0000546 + 0.0003 + 0.005 = 0.00587`} display />
                  <Math tex={`U_o = \\frac{1}{0.00587} = \\boxed{170.3 \\text{ W/(m}^2\\text{K)}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <p className="text-sm text-yellow-400 font-bold mb-2">지배 저항 분석</p>
                  <p className="text-sm text-gray-400">
                    외부 대류 저항 (0.005)이 전체의 85%를 차지합니다.<br />
                    Oil 측 h 개선이 U 향상에 가장 효과적입니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

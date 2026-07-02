"use client";

import { motion } from "framer-motion";
import Math from "@/components/Math";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function KeyConceptCard({
  title,
  children,
  accent = "blue",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "blue" ? "border-blue-500/20" : accent === "orange" ? "border-orange-500/20" : accent === "cyan" ? "border-cyan-500/20" : accent === "emerald" ? "border-emerald-500/20" : "border-slate-700";
  const textColor = accent === "blue" ? "text-blue-400" : accent === "orange" ? "text-orange-400" : accent === "cyan" ? "text-cyan-400" : accent === "emerald" ? "text-emerald-400" : "text-gray-400";
  return (
    <div className={`p-4 rounded-xl bg-slate-800/30 border ${borderColor}`}>
      <h4 className={`text-sm font-bold ${textColor} mb-2`}>{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

const keyEquations = [
  {
    name: "Energy Balance",
    eq: String.raw`\rho V c_p \frac{dT}{dt} = -hA_s(T - T_\infty)`,
    desc: "Lumped system 지배 방정식",
    color: "text-blue-400",
  },
  {
    name: "Temperature Solution",
    eq: String.raw`\frac{T - T_\infty}{T_i - T_\infty} = e^{-t/\tau}`,
    desc: "무차원 온도의 지수 감쇠",
    color: "text-blue-400",
  },
  {
    name: "Time Constant",
    eq: String.raw`\tau = \frac{\rho V c_p}{hA_s} = \frac{\rho c_p L_c}{h}`,
    desc: "열적 응답의 특성 시간",
    color: "text-cyan-400",
  },
  {
    name: "Biot Number",
    eq: String.raw`\text{Bi} = \frac{hL_c}{k} = \frac{R_{cond}}{R_{conv}}`,
    desc: "전도 저항 / 대류 저항",
    color: "text-orange-400",
  },
  {
    name: "Characteristic Length",
    eq: String.raw`L_c = \frac{V}{A_s}`,
    desc: "체적 대 표면적 비율",
    color: "text-orange-400",
  },
  {
    name: "Heat Transferred",
    eq: String.raw`Q = \rho V c_p (T_i - T_\infty)[1 - e^{-t/\tau}]`,
    desc: "시간 0부터 t까지 전달된 총 열량",
    color: "text-emerald-400",
  },
];

const geometryTable = [
  {
    geometry: "Plane Wall (thickness 2L)",
    lc: "L",
    bi: "hL/k",
  },
  {
    geometry: "Long Cylinder (radius r_o)",
    lc: "r_o/2",
    bi: "hr_o/(2k)",
  },
  {
    geometry: "Sphere (radius r_o)",
    lc: "r_o/3",
    bi: "hr_o/(3k)",
  },
  {
    geometry: "Cube (side a)",
    lc: "a/6",
    bi: "ha/(6k)",
  },
];

export default function Week6Summary() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Week 6 Summary
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transient Conduction I: Lumped Capacitance Method의 핵심 개념을 정리합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Key Equations */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-blue-400 mb-6 text-center">
                핵심 방정식 (Key Equations)
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Name</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Equation</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {keyEquations.map((item, i) => (
                      <tr key={i} className="border-b border-slate-800">
                        <td className={`py-4 px-4 font-bold ${item.color}`}>{item.name}</td>
                        <td className="py-4 px-4"><Math tex={item.eq} /></td>
                        <td className="py-4 px-4 text-gray-400">{item.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Validity Criterion */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-orange-400 mb-6 text-center">
                적용 조건 (Validity Criterion)
              </h3>

              <div className="text-center p-6 rounded-xl bg-slate-950/80 border border-orange-500/30 mb-6">
                <Math tex={`\\text{Bi} = \\frac{hL_c}{k} < 0.1`} display />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Geometry</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="L_c" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Bi</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {geometryTable.map((item, i) => (
                      <tr key={i} className="border-b border-slate-800">
                        <td className="py-3 px-4 font-bold text-white">{item.geometry}</td>
                        <td className="py-3 px-4"><Math tex={item.lc} /></td>
                        <td className="py-3 px-4"><Math tex={item.bi} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Time Response */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center">
                시간 응답 (Time Response)
              </h3>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2"><Math tex="t = \\tau" /></p>
                  <p className="text-2xl font-bold text-cyan-400">63.2%</p>
                  <p className="text-xs text-gray-400 mt-1">변화 완료</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2"><Math tex="t = 3\\tau" /></p>
                  <p className="text-2xl font-bold text-cyan-400">95.0%</p>
                  <p className="text-xs text-gray-400 mt-1">변화 완료</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2"><Math tex="t = 5\\tau" /></p>
                  <p className="text-2xl font-bold text-emerald-400">99.3%</p>
                  <p className="text-xs text-gray-400 mt-1">실용적 평형</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-cyan-400 mb-2">tau를 줄이려면:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>&bull; 작은 물체 (작은 V)</li>
                  <li>&bull; 큰 표면적 (큰 A_s)</li>
                  <li>&bull; 높은 h (강제 대류, 액침 냉각)</li>
                  <li>&bull; 낮은 rho*c_p (낮은 열용량)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Key Concepts */}
          <motion.div {...fadeUp} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">핵심 개념 (Key Concepts)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <KeyConceptCard title="1. Lumped Capacitance 가정" accent="blue">
                <p>
                  물체 전체가 <strong className="text-white">균일한 온도</strong>를 가짐.
                  T = T(t) only, 공간적 변화 없음.
                  <strong className="text-blue-400"> 내부 전도가 표면 대류보다 훨씬 빠를 때</strong> 유효.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="2. Biot 수의 물리적 의미" accent="orange">
                <p>
                  <Math tex="\\text{Bi} = R_{cond}/R_{conv}" />.
                  내부 전도 저항 대 표면 대류 저항의 비율.
                  <strong className="text-orange-400"> Bi &lt; 0.1</strong>이면 내부 온도 구배 무시 가능.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="3. 지수 감쇠 해" accent="cyan">
                <p>
                  온도는 <strong className="text-cyan-400">지수적으로</strong> 주위 온도에 접근.
                  이론적으로 무한 시간 소요, 실용적으로 5tau면 99% 완료.
                </p>
              </KeyConceptCard>

              <KeyConceptCard title="4. RC 회로 유추" accent="emerald">
                <p>
                  열용량 <Math tex="\\rho V c_p" /> ~ 커패시터 C,
                  대류 저항 <Math tex="1/(hA_s)" /> ~ 저항 R.
                  <Math tex="\\tau = RC" /> - 커패시터 방전과 동일한 수학적 형태.
                </p>
              </KeyConceptCard>
            </div>
          </motion.div>

          {/* Problem-Solving Strategy */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 text-center">
                문제 풀이 전략 (Problem-Solving Strategy)
              </h3>

              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">물성 및 조건 파악:</strong> rho, c_p, k, h, T_i, T_infinity, 형상/치수
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">특성 길이:</strong> <Math tex="L_c = V/A_s" /> 계산
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">Biot 수 확인:</strong> <Math tex="\\text{Bi} = hL_c/k < 0.1" /> 검증
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">시간 상수:</strong> <Math tex="\\tau = \\rho c_p L_c / h" /> 계산
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">온도 또는 시간 계산:</strong> <Math tex="(T-T_\\infty)/(T_i-T_\\infty) = e^{-t/\\tau}" /> 적용
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">6</span>
                  <div>
                    <strong className="text-white">열전달량 (필요시):</strong> <Math tex="Q = \\rho V c_p (T_i - T_\\infty)[1 - e^{-t/\\tau}]" />
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Common Mistakes */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-red-400 mb-6 text-center">
                주의사항 (Common Mistakes)
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">X</span>
                  <span><strong className="text-red-400">Bi 확인 생략:</strong> 항상 Bi &lt; 0.1 확인! 유효하지 않으면 Heisler 차트 사용</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">X</span>
                  <span><strong className="text-red-400">L_c 계산 오류:</strong> L_c = V/A_s (형상별 공식 주의)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">X</span>
                  <span><strong className="text-red-400">Bi vs Nu 혼동:</strong> Bi는 고체의 k, Nu는 유체의 k 사용</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">X</span>
                  <span><strong className="text-red-400">단위 불일치:</strong> SI 단위 일관성 확인 (특히 tau 계산 시)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">X</span>
                  <span><strong className="text-red-400">열유속 표면적:</strong> 열전달이 일어나는 표면만 A_s에 포함</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Biot Number Table */}
          <motion.div {...fadeUp} className="mb-12">
            <div className="rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-slate-950 p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-6 text-center">
                Biot 수 범위에 따른 해석 방법
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Bi &lt; 0.1</p>
                  <p className="text-xl text-white font-bold mb-2">Lumped Capacitance</p>
                  <p className="text-xs text-gray-400">
                    공간적 온도 분포 무시, T = T(t)
                    <br />
                    Week 6
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-yellow-500/30">
                  <p className="text-sm text-yellow-400 font-bold mb-2">0.1 &lt; Bi &lt; 100</p>
                  <p className="text-xl text-white font-bold mb-2">Exact/Heisler</p>
                  <p className="text-xs text-gray-400">
                    공간적 온도 분포 고려, T = T(x,t)
                    <br />
                    Week 7
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                  <p className="text-sm text-red-400 font-bold mb-2">Bi &gt; 100</p>
                  <p className="text-xl text-white font-bold mb-2">T_s = T_infinity</p>
                  <p className="text-xs text-gray-400">
                    표면 온도가 즉시 주위 온도로
                    <br />
                    1st Kind BC
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Week Preview */}
          <motion.div {...fadeUp}>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-4">Next Week Preview</h3>
              <p className="text-gray-400 mb-4">
                <strong className="text-blue-400">Week 7: Transient Conduction II</strong>
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Exact Solutions for Simple Geometries</li>
                <li>Heisler Charts (Plane Wall, Cylinder, Sphere)</li>
                <li>One-Term Approximation</li>
                <li>Multi-dimensional Effects (Product Solution)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

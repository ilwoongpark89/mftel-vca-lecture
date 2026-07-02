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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "red",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "red" ? "border-red-500/30" : accent === "pink" ? "border-pink-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "cyan" ? "border-cyan-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div className={`text-${accent}-400`}>
        {children}
      </div>
    </div>
  );
}

function InsightCard({
  title,
  children,
  accent = "red",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
    pink: { bg: "bg-pink-500/5", border: "border-pink-500/20", text: "text-pink-400", iconBg: "bg-pink-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
  };
  const c = colors[accent] || colors.red;
  return (
    <div className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
      <div className="flex items-start gap-3">
        <span className={`flex-shrink-0 w-7 h-7 rounded-full ${c.iconBg} flex items-center justify-center ${c.text} text-xs font-bold`}>
          {icon}
        </span>
        <div>
          <h4 className={`font-bold ${c.text} mb-2`}>{title}</h4>
          <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function GraySurfaces() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Radiation Exchange: Gray Surfaces
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            회색체 표면 간의 복사 열교환 - Radiosity 방법과 전기회로 유추
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Gray Surface vs Blackbody */}
          <SectionDivider number="1" title="Gray Surface Characteristics" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              실제 표면은 <strong className="text-red-400">회색체(Gray Surface)</strong>로 모델링됩니다.
              회색체는 방사율이 파장에 무관하고 1보다 작습니다 (<Math tex="\varepsilon < 1" />).
              따라서 입사 복사의 일부가 <strong className="text-white">반사</strong>되어 해석이 복잡해집니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                Diffuse-Gray-Opaque Surface Properties
              </h4>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                  <p className="text-sm text-red-400 font-bold mb-2">Emission</p>
                  <Math tex={`E = \\varepsilon \\sigma T^4 = \\varepsilon E_b`} display />
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-pink-500/30">
                  <p className="text-sm text-pink-400 font-bold mb-2">Absorption</p>
                  <Math tex={`G_{abs} = \\alpha G = \\varepsilon G`} display />
                  <p className="text-xs text-gray-500 mt-1">(Kirchhoff: alpha = epsilon)</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-orange-500/30">
                  <p className="text-sm text-orange-400 font-bold mb-2">Reflection</p>
                  <Math tex={`G_{ref} = \\rho G = (1-\\varepsilon) G`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Radiosity Concept */}
          <SectionDivider number="2" title="Radiosity Concept" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-pink-400">Radiosity (J)</strong>는 표면에서 <strong className="text-white">떠나는</strong>
              모든 복사 에너지를 나타냅니다. 방출과 반사를 모두 포함합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-6 text-center">
                Radiosity Definition
              </h4>

              <EquationBox label="Radiosity = Emission + Reflection" accent="pink">
                <Math tex={`J = E + \\rho G = \\varepsilon E_b + (1-\\varepsilon) G`} display />
              </EquationBox>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">For Blackbody (epsilon = 1)</p>
                  <Math tex={`J = E_b = \\sigma T^4`} />
                  <p className="text-xs text-gray-400 mt-2">(반사 없음)</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Units</p>
                  <p className="text-sm text-gray-300">[W/m^2]</p>
                  <p className="text-xs text-gray-400 mt-2">단위 면적당 떠나는 에너지</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Irradiation과 Radiosity의 관계" accent="pink" icon="G">
              <p>
                표면 i에 도달하는 Irradiation G_i는 다른 표면들의 Radiosity에서 옵니다:
              </p>
              <div className="mt-2 p-3 rounded-lg bg-slate-950/80 text-center">
                <Math tex={`G_i = \\sum_{j=1}^{N} F_{ij} J_j`} />
              </div>
              <p className="mt-2">
                즉, 표면 j들에서 떠난 복사 중 표면 i에 도달하는 비율의 합
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. Net Radiation Method */}
          <SectionDivider number="3" title="Net Radiation Method" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              표면 i의 <strong className="text-white">순 복사 열전달</strong>은 떠나는 복사(J)와 도착하는 복사(G)의 차이입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                Net Radiation from Surface i
              </h4>

              <EquationBox label="Net Heat Transfer" accent="red">
                <Math tex={`q_i = A_i (J_i - G_i)`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">J와 E_b의 관계 (G 소거):</strong>
                </p>
                <div className="text-center">
                  <Math tex={`J_i = \\varepsilon_i E_{bi} + (1-\\varepsilon_i) G_i`} />
                  <br />
                  <Math tex={`G_i = \\frac{J_i - \\varepsilon_i E_{bi}}{1-\\varepsilon_i}`} />
                </div>
              </div>

              <div className="mt-4">
                <EquationBox label="Net Heat Transfer (in terms of E_b and J)" accent="red">
                  <Math tex={`q_i = A_i (J_i - G_i) = \\frac{A_i \\varepsilon_i}{1-\\varepsilon_i}(E_{bi} - J_i) = \\frac{E_{bi} - J_i}{(1-\\varepsilon_i)/(A_i \\varepsilon_i)}`} display />
                </EquationBox>
              </div>
            </div>
          </motion.div>

          {/* 4. Electrical Network Analogy */}
          <SectionDivider number="4" title="Electrical Network Analogy" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              복사 열전달은 <strong className="text-cyan-400">전기회로</strong>로 유추할 수 있습니다.
              열전달률은 전류, 온도(또는 E_b, J)는 전압, 저항은 복사 저항에 대응됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 text-center">
                Radiation Resistances
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30">
                  <p className="text-sm text-cyan-400 font-bold mb-3">Surface Resistance</p>
                  <Math tex={`R_{surf,i} = \\frac{1-\\varepsilon_i}{A_i \\varepsilon_i}`} display />
                  <p className="text-xs text-gray-400 mt-3">
                    표면의 방출/반사 특성에 의한 저항
                    <br />
                    E_bi와 J_i 사이에 연결
                    <br />
                    <strong className="text-cyan-400">epsilon = 1이면 R = 0 (흑체)</strong>
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-pink-500/30">
                  <p className="text-sm text-pink-400 font-bold mb-3">Space Resistance</p>
                  <Math tex={`R_{space,ij} = \\frac{1}{A_i F_{ij}}`} display />
                  <p className="text-xs text-gray-400 mt-3">
                    두 표면 사이의 기하학적 저항
                    <br />
                    J_i와 J_j 사이에 연결
                    <br />
                    <strong className="text-pink-400">F = 1이면 R = 1/A</strong>
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">회로 유추:</strong>
                </p>
                <div className="overflow-x-auto mt-2">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">Radiation</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">Electrical</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">Heat transfer rate q [W]</td>
                        <td className="py-2 px-3 text-cyan-400">Current I [A]</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">E_b = sigma*T^4 [W/m^2]</td>
                        <td className="py-2 px-3 text-cyan-400">Voltage V [V]</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-3">Radiosity J [W/m^2]</td>
                        <td className="py-2 px-3 text-cyan-400">Node Voltage</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">R_surf, R_space [1/m^2]</td>
                        <td className="py-2 px-3 text-cyan-400">Resistance R [ohm]</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Two Gray Surface Exchange */}
          <SectionDivider number="5" title="Two Gray Surface Enclosure" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              두 회색체 표면 사이의 복사 열교환 공식을 전기회로 유추로 유도합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                Two Gray Surface Exchange
              </h4>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700 mb-6">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">회로 구성:</strong>
                  E_b1 -- R_surf1 -- J_1 -- R_space -- J_2 -- R_surf2 -- E_b2
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700 mb-6">
                <p className="text-xs text-gray-500 mb-2">Total Resistance</p>
                <Math tex={`R_{total} = \\frac{1-\\varepsilon_1}{A_1 \\varepsilon_1} + \\frac{1}{A_1 F_{12}} + \\frac{1-\\varepsilon_2}{A_2 \\varepsilon_2}`} display />
              </div>

              <EquationBox label="Heat Transfer Rate" accent="red">
                <Math tex={`q_{12} = \\frac{E_{b1} - E_{b2}}{R_{total}} = \\frac{\\sigma(T_1^4 - T_2^4)}{\\frac{1-\\varepsilon_1}{A_1 \\varepsilon_1} + \\frac{1}{A_1 F_{12}} + \\frac{1-\\varepsilon_2}{A_2 \\varepsilon_2}}`} display />
              </EquationBox>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                Special Cases for Two Gray Surfaces
              </h4>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Infinite Parallel Plates (F_12 = 1, A_1 = A_2 = A)</p>
                  <Math tex={`q_{12} = \\frac{A \\sigma (T_1^4 - T_2^4)}{\\frac{1}{\\varepsilon_1} + \\frac{1}{\\varepsilon_2} - 1}`} display />
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Small Object (1) in Large Enclosure (2): F_12 = 1, A_1 &lt;&lt; A_2</p>
                  <Math tex={`q_1 = A_1 \\varepsilon_1 \\sigma (T_1^4 - T_2^4)`} display />
                  <p className="text-xs text-gray-400 mt-2">인클로저가 크면 표면 2의 저항이 무시됨</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Concentric Spheres or Long Cylinders (F_12 = 1)</p>
                  <Math tex={`q_{12} = \\frac{A_1 \\sigma (T_1^4 - T_2^4)}{\\frac{1}{\\varepsilon_1} + \\frac{A_1}{A_2}\\left(\\frac{1}{\\varepsilon_2} - 1\\right)}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. N-Surface Enclosure */}
          <SectionDivider number="6" title="N-Surface Gray Enclosure" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              N개의 회색체 표면으로 이루어진 인클로저에서 각 표면의 순 복사 열전달을 구하려면
              <strong className="text-white"> N개의 연립방정식</strong>을 풀어야 합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-6 text-center">
                Radiosity Equation for Surface i
              </h4>

              <EquationBox label="General Form" accent="pink">
                <Math tex={`J_i = \\varepsilon_i E_{bi} + (1-\\varepsilon_i) \\sum_{j=1}^{N} F_{ij} J_j`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">또는 다음 형태로 정리:</strong>
                </p>
                <Math tex={`\\frac{J_i - \\varepsilon_i E_{bi}}{1-\\varepsilon_i} = \\sum_{j=1}^{N} F_{ij} J_j`} display />
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-pink-500/30">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">행렬 형태:</strong>
                </p>
                <Math tex={`[A][J] = [B]`} display />
                <p className="text-xs text-gray-400 mt-2">
                  N개의 미지수 J_i에 대한 N개의 선형 방정식 (매트릭스로 풀이)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="경계 조건 종류" accent="orange" icon="BC">
              <p>각 표면은 다음 중 하나의 조건이 주어집니다:</p>
              <ul className="mt-2 space-y-1">
                <li>&bull; <strong className="text-white">등온 표면:</strong> T_i 주어짐 -&gt; E_bi = sigma*T_i^4 사용 -&gt; q_i 구함</li>
                <li>&bull; <strong className="text-white">일정 열유속 표면:</strong> q_i 주어짐 -&gt; J_i 구함 -&gt; T_i 계산</li>
                <li>&bull; <strong className="text-white">Reradiating 표면:</strong> q_i = 0 (단열) -&gt; J_i = E_bi</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 7. Reradiating Surface */}
          <SectionDivider number="7" title="Reradiating (Adiabatic) Surface" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-orange-400">Reradiating 표면</strong>은 단열 표면으로, 흡수한 복사를 모두 재방출합니다.
              순 열전달이 0이지만 복사 교환에 참여하여 다른 표면 간의 열전달에 영향을 줍니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                Reradiating Surface Properties
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-orange-400 font-bold mb-2">조건</p>
                  <Math tex={`q_R = 0`} display />
                  <p className="text-xs text-gray-400 mt-2">순 열전달 없음</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-sm text-orange-400 font-bold mb-2">결과</p>
                  <Math tex={`J_R = E_{bR} = \\sigma T_R^4`} display />
                  <p className="text-xs text-gray-400 mt-2">Radiosity = Blackbody emissive power</p>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-orange-500/30">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">회로 유추:</strong> Surface resistance가 단락(short circuit)되어
                  J_R = E_bR이 됨. Reradiating 표면의 온도 T_R은 에너지 균형에 의해 결정됨.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                Two Surfaces with Reradiating Surface
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                표면 1, 2 사이에 reradiating 표면 R이 있는 경우:
              </p>
              <EquationBox label="Modified Resistance Network" accent="emerald">
                <Math tex={`q_{12} = \\frac{\\sigma(T_1^4 - T_2^4)}{\\frac{1-\\varepsilon_1}{A_1 \\varepsilon_1} + \\frac{1}{A_1 F_{12} + \\left[\\frac{1}{A_1 F_{1R}} + \\frac{1}{A_2 F_{2R}}\\right]^{-1}} + \\frac{1-\\varepsilon_2}{A_2 \\varepsilon_2}}`} display />
              </EquationBox>
              <p className="text-xs text-gray-400 mt-4">
                Space resistance 부분이 F_12와 (1/F_1R + 1/F_2R)^-1의 병렬 조합으로 변경됨
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

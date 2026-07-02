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
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
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

const viewFactorFormulas = [
  {
    config: "Parallel Plates (aligned, equal)",
    formula: String.raw`F_{12} = \frac{2}{\pi XY}\left[\ln\sqrt{\frac{(1+X^2)(1+Y^2)}{1+X^2+Y^2}} + X\sqrt{1+Y^2}\tan^{-1}\frac{X}{\sqrt{1+Y^2}} + Y\sqrt{1+X^2}\tan^{-1}\frac{Y}{\sqrt{1+X^2}} - X\tan^{-1}X - Y\tan^{-1}Y\right]`,
    note: "X = a/c, Y = b/c (c = distance)",
    simplified: String.raw`F_{12} \approx 1 - \frac{c}{a} \quad \text{(for } a = b \gg c\text{)}`,
  },
  {
    config: "Perpendicular Plates (common edge)",
    formula: String.raw`F_{12} = \frac{1}{\pi W}\left[W\tan^{-1}\frac{1}{W} + H\tan^{-1}\frac{1}{H} - \sqrt{H^2+W^2}\tan^{-1}\frac{1}{\sqrt{H^2+W^2}} + \frac{1}{4}\ln\left[\frac{(1+W^2)(1+H^2)}{1+W^2+H^2}\cdot\left(\frac{W^2(1+W^2+H^2)}{(1+W^2)(W^2+H^2)}\right)^{W^2}\cdot\left(\frac{H^2(1+W^2+H^2)}{(1+H^2)(W^2+H^2)}\right)^{H^2}\right]\right]`,
    note: "H = Z/X, W = Y/X",
    simplified: "",
  },
];

const simpleViewFactors = [
  {
    config: "Small surface to large enclosure",
    F: "F_{12} = 1",
    condition: "A_1 << A_2",
  },
  {
    config: "Infinite parallel planes",
    F: "F_{12} = 1",
    condition: "No edge effects",
  },
  {
    config: "Concentric spheres (inner to outer)",
    F: "F_{12} = 1",
    condition: "r_1 < r_2",
  },
  {
    config: "Concentric cylinders (inner to outer)",
    F: "F_{12} = 1",
    condition: "r_1 < r_2, L >> r",
  },
  {
    config: "Coaxial disks",
    F: String.raw`F_{12} = \frac{1}{2}\left[S - \sqrt{S^2 - 4(r_2/r_1)^2}\right]`,
    condition: "S = 1 + (1+R^2)/R^2, R = r_2/L",
  },
];

export default function ViewFactors() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            View Factors
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            형상인자의 정의, 상호성 법칙, 합 규칙을 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. View Factor Definition */}
          <SectionDivider number="1" title="View Factor Definition" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-red-400">형상인자(View Factor)</strong> <Math tex="F_{ij}" />는 표면 i에서 방출된
              복사 에너지 중 표면 j에 직접 도달하는 <strong className="text-white">비율</strong>입니다.
              형상인자는 순수하게 <strong className="text-white">기하학적 인자</strong>로, 표면의 크기, 형상, 방향, 거리에 의해 결정됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-6 text-center">
                View Factor Definition
              </h4>

              <EquationBox label="Physical Definition" accent="red">
                <Math tex={`F_{ij} = \\frac{\\text{Radiation leaving } A_i \\text{ that reaches } A_j}{\\text{Total radiation leaving } A_i}`} display />
              </EquationBox>

              <div className="mt-6">
                <EquationBox label="Mathematical Definition (Double Integral)" accent="red">
                  <Math tex={`F_{ij} = \\frac{1}{A_i} \\int_{A_i} \\int_{A_j} \\frac{\\cos\\theta_i \\cos\\theta_j}{\\pi r^2} \\, dA_j \\, dA_i`} display />
                </EquationBox>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Variables</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; <Math tex="\theta_i" />: 표면 i의 법선과 연결선 사이 각도</li>
                    <li>&bull; <Math tex="\theta_j" />: 표면 j의 법선과 연결선 사이 각도</li>
                    <li>&bull; <Math tex="r" />: 두 미소면적 사이 거리</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Range</p>
                  <Math tex={`0 \\leq F_{ij} \\leq 1`} display />
                  <p className="text-xs text-gray-400 mt-2">
                    F = 0: i에서 j가 전혀 보이지 않음
                    <br />
                    F = 1: i에서 j만 보임 (완전 포위)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="형상인자의 물리적 의미" accent="red" icon="F">
              <p>
                형상인자는 &quot;표면 i에서 볼 때 표면 j가 얼마나 보이는가&quot;를 나타냅니다.
              </p>
              <ul className="mt-2 space-y-1">
                <li>&bull; j가 i에 가까울수록 F 증가</li>
                <li>&bull; j가 i를 정면으로 향할수록 F 증가</li>
                <li>&bull; j의 면적이 클수록 F 증가</li>
                <li>&bull; i와 j 사이에 장애물이 있으면 F 감소</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 2. View Factor Relations */}
          <SectionDivider number="2" title="View Factor Relations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              형상인자는 적분 계산이 복잡하지만, 여러 <strong className="text-white">대수적 관계</strong>를 이용하여
              쉽게 구할 수 있습니다. 이 관계들은 형상인자 계산의 핵심 도구입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-6 text-center">
                Reciprocity Relation (상호성 법칙)
              </h4>

              <EquationBox label="Reciprocity" accent="pink">
                <Math tex={`A_i F_{ij} = A_j F_{ji}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">의미:</strong> 표면 i에서 j로 향하는 복사량과 j에서 i로 향하는 복사량의
                  비율은 면적의 역비에 비례합니다.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  <strong className="text-pink-400">활용:</strong> 작은 면적의 형상인자를 구하면, 큰 면적의 형상인자는 자동으로 결정됩니다.
                </p>
                <div className="mt-3 text-center">
                  <Math tex={`F_{ji} = \\frac{A_i}{A_j} F_{ij}`} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6 text-center">
                Summation Rule (합 규칙)
              </h4>

              <EquationBox label="Summation Rule" accent="orange">
                <Math tex={`\\sum_{j=1}^{N} F_{ij} = 1`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">의미:</strong> 표면 i에서 방출된 복사는 반드시 어딘가(j=1,2,...,N)에 도달해야 합니다.
                  닫힌 인클로저에서 모든 형상인자의 합은 1입니다.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  <strong className="text-orange-400">주의:</strong> <Math tex="F_{ii}" /> (자기 자신에게 가는 복사)도 포함될 수 있음
                </p>
                <ul className="mt-2 text-sm text-gray-400 space-y-1">
                  <li>&bull; 평면/볼록 표면: <Math tex="F_{ii} = 0" /></li>
                  <li>&bull; 오목 표면: <Math tex="F_{ii} > 0" /></li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 text-center">
                Superposition Rule (중첩 규칙)
              </h4>

              <EquationBox label="Superposition" accent="cyan">
                <Math tex={`F_{i,(j+k)} = F_{ij} + F_{ik}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">의미:</strong> 복합 표면에 대한 형상인자는 각 구성 표면에 대한 형상인자의 합입니다.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  <strong className="text-cyan-400">활용:</strong> 복잡한 형상을 단순한 형상의 조합으로 분해하여 계산합니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                Symmetry Rule (대칭 규칙)
              </h4>
              <EquationBox label="For Symmetric Geometry" accent="emerald">
                <Math tex={`F_{ij} = F_{ik} \\quad \\text{if surfaces } j \\text{ and } k \\text{ are symmetric about } i`} display />
              </EquationBox>
              <p className="text-sm text-gray-400 mt-4">
                대칭인 형상에서는 대칭 표면들에 대한 형상인자가 동일합니다.
                예: 정육면체 내부에서 한 면이 나머지 4개의 측면을 볼 때 각각 동일한 형상인자를 가짐.
              </p>
            </div>
          </motion.div>

          {/* 3. Two Surface Enclosure */}
          <SectionDivider number="3" title="Two-Surface Enclosure" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              두 표면으로 이루어진 닫힌 인클로저는 형상인자 계산의 가장 기본적인 경우입니다.
              합 규칙과 상호성 법칙을 적용하면 <strong className="text-white">하나의 형상인자만 알면</strong> 나머지는 모두 결정됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                Two-Surface Enclosure Analysis
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <p className="text-sm text-gray-400 font-bold">Summation Rule:</p>
                  <div className="p-3 rounded-lg bg-slate-950/80">
                    <Math tex={`F_{11} + F_{12} = 1`} />
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/80">
                    <Math tex={`F_{21} + F_{22} = 1`} />
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-400 font-bold">Reciprocity:</p>
                  <div className="p-3 rounded-lg bg-slate-950/80">
                    <Math tex={`A_1 F_{12} = A_2 F_{21}`} />
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-red-500/30">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">특수 경우 - 볼록 표면 (1)이 완전히 볼록 표면 (2)에 포함:</strong>
                </p>
                <div className="mt-2 text-center">
                  <Math tex={`F_{11} = 0, \\quad F_{12} = 1, \\quad F_{21} = \\frac{A_1}{A_2}, \\quad F_{22} = 1 - \\frac{A_1}{A_2}`} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Common View Factors */}
          <SectionDivider number="4" title="Common View Factor Configurations" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              자주 사용되는 형상에 대한 형상인자는 표, 차트, 또는 공식으로 정리되어 있습니다.
              다음은 가장 기본적인 형상들의 형상인자입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                Simple View Factors (F = 1 cases)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Configuration</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium"><Math tex="F_{12}" /></th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Condition</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {simpleViewFactors.map((item, i) => (
                      <tr key={i} className="border-b border-slate-800">
                        <td className="py-3 px-4 text-white">{item.config}</td>
                        <td className="py-3 px-4 text-red-400"><Math tex={item.F} /></td>
                        <td className="py-3 px-4 text-xs text-gray-500">{item.condition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-pink-500/30 bg-pink-500/5 p-6">
              <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-4">
                Coaxial Parallel Disks
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Geometry</p>
                  <p className="text-sm text-gray-400">
                    두 개의 평행한 원판
                    <br />
                    r_1, r_2: 반지름
                    <br />
                    L: 거리
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-2">Parameters</p>
                  <Math tex={`R_i = \\frac{r_i}{L}, \\quad S = 1 + \\frac{1 + R_2^2}{R_1^2}`} display />
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-pink-500/30">
                <p className="text-xs text-gray-500 mb-2">View Factor F_12</p>
                <Math tex={`F_{12} = \\frac{1}{2}\\left[S - \\sqrt{S^2 - 4\\left(\\frac{R_2}{R_1}\\right)^2}\\right]`} display />
              </div>
            </div>
          </motion.div>

          {/* 5. View Factor Algebra Example */}
          <SectionDivider number="5" title="View Factor Algebra Example" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              형상인자 대수를 이용한 <strong className="text-white">문제 풀이 예제</strong>를 살펴봅니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Example: Three-Surface Enclosure
              </h4>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-700 mb-6">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">문제:</strong> 세 개의 평면 표면 (1, 2, 3)으로 이루어진 삼각형 덕트.
                  모든 표면이 평면(F_ii = 0)일 때, F_12를 구하시오.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">1</span>
                  <div>
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">합 규칙 적용:</strong>
                    </p>
                    <div className="mt-2 p-3 rounded-lg bg-slate-950/80">
                      <Math tex={`F_{11} + F_{12} + F_{13} = 1 \\quad \\Rightarrow \\quad F_{12} + F_{13} = 1`} />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</span>
                  <div>
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">상호성 법칙 적용:</strong>
                    </p>
                    <div className="mt-2 p-3 rounded-lg bg-slate-950/80">
                      <Math tex={`A_1 F_{12} = A_2 F_{21}, \\quad A_1 F_{13} = A_3 F_{31}`} />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</span>
                  <div>
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">결과 (Hottel&apos;s Crossed-String Method):</strong>
                    </p>
                    <div className="mt-2 p-3 rounded-lg bg-slate-950/80">
                      <Math tex={`F_{12} = \\frac{A_1 + A_2 - A_3}{2A_1} = \\frac{L_1 + L_2 - L_3}{2L_1}`} />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">(L_i: 각 면의 길이)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Hottel's Crossed-String Method" accent="emerald" icon="H">
              <p>
                2D 형상(긴 덕트, 채널)에서 형상인자를 간단히 구하는 방법입니다.
                두 표면 사이의 형상인자는 &quot;교차하는 끈&quot;과 &quot;교차하지 않는 끈&quot;의 길이로 표현됩니다.
              </p>
              <div className="mt-2 p-3 rounded-lg bg-slate-950/80 text-center">
                <Math tex={`F_{12} = \\frac{(\\text{crossed strings}) - (\\text{uncrossed strings})}{2 \\times (\\text{string on surface 1})}`} />
              </div>
            </InsightCard>
          </motion.div>

          {/* 6. View Factor Tables/Charts */}
          <SectionDivider number="6" title="Using View Factor Resources" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              복잡한 형상의 형상인자는 적분이 매우 어려우므로, 일반적으로
              <strong className="text-white"> 참고 자료</strong>(표, 차트, 소프트웨어)를 활용합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
                <h4 className="text-sm font-mono text-red-400 uppercase tracking-wider mb-4">
                  Available Resources
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">1.</span>
                    <span><strong className="text-white">Appendix Tables:</strong> Incropera Table 13.1, 13.2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">2.</span>
                    <span><strong className="text-white">View Factor Catalog:</strong> Howell et al.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">3.</span>
                    <span><strong className="text-white">Online Tools:</strong> webbook.nist.gov, thermalradiation.net</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">4.</span>
                    <span><strong className="text-white">Software:</strong> ANSYS, COMSOL, Thermal Desktop</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-pink-500/30 bg-pink-500/5 p-6">
                <h4 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-4">
                  Problem-Solving Strategy
                </h4>
                <ol className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">1.</span>
                    <span>F = 1 또는 F = 0인 경우 확인</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">2.</span>
                    <span>테이블/차트에서 직접 찾기</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">3.</span>
                    <span>대칭성으로 단순화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">4.</span>
                    <span>합/상호성 법칙으로 미지수 결정</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">5.</span>
                    <span>중첩으로 복잡한 형상 분해</span>
                  </li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

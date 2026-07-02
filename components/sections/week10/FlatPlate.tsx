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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "teal",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "teal" ? "border-teal-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "blue" ? "border-blue-500/30" : accent === "emerald" ? "border-emerald-500/30" : "border-slate-700";
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
  accent = "teal",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    teal: { bg: "bg-teal-500/5", border: "border-teal-500/20", text: "text-teal-400", iconBg: "bg-teal-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
  };
  const c = colors[accent] || colors.teal;
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

export default function FlatPlate() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            Part 1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Flow Over Flat Plate
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            평판 위를 흐르는 유체의 경계층 발달과 열전달 해석의 기초
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. Introduction to External Flow */}
          <SectionDivider number="1" title="External Flow Introduction" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">외부 유동(External Flow)</strong>은 물체 표면을 따라 흐르는 유동으로,
              경계층(Boundary Layer)이 자유롭게 발달합니다. 내부 유동과 달리 유동이 구속되지 않아
              경계층 두께가 하류로 갈수록 계속 성장합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                External vs Internal Flow
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
                  <h5 className="text-teal-400 font-bold mb-2">External Flow</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 경계층이 자유롭게 발달</li>
                    <li>&bull; 자유류(Free Stream) 존재</li>
                    <li>&bull; 평판, 원통, 구, 튜브 뱅크 등</li>
                    <li>&bull; 항공기 날개, 자동차 차체</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <h5 className="text-blue-400 font-bold mb-2">Internal Flow</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>&bull; 유동이 벽면에 구속됨</li>
                    <li>&bull; 완전 발달 유동 가능</li>
                    <li>&bull; 관, 덕트, 채널 등</li>
                    <li>&bull; 배관, 열교환기 튜브</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Boundary Layer Concept */}
          <SectionDivider number="2" title="Boundary Layer Development" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              유체가 평판의 선단(Leading Edge)에서 시작하여 흐르면,
              <strong className="text-white">속도 경계층(Velocity Boundary Layer)</strong>과
              <strong className="text-white">열 경계층(Thermal Boundary Layer)</strong>이 발달합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Boundary Layer Development on Flat Plate
              </h4>

              {/* SVG Diagram for Boundary Layer Development */}
              <div className="bg-slate-900/80 rounded-xl p-6 mb-6">
                <div className="relative h-64">
                  <svg className="w-full h-full" viewBox="0 0 600 240" preserveAspectRatio="xMidYMid meet">
                    {/* Background */}
                    <defs>
                      <linearGradient id="blGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="rgb(20,184,166)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="rgb(20,184,166)" stopOpacity="0.05" />
                      </linearGradient>
                      <linearGradient id="turbGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="rgb(239,68,68)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="rgb(239,68,68)" stopOpacity="0.05" />
                      </linearGradient>
                      <marker id="arrowHead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                        <polygon points="0,0 8,3 0,6" fill="rgb(148,163,184)" />
                      </marker>
                    </defs>

                    {/* Plate surface */}
                    <rect x="50" y="180" width="530" height="8" fill="rgb(71,85,105)" rx="1" />
                    <line x1="50" y1="180" x2="580" y2="180" stroke="rgb(148,163,184)" strokeWidth="2" />

                    {/* Laminar boundary layer region (smooth curve) */}
                    <path
                      d="M 50 180 Q 100 180, 130 165 Q 160 150, 200 145 Q 250 140, 300 130"
                      fill="url(#blGrad)"
                      stroke="rgb(20,184,166)"
                      strokeWidth="2"
                    />
                    <path d="M 300 130 L 300 180 L 50 180 Z" fill="url(#blGrad)" />

                    {/* Transition region */}
                    <rect x="300" y="90" width="80" height="90" fill="rgb(234,179,8)" fillOpacity="0.1" />
                    <line x1="300" y1="180" x2="300" y2="50" stroke="rgb(234,179,8)" strokeWidth="1" strokeDasharray="4,3" />
                    <line x1="380" y1="180" x2="380" y2="50" stroke="rgb(234,179,8)" strokeWidth="1" strokeDasharray="4,3" />

                    {/* Turbulent boundary layer region */}
                    <path
                      d="M 300 130 Q 340 110, 380 85 Q 450 60, 530 45 L 580 40"
                      fill="none"
                      stroke="rgb(239,68,68)"
                      strokeWidth="2"
                    />
                    <path
                      d="M 300 130 Q 340 110, 380 85 Q 450 60, 530 45 L 580 40 L 580 180 L 300 180 Z"
                      fill="url(#turbGrad)"
                    />

                    {/* Velocity profile arrows - Laminar region */}
                    <g stroke="rgb(156,163,175)" strokeWidth="1">
                      <line x1="100" y1="145" x2="130" y2="145" markerEnd="url(#arrowHead)" />
                      <line x1="100" y1="155" x2="125" y2="155" markerEnd="url(#arrowHead)" />
                      <line x1="100" y1="165" x2="118" y2="165" markerEnd="url(#arrowHead)" />
                      <line x1="100" y1="175" x2="108" y2="175" markerEnd="url(#arrowHead)" />
                    </g>

                    {/* Velocity profile arrows - Free stream */}
                    <g stroke="rgb(148,163,184)" strokeWidth="1.5">
                      <line x1="10" y1="60" x2="45" y2="60" markerEnd="url(#arrowHead)" />
                      <line x1="10" y1="80" x2="45" y2="80" markerEnd="url(#arrowHead)" />
                      <line x1="10" y1="100" x2="45" y2="100" markerEnd="url(#arrowHead)" />
                      <line x1="10" y1="120" x2="45" y2="120" markerEnd="url(#arrowHead)" />
                    </g>

                    {/* Velocity profile arrows - Turbulent (fuller profile) */}
                    <g stroke="rgb(156,163,175)" strokeWidth="1">
                      <line x1="480" y1="100" x2="530" y2="100" markerEnd="url(#arrowHead)" />
                      <line x1="480" y1="120" x2="525" y2="120" markerEnd="url(#arrowHead)" />
                      <line x1="480" y1="140" x2="518" y2="140" markerEnd="url(#arrowHead)" />
                      <line x1="480" y1="160" x2="510" y2="160" markerEnd="url(#arrowHead)" />
                      <line x1="480" y1="175" x2="495" y2="175" markerEnd="url(#arrowHead)" />
                    </g>

                    {/* Delta indicators */}
                    <line x1="200" y1="145" x2="200" y2="180" stroke="rgb(20,184,166)" strokeWidth="1.5" strokeDasharray="3,2" />
                    <line x1="195" y1="145" x2="205" y2="145" stroke="rgb(20,184,166)" strokeWidth="1.5" />
                    <line x1="195" y1="180" x2="205" y2="180" stroke="rgb(20,184,166)" strokeWidth="1.5" />
                    <text x="210" y="165" fill="rgb(20,184,166)" fontSize="11">delta</text>

                    <line x1="520" y1="48" x2="520" y2="180" stroke="rgb(239,68,68)" strokeWidth="1.5" strokeDasharray="3,2" />
                    <line x1="515" y1="48" x2="525" y2="48" stroke="rgb(239,68,68)" strokeWidth="1.5" />
                    <line x1="515" y1="180" x2="525" y2="180" stroke="rgb(239,68,68)" strokeWidth="1.5" />
                    <text x="530" y="115" fill="rgb(239,68,68)" fontSize="11">delta</text>

                    {/* Labels */}
                    <text x="30" y="45" fill="rgb(148,163,184)" fontSize="11">u_inf, T_inf</text>

                    {/* Region labels */}
                    <text x="150" y="210" fill="rgb(20,184,166)" fontSize="11" textAnchor="middle">Laminar</text>
                    <text x="340" y="210" fill="rgb(234,179,8)" fontSize="10" textAnchor="middle">Transition</text>
                    <text x="480" y="210" fill="rgb(239,68,68)" fontSize="11" textAnchor="middle">Turbulent</text>

                    {/* x-axis label */}
                    <line x1="50" y1="225" x2="580" y2="225" stroke="rgb(100,116,139)" strokeWidth="1" markerEnd="url(#arrowHead)" />
                    <text x="590" y="230" fill="rgb(148,163,184)" fontSize="11">x</text>

                    {/* Critical point marker */}
                    <text x="300" y="38" fill="rgb(234,179,8)" fontSize="10" textAnchor="middle">x_cr</text>
                    <text x="300" y="50" fill="rgb(234,179,8)" fontSize="9" textAnchor="middle">(Re_x = 5x10^5)</text>

                    {/* Leading edge marker */}
                    <text x="50" y="200" fill="rgb(148,163,184)" fontSize="10" textAnchor="middle">x=0</text>

                    {/* Surface label */}
                    <text x="315" y="195" fill="rgb(100,116,139)" fontSize="10">Plate surface (T_s)</text>

                    {/* Boundary layer curve label */}
                    <text x="430" y="35" fill="rgb(239,68,68)" fontSize="10">delta(x) ~ x^(4/5)</text>
                    <text x="150" y="135" fill="rgb(20,184,166)" fontSize="10">delta(x) ~ x^(1/2)</text>
                  </svg>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <EquationBox label="Velocity Boundary Layer Thickness" accent="teal">
                  <Math tex={`\\delta(x) = \\frac{5x}{\\sqrt{Re_x}} \\quad (\\text{Laminar})`} display />
                </EquationBox>
                <EquationBox label="Thermal Boundary Layer Thickness" accent="orange">
                  <Math tex={`\\frac{\\delta_t}{\\delta} = Pr^{-1/3}`} display />
                </EquationBox>
              </div>

              <p className="text-sm text-gray-500 mt-6 text-center">
                <Math tex="Pr > 1" />: <Math tex="\delta_t < \delta" /> (oils) |
                <Math tex="Pr < 1" />: <Math tex="\delta_t > \delta" /> (liquid metals) |
                <Math tex="Pr \approx 1" />: <Math tex="\delta_t \approx \delta" /> (gases)
              </p>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Reynolds Number and Transition" accent="teal" icon="Re">
              <p className="mb-2">
                국소 Reynolds 수 <Math tex="Re_x = u_\infty x / \nu" />가 <strong className="text-white">임계값(Critical Value)</strong>에
                도달하면 층류에서 난류로 천이됩니다.
              </p>
              <div className="my-3 p-3 bg-slate-900/50 rounded-lg">
                <Math tex={`Re_{x,cr} \\approx 5 \\times 10^5 \\quad (\\text{typical for smooth plate})`} display />
              </div>
              <p className="text-gray-500">
                실제로는 표면 거칠기, 자유류 난류도, 압력 구배에 따라 <Math tex="10^5 \sim 3 \times 10^6" /> 범위에서 천이됨
              </p>
            </InsightCard>
          </motion.div>

          {/* 3. Blasius Solution */}
          <SectionDivider number="3" title="Blasius Solution (Laminar Flow)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <strong className="text-white">Blasius</strong>는 1908년 등온 평판 위의 층류 경계층에 대한
              정확한 상사해(Similarity Solution)를 도출했습니다. 이 해석은 경계층 이론의 기초가 됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-6">
                Blasius Similarity Solution
              </h4>

              <EquationBox label="Similarity Variable" accent="teal">
                <Math tex={`\\eta = y \\sqrt{\\frac{u_\\infty}{\\nu x}}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Key Results from Blasius Solution</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">Parameter</th>
                        <th className="text-left py-2 px-3 text-gray-400 font-medium">Expression</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-3 px-3 text-teal-400">Boundary Layer Thickness</td>
                        <td className="py-3 px-3"><Math tex="\delta = \frac{5.0x}{\sqrt{Re_x}}" /></td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-3 px-3 text-teal-400">Wall Shear Stress</td>
                        <td className="py-3 px-3"><Math tex="\tau_w = 0.332 \rho u_\infty^2 Re_x^{-1/2}" /></td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-3 px-3 text-teal-400">Local Friction Coefficient</td>
                        <td className="py-3 px-3"><Math tex="C_{f,x} = \frac{0.664}{\sqrt{Re_x}}" /></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 text-teal-400">Average Friction Coefficient</td>
                        <td className="py-3 px-3"><Math tex="\overline{C_f} = \frac{1.328}{\sqrt{Re_L}}" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Heat Transfer - Laminar */}
          <SectionDivider number="4" title="Heat Transfer Correlations (Laminar)" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              Blasius 해석을 에너지 방정식에 확장하면 <strong className="text-white">Pohlhausen 해</strong>가 얻어집니다.
              이를 통해 층류 평판에서의 열전달 상관식을 유도할 수 있습니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                Laminar Flat Plate - Heat Transfer
              </h4>

              <EquationBox label="Local Nusselt Number (Laminar, Isothermal)" accent="orange">
                <Math tex={`Nu_x = \\frac{h_x x}{k} = 0.332 \\, Re_x^{1/2} \\, Pr^{1/3}`} display />
              </EquationBox>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <EquationBox label="Average Nusselt Number" accent="teal">
                  <Math tex={`\\overline{Nu}_L = \\frac{\\bar{h} L}{k} = 0.664 \\, Re_L^{1/2} \\, Pr^{1/3}`} display />
                </EquationBox>
                <EquationBox label="Reynolds Analogy" accent="blue">
                  <Math tex={`\\frac{Nu_x}{Re_x \\, Pr^{1/3}} = \\frac{C_{f,x}}{2}`} display />
                </EquationBox>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Validity Conditions</h5>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>&bull; <Math tex="Re_x < 5 \times 10^5" /> (Laminar flow)</li>
                  <li>&bull; <Math tex="0.6 \lesssim Pr \lesssim 50" /></li>
                  <li>&bull; Properties evaluated at film temperature: <Math tex="T_f = (T_s + T_\infty)/2" /></li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Physical Interpretation" accent="orange" icon="Nu">
              <p className="mb-2">
                <Math tex="Nu_x \propto Re_x^{1/2}" />: 경계층 두께가 <Math tex="x^{1/2}" />에 비례하여 증가하므로,
                열전달 계수 <Math tex="h_x" />는 하류로 갈수록 <strong className="text-white">감소</strong>합니다.
              </p>
              <ul className="space-y-1 mt-2">
                <li>&bull; <Math tex="Pr^{1/3}" /> 의존성: 열 경계층과 속도 경계층의 상대적 두께 반영</li>
                <li>&bull; 평균 Nu = 2 x 국소 Nu (at x=L): 적분 결과</li>
              </ul>
            </InsightCard>
          </motion.div>

          {/* 5. Constant Heat Flux Case */}
          <SectionDivider number="5" title="Constant Heat Flux Condition" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              표면이 일정 열유속(<Math tex="q''_s = \text{const}" />)으로 가열되는 경우,
              상관식이 약간 달라집니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                Constant Heat Flux - Laminar
              </h4>

              <EquationBox label="Local Nusselt Number (UHF)" accent="emerald">
                <Math tex={`Nu_x = 0.453 \\, Re_x^{1/2} \\, Pr^{1/3}`} display />
              </EquationBox>

              <p className="text-sm text-gray-500 mt-6 text-center">
                UHF (Uniform Heat Flux) 조건에서는 계수가 0.332 &rarr; 0.453으로 약 36% 증가
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">Surface Temperature Variation</h5>
                <p className="text-sm text-gray-400">
                  UHF 조건에서 표면 온도는 하류로 갈수록 증가합니다:
                </p>
                <div className="mt-2">
                  <Math tex={`T_s(x) - T_\\infty = \\frac{q''_s x}{k \\cdot Nu_x} = \\frac{q''_s}{0.453 k} \\sqrt{\\frac{\\nu x}{u_\\infty}} Pr^{-1/3}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. Unheated Starting Length */}
          <SectionDivider number="6" title="Unheated Starting Length" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              실제 상황에서 평판의 선단부가 단열(Unheated)되어 있고, <Math tex="x = \xi" />부터
              가열이 시작되는 경우가 있습니다. 이 경우 열 경계층이 속도 경계층보다 늦게 시작됩니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                Unheated Starting Length Correction
              </h4>

              <EquationBox label="Modified Nusselt Number" accent="blue">
                <Math tex={`Nu_x = \\frac{Nu_{x,\\xi=0}}{\\left[1 - (\\xi/x)^{3/4}\\right]^{1/3}}`} display />
              </EquationBox>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/50">
                <h5 className="text-sm font-bold text-white mb-3">For Laminar Flow</h5>
                <Math tex={`Nu_x = \\frac{0.332 \\, Re_x^{1/2} \\, Pr^{1/3}}{\\left[1 - (\\xi/x)^{3/4}\\right]^{1/3}}`} display />
                <p className="text-sm text-gray-400 mt-3">
                  여기서 <Math tex="\xi" />는 비가열 구간의 길이, <Math tex="x" />는 선단에서의 거리
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="Key Observations for Flat Plate" accent="blue" icon="K">
              <ul className="space-y-2">
                <li>&bull; 층류 경계층: <Math tex="h_x \propto x^{-1/2}" /> (하류로 갈수록 감소)</li>
                <li>&bull; <Math tex="\overline{Nu}_L = 2 \cdot Nu_L" /> (평균 = 2 x 끝점 국소값)</li>
                <li>&bull; Prandtl 수가 클수록 열전달 증가 (<Math tex="Pr^{1/3}" />)</li>
                <li>&bull; Film temperature에서 물성 평가</li>
              </ul>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

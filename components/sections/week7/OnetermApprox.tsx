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
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
        {number}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
    </motion.div>
  );
}

function EquationBox({
  label,
  children,
  accent = "cyan",
}: {
  label?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const borderColor = accent === "cyan" ? "border-cyan-500/30" : accent === "orange" ? "border-orange-500/30" : accent === "emerald" ? "border-emerald-500/30" : accent === "blue" ? "border-blue-500/30" : "border-slate-700";
  return (
    <div className={`text-center p-6 rounded-xl bg-slate-950/80 border ${borderColor}`}>
      {label && <p className="text-sm text-gray-500 mb-3">{label}</p>}
      <div>
        {children}
      </div>
    </div>
  );
}

function InsightCard({
  title,
  children,
  accent = "cyan",
  icon = "!",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: string;
}) {
  const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    cyan: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
    orange: { bg: "bg-orange-500/5", border: "border-orange-500/20", text: "text-orange-400", iconBg: "bg-orange-500/20" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", iconBg: "bg-blue-500/20" },
    yellow: { bg: "bg-yellow-500/5", border: "border-yellow-500/20", text: "text-yellow-400", iconBg: "bg-yellow-500/20" },
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
    red: { bg: "bg-red-500/5", border: "border-red-500/20", text: "text-red-400", iconBg: "bg-red-500/20" },
  };
  const c = colors[accent] || colors.cyan;
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

export default function OnetermApprox() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Part 4
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            One-Term Approximation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            실무에서 가장 많이 사용되는 One-term approximation 방법과 계수표를 학습합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 1. One-Term 공식 */}
          <SectionDivider number="1" title="One-Term Approximation Formulas" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <Math tex="Fo > 0.2" />일 때, 무한 급수의 <strong className="text-white">첫 번째 항만</strong>으로
              1% 이내의 정확도를 얻을 수 있습니다. 이것이 <strong className="text-white">One-term Approximation</strong>입니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                평판 (Plane Wall)
              </h4>

              <div className="space-y-4">
                <EquationBox label="중심 온도 (x* = 0)" accent="cyan">
                  <Math tex={`\\theta_0^* = \\frac{T_0 - T_\\infty}{T_i - T_\\infty} = C_1 \\exp(-\\zeta_1^2 Fo)`} display />
                </EquationBox>

                <EquationBox label="임의 위치 온도" accent="cyan">
                  <Math tex={`\\theta^* = \\frac{T - T_\\infty}{T_i - T_\\infty} = C_1 \\exp(-\\zeta_1^2 Fo) \\cos(\\zeta_1 x^*)`} display />
                </EquationBox>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400">
                    <strong className="text-cyan-400">고유값 방정식:</strong> <Math tex="\\zeta_1 \\tan(\\zeta_1) = Bi" /><br />
                    <strong className="text-cyan-400">계수:</strong> <Math tex="C_1 = \\frac{4\\sin\\zeta_1}{2\\zeta_1 + \\sin(2\\zeta_1)}" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-6">
                무한 원통 (Infinite Cylinder)
              </h4>

              <div className="space-y-4">
                <EquationBox label="중심 온도 (r* = 0)" accent="orange">
                  <Math tex={`\\theta_0^* = C_1 \\exp(-\\zeta_1^2 Fo)`} display />
                </EquationBox>

                <EquationBox label="임의 위치 온도" accent="orange">
                  <Math tex={`\\theta^* = C_1 \\exp(-\\zeta_1^2 Fo) \\cdot J_0(\\zeta_1 r^*)`} display />
                </EquationBox>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400">
                    <strong className="text-orange-400">고유값 방정식:</strong> <Math tex="\\zeta_1 \\frac{J_1(\\zeta_1)}{J_0(\\zeta_1)} = Bi" /><br />
                    <strong className="text-orange-400">계수:</strong> <Math tex="C_1 = \\frac{2J_1(\\zeta_1)}{\\zeta_1[J_0^2(\\zeta_1) + J_1^2(\\zeta_1)]}" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-6">
                구 (Sphere)
              </h4>

              <div className="space-y-4">
                <EquationBox label="중심 온도 (r* = 0)" accent="blue">
                  <Math tex={`\\theta_0^* = C_1 \\exp(-\\zeta_1^2 Fo)`} display />
                </EquationBox>

                <EquationBox label="임의 위치 온도" accent="blue">
                  <Math tex={`\\theta^* = C_1 \\exp(-\\zeta_1^2 Fo) \\cdot \\frac{\\sin(\\zeta_1 r^*)}{\\zeta_1 r^*}`} display />
                </EquationBox>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-gray-400">
                    <strong className="text-blue-400">고유값 방정식:</strong> <Math tex="1 - \\zeta_1 \\cot(\\zeta_1) = Bi" /><br />
                    <strong className="text-blue-400">계수:</strong> <Math tex="C_1 = \\frac{4(\\sin\\zeta_1 - \\zeta_1\\cos\\zeta_1)}{2\\zeta_1 - \\sin(2\\zeta_1)}" />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. 계수표 */}
          <SectionDivider number="2" title="Coefficient Tables" />

          <motion.div {...stagger} className="mb-8">
            <p className="text-gray-400 leading-relaxed mb-6">
              <Math tex="\\zeta_1" />과 <Math tex="C_1" />은 Bi에만 의존합니다.
              아래 표에서 필요한 값을 찾아 사용합니다. 중간 값은 <strong className="text-white">선형 내삽</strong>으로 구합니다.
            </p>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-cyan-500/30 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
                평판 (Plane Wall) 계수표
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">Bi</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="\\zeta_1" /> (rad)</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="C_1" /></th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">Bi</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="\\zeta_1" /></th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="C_1" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300 font-mono text-xs">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.01</td><td className="py-2 px-3">0.0998</td><td className="py-2 px-3">1.0017</td>
                      <td className="py-2 px-3">1.0</td><td className="py-2 px-3">0.8603</td><td className="py-2 px-3">1.1191</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.02</td><td className="py-2 px-3">0.1410</td><td className="py-2 px-3">1.0033</td>
                      <td className="py-2 px-3">2.0</td><td className="py-2 px-3">1.0769</td><td className="py-2 px-3">1.1785</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.05</td><td className="py-2 px-3">0.2217</td><td className="py-2 px-3">1.0082</td>
                      <td className="py-2 px-3">3.0</td><td className="py-2 px-3">1.1925</td><td className="py-2 px-3">1.2102</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.10</td><td className="py-2 px-3">0.3111</td><td className="py-2 px-3">1.0161</td>
                      <td className="py-2 px-3">4.0</td><td className="py-2 px-3">1.2646</td><td className="py-2 px-3">1.2287</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.20</td><td className="py-2 px-3">0.4328</td><td className="py-2 px-3">1.0311</td>
                      <td className="py-2 px-3">5.0</td><td className="py-2 px-3">1.3138</td><td className="py-2 px-3">1.2402</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.30</td><td className="py-2 px-3">0.5218</td><td className="py-2 px-3">1.0450</td>
                      <td className="py-2 px-3">10</td><td className="py-2 px-3">1.4289</td><td className="py-2 px-3">1.2620</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.40</td><td className="py-2 px-3">0.5932</td><td className="py-2 px-3">1.0580</td>
                      <td className="py-2 px-3">20</td><td className="py-2 px-3">1.4961</td><td className="py-2 px-3">1.2699</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.50</td><td className="py-2 px-3">0.6533</td><td className="py-2 px-3">1.0701</td>
                      <td className="py-2 px-3">50</td><td className="py-2 px-3">1.5400</td><td className="py-2 px-3">1.2727</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">0.70</td><td className="py-2 px-3">0.7506</td><td className="py-2 px-3">1.0919</td>
                      <td className="py-2 px-3">&infin;</td><td className="py-2 px-3">1.5708</td><td className="py-2 px-3">1.2732</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-orange-500/30 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">
                무한 원통 (Infinite Cylinder) 계수표
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">Bi</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="\\zeta_1" /></th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="C_1" /></th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">Bi</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="\\zeta_1" /></th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="C_1" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300 font-mono text-xs">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.01</td><td className="py-2 px-3">0.1412</td><td className="py-2 px-3">1.0025</td>
                      <td className="py-2 px-3">1.0</td><td className="py-2 px-3">1.2558</td><td className="py-2 px-3">1.2071</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.02</td><td className="py-2 px-3">0.1995</td><td className="py-2 px-3">1.0050</td>
                      <td className="py-2 px-3">2.0</td><td className="py-2 px-3">1.5995</td><td className="py-2 px-3">1.3384</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.05</td><td className="py-2 px-3">0.3142</td><td className="py-2 px-3">1.0124</td>
                      <td className="py-2 px-3">3.0</td><td className="py-2 px-3">1.7887</td><td className="py-2 px-3">1.4191</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.10</td><td className="py-2 px-3">0.4417</td><td className="py-2 px-3">1.0246</td>
                      <td className="py-2 px-3">4.0</td><td className="py-2 px-3">1.9081</td><td className="py-2 px-3">1.4698</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.20</td><td className="py-2 px-3">0.6170</td><td className="py-2 px-3">1.0483</td>
                      <td className="py-2 px-3">5.0</td><td className="py-2 px-3">1.9898</td><td className="py-2 px-3">1.5029</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.30</td><td className="py-2 px-3">0.7465</td><td className="py-2 px-3">1.0712</td>
                      <td className="py-2 px-3">10</td><td className="py-2 px-3">2.1795</td><td className="py-2 px-3">1.5677</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.40</td><td className="py-2 px-3">0.8516</td><td className="py-2 px-3">1.0931</td>
                      <td className="py-2 px-3">20</td><td className="py-2 px-3">2.2880</td><td className="py-2 px-3">1.5919</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.50</td><td className="py-2 px-3">0.9408</td><td className="py-2 px-3">1.1143</td>
                      <td className="py-2 px-3">50</td><td className="py-2 px-3">2.3572</td><td className="py-2 px-3">1.6002</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">0.70</td><td className="py-2 px-3">1.0873</td><td className="py-2 px-3">1.1539</td>
                      <td className="py-2 px-3">&infin;</td><td className="py-2 px-3">2.4048</td><td className="py-2 px-3">1.6021</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-xl border border-blue-500/30 bg-slate-900/50 p-6">
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-4">
                구 (Sphere) 계수표
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">Bi</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="\\zeta_1" /></th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="C_1" /></th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium">Bi</th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="\\zeta_1" /></th>
                      <th className="text-left py-2 px-3 text-gray-400 font-medium"><Math tex="C_1" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300 font-mono text-xs">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.01</td><td className="py-2 px-3">0.1730</td><td className="py-2 px-3">1.0030</td>
                      <td className="py-2 px-3">1.0</td><td className="py-2 px-3">1.5708</td><td className="py-2 px-3">1.2732</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.02</td><td className="py-2 px-3">0.2445</td><td className="py-2 px-3">1.0060</td>
                      <td className="py-2 px-3">2.0</td><td className="py-2 px-3">2.0288</td><td className="py-2 px-3">1.4793</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.05</td><td className="py-2 px-3">0.3854</td><td className="py-2 px-3">1.0150</td>
                      <td className="py-2 px-3">3.0</td><td className="py-2 px-3">2.2889</td><td className="py-2 px-3">1.6227</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.10</td><td className="py-2 px-3">0.5423</td><td className="py-2 px-3">1.0298</td>
                      <td className="py-2 px-3">4.0</td><td className="py-2 px-3">2.4556</td><td className="py-2 px-3">1.7202</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.20</td><td className="py-2 px-3">0.7593</td><td className="py-2 px-3">1.0592</td>
                      <td className="py-2 px-3">5.0</td><td className="py-2 px-3">2.5704</td><td className="py-2 px-3">1.7870</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.30</td><td className="py-2 px-3">0.9208</td><td className="py-2 px-3">1.0880</td>
                      <td className="py-2 px-3">10</td><td className="py-2 px-3">2.8363</td><td className="py-2 px-3">1.9249</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.40</td><td className="py-2 px-3">1.0528</td><td className="py-2 px-3">1.1164</td>
                      <td className="py-2 px-3">20</td><td className="py-2 px-3">2.9857</td><td className="py-2 px-3">1.9781</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-3">0.50</td><td className="py-2 px-3">1.1656</td><td className="py-2 px-3">1.1441</td>
                      <td className="py-2 px-3">50</td><td className="py-2 px-3">3.0788</td><td className="py-2 px-3">1.9962</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">0.70</td><td className="py-2 px-3">1.3525</td><td className="py-2 px-3">1.1978</td>
                      <td className="py-2 px-3">&infin;</td><td className="py-2 px-3">3.1416</td><td className="py-2 px-3">2.0000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* 3. 사용 절차 */}
          <SectionDivider number="3" title="Step-by-Step Procedure" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-6">
                One-Term Approximation 사용 절차
              </h4>

              <ol className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">형상과 특성길이 결정</strong>
                    <p className="text-sm mt-1">
                      평판: L = 반두께, 원통/구: L = <Math tex="r_o" />
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">Biot 수 계산</strong>
                    <p className="text-sm mt-1">
                      <Math tex="Bi = hL/k" />. Bi &gt; 0.1이면 공간 효과 고려 필요.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</span>
                  <div>
                    <strong className="text-white">Fourier 수 계산</strong>
                    <p className="text-sm mt-1">
                      <Math tex="Fo = \\alpha t / L^2" />. Fo &gt; 0.2인지 확인.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">4</span>
                  <div>
                    <strong className="text-white">계수표에서 <Math tex="\\zeta_1" />, <Math tex="C_1" /> 찾기</strong>
                    <p className="text-sm mt-1">
                      해당 Bi 값에서 (필요시 선형 내삽)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">5</span>
                  <div>
                    <strong className="text-white">무차원 온도 계산</strong>
                    <p className="text-sm mt-1">
                      중심: <Math tex="\\theta_0^* = C_1 \\exp(-\\zeta_1^2 Fo)" /><br />
                      임의 위치: 공간 함수 곱하기
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">6</span>
                  <div>
                    <strong className="text-white">실제 온도 복원</strong>
                    <p className="text-sm mt-1">
                      <Math tex="T = T_\\infty + \\theta^*(T_i - T_\\infty)" />
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* 4. 예제 */}
          <SectionDivider number="4" title="Example Problems" />

          <motion.div {...stagger} className="mb-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-slate-950 p-8">
              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-4">
                예제 7.2: 알루미늄 평판 냉각
              </h4>

              <div className="text-gray-400 mb-6">
                <p className="mb-4">
                  <strong className="text-white">문제:</strong> 두께 100mm(전체)의 알루미늄 평판이 초기 온도 200°C에서
                  25°C 공기 중에서 냉각된다. h = 80 W/(m²·K)일 때,
                </p>
                <p className="mb-4">
                  <strong className="text-white">물성치:</strong> k = 180 W/(m·K), <Math tex="\\alpha" /> = 7.4 × 10⁻⁵ m²/s
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>300초 후 중심 온도는?</li>
                  <li>300초 후 표면 온도는?</li>
                  <li>중심 온도가 50°C가 되는 데 걸리는 시간은?</li>
                </ol>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 1 & 2: Bi 계산</p>
                  <Math tex={`L = 0.05 \\text{ m (반두께)}`} display />
                  <Math tex={`Bi = \\frac{hL}{k} = \\frac{80 \\times 0.05}{180} = 0.0222`} display />
                  <p className="text-xs text-gray-500 mt-2">Bi &lt; 0.1이지만, 교육 목적으로 One-term 방법 적용</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 3: Fo 계산</p>
                  <Math tex={`Fo = \\frac{\\alpha t}{L^2} = \\frac{7.4 \\times 10^{-5} \\times 300}{(0.05)^2} = 8.88`} display />
                  <p className="text-xs text-gray-500 mt-2">Fo = 8.88 &gt; 0.2 &rarr; One-term approximation 유효</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 4: 계수 결정 (Bi = 0.0222)</p>
                  <p className="text-sm text-gray-400 mb-2">
                    표에서 Bi = 0.02일 때: <Math tex="\\zeta_1 = 0.1410" />, <Math tex="C_1 = 1.0033" /><br />
                    Bi = 0.05일 때: <Math tex="\\zeta_1 = 0.2217" />, <Math tex="C_1 = 1.0082" />
                  </p>
                  <p className="text-sm text-gray-400">
                    선형 내삽: <Math tex="\\zeta_1 \\approx 0.147" />, <Math tex="C_1 \\approx 1.0037" />
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">Step 5 & 6: 온도 계산 (300초 후)</p>
                  <Math tex={`\\theta_0^* = C_1 \\exp(-\\zeta_1^2 Fo) = 1.0037 \\times \\exp(-0.147^2 \\times 8.88)`} display />
                  <Math tex={`\\theta_0^* = 1.0037 \\times \\exp(-0.192) = 1.0037 \\times 0.825 = 0.828`} display />
                  <Math tex={`T_0 = 25 + 0.828(200-25) = \\boxed{169.9°\\text{C}}`} display />
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">표면 온도 (x* = 1)</p>
                  <Math tex={`\\theta^* = \\theta_0^* \\cos(\\zeta_1 \\cdot 1) = 0.828 \\times \\cos(0.147) = 0.828 \\times 0.989 = 0.819`} display />
                  <Math tex={`T_s = 25 + 0.819(200-25) = \\boxed{168.3°\\text{C}}`} display />
                  <p className="text-xs text-gray-500 mt-2">중심과 표면 온도 차이가 작음 (낮은 Bi)</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50">
                  <p className="text-sm text-emerald-400 font-bold mb-2">중심이 50°C가 되는 시간</p>
                  <Math tex={`\\theta_0^* = \\frac{50-25}{200-25} = 0.143`} display />
                  <Math tex={`0.143 = 1.0037 \\times \\exp(-0.147^2 \\times Fo)`} display />
                  <Math tex={`Fo = \\frac{-\\ln(0.143/1.0037)}{0.147^2} = \\frac{1.96}{0.0216} = 90.7`} display />
                  <Math tex={`t = \\frac{Fo \\cdot L^2}{\\alpha} = \\frac{90.7 \\times (0.05)^2}{7.4 \\times 10^{-5}} = \\boxed{3063 \\text{ s} = 51.1 \\text{ min}}`} display />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. 특수 경우 */}
          <SectionDivider number="5" title="Special Cases" />

          <motion.div {...stagger} className="mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <InsightCard title="Bi → 0 (Lumped)" accent="cyan" icon="0">
                <p>
                  <Math tex="Bi \\to 0" />이면 <Math tex="\\zeta_1 \\to 0" />, <Math tex="C_1 \\to 1" /><br />
                  <Math tex="\\theta^* \\approx \\exp(-Bi \\cdot Fo)" /><br />
                  Lumped capacitance와 일치
                </p>
              </InsightCard>

              <InsightCard title="Bi → ∞ (Constant Ts)" accent="orange" icon="∞">
                <p>
                  <Math tex="Bi \\to \\infty" />이면 표면 온도가 즉시 <Math tex="T_\\infty" />에 도달<br />
                  평판: <Math tex="\\zeta_1 \\to \\pi/2" /><br />
                  이상적인 담금질 조건
                </p>
              </InsightCard>
            </div>
          </motion.div>

          <motion.div {...stagger} className="mb-8">
            <InsightCard title="역문제: 시간 계산" accent="yellow" icon="t">
              <p className="mb-2">
                특정 온도에 도달하는 시간을 구하려면:
              </p>
              <ol className="space-y-1 mt-2 text-sm">
                <li>1. 목표 <Math tex="\\theta^*" /> 계산</li>
                <li>2. 위치 함수로 나누어 <Math tex="\\theta_0^*" /> 계산</li>
                <li>3. <Math tex="Fo = -\\ln(\\theta_0^*/C_1)/\\zeta_1^2" /></li>
                <li>4. <Math tex="t = Fo \\cdot L^2/\\alpha" /></li>
              </ol>
            </InsightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

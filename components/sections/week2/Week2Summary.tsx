"use client";

import { motion } from "framer-motion";
import Math from "@/components/Math";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const keyTakeaways = [
  {
    title: "Fourier's Law (Vector Form)",
    desc: "q\u2033 = \u2212k\u2207T \u2014 열유속은 등온면에 수직이며, 온도가 감소하는 방향으로 향합니다. k는 재료 고유의 열전도도입니다.",
    color: "border-red-500/30",
    accent: "text-red-400",
  },
  {
    title: "Heat Diffusion Equation",
    desc: "\u2207\u00B7(k\u2207T) + q\u0307 = \u03C1c\u209A(\u2202T/\u2202t) \u2014 미소 체적에 에너지 보존을 적용하여 유도. 정상상태, 무생성 시 Laplace 방정식으로 축소됩니다.",
    color: "border-orange-500/30",
    accent: "text-orange-400",
  },
  {
    title: "Thermal Resistance Analogy",
    desc: "\u0394T = qR (Ohm\u2019s Law 유사). 평판 R=L/(kA), 원통 R=ln(r\u2092/r\u1D62)/(2\u03C0kL), 구 R=(1/r\u1D62\u22121/r\u2092)/(4\u03C0k). 직렬/병렬 조합으로 복합 구조 해석.",
    color: "border-green-500/30",
    accent: "text-green-400",
  },
  {
    title: "Temperature Profiles Without Generation",
    desc: "평판: 선형 (linear). 원통: 대수 (logarithmic). 구: 1/r (hyperbolic). 면적 변화에 따라 프로파일 형상이 결정됩니다.",
    color: "border-cyan-500/30",
    accent: "text-cyan-400",
  },
  {
    title: "Heat Generation \u2192 Parabolic Profiles",
    desc: "내부 열 생성이 있으면 온도 분포가 포물선형이 됩니다. 평판: q\u0307L\u00B2/(2k), 원통: q\u0307r\u2092\u00B2/(4k). 최고 온도는 대칭면(중심)에서 발생합니다.",
    color: "border-amber-500/30",
    accent: "text-amber-400",
  },
  {
    title: "Critical Radius of Insulation",
    desc: "r_cr = k/h (원통), 2k/h (구). 소형 원통에 단열재를 추가하면 오히려 열 손실이 증가할 수 있습니다. 세선(thin wire)에서 특히 중요합니다.",
    color: "border-emerald-500/30",
    accent: "text-emerald-400",
  },
];

const equationSheet = [
  { law: "Fourier\u2019s Law (3D)", eq: "q'' = -k\\nabla T", color: "text-red-400" },
  { law: "Heat Diffusion (General)", eq: "\\nabla\\!\\cdot\\!(k\\nabla T) + \\dot{q} = \\rho c_p \\frac{\\partial T}{\\partial t}", color: "text-orange-400" },
  { law: "Thermal Diffusivity", eq: "\\alpha = \\frac{k}{\\rho c_p}\\;[\\text{m}^2/\\text{s}]", color: "text-violet-400" },
  { law: "Convection Resistance", eq: "R_{\\text{conv}} = \\frac{1}{hA}", color: "text-blue-400" },
  { law: "Plane Wall Resistance", eq: "R = \\frac{L}{kA}", color: "text-green-400" },
  { law: "Plane Wall T(x)", eq: "T(x) = T_{s,1} + (T_{s,2}-T_{s,1})\\frac{x}{L}", color: "text-green-400" },
  { law: "Cylinder Resistance", eq: "R = \\frac{\\ln(r_o/r_i)}{2\\pi k L}", color: "text-cyan-400" },
  { law: "Cylinder T(r)", eq: "T(r) = T_{s,i} + (T_{s,o}-T_{s,i})\\frac{\\ln(r/r_i)}{\\ln(r_o/r_i)}", color: "text-cyan-400" },
  { law: "Sphere Resistance", eq: "R = \\frac{1/r_i - 1/r_o}{4\\pi k}", color: "text-teal-400" },
  { law: "Overall U", eq: "q = UA\\cdot\\Delta T,\\;\\frac{1}{UA} = R_{\\text{total}}", color: "text-blue-400" },
  { law: "Critical Radius (cyl/sph)", eq: "r_{cr} = k/h\\;(\\text{cyl}),\\;2k/h\\;(\\text{sph})", color: "text-emerald-400" },
  { law: "Plane Wall + Gen (sym.)", eq: "T(x) = \\frac{\\dot{q}L^2}{2k}\\!\\left(1-\\frac{x^2}{L^2}\\right)+T_s", color: "text-amber-400" },
  { law: "Cylinder + Gen", eq: "T(r) = \\frac{\\dot{q}r_o^2}{4k}\\!\\left(1-\\frac{r^2}{r_o^2}\\right)+T_s", color: "text-amber-400" },
  { law: "Surface T (wall, conv)", eq: "T_s = T_\\infty + \\dot{q}L/h", color: "text-amber-400" },
  { law: "Surface T (cyl, conv)", eq: "T_s = T_\\infty + \\dot{q}r_o/(2h)", color: "text-orange-400" },
];

const problemSteps = [
  {
    step: 1,
    title: "Identify the Geometry & Conditions",
    desc: "평판/원통/구? 정상상태? 열 생성 유무? 1D? 좌표계와 변수를 결정합니다.",
  },
  {
    step: 2,
    title: "Write the Governing Equation",
    desc: "적절한 열확산 방정식을 선택합니다. 정상+무생성 \u2192 Laplace, 정상+생성 \u2192 Poisson.",
  },
  {
    step: 3,
    title: "Integrate to Get General Solution",
    desc: "2차 ODE를 두 번 적분하여 C\u2081, C\u2082를 포함한 일반해를 구합니다.",
  },
  {
    step: 4,
    title: "Apply Boundary Conditions",
    desc: "2개의 BC를 적용하여 C\u2081, C\u2082를 결정합니다. BC 유형: Dirichlet(T), Neumann(q\"), Robin(h).",
  },
  {
    step: 5,
    title: "Calculate Heat Transfer Rate & Resistance",
    desc: "Fourier\u2019s law로 q를 계산하고, \u0394T = qR로 열저항을 정의합니다. 복합 구조는 직렬 저항 합산.",
  },
  {
    step: 6,
    title: "Verify with Energy Balance",
    desc: "E\u0307_in + E\u0307_gen = E\u0307_out + E\u0307_st. 정상상태에서 E\u0307_st = 0. 결과가 에너지 보존을 만족하는지 확인합니다.",
  },
];

export default function Week2Summary() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Header ── */}
        <motion.div {...fadeIn} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-400 text-sm font-medium mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Week 2 Summary
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            1차원 정상상태 전도의 핵심 개념, 공식, 풀이 전략을 총정리합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* ═══════════════════════════════════════════════════════════════
              KEY TAKEAWAYS (6 cards)
          ═══════════════════════════════════════════════════════════════ */}
          <motion.div {...fadeIn} className="mb-16">
            <h3 className="text-lg font-bold text-white mb-6 text-center">
              Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {keyTakeaways.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`p-5 rounded-xl bg-slate-800/30 border-l-4 ${item.color} border border-slate-700`}
                >
                  <h4 className={`font-bold mb-2 ${item.accent}`}>{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════
              EQUATIONS REFERENCE SHEET (15 equations)
          ═══════════════════════════════════════════════════════════════ */}
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-slate-700 bg-slate-800/20 p-8 mb-16"
          >
            <h3 className="text-lg font-bold text-white mb-6 text-center">
              Equations Reference Sheet
            </h3>
            <div className="space-y-2">
              {equationSheet.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/40 border border-slate-800/50"
                >
                  <span className="text-sm text-gray-400">{item.law}</span>
                  <span className={`font-bold text-sm ${item.color}`}>
                    <Math tex={item.eq} />
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════
              GEOMETRY COMPARISON TABLE (with and without generation)
          ═══════════════════════════════════════════════════════════════ */}
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-slate-700 bg-slate-800/20 p-8 mb-16"
          >
            <h3 className="text-lg font-bold text-white mb-6 text-center">
              Geometry Comparison Table
            </h3>
            <p className="text-sm text-gray-400 text-center mb-6">
              평판, 원통, 구의 정상상태 전도: 열 생성 유무에 따른 비교
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-700">
                    <th className="text-left py-3 px-2 text-gray-500 text-xs">Property</th>
                    <th className="text-center py-3 px-2 text-green-400 text-xs">Plane Wall</th>
                    <th className="text-center py-3 px-2 text-cyan-400 text-xs">Cylinder</th>
                    <th className="text-center py-3 px-2 text-teal-400 text-xs">Sphere</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {/* Without Generation */}
                  <tr className="border-b border-slate-700 bg-slate-800/30">
                    <td colSpan={4} className="py-2 px-2 text-xs font-bold text-white uppercase tracking-wider">
                      Without Generation (<Math tex="\dot{q} = 0" />)
                    </td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-2 text-gray-500 text-xs">Governing</td>
                    <td className="text-center py-2 px-2 text-green-300 text-xs"><Math tex="\frac{d^2T}{dx^2}=0" /></td>
                    <td className="text-center py-2 px-2 text-cyan-300 text-xs"><Math tex="\frac{1}{r}\frac{d}{dr}\!\left(r\frac{dT}{dr}\right)=0" /></td>
                    <td className="text-center py-2 px-2 text-teal-300 text-xs"><Math tex="\frac{1}{r^2}\frac{d}{dr}\!\left(r^2\frac{dT}{dr}\right)=0" /></td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-2 text-gray-500 text-xs">General Soln.</td>
                    <td className="text-center py-2 px-2 text-green-300 text-xs"><Math tex="C_1 x + C_2" /></td>
                    <td className="text-center py-2 px-2 text-cyan-300 text-xs"><Math tex="C_1\ln(r)+C_2" /></td>
                    <td className="text-center py-2 px-2 text-teal-300 text-xs"><Math tex="-C_1/r+C_2" /></td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-2 text-gray-500 text-xs">Profile</td>
                    <td className="text-center py-2 px-2 text-green-300 text-xs">Linear</td>
                    <td className="text-center py-2 px-2 text-cyan-300 text-xs">Logarithmic</td>
                    <td className="text-center py-2 px-2 text-teal-300 text-xs">1/r</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-2 text-gray-500 text-xs"><Math tex="R_{\text{cond}}" /></td>
                    <td className="text-center py-2 px-2 text-green-300 text-xs"><Math tex="L/(kA)" /></td>
                    <td className="text-center py-2 px-2 text-cyan-300 text-xs"><Math tex="\frac{\ln(r_o/r_i)}{2\pi kL}" /></td>
                    <td className="text-center py-2 px-2 text-teal-300 text-xs"><Math tex="\frac{1/r_i - 1/r_o}{4\pi k}" /></td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-2 text-gray-500 text-xs"><Math tex="r_{cr}" /></td>
                    <td className="text-center py-2 px-2 text-gray-600 text-xs">N/A</td>
                    <td className="text-center py-2 px-2 text-cyan-300 text-xs"><Math tex="k/h" /></td>
                    <td className="text-center py-2 px-2 text-teal-300 text-xs"><Math tex="2k/h" /></td>
                  </tr>

                  {/* With Generation */}
                  <tr className="border-b border-slate-700 bg-amber-500/5">
                    <td colSpan={4} className="py-2 px-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                      With Uniform Generation (<Math tex="\dot{q} = \text{const}" />)
                    </td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-2 text-gray-500 text-xs">Governing</td>
                    <td className="text-center py-2 px-2 text-amber-300 text-xs"><Math tex="\frac{d^2T}{dx^2}+\frac{\dot{q}}{k}=0" /></td>
                    <td className="text-center py-2 px-2 text-orange-300 text-xs"><Math tex="\frac{1}{r}\frac{d}{dr}\!\left(r\frac{dT}{dr}\right)+\frac{\dot{q}}{k}=0" /></td>
                    <td className="text-center py-2 px-2 text-gray-600 text-xs">&mdash;</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-2 text-gray-500 text-xs">T (symmetric)</td>
                    <td className="text-center py-2 px-2 text-amber-300 text-xs"><Math tex="\frac{\dot{q}L^2}{2k}\!\left(1-\frac{x^2}{L^2}\right)+T_s" /></td>
                    <td className="text-center py-2 px-2 text-orange-300 text-xs"><Math tex="\frac{\dot{q}r_o^2}{4k}\!\left(1-\frac{r^2}{r_o^2}\right)+T_s" /></td>
                    <td className="text-center py-2 px-2 text-gray-600 text-xs">&mdash;</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-2 text-gray-500 text-xs"><Math tex="\Delta T_{\text{cond}}" /></td>
                    <td className="text-center py-2 px-2 text-amber-300 text-xs"><Math tex="\dot{q}L^2/(2k)" /></td>
                    <td className="text-center py-2 px-2 text-orange-300 text-xs"><Math tex="\dot{q}r_o^2/(4k)" /></td>
                    <td className="text-center py-2 px-2 text-gray-600 text-xs">&mdash;</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 text-gray-500 text-xs"><Math tex="T_s" /> (conv)</td>
                    <td className="text-center py-2 px-2 text-amber-300 text-xs"><Math tex="T_\infty + \dot{q}L/h" /></td>
                    <td className="text-center py-2 px-2 text-orange-300 text-xs"><Math tex="T_\infty + \dot{q}r_o/(2h)" /></td>
                    <td className="text-center py-2 px-2 text-gray-600 text-xs">&mdash;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════
              PROBLEM-SOLVING STRATEGY (6 steps)
          ═══════════════════════════════════════════════════════════════ */}
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-slate-700 bg-gradient-to-br from-blue-500/5 to-slate-900 p-8 mb-16"
          >
            <h3 className="text-lg font-bold text-white mb-2 text-center">
              Problem-Solving Strategy
            </h3>
            <p className="text-sm text-gray-400 text-center mb-8">
              1D 정상상태 전도 문제를 체계적으로 풀기 위한 6단계 접근법
            </p>

            <div className="space-y-4">
              {problemSteps.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-sm">{item.step}</span>
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-800/30 border border-blue-500/20">
              <p className="text-xs text-blue-400 font-mono mb-2">실전 팁</p>
              <p className="text-sm text-gray-400">
                항상 <strong className="text-white">에너지 보존</strong>으로 결과를 검증하세요.
                정상상태에서 <Math tex="\dot{E}_{\text{in}} + \dot{E}_{\text{gen}} = \dot{E}_{\text{out}}" />이 성립해야 합니다.
                계산한 q가 이를 만족하지 않으면 어딘가에 실수가 있는 것입니다.
                또한 경계조건이 정확히 만족되는지 T를 대입하여 확인하세요.
              </p>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════
              COMMON MISTAKES
          ═══════════════════════════════════════════════════════════════ */}
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-red-500/20 bg-slate-800/20 p-8 mb-16"
          >
            <h3 className="text-lg font-bold text-white mb-6 text-center">
              Common Mistakes to Avoid
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  mistake: "원통에 평판 열저항 공식 사용",
                  fix: "원통: ln(r_o/r_i)/(2pikL)이며, (r_o-r_i)/(kA)가 아님",
                },
                {
                  mistake: "대류 열저항 누락",
                  fix: "R_total에 각 유체-고체 경계면의 1/(hA)를 반드시 포함",
                },
                {
                  mistake: "원통 R_conv에서 잘못된 면적 사용",
                  fix: "2pi*r*L에서 올바른 r(내경 또는 외경)을 사용",
                },
                {
                  mistake: "원통에서 선형 온도 분포 가정",
                  fix: "원통 온도 프로파일은 대수(logarithmic)이며 선형이 아님!",
                },
                {
                  mistake: "열생성 문제에서 L과 2L 혼동",
                  fix: "두께 2L의 대칭 벽: 공식에서 반두께 L 사용",
                },
                {
                  mistake: "임계 반경 무시",
                  fix: "단열재가 열손실을 줄인다고 결론짓기 전에 r_cr = k/h 확인",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="p-4 rounded-xl bg-slate-950/40 border border-slate-800"
                >
                  <p className="text-sm text-red-400 font-medium mb-1">{item.mistake}</p>
                  <p className="text-xs text-gray-400">{item.fix}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════
              NEXT WEEK PREVIEW
          ═══════════════════════════════════════════════════════════════ */}
          <motion.div
            {...fadeIn}
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20"
          >
            <p className="text-sm text-gray-500 mb-2">Next Week</p>
            <h3 className="text-2xl font-bold text-white mb-4">
              Week 3: Extended Surfaces &amp; Advanced Topics
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              복합 벽체, 핀(fin), 접촉 열저항 심화를 다룹니다.
            </p>
            <div className="grid md:grid-cols-3 gap-3 max-w-2xl mx-auto">
              {[
                {
                  topic: "Extended Surfaces (Fins)",
                  desc: "핀의 열전달 해석, 효율, 유효성",
                  accent: "border-red-500/30",
                },
                {
                  topic: "Fin Arrays & Design",
                  desc: "핀 배열 최적화, 총괄 표면 효율",
                  accent: "border-orange-500/30",
                },
                {
                  topic: "2D & Transient Preview",
                  desc: "다차원 전도, 형상계수 소개",
                  accent: "border-yellow-500/30",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-4 rounded-xl bg-slate-800/30 border-l-4 ${item.accent} border border-slate-700 text-left`}
                >
                  <h4 className="text-white font-bold text-sm mb-1">{item.topic}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

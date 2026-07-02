"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Math from "@/components/Math";

const emissivityData = [
  { material: "흑체 (Blackbody)", eps: "1.0", type: "ideal" },
  { material: "산화된 금속 표면", eps: "0.6 – 0.9", type: "high" },
  { material: "사람 피부", eps: "0.95 – 0.98", type: "high" },
  { material: "페인트 (대부분의 색)", eps: "0.85 – 0.95", type: "high" },
  { material: "콘크리트", eps: "0.88 – 0.93", type: "high" },
  { material: "연마된 알루미늄", eps: "0.04 – 0.06", type: "low" },
  { material: "연마된 구리", eps: "0.02 – 0.05", type: "low" },
];

export default function RadiationDeepDive() {
  const [tempK, setTempK] = useState(500);
  const sigma = 5.67e-8;
  const qBlackbody = sigma * globalThis.Math.pow(tempK, 4);

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            Part 6
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Radiation: Stefan-Boltzmann Law
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stefan-Boltzmann Law<br />
            모든 물체는 절대온도 0K 이상이면 열복사를 방출합니다. 매질 없이도 전달 가능한 유일한 열전달 모드입니다.
          </p>
        </motion.div>

        {/* Radiation Mechanism: Electron State Changes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-2xl border border-slate-700 bg-slate-900/50 p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-2 text-center">
            Radiation Mechanism: Electron State Changes
          </h3>
          <p className="text-sm text-gray-400 text-center mb-6">
            열복사의 원자 수준 메커니즘과 전자기파 수송
          </p>

          {/* Three key point cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
              <h4 className="text-sm font-bold text-amber-400 mb-2">방출 메커니즘</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                열복사는 물질 내 원자/분자의 전자 상태 변화(electronic transitions)에 의해 방출됩니다.
                전자가 높은 에너지 준위에서 낮은 준위로 전이할 때 그 에너지 차이만큼의 전자기파(photon)가 방출됩니다.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
              <h4 className="text-sm font-bold text-amber-400 mb-2">전자기파 수송</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                복사 에너지는 전자기파(electromagnetic waves) 또는 광자(photons)로 수송됩니다.
                따라서 열복사는 매질(medium)이 필요 없으며, 진공에서 가장 효율적으로 전달됩니다
                — 태양 에너지가 지구에 도달하는 이유입니다.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
              <h4 className="text-sm font-bold text-amber-400 mb-2">방출 조건</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                절대온도가 0K 이상인 모든 물체는 열복사를 방출합니다.
                고체, 액체, 기체 모두 방출 가능하며, 온도가 높을수록
                더 많은 에너지를 방출합니다 (<Math tex="\propto T^4" />).
              </p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Planck Spectrum */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg bg-slate-800/30 border border-slate-700 text-center">
                <p className="text-xs text-gray-500 mb-1">Wien&apos;s Displacement Law</p>
                <p className="font-mono text-sm text-amber-400">
                  <Math tex="\lambda_{\max} = 2898 / T" />
                </p>
                <p className="text-xs text-gray-600 mt-1">[&mu;m]</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-800/30 border border-slate-700 text-center">
                <p className="text-xs text-gray-500 mb-1">Sun (5800K) Peak</p>
                <p className="font-mono text-sm text-yellow-400">0.50 &mu;m</p>
                <p className="text-xs text-gray-600 mt-1">가시광선 영역</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-800/30 border border-slate-700 text-center">
                <p className="text-xs text-gray-500 mb-1">Room Temp (300K) Peak</p>
                <p className="font-mono text-sm text-red-400">9.66 &mu;m</p>
                <p className="text-xs text-gray-600 mt-1">적외선 영역</p>
              </div>
            </div>
          </motion.div>

          {/* Stefan-Boltzmann */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8 mb-12"
          >
            <h3 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-6">
              Stefan-Boltzmann Law
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-gray-500 mb-2">Blackbody Emissive Power</p>
                <div className="text-2xl font-bold text-amber-400">
                  <Math tex="E_b = \sigma T^4" />
                </div>
              </div>
              <div className="text-center p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs text-gray-500 mb-2">Real Surface Emission</p>
                <div className="text-2xl font-bold text-amber-400">
                  <Math tex="E = \varepsilon \sigma T_s^4" />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/10">
              <p className="text-sm text-gray-400">
                <strong className="text-white"><Math tex="T^4" /> 의존성</strong>:
                온도가 2배가 되면 복사 방출은 <strong className="text-amber-300"><Math tex="16" />배(<Math tex="2^4" />)</strong>가 됩니다.
                이 강한 비선형성 때문에 고온에서 복사는 전도·대류를 압도합니다.
                예: 1000K 표면은 500K 대비 16배 많은 에너지를 복사합니다.
              </p>
            </div>

            {/* Irradiation, Absorptivity & Gray Surface */}
            <div className="mt-8 p-6 rounded-xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-4">
                Irradiation, Absorptivity &amp; Gray Surface
              </h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-1">Blackbody Emissive Power</p>
                  <p className="text-lg font-bold text-amber-400">
                    <Math tex="E_b = \sigma T^4" />
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-1">Real Surface Emission</p>
                  <p className="text-lg font-bold text-amber-400">
                    <Math tex="E = \varepsilon \sigma T_s^4" />
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-1">Irradiation from Surroundings</p>
                  <p className="text-lg font-bold text-blue-400">
                    <Math tex="G = \sigma T_{\text{sur}}^4" />
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-1">Absorbed Irradiation</p>
                  <p className="text-lg font-bold text-blue-400">
                    <Math tex="G_{\text{abs}} = \alpha G" />
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/10">
                <p className="text-sm text-gray-400 mb-2">
                  <strong className="text-white">Gray Surface 가정</strong>:
                  흡수율과 방사율이 동일하다고 가정합니다 →
                  <span className="font-mono text-amber-300"> <Math tex="\alpha = \varepsilon" /></span>
                </p>
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Net Radiation Heat Flux</strong>:
                </p>
                <p className="text-lg font-bold text-amber-400 mt-1">
                  <Math tex="q''_{\text{rad}} = \varepsilon \sigma (T_s^4 - T_{\text{sur}}^4)" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-700 bg-slate-800/30 p-8 mb-12"
          >
            <h3 className="text-lg font-bold text-white mb-4">
              Interactive: Blackbody Emissive Power
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              슬라이더를 움직여 온도에 따른 흑체 방사 에너지를 확인하세요
            </p>

            <div className="flex flex-col items-center gap-6">
              <div className="w-full max-w-md">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>200K</span>
                  <span className="font-mono text-amber-400 font-bold text-lg">
                    {tempK} K ({(tempK - 273.15).toFixed(0)}&deg;C)
                  </span>
                  <span>2000K</span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={2000}
                  step={10}
                  value={tempK}
                  onChange={(e) => setTempK(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
                <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-1"><Math tex="E_b = \sigma T^4" /></p>
                  <p className="text-2xl font-mono font-bold text-amber-400">
                    {qBlackbody < 1000
                      ? qBlackbody.toFixed(1)
                      : qBlackbody < 1e6
                      ? (qBlackbody / 1000).toFixed(2) + "k"
                      : (qBlackbody / 1e6).toFixed(2) + "M"}
                  </p>
                  <p className="text-xs text-gray-500">W/m²</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-1"><Math tex="\lambda_{\max}" /></p>
                  <p className="text-2xl font-mono font-bold text-orange-400">
                    {(2898 / tempK).toFixed(1)}
                  </p>
                  <p className="text-xs text-gray-500">&mu;m</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-950/50 border border-slate-700">
                  <p className="text-xs text-gray-500 mb-1">Peak Region</p>
                  <p className="text-lg font-bold text-gray-300">
                    {tempK < 400
                      ? "Far IR"
                      : tempK < 800
                      ? "Mid IR"
                      : tempK < 1500
                      ? "Near IR"
                      : tempK < 3500
                      ? "Visible"
                      : "UV"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Emissivity Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-2">
              Emissivity (<Math tex="\varepsilon" />) of Common Surfaces
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              방사율은 표면 상태(산화, 거칠기, 코팅)에 크게 좌우됩니다.
              연마된 금속은 <Math tex="\varepsilon < 0.1" />이지만, 산화되면 0.5 이상으로 급증합니다.
            </p>
            <div className="space-y-2">
              {emissivityData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-800/30 border border-slate-700/50"
                >
                  <span className="text-sm text-gray-300">{item.material}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2.5 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-amber-500"
                        style={{
                          width: `${parseFloat(item.eps) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="font-mono text-sm text-amber-300 w-24 text-right">
                      <Math tex={`\\varepsilon = ${item.eps}`} />
                    </span>
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

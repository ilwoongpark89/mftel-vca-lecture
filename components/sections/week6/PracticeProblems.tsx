"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  {
    id: 1,
    title: "Biot 수 계산과 유효성 판별",
    topic: "Biot Number",
    topicColor: "red",
    problem: (
      <p>
        지름 <Math tex="D = 0.02" /> m인 구리 구(sphere)가 있습니다. 구리의 열전도율은{" "}
        <Math tex="k = 401" /> W/(m·K)이고, 주위 유체의 대류 열전달 계수는{" "}
        <Math tex="h = 200" /> W/(m²·K)입니다. Biot 수를 계산하고, 집중열용량법(lumped capacitance method)의
        적용 가능 여부를 판별하시오.
      </p>
    ),
    given: [
      "D = 0.02 m (구리 구)",
      "k = 401 W/(m·K)",
      "h = 200 W/(m²·K)",
    ],
    find: "Bi 및 집중열용량법 적용 가능 여부",
    steps: [
      {
        label: "Step 1: 특성길이(Lc) 공식 확인",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              집중열용량법에서 특성길이는 체적 대 표면적의 비로 정의됩니다:
            </p>
            <div className="text-center py-2">
              <Math tex="L_c = \frac{V}{A_s}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 구의 특성길이 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">구의 경우:</p>
            <div className="text-center py-2">
              <Math tex="L_c = \frac{V}{A_s} = \frac{\frac{\pi}{6}D^3}{\pi D^2} = \frac{D}{6} = \frac{0.02}{6} = 3.333 \times 10^{-3} \text{ m}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: Biot 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Bi = \frac{h L_c}{k} = \frac{200 \times 3.333 \times 10^{-3}}{401} = \frac{0.6667}{401}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 유효성 판별",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Bi = 1.662 \times 10^{-3} \ll 0.1" display />
            </div>
            <p className="text-gray-400 mt-2">
              Bi가 0.1보다 훨씬 작으므로, 물체 내부 온도 구배가 무시 가능하며 집중열용량법을 적용할 수 있습니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="Bi = 1.662 \times 10^{-3} \ll 0.1" display />
        <p className="text-sm text-gray-400 mt-2">
          구리는 열전도율이 매우 높아 Bi가 극히 작습니다. 집중열용량법 적용이 적합합니다.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "강철 볼의 냉각 시간 계산",
    topic: "Cooling Time",
    topicColor: "green",
    problem: (
      <p>
        지름 <Math tex="D = 0.05" /> m인 강철 볼(sphere)이 초기 온도 <Math tex="T_i = 500" />°C에서{" "}
        <Math tex="T_\infty = 25" />°C인 유체 속에 놓여 있습니다.
        강철의 물성치: <Math tex="\rho = 7800" /> kg/m³, <Math tex="c = 480" /> J/(kg·K),{" "}
        <Math tex="k = 50" /> W/(m·K). 대류 열전달 계수 <Math tex="h = 100" /> W/(m²·K)일 때,
        볼의 온도가 <Math tex="100" />°C에 도달하는 시간을 구하시오.
      </p>
    ),
    given: [
      "D = 0.05 m",
      "ρ = 7800 kg/m³, c = 480 J/(kg·K), k = 50 W/(m·K)",
      "Ti = 500°C, T∞ = 25°C",
      "h = 100 W/(m²·K)",
    ],
    find: "T = 100°C에 도달하는 시간 t",
    steps: [
      {
        label: "Step 1: Biot 수 확인",
        content: (
          <div>
            <p className="text-gray-400 mb-2">구의 특성길이와 Biot 수:</p>
            <div className="text-center py-2">
              <Math tex="L_c = \frac{D}{6} = \frac{0.05}{6} = 8.333 \times 10^{-3} \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Bi = \frac{hL_c}{k} = \frac{100 \times 8.333 \times 10^{-3}}{50} = 0.01667 < 0.1 \;\checkmark" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 시상수(τ) 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\tau = \frac{\rho V c}{h A_s} = \frac{\rho L_c c}{h} = \frac{7800 \times 8.333 \times 10^{-3} \times 480}{100}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\tau = \frac{31{,}200}{100} = 312 \text{ s}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 냉각 시간 공식 적용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">집중열용량법의 온도 변화:</p>
            <div className="text-center py-2">
              <Math tex="\frac{T(t) - T_\infty}{T_i - T_\infty} = \exp\!\left(-\frac{t}{\tau}\right)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="t = -\tau \ln\!\left(\frac{T - T_\infty}{T_i - T_\infty}\right)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 수치 대입 및 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="t = -312 \times \ln\!\left(\frac{100 - 25}{500 - 25}\right) = -312 \times \ln\!\left(\frac{75}{475}\right)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="t = -312 \times \ln(0.1579) = -312 \times (-1.846)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 최종 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="t = 575.9 \text{ s} \approx 9.6 \text{ min}" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="t \approx 576 \text{ s} \approx 9.6 \text{ min}" display />
        <p className="text-sm text-gray-400 mt-2">
          약 1.85배의 시상수(t/τ = 576/312 = 1.85)가 경과해야 합니다.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "알루미늄 블록의 가열 시간",
    topic: "Heating Time",
    topicColor: "blue",
    problem: (
      <p>
        치수 5 cm × 5 cm × 3 cm인 알루미늄 블록이 초기 온도 <Math tex="T_i = 25" />°C에서{" "}
        <Math tex="T_\infty = 300" />°C인 오일 속에 담겨 있습니다.
        물성치: <Math tex="\rho = 2700" /> kg/m³, <Math tex="c = 900" /> J/(kg·K),{" "}
        <Math tex="k = 237" /> W/(m·K). 대류 열전달 계수 <Math tex="h = 50" /> W/(m²·K)일 때,
        블록이 <Math tex="200" />°C에 도달하는 시간을 구하시오.
      </p>
    ),
    given: [
      "치수: 0.05 m × 0.05 m × 0.03 m",
      "ρ = 2700 kg/m³, c = 900 J/(kg·K), k = 237 W/(m·K)",
      "Ti = 25°C, T∞ = 300°C",
      "h = 50 W/(m²·K)",
    ],
    find: "T = 200°C에 도달하는 시간 t",
    steps: [
      {
        label: "Step 1: 체적과 표면적 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="V = 0.05 \times 0.05 \times 0.03 = 7.5 \times 10^{-5} \text{ m}^3" display />
            </div>
            <div className="text-center py-2">
              <Math tex="A_s = 2(0.05 \times 0.05 + 0.05 \times 0.03 + 0.05 \times 0.03) = 2(0.0055) = 0.011 \text{ m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 특성길이 및 Biot 수 확인",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="L_c = \frac{V}{A_s} = \frac{7.5 \times 10^{-5}}{0.011} = 6.818 \times 10^{-3} \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Bi = \frac{hL_c}{k} = \frac{50 \times 6.818 \times 10^{-3}}{237} = 1.439 \times 10^{-3} \ll 0.1 \;\checkmark" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 시상수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\tau = \frac{\rho V c}{h A_s} = \frac{2700 \times 7.5 \times 10^{-5} \times 900}{50 \times 0.011}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\tau = \frac{182.25}{0.55} = 331.4 \text{ s}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 가열 시간 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              가열의 경우에도 동일한 공식을 적용합니다 (T가 T∞를 향해 증가):
            </p>
            <div className="text-center py-2">
              <Math tex="t = -\tau \ln\!\left(\frac{T - T_\infty}{T_i - T_\infty}\right) = -331.4 \times \ln\!\left(\frac{200 - 300}{25 - 300}\right)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="t = -331.4 \times \ln\!\left(\frac{-100}{-275}\right) = -331.4 \times \ln(0.3636)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 최종 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="t = -331.4 \times (-1.012) = 335.2 \text{ s} \approx 5.6 \text{ min}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="t \approx 335 \text{ s} \approx 5.6 \text{ min}" display />
        <p className="text-sm text-gray-400 mt-2">
          알루미늄은 k가 매우 높아 Bi가 극히 작고, 내부 온도가 균일하게 가열됩니다.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "열전대(Thermocouple) 시상수와 응답",
    topic: "Time Constant",
    topicColor: "amber",
    problem: (
      <p>
        지름 <Math tex="D = 1" /> mm인 구형 열전대(thermocouple) 접합부가 있습니다.
        물성치: <Math tex="\rho = 8500" /> kg/m³, <Math tex="c = 320" /> J/(kg·K),{" "}
        <Math tex="k = 30" /> W/(m·K). 초기 온도 <Math tex="T_i = 25" />°C인 열전대를
        갑자기 <Math tex="T_\infty = 200" />°C 환경에 노출시킵니다 (<Math tex="h = 150" /> W/(m²·K)).
        (a) 시상수 τ를 구하고, (b) 열전대가 190°C를 나타내는 데 걸리는 시간을 구하시오.
      </p>
    ),
    given: [
      "D = 1 mm = 0.001 m (구형 접합부)",
      "ρ = 8500 kg/m³, c = 320 J/(kg·K), k = 30 W/(m·K)",
      "Ti = 25°C, T∞ = 200°C",
      "h = 150 W/(m²·K)",
    ],
    find: "(a) τ [s], (b) T = 190°C까지의 시간 t",
    steps: [
      {
        label: "Step 1: Biot 수 확인",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="L_c = \frac{D}{6} = \frac{0.001}{6} = 1.667 \times 10^{-4} \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Bi = \frac{150 \times 1.667 \times 10^{-4}}{30} = 8.33 \times 10^{-4} \ll 0.1 \;\checkmark" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 시상수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\tau = \frac{\rho L_c c}{h} = \frac{8500 \times 1.667 \times 10^{-4} \times 320}{150}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\tau = \frac{453.3}{150} = 3.02 \text{ s}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 시상수의 물리적 의미",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              시상수 τ는 온도가 초기 차이의 63.2%만큼 변하는 시간입니다:
            </p>
            <div className="text-center py-2">
              <Math tex="t = \tau \;\Rightarrow\; \frac{T - T_\infty}{T_i - T_\infty} = e^{-1} = 0.368" display />
            </div>
            <p className="text-gray-400">
              즉, τ = 3.02 s 후 온도차가 초기의 36.8%로 줄어듭니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 4: 190°C 도달 시간 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="t = -\tau \ln\!\left(\frac{T - T_\infty}{T_i - T_\infty}\right) = -3.02 \times \ln\!\left(\frac{190 - 200}{25 - 200}\right)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="t = -3.02 \times \ln\!\left(\frac{-10}{-175}\right) = -3.02 \times \ln(0.05714)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 최종 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="t = -3.02 \times (-2.864) = 8.65 \text{ s}" display />
            </div>
            <p className="text-gray-400 mt-2">
              이는 약 2.86τ에 해당합니다. 열전대가 실제 온도의 94.3% (=190/200에서가 아닌, 온도 변화의 94.3%)를 측정합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\tau = 3.02 \text{ s}" display />
        <Math tex="t_{190°\text{C}} = 8.65 \text{ s} \;(\approx 2.87\tau)" display />
        <p className="text-sm text-gray-400 mt-2">
          열전대의 빠른 응답을 위해서는 작은 D, 높은 h, 낮은 ρc가 필요합니다.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "냉각 과정 중 전달된 에너지",
    topic: "Energy Transferred",
    topicColor: "cyan",
    problem: (
      <p>
        문제 2의 강철 볼(D = 0.05 m, <Math tex="\rho = 7800" /> kg/m³,{" "}
        <Math tex="c = 480" /> J/(kg·K), <Math tex="T_i = 500" />°C,{" "}
        <Math tex="T_\infty = 25" />°C, <Math tex="h = 100" /> W/(m²·K))에 대해,
        냉각 시작 후 처음 60초 동안 볼에서 유체로 전달된 총 에너지 Q(60 s)를 계산하시오.
      </p>
    ),
    given: [
      "D = 0.05 m (강철 구)",
      "ρ = 7800 kg/m³, c = 480 J/(kg·K)",
      "Ti = 500°C, T∞ = 25°C, h = 100 W/(m²·K)",
      "τ = 312 s (문제 2에서 계산)",
    ],
    find: "Q(60 s) [J]",
    steps: [
      {
        label: "Step 1: 에너지 전달 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">시간 t까지 전달된 총 에너지:</p>
            <div className="text-center py-2">
              <Math tex="Q(t) = \rho V c (T_i - T_\infty)\left[1 - \exp\!\left(-\frac{t}{\tau}\right)\right]" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 체적 계산 및 열용량",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="V = \frac{\pi}{6}D^3 = \frac{\pi}{6}(0.05)^3 = 6.545 \times 10^{-5} \text{ m}^3" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\rho V c = 7800 \times 6.545 \times 10^{-5} \times 480 = 245.0 \text{ J/K}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 최대 에너지(Q∞) 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              t → ∞일 때 전달 가능한 최대 에너지:
            </p>
            <div className="text-center py-2">
              <Math tex="Q_{\max} = \rho V c (T_i - T_\infty) = 245.0 \times (500 - 25) = 245.0 \times 475" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Q_{\max} = 116{,}375 \text{ J} \approx 116.4 \text{ kJ}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 지수 항 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="1 - \exp\!\left(-\frac{60}{312}\right) = 1 - \exp(-0.1923) = 1 - 0.8250 = 0.1750" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: Q(60 s) 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Q(60) = 116{,}375 \times 0.1750 = 20{,}366 \text{ J} \approx 20.4 \text{ kJ}" display />
            </div>
            <p className="text-gray-400 mt-2">
              이는 최대 에너지의 약 17.5%에 해당합니다 (60 s는 τ의 약 19.2%에 불과).
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="Q(60 \text{ s}) \approx 20.4 \text{ kJ}" display />
        <p className="text-sm text-gray-400 mt-2">
          전체 에너지 116.4 kJ 중 17.5%가 처음 60초 동안 전달됩니다.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "구리 vs 강철 구의 냉각 속도 비교",
    topic: "Multiple Objects",
    topicColor: "purple",
    problem: (
      <p>
        질량이 같은 (<Math tex="m = 0.1" /> kg) 구리 구와 강철 구가 있습니다.
        구리: <Math tex="\rho = 8900" /> kg/m³, <Math tex="c = 385" /> J/(kg·K), <Math tex="k = 401" /> W/(m·K).
        강철: <Math tex="\rho = 7800" /> kg/m³, <Math tex="c = 480" /> J/(kg·K), <Math tex="k = 50" /> W/(m·K).
        두 구 모두 <Math tex="T_i = 200" />°C에서 <Math tex="T_\infty = 25" />°C, <Math tex="h = 50" /> W/(m²·K)
        환경에 놓입니다. 어느 구가 더 빨리 냉각되는지 시상수를 비교하여 분석하시오.
      </p>
    ),
    given: [
      "m = 0.1 kg (두 구 동일)",
      "구리: ρ = 8900 kg/m³, c = 385 J/(kg·K), k = 401 W/(m·K)",
      "강철: ρ = 7800 kg/m³, c = 480 J/(kg·K), k = 50 W/(m·K)",
      "Ti = 200°C, T∞ = 25°C, h = 50 W/(m²·K)",
    ],
    find: "각 구의 τ 비교 및 더 빠른 냉각체 판별",
    steps: [
      {
        label: "Step 1: 각 구의 지름 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="m = \rho \cdot \frac{\pi}{6}D^3" />이므로{" "}
              <Math tex="D = \left(\frac{6m}{\rho \pi}\right)^{1/3}" />:
            </p>
            <div className="text-center py-2">
              <Math tex="D_{\text{Cu}} = \left(\frac{6 \times 0.1}{8900\pi}\right)^{1/3} = (2.146 \times 10^{-5})^{1/3} = 0.02779 \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="D_{\text{St}} = \left(\frac{6 \times 0.1}{7800\pi}\right)^{1/3} = (2.449 \times 10^{-5})^{1/3} = 0.02903 \text{ m}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 표면적 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="A_{s,\text{Cu}} = \pi D_{\text{Cu}}^2 = \pi (0.02779)^2 = 2.426 \times 10^{-3} \text{ m}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="A_{s,\text{St}} = \pi D_{\text{St}}^2 = \pi (0.02903)^2 = 2.647 \times 10^{-3} \text{ m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 시상수 계산 (τ = mc/(hAs))",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\tau_{\text{Cu}} = \frac{m \cdot c_{\text{Cu}}}{h \cdot A_{s,\text{Cu}}} = \frac{0.1 \times 385}{50 \times 2.426 \times 10^{-3}} = \frac{38.5}{0.1213} = 317.4 \text{ s}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\tau_{\text{St}} = \frac{m \cdot c_{\text{St}}}{h \cdot A_{s,\text{St}}} = \frac{0.1 \times 480}{50 \times 2.647 \times 10^{-3}} = \frac{48.0}{0.1324} = 362.6 \text{ s}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: Biot 수 확인",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Bi_{\text{Cu}} = \frac{h \cdot D_{\text{Cu}}/6}{k_{\text{Cu}}} = \frac{50 \times 0.004632}{401} = 5.78 \times 10^{-4} \;\checkmark" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Bi_{\text{St}} = \frac{h \cdot D_{\text{St}}/6}{k_{\text{St}}} = \frac{50 \times 0.004838}{50} = 4.84 \times 10^{-3} \;\checkmark" display />
            </div>
            <p className="text-gray-400 mt-2">두 구 모두 Bi &lt; 0.1이므로 집중열용량법 적용 가능.</p>
          </div>
        ),
      },
      {
        label: "Step 5: 비교 분석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="\tau_{\text{Cu}} = 317.4 \text{ s} < \tau_{\text{St}} = 362.6 \text{ s}" />이므로,
              구리 구가 약 12.5% 더 빨리 냉각됩니다.
            </p>
            <p className="text-gray-400">
              같은 질량일 때, 구리는 비열(c)이 낮아 저장 에너지가 적고, 밀도가 높아 체적이 작지만
              표면적이 약간 작음에도 불구하고 전체적으로 τ가 더 작습니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\tau_{\text{Cu}} = 317 \text{ s}, \quad \tau_{\text{St}} = 363 \text{ s}" display />
        <p className="text-sm text-gray-400 mt-2">
          구리 구가 더 빨리 냉각됩니다. 핵심 요인: 구리의 낮은 비열(385 vs 480 J/(kg·K)).
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "열전대 99% 응답시간 (기체 온도 측정)",
    topic: "Thermocouple Response",
    topicColor: "emerald",
    problem: (
      <p>
        기체 온도를 측정하기 위해 지름 <Math tex="D = 0.5" /> mm인 구형 열전대 접합부를 사용합니다.
        물성치: <Math tex="\rho = 8900" /> kg/m³, <Math tex="c = 385" /> J/(kg·K),{" "}
        <Math tex="k = 20" /> W/(m·K). 기체 온도 <Math tex="T_\infty = 150" />°C,{" "}
        <Math tex="h = 80" /> W/(m²·K). 열전대가 초기 25°C에서 온도 변화의 99%를 측정하는 데
        걸리는 시간을 구하시오.
      </p>
    ),
    given: [
      "D = 0.5 mm = 5 × 10⁻⁴ m",
      "ρ = 8900 kg/m³, c = 385 J/(kg·K), k = 20 W/(m·K)",
      "Ti = 25°C, T∞ = 150°C, h = 80 W/(m²·K)",
    ],
    find: "99% 응답시간 t₉₉",
    steps: [
      {
        label: "Step 1: Biot 수 확인",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="L_c = \frac{D}{6} = \frac{5 \times 10^{-4}}{6} = 8.333 \times 10^{-5} \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Bi = \frac{80 \times 8.333 \times 10^{-5}}{20} = 3.33 \times 10^{-4} \ll 0.1 \;\checkmark" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 시상수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\tau = \frac{\rho L_c c}{h} = \frac{8900 \times 8.333 \times 10^{-5} \times 385}{80}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\tau = \frac{285.5}{80} = 3.57 \text{ s}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 99% 응답 조건 설정",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              99% 응답은 온도 변화의 99%를 측정한다는 뜻입니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\frac{T(t) - T_\infty}{T_i - T_\infty} = 1 - 0.99 = 0.01" display />
            </div>
            <p className="text-gray-400 mt-2">
              즉, 남은 온도차가 초기의 1%일 때입니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 4: 시간 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\exp\!\left(-\frac{t}{\tau}\right) = 0.01" display />
            </div>
            <div className="text-center py-2">
              <Math tex="t = -\tau \ln(0.01) = \tau \times 4.605" display />
            </div>
            <div className="text-center py-2">
              <Math tex="t_{99} = 3.57 \times 4.605 = 16.4 \text{ s}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="t_{99} \approx 16.4 \text{ s} \;(\approx 4.6\tau)" display />
        <p className="text-sm text-gray-400 mt-2">
          99% 응답에는 항상 약 4.6τ가 필요합니다. 95% 응답은 3τ, 63.2% 응답은 1τ입니다.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "구리 전선의 냉각",
    topic: "Wire Cooling",
    topicColor: "orange",
    problem: (
      <p>
        지름 <Math tex="D = 2" /> mm, 길이 <Math tex="L = 1" /> m인 구리 전선이 초기 온도{" "}
        <Math tex="T_i = 80" />°C에서 <Math tex="T_\infty = 20" />°C인 공기 중에 놓여 있습니다.
        물성치: <Math tex="\rho = 8900" /> kg/m³, <Math tex="c = 385" /> J/(kg·K),{" "}
        <Math tex="k = 401" /> W/(m·K). 대류 열전달 계수 <Math tex="h = 15" /> W/(m²·K)일 때,
        (a) Biot 수를 확인하고, (b) 전선이 30°C에 도달하는 시간을 구하시오.
      </p>
    ),
    given: [
      "D = 2 mm = 0.002 m, L = 1 m",
      "ρ = 8900 kg/m³, c = 385 J/(kg·K), k = 401 W/(m·K)",
      "Ti = 80°C, T∞ = 20°C",
      "h = 15 W/(m²·K)",
    ],
    find: "(a) Bi, (b) T = 30°C까지의 시간 t",
    steps: [
      {
        label: "Step 1: 긴 원통의 특성길이",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              L ≫ D이므로 양 끝 면적은 무시하고, 긴 원통으로 취급합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="L_c = \frac{V}{A_s} \approx \frac{\pi r^2 L}{2\pi r L} = \frac{r}{2} = \frac{D}{4} = \frac{0.002}{4} = 5.0 \times 10^{-4} \text{ m}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Biot 수 확인",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Bi = \frac{hL_c}{k} = \frac{15 \times 5.0 \times 10^{-4}}{401} = 1.87 \times 10^{-5} \ll 0.1 \;\checkmark" display />
            </div>
            <p className="text-gray-400 mt-2">
              구리의 높은 열전도율로 인해 Bi가 극히 작습니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: 시상수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\tau = \frac{\rho L_c c}{h} = \frac{8900 \times 5.0 \times 10^{-4} \times 385}{15}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\tau = \frac{1713}{15} = 114.2 \text{ s}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 냉각 시간 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="t = -\tau \ln\!\left(\frac{T - T_\infty}{T_i - T_\infty}\right) = -114.2 \times \ln\!\left(\frac{30 - 20}{80 - 20}\right)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="t = -114.2 \times \ln\!\left(\frac{10}{60}\right) = -114.2 \times \ln(0.1667)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 최종 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="t = -114.2 \times (-1.792) = 204.6 \text{ s} \approx 3.4 \text{ min}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="Bi = 1.87 \times 10^{-5} \ll 0.1 \;\checkmark" display />
        <Math tex="t \approx 205 \text{ s} \approx 3.4 \text{ min}" display />
        <p className="text-sm text-gray-400 mt-2">
          긴 원통의 특성길이는 Lc = r/2이며, 구(r/3)와 다름에 주의하세요.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "집중열용량법 + 복사 냉각",
    topic: "Lumped with Radiation",
    topicColor: "pink",
    problem: (
      <p>
        지름 <Math tex="D = 0.01" /> m, 방사율 <Math tex="\varepsilon = 0.9" />인 작은 구가
        진공 환경(대류 없음, 복사만)에서 냉각됩니다.
        물성치: <Math tex="\rho = 8000" /> kg/m³, <Math tex="c = 500" /> J/(kg·K),{" "}
        <Math tex="k = 40" /> W/(m·K). 초기 온도 <Math tex="T_i = 800" /> K,
        주위 온도 <Math tex="T_{\text{sur}} = 300" /> K.
        등가 복사 열전달 계수 <Math tex="h_{\text{rad}}" />를 구하고,
        초기 냉각률 <Math tex="dT/dt|_{t=0}" />를 계산하시오.
      </p>
    ),
    given: [
      "D = 0.01 m, ε = 0.9",
      "ρ = 8000 kg/m³, c = 500 J/(kg·K), k = 40 W/(m·K)",
      "Ti = 800 K, Tsur = 300 K",
      "σ = 5.67 × 10⁻⁸ W/(m²·K⁴)",
    ],
    find: "h_rad 및 초기 냉각률 dT/dt|₀",
    steps: [
      {
        label: "Step 1: 등가 복사 열전달 계수",
        content: (
          <div>
            <p className="text-gray-400 mb-2">복사 열전달을 선형화하면:</p>
            <div className="text-center py-2">
              <Math tex="h_{\text{rad}} = \varepsilon \sigma (T_i^2 + T_{\text{sur}}^2)(T_i + T_{\text{sur}})" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: h_rad 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_i^2 + T_{\text{sur}}^2 = 800^2 + 300^2 = 640{,}000 + 90{,}000 = 730{,}000 \text{ K}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_i + T_{\text{sur}} = 800 + 300 = 1100 \text{ K}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="h_{\text{rad}} = 0.9 \times 5.67 \times 10^{-8} \times 730{,}000 \times 1100 = 41.0 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: Biot 수 확인",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="L_c = \frac{D}{6} = \frac{0.01}{6} = 1.667 \times 10^{-3} \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Bi = \frac{h_{\text{rad}} \cdot L_c}{k} = \frac{41.0 \times 1.667 \times 10^{-3}}{40} = 1.71 \times 10^{-3} \ll 0.1 \;\checkmark" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 에너지 균형으로 dT/dt 유도",
        content: (
          <div>
            <p className="text-gray-400 mb-2">집중열용량 에너지 균형:</p>
            <div className="text-center py-2">
              <Math tex="\rho V c \frac{dT}{dt} = -h_{\text{rad}} A_s (T_i - T_{\text{sur}})" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\frac{dT}{dt}\bigg|_{t=0} = -\frac{h_{\text{rad}} A_s}{\rho V c}(T_i - T_{\text{sur}}) = -\frac{h_{\text{rad}}}{\rho L_c c}(T_i - T_{\text{sur}})" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 초기 냉각률 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{dT}{dt}\bigg|_{t=0} = -\frac{41.0 \times (800 - 300)}{8000 \times 1.667 \times 10^{-3} \times 500}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= -\frac{41.0 \times 500}{6{,}667} = -\frac{20{,}500}{6{,}667} = -3.08 \text{ K/s}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="h_{\text{rad}} \approx 41.0 \text{ W/(m}^2\text{·K)}" display />
        <Math tex="\left.\frac{dT}{dt}\right|_{t=0} \approx -3.08 \text{ K/s}" display />
        <p className="text-sm text-gray-400 mt-2">
          복사 냉각은 비선형(T⁴)이므로 집중열용량법의 지수 해는 근사적으로만 유효합니다.
          온도가 변하면 h_rad도 변합니다.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "집중열용량법 유효성 검증 실패 사례",
    topic: "Validity Check",
    topicColor: "teal",
    problem: (
      <p>
        지름 <Math tex="D = 0.06" /> m인 플라스틱 구가 있습니다.
        물성치: <Math tex="k = 0.2" /> W/(m·K), <Math tex="\rho = 1200" /> kg/m³,{" "}
        <Math tex="c = 1500" /> J/(kg·K). 대류 열전달 계수 <Math tex="h = 40" /> W/(m²·K)일 때,
        집중열용량법의 적용 가능 여부를 판별하시오. 적용이 불가하다면 그 이유를 설명하시오.
      </p>
    ),
    given: [
      "D = 0.06 m (플라스틱 구)",
      "k = 0.2 W/(m·K)",
      "ρ = 1200 kg/m³, c = 1500 J/(kg·K)",
      "h = 40 W/(m²·K)",
    ],
    find: "Bi 및 집중열용량법 적용 가능 여부",
    steps: [
      {
        label: "Step 1: 특성길이 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="L_c = \frac{D}{6} = \frac{0.06}{6} = 0.01 \text{ m}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Biot 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Bi = \frac{h L_c}{k} = \frac{40 \times 0.01}{0.2} = \frac{0.4}{0.2} = 2.0" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 유효성 판별",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Bi = 2.0 \gg 0.1" display />
            </div>
            <p className="text-gray-400 mt-2">
              Bi가 0.1보다 훨씬 크므로 집중열용량법을 적용할 수 <strong className="text-red-400">없습니다</strong>.
            </p>
          </div>
        ),
      },
      {
        label: "Step 4: 물리적 해석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Bi = 2.0의 의미:</p>
            <div className="text-center py-2">
              <Math tex="Bi = \frac{h L_c}{k} = \frac{R_{\text{cond}}}{R_{\text{conv}}} = 2.0" display />
            </div>
            <p className="text-gray-400 mt-2">
              내부 전도 저항이 외부 대류 저항의 2배입니다. 이는 물체 내부에 상당한 온도 구배가
              존재함을 의미합니다. 플라스틱의 낮은 열전도율(k = 0.2)이 주된 원인입니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 5: 대안 해석 방법",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              Bi &gt; 0.1인 경우, 공간적 온도 분포를 고려해야 합니다:
            </p>
            <p className="text-gray-300">
              • <strong>0.1 &lt; Bi &lt; 100</strong>: 1-term approximation (Week 7) 또는 Heisler chart 사용
            </p>
            <p className="text-gray-300 mt-1">
              • <strong>Bi &gt; 100</strong>: 표면 온도가 거의 즉시 T∞에 도달, 반무한체 해석
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="Bi = 2.0 \gg 0.1 \;\;\Rightarrow\;\; \text{Lumped capacitance NOT valid}" display />
        <p className="text-sm text-gray-400 mt-2">
          내부 온도 구배를 고려하는 해석 방법이 필요합니다 (Week 7: 1-term approximation).
        </p>
      </div>
    ),
  },
];

const tips = [
  { title: "1. Biot 수 먼저 확인", description: "Bi = hLc/k < 0.1인지 반드시 먼저 확인하세요. Lc = V/As입니다." },
  { title: "2. 특성길이 계산", description: "구: Lc=r/3, 원통: Lc=r/2, 평판: Lc=L(반두께)로 계산합니다." },
  { title: "3. 시상수 의미", description: "τ = ρVc/(hAs)는 온도가 초기 차이의 63.2%만큼 변하는 시간입니다." },
  { title: "4. 에너지 전달량", description: "Q(t) = ρVc(Ti-T∞)[1-exp(-t/τ)]로 특정 시간까지의 총 에너지를 계산합니다." },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={6} problems={problems} tips={tips} />;
}

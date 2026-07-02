"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  {
    id: 1,
    title: "Vertical Plate Laminar",
    topic: "수직 평판 층류",
    topicColor: "red",
    problem: (
      <p>
        높이 <Math tex="L = 0.3" /> m인 수직 가열 평판의 표면 온도가{" "}
        <Math tex="T_s = 60" />°C이고 주위 공기 온도가 <Math tex="T_\infty = 20" />°C입니다.
        막 온도 <Math tex="T_f = 40" />°C에서의 공기 물성치를 이용하여
        Rayleigh 수와 Churchill-Chu 상관식으로 평균 열전달 계수 <Math tex="h" />를 구하시오.
      </p>
    ),
    given: [
      "L = 0.3 m (수직 평판 높이)",
      "Ts = 60°C, T∞ = 20°C → ΔT = 40 K",
      "Tf = 40°C = 313 K",
      "ν = 1.7 × 10⁻⁵ m²/s, k = 0.027 W/(m·K)",
      "Pr = 0.71, β = 1/Tf = 1/313 K⁻¹ (이상기체)",
    ],
    find: "Ra 및 평균 열전달 계수 h [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: 열확산율(α) 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">열확산율은 Pr 수 정의로부터 구합니다:</p>
            <div className="text-center py-2">
              <Math tex="\alpha = \frac{\nu}{\text{Pr}} = \frac{1.7 \times 10^{-5}}{0.71} = 2.394 \times 10^{-5} \text{ m}^2/\text{s}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Rayleigh 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{Ra} = \frac{g \beta (T_s - T_\infty) L^3}{\nu \alpha}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{9.81 \times \frac{1}{313} \times 40 \times (0.3)^3}{1.7 \times 10^{-5} \times 2.394 \times 10^{-5}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{9.81 \times 3.195 \times 10^{-3} \times 40 \times 0.027}{4.070 \times 10^{-10}} = \frac{0.03385}{4.070 \times 10^{-10}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Ra} = 8.32 \times 10^7" display />
            </div>
            <p className="text-gray-400 mt-2">
              <Math tex="\text{Ra} < 10^9" /> 이므로 층류 영역입니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: Churchill-Chu 상관식 적용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">수직 평판에 대한 Churchill-Chu 상관식:</p>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_L = \left\{ 0.825 + \frac{0.387 \, \text{Ra}^{1/6}}{\left[1 + (0.492/\text{Pr})^{9/16}\right]^{8/27}} \right\}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 분모 항 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\left(\frac{0.492}{\text{Pr}}\right)^{9/16} = \left(\frac{0.492}{0.71}\right)^{9/16} = (0.693)^{0.5625} = 0.814" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\left[1 + 0.814\right]^{8/27} = (1.814)^{0.2963} = 1.193" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: Nu 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}^{1/6} = (8.32 \times 10^7)^{1/6} = 20.88" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_L = \left\{ 0.825 + \frac{0.387 \times 20.88}{1.193} \right\}^2 = \left\{ 0.825 + 6.77 \right\}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_L = (7.60)^2 = 57.7" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 6: 열전달 계수 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="h = \frac{\overline{\text{Nu}}_L \cdot k}{L} = \frac{57.7 \times 0.027}{0.3} = 5.19 \text{ W/(m}^2\text{·K)}" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\text{Ra} = 8.32 \times 10^7 \quad (\text{층류})" display />
        <Math tex="h = 5.19 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          자연대류의 열전달 계수는 강제대류에 비해 일반적으로 작습니다 (공기의 경우 2~25 W/(m²·K)).
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Vertical Plate Turbulent",
    topic: "수직 평판 난류",
    topicColor: "green",
    problem: (
      <p>
        높이 <Math tex="L = 3" /> m인 수직 벽면이 <Math tex="T_s = 80" />°C로 유지되고
        주위 공기 온도가 <Math tex="T_\infty = 20" />°C입니다.
        막 온도 <Math tex="T_f = 50" />°C에서의 공기 물성치를 이용하여
        Rayleigh 수와 Nusselt 수를 구하고, 유동 영역(층류/난류)을 판별하시오.
      </p>
    ),
    given: [
      "L = 3 m (수직 벽면 높이)",
      "Ts = 80°C, T∞ = 20°C → ΔT = 60 K",
      "Tf = 50°C = 323 K",
      "ν = 1.8 × 10⁻⁵ m²/s, k = 0.028 W/(m·K)",
      "Pr = 0.71, β = 1/323 K⁻¹",
    ],
    find: "Ra, Nu, 유동 영역 판별",
    steps: [
      {
        label: "Step 1: 열확산율 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\alpha = \frac{\nu}{\text{Pr}} = \frac{1.8 \times 10^{-5}}{0.71} = 2.535 \times 10^{-5} \text{ m}^2/\text{s}" display />
          </div>
        ),
      },
      {
        label: "Step 2: Rayleigh 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{Ra} = \frac{g \beta \Delta T \, L^3}{\nu \alpha} = \frac{9.81 \times \frac{1}{323} \times 60 \times 27}{1.8 \times 10^{-5} \times 2.535 \times 10^{-5}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{9.81 \times 3.096 \times 10^{-3} \times 1620}{4.563 \times 10^{-10}} = \frac{49.17}{4.563 \times 10^{-10}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Ra} = 1.078 \times 10^{11}" display />
            </div>
            <p className="text-gray-400 mt-2">
              <Math tex="\text{Ra} > 10^9" /> 이므로 <strong>난류</strong> 영역입니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: Churchill-Chu 상관식 (전 영역)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Churchill-Chu 상관식은 층류와 난류 모두에 적용 가능합니다:</p>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_L = \left\{ 0.825 + \frac{0.387 \, \text{Ra}^{1/6}}{\left[1 + (0.492/\text{Pr})^{9/16}\right]^{8/27}} \right\}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: Ra^(1/6) 및 분모 항 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}^{1/6} = (1.078 \times 10^{11})^{1/6} = 68.9" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\left[1 + (0.492/0.71)^{9/16}\right]^{8/27} = 1.193 \quad (\text{문제 1과 동일})" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: Nusselt 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_L = \left\{ 0.825 + \frac{0.387 \times 68.9}{1.193} \right\}^2 = \left\{ 0.825 + 22.35 \right\}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_L = (23.17)^2 = 537" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 6: 열전달 계수",
        content: (
          <div className="text-center py-2">
            <Math tex="h = \frac{537 \times 0.028}{3} = 5.01 \text{ W/(m}^2\text{·K)}" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\text{Ra} = 1.08 \times 10^{11} \quad (\text{난류})" display />
        <Math tex="\overline{\text{Nu}}_L = 537" display />
        <Math tex="h = 5.01 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          높이가 10배(0.3→3 m)로 증가해도 h 값은 유사합니다.
          Nu는 크게 증가하지만, L로 나누기 때문에 h는 거의 일정합니다.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Horizontal Plate (Heated Up)",
    topic: "수평판 상면 가열",
    topicColor: "blue",
    problem: (
      <p>
        0.5 m × 0.5 m 수평 가열판의 상면(heated surface facing up)에서
        표면 온도 <Math tex="T_s = 70" />°C, 주위 온도 <Math tex="T_\infty = 25" />°C입니다.
        막 온도에서의 공기 물성치를 이용하여 평균 열전달 계수를 구하시오.
      </p>
    ),
    given: [
      "판 크기: 0.5 m × 0.5 m",
      "Ts = 70°C, T∞ = 25°C → ΔT = 45 K",
      "Tf = 47.5°C ≈ 320.5 K",
      "ν = 1.77 × 10⁻⁵ m²/s, k = 0.0274 W/(m·K)",
      "Pr = 0.71, β = 1/320.5 K⁻¹",
    ],
    find: "h [W/(m²·K)] (상면 가열)",
    steps: [
      {
        label: "Step 1: 특성길이 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">수평판의 특성길이는 면적/둘레입니다:</p>
            <div className="text-center py-2">
              <Math tex="L_c = \frac{A_s}{P} = \frac{0.5 \times 0.5}{2(0.5+0.5)} = \frac{0.25}{2.0} = 0.125 \text{ m}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 열확산율 및 Ra 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\alpha = \frac{\nu}{\text{Pr}} = \frac{1.77 \times 10^{-5}}{0.71} = 2.493 \times 10^{-5} \text{ m}^2/\text{s}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_{L_c} = \frac{9.81 \times \frac{1}{320.5} \times 45 \times (0.125)^3}{1.77 \times 10^{-5} \times 2.493 \times 10^{-5}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{9.81 \times 3.120 \times 10^{-3} \times 45 \times 1.953 \times 10^{-3}}{4.413 \times 10^{-10}} = \frac{2.690 \times 10^{-3}}{4.413 \times 10^{-10}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_{L_c} = 6.10 \times 10^6" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 상면 가열 상관식 적용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="10^4 < \text{Ra} < 10^7" /> 범위에서 상면 가열:
            </p>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_{L_c} = 0.54 \, \text{Ra}_{L_c}^{1/4}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: Nu 및 h 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_{L_c}^{1/4} = (6.10 \times 10^6)^{0.25} = 49.7" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_{L_c} = 0.54 \times 49.7 = 26.8" display />
            </div>
            <div className="text-center py-2">
              <Math tex="h = \frac{26.8 \times 0.0274}{0.125} = 5.88 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\overline{\text{Nu}}_{L_c} = 26.8" display />
        <Math tex="h = 5.88 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          상면 가열 시 부력이 유동을 촉진하여 열전달이 활발합니다. 문제 4(하면 가열)와 비교해 보세요.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Horizontal Plate (Heated Down)",
    topic: "수평판 하면 가열",
    topicColor: "amber",
    problem: (
      <p>
        문제 3과 동일한 0.5 m × 0.5 m 수평 가열판에서 가열면이 아래를 향하고 있습니다(heated surface facing down).
        <Math tex="T_s = 70" />°C, <Math tex="T_\infty = 25" />°C일 때 평균 열전달 계수를 구하고,
        상면 가열(문제 3)과 비교하시오.
      </p>
    ),
    given: [
      "판 크기: 0.5 m × 0.5 m",
      "Ts = 70°C, T∞ = 25°C → ΔT = 45 K",
      "Tf = 47.5°C ≈ 320.5 K",
      "ν = 1.77 × 10⁻⁵ m²/s, k = 0.0274 W/(m·K)",
      "Pr = 0.71, β = 1/320.5 K⁻¹",
      "Lc = 0.125 m, Ra = 6.10 × 10⁶ (문제 3과 동일)",
    ],
    find: "h [W/(m²·K)] (하면 가열) 및 상면 가열과의 비교",
    steps: [
      {
        label: "Step 1: 하면 가열 상관식 확인",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="10^5 < \text{Ra} < 10^{11}" /> 범위에서 하면 가열:
            </p>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_{L_c} = 0.27 \, \text{Ra}_{L_c}^{1/4}" display />
            </div>
            <p className="text-gray-400 mt-2">
              하면 가열에서는 부력이 유동을 억제하여 계수(0.27)가 상면(0.54)의 절반입니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 2: Ra^(1/4) 값 (문제 3과 동일)",
        content: (
          <div className="text-center py-2">
            <Math tex="\text{Ra}_{L_c}^{1/4} = (6.10 \times 10^6)^{0.25} = 49.7" display />
          </div>
        ),
      },
      {
        label: "Step 3: Nu 및 h 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_{L_c} = 0.27 \times 49.7 = 13.4" display />
            </div>
            <div className="text-center py-2">
              <Math tex="h = \frac{13.4 \times 0.0274}{0.125} = 2.94 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 상면 가열과 비교",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{h_{\text{down}}}{h_{\text{up}}} = \frac{2.94}{5.88} = 0.50" display />
            </div>
            <p className="text-gray-400 mt-2">
              하면 가열의 열전달 계수는 상면 가열의 정확히 절반입니다.
              이는 상관식 계수의 비율(0.27/0.54 = 0.5)에 해당합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="h_{\text{down}} = 2.94 \text{ W/(m}^2\text{·K)}" display />
        <Math tex="\frac{h_{\text{down}}}{h_{\text{up}}} = 0.50" display />
        <p className="text-sm text-gray-400 mt-2">
          하면 가열 시 뜨거운 공기가 판 아래에 갇혀 자연대류가 억제됩니다.
          열전달이 상면 가열의 절반 수준이므로, 방열 설계 시 가열면의 방향이 매우 중요합니다.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Horizontal Cylinder",
    topic: "수평 원통",
    topicColor: "cyan",
    problem: (
      <p>
        외경 <Math tex="D = 0.05" /> m인 수평 배관의 표면 온도가{" "}
        <Math tex="T_s = 120" />°C이고 주위 공기 온도가 <Math tex="T_\infty = 20" />°C입니다.
        막 온도 <Math tex="T_f = 70" />°C에서의 공기 물성치를 이용하여
        Churchill-Chu(원통) 상관식으로 평균 열전달 계수를 구하시오.
      </p>
    ),
    given: [
      "D = 0.05 m (수평 원통 외경)",
      "Ts = 120°C, T∞ = 20°C → ΔT = 100 K",
      "Tf = 70°C = 343 K",
      "ν = 2.0 × 10⁻⁵ m²/s, k = 0.0295 W/(m·K)",
      "Pr = 0.70, β = 1/343 K⁻¹",
    ],
    find: "Ra_D, Nu_D, h [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: 열확산율 및 Ra_D 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\alpha = \frac{\nu}{\text{Pr}} = \frac{2.0 \times 10^{-5}}{0.70} = 2.857 \times 10^{-5} \text{ m}^2/\text{s}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_D = \frac{g \beta \Delta T \, D^3}{\nu \alpha} = \frac{9.81 \times \frac{1}{343} \times 100 \times (0.05)^3}{2.0 \times 10^{-5} \times 2.857 \times 10^{-5}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{9.81 \times 2.915 \times 10^{-3} \times 100 \times 1.25 \times 10^{-4}}{5.714 \times 10^{-10}} = \frac{3.575 \times 10^{-4}}{5.714 \times 10^{-10}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_D = 6.26 \times 10^5" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 수평 원통 Churchill-Chu 상관식",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_D = \left\{ 0.60 + \frac{0.387 \, \text{Ra}_D^{1/6}}{\left[1 + (0.559/\text{Pr})^{9/16}\right]^{8/27}} \right\}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 각 항 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_D^{1/6} = (6.26 \times 10^5)^{1/6} = 9.25" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\left(\frac{0.559}{0.70}\right)^{9/16} = (0.799)^{0.5625} = 0.881" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\left[1 + 0.881\right]^{8/27} = (1.881)^{0.2963} = 1.206" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: Nu_D 및 h 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_D = \left\{ 0.60 + \frac{0.387 \times 9.25}{1.206} \right\}^2 = \left\{ 0.60 + 2.97 \right\}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= (3.57)^2 = 12.7" display />
            </div>
            <div className="text-center py-2">
              <Math tex="h = \frac{\overline{\text{Nu}}_D \cdot k}{D} = \frac{12.7 \times 0.0295}{0.05} = 7.49 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\text{Ra}_D = 6.26 \times 10^5" display />
        <Math tex="\overline{\text{Nu}}_D = 12.7" display />
        <Math tex="h = 7.49 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          수평 원통의 상관식은 수직 평판과 구조가 유사하나, 상수(0.60)와 Pr 항(0.559)이 다릅니다.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Sphere",
    topic: "구 자연대류",
    topicColor: "purple",
    problem: (
      <p>
        직경 <Math tex="D = 0.1" /> m인 구의 표면 온도가 <Math tex="T_s = 80" />°C이고
        주위 공기 온도가 <Math tex="T_\infty = 20" />°C입니다.
        막 온도 <Math tex="T_f = 50" />°C에서의 공기 물성치를 이용하여
        구에 대한 자연대류 열전달 계수를 구하시오.
      </p>
    ),
    given: [
      "D = 0.1 m (구 직경)",
      "Ts = 80°C, T∞ = 20°C → ΔT = 60 K",
      "Tf = 50°C = 323 K",
      "ν = 1.8 × 10⁻⁵ m²/s, k = 0.028 W/(m·K)",
      "Pr = 0.71, β = 1/323 K⁻¹",
    ],
    find: "Ra_D, Nu_D, h [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: Ra_D 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\alpha = \frac{\nu}{\text{Pr}} = \frac{1.8 \times 10^{-5}}{0.71} = 2.535 \times 10^{-5} \text{ m}^2/\text{s}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_D = \frac{9.81 \times \frac{1}{323} \times 60 \times (0.1)^3}{1.8 \times 10^{-5} \times 2.535 \times 10^{-5}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{9.81 \times 3.096 \times 10^{-3} \times 60 \times 10^{-3}}{4.563 \times 10^{-10}} = \frac{1.822 \times 10^{-3}}{4.563 \times 10^{-10}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_D = 3.99 \times 10^6" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 구에 대한 상관식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Churchill 상관식 (구):</p>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_D = 2 + \frac{0.589 \, \text{Ra}_D^{1/4}}{\left[1 + (0.469/\text{Pr})^{9/16}\right]^{4/9}}" display />
            </div>
            <p className="text-gray-400 mt-2">
              <Math tex="\text{Ra}_D \leq 10^{11}" /> 조건에서 유효합니다. 앞의 상수 2는 전도 극한(Ra→0)에 해당합니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: 각 항 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_D^{1/4} = (3.99 \times 10^6)^{0.25} = 44.7" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\left(\frac{0.469}{0.71}\right)^{9/16} = (0.661)^{0.5625} = 0.792" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\left[1 + 0.792\right]^{4/9} = (1.792)^{0.4444} = 1.296" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: Nu_D 및 h 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_D = 2 + \frac{0.589 \times 44.7}{1.296} = 2 + \frac{26.33}{1.296}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 2 + 20.3 = 22.3" display />
            </div>
            <div className="text-center py-2">
              <Math tex="h = \frac{22.3 \times 0.028}{0.1} = 6.25 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\text{Ra}_D = 3.99 \times 10^6" display />
        <Math tex="\overline{\text{Nu}}_D = 22.3" display />
        <Math tex="h = 6.25 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          구의 상관식에서 Nu = 2는 정지 유체에서의 전도에 의한 열전달(Ra→0 극한)을 의미합니다.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Vertical Enclosure",
    topic: "수직 밀폐 공간",
    topicColor: "emerald",
    problem: (
      <p>
        높이 <Math tex="H = 0.5" /> m, 간격 <Math tex="L = 0.02" /> m인 두 수직 평판 사이의
        밀폐 공간이 공기로 채워져 있습니다.
        고온 벽면 <Math tex="T_1 = 60" />°C, 저온 벽면 <Math tex="T_2 = 20" />°C일 때,
        밀폐 공간의 Nusselt 수와 단위면적당 열전달률을 구하시오.
      </p>
    ),
    given: [
      "H = 0.5 m (높이), L = 0.02 m (간격)",
      "T₁ = 60°C, T₂ = 20°C → ΔT = 40 K",
      "Tf = 40°C = 313 K",
      "ν = 1.7 × 10⁻⁵ m²/s, k = 0.027 W/(m·K)",
      "Pr = 0.71, β = 1/313 K⁻¹",
    ],
    find: "Nu_L, q/A [W/m²]",
    steps: [
      {
        label: "Step 1: 종횡비(H/L) 및 Ra_L 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{H}{L} = \frac{0.5}{0.02} = 25" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\alpha = \frac{\nu}{\text{Pr}} = \frac{1.7 \times 10^{-5}}{0.71} = 2.394 \times 10^{-5} \text{ m}^2/\text{s}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_L = \frac{9.81 \times \frac{1}{313} \times 40 \times (0.02)^3}{1.7 \times 10^{-5} \times 2.394 \times 10^{-5}} = \frac{9.81 \times 3.195 \times 10^{-3} \times 40 \times 8 \times 10^{-6}}{4.070 \times 10^{-10}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{1.003 \times 10^{-5}}{4.070 \times 10^{-10}} = 2.46 \times 10^4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 적용 가능한 밀폐 공간 상관식 선택",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="10 < H/L < 40" />, <Math tex="1 < \text{Pr} < 2 \times 10^4" /> (Pr=0.71은 근사 적용),{" "}
              <Math tex="10^4 < \text{Ra}_L < 10^7" /> 범위에서:
            </p>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_L = 0.42 \, \text{Ra}_L^{1/4} \, \text{Pr}^{0.012} \left(\frac{H}{L}\right)^{-0.3}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 각 항 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_L^{1/4} = (2.46 \times 10^4)^{0.25} = 12.53" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Pr}^{0.012} = (0.71)^{0.012} = 0.996 \approx 1" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\left(\frac{H}{L}\right)^{-0.3} = (25)^{-0.3} = 0.381" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: Nu 및 q/A 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_L = 0.42 \times 12.53 \times 0.996 \times 0.381 = 2.00" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\frac{q}{A} = \overline{\text{Nu}}_L \cdot \frac{k}{L} \cdot \Delta T = 2.00 \times \frac{0.027}{0.02} \times 40 = 108 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 순수 전도와 비교",
        content: (
          <div>
            <p className="text-gray-400 mb-2">대류가 없을 때(순수 전도)의 열유속:</p>
            <div className="text-center py-2">
              <Math tex="\frac{q}{A}\bigg|_{\text{cond}} = \frac{k \, \Delta T}{L} = \frac{0.027 \times 40}{0.02} = 54 \text{ W/m}^2" display />
            </div>
            <p className="text-gray-400 mt-2">
              Nu = 2.00이므로 자연대류에 의해 순수 전도 대비 2배의 열이 전달됩니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\overline{\text{Nu}}_L = 2.00" display />
        <Math tex="q/A = 108 \text{ W/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          밀폐 공간에서 Nu &gt; 1이면 대류가 전도보다 우세합니다.
          이중 유리창 등에서 공기층 두께를 최적화하여 단열 성능을 높입니다.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "Rayleigh Number Significance",
    topic: "Ra 수 해석",
    topicColor: "orange",
    problem: (
      <p>
        동일한 온도 차 <Math tex="\Delta T = 30" /> K, 특성길이 <Math tex="L = 0.3" /> m 조건에서
        공기와 물의 Rayleigh 수를 비교하시오. 공기는 이상기체로 가정하여{" "}
        <Math tex="\beta = 1/T_f" />를 사용하고, 물의 체적 팽창 계수는{" "}
        <Math tex="\beta_w = 3.85 \times 10^{-4}" /> K<sup>-1</sup>으로 주어집니다.
        Ra 수의 차이가 자연대류에 미치는 영향을 논의하시오.
      </p>
    ),
    given: [
      "ΔT = 30 K, L = 0.3 m",
      "공기: ν = 1.6 × 10⁻⁵ m²/s, α = 2.25 × 10⁻⁵ m²/s, β = 1/313 K⁻¹",
      "물: ν = 8.0 × 10⁻⁷ m²/s, α = 1.5 × 10⁻⁷ m²/s, β = 3.85 × 10⁻⁴ K⁻¹",
    ],
    find: "Ra_air, Ra_water, 비교 분석",
    steps: [
      {
        label: "Step 1: 공기의 Ra 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_{\text{air}} = \frac{g \beta_{\text{air}} \Delta T \, L^3}{\nu_{\text{air}} \, \alpha_{\text{air}}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{9.81 \times 3.195 \times 10^{-3} \times 30 \times (0.3)^3}{1.6 \times 10^{-5} \times 2.25 \times 10^{-5}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{9.81 \times 3.195 \times 10^{-3} \times 30 \times 0.027}{3.6 \times 10^{-10}} = \frac{2.539 \times 10^{-2}}{3.6 \times 10^{-10}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_{\text{air}} = 7.05 \times 10^7" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 물의 Ra 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_{\text{water}} = \frac{9.81 \times 3.85 \times 10^{-4} \times 30 \times (0.3)^3}{8.0 \times 10^{-7} \times 1.5 \times 10^{-7}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{9.81 \times 3.85 \times 10^{-4} \times 30 \times 0.027}{1.2 \times 10^{-13}} = \frac{3.060 \times 10^{-3}}{1.2 \times 10^{-13}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_{\text{water}} = 2.55 \times 10^{10}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 비교 분석",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{\text{Ra}_{\text{water}}}{\text{Ra}_{\text{air}}} = \frac{2.55 \times 10^{10}}{7.05 \times 10^7} \approx 362" display />
            </div>
            <p className="text-gray-400 mt-2">물의 Ra 수가 공기보다 약 360배 크며, 이는 다음 두 가지 요인 때문입니다:</p>
          </div>
        ),
      },
      {
        label: "Step 4: 물리적 해석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <strong>Ra 분모 비교</strong> (<Math tex="\nu \alpha" />):
            </p>
            <div className="text-center py-2">
              <Math tex="\frac{(\nu\alpha)_{\text{air}}}{(\nu\alpha)_{\text{water}}} = \frac{3.6 \times 10^{-10}}{1.2 \times 10^{-13}} = 3000" display />
            </div>
            <p className="text-gray-400 mt-2">
              물의 <Math tex="\beta" />가 공기의 약 1/8.3이지만,{" "}
              <Math tex="\nu\alpha" />가 3000배 작아 전체적으로 Ra가 훨씬 큽니다.
              따라서 물에서 자연대류가 훨씬 강하고, 동일 조건에서 이미 난류 영역에 진입합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\text{Ra}_{\text{air}} = 7.05 \times 10^7 \quad (\text{층류})" display />
        <Math tex="\text{Ra}_{\text{water}} = 2.55 \times 10^{10} \quad (\text{난류})" display />
        <Math tex="\text{Ra}_{\text{water}} / \text{Ra}_{\text{air}} \approx 362" display />
        <p className="text-sm text-gray-400 mt-2">
          물은 낮은 동점성 계수와 열확산율로 인해 동일 조건에서 자연대류가 훨씬 활발합니다.
          이는 수냉식 냉각이 공냉식보다 효과적인 핵심 이유 중 하나입니다.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Mixed Convection",
    topic: "혼합대류 판정",
    topicColor: "pink",
    problem: (
      <p>
        높이 <Math tex="L = 0.3" /> m인 수직 가열판의 표면 온도 <Math tex="T_s = 50" />°C,
        주위 공기 온도 <Math tex="T_\infty = 20" />°C이며, 공기가 평판을 따라{" "}
        <Math tex="u_\infty = 0.5" /> m/s로 유동합니다.
        Grashof 수와 Reynolds 수를 계산하고, <Math tex="\text{Gr}/\text{Re}^2" /> 비를 통해
        지배적인 대류 모드(자연, 강제, 혼합)를 판정하시오.
      </p>
    ),
    given: [
      "L = 0.3 m, Ts = 50°C, T∞ = 20°C → ΔT = 30 K",
      "Tf = 35°C = 308 K",
      "u∞ = 0.5 m/s",
      "ν = 1.65 × 10⁻⁵ m²/s",
      "β = 1/308 = 3.247 × 10⁻³ K⁻¹",
    ],
    find: "Gr, Re, Gr/Re², 대류 모드 판정",
    steps: [
      {
        label: "Step 1: Grashof 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{Gr}_L = \frac{g \beta \Delta T \, L^3}{\nu^2}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{9.81 \times 3.247 \times 10^{-3} \times 30 \times (0.3)^3}{(1.65 \times 10^{-5})^2}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{9.81 \times 3.247 \times 10^{-3} \times 30 \times 0.027}{2.7225 \times 10^{-10}} = \frac{2.580 \times 10^{-2}}{2.7225 \times 10^{-10}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Gr}_L = 9.48 \times 10^7" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Reynolds 수 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\text{Re}_L = \frac{u_\infty L}{\nu} = \frac{0.5 \times 0.3}{1.65 \times 10^{-5}} = \frac{0.15}{1.65 \times 10^{-5}} = 9{,}091" display />
          </div>
        ),
      },
      {
        label: "Step 3: Gr/Re² 비 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{Re}_L^2 = (9{,}091)^2 = 8.26 \times 10^7" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\frac{\text{Gr}_L}{\text{Re}_L^2} = \frac{9.48 \times 10^7}{8.26 \times 10^7} = 1.15" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 대류 모드 판정",
        content: (
          <div>
            <p className="text-gray-400 mb-2">판정 기준:</p>
            <div className="space-y-2 text-gray-400">
              <p><Math tex="\text{Gr}/\text{Re}^2 \gg 1" />: 자연대류 지배</p>
              <p><Math tex="\text{Gr}/\text{Re}^2 \ll 1" />: 강제대류 지배</p>
              <p><Math tex="\text{Gr}/\text{Re}^2 \approx 1" />: 혼합대류</p>
            </div>
            <div className="text-center py-3">
              <Math tex="\frac{\text{Gr}_L}{\text{Re}_L^2} = 1.15 \approx 1 \quad \Rightarrow \quad \textbf{혼합대류 (Mixed Convection)}" display />
            </div>
            <p className="text-gray-400 mt-2">
              자연대류와 강제대류의 효과가 동일한 차수이므로, 두 효과를 모두 고려해야 합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\text{Gr}_L = 9.48 \times 10^7, \quad \text{Re}_L = 9{,}091" display />
        <Math tex="\frac{\text{Gr}_L}{\text{Re}_L^2} = 1.15 \approx 1 \quad \Rightarrow \quad \text{혼합대류}" display />
        <p className="text-sm text-gray-400 mt-2">
          혼합대류에서는 <Math tex="\text{Nu}^n = \text{Nu}_{\text{forced}}^n \pm \text{Nu}_{\text{natural}}^n" /> (n ≈ 3)으로 결합합니다.
          부력 방향에 따라 +/- 부호가 결정됩니다 (보조류: +, 대향류: -).
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "Inclined Plate",
    topic: "경사판",
    topicColor: "teal",
    problem: (
      <p>
        수직에서 <Math tex="\theta = 30°" /> 기울어진 가열판의 길이 <Math tex="L = 0.4" /> m,
        표면 온도 <Math tex="T_s = 90" />°C, 주위 온도 <Math tex="T_\infty = 20" />°C입니다.
        막 온도 <Math tex="T_f = 55" />°C에서의 공기 물성치를 이용하여,
        중력 보정(<Math tex="g \cos\theta" />)을 적용한 열전달 계수를 구하시오.
      </p>
    ),
    given: [
      "θ = 30° (수직 기준), L = 0.4 m",
      "Ts = 90°C, T∞ = 20°C → ΔT = 70 K",
      "Tf = 55°C = 328 K",
      "ν = 1.85 × 10⁻⁵ m²/s, k = 0.0285 W/(m·K)",
      "Pr = 0.71, β = 1/328 K⁻¹",
    ],
    find: "Ra (보정), Nu, h [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: 유효 중력 가속도",
        content: (
          <div>
            <p className="text-gray-400 mb-2">경사판에서는 중력의 판 방향 성분만 부력을 유발합니다:</p>
            <div className="text-center py-2">
              <Math tex="g_{\text{eff}} = g \cos\theta = 9.81 \times \cos(30°) = 9.81 \times 0.866 = 8.50 \text{ m/s}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 열확산율 및 보정 Ra 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\alpha = \frac{\nu}{\text{Pr}} = \frac{1.85 \times 10^{-5}}{0.71} = 2.606 \times 10^{-5} \text{ m}^2/\text{s}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_L = \frac{g_{\text{eff}} \, \beta \, \Delta T \, L^3}{\nu \alpha} = \frac{8.50 \times \frac{1}{328} \times 70 \times (0.4)^3}{1.85 \times 10^{-5} \times 2.606 \times 10^{-5}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{8.50 \times 3.049 \times 10^{-3} \times 70 \times 0.064}{4.821 \times 10^{-10}} = \frac{0.1161}{4.821 \times 10^{-10}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_L = 2.41 \times 10^8" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: Churchill-Chu 상관식 적용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">경사판에서 g를 g·cos(θ)로 대체한 후 수직 평판 상관식을 사용합니다:</p>
            <div className="text-center py-2">
              <Math tex="\text{Ra}^{1/6} = (2.41 \times 10^8)^{1/6} = 24.9" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\left[1 + (0.492/0.71)^{9/16}\right]^{8/27} = 1.193" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: Nu 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{\text{Nu}}_L = \left\{ 0.825 + \frac{0.387 \times 24.9}{1.193} \right\}^2 = \left\{ 0.825 + 8.08 \right\}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= (8.91)^2 = 79.4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 열전달 계수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="h = \frac{\overline{\text{Nu}}_L \cdot k}{L} = \frac{79.4 \times 0.0285}{0.4} = 5.66 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 6: 수직판과 비교",
        content: (
          <div>
            <p className="text-gray-400 mb-2">만약 수직(θ=0°)이라면 g_eff = 9.81이므로:</p>
            <div className="text-center py-2">
              <Math tex="\text{Ra}_{\text{vertical}} = \text{Ra} \times \frac{g}{g\cos\theta} = 2.41 \times 10^8 \times \frac{9.81}{8.50} = 2.78 \times 10^8" display />
            </div>
            <p className="text-gray-400 mt-2">
              경사(30°)에 의해 Ra가 약 13.4% 감소하여 열전달이 다소 줄어듭니다.
              경사각이 커질수록(수평에 가까울수록) 자연대류 효과가 약해집니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\text{Ra}_L = 2.41 \times 10^8 \quad (g\cos\theta \text{ 보정 적용})" display />
        <Math tex="\overline{\text{Nu}}_L = 79.4" display />
        <Math tex="h = 5.66 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          경사판의 자연대류는 g·cos(θ)로 보정합니다. 이 방법은 상면 가열(θ &lt; 60°)에서 유효합니다.
          θ &gt; 60°이면 수평판 상관식이 더 적합합니다.
        </p>
      </div>
    ),
  },
];

const tips = [
  { title: "1. Ra 수 계산", description: "Ra = gβ(Ts-T∞)L³/(να). 이상기체는 β=1/Tf(K)입니다." },
  { title: "2. 형상별 상관식", description: "수직판, 수평판(상면/하면), 원통, 구 각각 다른 상관식을 사용합니다." },
  { title: "3. 특성길이 정의", description: "수직판: L=높이, 수평판: L=A/P, 원통/구: L=D." },
  { title: "4. 혼합대류 판정", description: "Gr/Re² ≈ 1이면 혼합대류. >>1이면 자연대류, <<1이면 강제대류 지배." },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={12} problems={problems} tips={tips} />;
}

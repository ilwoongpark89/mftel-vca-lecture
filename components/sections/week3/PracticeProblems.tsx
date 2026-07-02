"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  // Problem 1: Plane Wall Conduction
  {
    id: 1,
    title: "Plane Wall Conduction",
    topic: "Plane Wall",
    topicColor: "red",
    problem: (
      <p>
        두께 <Math tex="L = 0.3" /> m, 열전도율 <Math tex="k = 0.72" /> W/(m·K)인 평판벽의
        양쪽 표면 온도가 각각 <Math tex="T_1 = 25" />°C와 <Math tex="T_2 = -15" />°C입니다.
        정상상태에서 벽을 통과하는 열유속 <Math tex="q''" />과 단위 면적당 열저항 <Math tex="R''" />을 구하시오.
      </p>
    ),
    given: [
      "L = 0.3 m",
      "k = 0.72 W/(m·K)",
      "T₁ = 25°C",
      "T₂ = -15°C",
    ],
    find: "q'' [W/m²] 및 R'' [m²·K/W]",
    steps: [
      {
        label: "Step 1: 평판 열저항 공식 선택",
        content: (
          <div>
            <p className="text-gray-400 mb-2">1D 정상상태 평판 전도에서 단위 면적당 열저항:</p>
            <div className="text-center py-2">
              <Math tex="R'' = \frac{L}{k}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 열저항 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="R'' = \frac{L}{k} = \frac{0.3}{0.72} = 0.4167 \text{ m}^2\text{·K/W}" display />
          </div>
        ),
      },
      {
        label: "Step 3: 열유속 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Fourier 법칙으로부터 열유속:</p>
            <div className="text-center py-2">
              <Math tex="q'' = \frac{T_1 - T_2}{R''} = \frac{\Delta T}{L/k} = \frac{k \cdot \Delta T}{L}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 열유속 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="q'' = \frac{0.72 \times (25 - (-15))}{0.3} = \frac{0.72 \times 40}{0.3} = \frac{28.8}{0.3} = 96 \text{ W/m}^2" display />
          </div>
        ),
      },
      {
        label: "Step 5: 결과 검증",
        content: (
          <div>
            <p className="text-gray-400 mb-2">열저항으로부터 다시 확인:</p>
            <div className="text-center py-2">
              <Math tex="q'' = \frac{\Delta T}{R''} = \frac{40}{0.4167} = 96.0 \text{ W/m}^2 \;\checkmark" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q'' = 96 \text{ W/m}^2" display />
        <Math tex="R'' = 0.417 \text{ m}^2\text{·K/W}" display />
        <p className="text-sm text-gray-400 mt-2">
          양수 열유속은 열이 고온(25°C)에서 저온(-15°C)으로 흐름을 의미합니다.
        </p>
      </div>
    ),
  },

  // Problem 2: Plane Wall + Convection on Both Sides
  {
    id: 2,
    title: "Plane Wall with Double Convection",
    topic: "Plane Wall + Convection",
    topicColor: "green",
    problem: (
      <p>
        두께 <Math tex="L = 0.15" /> m, 열전도율 <Math tex="k = 1.0" /> W/(m·K)인 평판벽의
        양측에 대류가 있습니다. 내측 유체: <Math tex="T_{{\infty,1}} = 90" />°C, <Math tex="h_1 = 40" /> W/(m²·K).
        외측 유체: <Math tex="T_{{\infty,2}} = 20" />°C, <Math tex="h_2 = 20" /> W/(m²·K).
        열유속과 양쪽 표면 온도를 구하시오.
      </p>
    ),
    given: [
      "L = 0.15 m, k = 1.0 W/(m·K)",
      "T∞,1 = 90°C, h₁ = 40 W/(m²·K)",
      "T∞,2 = 20°C, h₂ = 20 W/(m²·K)",
    ],
    find: "q'' [W/m²], Ts,1, Ts,2",
    steps: [
      {
        label: "Step 1: 열저항 네트워크 설정",
        content: (
          <div>
            <p className="text-gray-400 mb-2">직렬 열저항: 대류(내측) + 전도 + 대류(외측)</p>
            <div className="text-center py-2">
              <Math tex="R''_{\text{total}} = \frac{1}{h_1} + \frac{L}{k} + \frac{1}{h_2}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 각 열저항 계산",
        content: (
          <div className="space-y-2">
            <div className="text-center py-1">
              <Math tex="R''_{\text{conv,1}} = \frac{1}{h_1} = \frac{1}{40} = 0.025 \text{ m}^2\text{·K/W}" />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{\text{cond}} = \frac{L}{k} = \frac{0.15}{1.0} = 0.150 \text{ m}^2\text{·K/W}" />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{\text{conv,2}} = \frac{1}{h_2} = \frac{1}{20} = 0.050 \text{ m}^2\text{·K/W}" />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 총 열저항 및 열유속",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R''_{\text{total}} = 0.025 + 0.150 + 0.050 = 0.225 \text{ m}^2\text{·K/W}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q'' = \frac{T_{\infty,1} - T_{\infty,2}}{R''_{\text{total}}} = \frac{90 - 20}{0.225} = \frac{70}{0.225} = 311.1 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 내측 표면 온도 Ts,1",
        content: (
          <div>
            <p className="text-gray-400 mb-2">내측 대류에서 온도 강하:</p>
            <div className="text-center py-2">
              <Math tex="T_{s,1} = T_{\infty,1} - \frac{q''}{h_1} = 90 - \frac{311.1}{40} = 90 - 7.78 = 82.2°\text{C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 외측 표면 온도 Ts,2",
        content: (
          <div>
            <p className="text-gray-400 mb-2">외측 대류에서:</p>
            <div className="text-center py-2">
              <Math tex="T_{s,2} = T_{\infty,2} + \frac{q''}{h_2} = 20 + \frac{311.1}{20} = 20 + 15.6 = 35.6°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q'' = 311.1 \text{ W/m}^2" display />
        <Math tex="T_{s,1} = 82.2°\text{C}, \quad T_{s,2} = 35.6°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          전도 저항이 총 저항의 67%를 차지 (0.150/0.225). 외측 대류 저항(0.050)이 내측(0.025)보다 크므로 외측 온도 강하가 더 큽니다.
        </p>
      </div>
    ),
  },

  // Problem 3: Cylindrical Wall (Pipe)
  {
    id: 3,
    title: "Cylindrical Pipe Conduction",
    topic: "Cylindrical Wall",
    topicColor: "blue",
    problem: (
      <p>
        내경 <Math tex="r_1 = 0.025" /> m, 외경 <Math tex="r_2 = 0.05" /> m인 원통형 파이프가 있습니다.
        열전도율 <Math tex="k = 15" /> W/(m·K), 내벽 온도 <Math tex="T_1 = 100" />°C,
        외벽 온도 <Math tex="T_2 = 60" />°C, 파이프 길이 <Math tex="L = 1" /> m일 때,
        열전달률 <Math tex="q" />를 계산하시오.
      </p>
    ),
    given: [
      "r₁ = 0.025 m, r₂ = 0.05 m",
      "k = 15 W/(m·K)",
      "T₁ = 100°C, T₂ = 60°C",
      "L = 1 m",
    ],
    find: "q [W]",
    steps: [
      {
        label: "Step 1: 원통벽 열저항 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">1D 반경 방향 정상상태 전도에서 원통벽 열저항:</p>
            <div className="text-center py-2">
              <Math tex="R_{\text{cyl}} = \frac{\ln(r_2/r_1)}{2\pi k L}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 반경비 및 자연로그 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\frac{r_2}{r_1} = \frac{0.05}{0.025} = 2, \quad \ln(2) = 0.6931" display />
          </div>
        ),
      },
      {
        label: "Step 3: 열저항 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="R_{\text{cyl}} = \frac{0.6931}{2\pi \times 15 \times 1} = \frac{0.6931}{94.25} = 7.353 \times 10^{-3} \text{ K/W}" display />
          </div>
        ),
      },
      {
        label: "Step 4: 열전달률 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="q = \frac{T_1 - T_2}{R_{\text{cyl}}} = \frac{100 - 60}{7.353 \times 10^{-3}} = \frac{40}{7.353 \times 10^{-3}}" display />
          </div>
        ),
      },
      {
        label: "Step 5: 최종 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q = 5441 \text{ W}" display />
            </div>
            <p className="text-gray-400 mt-2">대안 직접 공식: <Math tex="q = \frac{2\pi k L (T_1 - T_2)}{\ln(r_2/r_1)} = \frac{2\pi(15)(1)(40)}{\ln 2} = \frac{3770}{0.6931} = 5441 \text{ W}" /></p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q = 5441 \text{ W}" display />
        <p className="text-sm text-gray-400 mt-2">
          원통 좌표계에서는 온도가 반경 방향으로 대수적(logarithmic)으로 분포합니다.
        </p>
      </div>
    ),
  },

  // Problem 4: Spherical Shell Conduction
  {
    id: 4,
    title: "Spherical Shell Conduction",
    topic: "Spherical Shell",
    topicColor: "amber",
    problem: (
      <p>
        내경 <Math tex="r_1 = 0.05" /> m, 외경 <Math tex="r_2 = 0.15" /> m인 구형 셸의
        열전도율이 <Math tex="k = 40" /> W/(m·K)입니다. 내면 온도 <Math tex="T_1 = 300" />°C,
        외면 온도 <Math tex="T_2 = 100" />°C일 때, 열전달률 <Math tex="q" />를 구하시오.
      </p>
    ),
    given: [
      "r₁ = 0.05 m, r₂ = 0.15 m",
      "k = 40 W/(m·K)",
      "T₁ = 300°C, T₂ = 100°C",
    ],
    find: "q [W]",
    steps: [
      {
        label: "Step 1: 구형 셸 열저항 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">1D 반경 방향 정상상태에서 구형 셸 열저항:</p>
            <div className="text-center py-2">
              <Math tex="R_{\text{sph}} = \frac{1}{4\pi k}\left(\frac{1}{r_1} - \frac{1}{r_2}\right)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 역반경 차이 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\frac{1}{r_1} - \frac{1}{r_2} = \frac{1}{0.05} - \frac{1}{0.15} = 20 - 6.667 = 13.333 \text{ m}^{-1}" display />
          </div>
        ),
      },
      {
        label: "Step 3: 열저항 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="R_{\text{sph}} = \frac{13.333}{4\pi \times 40} = \frac{13.333}{502.65} = 0.02653 \text{ K/W}" display />
          </div>
        ),
      },
      {
        label: "Step 4: 열전달률 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="q = \frac{T_1 - T_2}{R_{\text{sph}}} = \frac{300 - 100}{0.02653} = \frac{200}{0.02653}" display />
          </div>
        ),
      },
      {
        label: "Step 5: 최종 결과",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q = 7540 \text{ W}" display />
            </div>
            <p className="text-gray-400 mt-2">대안 공식: <Math tex="q = \frac{4\pi k (T_1 - T_2)}{1/r_1 - 1/r_2} = \frac{4\pi(40)(200)}{13.333} = 7540 \text{ W}" /></p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q = 7540 \text{ W}" display />
        <p className="text-sm text-gray-400 mt-2">
          구형 좌표계에서 온도는 <Math tex="T(r) \propto 1/r" /> 형태로 분포합니다.
        </p>
      </div>
    ),
  },

  // Problem 5: Composite Plane Wall (3 layers + convection)
  {
    id: 5,
    title: "Three-Layer Composite Wall",
    topic: "Composite Plane Wall",
    topicColor: "cyan",
    problem: (
      <p>
        3층 복합벽이 있습니다: 벽돌(<Math tex="L_1 = 0.2" /> m, <Math tex="k_1 = 0.72" /> W/(m·K)),
        단열재(<Math tex="L_2 = 0.08" /> m, <Math tex="k_2 = 0.04" /> W/(m·K)),
        목재(<Math tex="L_3 = 0.03" /> m, <Math tex="k_3 = 0.12" /> W/(m·K)).
        내부: <Math tex="T_{{\infty,i}} = 22" />°C, <Math tex="h_i = 10" /> W/(m²·K).
        외부: <Math tex="T_{{\infty,o}} = -15" />°C, <Math tex="h_o = 30" /> W/(m²·K).
        단위 면적당 열유속을 계산하시오.
      </p>
    ),
    given: [
      "벽돌: L₁ = 0.2 m, k₁ = 0.72 W/(m·K)",
      "단열재: L₂ = 0.08 m, k₂ = 0.04 W/(m·K)",
      "목재: L₃ = 0.03 m, k₃ = 0.12 W/(m·K)",
      "T∞,i = 22°C, h_i = 10 W/(m²·K)",
      "T∞,o = -15°C, h_o = 30 W/(m²·K)",
    ],
    find: "q'' [W/m²]",
    steps: [
      {
        label: "Step 1: 직렬 열저항 네트워크",
        content: (
          <div>
            <p className="text-gray-400 mb-2">대류(내측) → 벽돌 → 단열재 → 목재 → 대류(외측)의 직렬 열저항:</p>
            <div className="text-center py-2">
              <Math tex="R''_{\text{total}} = \frac{1}{h_i} + \frac{L_1}{k_1} + \frac{L_2}{k_2} + \frac{L_3}{k_3} + \frac{1}{h_o}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 대류 열저항 계산",
        content: (
          <div className="space-y-2">
            <div className="text-center py-1">
              <Math tex="R''_{\text{conv,i}} = \frac{1}{10} = 0.100 \text{ m}^2\text{·K/W}" />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{\text{conv,o}} = \frac{1}{30} = 0.0333 \text{ m}^2\text{·K/W}" />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 전도 열저항 계산",
        content: (
          <div className="space-y-2">
            <div className="text-center py-1">
              <Math tex="R''_{\text{brick}} = \frac{0.2}{0.72} = 0.278 \text{ m}^2\text{·K/W}" />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{\text{insul}} = \frac{0.08}{0.04} = 2.000 \text{ m}^2\text{·K/W}" />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{\text{wood}} = \frac{0.03}{0.12} = 0.250 \text{ m}^2\text{·K/W}" />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 총 열저항",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R''_{\text{total}} = 0.100 + 0.278 + 2.000 + 0.250 + 0.0333" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R''_{\text{total}} = 2.661 \text{ m}^2\text{·K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 열유속 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="q'' = \frac{T_{\infty,i} - T_{\infty,o}}{R''_{\text{total}}} = \frac{22 - (-15)}{2.661} = \frac{37}{2.661} = 13.9 \text{ W/m}^2" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q'' = 13.9 \text{ W/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          단열재가 총 열저항의 75.2%를 차지합니다 (2.000/2.661). 단열재의 낮은 열전도율이 열전달을 지배합니다.
        </p>
      </div>
    ),
  },

  // Problem 6: Composite Cylinder (Steel pipe + Insulation)
  {
    id: 6,
    title: "Insulated Steel Pipe",
    topic: "Composite Cylinder",
    topicColor: "purple",
    problem: (
      <p>
        강관 (내경 <Math tex="r_1 = 0.03" /> m, 외경 <Math tex="r_2 = 0.035" /> m, <Math tex="k_s = 50" /> W/(m·K))에
        보온재 (외경 <Math tex="r_3 = 0.085" /> m, <Math tex="k_{\text{ins}} = 0.05" /> W/(m·K))가 감싸져 있습니다.
        내측 유체: <Math tex="T_{{\infty,i}} = 150" />°C, <Math tex="h_i = 300" /> W/(m²·K).
        외측 공기: <Math tex="T_{{\infty,o}} = 25" />°C, <Math tex="h_o = 10" /> W/(m²·K).
        파이프 길이 <Math tex="L = 1" /> m당 열손실을 구하시오.
      </p>
    ),
    given: [
      "강관: r₁ = 0.03 m, r₂ = 0.035 m, k_s = 50 W/(m·K)",
      "보온재: r₃ = 0.085 m, k_ins = 0.05 W/(m·K)",
      "T∞,i = 150°C, h_i = 300 W/(m²·K)",
      "T∞,o = 25°C, h_o = 10 W/(m²·K)",
      "L = 1 m",
    ],
    find: "q [W] (per meter length)",
    steps: [
      {
        label: "Step 1: 원통 복합벽 열저항 네트워크",
        content: (
          <div>
            <p className="text-gray-400 mb-2">직렬: 내측 대류 → 강관 전도 → 보온재 전도 → 외측 대류</p>
            <div className="text-center py-2">
              <Math tex="R_{\text{total}} = \frac{1}{h_i 2\pi r_1 L} + \frac{\ln(r_2/r_1)}{2\pi k_s L} + \frac{\ln(r_3/r_2)}{2\pi k_{\text{ins}} L} + \frac{1}{h_o 2\pi r_3 L}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 내측 대류 열저항",
        content: (
          <div className="text-center py-2">
            <Math tex="R_{\text{conv,i}} = \frac{1}{300 \times 2\pi \times 0.03 \times 1} = \frac{1}{56.55} = 0.01768 \text{ K/W}" display />
          </div>
        ),
      },
      {
        label: "Step 3: 전도 열저항 계산",
        content: (
          <div className="space-y-3">
            <div className="text-center py-1">
              <Math tex="R_{\text{steel}} = \frac{\ln(0.035/0.03)}{2\pi \times 50 \times 1} = \frac{\ln(1.167)}{314.16} = \frac{0.1542}{314.16} = 4.91 \times 10^{-4} \text{ K/W}" display />
            </div>
            <div className="text-center py-1">
              <Math tex="R_{\text{ins}} = \frac{\ln(0.085/0.035)}{2\pi \times 0.05 \times 1} = \frac{\ln(2.429)}{0.3142} = \frac{0.8873}{0.3142} = 2.824 \text{ K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 외측 대류 열저항",
        content: (
          <div className="text-center py-2">
            <Math tex="R_{\text{conv,o}} = \frac{1}{10 \times 2\pi \times 0.085 \times 1} = \frac{1}{5.341} = 0.1872 \text{ K/W}" display />
          </div>
        ),
      },
      {
        label: "Step 5: 총 열저항 및 열전달률",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R_{\text{total}} = 0.01768 + 0.000491 + 2.824 + 0.1872 = 3.029 \text{ K/W}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q = \frac{T_{\infty,i} - T_{\infty,o}}{R_{\text{total}}} = \frac{150 - 25}{3.029} = \frac{125}{3.029} = 41.3 \text{ W}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q = 41.3 \text{ W (per meter length)}" display />
        <p className="text-sm text-gray-400 mt-2">
          보온재 열저항이 93.2% (2.824/3.029)로 지배적입니다. 강관 열저항은 무시할 수 있을 정도로 작습니다 (0.016%).
        </p>
      </div>
    ),
  },

  // Problem 7: Parallel Thermal Resistance (Thermal Bridging)
  {
    id: 7,
    title: "Parallel Resistance - Thermal Bridging",
    topic: "Parallel Resistance",
    topicColor: "emerald",
    problem: (
      <p>
        벽 단면에 steel stud (폭 8 cm, <Math tex="k_s = 50" /> W/(m·K))와
        fiberglass 단열재 (폭 40 cm, <Math tex="k_f = 0.038" /> W/(m·K))가 교대로 배열되어 있습니다.
        총 두께 <Math tex="L = 0.1" /> m이고 온도차 <Math tex="\Delta T = 35" />°C일 때,
        병렬 열저항을 이용하여 반복 단위(48 cm)에 대한 유효 열유속을 구하시오.
      </p>
    ),
    given: [
      "Steel stud: 폭 = 0.08 m, k_s = 50 W/(m·K)",
      "Fiberglass: 폭 = 0.40 m, k_f = 0.038 W/(m·K)",
      "총 두께 L = 0.1 m",
      "ΔT = 35°C",
      "반복 단위 폭 W = 0.48 m",
    ],
    find: "유효 열유속 q'' [W/m²]",
    steps: [
      {
        label: "Step 1: 병렬 열저항 개념",
        content: (
          <div>
            <p className="text-gray-400 mb-2">단위 높이(1 m)에서 반복 단위(0.48 m 폭)를 고려합니다. Steel stud와 fiberglass는 같은 온도차에 놓여 있으므로 병렬 열저항입니다.</p>
            <div className="text-center py-2">
              <Math tex="\frac{1}{R_{\text{parallel}}} = \frac{1}{R_{\text{steel}}} + \frac{1}{R_{\text{fiber}}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 각 경로의 열저항 계산",
        content: (
          <div className="space-y-2">
            <p className="text-gray-400 mb-2">단위 높이(H = 1 m)에서 각 경로 면적:</p>
            <div className="text-center py-1">
              <Math tex="A_{\text{steel}} = 0.08 \times 1 = 0.08 \text{ m}^2, \quad R_{\text{steel}} = \frac{L}{k_s A_s} = \frac{0.1}{50 \times 0.08} = 0.025 \text{ K/W}" />
            </div>
            <div className="text-center py-1">
              <Math tex="A_{\text{fiber}} = 0.40 \times 1 = 0.40 \text{ m}^2, \quad R_{\text{fiber}} = \frac{L}{k_f A_f} = \frac{0.1}{0.038 \times 0.40} = 6.579 \text{ K/W}" />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 병렬 합성 열저항",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{1}{R_{\text{eq}}} = \frac{1}{0.025} + \frac{1}{6.579} = 40.0 + 0.152 = 40.152 \text{ W/K}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R_{\text{eq}} = \frac{1}{40.152} = 0.02491 \text{ K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 총 열전달 및 유효 열유속",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q_{\text{module}} = \frac{\Delta T}{R_{\text{eq}}} = \frac{35}{0.02491} = 1405 \text{ W}" display />
            </div>
            <p className="text-gray-400 mb-2">반복 단위 면적: <Math tex="A_{\text{module}} = 0.48 \times 1 = 0.48 \text{ m}^2" /></p>
            <div className="text-center py-2">
              <Math tex="q''_{\text{eff}} = \frac{q_{\text{module}}}{A_{\text{module}}} = \frac{1405}{0.48} = 2927 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: Thermal Bridging 효과 분석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">만약 벽 전체가 fiberglass만으로 구성되었다면:</p>
            <div className="text-center py-2">
              <Math tex="q''_{\text{fiber only}} = \frac{k_f \cdot \Delta T}{L} = \frac{0.038 \times 35}{0.1} = 13.3 \text{ W/m}^2" display />
            </div>
            <p className="text-gray-400 mt-2">Steel stud가 전체의 17%만 차지하지만 열유속을 <strong className="text-white">220배</strong> 증가시킵니다 (thermal bridging).</p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q''_{\text{eff}} = 2927 \text{ W/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          높은 열전도율의 steel stud가 열 브릿지(thermal bridge)를 형성하여 단열 성능을 크게 저하시킵니다.
          실제 건축에서 thermal bridging 방지가 중요한 이유입니다.
        </p>
      </div>
    ),
  },

  // Problem 8: Contact Resistance
  {
    id: 8,
    title: "Contact Thermal Resistance",
    topic: "Contact Resistance",
    topicColor: "orange",
    problem: (
      <p>
        두 알루미늄 판 (<Math tex="L_1 = L_2 = 0.01" /> m, <Math tex="k = 200" /> W/(m·K))이 접합되어 있습니다.
        접촉 열저항 <Math tex="R''_{tc} = 3 \times 10^{-4}" /> m²·K/W입니다.
        한쪽 외면 온도 <Math tex="T_1 = 100" />°C, 다른 쪽 외면 온도 <Math tex="T_2 = 30" />°C일 때,
        접촉 저항이 있는 경우와 없는 경우의 열유속을 비교하시오.
      </p>
    ),
    given: [
      "L₁ = L₂ = 0.01 m",
      "k = 200 W/(m·K)",
      "R''_tc = 3 × 10⁻⁴ m²·K/W",
      "T₁ = 100°C, T₂ = 30°C",
    ],
    find: "q'' (접촉 저항 유/무)",
    steps: [
      {
        label: "Step 1: 접촉 저항 없는 경우",
        content: (
          <div>
            <p className="text-gray-400 mb-2">두 판의 전도 열저항만 존재:</p>
            <div className="text-center py-2">
              <Math tex="R''_{\text{without}} = \frac{L_1}{k} + \frac{L_2}{k} = \frac{0.01}{200} + \frac{0.01}{200} = 5 \times 10^{-5} + 5 \times 10^{-5} = 1.0 \times 10^{-4} \text{ m}^2\text{·K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 접촉 저항 없는 경우 열유속",
        content: (
          <div className="text-center py-2">
            <Math tex="q''_{\text{without}} = \frac{T_1 - T_2}{R''_{\text{without}}} = \frac{100 - 30}{1.0 \times 10^{-4}} = \frac{70}{1.0 \times 10^{-4}} = 700{,}000 \text{ W/m}^2" display />
          </div>
        ),
      },
      {
        label: "Step 3: 접촉 저항 있는 경우 총 열저항",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R''_{\text{with}} = \frac{L_1}{k} + R''_{tc} + \frac{L_2}{k} = 1.0 \times 10^{-4} + 3.0 \times 10^{-4}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R''_{\text{with}} = 4.0 \times 10^{-4} \text{ m}^2\text{·K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 접촉 저항 있는 경우 열유속",
        content: (
          <div className="text-center py-2">
            <Math tex="q''_{\text{with}} = \frac{70}{4.0 \times 10^{-4}} = 175{,}000 \text{ W/m}^2" display />
          </div>
        ),
      },
      {
        label: "Step 5: 비교 분석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">접촉 저항이 총 열저항에서 차지하는 비율:</p>
            <div className="text-center py-2">
              <Math tex="\frac{R''_{tc}}{R''_{\text{with}}} = \frac{3.0 \times 10^{-4}}{4.0 \times 10^{-4}} = 75\%" display />
            </div>
            <p className="text-gray-400 mt-2">열유속 감소율: <Math tex="\frac{700{,}000 - 175{,}000}{700{,}000} \times 100 = 75\%" /></p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q''_{\text{without}} = 700{,}000 \text{ W/m}^2" display />
        <Math tex="q''_{\text{with}} = 175{,}000 \text{ W/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          접촉 저항이 총 열저항의 75%를 차지하여 열유속이 4배 감소했습니다.
          고열전도율 금속에서는 접촉 열저항이 전도 저항보다 지배적일 수 있습니다.
        </p>
      </div>
    ),
  },

  // Problem 9: Critical Radius of Insulation
  {
    id: 9,
    title: "Critical Radius of Insulation",
    topic: "Critical Radius",
    topicColor: "pink",
    problem: (
      <p>
        반경 <Math tex="r = 0.002" /> m인 전선에 열전도율 <Math tex="k = 0.2" /> W/(m·K)인 절연 피복을 씌웁니다.
        외부 대류계수 <Math tex="h = 10" /> W/(m²·K)일 때, 임계 반경 <Math tex="r_{cr}" />을 구하고
        절연재 추가가 열손실을 증가시키는지 감소시키는지 판단하시오.
      </p>
    ),
    given: [
      "전선 반경: r = 0.002 m",
      "절연재 k = 0.2 W/(m·K)",
      "외부 대류계수 h = 10 W/(m²·K)",
    ],
    find: "r_cr 및 절연 효과 판단",
    steps: [
      {
        label: "Step 1: 임계 반경 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">원통형 절연에서 총 열저항이 최소가 되는 임계 반경:</p>
            <div className="text-center py-2">
              <Math tex="r_{cr} = \frac{k_{\text{ins}}}{h}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 임계 반경 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="r_{cr} = \frac{0.2}{10} = 0.02 \text{ m} = 20 \text{ mm}" display />
          </div>
        ),
      },
      {
        label: "Step 3: 현재 반경과 비교",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="r = 0.002 \text{ m} = 2 \text{ mm}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="r_{cr} = 0.02 \text{ m} = 20 \text{ mm} \gg r = 2 \text{ mm}" display />
            </div>
            <p className="text-gray-400 mt-2">
              현재 반경이 임계 반경보다 훨씬 작으므로 (<Math tex="r < r_{cr}" />),
              절연재를 추가하면 열손실이 <strong className="text-white">증가</strong>합니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 4: 물리적 해석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">절연재 추가 시 두 가지 경쟁 효과:</p>
            <p className="text-gray-300 mb-1">1. 전도 열저항 증가: <Math tex="R_{\text{cond}} = \frac{\ln(r_{\text{outer}}/r)}{2\pi k L} \;\uparrow" /></p>
            <p className="text-gray-300 mb-1">2. 외표면적 증가로 대류 열저항 감소: <Math tex="R_{\text{conv}} = \frac{1}{h \cdot 2\pi r_{\text{outer}} L} \;\downarrow" /></p>
            <p className="text-gray-400 mt-2">
              <Math tex="r < r_{cr}" />일 때, 대류 저항 감소 효과가 전도 저항 증가보다 커서 총 열손실이 증가합니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 5: 열손실 비교 (절연 전/후)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">단위 길이, 단위 ΔT 당 열저항 비교 (절연 없이 vs. r_cr까지 절연):</p>
            <div className="text-center py-2">
              <Math tex="R'_{\text{bare}} = \frac{1}{h \cdot 2\pi r} = \frac{1}{10 \times 2\pi \times 0.002} = 7.96 \text{ m·K/W}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R'_{\text{at}\;r_{cr}} = \frac{\ln(r_{cr}/r)}{2\pi k} + \frac{1}{h \cdot 2\pi r_{cr}} = \frac{\ln(10)}{2\pi(0.2)} + \frac{1}{10 \times 2\pi(0.02)}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{2.303}{1.257} + \frac{1}{1.257} = 1.832 + 0.796 = 2.628 \text{ m·K/W}" display />
            </div>
            <p className="text-gray-400 mt-2">
              열저항이 7.96에서 2.628으로 감소 → 열손실이 약 <strong className="text-white">3배 증가</strong>합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="r_{cr} = \frac{k}{h} = \frac{0.2}{10} = 0.02 \text{ m} = 20 \text{ mm}" display />
        <p className="text-sm text-gray-400 mt-2">
          <Math tex="r_{cr} = 20 \text{ mm} \gg r = 2 \text{ mm}" />이므로
          절연재를 추가하면 열손실이 오히려 증가합니다. 이를 &ldquo;절연의 역설(insulation paradox)&rdquo;이라 합니다.
          열손실 감소를 위해서는 <Math tex="r_{\text{outer}} > r_{cr}" /> 이상의 두꺼운 절연이 필요합니다.
        </p>
      </div>
    ),
  },

  // Problem 10: Sphere with Convection on Both Sides
  {
    id: 10,
    title: "Spherical Tank with Convection",
    topic: "Sphere + Convection",
    topicColor: "teal",
    problem: (
      <p>
        구형 탱크 (내경 <Math tex="r_1 = 0.5" /> m, 외경 <Math tex="r_2 = 0.52" /> m, <Math tex="k = 15" /> W/(m·K))에
        내부 유체 <Math tex="T_{{\infty,i}} = 80" />°C (<Math tex="h_i = 300" /> W/(m²·K))가 저장되어 있고,
        외부 공기 온도 <Math tex="T_{{\infty,o}} = 25" />°C (<Math tex="h_o = 20" /> W/(m²·K))입니다.
        총 열전달률 <Math tex="Q" />를 구하시오.
      </p>
    ),
    given: [
      "r₁ = 0.5 m, r₂ = 0.52 m",
      "k = 15 W/(m·K)",
      "T∞,i = 80°C, h_i = 300 W/(m²·K)",
      "T∞,o = 25°C, h_o = 20 W/(m²·K)",
    ],
    find: "Q [W]",
    steps: [
      {
        label: "Step 1: 열저항 네트워크 (구 + 양측 대류)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">직렬 열저항: 내측 대류 → 구형 전도 → 외측 대류</p>
            <div className="text-center py-2">
              <Math tex="R_{\text{total}} = \frac{1}{h_i \cdot 4\pi r_1^2} + \frac{1}{4\pi k}\left(\frac{1}{r_1} - \frac{1}{r_2}\right) + \frac{1}{h_o \cdot 4\pi r_2^2}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 내측 대류 열저항",
        content: (
          <div className="text-center py-2">
            <Math tex="R_{\text{conv,i}} = \frac{1}{h_i \cdot 4\pi r_1^2} = \frac{1}{300 \times 4\pi \times (0.5)^2} = \frac{1}{300 \times 3.1416} = \frac{1}{942.5}" display />
          </div>
        ),
      },
      {
        label: "Step 3: 구형 전도 열저항",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{1}{r_1} - \frac{1}{r_2} = \frac{1}{0.5} - \frac{1}{0.52} = 2.000 - 1.923 = 0.07692 \text{ m}^{-1}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R_{\text{cond}} = \frac{0.07692}{4\pi \times 15} = \frac{0.07692}{188.50} = 4.081 \times 10^{-4} \text{ K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 외측 대류 열저항",
        content: (
          <div className="text-center py-2">
            <Math tex="R_{\text{conv,o}} = \frac{1}{20 \times 4\pi \times (0.52)^2} = \frac{1}{20 \times 3.398} = \frac{1}{67.98} = 0.01471 \text{ K/W}" display />
          </div>
        ),
      },
      {
        label: "Step 5: 총 열저항 및 열전달률",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R_{\text{total}} = 1.061 \times 10^{-3} + 4.081 \times 10^{-4} + 0.01471" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R_{\text{total}} = 0.01618 \text{ K/W}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Q = \frac{T_{\infty,i} - T_{\infty,o}}{R_{\text{total}}} = \frac{80 - 25}{0.01618} = \frac{55}{0.01618} = 3399 \text{ W}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="Q = 3399 \text{ W} \approx 3.4 \text{ kW}" display />
        <p className="text-sm text-gray-400 mt-2">
          외측 대류 열저항(0.01471 K/W)이 총 열저항의 90.9%를 차지합니다.
          열전달 개선을 위해서는 외부 대류계수 <Math tex="h_o" />를 높이는 것이 가장 효과적입니다.
        </p>
      </div>
    ),
  },
];

const tips = [
  { title: "1. 좌표계 확인", description: "평판(직교), 원통(r), 구(r) 중 어떤 좌표계인지 먼저 확인하세요." },
  { title: "2. 열저항 공식 선택", description: "평판: L/(kA), 원통: ln(r₂/r₁)/(2πkL), 구: (1/r₁-1/r₂)/(4πk)" },
  { title: "3. 직렬/병렬 구분", description: "복합벽에서 열저항이 직렬인지 병렬인지 회로도를 그려 확인하세요." },
  { title: "4. 대류 열저항 포함", description: "표면 대류가 있으면 R_conv = 1/(hA)를 반드시 포함하세요." },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={3} problems={problems} tips={tips} />;
}

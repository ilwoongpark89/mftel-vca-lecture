"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  {
    id: 1,
    title: "Fourier's Law Application",
    topic: "Heat Flux",
    topicColor: "red",
    problem: (
      <p>
        두께 0.3 m, 열전도율 k = 1.2 W/(m·K)인 콘크리트 벽의 양쪽 표면 온도가 각각 20°C와 -5°C입니다.
        정상상태에서 벽을 통과하는 열유속(heat flux)을 계산하시오.
      </p>
    ),
    given: ["L = 0.3 m", "k = 1.2 W/(m·K)", "T₁ = 20°C", "T₂ = -5°C"],
    find: "q'' [W/m²]",
    steps: [
      {
        label: "Step 1: 적용할 법칙 선택",
        content: (
          <div>
            <p className="text-gray-400 mb-2">1D 정상상태 열전도에 Fourier 법칙을 적용합니다:</p>
            <div className="text-center py-2">
              <Math tex="q'' = -k \frac{dT}{dx}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 온도 구배 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">정상상태, 열생성 없음, k 상수이므로 온도 분포는 선형입니다:</p>
            <div className="text-center py-2">
              <Math tex="\frac{dT}{dx} = \frac{T_2 - T_1}{L} = \frac{(-5) - 20}{0.3} = \frac{-25}{0.3}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 온도 구배 값 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\frac{dT}{dx} = -83.33 \text{ K/m}" display />
          </div>
        ),
      },
      {
        label: "Step 4: Fourier 법칙 대입",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q'' = -k \frac{dT}{dx} = -(1.2) \times (-83.33)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 최종 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="q'' = 100 \text{ W/m}^2" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="q'' = 100 \text{ W/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          양수 값은 열이 고온(20°C)에서 저온(-5°C)으로 흐름을 의미합니다.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Composite Wall Heat Transfer",
    topic: "Thermal Resistance",
    topicColor: "green",
    problem: (
      <p>
        3층으로 구성된 복합벽이 있습니다. 벽돌(L₁ = 0.2 m, k₁ = 0.72 W/(m·K)),
        단열재(L₂ = 0.05 m, k₂ = 0.04 W/(m·K)), 석고(L₃ = 0.02 m, k₃ = 0.48 W/(m·K)).
        내부 공기 온도 25°C (h₁ = 10 W/(m²·K)), 외부 공기 온도 -10°C (h₂ = 25 W/(m²·K))일 때,
        단위 면적당 열전달률을 계산하시오.
      </p>
    ),
    given: [
      "L₁ = 0.2 m, k₁ = 0.72 W/(m·K)",
      "L₂ = 0.05 m, k₂ = 0.04 W/(m·K)",
      "L₃ = 0.02 m, k₃ = 0.48 W/(m·K)",
      "T∞,1 = 25°C, h₁ = 10 W/(m²·K)",
      "T∞,2 = -10°C, h₂ = 25 W/(m²·K)",
    ],
    find: "q'' [W/m²]",
    steps: [
      {
        label: "Step 1: 각 층의 열저항 계산 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">단위 면적당 열저항:</p>
            <div className="text-center py-2">
              <Math tex="R''_{\text{conv}} = \frac{1}{h}, \quad R''_{\text{cond}} = \frac{L}{k}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 대류 열저항 계산",
        content: (
          <div className="space-y-2">
            <div className="text-center py-1">
              <Math tex="R''_{\text{conv,1}} = \frac{1}{h_1} = \frac{1}{10} = 0.100 \text{ m}^2\text{K/W}" />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{\text{conv,2}} = \frac{1}{h_2} = \frac{1}{25} = 0.040 \text{ m}^2\text{K/W}" />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 전도 열저항 계산",
        content: (
          <div className="space-y-2">
            <div className="text-center py-1">
              <Math tex="R''_{\text{brick}} = \frac{0.2}{0.72} = 0.278 \text{ m}^2\text{K/W}" />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{\text{insul}} = \frac{0.05}{0.04} = 1.250 \text{ m}^2\text{K/W}" />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{\text{plaster}} = \frac{0.02}{0.48} = 0.042 \text{ m}^2\text{K/W}" />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 총 열저항 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R''_{\text{total}} = 0.100 + 0.278 + 1.250 + 0.042 + 0.040" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R''_{\text{total}} = 1.710 \text{ m}^2\text{K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 열유속 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="q'' = \frac{\Delta T}{R''_{\text{total}}} = \frac{25 - (-10)}{1.710} = \frac{35}{1.710}" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="q'' = 20.5 \text{ W/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          단열재가 총 열저항의 73%를 차지합니다 (1.250/1.710).
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Boundary Condition Analysis",
    topic: "Boundary Conditions",
    topicColor: "blue",
    problem: (
      <p>
        두께 L = 0.1 m인 평판의 한쪽 표면(x = 0)에 열유속 q''₀ = 5000 W/m²가 가해지고,
        다른 쪽 표면(x = L)은 온도 T∞ = 30°C인 유체와 접촉하며 h = 50 W/(m²·K)입니다.
        열전도율 k = 20 W/(m·K)일 때, 정상상태에서 양쪽 표면 온도를 구하시오.
      </p>
    ),
    given: [
      "L = 0.1 m",
      "q''₀ = 5000 W/m²",
      "T∞ = 30°C",
      "h = 50 W/(m²·K)",
      "k = 20 W/(m·K)",
    ],
    find: "T(0) 및 T(L)",
    steps: [
      {
        label: "Step 1: 경계조건 확인",
        content: (
          <div>
            <p className="text-gray-400 mb-2">두 경계조건:</p>
            <div className="space-y-2">
              <p className="text-gray-300">• x = 0: Type 2 (Neumann) - <Math tex="-k\frac{dT}{dx}\big|_0 = q''_0" /></p>
              <p className="text-gray-300">• x = L: Type 3 (Robin) - <Math tex="-k\frac{dT}{dx}\big|_L = h(T(L) - T_\infty)" /></p>
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 정상상태 에너지 균형",
        content: (
          <div>
            <p className="text-gray-400 mb-2">정상상태, 열생성 없음이므로 열유속이 일정합니다:</p>
            <div className="text-center py-2">
              <Math tex="q'' = q''_0 = 5000 \text{ W/m}^2 \;\;\text{(everywhere)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: x = L에서 표면 온도 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">대류 경계조건에서:</p>
            <div className="text-center py-2">
              <Math tex="q'' = h(T(L) - T_\infty)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T(L) = T_\infty + \frac{q''}{h} = 30 + \frac{5000}{50}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: T(L) 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="T(L) = 30 + 100 = 130°\text{C}" display />
          </div>
        ),
      },
      {
        label: "Step 5: x = 0에서 표면 온도 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Fourier 법칙으로 온도 강하 계산:</p>
            <div className="text-center py-2">
              <Math tex="T(0) = T(L) + \frac{q'' \cdot L}{k} = 130 + \frac{5000 \times 0.1}{20}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T(0) = 130 + 25 = 155°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="T(0) = 155°\text{C}" display />
        <Math tex="T(L) = 130°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          열이 x = 0에서 x = L로 흐르므로 T(0) &gt; T(L) &gt; T∞
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Heat Generation in a Plane Wall",
    topic: "Heat Generation",
    topicColor: "amber",
    problem: (
      <p>
        반두께 L = 0.02 m (총 두께 0.04 m)인 대칭 평판에서 균일한 열생성
        <Math tex="\dot{q} = 5 \times 10^6" /> W/m³이 발생합니다.
        양쪽 표면이 T∞ = 25°C인 유체와 접촉하며 h = 500 W/(m²·K)입니다.
        k = 20 W/(m·K)일 때, 표면 온도와 최고 온도(중심)를 구하시오.
      </p>
    ),
    given: [
      "L = 0.02 m (반두께)",
      "q̇ = 5 × 10⁶ W/m³",
      "T∞ = 25°C",
      "h = 500 W/(m²·K)",
      "k = 20 W/(m·K)",
    ],
    find: "Ts 및 Tmax",
    steps: [
      {
        label: "Step 1: 표면 에너지 균형",
        content: (
          <div>
            <p className="text-gray-400 mb-2">반벽에서 생성된 열이 한 표면을 통해 빠져나갑니다:</p>
            <div className="text-center py-2">
              <Math tex="\dot{q} \cdot L = h(T_s - T_\infty)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 표면 온도 Ts 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_s = T_\infty + \frac{\dot{q} L}{h} = 25 + \frac{5 \times 10^6 \times 0.02}{500}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: Ts 값 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="T_s = 25 + \frac{100000}{500} = 25 + 200 = 225°\text{C}" display />
          </div>
        ),
      },
      {
        label: "Step 4: 최고 온도 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">대칭 평판의 중심 온도:</p>
            <div className="text-center py-2">
              <Math tex="T_{\max} = T_s + \frac{\dot{q} L^2}{2k}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: Tmax 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_{\max} = 225 + \frac{5 \times 10^6 \times (0.02)^2}{2 \times 20}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_{\max} = 225 + \frac{2000}{40} = 225 + 50 = 275°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="T_s = 225°\text{C}" display />
        <Math tex="T_{\max} = 275°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          ΔTconv = 200°C (대류), ΔTcond = 50°C (전도)
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Cylindrical Conduction",
    topic: "Cylindrical Geometry",
    topicColor: "cyan",
    problem: (
      <p>
        내경 r₁ = 0.05 m, 외경 r₂ = 0.1 m인 원통형 파이프가 있습니다.
        내벽 온도 T₁ = 400°C, 외벽 온도 T₂ = 50°C이고, 열전도율 k = 50 W/(m·K)입니다.
        파이프 길이 1 m당 열전달률을 계산하시오.
      </p>
    ),
    given: [
      "r₁ = 0.05 m",
      "r₂ = 0.1 m",
      "T₁ = 400°C",
      "T₂ = 50°C",
      "k = 50 W/(m·K)",
    ],
    find: "q/L [W/m]",
    steps: [
      {
        label: "Step 1: 원통 좌표계 열방정식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">1D 반경 방향, 정상상태, 열생성 없음:</p>
            <div className="text-center py-2">
              <Math tex="\frac{1}{r}\frac{d}{dr}\left(r\frac{dT}{dr}\right) = 0" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 일반해",
        content: (
          <div>
            <p className="text-gray-400 mb-2">적분하면 대수(logarithmic) 온도 분포:</p>
            <div className="text-center py-2">
              <Math tex="T(r) = C_1 \ln(r) + C_2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 원통벽 열저항",
        content: (
          <div>
            <p className="text-gray-400 mb-2">단위 길이당 열저항:</p>
            <div className="text-center py-2">
              <Math tex="R'_{\text{cyl}} = \frac{\ln(r_2/r_1)}{2\pi k}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 열저항 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="R'_{\text{cyl}} = \frac{\ln(0.1/0.05)}{2\pi \times 50} = \frac{\ln(2)}{314.16} = \frac{0.693}{314.16}" display />
          </div>
        ),
      },
      {
        label: "Step 5: 열저항 값",
        content: (
          <div className="text-center py-2">
            <Math tex="R'_{\text{cyl}} = 2.206 \times 10^{-3} \text{ m·K/W}" display />
          </div>
        ),
      },
      {
        label: "Step 6: 단위 길이당 열전달률",
        content: (
          <div className="text-center py-2">
            <Math tex="\frac{q}{L} = \frac{T_1 - T_2}{R'_{\text{cyl}}} = \frac{400 - 50}{2.206 \times 10^{-3}} = \frac{350}{2.206 \times 10^{-3}}" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="\frac{q}{L} = 158,700 \text{ W/m} \approx 158.7 \text{ kW/m}" display />
        <p className="text-sm text-gray-400 mt-2">
          대안 공식: <Math tex="q/L = 2\pi k(T_1-T_2)/\ln(r_2/r_1)" />
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Temperature-Dependent k",
    topic: "Variable Conductivity",
    topicColor: "purple",
    problem: (
      <p>
        두께 L = 0.1 m인 평판의 열전도율이 온도에 따라 변합니다:{" "}
        <Math tex="k(T) = k_0(1 + \beta T)" /> (단, <Math tex="k_0 = 10" /> W/(m·K),{" "}
        <Math tex="\beta = 10^{-3}" /> 1/K).
        한쪽 표면 온도 <Math tex="T_1 = 200" />°C, 반대쪽 <Math tex="T_2 = 0" />°C일 때,
        정상상태 열유속 q''를 구하시오.
      </p>
    ),
    given: [
      "L = 0.1 m",
      "k(T) = k₀(1 + βT)",
      "k₀ = 10 W/(m·K)",
      "β = 10⁻³ 1/K",
      "T₁ = 200°C",
      "T₂ = 0°C",
    ],
    find: "q'' [W/m²]",
    steps: [
      {
        label: "Step 1: 온도 의존 열전도율 해석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              k(T)가 온도의 선형 함수이므로, 정상상태 1D 전도에서 평균 열전도율을 사용할 수 있습니다:
            </p>
            <div className="text-center py-2">
              <Math tex="q'' = k_{\text{avg}} \cdot \frac{T_1 - T_2}{L}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 평균 열전도율 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">선형 k(T)의 평균값:</p>
            <div className="text-center py-2">
              <Math tex="k_{\text{avg}} = \frac{1}{T_1 - T_2}\int_{T_2}^{T_1} k_0(1+\beta T)\,dT = k_0\left(1 + \beta\,\frac{T_1 + T_2}{2}\right)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 평균 열전도율 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="k_{\text{avg}} = 10\left(1 + 10^{-3} \times \frac{200 + 0}{2}\right) = 10(1 + 0.1) = 11 \text{ W/(m·K)}" display />
          </div>
        ),
      },
      {
        label: "Step 4: 열유속 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="q'' = 11 \times \frac{200 - 0}{0.1} = 11 \times 2000" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="q'' = 22{,}000 \text{ W/m}^2 = 22 \text{ kW/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          온도 의존 k에 의해 일정 k(=10)인 경우(20,000 W/m²)보다 10% 높습니다.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Cylindrical Heat Generation",
    topic: "Radial Generation",
    topicColor: "emerald",
    problem: (
      <p>
        지름 D = 0.004 m (반지름 <Math tex="r_0 = 0.002" /> m)인 전선에서 전류에 의해 균일한 열생성{" "}
        <Math tex="\dot{q} = 5 \times 10^7" /> W/m³이 발생합니다.
        전선의 열전도율 k = 20 W/(m·K)이고, 표면은 h = 50 W/(m²·K),{" "}
        <Math tex="T_\infty = 25" />°C인 공기와 접촉합니다.
        표면 온도 <Math tex="T_s" />와 중심 최고 온도 <Math tex="T_{\max}" />를 구하시오.
      </p>
    ),
    given: [
      "D = 0.004 m (r₀ = 0.002 m)",
      "q̇ = 5 × 10⁷ W/m³",
      "k = 20 W/(m·K)",
      "h = 50 W/(m²·K)",
      "T∞ = 25°C",
    ],
    find: "Ts 및 Tmax",
    steps: [
      {
        label: "Step 1: 표면 에너지 균형",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              원통 단위길이에 대해 열생성 = 대류 방출:
            </p>
            <div className="text-center py-2">
              <Math tex="\dot{q}(\pi r_0^2 L) = h(2\pi r_0 L)(T_s - T_\infty)" display />
            </div>
            <p className="text-gray-400 mt-2">정리하면:</p>
            <div className="text-center py-2">
              <Math tex="T_s = T_\infty + \frac{\dot{q}\,r_0}{2h}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 표면 온도 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="T_s = 25 + \frac{5 \times 10^7 \times 0.002}{2 \times 50} = 25 + \frac{100{,}000}{100} = 25 + 1000" display />
          </div>
        ),
      },
      {
        label: "Step 3: Ts 값",
        content: (
          <div className="text-center py-2">
            <Math tex="T_s = 1025°\text{C}" display />
          </div>
        ),
      },
      {
        label: "Step 4: 중심 최고 온도 공식 (원통 열생성)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">원통 좌표에서 균일 열생성 시:</p>
            <div className="text-center py-2">
              <Math tex="T_{\max} = T_s + \frac{\dot{q}\,r_0^2}{4k}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: Tmax 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_{\max} = 1025 + \frac{5 \times 10^7 \times (0.002)^2}{4 \times 20} = 1025 + \frac{200}{80}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_{\max} = 1025 + 2.5 = 1027.5°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="T_s = 1025°\text{C}" display />
        <Math tex="T_{\max} = 1027.5°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          대류 저항이 전도 저항보다 훨씬 크므로 (ΔT_conv = 1000°C vs ΔT_cond = 2.5°C), 표면-유체 사이 온도차가 지배적입니다.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "Critical Radius of Insulation",
    topic: "Critical Radius",
    topicColor: "orange",
    problem: (
      <p>
        외경 <Math tex="r_1 = 0.01" /> m인 관에 절연재(k = 0.05 W/(m·K))를 감쌉니다.
        외부 대류 열전달계수 <Math tex="h_{\text{outer}} = 10" /> W/(m²·K)일 때,
        임계 절연 반경 <Math tex="r_{\text{cr}}" />을 구하고, 절연재 추가가 열손실 감소에 효과적인지 판단하시오.
      </p>
    ),
    given: [
      "r₁ = 0.01 m (관 외경)",
      "k_ins = 0.05 W/(m·K)",
      "h_outer = 10 W/(m²·K)",
    ],
    find: "r_cr 및 절연 효과 판단",
    steps: [
      {
        label: "Step 1: 임계 반경 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              원통형 절연에서 열손실이 최대가 되는 임계 반경:
            </p>
            <div className="text-center py-2">
              <Math tex="r_{\text{cr}} = \frac{k_{\text{ins}}}{h_{\text{outer}}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 임계 반경 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="r_{\text{cr}} = \frac{0.05}{10} = 0.005 \text{ m} = 5 \text{ mm}" display />
          </div>
        ),
      },
      {
        label: "Step 3: 관 외경과 비교",
        content: (
          <div>
            <p className="text-gray-400 mb-2">비교:</p>
            <div className="text-center py-2">
              <Math tex="r_1 = 10 \text{ mm} > r_{\text{cr}} = 5 \text{ mm}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 결론 도출",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="r_1 > r_{\text{cr}}" />이므로, 절연재를 추가하면 전도 저항 증가가 대류 저항 감소보다 크기 때문에
              총 열저항이 항상 증가합니다. 따라서 절연재 추가는 열손실을 감소시킵니다.
            </p>
            <div className="text-center py-2">
              <Math tex="r_1 > r_{\text{cr}} \implies \text{절연 추가 시 열손실 감소 (효과적)}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="r_{\text{cr}} = 5 \text{ mm}" display />
        <p className="text-sm text-gray-400 mt-2">
          r₁ = 10 mm &gt; r_cr = 5 mm이므로, 절연재를 추가하면 항상 열손실이 감소합니다.
          만약 r₁ &lt; r_cr이었다면, 절연재가 오히려 열손실을 증가시킬 수 있습니다.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Spherical Shell Conduction",
    topic: "Spherical Geometry",
    topicColor: "pink",
    problem: (
      <p>
        구형 용기의 내경 <Math tex="r_1 = 0.3" /> m, 외경 <Math tex="r_2 = 0.35" /> m이고,
        벽 재질의 열전도율 k = 15 W/(m·K)입니다.
        내부 표면 온도 <Math tex="T_1 = 200" />°C, 외부 표면 온도 <Math tex="T_2 = 40" />°C일 때,
        열전달률 Q와 r = 0.325 m 위치의 온도를 구하시오.
      </p>
    ),
    given: [
      "r₁ = 0.3 m",
      "r₂ = 0.35 m",
      "k = 15 W/(m·K)",
      "T₁ = 200°C",
      "T₂ = 40°C",
    ],
    find: "Q [W] 및 T(r = 0.325 m)",
    steps: [
      {
        label: "Step 1: 구형 셸 열저항",
        content: (
          <div>
            <p className="text-gray-400 mb-2">구형 좌표계에서의 열저항:</p>
            <div className="text-center py-2">
              <Math tex="R_{\text{sph}} = \frac{1}{4\pi k}\left(\frac{1}{r_1} - \frac{1}{r_2}\right)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 열저항 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R_{\text{sph}} = \frac{1}{4\pi \times 15}\left(\frac{1}{0.3} - \frac{1}{0.35}\right)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{1}{188.50}\left(3.333 - 2.857\right) = \frac{0.476}{188.50}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R_{\text{sph}} = 2.525 \times 10^{-3} \text{ K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 열전달률 Q 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="Q = \frac{T_1 - T_2}{R_{\text{sph}}} = \frac{200 - 40}{2.525 \times 10^{-3}} = \frac{160}{2.525 \times 10^{-3}}" display />
          </div>
        ),
      },
      {
        label: "Step 4: Q 값",
        content: (
          <div className="text-center py-2">
            <Math tex="Q = 63{,}366 \text{ W} \approx 63.4 \text{ kW}" display />
          </div>
        ),
      },
      {
        label: "Step 5: r = 0.325 m에서의 온도",
        content: (
          <div>
            <p className="text-gray-400 mb-2">구형 셸의 온도 분포:</p>
            <div className="text-center py-2">
              <Math tex="T(r) = T_1 - (T_1 - T_2)\,\frac{\dfrac{1}{r_1} - \dfrac{1}{r}}{\dfrac{1}{r_1} - \dfrac{1}{r_2}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T(0.325) = 200 - 160 \times \frac{3.333 - 3.077}{3.333 - 2.857} = 200 - 160 \times \frac{0.256}{0.476}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T(0.325) = 200 - 160 \times 0.538 = 200 - 86.1 = 113.9°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="Q \approx 63.4 \text{ kW}" display />
        <Math tex="T(r = 0.325\text{ m}) \approx 113.9°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          구형 전도에서 온도 분포는 1/r에 선형입니다 (평판의 x 선형, 원통의 ln(r) 선형과 비교).
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "Contact Resistance",
    topic: "Interface Resistance",
    topicColor: "teal",
    problem: (
      <p>
        스테인리스강 두 판(각각 두께 L = 5 mm = 0.005 m, k = 15 W/(m·K))이 접촉하고 있으며,
        접촉 열저항 <Math tex="R''_{tc} = 5 \times 10^{-4}" /> m²·K/W입니다.
        왼쪽 유체 <Math tex="T_{\infty,1} = 200" />°C (h₁ = 200 W/(m²·K)),
        오른쪽 유체 <Math tex="T_{\infty,2} = 50" />°C (h₂ = 200 W/(m²·K))일 때,
        열유속 q''와 접촉면에서의 온도 강하를 구하시오.
      </p>
    ),
    given: [
      "L₁ = L₂ = 0.005 m",
      "k₁ = k₂ = 15 W/(m·K)",
      "R''_tc = 5 × 10⁻⁴ m²·K/W",
      "T∞,1 = 200°C, h₁ = 200 W/(m²·K)",
      "T∞,2 = 50°C, h₂ = 200 W/(m²·K)",
    ],
    find: "q'' [W/m²] 및 ΔT_contact",
    steps: [
      {
        label: "Step 1: 총 열저항 회로 구성",
        content: (
          <div>
            <p className="text-gray-400 mb-2">직렬 열저항 (단위 면적당):</p>
            <div className="text-center py-2">
              <Math tex="R''_{\text{total}} = \frac{1}{h_1} + \frac{L_1}{k_1} + R''_{tc} + \frac{L_2}{k_2} + \frac{1}{h_2}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 각 열저항 계산",
        content: (
          <div className="space-y-2">
            <div className="text-center py-1">
              <Math tex="R''_{\text{conv,1}} = \frac{1}{200} = 0.005 \text{ m}^2\text{K/W}" />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{\text{cond,1}} = \frac{0.005}{15} = 3.333 \times 10^{-4} \text{ m}^2\text{K/W}" />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{tc} = 5 \times 10^{-4} \text{ m}^2\text{K/W}" />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{\text{cond,2}} = \frac{0.005}{15} = 3.333 \times 10^{-4} \text{ m}^2\text{K/W}" />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{\text{conv,2}} = \frac{1}{200} = 0.005 \text{ m}^2\text{K/W}" />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 총 열저항 합산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R''_{\text{total}} = 0.005 + 3.333 \times 10^{-4} + 5 \times 10^{-4} + 3.333 \times 10^{-4} + 0.005" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R''_{\text{total}} = 0.01117 \text{ m}^2\text{K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 열유속 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="q'' = \frac{T_{\infty,1} - T_{\infty,2}}{R''_{\text{total}}} = \frac{200 - 50}{0.01117} = \frac{150}{0.01117}" display />
          </div>
        ),
      },
      {
        label: "Step 5: 접촉면 온도 강하 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q'' = 13{,}428 \text{ W/m}^2" display />
            </div>
            <p className="text-gray-400 mb-2">접촉면에서의 온도 강하:</p>
            <div className="text-center py-2">
              <Math tex="\Delta T_{\text{contact}} = q'' \times R''_{tc} = 13{,}428 \times 5 \times 10^{-4} = 6.71°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q'' \approx 13{,}428 \text{ W/m}^2" display />
        <Math tex="\Delta T_{\text{contact}} \approx 6.7°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          접촉 열저항(4.5%)은 대류 저항(89.5%)에 비해 작지만, 정밀 열설계에서는 무시할 수 없습니다.
        </p>
      </div>
    ),
  },
];

const tips = [
  { title: "1. 문제 유형 파악", description: "정상상태 vs 비정상, 열생성 유무, 좌표계(평판/원통/구)를 먼저 확인하세요." },
  { title: "2. 지배 방정식 선택", description: "조건에 맞는 단순화된 열방정식을 선택합니다 (Laplace, Poisson 등)." },
  { title: "3. 경계조건 적용", description: "Type 1(온도), Type 2(열유속), Type 3(대류) 중 적절한 조건을 적용하세요." },
  { title: "4. 단위 확인", description: "최종 답의 단위가 맞는지 항상 확인하세요. 차원 분석은 오류를 방지합니다." },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={2} problems={problems} tips={tips} />;
}

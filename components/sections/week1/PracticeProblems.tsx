"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  {
    id: 1,
    title: "Fourier's Law - Plane Wall",
    topic: "Heat Flux",
    topicColor: "red",
    problem: (
      <p>
        두께 0.5 m, 열전도율 <Math tex="k = 1.4" /> W/(m·K)인 평판 벽의 양쪽 표면 온도가
        각각 <Math tex="T_1 = 150" />°C와 <Math tex="T_2 = 30" />°C입니다.
        정상상태에서 벽을 통과하는 열유속(heat flux)을 계산하시오.
      </p>
    ),
    given: [
      "L = 0.5 m",
      "k = 1.4 W/(m·K)",
      "T₁ = 150°C (고온 표면)",
      "T₂ = 30°C (저온 표면)",
    ],
    find: "q'' [W/m²]",
    steps: [
      {
        label: "Step 1: 적용할 법칙 확인",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              1D 정상상태 열전도 문제이므로 Fourier의 열전도 법칙을 적용합니다:
            </p>
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
            <p className="text-gray-400 mb-2">
              정상상태, 열생성 없음, k 일정이므로 온도 분포는 선형입니다.
              x = 0에서 T₁, x = L에서 T₂로 설정하면:
            </p>
            <div className="text-center py-2">
              <Math tex="\frac{dT}{dx} = \frac{T_2 - T_1}{L} = \frac{30 - 150}{0.5} = \frac{-120}{0.5} = -240 \text{ K/m}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: Fourier 법칙 대입",
        content: (
          <div>
            <p className="text-gray-400 mb-2">음의 부호에 주의하여 대입합니다:</p>
            <div className="text-center py-2">
              <Math tex="q'' = -k \frac{dT}{dx} = -(1.4) \times (-240)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 최종 열유속 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="q'' = 1.4 \times 240 = 336 \text{ W/m}^2" display />
          </div>
        ),
      },
      {
        label: "Step 5: 결과 해석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              양수 값은 열이 고온(150°C)에서 저온(30°C) 방향으로 전달됨을 의미합니다.
              이는 열역학 제2법칙과 일치합니다.
            </p>
            <div className="text-center py-2">
              <Math tex="q'' > 0 \;\Rightarrow\; \text{Heat flows from } T_1 \text{ to } T_2 \;(T_1 > T_2)" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="q'' = 336 \text{ W/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          양수 값은 열이 고온 표면(150°C)에서 저온 표면(30°C)으로 흐름을 의미합니다.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Newton's Cooling Law",
    topic: "Convection",
    topicColor: "green",
    problem: (
      <p>
        표면 온도 <Math tex="T_s = 200" />°C인 뜨거운 금속판이 온도 <Math tex="T_\infty = 25" />°C인
        공기 중에 노출되어 있습니다. 대류 열전달 계수 <Math tex="h = 25" /> W/(m²·K)이고
        금속판의 표면적 <Math tex="A = 0.5" /> m²일 때, 대류에 의한 총 열손실률을 계산하시오.
      </p>
    ),
    given: [
      "Ts = 200°C (표면 온도)",
      "T∞ = 25°C (주위 공기 온도)",
      "h = 25 W/(m²·K)",
      "A = 0.5 m²",
    ],
    find: "Q [W]",
    steps: [
      {
        label: "Step 1: 적용할 법칙 확인",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              표면과 주위 유체 사이의 대류 열전달이므로 Newton의 냉각 법칙을 적용합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="q'' = h(T_s - T_\infty)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 온도차 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\Delta T = T_s - T_\infty = 200 - 25 = 175 \text{ °C} = 175 \text{ K}" display />
            </div>
            <p className="text-gray-400 mt-2">
              온도 차이이므로 °C와 K의 차이가 동일합니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: 열유속(heat flux) 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q'' = h \cdot \Delta T = 25 \times 175 = 4{,}375 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 총 열손실률 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">열유속에 면적을 곱하여 총 열전달률을 구합니다:</p>
            <div className="text-center py-2">
              <Math tex="Q = q'' \times A = 4{,}375 \times 0.5" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 최종 결과",
        content: (
          <div className="text-center py-2">
            <Math tex="Q = 2{,}187.5 \text{ W} \approx 2.19 \text{ kW}" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="Q = 2{,}187.5 \text{ W}" display />
        <p className="text-sm text-gray-400 mt-2">
          금속판이 대류를 통해 약 2.19 kW의 열을 주위 공기로 방출합니다.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Stefan-Boltzmann Radiation",
    topic: "Radiation",
    topicColor: "blue",
    problem: (
      <p>
        표면 온도 <Math tex="T_s = 500" />°C, 방사율 <Math tex="\varepsilon = 0.8" />,
        면적 <Math tex="A = 0.2" /> m²인 고온 표면이 있습니다.
        주위 온도를 0 K(깊은 우주)로 가정할 때,
        이 표면에서 복사에 의해 방출되는 총 열전달률을 계산하시오.
      </p>
    ),
    given: [
      "Ts = 500°C = 773 K",
      "ε = 0.8",
      "A = 0.2 m²",
      "Tsur = 0 K (깊은 우주)",
      "σ = 5.67 × 10⁻⁸ W/(m²·K⁴)",
    ],
    find: "Q_rad [W]",
    steps: [
      {
        label: "Step 1: 온도 변환 (°C → K)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">복사 계산에서는 반드시 절대온도(K)를 사용해야 합니다:</p>
            <div className="text-center py-2">
              <Math tex="T_s = 500 + 273 = 773 \text{ K}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Stefan-Boltzmann 법칙 적용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              주위 온도가 0 K이므로 방출 복사만 고려합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="Q_{\text{rad}} = \varepsilon \sigma A T_s^4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: T⁴ 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_s^4 = (773)^4 = (773^2)^2 = (597{,}529)^2 = 3.570 \times 10^{11} \text{ K}^4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 각 항 곱셈",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Q_{\text{rad}} = 0.8 \times 5.67 \times 10^{-8} \times 0.2 \times 3.570 \times 10^{11}" display />
            </div>
            <p className="text-gray-400 mt-2">단계별로 계산:</p>
            <div className="text-center py-2">
              <Math tex="\varepsilon \sigma = 0.8 \times 5.67 \times 10^{-8} = 4.536 \times 10^{-8} \text{ W/(m}^2\text{·K}^4\text{)}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\varepsilon \sigma A = 4.536 \times 10^{-8} \times 0.2 = 9.072 \times 10^{-9} \text{ W/K}^4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 최종 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="Q_{\text{rad}} = 9.072 \times 10^{-9} \times 3.570 \times 10^{11} = 3{,}239 \text{ W} \approx 3.24 \text{ kW}" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="Q_{\text{rad}} \approx 3{,}239 \text{ W}" display />
        <p className="text-sm text-gray-400 mt-2">
          고온 표면(773 K)에서 복사를 통해 약 3.24 kW의 에너지가 방출됩니다.
          복사 열전달은 T⁴에 비례하므로 고온에서 매우 중요해집니다.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Combined Convection and Radiation",
    topic: "Combined Modes",
    topicColor: "amber",
    problem: (
      <p>
        표면 온도 <Math tex="T_s = 120" />°C인 가열된 표면이 온도 <Math tex="T_\infty = T_{\text{sur}} = 20" />°C인
        주위 환경에 노출되어 있습니다. 대류 열전달 계수 <Math tex="h = 15" /> W/(m²·K),
        방사율 <Math tex="\varepsilon = 0.9" />일 때, 대류와 복사에 의한 총 열유속을 계산하시오.
      </p>
    ),
    given: [
      "Ts = 120°C = 393 K",
      "T∞ = Tsur = 20°C = 293 K",
      "h = 15 W/(m²·K)",
      "ε = 0.9",
      "σ = 5.67 × 10⁻⁸ W/(m²·K⁴)",
    ],
    find: "q''_total [W/m²]",
    steps: [
      {
        label: "Step 1: 대류 열유속 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Newton의 냉각 법칙으로 대류 성분을 구합니다:</p>
            <div className="text-center py-2">
              <Math tex="q''_{\text{conv}} = h(T_s - T_\infty) = 15 \times (120 - 20) = 15 \times 100" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q''_{\text{conv}} = 1{,}500 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 온도를 절대온도로 변환",
        content: (
          <div>
            <p className="text-gray-400 mb-2">복사 계산을 위해 절대온도(K)로 변환합니다:</p>
            <div className="text-center py-2">
              <Math tex="T_s = 120 + 273 = 393 \text{ K}, \quad T_{\text{sur}} = 20 + 273 = 293 \text{ K}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 복사 열유속 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Stefan-Boltzmann 법칙으로 복사 성분을 구합니다:</p>
            <div className="text-center py-2">
              <Math tex="q''_{\text{rad}} = \varepsilon \sigma (T_s^4 - T_{\text{sur}}^4)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_s^4 = (393)^4 = 2.385 \times 10^{10} \text{ K}^4" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_{\text{sur}}^4 = (293)^4 = 7.370 \times 10^{9} \text{ K}^4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 복사 열유속 값 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q''_{\text{rad}} = 0.9 \times 5.67 \times 10^{-8} \times (2.385 \times 10^{10} - 7.370 \times 10^{9})" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.9 \times 5.67 \times 10^{-8} \times 1.648 \times 10^{10}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q''_{\text{rad}} = 0.9 \times 934.1 = 840.7 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 총 열유속 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">대류와 복사 성분을 합산합니다:</p>
            <div className="text-center py-2">
              <Math tex="q''_{\text{total}} = q''_{\text{conv}} + q''_{\text{rad}} = 1{,}500 + 841" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q''_{\text{total}} = 2{,}341 \text{ W/m}^2" display />
            </div>
            <p className="text-gray-400 mt-2">
              대류가 전체의 약 64%, 복사가 약 36%를 차지합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="q''_{\text{total}} \approx 2{,}341 \text{ W/m}^2" display />
        <Math tex="\left( q''_{\text{conv}} = 1{,}500 \text{ W/m}^2, \;\; q''_{\text{rad}} \approx 841 \text{ W/m}^2 \right)" display />
        <p className="text-sm text-gray-400 mt-2">
          이 온도 범위에서 대류와 복사 모두 무시할 수 없으며, 두 모드를 함께 고려해야 합니다.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Thermal Resistance Network",
    topic: "Thermal Resistance",
    topicColor: "cyan",
    problem: (
      <p>
        두께 <Math tex="L = 0.25" /> m, 열전도율 <Math tex="k = 0.8" /> W/(m·K)인 단일벽이 있습니다.
        내부 공기 온도 <Math tex="T_{\infty,1} = 80" />°C (대류 계수 <Math tex="h_1 = 10" /> W/(m²·K)),
        외부 공기 온도 <Math tex="T_{\infty,2} = 15" />°C (대류 계수 <Math tex="h_2 = 40" /> W/(m²·K))일 때,
        열저항 개념을 이용하여 열유속을 계산하시오.
      </p>
    ),
    given: [
      "L = 0.25 m",
      "k = 0.8 W/(m·K)",
      "T∞,1 = 80°C, h₁ = 10 W/(m²·K)",
      "T∞,2 = 15°C, h₂ = 40 W/(m²·K)",
    ],
    find: "q'' [W/m²]",
    steps: [
      {
        label: "Step 1: 열저항 회로 구성",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              내부 대류 → 벽 전도 → 외부 대류의 직렬 열저항 회로입니다:
            </p>
            <div className="text-center py-2">
              <Math tex="R''_{\text{total}} = R''_{\text{conv,1}} + R''_{\text{cond}} + R''_{\text{conv,2}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 내부 대류 열저항",
        content: (
          <div className="text-center py-2">
            <Math tex="R''_{\text{conv,1}} = \frac{1}{h_1} = \frac{1}{10} = 0.100 \text{ m}^2\text{·K/W}" display />
          </div>
        ),
      },
      {
        label: "Step 3: 벽 전도 열저항",
        content: (
          <div className="text-center py-2">
            <Math tex="R''_{\text{cond}} = \frac{L}{k} = \frac{0.25}{0.8} = 0.3125 \text{ m}^2\text{·K/W}" display />
          </div>
        ),
      },
      {
        label: "Step 4: 외부 대류 열저항",
        content: (
          <div className="text-center py-2">
            <Math tex="R''_{\text{conv,2}} = \frac{1}{h_2} = \frac{1}{40} = 0.025 \text{ m}^2\text{·K/W}" display />
          </div>
        ),
      },
      {
        label: "Step 5: 총 열저항 및 열유속 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R''_{\text{total}} = 0.100 + 0.3125 + 0.025 = 0.4375 \text{ m}^2\text{·K/W}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q'' = \frac{T_{\infty,1} - T_{\infty,2}}{R''_{\text{total}}} = \frac{80 - 15}{0.4375} = \frac{65}{0.4375}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 6: 최종 결과 및 분석",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q'' = 148.6 \text{ W/m}^2" display />
            </div>
            <p className="text-gray-400 mt-2">
              벽 전도 열저항(0.3125)이 총 열저항의 71.4%로 가장 크며,
              내부 대류(22.9%), 외부 대류(5.7%) 순입니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="q'' \approx 148.6 \text{ W/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          벽체 전도 열저항이 지배적이므로 열전달을 줄이려면 벽체 단열이 가장 효과적입니다.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Surface Energy Balance",
    topic: "Energy Balance",
    topicColor: "purple",
    problem: (
      <p>
        수평 표면이 태양 복사 <Math tex="G_s = 800" /> W/m²를 받고 있습니다.
        표면의 방사율과 흡수율이 <Math tex="\varepsilon = \alpha = 0.6" />,
        대류 열전달 계수 <Math tex="h = 12" /> W/(m²·K), 주위 공기 온도
        <Math tex="T_\infty = 25" />°C일 때, 정상상태에서의 표면 온도를 구하시오.
        (복사 방출은 대류에 비해 작다고 가정하여 1차 근사)
      </p>
    ),
    given: [
      "Gs = 800 W/m² (태양 복사)",
      "ε = α = 0.6",
      "h = 12 W/(m²·K)",
      "T∞ = 25°C",
    ],
    find: "Ts [°C]",
    steps: [
      {
        label: "Step 1: 에너지 균형 방정식 설정",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              정상상태에서 표면의 에너지 균형: 흡수된 에너지 = 방출된 에너지
            </p>
            <div className="text-center py-2">
              <Math tex="\alpha G_s = q''_{\text{conv}} + q''_{\text{rad,emit}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\alpha G_s = h(T_s - T_\infty) + \varepsilon \sigma T_s^4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 흡수된 태양 복사 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\alpha G_s = 0.6 \times 800 = 480 \text{ W/m}^2" display />
          </div>
        ),
      },
      {
        label: "Step 3: 1차 근사 (복사 방출 무시)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              표면 온도가 상대적으로 낮을 것으로 예상되므로, 복사 방출을 먼저 무시합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\alpha G_s \approx h(T_s - T_\infty)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="480 = 12 \times (T_s - 25)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 표면 온도 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_s - 25 = \frac{480}{12} = 40" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_s = 65 \text{ °C} = 338 \text{ K}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 근사 타당성 검증",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              무시한 복사 방출항의 크기를 확인합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\varepsilon \sigma T_s^4 = 0.6 \times 5.67 \times 10^{-8} \times (338)^4" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.6 \times 5.67 \times 10^{-8} \times 1.305 \times 10^{10} \approx 444 \text{ W/m}^2" display />
            </div>
            <p className="text-gray-400 mt-2">
              복사 방출이 상당히 크므로 (444 W/m²), 정밀한 답을 얻으려면 반복 계산이 필요합니다.
              그러나 1차 근사로서 Ts ≈ 65°C가 합리적인 출발점입니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T_s \approx 65 \text{ °C} \;\;\text{(1차 근사, 복사 방출 무시)}" display />
        <p className="text-sm text-gray-400 mt-2">
          복사 방출까지 포함하면 실제 Ts는 65°C보다 낮아집니다.
          정확한 해는 반복법(iteration)으로 구할 수 있습니다.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Material Conductivity Comparison",
    topic: "Conduction Rate",
    topicColor: "emerald",
    problem: (
      <p>
        동일한 기하학적 조건(두께 <Math tex="L = 0.1" /> m, 온도차 <Math tex="\Delta T = 50" /> K)에서
        세 가지 재료의 열유속을 비교하시오:
        구리(<Math tex="k = 401" /> W/(m·K)),
        강철(<Math tex="k = 60" /> W/(m·K)),
        유리(<Math tex="k = 1.4" /> W/(m·K)).
      </p>
    ),
    given: [
      "L = 0.1 m (모든 재료 동일)",
      "ΔT = 50 K (모든 재료 동일)",
      "k_copper = 401 W/(m·K)",
      "k_steel = 60 W/(m·K)",
      "k_glass = 1.4 W/(m·K)",
    ],
    find: "q'' for each material [W/m²]",
    steps: [
      {
        label: "Step 1: Fourier 법칙 적용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              동일한 기하학에서 열유속은 열전도율에 비례합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="q'' = k \frac{\Delta T}{L} = k \times \frac{50}{0.1} = 500k" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 구리(Copper) 열유속",
        content: (
          <div className="text-center py-2">
            <Math tex="q''_{\text{Cu}} = 401 \times 500 = 200{,}500 \text{ W/m}^2 = 200.5 \text{ kW/m}^2" display />
          </div>
        ),
      },
      {
        label: "Step 3: 강철(Steel) 열유속",
        content: (
          <div className="text-center py-2">
            <Math tex="q''_{\text{Steel}} = 60 \times 500 = 30{,}000 \text{ W/m}^2 = 30.0 \text{ kW/m}^2" display />
          </div>
        ),
      },
      {
        label: "Step 4: 유리(Glass) 열유속",
        content: (
          <div className="text-center py-2">
            <Math tex="q''_{\text{Glass}} = 1.4 \times 500 = 700 \text{ W/m}^2 = 0.7 \text{ kW/m}^2" display />
          </div>
        ),
      },
      {
        label: "Step 5: 비교 분석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">재료별 열유속 비:</p>
            <div className="text-center py-2">
              <Math tex="q''_{\text{Cu}} : q''_{\text{Steel}} : q''_{\text{Glass}} = 401 : 60 : 1.4 = 286 : 42.9 : 1" display />
            </div>
            <p className="text-gray-400 mt-2">
              구리는 유리보다 약 286배 큰 열유속을 가지며, 이는 열전도율 차이에 의한 것입니다.
              이것이 구리가 방열판(heat sink) 재료로, 유리가 단열재로 사용되는 이유입니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="q''_{\text{Cu}} = 200{,}500 \text{ W/m}^2, \;\; q''_{\text{Steel}} = 30{,}000 \text{ W/m}^2, \;\; q''_{\text{Glass}} = 700 \text{ W/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          열전도율이 열유속을 직접 결정합니다. 구리(고전도) → 방열, 유리(저전도) → 단열.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "Insulation Thickness Effect",
    topic: "Insulation",
    topicColor: "orange",
    problem: (
      <p>
        벽체(<Math tex="k_{\text{wall}} = 1.0" /> W/(m·K), <Math tex="L_{\text{wall}} = 0.2" /> m)에
        단열재(<Math tex="k_{\text{ins}} = 0.04" /> W/(m·K), <Math tex="L_{\text{ins}} = 0.05" /> m)를 추가합니다.
        내부 대류 계수 <Math tex="h_{\text{in}} = 10" /> W/(m²·K),
        외부 대류 계수 <Math tex="h_{\text{out}} = 25" /> W/(m²·K),
        온도차 <Math tex="\Delta T = 40" /> °C일 때,
        단열재 유무에 따른 열유속을 비교하고 열손실 감소율을 구하시오.
      </p>
    ),
    given: [
      "k_wall = 1.0 W/(m·K), L_wall = 0.2 m",
      "k_ins = 0.04 W/(m·K), L_ins = 0.05 m",
      "h_in = 10 W/(m²·K), h_out = 25 W/(m²·K)",
      "ΔT = T∞,1 - T∞,2 = 40°C",
    ],
    find: "q'' with/without insulation, % reduction",
    steps: [
      {
        label: "Step 1: 단열재 없는 경우 열저항",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R''_{\text{no ins}} = \frac{1}{h_{\text{in}}} + \frac{L_{\text{wall}}}{k_{\text{wall}}} + \frac{1}{h_{\text{out}}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{1}{10} + \frac{0.2}{1.0} + \frac{1}{25} = 0.100 + 0.200 + 0.040 = 0.340 \text{ m}^2\text{·K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 단열재 없는 경우 열유속",
        content: (
          <div className="text-center py-2">
            <Math tex="q''_{\text{no ins}} = \frac{\Delta T}{R''_{\text{no ins}}} = \frac{40}{0.340} = 117.6 \text{ W/m}^2" display />
          </div>
        ),
      },
      {
        label: "Step 3: 단열재 있는 경우 열저항",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R''_{\text{with ins}} = \frac{1}{h_{\text{in}}} + \frac{L_{\text{wall}}}{k_{\text{wall}}} + \frac{L_{\text{ins}}}{k_{\text{ins}}} + \frac{1}{h_{\text{out}}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.100 + 0.200 + \frac{0.05}{0.04} + 0.040" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.100 + 0.200 + 1.250 + 0.040 = 1.590 \text{ m}^2\text{·K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 단열재 있는 경우 열유속",
        content: (
          <div className="text-center py-2">
            <Math tex="q''_{\text{with ins}} = \frac{40}{1.590} = 25.2 \text{ W/m}^2" display />
          </div>
        ),
      },
      {
        label: "Step 5: 열손실 감소율 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{Reduction} = \frac{q''_{\text{no ins}} - q''_{\text{with ins}}}{q''_{\text{no ins}}} \times 100\%" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{117.6 - 25.2}{117.6} \times 100\% = 78.6\%" display />
            </div>
            <p className="text-gray-400 mt-2">
              5 cm 단열재가 총 열저항의 78.6% (1.250/1.590)를 차지합니다.
              두께는 얇지만 낮은 열전도율 때문에 매우 효과적입니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="q''_{\text{without}} = 117.6 \text{ W/m}^2, \quad q''_{\text{with}} = 25.2 \text{ W/m}^2" display />
        <Math tex="\text{Heat loss reduction} = 78.6\%" display />
        <p className="text-sm text-gray-400 mt-2">
          5 cm의 얇은 단열재만으로도 열손실을 약 79% 줄일 수 있습니다.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Radiation Exchange Between Surfaces",
    topic: "Radiation Exchange",
    topicColor: "pink",
    problem: (
      <p>
        두 개의 큰 평행 평판이 서로 마주보고 있습니다.
        평판 1의 온도 <Math tex="T_1 = 600" /> K, 방사율 <Math tex="\varepsilon_1 = 0.7" />,
        평판 2의 온도 <Math tex="T_2 = 300" /> K, 방사율 <Math tex="\varepsilon_2 = 0.5" />일 때,
        두 표면 사이의 순 복사 열유속을 계산하시오.
      </p>
    ),
    given: [
      "T₁ = 600 K, ε₁ = 0.7",
      "T₂ = 300 K, ε₂ = 0.5",
      "σ = 5.67 × 10⁻⁸ W/(m²·K⁴)",
      "Two large parallel plates (F₁₂ = 1)",
    ],
    find: "q''_net [W/m²]",
    steps: [
      {
        label: "Step 1: 두 평행 평판 간 복사 교환 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              두 무한 평행 평판 사이의 순 복사 열유속은 다음과 같습니다:
            </p>
            <div className="text-center py-2">
              <Math tex="q''_{\text{net}} = \frac{\sigma(T_1^4 - T_2^4)}{\dfrac{1}{\varepsilon_1} + \dfrac{1}{\varepsilon_2} - 1}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 분모(유효 방사율) 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\frac{1}{\varepsilon_1} + \frac{1}{\varepsilon_2} - 1 = \frac{1}{0.7} + \frac{1}{0.5} - 1 = 1.429 + 2.000 - 1 = 2.429" display />
          </div>
        ),
      },
      {
        label: "Step 3: T⁴ 차이 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_1^4 = (600)^4 = 1.296 \times 10^{11} \text{ K}^4" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_2^4 = (300)^4 = 8.100 \times 10^{9} \text{ K}^4" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_1^4 - T_2^4 = 1.296 \times 10^{11} - 8.100 \times 10^{9} = 1.215 \times 10^{11} \text{ K}^4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 분자 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\sigma(T_1^4 - T_2^4) = 5.67 \times 10^{-8} \times 1.215 \times 10^{11} = 6{,}889 \text{ W/m}^2" display />
          </div>
        ),
      },
      {
        label: "Step 5: 순 복사 열유속 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q''_{\text{net}} = \frac{6{,}889}{2.429} = 2{,}836 \text{ W/m}^2" display />
            </div>
            <p className="text-gray-400 mt-2">
              비교: 두 표면 모두 흑체(ε = 1)라면 q'' = 6,889 W/m²가 됩니다.
              비회색체 효과로 인해 약 59% 감소합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="q''_{\text{net}} \approx 2{,}836 \text{ W/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          열은 고온 표면(600 K)에서 저온 표면(300 K)으로 순 전달됩니다.
          방사율이 1보다 작아 흑체 대비 열교환이 감소합니다.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "Overall Heat Transfer Coefficient",
    topic: "Overall HTC",
    topicColor: "teal",
    problem: (
      <p>
        내부 대류 계수 <Math tex="h_i = 200" /> W/(m²·K), 벽체(두께 <Math tex="L = 0.01" /> m,
        열전도율 <Math tex="k = 50" /> W/(m·K)), 외부 대류 계수 <Math tex="h_o = 50" /> W/(m²·K)인
        평판 벽에 대해 총괄 열전달 계수(Overall Heat Transfer Coefficient) U를 계산하시오.
      </p>
    ),
    given: [
      "h_i = 200 W/(m²·K) (내부 대류)",
      "L = 0.01 m, k = 50 W/(m·K) (벽체)",
      "h_o = 50 W/(m²·K) (외부 대류)",
    ],
    find: "U [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: 총괄 열전달 계수 정의",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              총괄 열전달 계수 U는 총 열저항의 역수입니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\frac{1}{U} = R''_{\text{total}} = \frac{1}{h_i} + \frac{L}{k} + \frac{1}{h_o}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 각 열저항 계산",
        content: (
          <div className="space-y-2">
            <div className="text-center py-1">
              <Math tex="R''_{\text{conv,i}} = \frac{1}{h_i} = \frac{1}{200} = 0.00500 \text{ m}^2\text{·K/W}" display />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{\text{cond}} = \frac{L}{k} = \frac{0.01}{50} = 0.00020 \text{ m}^2\text{·K/W}" display />
            </div>
            <div className="text-center py-1">
              <Math tex="R''_{\text{conv,o}} = \frac{1}{h_o} = \frac{1}{50} = 0.02000 \text{ m}^2\text{·K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 총 열저항 합산",
        content: (
          <div className="text-center py-2">
            <Math tex="R''_{\text{total}} = 0.00500 + 0.00020 + 0.02000 = 0.02520 \text{ m}^2\text{·K/W}" display />
          </div>
        ),
      },
      {
        label: "Step 4: U 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="U = \frac{1}{R''_{\text{total}}} = \frac{1}{0.02520} = 39.7 \text{ W/(m}^2\text{·K)}" display />
          </div>
        ),
      },
      {
        label: "Step 5: 지배 열저항 분석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">각 열저항이 전체에서 차지하는 비율:</p>
            <div className="text-center py-2">
              <Math tex="\text{Internal convection: } \frac{0.005}{0.0252} = 19.8\%" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Wall conduction: } \frac{0.0002}{0.0252} = 0.8\%" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{External convection: } \frac{0.020}{0.0252} = 79.4\%" display />
            </div>
            <p className="text-gray-400 mt-2">
              외부 대류가 지배적이므로, U를 높이려면 외부 대류 계수를 개선해야 합니다 (예: 핀 추가).
              벽체 전도 저항은 무시할 수 있을 정도로 작습니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="U \approx 39.7 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          외부 대류 저항이 전체의 79.4%를 차지하여 총괄 열전달 계수를 지배합니다.
          U 값은 가장 작은 h 값(외부 대류)에 가장 크게 영향을 받습니다.
        </p>
      </div>
    ),
  },
];

const tips = [
  {
    title: "1. 열전달 모드 확인",
    description: "전도, 대류, 복사 중 어떤 모드가 관련되는지 먼저 파악하세요.",
  },
  {
    title: "2. 관련 법칙 적용",
    description: "Fourier, Newton, Stefan-Boltzmann 법칙 중 적절한 것을 선택합니다.",
  },
  {
    title: "3. 열저항 회로 활용",
    description: "복합 문제에서는 열저항 네트워크를 그려서 해석하세요.",
  },
  {
    title: "4. 에너지 보존 확인",
    description: "에너지 균형 방정식 (Ein + Eg - Eout = Est)을 항상 확인하세요.",
  },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={1} problems={problems} tips={tips} />;
}

"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  {
    id: 1,
    title: "Blackbody Total Emissive Power",
    topic: "Blackbody Emission",
    topicColor: "red",
    problem: (
      <p>
        온도 <Math tex="T = 1000" /> K인 흑체(blackbody)의 총 방사력(total emissive power){" "}
        <Math tex="E_b" />를 구하시오. Stefan-Boltzmann 상수는{" "}
        <Math tex="\sigma = 5.67 \times 10^{-8}" /> W/(m<sup>2</sup>&middot;K<sup>4</sup>)입니다.
      </p>
    ),
    given: [
      "흑체 (blackbody)",
      "T = 1000 K",
      "σ = 5.67 × 10⁻⁸ W/(m²·K⁴)",
    ],
    find: "총 방사력 Eb [W/m²]",
    steps: [
      {
        label: "Step 1: Stefan-Boltzmann 법칙",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              흑체의 총 방사력은 Stefan-Boltzmann 법칙으로 주어집니다:
            </p>
            <div className="text-center py-2">
              <Math tex="E_b = \sigma T^4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: T⁴ 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T^4 = (1000)^4 = 10^{12} \text{ K}^4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: Eb 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="E_b = 5.67 \times 10^{-8} \times 10^{12} = 5.67 \times 10^{4}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 최종 결과",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="E_b = 56{,}700 \text{ W/m}^2 = 56.7 \text{ kW/m}^2" display />
            </div>
            <p className="text-gray-400 mt-2">
              참고: 태양 표면(~5800 K)의 방사력은 약 64 MW/m²으로 훨씬 큽니다.
              방사력은 <Math tex="T^4" />에 비례하므로 온도가 2배가 되면 방사력은 16배가 됩니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="E_b = 56{,}700 \text{ W/m}^2 = 56.7 \text{ kW/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          흑체 방사력은 절대온도의 4제곱에 비례합니다 (Stefan-Boltzmann 법칙).
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Wien's Displacement Law",
    topic: "Wien's Law",
    topicColor: "green",
    problem: (
      <p>
        태양의 표면온도는 약 <Math tex="T = 5800" /> K입니다. Wien의 변위 법칙을 이용하여
        태양 복사의 최대 방사 강도에 해당하는 파장 <Math tex="\lambda_{\max}" />를 구하고,
        이 파장이 전자기 스펙트럼의 어느 영역에 해당하는지 설명하시오.
      </p>
    ),
    given: [
      "태양 표면온도 T = 5800 K",
      "Wien 변위 상수: λ_max · T = 2898 μm·K",
    ],
    find: "최대 방사 강도 파장 λ_max [μm]",
    steps: [
      {
        label: "Step 1: Wien의 변위 법칙",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              Planck 분포에서 최대 방사 강도의 파장은 다음 관계를 만족합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\lambda_{\max} \cdot T = 2898 \;\mu\text{m}\cdot\text{K}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: λ_max 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\lambda_{\max} = \frac{2898}{T} = \frac{2898}{5800}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 수치 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\lambda_{\max} = 0.4997 \approx 0.50 \;\mu\text{m}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 스펙트럼 영역 분석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              가시광선 영역은 약 0.38 ~ 0.76 μm입니다.
            </p>
            <p className="text-gray-400">
              <Math tex="\lambda_{\max} \approx 0.50" /> μm은 <strong className="text-green-400">녹색-청색</strong> 가시광선 영역에 해당합니다.
              이것이 태양빛이 가시광선 영역에서 가장 강한 이유이며, 인간의 눈이 이 영역에 가장 민감하게 진화한 이유이기도 합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="\lambda_{\max} = \frac{2898}{5800} \approx 0.50 \;\mu\text{m} \quad \text{(가시광선 영역)}" display />
        <p className="text-sm text-gray-400 mt-2">
          태양의 최대 방사 파장은 가시광선 영역(녹색-청색)에 위치합니다.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Band Emission Fraction",
    topic: "Band Emission",
    topicColor: "blue",
    problem: (
      <p>
        온도 <Math tex="T = 2000" /> K인 흑체에서 파장 <Math tex="\lambda_1 = 1" /> μm에서{" "}
        <Math tex="\lambda_2 = 5" /> μm 사이의 방사 에너지가 총 방사 에너지에서 차지하는 비율을 구하시오.
        흑체 방사 분율 표를 사용하시오.
      </p>
    ),
    given: [
      "T = 2000 K",
      "λ₁ = 1 μm, λ₂ = 5 μm",
      "흑체 방사 분율 표 참조",
    ],
    find: "F(λ₁→λ₂) = F(1μm → 5μm) at T = 2000 K",
    steps: [
      {
        label: "Step 1: λT 값 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              방사 분율 표는 <Math tex="\lambda T" /> 값을 사용합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\lambda_1 T = 1 \times 2000 = 2{,}000 \;\mu\text{m}\cdot\text{K}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\lambda_2 T = 5 \times 2000 = 10{,}000 \;\mu\text{m}\cdot\text{K}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 방사 분율 표에서 값 읽기",
        content: (
          <div>
            <p className="text-gray-400 mb-2">표준 흑체 방사 분율 표에서:</p>
            <div className="text-center py-2">
              <Math tex="F_{(0 \to \lambda_1 T)} = F_{(0 \to 2000)} = 0.0667" display />
            </div>
            <div className="text-center py-2">
              <Math tex="F_{(0 \to \lambda_2 T)} = F_{(0 \to 10000)} = 0.9142" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 대역 방사 분율 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="\lambda_1" />에서 <Math tex="\lambda_2" /> 사이의 분율은 두 값의 차입니다:
            </p>
            <div className="text-center py-2">
              <Math tex="F_{(\lambda_1 \to \lambda_2)} = F_{(0 \to \lambda_2 T)} - F_{(0 \to \lambda_1 T)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 수치 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="F_{(1\,\mu\text{m} \to 5\,\mu\text{m})} = 0.9142 - 0.0667 = 0.8475" display />
            </div>
            <p className="text-gray-400 mt-2">
              즉, 2000 K 흑체에서 방출되는 전체 에너지의 약 84.75%가 1~5 μm 파장 대역에 집중됩니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="F_{(1\,\mu\text{m} \to 5\,\mu\text{m})} = 0.9142 - 0.0667 = 0.8475 \;\;(84.75\%)" display />
        <p className="text-sm text-gray-400 mt-2">
          2000 K 흑체의 약 84.75%의 에너지가 1~5 μm 대역(근적외선 ~ 중적외선)에서 방출됩니다.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Real Surface Emission",
    topic: "Real Surface",
    topicColor: "amber",
    problem: (
      <p>
        방사율 <Math tex="\varepsilon = 0.6" />인 실제 표면(gray surface)의 온도가{" "}
        <Math tex="T = 500" /> K이고, 면적이 <Math tex="A = 2" /> m²입니다.
        이 표면에서 방출되는 총 복사 에너지 <Math tex="E" />를 구하고,
        동일 온도의 흑체 방사와 비교하시오.
      </p>
    ),
    given: [
      "ε = 0.6 (gray surface)",
      "T = 500 K",
      "A = 2 m²",
      "σ = 5.67 × 10⁻⁸ W/(m²·K⁴)",
    ],
    find: "방출 복사 에너지 E [W] 및 흑체와의 비교",
    steps: [
      {
        label: "Step 1: 흑체 방사력 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">동일 온도의 흑체 방사력:</p>
            <div className="text-center py-2">
              <Math tex="E_b = \sigma T^4 = 5.67 \times 10^{-8} \times (500)^4" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 5.67 \times 10^{-8} \times 6.25 \times 10^{10} = 3{,}543.75 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 실제 표면 방사력 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">실제 표면의 방사력은 방사율을 곱합니다:</p>
            <div className="text-center py-2">
              <Math tex="E = \varepsilon \sigma T^4 = \varepsilon E_b = 0.6 \times 3{,}543.75 = 2{,}126.25 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 총 방출 에너지 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">면적을 곱하여 총 에너지를 구합니다:</p>
            <div className="text-center py-2">
              <Math tex="Q_{\text{emit}} = E \cdot A = 2{,}126.25 \times 2 = 4{,}252.5 \text{ W}" display />
            </div>
            <p className="text-gray-400 mt-2">흑체의 경우:</p>
            <div className="text-center py-2">
              <Math tex="Q_{b} = E_b \cdot A = 3{,}543.75 \times 2 = 7{,}087.5 \text{ W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 비교",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{Q_{\text{emit}}}{Q_b} = \frac{4{,}252.5}{7{,}087.5} = 0.6 = \varepsilon" display />
            </div>
            <p className="text-gray-400 mt-2">
              실제 표면의 방출 에너지는 흑체의 <Math tex="\varepsilon" /> 배입니다.
              이는 방사율의 정의와 일치합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="Q_{\text{emit}} = 4{,}252.5 \text{ W}, \quad Q_{b} = 7{,}087.5 \text{ W}" display />
        <Math tex="\frac{Q_{\text{emit}}}{Q_b} = \varepsilon = 0.6" display />
        <p className="text-sm text-gray-400 mt-2">
          실제 표면(gray body)의 방사 에너지는 동일 온도 흑체의 ε배입니다.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Kirchhoff's Law Application",
    topic: "Kirchhoff's Law",
    topicColor: "cyan",
    problem: (
      <p>
        방사율 <Math tex="\varepsilon = 0.7" />인 회색체(gray, opaque surface)가{" "}
        <Math tex="T = 400" /> K에서 열평형 상태에 있습니다.
        이 표면에 <Math tex="G = 1{,}000" /> W/m²의 입사 복사(irradiation)가 도달할 때,
        흡수된 복사, 반사된 복사, 그리고 표면에서 방출되는 복사를 각각 구하시오.
      </p>
    ),
    given: [
      "ε = 0.7 (gray, opaque surface)",
      "T = 400 K",
      "G = 1,000 W/m² (irradiation)",
      "σ = 5.67 × 10⁻⁸ W/(m²·K⁴)",
    ],
    find: "흡수 G_abs, 반사 G_ref, 방출 E [W/m²]",
    steps: [
      {
        label: "Step 1: Kirchhoff 법칙 적용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              Kirchhoff 법칙에 의해, 열평형 상태의 회색체에서는:
            </p>
            <div className="text-center py-2">
              <Math tex="\alpha = \varepsilon = 0.7" display />
            </div>
            <p className="text-gray-400 mt-2">
              불투명(opaque) 표면이므로 투과율 <Math tex="\tau = 0" />이고:
            </p>
            <div className="text-center py-2">
              <Math tex="\alpha + \rho = 1 \implies \rho = 1 - \alpha = 1 - 0.7 = 0.3" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 흡수 복사 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="G_{\text{abs}} = \alpha \cdot G = 0.7 \times 1{,}000 = 700 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 반사 복사 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="G_{\text{ref}} = \rho \cdot G = 0.3 \times 1{,}000 = 300 \text{ W/m}^2" display />
            </div>
            <p className="text-gray-400 mt-2">
              검증: <Math tex="G_{\text{abs}} + G_{\text{ref}} = 700 + 300 = 1{,}000 = G" /> (에너지 보존)
            </p>
          </div>
        ),
      },
      {
        label: "Step 4: 방출 복사 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">표면에서 방출되는 복사 (입사 복사와 독립적):</p>
            <div className="text-center py-2">
              <Math tex="E = \varepsilon \sigma T^4 = 0.7 \times 5.67 \times 10^{-8} \times (400)^4" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.7 \times 5.67 \times 10^{-8} \times 2.56 \times 10^{10} = 0.7 \times 1{,}451.5" display />
            </div>
            <div className="text-center py-2">
              <Math tex="E = 1{,}016.1 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 에너지 수지 분석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              이 표면의 순 복사 열유속(net radiative heat flux):
            </p>
            <div className="text-center py-2">
              <Math tex="q''_{\text{net}} = G_{\text{abs}} - E = 700 - 1{,}016.1 = -316.1 \text{ W/m}^2" display />
            </div>
            <p className="text-gray-400 mt-2">
              음수 값은 표면이 흡수보다 더 많이 방출하고 있음을 의미합니다.
              열평형을 유지하려면 다른 열전달 메커니즘(전도, 대류)이 이 에너지를 공급해야 합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-1">
        <Math tex="G_{\text{abs}} = \alpha G = 700 \text{ W/m}^2" display />
        <Math tex="G_{\text{ref}} = \rho G = 300 \text{ W/m}^2" display />
        <Math tex="E = \varepsilon \sigma T^4 = 1{,}016.1 \text{ W/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          Kirchhoff 법칙: 회색체에서 α = ε. 흡수와 방출은 서로 독립적인 과정입니다.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "View Factor Reciprocity",
    topic: "View Factor",
    topicColor: "purple",
    problem: (
      <p>
        두 개의 평행한 동축 원형 디스크가 있습니다. 디스크 1의 반지름 <Math tex="R_1 = 0.2" /> m,
        디스크 2의 반지름 <Math tex="R_2 = 0.3" /> m이며, 두 디스크 사이의 거리는{" "}
        <Math tex="L = 0.4" /> m입니다. 도표(chart)에서 <Math tex="F_{12} = 0.17" />로 읽었습니다.
        상반성(reciprocity) 관계를 이용하여 <Math tex="F_{21}" />을 구하시오.
      </p>
    ),
    given: [
      "R₁ = 0.2 m (디스크 1)",
      "R₂ = 0.3 m (디스크 2)",
      "L = 0.4 m (거리)",
      "F₁₂ = 0.17 (도표에서)",
    ],
    find: "F₂₁ (상반성 관계 이용)",
    steps: [
      {
        label: "Step 1: 각 디스크의 면적 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="A_1 = \pi R_1^2 = \pi (0.2)^2 = 0.04\pi \text{ m}^2 = 0.1257 \text{ m}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="A_2 = \pi R_2^2 = \pi (0.3)^2 = 0.09\pi \text{ m}^2 = 0.2827 \text{ m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 상반성(Reciprocity) 관계식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">형상계수의 상반성 관계:</p>
            <div className="text-center py-2">
              <Math tex="A_1 F_{12} = A_2 F_{21}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: F₂₁ 풀기",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="F_{21} = \frac{A_1}{A_2} F_{12} = \frac{0.04\pi}{0.09\pi} \times 0.17 = \frac{4}{9} \times 0.17" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 수치 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="F_{21} = \frac{4}{9} \times 0.17 = 0.4444 \times 0.17 = 0.0756" display />
            </div>
            <p className="text-gray-400 mt-2">
              검증: <Math tex="F_{21} < F_{12}" />. 큰 표면(디스크 2)에서 작은 표면(디스크 1)을
              바라보는 형상계수는 더 작습니다. 이는 물리적으로 타당합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="F_{21} = \frac{A_1}{A_2} F_{12} = \frac{4}{9} \times 0.17 = 0.0756" display />
        <p className="text-sm text-gray-400 mt-2">
          상반성 관계 A₁F₁₂ = A₂F₂₁에 의해, 면적이 큰 표면의 형상계수가 더 작습니다.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "View Factor Summation Rule",
    topic: "View Factor Summation",
    topicColor: "emerald",
    problem: (
      <p>
        세 개의 평평한(flat) 표면으로 구성된 삼각형 밀폐계(enclosure)가 있습니다.
        면적은 <Math tex="A_1 = 0.5" /> m², <Math tex="A_2 = 0.3" /> m²,{" "}
        <Math tex="A_3 = 0.4" /> m²이고, <Math tex="F_{12} = 0.4" />입니다.
        합산 법칙과 상반성 관계를 이용하여 <Math tex="F_{13}" />, <Math tex="F_{21}" />,{" "}
        <Math tex="F_{23}" />을 구하시오.
      </p>
    ),
    given: [
      "삼각형 밀폐계 (3개의 flat 표면)",
      "A₁ = 0.5 m², A₂ = 0.3 m², A₃ = 0.4 m²",
      "F₁₂ = 0.4",
      "평평한 표면: F_ii = 0 (자기 자신을 볼 수 없음)",
    ],
    find: "F₁₃, F₂₁, F₂₃",
    steps: [
      {
        label: "Step 1: 합산 법칙으로 F₁₃ 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              표면 1에 대한 합산 법칙 (<Math tex="F_{11} = 0" /> for flat surface):
            </p>
            <div className="text-center py-2">
              <Math tex="F_{11} + F_{12} + F_{13} = 1" display />
            </div>
            <div className="text-center py-2">
              <Math tex="0 + 0.4 + F_{13} = 1 \implies F_{13} = 0.6" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 상반성으로 F₂₁ 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="A_1 F_{12} = A_2 F_{21}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="F_{21} = \frac{A_1}{A_2} F_{12} = \frac{0.5}{0.3} \times 0.4 = \frac{5}{3} \times 0.4 = 0.667" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 합산 법칙으로 F₂₃ 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              표면 2에 대한 합산 법칙 (<Math tex="F_{22} = 0" /> for flat surface):
            </p>
            <div className="text-center py-2">
              <Math tex="F_{21} + F_{22} + F_{23} = 1" display />
            </div>
            <div className="text-center py-2">
              <Math tex="0.667 + 0 + F_{23} = 1 \implies F_{23} = 0.333" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 검증",
        content: (
          <div>
            <p className="text-gray-400 mb-2">상반성으로 나머지 형상계수를 검증합니다:</p>
            <div className="text-center py-2">
              <Math tex="A_1 F_{13} = A_3 F_{31} \implies F_{31} = \frac{0.5 \times 0.6}{0.4} = 0.75" display />
            </div>
            <div className="text-center py-2">
              <Math tex="A_2 F_{23} = A_3 F_{32} \implies F_{32} = \frac{0.3 \times 0.333}{0.4} = 0.25" display />
            </div>
            <p className="text-gray-400 mt-2">
              표면 3 합산 검증: <Math tex="F_{31} + F_{32} + F_{33} = 0.75 + 0.25 + 0 = 1.0" /> (OK)
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-1">
        <Math tex="F_{13} = 0.6, \quad F_{21} = 0.667, \quad F_{23} = 0.333" display />
        <p className="text-sm text-gray-400 mt-2">
          합산 법칙(ΣF_ij = 1)과 상반성(A₁F₁₂ = A₂F₂₁)만으로 모든 형상계수를 결정할 수 있습니다.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "Two-Surface Enclosure: Parallel Plates",
    topic: "Two-Surface Enclosure",
    topicColor: "orange",
    problem: (
      <p>
        두 개의 매우 큰 평행판이 마주보고 있습니다. 판 1의 온도는{" "}
        <Math tex="T_1 = 800" /> K, 방사율 <Math tex="\varepsilon_1 = 0.8" />이고,
        판 2의 온도는 <Math tex="T_2 = 400" /> K, 방사율 <Math tex="\varepsilon_2 = 0.5" />입니다.
        단위 면적당 순 복사 열전달률 <Math tex="q''_{12}" />를 구하시오.
      </p>
    ),
    given: [
      "매우 큰 평행판 (F₁₂ = 1)",
      "T₁ = 800 K, ε₁ = 0.8",
      "T₂ = 400 K, ε₂ = 0.5",
      "σ = 5.67 × 10⁻⁸ W/(m²·K⁴)",
    ],
    find: "단위 면적당 순 복사 열전달률 q''₁₂ [W/m²]",
    steps: [
      {
        label: "Step 1: 무한 평행판의 복사 열전달 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              두 무한 평행판 사이의 순 복사 열전달 (per unit area):
            </p>
            <div className="text-center py-2">
              <Math tex="q''_{12} = \frac{\sigma(T_1^4 - T_2^4)}{\dfrac{1}{\varepsilon_1} + \dfrac{1}{\varepsilon_2} - 1}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 분모 계산 (총 저항)",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{1}{\varepsilon_1} + \frac{1}{\varepsilon_2} - 1 = \frac{1}{0.8} + \frac{1}{0.5} - 1 = 1.25 + 2.0 - 1.0 = 2.25" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: σ(T₁⁴ - T₂⁴) 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_1^4 = (800)^4 = 4.096 \times 10^{11} \text{ K}^4" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_2^4 = (400)^4 = 2.56 \times 10^{10} \text{ K}^4" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\sigma(T_1^4 - T_2^4) = 5.67 \times 10^{-8} \times (4.096 - 0.256) \times 10^{11}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 5.67 \times 10^{-8} \times 3.84 \times 10^{11} = 21{,}773 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 최종 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q''_{12} = \frac{21{,}773}{2.25} = 9{,}677 \text{ W/m}^2" display />
            </div>
            <p className="text-gray-400 mt-2">
              참고: 두 판이 모두 흑체(ε = 1)라면 <Math tex="q''_{bb} = 21{,}773" /> W/m²이므로,
              표면 방사율에 의한 감소 비율은 <Math tex="9{,}677/21{,}773 = 0.444" />입니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="q''_{12} = \frac{\sigma(T_1^4 - T_2^4)}{1/\varepsilon_1 + 1/\varepsilon_2 - 1} = \frac{21{,}773}{2.25} = 9{,}677 \text{ W/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          무한 평행판에서 F₁₂ = 1이므로, 저항은 두 표면 저항의 합으로 단순화됩니다.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Radiation Shield Effect",
    topic: "Radiation Shield",
    topicColor: "pink",
    problem: (
      <p>
        문제 8과 동일한 두 평행판 (<Math tex="T_1 = 800" /> K, <Math tex="\varepsilon_1 = 0.8" />;{" "}
        <Math tex="T_2 = 400" /> K, <Math tex="\varepsilon_2 = 0.5" />) 사이에
        양면 방사율이 <Math tex="\varepsilon_s = 0.1" />인 복사 차폐판(radiation shield) 1개를 삽입합니다.
        차폐판 삽입 후의 순 복사 열전달률 <Math tex="q''_{12}" />를 구하고,
        차폐판이 없는 경우 대비 열전달 감소율(%)을 계산하시오.
      </p>
    ),
    given: [
      "T₁ = 800 K, ε₁ = 0.8; T₂ = 400 K, ε₂ = 0.5",
      "차폐판: ε_s = 0.1 (양면 동일)",
      "무한 평행판 (F = 1)",
      "차폐판 없는 경우: q''_no shield = 9,677 W/m²",
    ],
    find: "차폐판 삽입 후 q''₁₂ 및 열전달 감소율 [%]",
    steps: [
      {
        label: "Step 1: 차폐판이 있는 복사 열전달 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              차폐판이 추가되면 복사 저항이 직렬로 추가됩니다:
            </p>
            <div className="text-center py-2">
              <Math tex="q''_{12} = \frac{\sigma(T_1^4 - T_2^4)}{\left(\dfrac{1}{\varepsilon_1} + \dfrac{1}{\varepsilon_s} - 1\right) + \left(\dfrac{1}{\varepsilon_s} + \dfrac{1}{\varepsilon_2} - 1\right)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 분모 계산 (총 저항)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">판 1 - 차폐판 사이 저항:</p>
            <div className="text-center py-2">
              <Math tex="R_1 = \frac{1}{\varepsilon_1} + \frac{1}{\varepsilon_s} - 1 = \frac{1}{0.8} + \frac{1}{0.1} - 1 = 1.25 + 10 - 1 = 10.25" display />
            </div>
            <p className="text-gray-400 mb-2">차폐판 - 판 2 사이 저항:</p>
            <div className="text-center py-2">
              <Math tex="R_2 = \frac{1}{\varepsilon_s} + \frac{1}{\varepsilon_2} - 1 = \frac{1}{0.1} + \frac{1}{0.5} - 1 = 10 + 2 - 1 = 11.0" display />
            </div>
            <p className="text-gray-400 mb-2">총 저항:</p>
            <div className="text-center py-2">
              <Math tex="R_{\text{total}} = R_1 + R_2 = 10.25 + 11.0 = 21.25" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 차폐판 있는 경우의 열전달 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q''_{12,\text{shield}} = \frac{21{,}773}{21.25} = 1{,}025 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 열전달 감소율 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{감소율} = \frac{q''_{\text{no shield}} - q''_{\text{shield}}}{q''_{\text{no shield}}} \times 100\%" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{9{,}677 - 1{,}025}{9{,}677} \times 100\% = \frac{8{,}652}{9{,}677} \times 100\% = 89.4\%" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 물리적 해석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              낮은 방사율(<Math tex="\varepsilon_s = 0.1" />)의 차폐판 1개로 열전달이 89.4% 감소합니다.
            </p>
            <p className="text-gray-400">
              차폐판의 효과: 저항이 <Math tex="2.25 \to 21.25" />로 약 9.4배 증가했습니다.
              만약 <Math tex="\varepsilon_s = \varepsilon_1 = \varepsilon_2" />였다면 약 50% 감소에 그치지만,
              낮은 ε의 차폐판은 훨씬 큰 효과를 제공합니다 (보온병 원리).
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-1">
        <Math tex="q''_{12,\text{shield}} = \frac{21{,}773}{21.25} = 1{,}025 \text{ W/m}^2" display />
        <Math tex="\text{열전달 감소율} = 89.4\%" display />
        <p className="text-sm text-gray-400 mt-2">
          낮은 방사율(ε = 0.1)의 차폐판 1개로 복사 열전달을 약 89% 감소시킬 수 있습니다 (보온병 원리).
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "Three-Surface Enclosure with Reradiating Surface",
    topic: "Three-Surface Enclosure",
    topicColor: "teal",
    problem: (
      <p>
        3면 밀폐계에서 표면 1 (<Math tex="T_1 = 600" /> K, <Math tex="\varepsilon_1 = 0.6" />,{" "}
        <Math tex="A_1 = 1" /> m²)과 표면 2 (<Math tex="T_2 = 300" /> K,{" "}
        <Math tex="\varepsilon_2 = 0.4" />, <Math tex="A_2 = 1" /> m²) 사이에
        표면 3이 재복사면(reradiating, 단열면)으로 존재합니다.
        형상계수: <Math tex="F_{12} = 0.3" />, <Math tex="F_{13} = 0.7" />,{" "}
        <Math tex="F_{23} = 0.7" />.
        복사 네트워크를 이용하여 표면 1에서 표면 2로의 순 열전달률 <Math tex="q_{12}" />를 구하시오.
      </p>
    ),
    given: [
      "Surface 1: T₁ = 600 K, ε₁ = 0.6, A₁ = 1 m²",
      "Surface 2: T₂ = 300 K, ε₂ = 0.4, A₂ = 1 m²",
      "Surface 3: 재복사면 (reradiating, insulated)",
      "F₁₂ = 0.3, F₁₃ = 0.7, F₂₃ = 0.7",
    ],
    find: "q₁₂ [W] (표면 1 → 표면 2 순 열전달)",
    steps: [
      {
        label: "Step 1: 흑체 방사력 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="E_{b1} = \sigma T_1^4 = 5.67 \times 10^{-8} \times (600)^4 = 5.67 \times 10^{-8} \times 1.296 \times 10^{11} = 7{,}348 \text{ W/m}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="E_{b2} = \sigma T_2^4 = 5.67 \times 10^{-8} \times (300)^4 = 5.67 \times 10^{-8} \times 8.1 \times 10^{9} = 459.3 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 표면 저항 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">표면 1과 표면 2의 복사 표면 저항:</p>
            <div className="text-center py-2">
              <Math tex="R_1 = \frac{1 - \varepsilon_1}{\varepsilon_1 A_1} = \frac{1 - 0.6}{0.6 \times 1} = \frac{0.4}{0.6} = 0.667 \text{ m}^{-2}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R_2 = \frac{1 - \varepsilon_2}{\varepsilon_2 A_2} = \frac{1 - 0.4}{0.4 \times 1} = \frac{0.6}{0.4} = 1.500 \text{ m}^{-2}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 공간 저항 계산 (재복사면 포함)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              재복사면(R)이 있으면, J₁에서 J₂까지의 공간 저항은 직접 경로와 재복사면 경유 경로의 <strong className="text-white">병렬 합</strong>입니다:
            </p>
            <div className="text-center py-2">
              <Math tex="R_{\text{direct}} = \frac{1}{A_1 F_{12}} = \frac{1}{1 \times 0.3} = 3.333" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R_{\text{1R}} = \frac{1}{A_1 F_{13}} = \frac{1}{1 \times 0.7} = 1.429" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R_{\text{R2}} = \frac{1}{A_2 F_{23}} = \frac{1}{1 \times 0.7} = 1.429" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R_{\text{through R}} = R_{\text{1R}} + R_{\text{R2}} = 1.429 + 1.429 = 2.857" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 병렬 합산 및 총 저항",
        content: (
          <div>
            <p className="text-gray-400 mb-2">직접 경로와 재복사면 경유 경로의 병렬 합:</p>
            <div className="text-center py-2">
              <Math tex="\frac{1}{R_{\text{space}}} = \frac{1}{R_{\text{direct}}} + \frac{1}{R_{\text{through R}}} = \frac{1}{3.333} + \frac{1}{2.857} = 0.300 + 0.350 = 0.650" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R_{\text{space}} = \frac{1}{0.650} = 1.538" display />
            </div>
            <p className="text-gray-400 mt-2">총 저항 (직렬 연결):</p>
            <div className="text-center py-2">
              <Math tex="R_{\text{total}} = R_1 + R_{\text{space}} + R_2 = 0.667 + 1.538 + 1.500 = 3.705" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 순 열전달률 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q_{12} = \frac{E_{b1} - E_{b2}}{R_{\text{total}}} = \frac{7{,}348 - 459.3}{3.705} = \frac{6{,}889}{3.705}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q_{12} = 1{,}859 \text{ W}" display />
            </div>
            <p className="text-gray-400 mt-2">
              참고: 재복사면이 없고 직접 경로만 있었다면{" "}
              <Math tex="R = 0.667 + 3.333 + 1.500 = 5.500" />이므로{" "}
              <Math tex="q = 6{,}889/5.500 = 1{,}253" /> W입니다.
              재복사면이 추가 경로를 제공하여 열전달이 48% 증가합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-1">
        <Math tex="q_{12} = \frac{E_{b1} - E_{b2}}{R_1 + R_{\text{space}} + R_2} = \frac{7{,}348 - 459.3}{3.705} = 1{,}859 \text{ W}" display />
        <p className="text-sm text-gray-400 mt-2">
          재복사면은 추가 복사 경로를 제공하여, 직접 경로만 있는 경우보다 열전달을 증가시킵니다.
        </p>
      </div>
    ),
  },
];

const tips = [
  { title: "1. 절대온도 사용", description: "복사 계산은 반드시 켈빈(K) 온도를 사용하세요." },
  { title: "2. 형상계수 관계식", description: "상반성(A₁F₁₂=A₂F₂₁)과 합산법칙(ΣFij=1)을 활용하세요." },
  { title: "3. 복사 열저항", description: "표면저항 (1-ε)/(εA)와 공간저항 1/(AF₁₂)를 구분하세요." },
  { title: "4. 복사 차폐 효과", description: "차폐판 1개 추가 시 열전달이 약 50% 감소합니다 (동일 ε일 때)." },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={14} problems={problems} tips={tips} />;
}

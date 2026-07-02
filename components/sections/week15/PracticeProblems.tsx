"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  {
    id: 1,
    title: "비등 곡선 해석",
    topic: "Boiling Curve",
    topicColor: "red",
    problem: (
      <p>
        물이 1 atm (<Math tex="T_{\text{sat}} = 100" />°C)에서 가열면 위에서 비등하고 있습니다.
        가열면 온도가 <Math tex="T_s = 110" />°C일 때, 과열도 <Math tex="\Delta T_e" />를 계산하고
        비등 곡선에서 어떤 영역에 해당하는지 판별하시오.
        비등 곡선의 각 영역(자연대류, 핵비등, 천이비등, 막비등)의 대략적인 과열도 범위를 설명하시오.
      </p>
    ),
    given: [
      "유체: 물, 1 atm",
      "T_sat = 100°C",
      "T_s = 110°C",
    ],
    find: "과열도 ΔT_e 및 비등 영역 판별",
    steps: [
      {
        label: "Step 1: 과열도 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">과열도(excess temperature)는 가열면 온도와 포화온도의 차이입니다:</p>
            <div className="text-center py-2">
              <Math tex="\Delta T_e = T_s - T_{\text{sat}} = 110 - 100 = 10\text{°C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 비등 곡선 영역 정리",
        content: (
          <div>
            <p className="text-gray-400 mb-2">1 atm 물 기준 비등 곡선의 각 영역:</p>
            <ul className="space-y-1 text-gray-400">
              <li>- <strong className="text-white">자연대류 비등 (Free Convection)</strong>: <Math tex="\Delta T_e < 5" />°C</li>
              <li>- <strong className="text-white">핵비등 (Nucleate Boiling)</strong>: <Math tex="5 \leq \Delta T_e \leq 30" />°C</li>
              <li>- <strong className="text-white">천이비등 (Transition Boiling)</strong>: <Math tex="30 < \Delta T_e < 120" />°C</li>
              <li>- <strong className="text-white">막비등 (Film Boiling)</strong>: <Math tex="\Delta T_e \geq 120" />°C</li>
            </ul>
          </div>
        ),
      },
      {
        label: "Step 3: 영역 판별",
        content: (
          <div>
            <p className="text-gray-400 mb-2">계산된 과열도를 비등 곡선과 비교합니다:</p>
            <div className="text-center py-2">
              <Math tex="\Delta T_e = 10\text{°C} \quad \Rightarrow \quad 5 \leq 10 \leq 30" display />
            </div>
            <p className="text-gray-400">
              따라서 <strong className="text-white">핵비등(Nucleate Boiling)</strong> 영역에 해당합니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 4: 물리적 해석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">핵비등 영역의 특징:</p>
            <ul className="space-y-1 text-gray-400">
              <li>- 가열면의 활성 핵생성 사이트(active nucleation sites)에서 기포가 형성 및 이탈</li>
              <li>- 열전달 계수가 매우 높음 (기포의 교반 효과)</li>
              <li>- 열유속이 과열도에 대해 급격히 증가: <Math tex="q'' \propto \Delta T_e^3" /> (대략적)</li>
              <li>- 산업적으로 가장 바람직한 비등 영역</li>
            </ul>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\Delta T_e = 10\text{°C} \quad \Rightarrow \quad \textbf{핵비등 (Nucleate Boiling) 영역}" display />
        <p className="text-sm text-gray-400 mt-2">
          핵비등은 높은 열전달 효율을 제공하며, 비등 곡선에서 가장 급격한 열유속 증가가 나타나는 구간입니다.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "핵비등 열유속 (Rohsenow)",
    topic: "Nucleate Boiling",
    topicColor: "green",
    problem: (
      <p>
        1 atm의 물이 연마된 구리(polished copper) 표면 위에서 비등하고 있습니다.
        가열면 온도 <Math tex="T_s = 112" />°C일 때, Rohsenow 상관식을 사용하여 핵비등 열유속 <Math tex="q''" />를 구하시오.
        표면-유체 조합 상수: <Math tex="C_{s,f} = 0.0128" />, <Math tex="n = 1.0" />.
      </p>
    ),
    given: [
      "T_sat = 100°C, T_s = 112°C → ΔT_e = 12°C",
      "μ_l = 2.82 × 10⁻⁴ kg/(m·s)",
      "h_fg = 2257 kJ/kg = 2.257 × 10⁶ J/kg",
      "ρ_l = 957.9 kg/m³, ρ_v = 0.596 kg/m³",
      "c_{p,l} = 4217 J/(kg·K), Pr_l = 1.76",
      "σ = 0.0589 N/m",
      "C_{s,f} = 0.0128, n = 1.0",
    ],
    find: "핵비등 열유속 q'' [W/m²]",
    steps: [
      {
        label: "Step 1: Rohsenow 상관식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Rohsenow 상관식은 핵비등 열유속을 예측합니다:</p>
            <div className="text-center py-2">
              <Math tex="q'' = \mu_l \, h_{fg} \left[\frac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2} \left[\frac{c_{p,l} \, \Delta T_e}{C_{s,f} \, h_{fg} \, Pr_l^{\,n}}\right]^3" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 첫 번째 괄호 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\left[\frac{g(\rho_l - \rho_v)}{\sigma}\right]^{1/2} = \left[\frac{9.81 \times (957.9 - 0.596)}{0.0589}\right]^{1/2}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \left[\frac{9.81 \times 957.3}{0.0589}\right]^{1/2} = \left[159{,}388\right]^{1/2} = 399.2 \text{ m}^{-1}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 두 번째 괄호 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{c_{p,l} \, \Delta T_e}{C_{s,f} \, h_{fg} \, Pr_l^{\,n}} = \frac{4217 \times 12}{0.0128 \times 2.257 \times 10^6 \times 1.76^{1.0}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{50{,}604}{0.0128 \times 2.257 \times 10^6 \times 1.76} = \frac{50{,}604}{50{,}845} = 0.9953" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\left(0.9953\right)^3 = 0.9859" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 선행 계수",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\mu_l \, h_{fg} = 2.82 \times 10^{-4} \times 2.257 \times 10^6 = 636.5 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 최종 열유속 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q'' = 636.5 \times 399.2 \times 0.9859" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q'' = 636.5 \times 399.2 \times 0.9859 = 250{,}500 \text{ W/m}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\boxed{q'' \approx 2.51 \times 10^5 \text{ W/m}^2 \approx 251 \text{ kW/m}^2}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q'' \approx 2.51 \times 10^5 \text{ W/m}^2 = 251 \text{ kW/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          핵비등의 높은 열전달 능력을 보여줍니다. Rohsenow 상관식에서 <Math tex="C_{s,f}" />와 <Math tex="n" />은 표면-유체 조합에 따라 다릅니다.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "임계열유속 (CHF)",
    topic: "CHF",
    topicColor: "blue",
    problem: (
      <p>
        1 atm의 물이 큰 수평 가열면 위에서 비등하고 있습니다.
        Zuber 상관식을 사용하여 임계열유속(Critical Heat Flux) <Math tex="q''_{\max}" />를 계산하시오.
      </p>
    ),
    given: [
      "ρ_l = 957.9 kg/m³",
      "ρ_v = 0.596 kg/m³",
      "h_fg = 2.257 × 10⁶ J/kg",
      "σ = 0.0589 N/m",
      "g = 9.81 m/s²",
    ],
    find: "임계열유속 q''_max [W/m²]",
    steps: [
      {
        label: "Step 1: Zuber CHF 상관식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Zuber가 유도한 임계열유속 상관식:</p>
            <div className="text-center py-2">
              <Math tex="q''_{\max} = 0.131 \, h_{fg} \, \rho_v \left[\frac{\sigma \, g \, (\rho_l - \rho_v)}{\rho_v^2}\right]^{1/4}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 괄호 내부 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{\sigma \, g \, (\rho_l - \rho_v)}{\rho_v^2} = \frac{0.0589 \times 9.81 \times (957.9 - 0.596)}{(0.596)^2}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{0.0589 \times 9.81 \times 957.3}{0.3552} = \frac{553.3}{0.3552} = 1{,}557.7" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 1/4 거듭제곱",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\left[1{,}557.7\right]^{1/4} = (1557.7)^{0.25} = 6.282" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 최종 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q''_{\max} = 0.131 \times 2.257 \times 10^6 \times 0.596 \times 6.282" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.131 \times 2.257 \times 10^6 \times 3.744" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 1.107 \times 10^6 \text{ W/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 공학적 의미",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\boxed{q''_{\max} \approx 1.11 \text{ MW/m}^2}" display />
            </div>
            <p className="text-gray-400 mt-2">
              CHF를 초과하면 막비등으로 전환되며, 열전달 계수가 급격히 감소하여 표면 온도가 위험 수준으로 상승합니다.
              실제 설계에서는 CHF의 70~80% 이하에서 운전합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q''_{\max} \approx 1.11 \times 10^6 \text{ W/m}^2 = 1.11 \text{ MW/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          이 값은 물 1 atm에서의 대표적인 CHF 값입니다. 안전 설계 시 이 값을 절대 초과하지 않도록 합니다.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "최소 열유속 (Leidenfrost Point)",
    topic: "Minimum Heat Flux",
    topicColor: "amber",
    problem: (
      <p>
        1 atm의 물이 수평 가열면 위에서 비등하고 있습니다.
        Zuber 상관식을 사용하여 최소 열유속(Minimum Heat Flux, Leidenfrost point) <Math tex="q''_{\min}" />을 계산하시오.
      </p>
    ),
    given: [
      "ρ_l = 957.9 kg/m³",
      "ρ_v = 0.596 kg/m³",
      "h_fg = 2.257 × 10⁶ J/kg",
      "σ = 0.0589 N/m",
      "g = 9.81 m/s²",
    ],
    find: "최소 열유속 q''_min [W/m²]",
    steps: [
      {
        label: "Step 1: Zuber 최소 열유속 상관식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">천이비등에서 막비등으로 전환되는 최소 열유속:</p>
            <div className="text-center py-2">
              <Math tex="q''_{\min} = 0.09 \, h_{fg} \, \rho_v \left[\frac{\sigma \, g \, (\rho_l - \rho_v)}{(\rho_l + \rho_v)^2}\right]^{1/4}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 괄호 내부 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{\sigma \, g \, (\rho_l - \rho_v)}{(\rho_l + \rho_v)^2} = \frac{0.0589 \times 9.81 \times 957.3}{(957.9 + 0.596)^2}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{553.3}{(958.5)^2} = \frac{553.3}{918{,}722} = 6.023 \times 10^{-4}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 1/4 거듭제곱",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\left[6.023 \times 10^{-4}\right]^{1/4} = (6.023 \times 10^{-4})^{0.25} = 0.1567" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 최종 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q''_{\min} = 0.09 \times 2.257 \times 10^6 \times 0.596 \times 0.1567" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.09 \times 2.257 \times 10^6 \times 0.09339" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 18{,}960 \text{ W/m}^2 \approx 19.0 \text{ kW/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: CHF와 비교",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{q''_{\min}}{q''_{\max}} = \frac{19.0}{1{,}110} \approx 0.017 = 1.7\%" display />
            </div>
            <p className="text-gray-400 mt-2">
              최소 열유속은 CHF의 약 1.7%에 불과합니다.
              이 점(Leidenfrost point)은 막비등이 안정적으로 유지되는 최소 조건이며,
              이보다 낮은 열유속에서는 막비등이 붕괴되어 천이비등으로 돌아갑니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q''_{\min} \approx 19.0 \text{ kW/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          최소 열유속은 CHF(<Math tex="\approx 1.11" /> MW/m²)의 약 1.7%입니다. Leidenfrost point에서의 표면 과열도는 약 120°C입니다.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "막비등 열전달 (수평 원통)",
    topic: "Film Boiling",
    topicColor: "cyan",
    problem: (
      <p>
        직경 <Math tex="D = 0.01" /> m인 수평 원통이 <Math tex="T_s = 350" />°C로 유지되고 있으며,
        1 atm 물(<Math tex="T_{\text{sat}} = 100" />°C)에 잠겨 있습니다.
        막비등 상관식을 사용하여 평균 열전달 계수 <Math tex="\bar{h}" />를 구하시오.
        증기 물성치는 막온도 <Math tex="T_f = (350 + 100)/2 = 225" />°C에서 평가합니다.
      </p>
    ),
    given: [
      "D = 0.01 m, T_s = 350°C, T_sat = 100°C",
      "ΔT_e = 250°C",
      "증기(Tf=225°C): k_v = 0.033 W/(m·K), ν_v = 2.7 × 10⁻⁵ m²/s",
      "ρ_v = 0.444 kg/m³, c_{p,v} = 1951 J/(kg·K)",
      "ρ_l = 957.9 kg/m³, h_fg = 2.257 × 10⁶ J/kg",
      "C = 0.62 (수평 원통)",
    ],
    find: "막비등 평균 열전달 계수 h [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: 수정 잠열 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">막비등에서의 수정 잠열:</p>
            <div className="text-center py-2">
              <Math tex="h'_{fg} = h_{fg} + 0.80 \, c_{p,v} \, \Delta T_e" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 2.257 \times 10^6 + 0.80 \times 1951 \times 250" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 2.257 \times 10^6 + 390{,}200 = 2.647 \times 10^6 \text{ J/kg}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 막비등 상관식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">수평 원통에 대한 막비등 상관식 (Bromley):</p>
            <div className="text-center py-2">
              <Math tex="\bar{h}_{\text{conv}} = C \left[\frac{g \, (\rho_l - \rho_v) \, h'_{fg} \, k_v^3}{\nu_v \, \Delta T_e \, D}\right]^{1/4}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 괄호 내부 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">분자:</p>
            <div className="text-center py-2">
              <Math tex="g(\rho_l - \rho_v) h'_{fg} k_v^3 = 9.81 \times 957.5 \times 2.647 \times 10^6 \times (0.033)^3" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 9.81 \times 957.5 \times 2.647 \times 10^6 \times 3.594 \times 10^{-5}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 893.6" display />
            </div>
            <p className="text-gray-400 mb-2 mt-3">분모:</p>
            <div className="text-center py-2">
              <Math tex="\nu_v \, \Delta T_e \, D = 2.7 \times 10^{-5} \times 250 \times 0.01 = 6.75 \times 10^{-5}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 열전달 계수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\bar{h}_{\text{conv}} = 0.62 \times \left[\frac{893.6}{6.75 \times 10^{-5}}\right]^{1/4} = 0.62 \times \left[1.324 \times 10^7\right]^{1/4}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.62 \times 60.31 = 37.4 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 복사 효과 고려",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              막비등에서는 표면 온도가 매우 높으므로 복사 열전달도 기여합니다.
              <Math tex="T_s = 350" />°C에서 복사 효과는 전체 열전달의 약 10~20%를 차지할 수 있습니다.
              정확한 계산에는 복사 열전달 계수 <Math tex="h_{\text{rad}}" />를 추가해야 합니다.
            </p>
            <div className="text-center py-2">
              <Math tex="\bar{h}_{\text{total}} = \bar{h}_{\text{conv}} + \frac{3}{4} h_{\text{rad}} \quad (\text{if } h_{\text{rad}} < h_{\text{conv}})" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\bar{h}_{\text{conv}} \approx 37.4 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          막비등의 열전달 계수는 핵비등에 비해 매우 낮습니다. 증기막이 단열층 역할을 하기 때문입니다.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "수직판 막응축 (Nusselt Theory)",
    topic: "Film Condensation Vertical",
    topicColor: "purple",
    problem: (
      <p>
        높이 <Math tex="L = 1" /> m인 수직판의 표면 온도가 <Math tex="T_s = 80" />°C로 유지되고 있습니다.
        1 atm 수증기(<Math tex="T_{\text{sat}} = 100" />°C)가 판 위에서 응축됩니다.
        Nusselt 막응축 이론을 사용하여 평균 열전달 계수 <Math tex="\bar{h}" />를 구하시오.
        액체 물성치는 막온도 <Math tex="T_f = (100 + 80)/2 = 90" />°C에서 평가합니다.
      </p>
    ),
    given: [
      "L = 1 m, T_s = 80°C, T_sat = 100°C, ΔT = 20°C",
      "액체(Tf=90°C): ρ_l = 965.3 kg/m³, μ_l = 3.15 × 10⁻⁴ kg/(m·s)",
      "k_l = 0.675 W/(m·K), c_{p,l} = 4206 J/(kg·K)",
      "ρ_v = 0.596 kg/m³",
      "h_fg = 2.257 × 10⁶ J/kg",
    ],
    find: "평균 열전달 계수 h [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: 수정 잠열 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">응축에서의 수정 잠열 (과냉각 액막의 에너지 저장 보정):</p>
            <div className="text-center py-2">
              <Math tex="h'_{fg} = h_{fg} + 0.68 \, c_{p,l} \, (T_{\text{sat}} - T_s)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 2.257 \times 10^6 + 0.68 \times 4206 \times 20" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 2.257 \times 10^6 + 57{,}202 = 2.314 \times 10^6 \text{ J/kg}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Nusselt 막응축 상관식 (수직판)",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\bar{h} = 0.943 \left[\frac{\rho_l \, (\rho_l - \rho_v) \, g \, h'_{fg} \, k_l^3}{\mu_l \, (T_{\text{sat}} - T_s) \, L}\right]^{1/4}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 분자 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\rho_l(\rho_l - \rho_v) g \, h'_{fg} \, k_l^3" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 965.3 \times 964.7 \times 9.81 \times 2.314 \times 10^6 \times (0.675)^3" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 965.3 \times 964.7 \times 9.81 \times 2.314 \times 10^6 \times 0.3072" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 6.497 \times 10^{12}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 분모 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\mu_l \, \Delta T \, L = 3.15 \times 10^{-4} \times 20 \times 1 = 6.30 \times 10^{-3}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 최종 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\bar{h} = 0.943 \times \left[\frac{6.497 \times 10^{12}}{6.30 \times 10^{-3}}\right]^{1/4}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.943 \times \left[1.031 \times 10^{15}\right]^{1/4}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.943 \times 5{,}669 = 5{,}346 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\bar{h} \approx 5{,}346 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          막응축의 열전달 계수는 강제대류보다 훨씬 높습니다. 수정 잠열 <Math tex="h'_{fg}" />를 사용해야 정확한 결과를 얻습니다.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "수평관 막응축",
    topic: "Condensation Horizontal Tube",
    topicColor: "emerald",
    problem: (
      <p>
        외경 <Math tex="D = 0.025" /> m인 수평관의 표면 온도가 <Math tex="T_s = 85" />°C입니다.
        1 atm 수증기(<Math tex="T_{\text{sat}} = 100" />°C)가 관 외면에서 응축됩니다.
        평균 열전달 계수 <Math tex="\bar{h}" />와 관 단위 길이당 응축률 <Math tex="\dot{m}/L" />을 구하시오.
      </p>
    ),
    given: [
      "D = 0.025 m, T_s = 85°C, T_sat = 100°C, ΔT = 15°C",
      "액체(Tf=92.5°C): ρ_l = 963.4 kg/m³, μ_l = 3.06 × 10⁻⁴ kg/(m·s)",
      "k_l = 0.677 W/(m·K), c_{p,l} = 4208 J/(kg·K)",
      "ρ_v = 0.596 kg/m³, h_fg = 2.257 × 10⁶ J/kg",
    ],
    find: "평균 열전달 계수 h 및 단위 길이당 응축률",
    steps: [
      {
        label: "Step 1: 수정 잠열 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="h'_{fg} = h_{fg} + 0.68 \, c_{p,l} \, (T_{\text{sat}} - T_s)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 2.257 \times 10^6 + 0.68 \times 4208 \times 15 = 2.257 \times 10^6 + 42{,}922" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 2.300 \times 10^6 \text{ J/kg}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 수평관 막응축 상관식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">수평관에서는 L 대신 D를 사용하고 계수가 0.729입니다:</p>
            <div className="text-center py-2">
              <Math tex="\bar{h} = 0.729 \left[\frac{\rho_l \, (\rho_l - \rho_v) \, g \, h'_{fg} \, k_l^3}{\mu_l \, (T_{\text{sat}} - T_s) \, D}\right]^{1/4}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 내부 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">분자:</p>
            <div className="text-center py-2">
              <Math tex="963.4 \times 962.8 \times 9.81 \times 2.300 \times 10^6 \times (0.677)^3" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 963.4 \times 962.8 \times 9.81 \times 2.300 \times 10^6 \times 0.3101 = 6.502 \times 10^{12}" display />
            </div>
            <p className="text-gray-400 mb-2 mt-3">분모:</p>
            <div className="text-center py-2">
              <Math tex="\mu_l \, \Delta T \, D = 3.06 \times 10^{-4} \times 15 \times 0.025 = 1.148 \times 10^{-4}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 열전달 계수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\bar{h} = 0.729 \times \left[\frac{6.502 \times 10^{12}}{1.148 \times 10^{-4}}\right]^{1/4}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.729 \times \left[5.663 \times 10^{16}\right]^{1/4} = 0.729 \times 8{,}674" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 6{,}324 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 단위 길이당 응축률",
        content: (
          <div>
            <p className="text-gray-400 mb-2">열전달률 → 응축률:</p>
            <div className="text-center py-2">
              <Math tex="\frac{q}{L} = \bar{h} \cdot \pi D \cdot \Delta T = 6{,}324 \times \pi \times 0.025 \times 15 = 7{,}452 \text{ W/m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\frac{\dot{m}}{L} = \frac{q/L}{h'_{fg}} = \frac{7{,}452}{2.300 \times 10^6} = 3.24 \times 10^{-3} \text{ kg/(m·s)}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\bar{h} \approx 6{,}324 \text{ W/(m}^2\text{·K)}" display />
        <Math tex="\dot{m}/L \approx 3.24 \times 10^{-3} \text{ kg/(m·s)} = 11.7 \text{ kg/(m·hr)}" display />
        <p className="text-sm text-gray-400 mt-2">
          수평관의 열전달 계수가 같은 조건의 수직판보다 높습니다 (경로가 짧아 응축막이 얇으므로).
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "수직 관군 응축",
    topic: "Condensation Tube Bank",
    topicColor: "orange",
    problem: (
      <p>
        수직으로 <Math tex="N = 10" />개 배열된 수평관(외경 <Math tex="D = 0.02" /> m)의 표면 온도가{" "}
        <Math tex="T_s = 90" />°C입니다. 1 atm 수증기가 응축될 때,
        단일 관의 열전달 계수 <Math tex="\bar{h}_1" />을 먼저 구하고,
        관군 보정 계수를 적용하여 <Math tex="N" />개 관군의 평균 열전달 계수 <Math tex="\bar{h}_N" />을 구하시오.
      </p>
    ),
    given: [
      "N = 10 (수직 배열), D = 0.02 m",
      "T_s = 90°C, T_sat = 100°C, ΔT = 10°C",
      "액체(Tf=95°C): ρ_l = 961.5 kg/m³, μ_l = 2.98 × 10⁻⁴ kg/(m·s)",
      "k_l = 0.679 W/(m·K), c_{p,l} = 4212 J/(kg·K)",
      "ρ_v = 0.596 kg/m³, h_fg = 2.257 × 10⁶ J/kg",
    ],
    find: "단일관 h₁ 및 N개 관군 평균 열전달 계수 h_N",
    steps: [
      {
        label: "Step 1: 수정 잠열",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="h'_{fg} = 2.257 \times 10^6 + 0.68 \times 4212 \times 10 = 2.257 \times 10^6 + 28{,}642" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 2.286 \times 10^6 \text{ J/kg}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 단일 수평관 열전달 계수",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\bar{h}_1 = 0.729 \left[\frac{\rho_l(\rho_l - \rho_v) g \, h'_{fg} \, k_l^3}{\mu_l \, \Delta T \, D}\right]^{1/4}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 수치 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">분자:</p>
            <div className="text-center py-2">
              <Math tex="961.5 \times 960.9 \times 9.81 \times 2.286 \times 10^6 \times (0.679)^3 = 6.484 \times 10^{12}" display />
            </div>
            <p className="text-gray-400 mb-2 mt-3">분모:</p>
            <div className="text-center py-2">
              <Math tex="2.98 \times 10^{-4} \times 10 \times 0.02 = 5.96 \times 10^{-5}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\bar{h}_1 = 0.729 \times \left[\frac{6.484 \times 10^{12}}{5.96 \times 10^{-5}}\right]^{1/4} = 0.729 \times \left[1.088 \times 10^{17}\right]^{1/4}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.729 \times 10{,}212 = 7{,}445 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 관군 보정",
        content: (
          <div>
            <p className="text-gray-400 mb-2">수직으로 N개 배열된 관군에서 상부 관의 응축수가 하부 관으로 흘러내려 응축막이 두꺼워집니다:</p>
            <div className="text-center py-2">
              <Math tex="\bar{h}_N = \bar{h}_1 \cdot N^{-1/4}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\bar{h}_{10} = 7{,}445 \times 10^{-1/4} = 7{,}445 \times \frac{1}{1.778}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 7{,}445 \times 0.5623 = 4{,}186 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 열전달 감소율 분석",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{\bar{h}_{10}}{\bar{h}_1} = N^{-1/4} = 10^{-0.25} = 0.562" display />
            </div>
            <p className="text-gray-400 mt-2">
              10개 관군의 평균 열전달 계수는 단일 관의 약 56%로 감소합니다.
              이는 응축수가 아래 관으로 흘러내리면서 응축막 두께가 증가하기 때문입니다.
              실제로는 응축수 비산(splashing) 효과로 이보다 높을 수 있습니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\bar{h}_1 \approx 7{,}445 \text{ W/(m}^2\text{·K)}" display />
        <Math tex="\bar{h}_{10} \approx 4{,}186 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          관군 보정 <Math tex="\bar{h}_N = \bar{h}_1 \cdot N^{-1/4}" />으로 인해 10개 관 배열 시 약 44% 성능 저하가 발생합니다.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "적하응축 vs 막응축 비교",
    topic: "Dropwise vs Film",
    topicColor: "pink",
    problem: (
      <p>
        면적 <Math tex="A = 1" /> m²인 수직 응축면에서 <Math tex="\Delta T = T_{\text{sat}} - T_s = 15" />°C일 때
        막응축의 열전달 계수가 <Math tex="\bar{h}_{\text{film}} = 8{,}000" /> W/(m²·K)입니다.
        적하응축(dropwise condensation)의 열전달 계수가 막응축의 5~10배라고 할 때,
        각 응축 방식의 열전달률과 응축률을 비교하시오.
        (<Math tex="h'_{fg} = 2.3 \times 10^6" /> J/kg)
      </p>
    ),
    given: [
      "A = 1 m², ΔT = 15°C",
      "h_film = 8,000 W/(m²·K)",
      "h_dropwise = 5~10 × h_film",
      "h'_fg = 2.3 × 10⁶ J/kg",
    ],
    find: "막응축 및 적하응축의 열전달률 및 응축률 비교",
    steps: [
      {
        label: "Step 1: 막응축 열전달률",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q_{\text{film}} = \bar{h}_{\text{film}} \cdot A \cdot \Delta T = 8{,}000 \times 1 \times 15 = 120{,}000 \text{ W} = 120 \text{ kW}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 적하응축 열전달률",
        content: (
          <div>
            <p className="text-gray-400 mb-2">적하응축 계수의 하한(5배)과 상한(10배):</p>
            <div className="text-center py-2">
              <Math tex="q_{\text{drop,min}} = (5 \times 8{,}000) \times 1 \times 15 = 600{,}000 \text{ W} = 600 \text{ kW}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q_{\text{drop,max}} = (10 \times 8{,}000) \times 1 \times 15 = 1{,}200{,}000 \text{ W} = 1{,}200 \text{ kW}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 막응축 응축률",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\dot{m}_{\text{film}} = \frac{q_{\text{film}}}{h'_{fg}} = \frac{120{,}000}{2.3 \times 10^6} = 0.0522 \text{ kg/s} = 188 \text{ kg/hr}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 적하응축 응축률",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\dot{m}_{\text{drop,min}} = \frac{600{,}000}{2.3 \times 10^6} = 0.261 \text{ kg/s} = 939 \text{ kg/hr}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\dot{m}_{\text{drop,max}} = \frac{1{,}200{,}000}{2.3 \times 10^6} = 0.522 \text{ kg/s} = 1{,}878 \text{ kg/hr}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 실용적 고려사항",
        content: (
          <div>
            <p className="text-gray-400 mb-2">적하응축 vs 막응축 비교 요약:</p>
            <ul className="space-y-1 text-gray-400">
              <li>- <strong className="text-white">성능</strong>: 적하응축이 5~10배 높은 열전달률</li>
              <li>- <strong className="text-white">원리</strong>: 적하응축은 액막 없이 표면이 노출되어 직접 응축 가능</li>
              <li>- <strong className="text-white">한계</strong>: 적하응축은 비습윤(non-wetting) 표면이 필요하며, 장기간 유지가 어려움</li>
              <li>- <strong className="text-white">코팅</strong>: PTFE, SAM(자기조립단분자막) 등의 소수성 코팅 연구 진행 중</li>
              <li>- <strong className="text-white">설계</strong>: 보수적 설계 시 막응축 가정이 일반적</li>
            </ul>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q_{\text{film}} = 120 \text{ kW}, \quad q_{\text{drop}} = 600 \sim 1{,}200 \text{ kW}" display />
        <Math tex="\dot{m}_{\text{film}} = 188 \text{ kg/hr}, \quad \dot{m}_{\text{drop}} = 939 \sim 1{,}878 \text{ kg/hr}" display />
        <p className="text-sm text-gray-400 mt-2">
          적하응축은 막응축 대비 5~10배의 열전달 성능을 보이지만, 실제 장기 운전에서의 안정성 확보가 과제입니다.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "비등 곡선 정량 분석",
    topic: "Boiling Curve Identification",
    topicColor: "teal",
    problem: (
      <p>
        1 atm 물(<Math tex="T_{\text{sat}} = 100" />°C)에서 과열도가 각각{" "}
        <Math tex="\Delta T_e = 5, 10, 30, 120, 200" />°C인 경우,
        비등 곡선의 어떤 영역에 해당하는지 판별하고 각 영역에서의 대략적인 열유속 크기를 추정하시오.
      </p>
    ),
    given: [
      "유체: 물, 1 atm (T_sat = 100°C)",
      "ΔT_e = 5, 10, 30, 120, 200°C",
      "CHF ≈ 1.11 MW/m² (문제 3 결과)",
      "q''_min ≈ 19 kW/m² (문제 4 결과)",
    ],
    find: "각 ΔT_e에서의 비등 영역 및 열유속 추정",
    steps: [
      {
        label: "Step 1: ΔT_e = 5°C (경계 영역)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <strong className="text-white">자연대류 비등 / 핵비등 시작</strong> (ONB: Onset of Nucleate Boiling)
            </p>
            <div className="text-center py-2">
              <Math tex="\Delta T_e = 5\text{°C}: \quad q'' \approx 10^4 \sim 10^5 \text{ W/m}^2" display />
            </div>
            <p className="text-gray-400">
              기포가 막 생성되기 시작하는 영역. 자연대류에서 핵비등으로 전환되는 구간입니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 2: ΔT_e = 10°C (핵비등)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <strong className="text-white">핵비등 (Nucleate Boiling)</strong> - 활발한 기포 생성
            </p>
            <div className="text-center py-2">
              <Math tex="\Delta T_e = 10\text{°C}: \quad q'' \approx 2.5 \times 10^5 \text{ W/m}^2 = 250 \text{ kW/m}^2" display />
            </div>
            <p className="text-gray-400">
              문제 2에서 Rohsenow 상관식으로 계산한 값과 일치. 높은 열전달 효율 구간.
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: ΔT_e = 30°C (CHF 부근)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <strong className="text-white">핵비등 최대 / CHF 부근</strong>
            </p>
            <div className="text-center py-2">
              <Math tex="\Delta T_e = 30\text{°C}: \quad q'' \approx q''_{\max} \approx 1.11 \text{ MW/m}^2" display />
            </div>
            <p className="text-gray-400">
              임계열유속(CHF)에 근접. 이를 초과하면 막비등으로 급격히 전환(burnout 위험).
            </p>
          </div>
        ),
      },
      {
        label: "Step 4: ΔT_e = 120°C (천이비등/Leidenfrost)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <strong className="text-white">천이비등 (Transition Boiling) / Leidenfrost point</strong>
            </p>
            <div className="text-center py-2">
              <Math tex="\Delta T_e = 120\text{°C}: \quad q'' \approx q''_{\min} \approx 19 \text{ kW/m}^2" display />
            </div>
            <p className="text-gray-400">
              불안정한 천이비등 영역의 하한. 증기막이 간헐적으로 형성/붕괴.
              Leidenfrost point(최소 열유속)에 해당합니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 5: ΔT_e = 200°C (안정 막비등)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <strong className="text-white">안정 막비등 (Stable Film Boiling)</strong>
            </p>
            <div className="text-center py-2">
              <Math tex="\Delta T_e = 200\text{°C}: \quad q'' \approx 30 \sim 50 \text{ kW/m}^2" display />
            </div>
            <p className="text-gray-400 mb-2">
              안정적인 증기막이 가열면 전체를 덮음. 열전달 계수가 낮지만 안정적.
              높은 ΔT_e에서는 복사 열전달이 점차 증가합니다.
            </p>
            <div className="text-center py-2">
              <Math tex="q''_{\text{total}} = q''_{\text{conv}} + q''_{\text{rad}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 6: 비등 곡선 요약",
        content: (
          <div>
            <p className="text-gray-400 mb-2">비등 곡선 전체 영역 정리:</p>
            <ul className="space-y-2 text-gray-400">
              <li>- <Math tex="\Delta T_e = 5" />°C → <strong className="text-teal-400">자연대류/ONB</strong>: ~10 kW/m²</li>
              <li>- <Math tex="\Delta T_e = 10" />°C → <strong className="text-teal-400">핵비등</strong>: ~250 kW/m²</li>
              <li>- <Math tex="\Delta T_e = 30" />°C → <strong className="text-teal-400">CHF</strong>: ~1,110 kW/m²</li>
              <li>- <Math tex="\Delta T_e = 120" />°C → <strong className="text-teal-400">Leidenfrost</strong>: ~19 kW/m²</li>
              <li>- <Math tex="\Delta T_e = 200" />°C → <strong className="text-teal-400">막비등</strong>: ~40 kW/m²</li>
            </ul>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\begin{array}{ccc} \Delta T_e & \text{영역} & q'' \\ \hline 5\text{°C} & \text{자연대류/ONB} & \sim 10 \text{ kW/m}^2 \\ 10\text{°C} & \text{핵비등} & \sim 250 \text{ kW/m}^2 \\ 30\text{°C} & \text{CHF} & \sim 1{,}110 \text{ kW/m}^2 \\ 120\text{°C} & \text{Leidenfrost} & \sim 19 \text{ kW/m}^2 \\ 200\text{°C} & \text{막비등} & \sim 40 \text{ kW/m}^2 \end{array}" display />
        <p className="text-sm text-gray-400 mt-2">
          비등 곡선은 비선형적이며, CHF에서 최대 열유속 후 천이비등 영역에서 열유속이 급감합니다.
        </p>
      </div>
    ),
  },
];

const tips = [
  { title: "1. 비등 영역 판별", description: "과열도 ΔTe = Ts - Tsat 크기로 핵비등, 천이비등, 막비등을 구분하세요." },
  { title: "2. 물성치 평가", description: "비등: 포화온도에서 액체/증기 물성치. 응축: 막온도 Tf=(Tsat+Ts)/2에서 액체 물성치." },
  { title: "3. 수정 잠열", description: "h'fg = hfg + 0.68cp,l(Tsat-Ts)를 응축 문제에서 사용하세요." },
  { title: "4. CHF 중요성", description: "임계열유속은 안전 설계의 핵심입니다. 실제 운전은 CHF의 70-80%를 넘지 않도록 합니다." },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={15} problems={problems} tips={tips} />;
}

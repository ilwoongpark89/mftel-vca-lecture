"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  {
    id: 1,
    title: "Fin Parameter Calculation",
    topic: "Fin Parameter",
    topicColor: "red",
    problem: (
      <p>
        직사각형 단면 핀의 두께 <Math tex="t = 2" /> mm, 폭 <Math tex="w = 0.1" /> m,
        열전도율 <Math tex="k = 200" /> W/(m·K), 대류 열전달 계수 <Math tex="h = 50" /> W/(m²·K)입니다.
        핀 길이 <Math tex="L = 0.05" /> m일 때, 핀 파라미터 <Math tex="m" />과 <Math tex="mL" />을 계산하시오.
      </p>
    ),
    given: [
      "t = 2 mm = 0.002 m",
      "w = 0.1 m",
      "k = 200 W/(m·K)",
      "h = 50 W/(m²·K)",
      "L = 0.05 m",
    ],
    find: "m [1/m] 및 mL",
    steps: [
      {
        label: "Step 1: 둘레(P)와 단면적(Ac) 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">직사각형 단면에서 (t &lt;&lt; w 이므로 P ≈ 2w로 근사 가능):</p>
            <div className="text-center py-2">
              <Math tex="P = 2(w + t) = 2(0.1 + 0.002) = 0.204 \text{ m} \approx 2w = 0.2 \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="A_c = w \cdot t = 0.1 \times 0.002 = 2 \times 10^{-4} \text{ m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: m 파라미터 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">핀 방정식에서 m 파라미터는 다음과 같이 정의됩니다:</p>
            <div className="text-center py-2">
              <Math tex="m = \sqrt{\frac{hP}{kA_c}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: m 값 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="m = \sqrt{\frac{50 \times 0.2}{200 \times 2 \times 10^{-4}}} = \sqrt{\frac{10}{0.04}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="m = \sqrt{250} = 15.81 \text{ m}^{-1}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: mL 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="mL = 15.81 \times 0.05 = 0.791" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="m = 15.81 \text{ m}^{-1}" display />
        <Math tex="mL = 0.791" display />
        <p className="text-sm text-gray-400 mt-2">
          mL &lt; 1이면 핀 효율이 높아 핀 설계가 효과적입니다.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Infinite Fin Heat Transfer",
    topic: "Infinite Fin",
    topicColor: "green",
    problem: (
      <p>
        긴 구리 핀(무한핀으로 가정)의 열전도율 <Math tex="k = 390" /> W/(m·K),
        직경 <Math tex="D = 5" /> mm, 대류 열전달 계수 <Math tex="h = 40" /> W/(m²·K)입니다.
        베이스 온도 <Math tex="T_b = 120" />°C, 주위 온도 <Math tex="T_\infty = 25" />°C일 때,
        핀을 통한 열전달률을 계산하시오.
      </p>
    ),
    given: [
      "k = 390 W/(m·K) (구리)",
      "D = 5 mm = 0.005 m",
      "h = 40 W/(m²·K)",
      "T_b = 120°C",
      "T∞ = 25°C",
    ],
    find: "q_f [W]",
    steps: [
      {
        label: "Step 1: 기하학적 변수 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">원형 단면 핀의 둘레와 단면적:</p>
            <div className="text-center py-2">
              <Math tex="P = \pi D = \pi \times 0.005 = 0.01571 \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="A_c = \frac{\pi D^2}{4} = \frac{\pi \times 0.005^2}{4} = 1.9635 \times 10^{-5} \text{ m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: m 파라미터 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="m = \sqrt{\frac{hP}{kA_c}} = \sqrt{\frac{40 \times 0.01571}{390 \times 1.9635 \times 10^{-5}}}" display />
            <Math tex="= \sqrt{\frac{0.6283}{7.658 \times 10^{-3}}} = \sqrt{82.05} = 9.058 \text{ m}^{-1}" display />
          </div>
        ),
      },
      {
        label: "Step 3: 무한핀 열전달 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">무한핀(x→∞에서 T→T∞)의 열전달률:</p>
            <div className="text-center py-2">
              <Math tex="q_f = \sqrt{hPkA_c} \cdot \theta_b" display />
            </div>
            <p className="text-gray-400 mt-2">여기서 <Math tex="\theta_b = T_b - T_\infty = 120 - 25 = 95 \text{ K}" /></p>
          </div>
        ),
      },
      {
        label: "Step 4: √(hPkAc) 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\sqrt{hPkA_c} = \sqrt{40 \times 0.01571 \times 390 \times 1.9635 \times 10^{-5}}" display />
            <Math tex="= \sqrt{4.810 \times 10^{-3}} = 0.06937 \text{ W/K}" display />
          </div>
        ),
      },
      {
        label: "Step 5: 열전달률 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="q_f = 0.06937 \times 95 = 6.59 \text{ W}" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="q_f = 6.59 \text{ W}" display />
        <p className="text-sm text-gray-400 mt-2">
          무한핀 가정은 핀 길이가 충분히 길 때(mL &gt; 2.65) 유효합니다.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Insulated Tip Fin",
    topic: "Insulated Tip",
    topicColor: "blue",
    problem: (
      <p>
        알루미늄 핀(<Math tex="k = 180" /> W/(m·K))의 길이 <Math tex="L = 0.04" /> m,
        폭 <Math tex="w = 0.1" /> m, 두께 <Math tex="t = 3" /> mm입니다.
        대류 열전달 계수 <Math tex="h = 25" /> W/(m²·K),
        베이스 온도 <Math tex="T_b = 100" />°C, 주위 온도 <Math tex="T_\infty = 20" />°C일 때,
        핀 끝이 단열(adiabatic tip)된 경우 열전달률을 구하시오.
      </p>
    ),
    given: [
      "k = 180 W/(m·K)",
      "L = 0.04 m",
      "w = 0.1 m, t = 3 mm = 0.003 m",
      "h = 25 W/(m²·K)",
      "T_b = 100°C, T∞ = 20°C",
    ],
    find: "q_f [W] (단열 팁 조건)",
    steps: [
      {
        label: "Step 1: 기하학적 변수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="P = 2(w + t) = 2(0.1 + 0.003) = 0.206 \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="A_c = w \cdot t = 0.1 \times 0.003 = 3 \times 10^{-4} \text{ m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: m 파라미터 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="m = \sqrt{\frac{hP}{kA_c}} = \sqrt{\frac{25 \times 0.206}{180 \times 3 \times 10^{-4}}} = \sqrt{\frac{5.15}{0.054}} = \sqrt{95.37} = 9.766 \text{ m}^{-1}" display />
          </div>
        ),
      },
      {
        label: "Step 3: mL 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="mL = 9.766 \times 0.04 = 0.3906" display />
          </div>
        ),
      },
      {
        label: "Step 4: 단열 팁 열전달 공식 적용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">단열 팁(Case B) 조건에서:</p>
            <div className="text-center py-2">
              <Math tex="q_f = \sqrt{hPkA_c} \cdot \theta_b \cdot \tanh(mL)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 수치 대입 및 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\sqrt{hPkA_c} = \sqrt{25 \times 0.206 \times 180 \times 3 \times 10^{-4}} = \sqrt{0.2781} = 0.5273 \text{ W/K}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\theta_b = 100 - 20 = 80 \text{ K}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\tanh(0.3906) = 0.3720" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q_f = 0.5273 \times 80 \times 0.3720 = 15.69 \text{ W}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="q_f = 15.69 \text{ W}" display />
        <p className="text-sm text-gray-400 mt-2">
          mL = 0.39로 작아서 핀 효율이 높습니다 (<Math tex="\eta_f = \tanh(mL)/(mL) = 0.953" />).
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Convective Tip Fin (Corrected Length)",
    topic: "Convective Tip",
    topicColor: "amber",
    problem: (
      <p>
        문제 3과 동일한 핀 (<Math tex="k = 180" /> W/(m·K), <Math tex="L = 0.04" /> m,
        <Math tex="w = 0.1" /> m, <Math tex="t = 3" /> mm, <Math tex="h = 25" /> W/(m²·K))에서
        핀 끝단에도 대류가 발생하는 경우(Case C), 보정 길이(corrected length)를 이용하여 열전달률을 구하시오.
        <Math tex="T_b = 100" />°C, <Math tex="T_\infty = 20" />°C.
      </p>
    ),
    given: [
      "k = 180 W/(m·K)",
      "L = 0.04 m, w = 0.1 m, t = 0.003 m",
      "h = 25 W/(m²·K)",
      "T_b = 100°C, T∞ = 20°C",
      "핀 끝단 대류 조건 (Case C)",
    ],
    find: "q_f [W] (보정 길이 방법)",
    steps: [
      {
        label: "Step 1: 보정 길이(Corrected Length) 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">대류 팁을 단열 팁으로 근사하기 위한 보정 길이:</p>
            <div className="text-center py-2">
              <Math tex="L_c = L + \frac{A_c}{P} = L + \frac{t}{2} \quad (\text{직사각형 핀})" display />
            </div>
            <div className="text-center py-2">
              <Math tex="L_c = 0.04 + \frac{0.003}{2} = 0.04 + 0.0015 = 0.0415 \text{ m}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 기존 m 파라미터 사용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">문제 3에서 계산한 m 값을 사용합니다:</p>
            <div className="text-center py-2">
              <Math tex="m = 9.766 \text{ m}^{-1}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 보정 mLc 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="mL_c = 9.766 \times 0.0415 = 0.4053" display />
          </div>
        ),
      },
      {
        label: "Step 4: 단열 팁 공식에 Lc 적용",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q_f = \sqrt{hPkA_c} \cdot \theta_b \cdot \tanh(mL_c)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\tanh(0.4053) = 0.3847" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 열전달률 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="q_f = 0.5273 \times 80 \times 0.3847 = 16.22 \text{ W}" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q_f = 16.22 \text{ W}" display />
        <p className="text-sm text-gray-400 mt-2">
          대류 팁이 있으면 단열 팁(15.69 W)보다 약 3.4% 더 많은 열을 전달합니다.
          보정 길이 방법은 간편하면서도 정확도가 높습니다.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Fin Efficiency Calculation",
    topic: "Fin Efficiency",
    topicColor: "cyan",
    problem: (
      <p>
        직사각형 단면 핀의 길이 <Math tex="L = 0.03" /> m, 두께 <Math tex="t = 1" /> mm,
        열전도율 <Math tex="k = 50" /> W/(m·K), 대류 열전달 계수 <Math tex="h = 100" /> W/(m²·K)입니다.
        베이스 온도 <Math tex="T_b = 150" />°C, 주위 온도 <Math tex="T_\infty = 30" />°C일 때,
        단열 팁 조건에서 핀 효율과 실제 열전달률을 구하시오.
      </p>
    ),
    given: [
      "L = 0.03 m, t = 1 mm = 0.001 m",
      "k = 50 W/(m·K)",
      "h = 100 W/(m²·K)",
      "T_b = 150°C, T∞ = 30°C",
      "단열 팁 (Insulated tip)",
    ],
    find: "η_f 및 q_f [W/m] (폭 방향 단위 길이당)",
    steps: [
      {
        label: "Step 1: 단위 폭당 변수 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">폭 w = 1 m 기준 (단위 폭당):</p>
            <div className="text-center py-2">
              <Math tex="P = 2(w + t) \approx 2w = 2 \text{ m}, \quad A_c = w \cdot t = 0.001 \text{ m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: m 파라미터 및 mL 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="m = \sqrt{\frac{hP}{kA_c}} = \sqrt{\frac{100 \times 2}{50 \times 0.001}} = \sqrt{\frac{200}{0.05}} = \sqrt{4000} = 63.25 \text{ m}^{-1}" display />
            <Math tex="mL = 63.25 \times 0.03 = 1.897" display />
          </div>
        ),
      },
      {
        label: "Step 3: 핀 효율 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">단열 팁 핀의 효율:</p>
            <div className="text-center py-2">
              <Math tex="\eta_f = \frac{\tanh(mL)}{mL}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 핀 효율 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\eta_f = \frac{\tanh(1.897)}{1.897} = \frac{0.9559}{1.897} = 0.5038" display />
          </div>
        ),
      },
      {
        label: "Step 5: 실제 열전달률 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">핀 표면적(단위 폭당, 양면)과 열전달률:</p>
            <div className="text-center py-2">
              <Math tex="A_f = 2L \cdot w = 2 \times 0.03 \times 1 = 0.06 \text{ m}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q_f = \eta_f \cdot h \cdot A_f \cdot \theta_b = 0.5038 \times 100 \times 0.06 \times (150-30)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q_f = 0.5038 \times 100 \times 0.06 \times 120 = 362.7 \text{ W/m}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\eta_f = 0.504 \; (50.4\%)" display />
        <Math tex="q_f = 362.7 \text{ W/m}" display />
        <p className="text-sm text-gray-400 mt-2">
          mL = 1.90으로 비교적 커서 핀 효율이 약 50%입니다.
          핀 끝부분은 열전달에 크게 기여하지 못합니다.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Fin Effectiveness Analysis",
    topic: "Fin Effectiveness",
    topicColor: "purple",
    problem: (
      <p>
        단면적 <Math tex="A_c = 1 \text{ cm}^2 = 10^{-4} \text{ m}^2" />이고
        둘레 <Math tex="P = 0.04" /> m인 핀이 <Math tex="h = 10" /> W/(m²·K)인 표면에 부착되어 있습니다.
        핀 재료의 열전도율은 <Math tex="k = 200" /> W/(m·K)입니다.
        긴 핀(무한핀)으로 가정하여 핀 유효성(effectiveness)을 구하고, 핀 사용이 정당화되는지 평가하시오.
      </p>
    ),
    given: [
      "Ac = 1 cm² = 10⁻⁴ m²",
      "P = 0.04 m",
      "h = 10 W/(m²·K)",
      "k = 200 W/(m·K)",
      "무한핀 가정",
    ],
    find: "ε_f 및 핀 사용 정당성 평가",
    steps: [
      {
        label: "Step 1: 핀 유효성 정의",
        content: (
          <div>
            <p className="text-gray-400 mb-2">핀 유효성은 핀이 있을 때와 없을 때의 열전달 비율입니다:</p>
            <div className="text-center py-2">
              <Math tex="\varepsilon_f = \frac{q_{\text{with fin}}}{q_{\text{without fin}}} = \frac{q_f}{h \cdot A_c \cdot \theta_b}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 무한핀 유효성 공식 유도",
        content: (
          <div>
            <p className="text-gray-400 mb-2">무한핀에서 <Math tex="q_f = \sqrt{hPkA_c} \cdot \theta_b" />이므로:</p>
            <div className="text-center py-2">
              <Math tex="\varepsilon_f = \frac{\sqrt{hPkA_c} \cdot \theta_b}{h A_c \theta_b} = \sqrt{\frac{kP}{hA_c}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 수치 대입",
        content: (
          <div className="text-center py-2">
            <Math tex="\varepsilon_f = \sqrt{\frac{200 \times 0.04}{10 \times 10^{-4}}} = \sqrt{\frac{8}{0.001}}" display />
          </div>
        ),
      },
      {
        label: "Step 4: 유효성 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\varepsilon_f = \sqrt{8000} = 89.44" display />
          </div>
        ),
      },
      {
        label: "Step 5: 핀 사용 정당성 평가",
        content: (
          <div>
            <p className="text-gray-400 mb-2">핀 설계 기준:</p>
            <div className="text-center py-2">
              <Math tex="\varepsilon_f = 89.44 \gg 2 \quad \Rightarrow \quad \text{핀 사용이 충분히 정당화됨}" display />
            </div>
            <p className="text-gray-400 mt-2">
              높은 k(200)와 낮은 h(10)의 조합이 핀 성능을 극대화합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\varepsilon_f = 89.44" display />
        <p className="text-sm text-gray-400 mt-2">
          <Math tex="\varepsilon_f \gg 2" />이므로 핀 사용이 매우 효과적입니다.
          핀은 높은 k, 낮은 h 조건에서 가장 유리합니다.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Pin Fin Heat Transfer",
    topic: "Pin Fin",
    topicColor: "emerald",
    problem: (
      <p>
        원형 핀(pin fin)의 직경 <Math tex="D = 3" /> mm, 길이 <Math tex="L = 30" /> mm,
        열전도율 <Math tex="k = 100" /> W/(m·K), 대류 열전달 계수 <Math tex="h = 50" /> W/(m²·K)입니다.
        베이스 온도 <Math tex="T_b = 200" />°C, 주위 온도 <Math tex="T_\infty = 25" />°C일 때,
        단열 팁 조건에서 핀 1개당 열전달률을 구하시오.
      </p>
    ),
    given: [
      "D = 3 mm = 0.003 m",
      "L = 30 mm = 0.03 m",
      "k = 100 W/(m·K)",
      "h = 50 W/(m²·K)",
      "T_b = 200°C, T∞ = 25°C",
    ],
    find: "q_f [W] (단열 팁, 핀 1개)",
    steps: [
      {
        label: "Step 1: 원형 핀 기하학적 변수",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="P = \pi D = \pi \times 0.003 = 9.425 \times 10^{-3} \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="A_c = \frac{\pi D^2}{4} = \frac{\pi \times 0.003^2}{4} = 7.069 \times 10^{-6} \text{ m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: m 파라미터 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="m = \sqrt{\frac{hP}{kA_c}} = \sqrt{\frac{50 \times 9.425 \times 10^{-3}}{100 \times 7.069 \times 10^{-6}}}" display />
            <Math tex="= \sqrt{\frac{0.4712}{7.069 \times 10^{-4}}} = \sqrt{666.7} = 25.82 \text{ m}^{-1}" display />
          </div>
        ),
      },
      {
        label: "Step 3: mL 및 tanh(mL) 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="mL = 25.82 \times 0.03 = 0.7745" display />
            <Math tex="\tanh(0.7745) = 0.6500" display />
          </div>
        ),
      },
      {
        label: "Step 4: √(hPkAc) 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\sqrt{hPkA_c} = \sqrt{50 \times 9.425 \times 10^{-3} \times 100 \times 7.069 \times 10^{-6}}" display />
            <Math tex="= \sqrt{3.331 \times 10^{-4}} = 0.01825 \text{ W/K}" display />
          </div>
        ),
      },
      {
        label: "Step 5: 열전달률 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\theta_b = 200 - 25 = 175 \text{ K}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q_f = \sqrt{hPkA_c} \cdot \theta_b \cdot \tanh(mL) = 0.01825 \times 175 \times 0.6500" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q_f = 2.076 \text{ W}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="q_f = 2.08 \text{ W per fin}" display />
        <p className="text-sm text-gray-400 mt-2">
          핀 효율: <Math tex="\eta_f = \tanh(0.7745)/0.7745 = 0.839" /> (83.9%)
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "Fin Array Total Heat Transfer",
    topic: "Fin Array",
    topicColor: "orange",
    problem: (
      <p>
        베이스 면적 0.1 m × 0.1 m에 50개의 원형 핀(pin fin)이 배열되어 있습니다.
        각 핀의 길이 <Math tex="L = 0.02" /> m, 직경 <Math tex="D = 4" /> mm,
        열전도율 <Math tex="k = 200" /> W/(m·K), 대류 열전달 계수 <Math tex="h = 40" /> W/(m²·K),
        핀 효율 <Math tex="\eta_f = 0.92" />입니다.
        <Math tex="T_b = 80" />°C, <Math tex="T_\infty = 20" />°C일 때, 총 열전달률을 구하시오.
      </p>
    ),
    given: [
      "베이스 면적: 0.1 m × 0.1 m = 0.01 m²",
      "N = 50개 핀, D = 4 mm, L = 0.02 m",
      "k = 200 W/(m·K), h = 40 W/(m²·K)",
      "η_f = 0.92",
      "T_b = 80°C, T∞ = 20°C",
    ],
    find: "q_total [W]",
    steps: [
      {
        label: "Step 1: 핀 1개의 표면적 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">원형 핀의 측면 표면적 (팁 제외):</p>
            <div className="text-center py-2">
              <Math tex="A_{f,\text{one}} = \pi D L = \pi \times 0.004 \times 0.02 = 2.513 \times 10^{-4} \text{ m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 핀이 차지하는 베이스 면적 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">핀 50개가 차지하는 베이스 면적:</p>
            <div className="text-center py-2">
              <Math tex="A_{c,\text{total}} = N \cdot \frac{\pi D^2}{4} = 50 \times \frac{\pi \times 0.004^2}{4} = 50 \times 1.257 \times 10^{-5} = 6.283 \times 10^{-4} \text{ m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 핀이 없는(unfinned) 베이스 면적",
        content: (
          <div className="text-center py-2">
            <Math tex="A_{\text{unfinned}} = A_{\text{base}} - A_{c,\text{total}} = 0.01 - 6.283 \times 10^{-4} = 9.372 \times 10^{-3} \text{ m}^2" display />
          </div>
        ),
      },
      {
        label: "Step 4: 핀을 통한 열전달",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\theta_b = 80 - 20 = 60 \text{ K}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q_{\text{fins}} = N \cdot \eta_f \cdot h \cdot A_{f,\text{one}} \cdot \theta_b" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 50 \times 0.92 \times 40 \times 2.513 \times 10^{-4} \times 60 = 27.74 \text{ W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 핀 없는 표면의 열전달",
        content: (
          <div className="text-center py-2">
            <Math tex="q_{\text{unfinned}} = h \cdot A_{\text{unfinned}} \cdot \theta_b = 40 \times 9.372 \times 10^{-3} \times 60 = 22.49 \text{ W}" display />
          </div>
        ),
      },
      {
        label: "Step 6: 총 열전달률",
        content: (
          <div className="text-center py-2">
            <Math tex="q_{\text{total}} = q_{\text{fins}} + q_{\text{unfinned}} = 27.74 + 22.49 = 50.23 \text{ W}" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q_{\text{total}} = 50.2 \text{ W}" display />
        <p className="text-sm text-gray-400 mt-2">
          핀 없이 베이스만 있을 때: <Math tex="q_{\text{bare}} = 40 \times 0.01 \times 60 = 24 \text{ W}" />.
          핀 배열로 약 2.1배 열전달 향상.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Material Comparison for Fins",
    topic: "Material Comparison",
    topicColor: "pink",
    problem: (
      <p>
        동일한 직사각형 핀 형상(<Math tex="L = 0.05" /> m, <Math tex="t = 2" /> mm, <Math tex="w = 0.1" /> m)에서
        대류 열전달 계수 <Math tex="h = 50" /> W/(m²·K), <Math tex="\theta_b = 80" /> K일 때,
        세 가지 재료 -- 구리(<Math tex="k = 401" />), 알루미늄(<Math tex="k = 237" />), 강철(<Math tex="k = 60" />) --
        각각의 단열 팁 핀 열전달률을 비교하시오.
      </p>
    ),
    given: [
      "L = 0.05 m, t = 0.002 m, w = 0.1 m",
      "h = 50 W/(m²·K), θ_b = 80 K",
      "구리: k = 401 W/(m·K)",
      "알루미늄: k = 237 W/(m·K)",
      "강철: k = 60 W/(m·K)",
    ],
    find: "q_f [W] for each material",
    steps: [
      {
        label: "Step 1: 공통 기하학적 변수",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="P \approx 2w = 0.2 \text{ m}, \quad A_c = w \cdot t = 2 \times 10^{-4} \text{ m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 각 재료의 m 파라미터 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2"><Math tex="m = \sqrt{hP/(kA_c)}" />:</p>
            <div className="space-y-2">
              <div className="text-center py-1">
                <Math tex="m_{\text{Cu}} = \sqrt{\frac{50 \times 0.2}{401 \times 2 \times 10^{-4}}} = \sqrt{124.7} = 11.17 \text{ m}^{-1}" display />
              </div>
              <div className="text-center py-1">
                <Math tex="m_{\text{Al}} = \sqrt{\frac{50 \times 0.2}{237 \times 2 \times 10^{-4}}} = \sqrt{210.9} = 14.52 \text{ m}^{-1}" display />
              </div>
              <div className="text-center py-1">
                <Math tex="m_{\text{Steel}} = \sqrt{\frac{50 \times 0.2}{60 \times 2 \times 10^{-4}}} = \sqrt{833.3} = 28.87 \text{ m}^{-1}" display />
              </div>
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: mL 및 tanh(mL) 계산",
        content: (
          <div className="space-y-2">
            <div className="text-center py-1">
              <Math tex="\text{Cu: } mL = 0.558, \;\; \tanh(0.558) = 0.5065" />
            </div>
            <div className="text-center py-1">
              <Math tex="\text{Al: } mL = 0.726, \;\; \tanh(0.726) = 0.6194" />
            </div>
            <div className="text-center py-1">
              <Math tex="\text{Steel: } mL = 1.443, \;\; \tanh(1.443) = 0.8943" />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: √(hPkAc) 계산",
        content: (
          <div className="space-y-2">
            <div className="text-center py-1">
              <Math tex="\sqrt{hPkA_c}_{\text{Cu}} = \sqrt{50 \times 0.2 \times 401 \times 2 \times 10^{-4}} = \sqrt{0.8020} = 0.8956 \text{ W/K}" />
            </div>
            <div className="text-center py-1">
              <Math tex="\sqrt{hPkA_c}_{\text{Al}} = \sqrt{50 \times 0.2 \times 237 \times 2 \times 10^{-4}} = \sqrt{0.4740} = 0.6885 \text{ W/K}" />
            </div>
            <div className="text-center py-1">
              <Math tex="\sqrt{hPkA_c}_{\text{Steel}} = \sqrt{50 \times 0.2 \times 60 \times 2 \times 10^{-4}} = \sqrt{0.1200} = 0.3464 \text{ W/K}" />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 열전달률 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2"><Math tex="q_f = \sqrt{hPkA_c} \cdot \theta_b \cdot \tanh(mL)" />:</p>
            <div className="space-y-2">
              <div className="text-center py-1">
                <Math tex="q_{\text{Cu}} = 0.8956 \times 80 \times 0.5065 = 36.27 \text{ W}" />
              </div>
              <div className="text-center py-1">
                <Math tex="q_{\text{Al}} = 0.6885 \times 80 \times 0.6194 = 34.12 \text{ W}" />
              </div>
              <div className="text-center py-1">
                <Math tex="q_{\text{Steel}} = 0.3464 \times 80 \times 0.8943 = 24.79 \text{ W}" />
              </div>
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="q_{\text{Cu}} = 36.3 \text{ W}, \quad q_{\text{Al}} = 34.1 \text{ W}, \quad q_{\text{Steel}} = 24.8 \text{ W}" display />
        <p className="text-sm text-gray-400 mt-2">
          구리와 알루미늄의 성능 차이는 약 6%에 불과하지만, 강철은 약 32% 낮습니다.
          비용 대비 성능을 고려하면 알루미늄이 가장 실용적입니다.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "Overall Surface Efficiency",
    topic: "Overall Surface Efficiency",
    topicColor: "teal",
    problem: (
      <p>
        핀 표면(finned surface)에 <Math tex="N = 200" />개의 핀이 부착되어 있습니다.
        핀 1개의 표면적 <Math tex="A_{f} = 5 \times 10^{-4}" /> m², 핀 효율 <Math tex="\eta_f = 0.85" />,
        전체 열전달 표면적 <Math tex="A_t = 0.15" /> m², 핀이 없는 베이스 표면적 <Math tex="A_b = 0.05" /> m²입니다.
        <Math tex="h = 80" /> W/(m²·K), <Math tex="\theta_b = 60" /> K일 때,
        전체 표면 효율과 총 열전달률을 구하시오.
      </p>
    ),
    given: [
      "N = 200 핀",
      "A_f = 5 × 10⁻⁴ m² (핀 1개)",
      "η_f = 0.85",
      "A_t = 0.15 m² (전체 표면적)",
      "A_b = 0.05 m² (핀 없는 베이스)",
      "h = 80 W/(m²·K), θ_b = 60 K",
    ],
    find: "η_o 및 q_total [W]",
    steps: [
      {
        label: "Step 1: 전체 핀 표면적 확인",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="N \cdot A_f = 200 \times 5 \times 10^{-4} = 0.1 \text{ m}^2" display />
            </div>
            <p className="text-gray-400 mt-2">검증: <Math tex="A_t = N \cdot A_f + A_b = 0.1 + 0.05 = 0.15 \text{ m}^2" /> (일치)</p>
          </div>
        ),
      },
      {
        label: "Step 2: 전체 표면 효율 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">전체 표면 효율은 핀과 비핀 영역을 모두 고려합니다:</p>
            <div className="text-center py-2">
              <Math tex="\eta_o = 1 - \frac{N A_f}{A_t}(1 - \eta_f)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 전체 표면 효율 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\eta_o = 1 - \frac{200 \times 5 \times 10^{-4}}{0.15}(1 - 0.85)" display />
            <Math tex="= 1 - \frac{0.1}{0.15} \times 0.15 = 1 - 0.6667 \times 0.15" display />
            <Math tex="= 1 - 0.1 = 0.90" display />
          </div>
        ),
      },
      {
        label: "Step 4: 총 열전달률 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">전체 표면 효율을 이용한 열전달률:</p>
            <div className="text-center py-2">
              <Math tex="q_{\text{total}} = \eta_o \cdot h \cdot A_t \cdot \theta_b" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 총 열전달률 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="q_{\text{total}} = 0.90 \times 80 \times 0.15 \times 60 = 648 \text{ W}" display />
          </div>
        ),
      },
      {
        label: "Step 6: 검증 (개별 합산 방법)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">핀과 비핀 영역을 개별적으로 계산하여 검증합니다:</p>
            <div className="text-center py-2">
              <Math tex="q_{\text{fins}} = N \cdot \eta_f \cdot h \cdot A_f \cdot \theta_b = 200 \times 0.85 \times 80 \times 5 \times 10^{-4} \times 60 = 408 \text{ W}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q_{\text{base}} = h \cdot A_b \cdot \theta_b = 80 \times 0.05 \times 60 = 240 \text{ W}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q_{\text{total}} = 408 + 240 = 648 \text{ W} \;\; \checkmark" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\eta_o = 0.90 \; (90\%)" display />
        <Math tex="q_{\text{total}} = 648 \text{ W}" display />
        <p className="text-sm text-gray-400 mt-2">
          핀이 없을 때: <Math tex="q_{\text{bare}} = 80 \times 0.15 \times 60 = 720 \text{ W}" />이지만,
          이는 전체 면적이 베이스 온도라는 가정(비현실적).
          실제 비교 대상은 핀 없는 원래 베이스 면적(<Math tex="A_b" />) 기준입니다.
        </p>
      </div>
    ),
  },
];

const tips = [
  { title: "1. 핀 끝단 조건 확인", description: "무한핀, 단열팁, 대류팁, 지정온도 중 어떤 조건인지 먼저 파악하세요." },
  { title: "2. m 파라미터 계산", description: "m = √(hP/kAc)를 정확히 계산하세요. P는 둘레, Ac는 단면적입니다." },
  { title: "3. 핀 효율 vs 유효성", description: "효율(η)은 실제/최대 열전달 비, 유효성(ε)은 핀 유무 비교입니다." },
  { title: "4. 핀 설계 기준", description: "ε > 2이면 핀 사용이 정당화됩니다. 높은 k, 낮은 h에 유리합니다." },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={4} problems={problems} tips={tips} />;
}

"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  {
    id: 1,
    title: "Reynolds Number Calculation",
    topic: "Reynolds Number",
    topicColor: "red",
    problem: (
      <p>
        공기(동점성계수 <Math tex="\nu = 1.5 \times 10^{-5}" /> m²/s)가 속도 <Math tex="u = 10" /> m/s로
        길이 <Math tex="L = 0.5" /> m인 평판 위를 흐르고 있습니다.
        Reynolds 수를 계산하고 유동 상태(층류/난류)를 판별하시오.
        평판의 임계 Reynolds 수는 <Math tex="Re_{cr} = 5 \times 10^5" />입니다.
      </p>
    ),
    given: [
      "u = 10 m/s",
      "L = 0.5 m",
      "\u03BD = 1.5 \u00D7 10\u207B\u2075 m\u00B2/s",
      "Re_cr = 5 \u00D7 10\u2075 (평판)",
    ],
    find: "Re_L 및 유동 상태 (층류 또는 난류)",
    steps: [
      {
        label: "Step 1: Reynolds 수 정의",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Reynolds 수는 관성력과 점성력의 비로 정의됩니다:</p>
            <div className="text-center py-2">
              <Math tex="Re_L = \frac{uL}{\nu}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 값 대입",
        content: (
          <div className="text-center py-2">
            <Math tex="Re_L = \frac{10 \times 0.5}{1.5 \times 10^{-5}}" display />
          </div>
        ),
      },
      {
        label: "Step 3: Re_L 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="Re_L = \frac{5}{1.5 \times 10^{-5}} = 3.33 \times 10^5" display />
          </div>
        ),
      },
      {
        label: "Step 4: 유동 상태 판별",
        content: (
          <div>
            <p className="text-gray-400 mb-2">임계 Reynolds 수와 비교합니다:</p>
            <div className="text-center py-2">
              <Math tex="Re_L = 3.33 \times 10^5 < Re_{cr} = 5 \times 10^5" display />
            </div>
            <p className="text-gray-400">따라서 평판 전체에서 <strong className="text-white">층류(laminar)</strong> 유동입니다.</p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="Re_L = 3.33 \times 10^5" display />
        <p className="text-sm text-gray-400 mt-2">
          <Math tex="Re_L < Re_{cr}" />이므로 평판 위 유동은 층류입니다.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Velocity Boundary Layer Thickness",
    topic: "Boundary Layer",
    topicColor: "green",
    problem: (
      <p>
        문제 1과 같은 조건에서 (공기, <Math tex="u = 10" /> m/s, <Math tex="\nu = 1.5 \times 10^{-5}" /> m²/s),
        평판 선단에서 <Math tex="x = 0.3" /> m 지점의 속도 경계층 두께를 계산하시오.
        층류 경계층 두께 공식: <Math tex="\delta = 5x / \sqrt{Re_x}" />.
      </p>
    ),
    given: [
      "u = 10 m/s",
      "\u03BD = 1.5 \u00D7 10\u207B\u2075 m\u00B2/s",
      "x = 0.3 m",
      "\u03B4 = 5x / \u221ARe_x (층류)",
    ],
    find: "\u03B4 (속도 경계층 두께) at x = 0.3 m",
    steps: [
      {
        label: "Step 1: 국소 Reynolds 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Re_x = \frac{ux}{\nu} = \frac{10 \times 0.3}{1.5 \times 10^{-5}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Re_x 값 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="Re_x = \frac{3}{1.5 \times 10^{-5}} = 2 \times 10^5" display />
          </div>
        ),
      },
      {
        label: "Step 3: 층류 확인",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="Re_x = 2 \times 10^5 < 5 \times 10^5" /> 이므로 층류 공식 적용 가능합니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 4: 경계층 두께 공식 대입",
        content: (
          <div className="text-center py-2">
            <Math tex="\delta = \frac{5x}{\sqrt{Re_x}} = \frac{5 \times 0.3}{\sqrt{2 \times 10^5}}" display />
          </div>
        ),
      },
      {
        label: "Step 5: 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\delta = \frac{1.5}{\sqrt{200{,}000}} = \frac{1.5}{447.2} = 3.354 \times 10^{-3} \text{ m}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\delta = 3.35 \text{ mm}" display />
        <p className="text-sm text-gray-400 mt-2">
          경계층 두께는 하류로 갈수록 <Math tex="\delta \propto \sqrt{x}" />로 증가합니다.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Prandtl Number & BL Comparison",
    topic: "Prandtl Number",
    topicColor: "blue",
    problem: (
      <p>
        세 가지 유체의 Prandtl 수가 다음과 같습니다: 물(<Math tex="Pr = 7" />),
        공기(<Math tex="Pr = 0.71" />), 수은(<Math tex="Pr = 0.025" />).
        속도 경계층 두께 <Math tex="\delta" />와 열경계층 두께 <Math tex="\delta_t" />의 관계식
        <Math tex="\delta / \delta_t \approx Pr^{1/3}" />을 이용하여 각 유체의 경계층 비를 계산하고,
        어떤 유체의 열경계층이 가장 두꺼운지 비교하시오.
      </p>
    ),
    given: [
      "물: Pr = 7",
      "공기: Pr = 0.71",
      "수은: Pr = 0.025",
      "\u03B4/\u03B4_t \u2248 Pr^(1/3)",
    ],
    find: "각 유체의 \u03B4/\u03B4_t 비 및 열경계층 비교",
    steps: [
      {
        label: "Step 1: 경계층 비 관계식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Prandtl 수와 경계층 두께 비의 근사 관계:</p>
            <div className="text-center py-2">
              <Math tex="\frac{\delta}{\delta_t} \approx Pr^{1/3}" display />
            </div>
            <p className="text-gray-400">
              <Math tex="Pr > 1" />이면 <Math tex="\delta > \delta_t" /> (속도 경계층이 더 두꺼움),{" "}
              <Math tex="Pr < 1" />이면 <Math tex="\delta < \delta_t" /> (열경계층이 더 두꺼움)
            </p>
          </div>
        ),
      },
      {
        label: "Step 2: 물 (Pr = 7)",
        content: (
          <div className="text-center py-2">
            <Math tex="\frac{\delta}{\delta_t} = 7^{1/3} = 1.913" display />
            <p className="text-gray-400 mt-2">
              <Math tex="\delta_t = \delta / 1.913 \approx 0.523\,\delta" /> (열경계층이 속도 경계층의 약 52%)
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: 공기 (Pr = 0.71)",
        content: (
          <div className="text-center py-2">
            <Math tex="\frac{\delta}{\delta_t} = 0.71^{1/3} = 0.893" display />
            <p className="text-gray-400 mt-2">
              <Math tex="\delta_t = \delta / 0.893 \approx 1.120\,\delta" /> (열경계층이 속도 경계층보다 약 12% 두꺼움)
            </p>
          </div>
        ),
      },
      {
        label: "Step 4: 수은 (Pr = 0.025)",
        content: (
          <div className="text-center py-2">
            <Math tex="\frac{\delta}{\delta_t} = 0.025^{1/3} = 0.2924" display />
            <p className="text-gray-400 mt-2">
              <Math tex="\delta_t = \delta / 0.2924 \approx 3.42\,\delta" /> (열경계층이 속도 경계층의 약 3.4배)
            </p>
          </div>
        ),
      },
      {
        label: "Step 5: 물리적 해석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Prandtl 수의 물리적 의미:</p>
            <ul className="space-y-1 text-gray-400">
              <li>- <Math tex="Pr = \nu / \alpha" />: 운동량 확산과 열확산의 비</li>
              <li>- 수은(<Math tex="Pr \ll 1" />): 열확산이 지배적 → 열경계층이 훨씬 두꺼움</li>
              <li>- 공기(<Math tex="Pr \approx 1" />): 두 경계층이 비슷</li>
              <li>- 물(<Math tex="Pr \gg 1" />): 운동량 확산이 지배적 → 열경계층이 더 얇음</li>
            </ul>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\text{물: } \delta/\delta_t = 1.91, \quad \text{공기: } 0.89, \quad \text{수은: } 0.29" display />
        <p className="text-sm text-gray-400 mt-2">
          수은의 열경계층이 가장 두껍고 (약 3.4<Math tex="\delta" />), 물의 열경계층이 가장 얇습니다 (약 0.52<Math tex="\delta" />).
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Nusselt Number to h",
    topic: "Nusselt Number",
    topicColor: "amber",
    problem: (
      <p>
        길이 <Math tex="L = 1" /> m인 평판 위를 공기(열전도율 <Math tex="k = 0.026" /> W/(m·K))가 흐르고 있습니다.
        상관식에 의해 평균 Nusselt 수가 <Math tex="\overline{Nu}_L = 150" />으로 주어질 때,
        평균 대류 열전달 계수 <Math tex="\bar{h}" />를 구하시오.
      </p>
    ),
    given: [
      "L = 1 m",
      "k = 0.026 W/(m\u00B7K)",
      "Nu_L = 150",
    ],
    find: "평균 대류 열전달 계수 h [W/(m\u00B2\u00B7K)]",
    steps: [
      {
        label: "Step 1: Nusselt 수 정의",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Nusselt 수는 대류와 전도의 비를 나타내는 무차원수입니다:</p>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_L = \frac{\bar{h} L}{k}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: h에 대해 정리",
        content: (
          <div className="text-center py-2">
            <Math tex="\bar{h} = \frac{\overline{Nu}_L \cdot k}{L}" display />
          </div>
        ),
      },
      {
        label: "Step 3: 값 대입",
        content: (
          <div className="text-center py-2">
            <Math tex="\bar{h} = \frac{150 \times 0.026}{1}" display />
          </div>
        ),
      },
      {
        label: "Step 4: 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="\bar{h} = 3.9 \text{ W/(m}^2\text{\cdot K)}" display />
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\bar{h} = 3.9 \text{ W/(m}^2\text{\cdot K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          공기의 대류 열전달 계수는 일반적으로 2~25 W/(m²·K) 범위입니다.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Flat Plate Convection Heat Transfer",
    topic: "Heat Transfer Rate",
    topicColor: "cyan",
    problem: (
      <p>
        공기가 속도 <Math tex="u = 5" /> m/s로 <Math tex="0.5 \times 0.3" /> m (길이 x 폭) 평판 위를 흐릅니다.
        표면 온도 <Math tex="T_s = 80" />°C, 자유류 온도 <Math tex="T_\infty = 20" />°C입니다.
        막온도 <Math tex="T_f = 50" />°C에서의 물성치: <Math tex="k = 0.028" /> W/(m·K),{" "}
        <Math tex="\nu = 1.8 \times 10^{-5}" /> m²/s, <Math tex="Pr = 0.71" />.
        층류 평판 상관식 <Math tex="\overline{Nu}_L = 0.664\,Re_L^{1/2}\,Pr^{1/3}" />을 사용하여
        총 열전달률 <Math tex="Q" />를 구하시오.
      </p>
    ),
    given: [
      "u = 5 m/s",
      "평판: 0.5 m (L) \u00D7 0.3 m (W)",
      "Ts = 80\u00B0C, T\u221E = 20\u00B0C",
      "k = 0.028 W/(m\u00B7K), \u03BD = 1.8 \u00D7 10\u207B\u2075 m\u00B2/s, Pr = 0.71",
    ],
    find: "총 열전달률 Q [W]",
    steps: [
      {
        label: "Step 1: Reynolds 수 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="Re_L = \frac{uL}{\nu} = \frac{5 \times 0.5}{1.8 \times 10^{-5}} = 1.389 \times 10^5" display />
          </div>
        ),
      },
      {
        label: "Step 2: 유동 상태 확인",
        content: (
          <div>
            <p className="text-gray-400">
              <Math tex="Re_L = 1.389 \times 10^5 < 5 \times 10^5" /> → 층류. 상관식 적용 가능.
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: 평균 Nusselt 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_L = 0.664 \times (1.389 \times 10^5)^{1/2} \times (0.71)^{1/3}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.664 \times 372.7 \times 0.8929 = 221.1" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 평균 대류 열전달 계수",
        content: (
          <div className="text-center py-2">
            <Math tex="\bar{h} = \frac{\overline{Nu}_L \cdot k}{L} = \frac{221.1 \times 0.028}{0.5} = 12.38 \text{ W/(m}^2\text{\cdot K)}" display />
          </div>
        ),
      },
      {
        label: "Step 5: 열전달률 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Q = \bar{h} A (T_s - T_\infty) = 12.38 \times (0.5 \times 0.3) \times (80 - 20)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Q = 12.38 \times 0.15 \times 60 = 111.4 \text{ W}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="Q = 111.4 \text{ W}" display />
        <p className="text-sm text-gray-400 mt-2">
          Newton의 냉각 법칙: <Math tex="Q = \bar{h} A \Delta T" />. 물성치는 막온도 <Math tex="T_f = (T_s + T_\infty)/2" />에서 평가합니다.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Film Temperature & Properties",
    topic: "Film Temperature",
    topicColor: "purple",
    problem: (
      <p>
        온도 <Math tex="T_s = 150" />°C인 가열 표면 위로 <Math tex="T_\infty = 20" />°C인 물이 흐르고 있습니다.
        막온도를 구하고, 해당 온도에서의 물 물성치(주어진 값 이용)로 동점성계수 <Math tex="\nu" />와
        열확산계수 <Math tex="\alpha" />를 계산하시오.
        막온도에서의 물 물성치: <Math tex="\rho = 968" /> kg/m³, <Math tex="\mu = 3.37 \times 10^{-4}" /> Pa·s,{" "}
        <Math tex="k = 0.673" /> W/(m·K), <Math tex="c_p = 4197" /> J/(kg·K), <Math tex="Pr = 2.08" />.
      </p>
    ),
    given: [
      "Ts = 150\u00B0C, T\u221E = 20\u00B0C",
      "\u03C1 = 968 kg/m\u00B3",
      "\u03BC = 3.37 \u00D7 10\u207B\u2074 Pa\u00B7s",
      "k = 0.673 W/(m\u00B7K)",
      "cp = 4197 J/(kg\u00B7K), Pr = 2.08",
    ],
    find: "Tf, \u03BD, \u03B1",
    steps: [
      {
        label: "Step 1: 막온도 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">물성치를 평가하는 기준 온도인 막온도(film temperature):</p>
            <div className="text-center py-2">
              <Math tex="T_f = \frac{T_s + T_\infty}{2} = \frac{150 + 20}{2} = 85°\text{C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 동점성계수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\nu = \frac{\mu}{\rho} = \frac{3.37 \times 10^{-4}}{968}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\nu = 3.482 \times 10^{-7} \text{ m}^2\text{/s}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 열확산계수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\alpha = \frac{k}{\rho c_p} = \frac{0.673}{968 \times 4197}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\alpha = \frac{0.673}{4{,}062{,}696} = 1.657 \times 10^{-7} \text{ m}^2\text{/s}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: Pr 수 검증",
        content: (
          <div>
            <p className="text-gray-400 mb-2">계산된 값으로 Prandtl 수를 검증합니다:</p>
            <div className="text-center py-2">
              <Math tex="Pr = \frac{\nu}{\alpha} = \frac{3.482 \times 10^{-7}}{1.657 \times 10^{-7}} = 2.10 \approx 2.08 \;\checkmark" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="T_f = 85°\text{C}" display />
        <Math tex="\nu = 3.48 \times 10^{-7} \text{ m}^2\text{/s}" display />
        <Math tex="\alpha = 1.66 \times 10^{-7} \text{ m}^2\text{/s}" display />
        <p className="text-sm text-gray-400 mt-2">
          Pr 검증값(2.10)이 주어진 값(2.08)과 잘 일치하여 계산이 올바름을 확인합니다.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Transition Location on Flat Plate",
    topic: "Transition Location",
    topicColor: "emerald",
    problem: (
      <p>
        공기(<Math tex="\nu = 1.5 \times 10^{-5}" /> m²/s)가 속도 <Math tex="u = 20" /> m/s로 평판 위를 흐릅니다.
        임계 Reynolds 수 <Math tex="Re_{cr} = 5 \times 10^5" />일 때,
        층류에서 난류로 천이가 발생하는 위치 <Math tex="x_{cr}" />을 구하시오.
      </p>
    ),
    given: [
      "u = 20 m/s",
      "\u03BD = 1.5 \u00D7 10\u207B\u2075 m\u00B2/s",
      "Re_cr = 5 \u00D7 10\u2075",
    ],
    find: "천이 위치 x_cr [m]",
    steps: [
      {
        label: "Step 1: 임계 Reynolds 수 조건",
        content: (
          <div>
            <p className="text-gray-400 mb-2">천이가 발생하는 위치에서:</p>
            <div className="text-center py-2">
              <Math tex="Re_{cr} = \frac{u \cdot x_{cr}}{\nu}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: x_cr에 대해 정리",
        content: (
          <div className="text-center py-2">
            <Math tex="x_{cr} = \frac{Re_{cr} \cdot \nu}{u}" display />
          </div>
        ),
      },
      {
        label: "Step 3: 값 대입",
        content: (
          <div className="text-center py-2">
            <Math tex="x_{cr} = \frac{5 \times 10^5 \times 1.5 \times 10^{-5}}{20}" display />
          </div>
        ),
      },
      {
        label: "Step 4: 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="x_{cr} = \frac{7.5}{20} = 0.375 \text{ m}" display />
            </div>
            <p className="text-gray-400 mt-2">
              선단에서 0.375 m까지는 층류, 그 이후는 난류 유동이 발달합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="x_{cr} = 0.375 \text{ m}" display />
        <p className="text-sm text-gray-400 mt-2">
          유속이 증가하면 천이 위치가 선단에 가까워집니다 (<Math tex="x_{cr} \propto 1/u" />).
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "Thermal Boundary Layer Thickness",
    topic: "Thermal BL",
    topicColor: "orange",
    problem: (
      <p>
        물(<Math tex="Pr = 7" />, <Math tex="\nu = 1 \times 10^{-6}" /> m²/s)이 속도 <Math tex="u = 0.5" /> m/s로
        평판 위를 흐릅니다. 선단에서 <Math tex="x = 0.2" /> m 지점에서의
        속도 경계층 두께 <Math tex="\delta" />와 열경계층 두께 <Math tex="\delta_t" />를 구하시오.
        (층류: <Math tex="\delta = 5x/\sqrt{Re_x}" />, <Math tex="\delta_t = \delta / Pr^{1/3}" />)
      </p>
    ),
    given: [
      "u = 0.5 m/s",
      "\u03BD = 1 \u00D7 10\u207B\u2076 m\u00B2/s",
      "Pr = 7",
      "x = 0.2 m",
    ],
    find: "\u03B4 및 \u03B4_t at x = 0.2 m",
    steps: [
      {
        label: "Step 1: 국소 Reynolds 수 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="Re_x = \frac{ux}{\nu} = \frac{0.5 \times 0.2}{1 \times 10^{-6}} = 1 \times 10^5" display />
          </div>
        ),
      },
      {
        label: "Step 2: 층류 확인",
        content: (
          <div>
            <p className="text-gray-400">
              <Math tex="Re_x = 1 \times 10^5 < 5 \times 10^5" /> → 층류 유동이므로 Blasius 해 적용 가능
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: 속도 경계층 두께 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\delta = \frac{5x}{\sqrt{Re_x}} = \frac{5 \times 0.2}{\sqrt{1 \times 10^5}} = \frac{1.0}{316.2}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\delta = 3.162 \times 10^{-3} \text{ m} = 3.16 \text{ mm}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 열경계층 두께 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\delta_t = \frac{\delta}{Pr^{1/3}} = \frac{3.162}{7^{1/3}} = \frac{3.162}{1.913}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\delta_t = 1.653 \text{ mm}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 물리적 해석",
        content: (
          <div>
            <p className="text-gray-400">
              물은 <Math tex="Pr = 7 > 1" />이므로 운동량 확산이 열확산보다 빠릅니다.
              따라서 속도 경계층(3.16 mm)이 열경계층(1.65 mm)보다 약 1.9배 두껍습니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\delta = 3.16 \text{ mm}, \quad \delta_t = 1.65 \text{ mm}" display />
        <p className="text-sm text-gray-400 mt-2">
          <Math tex="Pr > 1" />인 물에서는 열경계층이 속도 경계층보다 얇습니다 (<Math tex="\delta_t / \delta = 0.52" />).
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Churchill-Bernstein Correlation",
    topic: "Dimensionless Analysis",
    topicColor: "pink",
    problem: (
      <p>
        직경 <Math tex="D = 0.05" /> m인 원통(cylinder) 주위로 공기가 <Math tex="u = 15" /> m/s로 흐릅니다.
        물성치: <Math tex="\nu = 1.6 \times 10^{-5}" /> m²/s, <Math tex="k = 0.027" /> W/(m·K), <Math tex="Pr = 0.71" />.
        간략화된 Churchill-Bernstein 상관식을 이용하여 <Math tex="Re_D" />, <Math tex="\overline{Nu}_D" />,
        그리고 <Math tex="\bar{h}" />를 구하시오.
      </p>
    ),
    given: [
      "D = 0.05 m",
      "u = 15 m/s",
      "\u03BD = 1.6 \u00D7 10\u207B\u2075 m\u00B2/s",
      "k = 0.027 W/(m\u00B7K), Pr = 0.71",
    ],
    find: "Re_D, Nu_D, h",
    steps: [
      {
        label: "Step 1: Reynolds 수 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="Re_D = \frac{uD}{\nu} = \frac{15 \times 0.05}{1.6 \times 10^{-5}} = 46{,}875" display />
          </div>
        ),
      },
      {
        label: "Step 2: Churchill-Bernstein 상관식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">간략화된 Churchill-Bernstein 상관식 (<Math tex="Re_D \cdot Pr > 0.2" />):</p>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 0.3 + \frac{0.62\,Re_D^{1/2}\,Pr^{1/3}}{\left[1 + (0.4/Pr)^{2/3}\right]^{1/4}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 분자 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="0.62 \times Re_D^{1/2} \times Pr^{1/3} = 0.62 \times 216.6 \times 0.8929 = 119.9" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 분모 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\left[1 + \left(\frac{0.4}{0.71}\right)^{2/3}\right]^{1/4} = \left[1 + (0.5634)^{2/3}\right]^{1/4}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \left[1 + 0.6823\right]^{1/4} = (1.6823)^{1/4} = 1.139" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: Nusselt 수 및 h 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 0.3 + \frac{119.9}{1.139} = 0.3 + 105.3 = 105.6" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\bar{h} = \frac{\overline{Nu}_D \cdot k}{D} = \frac{105.6 \times 0.027}{0.05} = 57.0 \text{ W/(m}^2\text{\cdot K)}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="Re_D = 46{,}875, \quad \overline{Nu}_D = 105.6, \quad \bar{h} = 57.0 \text{ W/(m}^2\text{\cdot K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          원형 실린더 주위 유동은 특성 길이로 직경 D를 사용합니다.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "Average vs Local Convection Coefficient",
    topic: "Average vs Local",
    topicColor: "teal",
    problem: (
      <p>
        층류 평판 유동에서 국소 Nusselt 수는 <Math tex="Nu_x = 0.332\,Re_x^{1/2}\,Pr^{1/3}" />,
        평균 Nusselt 수는 <Math tex="\overline{Nu}_L = 0.664\,Re_L^{1/2}\,Pr^{1/3}" />입니다.
        이로부터 <Math tex="\bar{h} = 2\,h(L)" />임을 보이고,
        공기(<Math tex="u = 8" /> m/s, <Math tex="L = 0.6" /> m, <Math tex="\nu = 1.5 \times 10^{-5}" /> m²/s,{" "}
        <Math tex="k = 0.026" /> W/(m·K), <Math tex="Pr = 0.71" />)에 대해
        <Math tex="h(L)" />과 <Math tex="\bar{h}" />를 계산하시오.
      </p>
    ),
    given: [
      "Nu_x = 0.332 Re_x^(1/2) Pr^(1/3)",
      "Nu_L = 0.664 Re_L^(1/2) Pr^(1/3)",
      "u = 8 m/s, L = 0.6 m",
      "\u03BD = 1.5 \u00D7 10\u207B\u2075 m\u00B2/s, k = 0.026 W/(m\u00B7K), Pr = 0.71",
    ],
    find: "h(L)과 h_avg의 관계 증명 및 수치 계산",
    steps: [
      {
        label: "Step 1: 관계식 유도",
        content: (
          <div>
            <p className="text-gray-400 mb-2">x = L에서의 국소 대류 계수:</p>
            <div className="text-center py-2">
              <Math tex="h(L) = \frac{Nu_L \cdot k}{L} = \frac{0.332\,Re_L^{1/2}\,Pr^{1/3} \cdot k}{L}" display />
            </div>
            <p className="text-gray-400 mb-2">평균 대류 계수:</p>
            <div className="text-center py-2">
              <Math tex="\bar{h} = \frac{\overline{Nu}_L \cdot k}{L} = \frac{0.664\,Re_L^{1/2}\,Pr^{1/3} \cdot k}{L}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 비율 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{\bar{h}}{h(L)} = \frac{0.664}{0.332} = 2" display />
            </div>
            <p className="text-gray-400 mt-2">
              따라서 <Math tex="\bar{h} = 2\,h(L)" />. 이는 층류에서 국소 h가 <Math tex="h(x) \propto x^{-1/2}" />로 감소하기 때문입니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: Reynolds 수 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="Re_L = \frac{uL}{\nu} = \frac{8 \times 0.6}{1.5 \times 10^{-5}} = 3.2 \times 10^5" display />
          </div>
        ),
      },
      {
        label: "Step 4: 국소 h(L) 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Nu_x\big|_{x=L} = 0.332 \times (3.2 \times 10^5)^{1/2} \times (0.71)^{1/3}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.332 \times 565.7 \times 0.8929 = 167.7" display />
            </div>
            <div className="text-center py-2">
              <Math tex="h(L) = \frac{167.7 \times 0.026}{0.6} = 7.27 \text{ W/(m}^2\text{\cdot K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 평균 h 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\bar{h} = 2 \times h(L) = 2 \times 7.27 = 14.53 \text{ W/(m}^2\text{\cdot K)}" display />
            </div>
            <p className="text-gray-400 mt-2">검증:</p>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_L = 0.664 \times 565.7 \times 0.8929 = 335.4" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\bar{h} = \frac{335.4 \times 0.026}{0.6} = 14.53 \text{ W/(m}^2\text{\cdot K)} \;\checkmark" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\bar{h} = 2\,h(L) \;\;\text{(층류 평판)}" display />
        <Math tex="h(L) = 7.27 \text{ W/(m}^2\text{\cdot K)}, \quad \bar{h} = 14.53 \text{ W/(m}^2\text{\cdot K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          선단에서 h가 무한대에서 시작하여 하류로 갈수록 감소하므로, 평균값이 끝단 국소값의 2배입니다.
        </p>
      </div>
    ),
  },
];

const tips = [
  { title: "1. 무차원수 계산", description: "Re, Pr, Nu를 먼저 계산하세요. 물성치는 막온도 Tf=(Ts+T\u221E)/2에서 평가합니다." },
  { title: "2. 유동 상태 판별", description: "Re_cr \u2248 5\u00D710\u2075 (평판), Re_cr \u2248 2300 (관내). 층류/난류 여부를 확인하세요." },
  { title: "3. Nu에서 h 구하기", description: "Nu = hL/k를 정리하면 h = Nu\u00B7k/L. 특성길이 L의 정의에 주의하세요." },
  { title: "4. 물성치 온도 의존성", description: "유체 물성치(\u03C1, \u03BC, k, Pr)는 온도에 크게 의존합니다. 올바른 온도에서 평가하세요." },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={9} problems={problems} tips={tips} />;
}

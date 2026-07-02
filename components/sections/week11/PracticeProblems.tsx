"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  {
    id: 1,
    title: "Entry Length Calculation",
    topic: "Entry Length",
    topicColor: "red",
    problem: (
      <p>
        물(<Math tex="\mu = 8.9 \times 10^{-4}" /> Pa·s, <Math tex="\rho = 997" /> kg/m³,{" "}
        <Math tex="\text{Pr} = 6.13" />)이 내경 <Math tex="D = 0.02" /> m인 원형 관 내부를
        평균속도 <Math tex="u_m = 0.5" /> m/s로 흐르고 있습니다.
        레이놀즈 수를 계산하고, 유동 상태를 판별한 뒤,
        수력학적 입구길이(<Math tex="x_{fd,h}" />)와 열적 입구길이(<Math tex="x_{fd,t}" />)를 구하시오.
      </p>
    ),
    given: [
      "ρ = 997 kg/m³",
      "μ = 8.9 × 10⁻⁴ Pa·s",
      "u_m = 0.5 m/s",
      "D = 0.02 m",
      "Pr = 6.13",
    ],
    find: "Re_D, x_{fd,h}, x_{fd,t}",
    steps: [
      {
        label: "Step 1: 레이놀즈 수 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">내부 유동의 레이놀즈 수 정의:</p>
            <div className="text-center py-2">
              <Math tex="Re_D = \frac{\rho u_m D}{\mu} = \frac{997 \times 0.5 \times 0.02}{8.9 \times 10^{-4}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Re_D = \frac{9.97}{8.9 \times 10^{-4}} = 11{,}202" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 유동 상태 판별",
        content: (
          <div>
            <p className="text-gray-400 mb-2">내부 유동의 천이 기준:</p>
            <div className="text-center py-2">
              <Math tex="Re_D = 11{,}202 > 10{,}000 \quad \Rightarrow \quad \text{완전 난류 (Fully Turbulent)}" display />
            </div>
            <p className="text-gray-400 mt-2">
              참고: <Math tex="Re_D < 2{,}300" />이면 층류, <Math tex="2{,}300 < Re_D < 10{,}000" />이면 천이 영역입니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: 수력학적 입구길이 (난류)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">난류에서 수력학적 입구길이:</p>
            <div className="text-center py-2">
              <Math tex="x_{fd,h} \approx 10D \;\text{~}\; 60D" display />
            </div>
            <div className="text-center py-2">
              <Math tex="x_{fd,h} \approx 10 \times 0.02 \;\text{~}\; 60 \times 0.02 = 0.2 \;\text{~}\; 1.2 \text{ m}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 열적 입구길이 (난류)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">난류에서 열적 입구길이도 수력학적 입구길이와 비슷한 크기입니다:</p>
            <div className="text-center py-2">
              <Math tex="x_{fd,t} \approx 10D \;\text{~}\; 60D = 0.2 \;\text{~}\; 1.2 \text{ m}" display />
            </div>
            <p className="text-gray-400 mt-2">
              비교: 만약 층류(<Math tex="Re_D = 11{,}202" />가 아니라)였다면{" "}
              <Math tex="x_{fd,h}/D \approx 0.05 Re_D" />,{" "}
              <Math tex="x_{fd,t}/D \approx 0.05 Re_D \cdot Pr" />로 훨씬 길어집니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 5: 층류 입구길이 참고 비교",
        content: (
          <div>
            <p className="text-gray-400 mb-2">만약 층류였다면 (참고용):</p>
            <div className="text-center py-2">
              <Math tex="x_{fd,h} = 0.05 \times Re_D \times D = 0.05 \times 11{,}202 \times 0.02 = 11.2 \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="x_{fd,t} = 0.05 \times Re_D \times Pr \times D = 0.05 \times 11{,}202 \times 6.13 \times 0.02 = 68.7 \text{ m}" display />
            </div>
            <p className="text-gray-400 mt-2">
              난류에서는 혼합이 활발하여 입구길이가 훨씬 짧습니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="Re_D = 11{,}202 \;\; (\text{난류})" display />
        <Math tex="x_{fd,h} \approx 0.2 \;\text{~}\; 1.2 \text{ m} \;\; (10\text{-}60D)" display />
        <Math tex="x_{fd,t} \approx 0.2 \;\text{~}\; 1.2 \text{ m} \;\; (10\text{-}60D)" display />
        <p className="text-sm text-gray-400 mt-2">
          난류에서는 수력학적/열적 입구길이가 모두 10-60D로 짧습니다.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Constant Heat Flux - Laminar Flow",
    topic: "Constant q'' Laminar",
    topicColor: "green",
    problem: (
      <p>
        물(<Math tex="c_p = 4{,}180" /> J/(kg·K), <Math tex="k = 0.625" /> W/(m·K))이{" "}
        <Math tex="\dot{m} = 0.01" /> kg/s의 유량으로 내경 <Math tex="D = 0.01" /> m,
        길이 <Math tex="L = 2" /> m인 관을 통해 흐릅니다.
        관 벽면에 일정 열유속 <Math tex="q''_s = 10{,}000" /> W/m²가 가해지고,
        입구 온도 <Math tex="T_{m,i} = 20" />°C입니다.
        출구 평균온도 <Math tex="T_{m,o}" />와 출구에서의 벽면 온도 <Math tex="T_s(L)" />을 구하시오.
        (완전발달 층류 가정)
      </p>
    ),
    given: [
      "ṁ = 0.01 kg/s",
      "D = 0.01 m, L = 2 m",
      "q''_s = 10,000 W/m²",
      "T_{m,i} = 20°C",
      "c_p = 4,180 J/(kg·K), k = 0.625 W/(m·K)",
    ],
    find: "T_{m,o} [°C] 및 T_s(L) [°C]",
    steps: [
      {
        label: "Step 1: 에너지 균형으로 출구 온도 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">일정 열유속에서 에너지 균형:</p>
            <div className="text-center py-2">
              <Math tex="q = q''_s \cdot \pi D L = \dot{m} c_p (T_{m,o} - T_{m,i})" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_{m,o} = T_{m,i} + \frac{q''_s \cdot \pi D L}{\dot{m} c_p}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 수치 대입",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_{m,o} = 20 + \frac{10{,}000 \times \pi \times 0.01 \times 2}{0.01 \times 4{,}180}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 20 + \frac{628.3}{41.80} = 20 + 15.03 = 35.03\text{°C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 대류 열전달 계수 계산 (층류, 일정 q'')",
        content: (
          <div>
            <p className="text-gray-400 mb-2">완전발달 층류, 일정 열유속 조건:</p>
            <div className="text-center py-2">
              <Math tex="Nu_D = 4.36" display />
            </div>
            <div className="text-center py-2">
              <Math tex="h = \frac{Nu_D \cdot k}{D} = \frac{4.36 \times 0.625}{0.01} = 272.5 \text{ W/(m²·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 출구에서 벽면 온도 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              일정 열유속에서 <Math tex="q''_s = h(T_s - T_m)" />이므로:
            </p>
            <div className="text-center py-2">
              <Math tex="T_s(L) = T_{m,o} + \frac{q''_s}{h} = 35.03 + \frac{10{,}000}{272.5}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 35.03 + 36.70 = 71.73\text{°C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="T_{m,o} = 35.0\text{°C}" display />
        <Math tex="T_s(L) = 71.7\text{°C}" display />
        <p className="text-sm text-gray-400 mt-2">
          일정 열유속에서 <Math tex="T_m(x)" />는 x에 대해 선형으로 증가하고,{" "}
          <Math tex="T_s(x) - T_m(x) = q''_s/h" />는 일정합니다.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Constant Surface Temperature - Laminar",
    topic: "Constant Ts Laminar",
    topicColor: "blue",
    problem: (
      <p>
        오일(<Math tex="\mu = 0.01" /> Pa·s, <Math tex="c_p = 2{,}000" /> J/(kg·K),{" "}
        <Math tex="k = 0.15" /> W/(m·K), <Math tex="\text{Pr} = 133" />)이{" "}
        <Math tex="\dot{m} = 0.05" /> kg/s의 유량으로 내경 <Math tex="D = 0.025" /> m,
        길이 <Math tex="L = 5" /> m인 관을 흐릅니다.
        관 벽면 온도 <Math tex="T_s = 100" />°C(일정), 입구 온도 <Math tex="T_{m,i} = 20" />°C일 때,
        출구 평균온도 <Math tex="T_{m,o}" />를 구하시오.
      </p>
    ),
    given: [
      "ṁ = 0.05 kg/s",
      "D = 0.025 m, L = 5 m",
      "μ = 0.01 Pa·s, c_p = 2,000 J/(kg·K)",
      "k = 0.15 W/(m·K), Pr = 133",
      "T_s = 100°C, T_{m,i} = 20°C",
    ],
    find: "T_{m,o} [°C]",
    steps: [
      {
        label: "Step 1: 레이놀즈 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Re_D = \frac{4\dot{m}}{\pi D \mu} = \frac{4 \times 0.05}{\pi \times 0.025 \times 0.01}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{0.2}{7.854 \times 10^{-4}} = 254.6 \quad (\text{층류})" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Nusselt 수 및 h 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">완전발달 층류, 일정 벽온 조건:</p>
            <div className="text-center py-2">
              <Math tex="Nu_D = 3.66" display />
            </div>
            <div className="text-center py-2">
              <Math tex="h = \frac{Nu_D \cdot k}{D} = \frac{3.66 \times 0.15}{0.025} = 21.96 \text{ W/(m²·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 일정 벽온 출구 온도 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">일정 표면온도에서의 출구 온도:</p>
            <div className="text-center py-2">
              <Math tex="\frac{T_s - T_{m,o}}{T_s - T_{m,i}} = \exp\!\left(-\frac{\pi D L \cdot h}{\dot{m} c_p}\right)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 지수 인자 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{\pi D L \cdot h}{\dot{m} c_p} = \frac{\pi \times 0.025 \times 5 \times 21.96}{0.05 \times 2{,}000}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{8.625}{100} = 0.08625" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\exp(-0.08625) = 0.9174" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 출구 온도 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_s - T_{m,o} = (T_s - T_{m,i}) \times 0.9174" display />
            </div>
            <div className="text-center py-2">
              <Math tex="100 - T_{m,o} = (100 - 20) \times 0.9174 = 80 \times 0.9174 = 73.39" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_{m,o} = 100 - 73.39 = 26.61\text{°C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="T_{m,o} = 26.6\text{°C}" display />
        <p className="text-sm text-gray-400 mt-2">
          오일의 높은 점성(낮은 Re)과 높은 Pr로 인해 열전달이 매우 느립니다.
          관 길이 5 m에서도 출구 온도가 20°C에서 26.6°C로 소폭만 상승합니다.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Dittus-Boelter Correlation",
    topic: "Dittus-Boelter",
    topicColor: "amber",
    problem: (
      <p>
        물이 난류 상태(<Math tex="Re_D = 30{,}000" />, <Math tex="\text{Pr} = 5.0" />,{" "}
        <Math tex="k = 0.62" /> W/(m·K))로 내경 <Math tex="D = 0.025" /> m인 관 내부를 흐르고 있습니다.
        유체가 가열되는 경우, Dittus-Boelter 상관식을 이용하여
        Nusselt 수와 대류 열전달 계수 <Math tex="h" />를 구하시오.
      </p>
    ),
    given: [
      "Re_D = 30,000",
      "Pr = 5.0",
      "k = 0.62 W/(m·K)",
      "D = 0.025 m",
      "가열 조건 (heating: n = 0.4)",
    ],
    find: "Nu_D 및 h [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: Dittus-Boelter 상관식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">난류 내부 유동에서 가열 조건:</p>
            <div className="text-center py-2">
              <Math tex="Nu_D = 0.023 \, Re_D^{0.8} \, Pr^{n}" display />
            </div>
            <p className="text-gray-400 mt-2">
              가열(heating): <Math tex="n = 0.4" />, 냉각(cooling): <Math tex="n = 0.3" />
            </p>
          </div>
        ),
      },
      {
        label: "Step 2: Re^0.8 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="Re_D^{0.8} = 30{,}000^{0.8}" display />
            <Math tex="= \exp(0.8 \ln 30{,}000) = \exp(0.8 \times 10.309) = \exp(8.247) = 3{,}813" display />
          </div>
        ),
      },
      {
        label: "Step 3: Pr^0.4 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="Pr^{0.4} = 5.0^{0.4} = \exp(0.4 \ln 5.0) = \exp(0.4 \times 1.609) = \exp(0.6436) = 1.903" display />
          </div>
        ),
      },
      {
        label: "Step 4: Nusselt 수 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="Nu_D = 0.023 \times 3{,}813 \times 1.903 = 0.023 \times 7{,}256 = 166.9" display />
          </div>
        ),
      },
      {
        label: "Step 5: 대류 열전달 계수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="h = \frac{Nu_D \cdot k}{D} = \frac{166.9 \times 0.62}{0.025}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{103.5}{0.025} = 4{,}139 \text{ W/(m²·K)}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="Nu_D = 166.9" display />
        <Math tex="h = 4{,}139 \text{ W/(m²·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          Dittus-Boelter는 <Math tex="0.7 \le Pr \le 160" />,{" "}
          <Math tex="Re_D > 10{,}000" />, <Math tex="L/D > 10" />에서 적용 가능합니다.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Turbulent Pipe Heating",
    topic: "Pipe Heating",
    topicColor: "cyan",
    problem: (
      <p>
        물(<Math tex="\dot{m} = 0.2" /> kg/s)이 내경 <Math tex="D = 0.05" /> m, 길이{" "}
        <Math tex="L = 10" /> m인 관을 흐르고 있습니다.
        관 벽면 온도 <Math tex="T_s = 80" />°C(일정), 입구 온도 <Math tex="T_{m,i} = 15" />°C입니다.
        평균 유체 온도 약 40°C에서 물성치: <Math tex="\rho = 992" /> kg/m³,{" "}
        <Math tex="\mu = 6.5 \times 10^{-4}" /> Pa·s, <Math tex="c_p = 4{,}179" /> J/(kg·K),{" "}
        <Math tex="k = 0.631" /> W/(m·K), <Math tex="\text{Pr} = 4.3" />.
        출구 온도 <Math tex="T_{m,o}" />를 구하시오.
      </p>
    ),
    given: [
      "ṁ = 0.2 kg/s, D = 0.05 m, L = 10 m",
      "T_s = 80°C, T_{m,i} = 15°C",
      "ρ = 992 kg/m³, μ = 6.5 × 10⁻⁴ Pa·s",
      "c_p = 4,179 J/(kg·K), k = 0.631 W/(m·K)",
      "Pr = 4.3",
    ],
    find: "T_{m,o} [°C]",
    steps: [
      {
        label: "Step 1: 레이놀즈 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Re_D = \frac{4\dot{m}}{\pi D \mu} = \frac{4 \times 0.2}{\pi \times 0.05 \times 6.5 \times 10^{-4}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{0.8}{1.021 \times 10^{-4}} = 7{,}836" display />
            </div>
            <p className="text-gray-400 mt-2">
              <Math tex="2{,}300 < Re_D < 10{,}000" />: 천이 영역이지만 Dittus-Boelter를 적용합니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 2: Dittus-Boelter로 Nu 계산 (가열)",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Nu_D = 0.023 \, Re_D^{0.8} \, Pr^{0.4}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Re_D^{0.8} = 7{,}836^{0.8} = \exp(0.8 \ln 7{,}836) = \exp(0.8 \times 8.967) = \exp(7.173) = 1{,}305" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Pr^{0.4} = 4.3^{0.4} = \exp(0.4 \times 1.4586) = \exp(0.5834) = 1.792" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Nu_D = 0.023 \times 1{,}305 \times 1.792 = 53.78" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 대류 열전달 계수 계산",
        content: (
          <div className="text-center py-2">
            <Math tex="h = \frac{Nu_D \cdot k}{D} = \frac{53.78 \times 0.631}{0.05} = 678.7 \text{ W/(m²·K)}" display />
          </div>
        ),
      },
      {
        label: "Step 4: 일정 벽온 공식 적용",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{T_s - T_{m,o}}{T_s - T_{m,i}} = \exp\!\left(-\frac{\pi D L \cdot h}{\dot{m} c_p}\right)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\frac{\pi D L \cdot h}{\dot{m} c_p} = \frac{\pi \times 0.05 \times 10 \times 678.7}{0.2 \times 4{,}179} = \frac{1{,}066}{835.8} = 1.276" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\exp(-1.276) = 0.2790" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 출구 온도 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_s - T_{m,o} = (T_s - T_{m,i}) \times 0.2790 = (80 - 15) \times 0.2790 = 65 \times 0.2790 = 18.14" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_{m,o} = 80 - 18.14 = 61.9\text{°C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="T_{m,o} \approx 61.9\text{°C}" display />
        <p className="text-sm text-gray-400 mt-2">
          평균 유체 온도 <Math tex="(15+61.9)/2 \approx 38.4" />°C로,
          초기 가정 40°C와 유사하므로 물성치 재평가 없이 결과가 유효합니다.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Gnielinski Correlation",
    topic: "Gnielinski",
    topicColor: "purple",
    problem: (
      <p>
        천이 영역의 유동(<Math tex="Re_D = 5{,}000" />, <Math tex="\text{Pr} = 3.0" />)이
        내경 <Math tex="D = 0.02" /> m인 관에서 흐르고 있습니다.
        마찰계수 <Math tex="f = 0.037" />, 열전도율 <Math tex="k = 0.60" /> W/(m·K)일 때,
        Gnielinski 상관식을 이용하여 Nusselt 수와 열전달 계수 <Math tex="h" />를 구하시오.
        Dittus-Boelter 결과와 비교하시오.
      </p>
    ),
    given: [
      "Re_D = 5,000 (천이 영역)",
      "Pr = 3.0",
      "f = 0.037",
      "k = 0.60 W/(m·K)",
      "D = 0.02 m",
    ],
    find: "Nu_D (Gnielinski) 및 h, Dittus-Boelter와 비교",
    steps: [
      {
        label: "Step 1: Gnielinski 상관식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">천이 및 난류 영역에서 정확도가 높은 상관식:</p>
            <div className="text-center py-2">
              <Math tex="Nu_D = \frac{(f/8)(Re_D - 1{,}000)\,Pr}{1 + 12.7\,(f/8)^{1/2}\,(Pr^{2/3} - 1)}" display />
            </div>
            <p className="text-gray-400 mt-2">
              적용 범위: <Math tex="3{,}000 \le Re_D \le 5 \times 10^6" />,{" "}
              <Math tex="0.5 \le Pr \le 2{,}000" />
            </p>
          </div>
        ),
      },
      {
        label: "Step 2: 분자 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{f}{8} = \frac{0.037}{8} = 4.625 \times 10^{-3}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Numerator} = \frac{f}{8}(Re_D - 1{,}000) \cdot Pr = 4.625 \times 10^{-3} \times 4{,}000 \times 3.0 = 55.50" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 분모 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="(f/8)^{1/2} = (4.625 \times 10^{-3})^{1/2} = 0.06801" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Pr^{2/3} = 3.0^{2/3} = \exp\!\left(\frac{2}{3}\ln 3\right) = \exp(0.7324) = 2.080" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Denominator} = 1 + 12.7 \times 0.06801 \times (2.080 - 1) = 1 + 12.7 \times 0.06801 \times 1.080" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 1 + 0.9328 = 1.933" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: Nu 및 h 계산 (Gnielinski)",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Nu_D = \frac{55.50}{1.933} = 28.71" display />
            </div>
            <div className="text-center py-2">
              <Math tex="h = \frac{Nu_D \cdot k}{D} = \frac{28.71 \times 0.60}{0.02} = 861.3 \text{ W/(m²·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: Dittus-Boelter와 비교",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Dittus-Boelter (n = 0.4, 가열 가정):</p>
            <div className="text-center py-2">
              <Math tex="Nu_{DB} = 0.023 \times 5{,}000^{0.8} \times 3.0^{0.4}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="5{,}000^{0.8} = \exp(0.8 \times 8.517) = \exp(6.814) = 909.5" display />
            </div>
            <div className="text-center py-2">
              <Math tex="3.0^{0.4} = \exp(0.4 \times 1.0986) = \exp(0.4394) = 1.552" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Nu_{DB} = 0.023 \times 909.5 \times 1.552 = 32.45" display />
            </div>
            <p className="text-gray-400 mt-2">
              Dittus-Boelter(<Math tex="Nu = 32.45" />)가 Gnielinski(<Math tex="Nu = 28.71" />)보다
              약 13% 크게 예측합니다. 천이 영역에서는 Gnielinski가 더 정확합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="Nu_D^{\text{Gnielinski}} = 28.71, \quad h = 861 \text{ W/(m²·K)}" display />
        <Math tex="Nu_D^{\text{Dittus-Boelter}} = 32.45 \;\; (\text{약 13% 과대 예측})" display />
        <p className="text-sm text-gray-400 mt-2">
          천이 영역(<Math tex="3{,}000 < Re < 10{,}000" />)에서는
          Gnielinski 상관식이 더 정확하며, Dittus-Boelter는 과대 예측하는 경향이 있습니다.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Pressure Drop and Pumping Power",
    topic: "Pressure Drop",
    topicColor: "emerald",
    problem: (
      <p>
        물(<Math tex="\rho = 998" /> kg/m³)이 내경 <Math tex="D = 0.03" /> m, 길이{" "}
        <Math tex="L = 20" /> m인 관 내부를 평균속도 <Math tex="u_m = 2" /> m/s로 흐르고 있습니다.
        마찰계수 <Math tex="f = 0.025" />일 때, 압력 강하 <Math tex="\Delta P" />와
        소요 펌핑 동력을 구하시오.
      </p>
    ),
    given: [
      "ρ = 998 kg/m³",
      "D = 0.03 m, L = 20 m",
      "u_m = 2 m/s",
      "f = 0.025 (Darcy friction factor)",
    ],
    find: "ΔP [Pa] 및 Pumping Power [W]",
    steps: [
      {
        label: "Step 1: Darcy-Weisbach 압력 강하 공식",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\Delta P = f \cdot \frac{L}{D} \cdot \frac{\rho u_m^2}{2}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 수치 대입",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\Delta P = 0.025 \times \frac{20}{0.03} \times \frac{998 \times 2^2}{2}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.025 \times 666.7 \times \frac{998 \times 4}{2}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 16.67 \times 1{,}996 = 33{,}267 \text{ Pa} \approx 33.3 \text{ kPa}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 체적 유량 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="A_c = \frac{\pi D^2}{4} = \frac{\pi \times 0.03^2}{4} = 7.069 \times 10^{-4} \text{ m}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\dot{V} = u_m \cdot A_c = 2 \times 7.069 \times 10^{-4} = 1.414 \times 10^{-3} \text{ m}^3\text{/s}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 펌핑 동력 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="W_{\text{pump}} = \Delta P \cdot \dot{V} = 33{,}267 \times 1.414 \times 10^{-3}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 47.04 \text{ W}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\Delta P = 33.3 \text{ kPa}" display />
        <Math tex="W_{\text{pump}} = 47.0 \text{ W}" display />
        <p className="text-sm text-gray-400 mt-2">
          실제 펌프 효율(<Math tex="\eta_{\text{pump}}" />)을 고려하면
          필요 전력은 <Math tex="W_{\text{pump}}/\eta_{\text{pump}}" />로 더 커집니다.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "Log-Mean Temperature Difference",
    topic: "Log-Mean ΔT",
    topicColor: "orange",
    problem: (
      <p>
        일정 벽면 온도 <Math tex="T_s = 90" />°C인 관에서 유체의 입구 온도{" "}
        <Math tex="T_{m,i} = 20" />°C, 출구 온도 <Math tex="T_{m,o} = 60" />°C입니다.
        대수평균 온도차(LMTD) <Math tex="\Delta T_{lm}" />을 구하고,
        유량 <Math tex="\dot{m} = 0.1" /> kg/s, <Math tex="c_p = 4{,}180" /> J/(kg·K)일 때
        열전달률 <Math tex="q" />를 에너지 균형과 LMTD 방법 두 가지로 계산하여 비교하시오.
      </p>
    ),
    given: [
      "T_s = 90°C (일정)",
      "T_{m,i} = 20°C, T_{m,o} = 60°C",
      "ṁ = 0.1 kg/s",
      "c_p = 4,180 J/(kg·K)",
    ],
    find: "ΔT_lm [°C] 및 q [W] (두 가지 방법 비교)",
    steps: [
      {
        label: "Step 1: 입구/출구 온도차 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\Delta T_i = T_s - T_{m,i} = 90 - 20 = 70\text{°C}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\Delta T_o = T_s - T_{m,o} = 90 - 60 = 30\text{°C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 대수평균 온도차 (LMTD) 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\Delta T_{lm} = \frac{\Delta T_i - \Delta T_o}{\ln(\Delta T_i / \Delta T_o)} = \frac{70 - 30}{\ln(70/30)}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{40}{\ln(2.333)} = \frac{40}{0.8473} = 47.22\text{°C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 방법 1 - 에너지 균형",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q = \dot{m} c_p (T_{m,o} - T_{m,i}) = 0.1 \times 4{,}180 \times (60 - 20)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.1 \times 4{,}180 \times 40 = 16{,}720 \text{ W} = 16.72 \text{ kW}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 방법 2 - LMTD 방법",
        content: (
          <div>
            <p className="text-gray-400 mb-2">LMTD를 이용한 열전달률:</p>
            <div className="text-center py-2">
              <Math tex="q = h \cdot A_s \cdot \Delta T_{lm}" display />
            </div>
            <p className="text-gray-400 mt-2">
              이 방법으로 <Math tex="q = 16{,}720" /> W를 확인하려면{" "}
              <Math tex="hA_s = q / \Delta T_{lm}" />:
            </p>
            <div className="text-center py-2">
              <Math tex="h A_s = \frac{16{,}720}{47.22} = 354.1 \text{ W/K}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 검증 - 두 방법의 일치 확인",
        content: (
          <div>
            <p className="text-gray-400 mb-2">두 방법이 동일한 결과를 줌을 확인합니다:</p>
            <div className="text-center py-2">
              <Math tex="q_{\text{energy}} = \dot{m}c_p \Delta T = 16{,}720 \text{ W}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q_{\text{LMTD}} = hA_s \cdot \Delta T_{lm} = 354.1 \times 47.22 = 16{,}720 \text{ W} \;\; \checkmark" display />
            </div>
            <p className="text-gray-400 mt-2">
              참고: 산술평균 <Math tex="\Delta T_{am} = (70+30)/2 = 50" />°C는 LMTD(47.2°C)보다 크므로,
              산술평균을 사용하면 열전달을 과대 예측합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\Delta T_{lm} = 47.2\text{°C}" display />
        <Math tex="q = 16.72 \text{ kW}" display />
        <p className="text-sm text-gray-400 mt-2">
          LMTD는 항상 산술평균보다 작습니다. 일정 벽온 조건에서
          에너지 균형과 LMTD 방법은 동일한 결과를 줍니다.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Annular Flow - Hydraulic Diameter",
    topic: "Annular Flow",
    topicColor: "pink",
    problem: (
      <p>
        내관 외경 <Math tex="D_i = 0.025" /> m (가열, <Math tex="T_s = 100" />°C),
        외관 내경 <Math tex="D_o = 0.05" /> m (단열)인 환형관(annulus)에서
        물(<Math tex="\dot{m} = 0.1" /> kg/s, <Math tex="T_{m,i} = 30" />°C)이 흐릅니다.
        물성치(약 40°C): <Math tex="\nu = 6.58 \times 10^{-7}" /> m²/s.
        수력직경 <Math tex="D_h" />와 레이놀즈 수를 구하시오.
      </p>
    ),
    given: [
      "D_i = 0.025 m (내관 외경, 가열면)",
      "D_o = 0.05 m (외관 내경, 단열)",
      "ṁ = 0.1 kg/s, T_{m,i} = 30°C",
      "ν = 6.58 × 10⁻⁷ m²/s (약 40°C)",
      "ρ ≈ 992 kg/m³ (약 40°C)",
    ],
    find: "D_h [m] 및 Re_{D_h}",
    steps: [
      {
        label: "Step 1: 환형관의 수력직경 정의",
        content: (
          <div>
            <p className="text-gray-400 mb-2">수력직경은 4×(유동 단면적)/(젖은 둘레)입니다:</p>
            <div className="text-center py-2">
              <Math tex="D_h = \frac{4A_c}{P_{\text{wetted}}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 유동 단면적 및 젖은 둘레 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="A_c = \frac{\pi}{4}(D_o^2 - D_i^2) = \frac{\pi}{4}(0.05^2 - 0.025^2)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{\pi}{4}(2.5 \times 10^{-3} - 6.25 \times 10^{-4}) = \frac{\pi}{4} \times 1.875 \times 10^{-3} = 1.473 \times 10^{-3} \text{ m}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="P_{\text{wetted}} = \pi(D_o + D_i) = \pi(0.05 + 0.025) = 0.2356 \text{ m}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 수력직경 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="D_h = \frac{4 \times 1.473 \times 10^{-3}}{0.2356} = \frac{5.891 \times 10^{-3}}{0.2356} = 0.025 \text{ m}" display />
            </div>
            <p className="text-gray-400 mt-2">
              환형관에서 <Math tex="D_h = D_o - D_i = 0.05 - 0.025 = 0.025" /> m으로 간단히 구할 수도 있습니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 4: 평균 유속 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="u_m = \frac{\dot{m}}{\rho A_c} = \frac{0.1}{992 \times 1.473 \times 10^{-3}} = \frac{0.1}{1.461} = 0.06846 \text{ m/s}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 레이놀즈 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Re_{D_h} = \frac{u_m D_h}{\nu} = \frac{0.06846 \times 0.025}{6.58 \times 10^{-7}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{1.711 \times 10^{-3}}{6.58 \times 10^{-7}} = 2{,}601" display />
            </div>
            <p className="text-gray-400 mt-2">
              <Math tex="Re_{D_h} \approx 2{,}601" />: 천이 영역 부근(약간 난류)으로 판별됩니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="D_h = D_o - D_i = 0.025 \text{ m}" display />
        <Math tex="Re_{D_h} = 2{,}601" display />
        <p className="text-sm text-gray-400 mt-2">
          환형관의 수력직경은 <Math tex="D_o - D_i" />로 간단히 계산됩니다.
          이 경우 천이 영역 부근이므로, 난류 상관식 적용 시 주의가 필요합니다.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "Design Problem - Required Pipe Length",
    topic: "Design Problem",
    topicColor: "teal",
    problem: (
      <p>
        물(<Math tex="\dot{m} = 0.5" /> kg/s)을 20°C에서 60°C로 가열하려 합니다.
        관 벽면 온도 <Math tex="T_s = 80" />°C(일정), 내경 <Math tex="D = 0.05" /> m입니다.
        평균 유체 온도 약 40°C에서 물성치: <Math tex="\mu = 6.5 \times 10^{-4}" /> Pa·s,{" "}
        <Math tex="c_p = 4{,}179" /> J/(kg·K), <Math tex="k = 0.631" /> W/(m·K),{" "}
        <Math tex="\text{Pr} = 4.3" />.
        필요한 관 길이 <Math tex="L" />을 구하시오.
      </p>
    ),
    given: [
      "ṁ = 0.5 kg/s, D = 0.05 m",
      "T_{m,i} = 20°C, T_{m,o} = 60°C, T_s = 80°C",
      "μ = 6.5 × 10⁻⁴ Pa·s, c_p = 4,179 J/(kg·K)",
      "k = 0.631 W/(m·K), Pr = 4.3",
    ],
    find: "L [m]",
    steps: [
      {
        label: "Step 1: 레이놀즈 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Re_D = \frac{4\dot{m}}{\pi D \mu} = \frac{4 \times 0.5}{\pi \times 0.05 \times 6.5 \times 10^{-4}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{2.0}{1.021 \times 10^{-4}} = 19{,}589 \quad (\text{난류})" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Dittus-Boelter로 h 계산 (가열)",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Nu_D = 0.023 \, Re_D^{0.8} \, Pr^{0.4}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Re_D^{0.8} = 19{,}589^{0.8} = \exp(0.8 \times 9.883) = \exp(7.906) = 2{,}711" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Pr^{0.4} = 4.3^{0.4} = 1.792" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Nu_D = 0.023 \times 2{,}711 \times 1.792 = 111.7" display />
            </div>
            <div className="text-center py-2">
              <Math tex="h = \frac{Nu_D \cdot k}{D} = \frac{111.7 \times 0.631}{0.05} = 1{,}410 \text{ W/(m²·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 일정 벽온 공식에서 L 유도",
        content: (
          <div>
            <p className="text-gray-400 mb-2">일정 표면온도 공식을 L에 대해 정리합니다:</p>
            <div className="text-center py-2">
              <Math tex="\frac{T_s - T_{m,o}}{T_s - T_{m,i}} = \exp\!\left(-\frac{\pi D L \cdot h}{\dot{m} c_p}\right)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="L = -\frac{\dot{m} c_p}{\pi D h} \ln\!\left(\frac{T_s - T_{m,o}}{T_s - T_{m,i}}\right)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 온도비 및 로그 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{T_s - T_{m,o}}{T_s - T_{m,i}} = \frac{80 - 60}{80 - 20} = \frac{20}{60} = 0.3333" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\ln(0.3333) = -1.0986" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 필요 관 길이 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="L = -\frac{0.5 \times 4{,}179}{\pi \times 0.05 \times 1{,}410} \times (-1.0986)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{2{,}089.5}{221.5} \times 1.0986 = 9.434 \times 1.0986" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 10.36 \text{ m}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 6: L/D 확인",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{L}{D} = \frac{10.36}{0.05} = 207" display />
            </div>
            <p className="text-gray-400 mt-2">
              <Math tex="L/D = 207 > 10" />이므로 완전발달 유동 가정이 유효합니다.
              또한 난류 입구길이(10-60D = 0.5-3 m)보다 훨씬 길어 Dittus-Boelter 적용이 적절합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="L \approx 10.4 \text{ m}" display />
        <p className="text-sm text-gray-400 mt-2">
          물을 20°C에서 60°C로 가열하려면 약 10.4 m 길이의 관이 필요합니다.
          <Math tex="L/D = 207" />로 완전발달 유동 가정이 유효합니다.
        </p>
      </div>
    ),
  },
];

const tips = [
  { title: "1. 유동 상태 확인", description: "Re_D = ṁD/(Ac·μ) = umD/ν. Re < 2300 층류, Re > 10000 난류." },
  { title: "2. 열적 경계조건", description: "일정 열유속(q''=const)인지 일정 벽온(Ts=const)인지 확인하세요." },
  { title: "3. 입구 효과", description: "완전발달 여부를 확인하고, 입구영역이면 보정 계수를 적용하세요." },
  { title: "4. 에너지 균형", description: "q = ṁcp(Tm,o - Tm,i)를 항상 활용하여 출구온도를 계산하세요." },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={11} problems={problems} tips={tips} />;
}

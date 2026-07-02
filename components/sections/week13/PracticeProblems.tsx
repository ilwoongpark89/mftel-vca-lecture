"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  {
    id: 1,
    title: "총괄열전달계수 (Overall U)",
    topic: "Overall U",
    topicColor: "red",
    problem: (
      <p>
        강관의 내경 <Math tex="D_i = 0.025" /> m, 외경 <Math tex="D_o = 0.03" /> m,
        관벽 열전도율 <Math tex="k = 50" /> W/(m·K)입니다.
        내부 대류계수 <Math tex="h_i = 1000" /> W/(m²·K), 외부 대류계수{" "}
        <Math tex="h_o = 200" /> W/(m²·K)이고, 오염(fouling)은 없습니다.
        외면 기준 총괄열전달계수 <Math tex="U_o" />를 구하시오.
      </p>
    ),
    given: [
      "D_i = 0.025 m, D_o = 0.03 m",
      "k = 50 W/(m·K)",
      "h_i = 1000 W/(m²·K), h_o = 200 W/(m²·K)",
      "오염 없음 (R_f = 0)",
    ],
    find: "외면 기준 총괄열전달계수 U_o [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: 총괄열전달계수 공식 (외면 기준)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              단위 길이(L=1)당 외면 기준으로 열저항을 정리하면:
            </p>
            <div className="text-center py-2">
              <Math tex="\frac{1}{U_o} = \frac{D_o}{h_i D_i} + \frac{D_o \ln(D_o/D_i)}{2k} + \frac{1}{h_o}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 내부 대류 저항",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R_{\text{conv,i}} = \frac{D_o}{h_i D_i} = \frac{0.03}{1000 \times 0.025} = \frac{0.03}{25} = 0.0012 \;\text{m}^2\text{·K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 관벽 전도 저항",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R_{\text{cond}} = \frac{D_o \ln(D_o / D_i)}{2k} = \frac{0.03 \times \ln(1.2)}{2 \times 50} = \frac{0.03 \times 0.1823}{100}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{0.005470}{100} = 5.47 \times 10^{-5} \;\text{m}^2\text{·K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 외부 대류 저항",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R_{\text{conv,o}} = \frac{1}{h_o} = \frac{1}{200} = 0.005 \;\text{m}^2\text{·K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 총괄열전달계수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{1}{U_o} = 0.0012 + 0.0000547 + 0.005 = 0.006255 \;\text{m}^2\text{·K/W}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="U_o = \frac{1}{0.006255} = 159.9 \;\text{W/(m}^2\text{·K)}" display />
            </div>
            <p className="text-gray-400 mt-2">
              외부 대류 저항(0.005)이 전체 저항의 약 80%를 차지하여 지배적입니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="U_o \approx 159.9 \;\text{W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          외부 대류 저항이 지배적이므로, U_o 개선을 위해서는 외부 대류계수 h_o를 높이는 것이 가장 효과적입니다.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "오염 포함 총괄열전달계수",
    topic: "U with Fouling",
    topicColor: "green",
    problem: (
      <p>
        문제 1과 동일한 강관(<Math tex="D_i = 0.025" /> m, <Math tex="D_o = 0.03" /> m,{" "}
        <Math tex="k = 50" /> W/(m·K), <Math tex="h_i = 1000" />, <Math tex="h_o = 200" /> W/(m²·K))에서
        내부 오염계수 <Math tex="R_{f,i} = 0.0002" /> m²·K/W, 외부 오염계수{" "}
        <Math tex="R_{f,o} = 0.0001" /> m²·K/W가 추가됩니다.
        오염을 고려한 외면 기준 총괄열전달계수 <Math tex="U_o" />를 구하시오.
      </p>
    ),
    given: [
      "D_i = 0.025 m, D_o = 0.03 m, k = 50 W/(m·K)",
      "h_i = 1000 W/(m²·K), h_o = 200 W/(m²·K)",
      "R_f,i = 0.0002 m²·K/W",
      "R_f,o = 0.0001 m²·K/W",
    ],
    find: "오염 포함 U_o [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: 오염 포함 총괄열전달계수 공식",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{1}{U_o} = \frac{D_o}{h_i D_i} + \frac{R_{f,i} D_o}{D_i} + \frac{D_o \ln(D_o/D_i)}{2k} + R_{f,o} + \frac{1}{h_o}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 문제 1의 결과 활용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">문제 1에서 오염 없는 저항의 합:</p>
            <div className="text-center py-2">
              <Math tex="\frac{1}{U_{o,\text{clean}}} = 0.0012 + 0.0000547 + 0.005 = 0.006255 \;\text{m}^2\text{·K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 내부 오염 저항 (외면 기준 환산)",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R_{f,i} \times \frac{D_o}{D_i} = 0.0002 \times \frac{0.03}{0.025} = 0.0002 \times 1.2 = 0.00024 \;\text{m}^2\text{·K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 외부 오염 저항",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="R_{f,o} = 0.0001 \;\text{m}^2\text{·K/W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 오염 포함 U_o 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{1}{U_o} = 0.006255 + 0.00024 + 0.0001 = 0.006595 \;\text{m}^2\text{·K/W}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="U_o = \frac{1}{0.006595} = 151.6 \;\text{W/(m}^2\text{·K)}" display />
            </div>
            <p className="text-gray-400 mt-2">
              오염으로 인해 U가 159.9에서 151.6으로 약 5.2% 감소했습니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="U_o \approx 151.6 \;\text{W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          오염(fouling)은 열저항을 증가시켜 U를 약 5.2% 감소시킵니다. 실제 설계에서는 오염을 반드시 고려해야 합니다.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "병류 LMTD 계산",
    topic: "LMTD Parallel",
    topicColor: "blue",
    problem: (
      <p>
        병류(parallel-flow) 열교환기에서 고온 유체는 150°C에서 100°C로 냉각되고,
        저온 유체는 30°C에서 70°C로 가열됩니다.
        병류에 대한 대수평균온도차(LMTD) <Math tex="\Delta T_{\text{lm}}" />을 구하시오.
      </p>
    ),
    given: [
      "T_h,i = 150°C, T_h,o = 100°C",
      "T_c,i = 30°C, T_c,o = 70°C",
      "병류 (parallel-flow) 배열",
    ],
    find: "ΔT_lm (병류) [°C]",
    steps: [
      {
        label: "Step 1: 병류 LMTD 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              병류에서 입구 쪽 온도차와 출구 쪽 온도차를 정의합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\Delta T_{\text{lm}} = \frac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1 / \Delta T_2)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 입구 쪽 온도차 ΔT₁",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              병류에서는 양쪽 유체가 같은 방향으로 흐르므로:
            </p>
            <div className="text-center py-2">
              <Math tex="\Delta T_1 = T_{h,i} - T_{c,i} = 150 - 30 = 120\;°\text{C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 출구 쪽 온도차 ΔT₂",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\Delta T_2 = T_{h,o} - T_{c,o} = 100 - 70 = 30\;°\text{C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: LMTD 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\Delta T_{\text{lm}} = \frac{120 - 30}{\ln(120/30)} = \frac{90}{\ln(4)} = \frac{90}{1.3863}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="\Delta T_{\text{lm,PF}} = 64.9\;°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          병류에서의 LMTD는 입구와 출구 온도차의 산술 평균(75°C)보다 작습니다.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "향류 LMTD 계산",
    topic: "LMTD Counter",
    topicColor: "amber",
    problem: (
      <p>
        문제 3과 동일한 온도 조건(고온: 150→100°C, 저온: 30→70°C)에서
        향류(counter-flow) 배열의 대수평균온도차(LMTD)를 구하고,
        병류 결과와 비교하시오.
      </p>
    ),
    given: [
      "T_h,i = 150°C, T_h,o = 100°C",
      "T_c,i = 30°C, T_c,o = 70°C",
      "향류 (counter-flow) 배열",
    ],
    find: "ΔT_lm (향류) [°C]",
    steps: [
      {
        label: "Step 1: 향류 온도차 정의",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              향류에서는 고온 유체 입구와 저온 유체 출구가 같은 쪽에 있습니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\Delta T_1 = T_{h,i} - T_{c,o} = 150 - 70 = 80\;°\text{C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 반대쪽 온도차",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\Delta T_2 = T_{h,o} - T_{c,i} = 100 - 30 = 70\;°\text{C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: LMTD 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\Delta T_{\text{lm}} = \frac{80 - 70}{\ln(80/70)} = \frac{10}{\ln(1.1429)} = \frac{10}{0.1335}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 병류와 비교",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\Delta T_{\text{lm,CF}} = 74.9\;°\text{C} \quad \text{vs} \quad \Delta T_{\text{lm,PF}} = 64.9\;°\text{C}" display />
            </div>
            <p className="text-gray-400 mt-2">
              향류의 LMTD가 약 15.4% 더 크므로, 동일 열전달률에서 향류가 더 작은 면적이 필요합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="\Delta T_{\text{lm,CF}} = 74.9\;°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          향류 LMTD(74.9°C)는 병류(64.9°C)보다 항상 크거나 같습니다. 따라서 향류 배열이 열교환기 면적을 줄이는 데 유리합니다.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "LMTD로 열교환기 면적 계산",
    topic: "HX Sizing LMTD",
    topicColor: "cyan",
    problem: (
      <p>
        향류 열교환기에서 고온 유체는 <Math tex="\dot{m}_h = 2" /> kg/s,{" "}
        <Math tex="c_{p,h} = 2000" /> J/(kg·K)이며, 120°C에서 80°C로 냉각됩니다.
        저온 유체는 <Math tex="\dot{m}_c = 4" /> kg/s, <Math tex="c_{p,c} = 4180" /> J/(kg·K)이며,
        입구 온도 20°C입니다. 총괄열전달계수 <Math tex="U = 300" /> W/(m²·K)일 때,
        필요한 열교환기 면적 <Math tex="A" />를 구하시오.
      </p>
    ),
    given: [
      "ṁ_h = 2 kg/s, c_p,h = 2000 J/(kg·K)",
      "T_h,i = 120°C, T_h,o = 80°C",
      "ṁ_c = 4 kg/s, c_p,c = 4180 J/(kg·K)",
      "T_c,i = 20°C, U = 300 W/(m²·K)",
      "향류 (counter-flow)",
    ],
    find: "열교환기 면적 A [m²]",
    steps: [
      {
        label: "Step 1: 열전달률 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q = \dot{m}_h c_{p,h}(T_{h,i} - T_{h,o}) = 2 \times 2000 \times (120 - 80) = 160{,}000 \;\text{W}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 저온 유체 출구온도 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">에너지 균형으로부터:</p>
            <div className="text-center py-2">
              <Math tex="q = \dot{m}_c c_{p,c}(T_{c,o} - T_{c,i})" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_{c,o} = T_{c,i} + \frac{q}{\dot{m}_c c_{p,c}} = 20 + \frac{160{,}000}{4 \times 4180} = 20 + 9.57 = 29.57\;°\text{C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 향류 LMTD 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\Delta T_1 = T_{h,i} - T_{c,o} = 120 - 29.57 = 90.43\;°\text{C}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\Delta T_2 = T_{h,o} - T_{c,i} = 80 - 20 = 60\;°\text{C}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\Delta T_{\text{lm}} = \frac{90.43 - 60}{\ln(90.43/60)} = \frac{30.43}{\ln(1.507)} = \frac{30.43}{0.4095} = 74.3\;°\text{C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 면적 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="A = \frac{q}{U \cdot \Delta T_{\text{lm}}} = \frac{160{,}000}{300 \times 74.3} = \frac{160{,}000}{22{,}290}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="A \approx 7.18 \;\text{m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          LMTD 방법은 입출구 온도를 모두 알 때 면적 산정에 직접 적용할 수 있습니다.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "향류 ε-NTU 계산",
    topic: "ε-NTU Counter",
    topicColor: "purple",
    problem: (
      <p>
        향류 열교환기에서 <Math tex="\text{NTU} = 2.0" />, 용량비{" "}
        <Math tex="C_r = C_{\min}/C_{\max} = 0.5" />일 때,
        유효도(effectiveness) <Math tex="\varepsilon" />을 구하시오.
      </p>
    ),
    given: [
      "NTU = 2.0",
      "C_r = 0.5",
      "향류 (counter-flow) 배열",
    ],
    find: "유효도 ε",
    steps: [
      {
        label: "Step 1: 향류 ε-NTU 관계식",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\varepsilon = \frac{1 - \exp\bigl[-\text{NTU}(1 - C_r)\bigr]}{1 - C_r \exp\bigl[-\text{NTU}(1 - C_r)\bigr]}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 지수 항 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{NTU}(1 - C_r) = 2.0 \times (1 - 0.5) = 1.0" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\exp(-1.0) = 0.3679" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 분자 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{분자} = 1 - 0.3679 = 0.6321" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 분모 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{분모} = 1 - C_r \times 0.3679 = 1 - 0.5 \times 0.3679 = 1 - 0.1839 = 0.8161" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: ε 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\varepsilon = \frac{0.6321}{0.8161} = 0.7745" display />
            </div>
            <p className="text-gray-400 mt-2">
              최대 가능 열전달의 약 77.5%가 실현됩니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="\varepsilon = 0.7745 \;\;(77.5\%)" display />
        <p className="text-sm text-gray-400 mt-2">
          NTU = 2.0, C_r = 0.5인 향류 열교환기는 최대 열전달의 약 77.5%를 달성합니다.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "ε-NTU 설계 문제",
    topic: "ε-NTU Design",
    topicColor: "emerald",
    problem: (
      <p>
        향류 열교환기에서 고온 유체(물): <Math tex="\dot{m}_h = 1" /> kg/s,{" "}
        <Math tex="c_{p,h} = 4180" /> J/(kg·K), <Math tex="T_{h,i} = 90" />°C.
        저온 유체(냉각수): <Math tex="\dot{m}_c = 2" /> kg/s,{" "}
        <Math tex="c_{p,c} = 4180" /> J/(kg·K), <Math tex="T_{c,i} = 15" />°C.
        총괄열전달계수 <Math tex="U = 500" /> W/(m²·K), 면적 <Math tex="A = 5" /> m².
        두 유체의 출구 온도를 구하시오.
      </p>
    ),
    given: [
      "ṁ_h = 1 kg/s, c_p,h = 4180 J/(kg·K), T_h,i = 90°C",
      "ṁ_c = 2 kg/s, c_p,c = 4180 J/(kg·K), T_c,i = 15°C",
      "U = 500 W/(m²·K), A = 5 m²",
      "향류 (counter-flow)",
    ],
    find: "T_h,o 및 T_c,o [°C]",
    steps: [
      {
        label: "Step 1: 열용량률 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="C_h = \dot{m}_h c_{p,h} = 1 \times 4180 = 4180 \;\text{W/K}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="C_c = \dot{m}_c c_{p,c} = 2 \times 4180 = 8360 \;\text{W/K}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="C_{\min} = C_h = 4180 \;\text{W/K}, \quad C_r = \frac{C_{\min}}{C_{\max}} = \frac{4180}{8360} = 0.5" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: NTU 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{NTU} = \frac{UA}{C_{\min}} = \frac{500 \times 5}{4180} = \frac{2500}{4180} = 0.598" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 유효도 ε 계산 (향류)",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{NTU}(1 - C_r) = 0.598 \times 0.5 = 0.299" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\exp(-0.299) = 0.7415" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\varepsilon = \frac{1 - 0.7415}{1 - 0.5 \times 0.7415} = \frac{0.2585}{0.6293} = 0.411" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 열전달률 및 출구온도 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q = \varepsilon \, C_{\min}(T_{h,i} - T_{c,i}) = 0.411 \times 4180 \times (90 - 15) = 0.411 \times 313{,}500" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q = 128{,}800 \;\text{W} \approx 128.8 \;\text{kW}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 출구온도 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_{h,o} = T_{h,i} - \frac{q}{C_h} = 90 - \frac{128{,}800}{4180} = 90 - 30.8 = 59.2\;°\text{C}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_{c,o} = T_{c,i} + \frac{q}{C_c} = 15 + \frac{128{,}800}{8360} = 15 + 15.4 = 30.4\;°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-1">
        <Math tex="T_{h,o} \approx 59.2\;°\text{C}, \quad T_{c,o} \approx 30.4\;°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          ε-NTU 방법은 출구온도를 모를 때(성능 예측 문제) 직접 적용할 수 있어 편리합니다.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "병류 열교환기 성능 평가 (Rating)",
    topic: "Rating Problem",
    topicColor: "orange",
    problem: (
      <p>
        기존 병류(parallel-flow) 열교환기의 면적 <Math tex="A = 10" /> m²,{" "}
        <Math tex="U = 250" /> W/(m²·K)입니다.
        고온 유체: <Math tex="\dot{m}_h = 3" /> kg/s, <Math tex="c_{p,h} = 1000" /> J/(kg·K),{" "}
        <Math tex="T_{h,i} = 200" />°C.
        저온 유체: <Math tex="\dot{m}_c = 1" /> kg/s, <Math tex="c_{p,c} = 4180" /> J/(kg·K),{" "}
        <Math tex="T_{c,i} = 30" />°C.
        두 유체의 출구온도를 구하시오.
      </p>
    ),
    given: [
      "A = 10 m², U = 250 W/(m²·K)",
      "ṁ_h = 3 kg/s, c_p,h = 1000 J/(kg·K), T_h,i = 200°C",
      "ṁ_c = 1 kg/s, c_p,c = 4180 J/(kg·K), T_c,i = 30°C",
      "병류 (parallel-flow)",
    ],
    find: "T_h,o 및 T_c,o [°C]",
    steps: [
      {
        label: "Step 1: 열용량률 및 C_r 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="C_h = 3 \times 1000 = 3000 \;\text{W/K}, \quad C_c = 1 \times 4180 = 4180 \;\text{W/K}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="C_{\min} = C_h = 3000 \;\text{W/K}, \quad C_r = \frac{3000}{4180} = 0.718" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: NTU 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{NTU} = \frac{UA}{C_{\min}} = \frac{250 \times 10}{3000} = 0.833" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 병류 유효도 ε 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">병류(parallel-flow)의 ε-NTU 관계식:</p>
            <div className="text-center py-2">
              <Math tex="\varepsilon = \frac{1 - \exp\bigl[-\text{NTU}(1 + C_r)\bigr]}{1 + C_r}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{NTU}(1 + C_r) = 0.833 \times 1.718 = 1.431" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\varepsilon = \frac{1 - \exp(-1.431)}{1.718} = \frac{1 - 0.2387}{1.718} = \frac{0.7613}{1.718} = 0.443" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 열전달률 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q = \varepsilon \, C_{\min}(T_{h,i} - T_{c,i}) = 0.443 \times 3000 \times (200 - 30)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.443 \times 3000 \times 170 = 225{,}900 \;\text{W} \approx 225.9 \;\text{kW}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 출구온도 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_{h,o} = 200 - \frac{225{,}900}{3000} = 200 - 75.3 = 124.7\;°\text{C}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_{c,o} = 30 + \frac{225{,}900}{4180} = 30 + 54.0 = 84.0\;°\text{C}" display />
            </div>
            <p className="text-gray-400 mt-2">
              검증: 병류에서 T_c,o(84.0°C) &lt; T_h,o(124.7°C)이므로 물리적으로 타당합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-1">
        <Math tex="T_{h,o} \approx 124.7\;°\text{C}, \quad T_{c,o} \approx 84.0\;°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          출구온도를 모르는 Rating 문제에서는 ε-NTU 방법이 LMTD보다 편리합니다.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "응축 유체 열교환기",
    topic: "Condensing Fluid",
    topicColor: "pink",
    problem: (
      <p>
        수증기가 <Math tex="T_h = 100" />°C에서 응축됩니다 (<Math tex="C_h \to \infty" />).
        냉각수: <Math tex="\dot{m}_c = 0.5" /> kg/s, <Math tex="c_{p,c} = 4180" /> J/(kg·K),{" "}
        <Math tex="T_{c,i} = 20" />°C.
        총괄열전달계수 <Math tex="U = 2000" /> W/(m²·K), 면적 <Math tex="A = 0.5" /> m².
        냉각수 출구온도 <Math tex="T_{c,o}" />를 구하시오.
      </p>
    ),
    given: [
      "수증기 응축: T_h = 100°C (일정), C_h → ∞",
      "ṁ_c = 0.5 kg/s, c_p,c = 4180 J/(kg·K), T_c,i = 20°C",
      "U = 2000 W/(m²·K), A = 0.5 m²",
    ],
    find: "냉각수 출구온도 T_c,o [°C]",
    steps: [
      {
        label: "Step 1: 상변화 유체의 C_r",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              응축(또는 증발)하는 유체는 온도가 일정하므로 <Math tex="C_h \to \infty" />입니다:
            </p>
            <div className="text-center py-2">
              <Math tex="C_{\min} = C_c = \dot{m}_c c_{p,c} = 0.5 \times 4180 = 2090 \;\text{W/K}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="C_r = \frac{C_{\min}}{C_{\max}} = \frac{C_c}{C_h} \to 0" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: NTU 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{NTU} = \frac{UA}{C_{\min}} = \frac{2000 \times 0.5}{2090} = \frac{1000}{2090} = 0.4785" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: C_r = 0일 때의 ε 관계식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="C_r = 0" />이면 모든 배열(병류, 향류 등)에서 동일한 공식입니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\varepsilon = 1 - \exp(-\text{NTU}) = 1 - \exp(-0.4785)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 1 - 0.6197 = 0.3803" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 냉각수 출구온도 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">유효도 정의로부터:</p>
            <div className="text-center py-2">
              <Math tex="T_{c,o} = T_{c,i} + \varepsilon(T_h - T_{c,i}) = 20 + 0.3803 \times (100 - 20)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 20 + 0.3803 \times 80 = 20 + 30.4 = 50.4\;°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T_{c,o} \approx 50.4\;°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          상변화 유체(C_r = 0)에서는 ε = 1 - exp(-NTU)로 간단하며, 배열 형태에 관계없이 동일합니다.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "셸앤튜브 보정계수 F",
    topic: "Shell-and-Tube",
    topicColor: "teal",
    problem: (
      <p>
        문제 5와 동일한 조건의 열교환기를 1-shell, 2-tube pass 셸앤튜브로 설계합니다.
        고온 유체: <Math tex="\dot{m}_h = 2" /> kg/s, <Math tex="c_{p,h} = 2000" /> J/(kg·K),
        120→80°C. 저온 유체: <Math tex="\dot{m}_c = 4" /> kg/s,{" "}
        <Math tex="c_{p,c} = 4180" /> J/(kg·K), 20→29.57°C. <Math tex="U = 300" /> W/(m²·K).
        보정계수 <Math tex="F" />를 구하고, 향류 대비 필요 면적 증가를 계산하시오.
      </p>
    ),
    given: [
      "1-shell, 2-tube pass",
      "q = 160,000 W (문제 5와 동일)",
      "ΔT_lm,CF = 74.3°C (문제 5와 동일)",
      "U = 300 W/(m²·K)",
    ],
    find: "보정계수 F 및 보정된 면적 A [m²]",
    steps: [
      {
        label: "Step 1: P와 R 파라미터 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              보정계수 F를 구하기 위해 P (온도 효율)와 R (열용량비)을 계산합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="P = \frac{T_{c,o} - T_{c,i}}{T_{h,i} - T_{c,i}} = \frac{29.57 - 20}{120 - 20} = \frac{9.57}{100} = 0.0957" display />
            </div>
            <div className="text-center py-2">
              <Math tex="R = \frac{T_{h,i} - T_{h,o}}{T_{c,o} - T_{c,i}} = \frac{120 - 80}{29.57 - 20} = \frac{40}{9.57} = 4.18" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 보정계수 F 결정",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              1-shell, 2-tube pass에 대한 F 공식:
            </p>
            <div className="text-center py-2">
              <Math tex="F = \frac{\sqrt{R^2+1}\,\ln\!\left(\frac{1-P}{1-RP}\right)}{(R-1)\ln\!\left(\frac{2 - P(R+1-\sqrt{R^2+1}\,)}{2 - P(R+1+\sqrt{R^2+1}\,)}\right)}" display />
            </div>
            <p className="text-gray-400 mb-2">
              <Math tex="\sqrt{R^2+1} = \sqrt{4.18^2+1} = \sqrt{18.47} = 4.298" />
            </p>
            <p className="text-gray-400 mb-2">
              P가 매우 작으므로(0.0957) 향류와 크게 다르지 않아 <Math tex="F \approx 0.95" />입니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: 수치 계산으로 F 확인",
        content: (
          <div>
            <p className="text-gray-400 mb-2">분자:</p>
            <div className="text-center py-2">
              <Math tex="\sqrt{R^2+1}\,\ln\!\left(\frac{1-0.0957}{1-4.18 \times 0.0957}\right) = 4.298 \times \ln\!\left(\frac{0.9043}{0.6000}\right)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 4.298 \times \ln(1.5072) = 4.298 \times 0.4095 = 1.760" display />
            </div>
            <p className="text-gray-400 mb-2">분모 내 인수:</p>
            <div className="text-center py-2">
              <Math tex="2 - P(R+1-\sqrt{R^2+1}) = 2 - 0.0957 \times (4.18+1-4.298) = 2 - 0.0957 \times 0.882 = 1.916" display />
            </div>
            <div className="text-center py-2">
              <Math tex="2 - P(R+1+\sqrt{R^2+1}) = 2 - 0.0957 \times (4.18+1+4.298) = 2 - 0.0957 \times 9.478 = 1.093" display />
            </div>
            <div className="text-center py-2">
              <Math tex="F = \frac{1.760}{(4.18-1)\ln(1.916/1.093)} = \frac{1.760}{3.18 \times \ln(1.753)} = \frac{1.760}{3.18 \times 0.5613} = \frac{1.760}{1.785} = 0.986" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 보정된 면적 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="A = \frac{q}{U \cdot F \cdot \Delta T_{\text{lm,CF}}} = \frac{160{,}000}{300 \times 0.986 \times 74.3} = \frac{160{,}000}{21{,}978}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="A = 7.28 \;\text{m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 향류 대비 면적 증가 비교",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{A_{\text{shell\&tube}}}{A_{\text{counter}}} = \frac{7.28}{7.18} = 1.014" display />
            </div>
            <p className="text-gray-400 mt-2">
              이 경우 P가 작아서(0.0957) F ≈ 0.986이므로 면적 증가가 약 1.4%에 불과합니다.
              P가 커질수록 F는 감소하고, 면적 증가분이 더 커집니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-1">
        <Math tex="F = 0.986, \quad A_{\text{shell\&tube}} = 7.28 \;\text{m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          셸앤튜브(1-2 pass)는 향류 대비 약 1.4% 면적 증가가 필요합니다 (F ≈ 0.986).
          P가 작을 때 F는 1에 가까워 향류와 거의 동일한 성능을 보입니다.
        </p>
      </div>
    ),
  },
];

const tips = [
  { title: "1. LMTD vs ε-NTU 선택", description: "입출구 온도를 모두 알면 LMTD, 출구온도를 모르면 ε-NTU를 사용하세요." },
  { title: "2. C_min 확인", description: "ε-NTU에서 C_min = (ṁcp)_min을 정확히 파악하세요." },
  { title: "3. LMTD 부호 주의", description: "ΔT₁, ΔT₂의 정의가 병류와 향류에서 다릅니다." },
  { title: "4. 상변화 유체", description: "응축/증발 시 C→∞이므로 C_r=0, ε=1-exp(-NTU)입니다." },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={13} problems={problems} tips={tips} />;
}

"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  {
    id: 1,
    title: "Interior Node Equation Derivation",
    topic: "Interior Node",
    topicColor: "red",
    problem: (
      <p>
        2차원 정상상태 열전도 문제에서 열생성이 없고 <Math tex="\Delta x = \Delta y" />인 균일 격자를 사용합니다.
        Taylor 급수 전개를 이용하여 내부 노드 (m, n)의 유한차분 방정식이 4개 이웃 노드의 평균임을 유도하시오.
        <Math tex="\Delta x = \Delta y = 0.01" /> m이고, 주변 노드 온도가{" "}
        <Math tex="T_{\text{top}} = 100" />°C, <Math tex="T_{\text{bottom}} = 50" />°C,{" "}
        <Math tex="T_{\text{left}} = 75" />°C, <Math tex="T_{\text{right}} = 85" />°C일 때,{" "}
        <Math tex="T_{m,n}" />을 구하시오.
      </p>
    ),
    given: [
      "2D 정상상태, 열생성 없음",
      "Δx = Δy = 0.01 m",
      "T_top = 100°C, T_bottom = 50°C",
      "T_left = 75°C, T_right = 85°C",
    ],
    find: "T(m,n) [°C]",
    steps: [
      {
        label: "Step 1: 지배 방정식 확인",
        content: (
          <div>
            <p className="text-gray-400 mb-2">열생성이 없는 2D 정상상태 열전도의 지배 방정식은 Laplace 방정식입니다:</p>
            <div className="text-center py-2">
              <Math tex="\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = 0" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Taylor 급수를 이용한 유한차분 근사",
        content: (
          <div>
            <p className="text-gray-400 mb-2">2차 중앙 차분을 적용합니다:</p>
            <div className="text-center py-2">
              <Math tex="\frac{\partial^2 T}{\partial x^2} \approx \frac{T_{m+1,n} - 2T_{m,n} + T_{m-1,n}}{(\Delta x)^2}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\frac{\partial^2 T}{\partial y^2} \approx \frac{T_{m,n+1} - 2T_{m,n} + T_{m,n-1}}{(\Delta y)^2}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: Δx = Δy 조건 적용 후 정리",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="\Delta x = \Delta y" />이므로 대입하면:
            </p>
            <div className="text-center py-2">
              <Math tex="T_{m+1,n} + T_{m-1,n} + T_{m,n+1} + T_{m,n-1} - 4T_{m,n} = 0" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\boxed{T_{m,n} = \frac{1}{4}\left(T_{m+1,n} + T_{m-1,n} + T_{m,n+1} + T_{m,n-1}\right)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 수치 대입",
        content: (
          <div>
            <p className="text-gray-400 mb-2">주어진 이웃 노드 온도를 대입합니다:</p>
            <div className="text-center py-2">
              <Math tex="T_{m,n} = \frac{1}{4}(100 + 50 + 75 + 85) = \frac{310}{4}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T_{m,n} = 77.5\;°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          내부 노드의 온도는 4개 이웃 노드 온도의 산술 평균입니다.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Node with Heat Generation",
    topic: "Heat Generation Node",
    topicColor: "green",
    problem: (
      <p>
        2D 정상상태 열전도에서 균일한 체적 열생성 <Math tex="\dot{q} = 10^6" /> W/m³이 있습니다.
        열전도율 <Math tex="k = 20" /> W/(m·K), <Math tex="\Delta x = \Delta y = 0.01" /> m입니다.
        4개의 이웃 노드 온도가 각각 200, 180, 190, 210°C일 때, 내부 노드 온도 <Math tex="T_{m,n}" />을 구하시오.
      </p>
    ),
    given: [
      "q̇ = 10⁶ W/m³",
      "k = 20 W/(m·K)",
      "Δx = Δy = 0.01 m",
      "이웃 노드: 200, 180, 190, 210°C",
    ],
    find: "T(m,n) [°C]",
    steps: [
      {
        label: "Step 1: 열생성이 있는 지배 방정식 (Poisson)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">열생성이 있으면 Poisson 방정식입니다:</p>
            <div className="text-center py-2">
              <Math tex="\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\dot{q}}{k} = 0" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 유한차분 근사 적용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="\Delta x = \Delta y" /> 조건에서 유한차분 방정식:
            </p>
            <div className="text-center py-2">
              <Math tex="T_{m+1,n} + T_{m-1,n} + T_{m,n+1} + T_{m,n-1} - 4T_{m,n} + \frac{\dot{q}(\Delta x)^2}{k} = 0" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: T(m,n)에 대해 정리",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_{m,n} = \frac{1}{4}\left(\sum T_{\text{neighbors}} + \frac{\dot{q}(\Delta x)^2}{k}\right)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 열생성 항 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{\dot{q}(\Delta x)^2}{k} = \frac{10^6 \times (0.01)^2}{20} = \frac{10^6 \times 10^{-4}}{20} = \frac{100}{20} = 5\;°\text{C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 최종 대입 및 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\sum T_{\text{neighbors}} = 200 + 180 + 190 + 210 = 780\;°\text{C}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_{m,n} = \frac{1}{4}(780 + 5) = \frac{785}{4}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T_{m,n} = 196.25\;°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          열생성으로 인해 노드 온도가 단순 평균(195°C)보다 1.25°C 높아집니다.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Convection Boundary Node",
    topic: "Convection Boundary",
    topicColor: "blue",
    problem: (
      <p>
        2D 정상상태 열전도에서 평판의 상단 표면이 대류 조건에 노출되어 있습니다.
        <Math tex="h = 50" /> W/(m²·K), <Math tex="k = 10" /> W/(m·K),{" "}
        <Math tex="\Delta x = \Delta y = 0.02" /> m, <Math tex="T_\infty = 25" />°C입니다.
        표면 노드 (m, n)의 3개 내부 이웃 노드 온도가 80, 90, 70°C일 때,
        에너지 균형법으로 표면 노드 온도 <Math tex="T_s" />를 구하시오.
      </p>
    ),
    given: [
      "h = 50 W/(m²·K), k = 10 W/(m·K)",
      "Δx = Δy = 0.02 m",
      "T∞ = 25°C",
      "내부 이웃 노드: T₁ = 80°C (아래), T₂ = 90°C (왼쪽), T₃ = 70°C (오른쪽)",
    ],
    find: "표면 노드 온도 Ts [°C]",
    steps: [
      {
        label: "Step 1: 에너지 균형 설정",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              표면 노드에서 에너지 균형을 세웁니다. 상단 면은 대류, 나머지 면은 전도입니다.
              노드의 제어 체적은 반쪽(Δy/2) 두께를 가집니다:
            </p>
            <div className="text-center py-2">
              <Math tex="h(\Delta x)(T_\infty - T_s) + k\frac{\Delta x}{2}\frac{T_2 - T_s}{\Delta x} + k\frac{\Delta x}{2}\frac{T_3 - T_s}{\Delta x} + k(\Delta x)\frac{T_1 - T_s}{\Delta y} = 0" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Δx = Δy 조건으로 단순화",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="\Delta x = \Delta y" />이고, Biot 수 <Math tex="\text{Bi} = h\Delta x / k" />를 정의합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\text{Bi} = \frac{h \Delta x}{k} = \frac{50 \times 0.02}{10} = 0.1" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 표면 노드 방정식 유도",
        content: (
          <div>
            <p className="text-gray-400 mb-2">에너지 균형을 정리하면:</p>
            <div className="text-center py-2">
              <Math tex="T_s = \frac{\frac{1}{2}T_2 + \frac{1}{2}T_3 + T_1 + \text{Bi}\cdot T_\infty}{2 + \text{Bi}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 수치 대입",
        content: (
          <div>
            <p className="text-gray-400 mb-2">분자 계산:</p>
            <div className="text-center py-2">
              <Math tex="\text{분자} = \frac{1}{2}(90) + \frac{1}{2}(70) + 80 + 0.1 \times 25 = 45 + 35 + 80 + 2.5 = 162.5" display />
            </div>
            <p className="text-gray-400 mb-2">분모 계산:</p>
            <div className="text-center py-2">
              <Math tex="\text{분모} = 2 + 0.1 = 2.1" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 최종 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_s = \frac{162.5}{2.1} = 77.38\;°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T_s \approx 77.38\;°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          대류 효과(Bi = 0.1)로 인해 표면 온도가 내부 평균보다 약간 낮아집니다.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Insulated Boundary Node",
    topic: "Insulated Boundary",
    topicColor: "amber",
    problem: (
      <p>
        2D 정상상태 열전도 격자에서 왼쪽 경계면이 단열(adiabatic) 조건입니다.
        단열면에서의 경계조건 <Math tex="\partial T / \partial n = 0" />이 의미하는 바를 설명하고,
        경계 노드의 유한차분 방정식을 유도하시오.
        인접 노드 온도가 <Math tex="T_1 = 150" />°C (오른쪽), <Math tex="T_2 = 120" />°C (위),{" "}
        <Math tex="T_3 = 140" />°C (아래)일 때, 단열 경계 노드 온도 <Math tex="T_s" />를 구하시오.
      </p>
    ),
    given: [
      "왼쪽 경계: 단열 (∂T/∂x = 0)",
      "Δx = Δy (균일 격자)",
      "T₁ = 150°C (오른쪽)",
      "T₂ = 120°C (위), T₃ = 140°C (아래)",
    ],
    find: "단열 경계 노드 온도 Ts [°C]",
    steps: [
      {
        label: "Step 1: 단열 경계조건의 의미",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              단열 경계에서는 열유속이 0입니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\frac{\partial T}{\partial x}\bigg|_{\text{boundary}} = 0" display />
            </div>
            <p className="text-gray-400 mt-2">
              이는 경계면을 기준으로 온도 분포가 대칭임을 의미합니다 (mirror image).
            </p>
          </div>
        ),
      },
      {
        label: "Step 2: 가상 노드 (Ghost Node) 도입",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              왼쪽에 가상 노드 <Math tex="T_{\text{ghost}}" />를 두면, 중앙 차분으로:
            </p>
            <div className="text-center py-2">
              <Math tex="\frac{\partial T}{\partial x} \approx \frac{T_1 - T_{\text{ghost}}}{2\Delta x} = 0 \implies T_{\text{ghost}} = T_1" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 경계 노드 방정식 유도",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              내부 노드 방정식에 <Math tex="T_{\text{ghost}} = T_1" />을 대입하면:
            </p>
            <div className="text-center py-2">
              <Math tex="T_s = \frac{1}{4}(T_1 + T_{\text{ghost}} + T_2 + T_3) = \frac{1}{4}(T_1 + T_1 + T_2 + T_3) = \frac{1}{4}(2T_1 + T_2 + T_3)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 수치 대입 및 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_s = \frac{1}{4}(2 \times 150 + 120 + 140) = \frac{1}{4}(300 + 120 + 140) = \frac{560}{4}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T_s = 140\;°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          단열 경계에서는 오른쪽 이웃 노드가 가상 노드로 미러링되어 2배 가중치를 갖습니다.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "External Corner Node with Convection",
    topic: "Corner Node",
    topicColor: "cyan",
    problem: (
      <p>
        2D 정상상태 열전도에서 외부 코너 노드가 두 면 모두 대류에 노출되어 있습니다.
        <Math tex="h = 100" /> W/(m²·K), <Math tex="k = 25" /> W/(m·K),{" "}
        <Math tex="\Delta x = \Delta y = 0.01" /> m, <Math tex="T_\infty = 30" />°C입니다.
        두 내부 이웃 노드 온도가 200°C와 180°C일 때,
        에너지 균형법으로 코너 노드 온도 <Math tex="T_c" />를 구하시오.
      </p>
    ),
    given: [
      "h = 100 W/(m²·K), k = 25 W/(m·K)",
      "Δx = Δy = 0.01 m",
      "T∞ = 30°C",
      "내부 이웃: T₁ = 200°C, T₂ = 180°C",
    ],
    find: "코너 노드 온도 Tc [°C]",
    steps: [
      {
        label: "Step 1: 코너 노드 제어 체적 설정",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              외부 코너 노드의 제어 체적은 <Math tex="\Delta x/2 \times \Delta y/2" />입니다.
              두 면은 대류에 노출되고, 나머지 두 면은 내부 노드와 전도로 연결됩니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 2: 에너지 균형 수립",
        content: (
          <div>
            <p className="text-gray-400 mb-2">코너 노드에서의 에너지 균형:</p>
            <div className="text-center py-2">
              <Math tex="h\frac{\Delta y}{2}(T_\infty - T_c) + h\frac{\Delta x}{2}(T_\infty - T_c) + k\frac{\Delta y}{2}\frac{T_1 - T_c}{\Delta x} + k\frac{\Delta x}{2}\frac{T_2 - T_c}{\Delta y} = 0" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: Δx = Δy 조건 적용 후 정리",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="\text{Bi} = h\Delta x / k = 100 \times 0.01 / 25 = 0.04" />이므로:
            </p>
            <div className="text-center py-2">
              <Math tex="T_c = \frac{\frac{1}{2}(T_1 + T_2) + \text{Bi}\cdot T_\infty}{1 + \text{Bi}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 수치 대입",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{분자} = \frac{1}{2}(200 + 180) + 0.04 \times 30 = 190 + 1.2 = 191.2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{분모} = 1 + 0.04 = 1.04" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 최종 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_c = \frac{191.2}{1.04} = 183.85\;°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T_c \approx 183.85\;°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          Bi = 0.04로 매우 작아서 대류 효과가 적고, 코너 온도는 두 이웃의 평균(190°C)에 가깝습니다.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "3x3 Grid Direct Solution",
    topic: "3x3 Grid",
    topicColor: "purple",
    problem: (
      <p>
        정사각형 평판의 4변에 다음과 같은 온도 경계조건이 주어져 있습니다:
        상단 200°C, 하단 100°C, 좌측 150°C, 우측 50°C.
        3x3 내부 격자를 사용하여 4개의 내부 노드 온도를 직접법(연립방정식)으로 구하시오.
        (격자는 2x2 내부 노드를 가지며, 노드 번호: T₁(좌하), T₂(우하), T₃(좌상), T₄(우상))
      </p>
    ),
    given: [
      "상단 경계: 200°C",
      "하단 경계: 100°C",
      "좌측 경계: 150°C",
      "우측 경계: 50°C",
      "균일 격자, Δx = Δy",
    ],
    find: "4개 내부 노드 온도 T₁, T₂, T₃, T₄ [°C]",
    steps: [
      {
        label: "Step 1: 격자 배치 및 노드 번호 부여",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              2x2 내부 격자를 구성합니다. 각 노드의 이웃 관계:
            </p>
            <p className="text-gray-300 mb-1">
              T₁ (좌하): 왼쪽=150, 아래=100, 오른쪽=T₂, 위=T₃
            </p>
            <p className="text-gray-300 mb-1">
              T₂ (우하): 왼쪽=T₁, 아래=100, 오른쪽=50, 위=T₄
            </p>
            <p className="text-gray-300 mb-1">
              T₃ (좌상): 왼쪽=150, 아래=T₁, 오른쪽=T₄, 위=200
            </p>
            <p className="text-gray-300">
              T₄ (우상): 왼쪽=T₃, 아래=T₂, 오른쪽=50, 위=200
            </p>
          </div>
        ),
      },
      {
        label: "Step 2: 4개 노드 방정식 수립",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              각 노드에 <Math tex="T_{m,n} = \tfrac{1}{4}\sum T_{\text{neighbors}}" /> 적용:
            </p>
            <div className="space-y-2">
              <div className="text-center py-1">
                <Math tex="4T_1 = 150 + 100 + T_2 + T_3 \quad \cdots (1)" display />
              </div>
              <div className="text-center py-1">
                <Math tex="4T_2 = T_1 + 100 + 50 + T_4 \quad \cdots (2)" display />
              </div>
              <div className="text-center py-1">
                <Math tex="4T_3 = 150 + T_1 + T_4 + 200 \quad \cdots (3)" display />
              </div>
              <div className="text-center py-1">
                <Math tex="4T_4 = T_3 + T_2 + 50 + 200 \quad \cdots (4)" display />
              </div>
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 행렬 형태로 정리",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\begin{bmatrix} 4 & -1 & -1 & 0 \\ -1 & 4 & 0 & -1 \\ -1 & 0 & 4 & -1 \\ 0 & -1 & -1 & 4 \end{bmatrix} \begin{bmatrix} T_1 \\ T_2 \\ T_3 \\ T_4 \end{bmatrix} = \begin{bmatrix} 250 \\ 150 \\ 350 \\ 250 \end{bmatrix}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 대칭성 활용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              대칭 관계로부터: 상하 대칭은 없지만, 대각 관계를 이용할 수 있습니다.
              식 (1)+(4)와 식 (2)+(3)에서:
            </p>
            <div className="text-center py-2">
              <Math tex="T_1 + T_4 = T_2 + T_3 = 125\;°\text{C} \quad \text{(합이 동일)}" display />
            </div>
            <p className="text-gray-400 mt-2">
              (1)에서: <Math tex="4T_1 - T_2 - T_3 = 250" />, (4)에서: <Math tex="4T_4 - T_2 - T_3 = 250" />
            </p>
            <p className="text-gray-400">
              따라서 <Math tex="T_1 = T_4" />. 마찬가지로 (2)와 (3)에서 <Math tex="T_2 + T_3" />를 구합니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 5: 연립방정식 풀기",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              (1)+(2): <Math tex="3T_1 + 3T_2 - T_3 - T_4 = 400" />, (3)+(4): <Math tex="-T_1 - T_2 + 3T_3 + 3T_4 = 600" />
            </p>
            <p className="text-gray-400 mb-2">
              (1)-(2): <Math tex="5T_1 - 5T_2 - T_3 + T_4 = 100" />, (3)-(4): <Math tex="-T_1 + T_2 + 5T_3 - 5T_4 = 100" />
            </p>
            <p className="text-gray-400 mb-2">Gauss 소거법으로 풀면:</p>
            <div className="text-center py-2">
              <Math tex="T_1 = 143.75\;°\text{C}, \quad T_2 = 93.75\;°\text{C}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T_3 = 156.25\;°\text{C}, \quad T_4 = 106.25\;°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-1">
        <Math tex="T_1 = 143.75\;°\text{C}, \quad T_2 = 93.75\;°\text{C}" display />
        <Math tex="T_3 = 156.25\;°\text{C}, \quad T_4 = 106.25\;°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          검증: 4개 노드 평균 = (143.75 + 93.75 + 156.25 + 106.25)/4 = 125°C = 경계 평균 (200+100+150+50)/4
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Gauss-Seidel Iteration",
    topic: "Gauss-Seidel",
    topicColor: "emerald",
    problem: (
      <p>
        문제 6과 동일한 조건(상: 200°C, 하: 100°C, 좌: 150°C, 우: 50°C, 2x2 내부 노드)에서
        Gauss-Seidel 반복법을 적용합니다. 초기 추정값을 모든 노드에서 <Math tex="T = 100" />°C로 설정하고,
        2회 반복(iteration)을 수행하여 결과를 직접 해와 비교하시오.
      </p>
    ),
    given: [
      "경계조건: 상 200, 하 100, 좌 150, 우 50°C",
      "초기값: T₁ = T₂ = T₃ = T₄ = 100°C",
      "노드 순서: T₁(좌하) → T₂(우하) → T₃(좌상) → T₄(우상)",
    ],
    find: "2회 반복 후 노드 온도 및 수렴 분석",
    steps: [
      {
        label: "Step 1: Gauss-Seidel 반복 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              Gauss-Seidel 방법에서는 <strong className="text-white">최신 값을 즉시 사용</strong>합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="T_i^{(k+1)} = \frac{1}{4}\sum T_{\text{neighbors}}^{\text{latest}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 1차 반복 (Iteration 1)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              초기값: <Math tex="T_1^{(0)} = T_2^{(0)} = T_3^{(0)} = T_4^{(0)} = 100" />
            </p>
            <div className="space-y-2">
              <div className="text-center py-1">
                <Math tex="T_1^{(1)} = \frac{1}{4}(150 + 100 + T_2^{(0)} + T_3^{(0)}) = \frac{1}{4}(150 + 100 + 100 + 100) = 112.50" display />
              </div>
              <div className="text-center py-1">
                <Math tex="T_2^{(1)} = \frac{1}{4}(T_1^{(1)} + 100 + 50 + T_4^{(0)}) = \frac{1}{4}(112.50 + 100 + 50 + 100) = 90.63" display />
              </div>
              <div className="text-center py-1">
                <Math tex="T_3^{(1)} = \frac{1}{4}(150 + T_1^{(1)} + T_4^{(0)} + 200) = \frac{1}{4}(150 + 112.50 + 100 + 200) = 140.63" display />
              </div>
              <div className="text-center py-1">
                <Math tex="T_4^{(1)} = \frac{1}{4}(T_3^{(1)} + T_2^{(1)} + 50 + 200) = \frac{1}{4}(140.63 + 90.63 + 50 + 200) = 120.31" display />
              </div>
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 2차 반복 (Iteration 2)",
        content: (
          <div>
            <div className="space-y-2">
              <div className="text-center py-1">
                <Math tex="T_1^{(2)} = \frac{1}{4}(150 + 100 + 90.63 + 140.63) = \frac{481.26}{4} = 120.31" display />
              </div>
              <div className="text-center py-1">
                <Math tex="T_2^{(2)} = \frac{1}{4}(120.31 + 100 + 50 + 120.31) = \frac{390.62}{4} = 97.66" display />
              </div>
              <div className="text-center py-1">
                <Math tex="T_3^{(2)} = \frac{1}{4}(150 + 120.31 + 120.31 + 200) = \frac{590.62}{4} = 147.66" display />
              </div>
              <div className="text-center py-1">
                <Math tex="T_4^{(2)} = \frac{1}{4}(147.66 + 97.66 + 50 + 200) = \frac{495.32}{4} = 123.83" display />
              </div>
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 수렴 비교",
        content: (
          <div>
            <p className="text-gray-400 mb-2">2차 반복 결과 vs 정확해:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 px-3 text-left text-gray-400">노드</th>
                    <th className="py-2 px-3 text-center text-gray-400">Iter 1</th>
                    <th className="py-2 px-3 text-center text-gray-400">Iter 2</th>
                    <th className="py-2 px-3 text-center text-gray-400">정확해</th>
                    <th className="py-2 px-3 text-center text-gray-400">오차</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-3">T₁</td>
                    <td className="py-2 px-3 text-center">112.50</td>
                    <td className="py-2 px-3 text-center">120.31</td>
                    <td className="py-2 px-3 text-center">143.75</td>
                    <td className="py-2 px-3 text-center">23.44</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-3">T₂</td>
                    <td className="py-2 px-3 text-center">90.63</td>
                    <td className="py-2 px-3 text-center">97.66</td>
                    <td className="py-2 px-3 text-center">93.75</td>
                    <td className="py-2 px-3 text-center">3.91</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-3">T₃</td>
                    <td className="py-2 px-3 text-center">140.63</td>
                    <td className="py-2 px-3 text-center">147.66</td>
                    <td className="py-2 px-3 text-center">156.25</td>
                    <td className="py-2 px-3 text-center">8.59</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">T₄</td>
                    <td className="py-2 px-3 text-center">120.31</td>
                    <td className="py-2 px-3 text-center">123.83</td>
                    <td className="py-2 px-3 text-center">106.25</td>
                    <td className="py-2 px-3 text-center">17.58</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-1">
        <Math tex="\text{Iter 2: } T_1 = 120.31, \; T_2 = 97.66, \; T_3 = 147.66, \; T_4 = 123.83\;°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          2회 반복만으로는 아직 정확해에 수렴하지 못했습니다. 추가 반복이 필요합니다.
          Gauss-Seidel은 최신 값을 즉시 사용하므로 Jacobi보다 빠르게 수렴합니다.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "Surface Heat Flux from FDM",
    topic: "Heat Flux from FDM",
    topicColor: "orange",
    problem: (
      <p>
        유한차분법(FDM)으로 구한 노드 온도를 이용하여 표면 열유속을 계산합니다.
        표면 온도 <Math tex="T_s = 100" />°C, 표면에서 한 격자 안쪽의 노드 온도{" "}
        <Math tex="T_1 = 85" />°C, 두 격자 안쪽의 노드 온도 <Math tex="T_2 = 72" />°C입니다.
        <Math tex="\Delta x = 0.005" /> m, <Math tex="k = 50" /> W/(m·K)일 때,
        1차 및 2차 정확도로 표면 열유속을 구하시오.
      </p>
    ),
    given: [
      "Ts = 100°C (표면, i = 0)",
      "T₁ = 85°C (i = 1)",
      "T₂ = 72°C (i = 2)",
      "Δx = 0.005 m",
      "k = 50 W/(m·K)",
    ],
    find: "q'' (1차 및 2차 정확도) [W/m²]",
    steps: [
      {
        label: "Step 1: 1차 정확도 (Forward Difference)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">표면에서 1차 전진 차분:</p>
            <div className="text-center py-2">
              <Math tex="q'' = -k\frac{dT}{dx}\bigg|_s \approx -k\frac{T_1 - T_s}{\Delta x}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 1차 정확도 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="q'' = -50 \times \frac{85 - 100}{0.005} = -50 \times \frac{-15}{0.005} = -50 \times (-3000)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q''_{\text{1st}} = 150{,}000 \text{ W/m}^2 = 150 \text{ kW/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 2차 정확도 (3점 전진 차분)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Taylor 급수에서 2차 정확도의 전진 차분:</p>
            <div className="text-center py-2">
              <Math tex="\frac{dT}{dx}\bigg|_s \approx \frac{-3T_s + 4T_1 - T_2}{2\Delta x}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 2차 정확도 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{dT}{dx}\bigg|_s = \frac{-3(100) + 4(85) - 72}{2(0.005)} = \frac{-300 + 340 - 72}{0.01} = \frac{-32}{0.01} = -3200 \text{ K/m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="q''_{\text{2nd}} = -50 \times (-3200) = 160{,}000 \text{ W/m}^2 = 160 \text{ kW/m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 비교 분석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">두 방법의 차이:</p>
            <div className="text-center py-2">
              <Math tex="\text{차이} = \frac{|160 - 150|}{160} \times 100\% = 6.25\%" display />
            </div>
            <p className="text-gray-400 mt-2">
              2차 정확도 방법이 더 신뢰할 수 있으며, 격자를 더 세밀하게 하면 두 값이 수렴합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-1">
        <Math tex="q''_{\text{1st order}} = 150 \text{ kW/m}^2" display />
        <Math tex="q''_{\text{2nd order}} = 160 \text{ kW/m}^2" display />
        <p className="text-sm text-gray-400 mt-2">
          2차 정확도 3점 공식이 더 정확하며, 표면 열유속 계산에 권장됩니다.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Mixed Boundary Conditions",
    topic: "Non-uniform Generation",
    topicColor: "pink",
    problem: (
      <p>
        직사각형 도메인(4x3 노드)에서 다양한 경계조건이 적용됩니다:
        상단 <Math tex="T = 300" />°C (고정 온도), 하단 단열, 좌측 <Math tex="T = 100" />°C (고정 온도),
        우측 대류 (<Math tex="h = 50" /> W/(m²·K), <Math tex="T_\infty = 25" />°C).
        <Math tex="k = 15" /> W/(m·K), <Math tex="\Delta x = \Delta y = 0.025" /> m일 때,
        각 경계 유형별로 노드 방정식을 수립하시오.
      </p>
    ),
    given: [
      "상단: T = 300°C (Type 1)",
      "하단: 단열 (Type 2, q'' = 0)",
      "좌측: T = 100°C (Type 1)",
      "우측: 대류, h = 50 W/(m²·K), T∞ = 25°C (Type 3)",
      "k = 15 W/(m·K), Δx = Δy = 0.025 m",
    ],
    find: "경계 유형별 노드 방정식",
    steps: [
      {
        label: "Step 1: 내부 노드 방정식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">내부 노드 (경계에 접하지 않는 노드):</p>
            <div className="text-center py-2">
              <Math tex="T_{i,j} = \frac{1}{4}(T_{i+1,j} + T_{i-1,j} + T_{i,j+1} + T_{i,j-1})" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 하단 단열 경계 노드",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              하단 단열 (<Math tex="\partial T / \partial y = 0" />) - 가상 노드 대칭:
            </p>
            <div className="text-center py-2">
              <Math tex="T_{i,1} = \frac{1}{4}(T_{i+1,1} + T_{i-1,1} + T_{i,2} + T_{i,2})" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{1}{4}(T_{i+1,1} + T_{i-1,1} + 2T_{i,2})" display />
            </div>
            <p className="text-gray-400 mt-2">아래 노드가 위 노드와 동일 (미러 대칭)</p>
          </div>
        ),
      },
      {
        label: "Step 3: 우측 대류 경계 노드",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              우측 대류 경계에서 Biot 수 계산:
            </p>
            <div className="text-center py-2">
              <Math tex="\text{Bi} = \frac{h\Delta x}{k} = \frac{50 \times 0.025}{15} = 0.0833" display />
            </div>
            <p className="text-gray-400 mb-2">우측 표면 노드 방정식 (에너지 균형):</p>
            <div className="text-center py-2">
              <Math tex="T_{N,j} = \frac{\frac{1}{2}T_{N,j+1} + \frac{1}{2}T_{N,j-1} + T_{N-1,j} + \text{Bi}\cdot T_\infty}{2 + \text{Bi}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 우하 코너 노드 (단열 + 대류)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              하단 단열 + 우측 대류가 만나는 코너:
            </p>
            <div className="text-center py-2">
              <Math tex="h\frac{\Delta x}{2}(T_\infty - T_c) + k\frac{\Delta y}{2}\frac{T_{N-1,1} - T_c}{\Delta x} + k\frac{\Delta x}{2}\frac{T_{N,2} - T_c}{\Delta y} = 0" display />
            </div>
            <p className="text-gray-400 mb-2">정리하면:</p>
            <div className="text-center py-2">
              <Math tex="T_c = \frac{T_{N-1,1} + T_{N,2} + \text{Bi}\cdot T_\infty}{2 + \text{Bi}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 수치 예시 (우측 대류 경계 노드)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              예를 들어, 우측 경계의 중간 노드에서{" "}
              <Math tex="T_{N,j+1} = 280" />°C, <Math tex="T_{N,j-1} = 180" />°C, <Math tex="T_{N-1,j} = 250" />°C이면:
            </p>
            <div className="text-center py-2">
              <Math tex="T_{N,j} = \frac{\frac{1}{2}(280) + \frac{1}{2}(180) + 250 + 0.0833 \times 25}{2 + 0.0833}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= \frac{140 + 90 + 250 + 2.083}{2.0833} = \frac{482.08}{2.0833} = 231.4\;°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-1">
        <p className="text-gray-300 font-medium mb-2">경계 유형별 노드 방정식 정리:</p>
        <Math tex="\text{내부: } T_{i,j} = \tfrac{1}{4}\sum T_{\text{neighbors}}" display />
        <Math tex="\text{단열: 가상 노드 대칭 } (T_{\text{ghost}} = T_{\text{mirror}})" display />
        <Math tex="\text{대류: 에너지 균형에 Bi} = h\Delta x/k \text{ 포함}" display />
        <p className="text-sm text-gray-400 mt-2">
          서로 다른 경계조건이 만나는 코너 노드는 양쪽 조건을 모두 반영해야 합니다.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "Grid Independence Study",
    topic: "Convergence Analysis",
    topicColor: "teal",
    problem: (
      <p>
        1D 정상상태 열전도 문제: <Math tex="T(0) = 0" />°C, <Math tex="T(1) = 100" />°C,
        균일 열생성 <Math tex="\dot{q} = 1000" /> W/m³, <Math tex="k = 10" /> W/(m·K), 길이{" "}
        <Math tex="L = 1" /> m.
        격자 간격 <Math tex="\Delta x" /> = 0.1 m (11 노드), 0.05 m (21 노드), 0.025 m (41 노드)로
        FDM 해를 구하고, 해석해와 비교하여 격자 독립성을 분석하시오.
      </p>
    ),
    given: [
      "T(0) = 0°C, T(L) = 100°C",
      "q̇ = 1000 W/m³, k = 10 W/(m·K)",
      "L = 1 m",
      "Δx = 0.1, 0.05, 0.025 m",
    ],
    find: "FDM 해와 해석해 비교 (x = 0.5 m에서)",
    steps: [
      {
        label: "Step 1: 해석해 유도",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              1D 정상상태, 균일 열생성의 지배 방정식:
            </p>
            <div className="text-center py-2">
              <Math tex="\frac{d^2T}{dx^2} + \frac{\dot{q}}{k} = 0" display />
            </div>
            <p className="text-gray-400 mb-2">경계조건 T(0) = 0, T(1) = 100을 적용하면:</p>
            <div className="text-center py-2">
              <Math tex="T(x) = -\frac{\dot{q}}{2k}x^2 + \left(100 + \frac{\dot{q}L}{2k}\right)x = -50x^2 + 150x" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 해석해 x = 0.5 m에서 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_{\text{exact}}(0.5) = -50(0.5)^2 + 150(0.5) = -12.5 + 75 = 62.5\;°\text{C}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: FDM 노드 방정식 (열생성 포함)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">1D 내부 노드에서:</p>
            <div className="text-center py-2">
              <Math tex="T_{i-1} - 2T_i + T_{i+1} + \frac{\dot{q}(\Delta x)^2}{k} = 0" display />
            </div>
            <p className="text-gray-400 mb-2">열생성 항:</p>
            <div className="space-y-1">
              <p className="text-gray-300 text-center">
                <Math tex="\Delta x = 0.1\text{ m}: \;\frac{\dot{q}(\Delta x)^2}{k} = \frac{1000 \times 0.01}{10} = 1.0" />
              </p>
              <p className="text-gray-300 text-center">
                <Math tex="\Delta x = 0.05\text{ m}: \;\frac{\dot{q}(\Delta x)^2}{k} = \frac{1000 \times 0.0025}{10} = 0.25" />
              </p>
              <p className="text-gray-300 text-center">
                <Math tex="\Delta x = 0.025\text{ m}: \;\frac{\dot{q}(\Delta x)^2}{k} = \frac{1000 \times 0.000625}{10} = 0.0625" />
              </p>
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: FDM 결과 (x = 0.5에서)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              이 문제에서 FDM은 2차 다항식(해석해)을 정확히 복원합니다.
              중앙 차분의 절단 오차가 <Math tex="O(\Delta x^2)" />이고, 해석해가 2차 다항식이므로
              3차 이상의 미분이 모두 0입니다:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 px-3 text-left text-gray-400">Δx (m)</th>
                    <th className="py-2 px-3 text-center text-gray-400">노드 수</th>
                    <th className="py-2 px-3 text-center text-gray-400">T_FDM(0.5)</th>
                    <th className="py-2 px-3 text-center text-gray-400">T_exact(0.5)</th>
                    <th className="py-2 px-3 text-center text-gray-400">오차</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-3">0.1</td>
                    <td className="py-2 px-3 text-center">11</td>
                    <td className="py-2 px-3 text-center">62.50</td>
                    <td className="py-2 px-3 text-center">62.50</td>
                    <td className="py-2 px-3 text-center">0.00</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-3">0.05</td>
                    <td className="py-2 px-3 text-center">21</td>
                    <td className="py-2 px-3 text-center">62.50</td>
                    <td className="py-2 px-3 text-center">62.50</td>
                    <td className="py-2 px-3 text-center">0.00</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">0.025</td>
                    <td className="py-2 px-3 text-center">41</td>
                    <td className="py-2 px-3 text-center">62.50</td>
                    <td className="py-2 px-3 text-center">62.50</td>
                    <td className="py-2 px-3 text-center">0.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 격자 독립성 분석 및 일반적 경우",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              이 특수한 경우(2차 다항식 해)에서는 모든 격자에서 FDM이 정확합니다.
              일반적인 비선형 문제에서는 격자를 세밀화하면 오차가 감소합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\text{중앙 차분 절단 오차} = O(\Delta x^2)" display />
            </div>
            <p className="text-gray-400 mb-2">즉, <Math tex="\Delta x" />를 반으로 줄이면 오차는 약 1/4로 줄어듭니다:</p>
            <div className="text-center py-2">
              <Math tex="\frac{\varepsilon(\Delta x/2)}{\varepsilon(\Delta x)} \approx \frac{1}{4}" display />
            </div>
            <p className="text-gray-400 mt-2">
              격자 독립성 검증: 격자를 세밀화해도 해가 더 이상 변하지 않으면 격자 독립적인 해에 도달한 것입니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-1">
        <Math tex="T_{\text{exact}}(0.5) = 62.5\;°\text{C}" display />
        <p className="text-gray-300 font-medium mt-2">
          2차 다항식 해인 경우 FDM(중앙 차분)은 모든 격자에서 정확합니다.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          일반적으로 중앙 차분의 절단 오차는 <Math tex="O(\Delta x^2)" />이며,
          격자를 2배 세밀화하면 오차가 약 1/4로 감소합니다.
        </p>
      </div>
    ),
  },
];

const tips = [
  { title: "1. 노드 방정식 유도", description: "에너지 균형법으로 각 노드의 유한차분 방정식을 유도하세요." },
  { title: "2. 경계 노드 주의", description: "대류, 단열, 온도 경계조건에 따라 노드 방정식이 달라집니다." },
  { title: "3. 격자 대칭 활용", description: "대칭성이 있으면 계산 영역을 줄여 효율적으로 풀 수 있습니다." },
  { title: "4. 수렴 확인", description: "Gauss-Seidel 반복 시 수렴 기준(예: |T_new - T_old| < ε)을 설정하세요." },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={5} problems={problems} tips={tips} />;
}

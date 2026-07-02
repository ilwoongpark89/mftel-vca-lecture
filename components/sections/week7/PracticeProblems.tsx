"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  {
    id: 1,
    title: "Plane Wall 1-Term Approximation (Center)",
    topic: "Plane Wall 1-term",
    topicColor: "red",
    problem: (
      <p>
        두께 <Math tex="2L = 0.1" /> m인 강판이 초기 온도 <Math tex="T_i = 300" />°C에서
        균일하게 가열된 상태입니다. 이 강판을 <Math tex="T_\infty = 50" />°C인 유체에 담갔을 때,
        대류 열전달 계수 <Math tex="h = 200" /> W/(m²·K)입니다.
        강판의 물성치: <Math tex="k = 50" /> W/(m·K), <Math tex="\alpha = 1.5 \times 10^{-5}" /> m²/s.
        <Math tex="t = 200" /> s 후 평판 중심부의 온도를 1항 근사법으로 구하시오.
      </p>
    ),
    given: [
      "2L = 0.1 m (L = 0.05 m)",
      "k = 50 W/(m·K)",
      "α = 1.5 × 10⁻⁵ m²/s",
      "Ti = 300°C",
      "h = 200 W/(m²·K)",
      "T∞ = 50°C",
      "t = 200 s",
    ],
    find: "t = 200 s에서 중심 온도 T(0, 200s)",
    steps: [
      {
        label: "Step 1: Biot 수 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">평판의 특성 길이는 반두께 L입니다:</p>
            <div className="text-center py-2">
              <Math tex="Bi = \frac{hL}{k} = \frac{200 \times 0.05}{50} = 0.2" display />
            </div>
            <p className="text-gray-400 mt-2">Bi &gt; 0.1이므로 집중용량법은 적용 불가. 공간 효과를 고려해야 합니다.</p>
          </div>
        ),
      },
      {
        label: "Step 2: Fourier 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Fo = \frac{\alpha t}{L^2} = \frac{1.5 \times 10^{-5} \times 200}{(0.05)^2} = \frac{3.0 \times 10^{-3}}{2.5 \times 10^{-3}} = 1.2" display />
            </div>
            <p className="text-gray-400 mt-2">Fo = 1.2 &gt; 0.2 이므로 1항 근사가 유효합니다.</p>
          </div>
        ),
      },
      {
        label: "Step 3: 1항 근사 계수 확인 (표 참조)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">Bi = 0.2인 평판(Plane Wall)에 대해 표에서:</p>
            <div className="text-center py-2">
              <Math tex="\zeta_1 = 0.4328, \quad C_1 = 1.0311" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 무차원 중심 온도 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">평판 중심(x* = 0)에서 1항 근사:</p>
            <div className="text-center py-2">
              <Math tex="\theta_0^* = C_1 \exp(-\zeta_1^2 \, Fo)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\theta_0^* = 1.0311 \times \exp(-(0.4328)^2 \times 1.2)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\theta_0^* = 1.0311 \times \exp(-0.1873 \times 1.2) = 1.0311 \times \exp(-0.2248)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\theta_0^* = 1.0311 \times 0.7988 = 0.8234" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 중심 온도 환산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">무차원 온도를 실제 온도로 환산:</p>
            <div className="text-center py-2">
              <Math tex="\theta_0^* = \frac{T(0,t) - T_\infty}{T_i - T_\infty}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T(0,t) = T_\infty + \theta_0^*(T_i - T_\infty) = 50 + 0.8234 \times (300 - 50)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T(0,t) = 50 + 0.8234 \times 250 = 50 + 205.9 = 255.9°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T(0, 200\text{s}) \approx 255.9°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          200초 후 중심 온도는 아직 높은 편입니다. Fo = 1.2로 상당한 시간이 경과했지만 Bi가 작아 내부 온도 구배가 크지 않습니다.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Plane Wall Surface Temperature",
    topic: "Plane Wall Surface",
    topicColor: "green",
    problem: (
      <p>
        문제 1과 동일한 강판 (두께 <Math tex="2L = 0.1" /> m, <Math tex="k = 50" /> W/(m·K),
        <Math tex="\alpha = 1.5 \times 10^{-5}" /> m²/s, <Math tex="T_i = 300" />°C,
        <Math tex="h = 200" /> W/(m²·K), <Math tex="T_\infty = 50" />°C)에 대해,
        <Math tex="t = 200" /> s 후 평판 표면(<Math tex="x = L" />)의 온도를 구하시오.
      </p>
    ),
    given: [
      "문제 1과 동일한 조건",
      "Bi = 0.2, Fo = 1.2",
      "ζ₁ = 0.4328, C₁ = 1.0311",
      "θ₀* = 0.8234 (문제 1에서 계산)",
    ],
    find: "t = 200 s에서 표면 온도 T(L, 200s)",
    steps: [
      {
        label: "Step 1: 표면에서의 1항 근사 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">평판에서 임의 위치의 무차원 온도:</p>
            <div className="text-center py-2">
              <Math tex="\theta^*(x^*, Fo) = C_1 \exp(-\zeta_1^2 \, Fo) \cos(\zeta_1 \, x^*)" display />
            </div>
            <p className="text-gray-400 mt-2">
              표면에서 <Math tex="x^* = x/L = 1" /> 이므로:
            </p>
            <div className="text-center py-2">
              <Math tex="\theta^*(1, Fo) = \theta_0^* \times \cos(\zeta_1)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: cos(ζ₁) 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\cos(\zeta_1) = \cos(0.4328) = 0.9081" display />
            </div>
            <p className="text-gray-400 mt-2">(0.4328 rad = 24.8° 이므로 cos 값이 1에 가까움)</p>
          </div>
        ),
      },
      {
        label: "Step 3: 표면 무차원 온도",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\theta^*(1, Fo) = 0.8234 \times 0.9081 = 0.7478" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 표면 온도 환산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T(L, t) = T_\infty + \theta^*(1, Fo) \times (T_i - T_\infty)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T(L, t) = 50 + 0.7478 \times 250 = 50 + 187.0 = 237.0°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T(L, 200\text{s}) \approx 237.0°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          표면 온도(237.0°C)는 중심 온도(255.9°C)보다 약 19°C 낮습니다. Bi = 0.2로 작으므로 내부 온도 차이가 크지 않습니다.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Long Cylinder 1-Term Approximation",
    topic: "Long Cylinder",
    topicColor: "blue",
    problem: (
      <p>
        지름 <Math tex="D = 0.08" /> m인 긴 스테인리스강 원통이 초기 온도 <Math tex="T_i = 400" />°C에서
        균일하게 가열되어 있습니다. 이를 <Math tex="T_\infty = 25" />°C인 유체에 담가 냉각합니다.
        물성치: <Math tex="k = 15" /> W/(m·K), <Math tex="\alpha = 4 \times 10^{-6}" /> m²/s,
        <Math tex="h = 100" /> W/(m²·K). 5분 후 원통 중심선의 온도를 구하시오.
      </p>
    ),
    given: [
      "D = 0.08 m (r₀ = 0.04 m)",
      "k = 15 W/(m·K)",
      "α = 4 × 10⁻⁶ m²/s",
      "Ti = 400°C",
      "h = 100 W/(m²·K)",
      "T∞ = 25°C",
      "t = 5 min = 300 s",
    ],
    find: "t = 300 s에서 중심선 온도 T(0, 300s)",
    steps: [
      {
        label: "Step 1: Biot 수 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">원통의 특성 길이는 반지름 r₀입니다:</p>
            <div className="text-center py-2">
              <Math tex="Bi = \frac{h r_0}{k} = \frac{100 \times 0.04}{15} = 0.267" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Fourier 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Fo = \frac{\alpha t}{r_0^2} = \frac{4 \times 10^{-6} \times 300}{(0.04)^2} = \frac{1.2 \times 10^{-3}}{1.6 \times 10^{-3}} = 0.75" display />
            </div>
            <p className="text-gray-400 mt-2">Fo = 0.75 &gt; 0.2 이므로 1항 근사 적용 가능.</p>
          </div>
        ),
      },
      {
        label: "Step 3: 1항 근사 계수 (원통, Bi = 0.267)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">원통(infinite cylinder)의 1항 근사 표에서 Bi = 0.267을 보간하면:</p>
            <div className="text-center py-2">
              <Math tex="\zeta_1 \approx 0.6986, \quad C_1 \approx 1.0483" display />
            </div>
            <p className="text-gray-400 mt-2">(Bi = 0.2: ζ₁ = 0.6170, C₁ = 1.0483 / Bi = 0.3: ζ₁ = 0.7465, C₁ = 1.0580 사이 보간)</p>
          </div>
        ),
      },
      {
        label: "Step 4: 무차원 중심선 온도",
        content: (
          <div>
            <p className="text-gray-400 mb-2">원통 중심선(r* = 0)에서 <Math tex="J_0(0) = 1" /> 이므로:</p>
            <div className="text-center py-2">
              <Math tex="\theta_0^* = C_1 \exp(-\zeta_1^2 \, Fo) = 1.0483 \times \exp(-(0.6986)^2 \times 0.75)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 1.0483 \times \exp(-0.4880 \times 0.75) = 1.0483 \times \exp(-0.3660)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 1.0483 \times 0.6935 = 0.7270" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 중심선 온도 환산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T(0, t) = T_\infty + \theta_0^*(T_i - T_\infty) = 25 + 0.7270 \times (400 - 25)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 25 + 0.7270 \times 375 = 25 + 272.6 = 297.6°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T(0, 300\text{s}) \approx 297.6°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          5분 후 중심선 온도는 아직 약 297.6°C로 상당히 높습니다. 원통 형상에서는 Bessel 함수 <Math tex="J_0" />을 사용합니다.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Sphere 1-Term Approximation",
    topic: "Sphere",
    topicColor: "amber",
    problem: (
      <p>
        지름 <Math tex="D = 0.06" /> m인 구형 물체가 초기 온도 <Math tex="T_i = 500" />°C에서
        균일하게 가열되어 있습니다. <Math tex="T_\infty = 20" />°C인 유체에 담가 냉각하며,
        <Math tex="h = 500" /> W/(m²·K)입니다.
        물성치: <Math tex="k = 40" /> W/(m·K), <Math tex="\alpha = 1 \times 10^{-5}" /> m²/s.
        60초 후 구 중심의 온도를 구하시오.
      </p>
    ),
    given: [
      "D = 0.06 m (r₀ = 0.03 m)",
      "k = 40 W/(m·K)",
      "α = 1 × 10⁻⁵ m²/s",
      "Ti = 500°C",
      "h = 500 W/(m²·K)",
      "T∞ = 20°C",
      "t = 60 s",
    ],
    find: "t = 60 s에서 구 중심 온도 T(0, 60s)",
    steps: [
      {
        label: "Step 1: Biot 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Bi = \frac{h r_0}{k} = \frac{500 \times 0.03}{40} = 0.375" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Fourier 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Fo = \frac{\alpha t}{r_0^2} = \frac{1 \times 10^{-5} \times 60}{(0.03)^2} = \frac{6 \times 10^{-4}}{9 \times 10^{-4}} = 0.667" display />
            </div>
            <p className="text-gray-400 mt-2">Fo = 0.667 &gt; 0.2 이므로 1항 근사 적용 가능.</p>
          </div>
        ),
      },
      {
        label: "Step 3: 1항 근사 계수 (구, Bi = 0.375)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">구(sphere)의 1항 근사 표에서 Bi = 0.375를 보간:</p>
            <div className="text-center py-2">
              <Math tex="\zeta_1 \approx 1.0598, \quad C_1 \approx 1.1143" display />
            </div>
            <p className="text-gray-400 mt-2">(Bi = 0.3: ζ₁ = 0.9208, C₁ = 1.0880 / Bi = 0.4: ζ₁ = 1.0528, C₁ = 1.1164 사이 보간. Bi = 0.5: ζ₁ = 1.1656, C₁ = 1.1441 참고)</p>
          </div>
        ),
      },
      {
        label: "Step 4: 무차원 중심 온도",
        content: (
          <div>
            <p className="text-gray-400 mb-2">구 중심(r* = 0)에서 <Math tex="\sin(\zeta_1 r^*)/(\zeta_1 r^*) \to 1" />:</p>
            <div className="text-center py-2">
              <Math tex="\theta_0^* = C_1 \exp(-\zeta_1^2 \, Fo) = 1.1143 \times \exp(-(1.0598)^2 \times 0.667)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 1.1143 \times \exp(-1.1232 \times 0.667) = 1.1143 \times \exp(-0.7492)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 1.1143 \times 0.4727 = 0.5268" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 중심 온도 환산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T(0, t) = T_\infty + \theta_0^*(T_i - T_\infty) = 20 + 0.5268 \times (500 - 20)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 20 + 0.5268 \times 480 = 20 + 252.9 = 272.9°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T(0, 60\text{s}) \approx 272.9°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          구는 체적 대비 표면적이 크기 때문에 평판이나 원통보다 빠르게 냉각됩니다.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Time to Reach Target Temperature",
    topic: "Time to Target",
    topicColor: "cyan",
    problem: (
      <p>
        두께 <Math tex="2L = 0.06" /> m인 평판이 초기 온도 <Math tex="T_i = 25" />°C입니다.
        <Math tex="T_\infty = 500" />°C, <Math tex="h = 150" /> W/(m²·K)인 환경에 놓았을 때,
        물성치: <Math tex="k = 20" /> W/(m·K), <Math tex="\alpha = 8 \times 10^{-6}" /> m²/s.
        평판 중심이 <Math tex="T = 400" />°C에 도달하는 데 필요한 시간을 구하시오.
      </p>
    ),
    given: [
      "2L = 0.06 m (L = 0.03 m)",
      "k = 20 W/(m·K)",
      "α = 8 × 10⁻⁶ m²/s",
      "Ti = 25°C",
      "h = 150 W/(m²·K)",
      "T∞ = 500°C",
      "목표: T(0, t) = 400°C",
    ],
    find: "중심 온도가 400°C에 도달하는 시간 t",
    steps: [
      {
        label: "Step 1: Biot 수 및 계수 확인",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Bi = \frac{hL}{k} = \frac{150 \times 0.03}{20} = 0.225" display />
            </div>
            <p className="text-gray-400 mt-2">평판(Plane Wall) 표에서 Bi = 0.225를 보간:</p>
            <div className="text-center py-2">
              <Math tex="\zeta_1 \approx 0.4566, \quad C_1 \approx 1.0346" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 목표 무차원 온도 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\theta_0^* = \frac{T(0,t) - T_\infty}{T_i - T_\infty} = \frac{400 - 500}{25 - 500} = \frac{-100}{-475} = 0.2105" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: Fo 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">1항 근사에서 Fo를 역산합니다:</p>
            <div className="text-center py-2">
              <Math tex="\theta_0^* = C_1 \exp(-\zeta_1^2 \, Fo)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="0.2105 = 1.0346 \times \exp(-0.2085 \, Fo)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\exp(-0.2085 \, Fo) = \frac{0.2105}{1.0346} = 0.2035" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 자연로그를 이용한 Fo 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="-0.2085 \, Fo = \ln(0.2035) = -1.5916" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Fo = \frac{1.5916}{0.2085} = 7.634" display />
            </div>
            <p className="text-gray-400 mt-2">Fo = 7.634 &gt; 0.2 이므로 1항 근사가 유효함을 확인.</p>
          </div>
        ),
      },
      {
        label: "Step 5: 실제 시간 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="t = \frac{Fo \cdot L^2}{\alpha} = \frac{7.634 \times (0.03)^2}{8 \times 10^{-6}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="t = \frac{7.634 \times 9 \times 10^{-4}}{8 \times 10^{-6}} = \frac{6.871 \times 10^{-3}}{8 \times 10^{-6}} = 858.8 \text{ s}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="t \approx 859 \text{ s} \approx 14.3 \text{ min}" display />
        <p className="text-sm text-gray-400 mt-2">
          중심이 400°C에 도달하는데 약 14분이 소요됩니다. Fo가 매우 크므로 1항 근사가 정확합니다.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Total Energy Transfer (Sphere)",
    topic: "Total Energy",
    topicColor: "purple",
    problem: (
      <p>
        문제 4의 구 (<Math tex="D = 0.06" /> m, <Math tex="k = 40" /> W/(m·K),
        <Math tex="\alpha = 1 \times 10^{-5}" /> m²/s, <Math tex="T_i = 500" />°C,
        <Math tex="h = 500" /> W/(m²·K), <Math tex="T_\infty = 20" />°C)에 대해,
        60초 후 최대 가능 에너지 전달량 대비 실제 에너지 전달 비율 <Math tex="Q/Q_0" />를 구하시오.
        밀도 <Math tex="\rho = 8000" /> kg/m³, 비열 <Math tex="c_p = 500" /> J/(kg·K).
      </p>
    ),
    given: [
      "문제 4와 동일 (r₀ = 0.03 m)",
      "ρ = 8000 kg/m³, cp = 500 J/(kg·K)",
      "Bi = 0.375, Fo = 0.667",
      "ζ₁ = 1.0598, C₁ = 1.1143",
      "θ₀* = 0.5268 (문제 4에서 계산)",
    ],
    find: "에너지 전달 비율 Q/Q₀",
    steps: [
      {
        label: "Step 1: 최대 에너지 전달량 Q₀ 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">구가 완전히 T∞에 도달할 때 방출하는 총 에너지:</p>
            <div className="text-center py-2">
              <Math tex="Q_0 = \rho c_p V (T_i - T_\infty) = \rho c_p \left(\frac{4}{3}\pi r_0^3\right)(T_i - T_\infty)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="V = \frac{4}{3}\pi (0.03)^3 = \frac{4}{3}\pi \times 2.7 \times 10^{-5} = 1.131 \times 10^{-4} \text{ m}^3" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Q_0 = 8000 \times 500 \times 1.131 \times 10^{-4} \times 480 = 217,200 \text{ J} \approx 217.2 \text{ kJ}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 구의 에너지 전달 비율 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">구에 대한 Q/Q₀ 공식:</p>
            <div className="text-center py-2">
              <Math tex="\frac{Q}{Q_0} = 1 - 3\theta_0^* \frac{\sin(\zeta_1) - \zeta_1 \cos(\zeta_1)}{\zeta_1^3}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 삼각함수 값 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\sin(1.0598) = 0.8724" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\cos(1.0598) = 0.4889" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\zeta_1^3 = (1.0598)^3 = 1.1904" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 분자 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\sin(\zeta_1) - \zeta_1\cos(\zeta_1) = 0.8724 - 1.0598 \times 0.4889" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.8724 - 0.5182 = 0.3542" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: Q/Q₀ 최종 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{Q}{Q_0} = 1 - 3 \times 0.5268 \times \frac{0.3542}{1.1904}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 1 - 1.5804 \times 0.2976 = 1 - 0.4703 = 0.5297" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="\frac{Q}{Q_0} \approx 0.530 \quad (53.0\%)" display />
        <p className="text-sm text-gray-400 mt-2">
          60초 후 최대 가능 에너지의 약 53%가 이미 전달되었습니다. <Math tex="Q = 0.530 \times 217.2 \approx 115.1" /> kJ.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Semi-infinite Solid: Constant Surface Temperature",
    topic: "Semi-infinite: Const Ts",
    topicColor: "emerald",
    problem: (
      <p>
        두꺼운 콘크리트 벽(<Math tex="\alpha = 7.5 \times 10^{-7}" /> m²/s)이 초기에 균일하게
        <Math tex="T_i = 20" />°C입니다. 표면 온도가 갑자기 <Math tex="T_s = 0" />°C로 변할 때,
        표면에서 <Math tex="x = 0.1" /> m 깊이에서 3시간 후의 온도를 구하시오.
      </p>
    ),
    given: [
      "α = 7.5 × 10⁻⁷ m²/s",
      "Ti = 20°C",
      "Ts = 0°C (일정 표면온도)",
      "x = 0.1 m",
      "t = 3 hr = 10,800 s",
    ],
    find: "T(0.1 m, 3 hr)",
    steps: [
      {
        label: "Step 1: 반무한체 일정 표면온도 공식",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{T(x,t) - T_s}{T_i - T_s} = \text{erf}\left(\frac{x}{2\sqrt{\alpha t}}\right)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 유사변수(similarity variable) 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\eta = \frac{x}{2\sqrt{\alpha t}} = \frac{0.1}{2\sqrt{7.5 \times 10^{-7} \times 10800}}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\alpha t = 7.5 \times 10^{-7} \times 10800 = 8.1 \times 10^{-3} \text{ m}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\sqrt{\alpha t} = \sqrt{8.1 \times 10^{-3}} = 0.09000 \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\eta = \frac{0.1}{2 \times 0.09000} = \frac{0.1}{0.1800} = 0.5556" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: erf 값 확인",
        content: (
          <div>
            <p className="text-gray-400 mb-2">오차함수 표에서:</p>
            <div className="text-center py-2">
              <Math tex="\text{erf}(0.5556) \approx 0.5695" display />
            </div>
            <p className="text-gray-400 mt-2">(erf(0.5) = 0.5205, erf(0.6) = 0.6039 사이 보간)</p>
          </div>
        ),
      },
      {
        label: "Step 4: 온도 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T(x,t) = T_s + (T_i - T_s) \times \text{erf}(\eta)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T(0.1, 10800) = 0 + (20 - 0) \times 0.5695" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 20 \times 0.5695 = 11.39°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T(0.1\text{ m}, 3\text{ hr}) \approx 11.4°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          3시간 후 10 cm 깊이의 온도는 20°C에서 약 11.4°C로 떨어졌습니다. 콘크리트의 낮은 열확산도로 인해 열 침투가 느립니다.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "Semi-infinite Solid: Constant Heat Flux",
    topic: "Semi-infinite: Const q''",
    topicColor: "orange",
    problem: (
      <p>
        반무한 강체 표면에 일정 열유속 <Math tex="q_0'' = 5 \times 10^4" /> W/m²가 가해집니다.
        초기 온도 <Math tex="T_i = 20" />°C이고, 물성치: <Math tex="k = 50" /> W/(m·K),
        <Math tex="\alpha = 1.2 \times 10^{-5}" /> m²/s.
        30초 후 표면 온도를 구하시오.
      </p>
    ),
    given: [
      "q₀'' = 5 × 10⁴ W/m²",
      "Ti = 20°C",
      "k = 50 W/(m·K)",
      "α = 1.2 × 10⁻⁵ m²/s",
      "t = 30 s",
    ],
    find: "t = 30 s에서 표면 온도 T(0, 30s)",
    steps: [
      {
        label: "Step 1: 반무한체 일정 열유속 공식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">일정 열유속이 가해지는 반무한체의 온도 분포:</p>
            <div className="text-center py-2">
              <Math tex="T(x,t) = T_i + \frac{2q_0''}{k}\sqrt{\frac{\alpha t}{\pi}} \exp\!\left(-\frac{x^2}{4\alpha t}\right) - \frac{q_0'' x}{k}\,\text{erfc}\!\left(\frac{x}{2\sqrt{\alpha t}}\right)" display />
            </div>
            <p className="text-gray-400 mt-2">표면(x = 0)에서 단순화되면:</p>
            <div className="text-center py-2">
              <Math tex="T(0,t) = T_i + \frac{2q_0''}{k}\sqrt{\frac{\alpha t}{\pi}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: αt/π 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\alpha t = 1.2 \times 10^{-5} \times 30 = 3.6 \times 10^{-4} \text{ m}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\frac{\alpha t}{\pi} = \frac{3.6 \times 10^{-4}}{3.1416} = 1.146 \times 10^{-4} \text{ m}^2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 제곱근 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\sqrt{\frac{\alpha t}{\pi}} = \sqrt{1.146 \times 10^{-4}} = 1.0705 \times 10^{-2} \text{ m}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 표면 온도 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T(0,t) = 20 + \frac{2 \times 5 \times 10^4}{50} \times 1.0705 \times 10^{-2}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 20 + 2000 \times 1.0705 \times 10^{-2}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 20 + 21.41 = 41.41°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T(0, 30\text{s}) \approx 41.4°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          표면 온도는 <Math tex="\sqrt{t}" />에 비례하여 증가합니다. 시간이 4배가 되면 온도 상승도 2배가 됩니다.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Semi-infinite Solid: Surface Convection",
    topic: "Semi-infinite: Convection",
    topicColor: "pink",
    problem: (
      <p>
        땅이 초기에 <Math tex="T_i = 10" />°C로 균일합니다. 갑자기 뜨거운 공기(<Math tex="T_\infty = 35" />°C,
        <Math tex="h = 20" /> W/(m²·K))에 노출됩니다. 땅의 물성치: <Math tex="k = 1.5" /> W/(m·K),
        <Math tex="\alpha = 5 \times 10^{-7}" /> m²/s. 24시간 후 지표면에서 <Math tex="x = 0.5" /> m 깊이의 온도를 구하시오.
      </p>
    ),
    given: [
      "Ti = 10°C",
      "T∞ = 35°C, h = 20 W/(m²·K)",
      "k = 1.5 W/(m·K)",
      "α = 5 × 10⁻⁷ m²/s",
      "x = 0.5 m",
      "t = 24 hr = 86,400 s",
    ],
    find: "T(0.5 m, 24 hr)",
    steps: [
      {
        label: "Step 1: 대류 경계조건의 반무한체 공식",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{T(x,t)-T_i}{T_\infty - T_i} = \text{erfc}\!\left(\frac{x}{2\sqrt{\alpha t}}\right) - \exp\!\left(\frac{hx}{k}+\frac{h^2\alpha t}{k^2}\right)\text{erfc}\!\left(\frac{x}{2\sqrt{\alpha t}}+\frac{h\sqrt{\alpha t}}{k}\right)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 매개변수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\alpha t = 5 \times 10^{-7} \times 86400 = 0.0432 \text{ m}^2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\sqrt{\alpha t} = 0.2078 \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\frac{x}{2\sqrt{\alpha t}} = \frac{0.5}{2 \times 0.2078} = \frac{0.5}{0.4157} = 1.2027" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\frac{h\sqrt{\alpha t}}{k} = \frac{20 \times 0.2078}{1.5} = 2.771" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 지수 항 인수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\frac{hx}{k} = \frac{20 \times 0.5}{1.5} = 6.667" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\frac{h^2 \alpha t}{k^2} = \frac{400 \times 0.0432}{2.25} = 7.680" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\frac{hx}{k} + \frac{h^2\alpha t}{k^2} = 6.667 + 7.680 = 14.347" display />
            </div>
            <p className="text-gray-400 mt-2">
              <Math tex="\exp(14.347)" />은 매우 큰 값이지만, erfc의 인수도 큽니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\frac{x}{2\sqrt{\alpha t}} + \frac{h\sqrt{\alpha t}}{k} = 1.2027 + 2.771 = 3.974" display />
            </div>
            <p className="text-gray-400 mt-2">
              <Math tex="\text{erfc}(3.974) \approx 1.12 \times 10^{-8}" /> (매우 작은 값)이므로 두 번째 항은 무시할 수 있는 수준입니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 4: 첫 번째 항 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\text{erfc}(1.2027) = 1 - \text{erf}(1.2027) \approx 1 - 0.9103 = 0.0897" display />
            </div>
            <p className="text-gray-400 mt-2">(erf(1.2) = 0.9103 에서 근사)</p>
          </div>
        ),
      },
      {
        label: "Step 5: 온도 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">두 번째 항이 무시되므로:</p>
            <div className="text-center py-2">
              <Math tex="\frac{T - T_i}{T_\infty - T_i} \approx 0.0897" display />
            </div>
            <div className="text-center py-2">
              <Math tex="T = T_i + 0.0897(T_\infty - T_i) = 10 + 0.0897 \times (35 - 10)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 10 + 0.0897 \times 25 = 10 + 2.24 = 12.24°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T(0.5\text{ m}, 24\text{ hr}) \approx 12.2°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          24시간 후에도 50 cm 깊이의 온도는 10°C에서 12.2°C로 약간만 상승했습니다. 토양의 낮은 열확산도 때문입니다.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "Product Solution: Short Cylinder",
    topic: "Product Solution",
    topicColor: "teal",
    problem: (
      <p>
        지름 <Math tex="D = 0.05" /> m, 높이 <Math tex="H = 0.08" /> m인 짧은 원통이
        초기 온도 <Math tex="T_i = 300" />°C에서 균일합니다. <Math tex="T_\infty = 25" />°C,
        <Math tex="h = 100" /> W/(m²·K)인 환경에서 냉각됩니다.
        물성치: <Math tex="k = 20" /> W/(m·K), <Math tex="\alpha = 6 \times 10^{-6}" /> m²/s.
        200초 후 원통 중심의 온도를 적 해법(Product Solution)으로 구하시오.
      </p>
    ),
    given: [
      "D = 0.05 m (r₀ = 0.025 m)",
      "H = 0.08 m (반높이 L = 0.04 m)",
      "k = 20 W/(m·K)",
      "α = 6 × 10⁻⁶ m²/s",
      "Ti = 300°C",
      "h = 100 W/(m²·K)",
      "T∞ = 25°C",
      "t = 200 s",
    ],
    find: "t = 200 s에서 짧은 원통 중심 온도",
    steps: [
      {
        label: "Step 1: 적 해법 원리",
        content: (
          <div>
            <p className="text-gray-400 mb-2">짧은 원통 = 무한 평판(높이 방향) × 무한 원통(반경 방향):</p>
            <div className="text-center py-2">
              <Math tex="\theta^*_{\text{short cyl}} = \theta^*_{\text{plane wall}}(x^*=0, Fo_w, Bi_w) \times \theta^*_{\text{inf. cyl}}(r^*=0, Fo_c, Bi_c)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 무한 평판 부분 (높이 방향)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">반높이 L = H/2 = 0.04 m:</p>
            <div className="text-center py-2">
              <Math tex="Bi_w = \frac{hL}{k} = \frac{100 \times 0.04}{20} = 0.2" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Fo_w = \frac{\alpha t}{L^2} = \frac{6 \times 10^{-6} \times 200}{(0.04)^2} = \frac{1.2 \times 10^{-3}}{1.6 \times 10^{-3}} = 0.75" display />
            </div>
            <p className="text-gray-400 mt-2">Bi_w = 0.2인 평판: ζ₁ = 0.4328, C₁ = 1.0311</p>
            <div className="text-center py-2">
              <Math tex="\theta^*_{0,w} = 1.0311 \times \exp(-(0.4328)^2 \times 0.75) = 1.0311 \times \exp(-0.1404)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 1.0311 \times 0.8690 = 0.8960" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 무한 원통 부분 (반경 방향)",
        content: (
          <div>
            <p className="text-gray-400 mb-2">반지름 r₀ = 0.025 m:</p>
            <div className="text-center py-2">
              <Math tex="Bi_c = \frac{h r_0}{k} = \frac{100 \times 0.025}{20} = 0.125" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Fo_c = \frac{\alpha t}{r_0^2} = \frac{6 \times 10^{-6} \times 200}{(0.025)^2} = \frac{1.2 \times 10^{-3}}{6.25 \times 10^{-4}} = 1.92" display />
            </div>
            <p className="text-gray-400 mt-2">Bi_c = 0.125인 원통: ζ₁ ≈ 0.4900, C₁ ≈ 1.0155 (보간)</p>
            <div className="text-center py-2">
              <Math tex="\theta^*_{0,c} = 1.0155 \times \exp(-(0.4900)^2 \times 1.92) = 1.0155 \times \exp(-0.4610)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 1.0155 \times 0.6308 = 0.6407" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 적 해법 적용",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\theta^*_{\text{short cyl}} = \theta^*_{0,w} \times \theta^*_{0,c} = 0.8960 \times 0.6407 = 0.5741" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 중심 온도 환산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="T_{\text{center}} = T_\infty + \theta^*_{\text{short cyl}} \times (T_i - T_\infty)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 25 + 0.5741 \times (300 - 25) = 25 + 0.5741 \times 275" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 25 + 157.9 = 182.9°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center">
        <Math tex="T_{\text{center}}(200\text{s}) \approx 182.9°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          짧은 원통의 중심 온도는 무한 평판(θ* = 0.896)과 무한 원통(θ* = 0.641)의 곱으로 결정됩니다.
          반경이 작아 원통 방향 냉각이 더 빠릅니다.
        </p>
      </div>
    ),
  },
];

const tips = [
  {
    title: "1. Biot/Fourier 수 계산",
    description: "Bi = hL/k와 Fo = αt/L²를 먼저 계산하세요. Fo > 0.2이면 1항 근사 적용 가능.",
  },
  {
    title: "2. 1항 근사 계수",
    description: "Bi 값으로 ζ₁과 C₁을 표에서 찾으세요. 정확한 보간이 중요합니다.",
  },
  {
    title: "3. 반무한체 조건",
    description: "erf 함수와 erfc 함수의 값을 표에서 확인하세요.",
  },
  {
    title: "4. 적 해법(Product Solution)",
    description: "짧은 원통 = 무한 평판 × 무한 원통, 직육면체 = 3개 무한 평판의 곱.",
  },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={7} problems={problems} tips={tips} />;
}

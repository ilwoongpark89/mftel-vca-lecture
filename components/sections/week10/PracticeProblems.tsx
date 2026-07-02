"use client";

import PracticeSection, { type Problem } from "@/components/sections/shared/PracticeSection";
import Math from "@/components/Math";

const problems: Problem[] = [
  {
    id: 1,
    title: "Laminar Flat Plate",
    topic: "Flat Plate - Laminar",
    topicColor: "red",
    problem: (
      <p>
        온도 <Math tex="T_s = 60°\text{C}" />인 평판 위로 <Math tex="T_\infty = 20°\text{C}" />인 공기가{" "}
        <Math tex="u_\infty = 3\text{ m/s}" />로 흐릅니다. 평판 길이는 <Math tex="L = 0.4\text{ m}" />입니다.
        막온도 <Math tex="T_f = 40°\text{C}" />에서의 공기 물성치를 이용하여 평균 열전달계수{" "}
        <Math tex="\bar{h}" />와 단위 폭당 열전달률 <Math tex="Q'" />을 구하시오.
      </p>
    ),
    given: [
      "u∞ = 3 m/s, L = 0.4 m",
      "Ts = 60°C, T∞ = 20°C",
      "Tf = 40°C: ν = 1.7 × 10⁻⁵ m²/s",
      "k = 0.027 W/(m·K), Pr = 0.71",
    ],
    find: "평균 열전달계수 h̄ 및 단위 폭당 열전달률 Q' [W/m]",
    steps: [
      {
        label: "Step 1: Reynolds 수 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">평판 끝에서의 Reynolds 수를 계산합니다:</p>
            <div className="text-center py-2">
              <Math tex="Re_L = \frac{u_\infty L}{\nu} = \frac{3 \times 0.4}{1.7 \times 10^{-5}} = 7.06 \times 10^4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 유동 상태 판별",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              임계 Reynolds 수 <Math tex="Re_{cr} = 5 \times 10^5" />와 비교합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="Re_L = 7.06 \times 10^4 < 5 \times 10^5 \quad \Rightarrow \quad \text{전체 구간 층류}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 평균 Nusselt 수 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">등온 평판 층류 상관식을 적용합니다:</p>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_L = 0.664\,Re_L^{1/2}\,Pr^{1/3}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_L = 0.664 \times (7.06 \times 10^4)^{0.5} \times (0.71)^{1/3}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.664 \times 265.7 \times 0.893 = 157.6" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 평균 열전달계수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\bar{h} = \frac{\overline{Nu}_L \cdot k}{L} = \frac{157.6 \times 0.027}{0.4} = \frac{4.255}{0.4} = 10.64 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 단위 폭당 열전달률 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Q' = \bar{h} \cdot L \cdot (T_s - T_\infty) = 10.64 \times 0.4 \times (60 - 20)" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Q' = 10.64 \times 0.4 \times 40 = 170.2 \text{ W/m}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\bar{h} = 10.64 \text{ W/(m}^2\text{·K)}" display />
        <Math tex="Q' = 170.2 \text{ W/m}" display />
        <p className="text-sm text-gray-400 mt-2">
          Re가 임계값보다 훨씬 작으므로 전체 구간이 층류입니다.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Mixed Regime Flat Plate",
    topic: "Flat Plate - Mixed",
    topicColor: "green",
    problem: (
      <p>
        온도 <Math tex="T_s = 100°\text{C}" />인 평판 위로 <Math tex="T_\infty = 20°\text{C}" />인 공기가{" "}
        <Math tex="u_\infty = 20\text{ m/s}" />로 흐릅니다. 평판 길이는 <Math tex="L = 2\text{ m}" />입니다.
        막온도에서의 공기 물성치를 이용하여 혼합유동 조건에서 평균 Nusselt 수와 열전달계수를 구하시오.
      </p>
    ),
    given: [
      "u∞ = 20 m/s, L = 2 m",
      "Ts = 100°C, T∞ = 20°C",
      "Tf = 60°C: ν = 1.8 × 10⁻⁵ m²/s",
      "k = 0.028 W/(m·K), Pr = 0.71",
    ],
    find: "평균 Nu_L 및 h̄ [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: Reynolds 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Re_L = \frac{u_\infty L}{\nu} = \frac{20 \times 2}{1.8 \times 10^{-5}} = 2.222 \times 10^6" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 유동 상태 판별",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="Re_L = 2.222 \times 10^6 > Re_{cr} = 5 \times 10^5" /> 이므로 혼합유동(층류+난류)입니다.
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: 혼합유동 상관식 적용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="Re_{cr} = 5 \times 10^5" />일 때 혼합유동 평균 Nusselt 수:
            </p>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_L = \left(0.037\,Re_L^{4/5} - 871\right)Pr^{1/3}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 수치 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">먼저 <Math tex="Re_L^{4/5}" />를 계산합니다:</p>
            <div className="text-center py-2">
              <Math tex="Re_L^{4/5} = (2.222 \times 10^6)^{0.8} = 2.222^{0.8} \times 10^{4.8}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 1.932 \times 63096 = 121,900" display />
            </div>
            <div className="text-center py-2">
              <Math tex="0.037 \times 121{,}900 - 871 = 4510 - 871 = 3639" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_L = 3639 \times (0.71)^{1/3} = 3639 \times 0.893 = 3249" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 평균 열전달계수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\bar{h} = \frac{\overline{Nu}_L \cdot k}{L} = \frac{3249 \times 0.028}{2} = \frac{90.97}{2} = 45.5 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\overline{Nu}_L \approx 3249" display />
        <Math tex="\bar{h} \approx 45.5 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          혼합유동에서는 앞쪽 층류 영역이 전체 평균 Nu를 낮추는 효과가 있습니다 (871 보정항).
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Cylinder in Crossflow",
    topic: "Cylinder - Churchill-Bernstein",
    topicColor: "blue",
    problem: (
      <p>
        직경 <Math tex="D = 0.05\text{ m}" />인 원통이 <Math tex="u_\infty = 10\text{ m/s}" />의 공기 횡류에
        놓여 있습니다. 원통 표면온도 <Math tex="T_s = 150°\text{C}" />, 공기 온도{" "}
        <Math tex="T_\infty = 25°\text{C}" />일 때, Churchill-Bernstein 상관식을 이용하여 평균
        Nusselt 수와 열전달계수를 구하시오.
      </p>
    ),
    given: [
      "D = 0.05 m, u∞ = 10 m/s",
      "Ts = 150°C, T∞ = 25°C",
      "Tf = 87.5°C: ν = 2.1 × 10⁻⁵ m²/s",
      "k = 0.030 W/(m·K), Pr = 0.70",
    ],
    find: "평균 Nu_D 및 h̄ [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: Reynolds 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Re_D = \frac{u_\infty D}{\nu} = \frac{10 \times 0.05}{2.1 \times 10^{-5}} = 2.381 \times 10^4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Churchill-Bernstein 상관식",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="Re_D \cdot Pr > 0.2" /> 조건을 만족하므로 적용 가능합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 0.3 + \frac{0.62\,Re_D^{1/2}\,Pr^{1/3}}{\left[1 + (0.4/Pr)^{2/3}\right]^{1/4}} \left[1 + \left(\frac{Re_D}{282{,}000}\right)^{5/8}\right]^{4/5}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 중간항 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">분자 부분:</p>
            <div className="text-center py-2">
              <Math tex="0.62 \times Re_D^{1/2} \times Pr^{1/3} = 0.62 \times 154.3 \times 0.888 = 84.94" display />
            </div>
            <p className="text-gray-400 mb-2 mt-3">분모 부분:</p>
            <div className="text-center py-2">
              <Math tex="\left[1 + (0.4/0.70)^{2/3}\right]^{1/4} = \left[1 + (0.571)^{2/3}\right]^{1/4} = [1 + 0.688]^{1/4} = (1.688)^{0.25} = 1.140" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 고 Reynolds 수 보정항",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\left[1 + \left(\frac{23{,}810}{282{,}000}\right)^{5/8}\right]^{4/5} = \left[1 + (0.0844)^{0.625}\right]^{0.8}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= [1 + 0.174]^{0.8} = (1.174)^{0.8} = 1.137" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: Nusselt 수 및 열전달계수",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 0.3 + \frac{84.94}{1.140} \times 1.137 = 0.3 + 74.51 \times 1.137 = 0.3 + 84.7 = 85.0" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\bar{h} = \frac{\overline{Nu}_D \cdot k}{D} = \frac{85.0 \times 0.030}{0.05} = 51.0 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\overline{Nu}_D \approx 85.0" display />
        <Math tex="\bar{h} \approx 51.0 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          Churchill-Bernstein 상관식은 물성치를 막온도에서 평가하며, 넓은 Re 범위에서 사용 가능합니다.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Sphere External Flow",
    topic: "Sphere - Whitaker",
    topicColor: "amber",
    problem: (
      <p>
        직경 <Math tex="D = 0.02\text{ m}" />인 구가 <Math tex="u_\infty = 5\text{ m/s}" />의 공기 흐름 속에
        놓여 있습니다. 구 표면온도 <Math tex="T_s = 80°\text{C}" />, 공기 온도{" "}
        <Math tex="T_\infty = 20°\text{C}" />일 때, Whitaker 상관식을 이용하여 평균 Nusselt 수와
        열전달계수를 구하시오. 물성치는 <Math tex="T_\infty" />에서 평가합니다.
      </p>
    ),
    given: [
      "D = 0.02 m, u∞ = 5 m/s",
      "Ts = 80°C, T∞ = 20°C",
      "At T∞: ν = 1.5 × 10⁻⁵ m²/s, k = 0.026 W/(m·K)",
      "Pr = 0.71, μ/μs ≈ 1.1",
    ],
    find: "평균 Nu_D 및 h̄ [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: Reynolds 수 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              Whitaker 상관식에서는 <Math tex="T_\infty" />에서의 물성치로 Re를 계산합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="Re_D = \frac{u_\infty D}{\nu} = \frac{5 \times 0.02}{1.5 \times 10^{-5}} = 6667" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Whitaker 상관식 적용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              적용 조건: <Math tex="3.5 \leq Re_D \leq 7.6 \times 10^4" />,{" "}
              <Math tex="0.71 \leq Pr \leq 380" />
            </p>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 2 + \left(0.4\,Re_D^{1/2} + 0.06\,Re_D^{2/3}\right)Pr^{0.4}\left(\frac{\mu}{\mu_s}\right)^{1/4}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 각 항 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="0.4\,Re_D^{1/2} = 0.4 \times (6667)^{0.5} = 0.4 \times 81.65 = 32.66" display />
            </div>
            <div className="text-center py-2">
              <Math tex="0.06\,Re_D^{2/3} = 0.06 \times (6667)^{2/3} = 0.06 \times 354.6 = 21.28" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Pr^{0.4} = (0.71)^{0.4} = 0.872" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\left(\frac{\mu}{\mu_s}\right)^{1/4} = (1.1)^{0.25} = 1.024" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: Nusselt 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 2 + (32.66 + 21.28) \times 0.872 \times 1.024" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 2 + 53.94 \times 0.872 \times 1.024 = 2 + 48.14 = 50.1" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 열전달계수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\bar{h} = \frac{\overline{Nu}_D \cdot k}{D} = \frac{50.1 \times 0.026}{0.02} = \frac{1.303}{0.02} = 65.1 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\overline{Nu}_D \approx 50.1" display />
        <Math tex="\bar{h} \approx 65.1 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          Whitaker 상관식은 물성치를 <Math tex="T_\infty" />에서 평가하고{" "}
          <Math tex="(\mu/\mu_s)^{1/4}" /> 보정을 적용하는 것이 특징입니다.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Unheated Starting Length",
    topic: "Flat Plate - Unheated Start",
    topicColor: "cyan",
    problem: (
      <p>
        평판에서 처음 <Math tex="\xi = 0.2\text{ m}" /> 구간은 비가열 상태이고,{" "}
        <Math tex="x = 0.2\text{ m}" />부터 <Math tex="x = 0.6\text{ m}" />까지 가열됩니다.
        공기 유속 <Math tex="u_\infty = 5\text{ m/s}" />일 때, 가열 구간에 대한 평균 열전달계수를
        구하시오.
      </p>
    ),
    given: [
      "비가열 구간: 0 ≤ x ≤ 0.2 m (ξ = 0.2 m)",
      "가열 구간: 0.2 m ≤ x ≤ 0.6 m",
      "u∞ = 5 m/s",
      "Tf에서: ν = 1.7 × 10⁻⁵ m²/s, k = 0.027 W/(m·K), Pr = 0.71",
    ],
    find: "가열 구간의 평균 h̄ [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: Reynolds 수 확인",
        content: (
          <div>
            <p className="text-gray-400 mb-2">가열 구간 끝에서의 Reynolds 수:</p>
            <div className="text-center py-2">
              <Math tex="Re_{x=0.6} = \frac{5 \times 0.6}{1.7 \times 10^{-5}} = 1.765 \times 10^5 < 5 \times 10^5 \quad (\text{층류})" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 비가열 시작구간 보정이 적용된 국소 Nu",
        content: (
          <div>
            <p className="text-gray-400 mb-2">비가열 시작구간이 있을 때 국소 Nusselt 수:</p>
            <div className="text-center py-2">
              <Math tex="Nu_x = \frac{0.332\,Re_x^{1/2}\,Pr^{1/3}}{\left[1 - (\xi/x)^{3/4}\right]^{1/3}}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 가열 구간 평균 h 계산 방법",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              평균 열전달계수는 가열 구간에 대해 적분하여 구합니다. 간편 계산을 위해 가열 구간
              시작점과 끝점에서 <Math tex="Nu_x" />를 계산합니다.
            </p>
            <p className="text-gray-400 mb-2">x = 0.6 m에서:</p>
            <div className="text-center py-2">
              <Math tex="Re_{0.6} = 1.765 \times 10^5, \quad Re_{0.6}^{1/2} = 420.1" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Nu_{0.6} = \frac{0.332 \times 420.1 \times 0.893}{[1-(0.2/0.6)^{3/4}]^{1/3}} = \frac{124.6}{[1-0.424]^{1/3}} = \frac{124.6}{(0.576)^{1/3}} = \frac{124.6}{0.832} = 149.8" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 전체 열전달률을 이용한 평균 h",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              평균 열전달계수는 다음 관계로 구할 수 있습니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\bar{h} \cdot (L - \xi) = \int_{\xi}^{L} h_x \, dx = \frac{k}{L}\left[\overline{Nu}_{0 \to L} \cdot L - \overline{Nu}_{0 \to \xi} \cdot \xi \right]" display />
            </div>
            <p className="text-gray-400 mb-2 mt-2">
              비가열 시작구간이 있을 때, 가열 구간의 평균 <Math tex="\overline{Nu}" />를 구합니다:
            </p>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_{0 \to L} \cdot L = 0.664\,Re_L^{1/2}\,Pr^{1/3} \cdot L = 0.664 \times 420.1 \times 0.893 \times 0.6 = 149.5" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_{0 \to \xi} \cdot \xi = 0.664\,Re_\xi^{1/2}\,Pr^{1/3} \cdot \xi" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Re_\xi = \frac{5 \times 0.2}{1.7 \times 10^{-5}} = 5.882 \times 10^4, \quad Re_\xi^{1/2} = 242.5" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_{0 \to \xi} \cdot \xi = 0.664 \times 242.5 \times 0.893 \times 0.2 = 28.77" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 최종 평균 열전달계수",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\bar{h} = \frac{k}{L - \xi}\left[\overline{Nu}_L - \overline{Nu}_\xi \cdot \frac{\xi}{L}\right]" display />
            </div>
            <p className="text-gray-400 mb-2">
              가열 구간에 대한 평균 <Math tex="Nu" />:
            </p>
            <div className="text-center py-2">
              <Math tex="\bar{h} = \frac{k \cdot (149.5 - 28.77)}{(0.6 - 0.2) \times 0.6} = \frac{0.027 \times 120.7}{0.24} = \frac{3.260}{0.24}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\bar{h} \approx 13.6 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\bar{h} \approx 13.6 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          비가열 시작구간으로 인해 경계층이 미리 발달하여, 가열 시작점에서의 국소 h가
          x=0에서 시작하는 경우보다 낮습니다.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Tube Bank - Inline Arrangement",
    topic: "Tube Bank - Inline",
    topicColor: "purple",
    problem: (
      <p>
        인라인 배열 관군에서 10열의 관이 있습니다. 관 외경 <Math tex="D = 0.02\text{ m}" />,
        횡방향 피치 <Math tex="S_T = 0.04\text{ m}" />, 종방향 피치 <Math tex="S_L = 0.04\text{ m}" />.
        접근 유속 <Math tex="u_\infty = 8\text{ m/s}" />, <Math tex="T_\infty = 20°\text{C}" />,{" "}
        <Math tex="T_s = 80°\text{C}" />. 최대 유속에서의 Reynolds 수와 평균 열전달계수를 추정하시오.
        (<Math tex="\overline{Nu}_D = C_1 C_2 \, Re_{D,\max}^m \, Pr^{0.36}(Pr/Pr_s)^{1/4}" />,
        인라인 <Math tex="Re_{D,\max} = 10^3 \sim 2\times 10^5" />: <Math tex="C_1=0.27, m=0.63" />)
      </p>
    ),
    given: [
      "Inline arrangement, N_L = 10 rows",
      "D = 0.02 m, S_T = S_L = 0.04 m",
      "u∞ = 8 m/s, T∞ = 20°C, Ts = 80°C",
      "Tf = 50°C: ν = 1.8 × 10⁻⁵ m²/s, k = 0.028 W/(m·K), Pr = 0.71",
      "Pr_s (at Ts) ≈ 0.70",
    ],
    find: "Re_D,max 및 h̄ [W/(m²·K)]",
    steps: [
      {
        label: "Step 1: 최대 유속 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">인라인 배열에서 최대 유속은 관 사이의 최소 유로 면적에서 발생합니다:</p>
            <div className="text-center py-2">
              <Math tex="u_{\max} = \frac{S_T}{S_T - D} \cdot u_\infty = \frac{0.04}{0.04 - 0.02} \times 8 = 2 \times 8 = 16 \text{ m/s}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 최대 유속 기준 Reynolds 수",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Re_{D,\max} = \frac{u_{\max} \cdot D}{\nu} = \frac{16 \times 0.02}{1.8 \times 10^{-5}} = 1.778 \times 10^4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: Zukauskas 상관식 적용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              <Math tex="10^3 < Re_{D,\max} < 2 \times 10^5" /> 범위에서 인라인 배열:
            </p>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = C_1 C_2 \, Re_{D,\max}^{m} \, Pr^{0.36} \left(\frac{Pr}{Pr_s}\right)^{1/4}" display />
            </div>
            <p className="text-gray-400 mb-2 mt-2">
              <Math tex="C_1 = 0.27" />, <Math tex="m = 0.63" />.{" "}
              <Math tex="N_L = 10" />이면 <Math tex="C_2 \approx 0.97" /> (열 수 보정계수).
            </p>
          </div>
        ),
      },
      {
        label: "Step 4: Nusselt 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Re_{D,\max}^{0.63} = (1.778 \times 10^4)^{0.63}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 10^{4 \times 0.63} \times 1.778^{0.63} = 10^{2.52} \times 1.465 = 331.1 \times 1.465 = 485.1" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 0.27 \times 0.97 \times 485.1 \times (0.71)^{0.36} \times (0.71/0.70)^{0.25}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.2619 \times 485.1 \times 0.893 \times 1.004 = 113.8" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 열전달계수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\bar{h} = \frac{\overline{Nu}_D \cdot k}{D} = \frac{113.8 \times 0.028}{0.02} = \frac{3.186}{0.02} = 159.3 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="Re_{D,\max} = 1.778 \times 10^4" display />
        <Math tex="\overline{Nu}_D \approx 113.8" display />
        <Math tex="\bar{h} \approx 159.3 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          인라인 배열에서 <Math tex="S_T/D = 2" />이면 최대 유속이 접근 유속의 2배가 됩니다.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Tube Bank - Staggered Arrangement",
    topic: "Tube Bank - Staggered",
    topicColor: "emerald",
    problem: (
      <p>
        문제 6과 동일한 조건에서 스태거드(엇갈림) 배열로 변경합니다. <Math tex="D = 0.02\text{ m}" />,{" "}
        <Math tex="S_T = S_L = 0.04\text{ m}" />. 스태거드 배열에서의 최대 유속, Reynolds 수,
        평균 Nusselt 수를 계산하고 인라인 결과와 비교하시오.
        (스태거드 <Math tex="Re_{D,\max} = 10^3 \sim 2\times 10^5" />: <Math tex="C_1 = 0.35(S_T/S_L)^{0.2}" />, <Math tex="m=0.60" />)
      </p>
    ),
    given: [
      "Staggered arrangement, N_L = 10 rows",
      "D = 0.02 m, S_T = S_L = 0.04 m",
      "u∞ = 8 m/s, T∞ = 20°C, Ts = 80°C",
      "Tf = 50°C: ν = 1.8 × 10⁻⁵ m²/s, k = 0.028 W/(m·K), Pr = 0.71, Pr_s ≈ 0.70",
    ],
    find: "Re_D,max 및 Nu_D, 인라인과 비교",
    steps: [
      {
        label: "Step 1: 스태거드 배열 최대 유속 확인",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              스태거드 배열에서는 횡방향 유로(A1)와 대각선 유로(A2)를 비교하여 더 좁은 곳에서 최대 유속이 발생합니다.
            </p>
            <div className="text-center py-2">
              <Math tex="A_1 = (S_T - D) = 0.04 - 0.02 = 0.02 \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="S_D = \sqrt{S_L^2 + (S_T/2)^2} = \sqrt{0.04^2 + 0.02^2} = \sqrt{0.002} = 0.04472 \text{ m}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="A_2 = 2(S_D - D) = 2(0.04472 - 0.02) = 0.04944 \text{ m}" display />
            </div>
            <p className="text-gray-400 mt-2">
              <Math tex="A_2 = 0.04944 > A_1 = 0.02" /> 이므로 최대 유속은 A1에서 발생합니다:
            </p>
          </div>
        ),
      },
      {
        label: "Step 2: 최대 유속 및 Reynolds 수",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="u_{\max} = \frac{S_T}{S_T - D} \times u_\infty = \frac{0.04}{0.02} \times 8 = 16 \text{ m/s}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Re_{D,\max} = \frac{16 \times 0.02}{1.8 \times 10^{-5}} = 1.778 \times 10^4" display />
            </div>
            <p className="text-gray-400 mt-2">이 경우 인라인과 동일한 Re 값입니다.</p>
          </div>
        ),
      },
      {
        label: "Step 3: 스태거드 상관식 적용",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              스태거드 배열 (<Math tex="10^3 < Re < 2 \times 10^5" />):
            </p>
            <div className="text-center py-2">
              <Math tex="C_1 = 0.35\left(\frac{S_T}{S_L}\right)^{0.2} = 0.35 \times (1.0)^{0.2} = 0.35, \quad m = 0.60" display />
            </div>
            <div className="text-center py-2">
              <Math tex="C_2 \approx 0.97 \;\;(N_L = 10)" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: Nusselt 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Re_{D,\max}^{0.60} = (1.778 \times 10^4)^{0.60} = 10^{2.4} \times 1.778^{0.60} = 251.2 \times 1.415 = 355.4" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 0.35 \times 0.97 \times 355.4 \times (0.71)^{0.36} \times (0.71/0.70)^{0.25}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.3395 \times 355.4 \times 0.893 \times 1.004 = 108.2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 인라인과 비교",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\bar{h}_{\text{staggered}} = \frac{108.2 \times 0.028}{0.02} = 151.5 \text{ W/(m}^2\text{·K)}" display />
            </div>
            <p className="text-gray-400 mt-2">비교 정리:</p>
            <div className="text-center py-2">
              <Math tex="\text{Inline: } \overline{Nu}_D = 113.8, \quad \bar{h} = 159.3 \text{ W/(m}^2\text{·K)}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\text{Staggered: } \overline{Nu}_D = 108.2, \quad \bar{h} = 151.5 \text{ W/(m}^2\text{·K)}" display />
            </div>
            <p className="text-gray-400 mt-2">
              이 특정 조건(<Math tex="S_T/S_L = 1" />)에서는 유사한 결과를 보입니다.
              일반적으로 스태거드 배열은 유동 혼합이 더 잘 되어 열전달이 향상되나,
              피치비에 따라 결과가 달라집니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\text{Staggered: } \overline{Nu}_D \approx 108.2, \quad \bar{h} \approx 151.5 \text{ W/(m}^2\text{·K)}" display />
        <Math tex="\text{Inline: } \overline{Nu}_D \approx 113.8, \quad \bar{h} \approx 159.3 \text{ W/(m}^2\text{·K)}" display />
        <p className="text-sm text-gray-400 mt-2">
          <Math tex="S_T/S_L = 1" /> 조건에서 인라인이 약간 높은 Nu를 보이지만,
          일반적으로 스태거드 배열이 열전달 성능이 우수합니다.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "Flat Plate with Constant Heat Flux",
    topic: "Flat Plate - Constant q''",
    topicColor: "orange",
    problem: (
      <p>
        평판에 일정 열유속 <Math tex="q'' = 500\text{ W/m}^2" />가 가해집니다. 공기 유속{" "}
        <Math tex="u_\infty = 5\text{ m/s}" />, <Math tex="T_\infty = 25°\text{C}" />.
        평판 길이 <Math tex="L = 0.5\text{ m}" />일 때, 후연(trailing edge, x = L)에서의
        표면 온도를 구하시오.
      </p>
    ),
    given: [
      "q'' = 500 W/m² (일정 열유속)",
      "u∞ = 5 m/s, T∞ = 25°C, L = 0.5 m",
      "Tf ≈ 35°C: ν = 1.65 × 10⁻⁵ m²/s",
      "k = 0.027 W/(m·K), Pr = 0.71",
    ],
    find: "x = L에서의 표면온도 Ts(L)",
    steps: [
      {
        label: "Step 1: Reynolds 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Re_L = \frac{u_\infty L}{\nu} = \frac{5 \times 0.5}{1.65 \times 10^{-5}} = 1.515 \times 10^5 < 5 \times 10^5 \quad (\text{층류})" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 일정 열유속 조건의 국소 Nusselt 수",
        content: (
          <div>
            <p className="text-gray-400 mb-2">일정 열유속 조건에서의 층류 국소 Nusselt 수:</p>
            <div className="text-center py-2">
              <Math tex="Nu_x = 0.453\,Re_x^{1/2}\,Pr^{1/3}" display />
            </div>
            <p className="text-gray-400 mt-2">
              (참고: 등온 조건에서는 계수가 0.332이지만, 일정 열유속에서는 0.453입니다.)
            </p>
          </div>
        ),
      },
      {
        label: "Step 3: x = L에서의 국소 Nusselt 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Nu_L = 0.453 \times (1.515 \times 10^5)^{0.5} \times (0.71)^{1/3}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.453 \times 389.2 \times 0.893 = 157.4" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 국소 열전달계수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="h_L = \frac{Nu_L \cdot k}{L} = \frac{157.4 \times 0.027}{0.5} = \frac{4.250}{0.5} = 8.50 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 후연에서의 표면온도",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              일정 열유속에서 <Math tex="q'' = h_x(T_s(x) - T_\infty)" />이므로:
            </p>
            <div className="text-center py-2">
              <Math tex="T_s(L) = T_\infty + \frac{q''}{h_L} = 25 + \frac{500}{8.50} = 25 + 58.8 = 83.8°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="T_s(L) \approx 83.8°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          일정 열유속에서는 국소 h가 x와 함께 감소하므로, 표면온도는 하류로 갈수록 증가합니다.
          후연에서 가장 높은 표면온도가 나타납니다.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Cooling of a Heated Wire",
    topic: "Cylinder - Wire Cooling",
    topicColor: "pink",
    problem: (
      <p>
        직경 <Math tex="D = 1\text{ mm}" />인 전선에 단위 길이당 <Math tex="q' = 30\text{ W/m}" />의
        전기 가열이 가해집니다. 공기 온도 <Math tex="T_\infty = 25°\text{C}" />, 유속{" "}
        <Math tex="u_\infty = 10\text{ m/s}" />일 때, Churchill-Bernstein 상관식을 이용하여
        전선 표면온도를 구하시오.
      </p>
    ),
    given: [
      "D = 1 mm = 0.001 m",
      "q' = 30 W/m (단위 길이당 발열)",
      "T∞ = 25°C, u∞ = 10 m/s",
      "ν = 1.6 × 10⁻⁵ m²/s, k = 0.026 W/(m·K), Pr = 0.71",
    ],
    find: "전선 표면온도 Ts [°C]",
    steps: [
      {
        label: "Step 1: Reynolds 수 계산",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="Re_D = \frac{u_\infty D}{\nu} = \frac{10 \times 0.001}{1.6 \times 10^{-5}} = 625" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: Churchill-Bernstein 상관식",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 0.3 + \frac{0.62\,Re_D^{1/2}\,Pr^{1/3}}{[1+(0.4/Pr)^{2/3}]^{1/4}}\left[1+\left(\frac{Re_D}{282{,}000}\right)^{5/8}\right]^{4/5}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 각 항 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">분자:</p>
            <div className="text-center py-2">
              <Math tex="0.62 \times 625^{0.5} \times 0.71^{1/3} = 0.62 \times 25.0 \times 0.893 = 13.84" display />
            </div>
            <p className="text-gray-400 mb-2 mt-2">분모:</p>
            <div className="text-center py-2">
              <Math tex="[1 + (0.4/0.71)^{2/3}]^{1/4} = [1 + 0.688]^{0.25} = 1.140" display />
            </div>
            <p className="text-gray-400 mb-2 mt-2">보정항:</p>
            <div className="text-center py-2">
              <Math tex="\left[1 + \left(\frac{625}{282{,}000}\right)^{5/8}\right]^{4/5} = [1 + (0.00222)^{0.625}]^{0.8} = [1 + 0.0159]^{0.8} = 1.013" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: Nusselt 수 및 열전달계수",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 0.3 + \frac{13.84}{1.140} \times 1.013 = 0.3 + 12.14 \times 1.013 = 0.3 + 12.30 = 12.6" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\bar{h} = \frac{\overline{Nu}_D \cdot k}{D} = \frac{12.6 \times 0.026}{0.001} = 327.6 \text{ W/(m}^2\text{·K)}" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 표면온도 계산",
        content: (
          <div>
            <p className="text-gray-400 mb-2">에너지 균형: <Math tex="q' = \bar{h} \pi D (T_s - T_\infty)" /></p>
            <div className="text-center py-2">
              <Math tex="T_s = T_\infty + \frac{q'}{\bar{h}\,\pi D} = 25 + \frac{30}{327.6 \times \pi \times 0.001}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 25 + \frac{30}{1.029} = 25 + 29.2 = 54.2°\text{C}" display />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="T_s \approx 54.2°\text{C}" display />
        <p className="text-sm text-gray-400 mt-2">
          작은 직경의 전선은 높은 <Math tex="\bar{h}" />를 가지므로 비교적 낮은 표면온도를 유지합니다.
          실제 설계에서는 자연대류 조건도 함께 검토해야 합니다.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "Comparison of Geometries",
    topic: "Geometry Comparison",
    topicColor: "teal",
    problem: (
      <p>
        동일한 <Math tex="Re = 10^4" />, <Math tex="Pr = 0.71" /> 조건에서 세 가지 형상의
        Nusselt 수를 비교하시오: (1) 평판 (국소, 위치 x에서), (2) 원통 횡류 (Churchill-Bernstein),
        (3) 구 (Whitaker, <Math tex="\mu/\mu_s = 1" />).
        어느 형상에서 가장 높은 열전달계수를 기대할 수 있는지 분석하시오.
      </p>
    ),
    given: [
      "Re = 10⁴ (모든 형상 동일)",
      "Pr = 0.71",
      "μ/μs = 1 (Whitaker 보정 없음)",
    ],
    find: "각 형상의 Nu 및 비교",
    steps: [
      {
        label: "Step 1: 평판 - 국소 Nusselt 수",
        content: (
          <div>
            <p className="text-gray-400 mb-2">등온 평판 층류 국소 상관식:</p>
            <div className="text-center py-2">
              <Math tex="Nu_x = 0.332\,Re_x^{1/2}\,Pr^{1/3} = 0.332 \times (10^4)^{0.5} \times (0.71)^{1/3}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="= 0.332 \times 100 \times 0.893 = 29.6" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 2: 원통 횡류 - Churchill-Bernstein",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 0.3 + \frac{0.62 \times 100 \times 0.893}{[1+(0.4/0.71)^{2/3}]^{1/4}}\left[1+\left(\frac{10^4}{282000}\right)^{5/8}\right]^{4/5}" display />
            </div>
            <p className="text-gray-400 mb-2 mt-2">분자: <Math tex="0.62 \times 100 \times 0.893 = 55.37" /></p>
            <p className="text-gray-400 mb-2">분모: <Math tex="[1.688]^{0.25} = 1.140" /></p>
            <p className="text-gray-400 mb-2">
              보정항: <Math tex="[1 + (0.0355)^{0.625}]^{0.8} = [1 + 0.0998]^{0.8} = 1.079" />
            </p>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 0.3 + \frac{55.37}{1.140} \times 1.079 = 0.3 + 48.57 \times 1.079 = 0.3 + 52.4 = 52.7" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 3: 구 - Whitaker 상관식",
        content: (
          <div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 2 + (0.4 \times Re^{1/2} + 0.06 \times Re^{2/3})\,Pr^{0.4}\,(\mu/\mu_s)^{1/4}" display />
            </div>
            <div className="text-center py-2">
              <Math tex="0.4 \times 100 + 0.06 \times (10^4)^{2/3} = 40 + 0.06 \times 464.2 = 40 + 27.85 = 67.85" display />
            </div>
            <div className="text-center py-2">
              <Math tex="Pr^{0.4} = (0.71)^{0.4} = 0.872" display />
            </div>
            <div className="text-center py-2">
              <Math tex="\overline{Nu}_D = 2 + 67.85 \times 0.872 \times 1.0 = 2 + 59.2 = 61.2" display />
            </div>
          </div>
        ),
      },
      {
        label: "Step 4: 비교 요약",
        content: (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300 mt-2">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-2 px-3">형상</th>
                    <th className="text-center py-2 px-3">Nu</th>
                    <th className="text-center py-2 px-3">상대값</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-3">평판 (국소)</td>
                    <td className="text-center py-2 px-3">29.6</td>
                    <td className="text-center py-2 px-3">1.00</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2 px-3">원통 (횡류)</td>
                    <td className="text-center py-2 px-3">52.7</td>
                    <td className="text-center py-2 px-3">1.78</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">구</td>
                    <td className="text-center py-2 px-3">61.2</td>
                    <td className="text-center py-2 px-3">2.07</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        label: "Step 5: 물리적 해석",
        content: (
          <div>
            <p className="text-gray-400 mb-2">
              동일 Re에서 구 &gt; 원통 &gt; 평판 순으로 Nu가 높습니다. 이는 다음과 같은 이유 때문입니다:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-teal-400">1.</span>
                <span>3차원 형상(구)은 유동 분리와 후류 혼합이 더 강하여 열전달 증진</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">2.</span>
                <span>원통은 2차원 분리 유동으로 평판보다 혼합이 활발</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">3.</span>
                <span>평판은 부착 유동으로 경계층이 안정적이어서 열전달이 가장 낮음</span>
              </li>
            </ul>
            <p className="text-gray-400 mt-3">
              단, 동일 <Math tex="\bar{h}" />를 비교하려면 특성길이(L vs D)가 다르므로 주의가 필요합니다.
            </p>
          </div>
        ),
      },
    ],
    answer: (
      <div className="text-center space-y-2">
        <Math tex="\text{Flat plate (local): } Nu_x = 29.6" display />
        <Math tex="\text{Cylinder (crossflow): } \overline{Nu}_D = 52.7" display />
        <Math tex="\text{Sphere: } \overline{Nu}_D = 61.2" display />
        <p className="text-sm text-gray-400 mt-2">
          동일 Re, Pr에서 구가 가장 높은 Nu를 보입니다. 유동 분리와 3차원 혼합 효과가 열전달을
          증진시키기 때문입니다.
        </p>
      </div>
    ),
  },
];

const tips = [
  { title: "1. 유동 상태 확인", description: "Re 계산 후 층류/난류/혼합 여부를 판단하세요. 평판: Re_cr=5\u00d710\u2075." },
  { title: "2. 적절한 상관식 선택", description: "형상(평판/원통/구/관군)과 Re 범위에 맞는 상관식을 사용하세요." },
  { title: "3. 물성치 평가 온도", description: "대부분 막온도 Tf=(Ts+T\u221e)/2에서 평가. 구(Whitaker)는 T\u221e에서 평가 후 \u03bc/\u03bcs 보정." },
  { title: "4. 특성길이 주의", description: "평판: L(길이), 원통/구: D(직경), 관군: D(관 외경)." },
];

export default function PracticeProblems() {
  return <PracticeSection weekNumber={10} problems={problems} tips={tips} />;
}

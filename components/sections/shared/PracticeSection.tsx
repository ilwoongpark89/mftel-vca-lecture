"use client";

import { motion } from "framer-motion";
import ProblemCard, { type Problem } from "./ProblemCard";

export type { Problem, SolutionStep } from "./ProblemCard";

interface Tip {
  title: string;
  description: string;
}

interface PracticeSectionProps {
  weekNumber: number;
  problems: Problem[];
  tips?: Tip[];
}

const defaultTips: Tip[] = [
  {
    title: "1. 문제 유형 파악",
    description: "정상상태 vs 비정상, 열생성 유무, 좌표계(평판/원통/구)를 먼저 확인하세요.",
  },
  {
    title: "2. 지배 방정식 선택",
    description: "조건에 맞는 단순화된 열방정식을 선택합니다 (Laplace, Poisson 등).",
  },
  {
    title: "3. 경계조건 적용",
    description: "Type 1(온도), Type 2(열유속), Type 3(대류) 중 적절한 조건을 적용하세요.",
  },
  {
    title: "4. 단위 확인",
    description: "최종 답의 단위가 맞는지 항상 확인하세요. 차원 분석은 오류를 방지합니다.",
  },
];

export default function PracticeSection({ weekNumber, problems, tips }: PracticeSectionProps) {
  const activeTips = tips || defaultTips;

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Practice
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Practice Problems
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Week {weekNumber} 핵심 개념을 적용하는 연습문제입니다. &quot;Solution&quot; 버튼을 클릭하면 단계별로 풀이가 나타납니다.
          </p>
        </motion.div>

        {/* Problems */}
        <div className="space-y-8">
          {problems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </div>

        {/* Summary Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl bg-slate-900/50 border border-slate-700"
        >
          <h3 className="text-lg font-bold text-white mb-4">Problem-Solving Tips</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {activeTips.map((tip, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700">
                <h4 className="text-sm font-bold text-purple-400 mb-2">{tip.title}</h4>
                <p className="text-sm text-gray-400">{tip.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

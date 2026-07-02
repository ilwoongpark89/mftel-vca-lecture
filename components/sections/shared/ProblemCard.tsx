"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface SolutionStep {
  label: string;
  content: React.ReactNode;
}

export interface Problem {
  id: number;
  title: string;
  topic: string;
  topicColor: string;
  problem: React.ReactNode;
  given: string[];
  find: string;
  steps: SolutionStep[];
  answer: React.ReactNode;
}

const colorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  red: {
    border: "border-red-500/30",
    bg: "from-red-500/5",
    text: "text-red-400",
    badge: "bg-red-500/10 border-red-500/20",
  },
  green: {
    border: "border-green-500/30",
    bg: "from-green-500/5",
    text: "text-green-400",
    badge: "bg-green-500/10 border-green-500/20",
  },
  blue: {
    border: "border-blue-500/30",
    bg: "from-blue-500/5",
    text: "text-blue-400",
    badge: "bg-blue-500/10 border-blue-500/20",
  },
  amber: {
    border: "border-amber-500/30",
    bg: "from-amber-500/5",
    text: "text-amber-400",
    badge: "bg-amber-500/10 border-amber-500/20",
  },
  cyan: {
    border: "border-cyan-500/30",
    bg: "from-cyan-500/5",
    text: "text-cyan-400",
    badge: "bg-cyan-500/10 border-cyan-500/20",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "from-purple-500/5",
    text: "text-purple-400",
    badge: "bg-purple-500/10 border-purple-500/20",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "from-emerald-500/5",
    text: "text-emerald-400",
    badge: "bg-emerald-500/10 border-emerald-500/20",
  },
  orange: {
    border: "border-orange-500/30",
    bg: "from-orange-500/5",
    text: "text-orange-400",
    badge: "bg-orange-500/10 border-orange-500/20",
  },
  pink: {
    border: "border-pink-500/30",
    bg: "from-pink-500/5",
    text: "text-pink-400",
    badge: "bg-pink-500/10 border-pink-500/20",
  },
  teal: {
    border: "border-teal-500/30",
    bg: "from-teal-500/5",
    text: "text-teal-400",
    badge: "bg-teal-500/10 border-teal-500/20",
  },
};

export default function ProblemCard({ problem }: { problem: Problem }) {
  const [showSolution, setShowSolution] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(0);

  const handleShowSolution = () => {
    if (!showSolution) {
      setShowSolution(true);
      setVisibleSteps(1);
    } else if (visibleSteps < problem.steps.length) {
      setVisibleSteps(visibleSteps + 1);
    }
  };

  const handleReset = () => {
    setShowSolution(false);
    setVisibleSteps(0);
  };

  const colors = colorMap[problem.topicColor] || colorMap.red;
  const allStepsShown = visibleSteps >= problem.steps.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.bg} to-slate-950 p-6 md:p-8`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className={`w-10 h-10 rounded-xl bg-slate-950/80 border ${colors.border} flex items-center justify-center font-bold ${colors.text}`}>
            {problem.id}
          </span>
          <div>
            <h3 className="text-lg font-bold text-white">{problem.title}</h3>
            <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${colors.badge} ${colors.text} border mt-1`}>
              {problem.topic}
            </span>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
        <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">Problem</h4>
        <div className="text-gray-300 leading-relaxed">{problem.problem}</div>
      </div>

      {/* Given & Find */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
          <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Given</h4>
          <ul className="space-y-1">
            {problem.given.map((item, i) => (
              <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                <span className={colors.text}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
          <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Find</h4>
          <p className="text-gray-300 font-medium">{problem.find}</p>
        </div>
      </div>

      {/* Solution Button */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={handleShowSolution}
          disabled={allStepsShown}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
            allStepsShown
              ? "bg-slate-800/50 text-gray-500 cursor-not-allowed"
              : `${colors.badge} ${colors.text} hover:brightness-125`
          }`}
        >
          {!showSolution
            ? "Solution"
            : allStepsShown
            ? "All Steps Shown"
            : `Next Step (${visibleSteps}/${problem.steps.length})`}
        </button>
        {showSolution && (
          <button
            onClick={handleReset}
            className="px-4 py-2.5 rounded-xl font-medium bg-slate-800/50 border border-slate-700 text-gray-400 hover:bg-slate-800 hover:text-gray-300 transition-all"
          >
            Reset
          </button>
        )}
      </div>

      {/* Solution Steps */}
      <AnimatePresence>
        {showSolution && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3"
          >
            {problem.steps.slice(0, visibleSteps).map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-6 h-6 rounded-full bg-slate-950 border ${colors.border} flex items-center justify-center text-xs font-bold ${colors.text}`}>
                    {i + 1}
                  </span>
                  <h5 className={`text-sm font-medium ${colors.text}`}>{step.label}</h5>
                </div>
                <div className="pl-9">{step.content}</div>
              </motion.div>
            ))}

            {/* Final Answer */}
            {allStepsShown && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-5 rounded-xl bg-gradient-to-br ${colors.bg} to-slate-950 border-2 ${colors.border}`}
              >
                <h5 className={`text-sm font-mono ${colors.text} uppercase tracking-wider mb-3 text-center`}>
                  Final Answer
                </h5>
                {problem.answer}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

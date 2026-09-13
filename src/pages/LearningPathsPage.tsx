import React, { useState } from 'react';
import { 
  Compass, ArrowRight, CheckCircle2, TrendingUp, 
  Clock, Award, Layers, Sparkles, BookOpen 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LEARNING_PATHS } from '../data/mockData';

export const LearningPathsPage: React.FC = () => {
  const { navigateTo } = useApp();
  const [selectedPathId, setSelectedPathId] = useState<string>(LEARNING_PATHS[0].id);

  const activePath = LEARNING_PATHS.find(p => p.id === selectedPathId) || LEARNING_PATHS[0];

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>CAREER ARCHITECTURE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Career Learning Paths
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Multi-phase roadmaps that guide you from beginner fundamentals to enterprise leadership roles with structured capstone milestones.
          </p>
        </div>

        {/* Path Selection Horizontal Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {LEARNING_PATHS.map(path => {
            const isSelected = path.id === selectedPathId;
            return (
              <button
                key={path.id}
                onClick={() => setSelectedPathId(path.id)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-950/50 border-cyan-400 text-white shadow-xl shadow-cyan-500/10'
                    : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  {path.duration}
                </span>
                <h4 className="text-xs sm:text-sm font-bold truncate">{path.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1 font-mono text-emerald-400">{path.salaryRange}</p>
              </button>
            );
          })}
        </div>

        {/* Active Path Spotlight Display */}
        <div className="rounded-3xl liquid-glass border border-cyan-500/30 p-6 sm:p-10 shadow-2xl space-y-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-semibold bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  Target Role: {activePath.role}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Starting Level: {activePath.startingLevel}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                {activePath.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {activePath.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 text-left">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Projected Compensation</span>
                <span className="text-lg font-extrabold text-emerald-400 font-mono">{activePath.salaryRange}</span>
              </div>
              <button
                onClick={() => navigateTo('/courses')}
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 font-bold text-xs text-white shadow-xl shadow-cyan-500/25 cursor-pointer flex items-center gap-2 whitespace-nowrap"
              >
                <span>Start Learning This Path</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Skills Required Grid */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 font-semibold">
              Competencies & Technologies Mastered:
            </h4>
            <div className="flex flex-wrap gap-2">
              {activePath.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 border border-cyan-500/20 text-xs font-mono text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Roadmap Stepper Timeline */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6 font-semibold">
              Phase-by-Phase Roadmap Timeline:
            </h4>

            <div className="space-y-4">
              {activePath.milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-cyan-500/30">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-cyan-400 font-semibold">{m.phase}</span>
                        <span className="text-xs text-slate-500">• {m.duration}</span>
                      </div>
                      <h4 className="text-base font-bold text-white mt-0.5">{m.title}</h4>
                      <p className="text-xs text-slate-400 mt-1">{m.description || m.topics?.join(' • ')}</p>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      Portfolio Milestone
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

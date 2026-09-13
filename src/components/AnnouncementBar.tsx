import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AnnouncementBar: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="relative z-50 bg-gradient-to-r from-blue-950/90 via-slate-900/90 to-purple-950/90 border-b border-cyan-500/20 px-4 py-2 text-xs font-medium text-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-cyan-300 font-semibold uppercase tracking-wider text-[10px]">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            Fall 2026 Cohorts Open
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="truncate text-slate-300">
            Build skills. Earn certifications. Accelerate your career with PROVISENT EDUTECH.
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 rounded-full">
            <ShieldCheck className="w-3 h-3" />
            <span>Govt. Recognized EdTech</span>
          </div>
          <button
            onClick={() => navigateTo('/bootcamps')}
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors cursor-pointer group"
          >
            <span>Explore Cohorts</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

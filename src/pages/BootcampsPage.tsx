import React, { useState } from 'react';
import { 
  Zap, Calendar, Clock, Users, CheckCircle2, 
  Download, ArrowRight, Sparkles, ShieldCheck, Phone 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BOOTCAMPS } from '../data/mockData';

export const BootcampsPage: React.FC = () => {
  const { navigateTo, addToast } = useApp();
  const [selectedBootcamp, setSelectedBootcamp] = useState(BOOTCAMPS[0]);

  const handleDownloadBrochure = (title: string) => {
    addToast('Brochure Dispatched', `The detailed 2026 syllabus brochure for ${title} has been downloaded.`, 'success');
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Zap className="w-4 h-4" />
            <span>COHORT-BASED IMMERSION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Live Accelerator Bootcamps
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Hyper-focused, synchronous cohort sprints engineered with daily live code teardowns, weekend hackathons, and dedicated hiring referrals.
          </p>
        </div>

        {/* Bootcamps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {BOOTCAMPS.map(bootcamp => (
            <div
              key={bootcamp.id}
              className="p-6 sm:p-8 rounded-3xl liquid-glass-card border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 font-mono text-xs">
                  <span className="text-cyan-400 font-bold px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                    {bootcamp.duration}
                  </span>
                  <span className="text-rose-400 bg-rose-950/50 px-2.5 py-1 rounded-full border border-rose-500/20 font-semibold">
                    {bootcamp.seatsLeft} Cohort Seats Available
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {bootcamp.title}
                </h2>

                <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>Next Cohort Begins: {bootcamp.batchDate}</span>
                </div>

                <p className="text-xs text-slate-400 mt-1 font-mono">{bootcamp.schedule}</p>

                <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                  {bootcamp.description || bootcamp.curriculumHighlights?.[0] || 'Accelerate your career with intense hands-on mentorship and project-based learning.'}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-2 pt-4 mt-4 border-t border-white/10 text-xs text-slate-300">
                  {bootcamp.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-2xl font-black text-white font-mono">
                      ₹{bootcamp.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-slate-500 line-through font-mono ml-2">
                      ₹{bootcamp.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono font-semibold">
                    Flexible No-Cost EMI Available
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleDownloadBrochure(bootcamp.title)}
                    className="py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Brochure</span>
                  </button>

                  <button
                    onClick={() => navigateTo('/contact')}
                    className="py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Apply for Cohort</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="p-8 rounded-3xl bg-slate-950/80 border border-white/10 text-center max-w-3xl mx-auto space-y-3">
          <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto" />
          <h3 className="text-xl font-bold text-white">Need Personal Counseling?</h3>
          <p className="text-xs text-slate-300">
            Schedule a 15-minute diagnostic call with an engineering counselor to determine the best track for your experience level.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('/contact')}
              className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 cursor-pointer"
            >
              Request Call Back
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Briefcase, MapPin, Clock, ArrowRight, 
  CheckCircle2, Sparkles, Building2, Send, X 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CareersPage: React.FC = () => {
  const { addToast } = useApp();
  const [appliedRole, setAppliedRole] = useState<string | null>(null);

  const jobs = [
    {
      id: 'j-1',
      title: 'Senior Full Stack Curriculum Architect',
      dept: 'Engineering & Pedagogy',
      type: 'Full-Time (Remote / Hybrid)',
      location: 'India / Global Remote',
      desc: 'Design and instruct tier-1 curriculum in React 19, TypeScript, Next.js, and distributed microservices.'
    },
    {
      id: 'j-2',
      title: 'AI / Machine Learning Research Lead',
      dept: 'AI & Data Sciences',
      type: 'Full-Time',
      location: 'Chennai / Hybrid',
      desc: 'Lead practical LLM fine-tuning, RAG architecture, and agentic workflows development for our accelerator cohorts.'
    },
    {
      id: 'j-3',
      title: 'Executive Career & Placement Coach',
      dept: 'Learner Outcomes',
      type: 'Full-Time',
      location: 'Remote',
      desc: 'Mentor ambitious learners through system design mock interviews, portfolio audits, and offer negotiations.'
    },
    {
      id: 'j-4',
      title: 'Enterprise Solutions Engineer (B2B)',
      dept: 'Corporate Alliances',
      type: 'Full-Time',
      location: 'Chennai / Bangalore',
      desc: 'Partner with CTOs and engineering VPs to architect bespoke enterprise upskilling programs and skill benchmarks.'
    }
  ];

  const handleApply = (title: string) => {
    setAppliedRole(title);
    addToast('Application Initiated', `Opening application portal for ${title}.`, 'info');
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 p-1 px-3 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-4 h-4" />
            <span>JOIN OUR CORE TEAM</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Careers at PROVISENT EDUTECH
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Shape the future of global technology education. Help millions of ambitious learners master world-class capabilities and transform their lives.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Global Remote Culture', desc: 'Work with autonomy from anywhere with flexible synchronous overlap windows.' },
            { title: 'Continuous Learning Stipend', desc: 'Generous annual budget for books, conferences, certifications, and hardware.' },
            { title: 'Direct Student Impact', desc: 'Watch your curricula and mentorship launch careers across the world’s top tech teams.' }
          ].map((b, i) => (
            <div key={i} className="p-6 rounded-3xl liquid-glass border border-white/10 space-y-2">
              <CheckCircle2 className="w-6 h-6 text-cyan-400 mb-2" />
              <h3 className="text-base font-bold text-white">{b.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Open Positions List */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white mb-6">Open High-Impact Roles</h2>
          
          <div className="space-y-4">
            {jobs.map(job => (
              <div
                key={job.id}
                className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors"
              >
                <div className="space-y-1 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-cyan-400">
                    <span>{job.dept}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{job.desc}</p>
                </div>

                <button
                  onClick={() => handleApply(job.title)}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 whitespace-nowrap cursor-pointer"
                >
                  Apply for Role →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Talent Inquiries */}
        <div className="p-8 rounded-3xl bg-slate-950/80 border border-white/10 text-center space-y-3 max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-white">Don’t see your exact specialization?</h3>
          <p className="text-xs text-slate-300">
            We are always eager to meet exceptional educators and curriculum authors. Send your CV and portfolio to our talent team at:
          </p>
          <p className="text-sm font-bold text-cyan-400 font-mono">
            <a href="mailto:hr@provisent.com">hr@provisent.com</a>
          </p>
        </div>

      </div>
    </div>
  );
};

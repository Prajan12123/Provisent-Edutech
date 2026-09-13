import React, { useState } from 'react';
import { 
  Building2, TrendingUp, Award, CheckCircle2, 
  Search, ShieldCheck, ArrowUpRight, Sparkles 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface PlacementRecord {
  id: string;
  name: string;
  avatar: string;
  previousRole: string;
  newRole: string;
  company: string;
  packageCtc: string;
  hikePercent: string;
  certId: string;
  domain: 'ai' | 'cloud' | 'fullstack' | 'design';
  placedDaysAgo: number;
}

const RECENT_PLACEMENTS: PlacementRecord[] = [
  {
    id: 'p-1',
    name: 'Arun K. Sundaram',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    previousRole: 'QA Automation Tester (₹4.2 LPA)',
    newRole: 'Distributed Systems SRE',
    company: 'Zomato Core Infrastructure',
    packageCtc: '₹22.5 LPA',
    hikePercent: '+435%',
    certId: 'PROV-2026-SYS-0881',
    domain: 'cloud',
    placedDaysAgo: 2
  },
  {
    id: 'p-2',
    name: 'Divya S. Ramanathan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    previousRole: 'Junior Frontend Dev (₹5.5 LPA)',
    newRole: 'Autonomous AI Agent Engineer',
    company: 'Microsoft AI Cloud Partner',
    packageCtc: '₹31.0 LPA',
    hikePercent: '+460%',
    certId: 'PROV-2026-PYAI-0104',
    domain: 'ai',
    placedDaysAgo: 4
  },
  {
    id: 'p-3',
    name: 'Karthik Raja',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    previousRole: 'Systems Support Engineer (₹3.8 LPA)',
    newRole: 'Full Stack Systems Architect',
    company: 'Razorpay Banking Gateway',
    packageCtc: '₹24.0 LPA',
    hikePercent: '+530%',
    certId: 'PROV-2026-FSD-0412',
    domain: 'fullstack',
    placedDaysAgo: 6
  },
  {
    id: 'p-4',
    name: 'Sneha Mukherjee',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    previousRole: 'UI Designer (₹6.0 LPA)',
    newRole: 'Design Systems Lead Architect',
    company: 'Swiggy Design Platform',
    packageCtc: '₹26.5 LPA',
    hikePercent: '+340%',
    certId: 'PROV-2026-DSGN-0199',
    domain: 'design',
    placedDaysAgo: 8
  },
  {
    id: 'p-5',
    name: 'Vignesh Balaji',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80',
    previousRole: 'College Graduate (Fresher)',
    newRole: 'Cloud Native Go/Rust Engineer',
    company: 'ThoughtWorks Systems Pod',
    packageCtc: '₹18.0 LPA',
    hikePercent: 'Premier Tier-1 Offer',
    certId: 'PROV-2026-KRNL-0552',
    domain: 'cloud',
    placedDaysAgo: 10
  }
];

export const AlumniPlacementTicker: React.FC = () => {
  const { navigateTo } = useApp();
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [activeRecordIndex, setActiveRecordIndex] = useState<number>(0);

  const filteredPlacements = selectedDomain === 'all'
    ? RECENT_PLACEMENTS
    : RECENT_PLACEMENTS.filter(p => p.domain === selectedDomain);

  const activeRecord = filteredPlacements[activeRecordIndex % filteredPlacements.length] || RECENT_PLACEMENTS[0];

  return (
    <section className="relative py-8 bg-slate-950/80 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ticker Header Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-bold uppercase tracking-wider text-[10px]">VERIFIED HIRING TELEMETRY</span>
            </div>
            <span className="text-xs text-slate-400 hidden sm:inline font-mono">
              Live audit from the Provisent Placement Syndicate (180+ Enterprise Hiring Desk)
            </span>
          </div>

          {/* Domain Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
            {[
              { id: 'all', label: 'All Specializations' },
              { id: 'cloud', label: 'Systems & Cloud SRE' },
              { id: 'ai', label: 'AI & Machine Learning' },
              { id: 'fullstack', label: 'Full Stack Architecture' },
              { id: 'design', label: 'Design Systems' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedDomain(tab.id);
                  setActiveRecordIndex(0);
                }}
                className={`px-3 py-1 rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                  selectedDomain === tab.id
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                    : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Placement Cards Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 items-center">
          
          {/* Left: Featured Spotlight Card */}
          <div className="md:col-span-8 lg:col-span-8 p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900 to-slate-950 border border-cyan-500/30 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={activeRecord.avatar}
                  alt={activeRecord.name}
                  className="w-14 h-14 rounded-2xl object-cover border border-cyan-400/60 shadow-lg"
                />
                <span className="absolute -bottom-1 -right-1 p-1 rounded-md bg-emerald-500 text-slate-950 shadow-md">
                  <CheckCircle2 className="w-3 h-3 text-slate-950 stroke-[3]" />
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white tracking-tight">{activeRecord.name}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                    {activeRecord.placedDaysAgo} days ago
                  </span>
                </div>
                <p className="text-xs font-bold text-cyan-400 mt-0.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activeRecord.newRole}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-300 font-normal">{activeRecord.company}</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-1 font-mono">
                  Transition: <span className="line-through text-slate-500">{activeRecord.previousRole}</span>
                </p>
              </div>
            </div>

            {/* Compensation Metrics */}
            <div className="flex sm:flex-col items-baseline sm:items-end justify-between w-full sm:w-auto gap-2 border-t sm:border-t-0 border-white/10 pt-3 sm:pt-0">
              <div className="text-left sm:text-right">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Verified CTC Package</span>
                <span className="text-lg sm:text-xl font-black text-emerald-400 font-mono">
                  {activeRecord.packageCtc}
                </span>
              </div>
              <span className="text-[11px] font-mono font-bold text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30">
                {activeRecord.hikePercent}
              </span>
            </div>
          </div>

          {/* Right: Quick Ledger Verify CTA & Record Carousel */}
          <div className="md:col-span-4 lg:col-span-4 p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col justify-between space-y-3 font-mono">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>On-Chain Credential:</span>
              </span>
              <span className="text-cyan-300 font-bold">{activeRecord.certId}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => navigateTo('/verify-certificate')}
                className="flex-1 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Audit Certificate</span>
              </button>

              <button
                onClick={() => setActiveRecordIndex(prev => prev + 1)}
                className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs border border-white/10 transition-colors cursor-pointer"
                title="Next Alumni Record"
              >
                Next &rarr;
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

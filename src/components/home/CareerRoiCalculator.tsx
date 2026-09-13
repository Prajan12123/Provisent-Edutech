import React, { useState } from 'react';
import { 
  Calculator, TrendingUp, DollarSign, Clock, 
  ArrowRight, CheckCircle2, ShieldCheck, Sparkles, 
  BarChart3, Zap, FileText, ChevronRight 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface StartingProfile {
  id: string;
  label: string;
  baselineCtc: number; // in LPA
  subtext: string;
}

interface TargetTrack {
  id: string;
  title: string;
  expectedCtc: number; // in LPA
  topHike: string;
  capstones: string[];
  hiringPartners: string[];
}

const STARTING_PROFILES: StartingProfile[] = [
  { id: 'fresher', label: 'College Graduate / Fresher', baselineCtc: 3.5, subtext: 'Tier-2/3 campus baseline' },
  { id: 'qa_support', label: 'Manual QA / Tech Support', baselineCtc: 4.8, subtext: 'Service company plateau' },
  { id: 'junior_dev', label: 'Junior Web Dev (1-2 YOE)', baselineCtc: 6.5, subtext: 'React / Node basics' },
  { id: 'mid_dev', label: 'Mid Developer (3-5 YOE)', baselineCtc: 11.0, subtext: 'Seeking Staff/Lead jump' }
];

const TARGET_TRACKS: TargetTrack[] = [
  {
    id: 'ai_agents',
    title: 'Autonomous AI Agent & LLM Systems Architect',
    expectedCtc: 28.5,
    topHike: '+490%',
    capstones: [
      'Multi-Agent LangGraph Swarm with AST Code Tools',
      'Hierarchical Hybrid Vector RAG with Self-Correction',
      'Zero-Latency Streaming Voice Agent on WebRTC'
    ],
    hiringPartners: ['Microsoft AI Partner', 'Cognizant AI Labs', 'Zomato AI Pod']
  },
  {
    id: 'fullstack_systems',
    title: 'Full-Stack Systems & Distributed Architecture',
    expectedCtc: 22.0,
    topHike: '+410%',
    capstones: [
      'Distributed Raft Consensus Key-Value Store in Rust',
      'High-Concurrency Banking Event Broker with Kafka',
      'React 19 Zero-Bundle Server Components Platform'
    ],
    hiringPartners: ['Razorpay', 'Swiggy Infrastructure', 'ThoughtWorks']
  },
  {
    id: 'cloud_sre',
    title: 'Cloud-Native Infrastructure & eBPF SRE',
    expectedCtc: 25.0,
    topHike: '+450%',
    capstones: [
      'Kernel-level eBPF Network Latency Tracer',
      'Multi-Region Kubernetes Failover Orchestrator',
      'Terraform GitOps Engine with Zero-Trust IAM'
    ],
    hiringPartners: ['AWS Partner Network', 'Paytm Core Cloud', 'Flipkart SRE']
  },
  {
    id: 'rust_hft',
    title: 'High-Frequency Systems & Rust Engine Engineering',
    expectedCtc: 32.0,
    topHike: '+580%',
    capstones: [
      'Lock-Free Financial Order Book in C++20/Rust',
      'Zero-Copy Cryptographic Block Verification Pipeline',
      'Custom L4 UDP Network Packet Filter'
    ],
    hiringPartners: ['Tower Research Pod', 'Crypto Liquidity Desk', 'Fintech Core']
  }
];

export const CareerRoiCalculator: React.FC = () => {
  const { navigateTo } = useApp();
  const [selectedProfileId, setSelectedProfileId] = useState<string>('junior_dev');
  const [selectedTrackId, setSelectedTrackId] = useState<string>('ai_agents');
  const [commitmentHours, setCommitmentHours] = useState<number>(18);

  const activeProfile = STARTING_PROFILES.find(p => p.id === selectedProfileId) || STARTING_PROFILES[2];
  const activeTrack = TARGET_TRACKS.find(t => t.id === selectedTrackId) || TARGET_TRACKS[0];

  // Dynamic calculations
  const baselineSalary = activeProfile.baselineCtc;
  const targetSalary = activeTrack.expectedCtc;
  const annualGainLakhs = Math.max(0, targetSalary - baselineSalary);
  const percentageHike = Math.round(((targetSalary - baselineSalary) / baselineSalary) * 100);

  // Provisent tuition estimate (~₹45,000 to ₹75,000 approx)
  const averageTuitionLakhs = 0.55; 
  const breakEvenDays = Math.round((averageTuitionLakhs / (annualGainLakhs / 365)));

  // 3-Year wealth accumulation difference:
  // With typical 7% appraisal on baseline vs. jumping to new tier with 15% CAGR
  const baseline3Years = baselineSalary + (baselineSalary * 1.07) + (baselineSalary * 1.14);
  const provisent3Years = targetSalary + (targetSalary * 1.15) + (targetSalary * 1.32);
  const wealthDeltaLakhs = Math.round(provisent3Years - baseline3Years);

  // Estimated graduation weeks based on hours per week
  const estimatedWeeks = commitmentHours >= 20 ? 16 : commitmentHours >= 14 ? 22 : 28;

  return (
    <section className="relative py-24 bg-[#080B12] border-t border-white/10 overflow-hidden" id="roi-calculator">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>REAL-TIME CAREER ACCELERATION ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your Real Career ROI
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Select your baseline role and target engineering specialization to model your projected compensation surge, break-even timeline, and 3-year wealth multiplier.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Input 1: Current Baseline Role */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 uppercase font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Step 1: Your Current Baseline
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Current CTC: <strong className="text-white">₹{activeProfile.baselineCtc} LPA</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STARTING_PROFILES.map(p => {
                  const isSelected = p.id === selectedProfileId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProfileId(p.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/40'
                          : 'bg-black/30 border-white/5 text-slate-300 hover:border-white/20 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">{p.label}</span>
                        <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-cyan-300' : 'text-slate-500'}`}>
                          ₹{p.baselineCtc}L
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1">{p.subtext}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input 2: Target Specialization Track */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-purple-400 uppercase font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  Step 2: Target Engineering Specialization
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  Avg Offer: ₹{activeTrack.expectedCtc} LPA
                </span>
              </div>

              <div className="space-y-2.5">
                {TARGET_TRACKS.map(t => {
                  const isSelected = t.id === selectedTrackId;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTrackId(t.id)}
                      className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'bg-gradient-to-r from-purple-950/60 to-slate-900 border-purple-400 text-white shadow-lg shadow-purple-500/15 ring-1 ring-purple-500/30'
                          : 'bg-black/30 border-white/5 text-slate-300 hover:border-white/20 hover:bg-white/5'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-white">{t.title}</h4>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.2 rounded border border-emerald-500/30">
                            {t.topHike}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-mono">
                          Hiring: {t.hiringPartners.join(' • ')}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-sm sm:text-base font-mono font-black text-white block">
                          ₹{t.expectedCtc} LPA
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">Tier-1 Median</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input 3: Weekly Commitment Slider */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-3 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 uppercase font-semibold">
                  Weekly Study Hours Commitment:
                </span>
                <span className="text-cyan-400 font-bold text-sm">
                  {commitmentHours} Hours / Week (~{estimatedWeeks} Weeks to Graduate)
                </span>
              </div>

              <input
                type="range"
                min={8}
                max={30}
                step={2}
                value={commitmentHours}
                onChange={e => setCommitmentHours(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-950 rounded-lg"
              />

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>8 hrs/wk (Relaxed Working)</span>
                <span>18 hrs/wk (Recommended)</span>
                <span>30 hrs/wk (Full Immersion)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Dynamic ROI Dashboard */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-cyan-500/40 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Projected Offer Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                    PROJECTED GRADUATION OFFER
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono mt-0.5">
                    ₹{targetSalary} LPA
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                    SALARY SURGE
                  </span>
                  <span className="text-lg sm:text-xl font-mono font-black text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-xl border border-emerald-500/40 inline-block mt-0.5">
                    +{percentageHike}%
                  </span>
                </div>
              </div>

              {/* 3 Core Financial Multipliers */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 block">ANNUAL GAIN DELTA</span>
                  <span className="text-xl font-mono font-black text-cyan-300">
                    +₹{annualGainLakhs.toFixed(1)} Lakhs/Yr
                  </span>
                  <span className="text-[10px] text-slate-500 block">Cash in pocket jump</span>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 block">TUITION BREAK-EVEN</span>
                  <span className="text-xl font-mono font-black text-emerald-400">
                    {breakEvenDays} Days
                  </span>
                  <span className="text-[10px] text-slate-500 block">Into your new position</span>
                </div>
              </div>

              {/* 3-Year Wealth Multiplier Comparison */}
              <div className="p-5 rounded-2xl bg-black/50 border border-white/10 space-y-3 font-mono">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-bold">3-Year Cumulative Wealth Advantage:</span>
                  <span className="text-emerald-400 font-black">+₹{wealthDeltaLakhs} Lakhs</span>
                </div>

                {/* Visual Comparative Bars */}
                <div className="space-y-2 pt-1 text-[11px]">
                  <div>
                    <div className="flex justify-between text-slate-400 pb-1">
                      <span>Stay in Current Trajectory (7% p.a.)</span>
                      <span>₹{Math.round(baseline3Years)}L</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div 
                        className="h-full bg-slate-600 rounded-full" 
                        style={{ width: `${Math.min(100, (baseline3Years / provisent3Years) * 100)}%` }} 
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-cyan-300 font-bold pb-1">
                      <span>Provisent Sovereign Trajectory</span>
                      <span>₹{Math.round(provisent3Years)}L</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full w-full shadow-md" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Milestones Unlocked */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-mono text-slate-400 block font-semibold">
                  Required Production Capstones To Command This Band:
                </span>
                <div className="space-y-1.5">
                  {activeTrack.capstones.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="button"
                  onClick={() => navigateTo('/contact')}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-black text-xs font-mono cursor-pointer shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                  <span>Lock In Personalized Career Transition Plan</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                </button>

                <button
                  type="button"
                  onClick={() => navigateTo('/courses')}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono border border-white/10 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Explore Associated Specializations</span>
                  <ChevronRight className="w-3 h-3 text-cyan-400" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Clock, GitPullRequest, Terminal, Users, 
  Flame, Award, CheckCircle2, Play, Sparkles, 
  ArrowRight, ShieldCheck, Laptop, MessageSquare 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface DayMilestone {
  id: string;
  time: string;
  title: string;
  phase: string;
  badge: string;
  description: string;
  interactiveType: 'terminal' | 'chat' | 'code' | 'incident' | 'ledger';
  detailHeading: string;
  detailContent: React.ReactNode;
}

export const ApprenticeDayInLife: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);

  const MILESTONES: DayMilestone[] = [
    {
      id: 'm1',
      time: '09:30 AM IST',
      phase: 'MORNING TRIAGE',
      title: 'Async Standup & GitHub PR Code Review',
      badge: '< 45 Mins Review SLA',
      description: 'Review automated AST linter diagnostics and inline feedback left on your pull request by your assigned Staff Mentor.',
      interactiveType: 'terminal',
      detailHeading: 'Automated PR Triage & Inline Mentor Notes',
      detailContent: (
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3.5 rounded-xl bg-black/80 border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-white/10 pb-1.5">
              <span className="text-cyan-400">PR #142: feat(consensus): implement Raft heartbeat quorum</span>
              <span className="text-emerald-400">CI Tests: 18/18 Passed</span>
            </div>
            <p className="text-slate-300">
              <span className="text-purple-400">@senthil_staff_mentor:</span> "Smart use of `AtomicBool` on the leader lease! Make sure to add a benchmark under 5,000 concurrent client threads before today's sprint review."
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-emerald-400 bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/20">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>AST linter passed with 0 memory leaks and 100% type safety.</span>
          </div>
        </div>
      )
    },
    {
      id: 'm2',
      time: '01:00 PM IST',
      phase: 'DEEP WORK',
      title: 'Isolated Cloud MicroVM Sandbox Sprint',
      badge: 'Zero-Setup Linux Cloud',
      description: 'Spin up your dedicated Linux MicroVM with pre-configured Rust, Python, and Go runtimes. Zero local setup friction.',
      interactiveType: 'code',
      detailHeading: 'Cloud MicroVM Terminal & Test Harness',
      detailContent: (
        <div className="p-4 rounded-xl bg-black/90 border border-white/10 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-white/10 pb-1">
            <span>apprentice@provisent-microvm-09:~/workspace</span>
            <span className="text-cyan-400">CARGO BENCH</span>
          </div>
          <p className="text-slate-400">
            $ cargo bench --bench raft_throughput <br />
            <span className="text-cyan-300">Benchmarking raft_throughput:</span> <br />
            &nbsp;&nbsp;Warmup: [10.000 ms ... 140.00 ms] <br />
            &nbsp;&nbsp;<span className="text-emerald-400">Throughput: 182,410 ops/sec (P99: 0.38ms)</span> <br />
            &nbsp;&nbsp;<span className="text-purple-400">Memory: 14.2 MB RSS</span>
          </p>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
            <span className="text-slate-500">Container Latency: 0.2ms</span>
            <span className="text-emerald-400 font-bold">100% Hermetic Environment</span>
          </div>
        </div>
      )
    },
    {
      id: 'm3',
      time: '04:30 PM IST',
      phase: '1:1 MENTORSHIP',
      title: '1-on-1 Staff Architect Office Hours',
      badge: '1:1 Private Slot',
      description: 'Private 30-minute session with a Staff or Principal Engineer to whiteboard system topology, unblock edge cases, and refine capstone specs.',
      interactiveType: 'chat',
      detailHeading: 'Live Architectural Whiteboard & Review',
      detailContent: (
        <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 space-y-3 text-xs">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" 
              alt="Janani K" 
              className="w-10 h-10 rounded-xl object-cover border border-cyan-400" 
            />
            <div>
              <span className="font-bold text-white block">Janani K. (Staff Architect)</span>
              <span className="text-[10px] text-cyan-300 font-mono">1:1 Architecture Consultation</span>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed font-mono text-[11px]">
            "Instead of polling Redis every 50ms, let's switch your notification bus to server-sent events with backpressure buffering. That will slash your database connection pool consumption by 85%."
          </p>
          <div className="p-2 rounded-lg bg-cyan-950/50 border border-cyan-500/20 text-[10px] font-mono text-cyan-300">
            Action Item: Refactor to SSE event stream before Thursday code defense.
          </div>
        </div>
      )
    },
    {
      id: 'm4',
      time: '07:00 PM IST',
      phase: 'CHAOS DRILL',
      title: 'Nightly SRE Incident War Room',
      badge: 'Real-World Production Scenarios',
      description: 'Join your cohort in a simulated production war room where faculty inject real network latency, split-brain nodes, or runaway memory leaks into your cluster.',
      interactiveType: 'incident',
      detailHeading: 'Live Production Incident Injection Telemetry',
      detailContent: (
        <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-[10px] border-b border-rose-500/30 pb-1">
            <span className="text-rose-400 flex items-center gap-1 font-bold">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              INCIDENT #INC-2026-041 (SIMULATED)
            </span>
            <span className="text-slate-400">Severity: P1 Critical</span>
          </div>
          <p className="text-slate-200 text-[11px]">
            ALERT: Node 3 (Mumbai AZ-1) failed health check. Ingress proxy rerouted 45,000 req/sec to Node 2.
          </p>
          <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-emerald-400 text-[10px]">
            RESOLVED BY COHORT: Automated circuit breaker tripped in 180ms. Zero dropped connections.
          </div>
        </div>
      )
    },
    {
      id: 'm5',
      time: '09:30 PM IST',
      phase: 'ATTESTATION',
      title: 'Cryptographic Ledger Checkpoint & Badge Minting',
      badge: 'Verifiable Proof of Work',
      description: 'Your completed sprint milestones and defended code commits are permanently hashed and added to your publicly verifiable Provisent portfolio.',
      interactiveType: 'ledger',
      detailHeading: 'Cryptographic Ledger Proof of Work',
      detailContent: (
        <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between text-[10px] border-b border-emerald-500/20 pb-1 text-slate-400">
            <span>LEDGER ATTESTATION RECORD</span>
            <span className="text-emerald-400">BLOCK #884,912</span>
          </div>
          <div className="text-[11px] text-slate-300 space-y-1">
            <p>Hash: <span className="text-cyan-300">0x7f8a92...e4b1</span></p>
            <p>Skill Badge: <span className="text-emerald-300 font-bold">Distributed Raft Consensus Level 4</span></p>
            <p>Countersigned by: <span className="text-white">Dr. K. Senthil Kumar</span></p>
          </div>
          <div className="pt-2 border-t border-emerald-500/20 text-[10px] text-emerald-400 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Synced to Candidate Public Talent Profile</span>
          </div>
        </div>
      )
    }
  ];

  const activeMilestone = MILESTONES[activeMilestoneIndex] || MILESTONES[0];

  return (
    <section className="relative py-24 bg-[#07090E] border-t border-white/10" id="apprentice-day">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE IMMERSION BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            A Day in the Life of an Apprentice
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            How Provisent blends flexible asynchronous deep work with live staff engineer mentorship, isolated microVM sandboxes, and chaotic real-world incidents.
          </p>
        </div>

        {/* Interactive Timeline Stepper Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {MILESTONES.map((m, idx) => {
            const isSelected = idx === activeMilestoneIndex;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveMilestoneIndex(idx)}
                className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-xl shadow-cyan-500/15 ring-1 ring-cyan-500/40'
                    : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase ${isSelected ? 'text-cyan-300' : 'text-slate-500'}`}>
                    {m.phase}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">{m.time.split(' ')[0]}</span>
                </div>
                <span className="text-xs font-bold text-white line-clamp-2">{m.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-cyan-500/30 shadow-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  {activeMilestone.time} • {activeMilestone.phase}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                  {activeMilestone.badge}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-2">{activeMilestone.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {activeMilestone.description}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setActiveMilestoneIndex((prev) => (prev > 0 ? prev - 1 : MILESTONES.length - 1))}
                className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono border border-white/10 cursor-pointer text-slate-300"
              >
                &larr; Prev
              </button>
              <button
                type="button"
                onClick={() => setActiveMilestoneIndex((prev) => (prev + 1) % MILESTONES.length)}
                className="px-3 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono cursor-pointer"
              >
                Next &rarr;
              </button>
            </div>
          </div>

          {/* Interactive Dynamic Detail View */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase font-semibold block">
              {activeMilestone.detailHeading}:
            </span>
            {activeMilestone.detailContent}
          </div>

          {/* Bottom Callout */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <span className="text-slate-400">
              Can I do this while working a full-time job?
            </span>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">Yes • 72% of our apprentices are working professionals</span>
              <button
                onClick={() => navigateTo('/contact')}
                className="text-cyan-400 hover:underline font-bold cursor-pointer"
              >
                Talk to Advisor &rarr;
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

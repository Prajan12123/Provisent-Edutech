import React, { useState } from 'react';
import { 
  Code2, Terminal, Cpu, Database, Activity, 
  ExternalLink, CheckCircle2, ShieldCheck, GitBranch, 
  Play, Sparkles, Server, ArrowRight 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface CapstoneProject {
  id: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  authorCompany: string;
  authorAvatar: string;
  techStack: string[];
  summary: string;
  metrics: { label: string; value: string; sub: string }[];
  codeSnippet: { language: string; filename: string; code: string };
  defenseScore: {
    overall: string;
    mentor: string;
    rubric: { criterion: string; score: string }[];
  };
}

const CAPSTONE_PROJECTS: CapstoneProject[] = [
  {
    id: 'nexus-raft',
    title: 'NexusRaft — Distributed Raft Consensus Engine',
    category: 'Systems & Distributed Computing',
    author: 'Arun K. Sundaram',
    authorRole: 'Now Distributed Systems SRE',
    authorCompany: 'Zomato Core Infrastructure (₹22.5 LPA)',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    techStack: ['Rust', 'Tokio Async', 'Raft Protocol', 'Protobuf', 'Docker'],
    summary: 'A linearizable, high-throughput distributed key-value store built in pure Rust from scratch. Handles network partitions, split-brain elections, and zero-copy log compaction.',
    metrics: [
      { label: 'Throughput', value: '182,000 req/s', sub: 'Single node cluster' },
      { label: 'P99 Write Latency', value: '0.38 ms', sub: 'Zero-copy ring buffer' },
      { label: 'Memory Footprint', value: '14.2 MB', sub: 'Zero GC overhead' },
      { label: 'Jepsen Test Pass', value: '100% (Linearizable)', sub: 'Passed 48hr chaos' }
    ],
    codeSnippet: {
      language: 'rust',
      filename: 'src/consensus/raft_leader.rs',
      code: `pub async fn handle_append_entries(&mut self, req: AppendEntriesReq) -> Result<AppendEntriesResp, ConsensusError> {
    // Zero-copy verification of leader term and log consistency index
    if req.term < self.current_term {
        return Ok(AppendEntriesResp { term: self.current_term, success: false });
    }
    
    // Heartbeat verification and election timer reset
    self.election_timer.reset();
    self.log_store.persist_entries_batched(&req.entries).await?;
    self.commit_index = std::cmp::min(req.leader_commit, self.log_store.last_index());
    
    Ok(AppendEntriesResp { term: self.current_term, success: true })
}`
    },
    defenseScore: {
      overall: '98.5% (High Honors)',
      mentor: 'Dr. K. Senthil Kumar (Academic Chair, ex-AWS Systems)',
      rubric: [
        { criterion: 'Linearizable Concurrency Safety', score: '100/100' },
        { criterion: 'Memory Safety & Zero-Copy Efficiency', score: '98/100' },
        { criterion: 'Chaos Recovery & Split-Brain Defense', score: '98/100' }
      ]
    }
  },
  {
    id: 'agentic-rag',
    title: 'AgenticRAG — Autonomous Knowledge Swarm',
    category: 'Autonomous AI & LLM Systems',
    author: 'Divya S. Ramanathan',
    authorRole: 'Now AI Agent Engineer',
    authorCompany: 'Microsoft AI Cloud Partner (₹31.0 LPA)',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    techStack: ['Python 3.12', 'LangGraph', 'Qdrant Vector DB', 'FastAPI', 'WebRTC'],
    summary: 'A recursive multi-agent research swarm that breaks complex enterprise queries into sub-tasks, performs self-correcting vector retrieval, and defends against hallucinations.',
    metrics: [
      { label: 'Retrieval Precision', value: '99.4%', sub: 'Hybrid Dense+BM25' },
      { label: 'Hallucination Rate', value: '< 0.08%', sub: 'Formal guardrail checks' },
      { label: 'Agent Query Time', value: '1.24 s', sub: 'Parallelized worker DAG' },
      { label: 'Tool Integrations', value: '18 Sandboxed Tools', sub: 'Bash, SQL, Web, Git' }
    ],
    codeSnippet: {
      language: 'python',
      filename: 'agents/orchestrator_graph.py',
      code: `async def evaluate_hallucination_guardrail(state: AgentWorkflowState) -> AgentRoutingDecision:
    """Verifies that generated claims are fully grounded in retrieved vector chunks."""
    retrieved_context = state["retrieved_documents"]
    generated_draft = state["agent_response_draft"]
    
    entailment_score = await nli_verifier.compute_entailment(
        premise=retrieved_context, 
        hypothesis=generated_draft
    )
    
    if entailment_score < 0.95:
        # Self-correcting loop: rewrite query and expand search space
        return AgentRoutingDecision.RETRY_EXPANDED_RETRIEVAL
    return AgentRoutingDecision.APPROVE_DISPATCH`
    },
    defenseScore: {
      overall: '99.0% (Platinum Capstone)',
      mentor: 'Maya Raman (Head of AI & Enterprise Solutions)',
      rubric: [
        { criterion: 'Autonomous Error Recovery Loop', score: '100/100' },
        { criterion: 'Vector Recall & Sparse Hybrid Indexing', score: '99/100' },
        { criterion: 'Token Cost Optimization & Caching', score: '98/100' }
      ]
    }
  },
  {
    id: 'mesh-watch',
    title: 'MeshWatch — eBPF Kubernetes Observability',
    category: 'Cloud Native & Kernel Systems',
    author: 'Vignesh Balaji',
    authorRole: 'Now Cloud Native Engineer',
    authorCompany: 'ThoughtWorks Systems Pod (₹18.0 LPA)',
    authorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80',
    techStack: ['eBPF / C', 'Go 1.23', 'Kubernetes', 'Prometheus', 'Grafana'],
    summary: 'Attaches directly to kernel sock_ops tracepoints inside Linux nodes to measure pod-to-pod TCP latency without injecting sidecar proxies or modifying container runtimes.',
    metrics: [
      { label: 'Sidecar Overhead', value: '0.00% (Zero Sidecar)', sub: '100% in-kernel trace' },
      { label: 'CPU Overhead', value: '< 0.4% Core', sub: 'Ring buffer export' },
      { label: 'Packet Resolution', value: 'Microsecond (μs)', sub: 'Nanosecond hardware clock' },
      { label: 'K8s Pod Support', value: '10,000+ Pods', sub: 'Cluster tested' }
    ],
    codeSnippet: {
      language: 'c',
      filename: 'bpf/sockops_tracer.bpf.c',
      code: `SEC("sockops")
int trace_tcp_handshake(struct bpf_sock_ops *skops) {
    u32 op = skops->op;
    if (op == BPF_SOCK_OPS_ACTIVE_ESTABLISHED_CB || op == BPF_SOCK_OPS_PASSIVE_ESTABLISHED_CB) {
        struct tcp_event_t event = {};
        event.src_ip = skops->local_ip4;
        event.dst_ip = skops->remote_ip4;
        event.timestamp_ns = bpf_ktime_get_ns();
        event.srtt_us = skops->srtt_us >> 3; // Smoothed RTT
        
        bpf_ringbuf_output(&event_ringbuf, &event, sizeof(event), 0);
    }
    return 0;
}`
    },
    defenseScore: {
      overall: '97.8% (Systems Commendation)',
      mentor: 'Arjun V. Nair (Staff Placement Director & Systems Lead)',
      rubric: [
        { criterion: 'Kernel Verifier Compliance', score: '100/100' },
        { criterion: 'Go Userspace Collector Telemetry', score: '97/100' },
        { criterion: 'Low-Overhead Ring Buffer Architecture', score: '97/100' }
      ]
    }
  }
];

export const LiveCapstoneShowcase: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeProjectId, setActiveProjectId] = useState<string>('nexus-raft');
  const [activeViewTab, setActiveViewTab] = useState<'metrics' | 'code' | 'defense'>('metrics');

  const activeProject = CAPSTONE_PROJECTS.find(p => p.id === activeProjectId) || CAPSTONE_PROJECTS[0];

  return (
    <section className="relative py-24 bg-[#070A10] border-t border-white/10" id="capstone-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>APPRENTICE PRODUCTION CAPSTONES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Real Systems. Defended in Code.
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Forget toy todo apps. Provisent apprentices build distributed databases, multi-agent swarms, and kernel observability tools that pass real enterprise chaos testing.
            </p>
          </div>

          {/* Project Switcher Pills */}
          <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono shrink-0">
            {CAPSTONE_PROJECTS.map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveProjectId(p.id)}
                className={`px-3.5 py-2 rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                  activeProjectId === p.id
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold shadow-md shadow-cyan-500/15'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {p.title.split('—')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Main Capstone Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-cyan-500/30 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Card Top Banner with Author info */}
          <div className="p-6 bg-slate-950 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={activeProject.authorAvatar}
                alt={activeProject.author}
                className="w-12 h-12 rounded-2xl object-cover border border-cyan-400/50 shadow-md"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">{activeProject.title}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    {activeProject.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Engineered by <strong className="text-white">{activeProject.author}</strong> •{' '}
                  <span className="text-emerald-400 font-mono font-semibold">{activeProject.authorCompany}</span>
                </p>
              </div>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-white/10 text-xs font-mono">
              {[
                { id: 'metrics', label: 'Benchmarks & Telemetry', icon: Activity },
                { id: 'code', label: 'Production Code Diff', icon: Terminal },
                { id: 'defense', label: 'Staff Defense Scorecard', icon: ShieldCheck }
              ].map(tab => {
                const IconComp = tab.icon;
                const isSelected = activeViewTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveViewTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card Middle: Summary & Tech Pills */}
          <div className="p-6 bg-slate-900/50 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {activeProject.summary}
            </p>
            <div className="flex flex-wrap items-center gap-1.5 shrink-0">
              {activeProject.techStack.map(tech => (
                <span key={tech} className="px-2.5 py-1 rounded-md bg-black/50 border border-white/10 text-[11px] font-mono text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card Dynamic Body based on View Tab */}
          <div className="p-6 sm:p-8">
            
            {/* VIEW 1: BENCHMARKS & TELEMETRY */}
            {activeViewTab === 'metrics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {activeProject.metrics.map((m, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">{m.label}</span>
                      <span className="text-xl sm:text-2xl font-black font-mono text-emerald-400 block">{m.value}</span>
                      <span className="text-[11px] text-slate-500 font-mono block">{m.sub}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <Server className="w-4 h-4 text-cyan-400" />
                    <span>Live Telemetry verified via automated microVM benchmarking harness</span>
                  </div>
                  <button
                    onClick={() => navigateTo('/compiler')}
                    className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Run In-Browser MicroVM Test</span>
                  </button>
                </div>
              </div>
            )}

            {/* VIEW 2: PRODUCTION CODE DIFF */}
            {activeViewTab === 'code' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1 border-b border-white/10">
                  <span className="text-cyan-300 flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5" />
                    {activeProject.codeSnippet.filename}
                  </span>
                  <span>{activeProject.codeSnippet.language.toUpperCase()} • 100% Test Coverage</span>
                </div>
                <div className="p-5 rounded-2xl bg-black/80 border border-white/10 overflow-x-auto text-slate-300 leading-relaxed">
                  <pre>{activeProject.codeSnippet.code}</pre>
                </div>
              </div>
            )}

            {/* VIEW 3: STAFF DEFENSE SCORECARD */}
            {activeViewTab === 'defense' && (
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-400 block font-bold">
                      VERIFIED DEFENSE RATING
                    </span>
                    <div className="text-2xl font-black text-white font-mono mt-0.5">
                      {activeProject.defenseScore.overall}
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Lead Examiner: <strong className="text-white">{activeProject.defenseScore.mentor}</strong>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 bg-emerald-950 px-3 py-1.5 rounded-xl border border-emerald-500/40">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Tamper-Proof Ledger Seal Verified</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                    Live Oral & Code Defense Rubric Breakdown:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeProject.defenseScore.rubric.map((r, i) => (
                      <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                        <span className="text-xs font-bold text-white block">{r.criterion}</span>
                        <span className="text-sm font-mono font-black text-cyan-300 block">{r.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Card Footer CTA */}
          <div className="p-5 bg-slate-950/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <span className="text-slate-400">
              Want to engineer capstones like this for your portfolio?
            </span>
            <button
              onClick={() => navigateTo('/courses')}
              className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore All Engineering Curricula</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

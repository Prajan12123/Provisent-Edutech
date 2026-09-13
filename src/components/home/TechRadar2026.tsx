import React, { useState } from 'react';
import { 
  Compass, Radio, Zap, ShieldAlert, CheckCircle2, 
  ExternalLink, ArrowRight, Layers, Cpu, Database, 
  Terminal, Globe, Lock, Flame
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

type RadarRing = 'ADOPT' | 'TRIAL' | 'ASSESS' | 'HOLD';
type RadarDomain = 'all' | 'ai' | 'systems' | 'frontend' | 'cloud';

interface RadarItem {
  id: string;
  name: string;
  ring: RadarRing;
  domain: RadarDomain;
  hiringSurge: string;
  oneLiner: string;
  provisentRationale: string;
  capstoneModule: string;
  coursePath: string;
}

const RADAR_ITEMS: RadarItem[] = [
  // ADOPT
  {
    id: 'rust-tokio',
    name: 'Rust (Tokio & Memory Safety)',
    ring: 'ADOPT',
    domain: 'systems',
    hiringSurge: '+380% Surge',
    oneLiner: 'Memory-safe systems programming replacing C/C++ in core cloud infrastructure.',
    provisentRationale: 'Zero-cost abstractions with mathematically verified memory safety. Provisent apprentices write production microservices without garbage collection pauses.',
    capstoneModule: 'NexusRaft: Byzantine Fault-Tolerant Consensus Key-Value Store',
    coursePath: '/courses'
  },
  {
    id: 'langgraph-agents',
    name: 'LangGraph & Multi-Agent Swarms',
    ring: 'ADOPT',
    domain: 'ai',
    hiringSurge: '+520% Surge',
    oneLiner: 'Stateful multi-agent orchestration loops with cycle control and human-in-the-loop.',
    provisentRationale: 'Single-prompt chat interfaces are obsolete. Industry demands autonomous agents that interact with bash consoles, SQL databases, and internal APIs.',
    capstoneModule: 'AgenticRAG: Self-Correcting Enterprise Knowledge Swarm',
    coursePath: '/courses'
  },
  {
    id: 'react-19-tanstack',
    name: 'React 19 & TanStack Query',
    ring: 'ADOPT',
    domain: 'frontend',
    hiringSurge: '+280% Surge',
    oneLiner: 'Next-gen React compiler with optimistic cache invalidation and server actions.',
    provisentRationale: 'Eliminates boilerplate useEffect chains. Apprentices build buttery smooth 60fps applications with zero unnecessary re-renders.',
    capstoneModule: 'OmniDash: Real-Time Financial Trading Desk with Micro-interactions',
    coursePath: '/courses'
  },
  {
    id: 'ebpf-observability',
    name: 'eBPF Kernel Observability',
    ring: 'ADOPT',
    domain: 'cloud',
    hiringSurge: '+440% Surge',
    oneLiner: 'Linux kernel sandboxing for zero-overhead network tracing and security audits.',
    provisentRationale: 'Modern SREs at Uber, Netflix, and Cloudflare monitor cloud microservices in kernel space without injecting slow sidecars.',
    capstoneModule: 'MeshWatch: Zero-Overhead Kubernetes Network Latency Probe',
    coursePath: '/courses'
  },
  {
    id: 'qdrant-vector',
    name: 'Hybrid Vector Search (Qdrant/pgvector)',
    ring: 'ADOPT',
    domain: 'ai',
    hiringSurge: '+360% Surge',
    oneLiner: 'Dense embedding indices combined with sparse BM25 keyword matching.',
    provisentRationale: 'Pure cosine similarity fails on technical acronyms. Hybrid search delivers 99.4% precision on enterprise documentation retrieval.',
    capstoneModule: 'DocuCore: Enterprise Legal & Medical Document Audit Agent',
    coursePath: '/courses'
  },

  // TRIAL
  {
    id: 'mcp-protocol',
    name: 'Model Context Protocol (MCP)',
    ring: 'TRIAL',
    domain: 'ai',
    hiringSurge: '+610% Surge',
    oneLiner: 'Open standard enabling LLMs to safely read local developer environments and tools.',
    provisentRationale: 'Created by Anthropic and rapidly adopted by Google & Microsoft. Our learners integrate MCP servers directly into agent pipelines.',
    capstoneModule: 'Autonomous IDE Code Reviewer & Auto-Fix Bot',
    coursePath: '/courses'
  },
  {
    id: 'local-slm-lora',
    name: 'Local SLM Fine-Tuning (LoRA/QLoRA)',
    ring: 'TRIAL',
    domain: 'ai',
    hiringSurge: '+390% Surge',
    oneLiner: 'Fine-tuning 7B-14B models locally for sovereign on-prem enterprise deployments.',
    provisentRationale: 'Companies refuse to send proprietary source code to public API endpoints. We train learners to quantize and deploy models locally on consumer GPUs.',
    capstoneModule: 'PrivateOnPrem: Air-Gapped Code Synthesis Engine',
    coursePath: '/courses'
  },
  {
    id: 'wasm-edge',
    name: 'WebAssembly (WASM) Edge Runtimes',
    ring: 'TRIAL',
    domain: 'cloud',
    hiringSurge: '+310% Surge',
    oneLiner: 'Sub-millisecond cold starts for serverless compute isolated in WASM sandboxes.',
    provisentRationale: 'WASM boots in microseconds compared to Docker containers (which take seconds). Essential for global edge routing.',
    capstoneModule: 'EdgeGate: Distributed Multi-Cloud API Proxy',
    coursePath: '/courses'
  },

  // ASSESS
  {
    id: 'post-quantum-crypto',
    name: 'Post-Quantum Cryptography (ML-KEM/NIST)',
    ring: 'ASSESS',
    domain: 'systems',
    hiringSurge: '+220% Surge',
    oneLiner: 'Lattice-based encryption resistant to future quantum computing attacks.',
    provisentRationale: 'NIST officially finalized post-quantum standards in 2024-2026. We prepare learners to future-proof fintech and defense protocols.',
    capstoneModule: 'QuantumSafe: Zero-Trust Message Bus Implementation',
    coursePath: '/courses'
  },
  {
    id: 'neurosymbolic-ai',
    name: 'Neurosymbolic AI & Constraint Solvers',
    ring: 'ASSESS',
    domain: 'ai',
    hiringSurge: '+270% Surge',
    oneLiner: 'Combining deep neural representations with strict formal mathematical logic.',
    provisentRationale: 'Solves the hallucination boundary by running LLM outputs through Z3 theorem provers and SAT solvers for mission-critical software.',
    capstoneModule: 'FormalGuard: Certified Safety Proofs for Autonomous Code',
    coursePath: '/courses'
  },

  // HOLD / DEPRECATE
  {
    id: 'legacy-monolith-php',
    name: 'Monolithic PHP / Legacy Java 8',
    ring: 'HOLD',
    domain: 'systems',
    hiringSurge: '-65% Decline',
    oneLiner: 'Unbounded synchronous architectures without type safety or reactive streaming.',
    provisentRationale: 'High-paying tech companies are aggressively retiring these runtimes. Provisent avoids teaching obsolete patterns.',
    capstoneModule: 'Replaced by: Modern TypeScript, Go, and Rust Distributed Microservices',
    coursePath: '/courses'
  },
  {
    id: 'manual-ssh-deploy',
    name: 'Manual SSH Server Patching',
    ring: 'HOLD',
    domain: 'cloud',
    hiringSurge: '-80% Decline',
    oneLiner: 'Manual server configuration without immutable infrastructure or declarative GitOps.',
    provisentRationale: 'Manual deployments create snowflakes and production outages. We teach declarative Terraform, ArgoCD, and Kubernetes only.',
    capstoneModule: 'Replaced by: Hermetic CI/CD & Automated Canary Rollouts',
    coursePath: '/courses'
  }
];

export const TechRadar2026: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeDomain, setActiveDomain] = useState<RadarDomain>('all');
  const [selectedItemId, setSelectedItemId] = useState<string>('rust-tokio');

  const filteredItems = activeDomain === 'all'
    ? RADAR_ITEMS
    : RADAR_ITEMS.filter(item => item.domain === activeDomain || item.ring === 'HOLD');

  const selectedItem = RADAR_ITEMS.find(item => item.id === selectedItemId) || RADAR_ITEMS[0];

  const getRingColor = (ring: RadarRing) => {
    switch (ring) {
      case 'ADOPT': return { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/40', badge: 'bg-emerald-950/80 text-emerald-300' };
      case 'TRIAL': return { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/40', badge: 'bg-cyan-950/80 text-cyan-300' };
      case 'ASSESS': return { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/40', badge: 'bg-purple-950/80 text-purple-300' };
      case 'HOLD': return { text: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/40', badge: 'bg-rose-950/80 text-rose-300' };
    }
  };

  return (
    <section className="relative py-24 bg-slate-950/90 border-t border-white/10" id="tech-radar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>PROVISENT TECH RADAR • 2026 EDITION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              The Enterprise Skill Radar
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              We engineer our curriculum like a tier-1 technology company. Track what top engineering orgs are adopting, testing, assessing, and actively deprecating.
            </p>
          </div>

          {/* Domain Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono shrink-0">
            {[
              { id: 'all', label: 'All Domains' },
              { id: 'ai', label: 'AI & Agents' },
              { id: 'systems', label: 'Systems & Rust' },
              { id: 'frontend', label: 'Modern Frontend' },
              { id: 'cloud', label: 'Cloud & eBPF' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveDomain(tab.id as RadarDomain)}
                className={`px-3.5 py-1.5 rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                  activeDomain === tab.id
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Radar Matrix & Inspector Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 4 Rings Visual Columns */}
          <div className="lg:col-span-7 space-y-5">
            
            {(['ADOPT', 'TRIAL', 'ASSESS', 'HOLD'] as RadarRing[]).map(ring => {
              const ringStyle = getRingColor(ring);
              const itemsInRing = filteredItems.filter(i => i.ring === ring);

              if (itemsInRing.length === 0) return null;

              return (
                <div key={ring} className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md border ${ringStyle.badge} flex items-center gap-1.5`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {ring === 'ADOPT' && 'ADOPT • Core Production Stack (Taught in 100% of Tracks)'}
                      {ring === 'TRIAL' && 'TRIAL • Enterprise Innovation Pods (Elective Masterclasses)'}
                      {ring === 'ASSESS' && 'ASSESS • Research & Frontier Labs (Executive Workshops)'}
                      {ring === 'HOLD' && 'HOLD / DEPRECATE • Obsolete Patterns (We Refuse To Teach)'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {itemsInRing.length} Technologies
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {itemsInRing.map(item => {
                      const isSelected = item.id === selectedItemId;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedItemId(item.id)}
                          className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                            isSelected
                              ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md shadow-cyan-500/10 ring-1 ring-cyan-500/30'
                              : 'bg-black/40 border-white/5 text-slate-300 hover:bg-white/5 hover:border-white/20'
                          }`}
                        >
                          <div>
                            <span className="text-xs font-bold block">{item.name}</span>
                            <span className="text-[10px] font-mono text-slate-400 mt-0.5 block line-clamp-1">
                              {item.oneLiner}
                            </span>
                          </div>
                          <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0 ${
                            item.ring === 'HOLD' ? 'bg-rose-950 text-rose-300' : 'bg-emerald-950 text-emerald-300'
                          }`}>
                            {item.hiringSurge}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}

          </div>

          {/* Right: Deep Radar Inspector Drawer */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-7 rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Card Header */}
              <div className="space-y-2 border-b border-white/10 pb-5">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getRingColor(selectedItem.ring).badge}`}>
                    {selectedItem.ring} RING
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {selectedItem.hiringSurge}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white">{selectedItem.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {selectedItem.oneLiner}
                </p>
              </div>

              {/* Why Provisent Teaches This */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                  {selectedItem.ring === 'HOLD' ? 'Why Industry Is Deprecating It:' : 'Why Provisent Engineers Master It:'}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  {selectedItem.provisentRationale}
                </p>
              </div>

              {/* Capstone Implementation */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block font-bold">
                  Production Capstone Module:
                </span>
                <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs font-mono text-cyan-200 flex items-start gap-2">
                  <Flame className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{selectedItem.capstoneModule}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={() => navigateTo(selectedItem.coursePath)}
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs font-mono cursor-pointer flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                >
                  <span>Explore Programs Teaching This Stack</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => navigateTo('/contact')}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono border border-white/10 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Request Full 2026 Tech Stack Syllabus</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

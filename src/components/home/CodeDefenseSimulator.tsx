import React, { useState } from 'react';
import { 
  ShieldCheck, AlertTriangle, CheckCircle2, Play, 
  Terminal, User, Award, ArrowRight, Sparkles, MessageSquare 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface DefenseScenario {
  id: string;
  title: string;
  domain: string;
  examinerName: string;
  examinerRole: string;
  examinerAvatar: string;
  candidateName: string;
  candidateRole: string;
  attackVectorQuestion: string;
  candidateRebuttal: string;
  codeDiffPreview: string;
  telemetryResult: string;
  verdict: string;
}

const DEFENSE_SCENARIOS: DefenseScenario[] = [
  {
    id: 'distributed_systems',
    title: 'Distributed Consensus & Byzantine Partition Defense',
    domain: 'Systems & Distributed Cloud',
    examinerName: 'Dr. K. Senthil Kumar',
    examinerRole: 'Academic Engineering Chair (ex-AWS Systems)',
    examinerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    candidateName: 'Arun K. (Apprentice)',
    candidateRole: 'Candidate for Sovereign Systems Fellow ID',
    attackVectorQuestion: 'Your cluster just experienced an asymmetric network partition: Node 3 can see Node 1, but Node 2 is isolated. If a client attempts an uncommitted write during this election window, how does your Raft state machine prevent a dirty read without stalling throughput?',
    candidateRebuttal: 'We implemented lease-read validation combined with index-based monotonic commit barriers. Before responding to the client, the leader verifies its term lease with a quorum of peers using non-blocking asynchronous heartbeats. If quorum verification fails within 15ms, the request falls back to linearizable read-index verification.',
    codeDiffPreview: `// MONOTONIC LEASE READ VERIFICATION (RUST)
pub async fn verify_read_lease(&self) -> Result<(), ReadQuorumError> {
    let current_lease = self.leader_lease.load(Ordering::Acquire);
    if current_lease.is_expired() {
        // Lease expired; downgrade to strict consensus round
        return self.trigger_read_index_quorum().await;
    }
    Ok(())
}`,
    telemetryResult: 'Passed 10,000 partition injection cycles in Jepsen suite with 0 linearizability anomalies.',
    verdict: 'DEFENSE APPROVED WITH DISTINCTION (Grade: 98.5%)'
  },
  {
    id: 'ai_agent_guardrail',
    title: 'Autonomous Multi-Agent Loop & Hallucination Guardrail',
    domain: 'Generative AI & Agent Architecture',
    examinerName: 'Maya Raman',
    examinerRole: 'Head of Enterprise Upskilling (ex-ThoughtWorks)',
    examinerAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    candidateName: 'Divya S. (Apprentice)',
    candidateRole: 'Candidate for Sovereign AI Engineer ID',
    attackVectorQuestion: 'Your LangGraph agent has access to a SQL execution tool. A malicious user prompt attempts an indirect prompt injection via an unstructured customer review comment. How do you guarantee the agent will not execute destructive DROP/ALTER statements?',
    candidateRebuttal: 'We enforce a multi-layered boundary: First, the database connection uses strict read-only least-privilege roles. Second, we parse the generated query through an AST SQL validator before execution. Third, an independent verifier model evaluates the tool arguments against safety policies before token dispatch.',
    codeDiffPreview: `# AST SQL INJECTION FILTER & LEAST PRIVILEGE GATE
def validate_ast_sql_statement(raw_sql: str) -> bool:
    parsed_ast = sqlglot.parse_one(raw_sql)
    for node in parsed_ast.walk():
        if isinstance(node, (exp.Drop, exp.Alter, exp.Delete, exp.Insert)):
            raise SecurityConstraintViolation("Mutation operation forbidden in read agent")
    return True`,
    telemetryResult: 'Zero unauthorized mutations across 500 adversarial red-team prompt injections.',
    verdict: 'DEFENSE APPROVED (Grade: 99.0% - Platinum Honors)'
  },
  {
    id: 'sre_chaos',
    title: 'High-Concurrency Event Broker & Memory Leak Defense',
    domain: 'Cloud Infrastructure & SRE',
    examinerName: 'Arjun V. Nair',
    examinerRole: 'Career Placement Syndicate Director (ex-Razorpay)',
    examinerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    candidateName: 'Karthik R. (Apprentice)',
    candidateRole: 'Candidate for Full Stack Architect ID',
    attackVectorQuestion: 'Under 100,000 concurrent WebSockets, your node process is suffering from event-loop starvation and V8 heap exhaustion. How did you diagnose and restructure the memory lifecycle?',
    candidateRebuttal: 'We moved high-throughput buffer serialization out of the JavaScript V8 main thread into a Rust NAPI worker thread using zero-copy shared ArrayBuffers. Event-loop lag dropped from 420ms to 1.8ms.',
    codeDiffPreview: `// OFF-THREAD ZERO-COPY SERIALIZATION
export async function dispatchEventStream(payloads: ArrayBuffer[]): Promise<void> {
    // Shared memory ring buffer to Rust NAPI worker
    rustWorkerPool.transferBuffer(payloads, { zeroCopy: true });
}`,
    telemetryResult: 'P99 event-loop delay under 2.1ms at 120,000 active concurrent WebSocket streams.',
    verdict: 'DEFENSE APPROVED (Grade: 97.5%)'
  }
];

export const CodeDefenseSimulator: React.FC = () => {
  const { navigateTo } = useApp();
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('distributed_systems');
  const [activeStep, setActiveStep] = useState<number>(0);

  const scenario = DEFENSE_SCENARIOS.find(s => s.id === selectedScenarioId) || DEFENSE_SCENARIOS[0];

  return (
    <section className="relative py-24 bg-[#080B13] border-t border-white/10" id="code-defense">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>THE PROVISENT DIFFERENCE: LIVE CODE DEFENSE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            No Multiple Choice. Defend Your Architecture.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Every Provisent credential requires a 45-minute live oral and code defense before Staff Engineers from top tech companies. Experience a live defense simulation below.
          </p>
        </div>

        {/* Scenario Selector Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap text-xs font-mono">
          {DEFENSE_SCENARIOS.map(s => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setSelectedScenarioId(s.id);
                setActiveStep(0);
              }}
              className={`px-4 py-2 rounded-xl border transition-all cursor-pointer flex items-center gap-2 ${
                selectedScenarioId === s.id
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold shadow-lg shadow-emerald-500/10'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{s.domain}</span>
            </button>
          ))}
        </div>

        {/* Interactive Defense Stage Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl overflow-hidden backdrop-blur-2xl">
          
          {/* Top Stage Header */}
          <div className="p-6 bg-slate-950 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-wider block">
                LIVE ORAL & CODE DEFENSE BOARD
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">{scenario.title}</h3>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Defense in Session
              </span>
              <span className="text-slate-600">|</span>
              <span>45-Min SLA Window</span>
            </div>
          </div>

          {/* Defense Dialog Grid */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* 1. EXAMINER CHALLENGE */}
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 flex items-start gap-4">
              <img
                src={scenario.examinerAvatar}
                alt={scenario.examinerName}
                className="w-12 h-12 rounded-2xl object-cover border border-rose-400/40 shrink-0"
              />
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-rose-300">{scenario.examinerName}</span>
                  <span className="text-[10px] font-mono text-slate-400">({scenario.examinerRole})</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-mono">
                  "{scenario.attackVectorQuestion}"
                </p>
              </div>
            </div>

            {/* 2. CANDIDATE'S DEFENDED ARCHITECTURAL REBUTTAL */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0 font-bold font-mono">
                APP
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-cyan-300">{scenario.candidateName}</span>
                  <span className="text-[10px] font-mono text-slate-400">({scenario.candidateRole})</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-mono">
                  "{scenario.candidateRebuttal}"
                </p>
              </div>
            </div>

            {/* 3. DEFENDED CODE DIFF & UNIT TEST TELEMETRY */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-2">
              <div className="lg:col-span-8 p-4 rounded-2xl bg-black/80 border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
                <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-white/10 pb-1.5 mb-2">
                  <span>DEFENDED CODE IMPLEMENTATION</span>
                  <span className="text-emerald-400">PASSED STATIC ANALYSIS</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-cyan-200">{scenario.codeDiffPreview}</pre>
              </div>

              <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-950/80 border border-white/10 flex flex-col justify-between space-y-4 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">CHAOS VERIFICATION TELEMETRY</span>
                  <p className="text-slate-300 text-xs mt-1.5 leading-relaxed">
                    {scenario.telemetryResult}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-1">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
                  <span className="text-xs font-bold text-emerald-300 block">{scenario.verdict}</span>
                  <span className="text-[9px] text-slate-400">Cryptographic Seal Minted</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Footer CTA */}
          <div className="p-5 bg-slate-950/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <span className="text-slate-400">
              Ready to build skills that command respect from senior engineering leaders?
            </span>
            <button
              onClick={() => navigateTo('/certifications')}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Explore All Certified Credentials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

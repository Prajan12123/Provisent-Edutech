import React, { useState } from 'react';
import { 
  GraduationCap, Target, Eye, ShieldCheck, 
  Lightbulb, Compass, Award, Users, CheckCircle2,
  Sparkles, Terminal, Cpu, Globe2, Building2,
  Calendar, MapPin, Mail, Phone, ArrowRight,
  BookOpen, Layers, Zap, TrendingUp, FileCheck2,
  Code2, Scale, Clock, ChevronRight, MessageSquare,
  Server, Shield, Check, X, HelpCircle,
  Activity, Play, Pause, Volume2, RefreshCw, 
  GitPullRequest, GitBranch, DollarSign, HeartHandshake, FileCode,
  Network, Boxes, Lock, BarChart3, CheckCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { STATS, FACULTY_MEMBERS } from '../data/mockData';

export const AboutPage: React.FC = () => {
  const { navigateTo, setIsAiAssistantOpen, addToast } = useApp();
  
  // Interactive state
  const [activePedagogyTab, setActivePedagogyTab] = useState<'all' | 'code' | 'mentorship' | 'outcomes'>('all');
  const [activeMilestoneYear, setActiveMilestoneYear] = useState<string>('2026');
  const [activeHubId, setActiveHubId] = useState<'chennai' | 'bengaluru' | 'sf' | 'london'>('chennai');
  const [counselingName, setCounselingName] = useState('');
  const [counselingPhone, setCounselingPhone] = useState('');
  const [counselingTrack, setCounselingTrack] = useState('Full Stack & AI Systems');
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);

  // New interactive states:
  // 1. Live Cloud Telemetry
  const [telemetryNode, setTelemetryNode] = useState<'ap-south-1' | 'ap-southeast-1' | 'eu-central-1' | 'us-east-1'>('ap-south-1');
  const [isPingingTelemetry, setIsPingingTelemetry] = useState(false);

  // 2. Career ROI & Transformation Estimator
  const [currentRole, setCurrentRole] = useState<'junior_dev' | 'non_tech' | 'college_student' | 'qa_support'>('junior_dev');
  const [targetDiscipline, setTargetDiscipline] = useState<'fullstack_ai' | 'genai_llm' | 'cloud_devops' | 'datascience'>('fullstack_ai');

  // 3. A Day in the Life Hour
  const [activeDailyHour, setActiveDailyHour] = useState<number>(0);

  // 4. Alumni Audio Soundbite Simulation
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  // 5. Interactive Topology & Diagnostic Simulation
  const [pipelineStep, setPipelineStep] = useState<number>(0);
  const [isSimulatingPipeline, setIsSimulatingPipeline] = useState<boolean>(false);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [activeRadarDomain, setActiveRadarDomain] = useState<'distributed' | 'ai_agents' | 'cloud_k8s'>('distributed');

  // Global Hub Data
  const GLOBAL_HUBS = {
    chennai: {
      city: 'Chennai',
      type: 'Global Corporate HQ & Media Broadcast Studio',
      address: 'Olympia Technology Park, Level 8, Guindy, Chennai, Tamil Nadu - 600032',
      focus: 'Primary administrative headquarters, 4K interactive lecture broadcast studios, and student placement cells.',
      facilities: ['4 Dedicated Broadcast Studios', '120-Seat Sandbox Coding Bay', 'Recruiter Interview Suites', 'Hardware IoT Lab'],
      timing: 'Mon – Sat: 8:30 AM – 9:00 PM IST',
      phone: '+91 9361444644',
      email: 'chennai.hq@provisent.com',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80'
    },
    bengaluru: {
      city: 'Bengaluru',
      type: 'AI Systems & Cloud R&D Engineering Lab',
      address: '27th Main, Sector 2, HSR Layout, Bengaluru, Karnataka - 560102',
      focus: 'Curriculum development, agentic AI research, compiler & in-browser microVM engine engineering.',
      facilities: ['Distributed Systems Lab', 'GPU Cluster Testing Center', 'Faculty Lounge', 'AI Model Audit Desk'],
      timing: 'Mon – Fri: 9:00 AM – 8:00 PM IST',
      phone: '+91 9361444645',
      email: 'blr.labs@provisent.com',
      image: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&w=800&q=80'
    },
    sf: {
      city: 'San Francisco',
      type: 'US Silicon Valley Hiring & Alumni Liaison Desk',
      address: '500 Howard Street, Suite 400, Financial District, San Francisco, CA 94105',
      focus: 'Connecting tier-1 Provisent graduates with US remote tech startups and Silicon Valley engineering teams.',
      facilities: ['US Alumni Network Desk', 'Global Hiring Partner Lounge', 'Cross-Border Visa Advisory'],
      timing: 'Mon – Fri: 9:00 AM – 5:00 PM PST',
      phone: '+1 (415) 890-4812',
      email: 'us.careers@provisent.com',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80'
    },
    london: {
      city: 'London',
      type: 'EMEA Enterprise & Fintech Partnerships Desk',
      address: 'Level 33, 25 Canada Square, Canary Wharf, London, E14 5LB, United Kingdom',
      focus: 'Enterprise B2B skilling pipelines and European fintech graduate pathways.',
      facilities: ['Fintech Research Pod', 'Executive Briefing Center', 'Alumni Mentorship Node'],
      timing: 'Mon – Fri: 9:00 AM – 5:30 PM GMT',
      phone: '+44 20 7946 0918',
      email: 'london.office@provisent.com',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80'
    }
  };

  // Milestones Data
  const MILESTONES = [
    {
      year: '2023',
      headline: 'The Genesis of Sovereign Engineering',
      desc: 'Founded by tech leads in Chennai frustrated by the yawning divide between collegiate textbooks and production cloud codebases. Commenced research into in-browser container sandboxes.',
      cohortSize: '50 Pilot Engineers',
      placement: '100% Placed in 90 Days',
      badge: 'Incubation Phase'
    },
    {
      year: '2024',
      headline: 'The Sandbox OS Breakthrough',
      desc: 'Engineered our proprietary browser-based microVM lab infrastructure, eliminating local dev environment setup friction. Expanded course tracks across Full Stack, Kubernetes, and Data Science.',
      cohortSize: '2,400+ Students',
      placement: '89.6% Placement Rate',
      badge: 'Platform Scaling'
    },
    {
      year: '2025',
      headline: 'Enterprise Acceleration & Verifiable DNS Registry',
      desc: 'Integrated cryptographic digital credential registry with tamper-proof DNS verification. Partnered with 140+ tech enterprises for direct campus hiring pipelines and corporate upskilling.',
      cohortSize: '6,800+ Students',
      placement: '92.1% Placement Rate',
      badge: 'Industry Benchmark'
    },
    {
      year: '2026',
      headline: 'The Agentic AI & Frontier Mastery Era',
      desc: 'Introduced 24/7 AI Pedagogical Co-Pilot, advanced LLM system design tracks, DeFi auditing, and bio-informatics programs. Operating 4 international innovation desks across 24 countries.',
      cohortSize: '10,480+ Global Learners',
      placement: '92.4% Verified Placement',
      badge: 'Global Milestone'
    },
    {
      year: '2027+',
      headline: 'Decentralized Sovereign Skill Passports',
      desc: 'Pioneering verifiable zero-knowledge skill passports and collaborative spatial coding sandboxes for global asynchronous engineering teams.',
      cohortSize: 'Target: 50,000+ Engineers',
      placement: 'Target: 95%+ Direct Placements',
      badge: 'The Road Ahead'
    }
  ];

  // Pedagogy comparison matrix items
  const PEDAGOGY_ITEMS = [
    {
      category: 'code',
      feature: 'Practical Hands-on Code Delivery',
      traditional: 'Paper exams & pen-paper algorithms',
      mooc: 'Passive video watching, ~10% practical exercises',
      provisent: '100% In-browser ephemeral Docker labs with live Git commits',
      highlight: true
    },
    {
      category: 'code',
      feature: 'Code Review Quality',
      traditional: 'Graded by teaching assistants via paper rubrics',
      mooc: 'Automated multiple choice quiz or automated regex tests',
      provisent: 'Line-by-line pull request audits by working senior architects',
      highlight: true
    },
    {
      category: 'mentorship',
      feature: 'Mentorship & Doubt Resolution',
      traditional: 'Fixed office hours, often delayed or generic',
      mooc: 'Unmoderated public forums or dead Discord channels',
      provisent: '24/7 AI Code Tutor + Weekly 1:1 Live Video Clinics with Faculty',
      highlight: true
    },
    {
      category: 'mentorship',
      feature: 'Curriculum Freshness',
      traditional: 'Updated every 4–6 years following bureaucratic cycles',
      mooc: 'Recorded once, often referencing deprecated packages',
      provisent: 'Bi-monthly rolling syllabus updates aligned to 2026 tech trends',
      highlight: true
    },
    {
      category: 'outcomes',
      feature: 'Completion & Graduation Rate',
      traditional: 'Variable, but low real-world engineering readiness',
      mooc: 'Industry average of only 8% to 12% completion',
      provisent: '91.4% Milestone completion powered by proactive accountability',
      highlight: true
    },
    {
      category: 'outcomes',
      feature: 'Credential Verifiability',
      traditional: 'Paper degree easily forged or unverified overseas',
      mooc: 'Generic PDF badge easily manipulated with zero cryptographic backing',
      provisent: 'Cryptographic DNS hash registered in public credential ledger',
      highlight: true
    },
    {
      category: 'outcomes',
      feature: 'Career & Placement Support',
      traditional: 'On-campus mass recruitment with low average packages',
      mooc: 'Job board link or zero career guidance',
      provisent: 'Dedicated hiring desk, direct referrals to 180+ tech partners',
      highlight: true
    }
  ];

  const filteredPedagogy = activePedagogyTab === 'all' 
    ? PEDAGOGY_ITEMS 
    : PEDAGOGY_ITEMS.filter(item => item.category === activePedagogyTab);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!counselingName.trim() || !counselingPhone.trim()) {
      addToast('Missing Details', 'Please provide your full name and contact number.', 'error');
      return;
    }
    setIsBookingSubmitted(true);
    addToast(
      'Session Scheduled!',
      `Academic advisor booked for ${counselingName}. Reference ID: PROV-ADV-${Math.floor(1000 + Math.random() * 9000)}.`,
      'success'
    );
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* =========================================================================
            1. HERO & CORPORATE IDENTITY
        ========================================================================== */}
        <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/80 border border-cyan-500/20 shadow-2xl">
          {/* Subtle Cyber Glow Backdrops */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>OFFICIAL ORGANIZATION PROFILE</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ISO 9001:2015 Pedagogy Certified</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold">
                MCA Registered • CIN: U85499TN2023PTC160892
              </span>
            </div>

            <div className="max-w-4xl space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                PROVISENT EDUTECH <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                  PRIVATE LIMITED
                </span>
              </h1>
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">
                A sovereign global education, skill-development, career, certification and professional learning ecosystem engineered specifically for the AI, cloud-native, and distributed systems era.
              </p>
            </div>

            {/* Quick Badges & High-Impact Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                <p className="text-2xl sm:text-3xl font-mono font-black text-white">10,480+</p>
                <p className="text-xs text-cyan-400 font-semibold mt-0.5">Learners Across 24 Countries</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                <p className="text-2xl sm:text-3xl font-mono font-black text-emerald-400">92.4%</p>
                <p className="text-xs text-slate-300 font-semibold mt-0.5">Verified Career Transitions</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                <p className="text-2xl sm:text-3xl font-mono font-black text-purple-400">180+</p>
                <p className="text-xs text-slate-300 font-semibold mt-0.5">Active Tech Hiring Partners</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                <p className="text-2xl sm:text-3xl font-mono font-black text-amber-400">₹48 LPA</p>
                <p className="text-xs text-slate-300 font-semibold mt-0.5">Highest International Offer</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigateTo('/courses')}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Explore Accredited Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsAiAssistantOpen(true)}
                className="px-6 py-3 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-purple-200 font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Talk with AI Academic Advisor</span>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. INTERACTIVE SOVEREIGN LEARNING TOPOLOGY & PIPELINE VISUALIZER
        ========================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-cyan-500/30 shadow-2xl relative overflow-hidden space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
                <Network className="w-4 h-4" />
                <span>INTERACTIVE ARCHITECTURE TOPOLOGY</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
                How Code Executes in Provisent Sandboxes
              </h2>
            </div>
            <p className="text-xs text-slate-300 max-w-md">
              Every learner interaction operates inside a dedicated, isolated micro-virtual machine. Experience the five-stage execution lifecycle in real time.
            </p>
          </div>

          {/* 5-Stage Interactive Pipeline Topology */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              {
                step: 0,
                num: '01',
                title: 'Client WASM Kernel',
                desc: 'Browser-resident virtual disk mounts container rootfs',
                icon: Terminal,
                badge: '< 80ms Cold Start',
                color: 'text-cyan-400',
                borderColor: 'border-cyan-500'
              },
              {
                step: 1,
                num: '02',
                title: 'Anycast Mesh Gateway',
                desc: 'Geo-routes network packets to nearest edge point',
                icon: Globe2,
                badge: '< 20ms Edge Latency',
                color: 'text-teal-400',
                borderColor: 'border-teal-500'
              },
              {
                step: 2,
                num: '03',
                title: 'Linux MicroVM Sandbox',
                desc: 'Ephemeral kernel boots with isolated cgroups v2',
                icon: Boxes,
                badge: 'Firecracker MicroVM',
                color: 'text-purple-400',
                borderColor: 'border-purple-500'
              },
              {
                step: 3,
                num: '04',
                title: 'Socratic AST Diagnostics',
                desc: 'Parses Abstract Syntax Trees for complexity & bugs',
                icon: Cpu,
                badge: 'Live Code Audit',
                color: 'text-amber-400',
                borderColor: 'border-amber-500'
              },
              {
                step: 4,
                num: '05',
                title: 'Cryptographic Ledger',
                desc: 'Timestamped SHA-256 hash committed to public registry',
                icon: Lock,
                badge: 'Zero-Tamper Proof',
                color: 'text-emerald-400',
                borderColor: 'border-emerald-500'
              }
            ].map((node) => {
              const IconComp = node.icon;
              const isActive = pipelineStep === node.step;
              return (
                <button
                  key={node.step}
                  onClick={() => setPipelineStep(node.step)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer relative ${
                    isActive
                      ? `bg-slate-950 ${node.borderColor} shadow-lg shadow-cyan-500/10`
                      : 'bg-slate-950/60 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-500">{node.num}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 ${node.color} border border-white/5`}>
                      {node.badge}
                    </span>
                  </div>

                  <div className="my-3 flex items-center gap-2">
                    <div className={`p-2 rounded-xl bg-white/5 ${node.color}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-white leading-snug">{node.title}</span>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {node.desc}
                  </p>

                  {isActive && (
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-cyan-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Topology Sandbox Terminal Simulation */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="font-mono text-xs text-slate-400 ml-2">
                  provisent-sandbox://edge-node-{pipelineStep + 1}.internal.mesh
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsSimulatingPipeline(true);
                    let current = 0;
                    setPipelineStep(0);
                    const interval = setInterval(() => {
                      current += 1;
                      if (current < 5) {
                        setPipelineStep(current);
                      } else {
                        clearInterval(interval);
                        setIsSimulatingPipeline(false);
                        addToast('Sandbox Pipeline Verified', 'Full microVM execution, AST audit, and cryptographic commit completed in 812ms.', 'success');
                      }
                    }, 650);
                  }}
                  disabled={isSimulatingPipeline}
                  className="px-4 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold font-mono flex items-center gap-1.5 cursor-pointer disabled:opacity-50 transition-all shadow-md shadow-cyan-500/20"
                >
                  <Play className={`w-3.5 h-3.5 ${isSimulatingPipeline ? 'animate-spin' : ''}`} />
                  <span>{isSimulatingPipeline ? 'Executing Mesh...' : 'Run Live Pipeline Simulation'}</span>
                </button>
              </div>
            </div>

            {/* Simulated Live Console Log Feed based on selected step */}
            <div className="font-mono text-xs space-y-1.5 bg-black/50 p-4 rounded-xl border border-white/5">
              {pipelineStep === 0 && (
                <>
                  <p className="text-cyan-400 font-bold">[00:00.012] [CLIENT] Mounting WebAssembly virtual filesystem /dev/vda1 (ext4, 2048MB)...</p>
                  <p className="text-slate-300">[00:00.045] [CLIENT] Allocating browser worker threads (8 WebWorkers assigned).</p>
                  <p className="text-slate-400">[00:00.078] [CLIENT] Terminal initialized with bash 5.2.21-release. Ready for keystroke stream.</p>
                </>
              )}
              {pipelineStep === 1 && (
                <>
                  <p className="text-teal-400 font-bold">[00:00.095] [ANYCAST] Ingress connection received at edge PoP: BOM-01 (Mumbai Anycast).</p>
                  <p className="text-slate-300">[00:00.118] [ANYCAST] TLS 1.3 Handshake completed in 14.2ms. Multiplexed QUIC stream established.</p>
                  <p className="text-slate-400">[00:00.142] [ANYCAST] Zero-Trust token verified via Provisent Auth Daemon (Signature: ed25519-valid).</p>
                </>
              )}
              {pipelineStep === 2 && (
                <>
                  <p className="text-purple-400 font-bold">[00:00.220] [KERNEL] Allocating Firecracker MicroVM rootfs from cached COW snapshot.</p>
                  <p className="text-slate-300">[00:00.312] [KERNEL] Linux 6.6.14-provisent boot complete in 42ms. cgroups v2 memory limit: 1024MB.</p>
                  <p className="text-slate-400">[00:00.415] [KERNEL] Spawning containerized services: PostgreSQL 16, Redis 7.2, Node.js v22.</p>
                </>
              )}
              {pipelineStep === 3 && (
                <>
                  <p className="text-amber-400 font-bold">[00:00.510] [SOCRATIC-AI] AST Tree generated: 142 AST nodes parsed in 18ms.</p>
                  <p className="text-slate-300">[00:00.590] [SOCRATIC-AI] Runtime Complexity detected: O(N) linear time, 0 memory leaks found.</p>
                  <p className="text-slate-400">[00:00.640] [SOCRATIC-AI] Guiding hint: "Great use of buffered channels for concurrency control."</p>
                </>
              )}
              {pipelineStep === 4 && (
                <>
                  <p className="text-emerald-400 font-bold">[00:00.720] [LEDGER] Calculating SHA-256 hash of commit bundle: 9a7b...82cf1</p>
                  <p className="text-slate-300">[00:00.785] [LEDGER] Signed with Provisent Edutech Private Key (Certificate Registry ID: PRV-2026-9812).</p>
                  <p className="text-emerald-300 font-bold">[00:00.812] [LEDGER] Publicly verifiable at https://verify.provisent.com/record/PRV-2026-9812</p>
                </>
              )}
            </div>
          </div>

          {/* Engineering Competency Benchmark Radar & Diagnostic Check */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-white/10">
            
            {/* Competency Comparison Radar Bars */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                    COMPETENCY BENCHMARK
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    Provisent Mastery vs. Collegiate Standard
                  </h3>
                </div>

                {/* Track Selector */}
                <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-white/10 text-[11px] font-mono">
                  {[
                    { id: 'distributed', label: 'Systems' },
                    { id: 'ai_agents', label: 'AI Models' },
                    { id: 'cloud_k8s', label: 'DevOps' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveRadarDomain(tab.id as any);
                        setSelectedQuizAnswer(null);
                      }}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeRadarDomain === tab.id
                          ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Competency Bars */}
              {(() => {
                const DOMAIN_BENCHMARKS = {
                  distributed: [
                    { skill: 'Distributed Raft Consensus & Sharding', college: 18, provisent: 94 },
                    { skill: 'Zero-Downtime Microservices Architecture', college: 24, provisent: 96 },
                    { skill: 'Production Linux & Ephemeral Networking', college: 30, provisent: 92 },
                    { skill: 'Real-time WebSocket & Event Streaming', college: 35, provisent: 95 }
                  ],
                  ai_agents: [
                    { skill: 'Autonomous LLM Tool-Calling & Memory', college: 12, provisent: 95 },
                    { skill: 'vLLM Serving & Quantized Deployment', college: 15, provisent: 92 },
                    { skill: 'Vector Embeddings & Hybrid RAG Pipelines', college: 22, provisent: 98 },
                    { skill: 'AST Code Parsing & Prompt Guardrails', college: 20, provisent: 91 }
                  ],
                  cloud_k8s: [
                    { skill: 'Multi-Cluster Kubernetes & Cilium eBPF', college: 14, provisent: 96 },
                    { skill: 'ArgoCD GitOps & Declarative Delivery', college: 18, provisent: 94 },
                    { skill: 'Prometheus, Grafana & Distributed Tracing', college: 28, provisent: 95 },
                    { skill: 'Infrastructure-as-Code (Terraform/HCL)', college: 25, provisent: 93 }
                  ]
                };

                const skills = DOMAIN_BENCHMARKS[activeRadarDomain];

                return (
                  <div className="space-y-3 pt-2">
                    {skills.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="font-bold text-white">{item.skill}</span>
                          <span className="text-emerald-400 font-bold">Provisent: {item.provisent}%</span>
                        </div>
                        {/* Dual Bar: College vs Provisent */}
                        <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
                          <div 
                            className="bg-red-500/70 h-full transition-all duration-500" 
                            style={{ width: `${item.college}%` }}
                            title={`University Standard: ${item.college}%`}
                          />
                          <div 
                            className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full transition-all duration-500" 
                            style={{ width: `${item.provisent - item.college}%` }}
                            title={`Provisent Mastery: ${item.provisent}%`}
                          />
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                          <span>Collegiate Baseline ({item.college}%)</span>
                          <span className="text-cyan-400">+{item.provisent - item.college}% Engineering Delta</span>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>

            {/* Interactive Technical Instinct Check */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-purple-500/20 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>DIAGNOSTIC ARCHITECTURE CHECK</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">Interactive Challenge</span>
                </div>

                <h4 className="text-sm font-bold text-white leading-snug">
                  {activeRadarDomain === 'distributed' 
                    ? 'How do you prevent split-brain in a 3-node distributed database cluster during network partition?' 
                    : activeRadarDomain === 'ai_agents'
                    ? 'When building an agentic LLM code executor, what security isolation layer is mandatory?'
                    : 'Why use eBPF with Cilium instead of standard Linux iptables in high-throughput Kubernetes clusters?'}
                </h4>

                <div className="space-y-2 pt-1">
                  {[
                    activeRadarDomain === 'distributed'
                      ? ['A. Accept writes on all nodes and resolve with timestamps later', 'B. Require a strict majority quorum (N/2 + 1) via Raft/Paxos before committing writes', 'C. Reboot all disconnected nodes automatically']
                      : activeRadarDomain === 'ai_agents'
                      ? ['A. Run code directly inside node:child_process', 'B. Ephemeral gVisor or Firecracker MicroVM with network namespace dropping', 'C. Plain Docker container with root privileges']
                      : ['A. iptables scales linearly O(N) with cluster rules causing latency spikes, while eBPF operates in constant O(1) time in-kernel', 'B. iptables is completely deprecated in all Linux kernels', 'C. eBPF removes the need for IP addresses entirely']
                  ][0].map((opt, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => {
                        setSelectedQuizAnswer(optIdx);
                        if (optIdx === (activeRadarDomain === 'cloud_k8s' ? 0 : 1)) {
                          addToast('Correct Technical Analysis!', 'You correctly identified the production architectural pattern.', 'success');
                        }
                      }}
                      className={`w-full p-2.5 rounded-xl text-left text-xs font-mono transition-all border cursor-pointer ${
                        selectedQuizAnswer === optIdx
                          ? (optIdx === (activeRadarDomain === 'cloud_k8s' ? 0 : 1)
                              ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200'
                              : 'bg-rose-950/80 border-rose-400 text-rose-200')
                          : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {selectedQuizAnswer !== null && (
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs text-slate-300 space-y-1">
                    <span className="font-mono text-cyan-400 font-bold block">
                      {selectedQuizAnswer === (activeRadarDomain === 'cloud_k8s' ? 0 : 1)
                        ? '✓ Accurate Architectural Instinct:'
                        : 'ℹ Socratic Review:'}
                    </span>
                    <p className="text-[11px] leading-relaxed text-slate-300">
                      {activeRadarDomain === 'distributed'
                        ? 'A quorum majority (2 of 3 nodes) guarantees that only the partitioned segment containing the majority can elect a leader and append to the replicated state machine.'
                        : activeRadarDomain === 'ai_agents'
                        ? 'Untrusted LLM-generated code must never run with host kernel access. Hardware virtualization boundaries (Firecracker/gVisor) isolate syscalls safely.'
                        : 'iptables sequentially evaluates rules resulting in massive CPU thrashing at 10,000+ pods. eBPF programs run directly in the Linux socket layer with O(1) hash map lookups.'}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Evaluated in Provisent Tech Diagnostics</span>
                <span className="text-cyan-400 font-bold">100% Industry Aligned</span>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            3. PEDAGOGY MATRIX: THE PROVISENT SOVEREIGN DIFFERENCE
        ========================================================================== */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              THE PEDAGOGICAL BENCHMARK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              How Provisent Outperforms Conventional Learning
            </h2>
            <p className="text-sm text-slate-400">
              An architectural breakdown contrasting traditional university classrooms, generic video MOOC platforms, and the Provisent sovereign mastery engine.
            </p>

            {/* Filter Tabs */}
            <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
              {[
                { id: 'all', label: 'All Dimensions' },
                { id: 'code', label: 'Coding & Practice' },
                { id: 'mentorship', label: 'Mentorship & Support' },
                { id: 'outcomes', label: 'Placement & Credentials' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActivePedagogyTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activePedagogyTab === tab.id
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Table / Matrix */}
          <div className="rounded-3xl bg-slate-900/80 border border-white/10 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-slate-950/80 text-slate-400 font-mono text-[11px]">
                    <th className="p-4 sm:p-5 font-semibold w-1/4">PEDAGOGICAL DIMENSION</th>
                    <th className="p-4 sm:p-5 font-semibold w-1/4 text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-slate-500" />
                        <span>TRADITIONAL DEGREE</span>
                      </span>
                    </th>
                    <th className="p-4 sm:p-5 font-semibold w-1/4 text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-slate-500" />
                        <span>GENERIC VIDEO MOOCs</span>
                      </span>
                    </th>
                    <th className="p-4 sm:p-5 font-bold w-1/4 text-cyan-300 bg-cyan-950/40 border-l border-cyan-500/30">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span>PROVISENT MASTERY</span>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredPedagogy.map((item, index) => (
                    <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{item.feature}</span>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-400 leading-relaxed">
                        <div className="flex items-start gap-1.5">
                          <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span>{item.traditional}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-400 leading-relaxed">
                        <div className="flex items-start gap-1.5">
                          <X className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{item.mooc}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-cyan-200 font-medium leading-relaxed bg-cyan-950/20 border-l border-cyan-500/20">
                        <div className="flex items-start gap-1.5">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item.provisent}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* =========================================================================
            4. THE PROVISENT TECHNOLOGY ENGINE: EDUCATION AS SOFTWARE
        ========================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-[#0B0F19] border border-cyan-500/30 shadow-2xl relative">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
              <Server className="w-4 h-4" />
              <span>THE UNDERLYING CLOUD ARCHITECTURE</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Education Engineered as High-Performance Software
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We do not treat learning as static blog posts or video streams. Provisent is powered by a real-time cloud orchestrator providing live dev environments directly to learner browsers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Zero-Install Cloud Sandboxes</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ephemeral Node.js, Python, and Linux container sandboxes spin up in under 800 milliseconds directly in the browser via WebAssembly and isolated Docker runners.
              </p>
              <div className="text-[11px] font-mono text-cyan-400 pt-2 border-t border-white/5">
                Latency: &lt; 25ms Edge Execution
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-purple-500/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Socratic AI Code Diagnostics</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our embedded Gemini AI tutor parses AST syntax trees and runtime stack traces in real time, delivering conceptual guiding questions rather than just dumping answers.
              </p>
              <div className="text-[11px] font-mono text-purple-400 pt-2 border-t border-white/5">
                AST Tree Parsing & Live Linter
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Cryptographic DNS Ledger</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every certificate issuance is timestamped and cryptographically hashed with SHA-256 signatures, validated immediately by recruiters via <span className="font-mono text-emerald-400">verify.provisent.com</span>.
              </p>
              <div className="text-[11px] font-mono text-emerald-400 pt-2 border-t border-white/5">
                Zero-Tamper Guarantee
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-amber-500/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Ultra-Low Latency Broadcasts</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Adaptive bitrate WebRTC streaming infrastructure guarantees crystal-clear 1080p live coding and paired programming even on 3G and 4G mobile networks worldwide.
              </p>
              <div className="text-[11px] font-mono text-amber-400 pt-2 border-t border-white/5">
                Global Anycast CDN (40+ PoPs)
              </div>
            </div>

          </div>

          {/* Interactive Live Cloud Telemetry & Heartbeat Monitor */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-950/90 border border-cyan-500/20 shadow-inner">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span>Live Cloud Sandboxes Telemetry Cluster</span>
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400">
                    Active edge containers and distributed classroom telemetry (Global SLA 99.98%)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center bg-slate-900 border border-white/10 rounded-xl p-1 text-[11px] font-mono">
                  {[
                    { id: 'ap-south-1', label: 'Mumbai' },
                    { id: 'ap-southeast-1', label: 'Singapore' },
                    { id: 'eu-central-1', label: 'Frankfurt' },
                    { id: 'us-east-1', label: 'Virginia' }
                  ].map(node => (
                    <button
                      key={node.id}
                      onClick={() => setTelemetryNode(node.id as any)}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        telemetryNode === node.id 
                          ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {node.label}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setIsPingingTelemetry(true);
                    setTimeout(() => {
                      setIsPingingTelemetry(false);
                      addToast('Edge Node Synchronized', `Latency to ${telemetryNode} is optimal (< 20ms). 512 containers healthy.`, 'success');
                    }, 400);
                  }}
                  disabled={isPingingTelemetry}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-cyan-300 font-mono flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isPingingTelemetry ? 'animate-spin text-cyan-400' : ''}`} />
                  <span>{isPingingTelemetry ? 'Pinging...' : 'Ping Node'}</span>
                </button>
              </div>
            </div>

            {/* Live Telemetry Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 block">Active MicroVMs</span>
                <span className="text-xl font-bold font-mono text-cyan-300 mt-0.5 block">512 Pods</span>
                <span className="text-[10px] text-emerald-400 font-mono">0.00% packet loss</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 block">Today's Compilations</span>
                <span className="text-xl font-bold font-mono text-white mt-0.5 block">19,430 Runs</span>
                <span className="text-[10px] text-slate-400 font-mono">Avg exec: 412ms</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 block">Edge Latency ({telemetryNode})</span>
                <span className="text-xl font-bold font-mono text-emerald-400 mt-0.5 block">
                  {telemetryNode === 'ap-south-1' ? '12ms' : telemetryNode === 'ap-southeast-1' ? '24ms' : telemetryNode === 'eu-central-1' ? '72ms' : '82ms'}
                </span>
                <span className="text-[10px] text-cyan-400 font-mono">Anycast Routed</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 block">PRs Audited Today</span>
                <span className="text-xl font-bold font-mono text-purple-300 mt-0.5 block">148 Reviews</span>
                <span className="text-[10px] text-purple-400 font-mono">100% human mentor signoff</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            5. MILESTONE EVOLUTION TIMELINE (2023 - 2027+)
        ========================================================================== */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                HISTORICAL ACCELERATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                The Provisent Journey & Evolution
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              From an experimental engineering cohort in Chennai to an international accreditation standard operating in 24 countries.
            </p>
          </div>

          {/* Timeline navigation pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/10">
            {MILESTONES.map(m => (
              <button
                key={m.year}
                onClick={() => setActiveMilestoneYear(m.year)}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  activeMilestoneYear === m.year
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                <span>{m.year}</span>
                <span className="text-[10px] opacity-75 hidden sm:inline">• {m.badge}</span>
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          {MILESTONES.filter(m => m.year === activeMilestoneYear).map(m => (
            <div 
              key={m.year}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-cyan-500/30 flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center shadow-xl animate-fadeIn"
            >
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold border border-cyan-500/20">
                    Milestone Year {m.year}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 font-mono text-xs border border-white/10">
                    {m.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {m.headline}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {m.desc}
                </p>
              </div>

              <div className="flex sm:flex-col gap-4 w-full lg:w-auto shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 text-left min-w-[160px]">
                  <span className="text-[11px] font-mono text-slate-400 block">Cohort Size</span>
                  <span className="text-lg font-bold text-white font-mono mt-0.5 block">{m.cohortSize}</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 text-left min-w-[160px]">
                  <span className="text-[11px] font-mono text-slate-400 block">Placement Record</span>
                  <span className="text-lg font-bold text-emerald-400 font-mono mt-0.5 block">{m.placement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            6. THE 6 IMMUTABLE LAWS OF THE PROVISENT ENGINEER
        ========================================================================== */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              CULTURAL CODE & ETHICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The 6 Immutable Engineering Laws
            </h2>
            <p className="text-xs text-slate-400">
              The foundational convictions that dictate our curriculum design, faculty standards, and student evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Code Is Meant to Run',
                desc: 'Passing a multiple-choice quiz proves memory; running a containerized service with green health checks proves engineering capability.',
                icon: Terminal,
                color: 'text-cyan-400'
              },
              {
                num: '02',
                title: 'Never Teach on Toy Stacks',
                desc: 'We do not teach obsolete frameworks or artificial sandboxes. If Netflix and Stripe use Kafka and Next.js, our students code with Kafka and Next.js.',
                icon: Code2,
                color: 'text-purple-400'
              },
              {
                num: '03',
                title: 'No Pedigree Discrimination',
                desc: 'Tier-1 IIT or self-taught from a rural village: your GitHub commit history, system design clarity, and grit are the only metrics that matter at Provisent.',
                icon: Scale,
                color: 'text-emerald-400'
              },
              {
                num: '04',
                title: 'Radical Placement Transparency',
                desc: 'Zero inflated CTC marketing tricks. Every placed student, verified salary package, and hiring company in our annual audit report is independently validated.',
                icon: ShieldCheck,
                color: 'text-amber-400'
              },
              {
                num: '05',
                title: 'Faculty Must Actively Ship Code',
                desc: 'Retired academics without recent enterprise experience are forbidden from teaching core engineering. All faculty lead active software architectures by day.',
                icon: Users,
                color: 'text-pink-400'
              },
              {
                num: '06',
                title: 'Lifelong Access & Eternal Upgrades',
                desc: 'Technology changes rapidly. When you graduate from Provisent, you retain lifetime access to updated modules, live hackathons, and alumni hiring desks.',
                icon: Sparkles,
                color: 'text-cyan-400'
              }
            ].map((law) => {
              const Icon = law.icon;
              return (
                <div 
                  key={law.num}
                  className="p-6 rounded-3xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${law.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                        LAW {law.num}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {law.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {law.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            7. GLOBAL INNOVATION CENTERS & PHYSICAL HUBS
        ========================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-white/10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>GLOBAL PRESENCE & PHYSICAL HUBS</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
                Where Provisent Operates
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Explore our physical broadcast studios, engineering labs, and international graduate hiring desks.
            </p>
          </div>

          {/* Hub Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'chennai', label: 'Chennai HQ', desc: 'Tamil Nadu, India' },
              { id: 'bengaluru', label: 'Bengaluru Labs', desc: 'Karnataka, India' },
              { id: 'sf', label: 'San Francisco', desc: 'California, USA' },
              { id: 'london', label: 'London EMEA', desc: 'United Kingdom' }
            ].map(hub => (
              <button
                key={hub.id}
                onClick={() => setActiveHubId(hub.id as any)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer border ${
                  activeHubId === hub.id
                    ? 'bg-cyan-950/60 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-950/60 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white">{hub.label}</span>
                  <Building2 className={`w-4 h-4 ${activeHubId === hub.id ? 'text-cyan-400' : 'text-slate-600'}`} />
                </div>
                <span className="text-[11px] font-mono text-slate-400 block mt-1">{hub.desc}</span>
              </button>
            ))}
          </div>

          {/* Active Hub Card */}
          {(() => {
            const currentHub = GLOBAL_HUBS[activeHubId];
            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      {currentHub.type}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">
                      {currentHub.city} Innovation Desk
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {currentHub.focus}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                    <p className="text-slate-400 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{currentHub.address}</span>
                    </p>
                    <p className="text-slate-400 flex items-center gap-2 font-mono">
                      <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{currentHub.timing}</span>
                    </p>
                  </div>

                  {/* Facilities Chips */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      ON-PREMISE INFRASTRUCTURE
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentHub.facilities.map((fac, i) => (
                        <span key={i} className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-mono">
                          {fac}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 text-xs font-mono">
                    <a 
                      href={`mailto:${currentHub.email}`}
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-bold"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{currentHub.email}</span>
                    </a>
                    <a 
                      href={`tel:${currentHub.phone}`}
                      className="text-slate-300 hover:text-white flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{currentHub.phone}</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 h-64 sm:h-80 rounded-2xl overflow-hidden relative border border-white/10 shadow-lg">
                  <img 
                    src={currentHub.image} 
                    alt={currentHub.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                    <span>Provisent {currentHub.city} Operations</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active Hub
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* =========================================================================
            8. ACADEMIC ADVISORY BOARD & MENTORSHIP COUNCIL
        ========================================================================== */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                DISTINGUISHED PEDAGOGY LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                The Faculty & Advisory Deans
              </h2>
            </div>
            <button
              onClick={() => navigateTo('/mentors')}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
            >
              <span>View All 30+ Mentors & Deans</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTY_MEMBERS.slice(0, 4).map((member) => (
              <div 
                key={member.id}
                className="p-5 rounded-3xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="relative h-44 rounded-2xl overflow-hidden">
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-amber-500/20 font-bold">
                      ★ {member.rating}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5 leading-snug">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-[11px] text-slate-400 line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {member.skills.slice(0, 3).map((s, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{member.studentsCount.toLocaleString()}+ Learners</span>
                  <button 
                    onClick={() => navigateTo('/courses')}
                    className="text-cyan-400 hover:text-cyan-300 font-bold cursor-pointer"
                  >
                    Curriculum →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            8B. INTERACTIVE CAREER TRANSFORMATION & ROI PROJECTION ENGINE
        ========================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-cyan-500/20 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>INTERACTIVE CAREER RETURN ON INVESTMENT</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Project Your Engineering Transformation
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Calculate realistic salary trajectories, expected timeline to production competence, and signature capstones based on our audited 2024–2026 placement ledgers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Selectors */}
            <div className="lg:col-span-5 space-y-5 p-6 rounded-2xl bg-slate-950/70 border border-white/10">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span>Configure Your Current Background</span>
              </h3>

              <div className="space-y-2">
                <label className="text-[11px] font-mono text-slate-400 block">Where are you starting from?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'junior_dev', label: 'Junior Developer', current: '₹5.5 LPA' },
                    { id: 'non_tech', label: 'Non-Tech / Switcher', current: '₹3.5 LPA' },
                    { id: 'college_student', label: 'College Student', current: 'Fresher' },
                    { id: 'qa_support', label: 'QA / Tech Support', current: '₹4.2 LPA' }
                  ].map(r => (
                    <button
                      key={r.id}
                      onClick={() => setCurrentRole(r.id as any)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                        currentRole === r.id
                          ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                          : 'bg-slate-900/50 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                      }`}
                    >
                      <span className="font-bold block">{r.label}</span>
                      <span className="text-[10px] font-mono text-slate-400 mt-0.5 block">Baseline: {r.current}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/5">
                <label className="text-[11px] font-mono text-slate-400 block">Target High-Impact Discipline</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'fullstack_ai', label: 'Full Stack & AI Systems' },
                    { id: 'genai_llm', label: 'Generative AI & LLM Eng' },
                    { id: 'cloud_devops', label: 'Cloud Native & SRE DevOps' },
                    { id: 'datascience', label: 'Data Science & MLOps' }
                  ].map(d => (
                    <button
                      key={d.id}
                      onClick={() => setTargetDiscipline(d.id as any)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                        targetDiscipline === d.id
                          ? 'bg-purple-950/80 border-purple-400 text-white shadow-md shadow-purple-500/10'
                          : 'bg-slate-900/50 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                      }`}
                    >
                      <span className="font-bold block">{d.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dynamic ROI Projection Dashboard */}
            {(() => {
              const PROJECTIONS = {
                fullstack_ai: {
                  salaryRange: '₹14 LPA – ₹24 LPA',
                  medianJump: '+260%',
                  timeline: '16 Weeks • 4 Capstones',
                  payback: '36 Days of Employment',
                  capstoneTitle: 'Multi-Tenant Microservices SaaS with Raft Distributed Cache & Real-Time Sync',
                  skills: ['React 19', 'Go / Node.js', 'PostgreSQL Sharding', 'Docker', 'Redis Cluster'],
                  hiring: ['Razorpay', 'Swiggy', 'Freshworks', 'Zoho', 'Postman']
                },
                genai_llm: {
                  salaryRange: '₹18 LPA – ₹32 LPA',
                  medianJump: '+320%',
                  timeline: '18 Weeks • 5 Capstones',
                  payback: '28 Days of Employment',
                  capstoneTitle: 'Autonomous Multi-Agent Enterprise Research Pipeline with AST Code Execution & RAG',
                  skills: ['PyTorch', 'LangGraph', 'vLLM Serving', 'Vector DBs (Qdrant)', 'LoRA Fine-tuning'],
                  hiring: ['Sarvam AI', 'Amazon AI Lab', 'Krutrim', 'Ola Electric', 'Fractal']
                },
                cloud_devops: {
                  salaryRange: '₹16 LPA – ₹26 LPA',
                  medianJump: '+280%',
                  timeline: '14 Weeks • 4 Capstones',
                  payback: '32 Days of Employment',
                  capstoneTitle: 'Zero-Trust Multi-Cloud Kubernetes Cluster with ArgoCD GitOps & Prometheus Observability',
                  skills: ['Kubernetes (EKS/GKE)', 'Terraform', 'Vault', 'ArgoCD', 'eBPF Cilium'],
                  hiring: ['PhonePe', 'Flipkart', 'CleverTap', 'Infosys Cloud', 'Nutanix']
                },
                datascience: {
                  salaryRange: '₹14 LPA – ₹22 LPA',
                  medianJump: '+240%',
                  timeline: '16 Weeks • 4 Capstones',
                  payback: '38 Days of Employment',
                  capstoneTitle: 'Real-Time Financial Fraud Detection Engine on Apache Spark Lakehouse & Feast Store',
                  skills: ['Apache Spark', 'Snowflake', 'XGBoost', 'Airflow', 'dbt Data Modeling'],
                  hiring: ['Tiger Analytics', 'Mu Sigma', 'PayPal', 'CRED', 'JPMorgan Chase']
                }
              };

              const currentData = PROJECTIONS[targetDiscipline];

              return (
                <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                        PROJECTED OUTCOME METRICS
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                        Audited Placement Benchmark
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                        <span className="text-[10px] font-mono text-slate-400 block">Expected First-Year CTC</span>
                        <span className="text-xl sm:text-2xl font-black font-mono text-emerald-400 mt-1 block">
                          {currentData.salaryRange}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">
                          Avg Leap: <strong className="text-white">{currentData.medianJump}</strong>
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                        <span className="text-[10px] font-mono text-slate-400 block">Time to Job-Ready</span>
                        <span className="text-xl sm:text-2xl font-black font-mono text-cyan-300 mt-1 block">
                          {currentData.timeline.split('•')[0]}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">
                          {currentData.timeline.split('•')[1]}
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 col-span-2 sm:col-span-1">
                        <span className="text-[10px] font-mono text-slate-400 block">Tuition ROI Horizon</span>
                        <span className="text-xl sm:text-2xl font-black font-mono text-purple-300 mt-1 block">
                          ~{currentData.payback.split(' ')[0]} {currentData.payback.split(' ')[1]}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">
                          Recovered from salary lift
                        </span>
                      </div>
                    </div>

                    {/* Capstone Project Showcase */}
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/20 space-y-2">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>FLAGSHIP CAPSTONE YOU WILL SHIP TO GITHUB</span>
                      </span>
                      <p className="text-xs font-bold text-white leading-relaxed">
                        {currentData.capstoneTitle}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {currentData.skills.map((s, i) => (
                          <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hiring Partners for this profile */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        ACTIVE ENTERPRISES HIRING THIS PROFILE
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {currentData.hiring.map((h, i) => (
                          <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-200 font-mono">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">
                      Includes 1:1 resume teardown & mock technical interviews.
                    </span>
                    <button
                      onClick={() => navigateTo('/courses')}
                      className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-md shadow-cyan-500/20"
                    >
                      <span>Enroll in Track</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* =========================================================================
            8C. A DAY IN THE LIFE OF A PROVISENT APPRENTICE
        ========================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-white/10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>EXPERIENTIAL PEDAGOGY IN ACTION</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
                A Day in the Life of a Provisent Apprentice
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Experience the rigorous, collaborative, and joyful rhythm that transforms collegiate beginners into production-ready software engineers.
            </p>
          </div>

          {/* Time block pills */}
          {(() => {
            const DAILY_TIMELINE = [
              {
                time: '09:00 AM',
                tag: 'Standup & Sprints',
                title: 'Morning Architectural Standup',
                desc: '15-minute sprint planning with your cohort team lead. Review yesterday’s pull requests, unblock Git merge conflicts, and outline daily architecture goals.',
                tooling: 'Jira Sprint Board, GitHub Projects, Slack War Room',
                quote: '"We run our cohorts like real engineering squads at Stripe — no passive listening, just crisp standup updates."'
              },
              {
                time: '10:30 AM',
                tag: 'MicroVM Sprints',
                title: 'In-Browser Container Coding Block',
                desc: 'Dive into live containerized Docker environments directly in the browser. Build distributed message queues, design database indexing strategies, and ship code.',
                tooling: 'Provisent MicroVM Cloud IDE, Linux Terminal, Postman, Jest',
                quote: '"No environment setup nightmares. I click start and my full multi-container Kubernetes cluster is live in 800ms."'
              },
              {
                time: '02:00 PM',
                tag: 'AI Code Audit',
                title: 'Socratic AI Diagnostics & Refactoring',
                desc: 'Run your working branches against our embedded AST code audit engine. Receive instantaneous feedback on algorithmic complexity, memory leaks, and edge-case testing.',
                tooling: 'Gemini Socratic Engine, SonarQube, AST Syntax Parser',
                quote: '"The AI doesn’t just hand me answers. It asks why my SQL query runs in O(N²) time and nudges me to design an index."'
              },
              {
                time: '04:30 PM',
                tag: '1:1 Faculty Clinic',
                title: 'Live Video Code Review with Senior Architect',
                desc: 'Meet face-to-face with a tech lead from Zoho or Freshworks. Screen-share your codebase, defend your architectural choices, and receive line-by-line pull request critique.',
                tooling: 'WebRTC HD Video Clinic, GitHub PR Comments, VS Code Live Share',
                quote: '"Having an Amazon engineering manager critique my API design gave me the exact confidence I needed in my real tech rounds."'
              },
              {
                time: '07:00 PM',
                tag: 'Peer War Room',
                title: 'Global Hack Hour & Pair Programming',
                desc: 'Team up with peers across Singapore, London, and Bangalore for timed algorithmic challenges and system design war games.',
                tooling: 'Live Code Sandbox, Collaborative Canvas, Discord Voice Pods',
                quote: '"The peer accountability is infectious. You never feel isolated like on traditional video platforms."'
              },
              {
                time: 'Async / 24x7',
                tag: 'Sandbox Lab',
                title: 'Unlimited Personal Compute Playground',
                desc: 'Experiment with your own personal passion projects. Spin up Redis clusters, fine-tune open weights LLMs, or deploy web apps with zero cloud billing worries.',
                tooling: 'Provisent Sovereign Cloud Sandbox (Zero Personal Credit Card Required)',
                quote: '"I built my portfolio projects on Provisent’s infrastructure without paying a single rupee for AWS or GCP."'
              }
            ];

            const activeItem = DAILY_TIMELINE[activeDailyHour];

            return (
              <div className="space-y-6">
                {/* Horizontal Timeline Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {DAILY_TIMELINE.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveDailyHour(idx)}
                      className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                        activeDailyHour === idx
                          ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                          : 'bg-slate-950/60 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                      }`}
                    >
                      <span className="font-mono text-xs font-bold text-cyan-400 block">{item.time}</span>
                      <span className="text-xs font-bold text-slate-200 mt-1 block truncate">{item.tag}</span>
                    </button>
                  ))}
                </div>

                {/* Detail Card for Active Hour */}
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-cyan-500/20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">
                        {activeItem.time} • Phase {activeDailyHour + 1} of 6
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {activeItem.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {activeItem.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {activeItem.desc}
                    </p>

                    <div className="pt-2 border-t border-white/10 text-xs">
                      <span className="text-slate-400 font-mono block mb-1">Tools & Ecosystem Used:</span>
                      <span className="text-cyan-300 font-mono font-medium">{activeItem.tooling}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-semibold block">
                      STUDENT PERSPECTIVE
                    </span>
                    <p className="text-xs text-slate-200 italic leading-relaxed">
                      {activeItem.quote}
                    </p>
                    <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                      <span>Provisent Alumni Voice</span>
                      <span className="text-emerald-400">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* =========================================================================
            8D. VOICES FROM GLOBAL ALUMNI (WITH SOUNDBITE DISPATCH SIMULATION)
        ========================================================================== */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
                <Volume2 className="w-4 h-4" />
                <span>VERIFIED GRADUATE SOUNDBITES</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Audio Dispatches From Our Alumni
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Hear directly from engineers who broke through the background barrier and secured pivotal positions at top tech firms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'priya',
                name: 'Priya Sundaram',
                currentRole: 'Senior Frontend Engineer @ Freshworks',
                pastRole: 'Civil Engineering Graduate (Zero CS Degree)',
                package: '₹19 LPA (from ₹0)',
                avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
                transcript: '"Coming from civil engineering, recruiters kept auto-rejecting my resume. Provisent gave me an undeniable GitHub footprint with real WebAssembly and React 19 micro-frontends that blew the interviewers away."'
              },
              {
                id: 'karthik',
                name: 'Karthik Ramanathan',
                currentRole: 'Cloud DevOps Architect @ Razorpay',
                pastRole: 'BPO Technical Support Representative',
                package: '₹22 LPA (from ₹3.2 LPA)',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
                transcript: '"I was trapped in call center shifts for 3 years. Provisent’s weekend Kubernetes war rooms and 1:1 mentor code audits were grueling, but they transformed my entire life. Razorpay hired me in 2 weeks."'
              },
              {
                id: 'ananya',
                name: 'Ananya Mukherjee',
                currentRole: 'AI Systems Engineer @ Sarvam AI',
                pastRole: 'Tier-3 Rural Engineering College Student',
                package: '₹28 LPA (Highest in her College)',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
                transcript: '"No FAANG company ever visited my college. Through Provisent’s public credential registry and verified LLM capstones, I bypassed college mass-recruitment and got directly referred to frontier AI labs."'
              }
            ].map(alumni => {
              const isPlaying = playingAudioId === alumni.id;
              return (
                <div 
                  key={alumni.id}
                  className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-4 shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={alumni.avatar} 
                        alt={alumni.name} 
                        className="w-12 h-12 rounded-2xl object-cover border border-cyan-500/30"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white">{alumni.name}</h4>
                        <p className="text-[11px] font-mono text-emerald-400 font-semibold">{alumni.currentRole}</p>
                        <p className="text-[10px] text-slate-400">{alumni.pastRole}</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-400">Placement Package:</span>
                        <span className="text-emerald-400 font-bold">{alumni.package}</span>
                      </div>
                    </div>

                    {/* Audio Soundbite Dispatch Player */}
                    <div className="p-3 rounded-2xl bg-slate-950 border border-cyan-500/20 space-y-2">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            if (isPlaying) {
                              setPlayingAudioId(null);
                            } else {
                              setPlayingAudioId(alumni.id);
                              addToast('Playing Voice Soundbite', `Listening to ${alumni.name}'s transition story.`, 'info');
                            }
                          }}
                          className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md shadow-cyan-500/20"
                        >
                          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                          <span>{isPlaying ? 'Pause Audio' : 'Play Soundbite'}</span>
                        </button>

                        {/* Animated waveform visualizer */}
                        <div className="flex items-center gap-1 h-5">
                          {[40, 70, 90, 60, 30, 80, 50, 95, 65, 45].map((h, i) => (
                            <span 
                              key={i} 
                              className={`w-1 rounded-full transition-all ${
                                isPlaying 
                                  ? 'bg-cyan-400 animate-pulse' 
                                  : 'bg-slate-700'
                              }`}
                              style={{ 
                                height: isPlaying ? `${h}%` : '20%',
                                animationDelay: `${i * 100}ms`
                              }} 
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-300 italic leading-relaxed pt-1">
                        {alumni.transcript}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                    <span>Verified LinkedIn & Certificate Hash</span>
                    <span className="text-cyan-400">Authentic Story</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            8E. PROVISENT RESEARCH, OPEN SOURCE & SOCIAL IMPACT
        ========================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-purple-500/20 shadow-2xl space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-300 font-bold flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4" />
              <span>OPEN ECOSYSTEM & SOCIAL IMPACT</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Giving Back: Open Source & Educational Equity
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Provisent is not just a commercial training company. We are committed to technological equity, open research, and funding opportunities for underserved engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Open Source Tools */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                  <FileCode className="w-4 h-4" />
                  <span>OPEN-SOURCE LIBRARIES</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">GitHub Verified</span>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'provisent/microvm-runner', stars: '4.2k ★', desc: 'In-browser WASM microkernel for instant Docker-like containerization.' },
                  { name: 'provisent/socratic-ast-lint', stars: '2.9k ★', desc: 'Abstract Syntax Tree parser providing guided pedagogical hints.' },
                  { name: 'provisent/verifiable-credential-dns', stars: '1.8k ★', desc: 'RFC-compliant cryptographic DNS registry for tamper-proof degrees.' }
                ].map((repo, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-white">{repo.name}</span>
                      <span className="font-mono text-[11px] text-amber-400">{repo.stars}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">{repo.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scholarships & Inclusion */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-purple-400 font-bold flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>SCHOLARSHIP ENDOWMENTS</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400">Active Grants</span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20">
                  <span className="text-xs font-bold text-purple-200 block">Women in Tech STEM Grants</span>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    ₹1.5 Crore allocated to date, providing up to 100% full-tuition waivers for women engineers transitioning to systems software.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                  <span className="text-xs font-bold text-white block">Rural Polytechnic Coding Initiative</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Free cloud sandbox IDE licenses and mentorship delivered to 50+ tier-3 colleges across rural Tamil Nadu, Karnataka, and Andhra Pradesh.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Papers */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span>RESEARCH CONTRIBUTIONS</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">Peer Reviewed</span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                  <span className="text-xs font-bold text-white block">Adaptive WASM Execution in Education</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Presented at the International Systems Conference on WebAssembly runtime optimizations for zero-latency classroom virtualization.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                  <span className="text-xs font-bold text-white block">Socratic LLM Prompting Protocols</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Guidelines on preventing hallucination and knowledge-dumping in generative AI computer science co-pilots.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            9. INTERACTIVE: SCHEDULE A CAMPUS TOUR OR ACADEMIC DEAN 1:1
        ========================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-cyan-950/40 border border-purple-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-300 font-bold flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>DIRECT CAMPUS & PROGRAM COUNSELING</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Want to Walk Through our Live Sandbox Labs or Tour our Physical Campus?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Schedule a complimentary 30-minute diagnostic session with an academic dean. We will evaluate your technical background, walk you through our in-browser microVM cloud IDE, and outline your customized career roadmap.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Free Sandbox Lab Access</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Personalized Skill Gap Audit</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero High-Pressure Sales</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-white/10 shadow-xl">
              {isBookingSubmitted ? (
                <div className="p-6 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Diagnostic Session Confirmed!</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <strong>{counselingName}</strong>. Our senior academic advisor will contact you within 2 hours at <strong>{counselingPhone}</strong> with your private Sandbox Lab access keys.
                  </p>
                  <button
                    onClick={() => setIsBookingSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-cyan-300 cursor-pointer"
                  >
                    Book Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    <span>Reserve Academic Consultation</span>
                  </h3>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Full Legal Name</label>
                    <input 
                      type="text" 
                      value={counselingName}
                      onChange={(e) => setCounselingName(e.target.value)}
                      placeholder="e.g. Vikramaditya Sharma"
                      required
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Phone / WhatsApp Number</label>
                    <input 
                      type="tel" 
                      value={counselingPhone}
                      onChange={(e) => setCounselingPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Target Engineering Specialization</label>
                    <select 
                      value={counselingTrack}
                      onChange={(e) => setCounselingTrack(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Full Stack & AI Systems">Full Stack Web & AI Systems (MERN/Next.js)</option>
                      <option value="Generative AI & LLM Systems">Generative AI, PyTorch & LLM Architectures</option>
                      <option value="Cloud Native & Kubernetes">Cloud Native Microservices, Docker & DevOps</option>
                      <option value="Data Science & ML">Data Science Lakehouses & Predictive ML</option>
                      <option value="Smart Contract Security">Web3 Smart Contract Auditing & DeFi</option>
                      <option value="Enterprise Product Strategy">Executive Product Management & Strategy</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Confirm 1:1 Consultation Slot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* =========================================================================
            10. CORPORATE COMPLIANCE & LEGAL REGISTRATION FOOTER
        ========================================================================== */}
        <div className="p-8 rounded-3xl bg-slate-950 border border-white/10 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                REGULATORY JURISDICTION & GOVERNANCE
              </span>
              <h3 className="text-base font-bold text-white mt-1">
                PROVISENT EDUTECH PRIVATE LIMITED
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Incorporated pursuant to subsection (2) of section 7 and sub-section (1) of section 8 of the Companies Act, 2013 (18 of 2013).
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300">
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                CIN: <strong className="text-white">U85499TN2023PTC160892</strong>
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                GSTIN: <strong className="text-emerald-400">33AAHCP9201L1Z8</strong>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-400 font-mono">
            <div>
              <span className="text-slate-200 font-bold block mb-1">Corporate Headquarters</span>
              <p>Olympia Technology Park, Level 8</p>
              <p>Guindy, Chennai, Tamil Nadu - 600032</p>
              <p className="text-slate-500 mt-1">Operating Jurisdiction: Republic of India</p>
            </div>
            <div>
              <span className="text-slate-200 font-bold block mb-1">Central Admissions & Inquiries</span>
              <p>Official Admissions: <strong className="text-cyan-400">hr@provisent.com</strong></p>
              <p>Direct Faculty Hotline: <strong className="text-white">+91 9361444644</strong></p>
              <p className="text-slate-500 mt-1">Support Available: 24/7 Global Desk</p>
            </div>
            <div>
              <span className="text-slate-200 font-bold block mb-1">Public Verification Registry</span>
              <p>Credential Verification: <strong className="text-emerald-400">verify.provisent.com</strong></p>
              <p>Hiring Partner Network: <strong className="text-purple-400">hire@provisent.com</strong></p>
              <p className="text-slate-500 mt-1">Recruiter Portals & API Audits</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


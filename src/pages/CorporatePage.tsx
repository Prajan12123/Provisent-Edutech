import React, { useState } from 'react';
import { 
  Building2, Users, BarChart3, ShieldCheck, CheckCircle2, 
  Send, ArrowRight, Laptop, Award, Phone, Mail, FileText, 
  Sparkles, Terminal, Code2, Cpu, Check, Compass, Calendar, 
  Clock, ChevronDown, ChevronRight, Zap, Target, DollarSign, 
  Layers, Workflow, TrendingUp, BookOpen, AlertCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';

type SolutionKey = 'curriculum' | 'bootcamps' | 'tracking' | 'onboarding';

export const CorporatePage: React.FC = () => {
  const { addToast } = useApp();

  // Active solution tab for interactive deep-dive
  const [selectedSolution, setSelectedSolution] = useState<SolutionKey>('curriculum');

  // Consultation Request Form state
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    workEmail: '',
    phoneNumber: '',
    teamSize: '25-50',
    selectedSolution: 'All Solutions (Comprehensive)',
    timeline: 'Within 30 Days',
    techStackGoals: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [consultationRefId, setConsultationRefId] = useState('');

  // Interactive ROI & Velocity Estimator State
  const [teamSizeInput, setTeamSizeInput] = useState<number>(30);
  const [selectedDomain, setSelectedDomain] = useState<'ai' | 'cloud' | 'frontend' | 'data' | 'cyber'>('ai');
  const [trainingPace, setTrainingPace] = useState<'intensive' | 'blended'>('intensive');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `PROV-CORP-${Math.floor(100000 + Math.random() * 900000)}`;
    setConsultationRefId(refCode);
    setSubmitted(true);
    addToast(
      'Consultation Request Submitted',
      `Reference ID #${refCode}. Our Principal Enterprise Solutions Architect will reach out within 4 business hours.`,
      'success'
    );
  };

  const scrollToConsultationForm = (preselectSolution?: string) => {
    if (preselectSolution) {
      setFormData(prev => ({ ...prev, selectedSolution: preselectSolution }));
    }
    const element = document.getElementById('consultation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 4 Core Pillars Requested by User
  const coreSolutions = [
    {
      id: 'curriculum' as SolutionKey,
      title: 'Customized Curriculum',
      tagline: 'Tailored Tech Stack Alignment & Immediate Business ROI',
      summary: "We design training programs specifically tailored to your company's tech stack and business goals, ensuring immediate ROI.",
      icon: Code2,
      badge: 'Bespoke Alignment',
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
      keyMetrics: '100% Tech Stack Matching',
      deliverables: [
        'Bespoke curriculum modularized around your proprietary repositories & microservices',
        'Direct alignment with your cloud infrastructure (AWS, GCP, Azure, or Private Cloud)',
        'Customized engineering coding guidelines and architectural standards embedded in labs',
        'Targeted skill gap closing based on internal engineering performance reviews'
      ],
      sampleTopics: ['Next.js 15 & Server Actions', 'Custom LLM RAG Pipelines', 'Kubernetes Orchestration', 'Micro-Frontend Federation'],
      impactQuote: 'Reduced new project kickoff delays by 52% across enterprise digital delivery teams.'
    },
    {
      id: 'bootcamps' as SolutionKey,
      title: 'Team Bootcamps',
      tagline: 'Department-Wide Intensive Skill Sprints & Hackathons',
      summary: 'Intensive workshops designed to upskill entire departments in new technologies, methodologies, or tools.',
      icon: Zap,
      badge: 'Sprint Acceleration',
      color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400',
      keyMetrics: '2 to 8-Week Cohorts',
      deliverables: [
        'High-velocity live coding workshops led by seasoned Principal Staff Engineers',
        'Sprint-aligned weekend or weekday masterclass schedules that never disrupt sprint deliverables',
        'Real-world department hackathons solving actual internal enterprise engineering bottlenecks',
        'Comprehensive capstone code reviews and 1:1 architectural consultation for squad leads'
      ],
      sampleTopics: ['Cloud-Native Modernization Sprint', 'AI-Driven Development Workflow', 'Event-Driven Microservices', 'Secure Coding & Zero-Trust'],
      impactQuote: 'Enabled 85 engineers to pivot from monolithic Java to Go and Kubernetes in just 4 weeks.'
    },
    {
      id: 'tracking' as SolutionKey,
      title: 'Performance Tracking',
      tagline: 'Executive Telemetry, Assessment Rubrics & LMS Integration',
      summary: "Detailed analytics and reporting on your team's progress, engagement, and skill acquisition.",
      icon: BarChart3,
      badge: 'Live Telemetry',
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
      keyMetrics: 'Real-Time Telemetry',
      deliverables: [
        'Executive telemetry dashboards tracking completion velocity, attendance, and lab grades',
        'Automated GitHub pull-request code quality audits evaluating syntax, security, and cleanliness',
        'Seamless LMS synchronization via SCORM, xAPI, and REST APIs for Workday, Degreed & SuccessFactors',
        'Pre-training and post-training diagnostic benchmarking measuring net skill acquisition'
      ],
      sampleTopics: ['Skill Diagnostic Heatmaps', 'Code Review Scorecards', 'Department Competency Matrices', 'Executive ROI Summary Reports'],
      impactQuote: 'HR and VP of Engineering gained instant visibility into talent readiness and bench strength.'
    },
    {
      id: 'onboarding' as SolutionKey,
      title: 'Onboarding Solutions',
      tagline: 'Structured Ramp-Up Acceleration & Standardized Sandboxes',
      summary: 'Streamline your new hire process with structured technical onboarding programs that reduce ramp-up time.',
      icon: Users,
      badge: '65% Faster Ramp-Up',
      color: 'from-purple-500/20 to-violet-500/10 border-purple-500/30 text-purple-400',
      keyMetrics: '3-Week Ramp-Up Guarantee',
      deliverables: [
        'Pre-configured cloud sandboxes mirroring your production environments for safe experimentation',
        'Day 1 to Day 30 standardized technical pathway guiding developers to their first merged pull request',
        'Mentorship shadowing blueprints pairing junior new-hires with senior technical facilitators',
        'Standardized technical assessments ensuring consistent bar-raising across campus and lateral hires'
      ],
      sampleTopics: ['Zero-Friction Dev Sandbox Setup', 'Internal API Discovery', 'Enterprise Git & CI/CD Pipelines', 'First Sprint Production Deployment'],
      impactQuote: 'Compressed new developer ramp-up time from 90 days down to 21 days for campus cohorts.'
    }
  ];

  // Domain descriptions for the ROI calculator
  const domainInfo = {
    ai: { name: 'Artificial Intelligence & Generative AI', hoursSavedPerDev: 140, multiplier: '4.8x' },
    cloud: { name: 'Cloud Architecture & DevOps', hoursSavedPerDev: 120, multiplier: '4.2x' },
    frontend: { name: 'Modern Full Stack & React Systems', hoursSavedPerDev: 110, multiplier: '3.9x' },
    data: { name: 'Data Engineering & Analytics', hoursSavedPerDev: 130, multiplier: '4.5x' },
    cyber: { name: 'Cybersecurity & Application Defense', hoursSavedPerDev: 150, multiplier: '5.1x' },
  };

  const calculatedHoursSaved = teamSizeInput * domainInfo[selectedDomain].hoursSavedPerDev;
  const estimatedRampUpWeeks = trainingPace === 'intensive' ? '3 Weeks' : '6 Weeks';

  // Enterprise FAQs
  const enterpriseFaqs = [
    {
      q: 'How does Provisent customize the curriculum to our internal technology stack?',
      a: 'During our diagnostic phase, our Principal Solutions Architects meet with your engineering leaders to review your architecture diagrams, programming languages, cloud providers, and coding standards. We then build custom laboratory sandboxes and capstone challenges that directly mirror your team’s production environment.'
    },
    {
      q: 'Can the training be scheduled without interrupting our active sprint cycles?',
      a: 'Yes. We offer multiple flexible scheduling delivery formats: weekly 2-hour executive clinics, 4-hour weekend immersive workshops, or daily 1-hour breakfast sprints. Our asynchronous lab environments and recorded mentor sessions ensure engineers can progress at their optimal cadence.'
    },
    {
      q: 'Do you provide integration with our internal LMS and HRIS platforms?',
      a: 'Yes, Provisent seamlessly integrates with leading enterprise LMS platforms including Workday Learning, SAP SuccessFactors, Degreed, Cornerstone OnDemand, and custom SCORM 1.2/2004/xAPI compliant systems for unified compliance and skill reporting.'
    },
    {
      q: 'What is the minimum team size for customized corporate upskilling programs?',
      a: 'Our bespoke enterprise programs start at 10 engineers and scale up to multinational cohorts of 5,000+ employees across diverse geographical locations and timezones.'
    },
    {
      q: 'Are NDAs and custom security agreements supported for proprietary repositories?',
      a: 'Absolutely. We regularly sign enterprise Mutual Non-Disclosure Agreements (NDAs) and SOC2/ISO-compliant Data Protection Addendums (DPAs). All lab code runs in isolated, ephemeral sandboxes with zero external IP retention.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12 selection:bg-cyan-500 selection:text-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ========================================================================= */}
        {/* HERO SECTION - Exact User Specification */}
        {/* ========================================================================= */}
        <div className="relative pt-6 pb-12 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>

          <div className="text-center max-w-4xl mx-auto space-y-6 relative z-10">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-lg shadow-cyan-500/10">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span className="font-semibold tracking-wide uppercase">Enterprise Technical Transformation</span>
            </div>

            {/* Exact Requested Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Corporate Upskilling
            </h1>

            {/* Exact Requested Subheadline */}
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Empower your workforce with custom training solutions. We help teams stay ahead of the curve with cutting-edge technical skills.
            </p>

            {/* Exact Requested Primary Call to Action Button */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => scrollToConsultationForm()}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer flex items-center gap-2 group"
                id="request-consultation-hero-btn"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('core-solutions-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-4 rounded-2xl bg-slate-900/80 hover:bg-white/10 border border-white/15 text-slate-200 font-semibold text-sm sm:text-base transition-all cursor-pointer flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Explore Solutions</span>
              </button>
            </div>

            {/* Key Trust Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10 text-left">
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">100%</span>
                <span className="text-xs text-slate-400 font-medium">Bespoke Tech Stack Mapping</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono block">65%</span>
                <span className="text-xs text-slate-400 font-medium">Faster New Hire Ramp-Up</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono block">94.8%</span>
                <span className="text-xs text-slate-400 font-medium">Lab & Capstone Completion</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono block">150+</span>
                <span className="text-xs text-slate-400 font-medium">Enterprise Teams Upskilled</span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* THE 4 PILLARS - EXACT REQUESTED SECTIONS */}
        {/* ========================================================================= */}
        <div id="core-solutions-grid" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              CORE ENTERPRISE OFFERINGS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Four Pillars of Corporate Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Designed specifically for engineering leaders, CTOs, and VP of Talent looking to maximize output, retain elite developers, and deploy modern architectures.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSolutions.map(solution => {
              const IconComponent = solution.icon;
              const isSelected = selectedSolution === solution.id;

              return (
                <div
                  key={solution.id}
                  onClick={() => setSelectedSolution(solution.id)}
                  className={`p-6 rounded-3xl transition-all cursor-pointer flex flex-col justify-between border relative overflow-hidden group ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500 shadow-2xl shadow-cyan-500/15 ring-1 ring-cyan-500/30'
                      : 'bg-slate-950/70 border-white/10 hover:border-white/25 hover:bg-slate-900/50'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header with Icon and Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${solution.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold">
                        {solution.badge}
                      </span>
                    </div>

                    {/* Exact Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {solution.title}
                    </h3>

                    {/* Exact Description */}
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {solution.summary}
                    </p>
                  </div>

                  {/* Footer with action trigger */}
                  <div className="pt-6 border-t border-white/5 mt-4 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                      {solution.keyMetrics}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSolution(solution.id);
                        scrollToConsultationForm(solution.title);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-400 text-[11px] font-medium transition-colors flex items-center gap-1"
                    >
                      <span>Inquire</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deep-Dive Interactive Details for Active Solution */}
          {(() => {
            const activeSol = coreSolutions.find(s => s.id === selectedSolution) || coreSolutions[0];
            const IconComp = activeSol.icon;

            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold block">
                        Detailed Solution Breakdown
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{activeSol.title}</h3>
                      <p className="text-xs text-slate-400">{activeSol.tagline}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => scrollToConsultationForm(activeSol.title)}
                    className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 shrink-0 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Request a Consultation for {activeSol.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs">
                  {/* Left Column: Deliverables */}
                  <div className="lg:col-span-7 space-y-4">
                    <h4 className="font-bold text-white uppercase font-mono text-[11px] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>Enterprise Deliverables & Implementation Workflow:</span>
                    </h4>

                    <div className="space-y-2.5">
                      {activeSol.deliverables.map((item, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-white/5 flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-slate-200 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-slate-300 italic">
                      "{activeSol.impactQuote}"
                    </div>
                  </div>

                  {/* Right Column: Topics & Sample Stacks */}
                  <div className="lg:col-span-5 space-y-4 lg:border-l lg:border-white/10 lg:pl-6">
                    <h4 className="font-bold text-white uppercase font-mono text-[11px] flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span>Sample Curated Focus Areas:</span>
                    </h4>

                    <div className="space-y-2">
                      {activeSol.sampleTopics.map((topic, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-between">
                          <span className="text-white font-medium">{topic}</span>
                          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                            Modular Lab
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Enterprise Service Level Agreement</span>
                      <p className="text-slate-300 leading-relaxed text-[11px]">
                        Every cohort is paired with a dedicated Principal Staff Mentor and Solution Manager providing 24/7 technical hotline access and weekly executive reporting.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })()}
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE ENTERPRISE TRAINING & ROI ESTIMATOR */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-white/10 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[10px] font-mono mb-2">
                <Target className="w-3.5 h-3.5 text-cyan-400" />
                <span>ROI & PRODUCTIVITY ESTIMATOR</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Simulate Your Team's Upskilling Return on Investment
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Calculate projected developer hours saved and ramp-up acceleration based on your department size.
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Projected Velocity Multiplier</span>
              <span className="text-2xl font-bold font-mono text-emerald-400">{domainInfo[selectedDomain].multiplier}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-5">
              {/* Domain Selector */}
              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-2">1. Select Target Department Domain:</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'ai', label: 'AI & Generative AI' },
                    { id: 'cloud', label: 'Cloud & DevOps' },
                    { id: 'frontend', label: 'Modern Full Stack' },
                    { id: 'data', label: 'Data Engineering' },
                    { id: 'cyber', label: 'Cybersecurity' },
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedDomain(item.id as any)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer font-medium text-xs ${
                        selectedDomain === item.id
                          ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold'
                          : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Team Size Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs text-slate-300 font-semibold">2. Target Engineering Team Size:</label>
                  <span className="text-sm font-mono font-bold text-cyan-400 bg-cyan-950/60 px-3 py-0.5 rounded-lg border border-cyan-500/30">
                    {teamSizeInput} Engineers
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={teamSizeInput}
                  onChange={e => setTeamSizeInput(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                  <span>10 Engineers</span>
                  <span>50 Engineers</span>
                  <span>100 Engineers</span>
                  <span>200+ Enterprise</span>
                </div>
              </div>

              {/* Training Format */}
              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-2">3. Cohort Pace & Delivery Structure:</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTrainingPace('intensive')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      trainingPace === 'intensive'
                        ? 'bg-cyan-500/15 border-cyan-500 text-white'
                        : 'bg-slate-900 border-white/5 text-slate-400'
                    }`}
                  >
                    <span className="font-bold block text-xs">Intensive Bootcamp</span>
                    <span className="text-[11px] text-slate-400">Full-immersion 3-week sprint</span>
                  </button>

                  <button
                    onClick={() => setTrainingPace('blended')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      trainingPace === 'blended'
                        ? 'bg-cyan-500/15 border-cyan-500 text-white'
                        : 'bg-slate-900 border-white/5 text-slate-400'
                    }`}
                  >
                    <span className="font-bold block text-xs">Blended Sprint</span>
                    <span className="text-[11px] text-slate-400">Part-time 6-week cadence</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Output Dashboard */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                  Estimated Departmental Impact
                </span>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Annual Engineering Hours Saved</span>
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
                      {calculatedHoursSaved.toLocaleString()} hrs
                    </span>
                    <span className="text-[10px] text-slate-500 block">Via reduced debugging & rework</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Ramp-Up Duration</span>
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">
                      {estimatedRampUpWeeks}
                    </span>
                    <span className="text-[10px] text-slate-500 block">Down from 12 weeks baseline</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-slate-300">Target Tech Stack Proficiency:</span>
                    <span className="text-emerald-400 font-bold">96.4% Goal Attainment</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[96%] h-full bg-gradient-to-r from-cyan-500 to-emerald-400"></div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToConsultationForm(`Custom ${domainInfo[selectedDomain].name} Program for ${teamSizeInput} Engineers`)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 cursor-pointer text-center"
              >
                Request Proposal for this Configuration
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CONSULTATION REQUEST SECTION & FORM */}
        {/* ========================================================================= */}
        <div id="consultation-form" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                DIRECT B2B ENGAGEMENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Request a Consultation
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with our enterprise solutions architects to co-design your custom workforce upskilling program, schedule a technical diagnostic, or request bulk enterprise licensing.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Confidentiality & NDA Guaranteed</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                    We routinely execute bilateral NDAs prior to reviewing proprietary architecture diagrams or repository requirements.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Rapid 4-Hour Response SLA</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                    Our lead solutions architect will review your submission and reach out with an initial feasibility roadmap within 4 business hours.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Direct Enterprise Hotline</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                    Need immediate assistance? Call our corporate relations desk at <strong className="text-white font-mono">+91 9361444644</strong> or write to <strong className="text-cyan-400">hr@provisent.com</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

              {submitted ? (
                <div className="text-center py-12 space-y-4 relative z-10">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                    Reference ID: #{consultationRefId}
                  </span>
                  <h3 className="text-2xl font-bold text-white">Consultation Request Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.contactName}</strong> from <strong className="text-white">{formData.companyName}</strong>. A Principal Enterprise Architect has received your request regarding <strong className="text-cyan-300">{formData.selectedSolution}</strong> and will contact <strong className="text-white font-mono">{formData.workEmail}</strong> shortly.
                  </p>

                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 font-semibold cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleConsultationSubmit} className="space-y-4 relative z-10">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Request a Consultation</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Tell us about your team and upskilling goals to receive a tailored corporate proposal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-300 font-medium block mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Cloud Corp"
                        required
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 font-medium block mb-1">Contact Name & Title *</label>
                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins (VP Engineering)"
                        required
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-300 font-medium block mb-1">Corporate Work Email *</label>
                      <input
                        type="email"
                        value={formData.workEmail}
                        onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="s.jenkins@acme.com"
                        required
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 font-medium block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-300 font-medium block mb-1">Primary Solution Interest *</label>
                      <select
                        value={formData.selectedSolution}
                        onChange={e => setFormData({ ...formData, selectedSolution: e.target.value })}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option value="Customized Curriculum">Customized Curriculum</option>
                        <option value="Team Bootcamps">Team Bootcamps</option>
                        <option value="Performance Tracking">Performance Tracking</option>
                        <option value="Onboarding Solutions">Onboarding Solutions</option>
                        <option value="All Solutions (Comprehensive)">All Solutions (Comprehensive Workforce)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 font-medium block mb-1">Team Size to Train</label>
                      <select
                        value={formData.teamSize}
                        onChange={e => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option value="10-25">10 - 25 Engineers</option>
                        <option value="25-50">25 - 50 Engineers</option>
                        <option value="50-100">50 - 100 Engineers</option>
                        <option value="100-250">100 - 250 Engineers</option>
                        <option value="250+">250+ Enterprise Cohort</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">
                      Current Tech Stack, Objectives & Desired Outcomes *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.techStackGoals}
                      onChange={e => setFormData({ ...formData, techStackGoals: e.target.value })}
                      placeholder="e.g. We are migrating our backend to Go & Kubernetes and want to upskill 40 developers with customized curriculum and performance tracking..."
                      required
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request a Consultation</span>
                  </button>

                  <p className="text-[10px] text-center text-slate-500">
                    By submitting, you agree to our standard enterprise privacy terms. All information provided is held strictly confidential under NDA.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* ENTERPRISE FAQS */}
        {/* ========================================================================= */}
        <div className="space-y-6 pt-10 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              PROCUREMENT & IMPLEMENTATION
            </span>
            <h3 className="text-2xl font-bold text-white">Frequently Asked Corporate Questions</h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {enterpriseFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-950/80 border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-white hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs text-slate-300 leading-relaxed border-t border-white/5 bg-slate-900/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

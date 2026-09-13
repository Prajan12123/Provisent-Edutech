import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, 
  MessageSquare, Clock, Calendar, Sparkles, Building2,
  GraduationCap, Briefcase, HelpCircle, ShieldCheck,
  DollarSign, Check, ChevronDown, ChevronUp, Radio,
  ExternalLink, ArrowRight, User, Users, RefreshCw,
  Terminal, Download, Award, FileText, Zap, Compass,
  Cpu, HeartHandshake, Layers, Play
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactPage: React.FC = () => {
  const { addToast, setIsAiAssistantOpen, navigateTo } = useApp();
  
  // Channel selection
  const [activeChannel, setActiveChannel] = useState<'admissions' | 'enterprise' | 'hiring' | 'university'>('admissions');

  // Admissions & Inquiry Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedCourse: 'Full Stack Web & AI Systems',
    message: '',
    counselingSlot: 'Morning (10 AM - 1 PM IST)',
    teamSize: '10–50 Engineers',
    organization: '',
    hiringRoles: 'Full Stack & Frontend Engineers',
    institutionType: 'Autonomous Engineering College'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryTicket, setInquiryTicket] = useState('');

  // Scholarship & Fee Estimator state
  const [hasScholarship, setHasScholarship] = useState(true);
  const [isWomenInTech, setIsWomenInTech] = useState(false);

  // Campus Tour Booking State
  const [selectedHub, setSelectedHub] = useState<'chennai' | 'bengaluru' | 'sf' | 'virtual'>('chennai');
  const [tourType, setTourType] = useState<'in_person' | 'virtual_demo'>('in_person');
  const [tourDate, setTourDate] = useState('2026-09-20');
  const [tourSlot, setTourSlot] = useState('11:00 AM IST');
  const [isTourBooked, setIsTourBooked] = useState(false);

  // Support Process Interactive Stage
  const [activeSupportStage, setActiveSupportStage] = useState<number>(0);

  // Structured Call-to-Action States
  const [quickSlot, setQuickSlot] = useState<'today_evening' | 'tomorrow_morning' | 'weekend_clinic'>('today_evening');
  const [isQuickBooked, setIsQuickBooked] = useState(false);
  const [quickBookingPhone, setQuickBookingPhone] = useState('');
  const [isDossierDownloaded, setIsDossierDownloaded] = useState(false);
  const [testDriveLang, setTestDriveLang] = useState<'rust' | 'python_ai' | 'go'>('rust');
  const [isTestDriveRunning, setIsTestDriveRunning] = useState(false);
  const [testDriveOutput, setTestDriveOutput] = useState<string | null>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `PRV-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryTicket(ticketId);
    setIsSubmitted(true);
    addToast(
      'Inquiry Registered!', 
      `Ticket #${ticketId} created. An admissions lead will connect within 15 minutes.`, 
      'success'
    );
  };

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTourBooked(true);
    addToast(
      'Campus Lab Tour Confirmed!', 
      `Booking for ${selectedHub.toUpperCase()} on ${tourDate} at ${tourSlot} confirmed.`, 
      'success'
    );
  };

  // Fee Calculation
  const baseFee = 49999;
  const scholarshipDiscount = hasScholarship ? 0.3 : 0;
  const womenDiscount = isWomenInTech ? 0.2 : 0;
  const totalDiscount = Math.min(scholarshipDiscount + womenDiscount, 0.5);
  const effectiveFee = Math.round(baseFee * (1 - totalDiscount));
  const monthlyEmi = Math.round(effectiveFee / 12);

  const FAQS = [
    {
      q: 'How fast will an academic dean or counselor contact me?',
      a: 'During standard operating hours (9:00 AM to 8:30 PM IST), our admissions advisors respond via phone or WhatsApp in under 15 minutes. Inquiries submitted overnight receive priority dispatch starting at 9:00 AM.'
    },
    {
      q: 'Can I tour the physical broadcast studios and sandbox bays before enrolling?',
      a: 'Yes! Both in-person visits to our Chennai HQ (Olympia Tech Park) and Bengaluru R&D Lab (HSR Layout), as well as 1-on-1 virtual WebRTC screen-shares of our in-browser microVM cloud IDE, can be scheduled directly below.'
    },
    {
      q: 'Are there flexible EMI options or scholarship grants available?',
      a: 'Yes. We partner with top NBFC providers to offer 0% interest EMI options spanning 3, 6, 9, and 12 months. Additionally, we disburse merit-based fee waivers of up to 40% and Women in Tech STEM grants of up to 50% based on technical screening tests.'
    },
    {
      q: 'How do corporate teams and enterprises engage with Provisent?',
      a: 'Enterprises can license private cohorts with customized syllabus tracks (e.g. migrating monolithic codebases to Kubernetes, building internal agentic LLM tooling). We provide dedicated sandbox instances with single sign-on (SSO) and SOC2 compliance.'
    },
    {
      q: 'How can hiring partners hire graduates or host recruitment drives?',
      a: 'Our placement desk coordinates curated resume dossiers, invites partners to private capstone demo days, and arranges zero-cost fast-track technical interview pipelines with pre-vetted engineers.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* =========================================================================
            1. HEADER & LIVE OPERATIONAL DISPATCH BAR
        ========================================================================== */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>GLOBAL ADMISSIONS & LIAISON DISPATCH</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Connect Directly with <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
              Provisent Edutech
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            Whether you are an aspiring engineer planning a career breakthrough, an enterprise architect seeking customized team upskilling, or a hiring partner recruiting top engineering fellows — our faculty and admissions leads are ready.
          </p>

          {/* Real-Time Operational Availability Bar */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-left">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <span className="font-bold text-white block">Admissions Desk Active</span>
                <span className="text-slate-400 text-[11px]">4 Senior Academic Advisors On-Duty</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-[11px]">
              <div>
                <span className="text-slate-400 block">Avg Response Latency:</span>
                <span className="text-emerald-400 font-bold">~8–12 Minutes</span>
              </div>
              <div>
                <span className="text-slate-400 block">Central Hotline:</span>
                <a href="tel:+919361444644" className="text-cyan-400 font-bold hover:underline">
                  +91 9361444644
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAiAssistantOpen(true)}
                className="px-3 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/30 text-purple-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>AI Live Chat</span>
              </button>

              <a
                href="https://wa.me/919361444644?text=Hello%20Provisent%20Admissions%20Desk,%20I%20would%20like%20to%20know%20more%20about%20your%20engineering%20programs."
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. ADAPTIVE CHANNEL SWITCHBOARD TABS
        ========================================================================== */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-950 p-1.5 rounded-2xl border border-white/10 w-full max-w-4xl">
            {[
              { id: 'admissions', label: 'Learner Admissions', icon: GraduationCap, badge: 'Direct Desk' },
              { id: 'enterprise', label: 'Enterprise B2B', icon: Building2, badge: 'SLA: 1 Hr' },
              { id: 'hiring', label: 'Hiring Partners', icon: Briefcase, badge: 'Zero Fee' },
              { id: 'university', label: 'University MoUs', icon: Sparkles, badge: 'Labs & Credits' }
            ].map(tab => {
              const IconComp = tab.icon;
              const isActive = activeChannel === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveChannel(tab.id as any);
                    setIsSubmitted(false);
                  }}
                  className={`p-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            3. MAIN INTERACTION GRID: DETAILS & SMART ADAPTIVE INQUIRY FORM
        ========================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Official Headquarters & Global Innovation Centers */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Corporate Headquarters Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  CORPORATE GOVERNANCE
                </span>
                <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-slate-400 border border-white/5">
                  MCA Registered
                </span>
              </div>

              <div>
                <h3 className="font-extrabold text-lg text-white">PROVISENT EDUTECH PRIVATE LIMITED</h3>
                <p className="text-xs text-slate-400 mt-0.5 font-mono">
                  CIN: U85499TN2023PTC160892 • GSTIN: 33AAHCP9201L1Z8
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-300 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono block">Registered Headquarters</span>
                    <p className="text-white font-medium">Olympia Technology Park, Level 8, Guindy, Chennai, Tamil Nadu - 600032</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono block">Bengaluru R&D Engineering Lab</span>
                    <p className="text-white font-medium">27th Main, Sector 2, HSR Layout, Bengaluru, Karnataka - 560102</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono block">Direct Telephone Hotline</span>
                    <a href="tel:+919361444644" className="text-cyan-400 font-bold font-mono text-sm hover:underline">
                      +91 9361444644
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono block">Official Email Dispatch</span>
                    <a href="mailto:hr@provisent.com" className="text-emerald-400 font-bold hover:underline">
                      hr@provisent.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono block">Operating Hours</span>
                    <p className="text-white font-medium">Monday – Saturday: 9:00 AM – 8:30 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Fee & Scholarship Estimator Widget */}
            <div className="p-6 rounded-3xl bg-slate-950 border border-cyan-500/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4" />
                  <span>SCHOLARSHIP & EMI CALCULATOR</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">0% Interest NBFC</span>
              </div>

              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2 cursor-pointer p-2 rounded-xl bg-slate-900/60 border border-white/5">
                  <input
                    type="checkbox"
                    checked={hasScholarship}
                    onChange={e => setHasScholarship(e.target.checked)}
                    className="accent-cyan-400 rounded w-4 h-4"
                  />
                  <span>Apply 30% Diagnostic Test Merit Waiver</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer p-2 rounded-xl bg-slate-900/60 border border-white/5">
                  <input
                    type="checkbox"
                    checked={isWomenInTech}
                    onChange={e => setIsWomenInTech(e.target.checked)}
                    className="accent-purple-400 rounded w-4 h-4"
                  />
                  <span>Apply Women in Tech STEM Grant (+20% Waiver)</span>
                </label>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/5 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-slate-400 text-[10px] block">Effective Program Fee:</span>
                  <span className="text-lg font-black text-white">₹{effectiveFee.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-500 block line-through">₹{baseFee.toLocaleString()}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 text-[10px] block">No-Cost Monthly EMI:</span>
                  <span className="text-lg font-black text-emerald-400">₹{monthlyEmi.toLocaleString()} / mo</span>
                  <span className="text-[10px] text-cyan-400 block">12-Month Plan</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Smart Adaptive Channel Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-cyan-500/30 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                      Ticket #{inquiryTicket}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">Inquiry Confirmed</h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your inquiry has been routed to the <strong>{activeChannel.toUpperCase()}</strong> team. An advisor will contact <strong>{formData.phone}</strong> during your selected slot: <em>{formData.counselingSlot}</em>.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                    <button
                      onClick={() => navigateTo('/courses')}
                      className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Explore Programs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold block">
                      {activeChannel === 'admissions' && 'ACADEMIC CONSULTATION'}
                      {activeChannel === 'enterprise' && 'ENTERPRISE B2B TRAINING'}
                      {activeChannel === 'hiring' && 'RECRUITMENT & TALENT ACQUISITION'}
                      {activeChannel === 'university' && 'ACADEMIC INSTITUTIONAL PARTNERSHIP'}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {activeChannel === 'admissions' && 'Schedule a 1:1 Career Diagnostic Call'}
                      {activeChannel === 'enterprise' && 'Request an Enterprise Upskilling Proposal'}
                      {activeChannel === 'hiring' && 'Access Verified Candidate Rosters'}
                      {activeChannel === 'university' && 'Partner for Sandbox Labs & Joint Credits'}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Direct connection with our curriculum leads. Zero spam guarantee.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Iyer"
                        required
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ramesh@company.com"
                        required
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Phone Number (with WhatsApp) *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Preferred Callback Slot</label>
                      <select
                        value={formData.counselingSlot}
                        onChange={e => setFormData({ ...formData, counselingSlot: e.target.value })}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500/50"
                      >
                        <option value="Morning (10 AM - 1 PM IST)">Morning (10 AM - 1 PM IST)</option>
                        <option value="Afternoon (2 PM - 5 PM IST)">Afternoon (2 PM - 5 PM IST)</option>
                        <option value="Evening (6 PM - 9 PM IST)">Evening (6 PM - 9 PM IST)</option>
                        <option value="Weekend Special">Weekend Saturday/Sunday</option>
                      </select>
                    </div>
                  </div>

                  {/* Channel Specific Fields */}
                  {activeChannel === 'admissions' && (
                    <div>
                      <label className="text-xs text-slate-300 block mb-1">Program of Primary Interest</label>
                      <select
                        value={formData.interestedCourse}
                        onChange={e => setFormData({ ...formData, interestedCourse: e.target.value })}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500/50"
                      >
                        <option value="Full Stack Web & AI Systems">Full Stack Web & AI Systems (16 Weeks)</option>
                        <option value="Generative AI & LLM Engineering">Generative AI & LLM Systems (18 Weeks)</option>
                        <option value="Cloud Architecture & SRE DevOps">Cloud Architecture & SRE DevOps (14 Weeks)</option>
                        <option value="Data Science & Lakehouse Engineering">Data Science & Lakehouse Engineering (16 Weeks)</option>
                        <option value="UI/UX & Design Systems Engineering">UI/UX & Design Systems (12 Weeks)</option>
                      </select>
                    </div>
                  )}

                  {activeChannel === 'enterprise' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-300 block mb-1">Company / Enterprise Name *</label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={e => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Acme FinTech Corp"
                          required
                          className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-slate-300 block mb-1">Estimated Engineering Cohort Size</label>
                        <select
                          value={formData.teamSize}
                          onChange={e => setFormData({ ...formData, teamSize: e.target.value })}
                          className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500/50"
                        >
                          <option value="10–50 Engineers">10–50 Engineers</option>
                          <option value="50–150 Engineers">50–150 Engineers</option>
                          <option value="150+ Enterprise Scale">150+ Enterprise Scale</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {activeChannel === 'hiring' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-300 block mb-1">Hiring Organization *</label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={e => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Razorpay, Freshworks"
                          required
                          className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-slate-300 block mb-1">Profiles You Need to Hire</label>
                        <select
                          value={formData.hiringRoles}
                          onChange={e => setFormData({ ...formData, hiringRoles: e.target.value })}
                          className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500/50"
                        >
                          <option value="Full Stack & Frontend Engineers">Full Stack & Frontend Engineers</option>
                          <option value="Cloud DevOps & Kubernetes SREs">Cloud DevOps & Kubernetes SREs</option>
                          <option value="AI / LLM Engineers">AI / LLM Engineers</option>
                          <option value="Backend Systems (Go/Rust/Java)">Backend Systems (Go/Rust/Java)</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {activeChannel === 'university' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-300 block mb-1">University / College Name *</label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={e => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. National Institute of Technology"
                          required
                          className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-slate-300 block mb-1">Institution Category</label>
                        <select
                          value={formData.institutionType}
                          onChange={e => setFormData({ ...formData, institutionType: e.target.value })}
                          className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500/50"
                        >
                          <option value="Autonomous Engineering College">Autonomous Engineering College</option>
                          <option value="Deemed University">Deemed University</option>
                          <option value="Polytechnic Institution">Polytechnic Institution</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Background Details or Specific Questions</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. I have 2 years of manual testing experience and want to transition to cloud distributed engineering..."
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-cyan-200" />
                    <span>Confirm Priority Dispatch Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* =========================================================================
            3.5. THE PROVISENT CONTINUOUS SUPPORT PROTOCOL
            Engaging descriptive breakdown of our engineering-grade support engine
        ========================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-cyan-500/20 shadow-2xl space-y-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                <span>ACTIVE ENGINEERING ADVOCACY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Support Built Like an SRE On-Call Engine, <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400">
                  Not a Generic Customer Call Center
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Traditional course portals leave students stranded on dead forums for days waiting for help with a broken Docker build or race condition. At Provisent, our support architecture is designed around zero-friction developer enablement — staffed exclusively by practicing tech leads and automated cloud diagnostics.
              </p>
            </div>

            {/* Live Support SLA Snapshot */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 block uppercase">Admissions SLA</span>
                <span className="text-lg font-black text-emerald-400">&lt; 15 Mins</span>
                <span className="text-[9px] text-slate-500 block">Direct Callback</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 block uppercase">PR Review SLA</span>
                <span className="text-lg font-black text-cyan-400">&lt; 45 Mins</span>
                <span className="text-[9px] text-slate-500 block">AST + Staff Lead</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 block uppercase">Faculty Standard</span>
                <span className="text-lg font-black text-purple-400">100%</span>
                <span className="text-[9px] text-slate-500 block">Active Devs</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 block uppercase">Sandbox Cloud</span>
                <span className="text-lg font-black text-amber-400">99.98%</span>
                <span className="text-[9px] text-slate-500 block">MicroVM Uptime</span>
              </div>
            </div>
          </div>

          {/* Interactive 4-Stage Support Protocol Navigator */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                THE 4-PHASE APPRENTICESHIP SUPPORT LIFECYCLE
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Click any phase to inspect the engineering workflow
              </span>
            </div>

            {/* Stage Selector Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  id: 0,
                  step: 'PHASE 01',
                  title: 'Diagnostic Triaging',
                  subtitle: 'Admissions & Skill Audit',
                  icon: Compass,
                  color: 'cyan'
                },
                {
                  id: 1,
                  step: 'PHASE 02',
                  title: 'Architectural Roadmap',
                  subtitle: '1:1 Staff Mentor Pairing',
                  icon: Layers,
                  color: 'blue'
                },
                {
                  id: 2,
                  step: 'PHASE 03',
                  title: 'MicroVM Co-Pilot & War Rooms',
                  subtitle: 'Live AST Shell Debugging',
                  icon: Terminal,
                  color: 'purple'
                },
                {
                  id: 3,
                  step: 'PHASE 04',
                  title: 'Placement Syndicate',
                  subtitle: 'Direct Hiring Desk Loops',
                  icon: Briefcase,
                  color: 'emerald'
                }
              ].map(stage => {
                const isSelected = activeSupportStage === stage.id;
                const Icon = stage.icon;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveSupportStage(stage.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-950/40 border-cyan-400/80 shadow-lg shadow-cyan-950/50'
                        : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-cyan-400 font-bold">{stage.step}</span>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-300' : 'text-slate-500'}`} />
                    </div>
                    <h4 className="text-xs font-bold text-white leading-tight">{stage.title}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{stage.subtitle}</p>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detailed Breakdown */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-white/10 space-y-6">
              {activeSupportStage === 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
                      <span>STEP 1: PRE-ENROLLMENT DIAGNOSTIC</span>
                      <span className="text-slate-500">•</span>
                      <span>SLA: UNDER 15 MINUTES</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      No Salespeople. Direct Conversation with a Practicing Tech Lead.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      When you submit an inquiry at Provisent, you never get a generic commission-driven telemarketer. Your profile is routed directly to our Academic Engineering Desk. An engineering advisor reviews your prior coding exposure, GitHub portfolio, and immediate career trajectory to ensure you are entering the correct track.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          Diagnostic Skill Gap Audit
                        </span>
                        <p className="text-[11px] text-slate-400">
                          Automated assessment identifies your weak points in data structures, asynchronous runtime, and API contracts.
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          Direct Phone / WhatsApp Line
                        </span>
                        <p className="text-[11px] text-slate-400">
                          Prompt 1-on-1 voice clarity addressing prerequisites, time commitments, and laptop hardware specifications.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900 border border-cyan-500/20 space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-slate-400 text-[10px]">DIAGNOSTIC TRIAGE DISPATCH</span>
                      <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        QUEUE: 0 PENDING
                      </span>
                    </div>
                    <div className="space-y-2 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-slate-300 flex justify-between">
                        <span>Expected Turnaround:</span>
                        <strong className="text-cyan-400">8.4 mins avg</strong>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-slate-300 flex justify-between">
                        <span>Lead Assignment:</span>
                        <strong className="text-white">Systems Architect</strong>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-slate-300 flex justify-between">
                        <span>Readiness Output:</span>
                        <strong className="text-emerald-400">Curriculum Map PDF</strong>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const input = document.getElementById('name');
                        input?.focus();
                        addToast('Focused on Form', 'Fill in your details above for instant diagnostic triage.', 'info');
                      }}
                      className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs cursor-pointer transition-all"
                    >
                      Request Diagnostic Triage Above &uarr;
                    </button>
                  </div>
                </div>
              )}

              {activeSupportStage === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-950 border border-blue-500/30 text-blue-300 text-[11px] font-mono">
                      <span>STEP 2: ROADMAP CUSTOMIZATION</span>
                      <span className="text-slate-500">•</span>
                      <span>SLA: DAY 1 SPRINT ORIENTATION</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Paired with a Dedicated Staff Engineer from Day One.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Every cohort apprentice is matched with a designated Staff or Principal Engineer acting as their technical coach. Instead of leaving you alone with recorded videos, your mentor builds your custom 16-week milestone board, establishes your weekly commit cadence, and sets expectations for production pull request audits.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                          Weekly 1-on-1 Office Hours
                        </span>
                        <p className="text-[11px] text-slate-400">
                          Dedicated private 45-minute sessions to dissect architectural decisions, design patterns, and blocker eradication.
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          Direct Private Slack Channel
                        </span>
                        <p className="text-[11px] text-slate-400">
                          Direct chat line to your mentor pod for rapid async asynchronous troubleshooting between sprint clinics.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900 border border-blue-500/20 space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-slate-400 text-[10px]">MENTOR MATCH MATRIX</span>
                      <span className="text-blue-400 text-[10px]">RATIO 1:12 POD</span>
                    </div>
                    <div className="space-y-2 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-slate-300 flex justify-between">
                        <span>Mentor Seniority:</span>
                        <strong className="text-blue-400">Staff / Principal (8+ YOE)</strong>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-slate-300 flex justify-between">
                        <span>Sync Rhythm:</span>
                        <strong className="text-white">2x Weekly + Async Chat</strong>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-slate-300 flex justify-between">
                        <span>Milestone Tracking:</span>
                        <strong className="text-emerald-400">GitHub Sprint Kanban</strong>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/20 text-[11px] text-blue-300 leading-normal">
                      &quot;You don&apos;t just learn syntax; you learn how engineers debate trade-offs between memory footprint, latency, and operational debt.&quot;
                    </div>
                  </div>
                </div>
              )}

              {activeSupportStage === 2 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-purple-950 border border-purple-500/30 text-purple-300 text-[11px] font-mono">
                      <span>STEP 3: ACTIVE ENVIRONMENT COLLABORATION</span>
                      <span className="text-slate-500">•</span>
                      <span>SLA: 24/7 INSTANT MULTI-CURSOR</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Live MicroVM Co-Pilot & Nightly WebRTC War Rooms.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Stuck on a failing test suite or memory leak? You don&apos;t take a screenshot and wait 24 hours. Because you code inside our cloud microVM environment, your mentor or teaching assistant can securely jump into your active Linux terminal session in real time with shared multi-cursor controls and WebRTC voice.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                          Automated AST Diagnostics
                        </span>
                        <p className="text-[11px] text-slate-400">
                          In-IDE code linter flags algorithmic anti-patterns and performance bottlenecks before you even commit.
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          Nightly Debugging War Rooms
                        </span>
                        <p className="text-[11px] text-slate-400">
                          Open voice breakout rooms every evening where cohorts pair-program and overcome difficult technical blocks together.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900 border border-purple-500/20 space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-slate-400 text-[10px]">MICROVM DEV ENVIRONMENT</span>
                      <span className="text-purple-400 text-[10px]">SANDBOX ID: micro-8821</span>
                    </div>
                    <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-[10px] text-slate-300 space-y-1 font-mono">
                      <p className="text-emerald-400">$ provisent-ctl session:attach --mentor</p>
                      <p className="text-slate-400">&gt; Connected to apprentice-session: /workspace/rust-kernel</p>
                      <p className="text-cyan-300">&gt; Live WebRTC peer initialized: Dr. Senthil Kumar (Mentor)</p>
                      <p className="text-amber-300">&gt; Shared terminal active: Shared cursor ready</p>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-[11px] text-purple-300 leading-normal">
                      &quot;Zero-setup development. No &apos;it works on my machine&apos; excuses. We see your exact runtime and fix bugs together.&quot;
                    </div>
                  </div>
                </div>
              )}

              {activeSupportStage === 3 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
                      <span>STEP 4: CAREER ADVOCACY & SYNDICATE</span>
                      <span className="text-slate-500">•</span>
                      <span>SLA: LIFELONG PLACEMENT SUPPORT</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      The Placement Syndicate: Direct Ingress to Hiring Engineering Directors.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      We never send cold mass emails to random HR job inboxes. Our Career Support Syndicate is headed by former talent partners from Tier-1 tech unicorns who coordinate directly with Engineering Directors, VPs of Tech, and CTOs looking for pre-audited, battle-tested software engineers.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          Whiteboard System Design Drills
                        </span>
                        <p className="text-[11px] text-slate-400">
                          Intensive mock interviews conducted under real high-pressure conditions simulating Google, Uber, and Stripe hiring loops.
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          Zero-Fee Employer Placement
                        </span>
                        <p className="text-[11px] text-slate-400">
                          Because we charge hiring partners zero finder fees, employers prioritize our graduates over expensive third-party agency candidates.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900 border border-emerald-500/20 space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-slate-400 text-[10px]">HIRING PARTNER SYNDICATE</span>
                      <span className="text-emerald-400 text-[10px]">180+ ENTERPRISES</span>
                    </div>
                    <div className="space-y-2 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-slate-300 flex justify-between">
                        <span>Interview Fast-Track:</span>
                        <strong className="text-emerald-400">Skip First Screening</strong>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-slate-300 flex justify-between">
                        <span>Salary Range:</span>
                        <strong className="text-white">₹8.5 LPA - ₹38 LPA</strong>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-slate-300 flex justify-between">
                        <span>Offer Negotiation:</span>
                        <strong className="text-cyan-400">1:1 Coaching Included</strong>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-[11px] text-emerald-300 leading-normal">
                      &quot;Our graduates arrive on Day 1 already knowing how to open pull requests, read telemetry logs, and write clean integration tests.&quot;
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Support Protocol Comparison Matrix */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              PEDAGOGICAL SUPPORT ARCHITECTURE: HOW PROVISENT STANDS APART
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="py-2.5 pr-4">Dimension</th>
                    <th className="py-2.5 px-4 text-slate-500">Generic Video Courses</th>
                    <th className="py-2.5 px-4 text-slate-500">Traditional Colleges</th>
                    <th className="py-2.5 pl-4 text-cyan-400 font-bold">Provisent Sovereign Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  <tr>
                    <td className="py-3 pr-4 font-bold text-white">Admissions Advisor</td>
                    <td className="py-3 px-4 text-slate-500">Sales commission agent</td>
                    <td className="py-3 px-4 text-slate-500">Clerical registrar clerk</td>
                    <td className="py-3 pl-4 text-emerald-400 font-bold">Practicing Staff Software Engineer</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-bold text-white">Debugging Support</td>
                    <td className="py-3 px-4 text-slate-500">Community forum (3-5 day lag)</td>
                    <td className="py-3 px-4 text-slate-500">Academic lab assistant</td>
                    <td className="py-3 pl-4 text-emerald-400 font-bold">Live MicroVM WebRTC Multi-Cursor</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-bold text-white">Code Review Standard</td>
                    <td className="py-3 px-4 text-slate-500">Multiple-choice quizzes</td>
                    <td className="py-3 px-4 text-slate-500">Paper-printed code listings</td>
                    <td className="py-3 pl-4 text-emerald-400 font-bold">Strict GitHub PR with AST Linters</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-bold text-white">Career Outcome Bridge</td>
                    <td className="py-3 px-4 text-slate-500">None (Automated certificate)</td>
                    <td className="py-3 px-4 text-slate-500">Generic mass campus placement</td>
                    <td className="py-3 pl-4 text-emerald-400 font-bold">180+ Vetted Hiring Partner Syndicate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* =========================================================================
            4. INTERACTIVE CAMPUS & VIRTUAL SANDBOX BAY TOUR SCHEDULER
        ========================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-cyan-500/20 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>EXPERIENTIAL LAB VISITS</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Schedule an In-Person Campus Walkthrough or Virtual WebRTC Demo
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Tour our physical broadcast facilities, meet faculty deans in Chennai and Bengaluru, or take a live guided walkthrough of our in-browser microVM cloud IDE.
            </p>
          </div>

          <form onSubmit={handleTourSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Campus Selector */}
            <div className="lg:col-span-4 space-y-3">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                1. Select Center or Format
              </label>
              <div className="space-y-2">
                {[
                  { id: 'chennai', label: 'Chennai Global HQ', sub: 'Olympia Tech Park, Guindy', tag: 'Physical Studio' },
                  { id: 'bengaluru', label: 'Bengaluru AI Lab', sub: 'HSR Layout, Sector 2', tag: 'R&D Center' },
                  { id: 'virtual', label: 'Virtual WebRTC Studio Demo', sub: 'Global 1-on-1 Screen Share', tag: 'Anywhere' }
                ].map(loc => (
                  <button
                    type="button"
                    key={loc.id}
                    onClick={() => setSelectedHub(loc.id as any)}
                    className={`w-full p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      selectedHub === loc.id
                        ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                        : 'bg-slate-950/60 border-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-white">{loc.label}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300">
                        {loc.tag}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono block mt-1">{loc.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="lg:col-span-5 space-y-4">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                2. Choose Tour Date & Time
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={tourDate}
                    onChange={e => setTourDate(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Time Slot</label>
                  <select
                    value={tourSlot}
                    onChange={e => setTourSlot(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-cyan-500"
                  >
                    <option value="11:00 AM IST">11:00 AM IST (Morning Bay)</option>
                    <option value="03:00 PM IST">03:00 PM IST (Afternoon Lab)</option>
                    <option value="06:30 PM IST">06:30 PM IST (Evening Studio)</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 space-y-2 text-xs">
                <span className="text-cyan-400 font-bold block">What You Will Experience:</span>
                <ul className="space-y-1 text-slate-300 text-[11px]">
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Live test of in-browser microVM containers & AST AI linter</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Meet working senior engineering faculty and alumni leads</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Full syllabus breakdown & personalized diagnostic review</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Card */}
            <div className="lg:col-span-3 flex flex-col justify-between p-6 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-4">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                  ADMISSION STATUS
                </span>
                <p className="text-sm font-bold text-white mt-1">Zero Obligation Pass</p>
                <p className="text-xs text-slate-400 mt-1">
                  Complimentary pass with full access to sandbox demo terminal.
                </p>
              </div>

              {isTourBooked ? (
                <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-center space-y-1">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
                  <span className="text-xs font-bold text-emerald-300 block">Pass Issued!</span>
                  <span className="text-[10px] font-mono text-slate-400">Pass: PRV-TOUR-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold font-mono cursor-pointer shadow-md shadow-cyan-500/20"
                >
                  Confirm Lab Visit Pass
                </button>
              )}
            </div>

          </form>
        </div>

        {/* =========================================================================
            4.5. DIRECT DESK TO FACULTY DEANS & ENGINEERING DIRECTORS
        ========================================================================== */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>LEADERSHIP LIAISON DIRECTORY</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Direct Ingress to Core Academic & Career Deans
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Skip gatekeepers. If you have an institutional, research, or career escalation query, contact our founding leadership team directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Dr. K. Senthil Kumar',
                role: 'Dean of Academic Engineering & Systems Chair',
                background: 'Ex-Principal Systems Architect (AWS Core)',
                focus: 'MicroVM Sandbox Architecture, Kernel Modules, Curriculum Quality',
                email: 'dean.systems@provisent.com',
                response: '&lt; 4 Hours',
                channel: 'admissions' as const,
                presetMsg: 'I would like to discuss technical curriculum rigor with Dr. Senthil Kumar.'
              },
              {
                name: 'Maya Raman',
                role: 'Head of Enterprise Upskilling & B2B Solutions',
                background: 'Ex-Director of Tech Transformation (ThoughtWorks)',
                focus: 'Enterprise MicroVM Deployments, Custom Syllabi, Corporate Billing',
                email: 'b2b.enterprise@provisent.com',
                response: '&lt; 1 Hour',
                channel: 'enterprise' as const,
                presetMsg: 'We want to discuss corporate team upskilling and custom sandbox SLAs with Maya Raman.'
              },
              {
                name: 'Arjun V. Nair',
                role: 'Placement Syndicate & Hiring Desk Director',
                background: 'Ex-Lead Talent Partner (Razorpay & Scaler)',
                focus: 'Employer MoUs, Demo Days, Pre-Audited Candidate Dossiers',
                email: 'placement.director@provisent.com',
                response: '&lt; 2 Hours',
                channel: 'hiring' as const,
                presetMsg: 'We want to recruit pre-vetted engineers from Provisent with zero finder fees.'
              }
            ].map((lead, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                      DIRECT DESK
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      SLA: <strong className="text-emerald-400" dangerouslySetInnerHTML={{ __html: lead.response }} />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {lead.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">{lead.role}</p>
                    <span className="text-[10px] text-slate-400 block font-mono mt-0.5">{lead.background}</span>
                  </div>

                  <p className="text-xs text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/5 leading-relaxed">
                    <strong className="text-slate-200">Domain Focus:</strong> {lead.focus}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      setActiveChannel(lead.channel);
                      setFormData(prev => ({
                        ...prev,
                        message: lead.presetMsg
                      }));
                      const formElement = document.getElementById('name');
                      formElement?.focus();
                      addToast('Direct Liaison Routed', `Form switched to ${lead.channel.toUpperCase()} desk for ${lead.name}.`, 'info');
                    }}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-white text-xs font-bold border border-white/10 hover:border-cyan-500/40 cursor-pointer flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Route Message to Desk</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>

                  <a
                    href={`mailto:${lead.email}`}
                    className="block text-center text-[10px] font-mono text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    Direct Email: {lead.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            5. SOCRATIC FAQ & INSTANT KNOWLEDGEBASE ACCORDION
        ========================================================================== */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Instant Clarity on Admissions & Experience
            </h2>
            <p className="text-xs text-slate-400">
              Clear answers to the most common questions regarding our pedagogy, installments, and placement policies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm font-bold text-white">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            5.5. HIGH-IMPACT STRUCTURED CALL-TO-ACTION MATRIX: THREE DIRECT ACTION PATHWAYS
        ========================================================================== */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>CHOOSE YOUR DIRECT ACTION PATHWAY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Stop Watching Videos and Start Engineering?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              No long sales calls. Three direct, zero-friction pathways to evaluate our curriculum, test-drive our cloud sandboxes, or get immediate clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* ACTION CARD 1: FAST-TRACK 15-MINUTE SPRINT DIAGNOSTIC */}
            <div className="p-7 rounded-3xl bg-slate-900/80 border border-cyan-500/30 flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>PATHWAY 01</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Advisors Active Now
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
                    15-Minute Sprint Diagnostic Call
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Pick a direct callback slot with an admissions tech lead. Discuss roadmap fit, prerequisites, and payment options with zero sales pressure.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono text-slate-400 block font-semibold">Select Preferred Timeslot:</span>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { id: 'today_evening', label: 'Today (7:00 PM - 8:00 PM IST)', sub: 'Fastest Response' },
                      { id: 'tomorrow_morning', label: 'Tomorrow (11:30 AM - 12:30 PM IST)', sub: 'Next Morning' },
                      { id: 'weekend_clinic', label: 'Saturday Sprint Clinic (4:00 PM IST)', sub: 'Weekend Slot' }
                    ].map(slot => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setQuickSlot(slot.id as any)}
                        className={`p-2.5 rounded-xl text-left text-xs font-mono border transition-all cursor-pointer flex items-center justify-between ${
                          quickSlot === slot.id 
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 font-bold' 
                            : 'bg-black/30 border-white/10 text-slate-400 hover:bg-white/5'
                        }`}
                      >
                        <span>{slot.label}</span>
                        <span className="text-[10px] text-slate-500">{slot.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-1">
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Your Mobile / WhatsApp Number:</label>
                  <input
                    type="tel"
                    value={quickBookingPhone}
                    onChange={e => setQuickBookingPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
              </div>

              <div>
                {isQuickBooked ? (
                  <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
                    <span className="text-xs font-bold text-emerald-300 block">Diagnostic Confirmed!</span>
                    <span className="text-[10px] font-mono text-slate-300">
                      Our lead will dial you during the selected window. Ticket: #PRV-DIAG-{Math.floor(1000 + Math.random() * 9000)}
                    </span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      if (!quickBookingPhone.trim()) {
                        addToast('Number Required', 'Please enter your phone number to receive your callback confirmation.', 'warning');
                        return;
                      }
                      setIsQuickBooked(true);
                      addToast('Diagnostic Booked!', 'A senior admissions advisor will call you at your requested time.', 'success');
                    }}
                    className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs font-mono cursor-pointer shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Lock In 15-Min Diagnostic Call</span>
                  </button>
                )}
              </div>
            </div>

            {/* ACTION CARD 2: LIVE IN-BROWSER MICROVM SANDBOX TEST-DRIVE */}
            <div className="p-7 rounded-3xl bg-slate-900/80 border border-purple-500/30 flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-500/30 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-purple-400" />
                    <span>PATHWAY 02</span>
                  </span>
                  <span className="text-[10px] font-mono text-purple-400 font-bold">
                    Zero Setup • In Browser
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-purple-300 transition-colors">
                    Test-Drive the Cloud MicroVM
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Experience the exact sovereign cloud sandbox where Provisent apprentices spend 80% of their time writing code and running unit tests.
                  </p>
                </div>

                {/* Tech selection */}
                <div className="flex gap-2">
                  {[
                    { id: 'rust', label: 'Rust Engine' },
                    { id: 'python_ai', label: 'Python AI Agent' },
                    { id: 'go', label: 'Go Microservice' }
                  ].map(lang => (
                    <button
                      key={lang.id}
                      type="button"
                      onClick={() => {
                        setTestDriveLang(lang.id as any);
                        setTestDriveOutput(null);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-mono border transition-all cursor-pointer ${
                        testDriveLang === lang.id
                          ? 'bg-purple-500/20 border-purple-400 text-purple-200 font-bold'
                          : 'bg-black/40 border-white/5 text-slate-400 hover:bg-white/5'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>

                {/* Terminal Preview */}
                <div className="p-3.5 rounded-xl bg-black/80 border border-white/10 font-mono text-[11px] space-y-1.5 min-h-[110px]">
                  <div className="flex items-center justify-between text-[9px] text-slate-500 border-b border-white/10 pb-1 mb-1">
                    <span>microvm@provisent:~/workspace</span>
                    <span className="text-emerald-400 font-bold">LIVE AST LINTER</span>
                  </div>

                  {testDriveLang === 'rust' && (
                    <div className="text-slate-400">
                      <span className="text-purple-400">pub async fn</span> <span className="text-yellow-300">verify_consensus</span>(block: &amp;Block) -&gt; Result&lt;Hash, Error&gt; &#123; <br />
                      &nbsp;&nbsp;<span className="text-slate-500">// Zero-copy cryptographic hash pipeline</span> <br />
                      &nbsp;&nbsp;Ok(sha256::digest(block.as_bytes())) <br />
                      &#125;
                    </div>
                  )}

                  {testDriveLang === 'python_ai' && (
                    <div className="text-slate-400">
                      <span className="text-cyan-400">async def</span> <span className="text-yellow-300">dispatch_agent</span>(prompt: str) -&gt; AgentResponse: <br />
                      &nbsp;&nbsp;<span className="text-slate-500"># Autonomous tool orchestration loop</span> <br />
                      &nbsp;&nbsp;<span className="text-purple-400">return await</span> runtime.execute_agent_loop(prompt)
                    </div>
                  )}

                  {testDriveLang === 'go' && (
                    <div className="text-slate-400">
                      <span className="text-cyan-400">func</span> <span className="text-yellow-300">HandleStream</span>(ctx context.Context, req *Request) error &#123; <br />
                      &nbsp;&nbsp;<span className="text-slate-500">// High-concurrency gRPC worker</span> <br />
                      &nbsp;&nbsp;<span className="text-purple-400">return</span> workerPool.Submit(req.Task) <br />
                      &#125;
                    </div>
                  )}

                  {testDriveOutput && (
                    <div className="pt-2 border-t border-white/10 text-emerald-400 text-[10px] animate-fadeIn">
                      {testDriveOutput}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  disabled={isTestDriveRunning}
                  onClick={() => {
                    setIsTestDriveRunning(true);
                    setTestDriveOutput('Compiling in isolated MicroVM container...');
                    setTimeout(() => {
                      setTestDriveOutput('Build Succeeded (0 warnings). 14 Unit Tests Passed in 0.28s. Memory: 12.4 MB.');
                      setIsTestDriveRunning(false);
                      addToast('Sandbox Test Complete', 'Container executed with 100% test pass rate in 280ms.', 'success');
                    }, 800);
                  }}
                  className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs font-mono cursor-pointer flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  <Play className={`w-3.5 h-3.5 ${isTestDriveRunning ? 'animate-spin' : ''}`} />
                  <span>{isTestDriveRunning ? 'Compiling Sandbox...' : 'Run 60s Live Sandbox Test'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => navigateTo('/compiler')}
                  className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono border border-white/10 flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                >
                  <span>Open Full In-Browser IDE</span>
                  <ExternalLink className="w-3 h-3 text-purple-400" />
                </button>
              </div>
            </div>

            {/* ACTION CARD 3: DOWNLOAD 2026 SOVEREIGN CURRICULUM & PLACEMENT DOSSIER */}
            <div className="p-7 rounded-3xl bg-slate-900/80 border border-emerald-500/30 flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                    <FileText className="w-3 h-3 text-emerald-400" />
                    <span>PATHWAY 03</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    48-Page Full Report
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors">
                    2026 Sovereign Curriculum &amp; Placement Dossier
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Inspect the unvarnished engineering curriculum, weekly sprint syllabi, live capstone specs, and salary distribution data.
                  </p>
                </div>

                <div className="space-y-2 bg-black/40 p-3.5 rounded-2xl border border-white/5 text-xs text-slate-300 font-mono">
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">What is inside this PDF dossier:</span>
                  <ul className="space-y-1.5 text-[11px]">
                    <li className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Complete week-by-week sprint breakdown</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>180+ Enterprise hiring partner roster</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Salary ranges: ₹8.5L - ₹38L CTC audit</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Sample cryptographic on-chain certificate</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                {isDossierDownloaded ? (
                  <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
                    <span className="text-xs font-bold text-emerald-300 block">Dossier Dispatched!</span>
                    <span className="text-[10px] font-mono text-slate-300">
                      Check your browser downloads: PROVISENT_SOVEREIGN_DOSSIER_2026.pdf
                    </span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setIsDossierDownloaded(true);
                      addToast(
                        'Curriculum Dossier Downloaded!',
                        '48-page PDF dossier saved. Review the syllabi and hiring partner statistics.',
                        'success'
                      );
                    }}
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs font-mono cursor-pointer shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Complete PDF Dossier (Free)</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            6. STATUTORY COMPLIANCE & GRIEVANCE REDRESSAL DESK
        ========================================================================== */}
        <div className="p-8 rounded-3xl bg-slate-950 border border-white/10 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                LEGAL JURISDICTION & GRIEVANCE REDRESSAL
              </span>
              <h3 className="text-base font-bold text-white mt-1">
                Provisent Edutech Ombudsman & Statutory Escalations
              </h3>
              <p className="text-xs text-slate-400">
                In compliance with the Companies Act 2013 and consumer protection guidelines.
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                SLA: <strong className="text-emerald-400">&lt; 24h Escalation Resolution</strong>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-400 font-mono">
            <div>
              <span className="text-slate-200 font-bold block mb-1">Grievance Redressal Officer</span>
              <p>Email: <strong className="text-cyan-400">grievance@provisent.com</strong></p>
              <p>Direct Escalation Line: +91 9361444644</p>
              <p className="text-slate-500 mt-1">Olympia Tech Park, Chennai</p>
            </div>
            <div>
              <span className="text-slate-200 font-bold block mb-1">Academic Ombudsman</span>
              <p>Email: <strong className="text-purple-400">ombudsman@provisent.com</strong></p>
              <p>Faculty & Mentorship Evaluation Desk</p>
              <p className="text-slate-500 mt-1">Independent Review Board</p>
            </div>
            <div>
              <span className="text-slate-200 font-bold block mb-1">Public Verification Portal</span>
              <p>Ledger API: <strong className="text-emerald-400">verify.provisent.com</strong></p>
              <p>Hiring Desk: <strong className="text-white">hire@provisent.com</strong></p>
              <p className="text-slate-500 mt-1">Automated Candidate Audits</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

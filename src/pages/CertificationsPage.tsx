import React, { useState } from 'react';
import { 
  Award, ShieldCheck, CheckCircle2, Download, Share2, 
  ExternalLink, ArrowRight, QrCode, Linkedin, Check, Eye,
  Sparkles, Layers, FileCheck, Building2, ChevronDown, 
  ChevronUp, Search, Lock, RefreshCw, Star, Users, Laptop,
  HelpCircle, Sliders, Shield, Zap, TrendingUp, Info, CheckCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProvisentSampleCertificate } from '../components/ProvisentSampleCertificate';
import { 
  CERTIFICATE_TRACKS, 
  CERTIFICATE_SECURITY_FEATURES,
  CERTIFICATION_COMPARISON,
  CERTIFICATION_PILLARS, 
  CERTIFICATION_PROCESS_STEPS, 
  ALUMNI_STORIES,
  CERTIFICATE_ANATOMY_PARTS,
  CERTIFICATION_FAQS,
  CertificateCategory 
} from '../data/certificationsContent';

export const CertificationsPage: React.FC = () => {
  const { navigateTo, addToast } = useApp();

  // Active track selection for the interactive preview switcher
  const [selectedTrack, setSelectedTrack] = useState<CertificateCategory>(CERTIFICATE_TRACKS[0]);
  const [showWatermark, setShowWatermark] = useState<boolean>(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // Custom interactive certificate customizer
  const [customRecipient, setCustomRecipient] = useState<string>('VIJAY');
  const [customDuration, setCustomDuration] = useState<string>('01st APRIL 2026 to 30th June2026');
  const [customIssueDate, setCustomIssueDate] = useState<string>('01 JUNE 2026');
  const [activeAnatomyId, setActiveAnatomyId] = useState<string | null>(null);

  // Quick download mock action
  const handleDownloadSample = () => {
    addToast(
      'Official Specimen Downloaded',
      `Vector-resolution PDF generated for ${selectedTrack.courseTitle} (${customRecipient}).`,
      'info'
    );
  };

  const handleCopyVerificationId = (id: string) => {
    navigator.clipboard?.writeText(id);
    addToast('Credential ID Copied', `${id} copied to clipboard for portal verification.`, 'success');
  };

  const handleResetCustomizer = () => {
    setCustomRecipient(selectedTrack.recipientName);
    setCustomDuration(selectedTrack.duration);
    setCustomIssueDate(selectedTrack.issueDate);
    addToast('Reset to Defaults', `Specimen restored to default parameters for ${selectedTrack.name}.`, 'info');
  };

  const handleSelectTrack = (track: CertificateCategory) => {
    setSelectedTrack(track);
    setCustomRecipient(track.recipientName);
    setCustomDuration(track.duration);
    setCustomIssueDate(track.issueDate);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12 selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ========================================================= */}
        {/* 1. HERO HEADER SECTION WITH STATS CARDS */}
        {/* ========================================================= */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>OFFICIAL PROVISENT ACCREDITED CERTIFICATION SYSTEM</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Industry-Recognized <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Digital Certifications
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                Every traineeship and master credential awarded by PROVISENT EDUTECH PRIVATE LIMITED is backed by cryptographically tamper-proof ledger records, statutory government recognitions (AICTE, ISO 9001:2015, MSME, #startupindia), and direct LinkedIn one-click synchronization.
              </p>
            </div>

            {/* Quick Metrics Badge Array */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">450+</div>
                <div className="text-[11px] text-slate-400 font-medium">Hiring Partners Recognizing Credential</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
                <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">Verifiable via Public Cloud Ledger</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">ISO 9001</div>
                <div className="text-[11px] text-slate-400 font-medium">Certified Quality System Standards</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
                <div className="text-xl sm:text-2xl font-black text-teal-400 font-mono">LIFETIME</div>
                <div className="text-[11px] text-slate-400 font-medium">Permanent Non-Expiring Cloud URL</div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. INTERACTIVE CERTIFICATE SPECIMEN SHOWCASE + CUSTOMIZER */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Controls & Track Switcher */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                INTERACTIVE DIPLOMA EXPLORER
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Inspect Real Issued Credentials
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Choose any specialization track to render the live credential specimen with its authorized signatures, candidate citations, and accreditation stamps:
              </p>
            </div>

            {/* Track Selector Buttons */}
            <div className="space-y-2.5">
              {CERTIFICATE_TRACKS.map((track) => {
                const isActive = track.id === selectedTrack.id;
                return (
                  <button
                    key={track.id}
                    onClick={() => handleSelectTrack(track)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isActive 
                        ? 'bg-gradient-to-r from-emerald-950/70 via-slate-900 to-cyan-950/60 border-emerald-500/60 shadow-xl shadow-emerald-500/10 ring-1 ring-emerald-500/30' 
                        : 'bg-slate-900/50 border-white/10 hover:border-white/25 hover:bg-slate-900'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold ${isActive ? 'text-emerald-400' : 'text-white'}`}>
                          {track.name}
                        </span>
                        {track.id === 'track-python-ai' && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            Uploaded Sample
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono">
                        ID: {track.certId} • Avg Hike: <span className="text-emerald-400 font-bold">{track.avgSalaryHike}</span>
                      </p>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-emerald-400 translate-x-1' : 'text-slate-500'}`} />
                  </button>
                );
              })}
            </div>

            {/* Live Interactive Specimen Customizer */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-white/10 space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-white font-bold text-xs flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  Live Specimen Customizer
                </span>
                <button
                  onClick={handleResetCustomizer}
                  className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Candidate Display Name (Test Preview):
                  </label>
                  <input
                    type="text"
                    value={customRecipient}
                    onChange={(e) => setCustomRecipient(e.target.value)}
                    placeholder="Enter Candidate Name"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-white font-bold text-xs uppercase tracking-wider focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 block mb-1">
                      Session Duration:
                    </label>
                    <input
                      type="text"
                      value={customDuration}
                      onChange={(e) => setCustomDuration(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-white/15 text-slate-200 text-[11px] focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-slate-400 block mb-1">
                      Issue Date:
                    </label>
                    <input
                      type="text"
                      value={customIssueDate}
                      onChange={(e) => setCustomIssueDate(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-white/15 text-slate-200 text-[11px] focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-slate-400 block mb-1.5">
                    Verified Capstone Project:
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5 text-[11px] text-cyan-300 font-mono">
                    {selectedTrack.capstoneProject}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1.5">
                    Top Hiring Alumni Companies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTrack.hiringCompanies.map((company, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => navigateTo('/verify-certificate')}
                className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Verify ID: {selectedTrack.certId}</span>
              </button>

              <button
                onClick={handleDownloadSample}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10 flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Sample PDF</span>
              </button>

              <button
                onClick={() => setShowWatermark(!showWatermark)}
                className="px-3.5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-[11px] font-mono text-slate-400 border border-white/10 flex items-center gap-1.5 cursor-pointer"
                title="Toggle Sample Watermark"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{showWatermark ? 'Watermark: ON' : 'Watermark: OFF'}</span>
              </button>
            </div>
          </div>

          {/* Right Live Specimen Display */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Official Traineeship Specimen — PROVISENT EDUTECH
                </span>
              </div>
              <button
                onClick={() => handleCopyVerificationId(selectedTrack.certId)}
                className="text-[11px] font-mono text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Copy ID: {selectedTrack.certId}</span>
              </button>
            </div>

            {/* Embedded Rendered Certificate */}
            <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950/80 p-2 sm:p-4 backdrop-blur-xl">
              <ProvisentSampleCertificate
                recipientName={customRecipient.trim() || selectedTrack.recipientName}
                courseTitle={selectedTrack.courseTitle}
                duration={customDuration}
                issueDate={customIssueDate}
                mentorName={selectedTrack.mentorName}
                ceoName={selectedTrack.ceoName}
                certId={selectedTrack.certId}
                showWatermark={showWatermark}
                highlightedElement={activeAnatomyId}
              />
            </div>

            {/* Specimen Legend & Accreditation Bar */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>ISSUING BODY: PROVISENT EDUTECH PRIVATE LIMITED</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <span>AICTE</span>
                <span>•</span>
                <span>ISO 9001:2015</span>
                <span>•</span>
                <span>MICROSOFT</span>
                <span>•</span>
                <span>MSME</span>
                <span>•</span>
                <span>STARTUP INDIA</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* 3. CREATIVE SECTION: ANATOMY OF A PROVISENT CERTIFICATE */}
        {/* ========================================================= */}
        <div className="space-y-8 p-8 sm:p-12 rounded-3xl bg-slate-900/50 border border-white/10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4" />
              INTERACTIVE ANATOMY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Anatomy of an Official Provisent Credential
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Hover or tap on any certificate element below to highlight the corresponding region on the specimen preview above:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATE_ANATOMY_PARTS.map((part) => {
              const isSelected = activeAnatomyId === part.id;
              return (
                <div
                  key={part.id}
                  onMouseEnter={() => setActiveAnatomyId(part.id)}
                  onMouseLeave={() => setActiveAnatomyId(null)}
                  onClick={() => setActiveAnatomyId(isSelected ? null : part.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-2.5 ${
                    isSelected 
                      ? 'bg-cyan-950/50 border-cyan-400/80 shadow-lg shadow-cyan-500/10' 
                      : 'bg-slate-900/80 border-white/10 hover:border-cyan-500/40 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                      {part.location}
                    </span>
                    <span className={`text-[10px] font-mono uppercase font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                      {isSelected ? 'HIGHLIGHTED' : 'HOVER TO VIEW'}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white">
                    {part.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {part.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. CREATIVE COMPARISON: PROVISENT VS GENERIC PLATFORMS */}
        {/* ========================================================= */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
              TRANSPARENT VALUE COMPARISON
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Provisent Certificates Carry Genuine Weight
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              See why recruiters value Provisent credentials over generic video-completion certificates.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
            <table className="w-full text-left text-xs border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-slate-950/80">
                  <th className="p-5 font-mono text-slate-400 font-bold uppercase w-1/4">Evaluation Dimension</th>
                  <th className="p-5 font-mono text-emerald-400 font-bold uppercase w-5/12 bg-emerald-950/30 border-x border-emerald-500/20">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>PROVISENT TRAINEESHIP CREDENTIAL</span>
                    </div>
                  </th>
                  <th className="p-5 font-mono text-slate-400 font-bold uppercase w-1/3">Typical MOOC / Course Cert</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {CERTIFICATION_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 font-bold text-white align-top">
                      {row.dimension}
                    </td>
                    <td className="p-5 text-slate-200 bg-emerald-950/15 border-x border-emerald-500/10 align-top leading-relaxed font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.provisent}</span>
                      </div>
                    </td>
                    <td className="p-5 text-slate-400 align-top leading-relaxed">
                      {row.typicalGeneric}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. CREATIVE SECTION: ALUMNI IMPACT STORIES & VERIFICATION */}
        {/* ========================================================= */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                ALUMNI OUTCOMES
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                From Certified Trainee to Hired Engineer
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Real career transformations powered by hands-on project defenses and verifiable credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ALUMNI_STORIES.map((story, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 hover:border-cyan-500/30 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
                      {story.hike}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      ID: {story.certId}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="w-10 h-10 rounded-full object-cover border border-cyan-400/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {story.name}
                    </h4>
                    <p className="text-[11px] text-cyan-400 font-medium">
                      {story.role}
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono">
                      Specialization: {story.course}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 6. SIX LAYERS OF CRYPTOGRAPHIC TRUST (Detailed Pillars) */}
        {/* ========================================================= */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
              ACCREDITATION INTEGRITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Six Layers of Cryptographic Trust
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Built from the ground up for technical recruiting teams, hiring ATS algorithms, and background check audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATION_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-emerald-500/30 transition-all space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                    {pillar.code}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 7. STEP-BY-STEP CERTIFICATION LIFECYCLE */}
        {/* ========================================================= */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                ACADEMIC EXCELLENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                How You Earn Your Credential
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              We uphold strict academic standards. No certificates are granted for passive viewing—only for verified functional software development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATION_PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="space-y-3 relative">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold flex items-center justify-center text-sm">
                    {step.step}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    {step.milestone}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 8. VERIFICATION WORKFLOW & RECRUITER SECTION */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-cyan-500/20">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
              FOR EMPLOYERS & UNIVERSITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Instant Public Ledger Verification
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Are you an HR manager, technical recruiter, or background screening agency? You can immediately confirm the authenticity of any candidate certificate using our zero-login public portal.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => navigateTo('/verify-certificate')}
                className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Launch Verification Portal</span>
              </button>
              <button
                onClick={() => navigateTo('/corporate')}
                className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10 flex items-center gap-2 cursor-pointer"
              >
                <Building2 className="w-4 h-4 text-slate-400" />
                <span>Corporate Verification API</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-white/10 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 border-b border-white/10 pb-2">
              <span>TEST QUERY SPECIMEN</span>
              <span className="text-emerald-400">LEDGER ACTIVE</span>
            </div>
            <div className="space-y-1 text-slate-300 text-[11px]">
              <p><span className="text-slate-500">ID:</span> {selectedTrack.certId}</p>
              <p><span className="text-slate-500">CANDIDATE:</span> {customRecipient || selectedTrack.recipientName}</p>
              <p><span className="text-slate-500">SPECIALIZATION:</span> {selectedTrack.courseTitle}</p>
              <p><span className="text-slate-500">STATUS:</span> <span className="text-emerald-400">VERIFIED & TAMPER-PROOF</span></p>
              <p><span className="text-slate-500">ACCREDITATIONS:</span> AICTE • ISO 9001:2015 • MSME</p>
            </div>
            <div className="pt-2 border-t border-white/5">
              <button
                onClick={() => navigateTo('/verify-certificate')}
                className="w-full py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-center font-bold text-[11px] block"
              >
                Execute Live Verification Check →
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 9. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================================= */}
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
              COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Everything You Need to Know About Our Certificates
            </h2>
          </div>

          <div className="space-y-3">
            {CERTIFICATION_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5"
                  >
                    <span className="text-sm font-semibold text-white">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 10. BOTTOM CALL TO ACTION */}
        {/* ========================================================= */}
        <div className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-emerald-500/30 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Earn Your Industry-Recognized Credential?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Enroll in any of our master bootcamps or self-paced tracks today. Build verified real-world projects, defend your code, and receive your official PROVISENT certificate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => navigateTo('/programs')}
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-xl shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Certified Programs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('/verify-certificate')}
              className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10 cursor-pointer"
            >
              <span>Check Verification Portal</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

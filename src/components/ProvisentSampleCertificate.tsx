import React from 'react';
import { Award, ShieldCheck, QrCode } from 'lucide-react';

interface CertificateProps {
  recipientName?: string;
  courseTitle?: string;
  duration?: string;
  issueDate?: string;
  mentorName?: string;
  ceoName?: string;
  certId?: string;
  showWatermark?: boolean;
  highlightedElement?: string | null;
}

export const ProvisentSampleCertificate: React.FC<CertificateProps> = ({
  recipientName = 'VIJAY',
  courseTitle = 'PYTHON WITH AI',
  duration = '01st APRIL 2026 to 30th June2026',
  issueDate = '01 JUNE 2026',
  mentorName = 'MENTOR',
  ceoName = 'CEO&FOUNDER',
  certId = 'PROV-2026-SMC-101',
  showWatermark = true,
  highlightedElement = null
}) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[1.414/1] bg-[#f8fafc] text-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 select-none flex flex-col justify-between p-6 sm:p-10 font-sans transition-all">
      {/* Background Decorative Tech Waves & Circles */}
      <div className={`absolute inset-0 pointer-events-none overflow-hidden transition-all duration-300 ${highlightedElement === 'wave-ribbons' ? 'ring-4 ring-cyan-400/80 ring-inset bg-cyan-500/5' : ''}`}>
        {/* Top-Left Tech Ring Accent */}
        <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full border-[10px] border-cyan-500/20 flex items-center justify-center opacity-80">
          <div className="w-40 h-40 rounded-full border-[8px] border-teal-500/30 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-[6px] border-cyan-600/20"></div>
          </div>
        </div>

        {/* Top-Right Flowing Teal Graphic Ribbon */}
        <svg
          className="absolute -top-10 -right-10 w-96 h-80 text-teal-700/25 transform rotate-12"
          viewBox="0 0 400 300"
          fill="none"
        >
          <path
            d="M50 0 C 150 80, 250 120, 400 200 L 400 0 Z"
            fill="currentColor"
          />
          <path
            d="M0 0 C 120 100, 200 150, 400 260 L 400 0 Z"
            fill="#0284c7"
            fillOpacity="0.2"
          />
        </svg>

        {/* Bottom-Left Wave Ribbon & Halftone Dots */}
        <svg
          className="absolute -bottom-10 -left-10 w-96 h-80 text-teal-800/20 transform -rotate-12"
          viewBox="0 0 400 300"
          fill="none"
        >
          <path
            d="M0 300 C 150 200, 250 180, 400 100 L 0 100 Z"
            fill="currentColor"
          />
          <path
            d="M0 300 C 180 180, 280 120, 400 40 L 0 40 Z"
            fill="#0d9488"
            fillOpacity="0.15"
          />
        </svg>

        {/* Dot Matrix Pattern at bottom left */}
        <div className="absolute bottom-6 left-6 grid grid-cols-8 gap-1.5 opacity-30">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-teal-800" />
          ))}
        </div>

        {/* Bottom-Right Tech Ring Accent */}
        <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full border-[10px] border-teal-500/20 flex items-center justify-center opacity-80">
          <div className="w-40 h-40 rounded-full border-[8px] border-cyan-500/30 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-[6px] border-teal-700/20"></div>
          </div>
        </div>
      </div>

      {/* Red Sample Watermark (as in user's image) */}
      {showWatermark && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 overflow-hidden">
          <div className="transform -rotate-[32deg] border-4 sm:border-8 border-red-500/80 rounded-2xl sm:rounded-3xl px-6 sm:px-14 py-2 sm:py-4 bg-red-500/10 backdrop-blur-[1px]">
            <span className="text-3xl sm:text-6xl md:text-7xl font-black tracking-widest text-red-600/90 drop-shadow-md whitespace-nowrap">
              SAMPLE CERTIFICATE
            </span>
          </div>
        </div>
      )}

      {/* Main Certificate Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Header: Provisent Logo & Title */}
        <div className={`text-center pt-2 sm:pt-4 transition-all duration-300 rounded-xl ${highlightedElement === 'header-crest' ? 'bg-cyan-100/70 p-2 ring-2 ring-cyan-500' : ''}`}>
          {/* Provisent Logo */}
          <div className="flex flex-col items-center justify-center mb-2">
            <div className="relative flex items-center justify-center w-12 h-12 mb-1">
              <div className="absolute inset-0 rounded-full border border-blue-500/30"></div>
              {/* Stylized Globe / Sphere representation */}
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-700 p-1 flex items-center justify-center shadow-md">
                <div className="w-full h-full rounded-full border border-white/60 flex items-center justify-center">
                  <span className="text-[9px] font-black text-white font-mono">P</span>
                </div>
              </div>
            </div>
            <h3 className="text-sm sm:text-base font-extrabold tracking-[0.25em] text-slate-900 uppercase">
              PROVISENT
            </h3>
          </div>

          {/* Certificate Main Headings */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 uppercase font-sans mt-1">
            CERTIFICATE
          </h1>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-slate-500 uppercase mt-0.5">
            OF
          </p>
          <h2 className="text-sm sm:text-lg md:text-xl font-extrabold tracking-[0.2em] text-cyan-700 uppercase mt-0.5">
            TRAINEESHIP COMPLETION
          </h2>
        </div>

        {/* Certificate Recipient & Body */}
        <div className={`text-center my-auto py-2 sm:py-4 space-y-2 sm:space-y-3 transition-all duration-300 rounded-xl ${highlightedElement === 'recipient-citation' ? 'bg-cyan-100/70 p-3 ring-2 ring-cyan-500' : ''}`}>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            This certificate is presented to
          </p>

          {/* Recipient Name (VIJAY) */}
          <div className="py-1">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-cyan-600 tracking-wider inline-block">
              {recipientName}
            </h2>
          </div>

          {/* Citation Text */}
          <div className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-700 leading-relaxed px-2 font-normal">
            <p>
              In recognition of the outstanding commitment, diligence and successful acquisition of knowledge and skills in{' '}
              <span className="font-extrabold text-slate-950 underline decoration-cyan-500 decoration-2 underline-offset-4">
                [{courseTitle}]
              </span>{' '}
              From <span className="font-medium text-slate-900">{duration}</span>
            </p>
          </div>

          {/* Issue Date */}
          <div className="pt-2">
            <p className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
              Issued on this {issueDate}
            </p>
          </div>
        </div>

        {/* Signatures & Accreditation Partner Badges */}
        <div className="pt-4 border-t border-slate-200/80">
          {/* Signatures Row */}
          <div className={`grid grid-cols-2 gap-8 max-w-xl mx-auto mb-4 transition-all duration-300 rounded-xl ${highlightedElement === 'dual-signatures' ? 'bg-cyan-100/70 p-2 ring-2 ring-cyan-500' : ''}`}>
            {/* Mentor Signature */}
            <div className="text-center">
              <div className="h-10 flex items-end justify-center mb-1">
                <svg className="w-32 h-8 text-slate-800" viewBox="0 0 160 40" fill="none">
                  <path
                    d="M10 25 C 25 5, 45 35, 60 15 C 75 -5, 90 30, 110 20 C 130 10, 140 25, 150 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M30 30 C 50 20, 80 25, 120 22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="w-36 h-[1.5px] bg-cyan-700/60 mx-auto mb-1"></div>
              <p className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
                {mentorName}
              </p>
            </div>

            {/* CEO & Founder Signature */}
            <div className="text-center">
              <div className="h-10 flex items-end justify-center mb-1">
                <svg className="w-32 h-8 text-slate-800" viewBox="0 0 160 40" fill="none">
                  <path
                    d="M15 28 C 30 10, 40 5, 55 25 C 70 40, 85 15, 100 8 C 115 2, 130 25, 145 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="95" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M20 32 C 60 28, 100 29, 140 25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="w-36 h-[1.5px] bg-cyan-700/60 mx-auto mb-1"></div>
              <p className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
                {ceoName}
              </p>
            </div>
          </div>

          {/* Accreditation Logos Bar: AICTE, ISO 9001:2015, Microsoft, MSME, #startupindia */}
          <div className={`flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 border-t border-slate-100 transition-all duration-300 rounded-xl ${highlightedElement === 'regulatory-bar' ? 'bg-cyan-100/70 p-2 ring-2 ring-cyan-500' : ''}`}>
            {/* AICTE emblem badge */}
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-amber-500 border border-amber-600 flex items-center justify-center text-[7px] font-bold text-white shadow-sm">
                AICTE
              </div>
              <span className="text-[9px] font-bold text-slate-600 hidden sm:inline">AICTE Approved</span>
            </div>

            {/* ISO 9001:2015 */}
            <div className="flex items-center gap-1.5">
              <div className="px-1.5 py-0.5 rounded bg-blue-600 text-white font-extrabold text-[8px] tracking-wider">
                ISO
              </div>
              <span className="text-[9px] font-bold text-slate-700">9001:2015</span>
            </div>

            {/* Microsoft Partner */}
            <div className="flex items-center gap-1.5">
              <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
                <div className="bg-[#f25022] w-1.5 h-1.5"></div>
                <div className="bg-[#7fba00] w-1.5 h-1.5"></div>
                <div className="bg-[#00a4ef] w-1.5 h-1.5"></div>
                <div className="bg-[#ffb900] w-1.5 h-1.5"></div>
              </div>
              <span className="text-[10px] font-semibold text-slate-700">Microsoft</span>
            </div>

            {/* MSME India Emblem */}
            <div className="flex items-center gap-1">
              <div className="px-1.5 py-0.5 rounded bg-amber-800 text-amber-100 text-[8px] font-black">
                MSME
              </div>
              <span className="text-[8px] font-semibold text-slate-500 hidden sm:inline">Govt. of India</span>
            </div>

            {/* #startupindia */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-black text-amber-600 tracking-tight">
                #startup<span className="text-emerald-600">india</span>
              </span>
            </div>

            {/* Credential ID tag */}
            <div className={`ml-auto hidden md:flex items-center gap-1 text-[9px] font-mono text-slate-400 p-1 rounded transition-all duration-300 ${highlightedElement === 'security-qr' ? 'bg-cyan-200 text-slate-900 font-bold ring-2 ring-cyan-500' : ''}`}>
              <QrCode className="w-3.5 h-3.5 text-slate-500" />
              <span>ID: {certId}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

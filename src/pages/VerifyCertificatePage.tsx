import React, { useState } from 'react';
import { 
  ShieldCheck, Search, CheckCircle2, XCircle, 
  Download, Share2, Linkedin, Award, Calendar, 
  User, BookOpen, ExternalLink, QrCode 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MOCK_CERTIFICATE } from '../data/mockData';

export const VerifyCertificatePage: React.FC = () => {
  const { addToast } = useApp();
  const [certId, setCertId] = useState('PROV-2026-PYAI-0104');
  const [studentName, setStudentName] = useState('VIJAY');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedRecord, setVerifiedRecord] = useState<typeof MOCK_CERTIFICATE | null>(MOCK_CERTIFICATE);
  const [hasSearched, setHasSearched] = useState(true);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setVerifiedRecord(null);

    setTimeout(() => {
      setIsVerifying(false);
      setHasSearched(true);
      const cleanId = certId.trim().toUpperCase();
      if (cleanId === 'PROV-2026-PYAI-0104' || cleanId === 'PROV-2026-8894' || cleanId.startsWith('PROV-')) {
        setVerifiedRecord({
          ...MOCK_CERTIFICATE,
          id: cleanId,
          studentName: studentName.trim() || 'VIJAY'
        });
        addToast('Verification Successful', 'Certificate validated against Provisent registry.', 'success');
      } else {
        setVerifiedRecord(null);
        addToast('Certificate Not Found', 'No record matches this ID in our public registry.', 'error');
      }
    }, 600);
  };

  const handleShareLinkedIn = () => {
    window.open('https://www.linkedin.com', '_blank');
  };

  const handleDownloadPdf = () => {
    addToast('Downloading Credential', 'Official high-resolution PDF diploma dispatched.', 'info');
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 p-1 px-3 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>OFFICIAL PROVISENT CREDENTIAL REGISTRY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verify Digital Certificate
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Recruiters, hiring managers, and academic institutions can validate any certificate issued by PROVISENT EDUTECH PRIVATE LIMITED.
          </p>
        </div>

        {/* Verification Form Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-xl mb-10">
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5 font-mono">
                  Certificate ID *
                </label>
                <div className="relative">
                  <Award className="w-4 h-4 text-cyan-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={certId}
                    onChange={e => setCertId(e.target.value)}
                    placeholder="e.g. PROV-2026-8894"
                    className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white uppercase font-mono placeholder:normal-case placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5 font-mono">
                  Candidate Full Name (Optional)
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-cyan-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={studentName}
                    onChange={e => setStudentName(e.target.value)}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isVerifying ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                  <span>Searching cryptographic registry...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 text-slate-950" />
                  <span>Verify Credential Authenticity</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Verification Result Output */}
        {hasSearched && verifiedRecord && (
          <div className="rounded-3xl liquid-glass border-2 border-emerald-500/40 p-6 sm:p-8 shadow-2xl space-y-6 animate-in fade-in duration-200">
            
            {/* Top Status Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                      STATUS: VERIFIED & AUTHENTIC
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    Official Provisent Credential Record
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <QrCode className="w-10 h-10 text-emerald-400 p-1 bg-slate-950 rounded-lg border border-emerald-500/30" />
              </div>
            </div>

            {/* Credential Attributes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1">
                <span className="text-slate-400 uppercase font-mono text-[10px]">Candidate Name</span>
                <p className="text-base font-bold text-white">{verifiedRecord.studentName}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1">
                <span className="text-slate-400 uppercase font-mono text-[10px]">Specialization Track</span>
                <p className="text-base font-bold text-cyan-300">{verifiedRecord.courseName}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1">
                <span className="text-slate-400 uppercase font-mono text-[10px]">Issue Date</span>
                <p className="text-sm font-semibold text-slate-200">{verifiedRecord.issueDate}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1">
                <span className="text-slate-400 uppercase font-mono text-[10px]">Academic Performance</span>
                <p className="text-sm font-bold text-emerald-400 font-mono">{verifiedRecord.grade}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1 sm:col-span-2">
                <span className="text-slate-400 uppercase font-mono text-[10px]">Credential ID & Ledger Fingerprint</span>
                <p className="text-xs font-mono font-bold text-cyan-400">{verifiedRecord.id}</p>
                <p className="text-[10px] text-slate-500 font-mono">Issuer: PROVISENT EDUTECH PRIVATE LIMITED (Govt. Registered)</p>
              </div>
            </div>

            {/* Actions: Download PDF & Add to LinkedIn */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleDownloadPdf}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Official Certificate PDF</span>
              </button>

              <button
                onClick={handleShareLinkedIn}
                className="px-5 py-2.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/40 border border-blue-500/40 text-xs font-semibold text-blue-200 flex items-center gap-2 cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>Add Credential to LinkedIn Profile</span>
              </button>
            </div>

          </div>
        )}

        {hasSearched && !verifiedRecord && (
          <div className="p-8 rounded-3xl bg-rose-950/20 border border-rose-500/30 text-center space-y-3">
            <XCircle className="w-12 h-12 text-rose-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">No Certificate Found</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              We could not find any active credentials matching ID "{certId}". Please verify the spelling or reach out to our verification office.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

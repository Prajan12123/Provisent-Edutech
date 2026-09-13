import React from 'react';
import { 
  ShieldAlert, RefreshCw, Calendar, ArrowRight, 
  HelpCircle, Mail, Phone, FileText, CheckCircle2, AlertCircle, Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const RefundPolicyPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12 selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Breadcrumb & Title */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-cyan-400">
            <FileText className="w-3.5 h-3.5" />
            <span>LEGAL & COMPLIANCE POLICIES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Refund & Cancellation Policy
          </h1>
          
          <p className="text-sm font-mono text-slate-400">
            Official Policy Document • Last Updated: September 2026 • PROVISENT EDUTECH PRIVATE LIMITED
          </p>
        </div>

        {/* Commitment Statement Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/30 border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-bold tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Our Commitment</span>
          </div>
          <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
            We are committed to ensuring your satisfaction with any product, service, course, or workshop you have purchased from us. Please read the following terms carefully as they govern our refund policy.
          </p>
        </div>

        {/* Core Policy Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Workshops Section */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                Workshops
              </h2>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-rose-500/20 text-sm text-slate-200 leading-relaxed font-medium">
                No refunds or credits will be granted against payments related to workshops.
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Due to limited seating capacity, specialized instructor preparation, real-time lab environment provisioning, and upfront administrative commitments, workshop registrations are strictly non-refundable and non-creditable.
              </p>
            </div>
            
            <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>Applies to all live, virtual, and hands-on workshops</span>
            </div>
          </div>

          {/* Courses Section */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">
                Courses
              </h2>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/20 text-sm text-slate-200 leading-relaxed font-medium">
                We do not offer refunds for courses. Please carefully consider your schedule and commitment before enrolling.
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enrollment grants immediate digital access to copyrighted curriculum, proprietary code repositories, learning management systems, and assigned cohort mentor bandwidth.
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Review syllabus & prerequisites prior to checkout</span>
            </div>
          </div>

        </div>

        {/* Cohort Transfer Policy Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 space-y-4">
          <div className="flex items-center gap-2.5 text-cyan-400">
            <RefreshCw className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Cohort Transfer Option
            </h2>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-sm sm:text-base text-cyan-100 leading-relaxed font-medium">
            You may transfer your enrollment to a subsequent cohort. A nominal administrative fee will apply for such transfers.
          </div>

          <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <p className="font-semibold text-white">Transfer Eligibility & Guidelines:</p>
            <ul className="space-y-1.5 pl-4 list-disc marker:text-cyan-400">
              <li>Transfer requests must be submitted in writing to our student support desk prior to the start of the second scheduled module.</li>
              <li>A nominal administrative and seat re-allocation fee will be levied to cover operational adjustments and revised cohort reservations.</li>
              <li>Transfers are subject to cohort seat availability in the requested subsequent intake.</li>
              <li>Transfers are limited to one (1) occurrence per program enrollment.</li>
            </ul>
          </div>
        </div>

        {/* How to Contact Support for Transfers / Inquiries */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>Questions or Transfer Requests?</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            If you have extenuating circumstances or wish to request a cohort transfer, please reach out directly to our admissions and student success team with your registered email and Order ID:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-white/5 flex items-center gap-3">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <span className="text-slate-400 text-[11px] block font-mono">Official Support Desk:</span>
                <a href="mailto:support@provisent.com" className="text-white font-semibold hover:underline">
                  support@provisent.com
                </a>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-white/5 flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-slate-400 text-[11px] block font-mono">Student Success Hotline:</span>
                <span className="text-white font-semibold font-mono">
                  +91 (0) 44 2819 4000
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigateTo('/contact')}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>Contact Admissions Support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => navigateTo('/courses')}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs border border-white/10 cursor-pointer"
            >
              Browse Programs
            </button>
          </div>
        </div>

        {/* Corporate Legal Footer Note */}
        <div className="text-center text-[11px] font-mono text-slate-500 space-y-1 pt-4">
          <p>PROVISENT EDUTECH PRIVATE LIMITED</p>
          <p>Governed in accordance with the applicable laws of the Republic of India.</p>
        </div>

      </div>
    </div>
  );
};

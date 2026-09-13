import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Users, BookOpen, Award, DollarSign, 
  CheckCircle2, XCircle, Search, Filter, Sparkles, TrendingUp, RotateCw 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { 
  StatCardsGridSkeleton, 
  TableRowSkeleton, 
  DashboardWidgetSkeleton 
} from '../components/Skeletons';

export const AdminDashboard: React.FC = () => {
  const { addToast } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'approvals' | 'students'>('overview');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      addToast('Operations Ledger Refreshed', 'Real-time billing, student registrations, and audit logs updated.', 'success');
    }, 500);
  };

  const [pendingInstructors, setPendingInstructors] = useState([
    {
      id: 'inst-app-1',
      name: 'Dr. Rajesh Subramaniam',
      domain: 'Quantum Computing & Cryptography',
      experience: '12 Years (IIT Madras)',
      status: 'pending'
    },
    {
      id: 'inst-app-2',
      name: 'Meera Nambisan',
      domain: 'Autonomous Robotics & ROS2',
      experience: '8 Years (Ex-Tesla)',
      status: 'pending'
    }
  ]);

  const handleApprove = (id: string, name: string) => {
    setPendingInstructors(prev => prev.filter(p => p.id !== id));
    addToast('Instructor Approved', `${name} has been vetted and granted faculty LMS publishing credentials.`, 'success');
  };

  const handleReject = (id: string) => {
    setPendingInstructors(prev => prev.filter(p => p.id !== id));
    addToast('Application Declined', `Instructor request closed.`, 'info');
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-emerald-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-white">PROVISENT Central Operations Dashboard</h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                SUPER ADMIN
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              PROVISENT EDUTECH PRIVATE LIMITED Enterprise Infrastructure
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              title="Simulate data fetch to see skeleton loaders"
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-emerald-300 font-semibold text-xs flex items-center gap-2 cursor-pointer disabled:opacity-50 transition-all"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-emerald-400' : ''}`} />
              <span>{isLoading ? 'Syncing...' : 'Sync Operations'}</span>
            </button>
            <span className="text-xs text-emerald-400 font-mono bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
              System Health: 99.98% Normal
            </span>
          </div>
        </div>

        {/* Global Statistics Grid */}
        {isLoading ? (
          <StatCardsGridSkeleton count={4} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10">
              <p className="text-xs text-slate-400">Total Enrolled Students</p>
              <p className="text-2xl font-black text-white mt-1 font-mono">10,480+</p>
              <p className="text-[10px] text-emerald-400 mt-0.5">+1,240 new this quarter</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10">
              <p className="text-xs text-slate-400">Gross Platform Tuition</p>
              <p className="text-2xl font-black text-emerald-400 mt-1 font-mono">₹4.82 Cr</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Stripe & Razorpay verified</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10">
              <p className="text-xs text-slate-400">Active Specializations</p>
              <p className="text-2xl font-black text-cyan-400 mt-1 font-mono">54 Programs</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Across 10 domains</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10">
              <p className="text-xs text-slate-400">Certificates Issued</p>
              <p className="text-2xl font-black text-purple-400 mt-1 font-mono">3,890</p>
              <p className="text-[10px] text-slate-400 mt-0.5">0 tampering flags</p>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex items-center gap-3 border-b border-white/10 pb-3 text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`font-semibold pb-1 cursor-pointer transition-colors ${
              activeTab === 'overview' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            System Registry Overview
          </button>
          <button
            onClick={() => setActiveTab('approvals')}
            className={`font-semibold pb-1 cursor-pointer transition-colors ${
              activeTab === 'approvals' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            Faculty Approvals ({pendingInstructors.length})
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`font-semibold pb-1 cursor-pointer transition-colors ${
              activeTab === 'students' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            Recent Student Enrollments
          </button>
        </div>

        {/* Tab Content: Faculty Approvals */}
        {activeTab === 'approvals' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white">Pending Instructor Applications</h3>
            {isLoading ? (
              <div className="space-y-3">
                <TableRowSkeleton />
                <TableRowSkeleton />
              </div>
            ) : pendingInstructors.length === 0 ? (
              <p className="text-xs text-slate-400 p-8 rounded-2xl bg-slate-900/40 border border-white/5 text-center">
                All instructor applications processed. Zero pending queues.
              </p>
            ) : (
              pendingInstructors.map(inst => (
                <div
                  key={inst.id}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white">{inst.name}</h4>
                    <p className="text-xs text-cyan-400 font-medium mt-0.5">{inst.domain}</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-1">{inst.experience}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleReject(inst.id)}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-rose-500/20 text-rose-300 text-xs font-semibold cursor-pointer"
                    >
                      Decline
                    </button>
                    <button
                      onClick={() => handleApprove(inst.id, inst.name)}
                      className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shadow-md shadow-emerald-500/20 cursor-pointer"
                    >
                      Approve Faculty
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab Content: Overview */}
        {activeTab === 'overview' && (
          isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DashboardWidgetSkeleton rows={3} />
              <DashboardWidgetSkeleton rows={3} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-3">
                <h3 className="text-sm font-bold text-white">Payment Gateway Ledger Sync</h3>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between p-2.5 rounded-xl bg-slate-950">
                    <span>Razorpay Settlement Pipeline:</span>
                    <span className="text-emerald-400">Connected (Live)</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-xl bg-slate-950">
                    <span>Stripe Global USD/EUR:</span>
                    <span className="text-emerald-400">Connected (Live)</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-xl bg-slate-950">
                    <span>GST (18%) Compliance Filing:</span>
                    <span className="text-cyan-400">Reconciled for Q3</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-3">
                <h3 className="text-sm font-bold text-white">Credential Verification Cluster</h3>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between p-2.5 rounded-xl bg-slate-950">
                    <span>Public Registry DNS:</span>
                    <span className="text-emerald-400">verify.provisent.com</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-xl bg-slate-950">
                    <span>Total Verification Queries (30 Days):</span>
                    <span className="text-white font-bold">14,220 Queries</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-xl bg-slate-950">
                    <span>Recruiter Match Pings:</span>
                    <span className="text-cyan-400">380 Hiring Partners</span>
                  </div>
                </div>
              </div>
            </div>
          )
        )}

        {/* Tab Content: Students */}
        {activeTab === 'students' && (
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-3">
            <h3 className="text-sm font-bold text-white">Latest Candidate Enrollments (Simulated Audit Log)</h3>
            {isLoading ? (
              <div className="space-y-3">
                <TableRowSkeleton />
                <TableRowSkeleton />
                <TableRowSkeleton />
                <TableRowSkeleton />
              </div>
            ) : (
              <div className="divide-y divide-white/5 text-xs">
                {[
                  { name: 'Aditya V.', email: 'aditya.v@gmail.com', course: 'Full Stack MERN', time: '8 mins ago', status: 'Payment Settled' },
                  { name: 'Sneha N.', email: 'sneha.n@gmail.com', course: 'AI Specialization', time: '24 mins ago', status: 'Payment Settled' },
                  { name: 'Rahul S.', email: 'rahul.s@outlook.com', course: 'Cloud & DevOps', time: '1 hr ago', status: 'Payment Settled' },
                  { name: 'Kavita M.', email: 'kavita@techcorp.in', course: 'B2B Enterprise Cohort', time: '3 hrs ago', status: 'Invoice Dispatched' }
                ].map((s, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white">{s.name}</span>
                      <span className="text-slate-400 ml-2">({s.email})</span>
                      <p className="text-[11px] text-cyan-400">{s.course}</p>
                    </div>
                    <div className="text-right font-mono text-[11px]">
                      <span className="text-emerald-400 font-bold">{s.status}</span>
                      <span className="text-slate-500 block">{s.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

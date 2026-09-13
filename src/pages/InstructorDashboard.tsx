import React, { useState, useEffect } from 'react';
import { 
  Users, DollarSign, BookOpen, Star, Calendar, 
  Upload, Plus, CheckCircle2, MessageSquare, Video, RotateCw 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { 
  StatCardsGridSkeleton, 
  TableRowSkeleton, 
  DashboardWidgetSkeleton 
} from '../components/Skeletons';

export const InstructorDashboard: React.FC = () => {
  const { currentUser, addToast } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'classes' | 'upload'>('overview');
  const [newModuleTitle, setNewModuleTitle] = useState('');
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
      addToast('Faculty Workspace Synced', 'Live learner metrics and royalty earnings updated.', 'success');
    }, 500);
  };

  const handleCreateModule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newModuleTitle.trim()) return;
    addToast('Module Published', `Module "${newModuleTitle}" uploaded and awaiting admin publishing check.`, 'success');
    setNewModuleTitle('');
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-purple-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={currentUser?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'}
              alt={currentUser?.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-400"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold text-white">Faculty Workspace: {currentUser?.name || 'Janani K'}</h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  LEAD ARCHITECT
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Active Specializations: 3 • Total Enrolled Learners: 4,820 • Faculty Rating: 4.96/5
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              title="Simulate data fetch to see skeleton loaders"
              className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-purple-300 font-semibold text-xs flex items-center gap-2 cursor-pointer disabled:opacity-50 transition-all"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-purple-400' : ''}`} />
              <span>{isLoading ? 'Syncing...' : 'Sync Analytics'}</span>
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Module</span>
            </button>
          </div>
        </div>

        {/* Analytics Highlights */}
        {isLoading ? (
          <StatCardsGridSkeleton count={4} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10">
              <p className="text-xs text-slate-400">Total Active Learners</p>
              <p className="text-2xl font-black text-white mt-1 font-mono">4,820</p>
              <p className="text-[10px] text-emerald-400 mt-0.5">+340 this month</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10">
              <p className="text-xs text-slate-400">Total Royalty Earnings</p>
              <p className="text-2xl font-black text-emerald-400 mt-1 font-mono">₹8,42,500</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Next payout: 1st of month</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10">
              <p className="text-xs text-slate-400">Course Completion Rate</p>
              <p className="text-2xl font-black text-cyan-400 mt-1 font-mono">91.4%</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Industry avg: ~35%</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10">
              <p className="text-xs text-slate-400">Student Reviews</p>
              <p className="text-2xl font-black text-amber-400 mt-1 font-mono">4.96 / 5</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Over 1,280 reviews</p>
            </div>
          </div>
        )}

        {/* Content Section */}
        {activeTab === 'upload' ? (
          <div className="p-8 rounded-3xl bg-slate-900 border border-purple-500/30 max-w-2xl mx-auto space-y-4">
            <h2 className="text-xl font-bold text-white">Upload New Curriculum Module</h2>
            <form onSubmit={handleCreateModule} className="space-y-4">
              <div>
                <label className="text-xs text-slate-300 block mb-1">Module Title</label>
                <input
                  type="text"
                  value={newModuleTitle}
                  onChange={e => setNewModuleTitle(e.target.value)}
                  placeholder="e.g. Module 6: Production Micro-Frontends with Module Federation"
                  required
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">Target Course Specialization</label>
                <select className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500/50">
                  <option>Full Stack Web Development (MERN & Next.js)</option>
                  <option>Cloud Architecture & DevOps</option>
                  <option>Artificial Intelligence & Deep Learning</option>
                </select>
              </div>

              <div className="p-6 border-2 border-dashed border-white/10 rounded-2xl text-center space-y-2">
                <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-xs text-slate-300">Drag and drop video lectures (.mp4, 4K) or course notes (.md, .pdf)</p>
                <p className="text-[10px] text-slate-500">Max size 2GB per lecture file</p>
              </div>

              <div className="flex gap-2 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className="px-4 py-2 rounded-xl bg-white/5 text-xs text-slate-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs cursor-pointer"
                >
                  Publish Module
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-lg font-bold text-white">Your Authored Specializations</h3>
              
              <div className="space-y-4">
                {isLoading ? (
                  <>
                    <TableRowSkeleton />
                    <TableRowSkeleton />
                    <TableRowSkeleton />
                  </>
                ) : (
                  [
                    {
                      title: 'Full Stack Web Development (MERN & Next.js)',
                      students: '2,840 Active',
                      rating: '4.95',
                      revenue: '₹5,10,000'
                    },
                    {
                      title: 'Cloud Native Microservices & Docker Mastery',
                      students: '1,220 Active',
                      rating: '4.98',
                      revenue: '₹2,30,000'
                    },
                    {
                      title: 'System Design Interview Playbook for Senior Roles',
                      students: '760 Active',
                      rating: '4.96',
                      revenue: '₹1,02,500'
                    }
                  ].map((c, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">{c.title}</h4>
                        <p className="text-xs text-slate-400 mt-1">
                          {c.students} • Rating: ★ {c.rating} • Royalty: <span className="text-emerald-400 font-mono font-bold">{c.revenue}</span>
                        </p>
                      </div>
                      <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-200 cursor-pointer">
                        Manage Modules
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-lg font-bold text-white">Next Live Class Schedule</h3>
              {isLoading ? (
                <DashboardWidgetSkeleton rows={2} />
              ) : (
                <div className="p-5 rounded-3xl bg-slate-900/80 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                    <Video className="w-4 h-4" />
                    <span>SCHEDULED BROADCAST</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Saturday Code Clinic: React 19 Server Components</h4>
                  <p className="text-xs text-slate-400">Date: Saturday, 7:00 PM IST • 140 RSVP'd</p>
                  <button className="w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-md cursor-pointer">
                    Start Virtual Studio
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

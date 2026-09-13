import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Award, Clock, Calendar, CheckCircle2, 
  Play, Sparkles, TrendingUp, Download, ArrowRight, Laptop, Video, RotateCw 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { 
  StatCardsGridSkeleton, 
  EnrolledCourseCardSkeleton, 
  DashboardSessionSkeleton, 
  DashboardWidgetSkeleton 
} from '../components/Skeletons';

export const StudentDashboard: React.FC = () => {
  const { currentUser, enrolledCourses, navigateTo, setIsAiAssistantOpen, addToast } = useApp();
  const [activeTab, setActiveTab] = useState<'courses' | 'sessions' | 'certificates'>('courses');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulated initial data fetch for perceived performance
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
      addToast('Dashboard Synced', 'Live classroom progress and attendance records updated.', 'success');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Welcome Header */}
        <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-cyan-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
              alt={currentUser?.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400 shadow-lg shadow-cyan-500/20"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold text-white">Welcome back, {currentUser?.name || 'Student'}!</h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  STUDENT PORTAL
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Enrolled Specializations: {enrolledCourses.length} • Current Milestone: Capstone Architecture Sprint
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              title="Simulate data fetch to see skeleton loaders"
              className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-300 font-semibold text-xs flex items-center gap-2 cursor-pointer disabled:opacity-50 transition-all"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-cyan-400' : ''}`} />
              <span>{isLoading ? 'Syncing...' : 'Sync Data'}</span>
            </button>
            <button
              onClick={() => setIsAiAssistantOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 hover:bg-purple-900/60 text-purple-300 font-semibold text-xs flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>AI Career Plan</span>
            </button>
            <button
              onClick={() => navigateTo('/courses')}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 cursor-pointer"
            >
              Browse New Courses
            </button>
          </div>
        </div>

        {/* Analytics Highlights (Stat Cards) */}
        {isLoading ? (
          <StatCardsGridSkeleton count={4} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10">
              <p className="text-xs text-slate-400">Enrolled Courses</p>
              <p className="text-2xl font-black text-white mt-1 font-mono">{enrolledCourses.length}</p>
              <p className="text-[10px] text-cyan-400 mt-0.5">2 Active in Progress</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10">
              <p className="text-xs text-slate-400">Total Hours Learned</p>
              <p className="text-2xl font-black text-white mt-1 font-mono">68.5 Hrs</p>
              <p className="text-[10px] text-emerald-400 mt-0.5">+12 Hrs this week</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10">
              <p className="text-xs text-slate-400">Capstones Completed</p>
              <p className="text-2xl font-black text-white mt-1 font-mono">4 / 6</p>
              <p className="text-[10px] text-purple-400 mt-0.5">Top 5% Cohort Score</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10">
              <p className="text-xs text-slate-400">Verified Credentials</p>
              <p className="text-2xl font-black text-emerald-400 mt-1 font-mono">1 Issued</p>
              <p className="text-[10px] text-slate-400 mt-0.5">ID: PROV-2026-8894</p>
            </div>
          </div>
        )}

        {/* Main Dashboard Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Courses & Lectures Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tabs */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-3 text-xs">
              <button
                onClick={() => setActiveTab('courses')}
                className={`font-semibold pb-1 cursor-pointer transition-colors ${
                  activeTab === 'courses' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                In-Progress Classrooms ({enrolledCourses.length})
              </button>
              <button
                onClick={() => setActiveTab('sessions')}
                className={`font-semibold pb-1 cursor-pointer transition-colors ${
                  activeTab === 'sessions' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                Upcoming Live Masterclasses (2)
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`font-semibold pb-1 cursor-pointer transition-colors ${
                  activeTab === 'certificates' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                Earned Credentials (1)
              </button>
            </div>

            {/* Tab: In-Progress Classrooms */}
            {activeTab === 'courses' && (
              <div className="space-y-4">
                {isLoading ? (
                  <>
                    <EnrolledCourseCardSkeleton />
                    <EnrolledCourseCardSkeleton />
                  </>
                ) : (
                  enrolledCourses.map((c, i) => (
                    <div
                      key={c.id}
                      className="p-5 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row gap-5 items-start justify-between"
                    >
                      <div className="flex gap-4">
                        <img src={c.image} alt={c.title} className="w-20 h-20 rounded-2xl object-cover" />
                        <div>
                          <span className="text-[10px] text-cyan-400 font-mono uppercase">{c.category}</span>
                          <h3 className="text-sm font-bold text-white mt-0.5">{c.title}</h3>
                          <p className="text-xs text-slate-400 mt-1">Instructor: {c.instructor.name}</p>
                          
                          {/* Progress Meter */}
                          <div className="w-48 sm:w-64 bg-slate-950 h-2 rounded-full mt-3 overflow-hidden border border-white/5">
                            <div 
                              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full"
                              style={{ width: i === 0 ? '72%' : '35%' }}
                            ></div>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 mt-1 block">
                            {i === 0 ? '72% Completed • Module 4 of 5' : '35% Completed • Module 2 of 6'}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => navigateTo(`/courses/${c.id}`)}
                        className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-md shadow-cyan-500/20"
                      >
                        <Play className="w-3.5 h-3.5 fill-slate-950" />
                        <span>Continue Lesson</span>
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Tab: Live Sessions */}
            {activeTab === 'sessions' && (
              <div className="space-y-3">
                {isLoading ? (
                  <>
                    <DashboardSessionSkeleton />
                    <DashboardSessionSkeleton />
                  </>
                ) : (
                  <>
                    <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                          <Video className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Full Stack Architecture: Distributed Caching with Redis</h4>
                          <p className="text-xs text-slate-400">With Lead Architect Janani K • Saturday, 7:00 PM IST</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs font-semibold">
                        Confirmed
                      </span>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                          <Video className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">AI / LLM Mock Interview Practice & System Design</h4>
                          <p className="text-xs text-slate-400">With Lakshanaya KM • Sunday, 5:00 PM IST</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs font-semibold">
                        Confirmed
                      </span>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Tab: Certificates */}
            {activeTab === 'certificates' && (
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Full Stack Web Development (MERN & Next.js)</h4>
                    <p className="text-xs text-emerald-400 font-mono">ID: PROV-2026-8894 • Grade: A+ Distinction (96%)</p>
                  </div>
                </div>

                <button
                  onClick={() => navigateTo('/verify-certificate')}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inspect Official Certificate</span>
                </button>
              </div>
            )}

          </div>

          {/* AI Advisor & Quick Actions Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* AI Advisor Card */}
            {isLoading ? (
              <DashboardWidgetSkeleton rows={2} />
            ) : (
              <div className="p-6 rounded-3xl bg-purple-950/30 border border-purple-500/30 space-y-3">
                <div className="flex items-center gap-2 text-purple-300">
                  <Sparkles className="w-5 h-5" />
                  <h4 className="text-sm font-bold text-white">AI Career Co-Pilot Recommendation</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "Based on your 92% completion on Full Stack, completing the <strong>Cloud DevOps Specialization</strong> next will increase your recruiter profile match by 38%."
                </p>
                <button
                  onClick={() => setIsAiAssistantOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Discuss with AI Advisor
                </button>
              </div>
            )}

            {/* Quick Diagnostic Mentorship */}
            {isLoading ? (
              <DashboardWidgetSkeleton rows={2} />
            ) : (
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-3">
                <h4 className="text-sm font-bold text-white">Need Personal Mentoring?</h4>
                <p className="text-xs text-slate-400">
                  Book a 1:1 session with faculty for code teardowns or resume reviews.
                </p>
                <button
                  onClick={() => navigateTo('/mentors')}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-cyan-300 font-semibold text-xs border border-white/10"
                >
                  Schedule 1:1 Session →
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

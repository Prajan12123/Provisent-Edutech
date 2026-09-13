import React, { useMemo, useState } from 'react';
import { 
  Sparkles, ArrowRight, ShieldCheck, Star, Users, 
  CheckCircle2, Play, Code2, Award, Compass, 
  BrainCircuit, ChevronDown, ChevronUp, Video, 
  Calendar, Laptop, ExternalLink, MessageSquare, Zap, Clock,
  Search, QrCode, FileCheck, Check, Layers, Eye, Building2, BarChart3
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Hero3DCanvas } from '../components/Hero3DCanvas';
import { ProvisentSampleCertificate } from '../components/ProvisentSampleCertificate';
import { 
  CERTIFICATE_TRACKS, 
  CERTIFICATION_PILLARS, 
  ALUMNI_STORIES,
  CertificateCategory
} from '../data/certificationsContent';
import { 
  COURSES, PROGRAM_CATEGORIES, LEARNING_PATHS, BOOTCAMPS, 
  FACULTY_MEMBERS, MENTORS, TESTIMONIALS, FAQS, STATS, 
  PLACEMENT_STEPS, PARTNER_LOGOS, BLOG_POSTS 
} from '../data/mockData';
import { AlumniPlacementTicker } from '../components/home/AlumniPlacementTicker';
import { CareerRoiCalculator } from '../components/home/CareerRoiCalculator';
import { TechRadar2026 } from '../components/home/TechRadar2026';
import { LiveCapstoneShowcase } from '../components/home/LiveCapstoneShowcase';
import { CodeDefenseSimulator } from '../components/home/CodeDefenseSimulator';
import { ApprenticeDayInLife } from '../components/home/ApprenticeDayInLife';

const COURSE_FILTERS = [
  { id: 'all', label: 'All Fields' },
  { id: 'programming', label: 'Programming' },
  { id: 'intelligence', label: 'AI & ML' },
  { id: 'design', label: 'Design' },
  { id: 'cloud', label: 'Cloud' }
];

export const HomePage: React.FC = () => {
  const { navigateTo, openCheckout, setIsAiAssistantOpen } = useApp();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [homeCertTrack, setHomeCertTrack] = useState<CertificateCategory>(CERTIFICATE_TRACKS[0]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategoryFilter(catId);
  };

  const displayedCourses = useMemo(() => {
    if (activeCategoryFilter === 'all') {
      return COURSES.slice(0, 6);
    }

    return COURSES.filter((course) =>
      course.category.toLowerCase().includes(activeCategoryFilter.toLowerCase())
    ).slice(0, 6);
  }, [activeCategoryFilter]);

  return (
    <div className="relative min-h-screen bg-[#07090E] text-slate-100 overflow-hidden">
      
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-[400px] right-1/4 w-[650px] h-[650px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse-slow"></div>

      {/* ================================================== */}
      {/* 4. HERO SECTION */}
      {/* ================================================== */}
      <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Animated Text Badges: LEARN • BUILD • CERTIFY • GROW */}
              <div className="inline-flex items-center gap-2 p-1.5 pr-3 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono backdrop-blur-xl">
                <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-[10px] tracking-wider uppercase flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3" />
                  FUTURE OF EDTECH
                </span>
                <span className="text-cyan-300 font-semibold text-[11px] tracking-wider">
                  LEARN • BUILD • CERTIFY • GROW
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Transform Skills. <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Build Your Future.
                </span>
              </h1>

              {/* Supporting Headline */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
                Learn industry-ready skills from experts, earn recognized certifications, and build a career that moves forward with PROVISENT EDUTECH PRIVATE LIMITED.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => navigateTo('/courses')}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 font-bold text-sm text-white shadow-xl shadow-cyan-500/25 transition-all cursor-pointer flex items-center gap-2 group"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigateTo('/programs')}
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-sm transition-all cursor-pointer"
                >
                  Explore Programs
                </button>

                <button
                  onClick={() => navigateTo('/contact')}
                  className="px-4 py-3.5 rounded-xl text-cyan-400 hover:text-cyan-300 text-xs font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Book a Free Consultation</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quick Trust Bar */}
              <div className="pt-4 flex items-center gap-6 text-xs text-slate-400 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <div className="flex -space-x-2">
                    <img className="w-6 h-6 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="student" />
                    <img className="w-6 h-6 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="student" />
                    <img className="w-6 h-6 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="student" />
                  </div>
                  <span>10,000+ Enrolled</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold text-white">4.92/5</span>
                  <span className="text-slate-400">(3,400+ Reviews)</span>
                </div>
              </div>

            </div>

            {/* Right Hero Visual: 3D Education Ecosystem */}
            <div className="lg:col-span-6">
              <Hero3DCanvas />
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. TRUST / STATISTICS SECTION */}
      {/* ================================================== */}
      <section className="relative py-12 border-y border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors">
                <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent font-mono">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-bold text-white mt-1">{stat.label}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 5B. LIVE ALUMNI PLACEMENT TELEMETRY */}
      {/* ================================================== */}
      <AlumniPlacementTicker />

      {/* ================================================== */}
      {/* 6. WHY PROVISENT */}
      {/* ================================================== */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              THE PROVISENT ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              More Than Courses. <br />
              <span className="text-slate-400 font-normal">A Complete Career Ecosystem.</span>
            </h2>
            <p className="text-sm text-slate-300">
              Engineered from the ground up to prepare modern engineers, designers, and managers for exponential industry growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Industry Expert Instructors',
                desc: 'Learn directly from seasoned practitioners with real-world architecture experience at tier-1 technology firms.',
                icon: Code2,
                color: 'text-cyan-400',
                border: 'hover:border-cyan-500/40'
              },
              {
                title: 'Live Interactive Learning',
                desc: 'Attend live weekend sessions, practical code clinics, and interactive design teardowns with real-time feedback.',
                icon: Video,
                color: 'text-purple-400',
                border: 'hover:border-purple-500/40'
              },
              {
                title: 'Hands-On Projects',
                desc: 'Build portfolio-ready real-world systems deployed to cloud environments with automated testing and CI/CD pipelines.',
                icon: Laptop,
                color: 'text-blue-400',
                border: 'hover:border-blue-500/40'
              },
              {
                title: 'Recognized Certifications',
                desc: 'Earn professional digital credentials with tamper-proof IDs, QR verification, and 1-click LinkedIn synchronization.',
                icon: Award,
                color: 'text-emerald-400',
                border: 'hover:border-emerald-500/40'
              },
              {
                title: 'Career Mentorship',
                desc: 'Schedule 1-on-1 sessions for mock technical interviews, resume tearing, and executive salary negotiation guidance.',
                icon: Compass,
                color: 'text-amber-400',
                border: 'hover:border-amber-500/40'
              },
              {
                title: 'Global Learning Community',
                desc: 'Connect with over 10,000+ ambitious learners, founders, and engineers spanning 150+ countries.',
                icon: Users,
                color: 'text-pink-400',
                border: 'hover:border-pink-500/40'
              }
            ].map((card, i) => {
              const IconComp = card.icon;
              return (
                <div
                  key={i}
                  className={`p-6 rounded-2xl liquid-glass-card border border-white/10 transition-all duration-300 group cursor-default ${card.border}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <IconComp className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 7. PROGRAM CATEGORIES */}
      {/* ================================================== */}
      <section className="relative py-20 bg-slate-950/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                CURRICULUM HORIZONS
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">Explore Your Next Skill</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Specialized learning pathways tailored to high-demand enterprise capabilities.
              </p>
            </div>
            <button
              onClick={() => navigateTo('/programs')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
            >
              <span>View All 10 Domains</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PROGRAM_CATEGORIES.map(cat => (
              <div
                key={cat.id}
                onClick={() => navigateTo('/courses')}
                className="p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-3 group-hover:bg-cyan-500/20 transition-colors">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono">{cat.programsCount} Programs</span>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 7B. REAL-TIME CAREER ROI & SALARY CALCULATOR */}
      {/* ================================================== */}
      <CareerRoiCalculator />

      {/* ================================================== */}
      {/* 7C. PROVISENT ENTERPRISE TECH RADAR 2026 */}
      {/* ================================================== */}
      <TechRadar2026 />

      {/* ================================================== */}
      {/* 8. FEATURED COURSES MARKETPLACE */}
      {/* ================================================== */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                CURATED LEARNING PATHWAYS
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">Top Programs for Your Career</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Rigorous, project-centered courses with recognized professional credentials.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              {COURSE_FILTERS.map((filterOption) => (
                <button
                  key={filterOption.id}
                  onClick={() => handleCategoryChange(filterOption.id)}
                  className={`px-3.5 py-1.5 rounded-xl font-medium transition-all cursor-pointer whitespace-nowrap ${
                    activeCategoryFilter === filterOption.id
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                  }`}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCourses.map(course => (
              <div
                key={course.id}
                className="rounded-2xl liquid-glass-card border border-white/10 overflow-hidden flex flex-col group transition-all duration-300"
              >
                {/* Course Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {course.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-cyan-500 text-slate-950 font-mono text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      {course.badge}
                    </span>
                  )}

                  <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-cyan-300 bg-slate-950/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {course.category}
                  </span>
                </div>

                {/* Course Info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 
                      onClick={() => navigateTo(`/courses/${course.id}`)}
                      className="text-base font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer line-clamp-2"
                    >
                      {course.title}
                    </h3>
                    
                    <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-400 pt-3 mt-2 border-t border-white/5">
                      <div className="flex items-center gap-1.5">
                        <img src={course.instructor.avatar} alt={course.instructor.name} className="w-5 h-5 rounded-full object-cover" />
                        <span className="text-slate-300 font-medium">{course.instructor.name}</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="font-bold text-white">{course.rating}</span>
                        <span className="text-slate-500 text-[10px]">({course.reviewCount})</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-2 font-mono">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-cyan-400" /> {course.duration.split('•')[0]}</span>
                      <span>•</span>
                      <span>{course.difficulty}</span>
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base font-extrabold text-white font-mono">
                          {course.currency}{course.discountedPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-500 line-through font-mono">
                          {course.currency}{course.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold font-mono">Verified Certificate Included</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigateTo(`/courses/${course.id}`)}
                        className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 cursor-pointer"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => openCheckout(course)}
                        className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 cursor-pointer"
                      >
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigateTo('/courses')}
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 font-semibold text-xs transition-colors cursor-pointer"
            >
              Browse All Available Programs & Specializations →
            </button>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 11. AI LEARNING SECTION */}
      {/* ================================================== */}
      <section className="relative py-20 bg-gradient-to-b from-purple-950/20 via-slate-950 to-slate-950 border-y border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                NEXT-GEN AI ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Your Personal AI Learning Assistant
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Adaptive curriculum generation, automated skill gap diagnostics, and algorithmic technical mock interview preparation — tailored uniquely to your career goals.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  'AI Course Recommendations',
                  'AI Study Planner',
                  'AI Skill Assessment',
                  'AI Resume Assistant',
                  'AI Interview Preparation',
                  'AI Learning Analytics'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => setIsAiAssistantOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 font-bold text-xs text-white shadow-xl shadow-purple-500/20 flex items-center gap-2 cursor-pointer"
                >
                  <BrainCircuit className="w-4 h-4" />
                  <span>Launch Provisent AI Career Advisor</span>
                </button>
              </div>
            </div>

            {/* AI Mockup Interface */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-slate-900/90 border border-purple-500/30 p-5 shadow-2xl backdrop-blur-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <BrainCircuit className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">PROVISENT AI Co-Pilot</p>
                      <p className="text-[10px] text-purple-300">Continuous Adaptive Learning</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Online
                  </span>
                </div>

                {/* Simulated Conversation */}
                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3 rounded-2xl bg-purple-950/40 border border-purple-500/20 text-slate-200 space-y-2">
                    <p className="font-semibold text-purple-300">
                      "What would you like to learn today?"
                    </p>
                    <p className="text-[11px] text-slate-300">
                      I can generate an 8-month transition blueprint for Full Stack or AI Engineering, conduct a quick code review, or simulate a behavioral interview.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {[
                      'Build a Career Plan',
                      'Find a Course',
                      'Prepare for Interview',
                      'Improve My Resume'
                    ].map(btn => (
                      <button
                        key={btn}
                        onClick={() => setIsAiAssistantOpen(true)}
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 text-left text-[11px] font-medium text-slate-200 hover:text-purple-200 transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>{btn}</span>
                        <ArrowRight className="w-3 h-3 text-purple-400" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Target Salary Analysis: <strong className="text-white">₹12 - ₹32 LPA</strong></span>
                  <span className="text-emerald-400">92% Match</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 12. LIVE LEARNING & CLASSROOM UI */}
      {/* ================================================== */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              SYNCHRONOUS MASTERCLASSES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Learn Live. Build Real Skills.
            </h2>
            <p className="text-sm text-slate-300">
              Live weekend classes, webinars, practical hackathons, and interactive code clinics with immediate faculty mentorship.
            </p>
          </div>

          {/* Realistic Live-Class Dashboard UI */}
          <div className="rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-2xl overflow-hidden liquid-glass">
            
            {/* Window bar */}
            <div className="px-5 py-3.5 bg-slate-950 border-b border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                <span className="font-bold text-white">LIVE SESSION: Advanced React 19 State Systems & TanStack Query</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[11px]">
                <span className="text-emerald-400 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> 142 Students Attending
                </span>
                <span className="text-slate-500">|</span>
                <span className="text-cyan-400">Recording Enabled</span>
              </div>
            </div>

            {/* Main Stage Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Instructor Video Feed + Code Screen */}
              <div className="lg:col-span-8 p-6 bg-slate-950/80 flex flex-col justify-between min-h-[380px] border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                    alt="Live Classroom"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  
                  {/* Speaker Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 p-2 pr-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                      alt="Janani K"
                      className="w-10 h-10 rounded-lg object-cover border border-cyan-400"
                    />
                    <div>
                      <p className="text-xs font-bold text-white">Janani K</p>
                      <p className="text-[10px] text-cyan-300">Lead Architect • Speaking</p>
                    </div>
                  </div>

                  {/* Active Slide / Code Indicator */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                    Screen: VS Code (Zustand Slices)
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-300">Current Chapter:</span>
                    <span className="text-white font-semibold">Slice Reducers with TypeScript Generics</span>
                  </div>
                  <button
                    onClick={() => navigateTo('/courses')}
                    className="text-cyan-400 hover:underline font-semibold"
                  >
                    View Course Modules →
                  </button>
                </div>
              </div>

              {/* Live Interactive Chat + Q&A */}
              <div className="lg:col-span-4 p-5 flex flex-col justify-between bg-slate-900/60 h-full">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs font-bold text-white">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-cyan-400" />
                      <span>Classroom Chat & Q&A</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">Moderated</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1">
                        <span className="font-semibold text-cyan-300">Rohit M. (Student)</span>
                        <span>2 mins ago</span>
                      </div>
                      <p className="text-slate-200 text-[11px]">
                        Is it better to split Zustand stores across domain models or keep a global state tree?
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20">
                      <div className="flex items-center justify-between text-[10px] text-cyan-300 pb-1">
                        <span className="font-bold">Janani K (Instructor)</span>
                        <span>Just now</span>
                      </div>
                      <p className="text-slate-200 text-[11px]">
                        Great question Rohit! Prefer slice creators pattern; it combines domain modularity with single-hook access.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1">
                        <span className="font-semibold text-purple-300">Kavya S. (Student)</span>
                        <span>Just now</span>
                      </div>
                      <p className="text-slate-200 text-[11px]">
                        Awesome explanation of optimistic mutations with TanStack Query!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Ask the instructor a question..."
                      className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                      disabled
                      value="Interactive Q&A open during live sessions"
                      readOnly
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 9B. APPRENTICE PRODUCTION CAPSTONE SHOWCASE */}
      {/* ================================================== */}
      <LiveCapstoneShowcase />

      {/* ================================================== */}
      {/* 9C. A DAY IN THE LIFE OF AN APPRENTICE */}
      {/* ================================================== */}
      <ApprenticeDayInLife />

      {/* ================================================== */}
      {/* 10. LEARNING PATHS (ROADMAP) */}
      {/* ================================================== */}
      <section className="relative py-24 bg-slate-950/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                END-TO-END CAREER BLUEPRINTS
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">Choose Your Career Path</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Multi-phase roadmaps from beginner fundamentals to enterprise leadership roles.
              </p>
            </div>
            <button
              onClick={() => navigateTo('/learning-paths')}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All Roadmaps</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEARNING_PATHS.map(path => (
              <div
                key={path.id}
                className="p-6 rounded-3xl liquid-glass-card border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/20">
                      {path.duration}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">
                      Proj. {path.salaryRange}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{path.role}</p>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {path.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {path.skills.slice(0, 6).map(skill => (
                      <span key={skill} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] text-slate-300 font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Roadmap Phases horizontal stepper */}
                  <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Roadmap Phases:</p>
                    <div className="grid grid-cols-3 gap-2 text-[10px]">
                      {path.milestones.slice(0, 3).map((m, idx) => (
                        <div key={idx} className="p-2 rounded-xl bg-slate-950/60 border border-white/5">
                          <span className="text-cyan-400 font-mono block">{m.phase}</span>
                          <span className="text-white font-medium line-clamp-1">{m.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Starting: {path.startingLevel}</span>
                  <button
                    onClick={() => navigateTo('/learning-paths')}
                    className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold text-xs border border-cyan-500/30 transition-colors cursor-pointer"
                  >
                    View Roadmap →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 13. BOOTCAMPS */}
      {/* ================================================== */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              IMMERSIVE ACCELERATORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Intensive Live Bootcamps
            </h2>
            <p className="text-sm text-slate-300">
              Transform your skill set in 30 to 90 days with daily code reviews, weekend hackathons, and direct hiring partner referrals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOOTCAMPS.map(bootcamp => (
              <div
                key={bootcamp.id}
                className="p-5 rounded-2xl liquid-glass-card border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
                    <span className="text-cyan-400 font-bold">{bootcamp.duration}</span>
                    <span className="text-rose-400 bg-rose-950/50 px-2 py-0.5 rounded border border-rose-500/20">
                      {bootcamp.seatsLeft} Seats Left
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {bootcamp.title}
                  </h3>

                  <p className="text-[11px] text-slate-400 mt-1">{bootcamp.schedule}</p>
                  <p className="text-xs text-amber-300 font-semibold mt-2">{bootcamp.batchDate}</p>

                  <div className="space-y-1.5 pt-3 mt-3 border-t border-white/5 text-[11px] text-slate-300">
                    {bootcamp.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-base font-bold text-white font-mono">
                      ₹{bootcamp.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 line-through font-mono">
                      ₹{bootcamp.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() => navigateTo('/bootcamps')}
                    className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 cursor-pointer text-center"
                  >
                    View Bootcamp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 14. CERTIFICATIONS & ACCREDITED CREDENTIAL SYSTEM */}
      {/* ================================================== */}
      <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Top Section Header: Creative Proof-of-Work Credential System */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-cyan-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-sm shadow-emerald-500/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-semibold tracking-wider uppercase text-[11px]">PROOF-OF-WORK CREDENTIALS</span>
                <span className="text-slate-500">•</span>
                <span className="text-cyan-300 text-[10px] hidden sm:inline font-semibold">100% LEDGER VERIFIABLE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Don't Just Claim Skills. <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Prove Them In Code & Ledger.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Every Provisent credential represents real architectural capstones defended live with senior engineers. Backed by statutory regulatory standards (AICTE, ISO 9001:2015, Microsoft, MSME, #startupindia) and instant public QR auditability.
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] font-mono text-slate-300 pt-1">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  SHA-256 Public Verification
                </span>
                <span className="flex items-center gap-1.5 text-teal-300">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  Dual Mentor & Executive Signatures
                </span>
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  1-Click LinkedIn Talent Sync
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => navigateTo('/certifications')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 font-bold text-xs text-slate-950 shadow-xl shadow-emerald-500/20 flex items-center gap-2 cursor-pointer transition-all"
              >
                <Award className="w-4 h-4" />
                <span>Explore All Certifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigateTo('/verify-certificate')}
                className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10 flex items-center gap-2 cursor-pointer transition-all"
              >
                <Search className="w-4 h-4 text-cyan-400" />
                <span>Verify Credential ID</span>
              </button>
            </div>
          </div>

          {/* Interactive Credential Specimen Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Track Switcher & Benefits */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 uppercase font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    SELECT DIPLOMA SPECIMEN
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Live Preview
                  </span>
                </div>

                <div className="space-y-2">
                  {CERTIFICATE_TRACKS.map((track) => {
                    const isActive = track.id === homeCertTrack.id;
                    return (
                      <button
                        key={track.id}
                        onClick={() => setHomeCertTrack(track)}
                        className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isActive
                            ? 'bg-gradient-to-r from-emerald-950/70 to-slate-900 border-emerald-500/60 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                            : 'bg-slate-950/60 border-white/5 hover:border-white/20 hover:bg-slate-900/60'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-bold ${isActive ? 'text-emerald-400' : 'text-slate-200'}`}>
                              {track.name}
                            </span>
                            {track.id === 'track-python-ai' && (
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                                Verified Sample
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                            ID: {track.certId} • Avg Hike: <span className="text-emerald-400 font-bold">{track.avgSalaryHike}</span>
                          </p>
                        </div>
                        <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? 'text-emerald-400 translate-x-0.5' : 'text-slate-600'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Core Verification Features Bullet List */}
              <div className="space-y-3 p-5 rounded-2xl bg-slate-900/40 border border-white/5">
                <span className="text-xs font-bold text-white block">
                  What Makes Every Provisent Certificate Authentic:
                </span>
                {[
                  {
                    title: 'Cryptographic SHA-256 Ledger Record',
                    desc: 'Permanently registered on a tamper-proof public registry with verifiable issue timestamps.'
                  },
                  {
                    title: 'Statutory Regulatory Alignments',
                    desc: 'Endorsed under AICTE, ISO 9001:2015 certified systems, Microsoft Partner, MSME, & #startupindia.'
                  },
                  {
                    title: 'Zero-Login Public QR Code Verification',
                    desc: 'Employers can scan the QR code using any smartphone camera to inspect recipient records in 1 second.'
                  },
                  {
                    title: '1-Click LinkedIn Add-to-Profile Sync',
                    desc: 'Pre-formatted credential URL for immediate sync with your LinkedIn Licenses & Certifications.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">{item.title}:</span>{' '}
                      <span className="text-slate-400">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigateTo('/verify-certificate')}
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 font-bold text-xs text-slate-950 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Verify Specimen #{homeCertTrack.certId}</span>
                </button>
              </div>
            </div>

            {/* Right Live Rendered Certificate Preview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between px-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold uppercase tracking-wider">
                    SPECIMEN: {homeCertTrack.courseTitle}
                  </span>
                </div>
                <button
                  onClick={() => navigateTo('/certifications')}
                  className="text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Interactive Anatomy & Customizer →</span>
                </button>
              </div>

              {/* Embedded Realistic Certificate Component */}
              <div 
                onClick={() => navigateTo('/certifications')}
                className="relative cursor-pointer hover:scale-[1.008] transition-transform group rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950/90 p-2 sm:p-4 backdrop-blur-xl"
              >
                <ProvisentSampleCertificate
                  recipientName={homeCertTrack.recipientName}
                  courseTitle={homeCertTrack.courseTitle}
                  duration={homeCertTrack.duration}
                  issueDate={homeCertTrack.issueDate}
                  mentorName={homeCertTrack.mentorName}
                  ceoName={homeCertTrack.ceoName}
                  certId={homeCertTrack.certId}
                  showWatermark={true}
                />
                
                {/* Overlay hover prompt */}
                <div className="absolute inset-x-0 bottom-0 py-2.5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center justify-center gap-2 text-xs font-mono text-cyan-400 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to open Full Specimen Customizer & Interactive Anatomy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Statutory Logos Banner */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-slate-300">GOVT & STATUTORY ACCREDITATIONS:</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-300 font-semibold text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">AICTE</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">ISO 9001:2015</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">MICROSOFT</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">MSME</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">#STARTUPINDIA</span>
                </div>
              </div>
            </div>

          </div>

          {/* Credential Trust Pillars - 3 Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Instant QR Code Ledger Verification</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Recruiters do not need to register or call HR. Scanning the QR code instantly displays the candidate's verified grade, capstone project repository, and completion timeline.
              </p>
              <div className="text-[11px] font-mono text-cyan-400 font-semibold pt-1">
                Zero-Friction Recruiter Screening →
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Dual Mentor & Executive Validation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Certificates are countersigned by your Lead Industry Mentor and the CEO & Founder of Provisent Edutech after comprehensive code defense reviews.
              </p>
              <div className="text-[11px] font-mono text-emerald-400 font-semibold pt-1">
                Defended Code Assessments Only →
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Recognized by 450+ Hiring Partners</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our credentials are recognized across tech leaders including TCS, Infosys, Wipro, Microsoft partners, Cognizant, and high-growth AI startups.
              </p>
              <div className="text-[11px] font-mono text-amber-400 font-semibold pt-1">
                Direct ATS Credential Integration →
              </div>
            </div>
          </div>

          {/* Quick Recruiter Callout Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-mono text-emerald-400 uppercase font-bold">
                PROVISENT VERIFICATION PORTAL
              </div>
              <div className="text-base sm:text-lg font-bold text-white">
                Have a candidate certificate ID ready to audit?
              </div>
              <div className="text-xs text-slate-300">
                Enter any PROV ID format (e.g. <span className="font-mono text-cyan-300">PROV-2026-PYAI-0104</span>) to view official cryptographic records.
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => navigateTo('/verify-certificate')}
                className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 font-bold text-xs text-slate-950 shadow-md shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Verify ID Now</span>
              </button>
              <button
                onClick={() => navigateTo('/certifications')}
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10 cursor-pointer"
              >
                View Standards
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 12B. THE PROVISENT LIVE CODE DEFENSE SIMULATOR */}
      {/* ================================================== */}
      <CodeDefenseSimulator />

      {/* ================================================== */}
      {/* 20. FACULTY SHOWCASE */}
      {/* ================================================== */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                WORLD-CLASS PRACTITIONERS
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">Learn from Proven Tech Leaders</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Our faculty build real systems and mentor students directly throughout every module.
              </p>
            </div>
            <button
              onClick={() => navigateTo('/instructors')}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
            >
              Meet Entire Faculty →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTY_MEMBERS.map(member => (
              <div
                key={member.id}
                className="rounded-2xl liquid-glass-card border border-white/10 overflow-hidden flex flex-col justify-between group transition-all"
              >
                <div className="p-5">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-4 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                    <img src={member.avatar} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium">{member.role}</p>
                  <p className="text-[11px] text-slate-400 mt-1 font-mono">{member.experience}</p>
                  
                  <p className="text-xs text-slate-300 mt-3 line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>{member.coursesCount} Programs</span>
                    <span>{member.studentsCount.toLocaleString()} Students</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-950/60 border-t border-white/10">
                  <button
                    onClick={() => navigateTo('/mentors')}
                    className="w-full py-2 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-300 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Book 1:1 Mentorship
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 21. SUCCESS STORIES & TESTIMONIALS */}
      {/* ================================================== */}
      <section className="relative py-24 bg-slate-950/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              ALUMNI IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real Learners. Real Careers. Real Results.
            </h2>
            <p className="text-sm text-slate-300">
              Discover how Provisent graduates accelerated their careers and transformed their earnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map(item => (
              <div
                key={item.id}
                className="p-5 rounded-2xl liquid-glass-card border border-white/10 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                      {item.salaryHike}
                    </span>
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{item.quote}"
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] space-y-1">
                    <p className="text-slate-500 line-through">{item.beforeRole}</p>
                    <p className="text-emerald-400 font-bold">{item.afterRole}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                  <img src={item.avatar} alt={item.name} className="w-9 h-9 rounded-full object-cover border border-cyan-500/30" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.name}</h4>
                    <p className="text-[10px] text-slate-400">{item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 22. PLACEMENT & CAREER JOURNEY */}
      {/* ================================================== */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              CAREER PIPELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Learning to Career
            </h2>
            <p className="text-sm text-slate-300">
              A structured 6-phase engineering trajectory designed to land you high-trajectory offers.
            </p>
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {PLACEMENT_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 relative group hover:border-cyan-500/40 transition-colors"
              >
                <span className="text-2xl font-black font-mono text-cyan-500/30 group-hover:text-cyan-400 transition-colors">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-white mt-1 mb-1">{step.title}</h4>
                <p className="text-[11px] text-slate-400 leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Partner Placeholder Wall */}
          <div className="p-8 rounded-3xl bg-slate-950/60 border border-white/10 text-center">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
              Our Alumni Work Across Leading Global Tech Teams
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {PARTNER_LOGOS.map((p, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center justify-center">
                  <span className="text-xs font-bold text-slate-300 tracking-wider font-mono">{p.name}</span>
                  <span className="text-[9px] text-slate-500 uppercase">{p.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 23. KNOWLEDGE HUB / BLOG PREVIEW */}
      {/* ================================================== */}
      <section className="relative py-20 bg-slate-950/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                KNOWLEDGE HUB
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">Latest Tech & Career Insights</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Deep architectural dives and industry analyses written by Provisent faculty.
              </p>
            </div>
            <button
              onClick={() => navigateTo('/blog')}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
            >
              Browse All Articles →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map(post => (
              <div
                key={post.id}
                onClick={() => navigateTo(`/blog/${post.slug}`)}
                className="rounded-2xl liquid-glass-card border border-white/10 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-cyan-300 font-semibold text-[10px] uppercase border border-white/10">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2 font-mono">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 24. FAQ ACCORDION */}
      {/* ================================================== */}
      <section className="relative py-24" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              ANSWERS & TRANSPARENCY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-300">
              Everything you need to know about enrollments, curriculum format, verifiable certificates, and career support.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map(faq => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dedicated Policy Link banner */}
          <div className="mt-8 p-4 rounded-2xl bg-slate-900/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Looking for our transparent refund and cohort transfer guidelines?</span>
            </div>
            <button
              onClick={() => navigateTo('/refund-policy')}
              className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>Read Refund & Cancellation Policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 24.5 CORPORATE UPSKILLING SECTION */}
      {/* ================================================== */}
      <section className="relative py-24 bg-[#07090E] border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>ENTERPRISE SOLUTIONS</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Corporate Upskilling
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Empower your workforce with custom training solutions. We help teams stay ahead of the curve with cutting-edge technical skills.
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('/corporate')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 font-bold text-sm text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer inline-flex items-center gap-2 group"
                id="home-request-consultation-btn"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Customized Curriculum */}
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-white/10 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Customized Curriculum
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We design training programs specifically tailored to your company's tech stack and business goals, ensuring immediate ROI.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-cyan-400">Tailored Stack Mapping</span>
                <button
                  onClick={() => navigateTo('/corporate')}
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1 text-[11px]"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* 2. Team Bootcamps */}
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-white/10 hover:border-blue-500/40 hover:bg-slate-900/60 transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  Team Bootcamps
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Intensive workshops designed to upskill entire departments in new technologies, methodologies, or tools.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-blue-400">Sprint Immersion</span>
                <button
                  onClick={() => navigateTo('/corporate')}
                  className="text-slate-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-[11px]"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* 3. Performance Tracking */}
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-white/10 hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Performance Tracking
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Detailed analytics and reporting on your team's progress, engagement, and skill acquisition.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-emerald-400">Live Skill Telemetry</span>
                <button
                  onClick={() => navigateTo('/corporate')}
                  className="text-slate-400 hover:text-emerald-300 transition-colors flex items-center gap-1 text-[11px]"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* 4. Onboarding Solutions */}
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-white/10 hover:border-purple-500/40 hover:bg-slate-900/60 transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  Onboarding Solutions
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Streamline your new hire process with structured technical onboarding programs that reduce ramp-up time.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-purple-400">Accelerated Ramp-Up</span>
                <button
                  onClick={() => navigateTo('/corporate')}
                  className="text-slate-400 hover:text-purple-300 transition-colors flex items-center gap-1 text-[11px]"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 25. CORPORATE & FINAL CTA BANNER */}
      {/* ================================================== */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950/40 via-slate-950 to-purple-950/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            PROVISENT EDUTECH PRIVATE LIMITED
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            Ready to Accelerate Your Career Trajectory?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Join thousands of professionals already mastering full stack architecture, artificial intelligence, and design systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => navigateTo('/courses')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 font-bold text-sm text-white shadow-xl shadow-cyan-500/25 cursor-pointer"
            >
              Explore All Courses
            </button>
            <button
              onClick={() => navigateTo('/corporate')}
              className="px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm cursor-pointer"
            >
              Talk to Corporate B2B Team
            </button>
          </div>

          <p className="text-xs text-slate-400 pt-4">
            Need guidance? Reach our admissions cell at <a href="mailto:hr@provisent.com" className="text-cyan-400 hover:underline">hr@provisent.com</a> or call <a href="tel:+919361444644" className="text-cyan-400 font-mono">+91 9361444644</a>.
          </p>
        </div>
      </section>

    </div>
  );
};

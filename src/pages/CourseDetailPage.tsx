import React, { useState } from 'react';
import { 
  Star, Clock, Users, Award, CheckCircle2, ChevronDown, 
  ChevronUp, Play, ShieldCheck, Download, Share2, 
  Sparkles, Lock, ArrowLeft, BookOpen, Layers, Laptop 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/mockData';

interface Props {
  courseId: string;
}

export const CourseDetailPage: React.FC<Props> = ({ courseId }) => {
  const { navigateTo, openCheckout, addToast } = useApp();
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  const course = COURSES.find(c => c.id === courseId) || COURSES[0];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast('Link Copied', 'Course syllabus link copied to your clipboard.', 'info');
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <button
          onClick={() => navigateTo('/courses')}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Course Marketplace</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Header / Intro */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  {course.category}
                </span>
                {course.badge && (
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-950 font-bold bg-cyan-400 px-2.5 py-1 rounded-full">
                    {course.badge}
                  </span>
                )}
                <span className="text-xs text-slate-400">Last updated: {course.lastUpdated || 'September 2026'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold text-white text-sm">{course.rating}</span>
                  <span className="text-slate-400">({course.reviewCount.toLocaleString()} ratings)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>{(course.enrolledCount ?? course.studentsEnrolled ?? 1250).toLocaleString()} Students Enrolled</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Level: {course.difficulty}</span>
                </div>
              </div>
            </div>

            {/* Video Preview Player */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video bg-slate-950 shadow-2xl group">
              {isPlayingPreview ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 p-6 text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin mb-3"></div>
                  <p className="text-xs font-mono text-cyan-300">STREAMING INTRODUCTORY LESSON (1080P 60FPS)</p>
                  <p className="text-[11px] text-slate-400 mt-1 max-w-sm">
                    In a full session, you will build live with VS Code, integrated cloud containers, and instant test validation.
                  </p>
                  <button
                    onClick={() => setIsPlayingPreview(false)}
                    className="mt-4 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white"
                  >
                    Close Preview
                  </button>
                </div>
              ) : (
                <>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlayingPreview(true)}
                      className="w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-xl shadow-cyan-500/40 cursor-pointer hover:scale-110 transition-all"
                      aria-label="Play course preview"
                    >
                      <Play className="w-7 h-7 fill-slate-950 ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <span className="font-semibold">Watch 5-Minute Curriculum Teardown & Tech Stack Walkthrough</span>
                    <span className="text-cyan-400 font-mono">Free Preview</span>
                  </div>
                </>
              )}
            </div>

            {/* What You Will Learn (Outcomes) */}
            <div className="p-6 rounded-3xl liquid-glass-card border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>What You Will Master in This Specialization</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs">
                Technologies & Tools Covered
              </h3>
              <div className="flex flex-wrap gap-2">
                {(course.skills && course.skills.length > 0 ? course.skills : ['TypeScript', 'React 19', 'Next.js', 'PostgreSQL', 'Docker', 'AWS']).map(tool => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Comprehensive Curriculum Syllabus Accordion */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Course Syllabus & Curriculum</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {(course.syllabus || course.modules || []).length} Modules • {course.lessonsCount || (course.modules ? course.modules.reduce((acc, m) => acc + (m.lessons?.length || 0), 0) : 0)} In-Depth Lectures • Projects Included
                  </p>
                </div>
                <button
                  onClick={() => setOpenModuleIndex(openModuleIndex === null ? 0 : null)}
                  className="text-xs text-cyan-400 hover:underline font-semibold"
                >
                  {openModuleIndex === null ? 'Expand First Module' : 'Collapse Modules'}
                </button>
              </div>

              <div className="space-y-3">
                {(course.syllabus || course.modules || []).map((module, idx) => {
                  const isOpen = openModuleIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenModuleIndex(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-bold font-mono flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-white">{module.title}</h4>
                            <p className="text-[11px] text-slate-400 mt-0.5">
                              {module.lessons.length} Lectures • {module.duration}
                            </p>
                          </div>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-2 border-t border-white/5 space-y-2 bg-slate-950/40">
                          {module.lessons.map((lesson, lIdx) => (
                            <div
                              key={lIdx}
                              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-xs text-slate-300"
                            >
                              <div className="flex items-center gap-2.5">
                                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                                <span>{lesson.title}</span>
                              </div>
                              <span className="text-[11px] font-mono text-slate-400">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Instructor Details */}
            <div className="p-6 rounded-3xl liquid-glass-card border border-white/10 space-y-4">
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs">
                Your Instructor & Lead Architect
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-500/40"
                />
                <div>
                  <h4 className="text-base font-bold text-white">{course.instructor.name}</h4>
                  <p className="text-xs text-cyan-400 font-medium">{course.instructor.role}</p>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {course.instructor.bio || `${course.instructor.name} is a senior engineering practitioner and lead faculty member at Provisent Edutech.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Certificate Preview Card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <Award className="w-5 h-5" />
                <h4 className="text-sm font-bold text-white">Official PROVISENT Certificate of Completion</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Upon passing the course capstone projects, you will receive a cryptographically verified digital diploma featuring your unique ID, QR verification badge, and direct 1-click LinkedIn export.
              </p>
              <button
                onClick={() => navigateTo('/verify-certificate')}
                className="text-xs text-emerald-400 hover:underline font-semibold flex items-center gap-1"
              >
                <span>Preview the Certificate Verification System →</span>
              </button>
            </div>

          </div>

          {/* Sticky Pricing & Checkout Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl bg-slate-900/90 border border-cyan-500/30 p-6 shadow-2xl backdrop-blur-2xl space-y-5">
              
              <div className="flex items-baseline justify-between pb-3 border-b border-white/10">
                <div>
                  <span className="text-2xl font-black text-white font-mono">
                    {course.currency}{course.discountedPrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-slate-500 line-through font-mono ml-2">
                    {course.currency}{course.originalPrice.toLocaleString()}
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  Save {Math.round((1 - course.discountedPrice / course.originalPrice) * 100)}%
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Full Lifetime Access to All Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Hands-on Capstone Cloud Architecture Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Live Weekly Instructor Q&A & Code Clinics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Verifiable Digital Certificate with QR Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Direct Referral Access to 120+ Hiring Partners</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => openCheckout(course)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 font-bold text-xs text-white shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4 text-cyan-200" />
                  <span>Enroll Now for {course.currency}{course.discountedPrice.toLocaleString()}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 flex items-center justify-center gap-2 border border-white/10 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Syllabus with Colleague</span>
                </button>
              </div>

              {/* Guarantee & policy badge */}
              <div className="pt-3 border-t border-white/10 text-center space-y-1">
                <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Cohort Transfer Option Available</span>
                </p>
                <p className="text-[10px] text-slate-500">
                  Instant LMS access provided. Read our{' '}
                  <button
                    onClick={() => navigateTo('/refund-policy')}
                    className="text-cyan-400 hover:underline cursor-pointer font-medium"
                  >
                    Refund & Cancellation Policy
                  </button>
                  .
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

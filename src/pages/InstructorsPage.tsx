import React from 'react';
import { 
  GraduationCap, Star, BookOpen, Users, 
  Award, ArrowRight, CheckCircle2, Code2 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FACULTY_MEMBERS } from '../data/mockData';

export const InstructorsPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <GraduationCap className="w-4 h-4" />
            <span>DISTINGUISHED FACULTY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Meet Provisent Senior Educators
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Our professors and lead architects bring decades of combined enterprise engineering, open-source authoring, and tier-1 product leadership to the classroom.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="space-y-8">
          {FACULTY_MEMBERS.map(member => (
            <div
              key={member.id}
              className="p-6 sm:p-8 rounded-3xl liquid-glass border border-white/10 flex flex-col md:flex-row gap-8 items-start justify-between"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-cyan-500/40 shadow-xl">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-extrabold text-white">{member.name}</h2>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {member.experience}
                      </span>
                    </div>
                    <p className="text-sm text-cyan-400 font-semibold">{member.role} • {member.expertise}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(member.skills || member.expertise.split(',').map(s => s.trim())).map(skill => (
                      <span key={skill} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-white/10 text-[11px] font-mono text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats & Actions */}
              <div className="w-full md:w-64 shrink-0 p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-4 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Courses Taught:</span>
                  <span className="text-white font-bold">{member.coursesCount} Specializations</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Learners Mentored:</span>
                  <span className="text-white font-bold">{member.studentsCount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Student Rating:</span>
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> {member.rating || 4.9}
                  </span>
                </div>

                <button
                  onClick={() => navigateTo('/courses')}
                  className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 cursor-pointer"
                >
                  View Their Courses
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

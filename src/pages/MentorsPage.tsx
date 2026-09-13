import React, { useState } from 'react';
import { 
  Users, Star, Calendar, Clock, CheckCircle2, 
  MessageSquare, Video, ShieldCheck, ArrowRight, Sparkles 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MENTORS } from '../data/mockData';

export const MentorsPage: React.FC = () => {
  const { addToast } = useApp();
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [bookedMentorName, setBookedMentorName] = useState<string | null>(null);

  const topics = ['All', 'Resume Review', 'Mock Interview', 'System Design', 'Portfolio Teardown', 'Career Transition'];

  const handleBookSession = (mentorName: string) => {
    setBookedMentorName(mentorName);
    addToast('Mentorship Requested', `1:1 session scheduled with ${mentorName}. Calendar invite sent.`, 'success');
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Users className="w-4 h-4" />
            <span>1-ON-1 EXECUTIVE ADVICE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Book 1:1 Senior Engineering Mentorship
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Get bespoke guidance on technical interview preparation, system design trade-offs, portfolio audits, and offer negotiations from tech leaders.
          </p>
        </div>

        {/* Mentorship Offerings Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { title: 'Resume Review', desc: 'ATS keyword optimization and impact metrics.', icon: MessageSquare },
            { title: 'Mock Technical Interview', desc: 'Live coding and algorithmic problem solving.', icon: Video },
            { title: 'System Design Audit', desc: 'Microservices, sharding, and latency models.', icon: Sparkles },
            { title: 'Career Roadmap', desc: 'Step-by-step promotion and salary negotiation.', icon: Calendar },
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
                <IconComp className="w-6 h-6 text-cyan-400 mb-2" />
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENTORS.map(mentor => (
            <div
              key={mentor.id}
              className="p-5 rounded-3xl liquid-glass-card border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-4 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                  <img src={mentor.avatar} alt={mentor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {mentor.name}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-bold text-white">{mentor.rating}</span>
                  </div>
                </div>

                <p className="text-xs text-cyan-400 font-medium">{mentor.role}</p>
                <p className="text-[11px] text-slate-400 font-mono">{mentor.company}</p>

                <p className="text-xs text-slate-300 mt-3 line-clamp-3">
                  {mentor.bio}
                </p>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{mentor.sessionsCount || mentor.reviewsCount || 100}+ Sessions</span>
                  <span className="text-emerald-400 font-bold">
                    {typeof mentor.hourlyRate === 'number' ? `₹${mentor.hourlyRate.toLocaleString()}/hr` : mentor.hourlyRate}
                  </span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10">
                <button
                  onClick={() => handleBookSession(mentor.name)}
                  className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 cursor-pointer text-center"
                >
                  Book 1:1 Session
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

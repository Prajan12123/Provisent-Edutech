import React, { useState } from 'react';
import { 
  Sparkles, X, Send, Bot, User, ArrowRight, 
  BrainCircuit, Compass, Award, CheckCircle2, RefreshCw 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  suggestedAction?: {
    label: string;
    path: string;
  };
}

export const AiAssistantModal: React.FC = () => {
  const { isAiAssistantOpen, setIsAiAssistantOpen, navigateTo } = useApp();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-1',
      sender: 'ai',
      text: 'Greetings! I am the PROVISENT AI Learning & Career Advisor. How can I guide your professional journey today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isAiAssistantOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      let suggestedAction: { label: string; path: string } | undefined;

      const lower = query.toLowerCase();

      if (lower.includes('career') || lower.includes('plan')) {
        reply = 'Based on industry hiring trends for 2026, the highest trajectory career paths are Full Stack Software Engineering (React 19 + Node.js) and Generative AI/LLM Engineering. Would you like to inspect the complete 8-month roadmap?';
        suggestedAction = { label: 'Explore Career Roadmaps', path: '/learning-paths' };
      } else if (lower.includes('course') || lower.includes('recommend') || lower.includes('find')) {
        reply = 'Our top recommendation is the "Full Stack Web Development (MERN & Next.js)" taught by Lead Architect Janani K, followed by "Artificial Intelligence & Machine Learning Specialization" with Lakshanaya KM.';
        suggestedAction = { label: 'View Top Courses', path: '/courses' };
      } else if (lower.includes('interview') || lower.includes('prepare')) {
        reply = 'To ace technical interviews, practice system design architecture (caching, database sharding, microservices) and algorithmic patterns. Our 1-on-1 mentors offer simulated mock interviews with direct feedback.';
        suggestedAction = { label: 'Book an Interview Mentor', path: '/mentors' };
      } else if (lower.includes('resume') || lower.includes('cv')) {
        reply = 'Provisent Career Services optimizes your resume with ATS keyword matching, impact metrics (latency reductions, revenue scale), and direct links to verified digital credentials.';
        suggestedAction = { label: 'Explore Placement Ecosystem', path: '/#placement' };
      } else if (lower.includes('bootcamp')) {
        reply = 'We offer intensive cohort-based bootcamps: 90-Day Full Stack Accelerator and 30-Day Generative AI Bootcamp with live weekend hackathons and guaranteed referral support.';
        suggestedAction = { label: 'View Upcoming Cohorts', path: '/bootcamps' };
      } else {
        reply = `I have analyzed your interest in "${query}". At PROVISENT EDUTECH, our curriculum is engineered by practitioners from top tech companies to guarantee hands-on competence.`;
        suggestedAction = { label: 'Browse Program Catalog', path: '/programs' };
      }

      setMessages(prev => [
        ...prev,
        {
          id: 'ai-' + Date.now(),
          sender: 'ai',
          text: reply,
          suggestedAction
        }
      ]);
      setIsTyping(false);
    }, 700);
  };

  const quickPrompts = [
    'Build a Career Plan',
    'Find a Course',
    'Prepare for Interview',
    'Improve My Resume'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="w-full sm:max-w-lg h-[620px] max-h-[90vh] rounded-t-3xl sm:rounded-3xl bg-slate-900 border border-purple-500/30 shadow-2xl flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/80 border-b border-purple-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 text-purple-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-white">PROVISENT AI Advisor</h3>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  v2.4
                </span>
              </div>
              <p className="text-[10px] text-slate-400">Intelligent Career & Curriculum Intelligence</p>
            </div>
          </div>
          <button
            onClick={() => setIsAiAssistantOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950/40">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4 text-purple-400" />
                </div>
              )}
              <div className={`max-w-[82%] rounded-2xl p-3 text-xs leading-relaxed ${
                msg.sender === 'user' 
                  ? 'bg-cyan-600 text-white rounded-tr-none' 
                  : 'bg-slate-800/90 text-slate-200 border border-white/5 rounded-tl-none'
              }`}>
                <p>{msg.text}</p>
                {msg.suggestedAction && (
                  <button
                    onClick={() => {
                      navigateTo(msg.suggestedAction!.path);
                      setIsAiAssistantOpen(false);
                    }}
                    className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 text-purple-300 font-semibold text-[11px] transition-colors cursor-pointer"
                  >
                    <span>{msg.suggestedAction.label}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4 text-cyan-400" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2.5 items-center text-xs text-slate-400">
              <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                <Bot className="w-4 h-4 text-purple-400" />
              </div>
              <div className="bg-slate-800/80 px-3 py-2 rounded-xl flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggested Prompt Buttons */}
        <div className="p-2.5 bg-slate-950/80 border-t border-white/5 flex gap-1.5 overflow-x-auto">
          {quickPrompts.map(prompt => (
            <button
              key={prompt}
              onClick={() => handleSend(prompt)}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 text-[11px] text-slate-300 hover:text-purple-300 font-medium whitespace-nowrap transition-colors cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-slate-900 border-t border-white/10 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about courses, career paths, salaries, or skills..."
            className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-500/50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

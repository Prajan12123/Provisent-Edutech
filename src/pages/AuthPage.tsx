import React, { useState } from 'react';
import { 
  GraduationCap, Lock, Mail, User, ShieldCheck, 
  ArrowRight, CheckCircle2, Github, Linkedin, Sparkles 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface Props {
  initialMode?: 'login' | 'register';
}

export const AuthPage: React.FC<Props> = ({ initialMode = 'login' }) => {
  const { loginAs, navigateTo, addToast } = useApp();
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [selectedRole, setSelectedRole] = useState<'student' | 'instructor' | 'admin'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      loginAs(selectedRole);
      addToast('Authenticated Successfully', `Welcome to Provisent ${selectedRole.toUpperCase()} Portal!`, 'success');
      
      if (selectedRole === 'student') navigateTo('/student/dashboard');
      else if (selectedRole === 'instructor') navigateTo('/instructor/dashboard');
      else navigateTo('/admin/dashboard');
    }, 600);
  };

  const handleSocialAuth = (provider: string) => {
    loginAs(selectedRole);
    addToast('Authenticated via ' + provider, `Welcome to Provisent as ${selectedRole.toUpperCase()}!`, 'success');
    navigateTo('/student/dashboard');
  };

  return (
    <div className="min-h-[85vh] bg-[#07090E] text-slate-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md rounded-3xl bg-slate-900/90 border border-cyan-500/30 p-8 shadow-2xl backdrop-blur-2xl space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 p-[1px] mx-auto shadow-lg shadow-cyan-500/30">
            <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            {mode === 'login' ? 'Welcome Back' : 'Create Your Account'}
          </h2>
          <p className="text-xs text-slate-400">
            {mode === 'login' ? 'Access your classrooms, certifications & career advisor' : 'Join 10,000+ engineers mastering future tech'}
          </p>
        </div>

        {/* Combined Login & Register Switcher in the Same Container */}
        <div className="grid grid-cols-2 p-1 rounded-2xl bg-slate-950 border border-white/10 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`py-2.5 rounded-xl transition-all cursor-pointer font-bold ${
              mode === 'login'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            className={`py-2.5 rounded-xl transition-all cursor-pointer font-bold ${
              mode === 'register'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Enroll
          </button>
        </div>

        {/* Role Selector Tabs */}
        <div>
          <label className="text-[11px] font-mono uppercase text-slate-400 block mb-2 font-semibold">
            Select Workspace Role:
          </label>
          <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-slate-950 border border-white/10 text-xs">
            <button
              type="button"
              onClick={() => setSelectedRole('student')}
              className={`py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                selectedRole === 'student'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole('instructor')}
              className={`py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                selectedRole === 'instructor'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Faculty
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole('admin')}
              className={`py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                selectedRole === 'admin'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Admin
            </button>
          </div>
        </div>

        {/* Social Authentication Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => handleSocialAuth('Google')}
            className="py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
          >
            Google
          </button>
          <button
            type="button"
            onClick={() => handleSocialAuth('GitHub')}
            className="py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-xs font-semibold text-slate-200 transition-colors cursor-pointer gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </button>
          <button
            type="button"
            onClick={() => handleSocialAuth('LinkedIn')}
            className="py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-xs font-semibold text-slate-200 transition-colors cursor-pointer gap-1"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
          </button>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="w-full border-t border-white/10"></div>
          <span className="absolute bg-slate-900 px-3 text-[11px] text-slate-500 font-mono">
            OR WITH EMAIL
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'register' && (
            <div>
              <label className="text-xs text-slate-300 block mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Vikram Malhotra"
                  className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs text-slate-300 block mb-1">Work or Personal Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs text-slate-300">Password</label>
              {mode === 'login' && (
                <span className="text-[11px] text-cyan-400 hover:underline cursor-pointer">
                  Forgot?
                </span>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <span>{mode === 'login' ? `Sign In as ${selectedRole.toUpperCase()}` : 'Create Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="text-center pt-2 text-xs text-slate-400">
          {mode === 'login' ? (
            <p>
              New to Provisent?{' '}
              <button
                type="button"
                onClick={() => setMode('register')}
                className="text-cyan-400 font-semibold hover:underline"
              >
                Create an account
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('login')}
                className="text-cyan-400 font-semibold hover:underline"
              >
                Sign in
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

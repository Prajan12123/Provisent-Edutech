import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Menu, X, GraduationCap, 
  Sparkles, LogOut, LayoutDashboard, Phone 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const { 
    currentPath, 
    navigateTo, 
    theme, 
    toggleTheme, 
    currentUser, 
    loginAs, 
    logout, 
    setIsAiAssistantOpen
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Programs', path: '/programs' },
    { label: 'Certificates', path: '/certificates' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const isLinkActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    if (path === '/programs') {
      return (
        currentPath === '/programs' || 
        currentPath === '/courses' || 
        currentPath.startsWith('/courses/') || 
        currentPath === '/learning-paths' || 
        currentPath === '/bootcamps'
      );
    }
    if (path === '/certificates') {
      return currentPath === '/certificates' || currentPath === '/certifications' || currentPath === '/verify-certificate';
    }
    return currentPath === path;
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/80 dark:bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20' 
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          
          {/* Brand Wordmark (Left) */}
          <div className="flex items-center">
            <button 
              onClick={() => navigateTo('/')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
              id="brand-logo-btn"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-white hover-gradient-text transition-colors">
                    PROVISENT
                  </span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold tracking-wider">
                    PRO
                  </span>
                </div>
                <span className="text-[9px] uppercase font-semibold tracking-widest text-slate-400 hover-gradient-text -mt-0.5">
                  EDUTECH PVT LTD
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation (Center) */}
          <nav 
            className="hidden md:flex items-center justify-center space-x-1 absolute left-1/2 -translate-x-1/2" 
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => {
              const isActive = isLinkActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => navigateTo(item.path)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-all cursor-pointer group ${
                    isActive 
                      ? 'text-cyan-400 bg-cyan-500/10 font-semibold' 
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span className="hover-gradient-text inline-block">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Auth */}
          <div className="flex items-center gap-3">
            {/* AI Assistant Quick Trigger */}
            <button
              onClick={() => setIsAiAssistantOpen(true)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-purple-300 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 rounded-xl transition-all cursor-pointer group"
              title="Open Provisent AI Career Advisor"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse group-hover:text-cyan-300" />
              <span className="hover-gradient-text">AI Advisor</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Enroll CTA Button */}
            {!currentUser && (
              <button
                onClick={() => navigateTo('/register')}
                id="nav-enroll-button"
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md ${
                  currentPath === '/register' || currentPath === '/enroll'
                    ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/30'
                    : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                Enroll
              </button>
            )}

            {/* Role / User Profile dropdown when signed in */}
            {currentUser && (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  onBlur={() => setTimeout(() => setUserDropdownOpen(false), 200)}
                  className="flex items-center gap-2 p-1.5 pr-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer"
                >
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-7 h-7 rounded-lg object-cover border border-cyan-500/30"
                  />
                  <span className="hidden md:inline text-xs font-semibold text-slate-200">
                    {currentUser.name.split(' ')[0]}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {currentUser.role}
                  </span>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-2 border-b border-white/10 mb-1">
                      <p className="text-xs font-bold text-white">{currentUser.name}</p>
                      <p className="text-[11px] text-slate-400 truncate">{currentUser.email}</p>
                    </div>

                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          if (currentUser.role === 'student') navigateTo('/student/dashboard');
                          else if (currentUser.role === 'instructor') navigateTo('/instructor/dashboard');
                          else navigateTo('/admin/dashboard');
                          setUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/5 rounded-lg flex items-center gap-2"
                      >
                        <LayoutDashboard className="w-4 h-4 text-cyan-400" />
                        <span>Go to {currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)} Dashboard</span>
                      </button>

                      {/* Quick Switch Role for Demo Testing */}
                      <div className="pt-2 border-t border-white/10">
                        <p className="px-3 text-[10px] uppercase font-mono text-slate-400 tracking-wider">Switch View Role:</p>
                        <div className="grid grid-cols-3 gap-1 px-2 pt-1">
                          <button
                            onClick={() => { loginAs('student'); setUserDropdownOpen(false); }}
                            className={`px-2 py-1 text-[11px] rounded font-medium text-center ${currentUser.role === 'student' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:bg-white/5'}`}
                          >
                            Student
                          </button>
                          <button
                            onClick={() => { loginAs('instructor'); setUserDropdownOpen(false); }}
                            className={`px-2 py-1 text-[11px] rounded font-medium text-center ${currentUser.role === 'instructor' ? 'bg-purple-500/20 text-purple-300' : 'text-slate-400 hover:bg-white/5'}`}
                          >
                            Faculty
                          </button>
                          <button
                            onClick={() => { loginAs('admin'); setUserDropdownOpen(false); }}
                            className={`px-2 py-1 text-[11px] rounded font-medium text-center ${currentUser.role === 'admin' ? 'bg-emerald-500/20 text-emerald-300' : 'text-slate-400 hover:bg-white/5'}`}
                          >
                            Admin
                          </button>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/10">
                        <button
                          onClick={() => { logout(); setUserDropdownOpen(false); }}
                          className="w-full text-left px-3 py-2 text-xs font-medium text-rose-400 hover:bg-rose-500/10 rounded-lg flex items-center gap-2"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1 pb-2 border-b border-white/10">
            {navLinks.map((item) => {
              const isActive = isLinkActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => {
                    navigateTo(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-center px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span className="hover-gradient-text inline-block">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Enroll Mobile Control */}
          {!currentUser && (
            <div className="pt-1 pb-1">
              <button
                onClick={() => {
                  navigateTo('/register');
                  setMobileMenuOpen(false);
                }}
                id="mobile-enroll-button"
                className={`w-full py-2.5 px-3 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer shadow-md ${
                  currentPath === '/register' || currentPath === '/enroll'
                    ? 'bg-cyan-500 text-slate-950 border-cyan-500 shadow-cyan-500/20'
                    : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white border-transparent shadow-cyan-500/20'
                }`}
              >
                Enroll
              </button>
            </div>
          )}

          <div className="space-y-2 pt-2">
            <button
              onClick={() => { setIsAiAssistantOpen(true); setMobileMenuOpen(false); }}
              className="w-full text-left px-3.5 py-2.5 text-xs font-semibold text-purple-300 bg-purple-950/30 border border-purple-500/20 rounded-xl flex items-center justify-between"
            >
              <span>Launch AI Career Advisor</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-300 font-mono">+91 9361444644</span>
            </div>
            <button
              onClick={() => { navigateTo('/contact'); setMobileMenuOpen(false); }}
              className="text-xs text-cyan-400 hover:underline font-semibold"
            >
              hr@provisent.com
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

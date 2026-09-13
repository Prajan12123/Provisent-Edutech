import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, Filter, Star, Clock, Users, ArrowRight, 
  Award, CheckCircle2, ChevronRight, Sparkles, BookOpen, 
  Layers, Terminal, Zap, ShieldCheck, Briefcase, GraduationCap, 
  Calendar, HelpCircle, FileText, Check, X, Phone, Download, 
  ExternalLink, Bookmark, Compass, Send, Code2, Cpu, BarChart3, 
  Cloud, Palette, ShieldAlert, TrendingUp, Coins, Activity,
  Target, DollarSign, Building2, Workflow, CheckCircle, RotateCw
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { 
  COURSES, BOOTCAMPS, LEARNING_PATHS, PROGRAM_CATEGORIES, 
  FACULTY_MEMBERS, FAQS 
} from '../data/mockData';
import { Course, Bootcamp, LearningPath } from '../types';
import { 
  DOMAIN_CAREER_LADDERS, getProgramBreakdown, 
  DomainCareerLadder, ProgramBreakdownData 
} from '../data/programCareerData';
import { CourseCardsGridSkeleton, BootcampCardSkeleton } from '../components/Skeletons';

type ProgramFormat = 'all' | 'courses' | 'bootcamps' | 'paths';

export const CoursesPage: React.FC = () => {
  const { navigateTo, openCheckout, addToast } = useApp();
  
  // Data loading state for perceived performance during data fetching
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initial load simulation (400ms) to ensure smooth perceived performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const triggerRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      addToast('Catalog Synchronized', 'Real-time course listings and syllabus data updated.', 'success');
    }, 500);
  };
  
  // State filters
  const [selectedFormat, setSelectedFormat] = useState<ProgramFormat>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'price-low' | 'price-high'>('popular');

  // Interactive Domain Career Visualizer state
  const [selectedDomainCareer, setSelectedDomainCareer] = useState<string>('web-development');
  const [selectedCareerLevel, setSelectedCareerLevel] = useState<number>(2);
  const [isCareerLadderExpanded, setIsCareerLadderExpanded] = useState<boolean>(true);

  // Per-card tab states: 'overview' | 'syllabus' | 'career'
  const [courseCardTabs, setCourseCardTabs] = useState<Record<string, 'overview' | 'syllabus' | 'career'>>({});

  // Modal states
  const [activeSyllabusCourse, setActiveSyllabusCourse] = useState<Course | null>(null);
  const [modalTab, setModalTab] = useState<'syllabus' | 'capstone' | 'career' | 'faculty'>('syllabus');
  const [activeSyllabusBootcamp, setActiveSyllabusBootcamp] = useState<Bootcamp | null>(null);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochurePhone, setBrochurePhone] = useState('');
  const [brochureSubmitted, setBrochureSubmitted] = useState(false);

  // Card tab helper
  const getCardTab = (courseId: string): 'overview' | 'syllabus' | 'career' => {
    return courseCardTabs[courseId] || 'overview';
  };
  const setCardTab = (courseId: string, tab: 'overview' | 'syllabus' | 'career') => {
    setCourseCardTabs(prev => ({ ...prev, [courseId]: tab }));
  };

  // Active domain career data
  const currentDomainLadder = useMemo(() => {
    return DOMAIN_CAREER_LADDERS.find(d => d.domainId === selectedDomainCareer) || DOMAIN_CAREER_LADDERS[0];
  }, [selectedDomainCareer]);

  const currentLadderLevel = useMemo(() => {
    return currentDomainLadder.levels.find(lvl => lvl.levelNumber === selectedCareerLevel) || currentDomainLadder.levels[1];
  }, [currentDomainLadder, selectedCareerLevel]);

  // Categories list
  const categories = ['All', ...Array.from(new Set(PROGRAM_CATEGORIES.map(c => c.name)))];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Map category to icon
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Programming & Web': return <Code2 className="w-3.5 h-3.5" />;
      case 'Artificial Intelligence': return <Cpu className="w-3.5 h-3.5" />;
      case 'Data Science & Analytics': return <BarChart3 className="w-3.5 h-3.5" />;
      case 'Design & Creative': return <Palette className="w-3.5 h-3.5" />;
      case 'Cloud & DevOps': return <Cloud className="w-3.5 h-3.5" />;
      case 'Business Strategy': return <Briefcase className="w-3.5 h-3.5" />;
      case 'Cybersecurity': return <ShieldAlert className="w-3.5 h-3.5" />;
      case 'Digital Marketing': return <TrendingUp className="w-3.5 h-3.5" />;
      case 'FinTech & Analytics': return <Coins className="w-3.5 h-3.5" />;
      case 'Health Informatics': return <Activity className="w-3.5 h-3.5" />;
      default: return <BookOpen className="w-3.5 h-3.5" />;
    }
  };

  // Filtered Courses
  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (course.skills && course.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())));
      const matchesCategory = selectedCategory === 'All' || course.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesDifficulty = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.discountedPrice - b.discountedPrice;
      if (sortBy === 'price-high') return b.discountedPrice - a.discountedPrice;
      const enrolledB = b.enrolledCount ?? b.studentsEnrolled ?? 0;
      const enrolledA = a.enrolledCount ?? a.studentsEnrolled ?? 0;
      return enrolledB - enrolledA;
    });
  }, [searchTerm, selectedCategory, selectedDifficulty, sortBy]);

  // Filtered Bootcamps
  const filteredBootcamps = useMemo(() => {
    return BOOTCAMPS.filter(bootcamp => {
      const matchesSearch = bootcamp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            bootcamp.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
                            bootcamp.curriculumHighlights.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
      // Bootcamps match category if category is All or matches relevant tag/title
      const matchesCategory = selectedCategory === 'All' || 
        bootcamp.title.toLowerCase().includes(selectedCategory.toLowerCase().split(' ')[0]) ||
        bootcamp.tags.some(t => t.toLowerCase().includes(selectedCategory.toLowerCase().split(' ')[0]));
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [searchTerm, selectedCategory, sortBy]);

  // Filtered Learning Paths
  const filteredPaths = useMemo(() => {
    return LEARNING_PATHS.filter(path => {
      const matchesSearch = path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            path.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            path.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' ||
        path.title.toLowerCase().includes(selectedCategory.toLowerCase().split(' ')[0]) ||
        path.role.toLowerCase().includes(selectedCategory.toLowerCase().split(' ')[0]);
      const matchesDifficulty = selectedDifficulty === 'All' || path.startingLevel.includes(selectedDifficulty);
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  // Total matching count
  const totalProgramsCount = (selectedFormat === 'all' || selectedFormat === 'courses' ? filteredCourses.length : 0) +
                             (selectedFormat === 'all' || selectedFormat === 'bootcamps' ? filteredBootcamps.length : 0) +
                             (selectedFormat === 'all' || selectedFormat === 'paths' ? filteredPaths.length : 0);

  // Helper to enroll in bootcamp directly via checkout
  const handleEnrollBootcamp = (bootcamp: Bootcamp) => {
    const pseudoCourse: Course = {
      id: bootcamp.id,
      slug: bootcamp.id,
      title: bootcamp.title,
      category: 'Intensive Bootcamp',
      instructor: {
        name: 'Provisent Faculty Board',
        role: 'Senior Engineering Cohort Mentors',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
      },
      rating: bootcamp.rating,
      reviewCount: 380,
      studentsEnrolled: 820,
      duration: bootcamp.duration,
      difficulty: 'Intermediate',
      originalPrice: bootcamp.originalPrice,
      discountedPrice: bootcamp.price,
      currency: '₹',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
      description: bootcamp.features.join('. '),
      learningOutcomes: bootcamp.curriculumHighlights,
      prerequisites: ['Basic coding familiarity or logical problem-solving aptitude.'],
      modules: [],
      certificateOffered: true
    };
    openCheckout(pseudoCourse);
  };

  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brochureEmail) return;
    setBrochureSubmitted(true);
    addToast('Prospectus Sent!', `Official Academic Syllabus sent to ${brochureEmail}`, 'success');
    setTimeout(() => {
      setIsBrochureModalOpen(false);
      setBrochureSubmitted(false);
      setBrochureEmail('');
      setBrochurePhone('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12 selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Header Hero */}
        <div className="space-y-6 pt-4">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold tracking-wider">OFFICIAL ACADEMIC CATALOG • 2026-2027 ENROLLMENT</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                All Academic Programs & <br />
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  Industry Career Tracks
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Explore our complete spectrum of engineering and technology education. From modular flagship masterclasses to intensive cohort-based accelerators and role-oriented career roadmaps.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 border border-white/10 flex items-center gap-2 cursor-pointer transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Full Prospectus</span>
              </button>
              <button
                onClick={() => navigateTo('/verify-certificate')}
                className="px-5 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-semibold text-cyan-300 border border-cyan-500/30 flex items-center gap-2 cursor-pointer transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verify Credential Ledger</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
              <p className="text-2xl font-extrabold text-white font-mono">{COURSES.length} Courses</p>
              <p className="text-xs text-slate-400 mt-1">10 Specialized Technical Domains</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
              <p className="text-2xl font-extrabold text-cyan-400 font-mono">{BOOTCAMPS.length} Cohort Bootcamps</p>
              <p className="text-xs text-slate-400 mt-1">Daily Live Labs & Job Assistance</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
              <p className="text-2xl font-extrabold text-emerald-400 font-mono">{LEARNING_PATHS.length} Career Paths</p>
              <p className="text-xs text-slate-400 mt-1">Multi-Phase Role Progression</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
              <p className="text-2xl font-extrabold text-amber-400 font-mono">100% Industry</p>
              <p className="text-xs text-slate-400 mt-1">Live Architectural Capstones</p>
            </div>
          </div>
        </div>

        {/* Program Format Navigation Tabs */}
        <div className="border-b border-white/10 pb-6 space-y-4">
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-950/80 rounded-2xl border border-white/10 w-fit">
            <button
              onClick={() => setSelectedFormat('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedFormat === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>All Formats ({COURSES.length + BOOTCAMPS.length + LEARNING_PATHS.length})</span>
            </button>

            <button
              onClick={() => setSelectedFormat('courses')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedFormat === 'courses'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Flagship Masterclasses ({COURSES.length})</span>
            </button>

            <button
              onClick={() => setSelectedFormat('bootcamps')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedFormat === 'bootcamps'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Intensive Bootcamps ({BOOTCAMPS.length})</span>
            </button>

            <button
              onClick={() => setSelectedFormat('paths')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedFormat === 'paths'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Career Learning Paths ({LEARNING_PATHS.length})</span>
            </button>
          </div>

          {/* Quick Domain Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            <span className="text-slate-500 font-mono text-[11px] shrink-0 uppercase tracking-wider">Domains:</span>
            {categories.map(cat => {
              const count = cat === 'All' 
                ? (COURSES.length + BOOTCAMPS.length + LEARNING_PATHS.length)
                : COURSES.filter(c => c.category.toLowerCase() === cat.toLowerCase()).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium shrink-0 flex items-center gap-1.5 transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
                  }`}
                >
                  {cat !== 'All' && getCategoryIcon(cat)}
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    selectedCategory === cat ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-white/10 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search, Difficulty, and Sorting Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search programs by technology (Python, Kubernetes, React, LLM, Solidity, FHIR)..."
                className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-white text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Level Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedDifficulty}
                onChange={e => setSelectedDifficulty(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50 cursor-pointer"
              >
                {difficulties.map(d => (
                  <option key={d} value={d}>Level: {d}</option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50 cursor-pointer"
              >
                <option value="popular">Sort: Most Popular</option>
                <option value="rating">Sort: Highest Rated</option>
                <option value="price-low">Sort: Tuition (Low to High)</option>
                <option value="price-high">Sort: Tuition (High to Low)</option>
              </select>
            </div>

          </div>

          {/* Quick Technology Search Tags */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] font-mono text-slate-500 mr-1">Popular Keywords:</span>
            {['React 19', 'PyTorch', 'Kubernetes', 'Go (Golang)', 'Rust', 'LangGraph', 'Solidity', 'FHIR', 'Docker', 'Figma', 'DevSecOps'].map(tag => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className={`text-[10px] font-mono px-2 py-0.5 rounded-lg border transition-all cursor-pointer ${
                  searchTerm === tag 
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' 
                    : 'bg-slate-950/80 text-slate-400 hover:text-white border-white/5 hover:border-white/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pt-1 border-t border-white/5 font-mono">
            <div className="flex items-center gap-3">
              <span>Showing {totalProgramsCount} Academic Offerings</span>
              {isLoading && (
                <span className="flex items-center gap-1.5 text-[11px] text-cyan-400 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                  Fetching latest curriculum...
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={triggerRefresh}
                disabled={isLoading}
                title="Simulate data fetching to test skeleton states"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 border border-white/10 text-[11px] transition-all cursor-pointer disabled:opacity-50"
              >
                <RotateCw className={`w-3 h-3 ${isLoading ? 'animate-spin text-cyan-400' : ''}`} />
                <span>Simulate Fetch</span>
              </button>
              {(searchTerm || selectedCategory !== 'All' || selectedDifficulty !== 'All') && (
                <button
                  onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedDifficulty('All'); }}
                  className="text-cyan-400 hover:underline cursor-pointer text-[11px]"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* INTERACTIVE DOMAIN CAREER LADDER & COMPENSATION VISUALIZER */}
        <div className="rounded-3xl bg-slate-900/90 border border-cyan-500/20 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono mb-2">
                <Target className="w-3.5 h-3.5 text-cyan-400" />
                <span>FIELD BREAKDOWNS & CAREER PATH VISUALIZER</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Domain Career Progression & Salary Trajectories
              </h2>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                Select any of our 10 engineering domains to explore market demand, compensation curves across experience tiers, and matching curriculum pathways.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1.5 rounded-xl border border-cyan-500/30 font-semibold">
                {currentDomainLadder.growthStat}
              </span>
              <button
                onClick={() => setIsCareerLadderExpanded(!isCareerLadderExpanded)}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium cursor-pointer"
              >
                {isCareerLadderExpanded ? 'Collapse Ladder' : 'Expand Ladder'}
              </button>
            </div>
          </div>

          {isCareerLadderExpanded && (
            <div className="space-y-6">
              {/* Domain Switcher Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {DOMAIN_CAREER_LADDERS.map(domain => {
                  const isActive = domain.domainId === selectedDomainCareer;
                  return (
                    <button
                      key={domain.domainId}
                      onClick={() => {
                        setSelectedDomainCareer(domain.domainId);
                        setSelectedCareerLevel(2);
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                          : 'bg-slate-950/80 text-slate-300 hover:text-white border border-white/5 hover:border-white/20'
                      }`}
                    >
                      {getCategoryIcon(domain.categoryKeyword)}
                      <span>{domain.domainName}</span>
                    </button>
                  );
                })}
              </div>

              {/* Market Context Banner */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Market Outlook & Enterprise Demand</span>
                  <p className="text-slate-200 leading-relaxed font-medium">{currentDomainLadder.marketOutlook}</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory(currentDomainLadder.categoryKeyword);
                    const el = document.getElementById('academic-offerings-grid');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold text-xs shrink-0 cursor-pointer flex items-center gap-1.5"
                >
                  <span>Filter Catalog to {currentDomainLadder.categoryKeyword}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 4-Step Interactive Career Ladder */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="uppercase tracking-wider text-[11px] text-cyan-400 font-bold">Select Career Tier to View Details:</span>
                  <span>4-Stage Growth Hierarchy</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {currentDomainLadder.levels.map(lvl => {
                    const isSelected = lvl.levelNumber === selectedCareerLevel;
                    return (
                      <button
                        key={lvl.levelNumber}
                        onClick={() => setSelectedCareerLevel(lvl.levelNumber)}
                        className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between space-y-2 ${
                          isSelected
                            ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                            : 'bg-slate-950/60 border-white/10 hover:border-white/20 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                            isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-white/10 text-slate-300'
                          }`}>
                            L{lvl.levelNumber}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">{lvl.experienceRange}</span>
                        </div>
                        <div>
                          <p className={`text-xs font-bold leading-snug ${isSelected ? 'text-cyan-300' : 'text-slate-200'}`}>
                            {lvl.levelTitle}
                          </p>
                          <p className="text-[11px] font-mono text-emerald-400 mt-1 font-semibold">
                            {lvl.salaryRangeINR}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Tier Deep-Dive Panel */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column: Roles, Compensation, Competencies */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">
                        Level 0{currentLadderLevel.levelNumber} Progression Profile
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">{currentLadderLevel.levelTitle}</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-emerald-400 font-bold block">{currentLadderLevel.salaryRangeINR}</span>
                      <span className="text-[10px] font-mono text-slate-400">{currentLadderLevel.salaryRangeUSD}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Target Job Titles in Industry:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentLadderLevel.targetJobTitles.map((title, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs font-medium">
                          {title}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Key Technical Competencies & Milestones:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {currentLadderLevel.competencies.map((comp, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-slate-900/60 border border-white/5 text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Recommended Programs & Employers */}
                <div className="lg:col-span-5 space-y-4 lg:border-l lg:border-white/10 lg:pl-6">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                      Matching Provisent Academic Pathways:
                    </span>
                    <div className="space-y-2">
                      {currentLadderLevel.recommendedPrograms.map((prog, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-cyan-500/20 flex items-center justify-between gap-2">
                          <div className="space-y-0.5">
                            <span className="text-xs font-bold text-white block">{prog}</span>
                            <span className="text-[10px] font-mono text-slate-400">Aligned with Level {currentLadderLevel.levelNumber} Requirements</span>
                          </div>
                          <button
                            onClick={() => {
                              setSearchTerm(prog.split(' ')[0]);
                              const el = document.getElementById('academic-offerings-grid');
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-2.5 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-[10px] font-bold shrink-0 cursor-pointer"
                          >
                            Find Program
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Top Hiring Partners in this Domain:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentDomainLadder.topEmployers.map((emp, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono">
                          {emp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Aligned Industry Credential:</span>
                    <p className="text-xs text-slate-300 font-mono flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{currentDomainLadder.certificationsAligned[0]}</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* SECTION 1: Intensive Bootcamps (if format is 'all' or 'bootcamps') */}
        {(selectedFormat === 'all' || selectedFormat === 'bootcamps') && filteredBootcamps.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Intensive Cohort Bootcamps
                  </h2>
                </div>
                <p className="text-xs text-slate-400">
                  Live, immersive training with daily coding labs, portfolio capstones, and dedicated placement support.
                </p>
              </div>
              <button
                onClick={() => navigateTo('/bootcamps')}
                className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>View Bootcamp Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BootcampCardSkeleton />
                <BootcampCardSkeleton />
                <BootcampCardSkeleton />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBootcamps.map(bootcamp => (
                  <div
                    key={bootcamp.id}
                    className="p-6 rounded-3xl bg-slate-900/70 border border-amber-500/20 flex flex-col justify-between space-y-6 hover:border-amber-500/40 transition-all group"
                  >
                    <div className="space-y-4">
                      {/* Top Batch & Seats Banner */}
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {bootcamp.batchDate.replace('Next Cohort: ', '')}
                        </span>
                        <span className="text-rose-400 font-bold bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
                          {bootcamp.seatsLeft} Seats Left
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                          {bootcamp.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-400 mt-1 flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{bootcamp.duration}</span>
                          <span>•</span>
                          <span>{bootcamp.schedule}</span>
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {bootcamp.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Features List */}
                      <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                        {bootcamp.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span className="text-[11px] leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and Action */}
                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-extrabold text-white font-mono">
                              ₹{bootcamp.price.toLocaleString()}
                            </span>
                            <span className="text-xs text-slate-500 line-through font-mono">
                              ₹{bootcamp.originalPrice.toLocaleString()}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono">Includes Live Sandbox Labs</span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span>{bootcamp.rating}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setActiveSyllabusBootcamp(bootcamp)}
                          className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold cursor-pointer text-center"
                        >
                          Curriculum
                        </button>
                        <button
                          onClick={() => handleEnrollBootcamp(bootcamp)}
                          className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold cursor-pointer text-center shadow-lg shadow-amber-500/20"
                        >
                          Reserve Seat
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SECTION 2: Flagship Masterclasses (if format is 'all' or 'courses') */}
        {(selectedFormat === 'all' || selectedFormat === 'courses') && (
          <div id="academic-offerings-grid" className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Flagship Professional Masterclasses
                  </h2>
                </div>
                <p className="text-xs text-slate-400">
                  Comprehensive, modular curriculums with lifetime LMS access, weekly live mentor clinics, and accredited certificates.
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-400">
                {filteredCourses.length} Courses Available
              </span>
            </div>

            {isLoading ? (
              <CourseCardsGridSkeleton count={6} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map(course => {
                  const breakdown = getProgramBreakdown(course.id, course.category, course.title, course.difficulty);
                  const activeTab = getCardTab(course.id);

                  return (
                    <div
                      key={course.id}
                      className="rounded-3xl bg-slate-900/70 border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all shadow-xl"
                    >
                    {/* Image Header */}
                    <div>
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

                        <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-cyan-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                          {course.category}
                        </span>

                        <span className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                          {course.difficulty}
                        </span>
                      </div>

                      {/* In-Card Mini View Switcher */}
                      <div className="p-3 bg-slate-950/90 border-b border-white/10 flex items-center justify-between gap-1 text-[11px] font-mono">
                        <button
                          onClick={() => setCardTab(course.id, 'overview')}
                          className={`flex-1 py-1 px-2 rounded-lg text-center transition-all cursor-pointer ${
                            activeTab === 'overview'
                              ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                              : 'text-slate-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          Overview
                        </button>
                        <button
                          onClick={() => setCardTab(course.id, 'syllabus')}
                          className={`flex-1 py-1 px-2 rounded-lg text-center transition-all cursor-pointer ${
                            activeTab === 'syllabus'
                              ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                              : 'text-slate-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          Syllabus Labs
                        </button>
                        <button
                          onClick={() => setCardTab(course.id, 'career')}
                          className={`flex-1 py-1 px-2 rounded-lg text-center transition-all cursor-pointer ${
                            activeTab === 'career'
                              ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30'
                              : 'text-slate-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          Career ROI
                        </button>
                      </div>

                      {/* Card Body by Tab */}
                      <div className="p-5 space-y-3.5">
                        <h3
                          onClick={() => navigateTo(`/courses/${course.id}`)}
                          className="text-base font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer line-clamp-2"
                        >
                          {course.title}
                        </h3>

                        {activeTab === 'overview' && (
                          <div className="space-y-3">
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              {course.description}
                            </p>

                            {/* Instructor & Rating */}
                            <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-white/5">
                              <div className="flex items-center gap-1.5">
                                <img src={course.instructor.avatar} alt={course.instructor.name} className="w-5 h-5 rounded-full object-cover" />
                                <span className="text-slate-300 font-medium text-[11px]">{course.instructor.name}</span>
                              </div>
                              <div className="flex items-center gap-1 text-amber-400">
                                <Star className="w-3.5 h-3.5 fill-amber-400" />
                                <span className="font-bold text-white">{course.rating}</span>
                                <span className="text-slate-500 text-[10px]">({course.reviewCount})</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                              <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-cyan-400" /> {course.duration.split('•')[0]}</span>
                              <span>•</span>
                              <span>{course.lessonsCount || 24} Modules</span>
                              <span>•</span>
                              <span className="text-emerald-400 font-medium">{breakdown.handsOnLabRatio}</span>
                            </div>

                            {/* Skills Tags */}
                            {course.skills && (
                              <div className="flex flex-wrap gap-1 pt-0.5">
                                {course.skills.slice(0, 3).map(skill => (
                                  <span key={skill} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-300 font-mono">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {activeTab === 'syllabus' && (
                          <div className="space-y-2.5 text-xs">
                            <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                              <span className="uppercase font-bold">Core Phase Milestones</span>
                              <span className="text-slate-400">4 Phases</span>
                            </div>
                            <div className="space-y-1.5">
                              {breakdown.syllabusPhases.slice(0, 3).map((phase, pIdx) => (
                                <div key={pIdx} className="p-2 rounded-xl bg-slate-950/80 border border-white/5 flex items-start gap-2">
                                  <span className="text-[10px] font-mono font-bold text-cyan-400 shrink-0 mt-0.5">P0{pIdx + 1}</span>
                                  <span className="text-[11px] text-slate-300 line-clamp-1 leading-snug">{phase.title}</span>
                                </div>
                              ))}
                            </div>
                            <div className="p-2 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-[11px] text-slate-300 space-y-1">
                              <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">Enterprise Capstone Deliverable:</span>
                              <p className="text-white font-medium line-clamp-2">{breakdown.capstoneProject.title}</p>
                            </div>
                          </div>
                        )}

                        {activeTab === 'career' && (
                          <div className="space-y-2.5 text-xs">
                            <div>
                              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Target Engineering Roles:</span>
                              <div className="flex flex-wrap gap-1">
                                {breakdown.targetRoles.slice(0, 2).map((role, rIdx) => (
                                  <span key={rIdx} className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[10px] font-medium">
                                    {role}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/5 flex items-center justify-between">
                              <div>
                                <span className="text-[10px] font-mono text-slate-400 block">Salary Benchmark</span>
                                <span className="text-xs font-mono font-bold text-white">{breakdown.salaryBenchmark.split('(')[0]}</span>
                              </div>
                              <div className="text-right">
                                <span className="text-[10px] font-mono text-slate-400 block">Timeline</span>
                                <span className="text-[11px] font-mono text-emerald-400 font-semibold">{breakdown.careerTrajectory.typicalPromoTimeline}</span>
                              </div>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Hiring Employers:</span>
                              <div className="flex flex-wrap gap-1">
                                {breakdown.topHiringPartners.slice(0, 3).map((partner, pIdx) => (
                                  <span key={pIdx} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-300">
                                    {partner}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Price & Actions */}
                    <div className="p-5 pt-0">
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-lg font-extrabold text-white font-mono">
                              {course.currency}{course.discountedPrice.toLocaleString()}
                            </span>
                            <span className="text-xs text-slate-500 line-through font-mono">
                              {course.currency}{course.originalPrice.toLocaleString()}
                            </span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-semibold font-mono">Verified Credential</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setActiveSyllabusCourse(course);
                              setModalTab('syllabus');
                            }}
                            className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 cursor-pointer flex items-center gap-1.5"
                          >
                            <FileText className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Syllabus & Career</span>
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
                );
              })}
            </div>
            )}
          </div>
        )}

        {/* SECTION 3: Career Learning Paths (if format is 'all' or 'paths') */}
        {(selectedFormat === 'all' || selectedFormat === 'paths') && filteredPaths.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Executive Career Learning Paths
                  </h2>
                </div>
                <p className="text-xs text-slate-400">
                  Comprehensive multi-month career roadmaps designed to take you from foundational understanding to senior engineering roles.
                </p>
              </div>
              <button
                onClick={() => navigateTo('/learning-paths')}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>View Full Roadmap Explorer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPaths.map(path => (
                <div
                  key={path.id}
                  className="p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-emerald-500/20 space-y-6 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold">
                        {path.duration} • {path.startingLevel}
                      </span>
                      <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
                        Target Compensation: {path.salaryRange}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">{path.title}</h3>
                      <p className="text-xs text-slate-400 mt-1">Target Roles: {path.role}</p>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">{path.description}</p>
                    </div>

                    {/* Milestones Roadmap Preview */}
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <p className="text-[11px] font-mono uppercase text-slate-400 font-semibold">Phase Milestones:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {path.milestones.map((m, idx) => (
                          <div key={idx} className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5 text-xs">
                            <span className="text-[10px] font-mono text-emerald-400 font-bold block">{m.phase} ({m.duration})</span>
                            <span className="text-white font-semibold text-[11px]">{m.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Covered */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {path.skills.map(skill => (
                        <span key={skill} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-300 font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-[11px] font-mono text-slate-400">
                      Includes {path.courses.length} Integrated Curriculums
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigateTo('/learning-paths')}
                        className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold cursor-pointer"
                      >
                        Explore Milestones
                      </button>
                      <button
                        onClick={() => navigateTo('/contact')}
                        className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold cursor-pointer shadow-md shadow-emerald-500/20"
                      >
                        Admissions Advisory
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {totalProgramsCount === 0 && (
          <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-white/5 space-y-4">
            <p className="text-lg text-slate-200 font-bold">No academic offerings matched your criteria.</p>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Try adjusting your technology search terms, selecting "All Formats", or resetting the domain filter.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedDifficulty('All'); setSelectedFormat('all'); }}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs cursor-pointer shadow-lg shadow-cyan-500/20"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* SECTION 4: Program Format Comparison Matrix */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-white/10 space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">DECISION MATRIX</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Which Learning Model Fits Your Ambition?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Every learner balances time, current experience, and career trajectory differently. Compare our primary delivery architectures:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead>
                <tr className="border-b border-white/10 font-mono text-slate-400 uppercase text-[11px]">
                  <th className="py-3 px-4">Evaluation Dimension</th>
                  <th className="py-3 px-4 text-cyan-400">Flagship Courses</th>
                  <th className="py-3 px-4 text-amber-400">Intensive Bootcamps</th>
                  <th className="py-3 px-4 text-emerald-400">Executive Career Paths</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-[11px]">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Ideal For</td>
                  <td className="py-3.5 px-4">Working devs mastering a distinct modern skill</td>
                  <td className="py-3.5 px-4">Career switchers & grads wanting fast entry</td>
                  <td className="py-3.5 px-4">Engineers seeking Senior/Lead promotions</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Weekly Time Commitment</td>
                  <td className="py-3.5 px-4">4 - 6 Hours (Self-Paced)</td>
                  <td className="py-3.5 px-4">15 - 20 Hours (Live Cohort Sprints)</td>
                  <td className="py-3.5 px-4">8 - 10 Hours (Milestone Sprints)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Live Mentorship</td>
                  <td className="py-3.5 px-4">Weekly Live Group Q&A Clinics</td>
                  <td className="py-3.5 px-4">Daily Live Labs + Unlimited 1:1 Code Reviews</td>
                  <td className="py-3.5 px-4">Bi-Weekly 1:1 Senior Engineering Mentorship</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Cloud Infrastructure</td>
                  <td className="py-3.5 px-4">Local + Cloud Sandbox templates</td>
                  <td className="py-3.5 px-4">Full AWS/GCP Sandboxes with compute credits</td>
                  <td className="py-3.5 px-4">Enterprise Multi-Cloud Infrastructure Labs</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Placement Assistance</td>
                  <td className="py-3.5 px-4">Alumni Network & Community Job Board</td>
                  <td className="py-3.5 px-4">Direct Hiring Partner Referrals & Mock Loops</td>
                  <td className="py-3.5 px-4">Executive Resume Review & Salary Negotiation</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Accredited Credential</td>
                  <td className="py-3.5 px-4 text-emerald-400">ISO 9001:2015 Verifiable Digital Certificate</td>
                  <td className="py-3.5 px-4 text-emerald-400">Bootcamp Specialization Diploma + Capstone</td>
                  <td className="py-3.5 px-4 text-emerald-400">Executive Fellow Credential & Portfolio Audit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 5: The Provisent 4-Pillar Pedagogy Framework */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">ACADEMIC RIGOR</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Provisent 4-Pillar Pedagogy Framework
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              We reject passive tutorial watching. Every program is engineered around our strict four-phase cognitive engineering cycle:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-white">Contextual Theory (10%)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                First-principles architecture breakdowns focusing on why distributed systems behave under stress, avoiding boilerplate memorization.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-white">Cloud Sandbox Labs (40%)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Zero configuration friction. Code directly inside pre-provisioned cloud containers with pre-seeded datasets, compilers, and debuggers.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-white">Production Capstones (40%)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Construct genuine microservices, LLM inference pipelines, and fault-tolerant databases deployed live on public domains.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center font-mono font-bold text-sm">
                04
              </div>
              <h3 className="text-base font-bold text-white">Live Code Defence (10%)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Defend your PRs and architectural design documents live before senior industry faculty before your verifiable credential issues.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 6: Enterprise Tech Stack Cloud */}
        <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Production Tooling & Tech Stacks Taught</h3>
              <p className="text-xs text-slate-400">All programs teach current, production-grade enterprise tooling without outdated legacy stacks.</p>
            </div>
            <span className="text-xs font-mono text-cyan-400">Updated for Q3/Q4 2026</span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {[
              'TypeScript', 'React 19', 'Next.js 15', 'Node.js', 'Go (Golang)', 'Rust', 
              'PyTorch 2.5', 'TensorRT', 'Hugging Face', 'LangChain', 'FastAPI', 
              'Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'Terraform', 'AWS ECS/EKS', 
              'PostgreSQL', 'Redis', 'Kafka', 'Pinecone', 'Snowflake', 'BigQuery', 
              'Figma Systems', 'Splunk', 'OWASP Top 10', 'Solidity & EVM', 'FHIR/HL7'
            ].map(tech => (
              <span key={tech} className="px-3 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-slate-300 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* SECTION 7: Program Admissions FAQ & Policy Notice */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Program Admissions, Scheduling & Policies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>What are the system and hardware requirements?</span>
              </h4>
              <p className="text-slate-400">
                Any modern laptop (macOS, Windows, or Linux) with at least 8GB RAM and a reliable internet connection is sufficient. All compute-heavy tasks (GPU fine-tuning, Kubernetes multi-node clusters) are hosted on our dedicated cloud infrastructure with provided credits.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>What if I miss a live cohort session?</span>
              </h4>
              <p className="text-slate-400">
                All live sessions are recorded in 4K studio quality and indexed with AI chapter summaries inside your Provisent LMS dashboard within 3 hours. You can review timestamps, code diffs, and submit homework questions to teaching assistants 24/7.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Do you support No-Cost EMI and corporate sponsorship?</span>
              </h4>
              <p className="text-slate-400">
                Yes! We partner with leading financial institutions to offer zero-cost EMI plans for 3, 6, 9, or 12 months. We also generate automated GST invoice packs for students whose employers provide annual learning and development tuition reimbursements.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>What is the cohort transfer policy?</span>
              </h4>
              <p className="text-slate-400">
                You may transfer your course or bootcamp enrollment to a subsequent cohort if unforeseen professional or personal commitments arise. Read our official{' '}
                <button
                  onClick={() => navigateTo('/refund-policy')}
                  className="text-cyan-400 hover:underline font-semibold cursor-pointer"
                >
                  Refund & Cancellation Policy
                </button>{' '}
                for full transfer guidelines and terms.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Need personal assistance selecting the right program?</p>
                <p className="text-[11px] text-slate-400">Our senior academic counselors evaluate your current resume and advise the optimal track.</p>
              </div>
            </div>
            <button
              onClick={() => navigateTo('/contact')}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shrink-0 cursor-pointer shadow-md shadow-cyan-500/20"
            >
              Request Advisory Call
            </button>
          </div>
        </div>

      </div>

      {/* MODAL 1: Comprehensive Course Breakdown & Syllabus Drawer */}
      {activeSyllabusCourse && (() => {
        const breakdown = getProgramBreakdown(
          activeSyllabusCourse.id, 
          activeSyllabusCourse.category, 
          activeSyllabusCourse.title, 
          activeSyllabusCourse.difficulty
        );

        return (
          <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto flex flex-col shadow-2xl">
              
              {/* Modal Top Header */}
              <div className="p-6 border-b border-white/10 bg-slate-950/80 sticky top-0 z-20 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30 uppercase font-bold">
                        {activeSyllabusCourse.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-300 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                        {activeSyllabusCourse.difficulty} Level
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                        {breakdown.handsOnLabRatio}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {activeSyllabusCourse.title}
                    </h3>
                    <p className="text-xs text-slate-400 flex flex-wrap items-center gap-3 font-mono pt-0.5">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-cyan-400" /> {activeSyllabusCourse.duration}</span>
                      <span>•</span>
                      <span>{activeSyllabusCourse.lessonsCount || 24} Curated Modules</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-amber-400"><Star className="w-3.5 h-3.5 fill-amber-400" /> {activeSyllabusCourse.rating} ({activeSyllabusCourse.reviewCount} alumni)</span>
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveSyllabusCourse(null)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* 4 Navigation Tabs */}
                <div className="flex items-center gap-2 border-t border-white/10 pt-3 overflow-x-auto scrollbar-none">
                  {[
                    { id: 'syllabus', label: 'Curriculum & Labs', icon: <BookOpen className="w-3.5 h-3.5" /> },
                    { id: 'capstone', label: 'Capstone Blueprint', icon: <Terminal className="w-3.5 h-3.5" /> },
                    { id: 'career', label: 'Career Trajectory & ROI', icon: <TrendingUp className="w-3.5 h-3.5" /> },
                    { id: 'faculty', label: 'Faculty & Mentorship', icon: <GraduationCap className="w-3.5 h-3.5" /> },
                  ].map(tab => {
                    const isActive = modalTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setModalTab(tab.id as any)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                            : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {tab.icon}
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 text-xs flex-1">
                
                {/* TAB 1: CURRICULUM & LABS */}
                {modalTab === 'syllabus' && (
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-white uppercase font-mono text-[11px] flex items-center gap-2">
                          <Layers className="w-4 h-4 text-cyan-400" />
                          <span>4-Phase Engineering Mastery Roadmap</span>
                        </h4>
                        <span className="text-[11px] font-mono text-cyan-400">{breakdown.handsOnLabRatio}</span>
                      </div>

                      <div className="space-y-3">
                        {breakdown.syllabusPhases.map((phase, pIdx) => (
                          <div key={pIdx} className="p-4 rounded-2xl bg-slate-950 border border-white/5 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold">
                                  {phase.phaseNumber}
                                </span>
                                <h5 className="font-bold text-white text-sm">{phase.title}</h5>
                              </div>
                              <span className="text-slate-400 font-mono text-[11px]">{phase.duration}</span>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {phase.coreCompetencies.map((comp, tIdx) => (
                                <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono text-[10px]">
                                  {comp}
                                </span>
                              ))}
                            </div>

                            <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-start gap-2.5 text-[11px]">
                              <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <div>
                                <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase block">Practical Hands-On Lab:</span>
                                <span className="text-slate-200">{phase.handsOnLab}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Detailed Modules Accordion / List if available */}
                    {activeSyllabusCourse.modules && activeSyllabusCourse.modules.length > 0 && (
                      <div className="pt-3 border-t border-white/10 space-y-3">
                        <h4 className="font-bold text-white uppercase font-mono text-[11px]">
                          Granular Lesson Modules ({activeSyllabusCourse.modules.length} Modules)
                        </h4>
                        <div className="space-y-2">
                          {activeSyllabusCourse.modules.map(mod => (
                            <div key={mod.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-2">
                              <div className="flex items-center justify-between font-semibold text-white">
                                <span>{mod.title}</span>
                                <span className="text-slate-400 text-[11px] font-mono">{mod.duration}</span>
                              </div>
                              <p className="text-slate-400 text-[11px]">{mod.description}</p>
                              {mod.lessons && (
                                <div className="pt-1.5 border-t border-white/5 space-y-1">
                                  {mod.lessons.map(l => (
                                    <div key={l.id} className="flex items-center justify-between text-[11px] text-slate-300">
                                      <span className="flex items-center gap-1.5">
                                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                                        {l.title}
                                      </span>
                                      <span className="text-slate-500 font-mono text-[10px]">{l.duration}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Target Outcomes */}
                    <div className="pt-3 border-t border-white/10">
                      <h4 className="font-bold text-white mb-2 uppercase font-mono text-[11px]">Target Competencies & Learning Outcomes</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeSyllabusCourse.learningOutcomes.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-950 border border-white/5 text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: CAPSTONE BLUEPRINT */}
                {modalTab === 'capstone' && (
                  <div className="space-y-6">
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-950 to-slate-950 border border-cyan-500/30 space-y-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono">
                        <Award className="w-3.5 h-3.5" />
                        <span>PORTFOLIO CAPSTONE ARCHITECTURE</span>
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        {breakdown.capstoneProject.title}
                      </h4>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {breakdown.capstoneProject.industryContext}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-bold text-white uppercase font-mono text-[11px]">Production Deliverables Required for Graduation:</h5>
                      <div className="space-y-2">
                        {breakdown.capstoneProject.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} className="p-3 rounded-xl bg-slate-950 border border-white/5 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-slate-200">{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-bold text-white uppercase font-mono text-[11px]">Target Production Toolchain:</h5>
                      <div className="flex flex-wrap gap-2">
                        {breakdown.capstoneProject.toolchain.map((tech, tIdx) => (
                          <span key={tIdx} className="px-3 py-1.5 rounded-xl bg-slate-950 border border-cyan-500/20 text-cyan-300 font-mono text-xs font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                      <h5 className="font-bold text-white uppercase font-mono text-[11px] text-cyan-400">Oral Code Defence & Review</h5>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        Upon completion of your capstone, you will present your architecture in a 30-minute live code defence session before our Industry Review Board. Passing this defence verifies your professional readiness and unlocks the Provisent Verified Credential.
                      </p>
                    </div>
                  </div>
                )}

                {/* TAB 3: CAREER TRAJECTORY & ROI */}
                {modalTab === 'career' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 rounded-2xl bg-slate-950 border border-white/5 space-y-1">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Salary Benchmark</span>
                        <p className="text-base font-bold text-emerald-400 font-mono">{breakdown.salaryBenchmark.split('(')[0]}</p>
                        <span className="text-[10px] font-mono text-slate-500">{breakdown.salaryBenchmark.includes('(') ? breakdown.salaryBenchmark.split('(')[1].replace(')', '') : 'Annual CTC'}</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-950 border border-white/5 space-y-1">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Promo Timeline</span>
                        <p className="text-base font-bold text-white font-mono">{breakdown.careerTrajectory.typicalPromoTimeline}</p>
                        <span className="text-[10px] font-mono text-slate-500">From graduation date</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-950 border border-white/5 space-y-1">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Hiring Demand</span>
                        <p className="text-base font-bold text-cyan-400 font-mono">{breakdown.careerTrajectory.hiringDemandIndex}</p>
                        <span className="text-[10px] font-mono text-slate-500">Tier-1 & Global Enterprise</span>
                      </div>
                    </div>

                    {/* Progression Ladder */}
                    <div className="p-4 rounded-2xl bg-slate-950 border border-white/5 space-y-3">
                      <h5 className="font-bold text-white uppercase font-mono text-[11px] text-cyan-400">Position Elevation Pathway</h5>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-white/5">
                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block">Baseline Starting Role:</span>
                          <span className="text-xs font-bold text-slate-300">{breakdown.careerTrajectory.entryLevelRole}</span>
                        </div>
                        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                          <span>Accelerated Promotion</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-emerald-400 block">Target Elevated Role:</span>
                          <span className="text-xs font-bold text-white">{breakdown.careerTrajectory.targetSeniorRole}</span>
                        </div>
                      </div>
                    </div>

                    {/* Target Job Titles */}
                    <div className="space-y-2">
                      <h5 className="font-bold text-white uppercase font-mono text-[11px]">Primary Industry Job Titles:</h5>
                      <div className="flex flex-wrap gap-2">
                        {breakdown.targetRoles.map((role, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium text-xs">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hiring Partners */}
                    <div className="space-y-2">
                      <h5 className="font-bold text-white uppercase font-mono text-[11px]">Alumni Placed Across Industry Leaders:</h5>
                      <div className="flex flex-wrap gap-2">
                        {breakdown.topHiringPartners.map((partner, idx) => (
                          <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-slate-300 font-mono text-xs">
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: FACULTY & MENTORSHIP */}
                {modalTab === 'faculty' && (
                  <div className="space-y-6">
                    <div className="p-5 rounded-2xl bg-slate-950 border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                      <img
                        src={activeSyllabusCourse.instructor.avatar}
                        alt={activeSyllabusCourse.instructor.name}
                        className="w-16 h-16 rounded-2xl object-cover border border-white/10"
                      />
                      <div className="space-y-1 text-center sm:text-left">
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block font-bold">Lead Course Architect</span>
                        <h4 className="text-base font-bold text-white">{activeSyllabusCourse.instructor.name}</h4>
                        <p className="text-xs text-slate-400 font-mono">
                          {activeSyllabusCourse.instructor.role} • {activeSyllabusCourse.instructor.company}
                        </p>
                        <p className="text-xs text-slate-300 pt-1 leading-relaxed">{activeSyllabusCourse.instructor.bio}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-slate-950 border border-white/5 space-y-1.5">
                        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                          <Users className="w-4 h-4" />
                          <span>Weekly Live Architecture Clinics</span>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          Direct live video Q&A, system design teardowns, and architecture debugging sessions hosted every weekend with the lead instructor.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950 border border-white/5 space-y-1.5">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                          <ShieldCheck className="w-4 h-4" />
                          <span>1:1 Dedicated Code Mentorship</span>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          Unlimited asynchronous pull-request reviews on your GitHub code submissions with direct line-by-line feedback from staff engineers.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-300">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">Lifetime Resource Inclusions:</span>
                      <p>All enrolled students receive lifetime access to course video updates, repository templates, architecture whitepapers, and private Discord community access with 12,000+ engineers.</p>
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Bottom Footer Actions */}
              <div className="p-6 border-t border-white/10 bg-slate-950/90 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
                <div>
                  <span className="text-slate-400 block font-mono text-[10px]">Total Tuition (Full Access + Mentorship + Certificate)</span>
                  <div className="flex items-baseline gap-2 font-mono">
                    <span className="text-xl font-bold text-white">
                      {activeSyllabusCourse.currency}{activeSyllabusCourse.discountedPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 line-through">
                      {activeSyllabusCourse.currency}{activeSyllabusCourse.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const id = activeSyllabusCourse.id;
                      setActiveSyllabusCourse(null);
                      navigateTo(`/courses/${id}`);
                    }}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 cursor-pointer text-center"
                  >
                    Dedicated Program Page
                  </button>
                  <button
                    onClick={() => {
                      const course = activeSyllabusCourse;
                      setActiveSyllabusCourse(null);
                      openCheckout(course);
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs cursor-pointer shadow-lg shadow-cyan-500/25 text-center"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>

            </div>
          </div>
        );
      })()}

      {/* MODAL 2: Bootcamp Syllabus Details Drawer */}
      {activeSyllabusBootcamp && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-amber-500/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase font-bold">COHORT ACCELERATOR</span>
                <h3 className="text-xl font-bold text-white mt-1">{activeSyllabusBootcamp.title}</h3>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-2 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{activeSyllabusBootcamp.batchDate}</span>
                  <span>•</span>
                  <span>{activeSyllabusBootcamp.schedule}</span>
                </p>
              </div>
              <button
                onClick={() => setActiveSyllabusBootcamp(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <h4 className="font-bold text-white mb-2 uppercase font-mono text-[11px]">Curriculum Sprint Highlights</h4>
                <div className="space-y-2">
                  {activeSyllabusBootcamp.curriculumHighlights.map((hl, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-white/5 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200 leading-snug">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1.5 uppercase font-mono text-[11px]">Cohort Inclusions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeSyllabusBootcamp.features.map((feat, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-slate-300 text-[11px]">
                      • {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/20 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 block font-mono text-[10px]">Tuition (Complete Accelerator)</span>
                  <div className="flex items-baseline gap-2 font-mono">
                    <span className="text-lg font-bold text-white">
                      ₹{activeSyllabusBootcamp.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 line-through">
                      ₹{activeSyllabusBootcamp.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const b = activeSyllabusBootcamp;
                      setActiveSyllabusBootcamp(null);
                      handleEnrollBootcamp(b);
                    }}
                    className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer shadow-lg shadow-amber-500/20"
                  >
                    Reserve Seat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: Download Full Prospectus Form */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-cyan-400 font-mono text-xs uppercase font-bold">Official Prospectus</span>
                <h3 className="text-lg font-bold text-white mt-1">Download 2026-2027 Academic Catalog</h3>
              </div>
              <button
                onClick={() => setIsBrochureModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {brochureSubmitted ? (
              <div className="p-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Prospectus Dispatched!</h4>
                <p className="text-xs text-slate-400">Please check your inbox for the complete curriculum PDF and fee structure.</p>
              </div>
            ) : (
              <form onSubmit={handleBrochureSubmit} className="space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Enter your email to immediately receive the 48-page Provisent Engineering Prospectus, detailed syllabi, and cohort calendar.
                </p>

                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={brochureEmail}
                      onChange={e => setBrochureEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Phone Number (Optional for WhatsApp Syllabus)</label>
                    <input
                      type="tel"
                      value={brochurePhone}
                      onChange={e => setBrochurePhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs cursor-pointer shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Me Official Prospectus</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

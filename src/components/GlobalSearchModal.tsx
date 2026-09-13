import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, X, BookOpen, GraduationCap, Compass, 
  FileText, Users, ArrowRight, Sparkles 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES, PROGRAM_CATEGORIES, LEARNING_PATHS, FACULTY_MEMBERS, BLOG_POSTS } from '../data/mockData';

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateTo } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredCourses = q
    ? COURSES.filter(c => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q) || c.instructor.name.toLowerCase().includes(q))
    : COURSES.slice(0, 3);

  const filteredPaths = q
    ? LEARNING_PATHS.filter(p => p.title.toLowerCase().includes(q) || p.skills.some(s => s.toLowerCase().includes(q)))
    : LEARNING_PATHS.slice(0, 2);

  const filteredCategories = q
    ? PROGRAM_CATEGORIES.filter(c => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))
    : [];

  const filteredFaculty = q
    ? FACULTY_MEMBERS.filter(f => f.name.toLowerCase().includes(q) || f.expertise.toLowerCase().includes(q))
    : [];

  const filteredBlogs = q
    ? BLOG_POSTS.filter(b => b.title.toLowerCase().includes(q) || b.category.toLowerCase().includes(q))
    : [];

  const totalResults = filteredCourses.length + filteredPaths.length + filteredCategories.length + filteredFaculty.length + filteredBlogs.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl rounded-2xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-slate-900/50">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search courses, skills (e.g. React, AI, Full Stack, Python)..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-white px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-slate-950/40 overflow-x-auto text-xs">
          <span className="text-slate-400 text-[11px] font-mono shrink-0">Try:</span>
          {['React', 'AI & ML', 'UI/UX', 'Cloud DevOps', 'Janani K', 'Certifications'].map(pill => (
            <button
              key={pill}
              onClick={() => setQuery(pill)}
              className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition-colors shrink-0 text-[11px]"
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="overflow-y-auto p-4 space-y-4 divide-y divide-white/5">
          {totalResults === 0 && query ? (
            <div className="text-center py-10">
              <p className="text-sm text-slate-400">No programs or records matching "{query}".</p>
              <p className="text-xs text-cyan-400 mt-1 cursor-pointer hover:underline" onClick={() => { setQuery(''); navigateTo('/courses'); setIsSearchOpen(false); }}>
                Browse all available courses →
              </p>
            </div>
          ) : (
            <>
              {/* Courses Results */}
              {filteredCourses.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Courses ({filteredCourses.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredCourses.map(course => (
                      <div
                        key={course.id}
                        onClick={() => {
                          navigateTo(`/courses/${course.id}`);
                          setIsSearchOpen(false);
                        }}
                        className="p-2.5 rounded-xl hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 cursor-pointer transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <img src={course.image} alt={course.title} className="w-10 h-10 rounded-lg object-cover" />
                          <div>
                            <p className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {course.title}
                            </p>
                            <p className="text-[11px] text-slate-400">
                              By {course.instructor.name} • {course.difficulty} • {course.duration}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-cyan-400 font-mono">
                          {course.currency}{course.discountedPrice.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Learning Paths */}
              {filteredPaths.length > 0 && (
                <div className="pt-3 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <Compass className="w-3.5 h-3.5 text-purple-400" />
                    <span>Career Learning Paths ({filteredPaths.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredPaths.map(path => (
                      <div
                        key={path.id}
                        onClick={() => {
                          navigateTo('/learning-paths');
                          setIsSearchOpen(false);
                        }}
                        className="p-2.5 rounded-xl hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20 cursor-pointer transition-all flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-xs font-semibold text-white group-hover:text-purple-300">
                            {path.title}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {path.duration} • Projected: {path.salaryRange}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Faculty Results */}
              {filteredFaculty.length > 0 && (
                <div className="pt-3 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Faculty ({filteredFaculty.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredFaculty.map(faculty => (
                      <div
                        key={faculty.id}
                        onClick={() => {
                          navigateTo('/instructors');
                          setIsSearchOpen(false);
                        }}
                        className="p-2 rounded-xl hover:bg-emerald-500/10 cursor-pointer flex items-center gap-3"
                      >
                        <img src={faculty.avatar} alt={faculty.name} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <p className="text-xs font-semibold text-white">{faculty.name}</p>
                          <p className="text-[10px] text-slate-400">{faculty.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Knowledge Hub Blogs */}
              {filteredBlogs.length > 0 && (
                <div className="pt-3 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <FileText className="w-3.5 h-3.5 text-amber-400" />
                    <span>Articles & Guides ({filteredBlogs.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredBlogs.map(blog => (
                      <div
                        key={blog.id}
                        onClick={() => {
                          navigateTo(`/blog/${blog.slug}`);
                          setIsSearchOpen(false);
                        }}
                        className="p-2 rounded-xl hover:bg-amber-500/10 cursor-pointer flex items-center justify-between group"
                      >
                        <p className="text-xs text-slate-200 group-hover:text-amber-300 truncate">
                          {blog.title}
                        </p>
                        <span className="text-[10px] text-slate-500 shrink-0 ml-2">{blog.readTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-950/70 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
          <span>Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-[10px] font-mono">ESC</kbd> to close</span>
          <span className="text-cyan-400">PROVISENT Smart Search Engine</span>
        </div>
      </div>
    </div>
  );
};

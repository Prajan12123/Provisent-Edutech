import React, { useState } from 'react';
import { 
  FileText, Search, Clock, ArrowRight, 
  Tag, Calendar, Sparkles 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS } from '../data/mockData';

export const BlogPage: React.FC = () => {
  const { navigateTo } = useApp();
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'AI Engineering', 'Web Development', 'Design Systems', 'Cloud & DevOps'];

  const filtered = BLOG_POSTS.filter(b => {
    const matchQ = b.title.toLowerCase().includes(search.toLowerCase()) || b.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchC = selectedCat === 'All' || b.category === selectedCat;
    return matchQ && matchC;
  });

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <FileText className="w-4 h-4" />
            <span>KNOWLEDGE HUB & ENGINEERING DISPATCHES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Provisent Technical Insights
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            In-depth architectural breakdowns, career playbooks, and modern software engineering paradigms curated by our faculty.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10 mb-10">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search articles & guides..."
              className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto text-xs">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 rounded-xl font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(post => (
            <div
              key={post.id}
              onClick={() => navigateTo(`/blog/${post.slug}`)}
              className="rounded-3xl liquid-glass-card border border-white/10 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-cyan-300 font-semibold text-[10px] uppercase border border-white/10">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-cyan-400" /> {post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs border-t border-white/5 mt-2">
                <span className="text-slate-400">By <strong className="text-white">{post.author.name}</strong></span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

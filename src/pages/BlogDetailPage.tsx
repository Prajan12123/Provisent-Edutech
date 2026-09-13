import React from 'react';
import { 
  Clock, ArrowLeft, Share2, Bookmark, 
  Linkedin, Twitter, Facebook, Sparkles 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS } from '../data/mockData';

interface Props {
  slug: string;
}

export const BlogDetailPage: React.FC<Props> = ({ slug }) => {
  const { navigateTo, addToast } = useApp();
  const post = BLOG_POSTS.find(b => b.slug === slug) || BLOG_POSTS[0];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast('Article Link Copied', 'Shareable URL copied to clipboard.', 'info');
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={() => navigateTo('/blog')}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Knowledge Hub</span>
        </button>

        {/* Article Meta */}
        <div className="space-y-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-white">{post.author.name}</p>
                <p className="text-[10px] text-cyan-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 font-mono"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              <button
                onClick={handleShare}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer"
                title="Share Article"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Cover Image */}
        <div className="rounded-3xl overflow-hidden mb-10 border border-white/10 max-h-[420px]">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
          <p className="text-lg text-slate-200 font-medium">
            {post.excerpt}
          </p>

          <p>
            In modern technology architectures, teams are rapidly shifting from passive microservices to autonomous multi-agent systems and unified TypeScript full-stack patterns. As organizations demand faster cycle times with higher reliability, developers must master foundational design principles rather than superficial framework syntax.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Key Architectural Tenets for Production Scale
          </h2>

          <p>
            Whether implementing retrieval-augmented generation (RAG) or scaling high-throughput React 19 web applications, three core principles consistently determine system durability:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong>Deterministic Type Contracts:</strong> End-to-end type safety from database schemas through API serialization to client state.</li>
            <li><strong>Isolated State Horizons:</strong> Minimizing unnecessary cascading re-renders and unbounded query cache proliferation.</li>
            <li><strong>Observability & Fault Tolerance:</strong> Structured tracing across distributed execution contexts with graceful fallback circuits.</li>
          </ul>

          <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-cyan-200 text-sm">
            <p className="font-semibold">Industry Perspective:</p>
            <p className="text-xs text-slate-300 mt-1">
              "The engineer of 2026 is an orchestration architect who understands latency budgets, vector quantization, and robust continuous integration."
            </p>
          </div>

          <p>
            At PROVISENT EDUTECH, our curricula are engineered around these precise industry needs. Explore our comprehensive learning tracks to master these capabilities firsthand.
          </p>
        </div>

        {/* Article Footer CTA */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 border border-cyan-500/30 text-center space-y-4">
          <Sparkles className="w-8 h-8 text-cyan-400 mx-auto" />
          <h3 className="text-xl font-bold text-white">Accelerate Your Engineering Career</h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Take the next step in your professional development with our industry-accredited courses and live bootcamps.
          </p>
          <button
            onClick={() => navigateTo('/courses')}
            className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 cursor-pointer"
          >
            Browse Related Specializations
          </button>
        </div>

      </div>
    </div>
  );
};

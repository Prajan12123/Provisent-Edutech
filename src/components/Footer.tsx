import React, { useState } from 'react';
import { 
  GraduationCap, Mail, Phone, MapPin, Send, CheckCircle2, 
  Linkedin, Instagram, Youtube, Facebook, Twitter, ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { navigateTo, addToast } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    addToast('Subscribed!', 'You are now subscribed to Provisent Career Insights.', 'success');
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400 text-xs">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  PROVISENT
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400">
                  EDUTECH PRIVATE LIMITED
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Empowering learners with world-class skills, professional development and career opportunities. A futuristic global education and certification ecosystem.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:hr@provisent.com" className="hover:text-cyan-300 transition-colors">
                  hr@provisent.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+919361444644" className="hover:text-cyan-300 transition-colors font-mono">
                  +91 9361444644
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Velappa Gounder Nagar, Sahara City, Saravanampatti, Coimbatore, Tamil Nadu 641035</span>
              </div>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-white/10 shadow-xl">
              <h4 className="text-sm font-bold text-white mb-1">
                Get career insights and learning updates.
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                Join 45,000+ engineers, designers, and managers receiving weekly technical breakdowns.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Thank you for subscribing! Check your inbox for our latest curriculum guide.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your professional email address"
                    className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                    required
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-white/10">
          
          {/* Col 1: Learning */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">Programs</h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigateTo('/courses')} className="hover:text-cyan-300 transition-colors">
                  All Courses
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/learning-paths')} className="hover:text-cyan-300 transition-colors">
                  Learning Paths
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/bootcamps')} className="hover:text-cyan-300 transition-colors">
                  Live Bootcamps
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/certifications')} className="hover:text-cyan-300 transition-colors">
                  Certifications
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/programs')} className="hover:text-cyan-300 transition-colors">
                  Category Explorer
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Mentorship & Faculty */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">Mentorship & Faculty</h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigateTo('/mentors')} className="hover:text-cyan-300 transition-colors">
                  Book a Mentor (1:1)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/instructors')} className="hover:text-cyan-300 transition-colors">
                  Meet the Faculty
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/instructors')} className="hover:text-cyan-300 transition-colors">
                  Janani K (Full Stack)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/instructors')} className="hover:text-cyan-300 transition-colors">
                  Lakshanaya KM (AI/ML)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/instructors')} className="hover:text-cyan-300 transition-colors">
                  Sharan M (UI/UX)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">Company</h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigateTo('/about')} className="hover:text-cyan-300 transition-colors">
                  About Provisent
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/corporate')} className="hover:text-cyan-300 transition-colors">
                  Corporate Upskilling
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/careers')} className="hover:text-cyan-300 transition-colors">
                  Careers & Open Roles
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/contact')} className="hover:text-cyan-300 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">Resources</h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigateTo('/blog')} className="hover:text-cyan-300 transition-colors">
                  Knowledge Hub / Blog
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/verify-certificate')} className="hover:text-cyan-300 transition-colors flex items-center gap-1 text-emerald-400">
                  <span>Verify a Certificate</span>
                  <ShieldCheck className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/#faq')} className="hover:text-cyan-300 transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/student/dashboard')} className="hover:text-cyan-300 transition-colors">
                  Student Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Accreditations */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">Legal & Compliance</h5>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('/contact')} className="hover:text-cyan-300 transition-colors cursor-pointer text-left">Privacy Policy</button></li>
              <li><button onClick={() => navigateTo('/contact')} className="hover:text-cyan-300 transition-colors cursor-pointer text-left">Terms of Service</button></li>
              <li><button onClick={() => navigateTo('/refund-policy')} className="hover:text-cyan-300 transition-colors cursor-pointer text-left text-cyan-400 font-semibold">Refund Policy</button></li>
              <li><button onClick={() => navigateTo('/contact')} className="hover:text-cyan-300 transition-colors cursor-pointer text-left">Cookie Preferences</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-center sm:text-left">
            © 2026 PROVISENT EDUTECH PRIVATE LIMITED. All rights reserved.
          </p>

          <div className="flex items-center space-x-3 text-slate-400">
            <span className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors cursor-pointer" title="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </span>
            <span className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors cursor-pointer" title="Twitter / X">
              <Twitter className="w-4 h-4" />
            </span>
            <span className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors cursor-pointer" title="YouTube">
              <Youtube className="w-4 h-4" />
            </span>
            <span className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors cursor-pointer" title="Instagram">
              <Instagram className="w-4 h-4" />
            </span>
            <span className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors cursor-pointer" title="Facebook">
              <Facebook className="w-4 h-4" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

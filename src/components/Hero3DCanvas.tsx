import React, { useRef, useEffect, useState } from 'react';
import { 
  Laptop, Award, Sparkles, Code2, Database, ShieldCheck, 
  Cpu, ArrowUpRight, CheckCircle2, TrendingUp 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { navigateTo } = useApp();

  // Subtle interactive mouse parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // High-performance background 3D particle constellation & light beams
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particles system
    const numParticles = 45;
    const particles: {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }[] = [];

    const colors = ['#38bdf8', '#818cf8', '#a855f7', '#22d3ee', '#6366f1'];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 400 + 100,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle futuristic geometric grid lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw light beams
      const grad = ctx.createRadialGradient(
        width * 0.5 + mousePos.x * 40,
        height * 0.4 + mousePos.y * 30,
        10,
        width * 0.5,
        height * 0.4,
        width * 0.6
      );
      grad.addColorStop(0, 'rgba(14, 165, 233, 0.12)');
      grad.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles with subtle depth connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + mousePos.x * 0.2;
        p.y += p.vy + mousePos.y * 0.2;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.8 + Math.sin(time + i) * 0.2);
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 90) * 0.15;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[520px] lg:h-[600px] rounded-3xl overflow-hidden liquid-glass border border-cyan-500/20 shadow-2xl shadow-cyan-950/40 select-none flex items-center justify-center"
      id="hero-3d-ecosystem"
    >
      {/* Dynamic Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Floating 3D Ecosystem Elements Layer */}
      <div 
        className="relative z-10 w-full max-w-lg h-full flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${-mousePos.y * 6}deg) rotateY(${mousePos.x * 8}deg)`
        }}
      >
        
        {/* Central Core: Digital Laptop / Interactive IDE Screen */}
        <div 
          className="relative w-72 sm:w-96 rounded-2xl bg-slate-900/90 border border-cyan-500/30 shadow-2xl p-4 backdrop-blur-2xl transition-all duration-300 group hover:border-cyan-400/60"
          style={{
            transform: `translateZ(40px) translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`
          }}
        >
          {/* Mock Window Title Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300/80 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
              <Laptop className="w-3 h-3 text-cyan-400" />
              <span>Provisent Cloud Workspace</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">LIVE • 60 FPS</span>
          </div>

          {/* Active Code / Course Preview */}
          <div className="space-y-2 font-mono text-xs text-slate-300 bg-slate-950/80 p-3 rounded-xl border border-white/5">
            <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1 border-b border-white/5">
              <span className="text-cyan-400">~/provisent/ai-engineer/model.py</span>
              <span className="text-purple-400">PyTorch 2.4</span>
            </div>
            <p className="text-slate-400 text-[11px]">
              <span className="text-purple-400">import</span> torch.nn <span className="text-purple-400">as</span> nn<br/>
              <span className="text-blue-400">class</span> <span className="text-amber-300">TransformerCore</span>(nn.Module):<br/>
              &nbsp;&nbsp;<span className="text-slate-500"># Autonomous Multi-Agent Attention</span><br/>
              &nbsp;&nbsp;<span className="text-cyan-300">def</span> forward(self, x): <span className="text-emerald-400">return</span> self.rag_pipeline(x)
            </p>
          </div>

          {/* Progress Dashboard Meter */}
          <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 font-bold text-xs">
                92%
              </div>
              <div>
                <p className="text-[11px] font-semibold text-white">Full Stack Mastery</p>
                <p className="text-[9px] text-slate-400">Module 4 of 5 Complete</p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Verified
            </span>
          </div>
        </div>

        {/* Floating Element 1: Digital Certificate Mockup (Top Right) */}
        <div 
          onClick={() => navigateTo('/verify-certificate')}
          className="absolute -top-4 -right-4 sm:-right-8 w-52 rounded-xl bg-slate-900/90 border border-emerald-500/30 shadow-xl p-3 backdrop-blur-xl transition-transform duration-300 cursor-pointer hover:border-emerald-400 hover:scale-105"
          style={{
            transform: `translateZ(70px) translate(${mousePos.x * 15}px, ${mousePos.y * 12}px)`
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-white leading-tight">Accredited Credential</p>
              <p className="text-[9px] text-emerald-400 font-mono">ID: PROV-2026-8894</p>
            </div>
          </div>
          <div className="bg-slate-950/60 p-2 rounded-lg border border-white/5 text-[10px] text-slate-300 flex items-center justify-between">
            <span>Status:</span>
            <span className="font-semibold text-emerald-300 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Tamper-Proof
            </span>
          </div>
        </div>

        {/* Floating Element 2: AI Learning Assistant Node (Bottom Left) */}
        <div 
          className="absolute -bottom-4 -left-4 sm:-left-8 w-56 rounded-xl bg-slate-900/95 border border-purple-500/30 shadow-xl p-3 backdrop-blur-xl transition-transform duration-300 hover:border-purple-400"
          style={{
            transform: `translateZ(60px) translate(${mousePos.x * -12}px, ${mousePos.y * -14}px)`
          }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-white">AI Career Co-Pilot</p>
              <p className="text-[9px] text-purple-300">Continuous Adaptive Learning</p>
            </div>
          </div>
          <p className="text-[10px] text-slate-300 bg-purple-950/40 p-2 rounded-lg border border-purple-500/20">
            "Recommended: Complete Cloud Deployment module for a 40% higher recruiter match."
          </p>
        </div>

        {/* Floating Element 3: Floating Statistics Chip (Top Left) */}
        <div 
          className="absolute top-8 -left-2 sm:-left-6 rounded-xl bg-slate-900/85 border border-cyan-500/30 px-3 py-2 backdrop-blur-lg flex items-center gap-2 shadow-lg"
          style={{
            transform: `translateZ(80px) translate(${mousePos.x * -18}px, ${mousePos.y * 10}px)`
          }}
        >
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
          <div>
            <p className="text-[9px] text-slate-400 uppercase font-mono">Transition Rate</p>
            <p className="text-xs font-bold text-white flex items-center gap-1">
              <span>95% Success</span>
              <TrendingUp className="w-3 h-3 text-cyan-400" />
            </p>
          </div>
        </div>

        {/* Floating Orbiting Skill Badges */}
        <div 
          className="absolute -bottom-6 right-8 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-blue-500/30 flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 shadow-lg backdrop-blur-md"
          style={{
            transform: `translateZ(50px) translate(${mousePos.x * 12}px, ${mousePos.y * -8}px)`
          }}
        >
          <Code2 className="w-3.5 h-3.5 text-blue-400" />
          <span>React 19 • Node • AI</span>
        </div>

      </div>

      {/* Futuristic corner brackets */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-500/40 pointer-events-none"></div>
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-500/40 pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-500/40 pointer-events-none"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-500/40 pointer-events-none"></div>
    </div>
  );
};

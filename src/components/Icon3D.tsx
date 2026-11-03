import React, { useRef, useState } from 'react';
import { Sparkles, Zap, Move } from 'lucide-react';

interface Icon3DProps {
  onDownloadClick?: () => void;
}

export const Icon3D: React.FC<Icon3DProps> = ({ onDownloadClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 20;
    const rotateY = (x / rect.width) * 20;
    setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div className="relative group cursor-pointer perspective-1000 select-none">
      {/* Ambient Coral-Orange Glow Ring */}
      <div className="absolute -inset-5 rounded-[44px] bg-gradient-to-br from-[#FF385C] to-[#FF7A18] blur-2xl opacity-40 group-hover:opacity-75 transition-all duration-500 pointer-events-none" />

      {/* Main 3D Glassmorphic Floating Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onDownloadClick}
        style={{ transform: transformStyle }}
        className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-[44px] p-6 bg-[#12121D]/75 backdrop-blur-xl border-2 border-[#FF385C]/40 shadow-[0_0_50px_-10px_rgba(255,56,92,0.35)] flex flex-col items-center justify-center overflow-hidden transition-transform duration-200 ease-out animate-[float_6s_ease-in-out_infinite]"
      >
        {/* Specular Diagonal Glass Sheen Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none -translate-y-full group-hover:translate-y-full transition-transform duration-1000" />

        {/* Orbit Ring Accent */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
          <div className="w-56 h-56 border border-[#FF385C]/50 rounded-full animate-[spin_20s_linear_infinite]" />
        </div>

        {/* ============================================================== */}
        {/* REPLACE WITH YOUR VERSESTREAM ICON ASSET                       */}
        {/* ============================================================== */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative p-2.5 rounded-3xl bg-[#0D0D14]/90 border border-[#FF385C]/50 shadow-[0_0_35px_-5px_rgba(255,56,92,0.45)]">
            {/* REPLACE WITH YOUR VERSESTREAM ICON ASSET */}
            <img
              src="/assets/versestream-icon.png"
              alt="VerseStream Logo"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-neon object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/assets/versestream-icon.svg';
              }}
            />
          </div>

          <h3 className="mt-4 text-2xl font-black text-white tracking-wide text-center">
            Verse<span className="text-[#FF385C]">Stream</span>
          </h3>
          <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-widest text-center">
            Universal Stream Player
          </p>

          <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#08080C]/80 border border-[#1F1F2E]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono text-slate-300">HW ACCELERATED • 10-BIT</span>
          </div>
        </div>

        <div className="absolute top-5 left-5 text-[#FF385C]/70">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <div className="absolute bottom-5 right-5 text-[#FF7A18]/70">
          <Zap className="w-5 h-5 animate-pulse" />
        </div>
      </div>

      <div className="text-center mt-3">
        <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <Move className="w-3.5 h-3.5 text-[#FF385C]" />
          Interactive 3D Gyro • Hover or move to tilt
        </span>
      </div>
    </div>
  );
};

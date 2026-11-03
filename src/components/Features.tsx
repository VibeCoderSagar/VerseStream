import React, { useState, useEffect } from 'react';
import { Tv2, Speaker, Radio, Clock, PlayCircle, ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  const [passSeconds, setPassSeconds] = useState<number>(3 * 3600);
  const [passActive, setPassActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (passActive) {
      interval = setInterval(() => {
        setPassSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [passActive]);

  const handleSimulatePass = () => {
    setPassSeconds(3 * 3600);
    setPassActive(true);
  };

  const formatCountdown = (totalSecs: number) => {
    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;
    return `${h}h ${m < 10 ? '0' : ''}${m}m ${s < 10 ? '0' : ''}${s}s remaining`;
  };

  return (
    <section id="features" className="py-20 relative border-t border-[#1F1F2E]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF385C]/10 border border-[#FF385C]/30 text-[#FF385C] text-xs font-bold uppercase tracking-wider mb-3">
            Flagship Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Engineered for <span className="bg-gradient-to-r from-white via-[#FF385C] to-[#FF8A00] bg-clip-text text-transparent">Pure Clarity.</span>
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Hardware-accelerated media decoding, surround sound pass-through, and zero mid-roll streaming sessions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Feature 1: 4K Ultra HD & Dynamic HDR */}
          <div className="p-7 rounded-3xl bg-[#12121D]/75 backdrop-blur-md border border-[#1F1F2E] hover:border-[#FF385C]/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#FF385C]/15 border border-[#FF385C]/40 text-[#FF385C] flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(255,56,92,0.3)]">
              <Tv2 className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF385C]">Native Video Rendering</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white">HDR10+</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2.5">4K Ultra HD &amp; Dynamic HDR</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Native hardware decoding with zero color compression. Full support for next-gen AV1, HEVC (H.265), and VP9 10-bit color profile at true 60/120 FPS.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-xs text-slate-400">
              <span>Color Gamut: BT.2020</span>
              <span className="text-[#FF385C] font-bold">Bit-Perfect 4K</span>
            </div>
          </div>

          {/* Feature 2: 5.1 Dolby Surround & Spatial Engine */}
          <div className="p-7 rounded-3xl bg-[#12121D]/75 backdrop-blur-md border border-[#1F1F2E] hover:border-[#FF7A18]/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#FF7A18]/15 border border-[#FF7A18]/40 text-[#FF7A18] flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(255,122,24,0.3)]">
              <Speaker className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF7A18]">Multi-Channel Pass</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white">5.1 / 7.1</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2.5">5.1 Dolby Surround &amp; Spatial Sound</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Multi-channel pass-through for home theatre receivers (AC3, E-AC3, TrueHD, DTS-HD). Features binaural spatial audio virtualization for headphones.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-xs text-slate-400">
              <span>Binaural Spatial Rig</span>
              <a href="#audio-test" className="text-[#FF385C] hover:underline font-bold flex items-center gap-1">
                Test Audio Channels <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Feature 3: Dynamic Multi-CDN & Live IP Broadcasts */}
          <div className="p-7 rounded-3xl bg-[#12121D]/75 backdrop-blur-md border border-[#1F1F2E] hover:border-emerald-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-5">
              <Radio className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Open Protocol</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">&lt;12ms Ping</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2.5">Dynamic Multi-CDN &amp; Live IP Streams</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Auto-switch fallback servers for uninterrupted playback. Compatible with 1000+ public and custom M3U/M3U8 channels, XMLTV EPG, and personal NAS shares.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-xs text-slate-400">
              <span>Smart Preload: 180s Buffer</span>
              <span className="text-emerald-400 font-bold">Zero Frame Drops</span>
            </div>
          </div>

          {/* Feature 4: 3-Hour Uninterrupted Pass */}
          <div className="p-7 rounded-3xl bg-[#12121D]/75 backdrop-blur-md border border-[#FF385C]/30">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF385C] to-[#FF7A18] text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,56,92,0.4)]">
                <Clock className="w-6 h-6" />
              </div>
              <button
                onClick={handleSimulatePass}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#0D0D14]/80 border border-[#FF385C]/40 hover:bg-[#FF385C]/20 transition-all flex items-center gap-1.5"
              >
                <PlayCircle className="w-3.5 h-3.5 text-[#FF385C]" />
                <span>{passActive ? 'Pass Active' : 'Simulate Unlock'}</span>
              </button>
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF385C]">Fair &amp; Transparent</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FF385C]/20 text-[#FF385C]">No Mid-Roll</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">3-Hour Uninterrupted Pass</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              "Watch 1 quick ad to unlock 3 hours of ad-free streaming session." Never get interrupted in the middle of a movie scene.
            </p>
            <div className="p-3 rounded-xl bg-[#08080C]/80 border border-[#1F1F2E]">
              <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-1.5">
                <span>SESSION TIMER</span>
                <span className="text-[#FF385C] font-mono">{formatCountdown(passSeconds)}</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#FF385C] to-[#FF7A18] h-full transition-all duration-1000"
                  style={{ width: `${(passSeconds / (3 * 3600)) * 100}%` }}
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

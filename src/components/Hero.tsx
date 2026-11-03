import React from 'react';
import { Download, Send, QrCode, ShieldCheck } from 'lucide-react';
import { Icon3D } from './Icon3D';

interface HeroProps {
  onDownloadClick: () => void;
  onQrClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick, onQrClick }) => {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Copy Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF385C]/10 border border-[#FF385C]/30 text-[#FF385C] text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF385C] animate-ping" />
              Universal Media Engine • 100% Legally-Safe Player
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] mb-6">
              <span className="text-white">Experience Entertainment</span><br />
              <span className="bg-gradient-to-r from-white via-[#FF385C] to-[#FF8A00] bg-clip-text text-transparent">
                Unbound with VerseStream.
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-200 mb-4 leading-relaxed">
              "Your Gateway to Boundless Streams &amp; Cinematic Clarity."
            </p>
            <p className="text-base text-slate-400 mb-8 leading-relaxed max-w-xl">
              Stream endless cinema, web series, global animation, and live broadcasts in master-grade 4K HDR and spatial sound. Powered by open web feeds and personal media libraries.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onDownloadClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-base text-white bg-gradient-to-r from-[#FF385C] via-[#FF4D6D] to-[#FF7A18] shadow-[0_0_35px_-5px_rgba(255,56,92,0.45)] hover:shadow-[0_0_50px_-5px_rgba(255,56,92,0.6)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3 group"
              >
                <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
                <div className="text-left">
                  <div className="text-[11px] uppercase font-extrabold tracking-wider text-white/80">Direct Install (v2.4)</div>
                  <div className="text-sm font-black text-white">Download VerseStream APK</div>
                </div>
              </button>

              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl font-bold text-sm text-white bg-[#12121D]/75 backdrop-blur-xl border border-[#1F1F2E] hover:border-[#FF385C]/50 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5 text-[#FF385C]" />
                <div className="text-left">
                  <div className="text-[11px] uppercase font-bold tracking-wider text-slate-400">Join 45k+ Members</div>
                  <div className="text-sm font-bold text-white">Telegram Community</div>
                </div>
              </a>

              <button
                onClick={onQrClick}
                title="Scan QR Code on Phone"
                className="hidden sm:flex p-4 rounded-2xl bg-[#12121D]/75 backdrop-blur-xl border border-[#1F1F2E] hover:border-[#FF385C] text-slate-300 hover:text-[#FF385C] transition-colors items-center justify-center"
              >
                <QrCode className="w-6 h-6" />
              </button>
            </div>

            {/* Trust Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="bg-[#12121D]/75 backdrop-blur-md px-3 py-2.5 rounded-xl text-center border border-[#1F1F2E]">
                <span className="block text-[11px] text-slate-400">Version</span>
                <span className="text-xs font-bold text-[#FF385C]">v2.4 (18.5 MB)</span>
              </div>
              <div className="bg-[#12121D]/75 backdrop-blur-md px-3 py-2.5 rounded-xl text-center border border-[#1F1F2E]">
                <span className="block text-[11px] text-slate-400">Video</span>
                <span className="text-xs font-bold text-white">4K HDR • 60 FPS</span>
              </div>
              <div className="bg-[#12121D]/75 backdrop-blur-md px-3 py-2.5 rounded-xl text-center border border-[#1F1F2E]">
                <span className="block text-[11px] text-slate-400">Audio</span>
                <span className="text-xs font-bold text-white">5.1 Dolby Pass</span>
              </div>
              <div className="bg-[#12121D]/75 backdrop-blur-md px-3 py-2.5 rounded-xl text-center border border-[#1F1F2E]">
                <span className="block text-[11px] text-slate-400">Security</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Clean 100%
                </span>
              </div>
            </div>

          </div>

          {/* 3D Floating App Icon Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <Icon3D onDownloadClick={onDownloadClick} />
          </div>

        </div>
      </div>
    </section>
  );
};

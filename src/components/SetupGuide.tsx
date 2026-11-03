import React, { useState } from 'react';
import { Download, CheckCircle2, Tv } from 'lucide-react';

interface SetupGuideProps {
  onDownloadClick: () => void;
}

export const SetupGuide: React.FC<SetupGuideProps> = ({ onDownloadClick }) => {
  const [toggleAllowed, setToggleAllowed] = useState<boolean>(true);

  return (
    <section id="setup" className="py-20 relative border-t border-[#1F1F2E]/60 bg-[#0D0D14]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF385C]/10 border border-[#FF385C]/30 text-[#FF385C] text-xs font-bold uppercase tracking-wider mb-3">
            Quick Onboarding
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Simple <span className="bg-gradient-to-r from-white via-[#FF385C] to-[#FF8A00] bg-clip-text text-transparent">3-Step Setup.</span>
          </h2>
          <p className="mt-3 text-base text-slate-400">
            No root required. Ready in under 60 seconds on any Android phone, tablet, Google TV, or Fire OS stick.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="p-7 rounded-3xl bg-[#12121D]/75 backdrop-blur-md border border-[#1F1F2E] flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#FF385C]/15 border-2 border-[#FF385C] text-[#FF385C] flex items-center justify-center font-black text-lg mb-5 shadow-[0_0_20px_rgba(255,56,92,0.4)]">
              01
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Download APK</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-5">
              Download the official VerseStream v2.4 APK package directly to your Android device (18.5 MB).
            </p>
            <button
              onClick={onDownloadClick}
              className="mt-auto px-4 py-2 rounded-xl font-bold text-xs bg-gradient-to-r from-[#FF385C] to-[#FF7A18] text-white hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_15px_rgba(255,56,92,0.3)]"
            >
              <Download className="w-4 h-4" /> Get VerseStream APK
            </button>
          </div>

          {/* Step 2 */}
          <div className="p-7 rounded-3xl bg-[#12121D]/75 backdrop-blur-md border border-[#1F1F2E] flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#FF7A18]/15 border-2 border-[#FF7A18] text-[#FF7A18] flex items-center justify-center font-black text-lg mb-5 shadow-[0_0_20px_rgba(255,122,24,0.4)]">
              02
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Allow Unknown Sources</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-5">
              In Android Settings, toggle "Install unknown apps" to permit direct package sideloading.
            </p>
            
            <div className="mt-auto p-2.5 rounded-xl bg-[#08080C]/80 border border-[#1F1F2E] w-full flex items-center justify-between">
              <span className="text-xs text-slate-300 font-semibold">Allow installation</span>
              <button
                onClick={() => setToggleAllowed(!toggleAllowed)}
                className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
                  toggleAllowed ? 'bg-[#FF385C]' : 'bg-slate-700'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200 ${
                    toggleAllowed ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-7 rounded-3xl bg-[#12121D]/75 backdrop-blur-md border border-[#1F1F2E] flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center font-black text-lg mb-5">
              03
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Launch &amp; Stream</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-5">
              Open VerseStream, load your personal media library or IPTV M3U playlist, and enjoy master 4K HDR playback.
            </p>
            <div className="mt-auto px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Ready to Stream
            </div>
          </div>

        </div>

        {/* TV Sideload Tip Box */}
        <div className="mt-10 p-5 rounded-2xl bg-[#12121D]/75 backdrop-blur-md border border-[#FF385C]/20 max-w-2xl mx-auto flex items-center gap-3.5 text-left">
          <div className="w-10 h-10 rounded-xl bg-[#FF385C]/20 text-[#FF385C] flex items-center justify-center flex-shrink-0">
            <Tv className="w-5 h-5" />
          </div>
          <div className="text-xs text-slate-400">
            <strong className="text-white">Android TV / Fire Stick User?</strong> Use the "Downloader" app on your TV and type direct code <span className="font-mono text-[#FF385C] font-bold">VERSE24</span> to download instantly!
          </div>
        </div>

      </div>
    </section>
  );
};

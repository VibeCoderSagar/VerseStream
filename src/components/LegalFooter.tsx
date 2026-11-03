import React from 'react';
import { Scale, Send, Download } from 'lucide-react';

interface LegalFooterProps {
  onLegalClick: (tab: 'dmca' | 'privacy' | 'terms' | 'licenses') => void;
  onDownloadClick: () => void;
}

export const LegalFooter: React.FC<LegalFooterProps> = ({ onLegalClick, onDownloadClick }) => {
  return (
    <footer className="mt-auto border-t border-[#1F1F2E] bg-[#0D0D14] pt-14 pb-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Formal Legal Notice Box */}
        <div className="mb-10 p-6 rounded-2xl bg-[#08080C] border border-[#1F1F2E] relative">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 mb-1">
                Formal Legal Notice &amp; Compliance Statement
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                "VerseStream is an open media player application. It does not host, provide, or scrape media files directly. All playback is user-directed via third-party providers or personal media libraries."
              </p>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-xs">
          
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/assets/versestream-icon.png"
                alt="VerseStream Logo"
                className="w-8 h-8 rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/assets/versestream-icon.svg';
                }}
              />
              <span className="text-base font-black text-white">VerseStream</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-4">
              "Your Gateway to Boundless Streams &amp; Cinematic Clarity." A high-performance media pipeline engineered for open playback and private home cinema.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#12121D] border border-[#1F1F2E] flex items-center justify-center text-slate-300 hover:text-[#FF385C] transition-colors"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <button
                onClick={onDownloadClick}
                className="w-8 h-8 rounded-lg bg-[#12121D] border border-[#1F1F2E] flex items-center justify-center text-slate-300 hover:text-[#FF385C] transition-colors"
                title="Download APK"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <h5 className="font-black uppercase tracking-wider text-white mb-3">Legal &amp; Policy</h5>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => onLegalClick('dmca')} className="hover:text-[#FF385C]">DMCA Guidelines</button></li>
              <li><button onClick={() => onLegalClick('privacy')} className="hover:text-[#FF385C]">Privacy Policy</button></li>
              <li><button onClick={() => onLegalClick('terms')} className="hover:text-[#FF385C]">Terms of Service</button></li>
              <li><button onClick={() => onLegalClick('licenses')} className="hover:text-[#FF385C]">Open Source Licenses</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black uppercase tracking-wider text-white mb-3">Quick Links</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#features" className="hover:text-[#FF385C]">Features</a></li>
              <li><a href="#ecosystem" className="hover:text-[#FF385C]">Supported Devices</a></li>
              <li><a href="#audio-test" className="hover:text-[#FF385C]">Audio Test Rig</a></li>
              <li><a href="#setup" className="hover:text-[#FF385C]">Setup Guide</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-[#1F1F2E]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>© 2026 VerseStream Engine. All Rights Reserved.</div>
          <div>GPL-3.0 Engine Core • Zero Tracking Telemetry</div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { Download, Volume2, Menu, X, Send } from 'lucide-react';

interface NavbarProps {
  onDownloadClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#12121D]/75 backdrop-blur-xl border-b border-[#1F1F2E]/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,56,92,0.4)] border border-[#FF385C]/40 p-0.5 bg-gradient-to-br from-[#FF385C] to-[#FF7A18] transition-transform group-hover:scale-105">
            <img
              src="/assets/versestream-icon.png"
              alt="VerseStream Logo"
              className="w-full h-full object-cover rounded-[10px]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/assets/versestream-icon.svg';
              }}
            />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
              VerseStream
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#FF385C]/15 text-[#FF385C] border border-[#FF385C]/30">v2.4</span>
            </span>
            <span className="block text-[11px] font-medium text-slate-400">Universal Stream Engine</span>
          </div>
        </a>

        {/* Clean Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <a href="#features" className="hover:text-[#FF385C] transition-colors">Features</a>
          <a href="#ecosystem" className="hover:text-[#FF385C] transition-colors">Devices</a>
          <a href="#setup" className="hover:text-[#FF385C] transition-colors">Quick Setup</a>
          <a href="#audio-test" className="hover:text-[#FF385C] transition-colors flex items-center gap-1.5">
            <Volume2 className="w-4 h-4 text-[#FF385C]" />
            Audio Test
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onDownloadClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF385C] to-[#FF7A18] shadow-[0_0_25px_rgba(255,56,92,0.4)] hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download APK</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-[#12121D]/95 border-t border-[#1F1F2E]">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-300">
            <a href="#features" className="py-2 hover:text-[#FF385C]" onClick={() => setMobileMenuOpen(false)}>Flagship Features</a>
            <a href="#ecosystem" className="py-2 hover:text-[#FF385C]" onClick={() => setMobileMenuOpen(false)}>Supported Devices</a>
            <a href="#setup" className="py-2 hover:text-[#FF385C]" onClick={() => setMobileMenuOpen(false)}>3-Step Setup Guide</a>
            <a href="#audio-test" className="py-2 hover:text-[#FF385C]" onClick={() => setMobileMenuOpen(false)}>5.1 Dolby Audio Test</a>
            <a href="https://t.me/" target="_blank" rel="noreferrer" className="py-2 text-[#FF385C] flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <Send className="w-4 h-4" />
              Telegram Community Hub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

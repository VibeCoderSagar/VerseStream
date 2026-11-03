import React, { useState } from 'react';
import { Smartphone, Tv, Tablet, Check } from 'lucide-react';

type DeviceType = 'phone' | 'tv' | 'tablet';

interface DeviceDetail {
  title: string;
  tagline: string;
  img: string;
  features: string[];
}

export const DeviceShowcase: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<DeviceType>('phone');

  const deviceData: Record<DeviceType, DeviceDetail> = {
    phone: {
      title: 'Android Phones & Handhelds',
      tagline: 'Fluid touch gestures, brightness/volume swipes & PiP.',
      img: '/assets/devices/phone-mockup.svg',
      features: [
        'Swipe left edge for brightness, right edge for volume',
        'Hardware Picture-in-Picture (PiP) background mode',
        'Pocket & accidental touch lock toggle'
      ]
    },
    tv: {
      title: 'Android TV, Google TV & TV Sticks',
      tagline: '10-foot remote D-Pad navigation & Leanback UI.',
      img: '/assets/devices/tv-mockup.svg',
      features: [
        'Optimized focus traversal for TV remotes',
        'Auto Frame Rate (AFR) matching to prevent stutter',
        'Integrated Electronic Program Guide (EPG) grid'
      ]
    },
    tablet: {
      title: 'Tablets & Foldables',
      tagline: 'Multi-pane dashboard & split-view catalogue.',
      img: '/assets/devices/tablet-mockup.svg',
      features: [
        'Browse feeds on left, stream on right',
        'Foldable hinge adaptive flex mode',
        'Real-time bitrate & buffer telemetry'
      ]
    }
  };

  const current = deviceData[activeDevice];

  return (
    <section id="ecosystem" className="py-20 relative border-t border-[#1F1F2E]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF385C]/10 border border-[#FF385C]/30 text-[#FF385C] text-xs font-bold uppercase tracking-wider mb-3">
            Cross-Platform Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Tailored for <span className="bg-gradient-to-r from-white via-[#FF385C] to-[#FF8A00] bg-clip-text text-transparent">Every Screen.</span>
          </h2>

          {/* Device Tabs */}
          <div className="mt-6 inline-flex p-1 rounded-2xl bg-[#12121D]/75 backdrop-blur-md border border-[#1F1F2E]">
            <button
              onClick={() => setActiveDevice('phone')}
              className={`px-5 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                activeDevice === 'phone'
                  ? 'text-white bg-gradient-to-r from-[#FF385C] to-[#FF7A18] shadow-[0_0_20px_rgba(255,56,92,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Android Phones</span>
            </button>

            <button
              onClick={() => setActiveDevice('tv')}
              className={`px-5 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                activeDevice === 'tv'
                  ? 'text-white bg-gradient-to-r from-[#FF385C] to-[#FF7A18] shadow-[0_0_20px_rgba(255,56,92,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Tv className="w-4 h-4" />
              <span>Android TV &amp; Sticks</span>
            </button>

            <button
              onClick={() => setActiveDevice('tablet')}
              className={`px-5 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                activeDevice === 'tablet'
                  ? 'text-white bg-gradient-to-r from-[#FF385C] to-[#FF7A18] shadow-[0_0_20px_rgba(255,56,92,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Tablet className="w-4 h-4" />
              <span>Tablets &amp; Foldables</span>
            </button>
          </div>
        </div>

        {/* Device Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
            <div>
              <h3 className="text-2xl font-black text-white">{current.title}</h3>
              <p className="text-sm text-[#FF385C] font-semibold mt-1">{current.tagline}</p>
            </div>

            <div className="space-y-3 pt-2">
              {current.features.map((f, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#12121D]/75 backdrop-blur-md border border-[#1F1F2E] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FF385C]/15 text-[#FF385C] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center perspective-1000">
            <div className="relative max-w-xl w-full flex items-center justify-center p-4">
              <img
                key={activeDevice}
                src={current.img}
                alt={`${current.title} Mockup`}
                className="w-full max-h-[460px] object-contain drop-shadow-[0_20px_40px_rgba(255,56,92,0.25)] transition-all duration-300"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

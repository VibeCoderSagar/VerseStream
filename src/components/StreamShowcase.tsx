import React from 'react';
import { ShieldAlert, Headphones, Cpu, Sparkles, Volume2, Radio, Gauge, ChevronRight } from 'lucide-react';

interface StreamItem {
  title: string;
  category: string;
  duration: string;
  badge: string;
  badgeColor: string;
  img: string;
  desc: string;
  specIcon: React.ReactNode;
  specLabel: string;
  codec: string;
  audio: string;
  cdn: string;
}

interface StreamShowcaseProps {
  onInspect: (title: string, badge: string, codec: string, audio: string, cdn: string) => void;
}

export const StreamShowcase: React.FC<StreamShowcaseProps> = ({ onInspect }) => {
  const streams: StreamItem[] = [
    {
      title: 'Cyber Horizon',
      category: 'SCI-FI ODYSSEY',
      duration: '2h 14m',
      badge: '4K HDR',
      badgeColor: 'bg-[#00D2FF] text-[#080B11]',
      img: '/assets/posters/cyber-horizon.svg',
      desc: "A visually stunning deep-dive into humanity's digital frontier, rendered in uncompressed master-grade HDR.",
      specIcon: <Headphones className="w-3 h-3 text-[#00D2FF]" />,
      specLabel: 'Dolby 5.1 Pass',
      codec: 'HEVC H.265 (Main 10)',
      audio: '5.1 Dolby Atmos Pass',
      cdn: '9ms Primary CDN'
    },
    {
      title: 'Galactic Odyssey',
      category: 'DEEP SPACE EXPLORATION',
      duration: 'EP. 04',
      badge: 'IMAX 4K',
      badgeColor: 'bg-[#6366F1] text-white',
      img: '/assets/posters/galactic-odyssey.svg',
      desc: 'Spectacular journeys across ringed exoplanets and distant nebular systems, mastered for wide color gamut displays.',
      specIcon: <Cpu className="w-3 h-3 text-[#6366F1]" />,
      specLabel: 'AV1 10-Bit HW',
      codec: 'AV1 10-Bit Hardware Decoded',
      audio: '7.1 TrueHD Pass-through',
      cdn: '14ms Edge Node'
    },
    {
      title: 'Neo Tokyo Chronicles',
      category: 'FUTURISTIC NOIR',
      duration: 'SEASON 2',
      badge: 'HDR10+',
      badgeColor: 'bg-pink-500 text-white',
      img: '/assets/posters/neo-tokyo-chronicles.svg',
      desc: 'Rain-slicked neon skyscrapers, cyber synthwave aesthetics, and multi-track Japanese & English lossless audio feeds.',
      specIcon: <Sparkles className="w-3 h-3 text-pink-400]" />,
      specLabel: 'VP9 Enhanced',
      codec: 'VP9 Profile 2',
      audio: 'Binaural Spatial Sound',
      cdn: '11ms Local Mirror'
    },
    {
      title: 'Quantum Nexus',
      category: 'SPECULATIVE DOCUSERIES',
      duration: '48m',
      badge: 'SPATIAL 7.1',
      badgeColor: 'bg-[#00D2FF] text-[#080B11]',
      img: '/assets/posters/quantum-nexus.svg',
      desc: 'Unraveling multidimensional physics and quantum mechanics through hyper-realistic particle simulations.',
      specIcon: <Volume2 className="w-3 h-3 text-[#00D2FF]" />,
      specLabel: '7.1 Pass-Through',
      codec: 'H.265 Ultra',
      audio: 'Hardware 7.1 Pass',
      cdn: '15ms CDN-Backup'
    },
    {
      title: 'Aurora Borealis Live',
      category: 'NATURE BROADCAST',
      duration: 'CONTINUOUS FEED',
      badge: 'LIVE IP',
      badgeColor: 'bg-emerald-400 text-[#080B11]',
      img: '/assets/posters/aurora-borealis.svg',
      desc: 'Live 4K optical stream from Tromsø observatories, capturing the shimmering polar lights in real-time.',
      specIcon: <Radio className="w-3 h-3 text-emerald-400" />,
      specLabel: 'Open Public Stream',
      codec: 'Direct HLS M3U8',
      audio: 'Stereo 320kbps AAC',
      cdn: 'Zero Packet Loss'
    },
    {
      title: 'Velocity Apex',
      category: 'HYPERCAR CIRCUIT',
      duration: '1h 35m',
      badge: '120 FPS',
      badgeColor: 'bg-red-500 text-white',
      img: '/assets/posters/velocity-apex.svg',
      desc: 'High-octane racing telecast with buttery smooth 120 frames per second motion clarity and zero judder.',
      specIcon: <Gauge className="w-3 h-3 text-red-400" />,
      specLabel: 'Zero Frame Drops',
      codec: 'AV1 120Hz Hardware',
      audio: 'Dynamic Engine Binaural',
      cdn: '8ms Edge CDN'
    }
  ];

  return (
    <section id="catalogue" className="py-20 md:py-32 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-3">
              Open Index Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Curated Streams &amp; <span className="bg-gradient-to-r from-white via-[#00D2FF] to-[#818CF8] bg-clip-text text-transparent">Open Feeds.</span>
            </h2>
            <p className="mt-3 text-base text-slate-400 max-w-xl">
              Preview cards rendered from royalty-free generic cinematic content and public IPTV feeds. Clean, compliant, and indexed for high-fidelity playback.
            </p>
          </div>

          <div className="mt-4 md:mt-0 px-4 py-2.5 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800 flex items-center gap-2.5 text-xs text-slate-300">
            <ShieldAlert className="w-4 h-4 text-[#00D2FF]" />
            <span>Zero proprietary titles • Community &amp; Personal Media Only</span>
          </div>
        </div>

        {/* Stream Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {streams.map((item, i) => (
            <div
              key={i}
              onClick={() => onInspect(item.title, item.badge, item.codec, item.audio, item.cdn)}
              className="rounded-2xl overflow-hidden bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-[#00D2FF]/40 transition-all group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-black ${item.badgeColor}`}>
                  {item.badge}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-[#00D2FF] font-bold mb-1">
                  <span>{item.category}</span>
                  <span>{item.duration}</span>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {item.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    {item.specIcon}
                    {item.specLabel}
                  </span>
                  <span className="text-slate-300 font-semibold group-hover:underline flex items-center gap-1">
                    Inspect <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

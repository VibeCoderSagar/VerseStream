import React, { useState } from 'react';
import { User } from 'lucide-react';

export const AudioEngineTest: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('Surround Ready');
  const [activeSpeaker, setActiveSpeaker] = useState<string | null>(null);

  const testChannel = (channel: string) => {
    try {
      const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const freqMap: Record<string, { f: number; label: string }> = {
        center: { f: 880, label: 'CENTER CHANNEL (880 Hz)' },
        fl: { f: 440, label: 'FRONT LEFT (440 Hz)' },
        fr: { f: 554.37, label: 'FRONT RIGHT (554 Hz)' },
        sl: { f: 330, label: 'SURROUND LEFT (330 Hz)' },
        sr: { f: 392, label: 'SURROUND RIGHT (392 Hz)' },
        lfe: { f: 65, label: 'LFE SUBWOOFER (65 Hz)' }
      };

      if (channel === 'all') {
        const keys = ['fl', 'center', 'fr', 'sr', 'sl', 'lfe'];
        keys.forEach((k, idx) => {
          setTimeout(() => testChannel(k), idx * 500);
        });
        return;
      }

      const conf = freqMap[channel];
      if (!conf) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = channel === 'lfe' ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(conf.f, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);

      setActiveSpeaker(channel);
      setActiveNode(conf.label);

      setTimeout(() => {
        setActiveSpeaker(null);
      }, 500);
    } catch {
      setActiveNode('Web Audio not supported');
    }
  };

  return (
    <section id="audio-test" className="py-16 relative bg-[#0D0D14]/40 border-t border-[#1F1F2E]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-3xl bg-[#12121D]/75 backdrop-blur-xl border border-[#FF385C]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF385C]/15 text-[#FF385C] text-xs font-bold uppercase tracking-wider mb-3 border border-[#FF385C]/30">
                Audio Engine Test
              </div>
              <h3 className="text-2xl font-black text-white">5.1 Spatial Audio Sweep</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Click any speaker node to test channel sweeps in your browser. VerseStream uses 32-bit floating-point audio architecture.
              </p>

              <div className="mt-5 flex gap-2.5">
                <button
                  onClick={() => testChannel('all')}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#FF385C] to-[#FF7A18] text-white hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,56,92,0.4)]"
                >
                  ▶ Test 5.1 Sweep (All)
                </button>
                <button
                  onClick={() => { setActiveNode('Muted'); setActiveSpeaker(null); }}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
                >
                  ■ Mute
                </button>
              </div>

              <div className="mt-5 p-3 rounded-xl bg-[#08080C]/90 border border-[#1F1F2E] text-xs font-mono text-slate-400 space-y-1">
                <div>Decoder: <span className="text-[#FF385C]">Dolby Digital Plus (E-AC3)</span></div>
                <div>Status: <span className="text-emerald-400 font-bold">{activeNode}</span></div>
              </div>
            </div>

            {/* Speaker Circle */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-dashed border-[#1F1F2E] flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#08080C] border-2 border-[#FF385C] flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(255,56,92,0.4)] z-10">
                  <User className="w-5 h-5 text-[#FF385C]" />
                  <span className="text-[8px] font-extrabold text-white">YOU</span>
                </div>

                <button
                  onClick={() => testChannel('center')}
                  className={`absolute top-2 px-2.5 py-1 rounded-md text-[9px] font-black border transition-all ${
                    activeSpeaker === 'center' ? 'bg-[#FF385C] text-white border-[#FF385C]' : 'bg-[#12121D] border-[#1F1F2E] text-slate-300'
                  }`}
                >
                  CENTER
                </button>

                <button
                  onClick={() => testChannel('fl')}
                  className={`absolute top-10 left-4 px-2.5 py-1 rounded-md text-[9px] font-black border transition-all ${
                    activeSpeaker === 'fl' ? 'bg-[#FF385C] text-white border-[#FF385C]' : 'bg-[#12121D] border-[#1F1F2E] text-slate-300'
                  }`}
                >
                  FRONT L
                </button>

                <button
                  onClick={() => testChannel('fr')}
                  className={`absolute top-10 right-4 px-2.5 py-1 rounded-md text-[9px] font-black border transition-all ${
                    activeSpeaker === 'fr' ? 'bg-[#FF385C] text-white border-[#FF385C]' : 'bg-[#12121D] border-[#1F1F2E] text-slate-300'
                  }`}
                >
                  FRONT R
                </button>

                <button
                  onClick={() => testChannel('sl')}
                  className={`absolute bottom-10 left-3 px-2.5 py-1 rounded-md text-[9px] font-black border transition-all ${
                    activeSpeaker === 'sl' ? 'bg-[#FF385C] text-white border-[#FF385C]' : 'bg-[#12121D] border-[#1F1F2E] text-slate-300'
                  }`}
                >
                  SURROUND L
                </button>

                <button
                  onClick={() => testChannel('sr')}
                  className={`absolute bottom-10 right-3 px-2.5 py-1 rounded-md text-[9px] font-black border transition-all ${
                    activeSpeaker === 'sr' ? 'bg-[#FF385C] text-white border-[#FF385C]' : 'bg-[#12121D] border-[#1F1F2E] text-slate-300'
                  }`}
                >
                  SURROUND R
                </button>

                <button
                  onClick={() => testChannel('lfe')}
                  className={`absolute bottom-2 px-2.5 py-1 rounded-md text-[9px] font-black border transition-all ${
                    activeSpeaker === 'lfe' ? 'bg-[#FF7A18] text-white border-[#FF7A18]' : 'bg-[#12121D] border-[#1F1F2E] text-slate-300'
                  }`}
                >
                  SUBWOOFER
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

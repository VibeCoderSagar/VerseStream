import React, { useState } from 'react';
import { X, Download, QrCode, ShieldCheck, FileText } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQr: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, onOpenQr }) => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  if (!isOpen) return null;

  const handleStartDownload = () => {
    setDownloading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          const blob = new Blob(["VerseStream APK v2.4 placeholder"], { type: "application/vnd.android.package-archive" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = "versestream-v2.4.apk";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08080C]/85 backdrop-blur-md">
      <div className="w-full max-w-md rounded-3xl p-6 sm:p-7 bg-[#12121D]/95 border border-[#FF385C]/40 shadow-[0_0_40px_rgba(255,56,92,0.35)] relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF385C] to-[#FF7A18] p-0.5 shadow-[0_0_20px_rgba(255,56,92,0.4)] flex-shrink-0">
            <img src="/assets/versestream-icon.png" alt="VerseStream Logo" class="w-full h-full object-cover rounded-[10px]" onerror="this.src='/assets/versestream-icon.svg'" />
          </div>
          <div>
            <h3 className="text-lg font-black text-white">VerseStream APK v2.4</h3>
            <p className="text-xs text-[#FF385C] font-semibold">Official Release • SHA-256 Verified</p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#08080C] border border-[#1F1F2E] text-xs space-y-1.5 mb-5">
          <div className="flex justify-between"><span className="text-slate-400">Size:</span> <span className="font-bold text-white">18.5 MB</span></div>
          <div className="flex justify-between"><span className="text-slate-400">Compatibility:</span> <span className="text-white">Android 8.0+ (Phone/TV/Tablet)</span></div>
          <div className="flex justify-between"><span className="text-slate-400">Security:</span> <span className="text-emerald-400 font-bold">100% VirusTotal Clean</span></div>
        </div>

        {downloading && (
          <div className="mb-5">
            <div className="flex justify-between text-xs font-bold text-slate-300 mb-1.5">
              <span>{progress === 100 ? 'Download complete!' : 'Downloading versestream-v2.4.apk...'}</span>
              <span className="text-[#FF385C]">{progress}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#FF385C] to-[#FF7A18] h-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        <div className="space-y-2.5">
          <button
            onClick={handleStartDownload}
            className="w-full py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-[#FF385C] to-[#FF7A18] text-white shadow-[0_0_25px_rgba(255,56,92,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Direct APK Download (18.5 MB)</span>
          </button>

          <button
            onClick={() => { onClose(); onOpenQr(); }}
            className="w-full py-2.5 rounded-xl font-bold text-xs bg-[#0D0D14]/80 text-slate-300 hover:text-white border border-[#1F1F2E] flex items-center justify-center gap-2"
          >
            <QrCode className="w-4 h-4 text-[#FF385C]" />
            <span>Scan Phone QR Code</span>
          </button>
        </div>

        <div className="mt-4 text-center">
          <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Scanned by VirusTotal • 0/70 Detections • Zero Adware
          </span>
        </div>
      </div>
    </div>
  );
};

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08080C]/85 backdrop-blur-md">
      <div className="w-full max-w-xs rounded-3xl p-6 bg-[#12121D]/95 border border-[#FF385C]/40 shadow-[0_0_35px_rgba(255,56,92,0.35)] relative text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-black text-white mb-1">Direct Phone Install</h3>
        <p className="text-xs text-slate-400 mb-5">Scan with Android camera to install</p>

        <div className="p-3 rounded-2xl bg-[#08080C] border border-[#FF385C]/40 shadow-[0_0_20px_rgba(255,56,92,0.3)] inline-block mb-4">
          <img src="/assets/qr-code.svg" alt="VerseStream QR" className="w-40 h-40 object-contain rounded-xl" />
        </div>

        <div className="text-[11px] text-slate-300 font-mono p-2 rounded-lg bg-[#08080C] border border-[#1F1F2E]">
          https://versestream.org/dl/v2.4
        </div>
      </div>
    </div>
  );
};

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: 'dmca' | 'privacy' | 'terms' | 'licenses';
  onTabChange: (tab: 'dmca' | 'privacy' | 'terms' | 'licenses') => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, activeTab, onTabChange }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08080C]/85 backdrop-blur-md">
      <div className="w-full max-w-xl max-h-[85vh] rounded-3xl p-6 sm:p-7 bg-[#12121D]/95 border border-[#1F1F2E] shadow-[0_0_50px_rgba(0,0,0,0.8)] relative flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="p-2 rounded-lg bg-[#FF385C]/20 text-[#FF385C]">
            <FileText className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-black text-white">Compliance Documentation</h3>
        </div>

        <div className="flex gap-2 pb-2 border-b border-[#1F1F2E] text-xs font-bold mb-4">
          <button
            onClick={() => onTabChange('dmca')}
            className={`px-3 py-1.5 rounded-lg ${activeTab === 'dmca' ? 'bg-[#FF385C] text-white' : 'text-slate-400 hover:text-white'}`}
          >
            DMCA Policy
          </button>
          <button
            onClick={() => onTabChange('privacy')}
            className={`px-3 py-1.5 rounded-lg ${activeTab === 'privacy' ? 'bg-[#FF385C] text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onTabChange('terms')}
            className={`px-3 py-1.5 rounded-lg ${activeTab === 'terms' ? 'bg-[#FF385C] text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Terms of Service
          </button>
          <button
            onClick={() => onTabChange('licenses')}
            className={`px-3 py-1.5 rounded-lg ${activeTab === 'licenses' ? 'bg-[#FF385C] text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Open Source
          </button>
        </div>

        <div className="overflow-y-auto pr-2 space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {activeTab === 'dmca' && (
            <div>
              <h4 className="text-white font-bold text-sm mb-1.5">1. Neutral Technology Engine</h4>
              <p className="mb-3">VerseStream is an open multimedia software application designed to parse standard open media feeds, personal network storage (NAS, DLNA, SMB), and authorized third-party extensions. VerseStream does not host, upload, manage, index, or store video files on our infrastructure.</p>
              <h4 className="text-white font-bold text-sm mb-1.5">2. Notice and Takedown Procedure</h4>
              <p className="mb-3">If you are a copyright owner or an agent thereof and believe that any user-directed feed or community extension links to content infringing your copyrights, please direct your notice to the respective third-party hosting server or content provider responsible for transmitting the media.</p>
              <h4 className="text-white font-bold text-sm mb-1.5">3. Trademark Safety</h4>
              <p>VerseStream is an independent player application and makes no claim to third-party brand marks, proprietary broadcaster feeds, or trademarked media names.</p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div>
              <h4 className="text-white font-bold text-sm mb-1.5">1. No Activity Logging</h4>
              <p className="mb-3">VerseStream does not collect, track, or sell your playback history, stream URLs, IP addresses, or personal media file names. All playback manifests and user cache files remain strictly localized on your physical Android device.</p>
              <h4 className="text-white font-bold text-sm mb-1.5">2. Network Permissions</h4>
              <p>The application requires standard INTERNET permission solely to decode streams requested explicitly by the user, and WAKE_LOCK to prevent screen sleep during video playback.</p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div>
              <h4 className="text-white font-bold text-sm mb-1.5">1. Permitted Usage</h4>
              <p className="mb-3">VerseStream is provided as-is for personal, non-commercial entertainment and media testing purposes. You agree to use VerseStream in accordance with your local jurisdiction's telecommunication and copyright laws.</p>
              <h4 className="text-white font-bold text-sm mb-1.5">2. Warranty Disclaimer</h4>
              <p>VerseStream does not guarantee uptime, availability, or quality of external user-supplied M3U streams or decentralized network endpoints.</p>
            </div>
          )}

          {activeTab === 'licenses' && (
            <div>
              <h4 className="text-white font-bold text-sm mb-1.5">Open Source Modules in VerseStream Core:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-white">ExoPlayer / AndroidX Media3:</strong> Apache License 2.0. High-performance media framework for Android.</li>
                <li><strong className="text-white">FFmpeg Native Decoders:</strong> LGPL v2.1+. Multi-format audio &amp; video decoding algorithms.</li>
                <li><strong className="text-white">Three.js:</strong> MIT License. WebGL rendering components for 3D UI visuals.</li>
                <li><strong className="text-white">Lucide Icons:</strong> ISC License. Vector interface iconography.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-[#1F1F2E] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-bold bg-[#12121D] hover:bg-[#1F1F2E] text-white border border-[#1F1F2E]"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

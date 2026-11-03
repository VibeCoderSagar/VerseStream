import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AudioEngineTest } from './components/AudioEngineTest';
import { DeviceShowcase } from './components/DeviceShowcase';
import { SetupGuide } from './components/SetupGuide';
import { LegalFooter } from './components/LegalFooter';
import { DownloadModal, QrModal, LegalModal } from './components/Modals';

export const App: React.FC = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'dmca' | 'privacy' | 'terms' | 'licenses'>('dmca');

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize Three.js cosmic ember particles
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const count = 150;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorCoral = new THREE.Color(0xFF385C);
    const colorOrange = new THREE.Color(0xFF7A18);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 120;
      positions[i + 1] = (Math.random() - 0.5) * 120;
      positions[i + 2] = (Math.random() - 0.5) * 80;

      const col = Math.random() > 0.4 ? colorCoral : colorOrange;
      colors[i] = col.r;
      colors[i + 1] = col.g;
      colors[i + 2] = col.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const canvasTexture = document.createElement('canvas');
    canvasTexture.width = 32;
    canvasTexture.height = 32;
    const ctx = canvasTexture.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.3, 'rgba(255,56,92,0.85)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const pointTexture = new THREE.CanvasTexture(canvasTexture);

    const material = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      map: pointTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let animationFrameId: number;
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      particles.rotation.y += 0.0007;
      particles.rotation.x += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="bg-[#08080C] text-slate-200 min-h-screen relative font-sans antialiased selection:bg-[#FF385C]/30 selection:text-white">
      {/* Background Three.js Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40" />

      {/* Ambient Lighting Gradients */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#FF385C]/12 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-1/3 -right-40 w-[600px] h-[500px] bg-[#FF7A18]/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onDownloadClick={() => setDownloadModalOpen(true)} />
        
        <main>
          <Hero
            onDownloadClick={() => setDownloadModalOpen(true)}
            onQrClick={() => setQrModalOpen(true)}
          />

          <Features />

          <AudioEngineTest />

          <DeviceShowcase />

          <SetupGuide onDownloadClick={() => setDownloadModalOpen(true)} />
        </main>

        <LegalFooter
          onLegalClick={(tab) => {
            setLegalTab(tab);
            setLegalModalOpen(true);
          }}
          onDownloadClick={() => setDownloadModalOpen(true)}
        />
      </div>

      {/* Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        onOpenQr={() => setQrModalOpen(true)}
      />

      <QrModal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
      />

      <LegalModal
        isOpen={legalModalOpen}
        activeTab={legalTab}
        onTabChange={(t) => setLegalTab(t)}
        onClose={() => setLegalModalOpen(false)}
      />
    </div>
  );
};

export default App;

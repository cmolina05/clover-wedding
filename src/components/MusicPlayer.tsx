import { useState, useRef, useEffect } from 'react';
import { weddingConfig } from '../config/wedding';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(weddingConfig.music.src);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    const startOnInteraction = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      audio.play().then(() => setPlaying(true)).catch(() => {});
      document.removeEventListener('click', startOnInteraction);
      document.removeEventListener('touchstart', startOnInteraction);
      document.removeEventListener('keydown', startOnInteraction);
    };

    document.addEventListener('click', startOnInteraction, { once: true });
    document.addEventListener('touchstart', startOnInteraction, { once: true });
    document.addEventListener('keydown', startOnInteraction, { once: true });

    const timer = setTimeout(() => setVisible(true), 2800);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', startOnInteraction);
      document.removeEventListener('touchstart', startOnInteraction);
      document.removeEventListener('keydown', startOnInteraction);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    startedRef.current = true;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={toggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
      title={playing ? 'Pause music' : weddingConfig.music.label}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-110 group"
      style={{
        background: 'linear-gradient(135deg, #3D5A6B 0%, #5F7D8C 100%)',
        border: '1px solid rgba(184,205,215,0.3)',
      }}
    >
      {playing ? (
        <div className="flex items-end gap-[2px] h-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-[3px] rounded-full bg-wedding-gold"
              style={{
                animation: `musicBar 0.8s ease-in-out ${i * 0.15}s infinite alternate`,
                height: '100%',
              }}
            />
          ))}
        </div>
      ) : (
        <svg className="w-5 h-5 text-white/90 group-hover:text-wedding-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      )}

      <style>{`
        @keyframes musicBar {
          0% { height: 30%; }
          100% { height: 100%; }
        }
      `}</style>
    </button>
  );
}

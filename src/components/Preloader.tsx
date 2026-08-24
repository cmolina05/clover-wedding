import { useState, useEffect } from 'react';
import { weddingConfig } from '../config/wedding';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const initials = `${weddingConfig.couple.groom[0]}&${weddingConfig.couple.bride[0]}`;

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const removeTimer = setTimeout(() => setVisible(false), 2600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, #1E3355 0%, #2C4A78 100%)',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s ease',
      }}
    >
      {/* Monogram */}
      <div
        className="font-serif text-white mb-6"
        style={{
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          fontWeight: 300,
          letterSpacing: '0.08em',
          opacity: fadeOut ? 0 : 1,
          transform: fadeOut ? 'translateY(-10px)' : 'translateY(0)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <span style={{ color: '#A9CBE9' }}>{initials.split('&')[0]}</span>
        <span className="italic mx-2" style={{ color: '#BBD0E4', fontSize: '0.6em' }}>&amp;</span>
        <span style={{ color: '#A9CBE9' }}>{initials.split('&')[1]}</span>
      </div>

      {/* Thin line */}
      <div
        className="w-16 h-px mb-5"
        style={{
          background: 'linear-gradient(90deg, transparent, #7E96AE, transparent)',
          opacity: fadeOut ? 0 : 1,
          transition: 'opacity 0.4s ease 0.1s',
        }}
      />

      {/* Date */}
      <p
        className="font-sans text-[10px] tracking-[0.3em] uppercase"
        style={{
          color: 'rgba(187,208,228,0.5)',
          opacity: fadeOut ? 0 : 1,
          transition: 'opacity 0.4s ease 0.2s',
        }}
      >
        {weddingConfig.dateFormatted}
      </p>

      {/* Loading dots */}
      <div className="flex gap-1.5 mt-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full"
            style={{
              backgroundColor: '#7E96AE',
              opacity: fadeOut ? 0 : 0.4,
              animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
              transition: 'opacity 0.3s ease',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 80%, 100% { opacity: 0.3; transform: scale(1); }
          40% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}

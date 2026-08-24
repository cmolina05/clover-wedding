import { useState, useCallback } from 'react';
import type { CSSProperties } from 'react';
import { weddingConfig } from '../config/wedding';

type Phase = 'idle' | 'seal-pop' | 'flap-open' | 'card-rise' | 'fading';

interface Particle {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  tint?: string;
  glow?: string;
  rot?: number;
}

const HEARTS: Particle[] = [
  { left: '6%', top: '14%', size: 96, duration: 16, delay: 0, tint: 'rgba(255,255,255,0.9)', glow: 'rgba(190,212,232,0.7)', rot: -10 },
  { left: '78%', top: '10%', size: 74, duration: 19, delay: 2, tint: 'rgba(201,169,106,0.7)', glow: 'rgba(184,154,95,0.45)', rot: 12 },
  { left: '13%', top: '64%', size: 58, duration: 14, delay: 4, tint: 'rgba(255,255,255,0.85)', glow: 'rgba(190,212,232,0.6)', rot: -6 },
  { left: '84%', top: '62%', size: 110, duration: 21, delay: 1, tint: 'rgba(255,255,255,0.8)', glow: 'rgba(190,212,232,0.55)', rot: 9 },
  { left: '44%', top: '6%', size: 48, duration: 17, delay: 3, tint: 'rgba(201,169,106,0.65)', glow: 'rgba(184,154,95,0.4)', rot: -14 },
  { left: '62%', top: '84%', size: 66, duration: 15, delay: 5, tint: 'rgba(255,255,255,0.85)', glow: 'rgba(190,212,232,0.6)', rot: 7 },
  { left: '25%', top: '88%', size: 80, duration: 20, delay: 2.5, tint: 'rgba(122,156,188,0.5)', glow: 'rgba(122,156,188,0.4)', rot: -8 },
  { left: '92%', top: '34%', size: 44, duration: 13, delay: 0.5, tint: 'rgba(255,255,255,0.9)', glow: 'rgba(190,212,232,0.65)', rot: 11 },
  { left: '3%', top: '40%', size: 50, duration: 18, delay: 3.5, tint: 'rgba(201,169,106,0.65)', glow: 'rgba(184,154,95,0.42)', rot: -12 },
];

const SPARKLES: Particle[] = [
  { left: '18%', top: '22%', size: 4, duration: 4.5, delay: 0.4, tint: '#C9A96A' },
  { left: '74%', top: '18%', size: 3, duration: 5.5, delay: 1.6, tint: '#4E729A' },
  { left: '32%', top: '72%', size: 3, duration: 4, delay: 2.4, tint: '#C9A96A' },
  { left: '66%', top: '68%', size: 4.5, duration: 6, delay: 0.9, tint: '#4E729A' },
  { left: '10%', top: '52%', size: 3, duration: 5, delay: 3, tint: '#C9A96A' },
  { left: '89%', top: '46%', size: 3.5, duration: 4.2, delay: 2, tint: '#4E729A' },
  { left: '50%', top: '12%', size: 3, duration: 6.5, delay: 1.2, tint: '#C9A96A' },
  { left: '38%', top: '92%', size: 3.5, duration: 5.2, delay: 3.4, tint: '#4E729A' },
  { left: '82%', top: '86%', size: 3, duration: 4.8, delay: 0.2, tint: '#C9A96A' },
  { left: '24%', top: '6%', size: 3, duration: 5.8, delay: 2.8, tint: '#4E729A' },
];

// Minimalist Vector Floral Cluster (Matching the graphic artwork in image_d36a38)
function VectorFloralsLeft({ style }: { style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 160 280" fill="none" style={style} className="pointer-events-none drop-shadow-md">
      {/* Green Stems */}
      <path d="M120 270 L15 10" stroke="#4B6E52" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M100 260 L45 30" stroke="#3D5C43" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="20" cy="20" rx="8" ry="4" fill="#6B8E70" transform="rotate(-30 20 20)" />
      <ellipse cx="35" cy="50" rx="9" ry="4.5" fill="#597C5E" transform="rotate(-40 35 50)" />
      <ellipse cx="25" cy="235" rx="10" ry="5" fill="#6B8E70" transform="rotate(25 25 235)" />
      <ellipse cx="12" cy="255" rx="8" ry="4" fill="#597C5E" transform="rotate(35 12 255)" />

      {/* Top Small Ivory Rose */}
      <g transform="translate(68, 48)">
        <circle cx="0" cy="0" r="18" fill="#F4F1EA" />
        <circle cx="0" cy="0" r="12" fill="#E8E2D5" />
        <circle cx="0" cy="0" r="6" fill="#D6CBB5" />
      </g>

      {/* Small Slate Blue Rose */}
      <g transform="translate(82, 98)">
        <circle cx="0" cy="0" r="15" fill="#4B6F96" />
        <circle cx="0" cy="0" r="9" fill="#325073" />
        <circle cx="0" cy="0" r="4" fill="#1E3652" />
      </g>

      {/* Main Large Deep Blue Rose */}
      <g transform="translate(62, 155)">
        <circle cx="0" cy="0" r="32" fill="#2D4D73" />
        <circle cx="0" cy="0" r="23" fill="#1C3654" />
        <circle cx="0" cy="0" r="14" fill="#12253B" />
        <circle cx="0" cy="0" r="6" fill="#0A1726" />
      </g>

      {/* Medium Blue Rose */}
      <g transform="translate(78, 218)">
        <circle cx="0" cy="0" r="22" fill="#436790" />
        <circle cx="0" cy="0" r="14" fill="#2B496E" />
        <circle cx="0" cy="0" r="7" fill="#1A314D" />
      </g>

      {/* Bottom Ivory Rose */}
      <g transform="translate(85, 262)">
        <circle cx="0" cy="0" r="16" fill="#F4F1EA" />
        <circle cx="0" cy="0" r="10" fill="#E8E2D5" />
        <circle cx="0" cy="0" r="5" fill="#D6CBB5" />
      </g>
    </svg>
  );
}

function VectorFloralsRight({ style }: { style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 160 220" fill="none" style={style} className="pointer-events-none drop-shadow-md">
      {/* Gold/Green Stems */}
      <path d="M20 200 L110 30" stroke="#527054" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 200 L145 70" stroke="#CBB36B" strokeWidth="2" strokeLinecap="round" />
      <circle cx="110" cy="28" r="3.5" fill="#D4B653" />
      <circle cx="145" cy="68" r="3.5" fill="#D4B653" />

      {/* Ivory Anthurium Leaves */}
      <g transform="translate(72, 110) rotate(-18)">
        <path d="M0 0 C-22 -30 0 -58 28 -36 C56 -58 78 -30 56 0 C34 26 22 30 0 0 Z" fill="#FAF8F3" />
        <path d="M28 -40 L28 -2" stroke="#D9B74A" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g transform="translate(95, 145) rotate(12)">
        <path d="M0 0 C-18 -24 0 -48 22 -30 C44 -48 62 -24 44 0 C26 22 18 24 0 0 Z" fill="#F4F0E6" opacity="0.9" />
        <path d="M22 -32 L22 -2" stroke="#D9B74A" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Blue Rose Accent */}
      <g transform="translate(108, 185)">
        <circle cx="0" cy="0" r="24" fill="#3B5E87" />
        <circle cx="0" cy="0" r="15" fill="#244263" />
        <circle cx="0" cy="0" r="7" fill="#13273D" />
      </g>

      {/* Small Sky Blue Accent Flower */}
      <g transform="translate(148, 195)">
        <circle cx="-5" cy="-5" r="5" fill="#A8C8EA" />
        <circle cx="5" cy="-5" r="5" fill="#A8C8EA" />
        <circle cx="0" cy="4" r="5" fill="#88B0DA" />
        <circle cx="0" cy="-2" r="2" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export default function EnvelopeOpener({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>('idle');

  const triggerOpen = useCallback(() => {
    if (phase !== 'idle') return;
    setPhase('seal-pop');
    setTimeout(() => setPhase('flap-open'), 320);
    setTimeout(() => setPhase('card-rise'), 850);
    setTimeout(() => setPhase('fading'), 2350);
    setTimeout(() => onComplete(), 3350);
  }, [phase, onComplete]);

  const isAnimating = phase !== 'idle';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden select-none"
      style={{
        background: 'linear-gradient(180deg, #F0F5FA 0%, #E3EDF7 40%, #D4E4F2 100%)',
        opacity: phase === 'fading' ? 0 : 1,
        transition: 'opacity 0.9s ease',
        pointerEvents: isAnimating ? 'none' : 'auto',
      }}
    >
      <style>{`
        @keyframes env-seal-pop {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          35% { transform: translate(-50%, -50%) scale(1.25); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
        }
        @keyframes env-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes env-drift {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)) scale(1); opacity: 0.55; }
          50% { transform: translateY(-24px) rotate(calc(var(--r, 0deg) * -1)) scale(1.08); opacity: 1; }
        }
        @keyframes env-twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.7); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>

      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {HEARTS.map((p, i) => (
          <svg
            key={i}
            viewBox="0 0 32 29"
            className="absolute"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: (p.size * 29) / 32,
              filter: `drop-shadow(0 0 8px ${p.glow})`,
              ['--r' as string]: `${p.rot}deg`,
              animation: `env-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
            } as CSSProperties}
            aria-hidden="true"
          >
            <path
              d="M16 29C16 29 0 19.5 0 9.5 0 4.25 4.25 0 9.5 0 12.5 0 15 1.75 16 3.5 17 1.75 19.5 0 22.5 0 27.75 0 32 4.25 32 9.5 32 19.5 16 29 16 29Z"
              fill={p.tint}
            />
            <path
              d="M16 29C16 29 0 19.5 0 9.5 0 4.25 4.25 0 9.5 0 12.5 0 15 1.75 16 3.5 17 1.75 19.5 0 22.5 0 27.75 0 32 4.25 32 9.5 32 19.5 16 29 16 29Z"
              fill="rgba(255,255,255,0.45)"
              transform="translate(8.2, 4.2) scale(0.42)"
            />
          </svg>
        ))}
        {SPARKLES.map((p, i) => (
          <div
            key={`spark-${i}`}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: p.tint,
              boxShadow: `0 0 10px 2px ${p.tint === '#4E729A' ? 'rgba(78,114,154,0.55)' : 'rgba(184,154,95,0.6)'}`,
              animation: `env-twinkle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        {/* Header Copy */}
        <div
          className="text-center"
          style={{
            marginBottom: 'clamp(14px, 3.5vh, 40px)',
            opacity: phase === 'card-rise' || phase === 'fading' ? 0 : 1,
            transition: 'opacity 0.5s ease',
          }}
        >
          <h1
            className="font-serif italic text-[#2B4663] tracking-wide mb-1"
            style={{
              fontSize: 'clamp(1.55rem, 7vw, 3rem)',
              textShadow: '0px 1px 2px rgba(255, 255, 255, 0.9)',
            }}
          >
            Love Led by Grace
          </h1>
          <p
            className="font-sans text-[11px] md:text-xs tracking-[0.35em] text-[#4A6785] uppercase font-semibold"
            style={{ textShadow: '0px 1px 1px rgba(255, 255, 255, 0.8)' }}
          >
            {weddingConfig.dateFormatted}
          </p>
        </div>

        {/* Envelope Scene */}
        <div style={{ perspective: '1400px' }}>
          <div
            className="relative rounded-sm shadow-[0_20px_50px_rgba(40,65,95,0.25)]"
            style={{
              width: 'clamp(264px, min(66vw, 58vh), 480px)',
              height: 'clamp(186px, min(46vw, 40vh), 330px)',
              animation: isAnimating ? 'none' : 'env-float 6s ease-in-out infinite',
              background: '#416388',
            }}
          >
            {/* 1. Base / Back Panel */}
            <div className="absolute inset-0 rounded-sm bg-[#3B5B7E]" />

            {/* 2. Invitation Card Inside */}
            <div
              className="absolute flex flex-col items-center justify-center rounded-sm bg-paper-texture"
              style={{
                left: '5%',
                right: '5%',
                bottom: '6%',
                height: '84%',
                background: 'linear-gradient(170deg, #FFFFFF 0%, #FAF9F5 50%, #F3EEE4 100%)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                transition: 'transform 1.05s cubic-bezier(0.22, 0.9, 0.32, 1), box-shadow 0.6s ease, z-index 0s',
                transform: phase === 'card-rise' || phase === 'fading' ? 'translateY(-82%)' : 'translateY(0)',
                zIndex: phase === 'card-rise' || phase === 'fading' ? 10 : 1,
                ...(phase === 'card-rise' || phase === 'fading'
                  ? { boxShadow: '0 16px 45px rgba(20,40,60,0.3)' }
                  : {}),
              }}
            >
              <div className="absolute inset-[6px] rounded-sm pointer-events-none border border-[#B7A27A]/30" />
              <p className="font-serif italic mb-1 text-[10px] md:text-xs text-[#8A7B68] tracking-widest">
                Together with their families
              </p>
              <p className="font-serif text-xl md:text-3xl text-[#2B3338] font-light tracking-wide">
                {weddingConfig.couple.groom}
              </p>
              <p className="font-serif italic text-sm md:text-lg text-[#B7A27A] my-0.5">&amp;</p>
              <p className="font-serif text-xl md:text-3xl text-[#2B3338] font-light tracking-wide">
                {weddingConfig.couple.bride}
              </p>
              <p className="font-sans text-[8px] md:text-[10px] text-[#8A7B68] tracking-widest uppercase mt-2">
                {weddingConfig.dateFormatted}
              </p>
            </div>

            {/* 3. Left Triangular Fold Shadow */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 0, 0 100%, 50% 50%)',
                background: 'linear-gradient(135deg, #385677 0%, #304C6A 100%)',
                zIndex: 2,
              }}
            />

            {/* 4. Right Triangular Fold Shadow */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
                background: 'linear-gradient(225deg, #325070 0%, #2A4460 100%)',
                zIndex: 2,
              }}
            />

            {/* 5. Bottom Triangular Flap */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)',
                background: 'linear-gradient(180deg, #42648B 0%, #3A5A7E 100%)',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.15)',
                zIndex: 3,
              }}
            />

            {/* 6. Left Botanical Floral Art */}
            <VectorFloralsLeft
              style={{
                position: 'absolute',
                left: '-12%',
                top: '-8%',
                width: '42%',
                height: '116%',
                zIndex: 4,
              }}
            />

            {/* 7. Right Botanical Floral Art */}
            <VectorFloralsRight
              style={{
                position: 'absolute',
                right: '-10%',
                bottom: '-6%',
                width: '44%',
                height: '105%',
                zIndex: 4,
              }}
            />

            {/* 8. Top Opening Flap */}
            <div
              className="absolute top-0 left-0 right-0 origin-top"
              style={{
                height: '50%',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.85s cubic-bezier(0.6, 0.05, 0.3, 1)',
                transform: phase === 'idle' || phase === 'seal-pop' ? 'rotateX(0deg)' : 'rotateX(-180deg)',
                zIndex: phase === 'card-rise' || phase === 'fading' ? 1 : 5,
              }}
            >
              {/* Outer Blue Triangle */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  background: 'linear-gradient(175deg, #4E729A 0%, #43648B 100%)',
                  backfaceVisibility: 'hidden',
                  boxShadow: 'inset 0 -3px 8px rgba(0,0,0,0.15)',
                }}
              />
              {/* Inner Cream Flap Lining */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  background: 'linear-gradient(180deg, #FAF8F4 0%, #EFE9DC 100%)',
                  backfaceVisibility: 'hidden',
                  transform: 'rotateX(180deg)',
                }}
              />
            </div>

            {/* 9. Centered Cream & Gold Wax Seal */}
            <button
              type="button"
              onClick={triggerOpen}
              aria-label="Open invitation"
              className="absolute rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
              style={{
                width: 'clamp(48px, 10.5vw, 64px)',
                height: 'clamp(48px, 10.5vw, 64px)',
                top: '50%',
                left: '50%',
                zIndex: 6,
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #FAF6ED 40%, #EFE4CF 75%, #DFCCA8 100%)',
                boxShadow: '0 6px 18px rgba(20,40,65,0.35), inset 0 2px 3px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(180,150,90,0.35)',
                border: '1.5px solid #C2A25D',
                ...(phase === 'seal-pop'
                  ? { animation: 'env-seal-pop 0.5s ease-in forwards' }
                  : isAnimating
                    ? { opacity: 0 }
                    : { transition: 'transform 0.3s ease' }),
              }}
              onMouseEnter={e => { if (!isAnimating) e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.08)'; }}
              onMouseLeave={e => { if (!isAnimating) e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'; }}
            >
              <div className="relative text-center leading-tight">
                <span className="font-serif block text-xs md:text-sm font-bold text-[#8C6F34]">
                  {weddingConfig.couple.groom[0]}
                </span>
                <span className="font-serif italic block text-[8px] md:text-[10px] text-[#A38443] -my-1">&amp;</span>
                <span className="font-serif block text-xs md:text-sm font-bold text-[#8C6F34]">
                  {weddingConfig.couple.bride[0]}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Footer Copy */}
        <p
          className="font-sans text-[#4A6785] text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold animate-pulse"
          style={{
            marginTop: 'clamp(18px, 4.5vh, 48px)',
            opacity: isAnimating ? 0 : 1,
            transition: 'opacity 0.3s ease',
            textShadow: '0px 1px 1px rgba(255, 255, 255, 0.8)',
          }}
        >
          Click to Open
        </p>
      </div>
    </div>
  );
}
import { useState, useCallback } from 'react';
import type { CSSProperties } from 'react';
import { weddingConfig } from '../config/wedding';
import bellaImg from '../assets/bella.png';
import maxieImg from '../assets/maxie.png';

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
  { left: '6%', top: '14%', size: 96, duration: 16, delay: 0, tint: 'rgba(255,255,255,0.85)', glow: 'rgba(235,242,248,0.6)', rot: -10 },
  { left: '78%', top: '10%', size: 74, duration: 19, delay: 2, tint: 'rgba(201,169,106,0.65)', glow: 'rgba(184,154,95,0.4)', rot: 12 },
  { left: '13%', top: '64%', size: 58, duration: 14, delay: 4, tint: 'rgba(169,203,233,0.75)', glow: 'rgba(169,203,233,0.5)', rot: -6 },
  { left: '84%', top: '62%', size: 110, duration: 21, delay: 1, tint: 'rgba(255,255,255,0.75)', glow: 'rgba(235,242,248,0.55)', rot: 9 },
  { left: '44%', top: '6%', size: 48, duration: 17, delay: 3, tint: 'rgba(195,200,205,0.7)', glow: 'rgba(220,226,232,0.5)', rot: -14 },
  { left: '62%', top: '84%', size: 66, duration: 15, delay: 5, tint: 'rgba(169,203,233,0.7)', glow: 'rgba(169,203,233,0.45)', rot: 7 },
  { left: '25%', top: '88%', size: 80, duration: 20, delay: 2.5, tint: 'rgba(255,255,255,0.8)', glow: 'rgba(235,242,248,0.55)', rot: -8 },
  { left: '92%', top: '34%', size: 44, duration: 13, delay: 0.5, tint: 'rgba(195,200,205,0.65)', glow: 'rgba(220,226,232,0.5)', rot: 11 },
  { left: '3%', top: '40%', size: 50, duration: 18, delay: 3.5, tint: 'rgba(201,169,106,0.6)', glow: 'rgba(184,154,95,0.4)', rot: -12 },
];

const SPARKLES: Particle[] = [
  { left: '18%', top: '22%', size: 4, duration: 4.5, delay: 0.4, tint: '#C9A96A' },
  { left: '74%', top: '18%', size: 3, duration: 5.5, delay: 1.6, tint: '#E6EAEE' },
  { left: '32%', top: '72%', size: 3, duration: 4, delay: 2.4, tint: '#C9A96A' },
  { left: '66%', top: '68%', size: 4.5, duration: 6, delay: 0.9, tint: '#A9CBE9' },
  { left: '10%', top: '52%', size: 3, duration: 5, delay: 3, tint: '#E6EAEE' },
  { left: '89%', top: '46%', size: 3.5, duration: 4.2, delay: 2, tint: '#C9A96A' },
  { left: '50%', top: '12%', size: 3, duration: 6.5, delay: 1.2, tint: '#A9CBE9' },
  { left: '38%', top: '92%', size: 3.5, duration: 5.2, delay: 3.4, tint: '#E6EAEE' },
  { left: '82%', top: '86%', size: 3, duration: 4.8, delay: 0.2, tint: '#C9A96A' },
  { left: '24%', top: '6%', size: 3, duration: 5.8, delay: 2.8, tint: '#A9CBE9' },
];

function VectorFloralsLeft({ style }: { style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 160 280" fill="none" style={style} className="pointer-events-none drop-shadow-md">
      <path d="M120 270 L15 10" stroke="#4B6E52" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M100 260 L45 30" stroke="#3D5C43" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="20" cy="20" rx="8" ry="4" fill="#6B8E70" transform="rotate(-30 20 20)" />
      <ellipse cx="35" cy="50" rx="9" ry="4.5" fill="#597C5E" transform="rotate(-40 35 50)" />
      <ellipse cx="25" cy="235" rx="10" ry="5" fill="#6B8E70" transform="rotate(25 25 235)" />
      <ellipse cx="12" cy="255" rx="8" ry="4" fill="#597C5E" transform="rotate(35 12 255)" />

      <g transform="translate(68, 48)">
        <circle cx="0" cy="0" r="18" fill="#F4F1EA" />
        <circle cx="0" cy="0" r="12" fill="#E8E2D5" />
        <circle cx="0" cy="0" r="6" fill="#D6CBB5" />
      </g>

      <g transform="translate(82, 98)">
        <circle cx="0" cy="0" r="15" fill="#4B6F96" />
        <circle cx="0" cy="0" r="9" fill="#325073" />
        <circle cx="0" cy="0" r="4" fill="#1E3652" />
      </g>

      <g transform="translate(62, 155)">
        <circle cx="0" cy="0" r="32" fill="#2D4D73" />
        <circle cx="0" cy="0" r="23" fill="#1C3654" />
        <circle cx="0" cy="0" r="14" fill="#12253B" />
        <circle cx="0" cy="0" r="6" fill="#0A1726" />
      </g>

      <g transform="translate(78, 218)">
        <circle cx="0" cy="0" r="22" fill="#436790" />
        <circle cx="0" cy="0" r="14" fill="#2B496E" />
        <circle cx="0" cy="0" r="7" fill="#1A314D" />
      </g>

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
      <path d="M20 200 L110 30" stroke="#527054" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 200 L145 70" stroke="#CBB36B" strokeWidth="2" strokeLinecap="round" />
      <circle cx="110" cy="28" r="3.5" fill="#D4B653" />
      <circle cx="145" cy="68" r="3.5" fill="#D4B653" />

      <g transform="translate(72, 110) rotate(-18)">
        <path d="M0 0 C-22 -30 0 -58 28 -36 C56 -58 78 -30 56 0 C34 26 22 30 0 0 Z" fill="#FAF8F3" />
        <path d="M28 -40 L28 -2" stroke="#D9B74A" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g transform="translate(95, 145) rotate(12)">
        <path d="M0 0 C-18 -24 0 -48 22 -30 C44 -48 62 -24 44 0 C26 22 18 24 0 0 Z" fill="#F4F0E6" opacity="0.9" />
        <path d="M22 -32 L22 -2" stroke="#D9B74A" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      <g transform="translate(108, 185)">
        <circle cx="0" cy="0" r="24" fill="#3B5E87" />
        <circle cx="0" cy="0" r="15" fill="#244263" />
        <circle cx="0" cy="0" r="7" fill="#13273D" />
      </g>

      <g transform="translate(148, 195)">
        <circle cx="-5" cy="-5" r="5" fill="#A8C8EA" />
        <circle cx="5" cy="-5" r="5" fill="#A8C8EA" />
        <circle cx="0" cy="4" r="5" fill="#88B0DA" />
        <circle cx="0" cy="-2" r="2" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

interface ButterflyColors {
  light: string;
  mid: string;
  deep: string;
}

function Butterfly({ id, size, flapDuration, colors }: { id: string; size: number; flapDuration: number; colors: ButterflyColors }) {
  const fw = `url(#${id}-fw)`;
  const hw = `url(#${id}-hw)`;
  const flap = `${flapDuration}s ease-in-out infinite`;

  return (
    <svg
      width={size}
      height={size * (40 / 48)}
      viewBox="0 0 48 40"
      style={{
        filter: 'drop-shadow(0 4px 9px rgba(30,51,85,0.22))',
        animation: `env-bob ${flap}`,
      }}
    >
      <defs>
        <linearGradient id={`${id}-fw`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={colors.light} />
          <stop offset="55%" stopColor={colors.mid} />
          <stop offset="100%" stopColor={colors.deep} />
        </linearGradient>
        <linearGradient id={`${id}-hw`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={colors.mid} />
          <stop offset="100%" stopColor={colors.deep} />
        </linearGradient>
      </defs>

      {/* Left wings (fold toward body line at x=24) */}
      <g style={{ transformOrigin: '24px 20px', animation: `env-flap ${flap}` }}>
        <path d="M23 19.5 C16.5 6 5 2 3 9 C1.5 14.5 11.5 21 22.5 21 Z" fill={fw} opacity="0.97" />
        <path d="M22.5 21 C13 20.5 5.5 24.5 7.5 30 C9.5 35 19 31.5 23 23.5 Z" fill={hw} opacity="0.92" />
        <path d="M21.5 19.5 C17 14 11.5 9.5 6.5 8.5" stroke="rgba(61,77,99,0.32)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
        <path d="M21.5 20.5 C16 19 10 21 8 25" stroke="rgba(61,77,99,0.26)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
        <circle cx="9.5" cy="10.5" r="1.7" fill="#FFFFFF" opacity="0.75" />
        <circle cx="13.5" cy="14.5" r="1" fill="#FFFFFF" opacity="0.55" />
      </g>

      {/* Right wings */}
      <g style={{ transformOrigin: '24px 20px', animation: `env-flap ${flap}` }}>
        <path d="M25 19.5 C31.5 6 43 2 45 9 C46.5 14.5 36.5 21 25.5 21 Z" fill={fw} opacity="0.97" />
        <path d="M25.5 21 C35 20.5 42.5 24.5 40.5 30 C38.5 35 29 31.5 25 23.5 Z" fill={hw} opacity="0.92" />
        <path d="M26.5 19.5 C31 14 36.5 9.5 41.5 8.5" stroke="rgba(61,77,99,0.32)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
        <path d="M26.5 20.5 C32 19 38 21 40 25" stroke="rgba(61,77,99,0.26)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
        <circle cx="38.5" cy="10.5" r="1.7" fill="#FFFFFF" opacity="0.75" />
        <circle cx="34.5" cy="14.5" r="1" fill="#FFFFFF" opacity="0.55" />
      </g>

      {/* Body + head */}
      <ellipse cx="24" cy="21.5" rx="1.7" ry="7" fill="#3D4D63" />
      <ellipse cx="24" cy="19.5" rx="1.1" ry="4" fill="#556A85" opacity="0.85" />
      <circle cx="24" cy="13.5" r="2" fill="#3D4D63" />

      {/* Antennae with curled tips */}
      <path d="M23.3 12 C21.5 8.5 19.5 6.8 17 6.4" stroke="#3D4D63" strokeWidth="0.9" fill="none" strokeLinecap="round" />
      <path d="M24.7 12 C26.5 8.5 28.5 6.8 31 6.4" stroke="#3D4D63" strokeWidth="0.9" fill="none" strokeLinecap="round" />
      <circle cx="17" cy="6.4" r="0.9" fill="#3D4D63" />
      <circle cx="31" cy="6.4" r="0.9" fill="#3D4D63" />
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
        background: 'linear-gradient(180deg, #A6B8CB 0%, #7E96AE 50%, #6C859D 100%)',
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
        @keyframes env-flap {
          0%, 100% { transform: scaleX(1) scaleY(1); }
          50% { transform: scaleX(0.3) scaleY(1.06); }
        }
        @keyframes env-bob {
          0%, 100% { transform: translateY(1px); }
          50% { transform: translateY(-1.5px); }
        }
        @keyframes env-hover-a {
          0%, 100% { transform: translate(0, 0); }
          22% { transform: translate(2.5vw, -6vh); }
          48% { transform: translate(-2vw, -2.5vh); }
          72% { transform: translate(1.5vw, 4.5vh); }
          88% { transform: translate(-1vw, 1vh); }
        }
        @keyframes env-hover-b {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-2.5vw, -5vh); }
          52% { transform: translate(2vw, -1.5vh); }
          78% { transform: translate(-1.5vw, 4vh); }
        }
        @keyframes env-hover-c {
          0%, 100% { transform: translate(0, 0); }
          30% { transform: translate(2vw, -4vh); }
          62% { transform: translate(-2.5vw, 0.5vh); }
          85% { transform: translate(1vw, 3.5vh); }
        }
        @keyframes env-sway {
          0%, 100% { transform: rotate(3deg) scale(1); }
          33% { transform: rotate(-5deg) scale(1.03); }
          66% { transform: rotate(6deg) scale(0.99); }
        }
        @keyframes env-dog-bob {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-7px) rotate(1.5deg); }
        }
        .env-dog {
          position: absolute;
          top: 50%;
          height: clamp(150px, min(34vh, 26vw), 280px);
        }
        .env-dog img {
          height: 100%;
          width: auto;
          display: block;
          filter: drop-shadow(0 10px 18px rgba(20,40,65,0.35));
          animation: env-dog-bob 5.2s ease-in-out infinite;
        }
        .env-dog-left { right: calc(50% + clamp(140px, min(30vw, 26vh), 240px)); transform: translateY(-32%); }
        .env-dog-right { left: calc(50% + clamp(140px, min(30vw, 26vh), 240px)); transform: translateY(-32%); }
        @media (max-width: 640px) {
          .env-dog { height: clamp(90px, 26vw, 130px); }
          .env-dog-left { right: calc(50% + 31vw); transform: translateY(-32%); }
          .env-dog-right { left: calc(50% + 31vw); transform: translateY(-32%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .env-butterfly { display: none; }
        }
      `}</style>

      {/* Dogs — Maxie & Bella sitting on either side of the envelope */}
      <div className="absolute inset-0 pointer-events-none z-[15] overflow-hidden" aria-hidden="true">
        {/* Bella — left of envelope, facing inward */}
        <div className="env-dog env-dog-left">
          <img src={bellaImg} alt="" />
        </div>
        {/* Maxie — right of envelope, facing inward */}
        <div className="env-dog env-dog-right">
          <img src={maxieImg} alt="" style={{ animationDelay: '-2.6s' }} />
        </div>
      </div>

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
              boxShadow: `0 0 10px 2px ${p.tint === '#C9A96A' ? 'rgba(184,154,95,0.6)' : 'rgba(255,255,255,0.65)'}`,
              animation: `env-twinkle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Butterflies — hovering in closed loops near the envelope, layered motion: hover drift, banking sway, wing flap */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
        {/* Butterfly 1 (Gold/Champagne) — right of envelope */}
        <div
          className="env-butterfly absolute"
          style={{
            top: '36%',
            left: 'calc(50% + clamp(150px, min(30vw, 27vh), 270px))',
            marginLeft: -32,
          }}
        >
          <div style={{ animation: 'env-hover-a 12s ease-in-out -3s infinite', willChange: 'transform' }}>
            <div style={{ animation: 'env-sway 4.6s ease-in-out -1s infinite' }}>
              <Butterfly id="bfly-gold" size={64} flapDuration={1.05} colors={{ light: '#F7E7BE', mid: '#EACD8F', deep: '#D2A75C' }} />
            </div>
          </div>
        </div>

        {/* Butterfly 2 (Soft Blue) — upper-left of envelope */}
        <div
          className="env-butterfly absolute"
          style={{
            top: '27%',
            left: 'calc(50% - clamp(170px, min(34vw, 30vh), 290px))',
            marginLeft: -26,
          }}
        >
          <div style={{ animation: 'env-hover-b 14s ease-in-out -6s infinite', willChange: 'transform' }}>
            <div style={{ animation: 'env-sway 3.8s ease-in-out -1.2s infinite' }}>
              <Butterfly id="bfly-blue" size={52} flapDuration={0.9} colors={{ light: '#DCEBFA', mid: '#B7D3EE', deep: '#8FB4DE' }} />
            </div>
          </div>
        </div>

        {/* Butterfly 3 (Pale Ivory-Blue, distant) — lower-left of envelope */}
        <div
          className="env-butterfly absolute"
          style={{
            top: '57%',
            left: 'calc(50% - clamp(160px, min(32vw, 28vh), 280px))',
            marginLeft: -21,
          }}
        >
          <div style={{ animation: 'env-hover-c 16s ease-in-out -9s infinite', willChange: 'transform' }}>
            <div style={{ animation: 'env-sway 5.4s ease-in-out -2s infinite' }}>
              <Butterfly id="bfly-pale" size={42} flapDuration={1.25} colors={{ light: '#F4F7FB', mid: '#D8E4F2', deep: '#AFC8E4' }} />
            </div>
          </div>
        </div>
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
            className="font-serif italic text-[#F7F4EC] tracking-wide mb-1"
            style={{
              fontSize: 'clamp(1.55rem, 7vw, 3rem)',
              textShadow: '0px 1px 3px rgba(44, 74, 120, 0.45)',
            }}
          >
            You are cordially invited
          </h1>
          <p
            className="font-sans text-[11px] md:text-xs tracking-[0.35em] text-[#F7F4EC]/85 uppercase font-semibold"
            style={{ textShadow: '0px 1px 2px rgba(44, 74, 120, 0.4)' }}
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
              background: '#2F4C77',
            }}
          >
            {/* 1. Base / Back Panel */}
            <div className="absolute inset-0 rounded-sm bg-[#2C4A78]" />

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
              <p className="font-serif text-xl md:text-3xl text-[#2C4A78] font-light tracking-wide">
                {weddingConfig.couple.groom}
              </p>
              <p className="font-serif italic text-sm md:text-lg text-[#B7A27A] my-0.5">&amp;</p>
              <p className="font-serif text-xl md:text-3xl text-[#2C4A78] font-light tracking-wide">
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
                background: 'linear-gradient(135deg, #2A4570 0%, #223A60 100%)',
                zIndex: 2,
              }}
            />

            {/* 4. Right Triangular Fold Shadow */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
                background: 'linear-gradient(225deg, #243E66 0%, #1D3457 100%)',
                zIndex: 2,
              }}
            />

            {/* 5. Bottom Triangular Flap */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)',
                background: 'linear-gradient(180deg, #3A5C8C 0%, #2C4A78 100%)',
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
                  background: 'linear-gradient(175deg, #3E6090 0%, #2F4F7E 100%)',
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
          className="font-sans text-[#F7F4EC] text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold animate-pulse"
          style={{
            marginTop: 'clamp(18px, 4.5vh, 48px)',
            opacity: isAnimating ? 0 : 1,
            transition: 'opacity 0.3s ease',
            textShadow: '0px 1px 2px rgba(44, 74, 120, 0.4)',
          }}
        >
          Click to Open
        </p>
      </div>
    </div>
  );
}
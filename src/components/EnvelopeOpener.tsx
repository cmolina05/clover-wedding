import { useState, useCallback } from 'react';
import { weddingConfig } from '../config/wedding';

type Phase = 'idle' | 'seal-pop' | 'flap-open' | 'card-rise' | 'expand' | 'fading';

export default function EnvelopeOpener({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>('idle');

  const triggerOpen = useCallback(() => {
    if (phase !== 'idle') return;

    // Phase 1: Seal pop (0ms)
    setPhase('seal-pop');

    // Phase 2: Flap opens (100ms)
    setTimeout(() => setPhase('flap-open'), 100);

    // Phase 3: Card rises (500ms)
    setTimeout(() => setPhase('card-rise'), 500);

    // Phase 4: Card expands (1400ms)
    setTimeout(() => setPhase('expand'), 1400);

    // Fade out (2000ms)
    setTimeout(() => setPhase('fading'), 2000);

    // Complete
    setTimeout(() => {
      onComplete();
    }, 2800);
  }, [phase, onComplete]);

  const isAnimating = phase !== 'idle';

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center select-none"
      style={{
        background: 'linear-gradient(180deg, #1C2D37 0%, #2E3E48 100%)',
        opacity: phase === 'fading' ? 0 : 1,
        transition: 'opacity 0.8s ease',
        pointerEvents: phase === 'fading' || phase === 'expand' ? 'none' : 'auto',
      }}
    >
      {/* ── Envelope wrapper with 3D perspective ────── */}
      <div
        className="relative"
        style={{ perspective: '1000px' }}
        onClick={triggerOpen}
      >
        <div
          className="relative"
          style={{
            width: 'clamp(280px, 60vw, 420px)',
            height: 'clamp(200px, 42vw, 300px)',
          }}
        >
          {/* ── Layer 1: Back pocket ──────────────── */}
          <div
            className="absolute inset-0 rounded-sm"
            style={{
              background: 'linear-gradient(175deg, #8FA9B8 0%, #7A9BAD 60%, #6A8D9C 100%)',
              boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.12), 0 20px 60px rgba(0,0,0,0.45), 0 6px 24px rgba(0,0,0,0.25)',
            }}
          />

          {/* ── Layer 2: Inner lining (visible after open) ── */}
          <div
            className="absolute inset-[3px] rounded-sm overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #FAF9F6 0%, #F0EDE6 40%, #E8E0D3 100%)',
              opacity: isAnimating ? 1 : 0,
              transition: 'opacity 0.4s ease 0.3s',
            }}
          >
            {/* Lining texture — faint diamond pattern */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 18px,
                  rgba(180,160,130,0.04) 18px,
                  rgba(180,160,130,0.04) 19px
                ), repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 18px,
                  rgba(180,160,130,0.04) 18px,
                  rgba(180,160,130,0.04) 19px
                )`,
              }}
            />
          </div>

          {/* ── Layer 3: Invitation card ──────────── */}
          <div
            className="absolute flex flex-col items-center justify-center rounded-sm overflow-hidden"
            style={{
              left: '6%',
              right: '6%',
              bottom: '8%',
              height: '78%',
              background: 'linear-gradient(170deg, #FFFEF9 0%, #FAF8F4 50%, #F5EFE6 100%)',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              transition: phase === 'card-rise'
                ? 'transform 0.7s cubic-bezier(0.34, 1.2, 0.64, 1), box-shadow 0.5s ease, z-index 0s'
                : phase === 'expand'
                  ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease'
                  : 'transform 0.4s ease, box-shadow 0.3s ease',
              transform: phase === 'card-rise'
                ? 'translateY(-80%)'
                : phase === 'expand'
                  ? 'translateY(-80%) scale(1.03)'
                  : 'translateY(0)',
              zIndex: phase === 'card-rise' || phase === 'expand' ? 10 : 1,
              ...(phase === 'card-rise' || phase === 'expand'
                ? { boxShadow: '0 12px 40px rgba(0,0,0,0.25), 0 4px 16px rgba(0,0,0,0.15)' }
                : {}),
            }}
          >
            {/* Card border accent */}
            <div
              className="absolute inset-[6px] rounded-sm pointer-events-none"
              style={{ border: '1px solid rgba(183,162,122,0.2)' }}
            />

            {/* Card content */}
            <p
              className="font-serif italic mb-1"
              style={{ fontSize: 'clamp(0.55rem, 1.3vw, 0.7rem)', letterSpacing: '0.18em', color: '#8A7B68' }}
            >
              Together with their families
            </p>

            <p
              className="font-serif"
              style={{ fontSize: 'clamp(1.3rem, 3.5vw, 2rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '0.04em', color: '#2B3338' }}
            >
              {weddingConfig.couple.groom}
            </p>

            <p
              className="font-serif italic my-1"
              style={{ fontSize: 'clamp(1rem, 2.2vw, 1.4rem)', fontWeight: 300, color: '#B7A27A' }}
            >
              &amp;
            </p>

            <p
              className="font-serif"
              style={{ fontSize: 'clamp(1.3rem, 3.5vw, 2rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '0.04em', color: '#2B3338' }}
            >
              {weddingConfig.couple.bride}
            </p>

            {/* Decorative divider */}
            <div className="flex items-center gap-2 my-2">
              <div className="w-6 h-px" style={{ background: 'rgba(183,162,122,0.35)' }} />
              <div className="w-1 h-1 rotate-45" style={{ background: 'rgba(183,162,122,0.5)' }} />
              <div className="w-6 h-px" style={{ background: 'rgba(183,162,122,0.35)' }} />
            </div>

            <p
              className="font-sans uppercase"
              style={{ fontSize: 'clamp(0.4rem, 0.9vw, 0.5rem)', letterSpacing: '0.25em', color: '#8A7B68' }}
            >
              {weddingConfig.dateFormatted}
            </p>
          </div>

          {/* ── Layer 4: Front pocket (opaque cover) ── */}
          <div
            className="absolute bottom-0 left-0 right-0 rounded-b-sm"
            style={{
              height: '52%',
              background: 'linear-gradient(175deg, #92AEBB 0%, #8FA9B8 30%, #7A9BAD 100%)',
              boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.15), inset 0 -1px 4px rgba(0,0,0,0.08)',
              opacity: isAnimating ? 0 : 1,
              transition: 'opacity 0.5s ease 0.35s',
              zIndex: 5,
            }}
          >
            {/* Pocket edge highlight */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.2) 50%, transparent 90%)' }}
            />

            {/* Gold calligraphy text on pocket */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
              <p
                className="font-serif italic text-center font-medium"
                style={{
                  fontSize: 'clamp(1.15rem, 3vw, 1.75rem)',
                  letterSpacing: '0.06em',
                  color: '#FAF9F6',
                  filter: 'drop-shadow(0px 1px 3px rgba(0,0,0,0.35))',
                }}
              >
                You are cordially invited
              </p>
            </div>
          </div>

          {/* ── Layer 5: Top flap ──────────────── */}
          <div
            className="absolute top-0 left-0 right-0 origin-top"
            style={{
              height: '52%',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isAnimating ? 'rotateX(-180deg)' : 'rotateX(0deg)',
              zIndex: 6,
            }}
          >
            {/* Flap front (outer face) */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                background: 'linear-gradient(175deg, #83A3B2 0%, #7A9BAD 50%, #6E91A2 100%)',
                backfaceVisibility: 'hidden',
              }}
            />
            {/* Flap front edge shadow — realistic fold */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                backfaceVisibility: 'hidden',
                boxShadow: 'inset 0 -6px 12px rgba(0,0,0,0.12), inset 0 -2px 4px rgba(0,0,0,0.06)',
              }}
            />
            {/* Flap back (inner lining, visible when open) */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                background: 'linear-gradient(180deg, #FAF9F6 0%, #F0EDE6 60%, #E8E0D3 100%)',
                backfaceVisibility: 'hidden',
                transform: 'rotateX(180deg)',
              }}
            />
          </div>

          {/* ── Layer 6: Wax seal ──────────────── */}
          <div
            className="absolute rounded-full flex items-center justify-center cursor-pointer"
            style={{
              width: 'clamp(44px, 9vw, 60px)',
              height: 'clamp(44px, 9vw, 60px)',
              top: '50%',
              left: '50%',
              zIndex: 7,
              transition: phase === 'seal-pop'
                ? 'transform 0.3s cubic-bezier(0.34, 1.5, 0.64, 1), opacity 0.3s ease'
                : 'transform 0.3s ease',
              transform: phase === 'seal-pop'
                ? 'translate(-50%, -50%) scale(0.85)'
                : isAnimating
                  ? 'translate(-50%, -50%) scale(0) opacity-0'
                  : 'translate(-50%, -50%) scale(1)',
              opacity: phase === 'seal-pop' ? 0 : 1,
              background: 'radial-gradient(circle at 38% 35%, #D4C4A0 0%, #B7A27A 35%, #9E8C6A 70%, #8A7B5C 100%)',
              boxShadow: '0 3px 12px rgba(0,0,0,0.35), 0 1px 4px rgba(0,0,0,0.2), inset 0 1px 3px rgba(255,255,255,0.25), inset 0 -1px 2px rgba(0,0,0,0.1)',
            }}
          >
            {/* Seal texture ring */}
            <div
              className="absolute rounded-full"
              style={{
                inset: '3px',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '50%',
              }}
            />
            {/* Embossed monogram */}
            <div className="text-center" style={{ lineHeight: 1 }}>
              <span
                className="font-serif block"
                style={{
                  fontSize: 'clamp(0.7rem, 1.6vw, 0.95rem)',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.85)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                }}
              >
                {weddingConfig.couple.groom[0]}
              </span>
              <span
                className="font-serif italic block"
                style={{
                  fontSize: 'clamp(0.45rem, 1vw, 0.6rem)',
                  color: 'rgba(255,255,255,0.6)',
                  margin: '-1px 0',
                }}
              >
                &amp;
              </span>
              <span
                className="font-serif block"
                style={{
                  fontSize: 'clamp(0.7rem, 1.6vw, 0.95rem)',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.85)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                }}
              >
                {weddingConfig.couple.bride[0]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hint text ──────────────────────────── */}
      <p
        className="mt-10 font-sans text-[10px] tracking-widest uppercase animate-pulse text-wedding-ivory/80"
        style={{
          opacity: isAnimating ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      >
        Tap wax seal to open
      </p>
    </div>
  );
}

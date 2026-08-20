import { useState, useEffect } from 'react';
import { weddingConfig } from '../config/wedding';
import HeroParticles from './HeroParticles';

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number; }

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isToday, setIsToday] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const handleScroll = () => { setParallaxY(window.scrollY * 0.35); };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const target = new Date(weddingConfig.date).getTime();
    const interval = setInterval(() => {
      const diff = target - Date.now();
      if (diff <= 0) { setIsToday(true); clearInterval(interval); }
      else setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const anim = (delay: string) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 1s ease ${delay}, transform 1s ease ${delay}`,
  });

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo — parallax */}
      <div className="absolute inset-0 will-change-transform" style={{ transform: `translateY(${parallaxY}px)` }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=2400')` }} />
      </div>

      <HeroParticles />

      {/* Deep dusty-blue overlay */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(29,52,65,0.80) 0%, rgba(61,90,107,0.55) 48%, rgba(243,237,228,0.98) 100%)'
      }} />

      {/* Subtle blue vignette */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 60%, rgba(29,52,65,0.30) 100%)'
      }} />

      {/* Ornamental frame */}
      <div className="absolute inset-0 pointer-events-none animate-frame hidden md:block">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[min(85%,56rem)] h-px bg-gradient-to-r from-transparent via-dusty-blue-light/50 to-transparent" />
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[min(85%,56rem)] h-px bg-gradient-to-r from-transparent via-dusty-blue-light/50 to-transparent" />
        <div className="absolute top-1/2 -translate-y-1/2 left-[7%] w-px h-[min(70%,38rem)] bg-gradient-to-b from-transparent via-dusty-blue-light/50 to-transparent" />
        <div className="absolute top-1/2 -translate-y-1/2 right-[7%] w-px h-[min(70%,38rem)] bg-gradient-to-b from-transparent via-dusty-blue-light/50 to-transparent" />
        <div className="absolute top-22 left-[calc(7%-6px)] w-3 h-3 border-t border-l border-dusty-blue-light/60" />
        <div className="absolute top-22 right-[calc(7%-6px)] w-3 h-3 border-t border-r border-dusty-blue-light/60" />
        <div className="absolute bottom-22 left-[calc(7%-6px)] w-3 h-3 border-b border-l border-dusty-blue-light/60" />
        <div className="absolute bottom-22 right-[calc(7%-6px)] w-3 h-3 border-b border-r border-dusty-blue-light/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-28 pb-24 w-full max-w-4xl mx-auto">
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-dusty-blue-100 mb-7 drop-shadow" style={anim('0.2s')}>
          Together with their families
        </p>

        <div style={anim('0.4s')}>
          <h1 className="font-serif font-light text-white drop-shadow-lg text-letterpress-dark"
            style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 1.05, letterSpacing: '0.03em' }}>
            {weddingConfig.couple.groom}
          </h1>
          <p className="font-serif italic text-dusty-blue-300 my-2 animate-ampersand"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300 }}>
            &amp;
          </p>
          <h1 className="font-serif font-light text-white drop-shadow-lg text-letterpress-dark"
            style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 1.05, letterSpacing: '0.03em' }}>
            {weddingConfig.couple.bride}
          </h1>
        </div>

        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-dusty-blue-100/90 mt-5 mb-1 drop-shadow" style={anim('0.6s')}>
          Are Getting Married
        </p>

        <div style={anim('0.75s')} className="my-7">
          <span className="inline-block border-y border-dusty-blue-300/60 py-2.5 px-12 font-serif text-sm tracking-[0.18em] text-white/90 bg-wedding-ivory/10 bg-paper-texture"
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.35)' }}>
            {weddingConfig.dateFormatted.toUpperCase()}
          </span>
        </div>

        {/* Countdown — cardstock blocks */}
        <div style={anim('0.9s')} className="mb-10">
          {isToday ? (
            <h2 className="font-serif text-3xl text-dusty-blue tracking-widest text-letterpress">TODAY IS THE DAY</h2>
          ) : (
            <>
              <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
                {[
                  { label: 'Days', val: timeLeft.days },
                  { label: 'Hours', val: timeLeft.hours },
                  { label: 'Min', val: timeLeft.minutes },
                  { label: 'Sec', val: timeLeft.seconds },
                ].map((item) => (
                  <div key={item.label}
                    className="flex flex-col items-center py-4 px-2 rounded-sm bg-wedding-ivory bg-paper-texture border border-dusty-blue-light/60 shadow-[0_8px_30px_-4px_rgba(95,125,140,0.15)]">
                    <span className="font-serif text-dusty-blue-dark text-letterpress" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', lineHeight: 1, fontWeight: 300 }}>
                      {String(item.val).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-dusty-blue-600 mt-1.5">{item.label}</span>
                  </div>
                ))}
              </div>

              <p className="font-serif italic text-sm text-dusty-blue-900/80 mt-5 tracking-wide" style={{ fontWeight: 300 }}>
                {timeLeft.days > 365 && "A love story years in the making…"}
                {timeLeft.days > 180 && timeLeft.days <= 365 && "The countdown to forever has begun."}
                {timeLeft.days > 100 && timeLeft.days <= 180 && "We're getting closer to our forever."}
                {timeLeft.days > 30 && timeLeft.days <= 100 && "Every day brings us nearer to our dream day."}
                {timeLeft.days > 7 && timeLeft.days <= 30 && "Just a few more sunsets until we say 'I do.'"}
                {timeLeft.days > 1 && timeLeft.days <= 7 && "This week changes everything."}
                {timeLeft.days === 1 && "Tomorrow is the day we've been waiting for."}
              </p>
            </>
          )}
        </div>

        {/* CTA */}
        <div style={anim('1.05s')}>
          <a href="#rsvp" id="hero-rsvp-btn"
            className="btn-shimmer rsvp-pulse inline-block px-14 py-4 text-[11px] tracking-[0.22em] uppercase font-sans text-wedding-white transition-all duration-500 rounded-sm"
            style={{ background: 'linear-gradient(135deg, #3D5A6B 0%, #5F7D8C 100%)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #2E4452 0%, #3D5A6B 100%)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #3D5A6B 0%, #5F7D8C 100%)')}>
            RSVP Now
          </a>
          <p className="mt-4 font-sans text-[10px] tracking-widest text-dusty-blue-700 uppercase drop-shadow-sm">
            Kindly respond by {weddingConfig.rsvpDeadline}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-dusty-blue-700/80">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-dusty-blue-700/70 to-transparent animate-pulse" />
      </div>
    </div>
  );
}

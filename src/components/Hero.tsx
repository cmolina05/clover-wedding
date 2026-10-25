import { useState, useEffect } from 'react';
import { weddingConfig } from '../config/wedding';
import HeroParticles from './HeroParticles';
import hero1 from '../assets/Hero1.jpg';

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number; }

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isToday, setIsToday] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const handleScroll = () => setParallaxY(Math.min(window.scrollY, window.innerHeight) * 0.2);
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

  const nameSize = 'clamp(2.5rem, min(6vw, 8.5vh), 4.75rem)';

  const message =
    timeLeft.days > 365 ? "A love story years in the making…" :
    timeLeft.days > 180 ? "The countdown to forever has begun." :
    timeLeft.days > 100 ? "We're getting closer to our forever." :
    timeLeft.days > 30 ? "Every day brings us nearer to our dream day." :
    timeLeft.days > 7 ? "Just a few more sunsets until we say 'I do.'" :
    timeLeft.days > 1 ? "This week changes everything." :
    timeLeft.days === 1 ? "Tomorrow is the day we've been waiting for." : '';

  return (
    <div className="relative w-full h-screen min-h-[640px] overflow-hidden">
      {/* Background photo — parallax (oversized so no gap appears) */}
      <div className="absolute left-0 right-0 -top-[20%] h-[120%] will-change-transform"
        style={{ transform: `translateY(${parallaxY}px)` }}>
        <img
          src={hero1}
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      <HeroParticles />

      {/* Overlay: dark at top & bottom where the text sits, clear through the middle band where the couple's faces are */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(30,51,85,0.72) 0%, rgba(40,66,105,0.42) 32%, rgba(58,90,133,0.08) 50%, rgba(58,90,133,0.08) 66%, rgba(30,51,85,0.82) 100%)'
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 60%, rgba(30,51,85,0.30) 100%)'
      }} />

      {/* TOP group — centered, ends well above the faces */}
      <div className="absolute z-10 inset-x-0 flex flex-col items-center text-center px-6" style={{ top: 'clamp(10rem, 12vh, 9rem)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-dusty-blue-100 mb-2 drop-shadow" style={anim('0.2s')}>
          Together with their families
        </p>

        <div style={anim('0.4s')} className="flex flex-col sm:flex-row items-center justify-center sm:gap-6">
          <h1 className="font-serif font-light text-white drop-shadow-lg text-letterpress-dark"
            style={{ fontSize: nameSize, lineHeight: 1.05, letterSpacing: '0.03em' }}>
            {weddingConfig.couple.groom}
          </h1>
          <span className="font-serif italic text-dusty-blue-300 animate-ampersand"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300 }}>
            &amp;
          </span>
          <h1 className="font-serif font-light text-white drop-shadow-lg text-letterpress-dark"
            style={{ fontSize: nameSize, lineHeight: 1.05, letterSpacing: '0.03em' }}>
            {weddingConfig.couple.bride}
          </h1>
        </div>

        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-dusty-blue-100/90 mt-2 drop-shadow" style={anim('0.6s')}>
          Are Getting Married
        </p>

        <div style={anim('0.75s')} className="mt-3">
          <span className="inline-block border-y border-dusty-blue-300/60 py-2 px-10 font-serif text-sm tracking-[0.18em] text-white/90"
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.35)' }}>
            {weddingConfig.dateFormatted.toUpperCase()}
          </span>
        </div>
      </div>

      {/* BOTTOM group — centered, starts below the faces */}
      <div className="absolute z-10 inset-x-0 flex flex-col items-center text-center px-6" style={{ bottom: '3.25rem' }}>
        <div style={anim('0.9s')}>
          {isToday ? (
            <h2 className="font-serif text-3xl text-wedding-white tracking-widest text-letterpress">TODAY IS THE DAY</h2>
          ) : (
            <>
              <div className="grid grid-cols-4 gap-2.5 max-w-[17rem] mx-auto">
                {[
                  { label: 'Days', val: timeLeft.days },
                  { label: 'Hours', val: timeLeft.hours },
                  { label: 'Min', val: timeLeft.minutes },
                  { label: 'Sec', val: timeLeft.seconds },
                ].map((item) => (
                  <div key={item.label}
                    className="flex flex-col items-center py-2 px-2 rounded-sm bg-wedding-ivory/50 backdrop-blur-sm border border-white/40 shadow-[0_12px_30px_-12px_rgba(30,51,85,0.35)] countdown-glow">
                    <span className="font-serif text-dusty-blue-dark text-letterpress" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1, fontWeight: 300 }}>
                      {String(item.val).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-dusty-blue-600 mt-1">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="font-serif italic text-sm text-white/85 mt-2 tracking-wide drop-shadow" style={{ fontWeight: 300 }}>
                {message}
              </p>
            </>
          )}
        </div>

        <div style={anim('1.05s')} className="mt-3">
          <a href="#rsvp" id="hero-rsvp-btn"
            className="btn-shimmer rsvp-pulse inline-block px-12 py-3 text-[11px] tracking-[0.22em] uppercase font-sans text-wedding-white transition-all duration-500 rounded-sm"
            style={{ background: 'linear-gradient(135deg, #3A5A85 0%, #5D7A9E 100%)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #2C4A78 0%, #3A5A85 100%)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #3A5A85 0%, #5D7A9E 100%)')}>
            RSVP Now
          </a>
          <p className="mt-2 font-sans text-[10px] tracking-widest text-white/80 uppercase drop-shadow">
            Kindly respond on or before {weddingConfig.rsvpDeadline}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute z-10 bottom-2 inset-x-0 flex flex-col items-center gap-1 pointer-events-none">
        <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-white/60">Scroll</span>
        <div className="w-px h-4 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { weddingConfig } from './config/wedding';
import { useScrollReveal } from './hooks/useScrollReveal';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import WeddingDetails from './components/WeddingDetails';
import Program from './components/Program';
import Entourage from './components/Entourage';
import DressCode from './components/DressCode';
import Gallery from './components/Gallery';
import RSVPForm from './components/RSVPForm';
import FAQAccordion from './components/FAQAccordion';
import Registry from './components/Registry';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import MusicPlayer from './components/MusicPlayer';
import Hashtag from './components/Hashtag';
import BackToTop from './components/BackToTop';
import AdminDashboardModal from './components/AdminDashboardModal';

export default function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Details', href: '#details' },
    { name: 'Entourage', href: '#entourage' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  return (
    <div className="bg-wedding-blue-white text-wedding-charcoal">
      <Preloader />
      <ScrollProgress />
      {/* ─── Navigation ─────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-600 ${navScrolled
            ? 'bg-dusty-blue-50/95 backdrop-blur-md shadow-soft py-4 border-b border-dusty-blue-100'
            : 'bg-transparent py-7'
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo / couple name */}
          <a
            href="#home"
            className={`font-serif text-base tracking-widest transition-colors duration-400 ${navScrolled ? 'text-dusty-blue-700' : 'text-white'
              }`}
          >
            {weddingConfig.couple.groom} <span className="italic text-wedding-gold">&</span> {weddingConfig.couple.bride}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] tracking-ultra uppercase font-sans transition-colors duration-300 hover:text-dusty-blue-400 ${navScrolled ? 'text-dusty-blue-600' : 'text-white/85'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden focus:outline-none transition-colors ${navScrolled ? 'text-dusty-blue-700' : 'text-white'}`}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className="md:hidden overflow-hidden transition-all duration-400"
          style={{ maxHeight: mobileMenuOpen ? '300px' : '0' }}
        >
          <div className="bg-dusty-blue-50/98 backdrop-blur-md border-t border-dusty-blue-100 px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[10px] tracking-ultra uppercase text-dusty-blue-600 hover:text-dusty-blue-800 py-2.5 transition-colors font-sans"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── Sections ─────────────────────────────────────────── */}
      <section id="home"><Hero /></section>

      {/* Welcome interlude */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #EBF4F7 0%, #D9E8EE 100%)' }}>
        <div className="max-w-2xl mx-auto text-center reveal">
          <div className="ornament">
            <div className="ornament-diamond" />
          </div>
          <p className="font-serif italic text-2xl md:text-3xl leading-relaxed mb-5" style={{ fontWeight: 300, color: '#3D5A6B' }}>
            "With joyful hearts, we invite you to celebrate the beginning of our forever."
          </p>
          <p className="text-sm leading-relaxed font-sans max-w-lg mx-auto" style={{ color: '#5F7D8C' }}>
            Your presence, love, and support mean everything to us. We are truly grateful to share this memorable step of our journey alongside our dearest family and friends.
          </p>
          <div className="ornament mt-8">
            <div className="ornament-diamond" />
          </div>
        </div>
      </section>

      <section id="story"><OurStory /></section>
      <section id="details"><WeddingDetails /></section>
      <section id="program"><Program /></section>
      <DressCode />
      <section id="entourage"><Entourage /></section>
      <section id="gallery"><Gallery /></section>
      <Hashtag />
      <section id="rsvp"><RSVPForm /></section>
      <FAQAccordion />
      <Registry />

      {/* ─── Footer ──────────────────────────────────────────── */}
      <footer className="py-20 text-center relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1C2D37 0%, #2E4452 100%)' }}>
        {/* Blue gradient top accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #3D5A6B, #7A9BAD, #B8CDD7, #7A9BAD, #3D5A6B)' }} />

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none parallax-watermark" aria-hidden="true">
          <span className="font-serif animate-float" style={{ fontSize: 'clamp(6rem, 15vw, 12rem)', letterSpacing: '-0.02em', color: 'rgba(122,155,173,0.06)' }}>
            Forever
          </span>
        </div>

        <div className="relative z-10">
          <p className="text-[10px] tracking-ultra uppercase font-sans mb-4" style={{ color: '#7A9BAD' }}>{weddingConfig.dateFormatted}</p>

          <h3 className="font-serif text-4xl md:text-5xl mb-3" style={{ fontWeight: 300, letterSpacing: '0.05em', color: '#EBF4F7' }}>
            {weddingConfig.couple.groom} <span className="italic" style={{ color: '#B8CDD7' }}>&</span> {weddingConfig.couple.bride}
          </h3>

          <p className="font-serif italic text-sm mb-10" style={{ fontWeight: 300, color: 'rgba(122,155,173,0.65)' }}>
            {weddingConfig.couple.hashtag}
          </p>

          <div className="flex justify-center gap-3 mb-12">
            <div className="w-10 h-px" style={{ background: 'rgba(122,155,173,0.35)' }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'rgba(122,155,173,0.55)' }} />
            <div className="w-10 h-px" style={{ background: 'rgba(122,155,173,0.35)' }} />
          </div>

          <p className="text-[10px] tracking-ultra uppercase font-sans mb-6" style={{ color: 'rgba(184,205,215,0.25)' }}>
            With love, always.
          </p>

          <button
            onClick={() => setIsAdminOpen(true)}
            className="text-[9px] tracking-ultra uppercase font-sans transition-colors"
            style={{ color: 'rgba(122,155,173,0.2)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(184,205,215,0.6)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(122,155,173,0.2)')}
          >
            Admin Portal
          </button>
        </div>
      </footer>

      {isAdminOpen && <AdminDashboardModal onClose={() => setIsAdminOpen(false)} />}
      <MusicPlayer />
      <BackToTop />
    </div>
  );
}
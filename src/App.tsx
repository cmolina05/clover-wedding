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
import EnvelopeOpener from './components/EnvelopeOpener';
import AmbientHearts from './components/AmbientHearts';
import MusicPlayer from './components/MusicPlayer';
import Hashtag from './components/Hashtag';
import BackToTop from './components/BackToTop';
import AdminDashboardModal from './components/AdminDashboardModal';

export default function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

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
    <div
      className="bg-paper-texture min-h-screen text-wedding-white relative isolate"
      style={{ background: 'linear-gradient(180deg, #93A8BD 0%, #7E96AE 40%, #6C859D 100%)' }}
    >
      <div className="fixed inset-0 -z-10 pointer-events-none page-atmosphere" aria-hidden="true" />
      {!envelopeOpened && <EnvelopeOpener onComplete={() => setEnvelopeOpened(true)} />}
      <ScrollProgress />
      <AmbientHearts />
      {/* ─── Navigation ─────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-600 ${navScrolled
            ? 'bg-[#6C859D]/92 bg-paper-texture backdrop-blur-md shadow-[0_10px_34px_-6px_rgba(30,51,85,0.45)] py-4 border-b border-white/20'
            : 'bg-transparent py-7'
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo / couple name */}
          <a
            href="#home"
            className={`font-serif text-base tracking-widest transition-colors duration-400 text-letterpress ${navScrolled ? 'text-wedding-white' : 'text-white'
              }`}
          >
            {weddingConfig.couple.groom} <span className="italic text-[#E7DCC2]">&</span> {weddingConfig.couple.bride}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] tracking-ultra uppercase font-sans transition-colors duration-300 hover:text-dusty-blue-100 ${navScrolled ? 'text-white/80' : 'text-white/85'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden focus:outline-none transition-colors ${navScrolled ? 'text-white' : 'text-white'}`}
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
          <div className="bg-[#6C859D]/95 bg-paper-texture backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[10px] tracking-ultra uppercase text-white/85 hover:text-white py-2.5 transition-colors font-sans"
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
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center reveal">
          <div className="ornament">
            <div className="ornament-diamond" />
          </div>
          <p className="font-serif italic text-2xl md:text-3xl leading-relaxed mb-5 text-letterpress" style={{ fontWeight: 300, color: '#F7F4EC' }}>
            "With joyful hearts, we invite you to celebrate the beginning of our forever."
          </p>
          <p className="text-sm leading-relaxed font-sans max-w-lg mx-auto" style={{ color: 'rgba(247, 244, 236, 0.75)' }}>
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
      <footer className="py-20 text-center relative overflow-hidden bg-paper-texture" style={{ background: 'linear-gradient(180deg, #1E3355 0%, #2C4A78 100%)' }}>
        {/* Blue gradient top accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #3A5A85, #7E96AE, #BBD0E4, #7E96AE, #3A5A85)' }} />

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none parallax-watermark" aria-hidden="true">
          <span className="font-serif animate-float" style={{ fontSize: 'clamp(6rem, 15vw, 12rem)', letterSpacing: '-0.02em', color: 'rgba(126,150,174,0.06)' }}>
            Forever
          </span>
        </div>

        <div className="relative z-10">
          <p className="text-[10px] tracking-ultra uppercase font-sans mb-4" style={{ color: '#7E96AE' }}>{weddingConfig.dateFormatted}</p>

          <h3 className="font-serif text-4xl md:text-5xl mb-3 text-letterpress-dark" style={{ fontWeight: 300, letterSpacing: '0.05em', color: '#EDF3F9' }}>
            {weddingConfig.couple.groom} <span className="italic" style={{ color: '#BBD0E4' }}>&</span> {weddingConfig.couple.bride}
          </h3>

          <p className="font-serif italic text-sm mb-10" style={{ fontWeight: 300, color: 'rgba(126,150,174,0.65)' }}>
            {weddingConfig.couple.hashtag}
          </p>

          <div className="flex justify-center gap-3 mb-12">
            <div className="w-10 h-px" style={{ background: 'rgba(126,150,174,0.35)' }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'rgba(126,150,174,0.55)' }} />
            <div className="w-10 h-px" style={{ background: 'rgba(126,150,174,0.35)' }} />
          </div>

          <p className="text-[10px] tracking-ultra uppercase font-sans mb-6" style={{ color: 'rgba(187,208,228,0.25)' }}>
            With love, always.
          </p>

          <button
            onClick={() => setIsAdminOpen(true)}
            className="text-[9px] tracking-ultra uppercase font-sans transition-colors"
            style={{ color: 'rgba(126,150,174,0.2)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(187,208,228,0.6)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(126,150,174,0.2)')}
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
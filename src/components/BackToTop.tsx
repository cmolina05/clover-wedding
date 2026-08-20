import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-110 group"
      style={{
        background: 'linear-gradient(135deg, #3D5A6B 0%, #5F7D8C 100%)',
        border: '1px solid rgba(184,205,215,0.3)',
        animation: 'fadeIn 0.3s ease',
      }}
    >
      <svg className="w-5 h-5 text-white/90 group-hover:text-wedding-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

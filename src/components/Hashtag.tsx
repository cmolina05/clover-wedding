
import { weddingConfig } from '../config/wedding';

export default function Hashtag() {
  const hashtag = weddingConfig.couple.hashtag;

  const shareOnInstagram = () => {
    const url = `https://www.instagram.com/explore/tags/${hashtag.replace('#', '')}/`;
    window.open(url, '_blank');
  };

  return (
    <div className="py-28 px-6 relative overflow-hidden bg-paper-texture"
      style={{ background: 'linear-gradient(180deg, #1C2D37 0%, #2E3E48 100%)' }}>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #B8CDD7 1px, transparent 0)', backgroundSize: '24px 24px' }}
        aria-hidden="true" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="reveal mb-12">
          <p className="text-[10px] tracking-ultra uppercase font-sans mb-3" style={{ color: 'rgba(184,205,215,0.5)' }}>
            Share Your Moments
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-letterpress-dark" style={{ fontWeight: 300, letterSpacing: '0.05em', color: '#EBF4F7' }}>
            Use Our Hashtag
          </h2>
          <div className="ornament mt-4"><div className="ornament-diamond" /></div>
        </div>

        <div className="reveal">
          <p className="font-serif italic text-lg mb-8" style={{ color: 'rgba(184,205,215,0.65)', fontWeight: 300 }}>
            Tag your photos with our wedding hashtag so we can see and cherish every moment through your eyes.
          </p>

          {/* Hashtag paper card */}
          <div className="relative inline-block border border-dusty-blue-light/30 rounded-sm px-10 py-5 mb-8 transition-all duration-300 hover:scale-105 cursor-pointer group bg-dusty-blue/20 bg-paper-texture backdrop-blur-sm shadow-[0_8px_30px_-4px_rgba(95,125,140,0.25)]"
            onClick={() => navigator.clipboard.writeText(hashtag)}>
            <div className="absolute inset-2 border border-dusty-blue-light/15 pointer-events-none rounded-sm" />
            <p className="font-serif text-2xl md:text-3xl tracking-wide group-hover:text-wedding-gold transition-colors duration-300 text-letterpress-dark relative z-10"
              style={{ color: '#8FB0C0', fontWeight: 300 }}>
              {hashtag}
            </p>
          </div>

          <p className="text-[10px] tracking-widest uppercase font-sans mb-8" style={{ color: 'rgba(184,205,215,0.3)' }}>
            Click to copy
          </p>

          {/* Instagram debossed paper button */}
          <div>
            <button onClick={shareOnInstagram}
              className="inline-flex items-center gap-3 border border-dusty-blue-light/40 bg-wedding-ivory/10 bg-paper-texture py-4 px-10 text-[10px] tracking-[0.2em] uppercase font-sans transition-all duration-400 hover:bg-wedding-white hover:text-dusty-blue-dark rounded-sm text-letterpress-dark shadow-[0_4px_16px_-2px_rgba(95,125,140,0.2)]"
              style={{ color: '#EBF4F7' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Share on Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

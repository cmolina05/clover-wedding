
import { weddingConfig } from '../config/wedding';

export default function Hashtag() {
  const hashtag = weddingConfig.couple.hashtag;

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(hashtag + ' Carlo & Roseth Wedding')}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="py-28 px-6 relative overflow-hidden bg-paper-texture"
      style={{ background: 'linear-gradient(180deg, #1E3355 0%, #1E3355 100%)' }}>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #BBD0E4 1px, transparent 0)', backgroundSize: '24px 24px' }}
        aria-hidden="true" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="reveal mb-12">
          <p className="text-[10px] tracking-ultra uppercase font-sans mb-3" style={{ color: 'rgba(187,208,228,0.5)' }}>
            Share Your Moments
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-letterpress-dark" style={{ fontWeight: 300, letterSpacing: '0.05em', color: '#EDF3F9' }}>
            Use Our Hashtag
          </h2>
          <div className="ornament mt-4"><div className="ornament-diamond" /></div>
        </div>

        <div className="reveal">
          <p className="font-serif italic text-lg mb-8" style={{ color: 'rgba(187,208,228,0.65)', fontWeight: 300 }}>
            Tag your photos with our wedding hashtag so we can see and cherish every moment through your eyes.
          </p>

          {/* Hashtag paper card */}
          <div className="relative inline-block border border-dusty-blue-light/30 rounded-sm px-10 py-5 mb-8 transition-all duration-300 hover:scale-105 cursor-pointer group bg-dusty-blue/20 bg-paper-texture backdrop-blur-sm shadow-[0_18px_44px_-12px_rgba(0,0,0,0.35)]"
            onClick={() => navigator.clipboard.writeText(hashtag)}>
            <div className="absolute inset-2 border border-dusty-blue-light/15 pointer-events-none rounded-sm" />
            <p className="font-serif text-2xl md:text-3xl tracking-wide group-hover:text-wedding-gold transition-colors duration-300 text-letterpress-dark relative z-10"
              style={{ color: '#A9CBE9', fontWeight: 300 }}>
              {hashtag}
            </p>
          </div>

          <p className="text-[10px] tracking-widest uppercase font-sans mb-8" style={{ color: 'rgba(187,208,228,0.3)' }}>
            Click to copy
          </p>

          {/* Facebook share button */}
          <div>
            <button onClick={shareOnFacebook}
              className="inline-flex items-center gap-3 border border-dusty-blue-light/40 bg-wedding-ivory/10 bg-paper-texture py-4 px-10 text-[10px] tracking-[0.2em] uppercase font-sans transition-all duration-400 hover:bg-wedding-white hover:text-dusty-blue-dark rounded-sm text-letterpress-dark shadow-[0_10px_28px_-8px_rgba(0,0,0,0.40)]"
              style={{ color: '#EDF3F9' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Share to Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

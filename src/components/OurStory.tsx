
import { useState } from 'react';
import { weddingConfig } from '../config/wedding';

interface LightboxState {
  images: string[];
  index: number;
  title: string;
}

export default function OurStory() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const openLightbox = (images: string[], index: number, title: string) => {
    setImgLoaded(false);
    setLightbox({ images, index, title });
  };

  const closeLightbox = () => setLightbox(null);

  const navigate = (dir: number) => {
    if (!lightbox) return;
    setImgLoaded(false);
    setLightbox({ ...lightbox, index: (lightbox.index + dir + lightbox.images.length) % lightbox.images.length });
  };

  return (
    <div className="py-28 px-6 bg-wedding-ivory bg-paper-texture">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-wedding-gold font-sans mb-3">How It All Began</p>
          <h2 className="section-title text-letterpress">Our Story</h2>
          <div className="ornament mt-4"><div className="ornament-diamond" /></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-dusty-blue-light to-transparent hidden md:block" />

          <div className="space-y-16">
            {weddingConfig.story.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index}
                  className={`reveal reveal-delay-${Math.min(index + 1, 4)} md:flex items-center gap-8 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${isLeft ? 'md:flex md:justify-end' : ''}`}>
                    <div className={`card-lift relative bg-wedding-ivory bg-paper-texture border border-dusty-blue-light/60 rounded-sm shadow-[0_8px_30px_-4px_rgba(95,125,140,0.15)] overflow-hidden ${isLeft ? 'md:text-right' : ''} w-full md:max-w-lg`}>
                      <div className="absolute inset-2 border border-dusty-blue-light/20 pointer-events-none rounded-sm" />

                      {item.images && item.images.length > 0 && (
                        <div className="grid grid-cols-2 gap-1">
                          {item.images.slice(0, 4).map((src, imgIdx) => (
                            <div key={imgIdx} className="aspect-square overflow-hidden cursor-pointer"
                              onClick={() => openLightbox(item.images!, imgIdx, item.title)}>
                              <img src={src} alt={`${item.title} ${imgIdx + 1}`} loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                            </div>
                          ))}
                        </div>
                      )}

                      <div className={`p-8 relative z-10 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                        <span className="block font-serif mb-2"
                          style={{ fontSize: '3rem', color: '#D9E3E8', lineHeight: 1, fontWeight: 300, letterSpacing: '-0.02em' }}>
                          {item.year}
                        </span>
                        <h3 className="font-serif text-xl text-dusty-blue-dark mb-2 text-letterpress">{item.title}</h3>
                        <p className="text-sm text-wedding-charcoal/65 leading-relaxed font-sans">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex w-4 flex-shrink-0 items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-wedding-gold border-2 border-wedding-ivory shadow-sm" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(26, 28, 32, 0.92)', backdropFilter: 'blur(8px)', animation: 'fadeIn 0.3s ease' }}
          onClick={closeLightbox}>
          <button className="absolute top-6 right-6 text-wedding-white/70 hover:text-wedding-white transition-colors z-10"
            onClick={closeLightbox} aria-label="Close">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {lightbox.images.length > 1 && (
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-wedding-white/60 hover:text-wedding-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigate(-1); }} aria-label="Previous">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {lightbox.images.length > 1 && (
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-wedding-white/60 hover:text-wedding-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigate(1); }} aria-label="Next">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div className="relative max-w-[85vw] max-h-[80vh]" onClick={(e) => e.stopPropagation()}
            style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.4s ease' }}>
            <img src={lightbox.images[lightbox.index]} alt={lightbox.title} onLoad={() => setImgLoaded(true)}
              className="max-w-full max-h-[80vh] rounded-sm shadow-2xl object-contain border border-dusty-blue-light/20" />
            <p className="mt-3 text-center text-[10px] tracking-widest uppercase text-wedding-white/40 font-sans">
              {lightbox.title} — {lightbox.index + 1}/{lightbox.images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

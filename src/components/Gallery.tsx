import { useState } from 'react';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=900',
    alt: 'Wedding couple in embrace',
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=900',
    alt: 'Ceremony aisle',
  },
  {
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=900',
    alt: 'Couple portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=900',
    alt: 'Wedding flowers',
  },
  {
    src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=900',
    alt: 'Reception decor',
  },
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=900',
    alt: 'Wedding rings',
  },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const openModal = (photo: { src: string; alt: string }) => {
    setImgLoaded(false);
    setSelectedImg(photo);
  };

  return (
    <div className="py-28 px-6 bg-wedding-ivory">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-wedding-gold font-sans mb-3">Moments Captured</p>
          <h2 className="section-title">Gallery</h2>
          <div className="ornament mt-4">
            <div className="ornament-diamond" />
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => openModal(photo)}
              className={`reveal reveal-delay-${Math.min((idx % 3) + 1, 4)} img-hover-zoom rounded-sm overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-shadow duration-400 ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ aspectRatio: idx === 0 ? '4/3' : '1/1' }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ minHeight: '200px' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: 'rgba(26, 28, 32, 0.92)',
            backdropFilter: 'blur(8px)',
            animation: 'fadeIn 0.3s ease',
          }}
          onClick={() => setSelectedImg(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-wedding-white/70 hover:text-wedding-white transition-colors"
            onClick={() => setSelectedImg(null)}
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
            style={{
              opacity: imgLoaded ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          >
            <img
              src={selectedImg.src}
              alt={selectedImg.alt}
              onLoad={() => setImgLoaded(true)}
              className="max-w-[90vw] max-h-[85vh] rounded-sm shadow-2xl object-contain"
            />
            <p className="mt-3 text-center text-[10px] tracking-widest uppercase text-wedding-white/40 font-sans">
              {selectedImg.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
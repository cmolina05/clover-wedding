import { useState } from 'react';

const photos = [
  { src: 'public/assets/gallery/1.jpg', alt: 'Couple with a horse' },
  { src: 'public/assets/gallery/2.jpg', alt: 'Couple in the forest' },
  { src: 'public/assets/gallery/3.jpg', alt: 'Bride and Groom' },
  { src: 'public/assets/gallery/4.jpg', alt: 'Couple in the mountains' },
  { src: 'public/assets/gallery/5.jpg', alt: 'Couple portrait' },
  { src: 'public/assets/gallery/6.jpg', alt: 'Bride and Groom' },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const openModal = (photo: { src: string; alt: string }) => {
    setImgLoaded(false);
    setSelectedImg(photo);
  };

  return (
    <div className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-[#E7DCC2] font-sans mb-3">Moments Captured</p>
          <h2 className="section-title text-letterpress">Gallery</h2>
          <div className="ornament mt-4"><div className="ornament-diamond" /></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, idx) => (
            <div key={idx} onClick={() => openModal(photo)}
              className={`reveal reveal-delay-${Math.min((idx % 3) + 1, 4)} img-hover-zoom rounded-sm overflow-hidden cursor-pointer shadow-[0_18px_44px_-12px_rgba(30,51,85,0.38)] hover:shadow-[0_24px_54px_-14px_rgba(30,51,85,0.46)] transition-shadow duration-400 border border-dusty-blue-light/30 ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ aspectRatio: idx === 0 ? '4/3' : '1/1' }}>
              <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-full object-cover" style={{ minHeight: '200px' }} />
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div id="gallery-lightbox" className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(26, 28, 32, 0.92)', backdropFilter: 'blur(8px)', animation: 'fadeIn 0.3s ease' }}
          onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-wedding-white/70 hover:text-wedding-white transition-colors"
            onClick={() => setSelectedImg(null)} aria-label="Close">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative" onClick={(e) => e.stopPropagation()}
            style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.4s ease' }}>
            <img src={selectedImg.src} alt={selectedImg.alt} onLoad={() => setImgLoaded(true)}
              className="max-w-[90vw] max-h-[85vh] rounded-sm shadow-2xl object-contain border border-dusty-blue-light/20" />
            <p className="mt-3 text-center text-[10px] tracking-widest uppercase text-wedding-white/40 font-sans">{selectedImg.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}


import { useState } from 'react';
import { weddingConfig } from '../config/wedding';

export default function SaveTheDate() {
  const [copied, setCopied] = useState(false);
  const { groom, bride, hashtag } = weddingConfig.couple;

  const shareUrl = window.location.href;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${groom} & ${bride} — Save the Date`,
          text: `You're invited! Save the date for ${groom} & ${bride}'s wedding on ${weddingConfig.dateFormatted}.`,
          url: shareUrl,
        });
      } catch {
        // Share cancelled or unavailable; nothing to do
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="py-28 px-6 bg-wedding-ivory">
      <div className="max-w-3xl mx-auto text-center">

        <div className="reveal mb-16">
          <p className="text-[10px] tracking-ultra uppercase text-wedding-gold font-sans mb-3">Spread the Word</p>
          <h2 className="section-title">Save the Date</h2>
          <div className="ornament mt-4">
            <div className="ornament-diamond" />
          </div>
        </div>

        {/* Card */}
        <div
          id="save-the-date-card"
          className="reveal relative mx-auto max-w-md overflow-hidden rounded-sm shadow-card"
          style={{
            background: 'linear-gradient(160deg, #1C2D37 0%, #2E4452 40%, #3D5A6B 100%)',
            border: '1px solid rgba(184,205,215,0.2)',
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l" style={{ borderColor: 'rgba(184,205,215,0.25)' }} />
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r" style={{ borderColor: 'rgba(184,205,215,0.25)' }} />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l" style={{ borderColor: 'rgba(184,205,215,0.25)' }} />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r" style={{ borderColor: 'rgba(184,205,215,0.25)' }} />

          <div className="px-10 py-14 relative z-10">
            <p className="font-sans text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: 'rgba(184,205,215,0.5)' }}>
              Together with their families
            </p>

            <h3 className="font-serif text-5xl md:text-6xl mb-1" style={{ fontWeight: 300, color: '#EBF4F7', letterSpacing: '0.04em' }}>
              {groom}
            </h3>
            <p className="font-serif italic text-2xl my-2" style={{ fontWeight: 300, color: '#B7A27A', letterSpacing: '0.2em' }}>
              &amp;
            </p>
            <h3 className="font-serif text-5xl md:text-6xl mb-8" style={{ fontWeight: 300, color: '#EBF4F7', letterSpacing: '0.04em' }}>
              {bride}
            </h3>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-px" style={{ background: 'rgba(184,205,215,0.3)' }} />
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: '#B7A27A' }} />
              <div className="w-12 h-px" style={{ background: 'rgba(184,205,215,0.3)' }} />
            </div>

            <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: 'rgba(184,205,215,0.5)' }}>
              Are getting married
            </p>

            <p className="font-serif text-xl tracking-wide" style={{ fontWeight: 300, color: '#EBF4F7' }}>
              {weddingConfig.dateFormatted}
            </p>

            <p className="font-serif italic text-sm mt-8" style={{ fontWeight: 300, color: 'rgba(184,205,215,0.4)' }}>
              {hashtag}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 border border-dusty-blue-dark/40 py-3.5 px-8 text-[10px] tracking-[0.18em] uppercase font-sans text-dusty-blue-dark hover:bg-dusty-blue-dark hover:text-wedding-white hover:border-dusty-blue-dark transition-all duration-400"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            {copied ? 'Link Copied!' : 'Share Invitation'}
          </button>
        </div>

      </div>
    </div>
  );
}

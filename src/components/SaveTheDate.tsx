import { useState } from 'react';
import { weddingConfig } from '../config/wedding';

export default function SaveTheDate() {
  const [copied, setCopied] = useState(false);
  const { groom, bride, hashtag } = weddingConfig.couple;
  const config = weddingConfig.saveTheDate;

  const shareUrl = config?.youtubeUrl || window.location.href;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${groom} & ${bride} — Save the Date`,
          text: `Watch our Save the Date video for ${groom} & ${bride}'s wedding on ${weddingConfig.dateFormatted}!`,
          url: shareUrl,
        });
      } catch {
        // Share cancelled or unavailable
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const embedUrl = config?.embedUrl || 'https://www.youtube.com/embed/HUxVK75jWOE';
  const watchUrl = config?.youtubeUrl || 'https://youtu.be/HUxVK75jWOE';

  return (
    <div className="py-10 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-[#E7DCC2] font-sans mb-3">
            {config?.kicker || 'Pre-Wedding Film'}
          </p>
          <h2 className="section-title text-letterpress">
            {config?.title || 'Save the Date'}
          </h2>
          <div className="ornament mt-4">
            <div className="ornament-diamond" />
          </div>
          {config?.subtitle && (
            <p className="text-sm leading-relaxed font-sans max-w-lg mx-auto mt-4" style={{ color: 'rgba(247, 244, 236, 0.75)' }}>
              {config.subtitle}
            </p>
          )}
        </div>

        {/* Video Player Card */}
        <div
          id="save-the-date-video"
          className="reveal relative rounded-sm p-2 sm:p-3 md:p-4 shadow-[0_24px_54px_-14px_rgba(30,51,85,0.46)] card-lift"
          style={{
            background: 'linear-gradient(160deg, rgba(30,51,85,0.75) 0%, rgba(44,74,120,0.65) 100%)',
            border: '1px solid rgba(231,220,194,0.3)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {/* Ornate corner accents */}
          <div className="absolute top-2 left-2 w-4 sm:w-6 h-4 sm:h-6 border-t border-l border-[#E7DCC2]/60 pointer-events-none" />
          <div className="absolute top-2 right-2 w-4 sm:w-6 h-4 sm:h-6 border-t border-r border-[#E7DCC2]/60 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-4 sm:w-6 h-4 sm:h-6 border-b border-l border-[#E7DCC2]/60 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 sm:w-6 h-4 sm:h-6 border-b border-r border-[#E7DCC2]/60 pointer-events-none" />

          {/* 16:9 Video Embed Container */}
          <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black/60 shadow-inner">
            <iframe
              src={embedUrl}
              title={`${groom} & ${bride} — Save the Date Video`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Video Footer Metadata & Actions */}
          <div className="mt-4 sm:mt-5 px-1 sm:px-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-serif text-lg tracking-wide text-[#F7F4EC]">
                {groom} <span className="italic text-[#E7DCC2]">&</span> {bride}
              </p>
              <p className="font-sans text-[11px] tracking-wider uppercase text-white/70">
                {weddingConfig.dateFormatted} • <span className="italic lowercase font-serif tracking-normal text-[#E7DCC2]">{hashtag}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-[10px] tracking-wider uppercase font-sans rounded-sm border border-white/20 text-white/90 hover:text-white hover:border-[#E7DCC2] hover:bg-[#E7DCC2]/10 transition-colors"
                title="Watch on YouTube"
              >
                <svg className="w-3.5 h-3.5 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-[10px] tracking-wider uppercase font-sans rounded-sm border border-[#E7DCC2]/40 text-[#E7DCC2] hover:bg-[#E7DCC2] hover:text-[#1E3355] transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

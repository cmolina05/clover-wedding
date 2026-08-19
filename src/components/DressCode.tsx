import React from 'react';
import { weddingConfig } from '../config/wedding';

export default function DressCode() {
  return (
    <div className="py-28 px-6 bg-wedding-ivory">
      <div className="max-w-3xl mx-auto text-center">

        <div className="reveal mb-20">
          <p className="text-[10px] tracking-ultra uppercase text-wedding-gold font-sans mb-3">Attire Guide</p>
          <h2 className="section-title">Dress Code</h2>
          <p className="text-xs tracking-ultra uppercase text-dusty-blue-dark font-sans mt-2 mb-4">
            {weddingConfig.dressCode.title}
          </p>
          <div className="ornament mt-4">
            <div className="ornament-diamond" />
          </div>
        </div>

        <p className="reveal text-sm text-wedding-charcoal/75 max-w-lg mx-auto leading-relaxed font-sans mb-16">
          {weddingConfig.dressCode.description}
        </p>

        {/* Swatches */}
        <div className="reveal flex flex-wrap justify-center gap-10">
          {weddingConfig.dressCode.swatches.map((swatch, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${Math.min(idx + 1, 4)} flex flex-col items-center gap-3 group`}
            >
              <div
                className="w-16 h-16 rounded-full shadow-card group-hover:shadow-card-hover transition-all duration-400 group-hover:scale-110 border-2 border-white"
                style={{ backgroundColor: swatch.hex }}
              />
              <span className="text-[9px] tracking-widest uppercase text-wedding-charcoal/60 font-sans">{swatch.name}</span>
            </div>
          ))}
        </div>

        {/* Gentle note */}
        <p className="reveal mt-16 text-[11px] tracking-wide text-wedding-charcoal/40 font-serif italic">
          Please avoid wearing white or black, to help our couple stand out.
        </p>
      </div>
    </div>
  );
}
import React from 'react';
import { weddingConfig } from '../config/wedding';

export default function Registry() {
  return (
    <div className="py-28 px-6 bg-wedding-ivory relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #5F7D8C 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">

        <div className="reveal mb-16">
          <p className="text-[10px] tracking-ultra uppercase text-wedding-gold font-sans mb-3">Bless the Couple</p>
          <h2 className="section-title">Gift &amp; Registry</h2>
          <div className="ornament mt-4">
            <div className="ornament-diamond" />
          </div>
        </div>

        {/* Note */}
        <div className="reveal mb-12">
          <div className="inline-block border border-dusty-blue-light/50 rounded-sm px-8 py-6 bg-wedding-white/70 shadow-card max-w-lg">
            <p className="font-serif italic text-lg text-dusty-blue-dark leading-relaxed" style={{ fontWeight: 300 }}>
              "{weddingConfig.registry.note}"
            </p>
          </div>
        </div>

        {/* Account cards */}
        <div className="reveal grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
          {weddingConfig.registry.accounts.map((acc, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${idx + 1} card-lift bg-wedding-white border border-dusty-blue-light rounded-sm shadow-card overflow-hidden`}
            >
              <div className="h-[2px] bg-gold-gradient" />
              <div className="p-6 text-left">
                <p className="text-[9px] tracking-ultra uppercase text-wedding-gold font-sans font-semibold mb-2">{acc.type}</p>
                <p className="text-sm text-wedding-charcoal font-sans leading-relaxed">{acc.details}</p>
                {acc.note && (
                  <p className="text-[10px] text-wedding-charcoal/50 font-sans mt-2 italic">{acc.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
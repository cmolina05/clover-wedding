import React from 'react';
import { weddingConfig } from '../config/wedding';

export default function Entourage() {
  return (
    <div className="py-28 px-6 bg-wedding-white">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-wedding-gold font-sans mb-3">With Gratitude</p>
          <h2 className="section-title">Entourage</h2>
          <div className="ornament mt-4">
            <div className="ornament-diamond" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {weddingConfig.entourage.map((group, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${Math.min(idx + 1, 4)} card-lift bg-wedding-ivory border border-dusty-blue-light/50 rounded-sm shadow-card overflow-hidden`}
            >
              {/* Category header */}
              <div className="bg-dusty-blue-mist px-8 py-5 border-b border-dusty-blue-light/40">
                <h3 className="font-serif text-xl text-dusty-blue-dark tracking-wide" style={{ fontWeight: 400 }}>
                  {group.category}
                </h3>
              </div>

              {/* Members */}
              <div className="px-8 py-6 space-y-4">
                {group.members.map((member, mIdx) => (
                  <div key={mIdx} className="flex items-center justify-between border-b border-dusty-blue-light/30 pb-3 last:border-0 last:pb-0">
                    <p className="font-serif text-base text-wedding-charcoal">{member.name}</p>
                    <span className="text-[9px] tracking-widest uppercase text-wedding-gold font-sans ml-4 flex-shrink-0">
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { weddingConfig } from '../config/wedding';

export default function OurStory() {
  return (
    <div className="py-28 px-6 bg-wedding-ivory">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-wedding-gold font-sans mb-3">How It All Began</p>
          <h2 className="section-title">Our Story</h2>
          <div className="ornament mt-4">
            <div className="ornament-diamond" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-dusty-blue-light to-transparent hidden md:block" />

          <div className="space-y-16">
            {weddingConfig.story.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`reveal reveal-delay-${Math.min(index + 1, 4)} md:flex items-center gap-8 ${isLeft ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="card-lift bg-wedding-white border border-dusty-blue-light/60 p-8 rounded-sm shadow-card inline-block w-full">
                      <span
                        className="block font-serif mb-2"
                        style={{
                          fontSize: '3rem',
                          color: '#D9E3E8',
                          lineHeight: 1,
                          fontWeight: 300,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {item.year}
                      </span>
                      <h3 className="font-serif text-xl text-dusty-blue-dark mb-2">{item.title}</h3>
                      <p className="text-sm text-wedding-charcoal/65 leading-relaxed font-sans">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-4 flex-shrink-0 items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-wedding-gold border-2 border-wedding-ivory shadow-sm" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
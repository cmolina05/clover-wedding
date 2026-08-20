import { useState } from 'react';
import { weddingConfig } from '../config/wedding';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="py-28 px-6 bg-wedding-white bg-paper-texture">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-wedding-gold font-sans mb-3">Need to Know</p>
          <h2 className="section-title text-letterpress">FAQ</h2>
          <div className="ornament mt-4"><div className="ornament-diamond" /></div>
        </div>

        <div className="space-y-3">
          {weddingConfig.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.question}
                className={`border rounded-sm overflow-hidden transition-shadow duration-300 bg-wedding-ivory bg-paper-texture ${
                  isOpen ? 'border-dusty-blue-dark/30 shadow-[0_8px_30px_-4px_rgba(95,125,140,0.15)]' : 'border-dusty-blue-light/60'
                }`}>
                <button type="button" id={`faq-${idx}`}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 bg-wedding-ivory bg-paper-texture hover:bg-dusty-blue-mist transition-colors duration-300"
                  aria-expanded={isOpen} aria-controls={`faq-panel-${idx}`}>
                  <span className="font-serif text-base text-dusty-blue-800 leading-snug text-letterpress">{faq.question}</span>
                  <span className="flex-shrink-0 w-5 h-5 rounded-full border border-dusty-blue-dark/40 flex items-center justify-center text-dusty-blue-dark transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }} aria-hidden="true">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16M4 12h16" />
                    </svg>
                  </span>
                </button>

                <div id={`faq-panel-${idx}`} role="region" aria-labelledby={`faq-${idx}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 py-5 text-sm text-dusty-blue-700 leading-relaxed font-sans border-t border-dusty-blue-light/40 bg-wedding-white bg-paper-texture">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

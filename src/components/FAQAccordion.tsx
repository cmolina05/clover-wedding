import { useState } from 'react';
import { weddingConfig } from '../config/wedding';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="py-28 px-6 veil-deep">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-[#E7DCC2] font-sans mb-3">Need to Know</p>
          <h2 className="section-title text-letterpress">FAQ</h2>
          <div className="ornament mt-4"><div className="ornament-diamond" /></div>
        </div>

        <div className="space-y-3">
          {weddingConfig.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.question}
                className={`border rounded-sm overflow-hidden transition-shadow duration-300 bg-wedding-ivory bg-paper-texture ${isOpen ? 'border-dusty-blue-dark/30 shadow-[0_18px_44px_-12px_rgba(30,51,85,0.38)]' : 'border-dusty-blue-light/60'
                  }`}>
                <button type="button" id={`faq-${idx}`}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className={`w-full text-left px-6 py-5 flex justify-between items-center gap-4 bg-wedding-ivory bg-paper-texture hover:bg-dusty-blue-mist transition-colors duration-300 ${isOpen ? 'bg-[#F2EEE2]' : ''
                    }`}
                  aria-expanded={isOpen} aria-controls={`faq-panel-${idx}`}>
                  <span className={`font-serif text-base leading-snug text-letterpress transition-colors duration-300 ${isOpen ? 'text-dusty-blue-900' : 'text-dusty-blue-800'
                    }`}>{faq.question}</span>
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${isOpen ? 'border-[#B9A26B] text-[#B9A26B] bg-white/60' : 'border-dusty-blue-dark/40 text-dusty-blue-dark'
                    }`}
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }} aria-hidden="true">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16M4 12h16" />
                    </svg>
                  </span>
                </button>

                <div id={`faq-panel-${idx}`} role="region" aria-labelledby={`faq-${idx}`}
                  className={`transition-all duration-300 ease-out ${isOpen ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="relative border-t border-dusty-blue-light/40 bg-gradient-to-b from-[#DCE7F1]/80 to-[#EDF3F9]/80">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px]"
                      style={{ background: 'linear-gradient(180deg, #C9A96A 0%, rgba(201,169,106,0.12) 100%)' }} />
                    <p className="pl-7 pr-6 py-5 text-sm text-[#2C4A78] leading-relaxed font-sans">
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

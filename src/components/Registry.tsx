
import { weddingConfig } from '../config/wedding';

export default function Registry() {
  return (
    <div className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #F7F4EC 1px, transparent 0)', backgroundSize: '28px 28px' }}
        aria-hidden="true" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="reveal mb-16">
          <p className="text-[10px] tracking-ultra uppercase text-[#E7DCC2] font-sans mb-3">Bless the Couple</p>
          <h2 className="section-title text-letterpress">Gift &amp; Registry</h2>
          <div className="ornament mt-4"><div className="ornament-diamond" /></div>
        </div>

        <div className="reveal mb-12">
          <div className="relative inline-block border border-dusty-blue-light/50 rounded-sm px-8 py-6 bg-wedding-ivory bg-paper-texture shadow-[0_18px_44px_-12px_rgba(30,51,85,0.38)] max-w-lg">
            <div className="absolute inset-2 border border-dusty-blue-light/20 pointer-events-none rounded-sm" />
            <p className="font-serif italic text-lg text-dusty-blue-dark leading-relaxed relative z-10 text-letterpress" style={{ fontWeight: 300 }}>
              "{weddingConfig.registry.note}"
            </p>
          </div>
        </div>

        <div className="reveal flex flex-col gap-4 max-w-sm mx-auto">
          {weddingConfig.registry.accounts.map((acc, idx) => (
            <div key={idx}
              className={`reveal reveal-delay-${idx + 1} card-lift relative bg-wedding-ivory bg-paper-texture border border-dusty-blue-light rounded-sm shadow-[0_18px_44px_-12px_rgba(30,51,85,0.38)] overflow-hidden`}>
              <div className="absolute inset-2 border border-dusty-blue-light/20 pointer-events-none rounded-sm" />
              <div className="h-[2px] bg-gold-gradient" />
              <div className="px-8 py-6 text-left relative z-10">
                <p className="text-[9px] tracking-ultra uppercase text-wedding-gold font-sans font-semibold mb-2">{acc.type}</p>
                <p className="text-sm text-wedding-charcoal font-sans leading-relaxed">{acc.details}</p>
                {acc.note && <p className="text-[10px] text-wedding-charcoal/50 font-sans mt-2 italic">{acc.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

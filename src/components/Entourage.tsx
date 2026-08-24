
import { weddingConfig } from '../config/wedding';

export default function Entourage() {
  return (
    <div className="py-28 px-6 veil-light">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-[#E7DCC2] font-sans mb-3">With Gratitude</p>
          <h2 className="section-title text-letterpress">Entourage</h2>
          <div className="ornament mt-4"><div className="ornament-diamond" /></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {weddingConfig.entourage.map((group, idx) => (
            <div key={idx}
              className={`reveal reveal-delay-${Math.min(idx + 1, 4)} card-lift relative bg-wedding-ivory bg-paper-texture border border-dusty-blue-light/50 rounded-sm shadow-[0_18px_44px_-12px_rgba(30,51,85,0.38)] overflow-hidden`}>
              <div className="absolute inset-2 border border-dusty-blue-light/20 pointer-events-none rounded-sm" />

              <div className="bg-dusty-blue-dark bg-paper-texture px-8 py-5 border-b border-dusty-blue/60 relative z-10">
                <h3 className="font-serif text-xl tracking-wide text-letterpress-dark relative z-10" style={{ fontWeight: 400, color: '#EDF3F9' }}>
                  {group.category}
                </h3>
              </div>

              <div className={`px-8 py-6 relative z-10 ${['Principal Sponsors', 'Bridesmaids & Groomsmen'].includes(group.category) ? 'grid grid-cols-2 gap-x-6' : 'space-y-0'}`}>
                {group.members.map((member, mIdx) => (
                  <div key={mIdx} className={`flex items-center justify-between border-b border-dusty-blue-light/30 pb-3 last:border-0 last:pb-0`}>
                    <p className="font-serif text-base text-wedding-charcoal text-letterpress">{member.name}</p>
                    {!['Principal Sponsors', 'Bridesmaids & Groomsmen'].includes(group.category) && (
                      <span className="text-[9px] tracking-widest uppercase text-wedding-gold font-sans ml-4 flex-shrink-0">
                        {member.role}
                      </span>
                    )}
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


import { weddingConfig } from '../config/wedding';

export default function Program() {
  return (
    <div className="py-28 px-6 bg-ivory-gradient relative overflow-hidden">
      {/* Background watermark text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none parallax-watermark"
        aria-hidden="true"
      >
        <span
          className="font-serif text-dusty-blue-light/20 leading-none animate-float"
          style={{ fontSize: 'clamp(8rem, 20vw, 16rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Program
        </span>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">

        <div className="text-center mb-20 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-wedding-gold font-sans mb-3">The Order of Events</p>
          <h2 className="section-title">Wedding Program</h2>
          <div className="ornament mt-4">
            <div className="ornament-diamond" />
          </div>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-dusty-blue-light to-transparent" />

          <div className="space-y-0">
            {weddingConfig.program.map((item, index) => (
              <div
                key={index}
                className={`reveal reveal-delay-${Math.min(index % 4 + 1, 4)} relative pl-10 pb-10 last:pb-0 group`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full bg-wedding-gold border-2 border-wedding-white transition-transform duration-300 group-hover:scale-125" />

                {/* Connector to dot */}
                <div className="absolute left-[5px] top-[18px] h-px w-4 bg-dusty-blue-light/60" />

                <div className="bg-wedding-white/80 backdrop-blur-sm border border-dusty-blue-light/40 rounded-sm px-6 py-4 shadow-card group-hover:shadow-card-hover group-hover:border-dusty-blue-light transition-all duration-400">
                  <span className="text-[9px] tracking-ultra uppercase text-wedding-gold font-sans font-semibold">{item.time}</span>
                  <p className="font-serif text-xl text-wedding-charcoal mt-0.5">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
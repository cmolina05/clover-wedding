
import { weddingConfig } from '../config/wedding';

function CalendarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

interface DetailCardProps {
  label: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  embedUrl: string;
  delay: number;
}

function DetailCard({ label, time, venue, address, mapsUrl, embedUrl, delay }: DetailCardProps) {
  return (
    <div className={`reveal reveal-delay-${delay} card-lift group relative bg-wedding-ivory bg-paper-texture border border-dusty-blue-light/60 rounded-sm shadow-[0_8px_30px_-4px_rgba(95,125,140,0.15)] overflow-hidden`}>
      {/* Inner hairline border */}
      <div className="absolute inset-2 border border-dusty-blue-light/30 pointer-events-none rounded-sm" />

      {/* Top accent bar */}
      <div className="h-[2px] bg-gold-gradient" />

      {/* Embedded Map */}
      <div className="w-full h-52 overflow-hidden border-b border-dusty-blue-light/40">
        <iframe src={embedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Map - ${venue}`} />
      </div>

      <div className="p-10 flex flex-col h-full relative z-10">
        <span className="text-[9px] tracking-ultra uppercase text-wedding-gold font-sans mb-4">{label}</span>
        <h3 className="font-serif text-3xl text-dusty-blue-dark mb-6 text-letterpress" style={{ fontWeight: 400 }}>{venue}</h3>

        <div className="space-y-3 mb-8 flex-grow">
          <div className="flex items-center gap-2 text-xs text-wedding-charcoal/70 font-sans">
            <span className="text-dusty-blue"><CalendarIcon /></span>
            {weddingConfig.dateFormatted}
          </div>
          <div className="flex items-center gap-2 text-xs text-wedding-charcoal/70 font-sans">
            <span className="text-dusty-blue"><ClockIcon /></span>
            {time}
          </div>
          <div className="flex items-start gap-2 text-xs text-wedding-charcoal/70 font-sans">
            <span className="text-dusty-blue mt-0.5 flex-shrink-0"><MapPinIcon /></span>
            <span>{address}</span>
          </div>
        </div>

        <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase font-sans bg-dusty-blue-dark text-wedding-white hover:bg-wedding-charcoal transition-all duration-400 py-3 px-6 rounded-sm self-start">
          Open in Google Maps
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function WeddingDetails() {
  const carIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 17h.01M16 17h.01M3 11l1.5-5h15L21 11M3 11h18M3 11v6a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-6" />
    </svg>
  );
  const busIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 17h.01M16 17h.01M3 11l1.5-5h15L21 11M3 11h18M3 11v6a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-6M7 17v2M17 17v2" />
    </svg>
  );
  const transportIcons: Record<string, React.ReactNode> = { car: carIcon, bus: busIcon };

  return (
    <div className="py-28 px-6 bg-wedding-white bg-paper-texture">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-wedding-gold font-sans mb-3">Save the Date</p>
          <h2 className="section-title text-letterpress">Wedding Details</h2>
          <div className="ornament mt-4"><div className="ornament-diamond" /></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <DetailCard label="Ceremony" time={weddingConfig.ceremony.time} venue={weddingConfig.ceremony.venue} address={weddingConfig.ceremony.address} mapsUrl={weddingConfig.ceremony.googleMapsUrl} embedUrl={weddingConfig.ceremony.embedUrl} delay={1} />
          <DetailCard label="Reception" time={weddingConfig.reception.time} venue={weddingConfig.reception.venue} address={weddingConfig.reception.address} mapsUrl={weddingConfig.reception.googleMapsUrl} embedUrl={weddingConfig.reception.embedUrl} delay={2} />
        </div>

        <div>
          <h3 className="font-serif text-2xl text-dusty-blue-dark mb-8 text-center reveal text-letterpress" style={{ fontWeight: 400 }}>How to Get Here</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {weddingConfig.travel.transportation.map((item, idx) => (
              <div key={idx} className={`reveal reveal-delay-${Math.min(idx + 1, 4)} relative bg-wedding-ivory bg-paper-texture border border-dusty-blue-light/50 rounded-sm p-6 flex gap-4 shadow-[0_8px_30px_-4px_rgba(95,125,140,0.15)]`}>
                <div className="absolute inset-2 border border-dusty-blue-light/20 pointer-events-none rounded-sm" />
                <span className="text-dusty-blue flex-shrink-0 mt-0.5">{transportIcons[item.icon] || carIcon}</span>
                <div className="relative z-10">
                  <h4 className="font-serif text-base text-dusty-blue-dark mb-1 text-letterpress">{item.title}</h4>
                  <p className="text-xs text-wedding-charcoal/60 leading-relaxed font-sans">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

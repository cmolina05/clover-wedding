
import { weddingConfig } from '../config/wedding';

function CarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 17h.01M16 17h.01M3 11l1.5-5h15L21 11M3 11h18M3 11v6a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-6" />
    </svg>
  );
}

function BusIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 17h.01M16 17h.01M3 11l1.5-5h15L21 11M3 11h18M3 11v6a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-6M7 17v2M17 17v2" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15l4-8 5 4 5-4 4 8M3 15v4a1 1 0 001 1h16a1 1 0 001-1v-4" />
    </svg>
  );
}

function HotelIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  car: <CarIcon />,
  bus: <BusIcon />,
  plane: <PlaneIcon />,
};

export default function Travel() {
  const { travel } = weddingConfig;

  return (
    <div className="py-28 px-6 bg-wedding-white">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-wedding-gold font-sans mb-3">For Our Guests</p>
          <h2 className="section-title">{travel.title}</h2>
          <div className="ornament mt-4">
            <div className="ornament-diamond" />
          </div>
          <p className="text-sm text-wedding-charcoal/60 font-sans mt-4 max-w-lg mx-auto">{travel.description}</p>
        </div>

        {/* Hotels */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 reveal">
            <span className="text-dusty-blue"><HotelIcon /></span>
            <h3 className="font-serif text-2xl text-dusty-blue-dark" style={{ fontWeight: 400 }}>Where to Stay</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {travel.hotels.map((hotel, idx) => (
              <div
                key={idx}
                className={`reveal reveal-delay-${Math.min(idx + 1, 4)} card-lift bg-wedding-ivory border border-dusty-blue-light/50 rounded-sm shadow-card overflow-hidden`}
              >
                <div className="h-[2px] bg-gold-gradient" />
                <div className="p-6">
                  <h4 className="font-serif text-lg text-dusty-blue-dark mb-1">{hotel.name}</h4>
                  <p className="text-[10px] tracking-widest uppercase text-wedding-gold font-sans mb-2">{hotel.distance}</p>
                  <p className="text-xs text-wedding-charcoal/60 font-sans mb-4">{hotel.contact}</p>
                  <a
                    href={hotel.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[9px] tracking-widest uppercase text-dusty-blue-dark hover:text-wedding-gold transition-colors font-sans"
                  >
                    View on map
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transportation */}
        <div>
          <h3 className="font-serif text-2xl text-dusty-blue-dark mb-8 reveal" style={{ fontWeight: 400 }}>How to Get Here</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {travel.transportation.map((item, idx) => (
              <div
                key={idx}
                className={`reveal reveal-delay-${Math.min(idx + 1, 4)} bg-wedding-ivory border border-dusty-blue-light/50 rounded-sm p-6 flex gap-4`}
              >
                <span className="text-dusty-blue flex-shrink-0 mt-0.5">
                  {iconMap[item.icon] || <CarIcon />}
                </span>
                <div>
                  <h4 className="font-serif text-base text-dusty-blue-dark mb-1">{item.title}</h4>
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

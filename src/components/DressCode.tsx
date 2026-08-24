
import { weddingConfig } from '../config/wedding';
import { NinongVector, NinangVector, GentlemenVector, LadiesVector } from './AttireVectors';

const { dressCode } = weddingConfig;

export default function DressCode() {
  return (
    <div className="py-28 px-6 veil-deep relative overflow-hidden" id="attire">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 min-h-[550px]">

          {/* Left Column: Ninong & Gentleman */}
          <div className="hidden md:flex md:w-[22%] flex-col justify-between py-12 h-[550px] items-center">
            <div className="w-36 h-48 group hover:scale-105 transition-transform duration-500 relative flex items-center justify-center">
              <NinongVector />
            </div>
            <div className="w-36 h-48 group hover:scale-105 transition-transform duration-500 relative flex items-center justify-center">
              <GentlemenVector />
            </div>
          </div>

          {/* Center Content */}
          <div className="w-full md:w-[56%] flex flex-col items-center text-center">
            <div className="text-center mb-10 reveal">
              <p className="text-[10px] tracking-ultra uppercase text-[#E7DCC2] font-sans mb-3">Attire Guide</p>
              <h2 className="section-title text-letterpress">Dress Code</h2>
              <div className="ornament mt-4"><div className="ornament-diamond" /></div>
            </div>

            {/* Mobile Vectors */}
            <div className="grid grid-cols-4 gap-3 w-full max-w-sm mx-auto mb-10 md:hidden">
              <div className="flex flex-col items-center">
                <div className="w-16 h-20"><NinongVector /></div>
                <span className="text-[8px] uppercase tracking-wider text-white/60 mt-1 font-sans">Ninong</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-20"><NinangVector /></div>
                <span className="text-[8px] uppercase tracking-wider text-white/60 mt-1 font-sans">Ninang</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-20"><GentlemenVector /></div>
                <span className="text-[8px] uppercase tracking-wider text-white/60 mt-1 font-sans">Gentleman</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-20"><LadiesVector /></div>
                <span className="text-[8px] uppercase tracking-wider text-white/60 mt-1 font-sans">Lady</span>
              </div>
            </div>

            {/* Principal Sponsors */}
            <div className="mb-10 font-sans">
              <p className="text-[10px] tracking-ultra uppercase text-wedding-gold mb-5 font-semibold">{dressCode.sponsors.label}</p>
              <div className="space-y-2 text-base font-semibold text-wedding-white">
                <p>Ninong: <span className="font-normal text-white/75">Barong and Black Slacks</span></p>
                <p>Ninang: <span className="font-normal text-white/75">Beige Formal Long Gown/Dress</span></p>
                <p>Shoes: <span className="font-normal text-white/75">Anything comfortable</span></p>
              </div>
            </div>

            {/* Guests */}
            <div className="mb-8 font-sans">
              <p className="text-[10px] tracking-ultra uppercase text-wedding-gold mb-5 font-semibold">{dressCode.guests.label}</p>
              <div className="space-y-4 text-sm leading-relaxed max-w-md mx-auto text-white/70">
                <p>Please come dressed on your formal/ sunday dress and smart casual attire.</p>
                <p>We kindly encourage our guests to dress in our color palette on our special day.</p>
              </div>
            </div>

            {/* Color Palette Swatches */}
            <div className="flex justify-center items-center gap-6 mt-6">
              {dressCode.swatches.map((swatch, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full shadow-[0_18px_44px_-12px_rgba(30,51,85,0.38)] group-hover:scale-110 transition-all duration-300 border-2 border-wedding-white"
                    style={{ backgroundColor: swatch.hex }} title={swatch.name} />
                  <span className="text-[7px] tracking-widest uppercase text-white/55 font-sans">{swatch.name}</span>
                </div>
              ))}
            </div>

            {/* Prohibited attire alert */}
            <div className="mt-8 w-full max-w-md mx-auto bg-black/10 border-l-2 border-[#E7DCC2] px-5 py-4 rounded-sm">
              <p className="text-xs text-white/80 font-sans leading-relaxed">
                Strict compliance on dress code is asked. NO slippers, shorts, jeans, or other informal outfits of any kind will be allowed.
              </p>
            </div>
          </div>

          {/* Right Column: Ninang & Lady */}
          <div className="hidden md:flex md:w-[22%] flex-col justify-between py-12 h-[550px] items-center">
            <div className="w-36 h-48 group hover:scale-105 transition-transform duration-500 relative flex items-center justify-center">
              <NinangVector />
            </div>
            <div className="w-36 h-48 group hover:scale-105 transition-transform duration-500 relative flex items-center justify-center">
              <LadiesVector />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

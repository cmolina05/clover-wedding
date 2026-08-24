
import { weddingConfig } from '../config/wedding';
import { LadiesGroup, GentlemenGroup, NinongFigure, NinangFigure } from './AttireGroups';

const { dressCode } = weddingConfig;

export default function DressCode() {
  return (
    <div className="py-28 px-6 veil-deep relative overflow-hidden" id="attire">
      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-14 reveal">
          <p className="text-[10px] tracking-ultra uppercase text-[#E7DCC2] font-sans mb-3">Attire Guide</p>
          <h2 className="section-title text-letterpress">Dress Code</h2>
          <div className="ornament mt-4"><div className="ornament-diamond" /></div>
        </div>

        {/* Row 1 — Principal Sponsors. Ninong/Ninang are grid-locked to this row only,
            so they can never visually spill into the Guest row below. */}
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_140px] lg:grid-cols-[180px_1fr_180px] items-center gap-x-6 lg:gap-x-10 reveal">
          <div className="hidden md:flex justify-center items-center h-full">
            <div className="group transition-transform duration-500 hover:-translate-y-1">
              <NinongFigure className="h-[180px] lg:h-[220px] w-auto" />
            </div>
          </div>

          <div className="font-sans text-center py-6 md:py-0">
            <p className="text-[10px] tracking-ultra uppercase text-[#E7DCC2] mb-5 font-semibold">{dressCode.sponsors.label}</p>
            <div className="space-y-2 text-base font-semibold text-wedding-white">
              <p>Ninong: <span className="font-normal text-white/75">Barong and Black Slacks</span></p>
              <p>Ninang: <span className="font-normal text-white/75">Beige Formal Long Gown/Dress</span></p>
              <p>Shoes: <span className="font-normal text-white/75">Anything comfortable</span></p>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center h-full">
            <div className="group transition-transform duration-500 hover:-translate-y-1">
              <NinangFigure className="h-[180px] lg:h-[220px] w-auto" />
            </div>
          </div>
        </div>

        {/* Divider between the two sections, matching the boundary line you sketched */}
        <div className="max-w-6xl mx-auto my-2" />

        {/* Row 2 — Guests. Gentlemen/Ladies groups are grid-locked to this row only. */}
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_140px] lg:grid-cols-[180px_1fr_180px] items-center gap-x-6 lg:gap-x-10 reveal">
          <div className="hidden md:flex justify-center items-end h-full pb-2">
            <div className="group transition-transform duration-500 hover:-translate-y-1">
              <GentlemenGroup className="h-[180px] lg:h-[220px] w-auto" />
            </div>
          </div>

          <div className="font-sans text-center py-8 md:py-6">
            <p className="text-[10px] tracking-ultra uppercase text-[#E7DCC2] mb-5 font-semibold">{dressCode.guests.label}</p>
            <div className="space-y-4 text-sm leading-relaxed max-w-md mx-auto text-white/70">
              <p>Please come dressed on your formal/ sunday dress and smart casual attire.</p>
              <p>We kindly encourage our guests to dress in our color palette on our special day.</p>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-end h-full pb-2">
            <div className="group transition-transform duration-500 hover:-translate-y-1">
              <LadiesGroup className="h-[180px] lg:h-[220px] w-auto" />
            </div>
          </div>
        </div>

        {/* Mobile figures — kept together beneath the Guest text since the side rails are hidden below md */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 max-w-xs mx-auto mt-4 md:hidden">
          <div className="max-w-[100px] mx-auto self-end"><NinongFigure /></div>
          <div className="max-w-[100px] mx-auto self-end"><NinangFigure /></div>
          <div className="max-w-[125px] mx-auto self-end"><GentlemenGroup /></div>
          <div className="max-w-[125px] mx-auto self-end"><LadiesGroup /></div>
        </div>

        {/* Color Palette Swatches */}
        <div className="flex justify-center items-center gap-6 mt-10 mb-8">
          {dressCode.swatches.map((swatch, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-9 h-9 rounded-full shadow-[0_18px_44px_-12px_rgba(30,51,85,0.38)] group-hover:scale-110 transition-all duration-300 border-2 border-wedding-white"
                style={{ backgroundColor: swatch.hex }} title={swatch.name} />
              <span className="text-[7px] tracking-widest uppercase text-white/55 font-sans">{swatch.name}</span>
            </div>
          ))}
        </div>

        {/* Prohibited attire alert */}
        <div className="w-full max-w-md mx-auto bg-black/10 border-l-2 border-[#E7DCC2] px-5 py-4 rounded-sm text-left">
          <p className="text-xs text-white/80 font-sans leading-relaxed">
            Strict compliance on dress code is asked. NO slippers, shorts, jeans, or other informal outfits of any kind will be allowed.
          </p>
        </div>

      </div>
    </div>
  );
}

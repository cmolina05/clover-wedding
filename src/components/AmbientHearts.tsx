import type { CSSProperties } from 'react';

interface AmbientHeart {
  left: string;
  top: string;
  size: number;
  dur: number;
  delay: number;
  tint: string;
  op: number;
  rot: number;
}

const HEARTS: AmbientHeart[] = [
  { left: '4%', top: '12%', size: 13, dur: 17, delay: 0, tint: '#F7F4EC', op: 0.14, rot: -6 },
  { left: '14%', top: '64%', size: 10, dur: 21, delay: 2, tint: '#DCE7F1', op: 0.16, rot: 8 },
  { left: '24%', top: '30%', size: 16, dur: 19, delay: 4, tint: '#E3D5B8', op: 0.13, rot: -10 },
  { left: '33%', top: '78%', size: 12, dur: 23, delay: 1, tint: '#F7F4EC', op: 0.15, rot: 6 },
  { left: '43%', top: '18%', size: 11, dur: 18, delay: 3, tint: '#A9CBE9', op: 0.18, rot: -4 },
  { left: '52%', top: '55%', size: 15, dur: 22, delay: 5, tint: '#F7F4EC', op: 0.12, rot: 10 },
  { left: '63%', top: '36%', size: 10, dur: 20, delay: 2.5, tint: '#DCE7F1', op: 0.17, rot: -8 },
  { left: '72%', top: '70%', size: 14, dur: 24, delay: 0.5, tint: '#E3D5B8', op: 0.12, rot: 5 },
  { left: '81%', top: '22%', size: 12, dur: 19, delay: 3.5, tint: '#F7F4EC', op: 0.15, rot: -12 },
  { left: '90%', top: '58%', size: 11, dur: 21, delay: 1.5, tint: '#A9CBE9', op: 0.18, rot: 7 },
  { left: '8%', top: '86%', size: 12, dur: 22, delay: 4, tint: '#DCE7F1', op: 0.14, rot: 9 },
  { left: '95%', top: '84%', size: 13, dur: 20, delay: 2, tint: '#F7F4EC', op: 0.13, rot: -5 },
];

export default function AmbientHearts() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
      {HEARTS.map((h, i) => (
        <div
          key={i}
          className="absolute"
          style={
            {
              left: h.left,
              top: h.top,
              width: h.size,
              height: (h.size * 29) / 32,
              opacity: h.op,
              '--r': `${h.rot}deg`,
              animation: `ambientDrift ${h.dur}s ease-in-out ${h.delay}s infinite`,
              filter: 'drop-shadow(0 2px 3px rgba(30,51,85,0.28))',
            } as CSSProperties
          }
        >
          <svg viewBox="0 0 32 29" fill={h.tint} className="w-full h-full">
            <path d="M16 28.2C11.6 24.5 1.4 16.9 1.4 9.4C1.4 4.9 4.9 1.3 9.3 1.3C12 1.3 14.5 2.7 16 4.9C17.5 2.7 20 1.3 22.7 1.3C27.1 1.3 30.6 4.9 30.6 9.4C30.6 16.9 20.4 24.5 16 28.2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

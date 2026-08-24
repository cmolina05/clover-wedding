import React from 'react';

// Ninong: Barong Tagalog & Black Slacks (Mandarin collar, front embroidery, black pants)
export const NinongVector: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="20 15 80 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g className="group-hover-sway">
      {/* Black Pants */}
      <path d="M 45,75 L 75,75 L 75,135 L 62,135 L 62,95 L 58,95 L 58,135 L 45,135 Z" fill="#2C3E55" />
      
      {/* Barong Shirt */}
      {/* Left Sleeve */}
      <path d="M 42,32 L 25,65 L 32,68 L 44,45 Z" fill="#FAF6F0" stroke="#8A7B68" strokeWidth="1" />
      {/* Right Sleeve */}
      <path d="M 78,32 L 95,65 L 88,68 L 76,45 Z" fill="#FAF6F0" stroke="#8A7B68" strokeWidth="1" />
      {/* Shirt Torso */}
      <path d="M 42,32 L 78,32 L 78,74 L 75,74 L 75,78 L 71,78 L 71,74 L 49,74 L 49,78 L 45,78 L 45,74 L 42,74 Z" fill="#FAF6F0" stroke="#8A7B68" strokeWidth="1" strokeLinejoin="round" />
      
      {/* Mandarin Collar */}
      <path d="M 52,32 C 52,27 68,27 68,32 Z" fill="#EADCC9" stroke="#8A7B68" strokeWidth="1" />
      
      {/* Embroidery details */}
      {/* Vertical button placket line */}
      <line x1="60" y1="32" x2="60" y2="74" stroke="#A0907E" strokeWidth="1.5" strokeDasharray="2 2" />
      
      {/* Left embroidery panel */}
      <path d="M 54,37 L 54,65 L 58,65 L 58,37" fill="none" stroke="#D4C3A3" strokeWidth="1.2" />
      {/* Right embroidery panel */}
      <path d="M 66,37 L 66,65 L 62,65 L 62,37" fill="none" stroke="#D4C3A3" strokeWidth="1.2" />
      
      {/* Detailed embroidery marks (little leaves/crosses) */}
      <line x1="56" y1="42" x2="56" y2="60" stroke="#D4C3A3" strokeWidth="1" strokeDasharray="1 2" />
      <line x1="64" y1="42" x2="64" y2="60" stroke="#D4C3A3" strokeWidth="1" strokeDasharray="1 2" />
      
      {/* Belt line/accent */}
      <rect x="45" y="75" width="30" height="2" fill="#1A202C" />
    </g>
  </svg>
);

// Ninang: Beige Formal Long Gown (Boat/Round neck, draped cap sleeves, column floor-length skirt matching the photo)
export const NinangVector: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="20 10 80 130" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="gownGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FAF6F0" />
        <stop offset="50%" stopColor="#E5DAC9" />
        <stop offset="100%" stopColor="#C8B89E" />
      </linearGradient>
    </defs>
    
    <g className="group-hover-sway">
      {/* Hanger hook */}
      <path d="M 60,25 C 60,18 55,18 55,14 C 55,10 65,10 65,14" fill="none" stroke="#8A7B68" strokeWidth="1" />
      
      {/* Cap Sleeves and Bodice */}
      <path d="M 36,36 C 36,36 42,32 60,32 C 78,32 84,36 84,36 C 84,36 83,44 75,46 C 68,48 68,68 66,68 L 54,68 C 52,68 52,48 45,46 C 37,44 36,36 36,36 Z" fill="url(#gownGrad)" stroke="#8A7B68" strokeWidth="1" />
      
      {/* Neckline line */}
      <path d="M 44,35 C 50,39 70,39 76,35" fill="none" stroke="#8A7B68" strokeWidth="1" />
      
      {/* Column Skirt */}
      <path d="M 54,68 L 66,68 C 69,90 71,110 72,135 L 48,135 C 49,110 51,90 54,68 Z" fill="url(#gownGrad)" stroke="#8A7B68" strokeWidth="1" strokeLinejoin="round" />
      
      {/* Shading / fold lines */}
      <path d="M 60,68 C 60,95 59,115 57,135" fill="none" stroke="#8A7B68" strokeWidth="0.8" opacity="0.5" />
      <path d="M 56,68 C 55,95 53,115 50,135" fill="none" stroke="#8A7B68" strokeWidth="0.8" opacity="0.4" />
      <path d="M 64,68 C 65,95 67,115 70,135" fill="none" stroke="#8A7B68" strokeWidth="0.8" opacity="0.4" />
    </g>
  </svg>
);

// Shoes: Comfortable Shoes (Men's Oxford & Women's Heel)
export const ShoesVector: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="10 0 100 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="menShoeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4E342E" />
        <stop offset="100%" stopColor="#3E2723" />
      </linearGradient>
    </defs>
    
    <g className="group-hover-sway">
      {/* Men's Oxford Shoe (Left) */}
      <g transform="translate(12, 50)">
        {/* Shoe sole */}
        <path d="M 5,25 Q 15,28 30,28 Q 40,25 45,20 L 45,23 Q 40,28 30,30 Q 15,30 5,27 Z" fill="#1A0C00" />
        {/* Shoe body */}
        <path d="M 5,25 C 2,18 8,10 18,8 C 25,6 35,13 40,15 C 44,16 48,15 48,18 C 48,22 42,21 38,22 C 30,24 15,25 5,25 Z" fill="url(#menShoeGrad)" stroke="#5D4037" strokeWidth="0.8" />
        {/* Heel */}
        <path d="M 5,25 L 12,25 L 12,28 L 5,27 Z" fill="#000000" />
        {/* Laces area */}
        <path d="M 22,8 L 26,16 M 24,9 L 28,15 M 26,10 L 30,14" stroke="#D7CCC8" strokeWidth="1" strokeLinecap="round" />
      </g>
      
      {/* Ladies High Heel Pump (Right) */}
      <g transform="translate(54, 35)">
        {/* Thin Heel stick */}
        <line x1="16" y1="26" x2="16" y2="48" stroke="#8A7B68" strokeWidth="2" strokeLinecap="round" />
        {/* Shoe Sole and Arch */}
        <path d="M 15,25 Q 23,28 32,38 Q 45,46 50,46 L 50,49 Q 44,49 32,41 Q 22,31 15,27 Z" fill="#5D4037" />
        {/* Shoe body */}
        <path d="M 10,18 C 12,18 15,22 17,26 C 24,29 35,39 46,45 C 51,45 52,43 52,41 C 46,38 38,28 30,22 C 22,16 15,18 10,18 Z" fill="#EADCC9" stroke="#8A7B68" strokeWidth="0.8" />
        {/* Inner shoe shadow */}
        <path d="M 12,19 C 14,19 16,21 17,25 C 22,23 27,20 30,22 C 26,20 20,19 12,19 Z" fill="#D9C7AC" />
      </g>
    </g>
  </svg>
);

// Gentlemen: Guest (Smart Casual - Blue Shirt & Navy Pants matching the photo)
export const GentlemenVector: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="20 15 80 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EDF3F9" />
        <stop offset="100%" stopColor="#A9CBE9" />
      </linearGradient>
    </defs>
    
    <g className="group-hover-sway">
      {/* Pants */}
      <path d="M 46,75 L 74,75 L 74,135 L 62,135 L 62,98 L 58,98 L 58,135 L 46,135 Z" fill="#3B6291" stroke="#253E5B" strokeWidth="0.8" />
      
      {/* Shirt */}
      {/* Left Sleeve */}
      <path d="M 44,32 L 28,60 L 34,63 L 45,43 Z" fill="url(#shirtGrad)" stroke="#5D7A9E" strokeWidth="0.8" />
      {/* Right Sleeve */}
      <path d="M 76,32 L 92,60 L 86,63 L 75,43 Z" fill="url(#shirtGrad)" stroke="#5D7A9E" strokeWidth="0.8" />
      {/* Shirt Torso */}
      <path d="M 44,32 L 76,32 L 74,75 L 46,75 Z" fill="url(#shirtGrad)" stroke="#5D7A9E" strokeWidth="0.8" />
      
      {/* Shirt Collar */}
      <path d="M 50,32 L 60,38 L 70,32 L 67,35 L 53,35 Z" fill="#EDF3F9" stroke="#5D7A9E" strokeWidth="0.8" />
      <path d="M 52,32 C 52,28 68,28 68,32 Z" fill="#A9CBE9" stroke="#5D7A9E" strokeWidth="0.8" />
      
      {/* Placket & Buttons */}
      <line x1="60" y1="36" x2="60" y2="75" stroke="#7E96AE" strokeWidth="1" />
      <circle cx="60" cy="45" r="1.2" fill="#2C4A78" />
      <circle cx="60" cy="55" r="1.2" fill="#2C4A78" />
      <circle cx="60" cy="65" r="1.2" fill="#2C4A78" />
      
      {/* Brown Belt */}
      <rect x="46" y="74" width="28" height="3" fill="#6D4C41" />
      {/* Gold Buckle */}
      <rect x="58" y="73" width="4" height="5" fill="none" stroke="#FFD54F" strokeWidth="1" />
    </g>
  </svg>
);

// Ladies: Guest (Sunday Dress - Dusty Blue Dress with flutter sleeves, wrap top, crossover slit wrap skirt matching the photo)
export const LadiesVector: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="20 15 80 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="dressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#BBD0E4" />
        <stop offset="50%" stopColor="#8CA3BC" />
        <stop offset="100%" stopColor="#6C88A3" />
      </linearGradient>
    </defs>
    
    <g className="group-hover-sway">
      {/* Dress bodice wrap style */}
      <path d="M 44,32 L 76,32 C 74,48 68,60 67,65 L 53,65 C 52,60 46,48 44,32 Z" fill="url(#dressGrad)" stroke="#4A6789" strokeWidth="0.8" />
      
      {/* Wrap neckline cross lines */}
      <path d="M 44,32 L 63,65" stroke="#3A5A85" strokeWidth="0.8" />
      <path d="M 76,32 L 57,65" stroke="#3A5A85" strokeWidth="0.8" />
      
      {/* Flutter sleeves */}
      <path d="M 44,32 C 40,32 34,36 34,42 C 34,48 44,48 44,48 Z" fill="#8CA3BC" stroke="#4A6789" strokeWidth="0.8" />
      <path d="M 76,32 C 80,32 86,36 86,42 C 86,48 76,48 76,48 Z" fill="#8CA3BC" stroke="#4A6789" strokeWidth="0.8" />
      
      {/* Wrap Skirt with Leg Slit (overlapping asymmetrical crossover hem) */}
      {/* Under layer (left side of skirt) */}
      <path d="M 53,65 L 67,65 Q 73,95 78,130 L 58,130 C 58,130 50,105 53,65 Z" fill="#6C88A3" opacity="0.7" />
      
      {/* Overlapping top layer with slit showing one leg */}
      <path d="M 53,65 Q 60,65 67,65 C 67,65 74,90 78,130 L 42,130 C 37,115 45,95 53,65 Z" fill="url(#dressGrad)" stroke="#4A6789" strokeWidth="0.8" />
      
      {/* The slit line showing the front leg overlap */}
      <path d="M 67,65 Q 52,95 42,130" stroke="#3A5A85" strokeWidth="0.8" />
      
      {/* Pleats / Ruffles for flowy skirt */}
      <path d="M 60,65 Q 64,95 68,130" fill="none" stroke="#4A6789" strokeWidth="0.8" opacity="0.6" />
      
      {/* Sash Bow at waist */}
      <ellipse cx="60" cy="65" rx="7" ry="2" fill="#D4C3A3" stroke="#8A7B68" strokeWidth="0.8" />
      <path d="M 64,65 C 67,67 70,72 68,76" fill="none" stroke="#8A7B68" strokeWidth="0.8" />
      <path d="M 56,65 C 53,67 50,72 52,76" fill="none" stroke="#8A7B68" strokeWidth="0.8" />
    </g>
  </svg>
);

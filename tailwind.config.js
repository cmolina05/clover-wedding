/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dusty-blue': {
          DEFAULT: '#7A9BAD',
          50:  '#F0F5F8',
          100: '#D9E8EE',
          200: '#B8CDD7',
          300: '#8FB0C0',
          400: '#7A9BAD',
          500: '#5F7D8C',
          600: '#4D6878',
          700: '#3D5A6B',
          800: '#2E4452',
          900: '#1C2D37',
          dark: '#3D5A6B',
          mid:  '#5F7D8C',
          light: '#B8CDD7',
          mist: '#D9E8EE',
          pale: '#EBF4F7',
        },
        'wedding': {
          ivory:   '#FAF9F6',
          white:   '#FFFFFF',
          beige:   '#EDE7DF',
          charcoal:'#2B3338',
          gold:    '#B7A27A',
          'gold-light': '#E8D9BE',
          'blue-white': '#F0F5F8',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra:  '0.3em',
      },
      boxShadow: {
        soft:       '0 4px 24px rgba(61,90,107,0.10)',
        glow:       '0 0 40px rgba(90,130,150,0.25)',
        card:       '0 2px 12px rgba(61,90,107,0.08)',
        'card-hover': '0 12px 40px rgba(61,90,107,0.18)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B7A27A 0%, #E8D9BE 50%, #B7A27A 100%)',
        'blue-gradient': 'linear-gradient(135deg, #3D5A6B 0%, #7A9BAD 100%)',
        'blue-light-gradient': 'linear-gradient(135deg, #5F7D8C 0%, #B8CDD7 100%)',
        'ivory-gradient': 'linear-gradient(180deg, #F0F5F8 0%, #D9E8EE 100%)',
        'hero-overlay':  'linear-gradient(to bottom, rgba(29,52,65,0.72) 0%, rgba(29,52,65,0.45) 55%, rgba(235,244,247,0.97) 100%)',
      },
    },
  },
  plugins: [],
};
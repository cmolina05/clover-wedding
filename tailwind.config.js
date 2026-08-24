/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dusty-blue': {
          DEFAULT: '#7E96AE',
          50:  '#F2F6FA',
          100: '#DCE7F1',
          200: '#BBD0E4',
          300: '#A9CBE9',
          400: '#7E96AE',
          500: '#5D7A9E',
          600: '#4A6789',
          700: '#3A5A85',
          800: '#2C4A78',
          900: '#1E3355',
          dark: '#3A5A85',
          mid:  '#5D7A9E',
          light: '#BBD0E4',
          mist: '#DCE7F1',
          pale: '#EDF3F9',
        },
        'wedding': {
          ivory:   '#F6F3EB',
          white:   '#FAF8F4',
          beige:   '#ECE7DC',
          charcoal:'#2C3E55',
          gold:    '#5D7A9E',
          'gold-light': '#A9CBE9',
          'blue-white': '#F2EFE7',
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
        soft:       '0 4px 24px rgba(30,51,85,0.12)',
        glow:       '0 0 40px rgba(126,150,174,0.25)',
        card:       '0 2px 12px rgba(30,51,85,0.10)',
        'card-hover': '0 14px 40px rgba(30,51,85,0.30)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #5D7A9E 0%, #A9CBE9 50%, #5D7A9E 100%)',
        'blue-gradient': 'linear-gradient(135deg, #3A5A85 0%, #7E96AE 100%)',
        'blue-light-gradient': 'linear-gradient(135deg, #5D7A9E 0%, #BBD0E4 100%)',
        'ivory-gradient': 'linear-gradient(180deg, #F4F0E7 0%, #E9E2D4 100%)',
        'hero-overlay':  'linear-gradient(to bottom, rgba(30,51,85,0.72) 0%, rgba(30,51,85,0.45) 55%, rgba(237,243,249,0.97) 100%)',
      },
    },
  },
  plugins: [],
};
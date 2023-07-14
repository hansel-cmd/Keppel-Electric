/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#545E4F',
        sage: '#969a8d',
        fire: '#ce0e2d',
        'sandy-brown': '#CDA86F',
        'pale-silver': '#e7e1d6',
        silver: '#d5d2ca',
        linen: '#eae6de',
      },
      fontFamily: {
        'noto-sans': ['Noto Sans'],
        belleza: ['Belleza'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}


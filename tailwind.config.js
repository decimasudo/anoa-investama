/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        brand: {
          950: '#120C0A', // Espresso (Darker, richer ink)
          900: '#1F1A17', // Deep Charcoal Brown
          800: '#3D342B', // Leather Brown
          500: '#B08D55', // Metallic Bronze/Gold (The core accent)
          400: '#D4C5A9', // Champagne Gold (Highlights)
        },
        neutral: {
          'bg-base': '#F2F0E9', // Alabaster (Warmer than previous cream)
          'bg-dark': '#E6E2D6', // Darker Greige (For sections)
          'surface': '#F9F8F6', // Almost white, for cards
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B08D55 0%, #D4C5A9 50%, #8C6B3D 100%)',
        'rich-gradient': 'linear-gradient(to bottom, rgba(242, 240, 233, 0) 0%, rgba(242, 240, 233, 1) 100%)',
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}
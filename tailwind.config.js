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
        serif: ['"Playfair Display"', '"Times New Roman"', 'serif'],
        sans: ['"Montserrat"', '"Trebuchet MS"', '"Avenir Next LT Std"', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          900: '#1E1108', // Primary text
          700: '#2D1E0A',
          500: '#3D2A0C',
        },
        neutral: {
          'bg-base': '#E8E4D8', // Warm cream
          'bg-paper': '#F5F2E8', // Lighter cream
          'border': '#CDBBA0', 
          'text-primary': '#1E1108',
          'text-secondary': '#3D2A0C',
          'text-muted': '#8B7355'
        },
        accent: {
          gold: '#D4AF37', // Luxury gold
          'gold-hover': '#C49B1F',
          bronze: '#8B6F47',
          success: '#6B8E23',
        }
      },
      boxShadow: {
        'card': '0 4px 20px rgba(62, 28, 0, 0.08)',
        'hover': '0 12px 32px rgba(62, 28, 0, 0.12)'
      },
    },
  },
  plugins: [],
}
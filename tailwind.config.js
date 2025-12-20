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
        luxury: ['"Avenir Next LT Std"', '"Trebuchet MS"', 'sans-serif']
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px'
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
        '32': '128px'
      },
      colors: {
        brand: {
          900: '#1E1108', // Primary text
          700: '#2D1E0A',
          500: '#3D2A0C',
          300: '#5D4A0E',
          100: '#A69B8C'
        },
        neutral: {
          'bg-base': '#E8E4D8', // Main background - warm cream
          'bg-paper': '#F5F2E8', // Secondary background - lighter cream
          'border': '#CDBBA0', // Borders/dividers - soft beige
          'text-primary': '#1E1108', // Deep dark brown text
          'text-secondary': '#3D2A0C',
          'text-muted': '#8B7355'
        },
        accent: {
          gold: '#D4AF37', // CTA buttons - luxury gold
          'gold-hover': '#C49B1F',
          bronze: '#8B6F47', // Accent color - warm bronze/gold
          success: '#6B8E23',
          'gold-light': '#F5DEB3'
        }
      },
      borderRadius: {
        'sm': '2px',
        'md': '4px',
        'lg': '8px'
      },
      boxShadow: {
        'card': '0 4px 20px rgba(62, 28, 0, 0.08)',
        'hover': '0 12px 32px rgba(62, 28, 0, 0.12)'
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      }
    },
  },
  plugins: [],
}
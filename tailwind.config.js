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
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Lato"', '-apple-system', 'sans-serif']
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
          900: '#3E1C00',
          700: '#5D2A00',
          500: '#8B4513',
          300: '#A66B3D',
          100: '#DCC5A8'
        },
        neutral: {
          'bg-base': '#F5F5DC',
          'bg-paper': '#FCFCF4',
          'border': '#E6DCCA',
          'text-primary': '#3E1C00',
          'text-secondary': '#5D2A00'
        },
        accent: {
          gold: '#C5A065',
          'gold-hover': '#B08D55',
          success: '#3D5D3D'
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
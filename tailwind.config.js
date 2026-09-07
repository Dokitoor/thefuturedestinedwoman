/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#84248F', // Logo vibrant purple accent
          600: '#6B1D8C', 
          700: '#581C87', 
          800: '#4C015C', // Logo deep primary purple
          900: '#380144', 
          950: '#12021A', // Logo deep obsidian velvet
        },
        purple: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#84248F',
          600: '#6B1D8C',
          700: '#581C87',
          800: '#4C015C',
          900: '#380144',
          950: '#12021A',
        },
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#D4AF37', // Logo regal crown gold
          500: '#C88536', // Logo warm amber gold
          600: '#B45309',
          700: '#92400E',
          800: '#78350F',
          900: '#451A03',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F5F0E8',
          300: '#EBE3D6',
          400: '#D6C8B4',
        },
        onyx: {
          800: '#3A3A3A',
          900: '#1F1F1F',
          950: '#121212',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(76, 1, 92, 0.12)',
        'luxury': '0 30px 60px -12px rgba(76, 1, 92, 0.25)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.4)',
        '3d': '12px 18px 30px rgba(18, 2, 26, 0.3)',
      }
    },
  },
  plugins: [],
}

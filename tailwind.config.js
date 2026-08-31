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
          50: '#FDF7F9',
          100: '#F3E8EE',
          200: '#E8D5DF',
          300: '#D5B0C4',
          400: '#AD6B8C',
          500: '#8A3B65',
          600: '#6C2B4E',
          700: '#581C38',
          800: '#4A1525',
          900: '#380D1B',
          950: '#22060F',
        },
        gold: {
          50: '#FAF7ED',
          100: '#F5EFD7',
          200: '#EADBB0',
          300: '#DFC789',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#A7803E',
          700: '#85622F',
          800: '#674A27',
          900: '#4F3820',
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
        'marquee': 'marquee 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(56, 13, 27, 0.08)',
        'luxury': '0 30px 60px -12px rgba(74, 21, 37, 0.18)',
        '3d': '12px 18px 30px rgba(31, 31, 31, 0.25)',
      }
    },
  },
  plugins: [],
}

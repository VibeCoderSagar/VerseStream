/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          pitch: '#08080C',
          dark: '#0D0D14',
          card: '#12121D',
          cardHover: '#181826',
          coral: '#FF385C',
          coralHover: '#FF4D6D',
          orange: '#FF7A18',
          amber: '#FF9500',
          border: '#1F1F2E',
          borderLight: '#2D2D42'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-coral': '0 0 35px -5px rgba(255, 56, 92, 0.45)',
        'neon-orange': '0 0 35px -5px rgba(255, 122, 24, 0.45)',
        'neon-glow': '0 0 50px -10px rgba(255, 56, 92, 0.35), 0 0 30px -5px rgba(255, 122, 24, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

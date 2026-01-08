/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // Observa todos os arquivos JS e JSX na pasta src
  ],
  theme: {
    extend: {
      fontFamily: {
        imperial: ['Cinzel', 'serif'],
        tech: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        arrakis: {
          base: '#1a1614',
          sand: '#C2B280',
          gold: '#D4AF37',
          spice: '#FF5900',
          eyes: '#00A3E0',
          deep: '#0c0a09'
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite', // Adicionei o spin que estava no inline
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        'qablack': '#1d1d1d',
        'qablack3f': '#3F3E3E',
        'qaorange': '#FE904C',
        'qagrey' : '#e6e6e6',
        'qalightgrey' : '#f1f1f1'
    }, 
    backgroundImage: {
      'gradient-225': 'linear-gradient(225deg, var(--tw-gradient-stops))',
      'gradient-197': 'linear-gradient(197deg, var(--tw-gradient-stops))',
    },
    container: {
      center: true,  // Esto centra el container horizontalmente
      screens: {
        lg: '1200px',  // Establecer el max-width para pantallas grandes
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    animation: {
      'spin-slow': 'spin 8s linear infinite', // Añadir una animación de giro lento
    },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        staccato: {
          primary: '#153058',    // Main blue
          accent: '#c26168',     // Red accent
          navy: '#0f243f',       // Darker blue
          gray: '#434243',       // Text gray
          smoke: '#f5f7f9',      // Light background
          alice: '#e9f4fa',      // Light blue
          white: '#ffffff',
          graph: '#0175c9',      // Graph/chart blue
        }
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '400', fontFamily: 'Playfair Display' }],
        'h2': ['29px', { lineHeight: '1.3', fontWeight: '400', fontFamily: 'Playfair Display' }],
        'h3': ['24px', { lineHeight: '1.3', fontWeight: '400', fontFamily: 'Playfair Display' }],
        'body': ['18px', { lineHeight: '1.4', letterSpacing: '0', fontFamily: 'Poppins' }],
      }
    },
  },
  plugins: [],
};
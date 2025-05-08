/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'gold': {
          '50': '#fbf8ee',
          '100': '#f6efd5',
          '200': '#ecd8a9',
          '300': '#e1bc73',
          '400': '#d9a54b',
          '500': '#d18f2a',
          '600': '#c17522',
          '700': '#9e5a1f',
          '800': '#804822',
          '900': '#683c1f',
          '950': '#391e10',
        },
        'pink': {
          '50': '#fdf2f7',
          '100': '#fce7f1',
          '200': '#fad0e5',
          '300': '#f8a9ce',
          '400': '#f372ac',
          '500': '#e84a8b',
          '600': '#d32e6b',
          '700': '#af1f52',
          '800': '#931d47',
          '900': '#7c1d3d',
          '950': '#4a0a20',
        },
      },
    },
  },
  plugins: [],
};
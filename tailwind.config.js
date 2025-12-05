/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#010E80',  // Inter Blue
        secondary: '#000000', // Inter Black
        accent: '#C5A059',    // Inter Gold (Premium)
        hover: '#1a27a3',     // Lighter Blue for hover
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

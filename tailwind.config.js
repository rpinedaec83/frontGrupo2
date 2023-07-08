/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3015FD',
        secondary: '#000425'
      },
      fontFamily: {
        'poppins': ['Poppins', 'Arial'],
        'roboto': ['Roboto', 'Arial'],
      },
    },
  },
  plugins: [],
}
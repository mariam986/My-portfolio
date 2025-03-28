/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        'custom':'linear-gradient(100deg, #d3d3d3 50%, #000000 50%)'
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

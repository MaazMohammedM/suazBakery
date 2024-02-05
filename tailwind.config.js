/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
     fontFamily:{
      'accent':['Playfair Display', "serif"]
     },
    },
    
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'darkblue':'#13183F',
        'grayblue':'#666CA3',
        'specialgray':'#83869A',
        'strawberry':'#F74780',
        'piggypink':'#FFA7C3',
        'gradient-orange-light':'#FF6F48',
        'gradient-orange-dark':'#F02AA6',
        'gradient-violet-dark':'#4851FF',

      }
    },
  },
  plugins: [],
}

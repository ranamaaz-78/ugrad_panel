/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        primary: {
         NavyBlue: '#0A2628',
         darkGreen: "#113025",
         secondaryGreen: "#003C3F",
        },
        secondary: {
        lightGreen:"#E9F1F3",
        grayNeutral:"#111927",
        },
        // Add your custom colors here
        brand: {
          grayNatural100:"#F3F5F7",
          grayNatural200:"#E5E7EB",
          grayNatural300:"#D2D6DB",
          grayNatural500:"#6C737F",
           grayNatural600:"#4D5761",
          creamWhite:"#F8EFEA"
        },
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.svg-icon': {
          stroke: 'var(--svg-stroke-color, currentColor)',
          fill: 'var(--svg-fill-color, none)'
        }
      })
    }
  ]
}
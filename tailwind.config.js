/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./resources/views/**/*.{blade.php}",
    "./resources/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'custom-black': '#212121',
        'sidebar-bg': '#FBFBFB',
        'custom-red': '#C20114',
        'custom-orange': '#F4812D',
        'ash-gray': '#c7d6d5',
        'ghost-white': '#ecebf3',
        'dim-gray': '#6D7275',
        'gold': '#FFD700'
      },
      boxShadow: {
      'newdrop': '0 4px 50px #00000040;',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
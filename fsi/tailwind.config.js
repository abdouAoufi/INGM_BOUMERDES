const colors = require('tailwindcss/colors')
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "black": "#40514e",
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      "primary" : "#ff9f68",
      "bgcolor" : "#fff4e3",
      "weakblack" : "#575151",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

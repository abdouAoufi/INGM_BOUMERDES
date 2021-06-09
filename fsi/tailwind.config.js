const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
 
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },

    extend: {
      colors: {
        "litlegray" : "#c4c4c4",
        transparent: "transparent",
        current: "currentColor",
        black: "#3f3b3b",
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        primary: "#ff9f68",
        bgcolor: "#fff4e3",
        weakblack: "#575151",
        card_one : "#F59A69",
        card_two : "#5885AF",
        card_three : "#995485",
        card_four : "#614CFF",
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      spacing: {
        88: "352px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

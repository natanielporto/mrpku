// tailwind.config.js

// const {
//   Hind_700Bold,
//   Hind_300Light,
//   Hind_500Medium,
//   Hind_400Regular,
//   Hind_600SemiBold,
// } = require("@expo-google-fonts/hind");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#0C6941",
        pink: "#DCB7AC",
        red: "#99153A",
        orange: "#FFCB4B",
        yellow: "#FFB800",
        white: "#FFF",
        lightGreen: "#8BDFBB",
        grey50: "#A0A0A0",
        grey100: "#C1C1C1",
        gradient: "linear-gradient(90deg, #5FDC94 50%, #CCF4DE 100%)",
        shadow: "0px 3px 1px -2px rgba(0 0 0 0 .1)",
      },
      fontFamily: {
        sans: ["Hind"],
      },
    },
  },
  plugins: [],
};

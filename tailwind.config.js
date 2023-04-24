// tailwind.config.js

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

        bgLight: "#FAFAFA",

        boxshadow: "box-shadow: 0 3px 1px -2px rgba(0 0 0 0 .1)",
      },

      maxWidth: {
        fourty: "40%",
        ninetyFive: "95%",
      },
      width: {
        tirtySeven: "37%",
        sixty: "60%",
        100: "100px",
        120: "120px",
      },
      margin: {
        three: "3px",
        ten: "10px",
        thirty: "30px",
        fifty: "50px",
      },
      borderRadius: {
        custom: "20px",
      },
      height: {
        100: "100px",
        180: "180px",
        200: "200px",
      },
      fontFamily: {
        sans: ["Hind"],
      },
      fontSize: {
        26: "26px",
      },
    },
  },
  plugins: [],
};

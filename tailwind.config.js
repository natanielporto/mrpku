// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#3F7410",
        primaryPink: "#DCB7AC",
        primaryBrown: "#7D5B3C",
        primaryRed: "#99153A",
        primaryDangerRed: "#EE1600",
        primaryLightOrange: "#FFECE1",
        primaryWhite: "#FFF",
        primaryDark: "#000101",
        primaryLightGreen: "#8BDFBB",
        primaryGrey50: "#A0A0A0",
        primaryGrey100: "#C1C1C1",

        bgLight: "#F2F1EF",
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
      fontSize: {
        26: "26px",
      },
    },
  },
  plugins: [],
};

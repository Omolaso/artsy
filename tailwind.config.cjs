/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      "artsy-black": "#000",
      "artsy-text-black": "#292929",
      "artsy-text-greyBlack": "#333333",
      "artsy-carousel-greyBackground": "#E2E2E2",
      "artsy-background-white": "#ffffff",
      "artsy-linearGradient-blue": "#4693ED",
      "artsy-linearGradient-brown": "#79C2D2",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "450px",
      },
    },
  },
  plugins: [],
};

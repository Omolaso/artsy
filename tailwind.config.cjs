/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      "artsy-text-black": "#292929",
      "artsy-background-white": "#fffff",
      "artsy-linearGradient-blue": "#4693ED",
      "artsy-linearGradient-brown": "#79C2D2",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

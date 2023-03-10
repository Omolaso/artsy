/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      "artsy-black": "#000",
      "artsy-text-black": "#292929",
      "artsy-text-greyBlack": "#333333",
      "artsy-searchGrey": "#F4F2F2",
      "artsy-HR-bg": "#AFB091",
      "artsy-carousel-greyBackground": "#E2E2E2",
      "artsy-background-white": "#ffffff",
      "artsy-linearGradient-blue": "#4693ED",
      "artsy-linearGradient-brown": "#79C2D2",
      "artsy-dropGreen": "#3EA03B",
      "artsy-dropEnded": "#999EA5",
      "artsy-button-blue": "#3341C1",
      "artsy-like-red": "#F44336",
      "artsy-cartBorder": "#747474",
      "artsy-linkBlue": "#006CA2",
      "artsy-cartTextColor": "#888888",
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

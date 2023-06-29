/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //Everything here will not overwrite all default values, but only those you overwrite. will add your custom screen to the end of the default breakpoint list.
      colors: {
        "blue": "#3f48cc",
        "react": "#00a8f3",
        "grey-light": "#c3c3c3",
        "grey": "#585858",
        "grey-dark": "#333333",
        "barely-visible-grey": "#fcfcfc"
      }
    },
    screens: { //Will overwrite all default values
      "xs": "380px",
      "s": "450px",
      "m": "600px",
      "l": "800px",
      "xl": "1080px"
    }
  },
  plugins: [],
}


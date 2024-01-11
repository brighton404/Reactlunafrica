/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-black": "#000",
        "base-white": "#fff",
        "base-black-secondary": "#101010",
        "contemporary-contemporary-var-2": "#c9f292",
        "base-gray": "#777",
        "base-white-secondary": "#eaeaea",
        "brand-brand-var-1": "#42c0de",
      },
      spacing: {},
      fontFamily: {
        "small-screen-subheading": "Poppins",
        montserrat: "Montserrat",
        inherit: "inherit",
      },
    },
    fontSize: {
      xl: "20px",
      "3xl": "22px",
      "30xl": "49px",
      "13xl": "32px",
      "7xl": "26px",
      "53xl": "72px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-black-secondary": "#101010",
        "base-white-secondary": "#eaeaea",
        "base-black": "#000",
        "base-white": "#fff",
        "base-gray": "#777",
        "contemporary-contemporary-var-2": "#c9f292",
        "brand-brand-var-1": "#42c0de",
        blueviolet: "#9622f1",
        firebrick: "#c00000",
      },
      spacing: {},
      fontFamily: {
        "wide-screen-title-bold": "Poppins",
        montserrat: "Montserrat",
        inherit: "inherit",
      },
    },
    fontSize: {
      "3xl": "22px",
      "30xl": "49px",
      "7xl": "26px",
      "13xl": "32px",
      "53xl": "72px",
      xl: "20px",
      lg: "18px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

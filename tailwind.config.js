/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-black-secondary": "#101010",
        "base-white-secondary": "#eaeaea",
        "base-black": "#000",
        "primary-pallete-primary": "#fff",
        "contemporary-contemporary-var-2": "#c9f292",
        blueviolet: "#9622f1",
        firebrick: "#c00000",
        "base-gray": "#777",
        "brand-brand-var-1": "#42c0de",
      },
      spacing: {},
      fontFamily: {
        "wide-screen-heading": "Poppins",
        montserrat: "Montserrat",
        inherit: "inherit",
      },
    },
    fontSize: {
      lg: "18px",
      "13xl": "32px",
      "29xl": "48px",
      xl: "20px",
      "3xl": "22px",
      "7xl": "26px",
      "53xl": "72px",
      "30xl": "49px",
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

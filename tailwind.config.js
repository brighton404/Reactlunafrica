/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-pallete-primary": "#fff",
        "base-black": "#000",
        "base-black-secondary": "#101010",
        "base-white-secondary": "#eaeaea",
        "base-gray": "#777",
        "contemporary-contemporary-var-2": "#c9f292",
        "brand-brand-var-1": "#42c0de",
        blueviolet: "#9622f1",
        firebrick: "#c00000",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "small-screen-subheading": "Poppins",
        inherit: "inherit",
      },
    },
    fontSize: {
      "3xl": "22px",
      "30xl": "49px",
      xl: "20px",
      "7xl": "26px",
      "13xl": "32px",
      "53xl": "72px",
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

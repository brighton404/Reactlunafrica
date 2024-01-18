/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-whites-var-1": "#fff",
        "base-blacks-var-2": "#101010",
        "base-blacks-var-1": "#000",
        "contemporary-var-2": "#c9f292",
        "base-greys-var-1": "#777",
        "base-greys-var-2": "#a1a1a1",
        "base-whites-var-2": "#eaeaea",
        "brand-health": "#42c0de",
        blueviolet: "#9622f1",
        firebrick: "#c00000",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "wide-screen-body-small": "Poppins",
        inherit: "inherit",
      },
      borderRadius: {
        "8xs": "5px",
        "909xl-2": "928.2px",
      },
    },
    fontSize: {
      "3xl": "22px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      lg: "18px",
      "53xl": "72px",
      "29xl": "48px",
      "lg-6": "18.6px",
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

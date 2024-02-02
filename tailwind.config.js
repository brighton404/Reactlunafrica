/** @type {import(tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-none": "#ffffff00",
        "base-blacks-var-1": "#000",
        "base-blacks-var-2": "#101010",
        "base-blacks-var-3": "#0A0A0A",
        "base-blacks-var-4": "#1E1F23",
        "base-blacks-var-5": "#19191D",
        "base-blacks-var-6": "#343539",

        "base-whites-var-1": "#fff",
        "base-whites-var-2": "#eaeaea",

        "contemporary-var-1": "#DA2E39",
        "contemporary-var-2": "#c9f292",

        "base-greys-var-1": "#777",
        "base-greys-var-2": "#a1a1a1",

        "brand-health": "#42c0de",
        "brand-shop": "#9ACB53",
        blueviolet: "#9622f1",
        firebrick: "#c00000",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        Poppins: "Poppins",
        inherit: "inherit",
      },
      borderRadius: {
        "8xs": "5px",
        "909xl-2": "928.2px",
      },
    },
    fontSize: {
      /*existing css sizing */
      "3xl": "22px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      lg: "18px",
      "53xl": "72px",
      "29xl": "48px",
      "lg-6": "18.6px",
      inherit: "inherit",

      /*sizing from design board that needs to be implemented*/
      /*wide screen */
      "wide-screen-title": "72px",
      "wide-screen-heading": "48px",
      "wide-screen-subheading": "32px",
      "wide-screen-body": "26px",
      "wide-screen-body-medium": "24px",
      "wide-screen-body-small": "22px",
      "wide-screen-body-x": "20px",
      "wide-screen-body-2x": "18px",
      "wide-screen-body-3x": "16px",
      "wide-screen-body-4x": "14px",
      /*small screens*/
      "small-screen-title": "28px",
      "small-screen-heading": "26px",
      "small-screen-subheading": "20px",
      "small-screen-body": "16px",
      "small-screen-body-medium": "14px",
      "small-screen-body-small": "12px",
      "small-screen-body-x": "10px",
      "small-screen-body-2x": "8px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "520px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

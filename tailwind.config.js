/** @type {import(tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-none": "#ffffff00", /*transparent*/
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
      "title": "66px",
      "heading": "62px",
      "heading-x": "60px",
      "heading-2x": "56px",
      "heading-3x": "54px",
      "heading-4x": "50px",
      "heading-5x": "46px",
      "subheading": "42px",
      "subheading-x": "38px",
      "subheading-2x": "34px",
      "subheading-3x": "30px",
      "body": "26px",
      "body-x": "24px",
      "body-2x": "22px",
      "body-3x": "20px",
      "body-4x": "18px",
      "small": "16px",
      "small-x": "14px",
      "small-2x": "12px",
      "small-3x": "10px",
      "small-4x": "8px"
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

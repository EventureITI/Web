/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "custom-sm": "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(26,26,26,1) 0%, rgba(20,19,21,0.8) 20%, rgba(13,12,15,0) 37%)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        300: 300,
        400: 400,
        500: 500,
        600: 600,
      },
      colors: {
        input: "#333333", //grey-light
        "main-color": "#0d9988", //main-teal
        "main-hover": "#12b7b4", //main-teal-lighter
        "sec-color": "#1F1F1F", //grey-dark
        "bg-main": "#1A1A1A", //grey-darker
      },
      boxShadow: {
        "custom-shadow": "0px 0px 2px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("daisyui")],
};

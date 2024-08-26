/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(26,26,26,1) 0%, rgba(20,19,21,0.8) 20%, rgba(13,12,15,0) 37%)',
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        300:300,
        400:400,
        500: 500,
        600: 600,
      },
      colors:{
        'input': '#333333',
        "main-color":'#4FE0D2',
        "sec-color":"#1F1F1F80",
        "bg-main":"#1A1A1A",
        customGray: '#333333',
        placeholde:'#858585'
      },
      boxShadow: {
        'custom-shadow': '0px 0px 2px 0px rgba(0, 0, 0, 0.25)',
       
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


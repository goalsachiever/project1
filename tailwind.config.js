/** @type {import('tailwindcss').Config} */
const colors=require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary:
      {
        100: "#f1f8f6",
        200: "#d4e9e2",   
        300: "#008248",
        400: "#1e3932",
      },
      secondary: "#f3f1e7",
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
    } ,
    fontFamily:
    {
       primary: "SoDoSans , 'Helvetica Neue' , Helvetica ,  sans-serif ",
    },
    extend: {
      fontSize:
      {
        13: '0.8125rem',
      },
      padding: 
      {
        'four-three': "133%",
      },
      backgroundImage:
      {
        'hero': "url('./star.webp')",
      },
    },
  },
  plugins: [
     require("@tailwindcss/aspect-ratio")
     ],
}
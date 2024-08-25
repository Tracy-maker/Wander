/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Preahvihear", "sans-serif"], 
      },
      fontSize: {
        'base': ['20px', '1.5'], 
      },
    },
  },
  variants: {},
  plugins: [],
};

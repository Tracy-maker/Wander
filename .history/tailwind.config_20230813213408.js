/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Preahvihear", "sans-serif"], 
      },
      fontSize: {
        'base': ['16px', '1.5'], // Example font size customization
      },
    },
  },
  variants: {},
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo2: ['"Russo One"', "sans-serif"],
        logo1: ['"Bebas Neue"', "sans-serif"],
        manrope: ["Manrope","sans-serif"],
      },
    },
  },
  plugins: [],
};

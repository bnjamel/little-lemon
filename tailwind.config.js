/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropSepia: {
        25: ".25",
        75: ".75",
      },
    },
  },
  plugins: [],
};

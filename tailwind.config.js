/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d63e3e",
        secondary: "#799ca9",
      },
    },
  },
  plugins: [require("daisyui")],
};

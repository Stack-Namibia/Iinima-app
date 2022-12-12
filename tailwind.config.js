/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d63e3e",
        secondary: "#799ca9",
      },
      backgroundImage: {
        wave1: "url('/src/assets/wave1.svg')",
        wave2: "url('/src/assets/wave2.svg')",
        wave3: "url('/src/assets/wave3.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};

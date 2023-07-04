/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d63e3e",
        secondary: "#799ca9",
        dot1: "#5B5A55",
        dot2: "#D1DDD1",
        dot3: "#5E8797",
        dot4: "#222E2E",
        dot5: "#631D16",
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

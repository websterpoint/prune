/** @type {import('tailwindcss').Config} */

// Import the colors from Tailwind CSS
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
      },
    },
  },
  plugins: [],
};

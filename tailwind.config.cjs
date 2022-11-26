/** @type {import('tailwindcss').Config} */
const { join } = require("path");

module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,jsx,ts,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

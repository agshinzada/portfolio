/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDarkColor: "#232931",
        secondaryDarkColor: "#393E46",
        thirdDarkColor: "#4ECCA3",
        fourdDarkColor: "#EEEEEE",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

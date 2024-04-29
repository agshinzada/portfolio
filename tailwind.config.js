/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "Poppins"],
      serif: ["ui-serif", "Poppins"],
      body: ['"Poppins"'],
    },
    screens: {
      mobile: "200px",
      // => @media (min-width: 640px) { ... }

      laptop: "890px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1180px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "main-green": "#35DF32",
        "second-green": "#65FA4D",
        "third-green": "#ABFF61",
        "main-dark": "#010504",
        "main-dark-slate": "#002207",
        "main-blue": "#1e87f0",
        "main-red": "#f0506e",
      },
    },
  },
  plugins: [],
};

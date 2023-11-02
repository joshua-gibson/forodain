/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
      backgroundImage: {
        forest: "url('./src/assets/img/forest.jpg')",
        dust: "url('./src/assets/img/dust2.webp')",
      },
      fontFamily: {
        nightmarePills: ["NightmarePills"],
      },
    },
  },
  plugins: [],
};

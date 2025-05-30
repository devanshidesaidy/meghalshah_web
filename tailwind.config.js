/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6c86e5",
        black: "#2b2a2a",
        gray: "#d3d3d3",
        white: "#ffffff",
      },
      fontFamily: {
        title: ["JosefinSans-Regular", "sans-serif"],
        subtitle: ["Palanquin-Regular", "sans-serif"],
        body: ["MiriamLibre-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};

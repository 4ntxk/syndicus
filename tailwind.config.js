/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c2e80",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        bgpurple: "#a83acd",
        purplelight: "#b67dc9",
        bgblue: "#2815d3",
        bgbluelight: "#6b5def",
      },
      screens: {
        xs: "345px",
        xxs: "250px",
        "2xl": "1600px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        collage: "url('/src/assets/bgcollage.png')",
      },
    },
  },
  plugins: [],
};

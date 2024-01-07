/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hover-color": "#79b59a",
        primary: "#4361EE",
        white: "#fff",
        green: "#99A98F",
        gray: "#808080",
        light_green:"#0abf34",
        "light-gray": "#EFECEB",

      },
    },
  },
  plugins: [],
};

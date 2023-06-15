/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#8CB7F5",
        primaryBlue: "#0D6EFD",
        secondaryBlue: "#c7e1ff",
        primaryGray: "#D9D9D9",
      },
    },
  },
  plugins: [],
};

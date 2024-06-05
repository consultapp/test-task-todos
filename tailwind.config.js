/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        W1: "500px",
      },
      scaleX: {
        W1: "98%",
        W2: "96%",
      },
    },
  },
  plugins: [],
};

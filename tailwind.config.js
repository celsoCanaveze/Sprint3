/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        header:"7vh",
        section: "70vh"
      },
      colors: {
        overlay:"rgba(0,0,0,0.5)",
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "accent" : "#c5113e",
        "bg": "#fefbf6",
        "text": "#e2fcd9",
        "primary": "#113ec5",
        "secondary": "#061302"
      },
    },
  },
  plugins: [],
}


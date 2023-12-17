/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '700':'700px',
        '1220':'1220px',
        '900':'900px',
      }
    },
  },
  plugins: [],
}


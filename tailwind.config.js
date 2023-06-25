/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#030406",
        "main-lightBlue": "#AED2ED",
        "danger-red": "#AC2E2E",
        "joi-lightBlue": "#71BACB",
        "bright-lightBlue": "#CDEBF8"
      },
      gridTemplateColumns: {
        "crew": "repeat(auto-fit, minmax(19rem, 1fr))",
        "character": "repeat(auto-fit, minmax(21rem, 1fr))",
        "logos": "repeat(auto-fit, minmax(11rem, 1fr))",
      }
    },
  },
  plugins: [],
}


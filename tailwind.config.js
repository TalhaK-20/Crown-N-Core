/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "neue-regular": "Neue Regular",
        "neue-medium": "Neue Medium",
        "neue-bold": "Neue Bold",
        "ghania": "Ghania",
        "brownish": "BROWNISH",
        "ezra-medium": "Ezra Medium"
      }
    },
  },
  plugins: [],
}


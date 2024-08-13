/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        // ou pour une autre police:
        // serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

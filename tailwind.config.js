/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": '##FFFFFF',
        "accent": '#FFA559',
        'accent-light': '#FF6000',
        'accent-dark': '#FFE6C7',
      },
      backgroundImage: {
        'hero': "url('../public/hero.jpg')",
      },
    },
  },
  plugins: [],
}


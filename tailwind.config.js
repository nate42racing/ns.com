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
        '585logo': "url('../public/585logo.jpg')",
      },
    },
  },
  plugins: [],
}


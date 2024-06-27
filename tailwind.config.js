/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgba(46, 49, 146, 1)',
      },
    },
  },
  plugins: [],
}


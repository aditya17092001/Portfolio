/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smpc': { 'max': '1150px' },  
        'smpcx': { 'max': '1515px' },  // Target screens less than 1150px
        'phone': { 'raw': '(max-width: 400px) and (max-height: 900px)' },
      },
    },
  },
  plugins: [],
}


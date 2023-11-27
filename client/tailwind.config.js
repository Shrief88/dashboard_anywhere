/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        CircularStd: ['CircularStd', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

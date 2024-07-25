/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'class',
  theme: {
    extend: {},
  },
};

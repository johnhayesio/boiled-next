module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      maxWidth: '128rem',
      margin: '0 auto',
      padding: '3rem',
      overflow: 'hidden',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

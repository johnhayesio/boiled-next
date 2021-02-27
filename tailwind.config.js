module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        maxWidth: '120rem',
        margin: '0 auto',
        padding: '3rem',
        overflow: 'hidden',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

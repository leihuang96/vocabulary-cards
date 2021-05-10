module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./*.html', './public/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamlity: {
        sans: ['Roboto'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

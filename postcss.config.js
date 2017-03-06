module.exports = {
  plugins: {
    'postcss-import': {},
    'stylelint': {},
    'postcss-nesting': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%']
    }
  }
};

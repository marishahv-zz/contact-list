module.exports = {
  'extends': 'airbnb',
  'rules': {
    'no-debugger': 'off',
    'react/no-deprecated': 'error',
    'linebreak-style': ["error", "unix"],
  },
  'parser': 'babel-eslint',
  'plugins': [
    'react',
    'jsx-a11y',
    'import'
  ],
  'env': {
    'browser': true
  }
};

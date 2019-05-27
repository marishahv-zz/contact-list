module.exports = {
  'extends': 'airbnb',
  'rules': {
    'no-debugger': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/no-deprecated': 'error',
    "linebreak-style": 0
  },
  'parser': 'babel-eslint',
  'plugins': [
    'react',
    'jsx-a11y',
    'import'
  ]
};
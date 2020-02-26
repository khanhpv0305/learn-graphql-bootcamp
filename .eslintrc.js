const path = require('path')

module.exports = {
  plugins: [
    'react',
  ],
  extends: ['airbnb'],
  rules: {
    'semi': ["error", "never"],
    'object-curly-spacing': ["error", "never"],
    'import/prefer-default-export': 0,
    'radix': 0,
    'import/no-unresolved': [2, {caseSensitive:  false}],
    'max-len': 0,
    'no-console': 0,
  },
}

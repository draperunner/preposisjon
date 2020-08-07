module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['warn', 160],
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
    'require-await': 'error',
  },
}

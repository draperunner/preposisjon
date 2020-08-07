module.exports = {
  extends: 'eslint:recommended',
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    semi: ['error', 'never'],
  },
}

module.exports = {
  root: true,
  ignorePatterns: ['dist', 'build', 'docs', 'node_modules'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: [],
  overrides: [{ files: ['*.vue', '*.ts'] }],
  rules: {
    'no-undef': 'off', // we let TypeScript handle this
  },
}

module.exports = {
  root: true,
  ignorePatterns: ['dist', 'build', 'docs', 'node_modules', 'build.js'],
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [{ files: ['*.ts', '*.tsx'] }],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}

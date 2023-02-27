module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 100,
  htmlWhitespaceSensitivity: 'ignore',
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './packages/tailwind-config/tailwind.config.js',
}

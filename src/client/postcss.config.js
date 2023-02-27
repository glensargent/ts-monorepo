const config = require('@ts-monorepo/tailwind-config/tailwind.config.js')
module.exports = {
  plugins: {
    tailwindcss: { config },
    autoprefixer: {},
  },
}

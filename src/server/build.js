const { build } = require('esbuild')

build({
  entryPoints: ['./src/index.ts'],
  outdir: 'dist',
  bundle: true,
  minify: true,
  platform: 'node',
  tsconfig: './tsconfig.build.json',
  keepNames: true,
}).catch(() => process.exit(1))

const esbuild = require("esbuild");
const postCssPlugin = require("./esplugins/postcss.js");
const htmlPlugin = require('./esplugins/html');
const copyPlugin = require('./esplugins/copy');
const svgrPlugin = require('esbuild-plugin-svgr');

const isProduction = process.argv.includes('--production');

const config = {
  entryPoints: {
    client: 'src/index.tsx',
  },
  outdir: './docs/',
  bundle: true,
  watch: process.argv.includes('--watch'),
  sourcemap: !isProduction,
  metafile: true,
  minify: isProduction,
  define: { global: "window" },
  loader: {
    '.png': 'file',
    '.woff': 'file',
    '.woff2': 'file',
    '.eot': 'file',
    '.ttf': 'file',
  },
  logLevel: isProduction ? 'info' : 'debug',
  assetNames: 'assets/[name]',
  chunkNames: '[ext]/[name]-[hash]',
  plugins: [
    svgrPlugin({ icon: true }),
    postCssPlugin,
    copyPlugin('./static'),
    htmlPlugin({
      path: 'index.html',
      entryPoints: ['src/index.tsx'],
      render: ({ css, js }) => `
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${css.map(src => `<link rel="stylesheet" href="/${src}">`)}
        </head>
        <body>
            ${js.map(src => `<script src="/${src}" defer=""></script>`)}
        </body>
        </html>
      `
    }),
  ],
};

esbuild
  .build(config)


esbuild.build({
  outdir: './docs/',
  bundle: true,
  entryPoints: { back: 'src/back.ts' },
  platform: "node",
  target: "node12",
})

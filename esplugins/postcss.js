const postcss = require("postcss");
const fs = require("fs/promises");
const path = require("path");
const config = require("../postcss.config.js");

module.exports = {
 name: "postcss",
 async setup(build) {
  const styles = {};

  build.onResolve({ filter: /.module$/ }, (args) => ({ path: args.path }))

  build.onLoad({ filter: /.module$/ }, (args) => ({ contents: styles[args.path] || "", loader: "css" }))

  build.onLoad({ filter: /.css$/ }, async ({ path: p }) => {
   const file = await fs.readFile(p, "utf8");

   if (!config) return { contents: file, loader: "css" };

   const { css, messages } = await postcss(config.plugins)
     .process(file, { ...config.options, from: p });

   const key = p.replace('.css', '.module');

   styles[key] = css;

   const { exportTokens } = messages.find(item => item.plugin === 'postcss-modules');

   const contents = `import "${key}"; \nexport default ${JSON.stringify(exportTokens)}`;

   return { contents, loader: "ts" };
  });
 }
}

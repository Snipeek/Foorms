const path = require('path');
const fs = require('fs/promises');

module.exports = (...pages) => ({
  name: "html",
  async setup(build) {
    build.onEnd(async ({ metafile }) => {
      const { outdir } = build.initialOptions;
      const files = { js: [], css: [] };

      for (const key in metafile.outputs) {
        const item = metafile.outputs[key];

        files[item.entryPoint] = {
          js: [path.relative(outdir, key)],
          css: [item.cssBundle && path.relative(outdir, item.cssBundle)].filter(Boolean),
        }
      }

      await Promise.all(
        pages.map(
          ({ path: name, entryPoints, render = () => '' }) => (
            fs.writeFile(
              path.resolve(outdir, name),
              render(files[entryPoints])
            )
          )
        )
      )
    })
  }
})

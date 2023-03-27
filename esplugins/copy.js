const fs = require('fs/promises');
const path = require('path');

module.exports = (from, to = '') => ({
  name: "copy",
  async setup(build) {
    build.onEnd(() => {
      fs.cp(from, path.resolve(build.initialOptions.outdir, to), {
        force: true,
        recursive: true,
      })
    })
  }
})
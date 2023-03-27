const each = require('postcss-each');
const postcssPresetEnv = require('postcss-preset-env');
const postcssModules = require("postcss-modules");

module.exports = {
  plugins: [
    postcssModules({
      getJSON(cssFilename, json) {},
      localsConvention: "camelCase",
      generateScopedName: "[name]__[local]--[hash:base64:5]",
    }),
    each(),
    postcssPresetEnv({
      features: {
        'environment-variables': true,
        'all-property': true,
        'nesting-rules': true,
      },
    }),
  ],
  options: {},
}

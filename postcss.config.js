const postcssPresetEnv = require("postcss-preset-env");

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [postcssPresetEnv()],
};

module.exports = config;

const custom = require('../webpack.config.js')

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links", 
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "storybook-css-modules-preset"
  ],
  core: {
    builder: "webpack5"
  },
  webpackFinal: (config) => {
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@emotion/babel-preset-css-prop'),
    ];
    return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {...config.resolve.alias, ...custom.resolve.alias}
    }
  }}
};
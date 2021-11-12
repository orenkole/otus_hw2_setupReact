const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { BUILD_DIRECTORY, SOURCE_DIRECTORY } = require("./constants");

const config = {
  entry: path.resolve(SOURCE_DIRECTORY, "index.tsx"),
  output: {
    path: BUILD_DIRECTORY,
    filename: "bundle.js",
  },
  resolve: {
    extensions: ["", ".webpack.js", ".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = config;

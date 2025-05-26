// webpack.dev.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  // fast, detailed mapping back to source
  devtool: "eval-source-map",

  // serve & watch
  devServer: {
    static: "./dist",
    watchFiles: ["./src/index.html", "./src/**/*.js", "./src/**/*.css"],
    open: true,
    hot: true,
  },

  output: {
    filename: "main.js",    // simple name for dev
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        // inject CSS into <style> for HMR
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});

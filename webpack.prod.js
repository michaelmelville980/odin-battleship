// webpack.prod.js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  // external source‑map (optional) or disable
  devtool: "source-map",

  output: {
    // contenthash for long‑term caching
    publicPath: './',
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash].js",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        // extract CSS to files in prod
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    // emit .css files
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: { chunks: "all" },
  },
});

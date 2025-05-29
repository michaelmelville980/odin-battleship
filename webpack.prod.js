// webpack.prod.js
import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default merge(common, {
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

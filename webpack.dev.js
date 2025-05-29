// webpack.dev.js
import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default merge(common, {
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

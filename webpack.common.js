const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/js/app.js",
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
            loader: "file-loader",
            options: {
                name: "[name].[hash].[ext]",
                publicPath: "img",
                outputPath: "img"
            }
        }
      },
    ],
  },
};
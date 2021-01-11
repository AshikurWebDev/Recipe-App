const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
module.exports = merge(common,
    {
  mode: "development",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            "style-loader",//Step 03 convert the css DOM into the js file
            "css-loader",//step 02: Convert css to js DOM
            "sass-loader"//Step 01: Convert sass to normal css
        ],
      },
    ],
  },
});

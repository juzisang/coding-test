const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // 多入口
  entry: { index: "./src/index.js", other: "./src/other.js" },
  output: {
    // 多出口
    filename: "[name].[hash:8].js",
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "other.html",
      chunks: ["other"]
    })
  ]
};

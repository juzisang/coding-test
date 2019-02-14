// Html 模板
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导出 css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 这里必须也要加，替换到 style-loader
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    // 将 css 抽离
    new MiniCssExtractPlugin({
      // 处理处的 css 名
      filename: "main.css"
    })
  ]
};

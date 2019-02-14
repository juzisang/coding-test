// Html 模板
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导出 css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// css 压缩
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// js 压缩
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js"
  },
  // 优化项 production mode 会走这里
  optimization: {
    // 压缩
    minimizer: [
      // webpack 默认项，如果我们需要自定义 minimizer 项，这一项必须填写，否则 js 将不会压缩
      new UglifyJsPlugin({
        // 是否开启缓存
        cache: true,
        // 是否是并发压缩
        parallel: true,
        // 开启源码映射
        sourceMap: true
      }),
      // 压缩 css
      new OptimizeCSSAssetsPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
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

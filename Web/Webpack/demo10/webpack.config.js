const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// 1) cleanWebpackPlugin
// 2) copyWebpackPlugin
// 3) bannerPlugin

module.exports = {
  mode: "production",
  // 配置 源码映射，会生成一个 sourcemap文件，会标识当前log的位置
  // 大 和 全，第几列，第几行都会标识出来
  // devtool: "source-map",
  // 不会生成单独文件，但是会被打包进源文件里，能显示行和列
  // devtool: "eval-source-map",
  // 不会产生列，但是是一个单独的 map 文件
  // devtool: "cheap-module-source-map",
  // 不会参数文件，集成在打包后的文件中，不会产生列
  // devtool: "cheap-module-eval-source-map",
  // 多入口
  entry: "./src/index.js",
  // 监听文件改动，实时打包
  watch: true,
  // watch 参数
  watchOptions: {
    // 多少秒询问一次改动
    poll: 1000,
    // 防抖，放在一直触发
    aggregateTimeout: 5000,
    // 不需要监控的文件
    ignored: /node_modules/
  },
  output: {
    // 多出口
    filename: "[name].[hash:8].js",
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin("./dist")
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 模式，默认两种， production development
  mode: "production",
  // 入口
  entry: "./src/index.js",
  output: {
    // 打包后的文件名，hash:8 名字中带 8位 hash
    filename: "bundle.[hash:8].js",
    // 打包路径，必须是绝对路径
    path: path.resolve("dist")
  },
  // 开发服务器 配置
  devServer: {
    // 端口你
    port: 3000,
    // 进度条
    progress: true,
    // 根目录路径
    contentBase: "./dist",
    // 压缩
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 模板路径
      template: "./src/index.html",
      // 打包出来的名字
      filename: "index.html",
      // 增加 hash，script 引入加上 bundle.js?84b7cdef825ff370ae2d
      hash: true,
      // 压缩
      minify: {
        // 删除属性的双引号
        removeAttributeQuotes: true,
        // 折叠空行
        collapseWhitespace: true
      }
    })
  ],
  // 模块处理
  module: {
    // 文件处理规则
    rules: [
      {
        test: /\.css$/,
        // loader 执行循序，是从右至左执行，从下至上执行
        use: [
          // loader 也可以传入一个对象
          {
            // 将 css 插入 head 中
            loader: "style-loader",
            // style-loader 的配置
            options: {
              // 插入到顶部，默认是底部
              insertAt: "top"
            }
          },
          // 解析 css @import 语法
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: {
          loader: "less-loader"
        }
      }
    ]
  }
};

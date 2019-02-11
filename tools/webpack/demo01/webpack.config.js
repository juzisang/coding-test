const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  // 优化项
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
  // webpack-dev-server 必须使用这个命令来运行，才会使用这里的配置
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
  // 插件使用顺序没有先后
  plugins: [
    // Html 插件
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
    }),
    // 将 css 抽离
    new MiniCssExtractPlugin({
      // 处理处的 css 名
      filename: "main.css"
    })
  ],
  // 模块处理
  module: {
    // 文件处理规则
    rules: [
      // 处理 css
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
      //处理 less
      {
        test: /\.less$/,
        // 将 css 插入到 style 中
        use: [
          // 使用 MiniCssExtractPlugin 导出，这里也需要写 loader，替换 style 插入
          // 同理，其它 css 想导出 ，也是这样用
          MiniCssExtractPlugin.loader,
          // "style-loader",
          // css 解析
          "css-loader",
          // 加上 前置处理器，自动加前缀
          "postcss-loader",
          // 将 less 转化成 css
          "less-loader"
        ]
      }
    ]
  }
};

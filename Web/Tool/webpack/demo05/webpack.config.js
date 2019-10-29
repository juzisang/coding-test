const HtmlWebpaclPlugin = require("html-webpack-plugin");
// 注意 如果在配置中 启动 hot,必须要加这个插件，否则会报错
// 在命令行中 增加 --hot 则无需加这个插件
const HotModuleReplacementPlugin = require("webpack").HotModuleReplacementPlugin;

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "build.[hash:8].js"
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
    compress: true,
    // 热更新
    hot: true
  },
  plugins: [
    new HtmlWebpaclPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    // 热更新
    new HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

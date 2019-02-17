const HotModuleReplacementPlugin = require("webpack").HotModuleReplacementPlugin;
/**
 * yarn add webpack-dev-server -D
 * webpack-dev-server --config webpack.server.config.js --hot
 */
module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js",
    path: path.join(__dirname, "dist")
  },
  plugins: [
    // 命令没有加 --hot，则必须加上这个插件，热更新
    new HotModuleReplacementPlugin()
  ],
  // webpack-dev-server 必须使用这个命令来运行，才会使用这里的配置
  devServer: {
    // 端口
    port: 3000,
    // 进度条
    progress: true,
    // 根目录路径
    contentBase: "./dist",
    // 压缩
    compress: true,
    // 热更新
    hot: true
  }
};

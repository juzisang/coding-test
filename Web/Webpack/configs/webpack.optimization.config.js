const path = require("path");
const IgnorePlugin = require("webpack").IgnorePlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Happypack = require("happypack");

/**
 * 优化打包
 * yarn add html-webpack-plugin @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @babel/core happypack -D
 */
module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js"
  },
  devServer: {
    port: 8080,
    open: true,
    contentBase: "./dist"
  },
  plugins: [
    // 忽略掉 moument 中 的 ./locale 目录
    new IgnorePlugin(/\.\/locale/, /moument/),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    new Happypack({
      // 开始三个线程打包
      threads: 3,
      // module 的id
      id: "js",
      // loader配置
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      ]
    })
  ],
  module: {
    // 不去解析 jquery 中的依赖关系，可以提高build速度
    noParse: /jquery/,
    rules: [
      {
        test: /\.js$/,
        // 排除 node_modules 中的依赖
        exclude: /node_modules/,
        // 只解析 src 目录中的代码
        include: path.join(__dirname, "src"),
        // 使用 happypack 打包，id 为 happypack 中的配置
        use: "Happypack/loader?id=js"
      }
    ]
  }
};

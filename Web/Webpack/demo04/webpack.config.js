const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "build.[hash:8].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        // 只编译 src 路径下的
        include: path.resolve(__dirname, "src"),
        // 排查 node_modules 中的编译
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // 将 es6 转换成 es5
            presets: ["@babel/preset-env"],
            plugins: [
              // 装饰器
              [
                "@babel/plugin-proposal-decorators",
                {
                  // 宽松模式
                  legacy: true
                }
              ],
              // class 属性 可以直接赋值
              ["@babel/plugin-proposal-class-properties", { legacy: true }],
              // 帮我们做语法转换，比如 promise 的语法转换，并且添加转换之后的 es5 方法
              // 帮我们将各个模块中的公用代码提取出来
              // 但是 es6 中实例新增的方法，这个包不会帮我们添加 需要在代码中引入 @babel/polyfill
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      }
    ]
  }
};

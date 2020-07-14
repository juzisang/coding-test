const HtmlWebpackPlugin = require("html-webpack-plugin");
// 在每个模块中注入 全局变量
const ProvidePlugin = require("webpack").ProvidePlugin;

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "build.js"
  },
  devServer: {
    port: 8000
  },
  // 表示这个模块是外部引入，不需要打包
  //   externals: {
  //     // 不打包 jquery
  //     jquery:"$"
  //   },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    // 往模块中注入变量
    new ProvidePlugin({
      $: "jquery"
    })
  ],
  module: {
    rules: [
      // 暴露 $ 到 windows
      // 注意：还是需要在js中 import 才能在window.$上使用
      {
        test: require.resolve("jquery"),
        use: [
          {
            loader: "expose-loader",
            options: "$"
          }
        ]
      }
    ]
  }
};

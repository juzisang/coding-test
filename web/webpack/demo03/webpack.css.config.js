const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js"
  },
  // 模块处理
  module: {
    // 文件处理规则
    rules: [
      // css 文件
      {
        test: /\.css$/,
        // loader 处理列表，注意，loader执行顺序是从右至左，从下至上
        use: [
          {
            // 将 css 插入到以style，插入到 head 中
            loader: "style-loader",
            options: {
              // css 插入到 head 最顶部
              insertAt: "top"
            }
          },
          // 解析 css 中的 @import
          "css-loader",
          "postcss-loader"
        ]
      },
      // sass 文件
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    })
  ]
};

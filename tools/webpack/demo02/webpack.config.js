const path = require("path");
// 处理 HTML 配置
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main1: "./src/main1.js",
    main2: "./src/main2.js"
  },
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve("dist")
  },
  plugins: [
    ...["main1", "main2"].map(name => {
      // Html 插件
      return new HtmlWebpackPlugin({
        // 模板路径
        template: "./index.html",
        // 打包出来的名字，注意这个，防止重名覆盖
        filename: `${name}.index.html`,
        // Html 需要引入的模块
        chunks: [name],
        // 增加 hash，script 引入加上 bundle.js?84b7cdef825ff370ae2d
        hash: true,
        // 压缩
        minify: {
          // 删除属性的双引号
          removeAttributeQuotes: true,
          // 折叠空行
          collapseWhitespace: true
        }
      });
    })
  ]
};

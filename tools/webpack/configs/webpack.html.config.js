const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * yarn add html-webpack-plugin -D
 */
const htmlWebpackConfig = {
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
    new HtmlWebpackPlugin({
      // 模板路径
      template: "./index.html",
      // 打包出来的名字，注意这个，防止重名覆盖
      filename: `index.html`,
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
  ]
};

/**
 * 多页面
 */
const multiWebpackConfig = Object.assign({}, htmlWebpackConfig, {
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
});

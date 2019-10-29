## 依赖

```bash
yarn add html-webpack-plugin -D
```

## 引入 Html 模板

主要是利用 `html-webpack-plugin` 插件实现 `html` 模板

```js
const path = require("path");
// 处理 HTML 配置
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve("dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 模板路径
      template: "./index.html",
      // 打包出来的名字
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
```

## 配置多入口多页面

```js
module.exports = {
  mode: "development",
  // 配置多个入口
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
      return new HtmlWebpackPlugin({
        template: "./index.html",
        // 打包出来的名字，注意这个，防止重名覆盖
        filename: `${name}.index.html`,
        // Html 需要引入的模块
        chunks: [name],
        hash: true,
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true
        }
      });
    })
  ]
};
```

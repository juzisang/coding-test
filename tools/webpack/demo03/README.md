## CSS 处理

```bash
// 安装所需 loader
yarn add css-loader less less-loader node-sass sass-loader -D
```

```js
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
          "css-loader"
        ]
      },
      // sass 文件
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
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
```

## CSS 导出

```bash
yarn add mini-css-extract-plugin -D
```

```js
// Html 模板
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导出 css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 这里必须也要加，替换到 style-loader
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    // 将 css 抽离
    new MiniCssExtractPlugin({
      // 处理处的 css 名
      filename: "main.css"
    })
  ]
};
```

## CSS 压缩

```bash
yarn add optimize-css-assets-webpack-plugin uglifyjs-webpack-plugin -D
```

```js
// Html 模板
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导出 css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// css 压缩
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// js 压缩
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js"
  },
  // 优化项 production mode 会走这里
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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    // 将 css 抽离
    new MiniCssExtractPlugin({
      // 处理处的 css 名
      filename: "main.css"
    })
  ]
};
```

## postcss

- 安装 loader

```bash
yarn add postcss-loader -D
```

- webpack 配置

```js
{
  test: /\.scss$/,
  // 注意 ，postcss-loader 必须写在 css-loader 之前
  use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
};
```

- 增加 `postcss.config.js` 配置文件

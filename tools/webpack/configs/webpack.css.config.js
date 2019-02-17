const path = require("path");

/**
 * yarn add css-loader style-loader less less-loader node-sass sass-loader -D
 * 基本 css 配置
 */
const cssWebpackConfig = {
  // production development
  mode: "development",
  // 入口 string array object
  entry: "./src/main.js",
  // 出口
  output: {
    // build name
    filename: "[name].[hash:8].js",
    // build 路径
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      // yarn add css-loader style-loader
      {
        test: /\.css$/,
        // Array<string> or Array<object>
        use: [
          // 直接 style 插入 html 中
          {
            loader: "style-loader"
          },
          // 编译 css
          {
            loader: "css-loader"
          }
        ]
      },
      //   yarn add less less-loader
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },
      // yarn add node-sass sass-loader
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};

// =================================================================================

/**
 * yarn add css-loader mini-css-extract-plugin optimize-css-assets-webpack-plugin uglifyjs-webpack-plugin -D
 * css 导出
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const cssExtWebpackConfig = Object.assign(cssWebpackConfig, {
  // 优化项 production mode 会走这里
  optimization: {
    // 压缩
    minimizer: [
      // webpack 默认项，如果我们需要自定义 minimizer 项，这一项必须填写，否则 js 将不会压缩
      new UglifyjsWebpackPlugin({
        // 是否开启缓存
        cache: true,
        // 是否是并发压缩
        parallel: true,
        // 开启源码映射
        sourceMap: true
      }),
      // 压缩 css
      new OptimizeCssAssetsWebpackPlugin()
    ]
  },
  plugins: [
    // 将 css 抽离
    new MiniCssExtractPlugin({
      // 处理处的 css 名
      filename: "main.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 增加这个，替换掉 style-loader
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  }
});

// =================================================================================

/**
 * yarn add postcss-loader autoprefixer -D
 * touch postcss.config.js
 * 添加 PostCss
 */
const postCssWebpackConfig = Object.assign(cssExtWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          // 增加 post 配置
          {
            loader: "postcss-loader",
            options: {
              config: {
                // postcss.config.js 所在目录
                path: path.join(__dirname, "./")
              }
            }
          }
        ]
      }
    ]
  }
});

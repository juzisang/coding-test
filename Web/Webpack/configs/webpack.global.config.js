/**
 * yarn add expose-loader -D
 */
const globalExposeWebpackConfig = {
  mode: "development",
  entry: "./src/main.js",
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

// =================================================================================

/**
 *
 * 往模块中注入变量
 */
const ProvidePlugin = require("webpack").ProvidePlugin;
const globalProvideWebpackConfig = {
  mode: "development",
  entry: "./src/main.js",
  plugins: [
    // 往模块中注入变量
    new ProvidePlugin({
      $: "jquery"
    })
  ]
};

// =================================================================================

/**
 * 模块别名
 */
const globalExternalsWebpackConfig = {
  mode: "development",
  entry: "./src/main.js",
  // 表示这个模块是外部引入，不需要打包
  externals: {
    // 不打包 jquery
    jquery: "$"
  }
};

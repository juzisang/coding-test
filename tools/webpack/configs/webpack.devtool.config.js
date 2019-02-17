const path = require("path");

/**
 * devtool 说明
 */
const jsWebpackConfig = {
  mode: "development",
  entry: "./src/main.js",
  // 配置 源码映射，会生成一个 sourcemap文件，会标识当前log的位置
  // 1) 大 和 全，第几列，第几行都会标识出来
  devtool: "source-map",
  // 2) 不会生成单独文件，但是会被打包进源文件里，能显示行和列
  // devtool: "eval-source-map",
  // 3) 不会产生列，但是是一个单独的 map 文件
  // devtool: "cheap-module-source-map",
  // 4) 不会参数文件，集成在打包后的文件中，不会产生列
  // devtool: "cheap-module-eval-source-map",
  output: {
    filename: "[name].[hash:8].js",
    path: path.join(__dirname, "dist")
  }
};

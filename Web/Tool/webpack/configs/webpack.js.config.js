const path = require("path");

/**
 * 啥都不用加，这就是打包js
 */
const jsWebpackConfig = {
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
  }
};

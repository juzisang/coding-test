const path = require("path");

/**
 * watch 说明
 */
const jsWebpackConfig = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js",
    path: path.join(__dirname, "dist")
  },
  // 监听文件改动，实时打包
  watch: true,
  // watch 参数
  watchOptions: {
    // 多少秒询问一次改动
    poll: 1000,
    // 防抖，放在一直触发
    aggregateTimeout: 5000,
    // 不需要监控的文件
    ignored: /node_modules/
  }
};

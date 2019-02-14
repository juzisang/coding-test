const path = require("path");

module.exports = {
  // 模式，默认两种， production development
  // production 生产环境，打包出来的 js 会进行，压缩混淆，优化
  // development 开发环境 不会压缩代码
  mode: "development",
  // 入口
  entry: "./src/main.js",
  // 出口
  output: {
    // 打包后的文件名，hash:8 名字中带 8位 hash
    filename: "bundle.[hash:8].js",
    // 打包路径，必须是绝对路径
    path: path.resolve("dist")
  }
};

console.log(path.resolve("dist"));

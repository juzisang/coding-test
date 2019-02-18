const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

/**
 * yarn add clean-webpack-plugin -D
 * clean 插件使用
 * 每次启动时，清空dist目录
 */
const cleanWebpackConfig = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js",
    path: path.join(__dirname, "dist")
  },
  plugins: [new CleanWebpackPlugin("./dist")]
};

/**
 * yarn add copy-webpack-plugin -D
 * 拷贝不需要打包的静态文件
 */
const CopyWebpackPlugin = require("copy-webpack-plugin");
const copyWebpackConfig = Object.assign({}, cleanWebpackConfig, {
  plugins: [
    new CopyWebpackPlugin({
      from: "./doc",
      to: "./doc"
    })
  ]
});

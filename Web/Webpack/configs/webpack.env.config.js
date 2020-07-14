const path = require("path");
const DefinePlugin = require("webpack").DefinePlugin;

/**
 * 定义环境变量
 * DefinePlugin
 */
const envWebpackConfig = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js",
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new DefinePlugin({
      // 字符串
      DEV: "'DEV'",
      // boolean
      FLAG: "true",
      // 表达式
      EX: "1+1"
    })
  ]
};

const baseConfig = {};

const devConfig = {};

const prodConfig = {};

/**
 * yarn add webpack-merge -D
 * 区分不同环境变量
 */
const webpackMerge = require("webpack-merge");
const envNodeWebpackConfig = webpackMerge(baseConfig, process.env.NODE_TYPE ? devConfig : prodConfig);

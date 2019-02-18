const path = require("path");
const IgnorePlugin = require("webpack").IgnorePlugin;

/**
 * 优化项目
 */
const optWebpackConfig = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js"
  },
  plugins: [
    // 忽略掉 moument 中 的 ./locale 目录
    new IgnorePlugin(/\.\/locale/, /moument/)
  ],
  module: {
    // 不去解析 jquery 中的依赖关系，可以提高build速度
    noParse: /jquery/,
    rules: [
      {
        test: /\.js$/,
        // 排除 node_modules 中的依赖
        exclude: /node_modules/,
        // 只解析 src 目录中的代码
        include: path.join(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  }
};

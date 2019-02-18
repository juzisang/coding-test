const path = require("path");

const resolveConfigWebpack = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js",
    path: path.join(__dirname, "dist")
  },
  resolve: {
    // 后缀名查找顺序
    extensions: [".js", ".css", ".json"],
    // 配置 第三方包查找路径
    modules: [path.relative("node_modules")],
    // 查找 package.json 的入口，先找style字段，找不到就main
    mainFields: ["style", "main"],
    // 入口文件名字
    mainFiles: [],
    // 别名
    alias: {
      juqery: "jquery/dist/jquery.min.js"
    }
  }
};

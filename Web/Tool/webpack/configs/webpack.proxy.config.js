/**
 * yarn add webpack-dev-server -D
 * webpack-dev-server --config webpack.proxy.config.js
 * 请求代理
 */
const proxyWebpackConfig = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js",
    path: path.join(__dirname, "dist")
  },
  devServer: {
    proxy: {
      // 将 /api 代理到指定地址
      // "/api": "http://localhost:3000"
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: ""
      }
    }
  }
};

/**
 * mock 数据
 */
const mockWebpackConfig = Object.assign({}, proxyWebpackConfig, {
  devServer: {
    before(app) {
      app.get("/user", (req, res) => {
        res.json({ state: "ok", code: 200 });
      });
    }
  }
});

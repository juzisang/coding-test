const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "build.js"
  },
  devServer: {
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "eslint-loader",
            options: {
              enforce: "pre"
            }
          }
        ]
      }
    ]
  }
};

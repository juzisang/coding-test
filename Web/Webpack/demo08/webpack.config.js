const HtmlWebpackPlugin = require("html-webpack-plugin");
const HotModuleReplacementPlugin = require("webpack").HotModuleReplacementPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const path = require("path");

module.exports = {
  // mode: "development",
  mode: "production",
  entry: "./src/main.js",
  output: {
    filename: "build.[hash:8].js",
    path: path.join(__dirname, "dist")
    // 静态资源统一加上这个
    // publicPath: "https://www.baidu.com/"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  devServer: {
    port: 8000,
    hot: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // 使用 html-withimg-loader 处理模板
      template: "html-withimg-loader!" + "./index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      // css 归类
      filename: "css/main.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      // 处理 css js 中引入的资源，转换为 url
      // {
      //   test: /\.(jpg|png|gif)$/,
      //   use: ["file-loader"]
      // },
      // 处理 html 中引入的图片
      {
        test: /\.html&/,
        use: "html-withimg-loader"
      },
      // 如果图片小于200kb，将会将图片转为base64
      // 否则使用内部 file-loader 处理成url
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            // limit: 200 * 1024,
            limit: 1,
            outputPath: "img",
            // 只给img文件，加上域名
            publicPath: "https://www.baidu.com/"
          }
        }
      }
    ]
  }
};

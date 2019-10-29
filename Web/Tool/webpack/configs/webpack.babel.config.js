/**
 * yarn add babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
 * yarn add @babel/runtime @babel/polyfill
 */
const babelWebpackConfig = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // ES6 > ES*
            presets: ["@babel/preset-env"],
            // 注入运行时需要的库，需要配合@babel/runtime
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  }
};

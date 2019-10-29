/**
 * yarn add eslint eslint-loader -D && touch .eslintrc.json
 * yarn add eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node -D
 */

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
            options: {
              // 将 eslint 执行前置
              enforce: "pre"
            }
          }
        ]
      }
    ]
  }
};

## 依赖

```bash
yarn add eslint eslint-loader -D && touch .eslintrc.json
```

## 配置
```js
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            // 配置 eslint 
            loader: "eslint-loader",
            options: {
              // 在所有 loader 之前执行
              enforce: "pre"
            }
          }
        ]
      }
    ]
  }
```

## 常用规范

### Standard
> https://standardjs.com/readme-zhcn.html
> https://github.com/standard/eslint-config-standard

- `依赖`

```bash
yarn add eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node -D
```

- `.eslintrc.json`

```json
{
  "extends": "standard"
}
```

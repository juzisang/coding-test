## 暴露全局变量

### 第一种方式 expose-loader

- 内联加载

```bash
yarn add expose-loader -D
```

```js
// 将 jquery 以 $ 挂载到 window 上
import $ from "expose-loader?$!jquery";
```

- 普通加载

```js
// 暴露 $ 到 windows
// 注意：还是需要在js中 import 才能在window.$上使用
{
  test: require.resolve("jquery"),
  use: [
    {
      loader: "expose-loader",
      options: "$"
    }
  ]
};
```

### 第二种 ProvidePlugin

```js
// 在每个模块中注入 全局变量
const ProvidePlugin = require("webpack").ProvidePlugin;

// plugins 中加入
// 往模块中注入变量
new ProvidePlugin({
  $: "jquery"
});
```

### 外包模块不打包进 build

```js
// 表示这个模块是外部引入，不需要打包
externals: {
  // 不打包 jquery
  jquery: "$";
}
```

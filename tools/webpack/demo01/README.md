## 基础打包 JS

```js
module.exports = {
  // 模式，默认两种， production development
  // production 生产环境，打包出来的 js 会进行，压缩混淆，优化
  // development 开发环境 不会压缩代码
  mode: "development",
  // 入口
  entry: "./src/main.js",
  // 出口
  output: {
    // 打包后的文件名，hash:8 名字中带 8位 hash
    filename: "bundle.[hash:8].js",
    // 打包路径，必须是绝对路径
    path: path.resolve("dist")
  }
};
```

## webpack 打包文件分析

可以看到，模块只会安装一次，后续的引入只会返回第一次的结果的引用

```js
// 立即执行函数，modules 就是我们引入的模块
(function(modules) {
  // webpackBootstrap
  // The module cache
  // 缓存，已经安装的模块缓存
  var installedModules = {};

  // The require function
  // 定义了一个 require 函数
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    // 缓存里有这个模块，直接返回
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    // 创建一个新模块，并添加到 缓存中
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    });

    // Execute the module function
    // 执行这个模块
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // Flag the module as loaded
    // 模块执行完毕
    module.l = true;

    // Return the exports of the module
    // 返回模块执行结果
    return module.exports;
  }

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules;

  // expose the module cache
  __webpack_require__.c = installedModules;

  // define getter function for harmony exports
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  // define __esModule on exports
  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };

  // create a fake namespace object
  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function(value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", { enumerable: true, value: value });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };

  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function(module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module["default"];
          }
        : function getModuleExports() {
            return module;
          };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };

  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  // __webpack_public_path__
  __webpack_require__.p = "";

  // Load entry module and return exports
  // 引入并执行入口模块
  return __webpack_require__((__webpack_require__.s = "./src/main.js"));
})({
  // 引入的 a 模块
  /*! no static exports found */
  "./src/a.js": function(module, exports) {
    eval('module.exports = "str";\n\n\n//# sourceURL=webpack:///./src/a.js?');
  },
  // 我们的入口
  "./src/main.js":
    /*! no static exports found */
    function(module, exports, __webpack_require__) {
      eval('const str = __webpack_require__(/*! ./a */ "./src/a.js");\n\nconsole.log(str);\n\n\n//# sourceURL=webpack:///./src/main.js?');
    }
});
```
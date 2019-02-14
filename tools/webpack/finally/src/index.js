import "@babel/polyfill";

// 内联 loader 暴露 $ 到全局
// import $ from "expose-loader?$!jquery";
// import "jquery";
// 或者直接引入jquery的cdn

console.log($);

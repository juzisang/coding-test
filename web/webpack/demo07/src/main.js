// 内联加载
import "expose-loader?$!jquery";

// expose-loader 注入
console.log(window.$);

// ProvidePlugin 注入
console.log($);

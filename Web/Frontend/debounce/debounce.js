/**
 * 防抖
 */
function debounce(fn, delay) {
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    let content = this;
    let args = arguments;
    timer = setTimeout(function() {
      fn.apply(content, args);
    }, delay);
  };
}

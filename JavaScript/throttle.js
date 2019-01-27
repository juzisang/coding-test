/**
 * 节流
 */
function throttle(fn, delay) {
  let start = Date.now();
  return function() {
    let now = Date.now();
    if (now - start > delay) {
      fn.apply(this, arguments);
      start = now;
    }
  };
}

function throttleTimer(fn, delay) {
  let start = Date.now();
  let timer = null;
  return function() {
    let now = Date.now();
    let gap = delay - (now - start);
    let contnet = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    if (gap <= 0) {
      fn.apply(contnet, args);
      start = Date.now();
    } else {
      timer = setTimeout(function() {
        fn.apply(contnet, args);
        timer = null;
      }, delay);
    }
  };
}

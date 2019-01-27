Function.prototype.customBind = function(contnet) {
  if (typeof this !== "function") throw new Error("is not function");
  contnet[`_temp`] = this;
  return function(...args) {
    const res = contnet[`_temp`](...args);
    delete contnet[`_temp`];
    return res;
  };
};

const slice = [].slice.bind([1, 2, 3, 4, 5, 5]);
console.log(slice(1, 3));

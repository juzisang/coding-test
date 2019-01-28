Function.prototype.customApplyEs5 = function() {
  if (typeof this !== "function") throw new Error("is not function");
  var contnet = arguments[0];
  var args = arguments[1];
  var str = "contnet._" + this.name + "(";
  var i = 0;
  var res = null;
  contnet["_" + this.name] = this;
  for (i; i < args.length; i++) str += args[i] + (args.length - 1 === i ? ")" : ",");
  res = eval(str);
  delete contnet["_" + this.name];
  return res;
};

Function.prototype.customApplyEs6 = function(contnet, args) {
  if (typeof this !== "function") throw new Error("is not function");
  contnet[`_${this.name}`] = this;
  const res = contnet[`_${this.name}`](...args);
  delete contnet[`_${this.name}`];
  return res;
};

console.log([].slice.customApplyEs5([1, 2, 3, 4], [1, 3]));
console.log([].slice.customApplyEs6([1, 2, 3, 4], [1, 3]));

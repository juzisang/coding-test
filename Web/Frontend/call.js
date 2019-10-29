Function.prototype.customCallEs6 = function(content, ...args) {
  if (typeof this !== "function") throw new Error("is not function");
  content[`_${this.name}`] = this;
  const res = content[`_${this.name}`](...args);
  delete content[`_${this.name}`];
  return res;
};

Function.prototype.customCallEs5 = function() {
  if (typeof this !== "function") throw new Error("is not function");
  var content = arguments[0];
  var str = "content._" + this.name + "(";
  var i = 1;
  var res = null;
  content["_" + this.name] = this;
  for (i; i < arguments.length; i++) str += arguments[i] + (arguments.length - 1 === i ? ")" : ",");
  res = eval(str);
  delete content["_" + this.name];
  return res;
};

console.log([].slice.customCallEs5([1, 2, 3, 4], 1, 3));
console.log([].slice.customCallEs6([1, 2, 3, 4], 1, 3));

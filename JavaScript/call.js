Function.prototype.customCallEs6 = function(content, ...args) {
  if (typeof this !== "function") {
    throw new Error("is not function");
  }
  content[`_${this.name}`] = this;
  const res = content[`_${this.name}`](...args);
  delete content[`_${this.name}`];
  return res;
};

Function.prototype.customCallEs5 = function(content) {
  if (typeof this !== "function") {
    throw new Error("is not function");
  }
  content["_" + this.name] = this;
  var str = "content._" + this.name + "(";
  for (var i = 1; i < arguments.length; i++) {
    str += arguments.length - 1 === i ? arguments[i] + ")" : arguments[i] + ",";
  }
  var res = eval(str);
  delete content["_" + this.name];
  return res;
};

console.log([].slice.customCallEs5([1, 2, 3, 4], 1, 3));
console.log([].slice.customCallEs6([1, 2, 3, 4], 1, 3));

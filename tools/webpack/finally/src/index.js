let str = require("./a");

console.log(str);

require("./index.css");

require("./index.less");

const fn = () => {
  console.log(1111);
};

fn();

function OwO() {
  console.log("Owo");
}

class A {
  a = 1;

  @OwO
  test() {}
}

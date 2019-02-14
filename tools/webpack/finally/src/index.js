import * as str from "./a";
import "./index.css";
import "./index.less";

console.log(str);

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

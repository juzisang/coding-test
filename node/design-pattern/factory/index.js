/**
 * 将 new 操作单独封装
 * 遇到 new 时，就要考虑是否该使用工厂模式
 */

class Product {
  constructor(name) {
    this.name = name;
  }
  init() {
    alert("init");
  }

  fun1() {
    alert("fun1");
  }

  fun2() {
    alert("fun2");
  }
}

class Creator {
  create(name) {
    return new Product(name);
  }
}

const creator = new Creator();
const p1 = creator.create("p1");
p1.init();
p1.fun1();

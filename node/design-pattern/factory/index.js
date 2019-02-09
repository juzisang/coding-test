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

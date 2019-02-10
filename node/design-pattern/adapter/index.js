/**
 * 旧接口格式和使用者不兼容
 * 中间加一个适配器转换接口
 */

class TargetTest {
  ajax() {
    console.log("ajax");
  }
}

class TargetDemo {
  send() {
    console.log("send");
  }
}

class Adapter {
  constructor(target) {
    this.target = target;
  }

  request() {
    if (this.target.send) {
      this.target.send(...arguments);
    } else if (this.target.ajax) {
      this.target.ajax(...arguments);
    }
  }
}

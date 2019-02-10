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

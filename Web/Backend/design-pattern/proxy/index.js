/**
 * 为一个对象提供一种代理以方便对它的访问。
 */

class NetworkImg {
  connect() {
    console.log("内部网络连接");
  }
}

class Proxy {
  constructor() {
    this.network = new NetworkImg();
  }
  connect() {
    console.log("代理启动");
    this.network.connect();
    console.log("代理成功");
  }
}

new Proxy().connect();

/**
 * 车辆有车牌号，名称
 * 车辆分为专车和快车，快车1块，专车两块
 * 行程开始时，会打印出车辆信息
 * 行程结束时，会计算价格，假设已经行驶了5公里
 */

class Car {
  constructor(number, name) {
    this.number = number;
    this.name = name;
  }
}

class KuaiChe extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = 1;
  }
}

class ZhuanChe extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = 2;
  }
}

class Trip {
  constructor(car) {
    this.car = car;
  }
  start() {
    console.log(`行程开始，名称：${this.car.name}，车牌号：${this.car.number}`);
  }
  end() {
    console.log(`行程结束，金额：${this.car.price * 5}`);
  }
}

let kuaiche = new KuaiChe("12345", "桑塔纳");
let trip = new Trip(kuaiche);

trip.start();
trip.end();

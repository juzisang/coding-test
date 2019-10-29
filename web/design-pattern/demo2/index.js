/**
 * 某停车场，分3层，每层100车位
 * 每个车位都能监控到车辆的驶入和离开
 * 车辆进入前，显示每层的空余车位数量
 * 车辆进入时，摄像头可识别车牌号和时间
 * 车辆出来时，出口显示器显示车牌号和停车时长
 */

/**
 * 车
 */
class Car {
  constructor(number) {
    this.number = number;
  }
}

/**
 * 停车场
 */
class Park {
  constructor(floors) {
    this.floors = floors || [];
    this.camera = new Camera();
    this.screen = new Screen();
    this.carList = {};
  }
  // 显示剩余停车位
  emtpyNum() {
    return this.floors
      .map(item => {
        return `第 ${item.index} 层，还剩余 ${item.emptyPlaceNum()} 个车位`;
      })
      .join("\n");
  }
  // 进入
  in(car) {
    const info = this.camera.shot(car);
    for (let i = 0; i < this.floors.length; i++) {
      let place = this.floors[i].getOneEmptyPlace();
      if (place) {
        place.in();
        info.place = place;
        break;
      }
    }
    this.carList[car.number] = info;
  }
  // 离开
  out(car) {
    // 打印
    this.screen.show(car, this.carList[car.number].inTime);
    // 停车位制空
    this.carList[car.number].place.out();
    // 删除信息
    delete this.carList[car.number];
  }
}

/**
 * 层
 */
class Floor {
  constructor(index, places) {
    // 层数
    this.index = index;
    // 车位
    this.places = places || [];
  }
  // 剩余停车位
  emptyPlaceNum() {
    return this.places.filter(item => item.empty).length;
  }

  getOneEmptyPlace() {
    const places = this.places.filter(item => item.empty);
    if (places.length > 0) {
      return places[0];
    } else {
      return null;
    }
  }
}

/**
 * 车位
 */
class Place {
  constructor() {
    this.empty = true;
  }
  in() {
    this.empty = false;
  }
  out() {
    this.empty = true;
  }
}

/**
 * 摄像头
 */
class Camera {
  shot(cat) {
    return {
      num: cat.number,
      inTime: Date.now()
    };
  }
}

/**
 * 显示屏
 */
class Screen {
  show(car, inTime) {
    console.log(`车牌号：${car.number}，停留：${Date.now() - inTime}`);
  }
}

const floors = Array.from({ length: 3 }).map((item, index) => {
  return new Floor(index + 1, Array.from({ length: 100 }).map(() => new Place()));
});

const pack = new Park(floors);
const car1 = new Car("A1");
const car2 = new Car("A2");
const car3 = new Car("A3");

console.log("第一辆车进入");
console.log(pack.emtpyNum());
pack.in(car1);
console.log("第二辆车进入");
console.log(pack.emtpyNum());
pack.in(car2);
console.log("第一辆车离开");
pack.out(car1);
console.log("第二辆车离开");
pack.out(car2);
console.log("第三辆车进入");
console.log(pack.emtpyNum());
pack.in(car3);
console.log("第三辆车离开");
pack.out(car3);

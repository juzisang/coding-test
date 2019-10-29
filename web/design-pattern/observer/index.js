/**
 * 发布 & 订阅
 * 一对多
 */

class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notifyAll();
  }
  notifyAll() {
    this.observers.forEach(observer => {
      observer.update();
    });
  }
  attach(observer) {
    this.observers.push(observer);
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log(`${this.name} update "state ${this.subject.getState()}"`);
  }
}

let subject = new Subject();
let o1 = new Observer("o1", subject);
let o2 = new Observer("o2", subject);
subject.setState(1);
subject.setState(2);
subject.setState(3);

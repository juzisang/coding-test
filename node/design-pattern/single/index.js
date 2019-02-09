function getSingleObject(ClassName) {
  let single = null;
  return () => {
    if (single === null) {
      single === new ClassName();
    }
    return single;
  };
}

class Demo {
  login() {
    console.log("demo");
  }
}

const getSingleDemo = getSingleObject(Demo);
const d1 = getSingleDemo();
const d2 = getSingleDemo();
console.log(d1 === d2);

import "@babel/polyfill";

class Demo {
  // @babel/plugin-proposal-class-properties
  name = "demo";
  miaomiao = "2333";

  // @babel/plugin-proposal-decorators
  @log()
  getName() {
    return name;
  }
}

function log(value) {
  console.log(value);
}

// @babel/plugin-transform-runtime
new Promise((ok, error) => {
  ok();
});

// @babel/polyfill
Object.keys({ a: 111 });

function addDecorator(target, before, after) {
  return (...args) => {
    before(...args);
    let result = target(...args);
    after(...args);
    return result;
  };
}

function Test(args) {
  console.log("test:", args);
}

const newTest = addDecorator(Test, () => console.log("...Test即将执行"), () => console.log("...Test执行完毕"));
newTest("target");

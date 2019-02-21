const { swap, randomArray, isSort, sortTime } = require("./helper");

function sort(array, log) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    // 寻找 [i,n] 直接的最小值
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      // 与当前找到的自小值做对比
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    swap(array, i, minIndex);
    log();
  }
}

sortTime({
  array: randomArray(10, 10, 300),
  process: true,
  sort
});

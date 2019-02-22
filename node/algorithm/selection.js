const { swap, randomArray, sortTime } = require("./helper");

/**
 * 每次循环找出最小的元素，交换到最前面
 */
function sort(array, log) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    // 寻找 [i,n] 之间的最小值
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      // 与当前找到的自小值做对比
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // 切换
    swap(array, i, minIndex);
    log();
  }
}

sortTime({
  array: randomArray(20000, 10, 300),
  print: false,
  sort
});

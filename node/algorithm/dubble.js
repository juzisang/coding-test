const { sortTime, swap, randomArray } = require("./helper");

function sort(array, log) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j < n - i; j++) {
      // 如果上一个元素比现在位置的元素要大，则交换
      // 直到当前最大的元素排序到最后为止
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);
        log();
      }
    }
  }
}

sortTime({
  array: randomArray(10, 1, 100),
  print: true,
  sort
});

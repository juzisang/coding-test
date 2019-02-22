const { randomArray, randomOrderArray, sortTime, swap, copyArray } = require("./helper");

/**
 * 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入
 */

/**
 * 倒着推导，在已排序的元素中找到合适的位置插入进去
 */
function sort1(array, log) {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    // 寻找元素 arr[i] 合适的插入位置
    // && 如果 j-1 小于 j，就交换，否则就代表已经排序完成
    for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
      swap(array, j, j - 1);
    }
  }
}

/**
 * 由于 swap 交换比较耗时，所以使用赋值来优化
 */
function sort2(array, log) {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let cValue = array[i];
    let j;
    for (j = i; j > 0 && array[j - 1] > cValue; j--) {
      array[j] = array[j - 1];
    }
    array[j] = cValue;
  }
}

const array1 = randomOrderArray(20000, 100, 103);
const array2 = copyArray(array1);

sortTime({
  array: array1,
  print: false,
  sort: sort1
});

sortTime({
  array: array2,
  print: false,
  sort: sort2
});

/**
 * 交换位置
 */
function swap(array, i, n) {
  let value = array[i];
  array[i] = array[n];
  array[n] = value;
}

/**
 * 生成随机数组
 * @param {*} length 长度
 * @param {*} rangeMin 范围最小值
 * @param {*} rangeMax 范围最大值
 */
function randomArray(length, rangeMin, rangeMax) {
  return Array.from({ length }, () => parseInt(rangeMax * Math.random() + rangeMin));
}

/**
 * 生成一个近乎有序的数组
 */
function randomOrderArray(length, num) {
  const array = Array.from({ length }, (v, i) => i);
  for (let i = 0; i < num; i++) {
    let l = parseInt(Math.random() * length);
    let r = parseInt(Math.random() * length);
    swap(array, l, r);
  }
  return array;
}

/**
 * 判断是否是从小到大排序
 */
function isSort(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
}

/**
 * 计算排序时间
 */
function sortTime(obj) {
  if (obj.print) {
    console.log("start:", obj.array);
  }
  let startTime = Date.now();
  let num = 0;
  const result = obj.sort(obj.array, () => {
    if (obj.print) {
      console.log(`${++num}:`, obj.array);
    }
  });
  let endTime = Date.now();
  if (obj.print) {
    console.log("end:", result || obj.array);
  }
  console.log("sort:", isSort(result || obj.array));
  console.log("time:", endTime - startTime);
}

function copyArray(array) {
  return JSON.parse(JSON.stringify(array));
}

module.exports = {
  swap,
  randomArray,
  randomOrderArray,
  isSort,
  sortTime,
  copyArray
};

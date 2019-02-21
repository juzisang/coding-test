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
  obj.sort(obj.array, () => {
    if (obj.print) {
      console.log(`${++num}:`, obj.array);
    }
  });
  let endTime = Date.now();
  if (obj.print) {
    console.log("end:", obj.array);
  }
  console.log("sort:", isSort(obj.array));
  console.log("time:", endTime - startTime);
}

module.exports = {
  swap,
  randomArray,
  isSort,
  sortTime
};

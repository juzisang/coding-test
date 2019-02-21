module.exports = {
  /**
   * 交换位置
   */
  swap(array, i, n) {
    let value = array[i];
    array[i] = array[n];
    array[n] = value;
  },
  /**
   * 生成随机数组
   * @param {*} length 长度
   * @param {*} rangeMin 范围最小值
   * @param {*} rangeMax 范围最大值
   */
  randomArray(length, rangeMin, rangeMax) {
    return Array.from({ length }, () => parseInt(rangeMax * Math.random() + rangeMin));
  },
  /**
   * 判断是否是从小到大排序
   */
  isSort(array) {
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        return false;
      }
    }
    return true;
  },
  runTime(obj) {
    console.log("start:", obj.array);
    let startTime = Date.now();
    obj.run(obj.array, () => {
      console.log("progress:", obj.array);
    });
    let endTime = Date.now();
    console.log("end:", obj.array);
    console.log("time:", endTime - startTime);
  }
};

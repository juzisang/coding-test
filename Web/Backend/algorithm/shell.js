const { sortTime, swap, randomArray } = require("./helper");

function shellSort(array, log) {
  const n = array.length;
  for (let gap = Math.floor(n / 2 + 1); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let cValue = array[i];
      let j;
      for (j = i - gap; j >= 0 && array[j] > cValue; j -= gap) {
        array[j + gap] = array[j];
      }
      array[j + gap] = cValue;
      log();
    }
  }
}

// sortTime({
//   array: randomArray(3000000, 1, 100),
//   print: false,
//   sort:shellSort
// });

module.exports = {
  shellSort
};

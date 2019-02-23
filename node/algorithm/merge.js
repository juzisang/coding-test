const { randomArray, sortTime, swap } = require("./helper");

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    let m = Math.floor(array.length / 2);
    return sort(mergeSort(array.slice(0, m)), mergeSort(array.slice(m)));
  }
}

function sort(left, right) {
  let i = 0;
  let j = 0;
  let array = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      array.push(left[i++]);
    } else {
      array.push(right[j++]);
    }
  }
  return array.concat(left.slice(i), right.slice(j));
}

// sortTime({
//   array: randomArray(10, 1, 100),
//   print: true,
//   sort: mergeSort
// });

module.exports = {
  mergeSort
};

const { randomArray, sortTime, swap } = require("./helper");

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    let m = Math.floor(array.length / 2);
    return sort1(mergeSort(array.slice(0, m)), mergeSort(array.slice(m)));
  }
}

function sort1(left, right) {
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

function sort2(left, right) {
  let i = 0;
  let j = 0;
  let array = [];
  for (let k = 0; k < left.length + right.length; k++) {
    if (i >= left.length) {
      array.push(right[j++]);
    } else if (j >= right.length) {
      array.push(left[i++]);
    } else if (left[i] < right[j]) {
      array.push(left[i++]);
    } else {
      array.push(right[j++]);
    }
  }
  return array;
}

function sort3(left, right) {
  let array = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  while (left.length) {
    array.push(left.shift());
  }
  while (right.length) {
    array.push(right.shift());
  }
  return array;
}

// sortTime({
//   array: randomArray(10, 1, 100),
//   print: true,
//   sort: mergeSort
// });

module.exports = {
  mergeSort
};

const { insertionSort1, insertionSort2 } = require("./insertion");
const { shellSort } = require("./shell");
const { selectionSort } = require("./selection");
const { sortTime, copyArray, randomArray } = require("./helper");

const array1 = randomArray(100000, 2, 10000);

// console.log("=".repeat(4), "selectionSort", "=".repeat(4));
// sortTime({
//   array: copyArray(array1),
//   sort: selectionSort
// });

// console.log("=".repeat(4), "insertionSort swap", "=".repeat(4));
// sortTime({
//   array: copyArray(array1),
//   sort: insertionSort1
// });

// console.log("=".repeat(4), "insertionSort =", "=".repeat(4));
// sortTime({
//   array: copyArray(array1),
//   sort: insertionSort2
// });

console.log("=".repeat(4), "shellSort", "=".repeat(4));
sortTime({
  array: copyArray(array1),
  sort: shellSort
});

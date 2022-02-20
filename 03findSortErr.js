"use strict";

const finsSortErr = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return i + 1;
    }
  }

  return -1;
};

console.log(finsSortErr([2, 12, 15, 48, 64])); // -1
console.log(finsSortErr([-9, -4, -4, 3, 12, 4, 5])); // 5

"use strict";

const minPosInt = function (arr, i = 0, toReturn = arr[0]) {
  i++;

  if (i > arr.length) {
    toReturn = toReturn > 0 ? toReturn : -1;
    return toReturn;
  } else {
    toReturn = (arr[i] < toReturn) & (arr[i] > 0) ? arr[i] : toReturn;
    return minPosInt(arr, i, toReturn);
  }
};

console.log(minPosInt([10, 55, 43, 2, 11, 7, -5, 1])); // 1
console.log(minPosInt([-5, -9, -111, -1000, -7])); // -1

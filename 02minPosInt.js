"use strict";

const minPosInt = function (arr, i = 0, toReturn = arr[0]) {
  i++;

  if (i > arr.length) {
    return toReturn;
  } else {
    toReturn = (arr[i] < toReturn) & (arr[i] > 0) ? arr[i] : toReturn;
    return minPosInt(arr, i, toReturn);
  }
};

console.log(minPosInt([10, 55, 43, 2, 11, 7, -5, 1])); // 1

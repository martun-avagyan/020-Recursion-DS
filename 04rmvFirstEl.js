"use strict";

const rmvFirstEl = function (arr, i = 0) {
  if (arr.length === i) {
    arr.pop();
    return arr;
  }

  arr[i] = arr[i + 1];
  i++;

  return rmvFirstEl(arr, i);
};

console.log(rmvFirstEl([6, 78, "n", 0, 1]));

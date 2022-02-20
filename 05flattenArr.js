"use strict";

const flattenArr = function (arr) {
  let toReturn = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      const result = flattenArr(el);

      result.forEach((el) => toReturn.push(el));
    } else {
      toReturn.push(el);
    }
  });

  return toReturn;
};

console.log(flattenArr([14, [1, [[[3, []]], 1], 0]]));

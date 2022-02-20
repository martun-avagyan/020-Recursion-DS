"use strict";

const oddOrNot = function (num, i = -1) {
  i++;
  let numToStr = num.toString();
  if (i === numToStr.length) {
    return true;
  } else if (numToStr[i] % 2 === 0) {
    return false;
  } else {
    return oddOrNot(num, i);
  }
};

console.log(oddOrNot(135)); // Left this console.logs on purpose
console.log(oddOrNot(13572)); // Left this console.logs on purpose

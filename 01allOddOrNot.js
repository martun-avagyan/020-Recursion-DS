"use strict";

let i = -1;

const oddOrNot = function (num) {
  i++;
  let numToStr = num.toString();
  if (i === numToStr.length) {
    return true;
  } else if (numToStr[i] % 2 === 0) {
    return false;
  } else {
    return oddOrNot(num);
  }
};

console.log(oddOrNot(135)); // Left this console.logs on purpose
console.log(oddOrNot(13572)); // Left this console.logs on purpose

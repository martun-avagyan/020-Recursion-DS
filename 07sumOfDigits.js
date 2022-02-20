"use strict";

const sumOfDigits = function (num) {
  if (num < 0) {
    return "The argument of function must be a positive integer!";
  }

  const sum = [...String(num)].reduce((aggr, val) => aggr + Number(val), 0);

  if (sum > 10) {
    let counter = 0;

    [...String(num)].forEach(() => counter++);

    return counter;
  }

  return sum;
};

console.log(sumOfDigits(999999999));

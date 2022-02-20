const rotateArr = function (arr, n) {
  if (n === 0) {
    return arr;
  }

  if (n < 0) {
    const lastEl = arr.pop();

    arr.unshift(lastEl);

    return rotateArr(arr, n + 1);
  }

  const firstElem = arr.shift();

  arr.push(firstElem);

  return rotateArr(arr, n - 1);
};

console.log(rotateArr(["a", "b", "c", "d", "e", "f", "g", "h"], 3));

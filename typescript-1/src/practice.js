var createCounter = function (n) {
  let arr = [];
  return function () {
    arr.push(n);
    n++;
    return arr;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
console.log(counter()); // 13

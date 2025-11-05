//
// Iteration 2 | Functions
//
function calcMultiplication(a: number, b: number): number {
  return a * b;
}

console.log(calcMultiplication(3, 4)); // 12

function isEven(n: number): boolean {
  return n % 2 === 0;
}

console.log(isEven(10)); // true
console.log(isEven(7)); // false

function calcArrayAverage(numbersArr: number[]): number | string {
  if (numbersArr.length === 0) {
    return "Please provide an array with at least one element.";
  }

  let sum = 0;
  for (let num of numbersArr) {
    sum += num;
  }

  const average = sum / numbersArr.length;
  return average;
}

console.log(calcArrayAverage([10, 20, 30]));
console.log(calcArrayAverage([]));

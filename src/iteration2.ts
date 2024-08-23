//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
  return a * b;
}

console.log(calcMultiplication(2, 3)); // 6

function isEven(n: number): boolean {
  return true;
}

console.log(isEven(2)); // true
console.log(isEven(3)); // false

function calcArryAverage(arr: number[]): number | string {
  if (!arr.length) {
    return "Please provide an array with at least one element";
  }
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

console.log(calcArryAverage([2, 4, 6])); // 4
console.log(calcArryAverage([])); // Please provide an array with at least one element

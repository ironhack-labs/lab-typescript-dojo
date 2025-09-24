//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
  return a * b;
}

function isEven(n: number): boolean {
  return n % 2 === 0 ? true : false;
}

function calcArrayAverage(numbersArr: number[]): string | number {
  return numbersArr.length <= 0
    ? "Please provide an array with at least one element"
    : numbersArr.reduce((acc, num) => acc + num, 0) / numbersArr.length;
}

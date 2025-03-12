//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
  return a * b;
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

function calcArrayAverage(numbersArr: Array<number>): string | number {
  if (!numbersArr.length) {
    return "Please provide an array with at least one element";
  }
  return numbersArr.reduce((acc, current) => acc + current, 0) / numbersArr.length;
}

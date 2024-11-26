//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
  return a * b;
}

function isEven(a: number): boolean {
  return a % 2 === 0;
}

function calcArrayAverage(arr: number[]): number | string {
  if (arr.length === 0) {
    return "Please provide an array with at least one element";
  }
  const total = arr.reduce((acc, curr) => acc + curr, 0);
  return total / arr.length;
}

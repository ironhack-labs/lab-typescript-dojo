//
// Iteration 2 | Functions
//
function calcMultiplication(a: number, b: number): number {
  return a * b;
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

function calcArrayAverage(numbersArr: number[]): number {
  const sum = numbersArr.reduce((acc, curr) => acc + curr, 0);
  return sum / numbersArr.length;
}

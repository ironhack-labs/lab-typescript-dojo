//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
  return a * b;
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

function calcArrayAverage(numbersArr: number[]): number | string {
  if (!numbersArr.length) {return "Please provide an array with at least one element"}

  return numbersArr.reduce((acc: number, val: number): number => acc + val) / numbersArr.length; 
}


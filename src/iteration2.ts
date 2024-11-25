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
  const initial: number = 0;

  if (numbersArr.length === 0) {
    return "Please provide an array with at least one element";
  } else {
    const total = numbersArr.reduce((acc, curr) => acc + curr, initial);
    return total / numbersArr.length;
  }
}

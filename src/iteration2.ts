//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
  return a * b;
}

console.log(calcMultiplication(2, 2));

function isEven(n: number): boolean {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));

function calcArrayAverage(numberArr: number[]): number | string {
  if (numberArr.length === 0) {
    return "Please provide an array with at least one element";
  }

  let sum = numberArr.reduce((acc, num) => {
    return acc + num;
  });

  return sum / numberArr.length;
}

console.log(calcArrayAverage([2, 4, 8, 5]));

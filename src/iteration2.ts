//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number{
  return a * b;  
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

function calcArrayAverage(numbersArr: Array<number>): string |number {
  if (numbersArr.length === 0) {
    return "Please provide an array with at least one element."
  }
  return numbersArr.reduce((acc, curr) => curr + acc) / numbersArr.length;
}

console.log(calcMultiplication(4, 7));
console.log(isEven(4));
console.log(isEven(7));
console.log(calcArrayAverage([]));
console.log(calcArrayAverage([2,3,4,5]));
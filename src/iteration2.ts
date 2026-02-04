//
// Iteration 2 | Functions
//

//2.1 - Implement the function calcMultiplication()
function calcMultiplication(a: number, b: number): number {
  return a * b;
}

console.log("iteration 2.1:", calcMultiplication(2, 3));

//2.2 - Implement the function isEven()

function isEven(n: number): boolean {
  return n % 2 === 0;
}
console.log("iteration 2.2:", isEven(5));

//2.3 - Implement the function calcArrayAverage()

function calcArrayAverage(numbersArr: number[]): string | number {
  if (numbersArr.length === 0) {
    return "Please provide an array with at least one element";
  } else {
    return numbersArr.reduce((acc, cur) => acc + cur, 0) / numbersArr.length;
  }
}

    console.log("iteration 2.3:", calcArrayAverage([2,4,6,8,10]))


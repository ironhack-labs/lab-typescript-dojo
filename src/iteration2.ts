//
// Iteration 2 | Functions
//
function calcMultiplication(a: number, b: number): number {
  return a * b;
}
console.log(calcMultiplication(2, 3));

function isEven(n: number): boolean {
  return n % 2 === 0;
}
console.log(isEven(5));

function calcArrayAverage(arr: number[]): number | string {
  if (arr.length === 0) {
    return "Please provide an array with at least one element";
  }
  return (
    arr.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0) / arr.length
  );
}
console.log(calcArrayAverage([1, 2, 3, 4, 5]));

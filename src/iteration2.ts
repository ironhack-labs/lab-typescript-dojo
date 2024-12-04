//
// Iteration 2 | Functions
//

// 2.1
const calcMultiplication = (a: number, b: number): number => {
  return a * b;
};

console.log(calcMultiplication(3, 4));

// 2.2
const isEven = (n: number): boolean => {
  return n % 2 === 0;
};

console.log(isEven(7));
console.log(isEven(8));

// 2.3
const calcArrayAverage = (numbersArr: number[]): string | number => {
  if (numbersArr.length === 0) {
    return `Please provide an array with at least one element`;
  } else {
    let sum = numbersArr.reduce((acc, current) => acc + current, 0);
    return sum / numbersArr.length;
  }
};

console.log(calcArrayAverage([4, 6, 5]));
console.log(calcArrayAverage([]));

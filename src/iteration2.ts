//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
  return a * b;
}

// console.log(calcMultiplication(2, 3)); // 6
// console.log(calcMultiplication(3, 4)); // 12

function isEven(num: number): boolean {
  return num % 2 === 0;
}

// console.log(isEven(2)); // true
// console.log(isEven(3)); // false

function calcArrayAverage(nums: number[]): number | string {
  if (nums.length === 0)
    return 'Please provide an array with at least one element';

  const sum = nums.reduce((acc, num) => acc + num, 0);
  return sum / nums.length;
}

// console.log(calcArrayAverage([1, 2, 3, 4, 5])); // 3
// console.log(calcArrayAverage([])); // 'Please provide an array with at least one element'

//
// Iteration 2 | Functions
//

/*
For this iteration, you'll be implementing several functions. Make sure to include **type annotations** for your function parameters and return values.
<br>

### 2.1 - Implement the function `calcMultiplication()` 

- Name of the function: `calcMultiplication`
- Parameters:
    - `a` (a number)
    - `b` (also a number)
- Return value: should return the result of multiplying those two numbers.
*/

function calcMultiplication(a: number, b: number): number {
  return a * b;
}


// use calcMultiplication

const result = calcMultiplication(2, 3);
console.log(result); // Output: 6

/*
- Name of the function: `isEven`
- Parameters:
    - `n` (a number)
- Return value: should return a boolean,
  - if `n` is even, return `true`
  - if `n` is odd, return `false`
*/

function isEven(n: number): boolean {
  return n % 2 === 0; 
}


// use isEven

console.log(isEven(2)); // Output: true
console.log(isEven(3)); // Output: false

/*

- Name of the function: `calcArrayAverage`
- Parameters:
    - `numbersArr` (an array of numbers)
- Return value: should return a string or a number,
    - if the array is empty, return the message `Please provide an array with at least one element`.
    - if the array is not empty, return the average (i.e., the result of adding all the numbers and dividing by the number of elements in the array)

*/

function calcArrayAverage(numbersArr: number[]): string | number {
  if (numbersArr.length === 0) {
    return "Please provide an array with at least one element.";
  }
  
  const sum = numbersArr.reduce((acc, num) => acc + num, 0);
  const average = sum / numbersArr.length;
  
  return average;
} 


// use calcArrayAverage

console.log(calcArrayAverage([])); // Output: "Please provide an array with at least one element."
console.log(calcArrayAverage([1, 2, 3])); // Output: 2


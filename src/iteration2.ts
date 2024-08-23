// src/iteration2.ts

function calcMultiplication(a: number, b: number): number {
  return a * b;
}

// Test the function
console.log(calcMultiplication(3, 4)); // Should output: 12

// src/iteration2.ts

function isEven(n: number): boolean {
  return n % 2 === 0;
}

// Test the function
console.log(isEven(4)); // Should output: true
console.log(isEven(7)); // Should output: false

// src/iteration2.ts

function calcArrayAverage(numbersArr: number[]): string | number {
  if (numbersArr.length === 0) {
    return "Please provide an array with at least one element.";
  }

  const sum = numbersArr.reduce((acc, num) => acc + num, 0);
  return sum / numbersArr.length;
}

// Test the function
console.log(calcArrayAverage([1, 2, 3, 4, 5])); // Should output: 3
console.log(calcArrayAverage([])); // Should output: Please provide an array with at least one element.

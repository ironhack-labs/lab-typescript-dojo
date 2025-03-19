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
  if (numbersArr.length === 0) {
    return "Please provide an array with at least one element";
  }

  const total = numbersArr.reduce((acc, curr) => {
    return acc + curr;
  });

  const avg = total / numbersArr.length;

  return avg;
}

// const result1 = isEven(2);
// console.log(result1);

// const result2 = isEven(9);
// console.log(result2);

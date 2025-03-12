//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
  return a * b;
}

const result1 = calcMultiplication(4, 5);
console.log(result1);
const result2 = calcMultiplication(100, 100);
console.log(result2);

function isEven(n: number): boolean {
  return n % 2 == 0;
}

const result3 = isEven(20);
console.log(result3);
const result4 = isEven(3333);
console.log(result4);

function calcArrayAverage(numbersArr: number[]): number | string {
  if (numbersArr.length === 0) {
    return "Please provide an array with at least one element";
  }

  const total = numbersArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  const average = total / numbersArr.length;

  return average;
}

const result5 = calcArrayAverage([2, 3, 4, 5]);
console.log(result5);

const result6 = calcArrayAverage([200, 300, 400, 500]);
console.log(result6);

//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number) {
  console.log(a * b);
}

calcMultiplication(5, 6);

function isEven(n: number) {
  if (n % 2 === 0) {
    return true;
  } else if (n % 3 === 0) {
    return false;
  }
}

console.log(isEven(3));

function calcArrayAverage(numbersArr: number[]): number | string {
  if (numbersArr.length === 0) {
    return "Please provide an array with at least one element";
  }

  const total = numbersArr.reduce((acc, curr) => {
    return acc + curr;
  });

  const average = total / numbersArr.length;
  return average;
}

console.log(calcArrayAverage([5, 6, 7]));

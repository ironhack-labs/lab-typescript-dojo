// Iteration 2 | Functions
function calcMultiplication(a: number, b: number): number {
  return a * b;
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

function calcAverage(numbersArr: number[]): string | number {
  if (!numbersArr.length)
    return "Please provide an array with at least one element";

  const total = numbersArr.reduce((acc, current) => acc + current, 0);
  return total / numbersArr.length;
}

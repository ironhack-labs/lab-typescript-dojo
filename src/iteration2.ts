//
// Iteration 2 | Functions
//
const calcMultiplication = (a: number, b: number): number => a * b;

const isEven = (n: number): boolean => (n % 2 === 0 ? true : false);

const calcArrayAverage = (numbersArr: number[]): string | number => {
  if (!numbersArr.length)
    return "Please provide an array with at least one element";
  const sum = numbersArr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum / numbersArr.length;
};

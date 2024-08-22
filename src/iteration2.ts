//
// Iteration 2 | Functions
//

const calcMultiplication = (a: number, b: number): number => {
  return a * b;
};

const isEven = (n: number): boolean => {
  if (n % 2 === 0) return true;
  else return false;
};

const calcArrayAverage = (numberArr: number[]): string | number => {
  if (!numberArr.length)
    return "Please provide an array with at least one element.";
  else {
    const sum = numberArr.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    const avg = sum / numberArr.length;
    return avg;
  }
};

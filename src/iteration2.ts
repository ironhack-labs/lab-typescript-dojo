//
// Iteration 2 | Functions
//

const calcMultiplication = (a: number, b: number): number => {
  return a * b;
};

const isEven = (n: number): boolean => {
  return n % 2 === 0;
};

const calcArrayAverage = (numArray: number[]): number | string => {
  if (numArray.length === 0) {
    return "Please provide an array with at least one element";
  } else {
    const total = numArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    const average = total / numArray.length;
    return average;
  }
};

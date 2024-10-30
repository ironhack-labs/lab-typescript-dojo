// Iteration 2 | Functions
const calcMultiplication = (a: number, b: number): number => {
  return a * b;
};

const isEven = (n:number):boolean => {
  if(n % 2 === 0) {
    return true
  } else {
    return false
  }
}

const calcArrayAverage = (numbersArr:number[]):string | number => {
  if(numbersArr.length == 0) return 'Please provide an array with at least one element';
  return numbersArr.reduce((acc,currentNumber) => acc + currentNumber,0)/numbersArr.length;
}



function calcMultiplication(a: number, b: number): number {
    return a*b;
}

function isEven(n: number): boolean {
    return n%2 === 0;
}

function calcArrayAverage(numbersArr: number[]): string | number {
    if (numbersArr.length === 0) {
        return 'Please provide an array with at least one element';
    }
     const total = numbersArr.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
      });

      const average = total / numbersArr.length;

      return average;
  }
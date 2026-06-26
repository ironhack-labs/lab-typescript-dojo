//
// Iteration 2 | Functions
//
function calcMultiplication(a: number, b: number): number {
      return a * b;
  }

function isEven(n: number): boolean {
      return n % 2 === 0;
  }

function calcArrayAverage(numbersArr: number[]): string | number {
    if (numbersArr.length === 0) {
        return "Please provide an array with at least one element.";
    }
    
    const sum = numbersArr.reduce((total, num) => total + num, 0);
    return sum / numbersArr.length;
}

console.log(calcMultiplication(5, 10)); 
console.log(isEven(4));
console.log(isEven(7));
console.log(calcArrayAverage([1, 2, 3, 4, 5]));

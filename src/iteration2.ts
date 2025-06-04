//
// Iteration 2 | Functions
//


function calcMultiplication (a: number, b: number) : number {
    return a * b
}

const result = calcMultiplication(99, 5)
console.log(result)

function isEven (n: number) :boolean {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
const result2 = isEven(16)
console.log(result2)

function calcArrayAverange (numbersArray: number[]): number | string {
    if (numbersArray.length === 0){
        return 'Please provide an array with at least one element';
      }

      const total = numbersArray.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
      });

      const average = total / numbersArray.length;

      return average;
    }
console.log(calcArrayAverange([1, 2, 3, 4, 5]))
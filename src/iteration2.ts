//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
  return a * b;
}
function isEven(num: number): boolean {
    return num % 2 === 0;
   }
 
   function calcArryAverage(arr: number[]): number {
     let sum = 0;
     for (let i = 0; i < arr.length; i++) {
       sum += arr[i];
     }
     return sum / arr.length;
   }

console.log(calcMultiplication(23,12))
console.log(isEven(10)); 
console.log(isEven(5));
console.log(calcArryAverage([2, 4, 6, 8, 10]));
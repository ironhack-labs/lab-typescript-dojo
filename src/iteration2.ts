//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
  return a * b;
}

let test3: number = calcMultiplication(2, 3);
console.log(test3);

function isEven(n: number): boolean {
  return n % 2 === 0;
}

let test4: boolean = isEven(2);
console.log(test4);

function calcArrayAverage(numbersArr: number[]): number | string {
    if (!numbersArr.length) return "Please provide an array with at least one element" ; 
    else return numbersArr.reduce((acc, curr) => acc + curr) / numbersArr.length;
}

let numbers: number[] = [1, 2, 3, 4, 5];
let test5: number | string = calcArrayAverage(numbers);
console.log(test5);

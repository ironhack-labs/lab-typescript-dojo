//
// Iteration 2 | Functions
//
export function calcMultiplication(a: number, b: number): number{
    return a * b;
}
console.log(calcMultiplication(3,4));

//isEven(n:number):boolean
export function isEven(n: number): boolean {
    return n % 2 === 0;
}
console.log(isEven(4), isEven(4));

//calcArrayAverage(numbersArr:number[]): number | string
export function calcArrayAverage(numbersArr: number[]): number | string {
    if (numbersArr.length === 0) return 'Please provide an array with at least ine Element';
 const total = numbersArr.reduce((acc, cur) => acc + cur, 0);
 return total / numbersArr.length;
}
console.log(calcArrayAverage([10, 20, 30]));
console.log(calcArrayAverage([]));


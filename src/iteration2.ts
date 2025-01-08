//
// Iteration 2 | Functions
//node dist/iteration2.js

function calcMultiplication(a: number, b: number): number {

    return a * b;
}

const multiplyAandB = (a: number, b: number): number => {

    return a * b;
}

function isEven(n: number): boolean {
    return n % 2 === 0;
}

const checkIfEven = (n: number): boolean => {
    return n % 2 === 0;
}

function calcArrayAverage(numbersArr: number[]): number | string {
    if (numbersArr.length === 0) return 'Please provide an array with at least one element'
    return numbersArr.reduce((a, b) => a + b) / numbersArr.length;
}

const avgOfArray = (numbersArr: number[]): number | string => {
    if (numbersArr.length === 0) return 'Please provide an array with at least one element'
    return numbersArr.reduce((a, b) => a + b) / numbersArr.length;
}


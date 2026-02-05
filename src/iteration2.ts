//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
    return a * b;
}

function isEven(n: number): boolean {
    return n % 2 === 0;
}

function calcAverage(numbersArr: number[]): string | number {
    if (numbersArr.length === 0) {
        return "Please provide an array with at least one element";
    }
    // let sum = 0;
    // for (let i = 0; i < numbersArr.length; i++) {
    //     sum += numbersArr[i];
    // }
    // return sum / numbersArr.length;
    const total = numbersArr.reduce((acc, curr) => acc + curr, 0);
    return total / numbersArr.length;
}
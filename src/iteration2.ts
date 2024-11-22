//
// Iteration 2 | Functions
function calcMultiplication(a: number, b: number): number {
    return a * b;
}

function isEven(n: number): boolean {
    return n % 2 === 0;
}

function calcArrayAverage(numbersArr: number[]): number | string {
    if (numbersArr.length === 0) {
        return "Please provide an array with at least one element.";
    }
    const total = numbersArr.reduce((sum, num) => sum + num, 0);
    return total / numbersArr.length;
}

// Testing
console.log(calcMultiplication(3, 4)); // 12
console.log(isEven(5)); // false
console.log(calcArrayAverage([2, 4, 6])); // 4




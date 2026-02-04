//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
    return a * b;
}

const result = calcMultiplication(4, 5);
console.log(`The multiplication result is: ${result}`);

function isEven(num: number): boolean {
    return num % 2 === 0;
}

console.log(`Is 10 even? ${isEven(10)}`);

function calcArrayAverage(numbersArr: number[]): string {

    if (numbersArr.length === 0) {
        return `Please provide an array with at least one element.`;
    }

    const total = numbersArr.reduce((acc, curr) => {
        return acc + curr;
    });

    const average = total / numbersArr.length;
    return `The average is: ${average}`;
}

console.log(calcArrayAverage([10, 20, 30, 40, 50]));
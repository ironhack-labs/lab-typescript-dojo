//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
    return a * b;
}

function isEven(n: number): boolean {
    return n % 2 === 0;
}

function calcArrayAverage(numbersArr: number[]): number | string {
    if (numbersArr.length === 0) {
        return 'Please provide an array with at least one element';
    }
    const total = numbersArr.reduce((acc, curr) => acc + curr);
    return total / numbersArr.length;
}

calcMultiplication(3, 4);
calcMultiplication(5, 6);
calcMultiplication(7, 8);

isEven(5);
isEven(10);
isEven(13);

calcArrayAverage([10, 20, 30, 40]);
calcArrayAverage([5, 15, 25]);
calcArrayAverage([]);
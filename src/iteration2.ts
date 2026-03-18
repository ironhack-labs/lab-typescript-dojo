//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number { 
    return a * b;
}
/*const result1= calcMultiplication(2,3);
console.log(result1);
const result2= calcMultiplication(4,5);
console.log(result2);*/

function isEven(n: number): boolean {
    return n % 2 === 0;
}

/*const result1 = isEven(4);
console.log(result1);

const result2 = isEven(7);
console.log(result2);*/

function calcArrayAverage(numbersArr: number[]): number | string {
    if (numbersArr.length === 0) {
        return 'Please provide an array with at least one element';
    }
    const sum = numbersArr.reduce((acc, num) => acc + num, 0);
    return sum / numbersArr.length;
}

//
// Iteration 2 | Functions
//

// 2.1  //

function calcMultiplication(a: number, b: number): number {
    return a * b
}

const test1 = calcMultiplication(2, 2);
console.log(test1);


//  2.2  //

function isEven(n: number): boolean {
    return n % 2 === 0 ? true : false
}

const test2 = isEven(3);
console.log(test2);


//  2.3  //

function calcArrayAverage(numbersArr: number[]): string | number {
    if(!numbersArr) {
        return 'Please provide an array with at least one element'
    }
    else {
        return numbersArr.reduce((acc, curr) => acc + curr, 0) / numbersArr.length
    }
}

const test3 = calcArrayAverage([1, 2, 3, 1, 2, 3]);
console.log(test3);




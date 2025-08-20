//
// Iteration 2 | Functions
//


function calcMultiplication(a: number, b: number): number {
    return a * b;
}


function isEven (n: number) : boolean {
    if (n % 2 === 0){
        return true
    }else {
        return false
    }
}


function calcArrayAverage (array: number[]): number | string {
    if(array.length === 0){
        return "Please provide an array with at least one element"
    }else {
        const sumNumbers = array.reduce((acc, currentValue)=> {
            return acc + currentValue
        })

        return sumNumbers / array.length;
    }
}



const result1 = calcMultiplication(4, 3);
console.log(result1)

const result2 = isEven(7);
console.log(result2)

const result3 = calcArrayAverage([1, 2, 3]);
console.log(result3)


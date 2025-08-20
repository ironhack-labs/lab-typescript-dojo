//
// Iteration 2 | Functions
//


function calcMultiplication(a: number, b: number): number {
    return (a * b)
}

// console.log(calcMultiplication(2, 5))





function isEven(n:number): boolean {
   return (n%2 === 0)
}

// console.log(isEven(5))





function calcArrayAverage(numbersArr : number[]): number | string {
    if (numbersArr.length === 0){ return `Please provide an array with at least one element.`}
    let avg = 0 
    let sum = 0
    for (let i=0; i<numbersArr.length; i++){
        sum+=numbersArr[i]
    } avg = (sum/numbersArr.length)
    return avg
}

//console.log(calcArrayAverage([3,6,9]))
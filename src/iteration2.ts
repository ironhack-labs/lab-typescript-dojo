//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b:number): number{
    return a * b;
}
console.log(calcMultiplication(3,5))

function isEven(n: number): boolean{
    if(n % 2 == 0){
        return true;
    } else{
        return false;
    }
}

console.log(isEven(3))
console.log(isEven(4))

function calcArrayAverage(numbersArr : number[]): string | number{
    if(numbersArr.length == 0){
        return "Please provide an array with at least one element."
    } else{
        const sum = numbersArr.reduce((acc, element) => acc + element, 0)
        return sum/numbersArr.length
    }
}

console.log(calcArrayAverage([3,5]))
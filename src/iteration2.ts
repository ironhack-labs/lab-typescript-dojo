//
// Iteration 2 | Functions
//
function calcMultiplication(a: number, b: number): number {
    return a * b
}
const result1 = calcMultiplication(2,3)
console.log(result1)

function isEven(n:number):boolean {
    if(n % 2 === 0){
        return true
    } else {
        return false
    }
}
const result2:boolean = isEven(4)
console.log(result2)

function calcArrayAverage(numbersArr:number[]): string | number {
    if(numbersArr.length === 0){
        return 'Please provide an array with at least one element'
    } else {
        return numbersArr.reduce((acc,curr)=>acc+curr)/(numbersArr.length + 1)
    }
}
const result3: string | number = calcArrayAverage([1,2,3,4])
console.log(result3)

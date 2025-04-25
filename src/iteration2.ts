//
// Iteration 2 | Functions
//

//2.1
const calcMultiplication=(a: number, b: number): number=>{
return a * b;
}

// test
console.log(calcMultiplication(5,3))
console.log(calcMultiplication("5","3"))

//2.2

function isEven(n:number): boolean{
        if(n % 2 === 0) {
            return true
        } else {return false};
}

console.log(isEven(2))
console.log(isEven(2.3))

//2.3

const calcArrayAverage = (numbersArr: number[]): string | number =>{
    if (!numbersArr) {return "Please provide an array with at least one element"} else {
        return numbersArr.reduce((acc, curr)=> acc + curr, 0) / numbersArr.length;
    }
}

//test
console.log(calcArrayAverage([3,2,3]))
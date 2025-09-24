//
// Iteration 2 | Functions
//


function isEven(n:number):boolean{
    return(!(n%2))
}

console.log(isEven(4))
console.log(isEven(9))

function calcArrayAverage(numbersArr: number[]): string|number{
    if (numbersArr.length === 0){
        return "Please provide an array with at least one element"
    }

    const sum=numbersArr.reduce((acc:number,x:number)=>acc+x)
    return sum/numbersArr.length

}

const y:number[]=[1,2,3,5,6]

console.log(calcArrayAverage(y))

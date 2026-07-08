//
// Iteration 2 | Functions
//
function calcMultiplication(a:number, b:number): number{
    return a * b

}
const result1 = calcMultiplication(7, 6)
console.log(result1)

function isEven(n:number): boolean{
    if(n%2===0){
        return true
    }else {return false}

}
const result2= isEven(20)
console.log(result2)


function calcArrayAverage(numbersArr: number[]):number | string{

    if(numbersArr.length===null){

        return "Please provide an array with at least one element"
    }else {

        return  numbersArr.reduce((a, b) => a + b) / numbersArr.length;
    }

}


const result3 = calcArrayAverage([2,4,5,8,11])
console.log(result3)



//
// Iteration 2 | Functions
//
function calcMultiplication(a:number,b:number):number{
return a*b;
}

function isEven(n:number):boolean{
if(n%2 === 0){
    return true;
}else{
    return false;
}
}

function calcArrayAverage(numbersArr:number[]): string|number{
if (numbersArr.length === 0){
    return "Please provide an array with at least one element"
}else{
    let total = numbersArr.reduce((acc,current)=>{
        return acc+current
    });
    const average = total/numbersArr.length
    return average
}
}

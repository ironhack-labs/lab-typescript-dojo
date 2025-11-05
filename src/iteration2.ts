//
// Iteration 2 | Functions
//
const calcMultiplication=(a:number,b:number): number =>{
    return a*b;
}

console.log(calcMultiplication(3,9));

const isEven=(n:number): boolean =>{
    if(n%2===0)return true;
    else return false;
}

console.log(isEven(987654321));

const calcArrayAverage=(numbersArr : number[]): number|string =>{
    if(numbersArr.length===0){return 'Please provide an array with at least one element'}
    else {
        let sum:number=0;
        numbersArr.forEach((e)=>sum+=e);
        return sum/numbersArr.length
    }
}

console.log(calcArrayAverage([89,99,199,579,889]))


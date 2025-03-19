//
// Iteration 2 | Functions
//

const calcMultiplication = (a: number , b: number):number => {
    return a*b;
}
console.log(calcMultiplication(35,52));


const isEven = (n:number):boolean => {
   return n%2===0
}
console.log(isEven(12));
console.log(isEven(17));


const calcArrayAverage = (numbersArr: number[]): number | string => {
if(!numbersArr.length){
    return "Please provide an array with at least one element";
}

const total= numbersArr.reduce((acc,cvalue) => {
    return acc + cvalue
});
return total/numbersArr.length;

}
console.log(calcArrayAverage ([]));
console.log(calcArrayAverage ([5,8,12,9]));
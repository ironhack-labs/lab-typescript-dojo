//
// Iteration 2 | Functions
//
const calcMultiplication=(a:number, b:number):number=>{
   return a*b
}

//console.log(calcMultiplication(4,3))

const isEven=(n:number):boolean=>{
   if(n%2===0){
    return true
   }else{
    return false
   }
}
//console.log(isEven(5))
const calcArrayAverage=(numbersArr :number[]):(string|number)=>{
    let avg:number=0;
    let sum:number;
   if(numbersArr.length===0){
    return `Please provide an array with at least one element`
   }else{
    /* for(let i:number=0;i<numbersArr.length;i++){
       sum+=numbersArr[i]
    } */
    sum=numbersArr.reduce((sum,num)=>sum+num,0)
    return avg=sum/numbersArr.length
   }
}
//const array:number[]=[2,3,4,5,6]
//console.log(calcArrayAverage(array))
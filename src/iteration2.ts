//
// Iteration 2 | Functions
//

function calcMultiplication(a:number,b:number):number{
    return a*b;

}


const isEven = (n:number):boolean=>{
return n%2===0
}


const calcArrayAverage = (numbersArr:number[]):string | number=>{
    if(!numbersArr.length){
        return "Please provide an array with at least one element."
    }
  return (numbersArr.reduce((acc,curr)=>{
return acc+curr;
  })  )/numbersArr.length;

}


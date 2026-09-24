//
// Iteration 2 | Functions
//


export default function calcMultiplication(a:number , b:number ):number{ return a* b}


export function isEven(n:number):boolean{
if (n%2 === 0){return true }
else {return false}

}

export function calcArrayAverage(numberArr:number[]): number | string {
  if (numberArr.length === 0) {
    return "Please provide an array with at least one elemen";
  }else {
   return numberArr.reduce((acc, curr)=>{ acc+=curr; return acc; }, 0) / numberArr.length;
  }

}

const result = calcMultiplication(4,2)
console.log(result)

const result2 = isEven(4)
console.log(result2)

const result3 = calcArrayAverage([1,2,3,4,5])
console.log(result3)
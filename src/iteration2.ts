//
// Iteration 2 | Functions
//


const calcMultiplication = (a:number, b:number): number => a*b;

const isEven = (n: number): boolean => n % 2 === 0;

const calcArrayAverage = (numArr: number[] ): number | string => {
  if(numArr.length === 0)"array empty"

  const total = numArr.reduce((acc,curr)=>acc+curr,0)

  const avg  = total / numArr.length;
  
  return avg;
}
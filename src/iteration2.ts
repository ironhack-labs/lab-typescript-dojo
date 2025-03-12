function calcMultiplication(a: number, b:number): number {
  return a * b;
}

function isEven(n: number): boolean {
  return  n % 2 === 0  ;
}

function calcArrayAverage(param: number[]): string{
    if (param.length === 0 )
    return "Please provide an array with at least one element";
else{
    let sum = 0;
    param.forEach(num => sum += num )
    return (sum/ param.length).toString()
}
} 


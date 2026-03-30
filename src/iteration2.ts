//
// Iteration 2 | Functions
//
  function calcMultiplication(a: number, b: number): number {
      return a * b;
  }

  function isEven(n:number):boolean{
    if(n%2 ===0){
        return true
    }else {
        return false
    }
  }
  function calcArrayAverage(numbersArr:number[]): string|number{
        let total:number=0
        if(numbersArr.length === 0){
            return "Please provide an array with at least one element"
        }else{
            numbersArr.forEach(element => {
                total += element
            });
            return total/numbersArr.length
        }

  }
  console.log(isEven(15))
  console.log(calcArrayAverage([2,4,6]))
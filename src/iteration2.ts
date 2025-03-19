//
// Iteration 2 | Functions
//

function calcMultiplication( a:number, b:number){
    return a*b;
  }

function isEven(a:number){
 if(a%2==0){
    return `true`;
 }else return `false`;
}

function calcArrayAverage(numberArr:array ): number|string{
    if(numberArr===null){
        return`Please provide an array with at least one element`;
    }
    else{

        const avrg= numberArr.reduce((acc,element)=> acc +element, 0);
        return avrg/numberArr.length;
    }

}
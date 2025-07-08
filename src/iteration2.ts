//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
    return a * b
}


function isEven(n: number): boolean {
    if (n % 2 === 0) {
        return true
    } else {
        return false
    }
}

function calcArrayAverage(numbersArr : number[]) : string | number {
    if (numbersArr.length === 0) {
        return "Please provide an array with at least one element"
    }
    let sum = 0;
    const avgNum = numbersArr.map((oneNum)=> {
        sum += oneNum;
    })
    return sum / numbersArr.length;
}

//const test1 = calcMultiplication(2, 4)
//console.log(test1)

//const test2 = isEven(4);
//console.log(test2)

//const test3 = calcArrayAverage([2, 4, 6, 8, 0]);
//console.log(test3)
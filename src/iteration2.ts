//
// Iteration 2 | Functions
//


const calcMultiplication = (a:number, b: number) => {
    return a * b
}


const isEven = (n:number) => {
    return n % 2 === 0
}

const calcArrayAverage = (numbersArr: number[]) => {
    const sum = numbersArr.reduce((acc, num) => acc + num, 0)
    return sum / numbersArr.length
}
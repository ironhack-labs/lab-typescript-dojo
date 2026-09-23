//
// Iteration 2 | Functions
//

const calcMultiplicatio = (a: number, b:number) : number => {
    return a * b
}

const isEven = (a:number) : boolean => {
    return a % 2 === 0 
}

const calcArrayAverage = (numbersArr : Array<number>) : string | number => {
    if(numbersArr.length === 0) return "Please provide an array with atleast one element"

    const total = numbersArr.reduce((accumulator, currentVlaue) => {
        return accumulator + currentVlaue
    })

    const avg = total / numbersArr.length
    return avg
}

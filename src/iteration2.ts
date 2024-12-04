//
// Iteration 2 | Functions
//
const calcMultiplication = (a: number, b: number) => {
  return a * b
}

calcMultiplication(1, 3)
const isEven = (n: number): boolean => {
  return n % 2 === 0
}
isEven(3)
const calcArrayAverage = (numbersArr: number[]): string | number => {
  if (numbersArr.length === 0) {
    return 'Please provide an array with at least one element'
  }

  const sum = numbersArr.reduce((acc, curr) => acc + curr, 0)
  const average = sum / numbersArr.length
  return average
}
calcArrayAverage([10, 20, 30])

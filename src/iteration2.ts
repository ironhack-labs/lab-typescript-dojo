export function calcMultiplication(a: number, b: number): number {
    return a * b;
}

export function isEven(n: number): boolean {
    return n % 2 === 0;
}

export function calcArrayAverage(numbersArr: number[]): string | number {
    if (numbersArr.length === 0) {
        return "Please provide an array with at least one element";
    }
    
    const sum = numbersArr.reduce((acc, num) => acc + num, 0);
    return sum / numbersArr.length;
}
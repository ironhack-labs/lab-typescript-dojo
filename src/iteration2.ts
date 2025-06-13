//
// Iteration 2 | Functions



function calcMultipication( a:number, b:number ) {
    return a * b;
}

const result1 = calcMultipication(2,2);
console.log(result1);

const result2 = calcMultipication (0,1);
console.log(result2);

// Iteration 2.2

function isEven( n:number ): boolean {
    return n % 2 === 0;
}

const result3 = isEven (4);
console.log(result3);

const result4 = isEven(3);
console.log(result4);


function calcArrayAverage( numbersArr: number[]) : string | number {
    if (numbersArr.length === 0) {
        return 'Please provide an array with at least one element'
    }

    const sum = numbersArr.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
    const average = sum / numbersArr.length;
    
    return average;
}

const result5 = calcArrayAverage([]);
console.log(result5);

const result6 = calcArrayAverage([5,5,6,4]);
console.log(result6);
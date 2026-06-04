//
// Iteration 2 | Functions
//
//2.1
function calcMultiplication(a: number, b: number): number {
        return a * b;
    }


    //2.2
    function isEven(n: number): boolean {
        return n % 2 === 0;
    }

    //2.3
    function calcArrayAverage(numbersArr: number[]): number | string {

        if (numbersArr.length === 0) {
            return 'Please provide an array with at least one element';
        }

        const total = numbersArr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        });

        const average = total / numbersArr.length;

        return average;
    }
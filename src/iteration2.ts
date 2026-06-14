//
// Iteration 2 | Functions
//

export function calcMultiplication(a: number, b: number): number {
	return a * b;
}

export function isEven(n: number): boolean {
	return n % 2 === 0;
}

export function calcArrayAverage(numbersArr: number[]): number | string {
	if (numbersArr.length === 0) {
		return 'Please provide an array with at least one element';
	}

	const total = numbersArr.reduce((accumulator, current) => accumulator + current, 0);
	return total / numbersArr.length;
}




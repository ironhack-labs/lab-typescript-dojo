//
// Iteration 2 | Functions
//

function calcMultiplication(a: number, b: number): number {
	return a * b
}

function isEven(n: number): boolean {
	if (n % 2 === 0) {
		return true
	}
	return false
}

function calcArrayAverage(arr?: number[]): number | string {
	if (!arr) {
		console.log(`Please provide an array with at least one element`)

		return `Please provide an array with at least one element`
	}
	let total: number = 0
	arr.forEach((arr) => (total += arr))

	console.log(total / arr.length)

	return total / arr.length
}

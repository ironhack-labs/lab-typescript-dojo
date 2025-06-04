//
// Iteration 2 | Functions
//

  function calcMultiplication(a: number, b: number): number {
      return a * b;
  }

  const result = calcMultiplication(1, 2)
  console.log(result);

    function isEven(n: number): boolean {
      return n % 2 === 0;
  }

  const result2= isEven(3);
  console.log(result2);

  function calcArrayAverage(numbersArr: number[]): number | string {

      if (numbersArr.length === 0) {
          return 'Please provide an array with at least one element, why would you want to calculate the average of an empty array? are u okay?';
      }

      const total = numbersArr.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
      });

      const average = total / numbersArr.length;

      return average;
  }

  const result3 = calcArrayAverage([1, 2, 3, 4, 5]);
  console.log(result3);



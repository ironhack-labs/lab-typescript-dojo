//
// Iteration 1 | Example
//


export default function sayHello(userName:String): string {
  return `Hello ${userName}, how are you?`;
}

const result1 = sayHello("John");

const result2 = sayHello("Jane");

console.log(result1);
console.log(result2);
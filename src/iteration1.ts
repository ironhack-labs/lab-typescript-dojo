//
// Iteration 1 | Example
//

console.log("Example1: Hello world!");
console.log("Example2: Hello world!");

/*
For this iteration, you will work on the file `src/iteration1.ts`. On that file, create a function that meets the following requirements:
- Name of the function: `sayHello()`
- Parameters:
    - `userName` (a string)
- Return value: 
  - should return a string in the format `Hello [name], how are you?`, where `[name]` is the user name
  - Example: `Hello Alice, how are you?`
- Note: remember to include type annotations for your function parameters and return values.

*/

function sayHello(userName: string): string {
  return `Hello ${userName}, how are you?`;
}

console.log(sayHello("Alice"));
console.log(sayHello("Bob"));
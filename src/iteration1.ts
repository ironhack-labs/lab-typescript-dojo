// src/iteration1.ts

function sayHello(userName: string): string {
  return `Hello ${userName}, how are you?`;
}

// Test the function
const result1 = sayHello("Alice");
console.log(result1); // Should output: Hello Alice, how are you?

const result2 = sayHello("Bob");
console.log(result2); // Should output: Hello Bob, how are you?

"use strict";
//
// Iteration 1 | Example
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sayHello;
function sayHello(userName) {
    return `Hello ${userName}, how are you?`;
}
const result1 = sayHello("John");
const result2 = sayHello("Jane");

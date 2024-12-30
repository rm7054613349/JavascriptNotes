/*

In JavaScript, HOF (Higher-Order Function) is a function that can do one or both of the following:

Accepts a function as an argument.
Returns a function as its result.
Higher-order functions are a core concept in JavaScript because functions are treated as first-class citizens, meaning they can be passed as arguments, returned from other functions, and assigned to variables.

Common Examples of Higher-Order Functions
1. Accepting a Function as an Argument
Functions like map, filter, and reduce are common HOFs in JavaScript. They take callback functions as arguments.

Example: map

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]




2. Returning a Function
A function that returns another function is also a higher-order function.

Example: Function returning another function

function greet(name) {
  return function (message) {
    return `${message}, ${name}!`;
  };
}
  

const greetRitesh = greet("Ritesh");
console.log(greetRitesh("Hello")); // Hello, Ritesh!
console.log(greetRitesh("Good morning")); // Good morning, Ritesh!





*/
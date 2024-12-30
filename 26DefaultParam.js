/*


Default parameters in JavaScript allow you to set a default value for a function parameter if no value (or undefined) is passed for that parameter when the function is invoked. This feature was introduced in ES6 (ECMAScript 2015).

Syntax
function functionName(param1 = defaultValue, param2 = defaultValue) {
  // Function body
}

Example: Default Parameters

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();           // Output: Hello, Guest!
greet("Ritesh");   // Output: Hello, Ritesh!



Key Points:
Only Undefined Triggers the Default
If you explicitly pass undefined as a parameter, the default value will be used:

function showMessage(message = "Default Message") {
  console.log(message);
}

showMessage();             // Output: Default Message
showMessage(undefined);    // Output: Default Message
showMessage(null);         // Output: null
showMessage("Hi there!");  // Output: Hi there!




Default Parameters Can Be Expressions
The default value can also be a computed expression or a function:

function calculatePrice(price, tax = price * 0.1) {
  return price + tax;
}

console.log(calculatePrice(100));       // Output: 110
console.log(calculatePrice(100, 15));  // Output: 115




Order of Parameters Matters
Default parameters work best when placed after required parameters, as skipping the default parameter requires explicitly passing undefined:

function example(a, b = 10) {
  return a + b;
}

console.log(example(5));        // Output: 15
console.log(example(5, 20));    // Output: 25


Benefits :  
Makes functions more flexible and concise .
Reduces boilerplate code for parameter validation .
Avoids using || for default values, which can behave unexpectedly with falsy values like 0 or " " .
Browser Support
Default parameters are supported in all modern browsers, but you may need a transpiler like Babel for older environments that don't support ES6.
  

*/
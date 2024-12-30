/*


Hoisting in JavaScript is a mechanism where variables, function declarations, and classes are moved to the top of their scope during the compilation phase before the code is executed. This allows you to use functions and variables before they are declared in the code.

Key Points:
Function Declarations: Fully hoisted, meaning you can call the function before declaring it.

 Variable Declarations:
 var:
 Hoisted to the top of its scope but is undefined until the interpreter reaches the line of code where the variable is assigned.

 let and const:
 Hoisted but are in a "temporal dead zone" from the start of the block until the declaration is encountered. Accessing them before the declaration results in a ReferenceError.

 Classes:
 Hoisted but are in a temporal dead zone, similar to let and const. Using a class before declaring it results in a ReferenceError.
 Example 1: Function Hoisting


    sayHello(); // Output: "Hello"
    function sayHello() {
    console.log("Hello");
    }

Here, the function declaration is hoisted, so you can call it before the definition.



Example 2: Variable Hoisting (var, let, const)

console.log(a); // Output: undefined
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;


The var variable is hoisted but not initialized, so it logs undefined.
The let variable is hoisted but is in the temporal dead zone.


*/

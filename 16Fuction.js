/*
    1. Named Functions
A function with a declared name.

function greet(name) {
    return `Hello, ${name}!`;
}





2. Anonymous Functions
Functions without a name, often used as callbacks.

const add = function(a, b) {
    return a + b;
};



3. Arrow Functions
A concise syntax introduced in ES6, with implicit this behavior.

const multiply = (a, b) => a * b;




4. Immediately Invoked Function Expressions (IIFE)
Functions executed immediately after their definition.

(function() {
    console.log("IIFE executed");
})();





5. Higher-Order Functions
Functions that take other functions as arguments or return them.

function operate(a, b, callback) {
    return callback(a, b);
}
const result = operate(5, 3, (x, y) => x + y); // Output: 8




6. Constructor Functions
Functions used to create objects.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const john = new Person("John", 30);




9. Default Parameter Functions
Functions with default parameter values.

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}



10. Rest Parameter Functions
Functions accepting variable numbers of arguments.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}





11. Callback Functions
Functions passed as arguments to other functions.


function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}

processUserInput((name) => console.log(`Hello, ${name}`));





12. Recursive Functions
Functions that call themselves.

function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}





13. Method Functions
Functions defined inside an object.

const obj = {
    greet: function() {
        return "Hello";
    }
};





14. Class Methods
Functions inside classes, acting as methods.

class Car {
    start() {
        console.log("Car started");
    }
}




15. SetTimeout and SetInterval Functions
Browser API functions used to execute functions asynchronously.


setTimeout(() => console.log("Hello after 1 second"), 1000);
setInterval(() => console.log("Repeating every 1 second"), 1000);

*/
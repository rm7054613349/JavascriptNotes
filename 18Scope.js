/*

  1. Global Scope
        Variables declared in the global scope are accessible from any part of the code.
        These variables are properties of the window object in browsers (or global in Node.js).
        Example:


        var globalVar = "I am global";

        function showGlobal() {
        console.log(globalVar); // Accessible here
        }

        showGlobal();
        console.log(globalVar); // Accessible here too




    2. Local Scope
    Variables declared inside a function are local to that function.
    These variables are not accessible outside the function.
    Example:


        function localScopeExample() {
        var localVar = "I am local";
        console.log(localVar); // Accessible here
        }

        localScopeExample();
        console.log(localVar); // Error: localVar is not defined






    3. Block Scope (introduced in ES6)
    Variables declared with let or const inside a block {} are accessible only within that block.
    var does not have block scope (it’s hoisted to the function or global scope).
    Example:

    {
    let blockScoped = "I am block-scoped";
    console.log(blockScoped); // Accessible here
    }

    console.log(blockScoped); // Error: blockScoped is not defined

    if (true) {
    const blockConst = "Also block-scoped";
    console.log(blockConst); // Accessible here
    }

    console.log(blockConst); // Error: blockConst is not defined






Special Notes:
Function Scope (Legacy Behavior with var)
Variables declared with var are scoped to the nearest function, not the block.
Example:

    if (true) {
    var functionScoped = "I am function-scoped";
    }
    console.log(functionScoped); // Accessible here





    



Lexical Scope
JavaScript uses lexical scoping, meaning a variable's scope is determined by where it is declared in the code.
Inner functions can access variables from their outer functions due to closures.
Example:


    function outerFunction() {
    let outerVar = "I am outer";

    function innerFunction() {
        console.log(outerVar); // Accessible here
    }

    innerFunction();
    }

    outerFunction();


*/
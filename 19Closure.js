/*


  A closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function's variables, even after the outer function has executed. Closures allow you to retain access to a function's scope, even if the function has finished execution.

    Key Aspects of Closures:
    Scope Access: A closure has access to:
    Its own scope (variables defined within it).
    The scope of the outer function.
    The global scope.

    Persistence: Variables in the closure remain in memory and can be accessed or updated later.
    Example:
    
    function outerFunction(x) {
    return function innerFunction(y) {
        return x + y; // x is "remembered" from outerFunction's scope
    };
    }

    const add5 = outerFunction(5); // outerFunction is called with x = 5
    console.log(add5(3)); // innerFunction is called with y = 3; Output: 8
    console.log(add5(10)); // Output: 15


Explanation:
The innerFunction forms a closure over the outerFunction, "remembering" the value of x (which was 5 in this case), even after outerFunction has returned.

*/

/*

In JavaScript, map, filter, and reduce are array methods that provide powerful ways to manipulate and process arrays. Here's a detailed comparison:



1. map
Purpose: Transforms each element of an array and returns a new array with the transformed elements.
Key Point: The length of the resulting array is the same as the original array.
Use Case: When you want to create a new array by applying a function to each element of an array.


Syntax:
array.map(callback(element, index, array))

Example:
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]





2. filter
Purpose: Filters elements of an array based on a condition and returns a new array with elements that satisfy the condition.
Key Point: The length of the resulting array can be less than or equal to the original array.
Use Case: When you want to extract a subset of elements that meet specific criteria.


Syntax:
array.filter(callback(element, index, array))

Example:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]




3. reduce
Purpose: Reduces an array to a single value by applying a function that accumulates results.
Key Point: The resulting value is not necessarily an array; it can be any type (e.g., number, string, object).
Use Case: When you want to derive a single value (e.g., sum, product, or concatenation) from an array.

Syntax:
array.reduce(callback(accumulator, element, index, array), initialValue)

Example:
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10





*/
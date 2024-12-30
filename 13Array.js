
/*
1. Array Basics
An array is a collection of elements, which can be of any data type (e.g., numbers, strings, objects). JavaScript arrays are zero-indexed, meaning the first element has an index of 0.

Example: 1 Dimensional Array - we are Pushing any Type of elemnts in array
const fruits = ["Apple", "Banana", "Cherry",26 , null];
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Cherry





2. Multidimensional Arrays
A multidimensional array is an array of arrays, often used to represent matrices or grids.
Example of a 2D Array:
javascript
Copy code
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];




// Accessing elements
console.log(matrix[0][1]); // Output: 2
console.log(matrix[2][0]); // Output: 7


3. Common Array Methods

3.1 Adding and Removing Elements
push(): Adds an element to the end.
pop(): Removes the last element.
unshift(): Adds an element to the beginning.
shift(): Removes the first element.



let nums = [1, 2, 3];
nums.push(4); // Adds 4 to the end
console.log(nums); // Output: [1, 2, 3, 4]
nums.pop(); // Removes the last element
console.log(nums); // Output: [1, 2, 3]




3.2 Iterating Over Arrays
forEach(): Executes a provided function once for each array element.
map(): Creates a new array with the results of calling a provided function.


const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num)); // Output: 1, 2, 3

const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]



3.3 Searching
indexOf(): Returns the index of the first occurrence of a value.
includes(): Checks if an array includes a certain value.
find(): Returns the first element that satisfies a condition.
filter(): Returns an array of all elements that satisfy a condition.



const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.indexOf("Banana")); // Output: 1
console.log(fruits.includes("Cherry")); // Output: true

const nums = [5, 10, 15, 20];
const result = nums.filter(num => num > 10);
console.log(result); // Output: [15, 20]



3.4 Manipulating
splice(): Adds/removes elements in the array.
slice(): Extracts a portion of an array.


array.splice(startIndex, deleteCount, item1, item2, ..., itemN);
let items = ["A", "B", "C"];
items.splice(1, 1, "X"); // Replaces "B" with "X"
console.log(items); // Output: ["A", "X", "C"]



const subArray = items.slice(0, 2); // Extracts first two elements
console.log(subArray); // Output: ["A", "X"]



3.5 Sorting
sort(): Sorts the elements.
reverse(): Reverses the elements.


let numbers = [3, 1, 4, 2];
numbers.sort(); // Alphabetical order for strings, numeric requires a comparator
console.log(numbers); // Output: [1, 2, 3, 4]

numbers.reverse();
console.log(numbers); // Output: [4, 3, 2, 1]



4. Example: Working with Multidimensional Arrays
Summing all elements in a 2D array:


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


let sum = 0;
matrix.forEach(row => {
  row.forEach(value => {
    sum += value;
  });
});

console.log("Sum of all elements:", sum); // Output: 45



*/
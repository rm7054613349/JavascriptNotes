/*
1. for Loop
Used to iterate a block of code a specific number of times.
for (let i = 0; i < 5; i++) 
{
  console.log(i); // Outputs: 0, 1, 2, 3, 4
}
Components:
Initialization (let i = 0)
Condition (i < 5)
Increment/Decrement (i++)



2. while Loop
Executes a block of code as long as a specified condition is true.
let i = 0;
while (i < 5) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
}



3. do...while Loop
Similar to while, but it ensures the block of code runs at least once, regardless of the condition.

let i = 0;
do {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
} while (i < 5);




4. for...in Loop
Used to iterate over the enumerable properties of an object or the indices of an array.

const person = { name: "John", age: 25, city: "New York" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`); // Outputs each key-value pair
}



5. for...of Loop -- Jaise ham C++ me Auto use krte the same usi trah use hota hai
Used to iterate over iterable objects like arrays, strings, or NodeLists.
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color); // Outputs: red, green, blue
}


6. Array.prototype.forEach()
A higher-order method that executes a provided function once for each array element.

const numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num)); // Outputs: 1, 2, 3, 4



7. map() Loop
Creates a new array by applying a function to each element in the array.
const numbers = [1, 2, 3];
const squared = numbers.map((num) => num * num);
console.log(squared); // Outputs: [1, 4, 9]



*/
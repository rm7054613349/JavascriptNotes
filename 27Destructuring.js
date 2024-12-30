/*

  
Destructuring in JavaScript is a convenient way of extracting values from arrays or properties from objects and assigning them to variables. This syntax helps in making your code more concise and readable.

1. Destructuring Arrays
You can extract values from an array by position and assign them to variables.

Example:
const fruits = ["apple", "banana", "cherry"];
const [first, second, third] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "cherry"




Skipping Elements:
const numbers = [1, 2, 3, 4];
const [, second, , fourth] = numbers;

console.log(second); // 2
console.log(fourth); // 4
Default Values:



If the array does not contain enough elements, you can specify default values.
const [a, b = 5] = [1];
console.log(a); // 1
console.log(b); // 5




2. Destructuring Objects
You can extract properties from an object and assign them to variables with the same name as the property.

Example:
const user = { name: "Ritesh", age: 25, country: "India" };
const { name, age, country } = user;

console.log(name);    // "Ritesh"
console.log(age);     // 25
console.log(country); // "India"



Using Different Variable Names:

const user = { name: "Ritesh", age: 25 };
const { name: userName, age: userAge } = user;

console.log(userName); // "Ritesh"
console.log(userAge);  // 25




Default Values:
const user = { name: "Ritesh" };
const { name, age = 30 } = user;

console.log(name); // "Ritesh"
console.log(age);  // 30




3. Nested Destructuring
You can destructure nested objects or arrays.

Objects:
const user = {
  name: "Ritesh",
  address: {
    city: "Mumbai",
    state: "Maharashtra"
  }
};

const { address: { city, state } } = user;

console.log(city); // "Mumbai"
console.log(state); // "Maharashtra"




Arrays:

const numbers = [1, [2, 3], 4];
const [one, [two, three]] = numbers;

console.log(one);   // 1
console.log(two);   // 2
console.log(three); // 3






4. Rest Operator in Destructuring
You can use the rest operator (...) to collect remaining elements into a separate variable.

Arrays:
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]









Objects:

const user = { name: "Ritesh", age: 25, country: "India" };
const { name, ...otherDetails } = user;

console.log(name);         // "Ritesh"
console.log(otherDetails); // { age: 25, country: "India" }









5. Function Parameters Destructuring
Destructuring is particularly useful when working with function parameters.

Example:
function printUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: "Ritesh", age: 25 };
printUser(user); // "Name: Ritesh, Age: 25"

*/

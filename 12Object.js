/* Object Non Primitive (Refrenced) Data Type hota hai  and ye further three category me devide hota hai 
1- Object Litral
2- Array
3- Function
*/



// OBJECT - Collections of Key value pairs
// Ye bat Hmesh yad Rkhna Jo bhi Non Primitive ho un variable ke ander value dekhene me bhle hi same ho but unke addresse alg alg honnge and comparison me unke address hi checkk hote hai
// primitve me aisa nhi hota hai

//ex:


// Diffrent memory with Diffrent Name

// const user1 = {
//   name: "Ram",
//   age: 25,
//   address: {
//     street: "123 Main St",
//     city: "New York"
//   }
// };

// const user2 = {
//     name: "Ram",
//     age: 25,
//     address: {
//       street: "123 Main St",
//       city: "New York"
//     }
//   };
  
// console.log(user1 == user2); // false 
// console.log(user1 === user2); // false



/*   Same memory with Diffrent Name */
// const a="ram";
// const b="ram"
// console.log(a==b) // true
// console.log(a===b)//true




//ex:
const a="ram";
const user2 = 
{
    name: "Ram",
    age: 25,
    "first-name": "John",
    address: {
      street: "123 Main St",
      city: "New York"
    }
  };

//   console.log(user2);

//   console.log(user2.name); // Ram - ye tabhi use hoga jab single variable use hoga like age , not like first-name

//   console.log(user2.first-name); // Error - ye tabhi use nhi hoga jab single variable use hoga like name , other wise hme key ko as a string ki trah hi pass krna pdega

//   console.log(user2['first-name']); // John

//   console.log(user2["age"]) //25  - Agr ham obect me key string me define krr rhe hai then squre bracket me key pass krne ki need nhi hai other wise hme key ko as a string ki trah hi pass krna pdega



// agr me koi ke add krna hai then
user2.city="LKO"
console.log(user2)








// Agr Hme Koi Data Delete Krna ho then we are ue 
delete user2.city





Object.seal(user2) // iske ander Jo Object hai usko seal kr deta hai - iske madhyam se hum koi bhi property add ya delete nhi kr panyenge lekin object ke ander ki value change krr skte hai


Object.freeze(user2); //same object seal ki trh hi hota hai lekin usme ham inside ki value change krr Pa rhe the isme vo bhi nhi krr payenege
  
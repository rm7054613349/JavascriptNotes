/***********   Most Important Topic for Interview  ***********/
// there is Three TYpe of Variables in JS

/* var
   let
   const
*/




/*********************  Using  let { Follow camelCasing for Best  } ***********************/

// let userName="Krishna"
// let age = 20
// let marry = false
// console.log(userName + " " + age + " " + marry )


/*******************  Property of let  ***********************************/

// 1- Block Scope:
// {
//     let x = 10;
//     console.log(x); // Output: 10
// }
// console.log(x); // Error: x is not defined


//2-No Redeclaration in the Same Scope:
//   let a = 5;
//   console.log(a); // Output:5
// let a = 10; // Error: Identifier 'a' has already been declared


//3-Can Be Updated: Reassignment krr skte hai
// let count = 1;
// console.log(count);
// count = 2; // Valid
// console.log(count); // Output: 2


/*******
 * 4-Not Hoisted in the Traditional Sense:
 * While let is technically hoisted to the top of the block,  it is not initialized until the declaration line is executed.
  *Accessing a let variable before its declaration results in a ReferenceError (Temporal Dead Zone).
*/
// console.log(x); // Error: Cannot access 'x' before initialization
// let x = 10;




















/**************************  Using Var  *********************************/

/*Property
  1-Function-scoped or global --var ko khi bhi declear krr do vo value acces krr lega chahe block scope me ho ya functional me ho ya 
  2-Hoisted (initialized as undefined)
  3-Redeclaration-Allowed in the same scope
  4-Reassignment-Yes
*/


//1-Function-scoped or global --var ko khi bhi declear krr do vo value acces krr lega chahe block scope me ho ya functional me ho ya 
// function myFunction() {
//     var x = 10;
//     console.log(x); // Output: 10
// }
// // console.log(x); // Error: x is not defined (x is function-scoped)

// if (true) {
//     var y = 20;
// }
// console.log(y); // Output: 20 (accessible outside the block)



//******************************* Interview me Poochha Jata
// 2-Hoisted (initialized as undefined)
// console.log(b); // Output: undefined
// var b = 15;
// console.log(b); // Output: 15




//3-Redeclaration-Allowed in the same scope
// var a = 5;
// var a = 10; // No error
// console.log(a); // Output: 10



//4-Reassignment-Yes
//  var a = 5;
//  a = 10; // No error
//  console.log(a); // Output: 10














































/************************* Const ****************************/
/* 
  Property  almost same as let property
  1-Block Scope:
  2-Hoisted (TDZ applies)
  3- Redeclaration-Not Allowed in the same scope
  4- Reassignment-Not Allowed
*/



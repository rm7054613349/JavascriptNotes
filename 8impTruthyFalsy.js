
/***************** Imp For Interview *****************/

// Ydi hme check krna hai ki koi Number , String , Character etc true or false hai to uske liye ham Boolean(hiske bare me check krna hai ki vo shi true hai ya false hai vo dal de)

//ex - OP hmesha Ture or false me dega tbhi to ham ise truthy or falsy khte hai

const ans = Boolean(10)
console.log(ans)

const a=Boolean({})
console.log(a)

const b=Boolean(-Infinity)
console.log(b)




/*

Falsy Values
A value is considered falsy if it is implicitly converted to false in a boolean context. The following are the falsy values in JavaScript:

false        -                          The boolean false.
0            -                          The number zero (both 0 and -0).
"" or ''     -                          An empty string.
null         -                          A special value that represents "no value."
undefined    -                          A value that indicates a variable has been declared but not assigned a value.
NaN          -                          A special value that means "Not-a-Number.

*/



/*

Truthy Values
All values in JavaScript are considered truthy unless they are one of the falsy values listed above. Common examples of truthy values include:

Non-zero numbers (e.g., 1, -1, 3.14).
Non-empty strings (e.g., "hello", '0', "false").
Objects (e.g., {}, [], function() {}).
Special values like Infinity and -Infinity.


*/



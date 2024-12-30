
//1- Convert any string to Number 
//Jab Ham string ko number me convert krr rhe hai then yad rhe ki string ke jo collection hai vo number ho ex "122" true
//" Ram" false

//A-const value = Number("12345");
// console.log(typeof value); //number


//B- MEthod
//  const value = "12345";
//  const number = parseInt(value);
//  console.log(typeof number); //number


 //C-Method
//  const value = "12345";
//  const number = + value;
//  console.log(typeof number); //number

//Wrong Case
// const value = "Ram";
// const ans = parseInt(value);
// console.log( ans); // NaN




/**************  Important Ex  { ye kewal parseInt hi krr Payega
aur koi nhi  ****************/

//Interview Question
// const a = "100abc";
// const b="100abc100"
// const c = "abc100";

// console.log(parseInt(a));   //100
// console.log(parseInt(b));  //100
// console.log(parseInt(c)); //NaN



/* NaN ka Type Number hota hai */






/*************************** How to Convert number to String ************/

//A- Method 1 use empty String Concept
// const num = 100
// const ans=num +' '
// console.log(typeof ans)  //String



//B- Method 2 use toString() Method
// const num = 100
// const ans = num.toString()
// console.log(typeof ans)  //String
 










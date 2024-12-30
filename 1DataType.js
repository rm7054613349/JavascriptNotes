
//Data Type in JavaScript

//Data Type in JavaScript is two Type 
//1-Primitive type -(value Typed)  number ,boolean,string,undefined,null
//2-Non-Primitive type - object (Refrenced type) only object hi hota hai
/*
Object (below Jo given hai unka type Object hi hota hai ) further three catagory me divide hota hai -
1-Object Litral
2-Array
3-Functions
*/


//1-Primitive type Stored a single value

//Number
console.log(typeof (1));//number { chahe is bhi trah ka number ho desimal and nondesimal dono ka same type hoga }


//String
//String { Single quote ' ' or " " quote does not support new line use ` ` (back tick for new line me string likhne ke liye)  }
console.log(typeof ("Ram"))
console.log(typeof ('1')); //String
console.log(`Ram
             Seeta
             Laxman
             `) //isko ham Templet Litral Bolte hai ye ES6 ka features hai



console.log(typeof (undefined));//undefined

console.log(typeof (true));//Boolean



//Important Ya to iska Type Null Hona Chahiye Ya to number but iska Type Object Ata hai Jo ki ak BUG Hai
console.log(typeof (null)); //Object



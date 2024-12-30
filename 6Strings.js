/*
1- String me Index ki Prperty Hoti hai ham ise array ki trah  acces krr skte hai
*/



/**********   METHOD OF STRING   Without Argumnent  ************/

//1-Out of Size of string
// const str = "John";
// console.log(str[5]); //undefined  //index out of size of str




//2-length of String
// const len="Ram"
// console.log(len.length) //3




//3-upperCase String
// const str="ram seeta"
// const ans=str.toUpperCase()  ////Ye same string me changes nhi krta balki ak new O/P genrate krta hai
// console.log(ans) // RAM SEETA





//4-LowerCase String
// const str="RAM SEETA"
// const ans=str.toLowerCase()  //Ye same string me changes nhi krta balki ak new O/P genrate krta hai
// console.log(ans) // ram seeta
// console.log(str)





/*5-trim the string - Remove whitespaces
  they are two types  
  a-trimStart() -- Remove whitespaces from the beginning
  b-trimEnd()-- Remove whitespaces from the end
*/
// const str="         Ram      Seeta        "
// console.log(str.trim()) //Ram      Seeta
// console.log(str) //          Ram      Seeta 






//6-Chaining of strings
// const str ="  ram seeta   "
// const ans =str.trim().toUpperCase().a(4)
// console.log(ans) //S












/**********   METHOD OF STRING   With Argumnent  ************/


//1-includes - Return o/p int the form of True or False ye kewal ye check krta hai ki koi  chars or String  given strngs me present hai ya nhi

// const str =" I am Ritesh mishra and wr are the final year student"

// const ans=str.includes("I am Ritesh") 
// console.log(ans) // True

// const b=str.includes()
// console.log(b) // Flase

// const c=str.includes(" ")
// console.log(c) // True

// const d=str.includes("I")
// console.log(d) //True

// const e=str.includes(" I AM ")
// console.log(e) // Flse

// const f=str.includes(" I am R")
// console.log(f) // True -- Ye start se one by one character check krta hai 








//2- indexOf - Ye kisi perticuler char ka index return krega ydi vo given str me present hai agr nhi hoga to -1 return krega

// const str ="My name is Ritesh Mishra"

// // const a=str.indexOf("is") // ye string ka bhi index dega lekin vo index return krega jha se parameter string ka phla char start hai 
// // console.log(a)//8

// const b=str.indexOf("i") 
// console.log(b)//8

// const c=str.indexOf("I")
// console.log(c)//-1     { Ye CaseSensitive hota hai  }

// const d=str.indexOf("i") 
// console.log(d) // jha pahla i milega uska index return kr dega yadi kai sare i hai





//3-replace (konsa char or string replace krna chahate ho, kis string or char se Replace krna chahte ho ) , Ye new string retunrn krega old string me koi change nhi krega

// const str ="My name is Ritesh Mishra"
// const a=str.replace("is","are")
// console.log(a) // My name are Ritesh Mishra

// const b=str.replace("are","will") // are not present in original String
// console.log(b)  // koi change nhi krega Jo original string hogi vhi return krr dega




//4- replaceAll-jitne bhi match honge vo sare ko replace krr dega
// const str = " My name is khan . I am only son of my father this is about khan "
// const ans=str.replaceAll("is","have")
// console.log(ans) // OP- My name have khan . I am only son of my fatherthhave have about khan 





//5-concate-- use for add two strings
// const str1= "Jai Sri"
// const str2="Radhe krishna"
// const ans=str1.concat(" " +str2) //yadi space nhi use krenge to Jai SriRadhe krishna iss trah op ata
// console.log(ans)//Jai Sri Radhe krishna




//6-PadStart - String ke age kitne char or str add krna hai vo krta ha ye
// const str="8853"
// const ans=str.padStart(10,"*") // Strat me ham number dete hai ki dono add hokr kitna length bnega and dusra parameter string or char hota hai
// console.log(ans)//******8853  



//7-PadEnd - String ke end me kitne char or str add krna hai vo krta ha ye
// const str="8853"
// const ans=str.padEnd(10,"*") // Strat me ham number dete hai ki dono add hokr kitna length bnega and dusra parameter string or char hota hai
// console.log(ans)//8853****** 





//8-charAt- kisi bhi perticular index ki value return krta hai given str se
// const str="Jai sri Radhe Krishna"
// const ans=str.charAt(9);
// console.log(ans) // a  -- ye 9 index ki char return krta hai 0 index se start hai 0-based index
// const a=str.charAt(30);
// console.log(a) // return space we not seen in console




//9-charCodeAt - ye perticular index per jo char hoga uska ASCII code or number retunr krta hai
// const str="Jai sri ARadhe Krishna"
// const a=str.charCodeAt(12)
// console.log(a) //104
// const b=str.charCodeAt()//agr kuchh nhi pass kroge to by default ye 0 lega and 0 index per jo char hoga uska code return krr dega
// console.log(b)//74





//10-split--Ye string ko break  krr deta hai in the form of array 
// const str="jai Sri Radhe Krishna"
// const ans=str.split(' ') //use only single quote
// console.log(ans)  //[ 'jai', 'Sri', 'Radhe', 'Krishna' ]
// console.log(typeof ans)// object




/******************* Ye Sari ki Sari Property Templet Litral ke Liye bhi Applicable hai 
 * 
 * Ham String ke ander hi dynamically value dal skte hai usin 
 * ${string} keyword
 * ******************/

const str = " Jai Sri Radhe Krishna"
const ans = ` Jai Sri Ram ${str}`
console.log(ans) // Jai Sri Ram  Jai Sri Radhe Krishna










//Use Google For More Details











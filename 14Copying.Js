
// Spread Operator - Best method to use Copying arrays and Object

// For Array - Deep Copy Krta hai
const arr=[1,2,"Ram","Seeta",55]
const arr2=[...arr]
arr2.push(9);
console.log(arr)
console.log(arr2)




//For Object - Deep Copy
const obj={
    "name":"Rame",
    "age":20
}

const obj2 ={ ...obj,
    "city":"Delhi"
}
console.log(obj)
console.log(obj2)


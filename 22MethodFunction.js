
// Object kenander jitne bhi ham fn defirne krte hai use ham method khte hai 

// major Diffrence between method and fn 
// method ko ham dot(.) ka use krke accesss krr skte hai jse nhi access kr pate vo fn hoga

const obj={
    name:"Rahul",
    add:function(a,b)
    {
        return a+b;
    }
}
// ye method kahlayega
console.log(obj.add(10,20)) // 30  - ye method ko dot(.) ka use krte hai jisme object me access krte hai and add fn call krte hai 10 and 20 me




//Ye Function hai
function add(a,b)

{
    return a+b;

}
console.log(add(10,20)) // 30 -
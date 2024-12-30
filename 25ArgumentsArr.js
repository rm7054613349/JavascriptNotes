

// arguments ak keywords hota hai jo ki diffren diffrend elemnts ka ak array collections bna dete hai

// arguments ye arrow function ke ander nhi hota hai


function Demo() {

    var a=0
    // console.log(arguments.length); // Number of arguments
    for (let i = 0; i < arguments.length; i++) 
    {
        a += arguments[i]; // Adds all arguments together
         // Logs each argument
    }

    console.log(a);
    // console.log(typeof arguments); // Logs 'object'
}

Demo(99.87654, 67.08, 69.9, 7376, 85, 897.8787);
``









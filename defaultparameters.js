//the name of the parameter is initialized in the function
//they should always come after uninitialized parameters
function hello(name = "Erick"){
    return `Hello ${name}`;
}

/* let msg = hello();
console.log(msg); */

//we can also override these parameters

let msg = hello("universe");
console.log(msg);
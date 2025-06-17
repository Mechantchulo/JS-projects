//objects as parameters in a function
const hey = {
    greetings: "Hello there!",
    name: "Erick",
    age: 10
}

function greet({greetings, name, age}){
    return `${greetings} I am ${name} and je suis ${age} years`;
}


console.log(greet(hey));
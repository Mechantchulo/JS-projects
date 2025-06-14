/* const person = {
    fname: "Erick",
    lname: "Reyes",
    age: 22
}

console.log(person); */

/* const person ={}

person.name = "Erick"
person.age = 22 

console.log(person) */

// Create an Object
/* const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

person.lastName = "Smith";

console.log(person); */

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather.fullName());
console.log(myMother.fullName());
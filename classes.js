//classes in js
//use the constructor keyword 

class Person{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    getName(){
        return this.fname + " "+this.lname; 
    }
}

const person1 = new Person("Erick", "Mutua");
console.log(person1.getName());

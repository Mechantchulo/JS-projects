// Denoted by =>
//useful for short functions but get complicated when funciton block is large

//const square = x => x*x;
/* 
const square = () =>{

    return x*x;
}

const squaredNum = square(4);

console.log(squaredNum); 

this will return that x is undefined*/

const square = x =>{

    return x*x;
}

const squaredNum = square(4);

console.log(squaredNum);
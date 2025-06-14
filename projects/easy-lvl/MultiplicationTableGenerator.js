//Ask the user for a number and display its multiplication table up to 12

const number = 10;
const strtoNumber = Number(number);
let result;

for( i=0; i<=12; i++){
    
    result =strtoNumber * i;

    console.log(`${strtoNumber} x ${i} is ${result}`);

    
}



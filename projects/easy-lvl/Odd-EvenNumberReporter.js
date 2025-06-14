/*Odd/Even Number Reporter
Loop from 1 to 100 and print whether each number is odd or even. */

let nums;

for(nums=0; nums<=100; nums++){
    if(nums%2 ==0){
        console.log(`${nums} is even` );
    } else{
        console.log(`${nums} is odd`)
    }
}
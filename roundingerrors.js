/* function mean(a,b,c){
    return (a+b+c)/3;
}

//invoke the function

const meanResult = mean(1,3,6); */
//console.log(meanResult);

//let's now solve a problem on variable number of arguments

function mean(...values) {
    let sum = 0;

    for (const value of values) {
        sum += value;

    }

    return sum / values.length;
}

const meanValue = mean(2, 8, 13, 11, 4, 2);

console.log(meanValue);

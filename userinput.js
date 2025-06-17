const prompt = require("prompt-sync")();
const number = Number(prompt("Enter a number: "));  // Make sure it's a number

const numberToString = number.toString();           // Now back to string

console.log("As a string:", numberToString);

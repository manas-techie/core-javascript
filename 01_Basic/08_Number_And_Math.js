const score = 95;
console.log(score);
console.log("Type of score:", typeof score); // "number"

const balance = new Number(1000.50);
console.log(balance);
console.log("Type of balance:", typeof balance); // "object"

console.log(balance.toString().length); // Length of string representation

// Accessing properties and methods of Number object
console.log("Balance toFixed(2):", balance.toFixed(2)); // "1000.50" // 2 decimal places
console.log("Balance toString():", balance.toString()); // "1000.5"
console.log("Balance valueOf():", balance.valueOf()); // 1000.5 // primitive value
console.log(balance.toPrecision(7)); // "1000.500" // total 7 significant digits
const num = 200000000;
console.log(num.toLocaleString()); // "200,000,000" // formatted with commas
console.log(num.toLocaleString('en-IN')); // "20,00,00,000" // Indian numbering format

// Number Constants
console.log("Max Value:", Number.MAX_VALUE);
console.log("Min Value:", Number.MIN_VALUE);
console.log("NaN:", Number.NaN);
console.log("Positive Infinity:", Number.POSITIVE_INFINITY);
console.log("Negative Infinity:", Number.NEGATIVE_INFINITY);


// *******************Math************************

console.log("Math.PI:", Math.PI); // 3.141592653589793
console.log("Math.E:", Math.E);   // 2.718281828459045

// Rounding Methods
console.log("Math.round(4.7):", Math.round(4.7)); // 5
console.log("Math.floor(4.7):", Math.floor(4.7)); // 4
console.log("Math.ceil(4.3):", Math.ceil(4.3));   // 5
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4  // removes decimal part

// Other Math Methods
console.log("Math.sqrt(16):", Math.sqrt(16));     // 4
console.log("Math.abs(-10):", Math.abs(-10));     // 10
console.log("Math.pow(2, 3):", Math.pow(2, 3));   // 8
console.log("Math.min(3, 1, 4, 2):", Math.min(3, 1, 4, 2)); // 1
console.log("Math.max(3, 1, 4, 2):", Math.max(3, 1, 4, 2)); // 4
console.log("Math.random():", Math.random()); // Random number between 0 and 1

// Generating a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log("Random Integer between 1 and 10:", getRandomInt(1, 10)); // e.g., 7

// Summary
// This code demonstrates the use of Number objects and various Math methods in JavaScript,
// including rounding methods, square root calculation, power function, and random number generation.

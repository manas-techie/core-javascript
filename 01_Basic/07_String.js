const name = "Manas";
const repocount = 42;

// outdated way of concatenating strings and variables
// console.log("Hello, " + name + "! You have " + repocount + " repositories.");

// Using template literals to embed variables in a string
console.log(`Hello, ${name}! You have ${repocount} repositories.`);

const gameName = new String("Chess");
console.log(`Game Name: ${gameName}`);
console.log(`Type of gameName: ${typeof gameName}`); // object

console.log(gameName[0]); // C
console.log(gameName.length); // 5

console.log(gameName.__proto__); // String methods and properties

// Using some String methods
console.log(`Uppercase: ${gameName.toUpperCase()}`); // CHESS
console.log(`Lowercase: ${gameName.toLowerCase()}`); // chess
console.log(`Includes 'ess': ${gameName.includes("ess")}`); // true
console.log(`Starts with 'Ch': ${gameName.startsWith("Ch")}`); // true
console.log(`Ends with 'ss': ${gameName.endsWith("ss")}`); // true
console.log(`Index of 'e': ${gameName.indexOf("e")}`); // 1
console.log(`Substring (1,4): ${gameName.substring(1, 4)}`); // hes
console.log(`Replace 'Chess' with 'Checkers': ${gameName.replace("Chess", "Checkers")}`); // Checkers
// charAt
console.log(`Character at index 2: ${gameName.charAt(2)}`); // e
// trim
const spacedString = new String("   Hello World!   ");
console.log(`Trimmed String: '${spacedString.trim()}'`); // 'Hello World!'
// split
console.log(`Split by space: ${spacedString.trim().split(" ")}`); // ['Hello', 'World!']
// substring
console.log(`Substring from index 2 to 5: ${gameName.substring(2, 5)}`); // ess
// Slice
console.log(`Slice from index 1 to 4: ${gameName.slice(1, 4)}`); // hes
console.log(`Slice from index -5 to 4: ${gameName.slice(-5, 4)}`); // Ches
// replace
console.log(`Replace 'e' with 'a': ${gameName.replace("e", "a")}`); // Chass
// includes
console.log(`Includes 'Che': ${gameName.includes("Che")}`); // true



const fruits = ["Banana", "Orange", "Apple", "Mango"];

let myList = fruits.toString();
console.log(`Fruits as String: ${myList}`); // Banana,Orange,Apple,Mango

// Summary
// This code demonstrates the use of template literals for string interpolation,
// the String object and its properties, and various string methods in JavaScript.

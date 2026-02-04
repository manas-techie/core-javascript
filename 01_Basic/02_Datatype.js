"use strict"; //treat all JS code as newer version


// alert("Welcome to Data Types in JavaScript!"); // we can use alert to show message in browser but it is disabled here

// Data Types in JavaScript

// 1. Primitive Data Types
let num = 42; // Number range: -2^53 to 2^53 -1
let str = "Hello, World!"; // String 
let bool = true; // Boolean
let undef; // Undefined 
let nul = null; // Null stands for "no value"
let sym = Symbol("unique"); // Symbol 
let bigInt = 9007199254740991n; // BigInt range: -2^63 to 2^63 -1

// 2. Non-Primitive Data Types
let obj = { name: "Alice", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let func = function() { return "I am a function"; }; // Function

// Checking Data Types
console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof bool); // "boolean"
console.log(typeof undef); // "undefined"
console.log(typeof nul); // "object" (this is a known quirk in JavaScript)
console.log(typeof sym); // "symbol"
console.log(typeof bigInt); // "bigint"
console.log(typeof obj); // "object"
console.log(typeof arr); // "object" (arrays are a type of object)
console.log(typeof func); // "function"

// Example Usage
console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", bool);
console.log("Undefined:", undef);
console.log("Null:", nul);
console.log("Symbol:", sym.toString());
console.log("BigInt:", bigInt);
console.log("Object:", obj);
console.log("Array:", arr);
console.log("Function Output:", func());    


// Summary
// JavaScript has a variety of data types, both primitive and non-primitive.
// Understanding these data types is crucial for effective programming in JavaScript.

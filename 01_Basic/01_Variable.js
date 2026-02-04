let name = "John";
let age = 30;
let isStudent = false;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Updating variables
name = "Jane";
age = 25;
isStudent = true;
console.log("Updated Name:", name);
console.log("Updated Age:", age);
console.log("Updated Is Student:", isStudent);

// Demonstrating variable scope
function displayInfo() {
    let localVariable = "I am local";
    console.log(localVariable);
}

displayInfo();
// console.log(localVariable); // This will cause an error because localVariable is not defined outside the function    

var globalVariable;
function showGlobal() {
    globalVariable = "I am global";
    console.log(globalVariable);
}

showGlobal();
console.log(globalVariable); // This will work because globalVariable is defined with var and has global scope

const constantVariable = "I cannot be changed";
console.log("Constant Variable:", constantVariable);

// constantVariable = "Trying to change"; // This will cause an error because constantVariable is a constant    


// Variables and functions are typically written in camelCase
// Classes are typically written in PascalCase
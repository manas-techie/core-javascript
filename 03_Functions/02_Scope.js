// Scopes

// Global Scope
let globalVar = "I am a global variable";

function checkGlobalScope() {
    console.log(globalVar); // Accessible here
}

checkGlobalScope();
console.log(globalVar); // Accessible here too

// Function Scope
function functionScopeExample() {
    let functionVar = "I am a function-scoped variable";
    console.log(functionVar); // Accessible here
}

functionScopeExample();
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

// Block Scope
if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); // Accessible here
}

// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

// Nested Scopes
function outerFunction() {
    let outerVar = "I am from the outer function";

    function innerFunction() {
        let innerVar = "I am from the inner function";
        console.log(outerVar); // Accessible here
        console.log(innerVar); // Accessible here
    }

    innerFunction();
    // console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined
}

outerFunction();

// 'var' vs 'let'/'const' Scope
function varScopeExample() {
    if (true) {
        var varVariable = "I am a var variable";
        let letVariable = "I am a let variable";
        const constVariable = "I am a const variable";
    }
    console.log(varVariable); // Accessible here
    // console.log(letVariable); // Uncaught ReferenceError: letVariable is not defined
    // console.log(constVariable); // Uncaught ReferenceError: constVariable is not defined
}

varScopeExample();


// 'this' Keyword Scope
const obj = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

obj.greet(); // Hello, Alice

const anotherGreet = obj.greet;
// anotherGreet(); // In non-strict mode, this would be the global object; in strict mode, undefined

// To fix the above issue, we can bind the function to the object
const boundGreet = anotherGreet.bind(obj);
boundGreet(); // Hello, Alice

// Lexical Scope
function lexicalScopeExample() {
    let outerVariable = "I am from the outer scope";    
    function innerFunction() {
        console.log(outerVariable); // Accessible here due to lexical scope
    }    
    innerFunction();
}

lexicalScopeExample();
// console.log(outerVariable); // Uncaught ReferenceError: outerVariable is not defined

// Closures
function makeCounter() {
    let count = 0; // private variable

    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Each call to makeCounter creates a new closure with its own count variable
const anotherCounter = makeCounter();
console.log(anotherCounter()); // 1

// difference between scope in browser and node.js
// In browser, the global scope is the window object
// In Node.js, the global scope is the global object, but variables declared with var, let, or const at the top level of a file are scoped to that file (module scope) and not added to the global object.

// Example in Node.js
var nodeVar = "I am a var variable in Node.js";
let nodeLet = "I am a let variable in Node.js";
const nodeConst = "I am a const variable in Node.js";

console.log(global.nodeVar); // undefined
console.log(global.nodeLet); // undefined
console.log(global.nodeConst); // undefined

// However, if you explicitly attach a variable to the global object, it becomes globally accessible
global.explicitGlobalVar = "I am an explicit global variable";
console.log(global.explicitGlobalVar); // I am an explicit global variable
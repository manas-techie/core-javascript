function sayMyname(name) {
    console.log("Your name is " + name);
}

// function reference
sayMyname
// execution
sayMyname("Alice");
sayMyname("Bob");
sayMyname("Charlie");

// parameters
function add(a, b) {
    return a + b;
}

console.log(add()); // NaN because a and b are undefined

// arguments and return value
let sum1 = add(5, 10);
let sum2 = add(20, 30);

console.log("Sum1: " + sum1); // Sum1: 15
console.log("Sum2: " + sum2); // Sum2: 50

// function expression
const multiply = function (x = 2, y = 3) {
    return x * y;
};

console.log(multiply()); // 6 because default values are used


let product = multiply(4, 5);
console.log("Product: " + product); // Product: 20

// hoisting example
console.log(subtract(10, 5)); // Works due to hoisting

function subtract(a, b) {
    return a - b;
}

// console.log(divide(10,2)); //does not work because function expressions are not hoisted

// const divide = function (m, n) {
//     return m / n;
// }

// arrow function
const divide = (m, n) => {
    return m / n;
};

let quotient = divide(20, 4);
console.log("Quotient: " + quotient); // Quotient: 5

// arrow function with implicit return
const square = x => x * x;

let squaredValue = square(6);
console.log("Squared Value: " + squaredValue); // Squared Value: 36


// Immediately Invoked Function Expression (IIFE)
(function greet() {
    console.log("Hello from IIFE!");
})();


// Number of arguments unknown
function sumAll(...numbers) { //rest operator //numbers is an array
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

let totalSum = sumAll(1, 2, 3, 4, 5);
console.log("Total Sum: " + totalSum); // Total Sum: 15

const user = {
    name: "John Doe",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
}
function introduce(anyobject) {
    console.log("I am " + anyobject.name + " and I am " + anyobject.age + " years old.");
}

introduce(user); // I am John Doe and I am 30 years old.
introduce({ name: "Jane Smith", age: 25 }); // I am Jane Smith and I am 25 years old





// callback function example
function fetchData(callback) {
    // Simulating data fetching with a timeout
    setTimeout(() => {
        const data = { id: 1, message: "Hello, World!" };
        callback(data);
    }, 5000);
}

function displayData(data) {
    console.log("Fetched Data:", data);
}

fetchData(displayData); // After 5 seconds, logs: Fetched Data: { id: 1, message: "Hello, World!" }

// Explanation:
// In this example, fetchData simulates an asynchronous operation (like fetching data from a server).
// It takes a callback function as an argument, which is called once the data is "fetched".
// The displayData function is passed as a callback to handle the fetched data.


// Summary
// Functions are reusable blocks of code that perform specific tasks.
// They can take parameters, return values, and can be defined in various ways (declaration, expression, arrow functions).
// Understanding functions is essential for writing modular and maintainable JavaScript code.S
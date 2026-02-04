// "use strict";

const user = {
    name: "Alice",
    age: 30,
    // Method using regular function
    greet: function () {
        console.log("Hello, " + this.name);// 'this' refers to the user object
        console.log(this);

    }
};

user.greet(); // Hello, Alice
user.name = "Bob";
user.greet(); // Hello, Bob


console.log(this);  // output {} // In a browser, this refers to the Window object in the global scope 

function one() {
    let username = "Charlie";
    console.log(this);
    console.log(this.username); // undefined

}

one(); // In non-strict mode, this would be the global object; in strict mode, undefined



// Arrow function does not have its own 'this'
const user2 = {
    name: "David",
    age: 25,
    // Method using arrow function
    greet: () => {
        console.log("Hello, " + this.name); // 'this' does not refer to user2 object
        console.log(this);
    }
};

user2.greet(); // Hello, undefined

// Explanation:
// In the greet method of user2, we used an arrow function.
// Arrow functions do not have their own 'this'; they inherit 'this' from the surrounding lexical context.
// In this case, the surrounding context is the global scope, where 'this' does not have a 'name' property,
// resulting in undefined.
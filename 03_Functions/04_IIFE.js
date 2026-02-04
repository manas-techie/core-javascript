// Immediately Invoked Function Expression (IIFE)

(function dbconnect() { //name iife
    console.log("Connecting to the database...");
})();

// Explanation:
// An IIFE is a function that is defined and immediately invoked (called) right after its creation.
// It is often used to create a new scope and avoid polluting the global namespace.
// In this example, the function greet is defined and immediately executed, printing "Hello from IIFE!" to the console.


((name) => {   
    console.log(`Hello, ${name}! Welcome to IIFE example.`);
})("Alice");

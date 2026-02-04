// if else statement example

let number = 7;

if (number > 0) {
    console.log(number + " is a positive number.");
} else if (number < 0) {
    console.log(number + " is a negative number.");
} else {
    console.log("The number is zero.");
}

// Explanation:
// The if-else statement allows you to execute different blocks of code based on certain conditions.
// In this example, we check if the variable 'number' is greater than, less than, or equal to zero,
// and print the corresponding message to the console.



// Ternary operator: condition ? expr1 : expr2;

let age = 20;

let accessMessage = (age >= 18) ? "Access granted" : "Access denied";

console.log(accessMessage); // Output: "Access granted"

age  >= 18 ? console.log("You are an adult.") : console.log("You are a minor.");
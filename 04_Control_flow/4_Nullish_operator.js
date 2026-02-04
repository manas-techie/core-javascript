// Nullish Coalescing Operator (??) in JavaScript

let userInput = null;
let defaultValue = "Default Value";

// Using ?? operator to assign default value if userInput is null or undefined
let finalValue = userInput ?? defaultValue;

console.log(finalValue); // Output: "Default Value"

// Example with undefined
userInput = undefined;
finalValue = userInput ?? defaultValue;
console.log(finalValue); // Output: "Default Value"

// Example with a valid value
userInput = "User Provided Value";
finalValue = userInput ?? defaultValue;
console.log(finalValue); // Output: "User Provided Value"

// Explanation:
// The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined.
// This is useful for providing default values without overriding other falsy values like 0, "", or false.
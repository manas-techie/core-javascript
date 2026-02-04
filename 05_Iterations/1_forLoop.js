// For loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// Looping through an array
const fruits = ["Apple", "Banana", "Cherry", "Date"];

for (let j = 0; j < fruits.length; j++) {
    console.log("Fruit: " + fruits[j]);
}

// Nested for loop
for (let i = 1; i <= 3; i++) {
    for (let k = 1; k <= 2; k++) {
        console.log("Outer loop iteration: " + i + ", Inner loop iteration: " + k);
    }
}

// Looping through a string
const str = "Hello";

for (let m = 0; m < str.length; m++) {
    console.log("Character at index " + m + ": " + str[m]);
}

// Using for loop with break and continue
for (let n = 0; n < 10; n++) {
    if (n === 5) {
        console.log("Breaking the loop at n = " + n);
        break; // exit the loop when n is 5
    }
    if (n % 2 === 0) {
        console.log("Skipping even number: " + n);
        continue; // skip even numbers
    }
    console.log("Current number: " + n);
}

// Summary
// The for loop is a fundamental control structure in JavaScript that allows you to repeat a block of code a specified number of times.
// It is commonly used for iterating over arrays, strings, and performing repetitive tasks with a known iteration count.
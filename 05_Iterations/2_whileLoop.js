// While loop
let i = 0;
while (i < 5) {
    console.log("While loop iteration: " + i);
    i++;
}

// Looping through an array using while loop
const colors = ["Red", "Green", "Blue", "Yellow"];
let j = 0;

while (j < colors.length) {
    console.log("Color: " + colors[j]);
    j++;
}

// Nested while loop
let outer = 1;
while (outer <= 3) {
    let inner = 1;
    while (inner <= 2) {
        console.log("Outer loop: " + outer + ", Inner loop: " + inner);
        inner++;
    }
    outer++;
}

// While loop with break and continue
let k = 0;
while (k < 10) {
    if (k === 5) {
        console.log("Breaking the loop at k = " + k);
        break; // exit the loop when k is 5
    }
    if (k % 2 === 0) {
        console.log("Skipping even number: " + k);
        k++;
        continue; // skip even numbers
    }
    console.log("Current number: " + k);
    k++;
}

// Summary
// The while loop is a fundamental control structure in JavaScript that allows you to repeat a block of code as long as a specified condition is true.
// It is commonly used for iterating over arrays, performing repetitive tasks when the number of iterations is not known beforehand, and controlling flow with break and continue statements.
// do while loop in JavaScript

let count = 0;
do {
    console.log("Do-While loop iteration: " + count);
    count++;
} while (count < 5);

// Looping through an array using do-while loop
const animals = ["Dog", "Cat", "Elephant", "Giraffe"];
let index = 0;

do {
    console.log("Animal: " + animals[index]);
    index++;
} while (index < animals.length);

// Nested do-while loop
let outerCount = 1;
do {
    let innerCount = 1;
    do {
        console.log("Outer count: " + outerCount + ", Inner count: " + innerCount);
        innerCount++;
    } while (innerCount <= 2);
    outerCount++;
} while (outerCount <= 3);

// Do-while loop with break and continue
let num = 0;
do {
    if (num === 5) {
        console.log("Breaking the loop at num = " + num);
        break; // exit the loop when num is 5
    }
    if (num % 2 === 0) {
        console.log("Skipping even number: " + num);
        num++;
        continue; // skip even numbers
    }
    console.log("Current number: " + num);
    num++;
} while (num < 10);

// Summary
// The do-while loop is a control structure in JavaScript that allows you to repeat a block of code at least once, and then continue repeating it as long as a specified condition is true.
// It is useful when you want to ensure that the code block is executed at least once, regardless of the condition.
// Operator in js

// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition: ", a + b);   // 15
console.log("Subtraction: ", a - b);    // 5
console.log("Multiplication: ", a * b);

console.log("Division: ", a / b);    // 2
console.log("Modulus: ", a % b);     // 0
console.log("Exponentiation: ", a ** b); // 100000

// Assignment Operators
let c = 20;
console.log("Initial value of c: ", c); // 20

c += 5; // c = c + 5
console.log("After += 5: ", c); // 25

c -= 3; // c = c - 3
console.log("After -= 3: ", c); // 22

c *= 2; // c = c * 2
console.log("After *= 2: ", c); // 44

c /= 4; // c = c / 4
console.log("After /= 4: ", c); // 11

c %= 3; // c = c % 3
console.log("After %= 3: ", c); // 2

// Comparison Operators
let x = 10;
let y = "10";

console.log("x == y: ", x == y);   // true (value equality)
console.log("x === y: ", x === y); // false (type and value equality)
console.log("x != y: ", x != y);   // false
console.log("x !== y: ", x !== y); // true
console.log("x > 5: ", x > 5);     // true
console.log("x < 5: ", x < 5);     // false
console.log("x >= 10: ", x >= 10); // true
console.log("x <= 10: ", x <= 10); // true

// Logical Operators
let p = true;
let q = false;

console.log("p && q: ", p && q); // false
console.log("p || q: ", p || q); // true
console.log("!p: ", !p);       // false

// Increment and Decrement Operators
let count = 0;

console.log("Initial count: ", count); // 0
console.log("Post-increment: ", count++); // 0 (returns 0, then increments)
console.log("After post-increment: ", count); // 1

console.log("Pre-increment: ", ++count); // 2 (increments first, then returns)
console.log("After pre-increment: ", count); // 2

console.log("Post-decrement: ", count--); // 2 (returns 2, then decrements)
console.log("After post-decrement: ", count); // 1

console.log("Pre-decrement: ", --count); // 0 (decrements first, then returns)
console.log("After pre-decrement: ", count); // 0

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote: ", canVote); // Yes

// Typeof Operator
console.log("Type of a: ", typeof a); // number
console.log("Type of b: ", typeof b); // number
console.log("Type of p: ", typeof p); // boolean
console.log("Type of q: ", typeof q); // boolean
console.log("Type of canVote: ", typeof canVote); // string

// Summary
// JavaScript provides a variety of operators to perform different operations on data.
// Understanding these operators is essential for effective programming in JavaScript.  

// bitwise operators
let m = 5;
let n = 3;

console.log("Bitwise AND (m & n): ", m & n); // 1 // 0101 & 0011 = 0001
console.log("Bitwise OR (m | n): ", m | n);  // 7 // 0101 | 0011 = 0111
console.log("Bitwise XOR (m ^ n): ", m ^ n); // 6 // 0101 ^ 0011 = 0110
console.log("Bitwise NOT (~m): ", ~m);       // -6 // ~0101 = 1010 (in 32-bit signed integer representation)
console.log("Left Shift (m << 1): ", m << 1); // 10 // 0101 << 1 = 1010
console.log("Right Shift (m >> 1): ", m >> 1); // 2     // 0101 >> 1 = 0010
console.log("Unsigned Right Shift (m >>> 1): ", m >>> 1); // 2   // 0101 >>> 1 = 0010
// diff between unsigned right shift and right shift is that unsigned right shift fills leftmost bits with 0s whereas right shift fills leftmost bits with sign bit (0 for positive, 1 for negative)
// Note: Bitwise operators treat their operands as a sequence of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers.
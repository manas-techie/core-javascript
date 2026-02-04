let score = "100";

// Converting string to number
let numericScore = Number(score);
console.log("Converted to Number:", numericScore); // 100
console.log("Type after conversion:", typeof numericScore); // "number"

// Converting number back to string
let stringScore = String(numericScore);
console.log("Converted back to String:", stringScore); // "100"
console.log("Type after conversion:", typeof stringScore); // "string"

// Using parseInt and parseFloat
let floatString = "99.99";
let intFromString = parseInt(floatString);
let floatFromString = parseFloat(floatString);
console.log("Parsed Integer:", intFromString); // 99
console.log("Parsed Float:", floatFromString); // 99.99

// Implicit conversion
let implicitConversion = "The score is: " + numericScore;
console.log(implicitConversion); // "The score is: 100"
console.log("Type after implicit conversion:", typeof implicitConversion); // "string"

// Boolean conversion
let isPassed = Boolean(numericScore);
console.log("Converted to Boolean:", isPassed); // true
console.log("Type after conversion:", typeof isPassed); // "boolean"

// Edge cases
let emptyString = "";
let zeroNumber = 0;
console.log("Empty String to Number:", Number(emptyString)); // 0
console.log("Zero Number to Boolean:", Boolean(zeroNumber)); // false       

let invalidNumber = "abc";
console.log("Invalid String to Number:", Number(invalidNumber)); // NaN
console.log("Type of NaN:", typeof Number(invalidNumber)); // "number"
console.log("Is NaN:", isNaN(Number(invalidNumber))); // true

// Converting null and undefined
console.log("Null to Number:", Number(null)); // 0
console.log("Undefined to Number:", Number(undefined)); // NaN
console.log("Null to Boolean:", Boolean(null)); // false
console.log("Undefined to Boolean:", Boolean(undefined)); // false  
console.log("Null to String:", String(null)); // "null"
console.log("Undefined to String:", String(undefined)); // "undefined"     

// NaN is a special numeric value that stands for "Not-a-Number". It is the result of invalid or undefined mathematical operations, such as converting a non-numeric string to a number.
console.log("NaN Example:", NaN);
console.log("Type of NaN:", typeof NaN); // "number"
console.log("Is NaN equal to NaN?:", NaN === NaN); // false 
console.log("Is NaN using isNaN function?:", isNaN(NaN)); // true   

// Note: Always be cautious when dealing with type conversions in JavaScript, as implicit conversions can lead to unexpected results. It is often best to use explicit conversion functions like Number(), String(), and Boolean() to ensure the desired type.
//"33" => 33 (Number)
//"33abc" => NaN (Number)
//"true" => 1 (Number)
//"false" => 0 (Number)
//"undefined" => NaN (Number)
//null => 0 (Number)

// ************** Operation Examples ****************
console.log("Operation Examples:");
console.log('"5" + 3 =', "5" + 3); // "53" (String concatenation)
console.log('"5" - 3 =', "5" - 3); // 2 (Number subtraction)
console.log('"5" * 2 =', "5" * 2); // 10 (Number multiplication)
console.log('"10" / 2 =', "10" / 2); // 5 (Number division)
console.log('"10" > 5 =', "10" > 5); // true (Number comparison)
console.log('"10" == 10 =', "10" == 10); // true (loose equality, type coercion)
console.log('"10" === 10 =', "10" === 10); // false (strict equality, no type coercion)
console.log('Boolean("hello") =', Boolean("hello")); // true
console.log('Boolean("") =', Boolean("")); // false
console.log('Boolean(1) =', Boolean(1)); // true
console.log('Boolean(0) =', Boolean(0)); // false
console.log('Number(true) =', Number(true)); // 1
console.log('Number(false) =', Number(false)); // 0
console.log('String(123) =', String(123)); // "123" 
console.log('String(null) =', String(null)); // "null"
console.log('String(undefined) =', String(undefined)); // "undefined"
// These examples illustrate how JavaScript handles type conversions in various operations.

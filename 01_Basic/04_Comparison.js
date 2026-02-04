console.log("2">1);
console.log("2"<1);

console.log(null>0); // false
console.log(null<0); // false
console.log(null==0); // false because null is only equal to undefined
console.log(null==undefined); // true
console.log(null>=0); // true because null is converted to 0 and 0>=0 is true 

console.log(undefined==0); // false
console.log(undefined>0); // false
console.log(undefined<0); // false

console.log(NaN==NaN); // false
console.log(NaN===NaN); // false    
console.log(isNaN(NaN)); // true

console.log("5">"2"); // true
console.log("5"<"12"); // false because "1" is less than "5" in lexicographical order

// === vs ==
// === checks for both value and type equality
console.log(0===false); // false
console.log(0==false); // true

console.log("5"===5); // false
console.log("5"==5); // true

console.log(null===undefined); // false
console.log(null==undefined); // true

// Summary
// Use === and !== for strict equality checks to avoid unexpected type coercion.
// Be cautious with comparisons involving null, undefined, and NaN, as they can lead to unintuitive results.
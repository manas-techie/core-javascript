// Arrays
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(typeof fruits); // "object"
console.log(Array.isArray(fruits)); // true

let heros = new Array('Superman', 'Batman', 'Spiderman');
console.log(typeof heros); // "object"
console.log(Array.isArray(heros)); // true

console.log(fruits); // ['Apple', 'Banana', 'Cherry']

// Accessing elements
console.log(fruits[0]); // 'Apple'
console.log(fruits[1]); // 'Banana'
console.log(fruits[2]); // 'Cherry'

// Array length
console.log(fruits.length); // 3

// Adding elements
fruits.push('Date');
console.log(fruits); // ['Apple', 'Banana', 'Cherry', 'Date']

// Removing elements
let removedFruit = fruits.pop();
console.log(removedFruit); // 'Date'
console.log(fruits); // ['Apple', 'Banana', 'Cherry']

// Iterating over an array
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// js arrays are resizable and can hold elements of different types
let mixedArray = [42, 'Hello', true, null, { name: 'Alice' }, [1, 2, 3]];
console.log(mixedArray);
console.log("Length of mixedArray:", mixedArray.length);

// Accessing elements in mixedArray
console.log(mixedArray[0]); // 42
console.log(mixedArray[1]); // 'Hello'
console.log(mixedArray[4].name); // 'Alice'
console.log(mixedArray[5][1]); // 2

// method in arrays
console.log("Index of 'Banana':", fruits.indexOf('Banana')); // 1
console.log("Includes 'Cherry':", fruits.includes('Cherry')); // true

fruits.unshift('Mango'); // add to the beginning
console.log(fruits); // ['Mango', 'Apple', 'Banana', 'Cherry']

fruits.shift(); // remove from the beginning
console.log(fruits); // ['Apple', 'Banana', 'Cherry']       


// join()
let newHeros = heros.join("-");
console.log(typeof newHeros); // string
console.log(newHeros); // "Superman-Batman-Spiderman"

// slice and splice
let citrus = ['Lemon', 'Orange', 'Grapefruit', 'Lime'];
let citrusSlice = citrus.slice(1, 3); // from index 1 to 3 (not including 3)
console.log(citrusSlice); // ['Orange', 'Grapefruit']

citrus.splice(2, 1, 'Mandarin'); // at index 2, remove 1 element and add 'Mandarin'
console.log(citrus); // ['Lemon', 'Orange', 'Mandarin', 'Lime']

const numbers = [1, 2, 3, 4, 5];
const partnum = numbers.slice(1, 4); // from index 1 to 4 (not including 4)
console.log(partnum); // [2, 3, 4]
console.log(numbers); // [1, 2, 3, 4, 5]

const partnum2 = numbers.splice(1, 4); // at index 1, remove 4 elements
console.log(partnum2); // [2, 3, 4, 5]
console.log(numbers); // [1]

// splice vs slice
// slice does not modify the original array, while splice does.

// merge partnum and partnum2
const mergedArray = partnum.concat(partnum2);
console.log(mergedArray); // [2, 3, 4, 5, 2, 3, 4, 5]

// spread 
const mergedArray2 = [...partnum, ...partnum2];
console.log(mergedArray2); // [2, 3, 4, 5, 2, 3, 4, 5]

const arr = [10, 20, 30, 40, [23, 45, 67], 77, [87, 98, 90, [78, 78]], 50];
const flatArr = arr.flat(2); // flattening nested arrays up to depth 2
console.log(flatArr); // [10, 20, 30, 40, 23, 45, 67, 77, 87, 98, 90, 78, 78, 50]


console.log(Array.from("Manas")); // ['M', 'a', 'n', 'a', 's']

let score1 = 34;
let score2 = 67;
let score3 = 89;

let scoresArray = Array.of(score1, score2, score3);
console.log(scoresArray); // [34, 67, 89]

// Summary
// This code demonstrates the creation and manipulation of arrays in JavaScript,
// including accessing elements, checking length, adding/removing elements, and iterating over the array.
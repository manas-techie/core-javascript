//Stack Memory(Primitives) vs Heap Memory (Non-Primitives)

// Stack Memory
// Stack memory is used for static memory allocation and the execution of a thread. 
// It stores primitive data types (like numbers, strings, booleans)
// Stack memory is faster to access but has a limited size.

let a = 10; // 'a' is stored in stack memory
let b = 20; // 'b' is stored in stack memory

function add(x, y) { // 'x' and 'y' are stored in stack memory
    return x + y;
}

console.log(add(a, b)); // Outputs: 30

// Heap Memory
// Heap memory is used for dynamic memory allocation. 
// It stores objects, arrays, and functions. 
// Heap memory is larger but slower to access compared to stack memory.

let obj1 = { name: "Alice" }; // 'obj1' reference is stored in stack, object is in heap
let obj2 = obj1; // 'obj2' reference is stored in stack, points to same object in heap

obj2.name = "Bob"; // Modifying the object in heap

console.log(obj1.name); // Outputs: "Bob" - both obj1 and obj2 point to the same object in heap

// Summary
// Stack memory is used for static data and function calls, while heap memory is used for dynamic data like objects and arrays.
// Stack memory gives copies of primitive types, whereas heap memory gives references to objects.


let str = "Hello, World!";
let str2 = str; // str2 gets a copy of the value in stack memory
str2 = "Hello, Universe!"; // Modifying str2 does not affect str

console.log(str); // Outputs: "Hello, World!"
console.log(str2); // Outputs: "Hello, Universe!"

let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 gets a reference to the same array in heap memory
arr2.push(4); // Modifying arr2 affects arr1 since both reference the same array

console.log(arr1); // Outputs: [1, 2, 3, 4]
console.log(arr2); // Outputs: [1, 2, 3, 4]

// Important Note:
// When dealing with non-primitive data types (objects, arrays), be cautious as multiple references can lead to unintended side effects when one reference modifies the data.   
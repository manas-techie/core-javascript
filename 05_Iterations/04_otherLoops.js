// for of loop 

const languages = ["JavaScript", "Python", "Java", "C++"];

for (const lang of languages) {
    console.log("Language: " + lang);
}

// Looping through a string using for...of
const message = "Hello";

for (const char of message) {
    console.log("Character: " + char);
}

// Looping through a Map using for...of
const userRoles = new Map();
userRoles.set("Alice", "Admin");
userRoles.set("Bob", "Editor");
userRoles.set("Charlie", "Viewer");

for (const [user, role] of userRoles) {
    console.log(user + " has role: " + role);
}

// Summary
// The for...of loop is a modern iteration construct in JavaScript that allows you to loop through iterable objects such as arrays, strings, Maps, and more.
// It provides a clean and concise syntax for accessing each element directly without needing to manage an index variable.


// for in loop
const person = {
    name: "Eve",
    age: 28,
    city: "New York"
};

for (const key in person) {
    console.log(key + ": " + person[key]);
}

// Looping through an array using for...in (not recommended for arrays)
const numbers = [10, 20, 30, 40];

for (const index in numbers) {
    console.log("Index " + index + ": " + numbers[index]);
}

// The for...in loop is used to iterate over the enumerable properties of an object.
// It is generally not recommended for arrays, as it iterates over all enumerable properties, including inherited ones, which can lead to unexpected results like iterating over non-numeric keys , example: custom properties added to the array object.
// example :
numbers.customProperty = "I am a custom property";

for (const index in numbers) {
    console.log("Index " + index + ": " + numbers[index]);
}

// Summary
// The for...in loop is primarily used for iterating over the properties of an object.
// While it can be used with arrays, it is not ideal due to potential issues with inherited properties and non-numeric keys.




// for each loop
const cities = ["London", "Paris", "New York", "Tokyo"];

cities.forEach(function (city, index) {
    console.log("City " + index + ": " + city);
});

// Using arrow function with forEach
cities.forEach((city, index) => {
    console.log(`City ${index}: ${city}`);
});


// Looping through an array of objects using forEach
const arr = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
]

arr.forEach(item => {
    console.log(`ID: ${item.id}, Name: ${item.name}`);
});

// Summary
// The forEach method is an array-specific iteration method in JavaScript that allows you to execute a provided function once for each array element.
// It provides a clean and functional way to iterate over arrays without the need for traditional loop constructs.
// Singleton Object 


const mySym = Symbol("Key1");

// object literals
const person = {
    name: "John",
    age: 30,
    [mySym]: "key1", // symbol as key [] use for computed property names and expressions
    greet: function () {
        console.log("Hello, " + this.name);
    }
};

console.log(person.name); // John
person.greet(); // Hello, John
console.log(person["name"]); // John
console.log(person["age"]); // 30
console.log(person[mySym]); // key1
console.log(typeof mySym);
console.log(typeof person.greet); // function

// Adding new property
person.city = "New York";
console.log(person.city); // New York

// Deleting property
// delete person.age;
// console.log(person.age); // undefined

// Object methods
console.log("Keys:", Object.keys(person)); // ["name", "greet", "city", Symbol(Key1)]
console.log("Values:", Object.values(person)); // ["John", function, "New York", "key1"]
console.log("Entries:", Object.entries(person)); // [["name", "John"], ["greet", function], ["city", "New York"], [Symbol(Key1), "key1"]]
console.log("Has name:", person.hasOwnProperty("name")); // true
console.log("Has age:", person.hasOwnProperty("lastName")); // false

// Object immutability

person.age = 31; // updating age
Object.freeze(person); // making object immutable
person.age = 32; // this will not change the age
console.log(person.age); // 31

// Object Constructor
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getInfo = function () {
        return this.year + " " + this.make + " " + this.model;
    };
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getInfo()); // 2020 Toyota Corolla

// Object.create
const animal = {
    speak: function () {
        console.log(this.name + " makes a noise.");
    }
};

const dog = Object.create(animal);
dog.name = "Rex";
dog.speak(); // Rex makes a noise.


const someuse = {
    email: "some@gmmail.com",
    userName: {
        userFullName: {
            firstName: "Some",
            lastName: "User"
        }
    }
}

console.log(someuse.userName.userFullName.firstName); // Some
console.log(someuse.userName1?.userFullName.lastName); // undefined (using optional chaining to avoid error)


// merge two objects
const obj1 = {
    1: "one",
    2: "two",
    3: "three"
}

const obj2 = {
    a: "alpha",
    b: "beta",
    c: "gamma"
}

const obj4 = { obj1, obj2 };
console.log(obj4);
// { obj1: { '1': 'one', '2': 'two', '3': 'three' }, obj2: { a: 'alpha', b: 'beta', c: 'gamma' } }

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
// { '1': 'one', '2': 'two', '3': 'three', a: 'alpha', b: 'beta', c: 'gamma' }

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
// { '1': 'one', '2': 'two', '3': 'three', a: 'alpha', b: 'beta', c: 'gamma' }


const users = [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" }
];

console.log(users[1].name); // User2
console.log(users[2].id); // 3


// Summary
// This code demonstrates the creation and use of objects in JavaScript using different methods:
// singleton object, object constructor, and Object.create.

// 4.21
// Destructuring objects

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 31,
    city: "New York"
};

// Destructuring assignment
const { firstName, lastName, age, city } = person;
console.log(firstName); // John
console.log(lastName);  // Doe
console.log(age);       // 31
console.log(city);      // New York

// Nested object destructuring
const employee = {
    id: 101,
    name: {
        first: "Jane",
        last: "Smith"
    },
    position: "Developer"
};

const { name: { first: empFirstName, last: empLastName }, position } = employee;
console.log(empFirstName); // Jane
console.log(empLastName);  // Smith
console.log(position);     // Developer

// Function parameter destructuring
function displayPerson({ firstName, lastName, age }) {
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}

displayPerson(person); // Name: John Doe, Age: 31

// Merging objects using spread operator
const address = {
    street: "123 Main St",
    city: "New York",
    country: "USA"
};

const mergedPerson = { ...person, ...address };
console.log(mergedPerson);

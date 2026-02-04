// reduce()

const myNumbers = [10, 20, 30, 40];

// Using reduce to calculate the sum of all numbers in the array
const sum = myNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator

console.log("Sum of all numbers:", sum);

// Using reduce to find the maximum number in the array
const maxNumber = myNumbers.reduce((max, currentValue) => {
    return currentValue > max ? currentValue : max;
}, myNumbers[0]); // Initial value is the first element of the array

console.log("Maximum number:", maxNumber);

// Using reduce to flatten an array of arrays
const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = arrayOfArrays.reduce((accumulator, currentArray) => {
    return accumulator.concat(currentArray);
}, []); // Initial value is an empty array

console.log("Flattened array:", flattenedArray);


const shoppingCart = [
    { item: "Laptop", price: 1000, quantity: 1 },
    { item: "Phone", price: 500, quantity: 2 },
    { item: "Tablet", price: 300, quantity: 3 }
];


const totalPrice = shoppingCart.reduce((total, currItem) => {
    return total + (currItem.price * currItem.quantity);
}, 0);

console.log(totalPrice);

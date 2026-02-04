const cities = ["London", "Paris", "New York", "Tokyo"];

const values = cities.forEach((item) => {
    // console.log(item);
    return item; // This return value is ignored by forEach because forEach does not collect return values
})

console.log(values); // Output: undefined because forEach does not return anything

// filter() method creates a new array with all elements that pass the test implemented by the provided function.
const myNumbers = [10, 20, 30, 40];

const newValues = myNumbers.filter((num) => {  //Explicit return
    return num > 20;
})

console.log(newValues);


const books = [
    { title: "Book One", author: "Author A", rating: 4.5 },
    { title: "Book Two", author: "Author B", rating: 3.8 },
    { title: "Book Three", author: "Author C", rating: 4.2 },
    { title: "Book Four", author: "Author D", rating: 5.0 },
    { title: "Book Five", author: "Author E", rating: 2.9 }
]

const userBook = books.filter((book) => book.rating >= 4.0) //implicit return

console.log(userBook);
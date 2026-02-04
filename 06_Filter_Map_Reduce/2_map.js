const myNumbers = [10, 20, 30, 40];

const doubledValues = myNumbers.map((num) => {  //Explicit return
    return num * 2;
})

console.log(typeof (doubledValues));

console.log(doubledValues);

// different between map and filter is that map returns modified values of all the elements where as filter returns only those elements which satisfy the given condition
const books = [
    { title: "Book One", author: "Author A", rating: 4.5 },
    { title: "Book Two", author: "Author B", rating: 3.8 },
    { title: "Book Three", author: "Author C", rating: 4.2 },
    { title: "Book Four", author: "Author D", rating: 5.0 },
    { title: "Book Five", author: "Author E", rating: 2.9 }
]

// Using map to extract titles of all books
const bookTitles = books.map((book) => book.title); // implicit return

console.log(bookTitles);

// Using filter to get books with rating >= 4.0
const highRatedBooks = books.filter((book) => book.rating >= 4.0); // implicit return

console.log(highRatedBooks);


// chaining map and filter
myNumbers = [10, 20, 30, 40];

const newValues = myNumbers
                .map((num) => num + 5)
                .map((num) => num * 2)
                .filter((num) => num > 50);

console.log(newValues);
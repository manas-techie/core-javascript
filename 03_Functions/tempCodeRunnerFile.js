const user = {
    name: "Alice",
    age: 30,
    // Method using regular function
    greet: function () {
        console.log("Hello, " + this.name);// 'this' refers to the user object
        console.log(this);

    }
};

user.greet(); // Hello, Alice
user.name = "Bob";
user.greet(); // Hello, Bob
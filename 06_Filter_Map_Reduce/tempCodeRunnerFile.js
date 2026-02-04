const myNumbers = [10, 20, 30, 40];

const doubledValues = myNumbers.map((num) => {  //Explicit return
    return num * 2;
})

console.log(typeof (doubledValues));

console.log(doubledValues);
const myNumbers = [10, 20, 30, 40];

const nums = myNumbers.map((num) => {
    return num * 2; // This return value is collected by map
})

console.log(typeof(nums));

console.log(nums);
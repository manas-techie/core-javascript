// Truthy and falsy value in JS

// Falsy values: false, 0, "", null, undefined, NaN, -0,BigInt On,
// Everything else is truthy "0", "false", [], {}, function(){}, etc.

const obj = {};

if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}
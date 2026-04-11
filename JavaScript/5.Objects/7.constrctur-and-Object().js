//warp primitive values into objects

const num = 42;
const numObj = Object(num); // Creates an object wrapper for the number

console.log(numObj);
console.log(typeof numObj); // "object"

//using on undefined or null results in empty object

const newObj = new Object(undefined);
console.log(newObj); // {}

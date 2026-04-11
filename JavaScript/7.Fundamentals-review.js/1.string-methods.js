//To string

const num = 10;
console.log(num.toString()); // "10"

//The argument of the tostring

const num = 10;
console.log(num.toString(2)); // "1010"

//Joining arrays with toString

const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"

//Does not work on objects: use JSON.stringify

const person = {
  name: "John",
  age: 30,
  isStudent: true
};

console.log(person.toString()); // "[object Object]"

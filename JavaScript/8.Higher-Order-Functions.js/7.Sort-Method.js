//how it works:

array.sort(compareFunction);

//compareFnction is optional,

//turns it into Alphabetical order:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

//unpredictable to numbers:

const numbers = [414, 200, 5, 10, 3];
numbers.sort();

console.log(numbers); // [10, 200, 3, 414, 5]

//the solution to this, sorting numbers:

const numbers = [414, 200, 5, 10, 3];

numbers.sort((a, b) => a - b);

console.log(numbers); // [3, 5, 10, 200, 414]

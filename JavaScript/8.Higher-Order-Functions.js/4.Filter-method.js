//Filet accepts the same 3 arguements as map: Just like the map method, the callback function for the filter method accepts the same three arguments: the current element being processed, the index, and the array.

//removes elements that do not pass the test:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]

//If none pass the test empty array:

 const numbers = [2, 4, 6, 8].filter((num) => num > 10);

 //an array of objects example: 

console.log(numbers); // []

const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 }
];

const youngPeople = developers.filter((person) => person.age < 30);
console.log(youngPeople);

// [{ name: "Alice", age: 25 }, { name: "David", age: 25 }]

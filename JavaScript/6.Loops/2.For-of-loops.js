//for...of loops

for (variable of iterable) {
  // code block to be executed
}

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

//Console will print 1,2,3,4,5

const str = 'freeCodeCamp';

for (let char of str) {
  console.log(char);
}

//Console will print each character of the string

//Be cautios when using const

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
  num = num + 1; // This will cause an error
}

// using for of in array of objects:

const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 40 }
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}

// The first message will be John is 30 years old, the second message will be Jane is 25 years old, and the third message will be Jim is 40 years old.

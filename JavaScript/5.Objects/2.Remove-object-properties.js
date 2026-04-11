//use of delete example

const person = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

delete person.job;

console.log(person.job); // undefined

//making a new object without the specefied parameters

const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York"
};

const { job, city, ...remainingProperties } = person;

// { name: "Bob", age: 25 }
console.log(remainingProperties);

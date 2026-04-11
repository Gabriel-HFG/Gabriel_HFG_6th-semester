//what Json data looks like:
{
  "name": "Alice",
  "age": 30,
  "isStudent": false,
  "list of courses": ["Mathematics", "Physics", "Computer Science"]
}

//how to access JSON infomration:

import data from "./example.json" with { type: "json" };

console.log(data.age);

//accessing arrays:

import data from "./example.json" with { type: "json" };

console.log(data["list of courses"]);

//Turn Java data into JSON data:

const user = {
  name: "John",
  age: 30,
  isAdmin: true
};

const jsonString = JSON.stringify(user);
console.log(jsonString);

//Select specific data with stringify

const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

// result: {"firstName":"Jessica","country":"USA"}
console.log(JSON.stringify(developerObj, ["firstName", "country"]));

//JSON to JavaScript:

const jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);
console.log(userObject);

// Result:
// { name: 'John', age: 30, isAdmin: true }

//the ?. operator


const person = {
  name: "Alice",
  age: 30
};

console.log(person.name); // "Alice"
console.log(person.job); // undefined

const person = {
  name: "Alice",
  age: 30
};

console.log(person.address.street); // This will throw an error!

const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Somewhere"
    }
  }
};

console.log(user?.profile?.address?.street); // "123 Main St"
console.log(user?.profile?.phone?.number);   // undefined

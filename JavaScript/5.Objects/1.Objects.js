//what it looks like

const exampleObject = {
  propertyName: value,
}

//an example

const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

//how to access object (or block) information:

const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log(person.name);  // Alice
console.log(person.age);   // 30

//another way to do it

console.log(person["name"]); // Alice
console.log(person["age"]); //  30

//brackets are more flexible because you can use ilegal items

console.log(oddObject["1stProperty"]);  // Hello
console.log(oddObject["property with spaces"]);  // World

//you can also use variables

let propertyName = "city";
console.log(person[propertyName]); // Wonderland

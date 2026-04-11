//Extracting values and assigmning them variables with the same name

const person = { name: "Alice", age: 30, city: "New York" };

const { name, age } = person;

console.log(name); // Alice
console.log(age);  // 30

//extracting values but assigning variables

let person = { name: "Alice", age: 30, city: "New York" };

let { name: personName, age: personAge } = person;

console.log(personName); // Alice
console.log(personAge); //  30

//set default values if they dont exist

let person = { name: "Alice", age: 30, city: "New York" };
let { name, age, country = "Unknown" } = person;

console.log(country); // Unknown

//Extracting from nested objects

const recipe = {
  name: "Chocolate Cake",
  ingredients: {
    flour: "2 cups",
    sugar: "1 cup"
  }
};

// Extract `flour` from `ingredients`
const { ingredients: { flour } } = recipe;

console.log(flour); // "2 cups"

//this is the equivalent of:

const flour = recipe.ingredients.flour;
console.log(flour); // "2 cups"

//Assign objects with functions:

function createPerson(name, age) {
  return { name, age };
}

let person = createPerson("Charlie", 35);
console.log(person); // { name: "Charlie", age: 35 }

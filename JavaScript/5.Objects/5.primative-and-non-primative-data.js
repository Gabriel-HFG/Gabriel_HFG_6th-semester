//primitive data, direct variables:

let num1 = 5;
let num2 = num1;
num1 = 10;

console.log(num2); // 5

//non-primative data

const originalPerson = { name: "John", age: 30 };
const copiedPerson = originalPerson;

originalPerson.age = 31;

console.log(copiedPerson.age); // 31
